function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Open Code — GitHub integration: PAT auth, repos, file tree, read/edit, commits, export. Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var API = "https://api.github.com";

  /* ================= connection (token per user, XOR-obfuscated) ================= */
  function ghKey() {
    var u = store.currentUser();
    return u ? "oc-gh-" + u.id : null;
  }
  function state() {
    var k = ghKey();
    if (!k) return {
      connected: false,
      user: null,
      tokenEnc: ""
    };
    var s = store.kvGet(k, {
      tokenEnc: "",
      user: null
    });
    return {
      connected: !!s.tokenEnc,
      user: s.user || null,
      tokenEnc: s.tokenEnc || ""
    };
  }
  function token() {
    var s = state();
    return s.tokenEnc ? store.decKey(s.tokenEnc) : "";
  }
  function connect(_x) {
    return _connect.apply(this, arguments);
  }
  function _connect() {
    _connect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(rawToken) {
      var tok, user, k;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            tok = String(rawToken || "").trim();
            if (tok) {
              _context.n = 1;
              break;
            }
            throw new Error(t("ghTokenRequired"));
          case 1:
            if (/^gh[pousr]_[A-Za-z0-9]{20,}$|^[0-9a-f]{40}$/.test(tok)) {
              _context.n = 2;
              break;
            }
            throw new Error(t("ghTokenInvalid"));
          case 2:
            _context.n = 3;
            return api("/user", {}, tok);
          case 3:
            user = _context.v;
            // validates the token
            k = ghKey();
            store.kvSet(k, {
              tokenEnc: store.encKey(tok),
              user: {
                login: user.login,
                name: user.name || user.login,
                avatar: user.avatar_url || ""
              }
            });
            store.logActivity(store.currentUser().email, "github-connect", user.login);
            return _context.a(2, {
              login: user.login,
              name: user.name || user.login,
              avatar: user.avatar_url || ""
            });
        }
      }, _callee);
    }));
    return _connect.apply(this, arguments);
  }
  function disconnect() {
    var k = ghKey();
    if (k) store.kvDel(k);
    clearStage();
    detach();
  }

  /* ================= low-level REST ================= */
  function api(_x2, _x3, _x4) {
    return _api.apply(this, arguments);
  }
  /* ================= repos / branches / tree ================= */
  function _api() {
    _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(path, opts, tokOverride) {
      var tok, res, msg, _msg, _t, _t2, _t3, _t4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (navigator.onLine) {
              _context2.n = 1;
              break;
            }
            throw new Error(t("networkDown"));
          case 1:
            tok = tokOverride || token();
            if (tok) {
              _context2.n = 2;
              break;
            }
            throw new Error(t("ghNotConnected"));
          case 2:
            _context2.n = 3;
            return fetch(API + path, {
              method: opts && opts.method ? opts.method : "GET",
              headers: Object.assign({
                "Accept": "application/vnd.github+json",
                "Authorization": "Bearer " + tok,
                "X-GitHub-Api-Version": "2022-11-28"
              }, opts && opts.headers || {}),
              body: opts && opts.body != null ? JSON.stringify(opts.body) : undefined
            });
          case 3:
            res = _context2.v;
            if (!(res.status === 401 || res.status === 403)) {
              _context2.n = 5;
              break;
            }
            if (!(res.headers.get("X-RateLimit-Remaining") === "0")) {
              _context2.n = 4;
              break;
            }
            throw new Error(t("ghRateLimit"));
          case 4:
            throw new Error(t("ghTokenBad"));
          case 5:
            if (!(res.status === 404)) {
              _context2.n = 6;
              break;
            }
            throw new Error(t("ghNotFound"));
          case 6:
            if (!(res.status === 409 || res.status === 422)) {
              _context2.n = 12;
              break;
            }
            msg = "";
            _context2.p = 7;
            _context2.n = 8;
            return res.json();
          case 8:
            _t = _context2.v.message;
            if (_t) {
              _context2.n = 9;
              break;
            }
            _t = "";
          case 9:
            msg = _t;
            _context2.n = 11;
            break;
          case 10:
            _context2.p = 10;
            _t2 = _context2.v;
          case 11:
            throw new Error(t("ghConflict") + (msg ? " — " + msg : ""));
          case 12:
            if (res.ok) {
              _context2.n = 18;
              break;
            }
            _msg = "";
            _context2.p = 13;
            _context2.n = 14;
            return res.json();
          case 14:
            _t3 = _context2.v.message;
            if (_t3) {
              _context2.n = 15;
              break;
            }
            _t3 = "";
          case 15:
            _msg = _t3;
            _context2.n = 17;
            break;
          case 16:
            _context2.p = 16;
            _t4 = _context2.v;
          case 17:
            throw new Error(t("ghError") + (res.status ? " (" + res.status + ")" : "") + (_msg ? " — " + _msg : ""));
          case 18:
            if (!(res.status === 204)) {
              _context2.n = 19;
              break;
            }
            return _context2.a(2, {});
          case 19:
            return _context2.a(2, res.json());
        }
      }, _callee2, null, [[13, 16], [7, 10]]);
    }));
    return _api.apply(this, arguments);
  }
  function listRepos(_x5) {
    return _listRepos.apply(this, arguments);
  }
  function _listRepos() {
    _listRepos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(page) {
      var j;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return api("/user/repos?sort=updated&per_page=30&page=" + (page || 1));
          case 1:
            j = _context3.v;
            return _context3.a(2, j.map(function (r) {
              return {
                full: r.full_name,
                name: r.name,
                owner: r.owner.login,
                priv: !!r.private,
                desc: r.description || "",
                lang: r.language || "",
                stars: r.stargazers_count || 0,
                updated: r.updated_at,
                defaultBranch: r.default_branch || "main",
                canPush: r.permissions ? !!r.permissions.push : true
              };
            }));
        }
      }, _callee3);
    }));
    return _listRepos.apply(this, arguments);
  }
  function branches(_x6) {
    return _branches.apply(this, arguments);
  }
  function _branches() {
    _branches = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(repo) {
      var j;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return api("/repos/" + repo + "/branches?per_page=100");
          case 1:
            j = _context4.v;
            return _context4.a(2, j.map(function (b) {
              return {
                name: b.name,
                sha: b.commit.sha,
                prot: !!b.protected
              };
            }));
        }
      }, _callee4);
    }));
    return _branches.apply(this, arguments);
  }
  var BINARY_EXT = /\.(png|jpe?g|gif|webp|ico|woff2?|ttf|eot|otf|mp3|mp4|webm|pdf|zip|gz|tar|exe|dll|so|bin|db|sqlite|jar|class|apk|node|pack|idx)$/i;
  function tree(_x7, _x8) {
    return _tree.apply(this, arguments);
  }
  /* ================= read file ================= */
  function _tree() {
    _tree = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(repo, branch) {
      var j, all;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return api("/repos/" + repo + "/git/trees/" + encodeURIComponent(branch) + "?recursive=1");
          case 1:
            j = _context5.v;
            all = (j.tree || []).filter(function (x) {
              return x.type === "blob" && !BINARY_EXT.test(x.path);
            });
            return _context5.a(2, {
              sha: j.sha,
              truncated: !!j.truncated,
              files: all.map(function (x) {
                return {
                  p: x.path,
                  size: x.size || 0
                };
              })
            });
        }
      }, _callee5);
    }));
    return _tree.apply(this, arguments);
  }
  function b64ToUtf8(b64) {
    var bin = atob(String(b64 || "").replace(/\s/g, ""));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder("utf-8").decode(bytes);
  }
  function readFile(_x9, _x0, _x1) {
    return _readFile.apply(this, arguments);
  }
  /* ================= staging (pending commit changes) ================= */
  function _readFile() {
    _readFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(repo, branch, path) {
      var enc, j;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            enc = path.split("/").map(encodeURIComponent).join("/");
            _context6.n = 1;
            return api("/repos/" + repo + "/contents/" + enc + "?ref=" + encodeURIComponent(branch));
          case 1:
            j = _context6.v;
            if (!Array.isArray(j)) {
              _context6.n = 2;
              break;
            }
            throw new Error(t("ghIsDir"));
          case 2:
            if (!(j.encoding === "base64")) {
              _context6.n = 3;
              break;
            }
            return _context6.a(2, b64ToUtf8(j.content));
          case 3:
            return _context6.a(2, j.content || "");
        }
      }, _callee6);
    }));
    return _readFile.apply(this, arguments);
  }
  var stage = []; // {path, content, repo, branch, ts}
  function stageKey() {
    var u = store.currentUser();
    return u ? "oc-gh-stage-" + u.id : null;
  }
  function loadStage() {
    var k = stageKey();
    stage = k ? store.kvGet(k, []) : [];
    if (!Array.isArray(stage)) stage = [];
  }
  function persistStage() {
    var k = stageKey();
    if (k) store.kvSet(k, stage.slice(0, 40));
  }
  loadStage();
  function stageRepo() {
    return stage.length ? stage[0].repo + "@" + stage[0].branch : null;
  }
  function stageFile(repo, branch, path, content) {
    if (!repo || !path) throw new Error(t("ghBadAction"));
    content = String(content == null ? "" : content);
    if (content.length > 400000) throw new Error(t("ghFileTooBig"));
    if (stage.length && (stage[0].repo !== repo || stage[0].branch !== branch)) stage = []; // one repo@branch at a time
    var i = stage.findIndex(function (s) {
      return s.path === path;
    });
    var item = {
      path: String(path),
      content: content,
      repo: repo,
      branch: branch,
      ts: Date.now()
    };
    if (i >= 0) stage[i] = item;else stage.push(item);
    persistStage();
    return true;
  }
  function unstage(path) {
    stage = stage.filter(function (s) {
      return s.path !== path;
    });
    persistStage();
  }
  function clearStage() {
    stage = [];
    persistStage();
  }
  function getStage() {
    return stage.slice();
  }

  /* ================= commit & push (Git Data API) ================= */
  function commit(_x10) {
    return _commit.apply(this, arguments);
  }
  /* ================= export ================= */
  function _commit() {
    _commit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(opts) {
      var repo, branch, items, message, refInfo, baseSha, baseCommit, blobs, _iterator2, _step2, it, b, treeRes, commitRes, targetBranch, created, _t5, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            repo = opts.repo;
            branch = opts.branch;
            items = stage.filter(function (s) {
              return s.repo === repo && s.branch === branch;
            });
            if (items.length) {
              _context7.n = 1;
              break;
            }
            throw new Error(t("ghNothingStaged"));
          case 1:
            message = String(opts.message || "").trim() || t("ghDefaultCommitMsg");
            _context7.p = 2;
            _context7.n = 3;
            return api("/repos/" + repo + "/git/ref/heads/" + encodeURIComponent(branch));
          case 3:
            refInfo = _context7.v;
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t5 = _context7.v;
            throw new Error(t("ghBranchMissing") + " (" + branch + ")");
          case 5:
            baseSha = refInfo.object.sha;
            _context7.n = 6;
            return api("/repos/" + repo + "/git/commits/" + baseSha);
          case 6:
            baseCommit = _context7.v;
            blobs = [];
            _iterator2 = _createForOfIteratorHelper(items);
            _context7.p = 7;
            _iterator2.s();
          case 8:
            if ((_step2 = _iterator2.n()).done) {
              _context7.n = 11;
              break;
            }
            it = _step2.value;
            _context7.n = 9;
            return api("/repos/" + repo + "/git/blobs", {
              method: "POST",
              body: {
                content: it.content,
                encoding: "utf-8"
              }
            });
          case 9:
            b = _context7.v;
            blobs.push({
              path: it.path,
              mode: "100644",
              type: "blob",
              sha: b.sha
            });
          case 10:
            _context7.n = 8;
            break;
          case 11:
            _context7.n = 13;
            break;
          case 12:
            _context7.p = 12;
            _t6 = _context7.v;
            _iterator2.e(_t6);
          case 13:
            _context7.p = 13;
            _iterator2.f();
            return _context7.f(13);
          case 14:
            _context7.n = 15;
            return api("/repos/" + repo + "/git/trees", {
              method: "POST",
              body: {
                base_tree: baseCommit.tree.sha,
                tree: blobs
              }
            });
          case 15:
            treeRes = _context7.v;
            _context7.n = 16;
            return api("/repos/" + repo + "/git/commits", {
              method: "POST",
              body: {
                message: message,
                tree: treeRes.sha,
                parents: [baseSha]
              }
            });
          case 16:
            commitRes = _context7.v;
            targetBranch = branch;
            created = false;
            if (!opts.newBranch) {
              _context7.n = 18;
              break;
            }
            targetBranch = String(opts.newBranch).replace(/[^A-Za-z0-9._\/-]/g, "-").replace(/^\/+|\/+$/g, "") || "opencode/" + new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "");
            _context7.n = 17;
            return api("/repos/" + repo + "/git/refs", {
              method: "POST",
              body: {
                ref: "refs/heads/" + targetBranch,
                sha: commitRes.sha
              }
            });
          case 17:
            created = true;
            _context7.n = 19;
            break;
          case 18:
            _context7.n = 19;
            return api("/repos/" + repo + "/git/refs/heads/" + encodeURIComponent(branch), {
              method: "PATCH",
              body: {
                sha: commitRes.sha,
                force: false
              }
            });
          case 19:
            // remove committed items from stage
            stage = stage.filter(function (s) {
              return !(s.repo === repo && s.branch === branch && items.some(function (i) {
                return i.path === s.path;
              }));
            });
            persistStage();
            store.logActivity(store.currentUser().email, "github-commit", repo + "@" + targetBranch + " · " + items.length + " files");
            return _context7.a(2, {
              sha: commitRes.sha,
              branch: targetBranch,
              created: created,
              files: items.length,
              html: commitRes.html_url || ""
            });
        }
      }, _callee7, null, [[7, 12, 13, 14], [2, 4]]);
    }));
    return _commit.apply(this, arguments);
  }
  function exportZip(_x11, _x12) {
    return _exportZip.apply(this, arguments);
  }
  function _exportZip() {
    _exportZip = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(repo, branch) {
      var res, blob;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (navigator.onLine) {
              _context8.n = 1;
              break;
            }
            throw new Error(t("networkDown"));
          case 1:
            _context8.n = 2;
            return fetch(API + "/repos/" + repo + "/zipball/" + encodeURIComponent(branch), {
              headers: {
                "Authorization": "Bearer " + token(),
                "Accept": "application/vnd.github+json"
              }
            });
          case 2:
            res = _context8.v;
            if (res.ok) {
              _context8.n = 3;
              break;
            }
            throw new Error(t("ghError") + " (" + res.status + ")");
          case 3:
            _context8.n = 4;
            return res.blob();
          case 4:
            blob = _context8.v;
            U.download(repo.split("/")[1] + "-" + branch + ".zip", blob);
            return _context8.a(2, blob.size);
        }
      }, _callee8);
    }));
    return _exportZip.apply(this, arguments);
  }
  function exportStagedZip(title) {
    if (!stage.length) throw new Error(t("ghNothingStaged"));
    var zip = new OC.zip.ZipWriter();
    var _iterator = _createForOfIteratorHelper(stage),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var s = _step.value;
        zip.addFile(s.path, s.content);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var blob = zip.finish();
    U.download((title || "opencode-changes") + ".zip", blob);
    return stage.length;
  }

  /* ================= attached repo (chat agent mode) ================= */
  var attach = null; // {repo, branch, tree, truncated, ts}
  function attachRepo(_x13, _x14) {
    return _attachRepo.apply(this, arguments);
  }
  function _attachRepo() {
    _attachRepo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(repo, branch) {
      var tr;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return tree(repo, branch);
          case 1:
            tr = _context9.v;
            attach = {
              repo: repo,
              branch: branch,
              tree: tr.files.slice(0, 1200),
              truncated: tr.truncated,
              ts: Date.now()
            };
            return _context9.a(2, attach);
        }
      }, _callee9);
    }));
    return _attachRepo.apply(this, arguments);
  }
  function detach() {
    attach = null;
  }
  function attached() {
    return attach;
  }

  /* ================= agent protocol ================= */
  function contextBlock() {
    if (!attach) return "";
    var isFa = OC.i18n.locale() === "fa";
    var out = isFa ? "\n\n=== مخزن گیت‌هاب متصل ===\n" : "\n\n=== Connected GitHub repository ===\n";
    out += (isFa ? "مخزن: " : "Repo: ") + attach.repo + "\n";
    out += (isFa ? "شاخه: " : "Branch: ") + attach.branch + "\n";
    out += (isFa ? "تغییرات پله‌شده: " : "Staged changes: ") + stage.length + "\n";
    out += isFa ? "فایل‌ها (اندازه به بایت):\n" : "Files (bytes):\n";
    var files = attach.tree.filter(function (f) {
      return f.size < 120000;
    });
    out += files.slice(0, 500).map(function (f) {
      return f.p + " (" + f.size + "B)";
    }).join("\n");
    if (files.length > 500) out += "\n... +" + (files.length - 500) + " " + (isFa ? "فایل دیگر" : "more files");
    if (attach.truncated) out += "\n" + (isFa ? "(درخت ناقص است — مسیر دقیق را بخواهید)" : "(tree truncated — ask for exact paths)");
    out += "\n\n" + (isFa ? "شما دستیار کدنویسی متصل به این مخزن هستی. هر پاسخ فقط و فقط یک JSON معتبر باشد:\n" + '{"say":"پیام کوتاه برای کاربر","actions":[{"t":"read","p":"مسیر فایل"},{"t":"list","p":"مسیر پوشه"},{"t":"write","p":"مسیر فایل","c":"کل محتوای نهایی فایل"},{"t":"done","s":"خلاصه کارها"}]}\n' + "قواعد: پیش از اصلاح، فایل را با read ببین؛ write همیشه کل محتوای نهایی فایل است نه قطعه‌ای از آن؛ حداکثر ۳ action در هر پاسخ؛ هرگز مخزن دیگری را فرض نکن؛ وقتی اصلاح‌ها کامل شد done بده. بیرون از JSON هیچ متنی ننویس." : "You are a coding assistant connected to this repository. Every reply must be exactly one valid JSON object:\n" + '{"say":"short message for the user","actions":[{"t":"read","p":"file path"},{"t":"list","p":"folder path"},{"t":"write","p":"file path","c":"FULL new file content"},{"t":"done","s":"summary"}]}\n' + "Rules: read a file before editing it; write always contains the FULL final file content; max 3 actions per reply; when edits are complete reply with done. Write nothing outside the JSON.");
    return out;
  }
  function parseActions(text) {
    var s = String(text || "");
    var start = s.indexOf("{");
    if (start < 0) return null;
    var depth = 0,
      inStr = false,
      esc = false,
      end = -1;
    for (var i = start; i < s.length; i++) {
      var ch = s[i];
      if (inStr) {
        if (esc) esc = false;else if (ch === "\\") esc = true;else if (ch === '"') inStr = false;
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
      var j = JSON.parse(s.slice(start, end));
      if (j && Array.isArray(j.actions)) return j;
    } catch (e) {
      return null;
    }
    return null;
  }
  var MAX_FILE_CONTEXT = 8000;
  function runActions(_x15) {
    return _runActions.apply(this, arguments);
  }
  function _runActions() {
    _runActions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(actions) {
      var results, staged, done, say, _iterator3, _step3, _loop, _t8;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (attach) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2, {
              results: [],
              staged: 0,
              done: false,
              say: ""
            });
          case 1:
            results = [];
            staged = 0, done = false, say = "";
            _iterator3 = _createForOfIteratorHelper((actions || []).slice(0, 3));
            _context1.p = 2;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var a, type, p, c, trimmed, dir, kids, _t7;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    a = _step3.value;
                    type = String(a.t || a.action || "").toLowerCase();
                    p = String(a.p || a.path || "");
                    _context0.p = 1;
                    if (!(type === "read" && p)) {
                      _context0.n = 3;
                      break;
                    }
                    _context0.n = 2;
                    return readFile(attach.repo, attach.branch, p);
                  case 2:
                    c = _context0.v;
                    trimmed = c.length > MAX_FILE_CONTEXT ? c.slice(0, MAX_FILE_CONTEXT) + "\n... [TRUNCATED]" : c;
                    results.push({
                      ok: true,
                      type: type,
                      path: p,
                      text: "[FILE " + p + "]\n" + trimmed
                    });
                    _context0.n = 4;
                    break;
                  case 3:
                    if (type === "write" && p && typeof a.c === "string") {
                      stageFile(attach.repo, attach.branch, p, a.c);
                      staged++;
                      results.push({
                        ok: true,
                        type: type,
                        path: p,
                        text: "[STAGED " + p + "] ✓ " + t("ghStagedOk")
                      });
                    } else if (type === "list") {
                      dir = p.replace(/\/?$/, p ? "/" : "");
                      kids = attach.tree.filter(function (f) {
                        return f.p.indexOf(dir) === 0;
                      }).slice(0, 100).map(function (f) {
                        return f.p;
                      });
                      results.push({
                        ok: true,
                        type: type,
                        path: p,
                        text: "[DIR " + (p || "/") + "]\n" + kids.join("\n")
                      });
                    } else if (type === "done") {
                      done = true;
                      say = a.s || "";
                    } else {
                      results.push({
                        ok: false,
                        type: type,
                        path: p,
                        text: "[ERROR] " + t("ghBadAction")
                      });
                    }
                  case 4:
                    _context0.n = 6;
                    break;
                  case 5:
                    _context0.p = 5;
                    _t7 = _context0.v;
                    results.push({
                      ok: false,
                      type: type,
                      path: p,
                      text: "[ERROR " + p + "] " + (_t7.message || String(_t7))
                    });
                  case 6:
                    return _context0.a(2);
                }
              }, _loop, null, [[1, 5]]);
            });
            _iterator3.s();
          case 3:
            if ((_step3 = _iterator3.n()).done) {
              _context1.n = 5;
              break;
            }
            return _context1.d(_regeneratorValues(_loop()), 4);
          case 4:
            _context1.n = 3;
            break;
          case 5:
            _context1.n = 7;
            break;
          case 6:
            _context1.p = 6;
            _t8 = _context1.v;
            _iterator3.e(_t8);
          case 7:
            _context1.p = 7;
            _iterator3.f();
            return _context1.f(7);
          case 8:
            return _context1.a(2, {
              results: results,
              staged: staged,
              done: done,
              say: say
            });
        }
      }, _callee0, null, [[2, 6, 7, 8]]);
    }));
    return _runActions.apply(this, arguments);
  }
  window.OC = window.OC || {};
  window.OC.github = {
    state: state,
    connect: connect,
    disconnect: disconnect,
    token: token,
    api: api,
    listRepos: listRepos,
    branches: branches,
    tree: tree,
    readFile: readFile,
    stageFile: stageFile,
    unstage: unstage,
    clearStage: clearStage,
    getStage: getStage,
    stageRepo: stageRepo,
    commit: commit,
    exportZip: exportZip,
    exportStagedZip: exportStagedZip,
    attachRepo: attachRepo,
    detach: detach,
    attached: attached,
    contextBlock: contextBlock,
    parseActions: parseActions,
    runActions: runActions
  };
})();