function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(a) { return _arrayWithoutHoles(a) || _iterableToArray(a) || _unsupportedIterableToArray(a) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { var e = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { for (var t, o = [], a = e.call(r); !(t = a.next()).done;) o.push(t.value); return o; } }
function _arrayWithoutHoles(a) { if (Array.isArray(a)) return _arrayLikeToArray(a); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? ownKeys(Object(o), !0).forEach(function (t) { _defineProperty(r, t, o[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e)); }); } return r; }
function _defineProperty(r, t, o) { return (t = _toPropertyKey(t)) in r ? Object.defineProperty(r, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = o, r; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == _typeof(o) ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — Panels: settings, profile, prompts, usage, admin, provider editor. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var el = OC.el,
    $ = OC.$,
    $$ = OC.$$;
  var I = OC.ui_icons;
  var toast = OC.toast;
  function page(contentHTML) {
    OC.renderShell(contentHTML);
  }

  /* ================= SETTINGS ================= */
  OC.routes["/settings"] = function () {
    var user = store.currentUser();
    if (!user) return;
    var sys = store.sysSettings();
    var s = store.getUserSettings();
    var stats = store.storageStats();
    var secAppearance = '<div class="panel"><h3>' + t("appearance") + "</h3><p class='p-desc'>" + t("theme") + " · " + t("language") + " · " + t("animation") + "</p>" + '<div class="stack">' + '<div class="field"><label>' + t("themeChoice") + "</label>" + '<div class="segmented" id="seg-theme">' + '<button data-v="system" class="' + (s.theme === "system" ? "active" : "") + '">' + t("themeSystem") + "</button>" + '<button data-v="light" class="' + (s.theme === "light" ? "active" : "") + '">' + t("themeLight") + "</button>" + '<button data-v="dark" class="' + (s.theme === "dark" ? "active" : "") + '">' + t("themeDark") + "</button>" + "</div></div>" + '<div class="field"><label>' + t("defaultLanguage") + "</label>" + '<div class="segmented" id="seg-lang">' + '<button data-v="fa" class="' + (OC.i18n.locale() === "fa" ? "active" : "") + '">' + t("persian") + "</button>" + '<button data-v="en" class="' + (OC.i18n.locale() === "en" ? "active" : "") + '">' + t("english") + "</button>" + "</div></div>" + '<div class="field"><label>' + t("animation") + "</label>" + '<div class="segmented" id="seg-anim">' + ["word", "fade", "soft", "none"].map(function (a) {
      return '<button data-v="' + a + '" class="' + (s.animation === a ? "active" : "") + '">' + t(a === "word" ? "animWord" : a === "fade" ? "animFade" : a === "soft" ? "animSoft" : "animNone") + "</button>";
    }).join("") + "</div></div>" + "</div></div>";
    var secGeneration = '<div class="panel"><h3>' + t("generationDefaults") + "</h3><p class='p-desc'>" + t("usageNote") + "</p>" + '<div class="stack">' + '<div class="field"><label>' + t("temperature") + ' — <span id="temp-val">' + U.faNum(s.temperature) + "</span></label><input type='range' id='rng-temp' min='0' max='" + (sys.temperatureMax || 2) + "' step='0.1' value='" + s.temperature + "'></div>" + '<div class="grid-2">' + '<div class="field"><label>' + t("maxOutputTokens") + "</label><input class='input' id='in-maxtok' type='number' min='64' max='128000' value='" + s.maxOutputTokens + "'></div>" + '<div class="field"><label>' + t("contextWindow") + "</label><input class='input' id='in-ctx' type='number' min='1024' max='2000000' step='1024' value='" + s.contextWindow + "'></div>" + "</div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="ck-ws" ' + (s.webSearchDefault ? "checked" : "") + '><span class="track"></span></label><span>' + t("webSearchDefault") + "</span></div>" + '<button class="btn btn-primary" id="btn-save-gen">' + t("save") + "</button>" + "</div></div>";
    var secProviders = '<div class="panel"><h3>' + t("aiProviders") + "</h3><p class='p-desc'>" + t("privacyKeyNote") + "</p>" + '<div id="prov-list" class="stack"></div>' + '<div class="flex" style="margin-top:12px"><button class="btn btn-primary" id="btn-add-prov">' + I.plus + t("addProvider") + "</button></div>" + "</div>";
    var ghSt = OC.github && OC.github.state() || {
      connected: false,
      user: null
    };
    var secGithub = ghSt.connected ? '<div class="panel"><h3>GitHub</h3><p class="p-desc">' + t("ghConnectedAs") + "</p>" + '<div class="flex" style="align-items:center;gap:12px">' + (ghSt.user && ghSt.user.avatar ? '<img src="' + U.esc(ghSt.user.avatar) + '" alt="" style="width:38px;height:38px;border-radius:11px">' : "") + '<div><b>' + U.esc(ghSt.user ? ghSt.user.name : "") + '</b><div class="muted small" style="direction:ltr">@' + U.esc(ghSt.user ? ghSt.user.login : "") + "</div></div>" + '<span style="flex:1"></span>' + '<button class="btn btn-primary" id="gh-open-panel">' + I.book + t("ghManageRepos") + "</button>" + '<button class="btn btn-danger-ghost" id="gh-disc-2">' + I.logout + t("ghDisconnect") + "</button>" + "</div></div>" : '<div class="panel"><h3>GitHub</h3><p class="p-desc">' + t("ghSettingsDesc") + "</p>" + '<div class="stack">' + '<div class="field"><label>' + t("ghTokenLabel") + "</label>" + '<input class="input" id="gh-token-s" type="password" placeholder="github_pat_… / ghp_…" style="direction:ltr" autocomplete="off"></div>' + '<div class="hint">' + t("ghTokenHint") + "</div>" + '<div class="flex"><button class="btn btn-primary" id="gh-connect-s">' + I.key + t("ghConnectBtn") + "</button>" + '<a class="btn" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">' + t("ghNewToken") + "</a></div>" + "</div></div>";
    var secData = '<div class="panel"><h3>' + t("data") + "</h3><p class='p-desc'>" + t("keysNeverExported") + "</p>" + '<div class="stack">' + '<div class="flex" style="flex-wrap:wrap;gap:8px">' + '<button class="btn" id="exp-all">' + I.download + t("exportAll") + "</button>" + '<button class="btn" id="exp-chats">' + t("exportChatsOnly") + "</button>" + '<button class="btn" id="exp-settings">' + t("exportSettingsOnly") + "</button>" + '<button class="btn" id="imp-btn">' + I.restore + t("restore") + "</button>" + '<input type="file" id="imp-file" accept=".json" class="hidden">' + "</div>" + '<div class="field"><label>' + t("storageSpace") + "</label>" + '<div class="progress"><div style="width:' + Math.min(100, Math.round(stats.totalBytes / 5e6 * 100)) + '%"></div></div>' + '<span class="hint">' + U.fmtBytes(stats.totalBytes) + " / 5 MB</span></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="ck-shortcuts-info" checked disabled><span class="track" style="opacity:.5"></span></label><button class="btn btn-sm" id="btn-shortcuts">' + t("keyboardShortcuts") + "</button></div>" + "</div></div>";
    var secPrivacy = '<div class="panel"><h3>' + t("privacy") + "</h3><p class='p-desc'>" + t("privacyChatsNote") + "</p>" + '<ul style="margin:0;padding-inline-start:18px;color:rgb(var(--muted));font-size:13.5px">' + "<li>" + t("privacyKeyNote") + "</li>" + "<li>" + t("privacyFilesNote") + "</li>" + "<li>" + t("filesReadOnce") + " — " + t("fileNotKept") + "</li>" + "<li>" + t("systemPromptsHint") + "</li>" + "</ul></div>";
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("settings") + '</h2><p class="page-sub">' + t("appName") + " · " + t("version") + " " + U.faNum("1.0.2") + " · " + t("designer") + ": " + "عباس صدیق" + "</p>" + secAppearance + secGeneration + secProviders + secGithub + secData + secPrivacy + "</div>");

    // bindings
    $$("#seg-theme button").forEach(function (b) {
      return b.onclick = function () {
        store.saveUserSettings({
          theme: b.dataset.v
        });
        OC.applyTheme(b.dataset.v);
        OC.routes["/settings"]();
      };
    });
    $$("#seg-lang button").forEach(function (b) {
      return b.onclick = function () {
        OC.i18n.setLocale(b.dataset.v);
        OC.routes["/settings"]();
      };
    });
    $$("#seg-anim button").forEach(function (b) {
      return b.onclick = function () {
        store.saveUserSettings({
          animation: b.dataset.v
        });
        OC.routes["/settings"]();
      };
    });
    var rng = $("#rng-temp");
    rng.oninput = function () {
      $("#temp-val").textContent = U.faNum(rng.value);
    };
    $("#btn-save-gen").onclick = function () {
      store.saveUserSettings({
        temperature: parseFloat(rng.value),
        maxOutputTokens: parseInt($("#in-maxtok").value, 10) || 2048,
        contextWindow: parseInt($("#in-ctx").value, 10) || 8192,
        webSearchDefault: $("#ck-ws").checked
      });
      toast(t("settingsSaved"), "ok");
    };
    $("#btn-add-prov").onclick = function () {
      return providerEditor(null, false, function () {
        return OC.routes["/settings"]();
      });
    };
    renderProviderList("#prov-list", false, function () {
      return OC.routes["/settings"]();
    });
    var ghConn = $("#gh-connect-s");
    if (ghConn) ghConn.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            ghConn.disabled = true;
            _context.p = 1;
            _context.n = 2;
            return OC.github.connect($("#gh-token-s").value.trim());
          case 2:
            toast(t("ghConnectedOk"), "ok");
            OC.routes["/settings"]();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            toast(_t.message || t("ghError"), "err");
            ghConn.disabled = false;
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    var ghOpen = $("#gh-open-panel");
    if (ghOpen) ghOpen.onclick = function () {
      location.hash = "/github";
    };
    var ghDisc2 = $("#gh-disc-2");
    if (ghDisc2) ghDisc2.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return OC.confirmDialog({
              title: t("ghDisconnect"),
              message: t("ghDisconnectConfirm")
            });
          case 1:
            if (_context2.v) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            OC.github.disconnect();
            toast(t("ghDisconnected"), "ok");
            OC.routes["/settings"]();
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    $("#exp-all").onclick = function () {
      return doExport("all");
    };
    $("#exp-chats").onclick = function () {
      return doExport("chats");
    };
    $("#exp-settings").onclick = function () {
      return doExport("settings");
    };
    $("#imp-btn").onclick = function () {
      return $("#imp-file").click();
    };
    $("#imp-file").onchange = function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var data = JSON.parse(rd.result);
          var res = store.importData(data);
          toast(t("restoreDone") + " — " + U.faNum(res.addedChats) + " ✓" + (res.skipped ? " · " + U.faNum(res.skipped) + " " + t("chatIgnored") : ""), "ok");
          OC.renderSidebar();
        } catch (err) {
          toast(err.message === "invalid" ? t("restoreInvalid") : t("invalidFile"), "err");
        }
      };
      rd.readAsText(f);
      e.target.value = "";
    };
    $("#btn-shortcuts").onclick = function () {
      return OC.showShortcuts();
    };
  };
  function doExport(scope) {
    var data = store.exportData(scope);
    U.download("open-code-" + scope + "-" + new Date().toISOString().slice(0, 10) + ".json", new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    }));
    toast(t("downloaded"), "ok");
  }

  /* ---------- provider list (shared) ---------- */
  function renderProviderList(sel, system, onChange) {
    var box = $(sel);
    if (!box) return;
    var list = system ? (store.sysSettings().systemProviders || []).map(function (p) {
      return Object.assign({}, p, {
        system: true
      });
    }) : store.getProviders().map(function (p) {
      return Object.assign({}, p, {
        system: false
      });
    });
    if (!list.length) {
      box.innerHTML = '<p class="muted small">' + t("noProviderYet") + "</p>";
      return;
    }
    box.innerHTML = list.map(function (p) {
      var dot = p.health === "ok" ? "dot-ok" : p.health === "err" ? "dot-err" : "dot-off";
      var typeLabel = (OC.providers.TYPES.find(function (x) {
        return x.id === p.type;
      }) || {}).label || p.type;
      var models = p.models || [];
      return '<div class="attach-chip" style="max-width:100%;padding:10px 14px;display:flex">' + '<span class="dot ' + dot + '"></span>' + '<div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13.5px">' + U.esc(p.name || typeLabel) + (p.default ? ' <span class="badge badge-brand">' + t("isDefault") + "</span>" : "") + (p.system ? ' <span class="badge badge-accent">' + t("systemProviders") + "</span>" : "") + '</div><div class="muted small" style="direction:ltr;text-align:start">' + U.esc(typeLabel) + " · " + U.esc(OC.providers.baseUrl(p) || "—") + "</div>" + '<div class="muted small">' + t("models") + ": " + U.faNum(models.length) + (p.lastCheck ? " · " + t("lastCheck") + ": " + U.fmtTime(p.lastCheck) : "") + (p.lastMs ? " · " + U.faNum(p.lastMs) + "ms" : "") + "</div></div>" + '<div class="flex" style="gap:4px">' + '<button class="icon-btn" data-test="' + p.id + '" title="' + t("testConnection") + '">' + I.plug + "</button>" + '<button class="icon-btn" data-edit="' + p.id + '" title="' + t("edit") + '">' + I.edit + "</button>" + '<button class="icon-btn" data-del="' + p.id + '" title="' + t("delete") + '">' + I.trash + "</button>" + "</div></div>";
    }).join("");
    $$("[data-edit]", box).forEach(function (b) {
      return b.onclick = function () {
        var p = list.find(function (x) {
          return x.id === b.dataset.edit;
        });
        providerEditor(p, p.system, onChange);
      };
    });
    $$("[data-del]", box).forEach(function (b) {
      return b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var p;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return OC.confirm({
                title: t("deleteProviderMsg"),
                message: t("deleteProviderMsg"),
                danger: true
              });
            case 1:
              if (_context3.v) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              p = list.find(function (x) {
                return x.id === b.dataset.del;
              });
              if (p.system) OC.providers.deleteSystem(p.id);else OC.providers.deleteMine(p.id);
              toast(t("providerDeleted"), "ok");
              store.logActivity(store.currentUser().email, p.system ? "delete-system-provider" : "delete-provider", p.name);
              onChange && onChange();
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }));
    });
    $$("[data-test]", box).forEach(function (b) {
      return b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var p, r, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              p = list.find(function (x) {
                return x.id === b.dataset.test;
              });
              b.innerHTML = I.refresh;
              b.classList.add("active");
              _context4.p = 1;
              _context4.n = 2;
              return OC.providers.testConnection(p);
            case 2:
              r = _context4.v;
              OC.providers.setHealth(p.id, p.system, true, r.ms);
              toast(t("connected") + " (" + U.faNum(r.ms) + "ms)", "ok");
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t2 = _context4.v;
              OC.providers.setHealth(p.id, p.system, false);
              toast(_t2.message || t("connectionFailed"), "err");
            case 4:
              onChange && onChange();
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }));
    });
  }

  /* ---------- provider editor ---------- */
  function providerEditor(existing, system, onSaved) {
    var isNew = !existing;
    var p = existing ? JSON.parse(JSON.stringify(existing)) : {
      id: U.uid(),
      type: "openai",
      name: "",
      base: "",
      keyEnc: "",
      orgId: "",
      headers: [],
      models: [],
      default: false
    };
    var typeOpts = OC.providers.TYPES.map(function (tp) {
      return '<option value="' + tp.id + '"' + (p.type === tp.id ? " selected" : "") + ">" + U.esc(tp.label) + "</option>";
    }).join("");
    var body = el('<div class="stack">' + '<div class="grid-2">' + '<div class="field"><label>' + t("providerName") + '</label><input class="input" id="pe-name" placeholder="OpenAI / Groq / …" value="' + U.esc(p.name) + '"></div>' + '<div class="field"><label>' + t("providerType") + '</label><select class="input" id="pe-type">' + typeOpts + "</select></div>" + "</div>" + '<div class="field"><label>' + t("apiBaseUrl") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="pe-base" dir="ltr" style="text-align:left" value="' + U.esc(p.base || "") + '" placeholder="https://api.example.com/v1"></div>' + '<div class="field"><label>' + t("apiKey") + (p.keyEnc ? ' <span class="badge badge-ok">' + t("connected").replace("اتصال ", "کلید ") + '</span>' : "") + '</label><input class="input" id="pe-key" type="password" dir="ltr" style="text-align:left" placeholder="' + (p.keyEnc ? t("keepKeyEmpty") : "sk-…") + '"><span class="hint">' + t("privacyKeyNote") + "</span></div>" + '<div class="field"><label>' + t("keyPoolTitle") + ' (<span id="pe-kcount">' + U.faNum((p.keys || []).length) + '</span>)</label>' + '<div class="stack" id="pe-pool"></div>' + '<div class="flex" style="gap:6px;margin-top:6px">' + '<input class="input" id="pe-pool-label" placeholder="' + t("keyPoolLabel") + '" style="flex:1;min-width:90px">' + '<input class="input" id="pe-pool-key" type="password" dir="ltr" style="flex:1.6;min-width:130px;text-align:left" placeholder="sk-…">' + '<button class="btn btn-sm" id="pe-add-key">' + I.plus + t("keyPoolAdd") + "</button></div>" + '<span class="hint">' + t("keyPoolHint") + "</span></div>" + '<div class="field"><label>' + t("orgId") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="pe-org" dir="ltr" style="text-align:left" value="' + U.esc(p.orgId || "") + '"></div>' + '<div class="field"><label>' + t("customHeaders") + '</label><div id="pe-headers" class="stack"></div><button class="btn btn-sm" id="pe-add-header">' + I.plus + t("addHeader") + "</button></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="pe-default" ' + (p.default ? "checked" : "") + '><span class="track"></span></label><span>' + t("defaultProvider") + "</span></div>" + '<div class="field"><label>' + t("models") + ' (<span id="pe-mcount">' + U.faNum((p.models || []).length) + '</span>)</label>' + '<div class="flex" style="flex-wrap:wrap;gap:6px" id="pe-models"></div>' + '<div class="flex" style="gap:6px">' + '<button class="btn btn-sm" id="pe-fetch">' + I.refresh + t("refreshModels") + "</button>" + '<button class="btn btn-sm" id="pe-test">' + I.plug + t("testConnection") + "</button>" + '<input class="input" id="pe-manual" placeholder="' + t("manualModelId") + '" style="flex:1;min-width:120px;direction:ltr;text-align:left">' + '<button class="btn btn-sm" id="pe-add-model">' + I.plus + "</button>" + "</div>" + '<span class="hint">' + t("noModelsHint") + "</span></div>" + "</div>");
    var save = el('<button class="btn btn-primary">' + t("save") + "</button>");
    var cancel = el('<button class="btn">' + t("cancel") + "</button>");
    var m = OC.modal({
      title: system ? isNew ? t("addSystemProvider") : t("editSystemProvider") : isNew ? t("addProvider") : t("editProvider"),
      body: body,
      foot: [cancel, save],
      wide: true
    });
    var headersBox = $("#pe-headers", body);
    function addHeaderRow(name, value) {
      var row = el('<div class="flex"><input class="input" placeholder="' + t("headerName") + '" value="' + U.esc(name || "") + '" style="flex:1"><input class="input" placeholder="' + t("headerValue") + '" value="' + U.esc(value || "") + '" style="flex:1" dir="ltr"><button class="icon-btn">' + I.x + "</button></div>");
      $("button.icon-btn", row).onclick = function () {
        return row.remove();
      };
      headersBox.appendChild(row);
    }
    (p.headers || []).forEach(function (h) {
      return addHeaderRow(h.name, h.value);
    });
    $("#pe-add-header", body).onclick = function () {
      return addHeaderRow("", "");
    };

    /* key pool */
    var poolBox = $("#pe-pool", body);
    function maskKey(keyEnc) {
      try {
        var k = store.decKey(keyEnc) || "";
        if (k.length <= 10) return "••••" + k.slice(-3);
        return k.slice(0, 5) + "••••••" + k.slice(-4);
      } catch (e) {
        return "••••";
      }
    }
    function renderPool() {
      poolBox.innerHTML = (p.keys || []).map(function (k) {
        var st = k.status === "exhausted" ? '<span class="badge badge-err">' + t("keyStExhausted") + "</span>" : k.status === "invalid" ? '<span class="badge badge-err">' + t("keyStInvalid") + "</span>" : '<span class="badge badge-ok">' + t("keyStOk") + "</span>";
        return '<div class="pool-row"><div class="pool-main"><b>' + U.esc(k.label || t("keyPoolLabel")) + '</b><span class="muted small" style="direction:ltr">' + maskKey(k.keyEnc) + "</span>" + st + "</div>" + '<div class="pool-ops">' + (k.status && k.status !== "ok" ? '<button class="btn btn-sm" data-kreset="' + U.esc(k.id) + '">' + I.refresh + t("keyReset") + "</button>" : "") + '<button class="icon-btn" data-kdel="' + U.esc(k.id) + '" title="' + t("delete") + '">' + I.trash + "</button></div></div>";
      }).join("") || '<span class="muted small">' + t("keyPoolEmpty") + "</span>";
      $$("[data-kdel]", poolBox).forEach(function (b) {
        return b.onclick = function () {
          p.keys = (p.keys || []).filter(function (k) {
            return k.id !== b.dataset.kdel;
          });
          renderPool();
          $("#pe-kcount", body).textContent = U.faNum((p.keys || []).length);
        };
      });
      $$("[data-kreset]", poolBox).forEach(function (b) {
        return b.onclick = function () {
          var k = (p.keys || []).find(function (x) {
            return x.id === b.dataset.kreset;
          });
          if (k) k.status = "ok";
          renderPool();
          toast(t("keyResetDone"), "ok");
        };
      });
    }
    renderPool();
    $("#pe-add-key", body).onclick = function () {
      var raw = $("#pe-pool-key", body).value.trim();
      var lbl = $("#pe-pool-label", body).value.trim() || t("keyPoolLabel");
      if (!raw) {
        toast(t("keyPoolNeedKey"), "err");
        return;
      }
      p.keys = p.keys || [];
      p.keys.push({
        id: "k" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        label: lbl,
        keyEnc: store.encKey(raw),
        status: "ok"
      });
      $("#pe-pool-key", body).value = "";
      $("#pe-pool-label", body).value = "";
      renderPool();
      $("#pe-kcount", body).textContent = U.faNum(p.keys.length);
      toast(t("keyPoolAdded"), "ok");
    };
    var modelsBox = $("#pe-models", body);
    function renderModels() {
      modelsBox.innerHTML = (p.models || []).map(function (mm) {
        return '<span class="attach-chip" style="direction:ltr"><span class="aname">' + U.esc(mm) + '</span><button class="icon-btn" style="width:22px;height:22px" data-mm="' + U.esc(mm) + '">' + I.x + "</button></span>";
      }).join("") || '<span class="muted small">' + t("noModels") + "</span>";
      $$("[data-mm]", modelsBox).forEach(function (b) {
        return b.onclick = function () {
          p.models = p.models.filter(function (x) {
            return x !== b.dataset.mm;
          });
          renderModels();
          $("#pe-mcount", body).textContent = U.faNum(p.models.length);
        };
      });
    }
    renderModels();
    $("#pe-add-model", body).onclick = function () {
      var v = $("#pe-manual", body).value.trim();
      if (!v) return;
      if (!p.models.includes(v)) p.models.push(v);
      $("#pe-manual", body).value = "";
      renderModels();
      $("#pe-mcount", body).textContent = U.faNum(p.models.length);
    };
    $("#pe-manual", body).addEventListener("keydown", function (e) {
      if (e.key === "Enter") $("#pe-add-model", body).click();
    });
    $("#pe-fetch", body).onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var models, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            gather();
            $("#pe-fetch", body).disabled = true;
            _context5.p = 1;
            _context5.n = 2;
            return OC.providers.fetchModels(p);
          case 2:
            models = _context5.v;
            p.models = models.slice(0, 400);
            renderModels();
            $("#pe-mcount", body).textContent = U.faNum(p.models.length);
            toast(t("modelsUpdated") + " (" + U.faNum(p.models.length) + ")", "ok");
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t3 = _context5.v;
            toast(_t3.message || t("providerNoModels"), "err");
          case 4:
            $("#pe-fetch", body).disabled = false;
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    $("#pe-test", body).onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var r, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            gather();
            $("#pe-test", body).disabled = true;
            _context6.p = 1;
            _context6.n = 2;
            return OC.providers.testConnection(p);
          case 2:
            r = _context6.v;
            toast(t("connected") + " (" + U.faNum(r.ms) + "ms)", "ok");
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t4 = _context6.v;
            toast(_t4.message || t("connectionFailed"), "err");
          case 4:
            $("#pe-test", body).disabled = false;
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    function gather() {
      p.name = $("#pe-name", body).value.trim();
      p.type = $("#pe-type", body).value;
      p.base = $("#pe-base", body).value.trim();
      p.orgId = $("#pe-org", body).value.trim();
      p.default = $("#pe-default", body).checked;
      var kv = $$("#pe-headers .flex", body).map(function (row) {
        var ins = $$("input", row);
        return {
          name: ins[0].value.trim(),
          value: ins[1].value.trim()
        };
      }).filter(function (h) {
        return h.name;
      });
      p.headers = kv;
      var keyRaw = $("#pe-key", body).value;
      if (keyRaw) {
        var enc = store.encKey(keyRaw);
        p.keyEnc = enc;
        // keep pool in sync: main key is the first pool entry
        p.keys = p.keys || [];
        var main = p.keys.find(function (k) {
          return k.id === "main";
        });
        if (main) {
          main.keyEnc = enc;
          if (main.status === "invalid") main.status = "ok";
        } else p.keys.unshift({
          id: "main",
          label: t("keyMainLabel"),
          keyEnc: enc,
          status: "ok"
        });
      }
      // auto-fill base from type if empty
      if (!p.base) {
        var tp = OC.providers.TYPES.find(function (x) {
          return x.id === p.type;
        });
        p.base = tp.base || "";
      }
    }
    cancel.onclick = function () {
      return m.close();
    };
    save.onclick = function () {
      gather();
      if (!p.name) p.name = (OC.providers.TYPES.find(function (x) {
        return x.id === p.type;
      }) || {}).label || "Provider";
      if (p.default) OC.providers.markDefault(p.id, system);
      if (system) {
        OC.providers.saveSystem(p);
        store.logActivity(store.currentUser().email, isNew ? "add-system-provider" : "edit-system-provider", p.name);
      } else {
        OC.providers.saveMine(p);
        store.logActivity(store.currentUser().email, isNew ? "add-provider" : "edit-provider", p.name);
      }
      toast(isNew ? t("providerAdded") : t("providerUpdated"), "ok");
      m.close();
      onSaved && onSaved();
      OC.renderSidebar();
    };
  }

  /* ================= PROFILE ================= */
  OC.routes["/profile"] = function () {
    var user = store.currentUser();
    if (!user) return;
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("profile") + '</h2><p class="page-sub">' + t("memberSince") + ": " + U.fmtDate(user.createdAt) + "</p>" + '<div class="panel"><h3>' + t("editProfile") + "</h3>" + '<div class="flex" style="margin:10px 0 16px">' + OC.avatarHTML(user, 56) + '<div><input type="file" id="av-file" accept="image/*" class="hidden"><button class="btn btn-sm" id="av-btn">' + I.edit + t("avatar") + '</button> <button class="btn btn-sm btn-ghost" id="av-rm">' + t("remove") + "</button>" + '<div class="hint">' + t("privacyNote") + "</div></div></div>" + '<div class="stack">' + '<div class="grid-2"><div class="field"><label>' + t("fullName") + '</label><input class="input" id="pf-name" value="' + U.esc(user.name) + '"></div>' + '<div class="field"><label>' + t("lastName") + '</label><input class="input" id="pf-last" value="' + U.esc(user.last || "") + '"></div></div>' + '<div class="field"><label>' + t("email") + '</label><input class="input" id="pf-email" value="' + U.esc(user.email) + '" disabled></div>' + '<div class="field"><label>' + t("username") + '</label><input class="input" id="pf-user" value="' + U.esc(user.username || "") + '" disabled></div>' + '<div class="field"><label>' + t("phone") + '</label><input class="input" id="pf-phone" inputmode="tel" value="' + U.esc(user.phone || "") + '" placeholder="09xxxxxxxxx"></div>' + '<div class="err-text hidden" id="pf-err"></div>' + '<button class="btn btn-primary" id="pf-save" style="align-self:flex-start">' + t("save") + "</button>" + "</div></div>" + '<div class="panel"><h3>' + t("changePassword") + "</h3>" + '<div class="stack">' + '<div class="field"><label>' + t("currentPassword") + '</label><input class="input" type="password" id="cp-old"></div>' + '<div class="field"><label>' + t("newPassword") + '</label><input class="input" type="password" id="cp-new"><span class="hint">' + t("minChars") + "</span></div>" + '<div class="err-text hidden" id="cp-err"></div>' + '<button class="btn btn-primary" id="cp-save" style="align-self:flex-start">' + t("changePassword") + "</button>" + "</div></div>" + '<div class="panel danger-zone"><h3>' + t("dangerZone") + "</h3><p class='p-desc'>" + t("deleteAccountWarn") + "</p>" + '<button class="btn btn-danger" id="acc-del">' + I.trash + t("deleteAccount") + "</button></div>" + "</div>");
    $("#av-btn").onclick = function () {
      return $("#av-file").click();
    };
    $("#av-file").onchange = function (e) {
      var f = e.target.files[0];
      if (!f) return;
      if (f.size > 2 * 1024 * 1024) {
        toast(t("fileTooBig"), "err");
        return;
      }
      var rd = new FileReader();
      rd.onload = function () {
        // downscale to 128px
        var img = new Image();
        img.onload = function () {
          var cv = document.createElement("canvas");
          var s = Math.min(img.width, img.height);
          cv.width = cv.height = 128;
          var cx = cv.getContext("2d");
          cx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 128, 128);
          var users = store.getUsers();
          var u = users.find(function (x) {
            return x.id === user.id;
          });
          u.avatar = cv.toDataURL("image/jpeg", 0.85);
          store.saveUsers(users);
          toast(t("profileSaved"), "ok");
          OC.routes["/profile"]();
        };
        img.src = rd.result;
      };
      rd.readAsDataURL(f);
    };
    $("#av-rm").onclick = function () {
      var users = store.getUsers();
      var u = users.find(function (x) {
        return x.id === user.id;
      });
      u.avatar = "";
      store.saveUsers(users);
      OC.routes["/profile"]();
    };
    $("#pf-save").onclick = function () {
      var err = $("#pf-err");
      err.classList.add("hidden");
      var name = $("#pf-name").value.trim();
      var last = $("#pf-last").value.trim();
      var phone = $("#pf-phone").value.trim();
      if (!name) {
        err.textContent = t("fillFields");
        err.classList.remove("hidden");
        return;
      }
      if (phone && !store.validPhone(phone)) {
        err.textContent = t("invalidPhone");
        err.classList.remove("hidden");
        return;
      }
      var users = store.getUsers();
      var u = users.find(function (x) {
        return x.id === user.id;
      });
      u.name = name;
      u.last = last;
      u.phone = phone;
      store.saveUsers(users);
      store.logActivity(user.email, "profile", "");
      toast(t("profileSaved"), "ok");
      OC.renderSidebar();
    };
    $("#cp-save").onclick = function () {
      var err = $("#cp-err");
      err.classList.add("hidden");
      var oldP = $("#cp-old").value;
      var newP = $("#cp-new").value;
      var users = store.getUsers();
      var u = users.find(function (x) {
        return x.id === user.id;
      });
      if (u.passHash !== store.hashPass(oldP, user.email)) {
        err.textContent = t("currentPassWrong");
        err.classList.remove("hidden");
        return;
      }
      if (!store.passOk(newP)) {
        err.textContent = t("passWeak") + " — " + t("minChars");
        err.classList.remove("hidden");
        return;
      }
      u.passHash = store.hashPass(newP, user.email);
      store.saveUsers(users);
      store.logActivity(user.email, "password-change", "");
      toast(t("passwordChanged"), "ok");
      $("#cp-old").value = "";
      $("#cp-new").value = "";
    };
    $("#acc-del").onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var uid;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return OC.confirm({
              title: t("deleteAccountMsg"),
              message: t("deleteAccountWarn"),
              danger: true,
              okText: t("delete")
            });
          case 1:
            if (_context7.v) {
              _context7.n = 2;
              break;
            }
            return _context7.a(2);
          case 2:
            uid = user.id;
            store.saveUsers(store.getUsers().filter(function (x) {
              return x.id !== uid;
            }));
            store.kvDel(store.K.convs(uid));
            store.kvDel(store.K.providers(uid));
            store.kvDel(store.K.prompts(uid));
            store.kvDel(store.K.usage(uid));
            store.kvDel(store.K.settings(uid));
            store.logActivity(user.email, "account-delete", "");
            store.logout();
            toast(t("accountDeleted"), "ok");
            navigate("/login");
            location.hash = "/login";
            renderRouteHash();
          case 3:
            return _context7.a(2);
        }
      }, _callee7);
    }));
  };
  function renderRouteHash() {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  /* ================= PROMPTS ================= */
  OC.routes["/prompts"] = function () {
    var user = store.currentUser();
    if (!user) return;
    var list = store.getPrompts();
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("prompts") + '</h2><p class="page-sub">' + t("systemPromptsHint") + "</p>" + '<div class="panel"><div class="flex" style="margin-bottom:12px"><h3 style="margin:0">' + t("customPrompts") + '</h3><div class="spacer"></div><button class="btn btn-primary btn-sm" id="pr-new">' + I.plus + t("newPrompt") + "</button></div>" + '<div class="stack" id="pr-list"></div></div>' + "</div>");
    renderPromptList();
    $("#pr-new").onclick = function () {
      return promptEditor(null);
    };
  };
  function renderPromptList() {
    var box = $("#pr-list");
    if (!box) return;
    var list = store.getPrompts();
    if (!list.length) {
      box.innerHTML = '<p class="muted small">' + t("noPromptsYet") + "</p>";
      return;
    }
    box.innerHTML = "";
    list.forEach(function (p) {
      var row = el('<div class="attach-chip" style="max-width:100%;display:flex;align-items:flex-start">' + '<div style="flex:1;min-width:0"><div style="font-weight:700">' + U.esc(p.title) + (p.default ? ' <span class="badge badge-brand">' + t("defaultPrompt") + "</span>" : "") + '</div><div class="muted small" style="white-space:pre-wrap;max-height:60px;overflow:hidden">' + U.esc(p.text.slice(0, 180)) + "…</div></div>" + '<div class="flex" style="gap:4px">' + '<button class="icon-btn" data-use title="' + t("useInChat") + '">' + I.code + "</button>" + '<button class="icon-btn" data-def title="' + t("setDefault") + '">' + I.check + "</button>" + '<button class="icon-btn" data-edit title="' + t("edit") + '">' + I.edit + "</button>" + '<button class="icon-btn" data-del title="' + t("delete") + '">' + I.trash + "</button></div></div>");
      $("[data-use]", row).onclick = function () {
        OC._pendingPrompt = p;
        navigate("/chat");
        renderRouteHash();
      };
      $("[data-def]", row).onclick = function () {
        var all = store.getPrompts().map(function (x) {
          return Object.assign({}, x, {
            default: x.id === p.id
          });
        });
        store.savePrompts(all);
        renderPromptList();
        toast(t("defaultPrompt") + " ✓", "ok");
      };
      $("[data-edit]", row).onclick = function () {
        return promptEditor(p);
      };
      $("[data-del]", row).onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return OC.confirm({
                title: t("deletePromptMsg"),
                message: t("deletePromptMsg"),
                danger: true
              });
            case 1:
              if (_context8.v) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2);
            case 2:
              store.savePrompts(store.getPrompts().filter(function (x) {
                return x.id !== p.id;
              }));
              renderPromptList();
            case 3:
              return _context8.a(2);
          }
        }, _callee8);
      }));
      box.appendChild(row);
    });
  }
  function promptEditor(existing) {
    var p = existing ? Object.assign({}, existing) : {
      id: U.uid(),
      title: "",
      text: "",
      default: false
    };
    var body = el('<div class="stack">' + '<div class="field"><label>' + t("rename") + '</label><input class="input" id="pt-title" value="' + U.esc(p.title) + '"></div>' + '<div class="field"><label>' + t("promptText") + '</label><textarea class="input" id="pt-text" rows="6">' + U.esc(p.text) + "</textarea></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="pt-default" ' + (p.default ? "checked" : "") + '><span class="track"></span></label><span>' + t("defaultPrompt") + "</span></div>" + "</div>");
    var save = el('<button class="btn btn-primary">' + t("save") + "</button>");
    var cancel = el('<button class="btn">' + t("cancel") + "</button>");
    var m = OC.modal({
      title: existing ? t("edit") : t("newPrompt"),
      body: body,
      foot: [cancel, save]
    });
    cancel.onclick = function () {
      return m.close();
    };
    save.onclick = function () {
      p.title = $("#pt-title", body).value.trim() || (OC.i18n.locale() === "fa" ? "پرامپت" : "Prompt");
      p.text = $("#pt-text", body).value;
      p.default = $("#pt-default", body).checked;
      var list = store.getPrompts();
      if (p.default) {
        var _iterator = _createForOfIteratorHelper(list),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var x = _step.value;
            x.default = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var i = list.findIndex(function (x) {
        return x.id === p.id;
      });
      if (i >= 0) list[i] = p;else list.push(p);
      store.savePrompts(list);
      store.logActivity(store.currentUser().email, "prompt", p.title);
      toast(t("promptSaved"), "ok");
      m.close();
      OC.routes["/prompts"]();
    };
  }

  /* ================= USAGE ================= */
  OC.routes["/usage"] = function () {
    var user = store.currentUser();
    if (!user) return;
    var usage = store.getUsage();
    var sys = store.sysSettings();
    // last 14 days
    var days = [];
    for (var i = 13; i >= 0; i--) {
      var ts = Date.now() - i * 864e5;
      var dk = store.dayKey(ts);
      days.push(_objectSpread({
        dk: dk,
        label: new Date(ts).toLocaleDateString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US", {
          day: "numeric",
          month: "short"
        })
      }, usage.days[dk] || {
        req: 0,
        tin: 0,
        tout: 0,
        fail: 0
      }));
    }
    var maxReq = Math.max.apply(Math, [1].concat(_toConsumableArray(days.map(function (d) {
      return d.req + d.fail;
    }))));
    var bars = days.map(function (d) {
      var h = Math.round(d.req / maxReq * 100);
      var hf = Math.round(d.fail / maxReq * 100);
      return '<div class="bar-col" title="' + d.dk + ": " + d.req + '"><div class="bar" style="height:' + h + '%' + (d.req ? "" : ";opacity:.25") + '"></div><span class="bar-label">' + d.label + "</span></div>";
    }).join("");
    var lim = sys.dailyRequestLimit || 0;
    var todayReq = store.todayReqCount();
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("usage") + '</h2><p class="page-sub">' + t("reportedByProviders") + "</p>" + '<div class="grid-3">' + '<div class="stat-card"><div class="st-label">' + t("requests") + "</div><div class='st-value'>" + U.faNum(usage.totals.req) + '</div><div class="st-hint">' + t("today_") + ": " + U.faNum(todayReq) + (lim ? " / " + U.faNum(lim) : "") + "</div></div>" + '<div class="stat-card"><div class="st-label">' + t("inputTokens") + "</div><div class='st-value'>" + U.faNum(usage.totals.tin) + "</div></div>" + '<div class="stat-card"><div class="st-label">' + t("outputTokens") + "</div><div class='st-value'>" + U.faNum(usage.totals.tout) + "</div></div>" + "</div>" + '<div class="panel" style="margin-top:16px"><h3>' + t("activityRequests") + "</h3><p class='p-desc'>" + t("failedRequests") + ": " + U.faNum(usage.totals.fail) + " · " + t("usageNote") + "</p>" + '<div class="bars">' + bars + "</div></div>" + '<div class="panel"><h3>' + t("dailyLimit") + "</h3><p class='p-desc'>" + (lim ? U.faNum(lim) + " " + t("requestsPerDay") : t("unlimited")) + (lim && todayReq >= lim ? " — " + t("limitReached") : "") + "</p>" + '<div class="progress"><div style="width:' + (lim ? Math.min(100, Math.round(todayReq / lim * 100)) : 8) + '%"></div></div></div>' + "</div>");
  };

  /* ================= ADMIN ================= */
  OC.routes["/admin"] = function () {
    var user = store.currentUser();
    if (!user) return;
    if (user.role !== "admin") {
      page('<div class="settings-wrap"><div class="panel"><h3>' + t("noAccess") + "</h3></div></div>");
      return;
    }
    page('<div class="settings-wrap">' + '<h2 class="page-title">' + t("admin") + '</h2><p class="page-sub">' + t("users") + " · " + t("systemSettings") + " · " + t("eventsLog") + "</p>" + '<div class="tabs" id="admin-tabs">' + '<button data-tab="dash" class="active">' + I.chart + t("dashboard") + "</button>" + '<button data-tab="users">' + I.user + t("users") + "</button>" + '<button data-tab="prov">' + I.plug + t("systemProviders") + "</button>" + '<button data-tab="set">' + I.settings + t("systemSettings") + "</button>" + '<button data-tab="log">' + I.activity + t("events") + "</button>" + "</div>" + '<div id="admin-body"></div>' + "</div>");
    $$("#admin-tabs button").forEach(function (b) {
      return b.onclick = function () {
        $$("#admin-tabs button").forEach(function (x) {
          return x.classList.remove("active");
        });
        b.classList.add("active");
        adminTab(b.dataset.tab);
      };
    });
    adminTab("dash");
  };
  function adminTab(tab) {
    var body = $("#admin-body");
    if (!body) return;
    var users = store.getUsers();
    var convsAll = users.map(function (u) {
      return store.K.convs(u.id) ? store.kvGet(store.K.convs(u.id), []) : [];
    }).flat();
    if (tab === "dash") {
      var sys = store.sysSettings();
      var msgs = convsAll.reduce(function (a, c) {
        return a + (c.messages ? c.messages.length : 0);
      }, 0);
      var provCount = (sys.systemProviders || []).length + store.getProviders().length;
      var acts = store.getActivity().slice(0, 8);
      body.innerHTML = '<div class="grid-3">' + '<div class="stat-card"><div class="st-label">' + t("totalUsers") + "</div><div class='st-value'>" + U.faNum(users.length) + "</div></div>" + '<div class="stat-card"><div class="st-label">' + t("totalChats") + "</div><div class='st-value'>" + U.faNum(convsAll.length) + '</div><div class="st-hint">' + t("totalMessages") + ": " + U.faNum(msgs) + "</div></div>" + '<div class="stat-card"><div class="st-label">' + t("totalProviders") + "</div><div class='st-value'>" + U.faNum(provCount) + "</div></div>" + "</div>" + '<div class="panel" style="margin-top:16px"><h3>' + t("overview") + "</h3><p class='p-desc'></p>" + '<div class="stack">' + '<div class="check-row"><label class="switch"><input type="checkbox" id="sys-maint" ' + (sys.maintenance ? "checked" : "") + '><span class="track"></span></label><span>' + t("maintenanceMode") + "</span></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="sys-signup" ' + (sys.signupOpen ? "checked" : "") + '><span class="track"></span></label><span>' + t("signupOpen") + "</span></div>" + "</div></div>" + '<div class="panel"><h3>' + t("eventsLog") + "</h3>" + (acts.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + t("value") + '</th><th>' + t("action") + '</th><th>' + t("events") + '</th></tr></thead><tbody>' + acts.map(function (a) {
        return "<tr><td class='small'>" + U.fmtTime(a.ts) + " · " + U.fmtDate(a.ts) + "</td><td>" + U.esc(a.actor) + "</td><td>" + U.esc(a.type) + "</td></tr>";
      }).join("") + "</tbody></table></div>" : '<p class="muted small">' + t("noEvents") + "</p>") + "</div>";
      $("#sys-maint").onchange = function (e) {
        store.saveSysSettings({
          maintenance: e.target.checked
        });
        toast(t("saved"), "ok");
      };
      $("#sys-signup").onchange = function (e) {
        store.saveSysSettings({
          signupOpen: e.target.checked
        });
        toast(t("saved"), "ok");
      };
    }
    if (tab === "users") {
      body.innerHTML = '<div class="flex" style="margin-bottom:12px;flex-wrap:wrap">' + '<input class="input" id="u-search" placeholder="' + t("searchUserByEmail") + '" style="max-width:280px">' + '<div class="spacer"></div>' + '<button class="btn" id="u-export">' + I.download + t("exportUsers") + "</button>" + "</div>" + '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + t("profile") + '</th><th>' + t("email") + '</th><th>' + t("phone") + '</th><th>' + t("status") + '</th><th>' + t("memberSince") + '</th><th>' + t("actions") + "</th></tr></thead><tbody id='u-rows'></tbody></table></div>" + '<p class="hint" style="margin-top:8px">' + t("exportHint") + "</p>";
      var renderRows = function renderRows(q) {
        var rows = users.filter(function (u) {
          return !q || (u.email + u.name + (u.last || "") + (u.username || "")).toLowerCase().includes(q.toLowerCase());
        });
        $("#u-rows").innerHTML = rows.map(function (u) {
          return "<tr data-uid='" + u.id + "'>" + "<td><div class='flex'>" + OC.avatarHTML(u, 30) + "<div><div style='font-weight:650'>" + U.esc(u.name + " " + (u.last || "")) + (u.role === "admin" ? ' <span class="badge badge-brand">' + t("adminRole") + "</span>" : "") + (u.seeded ? ' <span class="badge">' + t("adminRole") + "</span>" : "") + '</div><div class="muted small">' + U.esc(u.username || "—") + "</div></div></div></td>" + "<td style='direction:ltr;text-align:start'>" + U.esc(u.email) + "</td>" + "<td style='direction:ltr;text-align:start'>" + U.esc(u.phone || "—") + "</td>" + "<td>" + (u.disabled ? '<span class="badge badge-danger">' + t("disabled") + "</span>" : '<span class="badge badge-ok">' + t("active") + "</span>") + "</td>" + "<td class='small'>" + U.fmtDate(u.createdAt) + "</td>" + "<td><div class='flex' style='gap:2px'>" + '<button class="icon-btn" data-role title="' + (u.role === "admin" ? t("demoteAdmin") : t("promoteAdmin")) + '">' + I.shield + "</button>" + '<button class="icon-btn" data-dis title="' + (u.disabled ? t("enableUser") : t("disableUser")) + '">' + (u.disabled ? I.check : I.x) + "</button>" + '<button class="icon-btn" data-pass title="' + t("resetPassword") + '">' + I.key + "</button>" + '<button class="icon-btn" data-delu title="' + t("deleteUser") + '">' + I.trash + "</button>" + "</div></td></tr>";
        }).join("") || '<tr><td colspan="6" class="muted small">' + t("noChatFound") + "</td></tr>";
        $$("#u-rows tr[data-uid]").forEach(function (tr) {
          var u = store.findUser(tr.dataset.uid);
          var adminEditingSelf = u.id === store.currentUser().id;
          $("[data-role]", tr).onclick = function () {
            var us = store.getUsers();
            var x = us.find(function (v) {
              return v.id === u.id;
            });
            x.role = x.role === "admin" ? "user" : "admin";
            store.saveUsers(us);
            store.logActivity(store.currentUser().email, "user-role", x.email + " → " + x.role);
            adminTab("users");
            toast(t("userUpdated"), "ok");
          };
          $("[data-dis]", tr).onclick = function () {
            var us = store.getUsers();
            var x = us.find(function (v) {
              return v.id === u.id;
            });
            x.disabled = !x.disabled;
            store.saveUsers(us);
            store.logActivity(store.currentUser().email, x.disabled ? "user-disable" : "user-enable", x.email);
            adminTab("users");
            toast(t("userUpdated"), "ok");
          };
          $("[data-pass]", tr).onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
            var v, us, x;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.n) {
                case 0:
                  _context9.n = 1;
                  return OC.promptDialog({
                    title: t("resetPassword"),
                    label: t("newPassword") + " (" + t("minChars") + ")",
                    okText: t("save")
                  });
                case 1:
                  v = _context9.v;
                  if (!(v == null)) {
                    _context9.n = 2;
                    break;
                  }
                  return _context9.a(2);
                case 2:
                  if (store.passOk(v)) {
                    _context9.n = 3;
                    break;
                  }
                  toast(t("passWeak"), "err");
                  return _context9.a(2);
                case 3:
                  us = store.getUsers();
                  x = us.find(function (y) {
                    return y.id === u.id;
                  });
                  x.passHash = store.hashPass(v, x.email);
                  store.saveUsers(us);
                  store.logActivity(store.currentUser().email, "reset-pass", x.email);
                  toast(t("passwordChanged"), "ok");
                case 4:
                  return _context9.a(2);
              }
            }, _callee9);
          }));
          $("[data-delu]", tr).onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
            return _regenerator().w(function (_context0) {
              while (1) switch (_context0.n) {
                case 0:
                  if (!adminEditingSelf) {
                    _context0.n = 1;
                    break;
                  }
                  toast(t("noAccess"), "err");
                  return _context0.a(2);
                case 1:
                  _context0.n = 2;
                  return OC.confirm({
                    title: t("deleteUser"),
                    message: u.email,
                    danger: true
                  });
                case 2:
                  if (_context0.v) {
                    _context0.n = 3;
                    break;
                  }
                  return _context0.a(2);
                case 3:
                  store.saveUsers(store.getUsers().filter(function (x) {
                    return x.id !== u.id;
                  }));
                  store.kvDel(store.K.convs(u.id));
                  store.kvDel(store.K.providers(u.id));
                  store.kvDel(store.K.prompts(u.id));
                  store.kvDel(store.K.usage(u.id));
                  store.kvDel(store.K.settings(u.id));
                  store.logActivity(store.currentUser().email, "user-delete", u.email);
                  adminTab("users");
                  toast(t("userDeleted"), "ok");
                case 4:
                  return _context0.a(2);
              }
            }, _callee0);
          }));
        });
      };
      renderRows("");
      $("#u-search").addEventListener("input", U.debounce(function (e) {
        return renderRows(e.target.value);
      }, 200));
      $("#u-export").onclick = function () {
        var rows = [["name", "last", "phone", "email", "role", "created"]];
        var _iterator2 = _createForOfIteratorHelper(users),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var u = _step2.value;
            rows.push([u.name, u.last || "", u.phone || "", u.email, u.role, new Date(u.createdAt).toISOString()]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        U.download("open-code-users.csv", new Blob([OC.exporter.toCSV(rows)], {
          type: "text/csv"
        }));
        store.logActivity(store.currentUser().email, "export-users", users.length + " rows");
        toast(t("downloaded"), "ok");
      };
    }
    if (tab === "prov") {
      body.innerHTML = '<div class="panel"><h3>' + t("systemProviders") + "</h3><p class='p-desc'>" + t("systemProvidersDesc") + "</p>" + '<div class="stack" id="sysprov-list"></div>' + '<div class="flex" style="margin-top:12px"><button class="btn btn-primary" id="sysprov-add">' + I.plus + t("addSystemProvider") + "</button></div></div>";
      renderProviderList("#sysprov-list", true, function () {
        return adminTab("prov");
      });
      $("#sysprov-add").onclick = function () {
        return providerEditor(null, true, function () {
          return adminTab("prov");
        });
      };
    }
    if (tab === "set") {
      var _sys = store.sysSettings();
      body.innerHTML = '<div class="panel"><h3>' + t("systemSettings") + "</h3>" + '<div class="stack">' + '<div class="grid-2">' + '<div class="field"><label>' + t("dailyLimit") + " (" + t("requestsPerDay") + ' — 0=' + t("unlimited") + ')</label><input class="input" id="ss-limit" type="number" min="0" value="' + (_sys.dailyRequestLimit || 0) + '"></div>' + '<div class="field"><label>' + t("maxFileSize") + " (" + t("megabytes") + ')</label><input class="input" id="ss-file" type="number" min="1" max="50" value="' + (_sys.maxFileSizeMB || 10) + '"></div>' + '<div class="field"><label>' + t("allowedExtensions") + ' <span class="muted">(comma)</span></label><input class="input" id="ss-ext" dir="ltr" value="' + (_sys.allowedExtensions || []).join(",") + '"></div>' + '<div class="field"><label>' + t("trashRetention") + '</label><select class="input" id="ss-trash">' + [7, 14, 30].map(function (d) {
        return '<option value="' + d + '"' + (_sys.trashDays === d ? " selected" : "") + ">" + (d === 7 ? t("days7") : d === 14 ? t("days14") : t("days30")) + "</option>";
      }).join("") + "</select></div>" + '<div class="field"><label>' + t("maxSilence") + " (" + t("ms") + ')</label><input class="input" id="ss-silence" type="number" min="5000" step="5000" value="' + (_sys.silenceTimeoutMs || 60000) + '"></div>' + '<div class="field"><label>' + t("temperature") + " (" + t("maxTemperature") + ')</label><input class="input" id="ss-tmax" type="number" min="0.5" max="2" step="0.5" value="' + (_sys.temperatureMax || 2) + '"></div>' + "</div>" + '<div class="field"><label>' + t("webSearch") + ' — API Key (Tavily) <span class="muted">(' + (_sys.webSearchKeyEnc ? "✓" : t("optional")) + ')</span></label><input class="input" id="ss-wskey" type="password" dir="ltr" placeholder="tvly-…"></div>' + '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-ws" ' + (_sys.webSearchEnabled ? "checked" : "") + '><span class="track"></span></label><span>' + t("webSearchDefault") + "</span></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-maint2" ' + (_sys.maintenance ? "checked" : "") + '><span class="track"></span></label><span>' + t("maintenanceMode") + "</span></div>" + '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-signup2" ' + (_sys.signupOpen ? "checked" : "") + '><span class="track"></span></label><span>' + t("signupOpen") + "</span></div>" + '<button class="btn btn-primary" id="ss-save" style="align-self:flex-start">' + t("saveChanges") + "</button>" + "</div></div>";
      $("#ss-save").onclick = function () {
        var patch = {
          dailyRequestLimit: parseInt($("#ss-limit").value, 10) || 0,
          maxFileSizeMB: OC.U.clamp(parseInt($("#ss-file").value, 10) || 10, 1, 50),
          allowedExtensions: $("#ss-ext").value.split(",").map(function (x) {
            return x.trim().toLowerCase();
          }).filter(Boolean),
          trashDays: parseInt($("#ss-trash").value, 10) || 14,
          silenceTimeoutMs: parseInt($("#ss-silence").value, 10) || 60000,
          temperatureMax: parseFloat($("#ss-tmax").value) || 2,
          webSearchEnabled: $("#ss-ws").checked,
          maintenance: $("#ss-maint2").checked,
          signupOpen: $("#ss-signup2").checked
        };
        var wsKey = $("#ss-wskey").value;
        if (wsKey) patch.webSearchKeyEnc = store.encKey(wsKey);
        store.saveSysSettings(patch);
        store.logActivity(store.currentUser().email, "sys-settings", "");
        toast(t("settingsSaved"), "ok");
      };
    }
    if (tab === "log") {
      var _acts = store.getActivity();
      body.innerHTML = '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>' + t("events") + '</th><th>' + t("action") + '</th><th>' + t("value") + "</th></tr></thead><tbody>" + (_acts.length ? _acts.map(function (a, i) {
        return "<tr><td class='small muted'>" + U.faNum(i + 1) + "</td><td>" + U.esc(a.actor) + "</td><td>" + U.esc(a.type) + "</td><td class='small muted'>" + U.esc(a.details || "—") + " · " + U.fmtTime(a.ts) + " · " + U.fmtDate(a.ts) + "</td></tr>";
      }).join("") : '<tr><td colspan="4" class="muted small">' + t("noEvents") + "</td></tr>") + "</tbody></table></div>";
    }
  }

  /* ================= register routes ================= */
  OC.panels = {
    registerRoutes: function registerRoutes() {
      // routes are already assigned above by direct assignment into OC.route registry
      // (ui.js exposes `routes` via closure — re-register safely)
    },
    providerEditor: providerEditor
  };
})();