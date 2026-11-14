/* Open Code — Store: persistence layer (localStorage). Designer: Abbas Sedigh */
(function () {
  const { t } = OC.i18n;

  /* ---------- utils ---------- */
  const U = {
    uid() {
      return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    },
    now() { return Date.now(); },
    esc(s) {
      return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    },
    faNum(s) {
      return String(s).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
    },
    fmtDate(ts) {
      try {
        return new Date(ts).toLocaleDateString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US",
          { year: "numeric", month: "short", day: "numeric" });
      } catch (e) { return ""; }
    },
    fmtTime(ts) {
      try {
        return new Date(ts).toLocaleTimeString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US",
          { hour: "2-digit", minute: "2-digit" });
      } catch (e) { return ""; }
    },
    fmtBytes(n) {
      if (!n && n !== 0) return "";
      const units = ["B", "KB", "MB", "GB"];
      let i = 0, v = n;
      while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
      return (i === 0 ? v : v.toFixed(1)) + " " + units[i];
    },
    debounce(fn, ms) {
      let h = null;
      return (...a) => { clearTimeout(h); h = setTimeout(() => fn(...a), ms); };
    },
    clamp(v, a, b) { return Math.min(b, Math.max(a, v)); },
    download(name, blob) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 800);
    },
    copy(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).catch(() => U.copyFallback(text));
      }
      return Promise.resolve(U.copyFallback(text));
    },
    copyFallback(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove();
    },
  };

  /* ---------- SHA-256 (pure JS, works on file:// too) ---------- */
  function sha256(ascii) {
    function rightRotate(v, a) { return (v >>> a) | (v << (32 - a)); }
    const mathPow = Math.pow, maxWord = mathPow(2, 32);
    let result = "";
    const words = [], asciiBitLength = ascii.length * 8;
    let hash = [], k = [], primeCounter = 0;
    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += "\x80";
    while (ascii.length % 64 - 56) ascii += "\x00";
    for (let i = 0; i < ascii.length; i++) {
      const j = ascii.charCodeAt(i);
      if (j >> 8) return; // ASCII only
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = (asciiBitLength / maxWord) | 0;
    words[words.length] = asciiBitLength;
    for (let j = 0; j < words.length;) {
      const w = words.slice(j, j += 16);
      const oldHash = hash.slice(0);
      for (let i = 0; i < 64; i++) {
        const w15 = w[i - 15], w2 = w[i - 2];
        const a = hash[0], e = hash[4];
        const temp1 = hash[7]
          + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i]
          + (w[i] = (i < 16) ? w[i] : (
            w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
            + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
          ) | 0);
        const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += ((b < 16) ? 0 : "") + b.toString(16);
      }
    }
    return result;
  }
  // UTF-8 safe wrapper + salt
  function hashPass(pass, salt) {
    const bytes = unescape(encodeURIComponent(salt + "::" + pass));
    // chunk to keep pure-js sha within limits
    if (bytes.length > 3000) {
      // iterative: hash in two parts then combine
      return sha256(bytes.slice(0, 3000)) + sha256(bytes.slice(3000));
    }
    return sha256(bytes);
  }

  /* ---------- device key for light key-obfuscation ---------- */
  function deviceKey() {
    let k = null;
    try { k = localStorage.getItem("oc-dk"); } catch (e) {}
    if (!k) {
      k = U.uid() + U.uid();
      try { localStorage.setItem("oc-dk", k); } catch (e) {}
    }
    return k;
  }
  function xorStr(str, key) {
    let out = "";
    for (let i = 0; i < str.length; i++) out += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    return out;
  }
  function encKey(raw) {
    try { return btoa(unescape(encodeURIComponent(xorStr(raw, deviceKey())))); }
    catch (e) { return ""; }
  }
  function decKey(enc) {
    try { return xorStr(decodeURIComponent(escape(atob(enc))), deviceKey()); }
    catch (e) { return ""; }
  }

  /* ---------- low-level kv ---------- */
  const mem = {};
  function kvGet(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function kvSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; }
    catch (e) { console.warn("storage full", e); return false; }
  }
  function kvDel(key) { try { localStorage.removeItem(key); } catch (e) {} }

  /* ---------- keys ---------- */
  const K = {
    users: "oc-users",
    session: "oc-session",
    sysSettings: "oc-system-settings",
    activity: "oc-activity",
    convs: uid => "oc-convs-" + uid,
    providers: uid => "oc-providers-" + uid,
    prompts: uid => "oc-prompts-" + uid,
    usage: uid => "oc-usage-" + uid,
    settings: uid => "oc-settings-" + uid,
  };

  /* ---------- default system settings ---------- */
  const DEFAULT_SYS = {
    signupOpen: true,
    maintenance: false,
    defaultLocale: "fa",
    defaultTheme: "system",
    dailyRequestLimit: 0,       // 0 = unlimited
    maxFileSizeMB: 10,
    allowedExtensions: ["txt", "md", "json", "csv", "pdf", "png", "jpg", "jpeg", "gif", "webp", "svg", "html", "css", "js", "ts", "py", "zip"],
    webSearchEnabled: true,
    webSearchProvider: "tavily",
    webSearchKeyEnc: "",        // admin secret key (encrypted)
    retentionDays: 30,
    trashDays: 14,
    animationDefault: "soft",
    temperatureMax: 2,
    maxOutputTokensDefault: 2048,
    contextWindowDefault: 8192,
    silenceTimeoutMs: 60000,
    version: "1.0.0",
  };

  const DEFAULT_USER_SETTINGS = {
    theme: "system",
    animation: "soft",
    temperature: 0.7,
    maxOutputTokens: 2048,
    contextWindow: 8192,
    webSearchDefault: false,
  };

  /* ---------- users ---------- */
  function getUsers() { return kvGet(K.users, []); }
  function saveUsers(list) { kvSet(K.users, list); }

  function seedAdmin() {
    const users = getUsers();
    if (users.length) return;
    const admin = {
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
      seeded: true,
    };
    saveUsers([admin]);
    logActivity("system", "seed", "admin account created");
  }

  function findUser(idOrEmail) {
    const users = getUsers();
    return users.find(u => u.id === idOrEmail) ||
      users.find(u => (u.email || "").toLowerCase() === String(idOrEmail).toLowerCase()) ||
      users.find(u => (u.username || "").toLowerCase() === String(idOrEmail).toLowerCase());
  }

  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || "").trim()); }
  function validPhone(p) {
    const d = String(p || "").replace(/[۰-۹]/g, c => "۰۱۲۳۴۵۶۷۸۹".indexOf(c)).replace(/\D/g, "");
    return /^09\d{9}$/.test(d);
  }
  function passOk(p) { return String(p || "").length >= 10; }

  /* ---------- session ---------- */
  const SESSION_MS = 1000 * 60 * 60 * 24 * 14; // 14 days
  function createSession(user) {
    const s = { userId: user.id, token: U.uid(), exp: U.now() + SESSION_MS };
    kvSet(K.session, s);
    return s;
  }
  function getSession() {
    const s = kvGet(K.session, null);
    if (!s || s.exp < U.now()) { kvDel(K.session); return null; }
    return s;
  }
  function currentUser() {
    const s = getSession();
    if (!s) return null;
    const u = findUser(s.userId);
    if (!u || u.disabled) return null;
    return u;
  }
  function logout() { kvDel(K.session); }

  /* ---------- per-user data ---------- */
  function convsKey() { const u = currentUser(); return u ? K.convs(u.id) : null; }
  function getConvs() { const k = convsKey(); return k ? kvGet(k, []) : []; }
  function saveConvs(list) { const k = convsKey(); if (k) kvSet(k, list); }
  function getConv(id) { return getConvs().find(c => c.id === id) || null; }
  function putConv(conv) {
    const list = getConvs();
    const i = list.findIndex(c => c.id === conv.id);
    conv.updatedAt = U.now();
    if (i >= 0) list[i] = conv; else list.unshift(conv);
    saveConvs(list);
    return conv;
  }

  function providersKey() { const u = currentUser(); return u ? K.providers(u.id) : null; }
  function getProviders() { const k = providersKey(); return k ? kvGet(k, []) : []; }
  function saveProviders(list) { const k = providersKey(); if (k) kvSet(k, list); }

  function promptsKey() { const u = currentUser(); return u ? K.prompts(u.id) : null; }
  function getPrompts() { const k = promptsKey(); return k ? kvGet(k, []) : []; }
  function savePrompts(list) { const k = promptsKey(); if (k) kvSet(k, list); }

  function usageKey() { const u = currentUser(); return u ? K.usage(u.id) : null; }
  function getUsage() { const k = usageKey(); return k ? kvGet(k, { days: {}, totals: { req: 0, tin: 0, tout: 0, fail: 0 } }) : { days: {}, totals: { req: 0, tin: 0, tout: 0, fail: 0 } }; }
  function saveUsage(u2) { const k = usageKey(); if (k) kvSet(k, u2); }

  function dayKey(ts) {
    const d = new Date(ts || U.now());
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function recordUsage({ tin, tout, fail, provider, model, estimated }) {
    const u = getUsage();
    const dk = dayKey();
    if (!u.days[dk]) u.days[dk] = { req: 0, tin: 0, tout: 0, fail: 0, est: 0 };
    const d = u.days[dk];
    if (fail) { d.fail++; u.totals.fail++; }
    else {
      d.req++;
      u.totals.req++;
      d.tin += tin || 0; d.tout += tout || 0;
      u.totals.tin += tin || 0; u.totals.tout += tout || 0;
      if (estimated) d.est++;
    }
    saveUsage(u);
  }
  function todayReqCount() {
    const u = getUsage();
    const d = u.days[dayKey()];
    return d ? d.req : 0;
  }

  function userSettingsKey() { const u = currentUser(); return u ? K.settings(u.id) : null; }
  function getUserSettings() {
    const s = kvGet(userSettingsKey(), {});
    return Object.assign({}, DEFAULT_USER_SETTINGS, s);
  }
  function saveUserSettings(patch) {
    const s = Object.assign({}, getUserSettings(), patch);
    kvSet(userSettingsKey(), s);
    return s;
  }

  function sysSettings() { return Object.assign({}, DEFAULT_SYS, kvGet(K.sysSettings, {})); }
  function saveSysSettings(patch) {
    const s = Object.assign({}, sysSettings(), patch);
    kvSet(K.sysSettings, s);
    return s;
  }

  /* ---------- activity log (admin) ---------- */
  function logActivity(actor, type, details) {
    const list = kvGet(K.activity, []);
    list.unshift({ id: U.uid(), ts: U.now(), actor, type, details: details || "" });
    if (list.length > 500) list.length = 500;
    kvSet(K.activity, list);
  }
  function getActivity() { return kvGet(K.activity, []); }

  /* ---------- trash retention sweep ---------- */
  function sweepRetention() {
    const sys = sysSettings();
    const cut = U.now() - sys.trashDays * 864e5;
    let changed = false;
    const list = getConvs();
    for (const c of list) {
      if (c.trashedAt && c.trashed && c.trashedAt < cut) {
        c.purge = true; changed = true;
      }
    }
    if (changed) saveConvs(list.filter(c => !c.purge));
  }

  /* ---------- storage stats ---------- */
  function storageStats() {
    let total = 0; const per = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        const v = localStorage.getItem(k) || "";
        per[k] = v.length + k.length;
        total += per[k];
      }
    } catch (e) {}
    return { totalBytes: total * 2, per };
  }

  /* ---------- export / import ---------- */
  function exportData(scope) {
    const u = currentUser();
    const out = { app: "opencode", version: 1, exportedAt: U.now(), scope };
    const sys = sysSettings();
    if (scope === "all" || scope === "chats") {
      out.chats = getConvs();
      out.prompts = getPrompts();
    }
    if (scope === "all" || scope === "settings") {
      out.settings = getUserSettings();
      out.profile = u ? { name: u.name, last: u.last, email: u.email, phone: u.phone } : null;
      // NOTE: API keys are NEVER exported
    }
    if (scope === "all") out.usage = getUsage();
    return out;
  }
  function importData(data, mode) {
    if (!data || data.app !== "opencode" || !data.version) throw new Error("invalid");
    const existingIds = new Set(getConvs().map(c => c.id));
    let addedChats = 0, skipped = 0;
    if (data.chats) {
      const list = getConvs();
      for (const c of data.chats) {
        if (existingIds.has(c.id)) { skipped++; continue; }
        list.push(c); addedChats++;
      }
      saveConvs(list);
    }
    if (data.prompts) {
      const ids = new Set(getPrompts().map(p => p.id));
      const list = getPrompts();
      for (const p of data.prompts) if (!ids.has(p.id)) list.push(p);
      savePrompts(list);
    }
    if (data.settings) saveUserSettings(data.settings);
    if (data.profile) {
      const u = currentUser();
      if (u) {
        Object.assign(u, { name: data.profile.name || u.name, last: data.profile.last || u.last, phone: data.profile.phone || u.phone });
        saveUsers(getUsers());
      }
    }
    return { addedChats, skipped };
  }

  window.OC = window.OC || {};
  window.OC.U = U;
  window.OC.store = {
    U, K, hashPass, validEmail, validPhone, passOk,
    encKey, decKey,
    kvGet, kvSet,
    seedAdmin, getUsers, saveUsers, findUser,
    createSession, getSession, currentUser, logout,
    getConvs, saveConvs, getConv, putConv,
    getProviders, saveProviders,
    getPrompts, savePrompts,
    getUsage, recordUsage, todayReqCount, dayKey,
    getUserSettings, saveUserSettings,
    sysSettings, saveSysSettings,
    logActivity, getActivity,
    sweepRetention,
    storageStats,
    exportData, importData,
  };
})();
