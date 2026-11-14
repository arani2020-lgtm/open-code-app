function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — Connectors hub: WordPress, Telegram, Rubika, Host bridge (+ GitHub link).
   Every connector is driven by keys the user provides; secrets never leave the device.
   The AI agent can operate on any attached connector through a typed action protocol.
   Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;

  /* ---------- per-user storage ---------- */
  function lsKey() {
    var u = store.currentUser();
    return u ? "oc-conns-" + u.id : null;
  }
  function readLS() {
    var k = lsKey();
    if (!k) return {
      list: [],
      attachedId: ""
    };
    return store.kvGet(k, {
      list: [],
      attachedId: ""
    });
  }
  function writeLS(v) {
    var k = lsKey();
    if (k) store.kvSet(k, v);
  }

  /* ---------- fetch helper with timeout ---------- */
  function fetchJSON(_x, _x2, _x3) {
    return _fetchJSON.apply(this, arguments);
  }
  function _fetchJSON() {
    _fetchJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, opts, timeoutMs) {
      var ctl, tm, r, txt, j, msg;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            opts = opts || {};
            ctl = new AbortController();
            tm = setTimeout(function () {
              return ctl.abort();
            }, timeoutMs || 18000);
            _context.p = 1;
            _context.n = 2;
            return fetch(url, Object.assign({}, opts, {
              signal: ctl.signal
            }));
          case 2:
            r = _context.v;
            _context.n = 3;
            return r.text();
          case 3:
            txt = _context.v;
            j = null;
            try {
              j = txt ? JSON.parse(txt) : null;
            } catch (e) {
              j = null;
            }
            if (r.ok) {
              _context.n = 4;
              break;
            }
            msg = "";
            if (j && j.message) msg = j.message;else if (j && j.description) msg = j.description;else if (j && j.error) msg = j.error;else if (j && j.result === false && j.error_code) msg = "HTTP " + j.error_code;else msg = "HTTP " + r.status;
            throw new Error(msg);
          case 4:
            return _context.a(2, j);
          case 5:
            _context.p = 5;
            clearTimeout(tm);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1,, 5, 6]]);
    }));
    return _fetchJSON.apply(this, arguments);
  }
  function withProxy(conn, url) {
    var px = (conn.cfg && conn.cfg.proxy || "").trim();
    if (!px) return url;
    if (px.indexOf("{url}") >= 0) return px.replace("{url}", encodeURIComponent(url));
    return px + url;
  }

  /* ---------- connector types ---------- */
  var TYPES = {
    wordpress: {
      icon: "wp",
      name: "WordPress",
      desc: "connWpDesc"
    },
    telegram: {
      icon: "tg",
      name: "Telegram",
      desc: "connTgDesc"
    },
    rubika: {
      icon: "rk",
      name: "Rubika",
      desc: "connRkDesc"
    },
    host: {
      icon: "host",
      name: "Host / Server",
      desc: "connHostDesc"
    },
    github: {
      icon: "gh",
      name: "GitHub",
      desc: "connGhDesc"
    }
  };
  function uid() {
    return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
  function saveConn(conn) {
    var st = readLS();
    conn.id = conn.id || uid();
    var enc = {
      id: conn.id,
      type: conn.type,
      name: conn.name,
      status: conn.status || "unknown",
      lastCheck: conn.lastCheck || 0,
      info: conn.info || {},
      cfg: {}
    };
    for (var _i = 0, _Object$keys = Object.keys(conn.cfg || {}); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      var secretish = /pass|token|key|secret/i.test(k);
      enc.cfg[k] = secretish ? store.encKey(String(conn.cfg[k])) : conn.cfg[k];
    }
    var i = st.list.findIndex(function (x) {
      return x.id === conn.id;
    });
    if (i >= 0) st.list[i] = enc;else st.list.push(enc);
    writeLS(st);
    return conn;
  }
  function listConns() {
    return readLS().list;
  }
  function getConn(id) {
    return readLS().list.find(function (x) {
      return x.id === id;
    }) || null;
  }
  function removeConn(id) {
    var st = readLS();
    st.list = st.list.filter(function (x) {
      return x.id !== id;
    });
    if (st.attachedId === id) st.attachedId = "";
    writeLS(st);
  }
  /* decrypt cfg for use */
  function cfgOf(conn) {
    var out = {};
    for (var _i2 = 0, _Object$keys2 = Object.keys(conn.cfg || {}); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      var v = conn.cfg[k];
      out[k] = typeof v === "string" && /pass|token|key|secret/i.test(k) && v ? store.decKey(v) : v;
    }
    return out;
  }

  /* ---------- connection testers ---------- */
  function testConn(_x4) {
    return _testConn.apply(this, arguments);
  }
  function _testConn() {
    _testConn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(conn) {
      var cfg, info, base, auth, j, _j, _j2, d, _j3;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            cfg = cfgOf(conn);
            info = {};
            if (!(conn.type === "wordpress")) {
              _context2.n = 2;
              break;
            }
            base = wpBase(cfg.url);
            auth = "Basic " + btoa(cfg.user + ":" + cfg.appPass.replace(/\s+/g, ""));
            _context2.n = 1;
            return fetchJSON(base + "/users/me?context=edit", {
              headers: {
                Authorization: auth
              }
            });
          case 1:
            j = _context2.v;
            info = {
              site: base.replace("/wp-json/wp/v2", ""),
              user: j.name || j.slug,
              roles: (j.roles || []).join(", "),
              caps: j.capabilities ? Object.keys(j.capabilities).filter(function (c) {
                return j.capabilities[c];
              }).length : 0
            };
            _context2.n = 10;
            break;
          case 2:
            if (!(conn.type === "telegram")) {
              _context2.n = 5;
              break;
            }
            _context2.n = 3;
            return fetchJSON(withProxy(conn, "https://api.telegram.org/bot" + cfg.botToken + "/getMe"));
          case 3:
            _j = _context2.v;
            if (!(_j && _j.ok === false)) {
              _context2.n = 4;
              break;
            }
            throw new Error(_j.description || "bot error");
          case 4:
            info = {
              bot: "@" + (_j.result.username || ""),
              name: _j.result.first_name || "",
              canJoin: !!_j.result.can_join_groups
            };
            _context2.n = 10;
            break;
          case 5:
            if (!(conn.type === "rubika")) {
              _context2.n = 7;
              break;
            }
            _context2.n = 6;
            return fetchJSON(withProxy(conn, "https://botapi.rubika.ir/bot" + cfg.botToken + "/getMe"), {
              method: "POST"
            });
          case 6:
            _j2 = _context2.v;
            d = _j2 && _j2.data || _j2;
            info = {
              bot: d && (d.username || d.bot_username) || "",
              name: d && (d.first_name || d.title) || ""
            };
            _context2.n = 10;
            break;
          case 7:
            if (!(conn.type === "host")) {
              _context2.n = 10;
              break;
            }
            _context2.n = 8;
            return fetchJSON(cfg.url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-OC-Key": cfg.secret
              },
              body: JSON.stringify({
                op: "ping"
              })
            });
          case 8:
            _j3 = _context2.v;
            if (!(!_j3 || !_j3.ok)) {
              _context2.n = 9;
              break;
            }
            throw new Error(_j3 && _j3.error || "bridge error");
          case 9:
            info = {
              php: _j3.php || "",
              root: _j3.root || "",
              count: _j3.count || 0
            };
          case 10:
            return _context2.a(2, info);
        }
      }, _callee2);
    }));
    return _testConn.apply(this, arguments);
  }
  function verifyAndSave(_x5) {
    return _verifyAndSave.apply(this, arguments);
  }
  function _verifyAndSave() {
    _verifyAndSave = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(conn) {
      var info;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return testConn(conn);
          case 1:
            info = _context3.v;
            conn.status = "ok";
            conn.lastCheck = Date.now();
            conn.info = info;
            saveConn(conn);
            store.logActivity(store.currentUser().email, "conn-" + conn.type, conn.name);
            return _context3.a(2, info);
        }
      }, _callee3);
    }));
    return _verifyAndSave.apply(this, arguments);
  }
  function wpBase(raw) {
    var u = String(raw || "").trim();
    if (!u) throw new Error(t("connNeedUrl"));
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    u = u.replace(/\/+$/, "");
    u = u.replace(/\/wp-json.*$/i, "");
    return u + "/wp-json/wp/v2";
  }

  /* ---------- action executors (agent protocol) ---------- */
  function clip(s, n) {
    s = String(s == null ? "" : s);
    return s.length > (n || 1200) ? s.slice(0, n) + " …[" + t("connTruncated") + "]" : s;
  }
  function execWordPress(_x6, _x7) {
    return _execWordPress.apply(this, arguments);
  }
  function _execWordPress() {
    _execWordPress = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(conn, a) {
      var cfg, base, H, j, _j4, body, _j5, _j6;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            cfg = cfgOf(conn);
            base = wpBase(cfg.url);
            H = {
              Authorization: "Basic " + btoa(cfg.user + ":" + cfg.appPass.replace(/\s+/g, "")),
              "Content-Type": "application/json"
            };
            if (!(a.t === "wp_list")) {
              _context4.n = 2;
              break;
            }
            _context4.n = 1;
            return fetchJSON(base + "/posts?per_page=8&_fields=id,title,date,status" + (a.search ? "&search=" + encodeURIComponent(a.search) : ""), {
              headers: H
            });
          case 1:
            j = _context4.v;
            return _context4.a(2, "[POSTS]\n" + (j.length ? j.map(function (p) {
              return "#" + p.id + " [" + (p.status || "?") + "] " + (p.title && p.title.rendered ? p.title.rendered.replace(/<[^>]+>/g, "") : "") + " — " + (p.date || "");
            }).join("\n") : t("connNoPosts")));
          case 2:
            if (!(a.t === "wp_read")) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return fetchJSON(base + "/posts/" + encodeURIComponent(a.id) + "?context=edit", {
              headers: H
            });
          case 3:
            _j4 = _context4.v;
            return _context4.a(2, "[POST #" + _j4.id + "] " + (_j4.title ? _j4.title.raw || _j4.title.rendered : "") + "\n---\n" + clip(_j4.content && (_j4.content.raw || _j4.content.rendered), 6000));
          case 4:
            if (!(a.t === "wp_write")) {
              _context4.n = 8;
              break;
            }
            body = {};
            if (!(a.id && a.id !== "new" && a.id !== "0")) {
              _context4.n = 6;
              break;
            }
            body.content = a.content;
            _context4.n = 5;
            return fetchJSON(base + "/posts/" + encodeURIComponent(a.id), {
              method: "POST",
              headers: H,
              body: JSON.stringify(body)
            });
          case 5:
            _j5 = _context4.v;
            return _context4.a(2, "[UPDATED #" + _j5.id + "] " + (_j5.link || ""));
          case 6:
            body.title = a.title || "Untitled";
            body.content = a.content;
            body.status = a.status || "draft";
            _context4.n = 7;
            return fetchJSON(base + "/posts", {
              method: "POST",
              headers: H,
              body: JSON.stringify(body)
            });
          case 7:
            _j6 = _context4.v;
            return _context4.a(2, "[CREATED #" + _j6.id + " status=" + _j6.status + "] " + (_j6.link || ""));
          case 8:
            throw new Error("unknown action " + a.t);
          case 9:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _execWordPress.apply(this, arguments);
  }
  function execTelegram(_x8, _x9) {
    return _execTelegram.apply(this, arguments);
  }
  function _execTelegram() {
    _execTelegram = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(conn, a) {
      var cfg, base, j, _j7, _j8, ups;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            cfg = cfgOf(conn);
            base = "https://api.telegram.org/bot" + cfg.botToken;
            if (!(a.t === "tg_me")) {
              _context5.n = 2;
              break;
            }
            _context5.n = 1;
            return fetchJSON(base + "/getMe");
          case 1:
            j = _context5.v;
            return _context5.a(2, "[BOT] @" + j.result.username + " — " + (j.result.first_name || ""));
          case 2:
            if (!(a.t === "tg_send")) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return fetchJSON(base + "/sendMessage", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                chat_id: a.chat,
                text: a.text
              })
            });
          case 3:
            _j7 = _context5.v;
            return _context5.a(2, "[SENT] msg " + (_j7.result && _j7.result.message_id ? "#" + _j7.result.message_id : "ok"));
          case 4:
            if (!(a.t === "tg_updates")) {
              _context5.n = 6;
              break;
            }
            _context5.n = 5;
            return fetchJSON(base + "/getUpdates?limit=8");
          case 5:
            _j8 = _context5.v;
            ups = (_j8.result || []).slice(-8).map(function (u) {
              var m = u.message || u.edited_message || {};
              var ch = m.chat || {};
              return "chat=" + (ch.id || "?") + " (" + (ch.type || "?") + ") from=" + (m.from && m.from.username || m.from && m.from.first_name || "?") + ": " + clip(m.text, 120);
            });
            return _context5.a(2, "[UPDATES]\n" + (ups.length ? ups.join("\n") : t("connNoUpdates")));
          case 6:
            throw new Error("unknown action " + a.t);
          case 7:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _execTelegram.apply(this, arguments);
  }
  function execRubika(_x0, _x1) {
    return _execRubika.apply(this, arguments);
  }
  function _execRubika() {
    _execRubika = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(conn, a) {
      var cfg, base, j, d, _j9;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            cfg = cfgOf(conn);
            base = "https://botapi.rubika.ir/bot" + cfg.botToken;
            if (!(a.t === "rk_me")) {
              _context6.n = 2;
              break;
            }
            _context6.n = 1;
            return fetchJSON(withProxy(conn, base + "/getMe"), {
              method: "POST"
            });
          case 1:
            j = _context6.v;
            d = j && j.data || j;
            return _context6.a(2, "[BOT] " + (d && (d.username || d.bot_username) || "?") + " — " + (d && (d.first_name || d.title) || ""));
          case 2:
            if (!(a.t === "rk_send")) {
              _context6.n = 4;
              break;
            }
            _context6.n = 3;
            return fetchJSON(withProxy(conn, base + "/sendMessage"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                chat_id: a.chat,
                text: a.text
              })
            });
          case 3:
            _j9 = _context6.v;
            return _context6.a(2, "[SENT] ok");
          case 4:
            throw new Error("unknown action " + a.t);
          case 5:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _execRubika.apply(this, arguments);
  }
  function execHost(_x10, _x11) {
    return _execHost.apply(this, arguments);
  }
  function _execHost() {
    _execHost = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(conn, a) {
      var cfg, call, p, j, items, _j0;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            cfg = cfgOf(conn);
            call = /*#__PURE__*/function () {
              var _call = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(body) {
                var j;
                return _regenerator().w(function (_context7) {
                  while (1) switch (_context7.n) {
                    case 0:
                      _context7.n = 1;
                      return fetchJSON(cfg.url, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          "X-OC-Key": cfg.secret
                        },
                        body: JSON.stringify(body)
                      });
                    case 1:
                      j = _context7.v;
                      if (!(!j || !j.ok)) {
                        _context7.n = 2;
                        break;
                      }
                      throw new Error(j && j.error || "bridge error");
                    case 2:
                      return _context7.a(2, j);
                  }
                }, _callee7);
              }));
              function call(_x16) {
                return _call.apply(this, arguments);
              }
              return call;
            }();
            p = (a.path || "").replace(/^\/+/, "");
            if (!(a.t === "ls")) {
              _context8.n = 2;
              break;
            }
            _context8.n = 1;
            return call({
              op: "ls",
              path: p || "."
            });
          case 1:
            j = _context8.v;
            items = (j.items || []).map(function (it) {
              return (it.dir ? "[DIR] " : "[FILE] ") + it.name + (it.dir ? "" : " (" + U.fmtBytes(it.size || 0) + ")");
            });
            return _context8.a(2, "[LS " + (p || "/") + "]\n" + (items.length ? items.join("\n") : t("connEmptyDir")));
          case 2:
            if (!(a.t === "read")) {
              _context8.n = 4;
              break;
            }
            _context8.n = 3;
            return call({
              op: "read",
              path: p
            });
          case 3:
            _j0 = _context8.v;
            return _context8.a(2, "[FILE " + p + "]\n" + clip(_j0.content, 8000));
          case 4:
            if (!(a.t === "write")) {
              _context8.n = 6;
              break;
            }
            _context8.n = 5;
            return call({
              op: "write",
              path: p,
              content: a.content
            });
          case 5:
            return _context8.a(2, "[WROTE " + p + "] " + U.fmtBytes((a.content || "").length));
          case 6:
            if (!(a.t === "rm")) {
              _context8.n = 8;
              break;
            }
            _context8.n = 7;
            return call({
              op: "rm",
              path: p
            });
          case 7:
            return _context8.a(2, "[DELETED " + p + "]");
          case 8:
            throw new Error("unknown action " + a.t);
          case 9:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return _execHost.apply(this, arguments);
  }
  function exec(_x12, _x13) {
    return _exec.apply(this, arguments);
  }
  /* ---------- agent attach ---------- */
  function _exec() {
    _exec = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(conn, a) {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (!(conn.type === "wordpress")) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2, execWordPress(conn, a));
          case 1:
            if (!(conn.type === "telegram")) {
              _context9.n = 2;
              break;
            }
            return _context9.a(2, execTelegram(conn, a));
          case 2:
            if (!(conn.type === "rubika")) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2, execRubika(conn, a));
          case 3:
            if (!(conn.type === "host")) {
              _context9.n = 4;
              break;
            }
            return _context9.a(2, execHost(conn, a));
          case 4:
            throw new Error("unknown connector " + conn.type);
          case 5:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return _exec.apply(this, arguments);
  }
  var attach = null;
  function attachConn(id) {
    var c = getConn(id);
    if (!c) throw new Error(t("connNotFound"));
    attach = {
      id: c.id,
      type: c.type,
      name: c.name,
      info: c.info || {}
    };
    var st = readLS();
    st.attachedId = c.id;
    writeLS(st);
    return attach;
  }
  function detach() {
    attach = null;
    var st = readLS();
    st.attachedId = "";
    writeLS(st);
  }
  function attached() {
    if (attach) return attach;
    var st = readLS();
    if (st.attachedId) {
      var c = getConn(st.attachedId);
      if (c) {
        attach = {
          id: c.id,
          type: c.type,
          name: c.name,
          info: c.info || {}
        };
        return attach;
      }
    }
    return null;
  }

  /* ---------- system prompt + context per type ---------- */
  function systemPrompt(a) {
    var fa = OC.i18n.isRTL();
    if (a.type === "wordpress") return fa ? "شما به یک سایت وردپرس متصل هستید. برای کار با آن فقط از این دستورها در خط جدا استفاده کنید:\nWP_LIST: عبارت جستجو (اختیاری)\nWP_READ: شناسه پست\nWP_WRITE: شناسه | عنوان | متن (برای پست جدید شناسه را new بگذارید؛ متن تک‌خطی و \\n برای خط جدید)\nپس از هر دستور یک خط SAY: توضیح کوتاه بنویسید. پست جدید همیشه پیش‌نویس ساخته می‌شود؛ انتشار نهایی را به تأیید کاربر بگذارید." : "You are connected to a WordPress site. Use ONLY these single-line commands:\nWP_LIST: search terms (optional)\nWP_READ: post_id\nWP_WRITE: post_id | title | content (use id new to create a draft; single line content with \\n for newlines)\nAfter each command add a line SAY: short explanation. New posts are created as drafts; let the user confirm publishing.";
    if (a.type === "telegram" || a.type === "rubika") {
      var send = a.type === "telegram" ? "TG_SEND" : "RK_SEND";
      var me = a.type === "telegram" ? "TG_ME" : "RK_ME";
      var upd = a.type === "telegram" ? "TG_UPDATES" : "";
      return (fa ? "شما به یک بات " + (a.type === "telegram" ? "تلگرام" : "روبیکا") + " متصل هستید. دستورهای مجاز (هر کدام در یک خط):\n" + me + ":\n" + send + ": شناسه‌چت | متن پیام\n" : "You are connected to a " + a.type + " bot. Allowed commands (one per line):\n" + me + ":\n" + send + ": chat_id | message text\n") + (upd ? upd + ":\n" : "") + (fa ? "برای ارسال پیام، ابتده شناسه چت را از TG_UPDATES یا از کاربر بگیرید. پس از هر دستور یک خط SAY: بنویسید. بدون تأیید صریح کاربر پیام گروهی نفرستید." : "Get the chat id from UPDATES or from the user before sending. After each command add a line SAY:. Never mass-message without explicit user approval.");
    }
    if (a.type === "host") return fa ? "شما به هاست کاربر (از طریق پل PHP) متصل هستید. دستورهای مجاز (هر کدام در یک خط):\nLS: مسیر\nREAD: مسیر فایل متنی\nWRITE: مسیر | محتوا (تک‌خطی، \\n برای خط جدید)\nRM: مسیر\nپس از هر دستور یک خط SAY: توضیح کوتاه. قبل از حذف یا بازنویسی فایل موجود، حتماً تأیید کاربر را بگیرید." : "You are connected to the user's host (via a PHP bridge). Allowed commands (one per line):\nLS: path\nREAD: text file path\nWRITE: path | content (single line, \\n for newlines)\nRM: path\nAfter each command add a line SAY:. Always confirm before deleting or overwriting existing files.";
    return "";
  }
  function contextBlock(a) {
    var c = getConn(a.id);
    var info = c && c.info || {};
    var s = "\n\n[" + t("connContext") + ": " + (TYPES[a.type] ? TYPES[a.type].name : a.type) + " — " + (a.name || "") + "";
    if (a.type === "wordpress" && info.site) s += " — " + info.site + " (" + (info.user || "") + ")";
    if ((a.type === "telegram" || a.type === "rubika") && info.bot) s += " — " + info.bot;
    if (a.type === "host" && info.php) s += " — PHP " + info.php;
    s += "]\n" + systemPrompt(a);
    return s;
  }

  /* ---------- parser: same style as github (PREFIX: args) ---------- */
  function unescapeNL(s) {
    return String(s == null ? "" : s).replace(/\\n/g, "\n");
  }
  function parseActions(raw, type) {
    var lines = String(raw || "").split("\n");
    var acts = [];
    var says = [];
    var ws = type === "wordpress";
    var isTg = type === "telegram",
      isRk = type === "rubika";
    var _iterator = _createForOfIteratorHelper(lines),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var L0 = _step.value;
        var L = L0.trim();
        var m = void 0;
        if (m = L.match(/^SAY\s*[:：]\s*(.+)$/i)) {
          says.push(m[1]);
          continue;
        }
        if (ws && (m = L.match(/^WP_LIST\s*[:：]\s*(.*)$/i))) acts.push({
          t: "wp_list",
          search: m[1].trim()
        });else if (ws && (m = L.match(/^WP_READ\s*[:：]\s*(\d+)$/i))) acts.push({
          t: "wp_read",
          id: m[1]
        });else if (ws && (m = L.match(/^WP_WRITE\s*[:：]\s*(.+)$/i))) {
          var parts = m[1].split("|");
          acts.push({
            t: "wp_write",
            id: (parts[0] || "").trim() || "new",
            title: (parts[1] || "").trim(),
            content: unescapeNL((parts.slice(2).join("|") || "").trim())
          });
        } else if (isTg && (m = L.match(/^TG_ME\s*[:：]?\s*$/i))) acts.push({
          t: "tg_me"
        });else if (isTg && (m = L.match(/^TG_SEND\s*[:：]\s*(.+)$/i))) {
          var _parts = m[1].split("|");
          acts.push({
            t: "tg_send",
            chat: (_parts[0] || "").trim(),
            text: unescapeNL((_parts.slice(1).join("|") || "").trim())
          });
        } else if (isTg && (m = L.match(/^TG_UPDATES\s*[:：]?\s*$/i))) acts.push({
          t: "tg_updates"
        });else if (isRk && (m = L.match(/^RK_ME\s*[:：]?\s*$/i))) acts.push({
          t: "rk_me"
        });else if (isRk && (m = L.match(/^RK_SEND\s*[:：]\s*(.+)$/i))) {
          var _parts2 = m[1].split("|");
          acts.push({
            t: "rk_send",
            chat: (_parts2[0] || "").trim(),
            text: unescapeNL((_parts2.slice(1).join("|") || "").trim())
          });
        } else if (type === "host") {
          if (m = L.match(/^LS\s*[:：]\s*(.*)$/i)) acts.push({
            t: "ls",
            path: m[1].trim()
          });else if (m = L.match(/^READ\s*[:：]\s*(.+)$/i)) acts.push({
            t: "read",
            path: m[1].trim()
          });else if (m = L.match(/^WRITE\s*[:：]\s*(.+)$/i)) {
            var _parts3 = m[1].split("|");
            acts.push({
              t: "write",
              path: (_parts3[0] || "").trim(),
              content: unescapeNL((_parts3.slice(1).join("|") || "").trim())
            });
          } else if (m = L.match(/^RM\s*[:：]\s*(.+)$/i)) acts.push({
            t: "rm",
            path: m[1].trim()
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!acts.length) return says.length ? {
      say: says.join("\n"),
      actions: [],
      done: true
    } : null;
    return {
      say: says.join("\n"),
      actions: acts,
      done: false
    };
  }
  function runActions(_x14, _x15) {
    return _runActions.apply(this, arguments);
  }
  /* ---------- bridge PHP source ---------- */
  function _runActions() {
    _runActions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(conn, actions) {
      var results, _iterator2, _step2, a, _t, _t2, _t3, _t4, _t5;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            results = [];
            _iterator2 = _createForOfIteratorHelper(actions);
            _context0.p = 1;
            _iterator2.s();
          case 2:
            if ((_step2 = _iterator2.n()).done) {
              _context0.n = 7;
              break;
            }
            a = _step2.value;
            _context0.p = 3;
            _t = results;
            _t2 = _t.push;
            _context0.n = 4;
            return exec(conn, a);
          case 4:
            _t3 = _context0.v;
            _t2.call(_t, {
              ok: true,
              text: _t3
            });
            _context0.n = 6;
            break;
          case 5:
            _context0.p = 5;
            _t4 = _context0.v;
            results.push({
              ok: false,
              text: "[ERROR] " + (_t4.message || t("connError"))
            });
          case 6:
            _context0.n = 2;
            break;
          case 7:
            _context0.n = 9;
            break;
          case 8:
            _context0.p = 8;
            _t5 = _context0.v;
            _iterator2.e(_t5);
          case 9:
            _context0.p = 9;
            _iterator2.f();
            return _context0.f(9);
          case 10:
            return _context0.a(2, {
              results: results
            });
        }
      }, _callee0, null, [[3, 5], [1, 8, 9, 10]]);
    }));
    return _runActions.apply(this, arguments);
  }
  var BRIDGE_PHP = ["<?php", "/* Open Code Host Bridge v1 — upload this file anywhere inside your site's folder.", "   Then add a Host connection in Open Code with this file's URL + the secret below.", "   SECURITY: keep the secret long, use HTTPS, and delete this file when you are done. */", "$SECRET = 'OC-BRIDGE-CHANGE-ME';", "header('Access-Control-Allow-Origin: *');", "header('Access-Control-Allow-Headers: Content-Type, X-OC-Key');", "header('Access-Control-Allow-Methods: POST, OPTIONS');", "header('Content-Type: application/json; charset=utf-8');", "if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }", "$key = $_SERVER['HTTP_X_OC_KEY'] ?? '';", "if (!hash_equals($SECRET, (string)$key)) { http_response_code(401); echo json_encode(['ok'=>false,'error'=>'bad key']); exit; }", "$in = json_decode(file_get_contents('php://input'), true) ?: [];", "$op = $in['op'] ?? 'ping';", "$ROOT = __DIR__;", "function jpath($p) { global $ROOT; $p = str_replace(['\\\\','..'], ['/',''], (string)$p); $p = ltrim($p, '/'); $full = $p === '' ? $ROOT : $ROOT . '/' . $p; return $full; }", "function out($a) { echo json_encode($a); exit; }", "if ($op === 'ping') { out(['ok'=>true,'php'=>PHP_VERSION,'root'=>$ROOT,'count'=>count(glob($ROOT.'/*'))]); }", "if ($op === 'ls') { $d = jpath($in['path'] ?? ''); if (!is_dir($d)) out(['ok'=>false,'error'=>'no dir']); $items=[]; foreach (scandir($d) as $f) { if ($f==='.'||$f==='..') continue; $full=$d.'/'.$f; $items[]=['name'=>$f,'dir'=>is_dir($full),'size'=>is_file($full)?filesize($full):0]; } out(['ok'=>true,'items'=>$items]); }", "if ($op === 'read') { $f = jpath($in['path'] ?? ''); if (!is_file($f)) out(['ok'=>false,'error'=>'no file']); if (filesize($f) > 2*1024*1024) out(['ok'=>false,'error'=>'too big']); out(['ok'=>true,'content'=>file_get_contents($f)]); }", "if ($op === 'write') { $f = jpath($in['path'] ?? ''); if (strlen((string)($in['content'] ?? '')) > 2*1024*1024) out(['ok'=>false,'error'=>'too big']); $ok = @file_put_contents($f, (string)($in['content'] ?? '')) !== false; out(['ok'=>$ok,'error'=>$ok?'':'write failed']); }", "if ($op === 'rm') { $f = jpath($in['path'] ?? ''); $real = realpath($f); if (!$real || strpos($real, $ROOT) !== 0) out(['ok'=>false,'error'=>'outside root']); out(['ok'=>@unlink($real), 'error'=>'delete failed']); }", "out(['ok'=>false,'error'=>'unknown op']);"].join("\n");
  function downloadBridge() {
    U.download("opencode-bridge.php", new Blob([BRIDGE_PHP], {
      type: "application/x-httpd-php"
    }));
  }

  /* ---------- export ---------- */
  window.OC = window.OC || {};
  OC.connectors = {
    TYPES: TYPES,
    list: listConns,
    get: getConn,
    save: saveConn,
    remove: removeConn,
    test: testConn,
    verifyAndSave: verifyAndSave,
    cfgOf: cfgOf,
    wpBase: wpBase,
    attach: attachConn,
    detach: detach,
    attached: attached,
    systemPrompt: systemPrompt,
    contextBlock: contextBlock,
    parseActions: parseActions,
    runActions: runActions,
    downloadBridge: downloadBridge,
    BRIDGE_PHP: BRIDGE_PHP
  };
})();