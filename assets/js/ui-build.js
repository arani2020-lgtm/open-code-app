function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — Professional Review & Build Pipeline for GitHub repos.
   One click: connect → review → fix → build-ready → commit/PR → output links, with live percent progress.
   Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var $ = OC.$,
    $$ = OC.$$;
  var I = OC.ui_icons;
  var PHASES = ["bpPh1", "bpPh2", "bpPh3", "bpPh4", "bpPh5", "bpPh6"];
  var WEIGHTS = [6, 24, 40, 12, 12, 6]; // phase shares, total 100
  var running = null; // {repo, branch, stop, cancelled}

  /* ---------- helpers ---------- */
  function esc(s) {
    return U.esc(s);
  }
  function fa(n) {
    return U.faNum(n);
  }
  function toast(msg, kind) {
    if (OC.toast) return OC.toast(msg, kind);
  }
  function extractJson(text) {
    var sources = [String(text || ""), String(text || "").replace(/```(?:json)?/gi, "")];
    for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
      var src = _sources[_i];
      var start = src.indexOf("{");
      if (start < 0) continue;
      var depth = 0,
        inStr = false,
        escCh = false,
        end = -1;
      for (var i = start; i < src.length; i++) {
        var ch = src[i];
        if (inStr) {
          if (escCh) escCh = false;else if (ch === "\\") escCh = true;else if (ch === '"') inStr = false;
          continue;
        }
        if (ch === '"') inStr = true;else if (ch === "{") depth++;else if (ch === "}") {
          depth--;
          if (!depth) {
            end = i + 1;
            break;
          }
        }
      }
      if (end < 0) continue;
      var raw = src.slice(start, end);
      try {
        return JSON.parse(raw);
      } catch (e) {}
      try {
        return JSON.parse(raw.replace(/,\s*([}\]])/g, "$1"));
      } catch (e) {}
    }
    return null;
  }
  var LANG_EXT = {
    js: "JavaScript",
    ts: "TypeScript",
    jsx: "JavaScript",
    tsx: "TypeScript",
    py: "Python",
    rb: "Ruby",
    go: "Go",
    rs: "Rust",
    java: "Java",
    kt: "Kotlin",
    swift: "Swift",
    c: "C",
    h: "C",
    cpp: "C++",
    hpp: "C++",
    cs: "C#",
    php: "PHP",
    sh: "Shell",
    bat: "Batch",
    ps1: "PowerShell",
    lua: "Lua",
    pl: "Perl",
    r: "R",
    dart: "Dart",
    scala: "Scala",
    ex: "Elixir",
    clj: "Clojure",
    hs: "Haskell",
    vue: "Vue",
    svelte: "Svelte",
    astro: "Astro",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    sass: "Sass",
    less: "Less",
    sql: "SQL",
    md: "Markdown",
    toml: "TOML",
    yml: "YAML",
    yaml: "YAML"
  };
  function detectStack(files) {
    var hist = {};
    var hasPkg = false,
      hasPy = false,
      hasGo = false,
      hasCargo = false,
      hasReadme = false,
      hasCi = false;
    var _iterator = _createForOfIteratorHelper(files || []),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var f = _step.value;
        var p = String(f.p || "").toLowerCase();
        var base = p.split("/").pop();
        var ext = base.indexOf(".") >= 0 ? base.split(".").pop() : base;
        if (LANG_EXT[ext]) hist[LANG_EXT[ext]] = (hist[LANG_EXT[ext]] || 0) + 1;
        if (base === "package.json") hasPkg = true;
        if (base === "requirements.txt" || base === "pyproject.toml" || base === "setup.py") hasPy = true;
        if (base === "go.mod") hasGo = true;
        if (base === "cargo.toml") hasCargo = true;
        if (base === "readme.md" || base === "readme") hasReadme = true;
        if (p.indexOf(".github/workflows/") === 0) hasCi = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var langs = Object.keys(hist).sort(function (a, b) {
      return hist[b] - hist[a];
    }).slice(0, 4);
    var stack = langs.length ? langs.join(" + ") : files && files.length ? "misc" : "empty";
    if (hasPkg) stack += " · Node.js";
    if (hasPy) stack += " · Python";
    if (hasGo) stack += " · Go";
    if (hasCargo) stack += " · Rust";
    return {
      stack: stack,
      langs: langs,
      hasPkg: hasPkg,
      hasReadme: hasReadme,
      hasCi: hasCi,
      files: (files || []).length
    };
  }
  function resolveModel() {
    var sel = $("#model-select");
    var pick = sel && sel.value || "";
    if (!pick) {
      var _p = OC.providers.defaultProvider();
      if (!_p) return null;
      pick = _p.id + "::" + (_p.models && _p.models[0] || "gpt-4o-mini");
    }
    var parts = String(pick).split("::");
    var p = OC.providers.getProvider(parts[0]);
    if (!p) return null;
    return {
      provider: p,
      model: parts[1] || "gpt-4o-mini"
    };
  }

  /* ---------- multi-model engine (v1.4.0) ---------- */
  function providerReady(p) {
    try {
      return OC.providers.activeKeys(p).length > 0;
    } catch (e) {
      return !!(p && (p.keyEnc || (p.keys || []).length));
    }
  }
  function allModels() {
    var out = [];
    var _iterator2 = _createForOfIteratorHelper(OC.providers.allProviders()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var p = _step2.value;
        if (!providerReady(p)) continue;
        var ms = p.models && p.models.length ? p.models : [];
        var _iterator3 = _createForOfIteratorHelper(ms),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var m = _step3.value;
            out.push({
              provider: p,
              model: m
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return out;
  }
  function buildChain(sel) {
    var keyOf = function keyOf(x) {
      return (x.provider.id || "") + "::" + x.model;
    };
    var chain = sel ? [sel] : [];
    var _iterator4 = _createForOfIteratorHelper(allModels()),
      _step4;
    try {
      var _loop = function _loop() {
        var c = _step4.value;
        if (!chain.some(function (x) {
          return keyOf(x) === keyOf(c);
        })) chain.push(c);
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return chain;
  }
  function modelName(c) {
    return (c.provider && (c.provider.name || c.provider.id) || "?") + "/" + c.model;
  }
  function validReview(j) {
    return !!(j && j.review && typeof j.review.score === "number");
  }
  function verifyPrompt() {
    return isFa() ? "=== وظیفه: بازبینی نهایی (تأیید اصلاحات) ===\n" + "اصلاحات اعمال شده است. مخزن را دوباره ارزیابی کن و فقط و فقط یک JSON معتبر با همان ساختار review بده: score به‌روز و فقط مسائل واقعیِ باقی‌مانده." : "=== TASK: final verification review ===\n" + "Fixes have been applied. Re-evaluate the repository and reply with exactly one valid JSON using the same review structure: updated score and only remaining real issues.";
  }
  function runAI(pick, messages, onChunk) {
    return new Promise(function (resolve, reject) {
      var acc = "";
      var h = OC.providers.streamChat({
        provider: pick.provider,
        model: pick.model,
        messages: messages,
        onDelta: function onDelta(full, piece) {
          acc = full;
          if (onChunk) onChunk(piece, full.length);
        },
        onDone: function onDone() {
          return resolve(acc);
        },
        onAbort: function onAbort() {
          return reject(new Error("__cancelled__"));
        },
        onError: function onError(e) {
          return reject(e);
        }
      });
      if (running) running.stop = function () {
        try {
          h.stop();
        } catch (e) {}
      };
    });
  }
  function isFa() {
    return OC.i18n.locale() === "fa";
  }
  function reviewPrompt(stack) {
    return isFa() ? "=== وظیفه: بازبینی حرفه‌ای پروژه ===\n" + "به‌عنوان مهندس ارشد نرم‌افزار، این مخزن را حرفه‌ای بازبینی کن (ساختار، صحت کد، امنیت، عملکرد، آماده‌سازی ساخت).\n" + "فقط و فقط یک JSON معتبر بده:\n" + '{"say":"خلاصهٔ یک‌خطی","review":{"score":0,"stack":"","summary":"","issues":[{"sev":"critical|high|medium|low","path":"مسیر","desc":"شرح","fix":"راه‌حل"}],"missing":["فایل‌های لازم ولی ناموجود"],"buildPlan":["گام‌های ترتیبی تا آمادهٔ ساخت"]}}\n' + "حداقل ۴ و حداکثر ۱۰ issue واقعی و مستند به فایل‌های موجود بده. در buildPlan فقط کارهای تا «آماده‌سازی ساخت» بیاید (نه دیپلوی).\n" + "تشخیص اولیهٔ پشته: " + stack : "=== TASK: professional project review ===\n" + "Act as a senior engineer and review this repository professionally (structure, correctness, security, performance, build readiness).\n" + "Reply with exactly one valid JSON object:\n" + '{"say":"one-line summary","review":{"score":0,"stack":"","summary":"","issues":[{"sev":"critical|high|medium|low","path":"path","desc":"what","fix":"how"}],"missing":["required but absent files"],"buildPlan":["ordered steps until build-ready"]}}\n' + "Give 4-10 real, file-grounded issues. buildPlan covers only work up to build-ready (no deploy).\n" + "Initial stack guess: " + stack;
  }
  function executePrompt(plan, round) {
    return isFa() ? "=== وظیفه: اجرای اصلاحات تا آمادهٔ ساخت (دور " + round + ") ===\n" + "برنامهٔ ساخت:\n" + plan.map(function (s, i) {
      return i + 1 + ". " + s;
    }).join("\n") + "\n" + "سازوکار همان actions است (read/list/write/done). فقط روی همین مخزن کار کن، فایل را قبل از write بخوان، و write شامل کل محتوای نهایی فایل باشد. مسیرهای ساخت‌یافته (index.html، پکیج‌ها، کانفیگ) را کامل کن. وقتی تمام گام‌های برنامه انجام شد done بده." : "=== TASK: execute fixes until build-ready (round " + round + ") ===\n" + "Build plan:\n" + plan.map(function (s, i) {
      return i + 1 + ". " + s;
    }).join("\n") + "\n" + "Use the actions protocol (read/list/write/done). Work only in this repo, read before write, write = FULL final content. Complete scaffolding (index.html, packages, config). Reply done when all plan steps are handled.";
  }
  function buildReadyPrompt(summary) {
    return isFa() ? "=== وظیفه: نهایی‌سازی آمادگی ساخت ===\n" + "با توجه به بازبینی و اصلاحات انجام‌شده" + (summary ? " («" + summary + "»)" : "") + "، هر فایل ضروری برای «آماده‌سازی ساخت» که وجود ندارد بساز یا اصلاح کن (مثل README درست، نقطهٔ ورود، کانفیگ بیلد، فایل‌های استایل مرجع‌شده). سپس done بده." : "=== TASK: finalize build readiness ===\n" + "Based on the review and fixes" + (summary ? " (\"" + summary + "\")" : "") + ", create or fix any file still required to be build-ready (proper README, entry point, build config, referenced styles). Then reply done.";
  }

  /* ---------- UI ---------- */
  function openPipeline(repoFull, branchHint) {
    if (running) {
      toast(t("bpAlreadyRunning"), "err");
      return;
    }
    var pick = resolveModel();
    if (!pick) {
      toast(t("wizNoProvider"), "err");
      return;
    }
    var phase = -1,
      pct = 0,
      cancel = false,
      result = null;
    var logLines = [];
    var accChars = 0;
    var startedAt = Date.now();
    var body = document.createElement("div");
    var m = OC.modal({
      title: t("bpTitle"),
      body: body,
      foot: [],
      wide: true
    });
    body.innerHTML = '<div class="bp-wrap">' + '<div class="bp-head"><b>' + esc(repoFull) + '</b><span class="badge" id="bp-branch">…</span>' + '<span class="badge bp-status" id="bp-state">' + t("bpStarting") + "</span>" + '<span class="muted small bp-elapsed" id="bp-elapsed">0s</span></div>' + '<div class="flex check-row" style="gap:8px;margin:10px 2px 0">' + '<label class="check-row" style="margin:0"><input type="checkbox" id="bp-all" checked><span>' + t("bpAllModels") + "</span></label>" + '<span class="muted small" id="bp-models-count"></span></div>' + '<div class="bp-mid">' + '<div class="bp-ring" id="bp-ring"><span class="bp-pct" id="bp-pct">۰٪</span></div>' + '<div class="bp-phases" id="bp-phases">' + PHASES.map(function (p, i) {
      return '<div class="bp-phase" id="' + p + '"><span class="ph-dot">' + I.check + "</span><span>" + t("bpPh" + (i + 1)) + '</span><span style="flex:1"></span><span class="muted small" data-pph="' + p + '"></span></div>';
    }).join("") + "</div></div>" + '<div class="bp-log" id="bp-log"></div>' + '<div class="bp-result" id="bp-result">' + '<div class="bp-stats" id="bp-stats"></div>' + '<div class="bp-links" id="bp-links"></div>' + '<div class="flex" style="gap:8px;flex-wrap:wrap" id="bp-acts"></div></div>' + '<div class="flex" style="justify-content:flex-end" id="bp-foot-row"><button class="btn btn-danger-ghost" id="bp-stop">' + I.x + t("bpStop") + "</button></div>" + "</div>";
    var ring = $("#bp-ring", body),
      pctEl = $("#bp-pct", body);
    var logEl = $("#bp-log", body);
    var stateEl = $("#bp-state", body);

    /* multi-model setup */
    var chain = buildChain(pick);
    var chainIdx = 0;
    var usedModels = {};
    var allEl = $("#bp-all", body);
    if (chain.length < 2) allEl.checked = false;
    $("#bp-models-count", body).textContent = "· " + fa(chain.length) + " " + t("bpModelsAvail");
    var useAll = function useAll() {
      return allEl.checked && chain.length > 1;
    };
    function nextModel() {
      var c = chain[chainIdx % chain.length];
      chainIdx++;
      usedModels[modelName(c)] = true;
      return c;
    }
    function setPct(v) {
      pct = Math.max(0, Math.min(100, Math.round(v)));
      ring.style.setProperty("--p", pct + "%");
      pctEl.textContent = fa(pct) + "٪";
    }
    function setState(s, cls) {
      stateEl.textContent = s;
      stateEl.className = "badge bp-status" + (cls ? " " + cls : "");
    }
    function log(msg) {
      logLines.push(msg);
      if (logLines.length > 50) logLines = logLines.slice(-50);
      logEl.innerHTML = logLines.map(function (l) {
        return "<div>" + esc(l) + "</div>";
      }).join("");
      logEl.scrollTop = logEl.scrollHeight;
    }
    function setPhase(i) {
      for (var j = 0; j < PHASES.length; j++) {
        var elx = $("#" + PHASES[j], body);
        elx.className = "bp-phase" + (j < i ? " done" : j === i ? " active" : "");
        if (j < i) {
          var el2 = $("[data-pph=" + PHASES[j] + "]", body);
          if (el2) el2.textContent = "✓";
        }
      }
    }
    var tickTimer = setInterval(function () {
      var s = Math.round((Date.now() - startedAt) / 1000);
      $("#bp-elapsed", body).textContent = s >= 60 ? Math.floor(s / 60) + "m " + s % 60 + "s" : s + "s";
    }, 1000);
    $("#bp-stop", body).onclick = function () {
      cancel = true;
      if (running && running.stop) {
        try {
          running.stop();
        } catch (e) {}
      }
      setState(t("bpStopping"), "badge-warn");
    };
    running = {
      repo: repoFull,
      branch: branchHint,
      stop: null,
      cancelled: false
    };
    function linkCard(label, url, icon) {
      return '<button class="bp-link" data-url="' + esc(url) + '">' + (icon || I.globe) + '<span class="lp">' + esc(label) + "</span>" + I.download + "</button>";
    }
    function bindLinks() {
      $$("#bp-links .bp-link", body).forEach(function (b) {
        return b.onclick = function () {
          try {
            window.open(b.dataset.url, "_blank", "noopener");
          } catch (e) {}
        };
      });
    }
    var saveResult = function saveResult(r) {
      result = r;
      store.logActivity(store.currentUser().email, "build-pipeline", repoFull + "@" + (r.branch || branchHint || "main"));
    };
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var bs, branch, st, rev, revPick, tried, order, _iterator5, _step5, _loop3, _iterator6, _step6, _cand2, revRes, revJ, plan, round, stagedTotal, done, mpick, res, j, mp2, res2, ra, from, to, fpick, r4, j4, ra4, finalScore, finalIssues, extra, stagedNow0, vres, vp, vcands, _iterator7, _step7, _loop2, _i2, _vcands, cand, r, mp, r2, j2, _mp, ra2, v2, vp2, _iterator8, _step8, _cand, rr, stagedNow, zipBlob, commitUrl, commitSha, newBranch, result_pr, zw, _iterator9, _step9, s, commitMsg, cr, pr, repoUrl, links, _t, _t2, _t3, _t4, _t5, _t6, _t7;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            /* phase 1 — connect & count */
            setPhase(0);
            setState(t("bpPh1"));
            _context3.n = 1;
            return OC.github.branches(repoFull);
          case 1:
            bs = _context3.v;
            branch = branchHint || (bs.find(function (b) {
              return b.name === "main";
            }) || bs[0] || {}).name || "main";
            $("#bp-branch", body).textContent = branch;
            log("branch: " + branch);
            _context3.n = 2;
            return OC.github.attachRepo(repoFull, branch);
          case 2:
            st = detectStack(OC.github.attached().tree);
            log("files: " + st.files + " · stack: " + st.stack);
            if (chain.length > 1) log("models: " + chain.slice(0, 6).map(modelName).join(", ") + (chain.length > 6 ? " …(+" + (chain.length - 6) + ")" : ""));
            setPct(6);

            /* phase 2 — professional review (multi-model cascade) */
            setPhase(1);
            setState(t("bpPh2"), "badge-warn");
            rev = null, revPick = null, tried = [];
            order = [pick];
            _iterator5 = _createForOfIteratorHelper(chain);
            _context3.p = 3;
            _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
              var c;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    c = _step5.value;
                    if (!(order.length >= 5)) {
                      _context2.n = 1;
                      break;
                    }
                    return _context2.a(2, 1);
                  case 1:
                    if (!order.some(function (x) {
                      return x.provider.id === c.provider.id && x.model === c.model;
                    })) order.push(c);
                  case 2:
                    return _context2.a(2);
                }
              }, _loop3);
            });
            _iterator5.s();
          case 4:
            if ((_step5 = _iterator5.n()).done) {
              _context3.n = 7;
              break;
            }
            return _context3.d(_regeneratorValues(_loop3()), 5);
          case 5:
            if (!_context3.v) {
              _context3.n = 6;
              break;
            }
            return _context3.a(3, 7);
          case 6:
            _context3.n = 4;
            break;
          case 7:
            _context3.n = 9;
            break;
          case 8:
            _context3.p = 8;
            _t = _context3.v;
            _iterator5.e(_t);
          case 9:
            _context3.p = 9;
            _iterator5.f();
            return _context3.f(9);
          case 10:
            _iterator6 = _createForOfIteratorHelper(useAll() ? order : [pick]);
            _context3.p = 11;
            _iterator6.s();
          case 12:
            if ((_step6 = _iterator6.n()).done) {
              _context3.n = 17;
              break;
            }
            _cand2 = _step6.value;
            if (!cancel) {
              _context3.n = 13;
              break;
            }
            throw new Error("__cancelled__");
          case 13:
            usedModels[modelName(_cand2)] = true;
            setState(t("bpPh2") + " · " + modelName(_cand2), "badge-warn");
            _context3.n = 14;
            return runAI(_cand2, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + reviewPrompt(st.stack)
            }], function (piece, fullLen) {
              accChars = fullLen;
              setPct(8 + Math.min(20, accChars / 500));
            });
          case 14:
            revRes = _context3.v;
            setPct(30);
            revJ = extractJson(revRes);
            if (!validReview(revJ)) {
              _context3.n = 15;
              break;
            }
            rev = revJ.review;
            revPick = _cand2;
            return _context3.a(3, 17);
          case 15:
            tried.push(modelName(_cand2));
            if (useAll() && order[tried.length]) log(t("bpTryNext") + " " + modelName(order[tried.length]));else if (!useAll()) log(t("bpTryNext") + " …");
          case 16:
            _context3.n = 12;
            break;
          case 17:
            _context3.n = 19;
            break;
          case 18:
            _context3.p = 18;
            _t2 = _context3.v;
            _iterator6.e(_t2);
          case 19:
            _context3.p = 19;
            _iterator6.f();
            return _context3.f(19);
          case 20:
            if (rev) {
              _context3.n = 21;
              break;
            }
            throw new Error(t("bpNoValidReview") + (tried.length ? " — " + tried.join(", ") : ""));
          case 21:
            log("review score: " + rev.score + "/100 · issues: " + (rev.issues || []).length + " · model: " + modelName(revPick || pick));
            $("[data-pph=" + PHASES[1] + "]", body).textContent = fa(rev.score) + "/100";

            /* phase 3 — execute fixes (agent rounds) */
            setPhase(2);
            setState(t("bpPh3"), "badge-warn");
            plan = (rev.buildPlan && rev.buildPlan.length ? rev.buildPlan : (rev.issues || []).map(function (i) {
              return i.fix || i.desc;
            })).filter(Boolean) || [];
            round = 0, stagedTotal = 0, done = false;
          case 22:
            if (!(!done && round < 6 && !cancel)) {
              _context3.n = 29;
              break;
            }
            round++;
            mpick = useAll() ? nextModel() : pick;
            if (useAll() && chain.length > 1) log(t("bpRoundModel") + " " + modelName(mpick));
            _context3.n = 23;
            return runAI(mpick, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + executePrompt(plan.length ? plan : [t("bpImproveAll")], round)
            }]);
          case 23:
            res = _context3.v;
            j = extractJson(res);
            if (!(!j && useAll())) {
              _context3.n = 25;
              break;
            }
            mp2 = nextModel();
            log(t("bpTryNext") + " " + modelName(mp2));
            _context3.n = 24;
            return runAI(mp2, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + executePrompt(plan.length ? plan : [t("bpImproveAll")], round)
            }]);
          case 24:
            res2 = _context3.v;
            j = extractJson(res2);
          case 25:
            if (j) {
              _context3.n = 26;
              break;
            }
            log("round " + round + ": unparsable reply, retrying");
            return _context3.a(3, 22);
          case 26:
            _context3.n = 27;
            return OC.github.runActions(j.actions || []);
          case 27:
            ra = _context3.v;
            stagedTotal += ra.staged;
            log("round " + round + ": +" + ra.staged + " " + (isFa() ? "فایل پله‌شده" : "staged") + (ra.done ? " · done" : ""));
            from = 30, to = 70;
            setPct(from + (to - from) * (round / 6));
            $("[data-pph=" + PHASES[2] + "]", body).textContent = fa(stagedTotal) + " " + t("filesUnit");
            if (!ra.done) {
              _context3.n = 28;
              break;
            }
            return _context3.a(3, 29);
          case 28:
            _context3.n = 22;
            break;
          case 29:
            if (!cancel) {
              _context3.n = 30;
              break;
            }
            throw new Error("__cancelled__");
          case 30:
            /* phase 4 — build readiness + verification (v1.4.0) */
            setPhase(3);
            setState(t("bpPh4"), "badge-warn");
            fpick = useAll() ? nextModel() : pick;
            _context3.n = 31;
            return runAI(fpick, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + buildReadyPrompt(rev.say || rev.summary)
            }]);
          case 31:
            r4 = _context3.v;
            j4 = extractJson(r4);
            if (!(j4 && j4.actions && j4.actions.length)) {
              _context3.n = 33;
              break;
            }
            _context3.n = 32;
            return OC.github.runActions(j4.actions);
          case 32:
            ra4 = _context3.v;
            stagedTotal += ra4.staged;
            log("finalize: +" + ra4.staged + " staged");
          case 33:
            setPct(76);

            /* smart verification loop — keep fixing across models until build-ready */
            finalScore = rev.score, finalIssues = (rev.issues || []).length, extra = 0;
            stagedNow0 = OC.github.getStage();
            if (!(useAll() && stagedNow0.length && !cancel)) {
              _context3.n = 64;
              break;
            }
            vres = null, vp = null;
            vcands = [nextModel()];
            _iterator7 = _createForOfIteratorHelper(chain);
            _context3.p = 34;
            _loop2 = /*#__PURE__*/_regenerator().m(function _loop2() {
              var c;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    c = _step7.value;
                    if (!(vcands.length >= 3)) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2, 1);
                  case 1:
                    if (!vcands.some(function (x) {
                      return x.provider.id === c.provider.id && x.model === c.model;
                    })) vcands.push(c);
                  case 2:
                    return _context.a(2);
                }
              }, _loop2);
            });
            _iterator7.s();
          case 35:
            if ((_step7 = _iterator7.n()).done) {
              _context3.n = 38;
              break;
            }
            return _context3.d(_regeneratorValues(_loop2()), 36);
          case 36:
            if (!_context3.v) {
              _context3.n = 37;
              break;
            }
            return _context3.a(3, 38);
          case 37:
            _context3.n = 35;
            break;
          case 38:
            _context3.n = 40;
            break;
          case 39:
            _context3.p = 39;
            _t3 = _context3.v;
            _iterator7.e(_t3);
          case 40:
            _context3.p = 40;
            _iterator7.f();
            return _context3.f(40);
          case 41:
            setState(t("bpVerify"), "badge-warn");
            _i2 = 0, _vcands = vcands;
          case 42:
            if (!(_i2 < _vcands.length)) {
              _context3.n = 46;
              break;
            }
            cand = _vcands[_i2];
            _context3.n = 43;
            return runAI(cand, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + verifyPrompt()
            }]);
          case 43:
            r = _context3.v;
            vres = extractJson(r);
            if (!validReview(vres)) {
              _context3.n = 44;
              break;
            }
            vp = cand;
            return _context3.a(3, 46);
          case 44:
            if (vcands.indexOf(cand) < vcands.length - 1) log(t("bpTryNext") + " " + modelName(vcands[vcands.indexOf(cand) + 1]));
          case 45:
            _i2++;
            _context3.n = 42;
            break;
          case 46:
            if (!validReview(vres)) {
              _context3.n = 63;
              break;
            }
            finalScore = vres.review.score;
            finalIssues = (vres.review.issues || []).length;
            log("verify: score " + finalScore + "/100 · issues: " + finalIssues + " · model: " + modelName(vp));
          case 47:
            if (!(finalScore < 55 && extra < 2 && !cancel)) {
              _context3.n = 62;
              break;
            }
            extra++;
            mp = nextModel();
            log(t("bpExtraRound") + " " + modelName(mp));
            setState(t("bpPh3") + " · " + modelName(mp), "badge-warn");
            _context3.n = 48;
            return runAI(mp, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + executePrompt(plan.length ? plan : [t("bpImproveAll")], "extra-" + extra)
            }]);
          case 48:
            r2 = _context3.v;
            j2 = extractJson(r2);
            if (!(!j2 && useAll())) {
              _context3.n = 50;
              break;
            }
            _mp = nextModel();
            log(t("bpTryNext") + " " + modelName(_mp));
            _t4 = extractJson;
            _context3.n = 49;
            return runAI(_mp, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + executePrompt(plan.length ? plan : [t("bpImproveAll")], "extra-" + extra)
            }]);
          case 49:
            j2 = _t4(_context3.v);
          case 50:
            if (j2) {
              _context3.n = 51;
              break;
            }
            log("extra round: unparsable — stopping verification");
            return _context3.a(3, 62);
          case 51:
            _context3.n = 52;
            return OC.github.runActions(j2.actions || []);
          case 52:
            ra2 = _context3.v;
            stagedTotal += ra2.staged;
            log("extra round " + extra + ": +" + ra2.staged + " " + (isFa() ? "فایل پله‌شده" : "staged"));
            if (!(!ra2.staged && !ra2.done)) {
              _context3.n = 53;
              break;
            }
            return _context3.a(3, 62);
          case 53:
            v2 = null, vp2 = null;
            _iterator8 = _createForOfIteratorHelper(vcands);
            _context3.p = 54;
            _iterator8.s();
          case 55:
            if ((_step8 = _iterator8.n()).done) {
              _context3.n = 58;
              break;
            }
            _cand = _step8.value;
            _context3.n = 56;
            return runAI(_cand, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + verifyPrompt()
            }]);
          case 56:
            rr = _context3.v;
            v2 = extractJson(rr);
            if (!validReview(v2)) {
              _context3.n = 57;
              break;
            }
            vp2 = _cand;
            return _context3.a(3, 58);
          case 57:
            _context3.n = 55;
            break;
          case 58:
            _context3.n = 60;
            break;
          case 59:
            _context3.p = 59;
            _t5 = _context3.v;
            _iterator8.e(_t5);
          case 60:
            _context3.p = 60;
            _iterator8.f();
            return _context3.f(60);
          case 61:
            if (validReview(v2)) {
              finalScore = v2.review.score;
              finalIssues = (v2.review.issues || []).length;
              log("verify: score " + finalScore + "/100 · model: " + modelName(vp2));
            }
            _context3.n = 47;
            break;
          case 62:
            _context3.n = 64;
            break;
          case 63:
            log("verify: unparsable — keeping review score");
          case 64:
            setPct(82);

            /* phase 5 — commit & PR */
            setPhase(4);
            setState(t("bpPh5"), "badge-warn");
            stagedNow = OC.github.getStage();
            if (!stagedNow.length) {
              log(isFa() ? "تغییری پله نشده — فقط گزارش بازبینی موجود است" : "nothing staged — review-only result");
            }
            zipBlob = null, commitUrl = "", commitSha = "", newBranch = "", result_pr = "";
            if (!stagedNow.length) {
              _context3.n = 69;
              break;
            }
            zw = new OC.zip.ZipWriter();
            _iterator9 = _createForOfIteratorHelper(stagedNow);
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                s = _step9.value;
                zw.addFile(s.path, s.content);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            zipBlob = zw.finish();
            commitMsg = "Open Code — " + t("bpCommitMsg") + " (score " + rev.score + "/100)";
            _context3.n = 65;
            return OC.github.commit({
              repo: repoFull,
              branch: branch,
              newBranch: "opencode/build-" + new Date().toISOString().slice(0, 16).replace(/[-:T]/g, ""),
              message: commitMsg
            });
          case 65:
            cr = _context3.v;
            commitUrl = cr.html;
            commitSha = cr.sha;
            newBranch = cr.branch;
            log("commit " + cr.sha.slice(0, 7) + " → " + cr.branch + " (" + cr.files + " files)");
            _context3.p = 66;
            _context3.n = 67;
            return OC.github.api("/repos/" + repoFull + "/pulls", {
              method: "POST",
              body: {
                title: t("bpPrTitle") + " (" + new Date().toLocaleDateString(isFa() ? "fa-IR" : "en-US") + ")",
                head: newBranch,
                base: branch,
                body: isFa() ? "بازبینی حرفه‌ای و اجرای اصلاحات توسط Open Code\n\nامتیاز بازبینی: " + fa(rev.score) + "/۱۰۰\nفایل‌های تغییرکرده: " + fa(cr.files) + "\n\n## خلاصه\n" + (rev.summary || "") + "\n\n## اصلاحات\n" + (rev.issues || []).map(function (i) {
                  return "- [" + i.sev + "] " + (i.path || "") + " — " + (i.desc || "");
                }).join("\n") : "Professional review + fixes by Open Code\n\nReview score: " + rev.score + "/100\nChanged files: " + cr.files + "\n\n## Summary\n" + (rev.summary || "") + "\n\n## Fixes\n" + (rev.issues || []).map(function (i) {
                  return "- [" + i.sev + "] " + (i.path || "") + " — " + (i.desc || "");
                }).join("\n")
              }
            });
          case 67:
            pr = _context3.v;
            if (pr && pr.html_url) {
              result_pr = pr.html_url;
              log("PR: " + pr.number);
            }
            _context3.n = 69;
            break;
          case 68:
            _context3.p = 68;
            _t6 = _context3.v;
            log("PR skipped (" + (_t6.message || "").slice(0, 80) + ")");
          case 69:
            setPct(94);

            /* phase 6 — output links */
            setPhase(5);
            setState(t("bpDone"), "badge-ok");
            repoUrl = "https://github.com/" + repoFull;
            links = [];
            if (commitUrl) links.push([t("bpLinkCommit"), commitUrl, I.check]);
            if (result_pr) links.push([t("bpLinkPr"), result_pr, I.package]);
            links.push([t("bpLinkBranch") + (newBranch ? ": " + newBranch : ""), newBranch ? "https://github.com/" + repoFull + "/tree/" + newBranch : repoUrl + "/tree/" + branch, I.book]);
            links.push([t("bpLinkRepo"), repoUrl, I.globe]);
            $("#bp-links", body).innerHTML = links.map(function (l) {
              return linkCard(l[0], l[1], l[2]);
            }).join("");
            $("#bp-stats", body).innerHTML = '<span class="bp-stat">' + t("bpFinalScore") + ': <b>' + fa(finalScore) + "/100</b></span>" + '<span class="bp-stat">' + t("bpStatIssues") + ': <b>' + fa(finalIssues) + "</b></span>" + '<span class="bp-stat">' + t("bpStatFiles") + ': <b>' + fa(stagedNow.length || 0) + "</b></span>" + '<span class="bp-stat">' + t("bpStatRounds") + ': <b>' + fa(round + extra) + "</b></span>" + '<span class="bp-stat">' + t("bpModelsUsed") + ': <b>' + fa(Object.keys(usedModels).length) + "</b></span>";
            $("#bp-acts", body).innerHTML = (zipBlob ? '<button class="btn btn-primary" id="bp-zip">' + I.download + t("bpZipChanged") + "</button>" : "") + '<button class="btn" id="bp-chat">' + I.bolt + t("bpContinueChat") + "</button>";
            if (zipBlob) $("#bp-zip", body).onclick = function () {
              U.download(repoFull.split("/")[1] + "-build-changes.zip", zipBlob);
            };
            $("#bp-chat", body).onclick = function () {
              m.close();
              location.hash = "/chat";
              setTimeout(function () {
                if (OC.renderGhChip) OC.renderGhChip();
              }, 300);
            };
            bindLinks();
            $("#bp-result", body).classList.add("show");
            ring.classList.add("done");
            setPct(100);
            $("#bp-foot-row", body).innerHTML = '<button class="btn btn-primary" id="bp-close">' + t("close") + "</button>";
            $("#bp-close", body).onclick = function () {
              return m.close();
            };
            saveResult({
              branch: newBranch || branch,
              score: rev.score,
              files: stagedNow.length
            });
            toast(t("bpDoneToast"), "ok");
            _context3.n = 71;
            break;
          case 70:
            _context3.p = 70;
            _t7 = _context3.v;
            clearInterval(tickTimer);
            running = null;
            if (cancel || String(_t7.message) === "__cancelled__") {
              setState(t("bpStopped"), "badge-warn");
              log(t("bpStoppedLog"));
              $("#bp-result", body).classList.add("show");
              $("#bp-stats", body).innerHTML = '<span class="bp-stat">' + t("bpKeepStaged") + "</span>";
              $("#bp-acts", body).innerHTML = '<button class="btn" id="bp-zip2">' + I.download + t("bpZipChanged") + "</button>" + '<button class="btn btn-primary" id="bp-close2">' + t("close") + "</button>";
              $("#bp-zip2", body).onclick = function () {
                try {
                  OC.github.exportStagedZip(repoFull.split("/")[1] + "-partial");
                } catch (er) {
                  toast(er.message, "err");
                }
              };
              $("#bp-close2", body).onclick = function () {
                return m.close();
              };
            } else {
              setState(t("bpFailed"), "badge-err");
              log("error: " + (_t7.message || _t7));
              $("#bp-acts", body).innerHTML = '<button class="btn btn-primary" id="bp-close3">' + t("close") + "</button>";
              $("#bp-close3", body).onclick = function () {
                return m.close();
              };
              toast(_t7.message || t("bpFailed"), "err");
            }
            return _context3.a(2);
          case 71:
            clearInterval(tickTimer);
            running = null;
          case 72:
            return _context3.a(2);
        }
      }, _callee, null, [[66, 68], [54, 59, 60, 61], [34, 39, 40, 41], [11, 18, 19, 20], [3, 8, 9, 10], [0, 70]]);
    }))();
  }
  window.OC = window.OC || {};
  OC.openBuildPipeline = openPipeline;
  /* test hooks */
  OC._bpTest = {
    extractJson: extractJson,
    detectStack: detectStack,
    reviewPrompt: reviewPrompt,
    executePrompt: executePrompt,
    buildReadyPrompt: buildReadyPrompt,
    verifyPrompt: verifyPrompt,
    LANG_EXT: LANG_EXT,
    allModels: allModels,
    buildChain: buildChain,
    validReview: validReview,
    modelName: modelName
  };
})();