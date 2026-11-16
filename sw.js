/* Open Code — service worker v2.6.0 */
const CACHE = "open-code-v2.6.0";
const CORE = [
  "./",
  "index.html",
  "version.json",
  "manifest.webmanifest",
  "assets/css/app.css",
  "assets/css/mobile.css",
  "assets/css/update-ui.css",
  "assets/fonts/Vazirmatn-Variable.woff2",
  "assets/js/polyfills.js",
  "assets/js/regen.js",
  "assets/js/i18n.js",
  "assets/js/store.js",
  "assets/js/providers.js",
  "assets/js/markdown.js",
  "assets/js/zip.js",
  "assets/js/connectors.js",
  "assets/js/ui.js",
  "assets/js/github.js",
  "assets/js/ui-github.js",
  "assets/js/ui-panels.js",
  "assets/js/ui-connect.js",
  "assets/js/ui-wizard.js",
  "assets/js/ui-build.js",
  "assets/js/updater.js",
  "assets/js/auto-update.js",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png",
  "assets/icons/favicon-32.png",
  "assets/icons/apple-touch-icon.png"
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
  if (url.origin !== location.origin) return;

  // Always network-first for version check + navigation
  if (e.request.mode === "navigate" || url.pathname.endsWith("version.json")) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((h) => h || caches.match("index.html")))
    );
    return;
  }

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
});
