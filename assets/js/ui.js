function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(a) { return _arrayWithoutHoles(a) || _iterableToArray(a) || _unsupportedIterableToArray(a) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { var e = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { for (var t, o = [], a = e.call(r); !(t = a.next()).done;) o.push(t.value); return o; } }
function _arrayWithoutHoles(a) { if (Array.isArray(a)) return _arrayLikeToArray(a); }
function _slicedToArray(e, i) { return _iterableToArrayLimit(e, i) || _unsupportedIterableToArray(e, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, t) { var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { var l, n, i, a, u = [], o = !0, f = !1; try { if (i = (e = e.call(r)).next, 0 === t) { if (Object(e) !== e) return; o = !1; } else for (; !(o = (l = i.call(e)).done) && (u.push(l.value), u.length !== t); o = !0); } catch (r) { f = !0, n = r; } finally { try { if (!o && null != e.return && (a = e.return(), Object(a) !== a)) return; } finally { if (f) throw n; } } return u; } }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — UI layer: shell, router, auth, chat. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var el = function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  };
  var $ = function $(sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function $$(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  };

  /* ================= icons ================= */
  var I = {
    bolt: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3.8 13.3c-.4.5 0 1.2.6 1.2H10l-1.4 7.2c-.1.7.8 1 1.2.5L19 10.9c.4-.5 0-1.2-.6-1.2H14l1.4-7.2c.1-.7-.8-1-1.2-.5z"/></svg>',
    code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    search: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>',
    sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>',
    moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
    globe: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.6 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.6-4.2-9S9.2 5.6 12 3z"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
    send: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M3.4 20.6 21.8 12 3.4 3.4 3.4 10l13 2-13 2z"/></svg>',
    stop: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    paperclip: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.4 11.05 12.3 20.1a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 1 1 5.2 5.2l-8.5 8.5a1.9 1.9 0 0 1-2.7-2.7l7.9-7.8"/></svg>',
    globeSearch: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.6 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.6-4.2-9S9.2 5.6 12 3z"/></svg>',
    copy: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    refresh: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.3M21 4v5h-5"/></svg>',
    edit: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>',
    trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6"/></svg>',
    pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3l5 5-4.5 1.5L14 12l-1.5 5.5L12 19l-4-4-5 5-1-1 5-5-4-4 1.5-.5L10 8l2.5-2.5z"/></svg>',
    star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6L5.7 21l1.5-7L2 9.3l7-.8z"/></svg>',
    archive: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8m-7 4h2"/></svg>',
    restore: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 2.6-6.3M3 4v5h5"/></svg>',
    download: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>',
    package: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.3 9 5.2M21 8.5v7L12 21l-9-5.5v-7L12 3z"/><path d="M12 11 3 8.5m9 2.5 9-2.5M12 11v10"/></svg>',
    settings: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    user: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg>',
    shield: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.4 3.4 8.3 8 9.5 4.6-1.2 8-5.1 8-9.5V6z"/></svg>',
    logout: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
    db: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    chart: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    activity: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    key: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.7-8.7M18 5l2.5 2.5M15 8l2.5 2.5"/></svg>',
    check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>',
    x: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    chevronDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    file: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
    book: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    eye: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    print: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
    plug: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5M9 8V2m6 6V2M5 8h14v3a7 7 0 0 1-14 0z"/></svg>'
  };
  OC.ui_icons = I;
  OC.el = el;
  OC.$ = $;
  OC.$$ = $$;

  /* ================= logo ================= */
  function logoSVG(size) {
    return '<svg class="logo" width="' + (size || 34) + '" height="' + (size || 34) + '" viewBox="0 0 64 64"><defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#8a86ff"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#lg1)"/><path d="M22 22 14 32l8 10" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M42 22l8 10-8 10" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M35.5 19 28 45" stroke="#d6b26a" stroke-width="5" stroke-linecap="round" fill="none"/></svg>';
  }

  /* ================= toasts ================= */
  var toastBox = null;
  function toast(msg, kind) {
    if (!toastBox) {
      toastBox = el('<div class="toasts"></div>');
      document.body.appendChild(toastBox);
    }
    var n = el('<div class="toast ' + (kind || "") + '">' + U.esc(msg) + "</div>");
    toastBox.appendChild(n);
    setTimeout(function () {
      n.style.opacity = "0";
      n.style.transition = "opacity .3s";
      setTimeout(function () {
        return n.remove();
      }, 320);
    }, 2600);
  }
  OC.toast = toast;

  /* ================= modal ================= */
  function modal(_ref) {
    var title = _ref.title,
      body = _ref.body,
      foot = _ref.foot,
      wide = _ref.wide,
      onClose = _ref.onClose;
    var back = el('<div class="modal-back"><div class="modal' + (wide ? " wide" : "") + '"><div class="modal-head"><h3>' + U.esc(title) + '</h3><button class="icon-btn" data-x>' + I.x + '</button></div><div class="modal-body"></div>' + (foot !== null ? '<div class="modal-foot"></div>' : "") + '</div></div>');
    var bodyEl = $(".modal-body", back);
    if (typeof body === "string") bodyEl.innerHTML = body;else bodyEl.appendChild(body);
    var footEl = $(".modal-foot", back);
    if (foot) {
      var _iterator = _createForOfIteratorHelper(foot),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var f = _step.value;
          footEl.appendChild(f);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    document.body.appendChild(back);
    var close = function close() {
      back.remove();
      onClose && onClose();
    };
    $("[data-x]", back).onclick = close;
    back.addEventListener("mousedown", function (e) {
      if (e.target === back) close();
    });
    return {
      el: back,
      body: bodyEl,
      close: close
    };
  }
  OC.modal = modal;
  OC.confirmDialog = confirmDialog;
  function confirmDialog(_ref2) {
    var title = _ref2.title,
      message = _ref2.message,
      danger = _ref2.danger,
      okText = _ref2.okText;
    return new Promise(function (resolve) {
      var settled = false;
      var settle = function settle(v) {
        if (!settled) {
          settled = true;
          resolve(v);
        }
      };
      var ok = el('<button class="btn ' + (danger ? "btn-danger" : "btn-primary") + '">' + U.esc(okText || t("confirm")) + "</button>");
      var cancel = el('<button class="btn">' + t("cancel") + "</button>");
      var m = modal({
        title: title || t("confirm"),
        body: '<p class="muted" style="margin:4px 0;font-size:14px">' + U.esc(message) + "</p>",
        foot: [cancel, ok],
        onClose: function onClose() {
          return settle(false);
        } // X / backdrop click = cancel
      });
      ok.onclick = function () {
        settle(true);
        m.close();
      };
      cancel.onclick = function () {
        settle(false);
        m.close();
      };
    });
  }
  OC.confirm = confirmDialog;

  /* ================= prompt dialog ================= */
  function promptDialog(_ref3) {
    var title = _ref3.title,
      label = _ref3.label,
      value = _ref3.value,
      okText = _ref3.okText;
    return new Promise(function (resolve) {
      var inp = el('<input class="input" value="' + U.esc(value || "") + '">');
      var ok = el('<button class="btn btn-primary">' + U.esc(okText || t("save")) + "</button>");
      var cancel = el('<button class="btn">' + t("cancel") + "</button>");
      var m = modal({
        title: title,
        body: '<div class="field"><label>' + U.esc(label || "") + "</label></div>",
        foot: [cancel, ok]
      });
      $(".field", m.body).appendChild(inp);
      ok.onclick = function () {
        var v = inp.value.trim();
        m.close();
        resolve(v);
      };
      cancel.onclick = function () {
        m.close();
        resolve(null);
      };
      inp.focus();
      inp.select();
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter") ok.click();
      });
    });
  }
  OC.promptDialog = promptDialog;

  /* ================= context menu ================= */
  function ctxMenu(x, y, items) {
    $$(".ctx").forEach(function (n) {
      return n.remove();
    });
    var m = el('<div class="ctx"></div>');
    var _iterator2 = _createForOfIteratorHelper(items),
      _step2;
    try {
      var _loop = function _loop() {
        var it = _step2.value;
        if (it === "-") {
          m.appendChild(el('<div class="sep"></div>'));
          return 1; // continue
        }
        var b = el('<button class="' + (it.danger ? "danger" : "") + '">' + (it.icon || "") + "<span>" + U.esc(it.label) + "</span></button>");
        b.onclick = function () {
          close();
          it.onClick && it.onClick();
        };
        m.appendChild(b);
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        if (_loop()) continue;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    document.body.appendChild(m);
    var r = m.getBoundingClientRect();
    var vw = window.innerWidth,
      vh = window.innerHeight;
    m.style.left = Math.min(x, vw - r.width - 8) + "px";
    m.style.top = Math.min(y, vh - r.height - 8) + "px";
    var close = function close() {
      m.remove();
      document.removeEventListener("mousedown", onDoc);
    };
    var onDoc = function onDoc(e) {
      if (!m.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onDoc);
    return close;
  }
  OC.ctxMenu = ctxMenu;
  function dropMenu(anchor, items, opts) {
    $$(".menu-pop").forEach(function (n) {
      return n.remove();
    });
    var m = el('<div class="menu-pop"></div>');
    if (opts && opts.header) m.appendChild(el(opts.header));
    var _iterator3 = _createForOfIteratorHelper(items),
      _step3;
    try {
      var _loop2 = function _loop2() {
        var it = _step3.value;
        var b = el('<button class="mi ' + (it.danger ? "danger" : "") + '">' + (it.icon || "") + "<span>" + U.esc(it.label) + "</span></button>");
        b.onclick = function () {
          close();
          it.onClick && it.onClick();
        };
        m.appendChild(b);
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    document.body.appendChild(m);
    var ar = anchor.getBoundingClientRect(),
      r = m.getBoundingClientRect();
    var isRTLdir = OC.i18n.isRTL();
    var left = isRTLdir ? ar.left - r.width + ar.width : ar.left;
    left = Math.max(8, Math.min(left, window.innerWidth - r.width - 8));
    var top = ar.bottom + 6;
    if (top + r.height > window.innerHeight - 8) top = ar.top - r.height - 6;
    m.style.left = left + "px";
    m.style.top = Math.max(8, top) + "px";
    var close = function close() {
      m.remove();
      document.removeEventListener("mousedown", onDoc);
    };
    var onDoc = function onDoc(e) {
      if (!m.contains(e.target) && e.target !== anchor) close();
    };
    setTimeout(function () {
      return document.addEventListener("mousedown", onDoc);
    }, 0);
    return close;
  }
  OC.dropMenu = dropMenu;

  /* ================= theme ================= */
  function applyTheme(theme) {
    var dark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0a0c12" : "#f7f8fb");
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    var s = store.getUserSettings();
    if (s.theme === "system") applyTheme("system");
  });
  OC.applyTheme = applyTheme;

  /* ================= avatar ================= */
  function avatarHTML(user, size) {
    var s = size || 36;
    if (user && user.avatar) return '<span class="avatar" style="width:' + s + 'px;height:' + s + 'px"><img src="' + user.avatar + '" alt=""></span>';
    var ini = user && user.name ? user.name.trim().slice(0, 1) : "؟";
    return '<span class="avatar" style="width:' + s + 'px;height:' + s + 'px">' + U.esc(ini) + "</span>";
  }
  OC.avatarHTML = avatarHTML;

  /* ================= router ================= */
  var routes = {};
  OC.routes = routes;
  var currentRoute = "";
  function route(path, view) {
    routes[path] = view;
  }
  OC.route = route;
  function navigate(path) {
    location.hash = path;
  }
  OC.navigate = navigate;
  function renderRoute() {
    var user = store.currentUser();
    var hash = location.hash.replace(/^#/, "") || "/chat";
    if (!user && !hash.startsWith("/login") && !hash.startsWith("/register")) {
      hash = "/login";
      location.hash = "/login";
    }
    if (user && (hash.startsWith("/login") || hash.startsWith("/register"))) {
      hash = "/chat";
      location.hash = "/chat";
    }
    // match longest prefix
    var path = (hash || "").split("?")[0];
    var fn = routes[path];
    while (!fn && typeof path === "string" && path.includes("/")) {
      path = path.slice(0, path.lastIndexOf("/"));
      fn = routes[path];
    }
    if (!fn) fn = routes["/chat"];
    currentRoute = hash;
    closeSidebar();
    fn(hash);
  }
  window.addEventListener("hashchange", renderRoute);

  /* ================= sidebar (mobile) ================= */
  function openSidebar() {
    var sb = $("#sidebar");
    if (!sb) return;
    sb.classList.add("open");
    if (!$(".side-scrim")) {
      var sc = el('<div class="side-scrim"></div>');
      sc.onclick = closeSidebar;
      document.body.appendChild(sc);
    }
  }
  function closeSidebar() {
    var sb = $("#sidebar");
    if (sb) sb.classList.remove("open");
    var sc = $(".side-scrim");
    if (sc) sc.remove();
  }
  OC.openSidebar = openSidebar;
  OC.closeSidebar = closeSidebar;

  /* ================= topbar ================= */
  function topbarHTML(user) {
    var adminLink = user && user.role === "admin" ? '<button class="icon-btn" data-nav="/admin" title="' + t("admin") + '">' + I.shield + "</button>" : "";
    return '<div class="topbar">' + '<button class="icon-btn" id="side-toggle">' + I.menu + "</button>" + '<div class="brand">' + logoSVG() + '<div><div class="bname">' + t("appName") + '</div><div class="btag">' + t("tagline") + "</div></div></div>" + '<div class="spacer"></div>' + adminLink + '<button class="icon-btn" data-nav="/connections" title="' + t("connTitle") + '">' + I.plug + "</button>" + '<button class="icon-btn" data-nav="/prompts" title="' + t("prompts") + '">' + I.book + "</button>" + '<button class="icon-btn" data-nav="/usage" title="' + t("usage") + '">' + I.chart + "</button>" + '<button class="icon-btn" id="top-theme" title="' + t("theme") + '">' + I.sun + "</button>" + '<button class="icon-btn" id="top-lang" title="' + t("language") + '">' + I.globe + "</button>" + '<button class="icon-btn" id="top-user">' + avatarHTML(user, 30) + "</button>" + "</div>";
  }
  function bindTopbar(user) {
    var themeBtn = $("#top-theme");
    var s = store.getUserSettings();
    themeBtn.innerHTML = s.theme === "dark" ? I.moon : I.sun;
    themeBtn.onclick = function () {
      var cur = store.getUserSettings().theme;
      var order = {
        system: "dark",
        dark: "light",
        light: "system"
      };
      var next = order[cur] || "system";
      store.saveUserSettings({
        theme: next
      });
      applyTheme(next);
      themeBtn.innerHTML = next === "dark" ? I.moon : I.sun;
      toast(t("theme") + ": " + (next === "system" ? t("themeSystem") : next === "dark" ? t("themeDark") : t("themeLight")));
    };
    $("#top-lang").onclick = function () {
      var cur = OC.i18n.locale();
      OC.i18n.setLocale(cur === "fa" ? "en" : "fa");
      renderRoute();
    };
    $("#side-toggle").onclick = function () {
      if (window.innerWidth <= 900) openSidebar();else {
        var sb = $("#sidebar");
        if (!sb) return;
        var hidden = sb.style.display === "none";
        sb.style.display = hidden ? "" : "none";
        $("#main-area").parentElement.classList.toggle("no-side", !hidden);
      }
    };
    $("#top-user").onclick = function (e) {
      dropMenu(e.currentTarget, [{
        icon: I.user,
        label: user.name + " " + (user.last || ""),
        onClick: function onClick() {
          return navigate("/profile");
        }
      }, {
        icon: I.settings,
        label: t("settings"),
        onClick: function onClick() {
          return navigate("/settings");
        }
      }, {
        icon: I.key,
        label: t("changePassword"),
        onClick: function onClick() {
          return navigate("/profile");
        }
      }, "-", {
        icon: I.logout,
        label: t("loggedOut").replace("شدید", "شدن") || t("logout"),
        onClick: doLogout,
        danger: false
      }], {
        header: '<div class="mi-user"><div class="u-name">' + U.esc(user.name + " " + (user.last || "")) + '</div><div class="u-mail small muted">' + U.esc(user.email) + "</div></div>"
      });
    };
    $$("[data-nav]").forEach(function (b) {
      b.onclick = function () {
        return navigate(b.dataset.nav);
      };
    });
  }
  function doLogout() {
    var u = store.currentUser();
    store.logout();
    if (u) store.logActivity(u.email, "logout", "");
    toast(t("loggedOut"), "ok");
    navigate("/login");
    renderRoute();
  }

  /* ================= shell ================= */
  function renderShell(contentHTML) {
    var user = store.currentUser();
    var root = $("#root");
    root.innerHTML = '<div class="app" id="app-shell">' + '<div class="sidebar" id="sidebar"></div>' + topbarHTML(user) + '<div class="main" id="main-area">' + contentHTML + "</div>" + "</div>";
    bindTopbar(user);
    OC.renderSidebar();
  }
  OC.renderShell = renderShell;

  /* ================= sidebar render ================= */
  function sectionLabel(key, icon) {
    return '<div class="side-section">' + (icon || "") + t(key) + "</div>";
  }
  function groupConvs(list) {
    var now = Date.now();
    var groups = {
      pinned: [],
      fav: [],
      today: [],
      yest: [],
      d7: [],
      d30: [],
      older: []
    };
    var startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    var t0 = startOfToday.getTime();
    var _iterator4 = _createForOfIteratorHelper(list),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var c = _step4.value;
        if (c.pinned) {
          groups.pinned.push(c);
          continue;
        }
        if (c.fav) {
          groups.fav.push(c);
          continue;
        }
        var d = c.updatedAt || c.createdAt || now;
        if (d >= t0) groups.today.push(c);else if (d >= t0 - 864e5) groups.yest.push(c);else if (d >= t0 - 7 * 864e5) groups.d7.push(c);else if (d >= t0 - 30 * 864e5) groups.d30.push(c);else groups.older.push(c);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    for (var _i = 0, _Object$keys = Object.keys(groups); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      groups[k].sort(function (a, b) {
        return (b.updatedAt || 0) - (a.updatedAt || 0);
      });
    }
    return groups;
  }
  OC.renderSidebar = function () {
    var sb = $("#sidebar");
    if (!sb) return;
    var user = store.currentUser();
    if (!user) {
      sb.innerHTML = "";
      return;
    }
    var q = (OC._sideQuery || "").trim();
    var convs = store.getConvs().filter(function (c) {
      return !c.archived && !c.trashed;
    });
    if (q) convs = convs.filter(function (c) {
      return (c.title || "").toLowerCase().includes(q.toLowerCase()) || c.messages && c.messages.some(function (m) {
        return (m.content || "").toLowerCase().includes(q.toLowerCase());
      });
    });
    var archCount = store.getConvs().filter(function (c) {
      return c.archived && !c.trashed;
    }).length;
    var trashCount = store.getConvs().filter(function (c) {
      return c.trashed;
    }).length;
    var g = groupConvs(convs);
    var convItem = function convItem(c) {
      var active = OC._currentConvId === c.id ? " active" : "";
      return '<div class="conv-item' + active + '" data-cid="' + c.id + '">' + '<span class="c-ico">' + I.code + "</span>" + '<span class="c-title">' + U.esc(c.title || t("newChat")) + "</span>" + (c.gh && c.gh.on ? '<span class="c-gh" style="display:inline-flex;opacity:.6;margin-inline-start:4px" title="GitHub">' + I.book + "</span>" : "") + '<button class="c-del" title="' + t("rename") + '" data-more="' + c.id + '">' + I.chevronDown + "</button>" + "</div>";
    };
    var html = '<div class="side-head"><button class="new-chat-btn" id="btn-new-chat">' + I.plus + "<span>" + t("newChat") + "</span></button>" + '<button class="icon-btn" id="btn-new-wizard" title="' + t("wizTitle") + '">' + I.bolt + "</button></div>" + '<div class="side-search"><input class="input" id="side-q" placeholder="' + t("searchChats") + '" value="' + U.esc(q) + '"></div>' + '<div class="side-list" id="side-list">';
    if (q && !convs.length) html += '<div class="side-section">' + t("noChatFound") + "</div>";
    if (g.pinned.length) {
      html += sectionLabel("pinned", I.pin) + g.pinned.map(convItem).join("");
    }
    if (g.fav.length) {
      html += sectionLabel("favorites", I.star) + g.fav.map(convItem).join("");
    }
    for (var _i2 = 0, _arr = ["today", "yest", "d7", "d30", "older"]; _i2 < _arr.length; _i2++) {
      var k = _arr[_i2];
      if (g[k].length) {
        html += sectionLabel(k) + g[k].map(convItem).join("");
      }
    }
    if (!q && !convs.length) html += '<div class="side-section muted">' + t("nothingHere") + "</div>";
    html += "</div>" + '<div class="side-foot">' + (archCount ? '<button class="user-pill" data-arch="1"><span class="c-ico">' + I.archive + '</span><span class="u-name">' + t("archive") + ' <span class="badge">' + archCount + "</span></span></button>" : "") + (trashCount ? '<button class="user-pill" data-trash="1"><span class="c-ico">' + I.trash + '</span><span class="u-name">' + t("trash") + ' <span class="badge">' + trashCount + "</span></span></button>" : "") + '<button class="user-pill" id="pill-user">' + avatarHTML(user) + '<span style="min-width:0"><span class="u-name" style="display:block">' + U.esc(user.name + " " + (user.last || "")) + '</span><span class="u-mail" style="display:block">' + U.esc(user.email) + "</span></span></button>" + "</div>";
    sb.innerHTML = html;
    OC._sideQuery = q;
    $("#btn-new-chat").onclick = function () {
      OC.newChat();
      closeSidebar();
    };
    var wizBtn = $("#btn-new-wizard");
    if (wizBtn) wizBtn.onclick = function () {
      closeSidebar();
      OC.openProjectWizard();
    };
    var qInp = $("#side-q");
    qInp.addEventListener("input", U.debounce(function () {
      OC._sideQuery = qInp.value;
      OC.renderSidebar();
      var nq = $("#side-q");
      if (nq) {
        nq.focus();
        nq.setSelectionRange(nq.value.length, nq.value.length);
      }
    }, 250));
    $$(".conv-item", sb).forEach(function (item) {
      var cid = item.dataset.cid;
      item.onclick = function (e) {
        if (e.target.closest("[data-more]")) return;
        navigate("/chat/" + cid);
        closeSidebar();
      };
      item.oncontextmenu = function (e) {
        e.preventDefault();
        convMenu(e.clientX, e.clientY, cid);
      };
      var moreBtn = $("[data-more]", item);
      if (moreBtn) moreBtn.onclick = function (e) {
        var r = moreBtn.getBoundingClientRect();
        convMenu(r.left, r.bottom + 4, cid);
      };
    });
    var arch = $("[data-arch]", sb);
    if (arch) arch.onclick = function () {
      OC.showArchiveList();
    };
    var trashBtn = $("[data-trash]", sb);
    if (trashBtn) trashBtn.onclick = function () {
      OC.showTrashList();
    };
    $("#pill-user").onclick = function (e) {
      dropMenu(e.currentTarget, [{
        icon: I.user,
        label: t("profile"),
        onClick: function onClick() {
          return navigate("/profile");
        }
      }, {
        icon: I.settings,
        label: t("settings"),
        onClick: function onClick() {
          return navigate("/settings");
        }
      }, {
        icon: I.logout,
        label: t("loggedOut").replace("شدید", "شدن"),
        onClick: doLogout
      }]);
    };
  };
  function convMenu(x, y, cid) {
    var c = store.getConv(cid);
    if (!c) return;
    ctxMenu(x, y, [{
      icon: I.edit,
      label: t("renameChat"),
      onClick: function () {
        var _onClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var v;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.n = 1;
                return OC.promptDialog({
                  title: t("renameChat"),
                  label: t("newName"),
                  value: c.title,
                  okText: t("save")
                });
              case 1:
                v = _context.v;
                if (v) {
                  c.title = v;
                  store.putConv(c);
                  OC.renderSidebar();
                  toast(t("chatRenamed"), "ok");
                }
              case 2:
                return _context.a(2);
            }
          }, _callee);
        }));
        function onClick() {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }()
    }, c.pinned ? {
      icon: I.pin,
      label: t("unpin"),
      onClick: function onClick() {
        c.pinned = false;
        store.putConv(c);
        OC.renderSidebar();
        toast(t("unpinDone"));
      }
    } : {
      icon: I.pin,
      label: t("pin"),
      onClick: function onClick() {
        c.pinned = true;
        store.putConv(c);
        OC.renderSidebar();
        toast(t("pinnedTop"), "ok");
      }
    }, c.fav ? {
      icon: I.star,
      label: t("favoriteRemove"),
      onClick: function onClick() {
        c.fav = false;
        store.putConv(c);
        OC.renderSidebar();
      }
    } : {
      icon: I.star,
      label: t("favoriteAdd"),
      onClick: function onClick() {
        c.fav = true;
        store.putConv(c);
        OC.renderSidebar();
      }
    }, "-", {
      icon: I.archive,
      label: t("archive"),
      onClick: function onClick() {
        c.archived = true;
        store.putConv(c);
        OC.renderSidebar();
        toast(t("archived"));
      }
    }, {
      icon: I.trash,
      label: t("toTrash"),
      danger: true,
      onClick: function () {
        var _onClick2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return OC.confirm({
                  title: t("toTrash"),
                  message: t("toTrashMsg"),
                  danger: true,
                  okText: t("confirm")
                });
              case 1:
                if (!_context2.v) {
                  _context2.n = 2;
                  break;
                }
                c.trashed = true;
                c.trashedAt = Date.now();
                store.putConv(c);
                if (OC._currentConvId === c.id) navigate("/chat");
                OC.renderSidebar();
                toast(t("trashed"));
              case 2:
                return _context2.a(2);
            }
          }, _callee2);
        }));
        function onClick() {
          return _onClick2.apply(this, arguments);
        }
        return onClick;
      }()
    }, "-", {
      icon: I.download,
      label: t("export") + " (MD)",
      onClick: function onClick() {
        return OC.exportChatMd(c);
      }
    }, {
      icon: I.print,
      label: t("printView"),
      onClick: function onClick() {
        navigate("/chat/" + c.id);
        setTimeout(function () {
          return window.print();
        }, 400);
      }
    }]);
  }
  OC.convMenu = convMenu;

  /* ================= archive & trash lists ================= */
  OC.showArchiveList = function () {
    var list = store.getConvs().filter(function (c) {
      return c.archived && !c.trashed;
    });
    var body = el('<div class="stack"></div>');
    if (!list.length) body.appendChild(el('<p class="muted small">' + t("nothingHere") + "</p>"));
    list.forEach(function (c) {
      var row = el('<div class="flex"><span class="c-ico">' + I.archive + '</span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + U.esc(c.title) + '</span><button class="btn btn-sm">' + t("unarchived").replace("به فهرست ", "") + "</button></div>");
      $("button", row).onclick = function () {
        c.archived = false;
        store.putConv(c);
        OC.renderSidebar();
        m.close();
        toast(t("unarchived"), "ok");
      };
      body.appendChild(row);
    });
    var m = modal({
      title: t("archive"),
      body: body
    });
  };
  OC.showTrashList = function () {
    var list = store.getConvs().filter(function (c) {
      return c.trashed;
    });
    var body = el('<div class="stack"></div>');
    if (!list.length) body.appendChild(el('<p class="muted small">' + t("emptyTrash") + "</p>"));
    list.forEach(function (c) {
      var days = Math.max(0, Math.ceil((c.trashedAt + store.sysSettings().trashDays * 864e5 - Date.now()) / 864e5));
      var row = el('<div class="flex"><span class="c-ico">' + I.trash + '</span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + U.esc(c.title) + '</span><span class="badge small">' + U.faNum(days) + " " + t("days7").replace("۷ ", "") + '</span><button class="btn btn-sm">' + t("restore") + '</button><button class="btn btn-sm btn-soft-danger">' + t("deleteForever") + "</button></div>");
      var _$$ = $$("button", row),
        _$$2 = _slicedToArray(_$$, 2),
        bRestore = _$$2[0],
        bDel = _$$2[1];
      bRestore.onclick = function () {
        c.trashed = false;
        delete c.trashedAt;
        store.putConv(c);
        OC.renderSidebar();
        m.close();
        toast(t("restored"), "ok");
      };
      bDel.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var all;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return OC.confirm({
                title: t("deleteForever"),
                message: t("deleteForeverMsg"),
                danger: true
              });
            case 1:
              if (!_context3.v) {
                _context3.n = 2;
                break;
              }
              all = store.getConvs().filter(function (x) {
                return x.id !== c.id;
              });
              store.saveConvs(all);
              OC.renderSidebar();
              m.close();
              toast(t("deletedForever"));
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      body.appendChild(row);
    });
    var m = modal({
      title: t("trash"),
      body: body
    });
  };

  /* ================= export chat ================= */
  OC.exportChatMd = function (c) {
    var md = ["# " + (c.title || t("newChat")), ""].concat(_toConsumableArray(c.messages.map(function (m) {
      return (m.role === "user" ? "## " + t("you") : "## " + t("assistantAvatar")) + "\n\n" + (m.content || "");
    }))).join("\n\n");
    U.download((c.title || "chat").replace(/[\\/:*?"<>|]+/g, "-") + ".md", new Blob([md], {
      type: "text/markdown"
    }));
    toast(t("downloaded"), "ok");
  };

  /* ================= new chat ================= */
  OC.newChat = function () {
    OC._currentConvId = null;
    navigate("/chat");
    if (routes["/chat"]) routes["/chat"]("/chat");
  };

  /* ================= AUTH VIEWS ================= */
  function authShell(cardHTML) {
    $("#root").innerHTML = '<div class="auth-wrap">' + '<div class="auth-top">' + '<div class="spacer"></div>' + '<button class="icon-btn" id="top-theme">' + I.sun + '</button>' + '<button class="icon-btn" id="top-lang">' + I.globe + "</button>" + "</div>" + '<div class="auth-card">' + cardHTML + "</div>" + '<p class="auth-note">' + t("privacyNote") + "</p>" + "</div>";
    var themeBtn = $("#top-theme");
    var applyIcon = function applyIcon() {
      return themeBtn.innerHTML = document.documentElement.classList.contains("dark") ? I.moon : I.sun;
    };
    themeBtn.onclick = function () {
      var dark = document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", !dark);
      document.documentElement.style.colorScheme = !dark ? "dark" : "light";
      applyIcon();
    };
    applyIcon();
    $("#top-lang").onclick = function () {
      OC.i18n.setLocale(OC.i18n.locale() === "fa" ? "en" : "fa");
      renderRoute();
    };
  }
  routes["/login"] = function () {
    var sys = store.sysSettings();
    if (sys.maintenance) {
      authShell('<h1>' + t("maintenance") + '</h1><p class="sub">' + t("wait") + "</p>");
      return;
    }
    authShell("<h1>" + t("welcomeBack") + "</h1>" + '<p class="sub">' + t("connectOwnKey") + "</p>" + '<form id="login-form">' + '<div class="field"><label>' + t("email") + " / " + t("username") + '</label><input class="input" id="f-id" autocomplete="username" required></div>' + '<div class="field"><label>' + t("password") + '</label><input class="input" type="password" id="f-pass" autocomplete="current-password" required></div>' + '<div class="err-text hidden" id="f-err"></div>' + '<button class="btn btn-primary btn-lg" type="submit">' + t("login") + "</button>" + "</form>" + '<p class="auth-alt">' + t("noAccount") + ' <a href="#/register">' + t("register") + "</a></p>");
    $("#login-form").onsubmit = function (e) {
      e.preventDefault();
      var id = $("#f-id").value.trim();
      var pass = $("#f-pass").value;
      var err = $("#f-err");
      var user = store.findUser(id);
      if (!user || user.passHash !== store.hashPass(pass, user.email)) {
        err.textContent = t("wrongCreds");
        err.classList.remove("hidden");
        return;
      }
      if (user.disabled) {
        err.textContent = t("noAccess");
        err.classList.remove("hidden");
        return;
      }
      store.createSession(user);
      store.logActivity(user.email, "login", "");
      applyTheme(store.getUserSettings().theme);
      toast(t("welcomeBack") + " 👋", "ok");
      navigate("/chat");
      renderRoute();
    };
  };
  routes["/register"] = function () {
    var sys = store.sysSettings();
    if (sys.maintenance) {
      routes["/login"]();
      return;
    }
    if (!sys.signupOpen) {
      authShell("<h1>" + t("signupClosed") + '</h1><p class="sub">' + t("wait") + "</p>" + '<p class="auth-alt">' + t("haveAccount") + ' <a href="#/login">' + t("login") + "</a></p>");
      return;
    }
    authShell("<h1>" + t("buildWorkspace") + "</h1>" + '<p class="sub">' + t("connectOwnKey") + "</p>" + '<form id="reg-form" class="stack">' + '<div class="grid-2"><div class="field"><label>' + t("fullName") + '</label><input class="input" id="f-name" required></div>' + '<div class="field"><label>' + t("lastName") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="f-last"></div></div>' + '<div class="field"><label>' + t("email") + '</label><input class="input" id="f-email" type="email" required></div>' + '<div class="field"><label>' + t("username") + '</label><input class="input" id="f-user" required></div>' + '<div class="field"><label>' + t("phone") + ' <span class="muted">(' + t("iranianPhone") + ' ۰۹۱۲۱۲۳۴۵۶۷)</span></label><input class="input" id="f-phone" inputmode="tel" placeholder="09xxxxxxxxx"></div>' + '<div class="field"><label>' + t("password") + '</label><input class="input" type="password" id="f-pass" required><span class="hint">' + t("minChars") + "</span></div>" + '<div class="err-text hidden" id="f-err"></div>' + '<button class="btn btn-primary btn-lg" type="submit">' + t("register") + "</button>" + "</form>" + '<p class="auth-alt">' + t("haveAccount") + ' <a href="#/login">' + t("login") + "</a></p>");
    $("#reg-form").onsubmit = function (e) {
      e.preventDefault();
      var err = $("#f-err");
      err.classList.add("hidden");
      var name = $("#f-name").value.trim();
      var last = $("#f-last").value.trim();
      var email = $("#f-email").value.trim().toLowerCase();
      var username = $("#f-user").value.trim().toLowerCase();
      var phone = $("#f-phone").value.trim();
      var pass = $("#f-pass").value;
      var msg = "";
      if (!name || !email || !username || !pass) msg = t("fillFields");else if (!store.validEmail(email)) msg = t("invalidEmail");else if (!store.passOk(pass)) msg = t("passWeak") + " — " + t("minChars");else if (phone && !store.validPhone(phone)) msg = t("invalidPhone");else if (store.getUsers().some(function (u) {
        return u.email.toLowerCase() === email;
      })) msg = t("emailTaken");else if (store.getUsers().some(function (u) {
        return (u.username || "").toLowerCase() === username;
      })) msg = t("usernameTaken");
      if (msg) {
        err.textContent = msg;
        err.classList.remove("hidden");
        return;
      }
      var user = {
        id: U.uid(),
        email: email,
        username: username,
        name: name,
        last: last,
        phone: phone,
        passHash: store.hashPass(pass, email),
        role: "user",
        avatar: "",
        createdAt: Date.now(),
        disabled: false
      };
      var users = store.getUsers();
      users.push(user);
      store.saveUsers(users);
      store.logActivity(email, "register", name + " " + last);
      store.createSession(user);
      toast(t("accountCreated"), "ok");
      navigate("/chat");
      renderRoute();
    };
  };

  /* ================= CHAT VIEW ================= */
  var streamHandle = null;
  var pendingFiles = [];
  routes["/chat"] = function (hash) {
    var convId = hash.split("/")[2] || null;
    OC._currentConvId = convId;
    renderShell('<div class="chat-layout" id="chat-root"></div>');
    OC.renderSidebar();
    renderChat(convId);
    if (OC.github && OC.github.syncChat) {
      OC.github.syncChat().then(function () {
        if (OC.renderGhChip) OC.renderGhChip();
      });
    }
    if (window.innerWidth <= 900) closeSidebar();
  };
  function currentConv() {
    return OC._currentConvId ? store.getConv(OC._currentConvId) : null;
  }
  function renderChat(convId) {
    var root = $("#chat-root");
    if (!root) return;
    var conv = convId ? currentConv() : null;
    if (convId && !conv) {
      navigate("/chat");
      return;
    }
    var user = store.currentUser();
    var provs = OC.providers.allProviders();
    var sys = store.sysSettings();
    var settings = store.getUserSettings();

    // model selector options
    var selOptions = "";
    var defP = OC.providers.defaultProvider();
    var _iterator5 = _createForOfIteratorHelper(provs),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var p = _step5.value;
        var _iterator6 = _createForOfIteratorHelper(p.models || []),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var m = _step6.value;
            var sel = conv && conv.model === p.id + "::" + m ? " selected" : "";
            selOptions += '<option value="' + U.esc(p.id + "::" + m) + '"' + sel + ">" + U.esc((p.name || p.type) + " · " + m) + "</option>";
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var canSearch = sys.webSearchEnabled;
    var searchOn = conv ? !!conv.webSearch : !!OC._pendingSearch;
    root.innerHTML = '<div class="chat-scroll" id="chat-scroll"><div class="chat-inner" id="chat-inner"></div></div>' + '<div class="composer-wrap"><div class="composer" id="composer">' + '<div class="pending-strip hidden" id="pending-strip"></div>' + '<textarea id="composer-input" rows="1" placeholder="' + t("messagePlaceholder") + '"></textarea>' + '<div class="composer-row">' + '<button class="icon-btn" id="btn-attach" title="' + t("attach") + '">' + I.paperclip + "</button>" + '<button class="icon-btn" id="btn-gh" title="' + t("ghChatBtn") + '">' + I.book + "</button>" + '<input type="file" id="file-input" multiple class="hidden">' + (canSearch ? '<button class="icon-btn' + (searchOn ? " active" : "") + '" id="btn-websearch" title="' + (searchOn ? t("webSearchOn") : t("webSearchOff")) + '">' + I.globeSearch + "</button>" : "") + '<button class="icon-btn" id="btn-deliver" title="' + t("projectDelivery") + '">' + I.package + "</button>" + '<div class="spacer"></div>' + (provs.length ? '<div class="model-pick"><select id="model-select">' + (selOptions || '<option value="">' + t("defaultModel") + "</option>") + "</select></div>" : '<span class="badge badge-warn">' + t("addProviderFirst") + "</span>") + '<button class="send-btn" id="btn-send">' + I.send + "</button>" + "</div></div></div>";
    renderMessages(conv);
    var input = $("#composer-input");
    input.addEventListener("input", function () {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 180) + "px";
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendCurrent();
      }
    });
    $("#btn-send").onclick = sendCurrent;
    $("#btn-attach").onclick = function () {
      return $("#file-input").click();
    };
    var ghBtn = $("#btn-gh");
    if (ghBtn) ghBtn.onclick = function () {
      if (OC.showChatGithub) OC.showChatGithub();else location.hash = "/github";
    };
    $("#file-input").onchange = onFilesPicked;
    var wsBtn = $("#btn-websearch");
    if (wsBtn) wsBtn.onclick = function () {
      var c = currentConv() || {};
      c.webSearch = !searchOn;
      if (c.id) store.putConv(c);else OC._pendingSearch = c.webSearch;
      wsBtn.classList.toggle("active", c.webSearch);
      wsBtn.title = c.webSearch ? t("webSearchOn") : t("webSearchOff");
      toast(c.webSearch ? t("webSearchOn") : t("webSearchOff"));
    };
    var deliverBtn = $("#btn-deliver");
    if (deliverBtn) deliverBtn.onclick = function () {
      return OC.deliverProject(currentConv());
    };
    renderPending(); // keeps the attached-repo chip stable on re-render
    if (window.innerWidth > 900) input.focus();
  }
  var DATAURL_MAX = 4 * 1024 * 1024; // keep base64 content ≤ ~4MB so it persists in local storage

  function onFilesPicked(e) {
    var sys = store.sysSettings();
    var files = Array.from(e.target.files || []);
    e.target.value = "";
    var maxB = (sys.maxFileSizeMB || 10) * 1024 * 1024;
    var exts = sys.allowedExtensions || [];
    var anyFmt = !exts.length || exts[0] === "*";
    var readAsDataItem = function readAsDataItem(f, item) {
      if (f.size > DATAURL_MAX) {
        item.binary = true;
        item.tooBig = true;
        renderPending();
        return;
      }
      var rd = new FileReader();
      rd.onload = function () {
        item.dataUrl = rd.result;
        renderPending();
      };
      rd.readAsDataURL(f);
    };
    var readSniff = function readSniff(f, item) {
      var rd = new FileReader();
      rd.onload = function () {
        var buf = new Uint8Array(rd.result);
        var nul = false;
        for (var i = 0; i < Math.min(1024, buf.length); i++) {
          if (!buf[i]) {
            nul = true;
            break;
          }
        }
        if (!nul) {
          try {
            item.text = new TextDecoder("utf-8").decode(rd.result).slice(0, 40000);
          } catch (e2) {
            item.text = "";
          }
        } else {
          item.binary = true;
          if (f.size <= DATAURL_MAX) {
            var rd2 = new FileReader();
            rd2.onload = function () {
              item.dataUrl = rd2.result;
              renderPending();
            };
            rd2.readAsDataURL(f);
          } else {
            item.tooBig = true;
          }
        }
        renderPending();
      };
      rd.readAsArrayBuffer(f);
    };
    for (var _i3 = 0, _files = files; _i3 < _files.length; _i3++) {
      var f = _files[_i3];
      var ext = (f.name.split(".").pop() || "").toLowerCase();
      if (!anyFmt && !exts.includes(ext)) {
        toast(t("fileTypeUnsupported") + ": ." + ext, "err");
        continue;
      }
      if (f.size > maxB) {
        toast(t("fileTooBig") + " (" + f.name + ")", "err");
        continue;
      }
      if (pendingFiles.length >= 10) {
        toast(t("fileTooMany"), "err");
        break;
      }
      var item = {
        id: U.uid(),
        name: f.name,
        size: f.size,
        type: f.type,
        ext: ext
      };
      if (f.type.startsWith("image/")) {
        readAsDataItem(f, item);
      } else {
        readSniff(f, item);
      }
      pendingFiles.push(item);
    }
    renderPending();
  }
  function renderPending() {
    var strip = $("#pending-strip");
    if (!strip) return;
    var ghAt = OC.github && OC.github.attached() ? OC.github.attached() : null;
    var ghGranted = OC.github && OC.github.chatGh ? !!(OC.github.chatGh() && OC.github.chatGh().on) : false;
    var ghPending = ghGranted && !ghAt;
    var connAt = OC.connectors && OC.connectors.attached() ? OC.connectors.attached() : null;
    if (!pendingFiles.length && !ghAt && !ghPending && !connAt) {
      strip.classList.add("hidden");
      strip.innerHTML = "";
      return;
    }
    strip.classList.remove("hidden");
    var html = pendingFiles.map(function (f) {
      return '<span class="attach-chip">' + (f.dataUrl ? f.type && f.type.indexOf("image/") === 0 ? '<img src="' + f.dataUrl + '">' : '<a class="attach-dl" href="' + f.dataUrl + '" download="' + U.esc(f.name) + '" title="' + t("download") + '">' + I.download + "</a>" : f.binary ? I.package : I.file) + '<span class="aname">' + U.esc(f.name) + "</span>" + '<span class="muted small">' + U.fmtBytes(f.size) + "</span>" + '<button class="icon-btn" style="width:24px;height:24px" data-rm="' + f.id + '">' + I.x + "</button></span>";
    }).join("");
    if (ghAt) {
      html += '<span class="attach-chip gh-chip">' + I.book + '<span class="aname" style="direction:ltr">' + U.esc(ghAt.repo + " @" + ghAt.branch) + "</span>" + '<span class="muted small">Git</span>' + '<button class="icon-btn" style="width:24px;height:24px" id="gh-detach-btn">' + I.x + "</button></span>";
    } else if (ghPending) {
      html += '<span class="attach-chip gh-chip">' + I.book + '<span class="aname">' + t("ghChatNoRepo") + "</span>" + '<button class="icon-btn" style="width:24px;height:24px" id="gh-pick-btn" title="' + t("ghChatPickRepo") + '">' + I.chevronDown + "</button></span>";
    }
    if (connAt) {
      var connNames = {
        wordpress: "WordPress",
        telegram: "Telegram",
        rubika: "Rubika",
        host: "Host"
      };
      html += '<span class="attach-chip conn-chip">' + I.plug + '<span class="aname">' + U.esc(connAt.name) + "</span>" + '<span class="muted small">' + U.esc(connNames[connAt.type] || connAt.type) + "</span>" + '<button class="icon-btn" style="width:24px;height:24px" id="conn-detach-btn">' + I.x + "</button></span>";
    }
    strip.innerHTML = html;
    $$("[data-rm]", strip).forEach(function (b) {
      b.onclick = function () {
        pendingFiles = pendingFiles.filter(function (f) {
          return f.id !== b.dataset.rm;
        });
        renderPending();
      };
    });
    var det = $("#gh-detach-btn", strip);
    if (det) det.onclick = function () {
      if (OC.github) OC.github.detach();
      renderPending();
    };
    var pick = $("#gh-pick-btn", strip);
    if (pick) pick.onclick = function () {
      if (OC.showChatGithub) OC.showChatGithub();
    };
    var cdet = $("#conn-detach-btn", strip);
    if (cdet) cdet.onclick = function () {
      if (OC.connectors) OC.connectors.detach();
      renderPending();
    };
  }

  /* ---------- message rendering ---------- */
  function renderMessages(conv) {
    var inner = $("#chat-inner");
    if (!inner) return;
    if (!conv || !conv.messages.length) {
      inner.innerHTML = emptyStateHTML();
      $$(".sugg", inner).forEach(function (b) {
        b.onclick = function () {
          var inp = $("#composer-input");
          if (inp) {
            inp.value = b.dataset.q;
            inp.dispatchEvent(new Event("input"));
            inp.focus();
          }
        };
      });
      return;
    }
    inner.innerHTML = conv.messages.map(function (m, i) {
      return messageHTML(m, i);
    }).join("");
    var sc = $("#chat-scroll");
    sc.scrollTop = sc.scrollHeight;
    bindMessageActions(conv);
  }
  function emptyStateHTML() {
    return '<div class="empty-state">' + OC.brandLogo(72) + "<h2>" + t("welcomeBack") + "</h2>" + "<p>" + t("askAnything") + "</p>" + '<div class="sugg-grid">' + '<button class="sugg" data-q="' + U.esc(t("sugg1")) + '"><span class="s-ico">' + I.book + '</span><span class="s-title">' + t("sugg1t") + "</span><br>" + t("sugg1") + "</button>" + '<button class="sugg" data-q="' + U.esc(t("sugg2")) + '"><span class="s-ico">' + I.chart + '</span><span class="s-title">' + t("sugg2t") + "</span><br>" + t("sugg2") + "</button>" + '<button class="sugg" data-q="' + U.esc(t("sugg3")) + '"><span class="s-ico">' + I.edit + '</span><span class="s-title">' + t("sugg3t") + "</span><br>" + t("sugg3") + "</button>" + '<button class="sugg" data-q="' + U.esc(t("sugg4")) + '"><span class="s-ico">' + I.file + '</span><span class="s-title">' + t("sugg4t") + "</span><br>" + t("sugg4") + "</button>" + "</div>" + (OC.providers.allProviders().length ? "" : '<p class="muted small" style="margin-top:18px">' + t("demoModeHint") + "</p>") + "</div>";
  }
  function messageHTML(m, idx) {
    var user = store.currentUser();
    var isUser = m.role === "user";
    var avatar = isUser ? avatarHTML(user, 34) : '<span class="avatar" style="width:34px;height:34px;background:linear-gradient(135deg,#4f46e5,#8a86ff);color:#fff">' + I.bolt + "</span>";
    var attachHTML = "";
    if (m.attachments && m.attachments.length) {
      attachHTML = '<div class="attachments">' + m.attachments.map(function (a) {
        return '<span class="attach-chip">' + (a.dataUrl ? a.type && a.type.indexOf("image/") === 0 ? '<img src="' + a.dataUrl + '">' : '<a class="attach-dl" href="' + a.dataUrl + '" download="' + U.esc(a.name) + '" title="' + t("download") + '">' + I.download + "</a>" : a.binary ? I.package : I.file) + '<span class="aname">' + U.esc(a.name) + "</span></span>";
      }).join("") + "</div>";
    }
    var metaHTML = "";
    if (!isUser && (m.usage || m.estimated || m.searched)) {
      metaHTML = '<div class="meta-row">' + (m.usage ? "<span>" + t("inputTokens") + ": " + U.faNum(m.usage.tin) + " · " + t("outputTokens") + ": " + U.faNum(m.usage.tout) + (m.estimated ? ' <span class="badge">' + t("estimated") + "</span>" : "") + "</span>" : "") + (m.searched ? '<span class="badge badge-brand">' + t("webSearch") + "</span>" : "") + "</div>";
      if (m.sources && m.sources.length) {
        metaHTML += '<div class="meta-row"><span>' + t("sources") + ':</span>' + m.sources.slice(0, 5).map(function (s) {
          return '<a href="' + U.esc(s.url) + '" target="_blank" rel="noopener" class="small">' + U.esc(s.title || s.url) + "</a>";
        }).join(" · ") + "</div>";
      }
    }
    if (m.error) metaHTML += '<div class="meta-row"><span class="badge badge-danger">' + U.esc(m.error) + "</span></div>";
    var body = isUser ? '<div class="bubble">' + U.esc(m.content).replace(/\n/g, "<br>") + "</div>" : '<div class="bubble md" data-mi="' + idx + '">' + (OC.markdown.render(m.content || "").html || "<span class='muted'>…</span>") + "</div>";
    var actions = isUser ? "" : '<div class="msg-actions">' + '<button class="icon-btn" data-act="copy" title="' + t("copyAnswer") + '">' + I.copy + "</button>" + '<button class="icon-btn" data-act="regen" title="' + t("regenerate") + '">' + I.refresh + "</button>" + '<button class="icon-btn" data-act="good" title="' + t("goodAnswer") + '">' + I.check + "</button>" + '<button class="icon-btn" data-act="bad" title="' + t("badAnswer") + '">' + I.x + "</button>" + '<button class="icon-btn" data-act="del" title="' + t("deleteMessage") + '">' + I.trash + "</button>" + "</div>";
    return '<div class="msg ' + (isUser ? "user" : "assistant") + '" data-idx="' + idx + '">' + avatar + '<div class="msg-body">' + body + attachHTML + metaHTML + actions + "</div></div>";
  }
  function bindMessageActions(conv) {
    $$("#chat-inner .msg").forEach(function (msgEl) {
      var idx = +msgEl.dataset.idx;
      var m = conv.messages[idx];
      $$("[data-act]", msgEl).forEach(function (b) {
        var act = b.dataset.act;
        if (act === "copy-code") {
          b.onclick = function () {
            U.copy(conv._lastBlocks ? conv._lastBlocks[+b.dataset.cb].code : "");
            toast(t("copied"), "ok");
          };
          return;
        }
        b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                if (!(act === "copy")) {
                  _context4.n = 2;
                  break;
                }
                _context4.n = 1;
                return U.copy(m.content);
              case 1:
                toast(t("copied"), "ok");
                _context4.n = 6;
                break;
              case 2:
                if (!(act === "regen")) {
                  _context4.n = 3;
                  break;
                }
                regenerate(idx);
                _context4.n = 6;
                break;
              case 3:
                if (!(act === "good" || act === "bad")) {
                  _context4.n = 4;
                  break;
                }
                m.rating = act;
                store.putConv(conv);
                toast(act === "good" ? t("goodAnswer") : t("badAnswer"), act === "good" ? "ok" : "");
                _context4.n = 6;
                break;
              case 4:
                if (!(act === "del")) {
                  _context4.n = 6;
                  break;
                }
                _context4.n = 5;
                return OC.confirm({
                  title: t("deleteMessage"),
                  message: t("deleteMessage") + "؟",
                  danger: true
                });
              case 5:
                if (!_context4.v) {
                  _context4.n = 6;
                  break;
                }
                conv.messages.splice(idx, 1);
                store.putConv(conv);
                renderMessages(conv);
                OC.renderSidebar();
              case 6:
                return _context4.a(2);
            }
          }, _callee4);
        }));
      });
      // copy-code buttons inside markdown bubbles
      $$("[data-act='copy-code']", msgEl).forEach(function (b) {
        b.onclick = function () {
          var blocks = OC.markdown.render(m.content || "").codeBlocks;
          var cb = blocks[+b.dataset.cb];
          if (cb) {
            U.copy(cb.code);
            toast(t("copied"), "ok");
          }
        };
      });
    });
    $("#chat-inner").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-act='copy-code']");
      if (!btn) return;
    });
  }

  /* ---------- send ---------- */
  function pickModel() {
    var sel = $("#model-select");
    var pick = sel && sel.value;
    if (!pick) {
      var _p = OC.providers.defaultProvider();
      if (!_p) return null;
      pick = _p.id + "::" + (_p.models && _p.models[0] || "gpt-4o-mini");
    }
    var _pick$split = pick.split("::"),
      _pick$split2 = _slicedToArray(_pick$split, 2),
      pid = _pick$split2[0],
      model = _pick$split2[1];
    var p = OC.providers.getProvider(pid);
    return p ? {
      provider: p,
      model: model || "gpt-4o-mini"
    } : null;
  }
  function sendCurrent() {
    var conv = currentConv();
    var input = $("#composer-input");
    var text = input.value.trim();
    if (!text || streamHandle) return;
    var files = pendingFiles.slice();
    var c = conv;
    if (!c) {
      c = {
        id: U.uid(),
        title: text.slice(0, 40),
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        webSearch: !!OC._pendingSearch
      };
      OC._pendingSearch = false;
      if (OC._pendingPrompt) {
        c.promptId = OC._pendingPrompt.id;
        OC._pendingPrompt = null;
        toast(t("useInChat") + " ✓", "ok");
      }
      var list = store.getConvs();
      list.unshift(c);
      store.saveConvs(list);
      OC._currentConvId = c.id;
      if (OC.github && OC.github.bindConv) OC.github.bindConv(c);
      // update hash without full rerender
      history.replaceState(null, "", "#/chat/" + c.id);
    }
    var msg = {
      id: U.uid(),
      role: "user",
      content: text,
      ts: Date.now()
    };
    if (files.length) msg.attachments = files;
    c.messages.push(msg);
    store.putConv(c);
    input.value = "";
    input.style.height = "auto";
    pendingFiles = [];
    renderPending();

    // inline text-file contents into context
    var contextText = text;
    var _iterator7 = _createForOfIteratorHelper(files),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var f = _step7.value;
        if (f.text) contextText += "\n\n[" + f.name + "]\n" + f.text.slice(0, 8000);else if (f.dataUrl && (f.type || "").indexOf("image/") === 0) contextText += "\n\n[" + (OC.i18n.locale() === "fa" ? "تصویر پیوست" : "attached image") + ": " + f.name + "]";else if (f.binary) contextText += "\n\n[" + (OC.i18n.locale() === "fa" ? "فایل پیوست باینری — متن قابل استخراج نیست" : "binary attachment — no extractable text") + ": " + f.name + " (" + U.fmtBytes(f.size) + ")]";
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    respond(c, contextText, files);
  }
  function regenerate(idx) {
    var conv = currentConv();
    if (!conv || streamHandle) return;
    // find preceding user message
    var userIdx = -1;
    for (var i = idx - 1; i >= 0; i--) if (conv.messages[i].role === "user") {
      userIdx = i;
      break;
    }
    if (userIdx < 0) return;
    var u = conv.messages[userIdx];
    // remove messages after user message
    conv.messages = conv.messages.slice(0, userIdx + 1);
    store.putConv(conv);
    renderMessages(conv);
    var contextText = u.content;
    var _iterator8 = _createForOfIteratorHelper(u.attachments || []),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var f = _step8.value;
        if (f.text) contextText += "\n\n[" + f.name + "]\n" + f.text.slice(0, 8000);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    respond(conv, contextText, u.attachments || []);
  }
  function respond(_x, _x2, _x3) {
    return _respond.apply(this, arguments);
  }
  /* ---------- Connector agent loop (WordPress / Telegram / Rubika / Host) ---------- */
  function _respond() {
    _respond = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(conv, userText, files) {
      var inner, user, aMsg, streamingEl, sc, pick, connAt, sources, rs, settings, msgs, defPrompt, maxCtx, used, hist, i, m, len, bubble, raw, lastPaint, settingsAnim, sendBtn, _t3;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            inner = $("#chat-inner");
            user = store.currentUser(); // build placeholder assistant message (streaming)
            aMsg = {
              id: U.uid(),
              role: "assistant",
              content: "",
              ts: Date.now(),
              model: "",
              searched: false
            };
            streamingEl = el('<div class="msg assistant"><span class="avatar" style="background:linear-gradient(135deg,#4f46e5,#8a86ff);color:#fff">' + I.bolt + '</span><div class="msg-body"><div class="bubble md" id="stream-bubble"><span class="typing"><i></i><i></i><i></i></span></div></div></div>');
            inner.appendChild(streamingEl);
            sc = $("#chat-scroll");
            sc.scrollTop = sc.scrollHeight;
            if (window.innerWidth <= 900) closeSidebar();

            // no provider → demo mode
            pick = pickModel();
            if (pick) {
              _context7.n = 1;
              break;
            }
            demoRespond(conv, aMsg, streamingEl, userText);
            return _context7.a(2);
          case 1:
            aMsg.model = pick.model;

            // Connector agent mode: a WordPress / Telegram / Rubika / Host link is attached
            connAt = OC.connectors && OC.connectors.attached() ? OC.connectors.attached() : null;
            if (!connAt) {
              _context7.n = 2;
              break;
            }
            return _context7.a(2, respondWithConn(conv, userText, aMsg, streamingEl, pick, connAt));
          case 2:
            if (!(OC.github && OC.github.attached())) {
              _context7.n = 3;
              break;
            }
            return _context7.a(2, respondWithRepo(conv, userText, aMsg, streamingEl, pick));
          case 3:
            // web search
            sources = null;
            if (!conv.webSearch) {
              _context7.n = 7;
              break;
            }
            _context7.p = 4;
            _context7.n = 5;
            return OC.providers.webSearch(userText);
          case 5:
            rs = _context7.v;
            sources = rs;
            aMsg.searched = true;
            userText += OC.providers.searchContextBlock(rs);
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t3 = _context7.v;
            toast(_t3.message || t("webSearchOff"), "err");
          case 7:
            // build messages with system prompt
            settings = store.getUserSettings();
            msgs = [];
            defPrompt = conv.promptId ? store.getPrompts().find(function (x) {
              return x.id === conv.promptId;
            }) || null : OC.promptsDef();
            if (defPrompt) msgs.push({
              role: "system",
              content: defPrompt.text
            });
            // context window: last N messages
            maxCtx = settings.contextWindow || 8192;
            used = 0;
            hist = [];
            i = conv.messages.length - 1;
          case 8:
            if (!(i >= 0)) {
              _context7.n = 12;
              break;
            }
            m = conv.messages[i];
            if (!(m.role === "assistant" && m === aMsg)) {
              _context7.n = 9;
              break;
            }
            return _context7.a(3, 11);
          case 9:
            len = (m.content || "").length;
            if (!(used + len > maxCtx * 3 && hist.length)) {
              _context7.n = 10;
              break;
            }
            return _context7.a(3, 12);
          case 10:
            used += len;
            hist.unshift({
              role: m.role,
              content: m.content
            });
          case 11:
            i--;
            _context7.n = 8;
            break;
          case 12:
            msgs.push.apply(msgs, _toConsumableArray(hist.slice(0, -1))); // exclude the just-pushed user message dup
            msgs.push({
              role: "user",
              content: userText
            });
            bubble = $("#stream-bubble", streamingEl);
            raw = "";
            lastPaint = 0;
            settingsAnim = store.getUserSettings().animation;
            streamHandle = OC.providers.streamChat({
              provider: pick.provider,
              model: pick.model,
              messages: msgs,
              temperature: settings.temperature,
              maxTokens: settings.maxOutputTokens,
              onDelta: function onDelta(full, piece) {
                raw = full;
                var now = Date.now();
                if (now - lastPaint > 90) {
                  lastPaint = now;
                  if (bubble) bubble.innerHTML = U.esc(raw).replace(/\n/g, "<br>") + '<span class="cursor-blink"></span>';
                  if (sc.scrollHeight - sc.scrollTop - sc.clientHeight < 160) sc.scrollTop = sc.scrollHeight;
                }
              },
              onDone: function onDone(_ref8) {
                var usage = _ref8.usage,
                  estimated = _ref8.estimated,
                  tin = _ref8.tin,
                  tout = _ref8.tout;
                streamHandle = null;
                aMsg.content = raw;
                aMsg.usage = {
                  tin: tin || 0,
                  tout: tout || 0
                };
                aMsg.estimated = !!estimated;
                aMsg.sources = sources;
                conv.messages.push(aMsg);
                store.putConv(conv);
                store.recordUsage({
                  tin: tin || 0,
                  tout: tout || 0,
                  estimated: estimated,
                  provider: pick.provider.id,
                  model: pick.model
                });
                store.logActivity(user.email, "chat", pick.model);
                finishStream(conv, streamingEl, aMsg);
              },
              onError: function onError(e) {
                streamHandle = null;
                aMsg.content = raw;
                aMsg.error = e.message;
                conv.messages.push(aMsg);
                store.putConv(conv);
                store.recordUsage({
                  fail: true
                });
                finishStream(conv, streamingEl, aMsg);
                toast(e.message || t("errorOccurred"), "err");
              },
              onAbort: function onAbort(partial) {
                streamHandle = null;
                aMsg.content = partial || raw;
                if (partial) {
                  conv.messages.push(aMsg);
                  store.putConv(conv);
                }
                finishStream(conv, streamingEl, aMsg);
                toast(t("stopped"));
              }
            });

            // swap send button to stop
            sendBtn = $("#btn-send");
            if (sendBtn) {
              sendBtn.classList.add("stop");
              sendBtn.innerHTML = I.stop;
              sendBtn.onclick = function () {
                if (streamHandle) streamHandle.stop();
              };
            }
          case 13:
            return _context7.a(2);
        }
      }, _callee7, null, [[4, 6]]);
    }));
    return _respond.apply(this, arguments);
  }
  var CONN_MAX_ROUNDS = 6;
  function respondWithConn(_x4, _x5, _x6, _x7, _x8, _x9) {
    return _respondWithConn.apply(this, arguments);
  }
  /* ---------- GitHub repo agent loop (JSON tool protocol) ---------- */
  function _respondWithConn() {
    _respondWithConn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(conv, userText, aMsg, streamingEl, pick, a) {
      var bubble, sc, conn, isFa, msgs, defPrompt, paint, sayParts, actLog, errText, stopped, _loop3, _ret, round, content;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            bubble = $("#stream-bubble", streamingEl);
            sc = $("#chat-scroll");
            conn = OC.connectors.get(a.id);
            isFa = OC.i18n.locale() === "fa";
            msgs = [];
            defPrompt = conv.promptId ? store.getPrompts().find(function (x) {
              return x.id === conv.promptId;
            }) || null : OC.promptsDef();
            if (defPrompt) msgs.push({
              role: "system",
              content: defPrompt.text
            });
            msgs.push({
              role: "system",
              content: OC.connectors.systemPrompt(a)
            });
            msgs.push({
              role: "user",
              content: userText + OC.connectors.contextBlock(a)
            });
            paint = function paint(txt, busy) {
              if (!bubble) return;
              bubble.innerHTML = U.esc(String(txt == null ? "" : txt)).replace(/\n/g, "<br>") + (busy ? '<span class="cursor-blink"></span>' : "");
              if (sc && sc.scrollHeight - sc.scrollTop - sc.clientHeight < 200) sc.scrollTop = sc.scrollHeight;
            };
            sayParts = [];
            actLog = [];
            errText = "";
            stopped = false;
            _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
              var raw, parsed, res, _iterator0, _step0, r;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    paint(sayParts.join("\n\n") + (sayParts.length ? "\n\n" : "") + "[" + t("ghRound") + " " + U.faNum(String(round)) + "/" + U.faNum(String(CONN_MAX_ROUNDS)) + " …]", true);
                    raw = "";
                    _context8.n = 1;
                    return new Promise(function (resolve) {
                      streamHandle = OC.providers.streamChat({
                        provider: pick.provider,
                        model: pick.model,
                        messages: msgs,
                        temperature: 0.2,
                        maxTokens: store.getUserSettings().maxOutputTokens,
                        onDelta: function onDelta(full) {
                          raw = full;
                          paint(sayParts.join("\n\n") + (sayParts.length ? "\n\n" : "") + full, true);
                        },
                        onDone: function onDone(_ref9) {
                          var usage = _ref9.usage,
                            estimated = _ref9.estimated,
                            tin = _ref9.tin,
                            tout = _ref9.tout,
                            text = _ref9.text;
                          streamHandle = null;
                          raw = text || raw;
                          aMsg.usage = {
                            tin: tin || 0,
                            tout: tout || 0
                          };
                          aMsg.estimated = !!estimated;
                          resolve();
                        },
                        onError: function onError(e) {
                          streamHandle = null;
                          errText = e.message || t("errorOccurred");
                          resolve();
                        },
                        onAbort: function onAbort(partial) {
                          streamHandle = null;
                          raw = partial || raw;
                          stopped = true;
                          resolve();
                        }
                      });
                    });
                  case 1:
                    if (!errText) {
                      _context8.n = 2;
                      break;
                    }
                    return _context8.a(2, 0);
                  case 2:
                    parsed = OC.connectors.parseActions(raw, a.type);
                    if (parsed && parsed.say) sayParts.push(parsed.say);
                    if (!(!parsed || !parsed.actions.length)) {
                      _context8.n = 3;
                      break;
                    }
                    if (raw && !parsed) sayParts.push(raw);
                    return _context8.a(2, 0);
                  case 3:
                    msgs.push({
                      role: "assistant",
                      content: raw
                    });
                    paint(sayParts.join("\n\n") + "\n\n[" + t("connWorking") + "]", true);
                    _context8.n = 4;
                    return OC.connectors.runActions(conn, parsed.actions);
                  case 4:
                    res = _context8.v;
                    _iterator0 = _createForOfIteratorHelper(res.results);
                    try {
                      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                        r = _step0.value;
                        actLog.push(r.text.split("\n")[0]);
                        msgs.push({
                          role: "user",
                          content: "[TOOL RESULT]\n" + r.text
                        });
                      }
                    } catch (err) {
                      _iterator0.e(err);
                    } finally {
                      _iterator0.f();
                    }
                    if (!stopped) {
                      _context8.n = 5;
                      break;
                    }
                    return _context8.a(2, 0);
                  case 5:
                    return _context8.a(2);
                }
              }, _loop3);
            });
            round = 1;
          case 1:
            if (!(round <= CONN_MAX_ROUNDS)) {
              _context9.n = 4;
              break;
            }
            return _context9.d(_regeneratorValues(_loop3()), 2);
          case 2:
            _ret = _context9.v;
            if (!(_ret === 0)) {
              _context9.n = 3;
              break;
            }
            return _context9.a(3, 4);
          case 3:
            round++;
            _context9.n = 1;
            break;
          case 4:
            content = sayParts.filter(Boolean).join("\n\n");
            if (actLog.length) {
              content += (content ? "\n\n" : "") + "**" + (isFa ? "اقدامات انجام‌شده" : "Actions taken") + " (" + U.faNum(String(actLog.length)) + "):**\n" + actLog.slice(0, 12).map(function (x) {
                return "- `" + x.replace(/`/g, "'") + "`";
              }).join("\n") + (actLog.length > 12 ? "\n- …" : "");
            }
            if (errText) {
              aMsg.error = errText;
              content = (content ? content + "\n\n" : "") + errText;
              store.recordUsage({
                fail: true
              });
            } else {
              store.recordUsage({
                tin: aMsg.usage && aMsg.usage.tin || 0,
                tout: aMsg.usage && aMsg.usage.tout || 0,
                estimated: aMsg.estimated,
                provider: pick.provider.id,
                model: pick.model
              });
              store.logActivity(store.currentUser().email, "chat", pick.model + " · conn:" + a.type);
            }
            aMsg.content = content;
            if (a) aMsg.conn = a.type + ":" + a.name;
            conv.messages.push(aMsg);
            store.putConv(conv);
            finishStream(conv, streamingEl, aMsg);
            renderPending();
          case 5:
            return _context9.a(2);
        }
      }, _callee8);
    }));
    return _respondWithConn.apply(this, arguments);
  }
  var GH_MAX_ROUNDS = 6;
  function respondWithRepo(_x0, _x1, _x10, _x11, _x12) {
    return _respondWithRepo.apply(this, arguments);
  }
  function _respondWithRepo() {
    _respondWithRepo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(conv, userText, aMsg, streamingEl, pick) {
      var bubble, sc, at, msgs, defPrompt, paint, sayParts, stagedPaths, stagedTotal, aborted, errText, _loop4, _ret2, round, content, isFa;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            bubble = $("#stream-bubble", streamingEl);
            sc = $("#chat-scroll");
            at = OC.github.attached();
            msgs = [];
            defPrompt = conv.promptId ? store.getPrompts().find(function (x) {
              return x.id === conv.promptId;
            }) || null : OC.promptsDef();
            if (defPrompt) msgs.push({
              role: "system",
              content: defPrompt.text
            });
            msgs.push({
              role: "user",
              content: userText + OC.github.contextBlock()
            });
            paint = function paint(txt, busy) {
              if (!bubble) return;
              bubble.innerHTML = U.esc(String(txt == null ? "" : txt)).replace(/\n/g, "<br>") + (busy ? '<span class="cursor-blink"></span>' : "");
              if (sc && sc.scrollHeight - sc.scrollTop - sc.clientHeight < 200) sc.scrollTop = sc.scrollHeight;
            };
            sayParts = [];
            stagedPaths = [];
            stagedTotal = 0;
            aborted = false;
            errText = "";
            _loop4 = /*#__PURE__*/_regenerator().m(function _loop4() {
              var raw, stopped, parsed, res, _iterator1, _step1, r;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    paint(sayParts.join("\n\n") + (sayParts.length ? "\n\n" : "") + "[" + t("ghRound") + " " + U.faNum(String(round)) + "/" + U.faNum(String(GH_MAX_ROUNDS)) + " …]", true);
                    raw = "";
                    stopped = false;
                    _context0.n = 1;
                    return new Promise(function (resolve) {
                      streamHandle = OC.providers.streamChat({
                        provider: pick.provider,
                        model: pick.model,
                        messages: msgs,
                        temperature: 0.2,
                        maxTokens: store.getUserSettings().maxOutputTokens,
                        onDelta: function onDelta(full) {
                          raw = full;
                          paint(sayParts.join("\n\n") + (sayParts.length ? "\n\n" : "") + full, true);
                        },
                        onDone: function onDone(_ref0) {
                          var usage = _ref0.usage,
                            estimated = _ref0.estimated,
                            tin = _ref0.tin,
                            tout = _ref0.tout,
                            text = _ref0.text;
                          streamHandle = null;
                          raw = text || raw;
                          aMsg.usage = {
                            tin: tin || 0,
                            tout: tout || 0
                          };
                          aMsg.estimated = !!estimated;
                          resolve();
                        },
                        onError: function onError(e) {
                          streamHandle = null;
                          errText = e.message || t("errorOccurred");
                          resolve();
                        },
                        onAbort: function onAbort(partial) {
                          streamHandle = null;
                          raw = partial || raw;
                          stopped = true;
                          resolve();
                        }
                      });
                    });
                  case 1:
                    if (!errText) {
                      _context0.n = 2;
                      break;
                    }
                    return _context0.a(2, 0);
                  case 2:
                    parsed = OC.github.parseActions(raw);
                    if (parsed && parsed.say) sayParts.push(parsed.say);
                    if (parsed) {
                      _context0.n = 3;
                      break;
                    }
                    if (raw) sayParts.push(raw);
                    return _context0.a(2, 0);
                  case 3:
                    msgs.push({
                      role: "assistant",
                      content: raw
                    });
                    paint(sayParts.join("\n\n") + "\n\n[" + t("ghWorking") + "]", true);
                    _context0.n = 4;
                    return OC.github.runActions(parsed.actions);
                  case 4:
                    res = _context0.v;
                    stagedTotal += res.staged;
                    _iterator1 = _createForOfIteratorHelper(res.results);
                    try {
                      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                        r = _step1.value;
                        if (r.type === "write") stagedPaths.push(r.path);
                      }
                    } catch (err) {
                      _iterator1.e(err);
                    } finally {
                      _iterator1.f();
                    }
                    if (!(res.done || stopped || !res.results.length)) {
                      _context0.n = 5;
                      break;
                    }
                    return _context0.a(2, 0);
                  case 5:
                    msgs.push({
                      role: "user",
                      content: "[SYSTEM TOOL RESULTS]\n" + res.results.map(function (r) {
                        return r.text;
                      }).join("\n\n") + (OC.i18n.locale() === "fa" ? "\n\n[ادامه بده: فایل بعدی را با read ببین، اصلاح‌ها را با write اعمال کن؛ کار تمام شد با done تمامش کن.]" : "\n\n[Continue: read the next file, apply edits with write; finish with done.]")
                    });
                    if (!stopped) {
                      _context0.n = 6;
                      break;
                    }
                    aborted = true;
                    return _context0.a(2, 0);
                  case 6:
                    return _context0.a(2);
                }
              }, _loop4);
            });
            round = 1;
          case 1:
            if (!(round <= GH_MAX_ROUNDS)) {
              _context1.n = 4;
              break;
            }
            return _context1.d(_regeneratorValues(_loop4()), 2);
          case 2:
            _ret2 = _context1.v;
            if (!(_ret2 === 0)) {
              _context1.n = 3;
              break;
            }
            return _context1.a(3, 4);
          case 3:
            round++;
            _context1.n = 1;
            break;
          case 4:
            content = sayParts.filter(Boolean).join("\n\n");
            isFa = OC.i18n.locale() === "fa";
            if (stagedTotal) {
              content += (content ? "\n\n" : "") + "**" + (isFa ? "تغییرات پله‌شده" : "Staged changes") + " (" + U.faNum(String(stagedTotal)) + "):**\n" + stagedPaths.slice(0, 12).map(function (p) {
                return "- `" + p + "`";
              }).join("\n") + (stagedPaths.length > 12 ? "\n- …" : "") + "\n\n" + (isFa ? "برای **کامیت و پوش** به صفحه «گیت‌هاب» برو (منوی کنار ← گیت‌هاب)؛ آنجا می‌توانی پیام کامیت بنویسی و شاخه جدید بسازی." : "To **commit & push** open the GitHub page (sidebar ← GitHub); write a commit message and create a branch there.");
            }
            if (errText) {
              aMsg.error = errText;
              content = (content ? content + "\n\n" : "") + errText;
              store.recordUsage({
                fail: true
              });
            } else {
              store.recordUsage({
                tin: aMsg.usage && aMsg.usage.tin || 0,
                tout: aMsg.usage && aMsg.usage.tout || 0,
                estimated: aMsg.estimated,
                provider: pick.provider.id,
                model: pick.model
              });
              store.logActivity(store.currentUser().email, "chat", pick.model + " · repo:" + (at ? at.repo : "?"));
            }
            aMsg.content = content;
            if (at) aMsg.repo = at.repo + "@" + at.branch;
            conv.messages.push(aMsg);
            store.putConv(conv);
            finishStream(conv, streamingEl, aMsg);
            renderPending();
          case 5:
            return _context1.a(2);
        }
      }, _callee9);
    }));
    return _respondWithRepo.apply(this, arguments);
  }
  OC.renderGhChip = renderPending;
  function finishStream(conv, streamingEl, aMsg) {
    var sendBtn = $("#btn-send");
    if (sendBtn) {
      sendBtn.classList.remove("stop");
      sendBtn.innerHTML = I.send;
      sendBtn.onclick = sendCurrent;
    }
    renderMessages(conv);
    OC.renderSidebar();
  }

  /* ---------- demo mode ---------- */
  function demoRespond(conv, aMsg, streamingEl, userText) {
    var bubble = $("#stream-bubble", streamingEl);
    var isFa = OC.i18n.locale() === "fa";
    var reply;
    if (/کد|code|function|برنامه|اسکریپت|script/i.test(userText)) {
      reply = isFa ? "در حالت نمایشی هستم، اما نمونه‌ی کد زیر را می‌بینید:\n\n```js\n// نمونه: جمع اعداد آرایه\nfunction sum(numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum([1, 2, 3])); // 6\n```\n\nبرای پاسخ واقعی، یک سرویس‌دهنده و کلید API اضافه کنید." : "This is demo mode. A sample code block:\n\n```js\nfunction sum(numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum([1, 2, 3])); // 6\n```\n\nAdd a provider with an API key for real answers.";
    } else {
      reply = isFa ? "پیام شما دریافت شد:\n\n> " + userText.slice(0, 200) + "\n\nدر **حالت نمایشی** هستم؛ پاسخ‌ها شبیه‌سازی می‌شوند.\n\n| قدم | کار |\n| --- | --- |\n| ۱ | افزودن سرویس‌دهنده از تنظیمات |\n| ۲ | وارد کردن کلید API |\n| ۳ | انتخاب مدل و شروع گفت‌وگو |\n\nپس از افزودن سرویس‌دهنده، همین گفت‌وگو با مدل واقعی ادامه پیدا می‌کند." : "Message received:\n\n> " + userText.slice(0, 200) + "\n\nYou are in **demo mode**; answers are simulated.\n\n| Step | Action |\n| --- | --- |\n| 1 | Add a provider in settings |\n| 2 | Enter the API key |\n| 3 | Pick a model and start chatting |";
    }
    var words = reply.split(/(\s+)/);
    var i = 0;
    var sc = $("#chat-scroll");
    var timer = setInterval(function () {
      i += 2;
      var partial = words.slice(0, i).join("");
      if (bubble) bubble.innerHTML = U.esc(partial) + '<span class="cursor-blink"></span>';
      if (sc.scrollHeight - sc.scrollTop - sc.clientHeight < 160) sc.scrollTop = sc.scrollHeight;
      if (i >= words.length) {
        clearInterval(timer);
        streamHandle = null;
        aMsg.content = reply;
        aMsg.estimated = true;
        aMsg.usage = {
          tin: OC.providers.estTokens([{
            content: userText
          }]),
          tout: OC.providers.estTokens([{
            content: reply
          }])
        };
        conv.messages.push(aMsg);
        store.putConv(conv);
        store.recordUsage({
          tin: aMsg.usage.tin,
          tout: aMsg.usage.tout,
          estimated: true
        });
        finishStream(conv, streamingEl, aMsg);
      }
    }, 40);
    var sendBtn = $("#btn-send");
    if (sendBtn) {
      sendBtn.classList.add("stop");
      sendBtn.innerHTML = I.stop;
      sendBtn.onclick = function () {
        clearInterval(timer);
        streamHandle = null;
        sendBtn.classList.remove("stop");
        sendBtn.innerHTML = I.send;
        sendBtn.onclick = sendCurrent;
        toast(t("stopped"));
      };
    }
  }

  /* ---------- project delivery ---------- */
  OC.deliverProject = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(conv) {
      var blocks, _iterator9, _step9, _m2, _m, data, fmtCard, body, m, _t2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!(!conv || !conv.messages.length)) {
              _context6.n = 1;
              break;
            }
            toast(t("noCodeBlocks"), "err");
            return _context6.a(2);
          case 1:
            blocks = [];
            _iterator9 = _createForOfIteratorHelper(conv.messages);
            _context6.p = 2;
            _iterator9.s();
          case 3:
            if ((_step9 = _iterator9.n()).done) {
              _context6.n = 6;
              break;
            }
            _m2 = _step9.value;
            if (!(_m2.role !== "assistant")) {
              _context6.n = 4;
              break;
            }
            return _context6.a(3, 5);
          case 4:
            blocks.push.apply(blocks, _toConsumableArray(OC.markdown.render(_m2.content || "").codeBlocks));
          case 5:
            _context6.n = 3;
            break;
          case 6:
            _context6.n = 8;
            break;
          case 7:
            _context6.p = 7;
            _t2 = _context6.v;
            _iterator9.e(_t2);
          case 8:
            _context6.p = 8;
            _iterator9.f();
            return _context6.f(8);
          case 9:
            if (blocks.length) {
              _context6.n = 10;
              break;
            }
            _m = OC.modal({
              title: t("projectDelivery"),
              body: "<p class='muted'>" + t("noCodeBlocksDesc") + "</p>"
            });
            return _context6.a(2);
          case 10:
            data = {
              title: conv.title,
              messages: conv.messages,
              codeBlocks: blocks
            };
            fmtCard = function fmtCard(id, label, ext) {
              return '<button class="fmt-chip" data-fmt="' + id + '"><span>' + label + '</span><span class="fx">.' + ext + "</span></button>";
            };
            body = el('<div><div class="muted small" style="margin-bottom:10px">' + t("filesCount") + ": " + U.faNum(blocks.length) + " — " + t("chooseExportFmt") + "</div>" + '<div class="fmt-grid">' + fmtCard("zip", t("fmtZip"), "zip") + fmtCard("md", "Markdown", "md") + fmtCard("html", "HTML", "html") + fmtCard("txt", "Plain Text", "txt") + fmtCard("json", "JSON", "json") + fmtCard("pdf", "PDF", "pdf") + "</div></div>");
            m = OC.modal({
              title: t("projectDelivery"),
              body: body,
              foot: []
            });
            $$(".fmt-chip", body).forEach(function (b) {
              b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
                var fmt, _OC$exporter$buildPro, blob, safeTitle, manifest, _doc, w, doc, _t;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.p = _context5.n) {
                    case 0:
                      fmt = b.dataset.fmt;
                      _context5.p = 1;
                      if (!(fmt === "zip")) {
                        _context5.n = 2;
                        break;
                      }
                      _OC$exporter$buildPro = OC.exporter.buildProjectZip(data), blob = _OC$exporter$buildPro.blob, safeTitle = _OC$exporter$buildPro.safeTitle, manifest = _OC$exporter$buildPro.manifest;
                      U.download(safeTitle + ".zip", blob);
                      store.logActivity(store.currentUser().email, "export-project", manifest.length + " files");
                      m.close();
                      OC.deliverManifestModal(safeTitle, manifest);
                      toast(t("packageDownloaded"), "ok");
                      return _context5.a(2);
                    case 2:
                      if (!(fmt === "pdf")) {
                        _context5.n = 4;
                        break;
                      }
                      _doc = OC.exporter.buildDoc(Object.assign({}, data, {
                        format: "pdf"
                      }));
                      w = window.open("", "_blank");
                      if (w) {
                        _context5.n = 3;
                        break;
                      }
                      toast(t("pdfPopupBlocked"), "err");
                      return _context5.a(2);
                    case 3:
                      w.document.write(_doc.content);
                      w.document.close();
                      setTimeout(function () {
                        try {
                          w.focus();
                          w.print();
                        } catch (e2) {}
                      }, 600);
                      store.logActivity(store.currentUser().email, "export-project", "pdf");
                      m.close();
                      toast(t("pdfPrintHint"), "ok");
                      return _context5.a(2);
                    case 4:
                      doc = OC.exporter.buildDoc(Object.assign({}, data, {
                        format: fmt
                      }));
                      if (doc) {
                        _context5.n = 5;
                        break;
                      }
                      toast(t("errorOccurred"), "err");
                      return _context5.a(2);
                    case 5:
                      U.download(doc.filename, new Blob([doc.content], {
                        type: doc.mime
                      }));
                      store.logActivity(store.currentUser().email, "export-project", fmt);
                      m.close();
                      toast(t("packageDownloaded"), "ok");
                      _context5.n = 7;
                      break;
                    case 6:
                      _context5.p = 6;
                      _t = _context5.v;
                      toast(_t.message || t("errorOccurred"), "err");
                    case 7:
                      return _context5.a(2);
                  }
                }, _callee5, null, [[1, 6]]);
              }));
            });
          case 11:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 7, 8, 9]]);
    }));
    return function (_x13) {
      return _ref6.apply(this, arguments);
    };
  }();
  OC.deliverManifestModal = function (safeTitle, manifest) {
    var m = OC.modal({
      title: t("packageReady"),
      body: '<p class="muted small" style="margin:0">' + t("filesCount") + ": " + U.faNum(manifest.length) + "</p>" + '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>' + t("files") + '</th><th>KB</th></tr></thead><tbody>' + manifest.map(function (f, i) {
        return "<tr><td>" + U.faNum(i + 1) + "</td><td style='direction:ltr;text-align:start'>" + U.esc(f.file) + "</td><td>" + U.faNum(Math.round(f.bytes / 102.4) / 10) + "</td></tr>";
      }).join("") + "</tbody></table></div>",
      foot: [el('<button class="btn btn-primary">' + t("downloaded") + " ✓</button>")]
    });
  };

  /* ================= prompts defaults bridge ================= */
  OC.promptsDef = function () {
    var list = store.getPrompts();
    return list.find(function (p) {
      return p.default;
    }) || null;
  };

  /* ================= keyboard shortcuts ================= */
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      var q = $("#side-q");
      if (q) {
        openSidebar();
        q.focus();
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "o") {
      e.preventDefault();
      OC.newChat();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === ",") {
      e.preventDefault();
      navigate("/settings");
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "/") {
      e.preventDefault();
      showShortcuts();
    }
    if (e.key === "Escape") {
      $$(".modal-back").forEach(function (m) {
        return m.remove();
      });
      $$(".ctx").forEach(function (m) {
        return m.remove();
      });
      $$(".menu-pop").forEach(function (m) {
        return m.remove();
      });
    }
  });
  function showShortcuts() {
    var row = function row(k, d) {
      return '<tr><td><kbd>' + k + '</kbd></td><td>' + d + "</td></tr>";
    };
    OC.modal({
      title: t("keyboardShortcuts"),
      body: '<div class="tbl-wrap"><table class="tbl"><tbody>' + row("Ctrl/⌘ + K", t("scSearch")) + row("Ctrl/⌘ + Shift + O", t("scNewChat")) + row("Ctrl/⌘ + ,", t("scSettings")) + row("Ctrl/⌘ + /", t("scShortcuts")) + row("Enter", t("scSend")) + row("Esc", t("close")) + "</tbody></table></div>"
    });
  }
  OC.showShortcuts = showShortcuts;

  /* ================= offline banner ================= */
  function updateOnline() {
    var b = $(".offline-bar");
    if (!navigator.onLine) {
      if (!b) {
        b = el('<div class="offline-bar">' + t("networkDown") + "</div>");
        document.body.appendChild(b);
      }
    } else if (b) b.remove();
  }
  window.addEventListener("online", updateOnline);
  window.addEventListener("offline", updateOnline);

  /* ================= boot ================= */
  OC.boot = function () {
    store.seedAdmin();
    store.sweepRetention();
    OC.i18n.detect();
    if (document.documentElement.lang !== OC.i18n.locale()) {
      document.documentElement.lang = OC.i18n.locale();
      document.documentElement.dir = OC.i18n.isRTL() ? "rtl" : "ltr";
    }
    // theme pre-paint handled in index.html; sync from user settings when logged in
    var user = store.currentUser();
    if (user) applyTheme(store.getUserSettings().theme);else {
      try {
        var raw = localStorage.getItem("oc-theme");
        applyTheme(raw === "dark" || raw === "light" ? raw : "system");
      } catch (e) {
        applyTheme("system");
      }
    }
    OC.panels.registerRoutes();
    updateOnline();
    renderRoute();
    // remember theme choice for pre-paint
    setInterval(function () {
      var dark = document.documentElement.classList.contains("dark");
      try {
        localStorage.setItem("oc-theme", dark ? "dark" : "light");
      } catch (e) {}
    }, 1500);
  };
  OC.brandLogo = logoSVG;
  OC.applyThemeOnLogin = function () {
    return applyTheme(store.getUserSettings().theme);
  };
})();