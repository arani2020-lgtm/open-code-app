function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — GitHub panel: repos browser, file viewer, staged-changes commit UI. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var el = OC.el,
    $ = OC.$,
    $$ = OC.$$;
  var I = OC.ui_icons;
  function toast(msg, kind) {
    if (OC.toast) return OC.toast(msg, kind);
    console.log("[toast]", msg);
  }
  function page(html) {
    OC.renderShell(html);
  }

  /* ================= page state ================= */
  var repos = [];
  var repoPage = 1;
  var repoQuery = "";
  var currentRepo = null; // {full, defaultBranch, priv, canPush}
  var currentBranch = "";
  var treeFiles = [];
  function esc(s) {
    return U.esc(s);
  }
  function fa(n) {
    return U.faNum(String(n));
  }

  /* ================= connection card ================= */
  function connCardHTML() {
    var st = OC.github.state();
    if (!st.connected) {
      return '<div class="panel"><h3>' + t("ghConnect") + "</h3><p class='p-desc'>" + t("ghConnectDesc") + "</p>" + '<div class="stack">' + '<div class="field"><label>' + t("ghTokenLabel") + "</label>" + '<input class="input" id="gh-token" type="password" placeholder="ghp_… / github_pat_…" style="direction:ltr" autocomplete="off"></div>' + '<div class="hint">' + t("ghTokenHint") + "</div>" + '<div class="flex"><button class="btn btn-primary" id="gh-connect">' + I.key + t("ghConnectBtn") + "</button>" + '<a class="btn" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">' + t("ghNewToken") + "</a></div>" + "</div></div>";
    }
    var u = st.user;
    return '<div class="panel"><h3>' + t("ghAccount") + "</h3><p class='p-desc'>" + t("ghConnectedAs") + "</p>" + '<div class="flex" style="align-items:center;gap:12px">' + (u.avatar ? '<img src="' + esc(u.avatar) + '" alt="" style="width:44px;height:44px;border-radius:12px">' : "") + '<div><b>' + esc(u.name) + '</b><div class="muted small" style="direction:ltr">@' + esc(u.login) + "</div></div>" + '<span style="flex:1"></span>' + '<button class="btn" id="gh-repos-btn">' + I.book + t("ghMyRepos") + "</button>" + '<button class="btn btn-danger-ghost" id="gh-disconnect">' + I.logout + t("ghDisconnect") + "</button>" + "</div></div>";
  }
  function bindConnCard() {
    var btn = $("#gh-connect");
    if (btn) {
      btn.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var tok, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              tok = $("#gh-token").value.trim();
              btn.disabled = true;
              _context.p = 1;
              _context.n = 2;
              return OC.github.connect(tok);
            case 2:
              toast(t("ghConnectedOk"), "ok");
              render();
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              toast(_t.message || t("ghError"), "err");
              btn.disabled = false;
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
    }
    var disc = $("#gh-disconnect");
    if (disc) disc.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
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
            render();
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    var rb = $("#gh-repos-btn");
    if (rb) rb.onclick = function () {
      loadRepos(true);
    };
  }

  /* ================= staged changes card ================= */
  function stagedCardHTML() {
    var items = OC.github.getStage();
    if (!items.length) return "";
    var repoAt = OC.github.stageRepo();
    var rows = items.map(function (s) {
      return '<div class="gh-file-row"><span class="gh-file-icon">' + I.file + "</span>" + '<span class="gh-path" style="direction:ltr">' + esc(s.path) + "</span>" + '<span class="muted small">' + fa(U.fmtBytes(new Blob([s.content]).size)) + "</span>" + '<span style="flex:1"></span>' + '<button class="btn btn-sm" data-stage-open="' + esc(s.path) + '">' + I.eye + t("view") + "</button>" + '<button class="btn btn-sm btn-danger-ghost" data-stage-rm="' + esc(s.path) + '">' + I.x + "</button></div>";
    }).join("");
    return '<div class="panel gh-stage-panel"><h3>' + t("ghStagedTitle") + ' <span class="badge">' + fa(items.length) + "</span></h3>" + '<p class="p-desc">' + esc(repoAt || "") + " — " + t("ghStagedDesc") + "</p>" + rows + '<div class="field" style="margin-top:12px"><label>' + t("ghCommitMsg") + "</label>" + '<input class="input" id="gh-commit-msg" type="text" placeholder="' + t("ghCommitMsgPh") + '"></div>' + '<div class="check-row"><label class="switch"><input type="checkbox" id="gh-new-branch" checked><span class="track"></span></label><span>' + t("ghNewBranch") + "</span></div>" + '<div class="field hidden" id="gh-branch-name-wrap"><label>' + t("ghBranchName") + "</label>" + '<input class="input" id="gh-branch-name" type="text" value="opencode/fix-' + new Date().toISOString().slice(0, 10) + '" style="direction:ltr"></div>' + '<div class="flex" style="margin-top:10px">' + '<button class="btn btn-primary" id="gh-commit">' + I.check + t("ghCommitPush") + "</button>" + '<button class="btn" id="gh-stage-zip">' + I.download + t("ghStageZip") + "</button>" + '<button class="btn btn-danger-ghost" id="gh-stage-clear">' + I.trash + t("ghDiscard") + "</button>" + "</div></div>";
  }
  function bindStagedCard() {
    var wrap = $("#gh-staged");
    if (!wrap || wrap.classList.contains("hidden")) return;
    $$("[data-stage-rm]", wrap).forEach(function (b) {
      b.onclick = function () {
        OC.github.unstage(b.dataset.stageRm);
        render();
      };
    });
    $$("[data-stage-open]", wrap).forEach(function (b) {
      b.onclick = function () {
        var it = OC.github.getStage().find(function (s) {
          return s.path === b.dataset.stageOpen;
        });
        if (it) showFileModal(it.repo, it.branch, it.path, it.content, true);
      };
    });
    var nb = $("#gh-new-branch", wrap);
    if (nb) nb.onchange = function () {
      return $("#gh-branch-name-wrap", wrap).classList.toggle("hidden", !nb.checked);
    };
    var commitBtn = $("#gh-commit", wrap);
    if (commitBtn) commitBtn.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var sr, parts, msg, useNb, nbName, r, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            sr = OC.github.stageRepo();
            if (sr) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            parts = sr.split("@");
            msg = $("#gh-commit-msg", wrap).value.trim();
            useNb = $("#gh-new-branch", wrap).checked;
            nbName = useNb ? $("#gh-branch-name", wrap).value.trim() : "";
            commitBtn.disabled = true;
            _context3.p = 2;
            _context3.n = 3;
            return OC.github.commit({
              repo: parts[0],
              branch: parts[1],
              newBranch: useNb ? nbName || true : "",
              message: msg
            });
          case 3:
            r = _context3.v;
            toast(t("ghCommitted") + " ✓ " + (r.created ? t("ghBranchCreated") + ": " + r.branch : "@" + r.branch), "ok");
            if (r.html) console.log("commit:", r.html);
            render();
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t2 = _context3.v;
            toast(_t2.message || t("ghError"), "err");
            commitBtn.disabled = false;
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4]]);
    }));
    var zipBtn = $("#gh-stage-zip", wrap);
    if (zipBtn) zipBtn.onclick = function () {
      try {
        OC.github.exportStagedZip("opencode-staged");
      } catch (e) {
        toast(e.message, "err");
      }
    };
    var clr = $("#gh-stage-clear", wrap);
    if (clr) clr.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return OC.confirmDialog({
              title: t("ghDiscard"),
              message: t("ghDiscardConfirm"),
              danger: true
            });
          case 1:
            if (_context4.v) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2);
          case 2:
            OC.github.clearStage();
            render();
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
  }

  /* ================= repo list (professional card grid) ================= */
  var repoFilter = "all"; // all | public | private
  var repoSort = "updated"; // updated | name | stars

  var LANG_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    PHP: "#4F5D95",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Go: "#00ADD8",
    Rust: "#dea584",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    Vue: "#41b883",
    Lua: "#000080"
  };
  function relTime(iso) {
    var d = Date.parse(iso);
    if (!d) return "";
    var days = Math.floor((Date.now() - d) / 864e5);
    if (days <= 0) return t("ghToday");
    if (days === 1) return t("ghYesterday");
    if (days < 31) return U.faNum(String(days)) + " " + t("ghDaysAgo");
    var m = Math.floor(days / 30);
    if (m < 12) return U.faNum(String(m)) + " " + t("ghMonthsAgo");
    return U.fmtDate(d);
  }
  function avatarURL(owner) {
    return "https://avatars.githubusercontent.com/" + encodeURIComponent(owner) + "?s=48&v=4";
  }
  function repoCard(r) {
    var lc = LANG_COLORS[r.lang] || "#8b949e";
    return '<div class="repo-card" data-open="' + esc(r.full) + '" title="' + esc(r.full) + '">' + '<div class="rc-head">' + '<img class="rc-avatar" src="' + avatarURL(r.owner) + '" alt="" loading="lazy">' + '<div class="rc-title"><span class="rc-owner">' + esc(r.owner) + '</span><b class="rc-name">' + esc(r.name) + "</b></div>" + '<span class="rc-vis' + (r.priv ? " priv" : "") + '">' + (r.priv ? t("ghPrivate") : t("ghPublic")) + "</span>" + "</div>" + '<p class="rc-desc">' + (r.desc ? esc(r.desc.slice(0, 110)) : '<span class="muted">' + t("ghNoDesc") + "</span>") + "</p>" + '<div class="rc-meta">' + (r.lang ? '<span class="rc-lang"><i style="background:' + lc + '"></i>' + esc(r.lang) + "</span>" : '<span class="rc-lang"><i style="background:#8b949e"></i>—</span>') + '<span class="rc-stars">' + I.star + U.faNum(String(r.stars || 0)) + "</span>" + '<span class="rc-upd">' + I.refresh + relTime(r.updated) + "</span>" + "</div>" + '<div class="rc-actions">' + '<button class="btn btn-sm" data-open="' + esc(r.full) + '">' + I.file + t("ghBrowse") + "</button>" + '<button class="btn btn-sm btn-primary" data-agent="' + esc(r.full) + '">' + I.bolt + t("ghReviewWithAI") + "</button>" + '<button class="btn btn-sm" data-zip="' + esc(r.full) + '" data-defbranch="' + esc(r.defaultBranch) + '">' + I.download + "ZIP</button>" + "</div></div>";
  }
  function skeletonCards() {
    var h = '<div class="repo-grid">';
    for (var i = 0; i < 6; i++) h += '<div class="repo-card skel"><div class="rc-head"><div class="sk sk-avatar"></div><div class="sk sk-name"></div></div><div class="sk sk-line"></div><div class="sk sk-line short"></div><div class="sk sk-line"></div></div>';
    return h + "</div>";
  }
  function loadRepos(_x) {
    return _loadRepos.apply(this, arguments);
  }
  function _loadRepos() {
    _loadRepos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(reset) {
      var listEl, got, hasMore, _t9;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            listEl = $("#gh-repo-list");
            if (listEl) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            if (reset) {
              repos = [];
              repoPage = 1;
            }
            if (!repos.length) listEl.innerHTML = skeletonCards();
            _context1.p = 2;
            _context1.n = 3;
            return OC.github.listRepos(repoPage);
          case 3:
            got = _context1.v;
            repos = repos.concat(got);
            hasMore = got.length === 30;
            renderRepoList(hasMore);
            repoPage++;
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t9 = _context1.v;
            listEl.innerHTML = '<div class="empty-state">' + I.book + "<p style=\"color:rgb(var(--danger))\">" + esc(_t9.message || t("ghError")) + "</p></div>";
          case 5:
            return _context1.a(2);
        }
      }, _callee1, null, [[2, 4]]);
    }));
    return _loadRepos.apply(this, arguments);
  }
  function applyFilterSort(list) {
    var out = list.filter(function (r) {
      return repoFilter === "all" || (repoFilter === "private" ? r.priv : !r.priv);
    });
    if (repoQuery) {
      var q = repoQuery.toLowerCase();
      out = out.filter(function (r) {
        return (r.full + " " + r.desc).toLowerCase().indexOf(q) >= 0;
      });
    }
    if (repoSort === "name") out = out.slice().sort(function (a, b) {
      return a.full.toLowerCase() < b.full.toLowerCase() ? -1 : 1;
    });else if (repoSort === "stars") out = out.slice().sort(function (a, b) {
      return (b.stars || 0) - (a.stars || 0);
    });else out = out.slice().sort(function (a, b) {
      return Date.parse(b.updated || 0) - Date.parse(a.updated || 0);
    });
    return out;
  }
  function renderRepoList(hasMore) {
    var listEl = $("#gh-repo-list");
    if (!listEl) return;
    var view = applyFilterSort(repos);
    listEl.innerHTML = (!view.length ? '<div class="empty-state">' + I.book + "<p>" + (repos.length ? t("ghNoMatch") : t("ghNoRepos")) + "</p></div>" : '<div class="repo-grid">' + view.map(repoCard).join("") + "</div>") + (hasMore ? '<div style="padding:10px;text-align:center"><button class="btn" id="gh-more">' + t("ghMore") + "</button></div>" : "");
    // card body click → browse; buttons inside stop propagation
    $$(".repo-card", listEl).forEach(function (card) {
      card.onclick = function (e) {
        if (e.target.closest("button")) return;
        openRepo(card.dataset.open, null);
      };
    });
    $$("[data-open]", listEl).forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        openRepo(b.dataset.open, null);
      };
    });
    $$("[data-agent]", listEl).forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        attachAndGo(b.dataset.agent, null);
      };
    });
    $$("[data-zip]", listEl).forEach(function (b) {
      b.onclick = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
          var _t3;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.p = _context5.n) {
              case 0:
                e.stopPropagation();
                b.disabled = true;
                _context5.p = 1;
                _context5.n = 2;
                return OC.github.exportZip(b.dataset.zip, b.dataset.defbranch);
              case 2:
                _context5.n = 4;
                break;
              case 3:
                _context5.p = 3;
                _t3 = _context5.v;
                toast(_t3.message || t("ghError"), "err");
              case 4:
                b.disabled = false;
              case 5:
                return _context5.a(2);
            }
          }, _callee5, null, [[1, 3]]);
        }));
        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }();
    });
    var more = $("#gh-more", listEl);
    if (more) more.onclick = function () {
      return loadRepos(false);
    };
  }

  /* ================= repo view (branch + tree) ================= */
  function openRepo(_x3, _x4) {
    return _openRepo.apply(this, arguments);
  }
  function _openRepo() {
    _openRepo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(full, branch) {
      var bs, _t0;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            currentRepo = {
              full: full
            };
            _context10.p = 1;
            _context10.n = 2;
            return OC.github.branches(full);
          case 2:
            bs = _context10.v;
            currentRepo.branches = bs;
            currentBranch = branch || (bs.find(function (b) {
              return b.name === "main";
            }) || bs[0] || {}).name || "main";
            currentRepo.canPush = true;
            _context10.n = 3;
            return loadTree();
          case 3:
            render();
            _context10.n = 5;
            break;
          case 4:
            _context10.p = 4;
            _t0 = _context10.v;
            toast(_t0.message || t("ghError"), "err");
          case 5:
            return _context10.a(2);
        }
      }, _callee10, null, [[1, 4]]);
    }));
    return _openRepo.apply(this, arguments);
  }
  function loadTree() {
    return _loadTree.apply(this, arguments);
  }
  function _loadTree() {
    _loadTree = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var tr;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            _context11.n = 1;
            return OC.github.tree(currentRepo.full, currentBranch);
          case 1:
            tr = _context11.v;
            treeFiles = tr.files;
            currentRepo.truncated = tr.truncated;
          case 2:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return _loadTree.apply(this, arguments);
  }
  function treeRows() {
    var files = treeFiles.slice(0, 400);
    return files.map(function (f) {
      return '<div class="gh-file-row" data-fpath="' + esc(f.p) + '">' + '<span class="gh-file-icon">' + I.file + "</span>" + '<span class="gh-path" style="direction:ltr">' + esc(f.p) + "</span>" + '<span class="muted small">' + fa(U.fmtBytes(f.size)) + "</span>" + '<span style="flex:1"></span>' + '<button class="btn btn-sm" data-view="' + esc(f.p) + '">' + I.eye + t("view") + "</button>" + "</div>";
    }).join("") + (treeFiles.length > 400 ? '<div class="muted small" style="padding:8px 4px">… +' + fa(treeFiles.length - 400) + "</div>" : "");
  }
  function bindTree() {
    $$("[data-view]", $("#gh-repo-view")).forEach(function (b) {
      b.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var path, c, _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              path = b.dataset.view;
              b.disabled = true;
              _context6.p = 1;
              _context6.n = 2;
              return OC.github.readFile(currentRepo.full, currentBranch, path);
            case 2:
              c = _context6.v;
              showFileModal(currentRepo.full, currentBranch, path, c, false);
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t4 = _context6.v;
              toast(_t4.message || t("ghError"), "err");
            case 4:
              b.disabled = false;
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3]]);
      }));
    });
  }

  /* ================= file modal (view / edit / stage) ================= */
  function showFileModal(repo, branch, path, content, fromStage) {
    var isFa = OC.i18n.locale() === "fa";
    var editing = false;
    var bodyEl = el('<div><div class="tbl-wrap" style="max-height:46vh;overflow:auto"><pre class="codeblock" style="margin:0;white-space:pre-wrap;font-size:12.5px">' + esc(content.slice(0, 60000)) + "</pre></div>" + '<textarea class="input hidden" id="gh-edit-ta" rows="16" style="direction:ltr;font-family:monospace;font-size:13px"></textarea></div>');
    var m = OC.modal({
      title: t("ghFile") + " — " + path.split("/").pop(),
      wide: true,
      body: bodyEl,
      foot: function () {
        var foot = el('<div class="flex" style="flex-wrap:wrap;gap:8px"><span class="muted small" style="align-self:center;direction:ltr">' + esc(repo + "@" + branch) + "</span><span style='flex:1'></span></div>");
        var btnEdit = el('<button class="btn btn-sm">' + I.edit + (fromStage ? t("ghEditStaged") : t("ghEditFile")) + "</button>");
        var btnStage = el('<button class="btn btn-sm btn-primary hidden">' + I.check + t("ghStageIt") + "</button>");
        var btnDl = el('<button class="btn btn-sm">' + I.download + t("ghDownloadFile") + "</button>");
        var btnAgent = el('<button class="btn btn-sm">' + I.bolt + t("ghEditWithAI") + "</button>");
        foot.appendChild(btnEdit);
        foot.appendChild(btnStage);
        foot.appendChild(btnDl);
        foot.appendChild(btnAgent);
        btnEdit.onclick = function () {
          editing = !editing;
          var ta = $("#gh-edit-ta", bodyEl);
          ta.classList.toggle("hidden", !editing);
          btnStage.classList.toggle("hidden", !editing);
          if (editing) {
            ta.value = content;
            ta.focus();
          }
        };
        btnStage.onclick = function () {
          var ta = $("#gh-edit-ta", bodyEl);
          try {
            OC.github.stageFile(repo, branch, path, ta.value);
            content = ta.value;
            toast(t("ghStagedOk") + " ✓", "ok");
            m.close();
            if (location.hash.indexOf("/github") >= 0) render();
          } catch (e) {
            toast(e.message || t("ghError"), "err");
          }
        };
        btnDl.onclick = function () {
          return U.download(path.split("/").pop(), new Blob([content], {
            type: "text/plain;charset=utf-8"
          }));
        };
        btnAgent.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
          var _t5;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                _context7.p = 0;
                _context7.n = 1;
                return OC.github.attachRepo(repo, branch);
              case 1:
                OC._ghAgentSeed = isFa ? "فایل «" + path + "» را بررسی و در صورت نیاز اصلاح کن." : "Review and, if needed, fix the file \"" + path + "\".";
                m.close();
                location.hash = "/chat";
                setTimeout(function () {
                  var inp = $("#composer-input");
                  if (inp) {
                    inp.value = OC._ghAgentSeed;
                    inp.focus();
                    OC._pendingGhAgent = true;
                  }
                  if (OC.renderGhChip) OC.renderGhChip();
                }, 350);
                _context7.n = 3;
                break;
              case 2:
                _context7.p = 2;
                _t5 = _context7.v;
                toast(_t5.message || t("ghError"), "err");
              case 3:
                return _context7.a(2);
            }
          }, _callee7, null, [[0, 2]]);
        }));
        return [foot];
      }()
    });
  }

  /* ================= attach to chat ================= */
  function attachAndGo(_x5, _x6) {
    return _attachAndGo.apply(this, arguments);
  }
  /* ================= main render ================= */
  function _attachAndGo() {
    _attachAndGo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(repoFull, branch) {
      var br, bs, _t1;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            _context12.p = 0;
            br = branch;
            if (br) {
              _context12.n = 2;
              break;
            }
            _context12.n = 1;
            return OC.github.branches(repoFull);
          case 1:
            bs = _context12.v;
            br = (bs.find(function (b) {
              return b.name === "main";
            }) || bs[0] || {}).name || "main";
          case 2:
            _context12.n = 3;
            return OC.github.attachRepo(repoFull, br);
          case 3:
            OC._pendingGhAgent = true;
            toast(t("ghAttached") + " — " + repoFull + "@" + br, "ok");
            location.hash = "/chat";
            setTimeout(function () {
              if (OC.renderGhChip) OC.renderGhChip();
            }, 350);
            _context12.n = 5;
            break;
          case 4:
            _context12.p = 4;
            _t1 = _context12.v;
            toast(_t1.message || t("ghError"), "err");
          case 5:
            return _context12.a(2);
        }
      }, _callee12, null, [[0, 4]]);
    }));
    return _attachAndGo.apply(this, arguments);
  }
  function render() {
    var st = OC.github.state();
    var repoViewHTML = !currentRepo ? "" : '<div class="panel" id="gh-repo-view"><h3 style="direction:ltr">' + esc(currentRepo.full) + "</h3>" + '<div class="field"><label>' + t("ghBranchLabel") + "</label>" + '<select class="input" id="gh-branch-sel" style="direction:ltr">' + (currentRepo.branches || []).map(function (b) {
      return '<option value="' + esc(b.name) + '"' + (b.name === currentBranch ? " selected" : "") + ">" + esc(b.name) + (b.prot ? " 🔒" : "") + "</option>";
    }).join("") + "</select></div>" + '<div class="flex" style="margin:10px 0">' + '<button class="btn btn-sm" id="gh-back">' + I.x + t("ghBackToList") + "</button>" + '<button class="btn btn-sm" id="gh-refresh-tree">' + I.refresh + t("ghRefreshTree") + "</button>" + '<button class="btn btn-sm btn-primary" id="gh-attach">' + I.bolt + t("ghAttachChat") + "</button>" + '<button class="btn btn-sm" id="gh-zip-branch">' + I.download + "ZIP</button></div>" + '<div class="tbl-wrap" style="max-height:52vh;overflow:auto">' + treeRows() + "</div></div>";
    page('<div class="settings-wrap">' + '<h2 class="page-title">GitHub</h2><p class="page-sub">' + t("ghPageSub") + "</p>" + '<div id="gh-staged">' + stagedCardHTML() + "</div>" + connCardHTML() + (st.connected ? '<div class="panel"><div class="gh-head-row"><h3>' + t("ghReposTitle") + "</h3>" + '<button class="btn btn-sm" id="gh-load">' + I.refresh + t("ghLoadRepos") + "</button></div>" + '<p class="p-desc">' + t("ghReposDesc") + "</p>" + '<div class="gh-toolbar">' + '<div class="seg">' + '<button class="seg-btn' + (repoFilter === "all" ? " on" : "") + '" data-rf="all">' + t("ghFAll") + "</button>" + '<button class="seg-btn' + (repoFilter === "public" ? " on" : "") + '" data-rf="public">' + t("ghFPublic") + "</button>" + '<button class="seg-btn' + (repoFilter === "private" ? " on" : "") + '" data-rf="private">' + t("ghFPrivate") + "</button>" + "</div>" + '<select class="input gh-sort" id="gh-sort">' + '<option value="updated"' + (repoSort === "updated" ? " selected" : "") + ">" + t("ghSortUpdated") + "</option>" + '<option value="name"' + (repoSort === "name" ? " selected" : "") + ">" + t("ghSortName") + "</option>" + '<option value="stars"' + (repoSort === "stars" ? " selected" : "") + ">" + t("ghSortStars") + "</option>" + "</select></div>" + '<div class="field"><input class="input" id="gh-q" type="search" placeholder="' + t("ghSearchPh") + '" value="' + esc(repoQuery) + '"></div>' + '<div id="gh-repo-list">' + (repos.length ? "" : '<div class="muted small" style="padding:10px 4px">' + t("ghLoadHint") + "</div>") + "</div>" + "</div>" : "") + repoViewHTML + '<div class="panel"><h3>' + t("ghSecurityTitle") + "</h3><p class='p-desc'>" + t("ghSecurityDesc") + "</p>" + '<ul style="margin:0;padding-inline-start:18px;color:rgb(var(--muted));font-size:13.5px">' + "<li>" + t("ghSec1") + "</li><li>" + t("ghSec2") + "</li><li>" + t("ghSec3") + "</li>" + "</ul></div>" + "</div>");
    bindConnCard();
    bindStagedCard();
    var loadBtn = $("#gh-load");
    if (loadBtn) loadBtn.onclick = function () {
      return loadRepos(true);
    };
    var q = $("#gh-q");
    if (q) q.oninput = U.debounce(function () {
      repoQuery = q.value.trim();
      renderRepoList(false);
    }, 250);
    $$("[data-rf]").forEach(function (b) {
      b.onclick = function () {
        repoFilter = b.dataset.rf;
        render();
        if (repos.length) renderRepoList(false);
      };
    });
    var sortSel = $("#gh-sort");
    if (sortSel) sortSel.onchange = function () {
      repoSort = sortSel.value;
      renderRepoList(false);
    };
    if ($("#gh-repo-list") && repos.length) renderRepoList(false);

    // repo view bindings
    var back = $("#gh-back");
    if (back) back.onclick = function () {
      currentRepo = null;
      render();
    };
    var refresh = $("#gh-refresh-tree");
    if (refresh) refresh.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            refresh.disabled = true;
            _context8.p = 1;
            _context8.n = 2;
            return loadTree();
          case 2:
            render();
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t6 = _context8.v;
            toast(_t6.message, "err");
            refresh.disabled = false;
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    var attachBtn = $("#gh-attach");
    if (attachBtn) attachBtn.onclick = function () {
      return attachAndGo(currentRepo.full, currentBranch);
    };
    var zipB = $("#gh-zip-branch");
    if (zipB) zipB.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            zipB.disabled = true;
            _context9.p = 1;
            _context9.n = 2;
            return OC.github.exportZip(currentRepo.full, currentBranch);
          case 2:
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t7 = _context9.v;
            toast(_t7.message, "err");
          case 4:
            zipB.disabled = false;
          case 5:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    var sel = $("#gh-branch-sel");
    if (sel) sel.onchange = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            currentBranch = sel.value;
            _context0.p = 1;
            _context0.n = 2;
            return loadTree();
          case 2:
            render();
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t8 = _context0.v;
            toast(_t8.message, "err");
          case 4:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 3]]);
    }));
    if (currentRepo) bindTree();
  }
  OC.routes["/github"] = function () {
    var user = store.currentUser();
    if (!user) return;
    currentRepo = null;
    render();
  };
  window.OC = window.OC || {};
  OC.showGithub = function () {
    location.hash = "/github";
  };
})();