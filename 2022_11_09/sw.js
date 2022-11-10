const PREFIX = "V1";
const CACHED_FILE = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
  "/offline.html"
];

self.addEventListener("install", (event) => {
  // Install immediately
  self.skipWaiting();
  // Puts offline.html in the cache
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      await cache.addAll(CACHED_FILE);
    })()
  );
  console.log(`${PREFIX} Install`);
});

self.addEventListener("activate", (event) => {
  // Activate immediately
  clients.claim();
  // Clear the cache of any other version of the webapp
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  console.log(`${PREFIX} Active`);
});

self.addEventListener("fetch", (event) => {
  console.log(
    `${PREFIX} Fetching: ${event.request.url}, Mode: ${event.request.mode}`
  );
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          return await fetch(event.request);
        } catch (error) {
          const cache = await caches.open(PREFIX);
          return await cache.match("/offline.html");
        }
      })()
    );
  }else if(CACHED_FILE.includes(event.request.url)){
    event.respondWith(caches.match(event.request))
  }
});
