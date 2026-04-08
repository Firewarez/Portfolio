const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3001';

function getSessionId() {
  var key = 'portfolio_sid';
  var sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2);
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

export function trackPageView(path) {
  try {
    var payload = {
      path: path || window.location.pathname,
      referrer: document.referrer || null,
      screenW: window.screen.width,
      screenH: window.screen.height,
      language: navigator.language,
      sessionId: getSessionId(),
    };

    fetch(API_URL + '/api/analytics/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(function () {
      // silently fail — analytics should never block UX
    });
  } catch (e) {
    // silent
  }
}
