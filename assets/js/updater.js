function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — in-app updater (v1.6.0): check live build, wipe SW cache, reload fresh. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U;
  var $ = OC.$;
  var I = OC.ui_icons;
  function toast(msg, kind) {
    if (OC.toast) OC.toast(msg, kind);
  }

  /* current build stamp from any script tag ?v=x.y.z.n */
  function currentVersion() {
    var tags = document.querySelectorAll("script[src*='?v=']");
    for (var i = 0; i < tags.length; i++) {
      var m = (tags[i].getAttribute("src") || "").match(/v=(\d+\.\d+\.\d+\.\d+)/);
      if (m) return m[1];
    }
    return "";
  }
  function shortVersion(v) {
    return String(v || "").split(".").slice(0, 3).join(".") || "—";
  }
  /* asset URLs referenced by the live index.html, rewritten to the live stamp */
  function collectAssets(html, stamp) {
    var out = [];
    var re = /(?:src|href)="([^"?]+\?v=)[^"]*"/g;
    var m;
    while (m = re.exec(html)) {
      if (out.indexOf(m[1] + stamp) < 0) out.push(m[1] + stamp);
    }
    return out;
  }
  /* fetch the live index.html (cache-busted) and compare stamps */
  function check() {
    return _check.apply(this, arguments);
  }
  /* nuclear-but-clean update: unregister SW → delete caches → reload cache-busted.
     The next load fetches index + assets from the network (fresh) and the SW
     re-installs in the background, restoring the offline shell. */
  function _check() {
    _check = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var res, html, stamps, live, current;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (location.protocol.startsWith("http")) {
              _context.n = 1;
              break;
            }
            throw new Error(t("updLocalDev"));
          case 1:
            _context.n = 2;
            return fetch("index.html?b=" + Date.now(), {
              cache: "no-store"
            });
          case 2:
            res = _context.v;
            if (res.ok) {
              _context.n = 3;
              break;
            }
            throw new Error(t("updCheckFailed") + " (HTTP " + res.status + ")");
          case 3:
            _context.n = 4;
            return res.text();
          case 4:
            html = _context.v;
            stamps = html.match(/v=\d+\.\d+\.\d+\.\d+/g) || [];
            if (stamps.length) {
              _context.n = 5;
              break;
            }
            throw new Error(t("updCheckFailed"));
          case 5:
            live = stamps[0].slice(2);
            current = currentVersion();
            return _context.a(2, {
              current: current,
              live: live,
              update: live !== current,
              assets: collectAssets(html, live)
            });
        }
      }, _callee);
    }));
    return _check.apply(this, arguments);
  }
  function apply(_x) {
    return _apply.apply(this, arguments);
  }
  /* progress modal + full flow; force=true updates even when stamps match */
  function _apply() {
    _apply = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(onStep) {
      var step, rs, i, ks, _i, _t, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            step = typeof onStep === "function" ? onStep : function () {};
            step(1, t("updStep1"));
            if (!navigator.serviceWorker) {
              _context2.n = 7;
              break;
            }
            _context2.p = 1;
            _context2.n = 2;
            return navigator.serviceWorker.getRegistrations();
          case 2:
            rs = _context2.v;
            i = 0;
          case 3:
            if (!(i < rs.length)) {
              _context2.n = 5;
              break;
            }
            _context2.n = 4;
            return rs[i].unregister();
          case 4:
            i++;
            _context2.n = 3;
            break;
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t = _context2.v;
          case 7:
            step(2, t("updStep2"));
            if (!(window.caches && caches.keys)) {
              _context2.n = 14;
              break;
            }
            _context2.p = 8;
            _context2.n = 9;
            return caches.keys();
          case 9:
            ks = _context2.v;
            _i = 0;
          case 10:
            if (!(_i < ks.length)) {
              _context2.n = 12;
              break;
            }
            _context2.n = 11;
            return caches.delete(ks[_i]);
          case 11:
            _i++;
            _context2.n = 10;
            break;
          case 12:
            _context2.n = 14;
            break;
          case 13:
            _context2.p = 13;
            _t2 = _context2.v;
          case 14:
            step(3, t("updStep3"));
            location.href = "index.html?b=" + Date.now() + (location.hash || "");
          case 15:
            return _context2.a(2);
        }
      }, _callee2, null, [[8, 13], [1, 6]]);
    }));
    return _apply.apply(this, arguments);
  }
  function run(_x2) {
    return _run.apply(this, arguments);
  }
  function _run() {
    _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(force) {
      var m, setStatus, setStep, res, cur, ok, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            m = OC.modal({
              title: t("updTitle"),
              body: '<div class="stack" style="gap:14px">' + '<div class="flex" style="align-items:center;gap:12px"><div class="bp-ring" id="upd-ring" style="width:52px;height:52px"><span class="bp-pct">…</span></div>' + '<div><b id="upd-status">' + t("updChecking") + '</b><div class="muted small" id="upd-detail"></div></div></div>' + '<div class="stack" style="gap:6px" id="upd-steps">' + [1, 2, 3].map(function (i) {
                return '<div class="bp-phase" id="upd-ph' + i + '"><span class="ph-dot">' + (OC.ui_icons && OC.ui_icons.check ? OC.ui_icons.check : "✓") + '</span><span>' + t("updStep" + i) + '</span><span style="flex:1"></span><span class="muted small" data-updph="' + i + '"></span></div>';
              }).join("") + "</div></div>",
              foot: [],
              lock: true
            });
            setStatus = function setStatus(s, d) {
              var a = $("#upd-status", m.body),
                b = $("#upd-detail", m.body);
              if (a) a.textContent = s;
              if (b) b.textContent = d || "";
            };
            setStep = function setStep(n, label) {
              var d = $('[data-updph="' + n + '"]', m.body);
              var ph = $("#upd-ph" + n, m.body);
              if (d) d.textContent = "●";
              if (ph) ph.className = "bp-phase active";
              setStatus(label || t("updStep" + n), "");
            };
            _context3.p = 1;
            _context3.n = 2;
            return check();
          case 2:
            res = _context3.v;
            cur = $("#upd-cur-v", m.body);
            setStatus(t("updChecking"), "v" + shortVersion(res.current) + " → v" + shortVersion(res.live));
            if (!(!res.update && !force)) {
              _context3.n = 3;
              break;
            }
            if (m.body) m.body.innerHTML = '<div style="text-align:center;padding:14px 4px">' + '<div style="font-size:30px">✅</div><b style="display:block;margin-top:8px">' + t("updLatest") + "</b>" + '<div class="muted small" style="margin-top:6px">v' + shortVersion(res.current) + " — " + t("updSynced") + "</div></div>" + '<div class="flex" style="justify-content:flex-end;margin-top:10px"><button class="btn" id="upd-close">' + t("close") + "</button>" + '<button class="btn" id="upd-force">' + I.refresh + t("updForce") + "</button></div>";
            $("#upd-close", m.body).onclick = function () {
              return m.close();
            };
            $("#upd-force", m.body).onclick = function () {
              return apply(function () {});
            };
            return _context3.a(2);
          case 3:
            /* update available → confirm then apply */
            m.close();
            _context3.n = 4;
            return OC.confirmDialog({
              title: t("updAvailTitle"),
              message: t("updAvailMsg") + " v" + shortVersion(res.current) + " → v" + shortVersion(res.live),
              okText: t("updApply")
            });
          case 4:
            ok = _context3.v;
            if (ok) {
              _context3.n = 5;
              break;
            }
            return _context3.a(2);
          case 5:
            _context3.n = 6;
            return apply(function (n, label) {
              setStep(n, label);
            });
          case 6:
            _context3.n = 8;
            break;
          case 7:
            _context3.p = 7;
            _t3 = _context3.v;
            if (m && m.close) m.close();
            toast(_t3.message || t("updCheckFailed"), "err");
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 7]]);
    }));
    return _run.apply(this, arguments);
  }
  OC.updater = {
    currentVersion: currentVersion,
    shortVersion: shortVersion,
    collectAssets: collectAssets,
    check: check,
    apply: apply,
    run: run
  };
})();