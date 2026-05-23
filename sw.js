// ⚠️ キャッシュの名前の引き出しも「DramaGen192」に統一
const CACHE_NAME = 'DramaGen192-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
