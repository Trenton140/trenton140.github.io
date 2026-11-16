/* Offline shell for the private trip app. Only the app's own static files are cached here: no trip data is in them. */
const V = 'jt26-shell-c7r2e901';
const ASSETS = ['./', 'index.html', 'css/app.css', 'js/store.js', 'js/app.js', 'manifest.webmanifest',
  'fonts/dot.woff2', 'fonts/zk-400.woff2', 'fonts/zk-700.woff2', 'fonts/zk-900.woff2', 'fonts/zk-400-ext.woff2', 'fonts/zk-700-ext.woff2', 'fonts/zk-900-ext.woff2',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  // Removes every older cache, including earlier versions that held the itinerary.
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return; // the backend is never cached
  e.respondWith(caches.open(V).then(c => c.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  })));
});
