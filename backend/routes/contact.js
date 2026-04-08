var express = require('express');
var router = express.Router();
var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

// Simple rate limit per IP
var ipHits = {};
var RATE_WINDOW = 60000;
var RATE_LIMIT = 5;

function rateLimit(req, res, next) {
  var ip = req.ip || req.connection.remoteAddress;
  var now = Date.now();

  if (!ipHits[ip] || now - ipHits[ip].start > RATE_WINDOW) {
    ipHits[ip] = { start: now, count: 1 };
  } else {
    ipHits[ip].count++;
  }

  if (ipHits[ip].count > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  next();
}

// POST /api/contact — receive contact form
router.post('/', rateLimit, async function (req, res) {
  try {
    var { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Sanitize length
    var sanitized = {
      name: String(name).substring(0, 200),
      email: String(email).substring(0, 300),
      message: String(message).substring(0, 5000),
    };

    var contact = await prisma.contactMessage.create({ data: sanitized });

    res.status(201).json({ ok: true, id: contact.id });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// GET /api/contact — list messages (could be protected later)
router.get('/', async function (req, res) {
  try {
    var messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json(messages);
  } catch (err) {
    console.error('Contact list error:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
