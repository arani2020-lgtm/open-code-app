/* Open Code — service worker: offline app shell. Designer: Abbas Sedigh */
const CACHE = "open-code-v2.0.2";
const CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/css/app.css",
  "assets/fonts/Vazirmatn-Variable.woff2",
  "assets/js/polyfills.js",
  "assets/js/regen.js",
  "assets/js/i18n.js",
  "assets/js/store.js",
  "assets/js/providers.js",
  "assets/js/markdown.js",
  "assets/js/zip.js",
  "assets/js/ui.js",
  "assets/js/ui-panels.js",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png",
  "assets/icons/favicon-32.png",
  "assets/icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  // same-origin core: cache-first with network refresh
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((hit) => {
        const fetching = fetch(e.request)
          .then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(e.request, copy));
            }
            return res;
          })
          .catch(() => hit);
        return hit || fetching;
      })
    );
    return;
  }
  // cross-origin API calls (providers, search): network only, no cache
});
