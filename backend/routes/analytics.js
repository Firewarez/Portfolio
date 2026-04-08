var express = require('express');
var router = express.Router();
var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

// Rate limiting: simple in-memory store
var ipHits = {};
var RATE_WINDOW = 60000; // 1 min
var RATE_LIMIT = 30;

function rateLimit(req, res, next) {
  var ip = req.ip || req.connection.remoteAddress;
  var now = Date.now();

  if (!ipHits[ip] || now - ipHits[ip].start > RATE_WINDOW) {
    ipHits[ip] = { start: now, count: 1 };
  } else {
    ipHits[ip].count++;
  }

  if (ipHits[ip].count > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  next();
}

// POST /api/analytics/pageview — track a page view
router.post('/pageview', rateLimit, async function (req, res) {
  try {
    var { path, referrer, screenW, screenH, language, sessionId } = req.body;

    if (!path || !sessionId) {
      return res.status(400).json({ error: 'path and sessionId are required' });
    }

    // Sanitize inputs
    var sanitized = {
      path: String(path).substring(0, 500),
      referrer: referrer ? String(referrer).substring(0, 1000) : null,
      userAgent: req.headers['user-agent'] ? String(req.headers['user-agent']).substring(0, 500) : null,
      screenW: typeof screenW === 'number' ? screenW : null,
      screenH: typeof screenH === 'number' ? screenH : null,
      language: language ? String(language).substring(0, 20) : null,
      sessionId: String(sessionId).substring(0, 100),
      device: parseDevice(req.headers['user-agent']),
      browser: parseBrowser(req.headers['user-agent']),
      os: parseOS(req.headers['user-agent']),
    };

    // Deduplicate: skip if same session+path was recorded in last 30 minutes
    var thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000);
    var existing = await prisma.pageView.findFirst({
      where: {
        sessionId: sanitized.sessionId,
        path: sanitized.path,
        createdAt: { gte: thirtyMinAgo },
      },
    });

    if (existing) {
      return res.status(200).json({ ok: true, id: existing.id, deduplicated: true });
    }

    var pageView = await prisma.pageView.create({ data: sanitized });

    res.status(201).json({ ok: true, id: pageView.id });
  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ error: 'Failed to record' });
  }
});

// GET /api/analytics/summary — basic dashboard data
router.get('/summary', async function (req, res) {
  try {
    var now = new Date();
    var thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    var sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    var [totalViews, last30Views, last7Views, uniqueSessions, topPages, browsers, devices, osSystems, referrers, languages, recentViews] = await Promise.all([
      prisma.pageView.count(),
      prisma.pageView.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      prisma.pageView.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
      prisma.pageView.groupBy({ by: ['sessionId'], _count: true }),
      prisma.pageView.groupBy({ by: ['path'], _count: { path: true }, orderBy: { _count: { path: 'desc' } }, take: 10 }),
      prisma.pageView.groupBy({ by: ['browser'], _count: { browser: true }, orderBy: { _count: { browser: 'desc' } }, take: 5 }),
      prisma.pageView.groupBy({ by: ['device'], _count: { device: true }, orderBy: { _count: { device: 'desc' } }, take: 5 }),
      prisma.pageView.groupBy({ by: ['os'], _count: { os: true }, orderBy: { _count: { os: 'desc' } }, take: 5 }),
      prisma.pageView.groupBy({ by: ['referrer'], where: { referrer: { not: null } }, _count: { referrer: true }, orderBy: { _count: { referrer: 'desc' } }, take: 10 }),
      prisma.pageView.groupBy({ by: ['language'], _count: { language: true }, orderBy: { _count: { language: 'desc' } }, take: 5 }),
      prisma.pageView.findMany({ where: { createdAt: { gte: thirtyDaysAgo } }, select: { createdAt: true }, orderBy: { createdAt: 'asc' } }),
    ]);

    // Build daily views for chart (last 14 days)
    var dailyMap = {};
    for (var i = 0; i < 14; i++) {
      var d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      dailyMap[d.toISOString().slice(0, 10)] = 0;
    }
    recentViews.forEach(function (v) {
      var day = v.createdAt.toISOString().slice(0, 10);
      if (dailyMap[day] !== undefined) dailyMap[day]++;
    });
    var dailyViews = Object.entries(dailyMap).sort().map(function (e) { return { date: e[0], views: e[1] }; });

    // Today's views
    var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var todayViews = recentViews.filter(function (v) { return v.createdAt >= todayStart; }).length;

    res.json({
      totalViews,
      last30Views,
      last7Views,
      todayViews,
      uniqueSessions: uniqueSessions.length,
      dailyViews,
      topPages: topPages.map(function (p) { return { path: p.path, views: p._count.path }; }),
      browsers: browsers.map(function (b) { return { name: b.browser, count: b._count.browser }; }),
      devices: devices.map(function (d) { return { name: d.device, count: d._count.device }; }),
      osSystems: osSystems.map(function (o) { return { name: o.os, count: o._count.os }; }),
      referrers: referrers.filter(function (r) { return r.referrer; }).map(function (r) { return { name: r.referrer, count: r._count.referrer }; }),
      languages: languages.map(function (l) { return { name: l.language, count: l._count.language }; }),
    });
  } catch (err) {
    console.error('Summary error:', err);
    res.status(500).json({ error: 'Failed to fetch summary', detail: err.message });
  }
});

// Simple UA parsing helpers
function parseDevice(ua) {
  if (!ua) return 'unknown';
  if (/mobile|android|iphone|ipad/i.test(ua)) return 'mobile';
  if (/tablet|ipad/i.test(ua)) return 'tablet';
  return 'desktop';
}

function parseBrowser(ua) {
  if (!ua) return 'unknown';
  if (/edg\//i.test(ua)) return 'Edge';
  if (/chrome/i.test(ua) && !/chromium/i.test(ua)) return 'Chrome';
  if (/firefox/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua) && !/chrome/i.test(ua)) return 'Safari';
  if (/opera|opr\//i.test(ua)) return 'Opera';
  return 'other';
}

function parseOS(ua) {
  if (!ua) return 'unknown';
  if (/windows/i.test(ua)) return 'Windows';
  if (/macintosh|mac os/i.test(ua)) return 'macOS';
  if (/linux/i.test(ua)) return 'Linux';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad/i.test(ua)) return 'iOS';
  return 'other';
}

module.exports = router;
