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
    var s = String(text || "");
    var start = s.indexOf("{");
    if (start < 0) return null;
    var depth = 0,
      inStr = false,
      escCh = false,
      end = -1;
    for (var i = start; i < s.length; i++) {
      var ch = s[i];
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
    if (end < 0) return null;
    try {
      return JSON.parse(s.slice(start, end));
    } catch (e) {
      return null;
    }
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
    body.innerHTML = '<div class="bp-wrap">' + '<div class="bp-head"><b>' + esc(repoFull) + '</b><span class="badge" id="bp-branch">…</span>' + '<span class="badge bp-status" id="bp-state">' + t("bpStarting") + "</span>" + '<span class="muted small bp-elapsed" id="bp-elapsed">0s</span></div>' + '<div class="bp-mid">' + '<div class="bp-ring" id="bp-ring"><span class="bp-pct" id="bp-pct">۰٪</span></div>' + '<div class="bp-phases" id="bp-phases">' + PHASES.map(function (p, i) {
      return '<div class="bp-phase" id="' + p + '"><span class="ph-dot">' + I.check + "</span><span>" + t("bpPh" + (i + 1)) + '</span><span style="flex:1"></span><span class="muted small" data-pph="' + p + '"></span></div>';
    }).join("") + "</div></div>" + '<div class="bp-log" id="bp-log"></div>' + '<div class="bp-result" id="bp-result">' + '<div class="bp-stats" id="bp-stats"></div>' + '<div class="bp-links" id="bp-links"></div>' + '<div class="flex" style="gap:8px;flex-wrap:wrap" id="bp-acts"></div></div>' + '<div class="flex" style="justify-content:flex-end" id="bp-foot-row"><button class="btn btn-danger-ghost" id="bp-stop">' + I.x + t("bpStop") + "</button></div>" + "</div>";
    var ring = $("#bp-ring", body),
      pctEl = $("#bp-pct", body);
    var logEl = $("#bp-log", body);
    var stateEl = $("#bp-state", body);
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
      var bs, branch, st, revRes, revJ, rev, plan, round, stagedTotal, done, res, j, ra, from, to, r4, j4, ra4, stagedNow, zipBlob, commitUrl, commitSha, newBranch, result_pr, zw, _iterator2, _step2, s, commitMsg, cr, pr, repoUrl, links, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            /* phase 1 — connect & count */
            setPhase(0);
            setState(t("bpPh1"));
            _context.n = 1;
            return OC.github.branches(repoFull);
          case 1:
            bs = _context.v;
            branch = branchHint || (bs.find(function (b) {
              return b.name === "main";
            }) || bs[0] || {}).name || "main";
            $("#bp-branch", body).textContent = branch;
            log("branch: " + branch);
            _context.n = 2;
            return OC.github.attachRepo(repoFull, branch);
          case 2:
            st = detectStack(OC.github.attached().tree);
            log("files: " + st.files + " · stack: " + st.stack);
            setPct(6);

            /* phase 2 — professional review */
            setPhase(1);
            setState(t("bpPh2"), "badge-warn");
            _context.n = 3;
            return runAI(pick, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + reviewPrompt(st.stack)
            }], function (piece, fullLen) {
              accChars = fullLen;
              setPct(8 + Math.min(20, accChars / 500));
            });
          case 3:
            revRes = _context.v;
            setPct(30);
            revJ = extractJson(revRes);
            if (!(!revJ || !revJ.review)) {
              _context.n = 4;
              break;
            }
            throw new Error(t("bpNoReview"));
          case 4:
            rev = revJ.review;
            log("review score: " + rev.score + "/100 · issues: " + (rev.issues || []).length);
            $("[data-pph=" + PHASES[1] + "]", body).textContent = fa(rev.score) + "/100";

            /* phase 3 — execute fixes (agent rounds) */
            setPhase(2);
            setState(t("bpPh3"), "badge-warn");
            plan = (rev.buildPlan && rev.buildPlan.length ? rev.buildPlan : (rev.issues || []).map(function (i) {
              return i.fix || i.desc;
            })).filter(Boolean) || [];
            round = 0, stagedTotal = 0, done = false;
          case 5:
            if (!(!done && round < 6 && !cancel)) {
              _context.n = 10;
              break;
            }
            round++;
            _context.n = 6;
            return runAI(pick, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + executePrompt(plan.length ? plan : [t("bpImproveAll")], round)
            }]);
          case 6:
            res = _context.v;
            j = extractJson(res);
            if (j) {
              _context.n = 7;
              break;
            }
            log("round " + round + ": unparsable reply, retrying");
            return _context.a(3, 5);
          case 7:
            _context.n = 8;
            return OC.github.runActions(j.actions || []);
          case 8:
            ra = _context.v;
            stagedTotal += ra.staged;
            log("round " + round + ": +" + ra.staged + " " + (isFa() ? "فایل پله‌شده" : "staged") + (ra.done ? " · done" : ""));
            from = 30, to = 70;
            setPct(from + (to - from) * (round / 6));
            $("[data-pph=" + PHASES[2] + "]", body).textContent = fa(stagedTotal) + " " + t("filesUnit");
            if (!ra.done) {
              _context.n = 9;
              break;
            }
            return _context.a(3, 10);
          case 9:
            _context.n = 5;
            break;
          case 10:
            if (!cancel) {
              _context.n = 11;
              break;
            }
            throw new Error("__cancelled__");
          case 11:
            /* phase 4 — build readiness */
            setPhase(3);
            setState(t("bpPh4"), "badge-warn");
            _context.n = 12;
            return runAI(pick, [{
              role: "user",
              content: OC.github.contextBlock() + "\n\n" + buildReadyPrompt(rev.say || rev.summary)
            }]);
          case 12:
            r4 = _context.v;
            j4 = extractJson(r4);
            if (!(j4 && j4.actions && j4.actions.length)) {
              _context.n = 14;
              break;
            }
            _context.n = 13;
            return OC.github.runActions(j4.actions);
          case 13:
            ra4 = _context.v;
            stagedTotal += ra4.staged;
            log("finalize: +" + ra4.staged + " staged");
          case 14:
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
              _context.n = 19;
              break;
            }
            zw = new OC.zip.ZipWriter();
            _iterator2 = _createForOfIteratorHelper(stagedNow);
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                s = _step2.value;
                zw.addFile(s.path, s.content);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            zipBlob = zw.finish();
            commitMsg = "Open Code — " + t("bpCommitMsg") + " (score " + rev.score + "/100)";
            _context.n = 15;
            return OC.github.commit({
              repo: repoFull,
              branch: branch,
              newBranch: "opencode/build-" + new Date().toISOString().slice(0, 16).replace(/[-:T]/g, ""),
              message: commitMsg
            });
          case 15:
            cr = _context.v;
            commitUrl = cr.html;
            commitSha = cr.sha;
            newBranch = cr.branch;
            log("commit " + cr.sha.slice(0, 7) + " → " + cr.branch + " (" + cr.files + " files)");
            _context.p = 16;
            _context.n = 17;
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
          case 17:
            pr = _context.v;
            if (pr && pr.html_url) {
              result_pr = pr.html_url;
              log("PR: " + pr.number);
            }
            _context.n = 19;
            break;
          case 18:
            _context.p = 18;
            _t = _context.v;
            log("PR skipped (" + (_t.message || "").slice(0, 80) + ")");
          case 19:
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
            $("#bp-stats", body).innerHTML = '<span class="bp-stat">' + t("bpStatScore") + ': <b>' + fa(rev.score) + "/100</b></span>" + '<span class="bp-stat">' + t("bpStatIssues") + ': <b>' + fa((rev.issues || []).length) + "</b></span>" + '<span class="bp-stat">' + t("bpStatFiles") + ': <b>' + fa(stagedNow.length || 0) + "</b></span>" + '<span class="bp-stat">' + t("bpStatRounds") + ': <b>' + fa(round) + "</b></span>";
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
            _context.n = 21;
            break;
          case 20:
            _context.p = 20;
            _t2 = _context.v;
            clearInterval(tickTimer);
            running = null;
            if (cancel || String(_t2.message) === "__cancelled__") {
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
              log("error: " + (_t2.message || _t2));
              $("#bp-acts", body).innerHTML = '<button class="btn btn-primary" id="bp-close3">' + t("close") + "</button>";
              $("#bp-close3", body).onclick = function () {
                return m.close();
              };
              toast(_t2.message || t("bpFailed"), "err");
            }
            return _context.a(2);
          case 21:
            clearInterval(tickTimer);
            running = null;
          case 22:
            return _context.a(2);
        }
      }, _callee, null, [[16, 18], [0, 20]]);
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
    LANG_EXT: LANG_EXT
  };
})();