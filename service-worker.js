
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("riyadi-cell-pwa").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/logo_riyadi_cell.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
