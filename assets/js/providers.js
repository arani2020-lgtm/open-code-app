/* Open Code — Providers & chat engine (OpenAI-compatible streaming). Designer: Abbas Sedigh */
(function () {
  const { t } = OC.i18n;
  const { U, store } = OC;

  const TYPES = [
    { id: "openai", label: "OpenAI", base: "https://api.openai.com/v1", needsKey: true },
    { id: "openai-compatible", label: "OpenAI-compatible (سازگار با OpenAI)", base: "", needsKey: true },
    { id: "openrouter", label: "OpenRouter", base: "https://openrouter.ai/api/v1", needsKey: true },
    { id: "groq", label: "Groq", base: "https://api.groq.com/openai/v1", needsKey: true },
    { id: "together", label: "Together AI", base: "https://api.together.xyz/v1", needsKey: true },
    { id: "custom", label: "Custom (سفارشی)", base: "", needsKey: false },
  ];

  function allProviders() {
    // system providers from admin + user providers
    const sys = (store.sysSettings().systemProviders || []);
    const mine = store.getProviders();
    return sys.map(p => Object.assign({}, p, { system: true })).concat(mine.map(p => Object.assign({}, p, { system: false })));
  }
  function getProvider(id) {
    return allProviders().find(p => p.id === id) || null;
  }
  function baseUrl(p) {
    const tp = TYPES.find(x => x.id === p.type) || TYPES[1];
    return (p.base || tp.base || "").replace(/\/+$/, "");
  }
  function authHeaders(p) {
    const h = { "Content-Type": "application/json" };
    if (p.keyEnc) {
      const key = store.decKey(p.keyEnc);
      if (key) h["Authorization"] = "Bearer " + key;
    }
    if (p.orgId && p.type === "openai") h["OpenAI-Organization"] = p.orgId;
    if (p.headers) for (const row of p.headers) if (row.name) h[row.name] = row.value || "";
    return h;
  }

  /* ---------- errors ---------- */
  function mapError(status, bodyText) {
    let detail = "";
    try { const j = JSON.parse(bodyText); detail = (j.error && (j.error.message || j.error.code)) || j.message || ""; } catch (e) {}
    if (status === 401 || status === 403) return t("providerRefused") + (detail ? " — " + detail : "") + " | " + t("checkCreds");
    if (status === 429) return t("rateLimited");
    if (status === 402) return t("insufficientQuota");
    if (status >= 500) return t("serverError") + (detail ? " — " + detail : "");
    if (status === 404) return t("unexpectedResponse") + (detail ? " — " + detail : "");
    return (t("errorOccurred") + (status ? " (" + status + ")" : "") + (detail ? " — " + detail : ""));
  }
  function offline() { return !navigator.onLine; }

  /* ---------- models ---------- */
  async function fetchModels(p) {
    if (offline()) throw new Error(t("networkDown"));
    const res = await fetch(baseUrl(p) + "/models", { headers: authHeaders(p) });
    if (!res.ok) throw new Error(mapError(res.status, await res.text().catch(() => "")));
    const j = await res.json();
    const arr = (j.data || j.models || []).map(m => m.id || m.name).filter(Boolean);
    return arr.sort();
  }
  async function testConnection(p) {
    if (offline()) throw new Error(t("networkDown"));
    const started = Date.now();
    try {
      const res = await fetch(baseUrl(p) + "/models", { headers: authHeaders(p) });
      if (!res.ok) throw new Error(mapError(res.status, await res.text().catch(() => "")));
      return { ok: true, ms: Date.now() - started, models: true };
    } catch (e) {
      if (e.message === t("networkDown")) throw e;
      // some providers reject /models; try a minimal completion
      try {
        const res2 = await fetch(baseUrl(p) + "/chat/completions", {
          method: "POST",
          headers: authHeaders(p),
          body: JSON.stringify({ model: (p.models && p.models[0]) || "gpt-4o-mini", messages: [{ role: "user", content: "ping" }], max_tokens: 1 }),
        });
        if (!res2.ok) throw new Error(mapError(res2.status, await res2.text().catch(() => "")));
        return { ok: true, ms: Date.now() - started, models: false };
      } catch (e2) {
        throw e2;
      }
    }
  }

  /* ---------- web search (Tavily) ---------- */
  async function webSearch(query) {
    const sys = store.sysSettings();
    if (!sys.webSearchEnabled) throw new Error(t("webSearchDisabled"));
    const key = store.decKey(sys.webSearchKeyEnc || "");
    if (!key) throw new Error(t("webSearchNotConfigured"));
    const res = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: key, query, max_results: 5, search_depth: "basic" }),
    });
    if (!res.ok) throw new Error(mapError(res.status, await res.text().catch(() => "")));
    const j = await res.json();
    const results = (j.results || []).map(r => ({ title: r.title, url: r.url, content: r.content }));
    return results;
  }
  function searchContextBlock(results) {
    if (!results || !results.length) return "";
    let out = "\n\n" + (OC.i18n.locale() === "fa" ? "نتایج جست‌وجوی وب (با ذکر منبع پاسخ بده):" : "Web search results (cite sources):") + "\n";
    results.forEach((r, i) => {
      out += `[${i + 1}] ${r.title}\n${r.url}\n${(r.content || "").slice(0, 700)}\n\n`;
    });
    return out;
  }

  /* ---------- daily limit ---------- */
  function limitBlocked() {
    const sys = store.sysSettings();
    const lim = sys.dailyRequestLimit || 0;
    if (lim > 0 && store.todayReqCount() >= lim) return t("limitReached");
    return null;
  }

  /* ---------- streaming chat ---------- */
  // onDelta(textSoFar, delta); returns {stop()} handle
  function streamChat(opts) {
    // opts: {provider, model, messages, temperature, maxTokens, signal handlers...}
    const { provider: p, model, messages, temperature, maxTokens } = opts;
    const ctrl = new AbortController();
    const handle = { stop: () => ctrl.abort(), done: false };

    (async () => {
      if (offline()) { opts.onError(new Error(t("networkDown"))); return; }
      const blk = limitBlocked();
      if (blk) { opts.onError(new Error(blk)); return; }

      const body = {
        model,
        messages,
        stream: true,
        temperature: typeof temperature === "number" ? temperature : 0.7,
      };
      if (maxTokens) body.max_tokens = maxTokens;
      if (p.type === "openrouter") {
        body.stream_options = { include_usage: true };
      } else if (p.type === "openai" || p.type === "openai-compatible") {
        body.stream_options = { include_usage: true };
      }

      const silenceMs = store.sysSettings().silenceTimeoutMs || 60000;
      let silenceTimer = null;
      const armSilence = () => {
        clearTimeout(silenceTimer);
        silenceTimer = setTimeout(() => {
          try { ctrl.abort(); } catch (e) {}
          opts.onError(new Error(t("providerStopped")));
        }, silenceMs);
      };
      armSilence();

      try {
        const res = await fetch(baseUrl(p) + "/chat/completions", {
          method: "POST",
          headers: authHeaders(p),
          body: JSON.stringify(body),
          signal: ctrl.signal,
        });
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          clearTimeout(silenceTimer);
          opts.onError(new Error(mapError(res.status, txt)));
          return;
        }
        if (!res.body) {
          // no streaming support: try json
          const j = await res.json();
          const text = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || "";
          clearTimeout(silenceTimer);
          opts.onDelta(text, text);
          const u2 = j.usage || null;
          opts.onDone({ usage: u2, estimated: false });
          return;
        }

        const reader = res.body.getReader();
        const dec = new TextDecoder("utf-8");
        let buf = "";
        let full = "";
        let usage = null;
        let gotAny = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let idx;
          while ((idx = buf.indexOf("\n")) >= 0) {
            const line = buf.slice(0, idx).trim();
            buf = buf.slice(idx + 1);
            if (!line.startsWith("data:")) continue;
            const payload = line.slice(5).trim();
            if (payload === "[DONE]") continue;
            let j;
            try { j = JSON.parse(payload); } catch (e) { continue; }
            if (j.usage) usage = j.usage;
            const choice = j.choices && j.choices[0];
            const delta = choice && (choice.delta || {});
            const piece = (delta.content || "") + ((delta.reasoning_content || "") && OC.i18n.locale() === "fa" ? "" : "");
            if (piece) {
              gotAny = true;
              full += piece;
              armSilence();
              opts.onDelta(full, piece);
            }
            if (choice && choice.finish_reason === "stop" && !piece) { /* noop */ }
          }
        }
        clearTimeout(silenceTimer);
        if (!gotAny) { opts.onError(new Error(t("modelEndedEmpty"))); return; }
        handle.done = true;
        const estimated = !usage;
        const tin = usage ? (usage.prompt_tokens || 0) : estTokens(messages);
        const tout = usage ? (usage.completion_tokens || 0) : estTokens([{ content: full }]);
        opts.onDone({ usage, estimated, tin, tout, text: full });
      } catch (e) {
        clearTimeout(silenceTimer);
        if (e.name === "AbortError") {
          if (!handle.done) opts.onAbort(full ? full : null);
        } else {
          opts.onError(e);
        }
      }
    })();

    return handle;
  }

  function estTokens(messages) {
    let chars = 0;
    for (const m of messages) chars += (m.content || "").length;
    return Math.ceil(chars / 4);
  }

  /* ---------- CRUD ---------- */
  function saveMine(p) {
    const list = store.getProviders();
    const i = list.findIndex(x => x.id === p.id);
    if (i >= 0) list[i] = p; else list.push(p);
    store.saveProviders(list);
  }
  function deleteMine(id) {
    store.saveProviders(store.getProviders().filter(p => p.id !== id));
  }
  function saveSystem(p) {
    const sys = store.sysSettings();
    const list = (sys.systemProviders || []).slice();
    const i = list.findIndex(x => x.id === p.id);
    if (i >= 0) list[i] = p; else list.push(p);
    store.saveSysSettings({ systemProviders: list });
  }
  function deleteSystem(id) {
    const sys = store.sysSettings();
    store.saveSysSettings({ systemProviders: (sys.systemProviders || []).filter(p => p.id !== id) });
  }

  function defaultProvider() {
    const list = allProviders();
    return list.find(p => p.default) || list[0] || null;
  }
  function markDefault(id, system) {
    if (system) {
      const sys = store.sysSettings();
      const list = (sys.systemProviders || []).map(p => Object.assign({}, p, { default: p.id === id }));
      store.saveSysSettings({ systemProviders: list });
    } else {
      const list = store.getProviders().map(p => Object.assign({}, p, { default: p.id === id }));
      store.saveProviders(list);
    }
  }
  function setHealth(id, system, ok, ms) {
    const patch = p => Object.assign(p, { health: ok ? "ok" : "err", lastCheck: Date.now(), lastMs: ms });
    if (system) {
      const sys = store.sysSettings();
      store.saveSysSettings({ systemProviders: (sys.systemProviders || []).map(p => p.id === id ? patch(Object.assign({}, p)) : p) });
    } else {
      store.saveProviders(store.getProviders().map(p => p.id === id ? patch(Object.assign({}, p)) : p));
    }
  }

  window.OC = window.OC || {};
  window.OC.providers = {
    TYPES, allProviders, getProvider, baseUrl, authHeaders,
    fetchModels, testConnection, mapError,
    webSearch, searchContextBlock, limitBlocked,
    streamChat, estTokens,
    saveMine, deleteMine, saveSystem, deleteSystem,
    defaultProvider, markDefault, setHealth,
  };
})();
