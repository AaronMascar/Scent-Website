const CACHE_NAME = "scent-perfumes-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./Home/nav.css",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png"
];

self.addEventListener("install", function(installEvent) {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function(fetchEvent) {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(function(res) {
      return res || fetch(fetchEvent.request);
    })
  );
});