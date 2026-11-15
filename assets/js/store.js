function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — Store: persistence layer (localStorage). Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;

  /* ---------- utils ---------- */
  var U = {
    uid: function uid() {
      return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    },
    now: function now() {
      return Date.now();
    },
    esc: function esc(s) {
      return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    },
    faNum: function faNum(s) {
      return String(s).replace(/\d/g, function (d) {
        return "۰۱۲۳۴۵۶۷۸۹"[d];
      });
    },
    fmtDate: function fmtDate(ts) {
      try {
        return new Date(ts).toLocaleDateString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch (e) {
        return "";
      }
    },
    fmtTime: function fmtTime(ts) {
      try {
        return new Date(ts).toLocaleTimeString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US", {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch (e) {
        return "";
      }
    },
    fmtBytes: function fmtBytes(n) {
      if (!n && n !== 0) return "";
      var units = ["B", "KB", "MB", "GB"];
      var i = 0,
        v = n;
      while (v >= 1024 && i < units.length - 1) {
        v /= 1024;
        i++;
      }
      return (i === 0 ? v : v.toFixed(1)) + " " + units[i];
    },
    debounce: function debounce(fn, ms) {
      var h = null;
      return function () {
        for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
          a[_key] = arguments[_key];
        }
        clearTimeout(h);
        h = setTimeout(function () {
          return fn.apply(void 0, a);
        }, ms);
      };
    },
    clamp: function clamp(v, a, b) {
      return Math.min(b, Math.max(a, v));
    },
    download: function download(name, blob) {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
        a.remove();
      }, 800);
    },
    copy: function copy(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).catch(function () {
          return U.copyFallback(text);
        });
      }
      return Promise.resolve(U.copyFallback(text));
    },
    copyFallback: function copyFallback(text) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      ta.remove();
    }
  };

  /* ---------- SHA-256 (pure JS, works on file:// too) ---------- */
  function sha256(ascii) {
    function rightRotate(v, a) {
      return v >>> a | v << 32 - a;
    }
    var mathPow = Math.pow,
      maxWord = mathPow(2, 32);
    var result = "";
    var words = [],
      asciiBitLength = ascii.length * 8;
    var hash = [],
      k = [],
      primeCounter = 0;
    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (var i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = mathPow(candidate, 0.5) * maxWord | 0;
        k[primeCounter++] = mathPow(candidate, 1 / 3) * maxWord | 0;
      }
    }
    ascii += "\x80";
    while (ascii.length % 64 - 56) ascii += "\x00";
    for (var _i = 0; _i < ascii.length; _i++) {
      var j = ascii.charCodeAt(_i);
      if (j >> 8) return; // ASCII only
      words[_i >> 2] |= j << (3 - _i) % 4 * 8;
    }
    words[words.length] = asciiBitLength / maxWord | 0;
    words[words.length] = asciiBitLength;
    for (var _j = 0; _j < words.length;) {
      var w = words.slice(_j, _j += 16);
      var oldHash = hash.slice(0);
      for (var _i2 = 0; _i2 < 64; _i2++) {
        var w15 = w[_i2 - 15],
          w2 = w[_i2 - 2];
        var a = hash[0],
          e = hash[4];
        var temp1 = hash[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + (e & hash[5] ^ ~e & hash[6]) + k[_i2] + (w[_i2] = _i2 < 16 ? w[_i2] : w[_i2 - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ w15 >>> 3) + w[_i2 - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ w2 >>> 10) | 0);
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + (a & hash[1] ^ a & hash[2] ^ hash[1] & hash[2]);
        hash = [temp1 + temp2 | 0].concat(hash);
        hash[4] = hash[4] + temp1 | 0;
      }
      for (var _i3 = 0; _i3 < 8; _i3++) hash[_i3] = hash[_i3] + oldHash[_i3] | 0;
    }
    for (var _i4 = 0; _i4 < 8; _i4++) {
      for (var _j2 = 3; _j2 + 1; _j2--) {
        var b = hash[_i4] >> _j2 * 8 & 255;
        result += (b < 16 ? 0 : "") + b.toString(16);
      }
    }
    return result;
  }
  // UTF-8 safe wrapper + salt
  function hashPass(pass, salt) {
    var bytes = unescape(encodeURIComponent(salt + "::" + pass));
    // chunk to keep pure-js sha within limits
    if (bytes.length > 3000) {
      // iterative: hash in two parts then combine
      return sha256(bytes.slice(0, 3000)) + sha256(bytes.slice(3000));
    }
    return sha256(bytes);
  }

  /* ---------- device key for light key-obfuscation ---------- */
  function deviceKey() {
    var k = null;
    try {
      k = localStorage.getItem("oc-dk");
    } catch (e) {}
    if (!k) {
      k = U.uid() + U.uid();
      try {
        localStorage.setItem("oc-dk", k);
      } catch (e) {}
    }
    return k;
  }
  function xorStr(str, key) {
    var out = "";
    for (var i = 0; i < str.length; i++) out += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    return out;
  }
  function encKey(raw) {
    try {
      return btoa(unescape(encodeURIComponent(xorStr(raw, deviceKey()))));
    } catch (e) {
      return "";
    }
  }
  function decKey(enc) {
    try {
      return xorStr(decodeURIComponent(escape(atob(enc))), deviceKey());
    } catch (e) {
      return "";
    }
  }

  /* ---------- low-level kv ---------- */
  var mem = {};
  function kvGet(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }
  function kvSet(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch (e) {
      console.warn("storage full", e);
      return false;
    }
  }
  function kvDel(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  /* ---------- keys ---------- */
  var K = {
    users: "oc-users",
    session: "oc-session",
    sysSettings: "oc-system-settings",
    activity: "oc-activity",
    convs: function convs(uid) {
      return "oc-convs-" + uid;
    },
    providers: function providers(uid) {
      return "oc-providers-" + uid;
    },
    prompts: function prompts(uid) {
      return "oc-prompts-" + uid;
    },
    usage: function usage(uid) {
      return "oc-usage-" + uid;
    },
    settings: function settings(uid) {
      return "oc-settings-" + uid;
    }
  };

  /* ---------- default system settings ---------- */
  var DEFAULT_SYS = {
    signupOpen: true,
    maintenance: false,
    defaultLocale: "fa",
    defaultTheme: "system",
    dailyRequestLimit: 0,
    // 0 = unlimited
    maxFileSizeMB: 10,
    allowedExtensions: [],
    // [] or ["*"] = ALL formats accepted; whitelist only if admin sets it
    webSearchEnabled: true,
    webSearchProvider: "tavily",
    webSearchKeyEnc: "",
    // admin secret key (encrypted)
    retentionDays: 30,
    trashDays: 14,
    animationDefault: "soft",
    temperatureMax: 2,
    maxOutputTokensDefault: 2048,
    contextWindowDefault: 8192,
    silenceTimeoutMs: 60000,
    version: "1.0.0"
  };
  var DEFAULT_USER_SETTINGS = {
    theme: "system",
    animation: "soft",
    temperature: 0.7,
    maxOutputTokens: 2048,
    contextWindow: 8192,
    webSearchDefault: false
  };

  /* ---------- users ---------- */
  function getUsers() {
    return kvGet(K.users, []);
  }
  function saveUsers(list) {
    kvSet(K.users, list);
  }
  function seedAdmin() {
    var users = getUsers();
    if (users.length) return;
    var admin = {
      id: U.uid(),
      email: "admin@opencode.app",
      username: "admin",
      name: "عباس صدیق",
      last: "",
      phone: "",
      passHash: hashPass("OpenCode@2026", "admin@opencode.app"),
      role: "admin",
      avatar: "",
      createdAt: U.now(),
      disabled: false,
      seeded: true
    };
    saveUsers([admin]);
    logActivity("system", "seed", "admin account created");
  }
  function findUser(idOrEmail) {
    var users = getUsers();
    return users.find(function (u) {
      return u.id === idOrEmail;
    }) || users.find(function (u) {
      return (u.email || "").toLowerCase() === String(idOrEmail).toLowerCase();
    }) || users.find(function (u) {
      return (u.username || "").toLowerCase() === String(idOrEmail).toLowerCase();
    });
  }
  function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || "").trim());
  }
  function validPhone(p) {
    var d = String(p || "").replace(/[۰-۹]/g, function (c) {
      return "۰۱۲۳۴۵۶۷۸۹".indexOf(c);
    }).replace(/\D/g, "");
    return /^09\d{9}$/.test(d);
  }
  function passOk(p) {
    return String(p || "").length >= 10;
  }

  /* ---------- session ---------- */
  var SESSION_MS = 1000 * 60 * 60 * 24 * 14; // 14 days
  function createSession(user) {
    var s = {
      userId: user.id,
      token: U.uid(),
      exp: U.now() + SESSION_MS
    };
    kvSet(K.session, s);
    return s;
  }
  function getSession() {
    var s = kvGet(K.session, null);
    if (!s || s.exp < U.now()) {
      kvDel(K.session);
      return null;
    }
    return s;
  }
  function currentUser() {
    var s = getSession();
    if (!s) return null;
    var u = findUser(s.userId);
    if (!u || u.disabled) return null;
    return u;
  }
  function logout() {
    kvDel(K.session);
  }

  /* ---------- per-user data ---------- */
  function convsKey() {
    var u = currentUser();
    return u ? K.convs(u.id) : null;
  }
  function getConvs() {
    var k = convsKey();
    return k ? kvGet(k, []) : [];
  }
  function saveConvs(list) {
    var k = convsKey();
    if (k) kvSet(k, list);
  }
  function getConv(id) {
    return getConvs().find(function (c) {
      return c.id === id;
    }) || null;
  }
  function putConv(conv) {
    var list = getConvs();
    var i = list.findIndex(function (c) {
      return c.id === conv.id;
    });
    conv.updatedAt = U.now();
    if (i >= 0) list[i] = conv;else list.unshift(conv);
    saveConvs(list);
    return conv;
  }
  function providersKey() {
    var u = currentUser();
    return u ? K.providers(u.id) : null;
  }
  function getProviders() {
    var k = providersKey();
    return k ? kvGet(k, []) : [];
  }
  function saveProviders(list) {
    var k = providersKey();
    if (k) kvSet(k, list);
  }
  function promptsKey() {
    var u = currentUser();
    return u ? K.prompts(u.id) : null;
  }
  function getPrompts() {
    var k = promptsKey();
    return k ? kvGet(k, []) : [];
  }
  function savePrompts(list) {
    var k = promptsKey();
    if (k) kvSet(k, list);
  }
  function usageKey() {
    var u = currentUser();
    return u ? K.usage(u.id) : null;
  }
  function getUsage() {
    var k = usageKey();
    return k ? kvGet(k, {
      days: {},
      totals: {
        req: 0,
        tin: 0,
        tout: 0,
        fail: 0
      }
    }) : {
      days: {},
      totals: {
        req: 0,
        tin: 0,
        tout: 0,
        fail: 0
      }
    };
  }
  function saveUsage(u2) {
    var k = usageKey();
    if (k) kvSet(k, u2);
  }
  function dayKey(ts) {
    var d = new Date(ts || U.now());
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function recordUsage(_ref) {
    var tin = _ref.tin,
      tout = _ref.tout,
      fail = _ref.fail,
      provider = _ref.provider,
      model = _ref.model,
      estimated = _ref.estimated;
    var u = getUsage();
    var dk = dayKey();
    if (!u.days[dk]) u.days[dk] = {
      req: 0,
      tin: 0,
      tout: 0,
      fail: 0,
      est: 0
    };
    var d = u.days[dk];
    if (fail) {
      d.fail++;
      u.totals.fail++;
    } else {
      d.req++;
      u.totals.req++;
      d.tin += tin || 0;
      d.tout += tout || 0;
      u.totals.tin += tin || 0;
      u.totals.tout += tout || 0;
      if (estimated) d.est++;
    }
    saveUsage(u);
  }
  function todayReqCount() {
    var u = getUsage();
    var d = u.days[dayKey()];
    return d ? d.req : 0;
  }
  function userSettingsKey() {
    var u = currentUser();
    return u ? K.settings(u.id) : null;
  }
  function getUserSettings() {
    var s = kvGet(userSettingsKey(), {});
    return Object.assign({}, DEFAULT_USER_SETTINGS, s);
  }
  function saveUserSettings(patch) {
    var s = Object.assign({}, getUserSettings(), patch);
    kvSet(userSettingsKey(), s);
    return s;
  }
  function sysSettings() {
    return Object.assign({}, DEFAULT_SYS, kvGet(K.sysSettings, {}));
  }
  function saveSysSettings(patch) {
    var s = Object.assign({}, sysSettings(), patch);
    kvSet(K.sysSettings, s);
    return s;
  }

  /* ---------- activity log (admin) ---------- */
  function logActivity(actor, type, details) {
    var list = kvGet(K.activity, []);
    list.unshift({
      id: U.uid(),
      ts: U.now(),
      actor: actor,
      type: type,
      details: details || ""
    });
    if (list.length > 500) list.length = 500;
    kvSet(K.activity, list);
  }
  function getActivity() {
    return kvGet(K.activity, []);
  }

  /* ---------- trash retention sweep ---------- */
  function sweepRetention() {
    var sys = sysSettings();
    var cut = U.now() - sys.trashDays * 864e5;
    var changed = false;
    var list = getConvs();
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        if (c.trashedAt && c.trashed && c.trashedAt < cut) {
          c.purge = true;
          changed = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (changed) saveConvs(list.filter(function (c) {
      return !c.purge;
    }));
  }

  /* ---------- storage stats ---------- */
  function storageStats() {
    var total = 0;
    var per = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        var v = localStorage.getItem(k) || "";
        per[k] = v.length + k.length;
        total += per[k];
      }
    } catch (e) {}
    return {
      totalBytes: total * 2,
      per: per
    };
  }

  /* ---------- export / import ---------- */
  function exportData(scope) {
    var u = currentUser();
    var out = {
      app: "opencode",
      version: 1,
      exportedAt: U.now(),
      scope: scope
    };
    var sys = sysSettings();
    if (scope === "all" || scope === "chats") {
      out.chats = getConvs();
      out.prompts = getPrompts();
    }
    if (scope === "all" || scope === "settings") {
      out.settings = getUserSettings();
      out.profile = u ? {
        name: u.name,
        last: u.last,
        email: u.email,
        phone: u.phone
      } : null;
      // NOTE: API keys are NEVER exported
    }
    if (scope === "all") out.usage = getUsage();
    return out;
  }
  function importData(data, mode) {
    if (!data || data.app !== "opencode" || !data.version) throw new Error("invalid");
    var existingIds = new Set(getConvs().map(function (c) {
      return c.id;
    }));
    var addedChats = 0,
      skipped = 0;
    if (data.chats) {
      var list = getConvs();
      var _iterator2 = _createForOfIteratorHelper(data.chats),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c = _step2.value;
          if (existingIds.has(c.id)) {
            skipped++;
            continue;
          }
          list.push(c);
          addedChats++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      saveConvs(list);
    }
    if (data.prompts) {
      var ids = new Set(getPrompts().map(function (p) {
        return p.id;
      }));
      var _list = getPrompts();
      var _iterator3 = _createForOfIteratorHelper(data.prompts),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var p = _step3.value;
          if (!ids.has(p.id)) _list.push(p);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      savePrompts(_list);
    }
    if (data.settings) saveUserSettings(data.settings);
    if (data.profile) {
      var u = currentUser();
      if (u) {
        Object.assign(u, {
          name: data.profile.name || u.name,
          last: data.profile.last || u.last,
          phone: data.profile.phone || u.phone
        });
        saveUsers(getUsers());
      }
    }
    return {
      addedChats: addedChats,
      skipped: skipped
    };
  }
  window.OC = window.OC || {};
  window.OC.U = U;
  window.OC.store = {
    U: U,
    K: K,
    hashPass: hashPass,
    validEmail: validEmail,
    validPhone: validPhone,
    passOk: passOk,
    encKey: encKey,
    decKey: decKey,
    kvGet: kvGet,
    kvSet: kvSet,
    seedAdmin: seedAdmin,
    getUsers: getUsers,
    saveUsers: saveUsers,
    findUser: findUser,
    createSession: createSession,
    getSession: getSession,
    currentUser: currentUser,
    logout: logout,
    getConvs: getConvs,
    saveConvs: saveConvs,
    getConv: getConv,
    putConv: putConv,
    getProviders: getProviders,
    saveProviders: saveProviders,
    getPrompts: getPrompts,
    savePrompts: savePrompts,
    getUsage: getUsage,
    recordUsage: recordUsage,
    todayReqCount: todayReqCount,
    dayKey: dayKey,
    getUserSettings: getUserSettings,
    saveUserSettings: saveUserSettings,
    sysSettings: sysSettings,
    saveSysSettings: saveSysSettings,
    logActivity: logActivity,
    getActivity: getActivity,
    sweepRetention: sweepRetention,
    storageStats: storageStats,
    exportData: exportData,
    importData: importData
  };
})();