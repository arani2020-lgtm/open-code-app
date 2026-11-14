function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — Providers & chat engine (OpenAI-compatible streaming). Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var TYPES = [{
    id: "openai",
    label: "OpenAI",
    base: "https://api.openai.com/v1",
    needsKey: true
  }, {
    id: "openai-compatible",
    label: "OpenAI-compatible (سازگار با OpenAI)",
    base: "",
    needsKey: true
  }, {
    id: "openrouter",
    label: "OpenRouter",
    base: "https://openrouter.ai/api/v1",
    needsKey: true
  }, {
    id: "groq",
    label: "Groq",
    base: "https://api.groq.com/openai/v1",
    needsKey: true
  }, {
    id: "together",
    label: "Together AI",
    base: "https://api.together.xyz/v1",
    needsKey: true
  }, {
    id: "custom",
    label: "Custom (سفارشی)",
    base: "",
    needsKey: false
  }];
  function allProviders() {
    // system providers from admin + user providers
    var sys = store.sysSettings().systemProviders || [];
    var mine = store.getProviders();
    return sys.map(function (p) {
      return Object.assign({}, p, {
        system: true
      });
    }).concat(mine.map(function (p) {
      return Object.assign({}, p, {
        system: false
      });
    }));
  }
  function getProvider(id) {
    return allProviders().find(function (p) {
      return p.id === id;
    }) || null;
  }
  function baseUrl(p) {
    var tp = TYPES.find(function (x) {
      return x.id === p.type;
    }) || TYPES[1];
    return (p.base || tp.base || "").replace(/\/+$/, "");
  }
  function authHeaders(p) {
    var h = {
      "Content-Type": "application/json"
    };
    if (p.keyEnc) {
      var key = store.decKey(p.keyEnc);
      if (key) h["Authorization"] = "Bearer " + key;
    }
    if (p.orgId && p.type === "openai") h["OpenAI-Organization"] = p.orgId;
    if (p.headers) {
      var _iterator = _createForOfIteratorHelper(p.headers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          if (row.name) h[row.name] = row.value || "";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return h;
  }

  /* ---------- errors ---------- */
  function mapError(status, bodyText) {
    var detail = "";
    try {
      var j = JSON.parse(bodyText);
      detail = j.error && (j.error.message || j.error.code) || j.message || "";
    } catch (e) {}
    if (status === 401 || status === 403) return t("providerRefused") + (detail ? " — " + detail : "") + " | " + t("checkCreds");
    if (status === 429) return t("rateLimited");
    if (status === 402) return t("insufficientQuota");
    if (status >= 500) return t("serverError") + (detail ? " — " + detail : "");
    if (status === 404) return t("unexpectedResponse") + (detail ? " — " + detail : "");
    return t("errorOccurred") + (status ? " (" + status + ")" : "") + (detail ? " — " + detail : "");
  }
  function offline() {
    return !navigator.onLine;
  }

  /* ---------- models ---------- */
  function fetchModels(_x) {
    return _fetchModels.apply(this, arguments);
  }
  function _fetchModels() {
    _fetchModels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(p) {
      var res, j, arr, _t3, _t4, _t5, _t6;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!offline()) {
              _context2.n = 1;
              break;
            }
            throw new Error(t("networkDown"));
          case 1:
            _context2.n = 2;
            return fetch(baseUrl(p) + "/models", {
              headers: authHeaders(p)
            });
          case 2:
            res = _context2.v;
            if (res.ok) {
              _context2.n = 4;
              break;
            }
            _t3 = Error;
            _t4 = mapError;
            _t5 = res.status;
            _context2.n = 3;
            return res.text().catch(function () {
              return "";
            });
          case 3:
            _t6 = _t4(_t5, _context2.v);
            throw new _t3(_t6);
          case 4:
            _context2.n = 5;
            return res.json();
          case 5:
            j = _context2.v;
            arr = (j.data || j.models || []).map(function (m) {
              return m.id || m.name;
            }).filter(Boolean);
            return _context2.a(2, arr.sort());
        }
      }, _callee2);
    }));
    return _fetchModels.apply(this, arguments);
  }
  function testConnection(_x2) {
    return _testConnection.apply(this, arguments);
  }
  /* ---------- web search (Tavily) ---------- */
  function _testConnection() {
    _testConnection = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(p) {
      var started, res, res2, _t7, _t8, _t9, _t0, _t1, _t10, _t11, _t12, _t13, _t14;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!offline()) {
              _context3.n = 1;
              break;
            }
            throw new Error(t("networkDown"));
          case 1:
            started = Date.now();
            _context3.p = 2;
            _context3.n = 3;
            return fetch(baseUrl(p) + "/models", {
              headers: authHeaders(p)
            });
          case 3:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 5;
              break;
            }
            _t7 = Error;
            _t8 = mapError;
            _t9 = res.status;
            _context3.n = 4;
            return res.text().catch(function () {
              return "";
            });
          case 4:
            _t0 = _t8(_t9, _context3.v);
            throw new _t7(_t0);
          case 5:
            return _context3.a(2, {
              ok: true,
              ms: Date.now() - started,
              models: true
            });
          case 6:
            _context3.p = 6;
            _t1 = _context3.v;
            if (!(_t1.message === t("networkDown"))) {
              _context3.n = 7;
              break;
            }
            throw _t1;
          case 7:
            _context3.p = 7;
            _context3.n = 8;
            return fetch(baseUrl(p) + "/chat/completions", {
              method: "POST",
              headers: authHeaders(p),
              body: JSON.stringify({
                model: p.models && p.models[0] || "gpt-4o-mini",
                messages: [{
                  role: "user",
                  content: "ping"
                }],
                max_tokens: 1
              })
            });
          case 8:
            res2 = _context3.v;
            if (res2.ok) {
              _context3.n = 10;
              break;
            }
            _t10 = Error;
            _t11 = mapError;
            _t12 = res2.status;
            _context3.n = 9;
            return res2.text().catch(function () {
              return "";
            });
          case 9:
            _t13 = _t11(_t12, _context3.v);
            throw new _t10(_t13);
          case 10:
            return _context3.a(2, {
              ok: true,
              ms: Date.now() - started,
              models: false
            });
          case 11:
            _context3.p = 11;
            _t14 = _context3.v;
            throw _t14;
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[7, 11], [2, 6]]);
    }));
    return _testConnection.apply(this, arguments);
  }
  function webSearch(_x3) {
    return _webSearch.apply(this, arguments);
  }
  function _webSearch() {
    _webSearch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(query) {
      var sys, key, res, j, results, _t15, _t16, _t17, _t18;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            sys = store.sysSettings();
            if (sys.webSearchEnabled) {
              _context4.n = 1;
              break;
            }
            throw new Error(t("webSearchDisabled"));
          case 1:
            key = store.decKey(sys.webSearchKeyEnc || "");
            if (key) {
              _context4.n = 2;
              break;
            }
            throw new Error(t("webSearchNotConfigured"));
          case 2:
            _context4.n = 3;
            return fetch("https://api.tavily.com/search", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                api_key: key,
                query: query,
                max_results: 5,
                search_depth: "basic"
              })
            });
          case 3:
            res = _context4.v;
            if (res.ok) {
              _context4.n = 5;
              break;
            }
            _t15 = Error;
            _t16 = mapError;
            _t17 = res.status;
            _context4.n = 4;
            return res.text().catch(function () {
              return "";
            });
          case 4:
            _t18 = _t16(_t17, _context4.v);
            throw new _t15(_t18);
          case 5:
            _context4.n = 6;
            return res.json();
          case 6:
            j = _context4.v;
            results = (j.results || []).map(function (r) {
              return {
                title: r.title,
                url: r.url,
                content: r.content
              };
            });
            return _context4.a(2, results);
        }
      }, _callee4);
    }));
    return _webSearch.apply(this, arguments);
  }
  function searchContextBlock(results) {
    if (!results || !results.length) return "";
    var out = "\n\n" + (OC.i18n.locale() === "fa" ? "نتایج جست‌وجوی وب (با ذکر منبع پاسخ بده):" : "Web search results (cite sources):") + "\n";
    results.forEach(function (r, i) {
      out += "[".concat(i + 1, "] ").concat(r.title, "\n").concat(r.url, "\n").concat((r.content || "").slice(0, 700), "\n\n");
    });
    return out;
  }

  /* ---------- daily limit ---------- */
  function limitBlocked() {
    var sys = store.sysSettings();
    var lim = sys.dailyRequestLimit || 0;
    if (lim > 0 && store.todayReqCount() >= lim) return t("limitReached");
    return null;
  }

  /* ---------- streaming chat ---------- */
  // onDelta(textSoFar, delta); returns {stop()} handle
  function streamChat(opts) {
    // opts: {provider, model, messages, temperature, maxTokens, signal handlers...}
    var p = opts.provider,
      model = opts.model,
      messages = opts.messages,
      temperature = opts.temperature,
      maxTokens = opts.maxTokens;
    var ctrl = new AbortController();
    var handle = {
      stop: function stop() {
        return ctrl.abort();
      },
      done: false
    };
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var blk, body, silenceMs, silenceTimer, armSilence, res, txt, j, text, u2, reader, dec, buf, _full, usage, gotAny, _yield$reader$read, done, value, idx, line, payload, _j, choice, delta, piece, estimated, tin, tout, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!offline()) {
              _context.n = 1;
              break;
            }
            opts.onError(new Error(t("networkDown")));
            return _context.a(2);
          case 1:
            blk = limitBlocked();
            if (!blk) {
              _context.n = 2;
              break;
            }
            opts.onError(new Error(blk));
            return _context.a(2);
          case 2:
            body = {
              model: model,
              messages: messages,
              stream: true,
              temperature: typeof temperature === "number" ? temperature : 0.7
            };
            if (maxTokens) body.max_tokens = maxTokens;
            if (p.type === "openrouter") {
              body.stream_options = {
                include_usage: true
              };
            } else if (p.type === "openai" || p.type === "openai-compatible") {
              body.stream_options = {
                include_usage: true
              };
            }
            silenceMs = store.sysSettings().silenceTimeoutMs || 60000;
            silenceTimer = null;
            armSilence = function armSilence() {
              clearTimeout(silenceTimer);
              silenceTimer = setTimeout(function () {
                try {
                  ctrl.abort();
                } catch (e) {}
                opts.onError(new Error(t("providerStopped")));
              }, silenceMs);
            };
            armSilence();
            _context.p = 3;
            _context.n = 4;
            return fetch(baseUrl(p) + "/chat/completions", {
              method: "POST",
              headers: authHeaders(p),
              body: JSON.stringify(body),
              signal: ctrl.signal
            });
          case 4:
            res = _context.v;
            if (res.ok) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return res.text().catch(function () {
              return "";
            });
          case 5:
            txt = _context.v;
            clearTimeout(silenceTimer);
            opts.onError(new Error(mapError(res.status, txt)));
            return _context.a(2);
          case 6:
            if (res.body) {
              _context.n = 8;
              break;
            }
            _context.n = 7;
            return res.json();
          case 7:
            j = _context.v;
            text = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || "";
            clearTimeout(silenceTimer);
            opts.onDelta(text, text);
            u2 = j.usage || null;
            opts.onDone({
              usage: u2,
              estimated: false
            });
            return _context.a(2);
          case 8:
            reader = res.body.getReader();
            dec = new TextDecoder("utf-8");
            buf = "";
            _full = "";
            usage = null;
            gotAny = false;
          case 9:
            if (!true) {
              _context.n = 19;
              break;
            }
            _context.n = 10;
            return reader.read();
          case 10:
            _yield$reader$read = _context.v;
            done = _yield$reader$read.done;
            value = _yield$reader$read.value;
            if (!done) {
              _context.n = 11;
              break;
            }
            return _context.a(3, 19);
          case 11:
            buf += dec.decode(value, {
              stream: true
            });
            idx = void 0;
          case 12:
            if (!((idx = buf.indexOf("\n")) >= 0)) {
              _context.n = 18;
              break;
            }
            line = buf.slice(0, idx).trim();
            buf = buf.slice(idx + 1);
            if (line.startsWith("data:")) {
              _context.n = 13;
              break;
            }
            return _context.a(3, 12);
          case 13:
            payload = line.slice(5).trim();
            if (!(payload === "[DONE]")) {
              _context.n = 14;
              break;
            }
            return _context.a(3, 12);
          case 14:
            _j = void 0;
            _context.p = 15;
            _j = JSON.parse(payload);
            _context.n = 17;
            break;
          case 16:
            _context.p = 16;
            _t = _context.v;
            return _context.a(3, 12);
          case 17:
            if (_j.usage) usage = _j.usage;
            choice = _j.choices && _j.choices[0];
            delta = choice && (choice.delta || {});
            piece = (delta.content || "") + ((delta.reasoning_content || "") && OC.i18n.locale() === "fa" ? "" : "");
            if (piece) {
              gotAny = true;
              _full += piece;
              armSilence();
              opts.onDelta(_full, piece);
            }
            if (choice && choice.finish_reason === "stop" && !piece) {/* noop */}
            _context.n = 12;
            break;
          case 18:
            _context.n = 9;
            break;
          case 19:
            clearTimeout(silenceTimer);
            if (gotAny) {
              _context.n = 20;
              break;
            }
            opts.onError(new Error(t("modelEndedEmpty")));
            return _context.a(2);
          case 20:
            handle.done = true;
            estimated = !usage;
            tin = usage ? usage.prompt_tokens || 0 : estTokens(messages);
            tout = usage ? usage.completion_tokens || 0 : estTokens([{
              content: _full
            }]);
            opts.onDone({
              usage: usage,
              estimated: estimated,
              tin: tin,
              tout: tout,
              text: _full
            });
            _context.n = 22;
            break;
          case 21:
            _context.p = 21;
            _t2 = _context.v;
            clearTimeout(silenceTimer);
            if (_t2.name === "AbortError") {
              if (!handle.done) opts.onAbort(full ? full : null);
            } else {
              opts.onError(_t2);
            }
          case 22:
            return _context.a(2);
        }
      }, _callee, null, [[15, 16], [3, 21]]);
    }))();
    return handle;
  }
  function estTokens(messages) {
    var chars = 0;
    var _iterator2 = _createForOfIteratorHelper(messages),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var m = _step2.value;
        chars += (m.content || "").length;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return Math.ceil(chars / 4);
  }

  /* ---------- CRUD ---------- */
  function saveMine(p) {
    var list = store.getProviders();
    var i = list.findIndex(function (x) {
      return x.id === p.id;
    });
    if (i >= 0) list[i] = p;else list.push(p);
    store.saveProviders(list);
  }
  function deleteMine(id) {
    store.saveProviders(store.getProviders().filter(function (p) {
      return p.id !== id;
    }));
  }
  function saveSystem(p) {
    var sys = store.sysSettings();
    var list = (sys.systemProviders || []).slice();
    var i = list.findIndex(function (x) {
      return x.id === p.id;
    });
    if (i >= 0) list[i] = p;else list.push(p);
    store.saveSysSettings({
      systemProviders: list
    });
  }
  function deleteSystem(id) {
    var sys = store.sysSettings();
    store.saveSysSettings({
      systemProviders: (sys.systemProviders || []).filter(function (p) {
        return p.id !== id;
      })
    });
  }
  function defaultProvider() {
    var list = allProviders();
    return list.find(function (p) {
      return p.default;
    }) || list[0] || null;
  }
  function markDefault(id, system) {
    if (system) {
      var sys = store.sysSettings();
      var list = (sys.systemProviders || []).map(function (p) {
        return Object.assign({}, p, {
          default: p.id === id
        });
      });
      store.saveSysSettings({
        systemProviders: list
      });
    } else {
      var _list = store.getProviders().map(function (p) {
        return Object.assign({}, p, {
          default: p.id === id
        });
      });
      store.saveProviders(_list);
    }
  }
  function setHealth(id, system, ok, ms) {
    var patch = function patch(p) {
      return Object.assign(p, {
        health: ok ? "ok" : "err",
        lastCheck: Date.now(),
        lastMs: ms
      });
    };
    if (system) {
      var sys = store.sysSettings();
      store.saveSysSettings({
        systemProviders: (sys.systemProviders || []).map(function (p) {
          return p.id === id ? patch(Object.assign({}, p)) : p;
        })
      });
    } else {
      store.saveProviders(store.getProviders().map(function (p) {
        return p.id === id ? patch(Object.assign({}, p)) : p;
      }));
    }
  }
  window.OC = window.OC || {};
  window.OC.providers = {
    TYPES: TYPES,
    allProviders: allProviders,
    getProvider: getProvider,
    baseUrl: baseUrl,
    authHeaders: authHeaders,
    fetchModels: fetchModels,
    testConnection: testConnection,
    mapError: mapError,
    webSearch: webSearch,
    searchContextBlock: searchContextBlock,
    limitBlocked: limitBlocked,
    streamChat: streamChat,
    estTokens: estTokens,
    saveMine: saveMine,
    deleteMine: deleteMine,
    saveSystem: saveSystem,
    deleteSystem: deleteSystem,
    defaultProvider: defaultProvider,
    markDefault: markDefault,
    setHealth: setHealth
  };
})();