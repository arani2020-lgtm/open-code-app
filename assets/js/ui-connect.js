function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — Connections hub UI: manage WordPress / Telegram / Rubika / Host links.
   Professional card layout, per-type editors, live test, attach-to-AI. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var $ = OC.$,
    $$ = OC.$$;
  var I = OC.ui_icons;
  function toast(msg, kind) {
    if (OC.toast) return OC.toast(msg, kind);
    console.log("[toast]", msg);
  }
  function esc(s) {
    return U.esc(s);
  }

  /* brand marks (inline, no external assets) */
  var MARKS = {
    wp: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 1.4a8.6 8.6 0 0 1 4.9 1.5h-.2c-.9 0-1.5.8-1.5 1.7 0 .6.3 1.1.6 1.7.3.5.5 1 .5 1.8 0 .6-.4 1.9-.7 2.4l-.9 3-3.3-9.8c.5 0 1-.1 1-.1.3 0 .2-.5-.1-.5 0 0-.9.1-1.5.1-.6 0-1.5-.1-1.5-.1-.3 0-.4.5 0 .5 0 0 .4.1.8.1l1.3 3.5-1.8 5.4-3-8.9c.4 0 .8.1.8.1.3 0 .3-.5-.1-.5 0 0-.9.1-1.4.1h-.4A8.6 8.6 0 0 1 12 3.4zM4.2 9.3l3.1 8.4c.1.3.2.5.3.7A8.6 8.6 0 0 1 3.4 12c0-1 .2-1.9.8-2.7zm10.9 5.6 1.4 4a.9.9 0 0 0 .2.3 8.6 8.6 0 0 1-4.5 1.6zm-9 3.4-3-8.2a8.6 8.6 0 0 0 4.9 8.3 1 1 0 0 1-.2-.4z"/></svg>',
    tg: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.6 19 19.3c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.5.4-.9.4l.3-4.6L18.4 7c.4-.3-.1-.5-.6-.2l-10.7 6.7-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.2 1.3z"/></svg>',
    rk: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0 0 20c1.7 0 3.2-.4 4.6-1.2l-2.1-2.1A6.9 6.9 0 0 1 12 19a7 7 0 1 1 7-7c0 .5 0 1-.1 1.4h1.9c.1-.5.2-.9.2-1.4A10 10 0 0 0 12 2zm-3 5.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zm6 0a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM9.4 14h5.2a1 1 0 0 1 0 2H9.4a1 1 0 0 1 0-2z"/></svg>',
    host: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01M10 6.5h4M10 17.5h4"/></svg>',
    gh: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.8A10.2 10.2 0 0 0 1.8 12a10.2 10.2 0 0 0 7 9.7c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.1-1.5-1.1-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 4-2.4 4.8-4.7 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22.2 12 10.2 10.2 0 0 0 12 1.8z"/></svg>'
  };
  var STATUS = {
    ok: {
      cls: "ok",
      label: "connStOk"
    },
    err: {
      cls: "err",
      label: "connStErr"
    },
    unknown: {
      cls: "unknown",
      label: "connStUnknown"
    }
  };
  function page(html) {
    OC.renderShell(html);
  }

  /* ================= type cards ================= */
  function typeCard(key) {
    var T = OC.connectors.TYPES[key];
    var n = OC.connectors.list().filter(function (c) {
      return c.type === key;
    }).length;
    if (key === "github") {
      var st = OC.github.state();
      var on = st.connected;
      return '<div class="conn-type-card' + (on ? " live" : "") + '">' + '<div class="ctc-mark gh">' + MARKS.gh + "</div>" + '<b>' + T.name + "</b>" + '<p>' + t(T.desc) + "</p>" + '<div class="ctc-foot"><span class="conn-dot ' + (on ? "ok" : "unknown") + '"></span>' + '<span class="small muted">' + (on ? st.user && st.user.login ? st.user.login : "connected" : t("connNotLinked")) + "</span>" + '<button class="btn btn-sm" id="ctc-github">' + t("connManage") + "</button></div></div>";
    }
    return '<div class="conn-type-card">' + '<div class="ctc-mark ' + key + '">' + MARKS[key] + "</div>" + "<b>" + T.name + "</b>" + "<p>" + t(T.desc) + "</p>" + '<div class="ctc-foot"><span class="small muted">' + (n ? U.faNum(String(n)) + " " + t("connCount") : "") + "</span>" + '<button class="btn btn-sm btn-primary" data-add="' + key + '">' + I.plus + t("connAdd") + "</button></div></div>";
  }

  /* ================= saved connection card ================= */
  function connCard(c) {
    var st = STATUS[c.status] || STATUS.unknown;
    var info = c.info || {};
    var meta = "";
    if (c.type === "wordpress") meta = esc(info.site || c.cfg.url || "");
    if (c.type === "telegram" || c.type === "rubika") meta = esc(info.bot || "");
    if (c.type === "host") meta = esc((c.cfg.url || "").replace(/^https?:\/\//, "").slice(0, 40));
    var T = OC.connectors.TYPES[c.type];
    var at = OC.connectors.attached();
    var isAt = at && at.id === c.id;
    return '<div class="conn-card">' + '<div class="cc-head"><span class="cc-mark ' + c.type + '">' + (MARKS[c.type] || "") + "</span>" + '<div class="cc-title"><b>' + esc(c.name) + "</b><span class='small muted' style='direction:ltr'>" + (meta || T.name) + "</span></div>" + '<span class="conn-pill ' + st.cls + '">' + t(st.label) + "</span></div>" + (info.user ? '<div class="small muted">' + esc(info.user) + (info.php ? " · PHP " + esc(info.php) : "") + "</div>" : "") + '<div class="cc-actions">' + '<button class="btn btn-sm" data-test="' + c.id + '">' + I.refresh + t("connTest") + "</button>" + '<button class="btn btn-sm btn-primary" data-attachc="' + c.id + '">' + I.bolt + (isAt ? t("connAttached") : t("connAttachAI")) + "</button>" + '<button class="btn btn-sm" data-edit="' + c.id + '">' + I.edit + t("edit") + "</button>" + '<button class="btn btn-sm btn-danger-ghost" data-del="' + c.id + '">' + I.trash + "</button>" + "</div></div>";
  }

  /* ================= page ================= */
  function render() {
    var saved = OC.connectors.list();
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("connTitle") + '</h2><p class="page-sub">' + t("connSub") + "</p>" + '<div class="conn-type-grid">' + ["wordpress", "telegram", "rubika", "host", "github"].map(typeCard).join("") + "</div>" + (saved.length ? '<h3 style="margin:18px 0 10px">' + t("connSavedList") + ' <span class="badge">' + U.faNum(String(saved.length)) + "</span></h3>" + '<div class="conn-grid">' + saved.map(connCard).join("") + "</div>" : '<div class="empty-state">' + I.plug + "<p>" + t("connEmpty") + "</p></div>") + '<div class="panel" style="margin-top:18px"><h3>' + I.key + " " + t("connSecTitle") + "</h3>" + '<p class="p-desc">' + t("connSecDesc") + "</p>" + '<ul style="margin:0;padding-inline-start:18px;color:rgb(var(--muted));font-size:13.5px">' + "<li>" + t("connSec1") + "</li><li>" + t("connSec2") + "</li><li>" + t("connSec3") + "</li>" + "</ul></div>" + "</div>");
    $$("[data-add]").forEach(function (b) {
      b.onclick = function () {
        return openEditor(b.dataset.add, null);
      };
    });
    var ghBtn = $("#ctc-github");
    if (ghBtn) ghBtn.onclick = function () {
      location.hash = "/github";
    };
    $$("[data-test]").forEach(function (b) {
      b.onclick = function () {
        return doTest(b.dataset.test, b);
      };
    });
    $$("[data-attachc]").forEach(function (b) {
      b.onclick = function () {
        try {
          OC.connectors.attach(b.dataset.attachc);
          if (OC.github) OC.github.detach();
          location.hash = "/chat";
          setTimeout(function () {
            if (OC.renderPending) OC.renderPending();
          }, 350);
          toast(t("connAttachedToast"), "ok");
        } catch (e) {
          toast(e.message, "err");
        }
      };
    });
    $$("[data-edit]").forEach(function (b) {
      b.onclick = function () {
        var c = OC.connectors.get(b.dataset.edit);
        if (c) openEditor(c.type, c);
      };
    });
    $$("[data-del]").forEach(function (b) {
      b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var c;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              c = OC.connectors.get(b.dataset.del);
              if (c) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.n = 2;
              return OC.confirmDialog({
                title: t("connDelete"),
                message: t("connDeleteConfirm").replace("{name}", c.name),
                danger: true
              });
            case 2:
              if (_context.v) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              OC.connectors.remove(c.id);
              if (OC.renderPending) OC.renderPending();
              render();
              toast(t("connDeleted"), "ok");
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }));
    });
  }
  function doTest(_x, _x2) {
    return _doTest.apply(this, arguments);
  }
  /* ================= editor modal ================= */
  function _doTest() {
    _doTest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id, btn) {
      var c, old, info, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            c = OC.connectors.get(id);
            if (c) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            btn.disabled = true;
            old = btn.innerHTML;
            btn.innerHTML = t("connTesting");
            _context3.p = 2;
            _context3.n = 3;
            return OC.connectors.test(c);
          case 3:
            info = _context3.v;
            c.status = "ok";
            c.lastCheck = Date.now();
            c.info = info;
            OC.connectors.save(c);
            toast(t("connTestOk"), "ok");
            render();
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t2 = _context3.v;
            c.status = "err";
            c.lastCheck = Date.now();
            OC.connectors.save(c);
            toast((_t2.message || t("connError")) + "", "err");
            render();
          case 5:
            if (btn && btn.isConnected) {
              btn.disabled = false;
              btn.innerHTML = old;
            }
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4]]);
    }));
    return _doTest.apply(this, arguments);
  }
  function fieldHTML(id, label, val, type, ph, ltr) {
    return '<div class="field"><label>' + label + "</label>" + '<input class="input" id="' + id + '" type="' + (type || "text") + '" value="' + esc(val || "") + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + (ltr ? ' style="direction:ltr"' : "") + "></div>";
  }
  function openEditor(type, existing) {
    var T = OC.connectors.TYPES[type];
    var cfg = existing && OC.connectors.cfgOf(existing) || {};
    var bodyHTML = "";
    var helpHTML = "";
    if (type === "wordpress") {
      bodyHTML = fieldHTML("ce-name", t("connName"), existing && existing.name, "text", t("connNamePh")) + fieldHTML("ce-url", t("connWpUrl"), cfg.url, "url", "https://example.com", true) + fieldHTML("ce-user", t("connWpUser"), cfg.user, "text", "admin", true) + fieldHTML("ce-pass", t("connWpPass"), cfg.appPass, "password", "xxxx xxxx xxxx xxxx", true);
      helpHTML = t("connWpHelp");
    } else if (type === "telegram" || type === "rubika") {
      bodyHTML = fieldHTML("ce-name", t("connName"), existing && existing.name, "text", t("connNamePh")) + fieldHTML("ce-tok", t("connBotToken"), cfg.botToken, "password", type === "telegram" ? "123456:AA…" : "", true) + (type === "rubika" ? fieldHTML("ce-proxy", t("connProxy"), cfg.proxy, "text", "https://my-proxy.workers.dev/?url={url}", true) : "");
      helpHTML = type === "telegram" ? t("connTgHelp") : t("connRkHelp");
    } else if (type === "host") {
      bodyHTML = fieldHTML("ce-name", t("connName"), existing && existing.name, "text", t("connNamePh")) + fieldHTML("ce-url", t("connHostUrl"), cfg.url, "url", "https://example.com/opencode-bridge.php", true) + fieldHTML("ce-sec", t("connHostSecret"), cfg.secret, "password", "OC-BRIDGE-…", true);
      helpHTML = t("connHostHelp");
    }
    var m = OC.modal({
      title: (existing ? t("connEditTitle") : t("connAddTitle")) + " — " + T.name,
      body: '<div class="stack">' + '<div class="ce-head ' + type + '">' + MARKS[type] + "<b>" + T.name + "</b></div>" + bodyHTML + '<div class="hint">' + helpHTML + "</div>" + '<div class="flex" id="ce-result"></div>' + "</div>",
      foot: [function () {
        var testB = OC.el('<button class="btn" id="ce-test">' + I.plug + t("connTestAndSave") + "</button>");
        testB.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var conn, info, res, _res, _t;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                conn = collect();
                if (conn) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2);
              case 1:
                testB.disabled = true;
                testB.innerHTML = t("connTesting");
                _context2.p = 2;
                _context2.n = 3;
                return OC.connectors.verifyAndSave(conn);
              case 3:
                info = _context2.v;
                testB.disabled = false;
                testB.innerHTML = I.refresh + t("connTest");
                res = $("#ce-result");
                if (res) res.innerHTML = '<span class="ok-note">' + I.star + t("connTestOkDetail") + " " + esc(Object.values(info).filter(Boolean).slice(0, 2).join(" · ")) + "</span>";
                toast(t("connTestOk"), "ok");
                setTimeout(function () {
                  m.close();
                  render();
                }, 900);
                _context2.n = 5;
                break;
              case 4:
                _context2.p = 4;
                _t = _context2.v;
                testB.disabled = false;
                testB.innerHTML = I.plug + t("connTestAndSave");
                _res = $("#ce-result");
                if (_res) _res.innerHTML = '<span class="err-note">' + esc(_t.message || t("connError")) + "</span>";
                conn.status = "err";
                OC.connectors.save(conn);
              case 5:
                return _context2.a(2);
            }
          }, _callee2, null, [[2, 4]]);
        }));
        return testB;
      }(), function () {
        var b = OC.el('<button class="btn btn-primary" id="ce-save">' + t("save") + "</button>");
        b.onclick = function () {
          var conn = collect();
          if (!conn) return;
          conn.status = existing && existing.status || "unknown";
          OC.connectors.save(conn);
          m.close();
          render();
          toast(t("connSaved"), "ok");
        };
        return b;
      }()]
    });
    function collect() {
      var conn = existing ? JSON.parse(JSON.stringify(existing)) : {
        type: type,
        cfg: {}
      };
      var nm = $("#ce-name");
      conn.name = nm && nm.value.trim() ? nm.value.trim() : T.name;
      if (type === "wordpress") {
        conn.cfg.url = ($("#ce-url").value || "").trim();
        conn.cfg.user = ($("#ce-user").value || "").trim();
        conn.cfg.appPass = ($("#ce-pass").value || "").trim();
        if (!conn.cfg.url) {
          toast(t("connNeedUrl"), "err");
          return null;
        }
        try {
          OC.connectors.wpBase(conn.cfg.url);
        } catch (e) {
          toast(e.message, "err");
          return null;
        }
        if (!conn.cfg.user || !conn.cfg.appPass) {
          toast(t("connNeedCreds"), "err");
          return null;
        }
      } else if (type === "telegram" || type === "rubika") {
        conn.cfg.botToken = ($("#ce-tok").value || "").trim();
        if (type === "rubika" && $("#ce-proxy")) conn.cfg.proxy = ($("#ce-proxy").value || "").trim();
        if (!conn.cfg.botToken) {
          toast(t("connNeedToken"), "err");
          return null;
        }
      } else if (type === "host") {
        conn.cfg.url = ($("#ce-url").value || "").trim();
        conn.cfg.secret = ($("#ce-sec").value || "").trim();
        if (!conn.cfg.url) {
          toast(t("connNeedUrl"), "err");
          return null;
        }
        if (!conn.cfg.secret) {
          toast(t("connNeedSecret"), "err");
          return null;
        }
      }
      return conn;
    }
    if (type === "host") {
      var dl = $("#ce-dl");
      if (dl) dl.onclick = function () {
        OC.connectors.downloadBridge();
        toast(t("connBridgeDl"), "ok");
      };
    }
  }
  OC.routes["/connections"] = function () {
    if (!store.currentUser()) return;
    render();
  };
  OC.showConnections = function () {
    location.hash = "/connections";
  };
  window.OC = window.OC || {};
})();