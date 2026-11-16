/* Open Code — silent auto-update on launch (v1.6.4)
   Checks version.json + live index stamp. Shows banner; one-tap applies.
   Does NOT embed any secrets. Designer: Abbas Sedigh */
(function () {
  if (!window.OC) window.OC = {};
  var BANNER_ID = "oc-update-banner";
  var STORAGE_SKIP = "oc-upd-skip";

  function currentStamp() {
    var tags = document.querySelectorAll("script[src*='?v=']");
    for (var i = 0; i < tags.length; i++) {
      var m = (tags[i].getAttribute("src") || "").match(/[?&]v=([\d.]+)/);
      if (m) return m[1];
    }
    var meta = document.querySelector('meta[name="oc-version"]');
    return meta ? meta.getAttribute("content") : "";
  }

  function shortV(v) {
    return String(v || "").split(".").slice(0, 3).join(".") || "—";
  }

  function cmp(a, b) {
    var pa = String(a || "0").split(".").map(Number);
    var pb = String(b || "0").split(".").map(Number);
    var n = Math.max(pa.length, pb.length);
    for (var i = 0; i < n; i++) {
      var x = pa[i] || 0, y = pb[i] || 0;
      if (x > y) return 1;
      if (x < y) return -1;
    }
    return 0;
  }

  function removeBanner() {
    var el = document.getElementById(BANNER_ID);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showBanner(info) {
    removeBanner();
    var skipped = "";
    try { skipped = localStorage.getItem(STORAGE_SKIP) || ""; } catch (e) {}
    if (skipped === info.live && !info.force) return;

    var bar = document.createElement("div");
    bar.id = BANNER_ID;
    bar.setAttribute("role", "status");
    bar.innerHTML =
      '<div class="oc-upd-inner">' +
      '<div class="oc-upd-text">' +
      '<b>نسخه جدید آماده است</b>' +
      '<span class="oc-upd-meta">v' + shortV(info.current) + " → v" + shortV(info.live) +
      (info.notes ? " · " + info.notes : "") + "</span>" +
      "</div>" +
      '<div class="oc-upd-actions">' +
      '<button type="button" class="oc-upd-later">بعداً</button>' +
      '<button type="button" class="oc-upd-now">به‌روزرسانی</button>' +
      "</div></div>";

    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add("show"); });

    bar.querySelector(".oc-upd-later").onclick = function () {
      try { localStorage.setItem(STORAGE_SKIP, info.live); } catch (e) {}
      bar.classList.remove("show");
      setTimeout(removeBanner, 280);
    };
    bar.querySelector(".oc-upd-now").onclick = function () {
      bar.querySelector(".oc-upd-now").disabled = true;
      bar.querySelector(".oc-upd-now").textContent = "در حال اعمال…";
      applyUpdate();
    };
  }

  function applyUpdate() {
    var done = function () {
      location.href = "index.html?b=" + Date.now() + (location.hash || "");
    };
    var chain = Promise.resolve();
    if (navigator.serviceWorker) {
      chain = chain.then(function () {
        return navigator.serviceWorker.getRegistrations();
      }).then(function (rs) {
        return Promise.all(rs.map(function (r) { return r.unregister(); }));
      }).catch(function () {});
    }
    if (window.caches && caches.keys) {
      chain = chain.then(function () {
        return caches.keys();
      }).then(function (ks) {
        return Promise.all(ks.map(function (k) { return caches.delete(k); }));
      }).catch(function () {});
    }
    chain.then(done).catch(done);
  }

  function checkSilent() {
    if (!location.protocol.startsWith("http")) return;
    var cur = currentStamp();
    fetch("version.json?b=" + Date.now(), { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("no version.json");
        return r.json();
      })
      .then(function (vj) {
        var live = vj.version || "";
        if (!live) return;
        if (cmp(live, cur) > 0) {
          showBanner({
            current: cur,
            live: live,
            force: !!vj.force,
            notes: (vj.notes && (vj.notes.fa || vj.notes.en)) || ""
          });
        }
      })
      .catch(function () {
        return fetch("index.html?b=" + Date.now(), { cache: "no-store" })
          .then(function (r) { return r.text(); })
          .then(function (html) {
            var m = html.match(/[?&]v=(\d+\.\d+\.\d+(?:\.\d+)?)/);
            if (!m) return;
            var live = m[1];
            if (cmp(live, cur) > 0) {
              showBanner({ current: cur, live: live, force: false, notes: "" });
            }
          })
          .catch(function () {});
      });
  }

  function watchSW() {
    if (!navigator.serviceWorker) return;
    navigator.serviceWorker.getRegistration().then(function (reg) {
      if (!reg) return;
      reg.addEventListener("updatefound", function () {
        var nw = reg.installing;
        if (!nw) return;
        nw.addEventListener("statechange", function () {
          if (nw.state === "installed" && navigator.serviceWorker.controller) {
            showBanner({
              current: currentStamp(),
              live: currentStamp() + "+",
              force: false,
              notes: "فایل‌های جدید دریافت شد"
            });
          }
        });
      });
      try { reg.update(); } catch (e) {}
    });
  }

  OC.autoUpdate = {
    check: checkSilent,
    apply: applyUpdate,
    currentStamp: currentStamp
  };

  function start() {
    setTimeout(function () {
      checkSilent();
      watchSW();
    }, 2500);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        setTimeout(checkSilent, 800);
      }
    });
  }

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
