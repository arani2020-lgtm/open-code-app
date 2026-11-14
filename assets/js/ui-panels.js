/* Open Code — Panels: settings, profile, prompts, usage, admin, provider editor. Designer: Abbas Sedigh */
(function () {
  const { t } = OC.i18n;
  const { U, store } = OC;
  const el = OC.el, $ = OC.$, $$ = OC.$$;
  const I = OC.ui_icons;

  function page(contentHTML) {
    OC.renderShell(contentHTML);
  }

  /* ================= SETTINGS ================= */
  OC.routes["/settings"] = function () {
    const user = store.currentUser();
    if (!user) return;
    const sys = store.sysSettings();
    const s = store.getUserSettings();
    const stats = store.storageStats();

    const secAppearance =
      '<div class="panel"><h3>' + t("appearance") + "</h3><p class='p-desc'>" + t("theme") + " · " + t("language") + " · " + t("animation") + "</p>" +
      '<div class="stack">' +
      '<div class="field"><label>' + t("themeChoice") + "</label>" +
      '<div class="segmented" id="seg-theme">' +
      '<button data-v="system" class="' + (s.theme === "system" ? "active" : "") + '">' + t("themeSystem") + "</button>" +
      '<button data-v="light" class="' + (s.theme === "light" ? "active" : "") + '">' + t("themeLight") + "</button>" +
      '<button data-v="dark" class="' + (s.theme === "dark" ? "active" : "") + '">' + t("themeDark") + "</button>" +
      "</div></div>" +
      '<div class="field"><label>' + t("defaultLanguage") + "</label>" +
      '<div class="segmented" id="seg-lang">' +
      '<button data-v="fa" class="' + (OC.i18n.locale() === "fa" ? "active" : "") + '">' + t("persian") + "</button>" +
      '<button data-v="en" class="' + (OC.i18n.locale() === "en" ? "active" : "") + '">' + t("english") + "</button>" +
      "</div></div>" +
      '<div class="field"><label>' + t("animation") + "</label>" +
      '<div class="segmented" id="seg-anim">' +
      ["word", "fade", "soft", "none"].map(a =>
        '<button data-v="' + a + '" class="' + (s.animation === a ? "active" : "") + '">' +
        t(a === "word" ? "animWord" : a === "fade" ? "animFade" : a === "soft" ? "animSoft" : "animNone") + "</button>").join("") +
      "</div></div>" +
      "</div></div>";

    const secGeneration =
      '<div class="panel"><h3>' + t("generationDefaults") + "</h3><p class='p-desc'>" + t("usageNote") + "</p>" +
      '<div class="stack">' +
      '<div class="field"><label>' + t("temperature") + ' — <span id="temp-val">' + U.faNum(s.temperature) + "</span></label><input type='range' id='rng-temp' min='0' max='" + (sys.temperatureMax || 2) + "' step='0.1' value='" + s.temperature + "'></div>" +
      '<div class="grid-2">' +
      '<div class="field"><label>' + t("maxOutputTokens") + "</label><input class='input' id='in-maxtok' type='number' min='64' max='128000' value='" + s.maxOutputTokens + "'></div>" +
      '<div class="field"><label>' + t("contextWindow") + "</label><input class='input' id='in-ctx' type='number' min='1024' max='2000000' step='1024' value='" + s.contextWindow + "'></div>" +
      "</div>" +
      '<div class="check-row"><label class="switch"><input type="checkbox" id="ck-ws" ' + (s.webSearchDefault ? "checked" : "") + '><span class="track"></span></label><span>' + t("webSearchDefault") + "</span></div>" +
      '<button class="btn btn-primary" id="btn-save-gen">' + t("save") + "</button>" +
      "</div></div>";

    const secProviders =
      '<div class="panel"><h3>' + t("aiProviders") + "</h3><p class='p-desc'>" + t("privacyKeyNote") + "</p>" +
      '<div id="prov-list" class="stack"></div>' +
      '<div class="flex" style="margin-top:12px"><button class="btn btn-primary" id="btn-add-prov">' + I.plus + t("addProvider") + "</button></div>" +
      "</div>";

    const secData =
      '<div class="panel"><h3>' + t("data") + "</h3><p class='p-desc'>" + t("keysNeverExported") + "</p>" +
      '<div class="stack">' +
      '<div class="flex" style="flex-wrap:wrap;gap:8px">' +
      '<button class="btn" id="exp-all">' + I.download + t("exportAll") + "</button>" +
      '<button class="btn" id="exp-chats">' + t("exportChatsOnly") + "</button>" +
      '<button class="btn" id="exp-settings">' + t("exportSettingsOnly") + "</button>" +
      '<button class="btn" id="imp-btn">' + I.restore + t("restore") + "</button>" +
      '<input type="file" id="imp-file" accept=".json" class="hidden">' +
      "</div>" +
      '<div class="field"><label>' + t("storageSpace") + "</label>" +
      '<div class="progress"><div style="width:' + Math.min(100, Math.round(stats.totalBytes / 5e6 * 100)) + '%"></div></div>' +
      '<span class="hint">' + U.fmtBytes(stats.totalBytes) + " / 5 MB</span></div>" +
      '<div class="check-row"><label class="switch"><input type="checkbox" id="ck-shortcuts-info" checked disabled><span class="track" style="opacity:.5"></span></label><button class="btn btn-sm" id="btn-shortcuts">' + t("keyboardShortcuts") + "</button></div>" +
      "</div></div>";

    const secPrivacy =
      '<div class="panel"><h3>' + t("privacy") + "</h3><p class='p-desc'>" + t("privacyChatsNote") + "</p>" +
      '<ul style="margin:0;padding-inline-start:18px;color:rgb(var(--muted));font-size:13.5px">' +
      "<li>" + t("privacyKeyNote") + "</li>" +
      "<li>" + t("privacyFilesNote") + "</li>" +
      "<li>" + t("filesReadOnce") + " — " + t("fileNotKept") + "</li>" +
      "<li>" + t("systemPromptsHint") + "</li>" +
      "</ul></div>";

    page(
      '<div class="settings-wrap">' +
      '<h2 class="page-title">' + t("settings") + '</h2><p class="page-sub">' + t("appName") + " · " + t("version") + " " + U.faNum("1.0.0") + " · " + t("designer") + ": " + "عباس صدیق" + "</p>" +
      secAppearance + secGeneration + secProviders + secData + secPrivacy +
      "</div>"
    );

    // bindings
    $$("#seg-theme button").forEach(b => b.onclick = () => {
      store.saveUserSettings({ theme: b.dataset.v });
      OC.applyTheme(b.dataset.v);
      OC.routes["/settings"]();
    });
    $$("#seg-lang button").forEach(b => b.onclick = () => {
      OC.i18n.setLocale(b.dataset.v);
      OC.routes["/settings"]();
    });
    $$("#seg-anim button").forEach(b => b.onclick = () => {
      store.saveUserSettings({ animation: b.dataset.v });
      OC.routes["/settings"]();
    });
    const rng = $("#rng-temp");
    rng.oninput = () => { $("#temp-val").textContent = U.faNum(rng.value); };
    $("#btn-save-gen").onclick = () => {
      store.saveUserSettings({
        temperature: parseFloat(rng.value),
        maxOutputTokens: parseInt($("#in-maxtok").value, 10) || 2048,
        contextWindow: parseInt($("#in-ctx").value, 10) || 8192,
        webSearchDefault: $("#ck-ws").checked,
      });
      toast(t("settingsSaved"), "ok");
    };
    $("#btn-add-prov").onclick = () => providerEditor(null, false, () => OC.routes["/settings"]());
    renderProviderList("#prov-list", false, () => OC.routes["/settings"]());
    $("#exp-all").onclick = () => doExport("all");
    $("#exp-chats").onclick = () => doExport("chats");
    $("#exp-settings").onclick = () => doExport("settings");
    $("#imp-btn").onclick = () => $("#imp-file").click();
    $("#imp-file").onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const data = JSON.parse(rd.result);
          const res = store.importData(data);
          toast(t("restoreDone") + " — " + U.faNum(res.addedChats) + " ✓" + (res.skipped ? " · " + U.faNum(res.skipped) + " " + t("chatIgnored") : ""), "ok");
          OC.renderSidebar();
        } catch (err) {
          toast(err.message === "invalid" ? t("restoreInvalid") : t("invalidFile"), "err");
        }
      };
      rd.readAsText(f);
      e.target.value = "";
    };
    $("#btn-shortcuts").onclick = () => OC.showShortcuts();
  };

  function doExport(scope) {
    const data = store.exportData(scope);
    U.download("open-code-" + scope + "-" + new Date().toISOString().slice(0, 10) + ".json",
      new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    toast(t("downloaded"), "ok");
  }

  /* ---------- provider list (shared) ---------- */
  function renderProviderList(sel, system, onChange) {
    const box = $(sel);
    if (!box) return;
    const list = system
      ? (store.sysSettings().systemProviders || []).map(p => Object.assign({}, p, { system: true }))
      : store.getProviders().map(p => Object.assign({}, p, { system: false }));
    if (!list.length) {
      box.innerHTML = '<p class="muted small">' + t("noProviderYet") + "</p>";
      return;
    }
    box.innerHTML = list.map(p => {
      const dot = p.health === "ok" ? "dot-ok" : p.health === "err" ? "dot-err" : "dot-off";
      const typeLabel = (OC.providers.TYPES.find(x => x.id === p.type) || {}).label || p.type;
      const models = (p.models || []);
      return '<div class="attach-chip" style="max-width:100%;padding:10px 14px;display:flex">' +
        '<span class="dot ' + dot + '"></span>' +
        '<div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13.5px">' + U.esc(p.name || typeLabel) +
        (p.default ? ' <span class="badge badge-brand">' + t("isDefault") + "</span>" : "") +
        (p.system ? ' <span class="badge badge-accent">' + t("systemProviders") + "</span>" : "") +
        '</div><div class="muted small" style="direction:ltr;text-align:start">' + U.esc(typeLabel) + " · " + U.esc(OC.providers.baseUrl(p) || "—") + "</div>" +
        '<div class="muted small">' + t("models") + ": " + U.faNum(models.length) +
        (p.lastCheck ? " · " + t("lastCheck") + ": " + U.fmtTime(p.lastCheck) : "") +
        (p.lastMs ? " · " + U.faNum(p.lastMs) + "ms" : "") +
        "</div></div>" +
        '<div class="flex" style="gap:4px">' +
        '<button class="icon-btn" data-test="' + p.id + '" title="' + t("testConnection") + '">' + I.plug + "</button>" +
        '<button class="icon-btn" data-edit="' + p.id + '" title="' + t("edit") + '">' + I.edit + "</button>" +
        '<button class="icon-btn" data-del="' + p.id + '" title="' + t("delete") + '">' + I.trash + "</button>" +
        "</div></div>";
    }).join("");

    $$("[data-edit]", box).forEach(b => b.onclick = () => {
      const p = list.find(x => x.id === b.dataset.edit);
      providerEditor(p, p.system, onChange);
    });
    $$("[data-del]", box).forEach(b => b.onclick = async () => {
      if (!(await OC.confirm({ title: t("deleteProviderMsg"), message: t("deleteProviderMsg"), danger: true }))) return;
      const p = list.find(x => x.id === b.dataset.del);
      if (p.system) OC.providers.deleteSystem(p.id); else OC.providers.deleteMine(p.id);
      toast(t("providerDeleted"), "ok");
      store.logActivity(store.currentUser().email, p.system ? "delete-system-provider" : "delete-provider", p.name);
      onChange && onChange();
    });
    $$("[data-test]", box).forEach(b => b.onclick = async () => {
      const p = list.find(x => x.id === b.dataset.test);
      b.innerHTML = I.refresh;
      b.classList.add("active");
      try {
        const r = await OC.providers.testConnection(p);
        OC.providers.setHealth(p.id, p.system, true, r.ms);
        toast(t("connected") + " (" + U.faNum(r.ms) + "ms)", "ok");
      } catch (e) {
        OC.providers.setHealth(p.id, p.system, false);
        toast(e.message || t("connectionFailed"), "err");
      }
      onChange && onChange();
    });
  }

  /* ---------- provider editor ---------- */
  function providerEditor(existing, system, onSaved) {
    const isNew = !existing;
    const p = existing ? JSON.parse(JSON.stringify(existing)) : { id: U.uid(), type: "openai", name: "", base: "", keyEnc: "", orgId: "", headers: [], models: [], default: false };
    const typeOpts = OC.providers.TYPES.map(tp =>
      '<option value="' + tp.id + '"' + (p.type === tp.id ? " selected" : "") + ">" + U.esc(tp.label) + "</option>").join("");

    const body = el(
      '<div class="stack">' +
      '<div class="grid-2">' +
      '<div class="field"><label>' + t("providerName") + '</label><input class="input" id="pe-name" placeholder="OpenAI / Groq / …" value="' + U.esc(p.name) + '"></div>' +
      '<div class="field"><label>' + t("providerType") + '</label><select class="input" id="pe-type">' + typeOpts + "</select></div>" +
      "</div>" +
      '<div class="field"><label>' + t("apiBaseUrl") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="pe-base" dir="ltr" style="text-align:left" value="' + U.esc(p.base || "") + '" placeholder="https://api.example.com/v1"></div>' +
      '<div class="field"><label>' + t("apiKey") + (p.keyEnc ? ' <span class="badge badge-ok">' + t("connected").replace("اتصال ", "کلید ") + '</span>' : "") + '</label><input class="input" id="pe-key" type="password" dir="ltr" style="text-align:left" placeholder="' + (p.keyEnc ? t("keepKeyEmpty") : "sk-…") + '"><span class="hint">' + t("privacyKeyNote") + "</span></div>" +
      '<div class="field"><label>' + t("orgId") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="pe-org" dir="ltr" style="text-align:left" value="' + U.esc(p.orgId || "") + '"></div>' +
      '<div class="field"><label>' + t("customHeaders") + '</label><div id="pe-headers" class="stack"></div><button class="btn btn-sm" id="pe-add-header">' + I.plus + t("addHeader") + "</button></div>" +
      '<div class="check-row"><label class="switch"><input type="checkbox" id="pe-default" ' + (p.default ? "checked" : "") + '><span class="track"></span></label><span>' + t("defaultProvider") + "</span></div>" +
      '<div class="field"><label>' + t("models") + ' (<span id="pe-mcount">' + U.faNum((p.models || []).length) + '</span>)</label>' +
      '<div class="flex" style="flex-wrap:wrap;gap:6px" id="pe-models"></div>' +
      '<div class="flex" style="gap:6px">' +
      '<button class="btn btn-sm" id="pe-fetch">' + I.refresh + t("refreshModels") + "</button>" +
      '<button class="btn btn-sm" id="pe-test">' + I.plug + t("testConnection") + "</button>" +
      '<input class="input" id="pe-manual" placeholder="' + t("manualModelId") + '" style="flex:1;min-width:120px;direction:ltr;text-align:left">' +
      '<button class="btn btn-sm" id="pe-add-model">' + I.plus + "</button>" +
      "</div>" +
      '<span class="hint">' + t("noModelsHint") + "</span></div>" +
      "</div>"
    );

    const save = el('<button class="btn btn-primary">' + t("save") + "</button>");
    const cancel = el('<button class="btn">' + t("cancel") + "</button>");
    const m = OC.modal({
      title: system ? (isNew ? t("addSystemProvider") : t("editSystemProvider")) : (isNew ? t("addProvider") : t("editProvider")),
      body, foot: [cancel, save], wide: true,
    });

    const headersBox = $("#pe-headers", body);
    function addHeaderRow(name, value) {
      const row = el('<div class="flex"><input class="input" placeholder="' + t("headerName") + '" value="' + U.esc(name || "") + '" style="flex:1"><input class="input" placeholder="' + t("headerValue") + '" value="' + U.esc(value || "") + '" style="flex:1" dir="ltr"><button class="icon-btn">' + I.x + "</button></div>");
      $("button.icon-btn", row).onclick = () => row.remove();
      headersBox.appendChild(row);
    }
    (p.headers || []).forEach(h => addHeaderRow(h.name, h.value));
    $("#pe-add-header", body).onclick = () => addHeaderRow("", "");

    const modelsBox = $("#pe-models", body);
    function renderModels() {
      modelsBox.innerHTML = (p.models || []).map(mm =>
        '<span class="attach-chip" style="direction:ltr"><span class="aname">' + U.esc(mm) + '</span><button class="icon-btn" style="width:22px;height:22px" data-mm="' + U.esc(mm) + '">' + I.x + "</button></span>").join("") ||
        '<span class="muted small">' + t("noModels") + "</span>";
      $$("[data-mm]", modelsBox).forEach(b => b.onclick = () => {
        p.models = p.models.filter(x => x !== b.dataset.mm);
        renderModels();
        $("#pe-mcount", body).textContent = U.faNum(p.models.length);
      });
    }
    renderModels();
    $("#pe-add-model", body).onclick = () => {
      const v = $("#pe-manual", body).value.trim();
      if (!v) return;
      if (!p.models.includes(v)) p.models.push(v);
      $("#pe-manual", body).value = "";
      renderModels();
      $("#pe-mcount", body).textContent = U.faNum(p.models.length);
    };
    $("#pe-manual", body).addEventListener("keydown", e => { if (e.key === "Enter") $("#pe-add-model", body).click(); });

    $("#pe-fetch", body).onclick = async () => {
      gather();
      $("#pe-fetch", body).disabled = true;
      try {
        const models = await OC.providers.fetchModels(p);
        p.models = models.slice(0, 400);
        renderModels();
        $("#pe-mcount", body).textContent = U.faNum(p.models.length);
        toast(t("modelsUpdated") + " (" + U.faNum(p.models.length) + ")", "ok");
      } catch (e) {
        toast(e.message || t("providerNoModels"), "err");
      }
      $("#pe-fetch", body).disabled = false;
    };
    $("#pe-test", body).onclick = async () => {
      gather();
      $("#pe-test", body).disabled = true;
      try {
        const r = await OC.providers.testConnection(p);
        toast(t("connected") + " (" + U.faNum(r.ms) + "ms)", "ok");
      } catch (e) {
        toast(e.message || t("connectionFailed"), "err");
      }
      $("#pe-test", body).disabled = false;
    };

    function gather() {
      p.name = $("#pe-name", body).value.trim();
      p.type = $("#pe-type", body).value;
      p.base = $("#pe-base", body).value.trim();
      p.orgId = $("#pe-org", body).value.trim();
      p.default = $("#pe-default", body).checked;
      const kv = $$("#pe-headers .flex", body).map(row => {
        const ins = $$("input", row);
        return { name: ins[0].value.trim(), value: ins[1].value.trim() };
      }).filter(h => h.name);
      p.headers = kv;
      const keyRaw = $("#pe-key", body).value;
      if (keyRaw) p.keyEnc = store.encKey(keyRaw);
      // auto-fill base from type if empty
      if (!p.base) {
        const tp = OC.providers.TYPES.find(x => x.id === p.type);
        p.base = tp.base || "";
      }
    }

    cancel.onclick = () => m.close();
    save.onclick = () => {
      gather();
      if (!p.name) p.name = (OC.providers.TYPES.find(x => x.id === p.type) || {}).label || "Provider";
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
    const user = store.currentUser();
    if (!user) return;
    page(
      '<div class="settings-wrap">' +
      '<h2 class="page-title">' + t("profile") + '</h2><p class="page-sub">' + t("memberSince") + ": " + U.fmtDate(user.createdAt) + "</p>" +
      '<div class="panel"><h3>' + t("editProfile") + "</h3>" +
      '<div class="flex" style="margin:10px 0 16px">' + OC.avatarHTML(user, 56) +
      '<div><input type="file" id="av-file" accept="image/*" class="hidden"><button class="btn btn-sm" id="av-btn">' + I.edit + t("avatar") + '</button> <button class="btn btn-sm btn-ghost" id="av-rm">' + t("remove") + "</button>" +
      '<div class="hint">' + t("privacyNote") + "</div></div></div>" +
      '<div class="stack">' +
      '<div class="grid-2"><div class="field"><label>' + t("fullName") + '</label><input class="input" id="pf-name" value="' + U.esc(user.name) + '"></div>' +
      '<div class="field"><label>' + t("lastName") + '</label><input class="input" id="pf-last" value="' + U.esc(user.last || "") + '"></div></div>' +
      '<div class="field"><label>' + t("email") + '</label><input class="input" id="pf-email" value="' + U.esc(user.email) + '" disabled></div>' +
      '<div class="field"><label>' + t("username") + '</label><input class="input" id="pf-user" value="' + U.esc(user.username || "") + '" disabled></div>' +
      '<div class="field"><label>' + t("phone") + '</label><input class="input" id="pf-phone" inputmode="tel" value="' + U.esc(user.phone || "") + '" placeholder="09xxxxxxxxx"></div>' +
      '<div class="err-text hidden" id="pf-err"></div>' +
      '<button class="btn btn-primary" id="pf-save" style="align-self:flex-start">' + t("save") + "</button>" +
      "</div></div>" +
      '<div class="panel"><h3>' + t("changePassword") + "</h3>" +
      '<div class="stack">' +
      '<div class="field"><label>' + t("currentPassword") + '</label><input class="input" type="password" id="cp-old"></div>' +
      '<div class="field"><label>' + t("newPassword") + '</label><input class="input" type="password" id="cp-new"><span class="hint">' + t("minChars") + "</span></div>" +
      '<div class="err-text hidden" id="cp-err"></div>' +
      '<button class="btn btn-primary" id="cp-save" style="align-self:flex-start">' + t("changePassword") + "</button>" +
      "</div></div>" +
      '<div class="panel danger-zone"><h3>' + t("dangerZone") + "</h3><p class='p-desc'>" + t("deleteAccountWarn") + "</p>" +
      '<button class="btn btn-danger" id="acc-del">' + I.trash + t("deleteAccount") + "</button></div>" +
      "</div>"
    );

    $("#av-btn").onclick = () => $("#av-file").click();
    $("#av-file").onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      if (f.size > 2 * 1024 * 1024) { toast(t("fileTooBig"), "err"); return; }
      const rd = new FileReader();
      rd.onload = () => {
        // downscale to 128px
        const img = new Image();
        img.onload = () => {
          const cv = document.createElement("canvas");
          const s = Math.min(img.width, img.height);
          cv.width = cv.height = 128;
          const cx = cv.getContext("2d");
          cx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 128, 128);
          const users = store.getUsers();
          const u = users.find(x => x.id === user.id);
          u.avatar = cv.toDataURL("image/jpeg", 0.85);
          store.saveUsers(users);
          toast(t("profileSaved"), "ok");
          OC.routes["/profile"]();
        };
        img.src = rd.result;
      };
      rd.readAsDataURL(f);
    };
    $("#av-rm").onclick = () => {
      const users = store.getUsers();
      const u = users.find(x => x.id === user.id);
      u.avatar = "";
      store.saveUsers(users);
      OC.routes["/profile"]();
    };
    $("#pf-save").onclick = () => {
      const err = $("#pf-err");
      err.classList.add("hidden");
      const name = $("#pf-name").value.trim();
      const last = $("#pf-last").value.trim();
      const phone = $("#pf-phone").value.trim();
      if (!name) { err.textContent = t("fillFields"); err.classList.remove("hidden"); return; }
      if (phone && !store.validPhone(phone)) { err.textContent = t("invalidPhone"); err.classList.remove("hidden"); return; }
      const users = store.getUsers();
      const u = users.find(x => x.id === user.id);
      u.name = name; u.last = last; u.phone = phone;
      store.saveUsers(users);
      store.logActivity(user.email, "profile", "");
      toast(t("profileSaved"), "ok");
      OC.renderSidebar();
    };
    $("#cp-save").onclick = () => {
      const err = $("#cp-err");
      err.classList.add("hidden");
      const oldP = $("#cp-old").value;
      const newP = $("#cp-new").value;
      const users = store.getUsers();
      const u = users.find(x => x.id === user.id);
      if (u.passHash !== store.hashPass(oldP, user.email)) { err.textContent = t("currentPassWrong"); err.classList.remove("hidden"); return; }
      if (!store.passOk(newP)) { err.textContent = t("passWeak") + " — " + t("minChars"); err.classList.remove("hidden"); return; }
      u.passHash = store.hashPass(newP, user.email);
      store.saveUsers(users);
      store.logActivity(user.email, "password-change", "");
      toast(t("passwordChanged"), "ok");
      $("#cp-old").value = ""; $("#cp-new").value = "";
    };
    $("#acc-del").onclick = async () => {
      if (!(await OC.confirm({ title: t("deleteAccountMsg"), message: t("deleteAccountWarn"), danger: true, okText: t("delete") }))) return;
      const uid = user.id;
      store.saveUsers(store.getUsers().filter(x => x.id !== uid));
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
    };
  };

  function renderRouteHash() { window.dispatchEvent(new HashChangeEvent("hashchange")); }

  /* ================= PROMPTS ================= */
  OC.routes["/prompts"] = function () {
    const user = store.currentUser();
    if (!user) return;
    const list = store.getPrompts();
    page(
      '<div class="settings-wrap">' +
      '<h2 class="page-title">' + t("prompts") + '</h2><p class="page-sub">' + t("systemPromptsHint") + "</p>" +
      '<div class="panel"><div class="flex" style="margin-bottom:12px"><h3 style="margin:0">' + t("customPrompts") + '</h3><div class="spacer"></div><button class="btn btn-primary btn-sm" id="pr-new">' + I.plus + t("newPrompt") + "</button></div>" +
      '<div class="stack" id="pr-list"></div></div>' +
      "</div>"
    );
    renderPromptList();
    $("#pr-new").onclick = () => promptEditor(null);
  };

  function renderPromptList() {
    const box = $("#pr-list");
    if (!box) return;
    const list = store.getPrompts();
    if (!list.length) { box.innerHTML = '<p class="muted small">' + t("noPromptsYet") + "</p>"; return; }
    box.innerHTML = "";
    list.forEach(p => {
      const row = el('<div class="attach-chip" style="max-width:100%;display:flex;align-items:flex-start">' +
        '<div style="flex:1;min-width:0"><div style="font-weight:700">' + U.esc(p.title) + (p.default ? ' <span class="badge badge-brand">' + t("defaultPrompt") + "</span>" : "") + '</div><div class="muted small" style="white-space:pre-wrap;max-height:60px;overflow:hidden">' + U.esc(p.text.slice(0, 180)) + "…</div></div>" +
        '<div class="flex" style="gap:4px">' +
        '<button class="icon-btn" data-use title="' + t("useInChat") + '">' + I.code + "</button>" +
        '<button class="icon-btn" data-def title="' + t("setDefault") + '">' + I.check + "</button>" +
        '<button class="icon-btn" data-edit title="' + t("edit") + '">' + I.edit + "</button>" +
        '<button class="icon-btn" data-del title="' + t("delete") + '">' + I.trash + "</button></div></div>");
      $("[data-use]", row).onclick = () => {
        OC._pendingPrompt = p;
        navigate("/chat");
        renderRouteHash();
      };
      $("[data-def]", row).onclick = () => {
        const all = store.getPrompts().map(x => Object.assign({}, x, { default: x.id === p.id }));
        store.savePrompts(all);
        renderPromptList();
        toast(t("defaultPrompt") + " ✓", "ok");
      };
      $("[data-edit]", row).onclick = () => promptEditor(p);
      $("[data-del]", row).onclick = async () => {
        if (!(await OC.confirm({ title: t("deletePromptMsg"), message: t("deletePromptMsg"), danger: true }))) return;
        store.savePrompts(store.getPrompts().filter(x => x.id !== p.id));
        renderPromptList();
      };
      box.appendChild(row);
    });
  }

  function promptEditor(existing) {
    const p = existing ? Object.assign({}, existing) : { id: U.uid(), title: "", text: "", default: false };
    const body = el('<div class="stack">' +
      '<div class="field"><label>' + t("rename") + '</label><input class="input" id="pt-title" value="' + U.esc(p.title) + '"></div>' +
      '<div class="field"><label>' + t("promptText") + '</label><textarea class="input" id="pt-text" rows="6">' + U.esc(p.text) + "</textarea></div>" +
      '<div class="check-row"><label class="switch"><input type="checkbox" id="pt-default" ' + (p.default ? "checked" : "") + '><span class="track"></span></label><span>' + t("defaultPrompt") + "</span></div>" +
      "</div>");
    const save = el('<button class="btn btn-primary">' + t("save") + "</button>");
    const cancel = el('<button class="btn">' + t("cancel") + "</button>");
    const m = OC.modal({ title: existing ? t("edit") : t("newPrompt"), body, foot: [cancel, save] });
    cancel.onclick = () => m.close();
    save.onclick = () => {
      p.title = $("#pt-title", body).value.trim() || (OC.i18n.locale() === "fa" ? "پرامپت" : "Prompt");
      p.text = $("#pt-text", body).value;
      p.default = $("#pt-default", body).checked;
      const list = store.getPrompts();
      if (p.default) for (const x of list) x.default = false;
      const i = list.findIndex(x => x.id === p.id);
      if (i >= 0) list[i] = p; else list.push(p);
      store.savePrompts(list);
      store.logActivity(store.currentUser().email, "prompt", p.title);
      toast(t("promptSaved"), "ok");
      m.close();
      OC.routes["/prompts"]();
    };
  }

  /* ================= USAGE ================= */
  OC.routes["/usage"] = function () {
    const user = store.currentUser();
    if (!user) return;
    const usage = store.getUsage();
    const sys = store.sysSettings();
    // last 14 days
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const ts = Date.now() - i * 864e5;
      const dk = store.dayKey(ts);
      days.push({ dk, label: new Date(ts).toLocaleDateString(OC.i18n.locale() === "fa" ? "fa-IR" : "en-US", { day: "numeric", month: "short" }), ...(usage.days[dk] || { req: 0, tin: 0, tout: 0, fail: 0 }) });
    }
    const maxReq = Math.max(1, ...days.map(d => d.req + d.fail));
    const bars = days.map(d => {
      const h = Math.round((d.req / maxReq) * 100);
      const hf = Math.round((d.fail / maxReq) * 100);
      return '<div class="bar-col" title="' + d.dk + ": " + d.req + '"><div class="bar" style="height:' + h + '%' + (d.req ? "" : ";opacity:.25") + '"></div><span class="bar-label">' + d.label + "</span></div>";
    }).join("");

    const lim = sys.dailyRequestLimit || 0;
    const todayReq = store.todayReqCount();

    page(
      '<div class="settings-wrap">' +
      '<h2 class="page-title">' + t("usage") + '</h2><p class="page-sub">' + t("reportedByProviders") + "</p>" +
      '<div class="grid-3">' +
      '<div class="stat-card"><div class="st-label">' + t("requests") + "</div><div class='st-value'>" + U.faNum(usage.totals.req) + '</div><div class="st-hint">' + t("today_") + ": " + U.faNum(todayReq) + (lim ? " / " + U.faNum(lim) : "") + "</div></div>" +
      '<div class="stat-card"><div class="st-label">' + t("inputTokens") + "</div><div class='st-value'>" + U.faNum(usage.totals.tin) + "</div></div>" +
      '<div class="stat-card"><div class="st-label">' + t("outputTokens") + "</div><div class='st-value'>" + U.faNum(usage.totals.tout) + "</div></div>" +
      "</div>" +
      '<div class="panel" style="margin-top:16px"><h3>' + t("activityRequests") + "</h3><p class='p-desc'>" + t("failedRequests") + ": " + U.faNum(usage.totals.fail) + " · " + t("usageNote") + "</p>" +
      '<div class="bars">' + bars + "</div></div>" +
      '<div class="panel"><h3>' + t("dailyLimit") + "</h3><p class='p-desc'>" + (lim ? U.faNum(lim) + " " + t("requestsPerDay") : t("unlimited")) + (lim && todayReq >= lim ? " — " + t("limitReached") : "") + "</p>" +
      '<div class="progress"><div style="width:' + (lim ? Math.min(100, Math.round(todayReq / lim * 100)) : 8) + '%"></div></div></div>' +
      "</div>"
    );
  };

  /* ================= ADMIN ================= */
  OC.routes["/admin"] = function () {
    const user = store.currentUser();
    if (!user) return;
    if (user.role !== "admin") { page('<div class="settings-wrap"><div class="panel"><h3>' + t("noAccess") + "</h3></div></div>"); return; }
    page(
      '<div class="settings-wrap">' +
      '<h2 class="page-title">' + t("admin") + '</h2><p class="page-sub">' + t("users") + " · " + t("systemSettings") + " · " + t("eventsLog") + "</p>" +
      '<div class="tabs" id="admin-tabs">' +
      '<button data-tab="dash" class="active">' + I.chart + t("dashboard") + "</button>" +
      '<button data-tab="users">' + I.user + t("users") + "</button>" +
      '<button data-tab="prov">' + I.plug + t("systemProviders") + "</button>" +
      '<button data-tab="set">' + I.settings + t("systemSettings") + "</button>" +
      '<button data-tab="log">' + I.activity + t("events") + "</button>" +
      "</div>" +
      '<div id="admin-body"></div>' +
      "</div>"
    );
    $$("#admin-tabs button").forEach(b => b.onclick = () => {
      $$("#admin-tabs button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      adminTab(b.dataset.tab);
    });
    adminTab("dash");
  };

  function adminTab(tab) {
    const body = $("#admin-body");
    if (!body) return;
    const users = store.getUsers();
    const convsAll = users.map(u => (store.K.convs(u.id) ? store.kvGet(store.K.convs(u.id), []) : [])).flat();

    if (tab === "dash") {
      const sys = store.sysSettings();
      const msgs = convsAll.reduce((a, c) => a + (c.messages ? c.messages.length : 0), 0);
      const provCount = (sys.systemProviders || []).length + store.getProviders().length;
      const acts = store.getActivity().slice(0, 8);
      body.innerHTML =
        '<div class="grid-3">' +
        '<div class="stat-card"><div class="st-label">' + t("totalUsers") + "</div><div class='st-value'>" + U.faNum(users.length) + "</div></div>" +
        '<div class="stat-card"><div class="st-label">' + t("totalChats") + "</div><div class='st-value'>" + U.faNum(convsAll.length) + '</div><div class="st-hint">' + t("totalMessages") + ": " + U.faNum(msgs) + "</div></div>" +
        '<div class="stat-card"><div class="st-label">' + t("totalProviders") + "</div><div class='st-value'>" + U.faNum(provCount) + "</div></div>" +
        "</div>" +
        '<div class="panel" style="margin-top:16px"><h3>' + t("overview") + "</h3><p class='p-desc'></p>" +
        '<div class="stack">' +
        '<div class="check-row"><label class="switch"><input type="checkbox" id="sys-maint" ' + (sys.maintenance ? "checked" : "") + '><span class="track"></span></label><span>' + t("maintenanceMode") + "</span></div>" +
        '<div class="check-row"><label class="switch"><input type="checkbox" id="sys-signup" ' + (sys.signupOpen ? "checked" : "") + '><span class="track"></span></label><span>' + t("signupOpen") + "</span></div>" +
        "</div></div>" +
        '<div class="panel"><h3>' + t("eventsLog") + "</h3>" +
        (acts.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + t("value") + '</th><th>' + t("action") + '</th><th>' + t("events") + '</th></tr></thead><tbody>' +
          acts.map(a => "<tr><td class='small'>" + U.fmtTime(a.ts) + " · " + U.fmtDate(a.ts) + "</td><td>" + U.esc(a.actor) + "</td><td>" + U.esc(a.type) + "</td></tr>").join("") + "</tbody></table></div>"
          : '<p class="muted small">' + t("noEvents") + "</p>") +
        "</div>";
      $("#sys-maint").onchange = e => { store.saveSysSettings({ maintenance: e.target.checked }); toast(t("saved"), "ok"); };
      $("#sys-signup").onchange = e => { store.saveSysSettings({ signupOpen: e.target.checked }); toast(t("saved"), "ok"); };
    }

    if (tab === "users") {
      body.innerHTML =
        '<div class="flex" style="margin-bottom:12px;flex-wrap:wrap">' +
        '<input class="input" id="u-search" placeholder="' + t("searchUserByEmail") + '" style="max-width:280px">' +
        '<div class="spacer"></div>' +
        '<button class="btn" id="u-export">' + I.download + t("exportUsers") + "</button>" +
        "</div>" +
        '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + t("profile") + '</th><th>' + t("email") + '</th><th>' + t("phone") + '</th><th>' + t("status") + '</th><th>' + t("memberSince") + '</th><th>' + t("actions") + "</th></tr></thead><tbody id='u-rows'></tbody></table></div>" +
        '<p class="hint" style="margin-top:8px">' + t("exportHint") + "</p>";
      const renderRows = (q) => {
        const rows = users.filter(u => !q || (u.email + u.name + (u.last || "") + (u.username || "")).toLowerCase().includes(q.toLowerCase()));
        $("#u-rows").innerHTML = rows.map(u =>
          "<tr data-uid='" + u.id + "'>" +
          "<td><div class='flex'>" + OC.avatarHTML(u, 30) + "<div><div style='font-weight:650'>" + U.esc(u.name + " " + (u.last || "")) + (u.role === "admin" ? ' <span class="badge badge-brand">' + t("adminRole") + "</span>" : "") + (u.seeded ? ' <span class="badge">' + t("adminRole") + "</span>" : "") + '</div><div class="muted small">' + U.esc(u.username || "—") + "</div></div></div></td>" +
          "<td style='direction:ltr;text-align:start'>" + U.esc(u.email) + "</td>" +
          "<td style='direction:ltr;text-align:start'>" + U.esc(u.phone || "—") + "</td>" +
          "<td>" + (u.disabled ? '<span class="badge badge-danger">' + t("disabled") + "</span>" : '<span class="badge badge-ok">' + t("active") + "</span>") + "</td>" +
          "<td class='small'>" + U.fmtDate(u.createdAt) + "</td>" +
          "<td><div class='flex' style='gap:2px'>" +
          '<button class="icon-btn" data-role title="' + (u.role === "admin" ? t("demoteAdmin") : t("promoteAdmin")) + '">' + I.shield + "</button>" +
          '<button class="icon-btn" data-dis title="' + (u.disabled ? t("enableUser") : t("disableUser")) + '">' + (u.disabled ? I.check : I.x) + "</button>" +
          '<button class="icon-btn" data-pass title="' + t("resetPassword") + '">' + I.key + "</button>" +
          '<button class="icon-btn" data-delu title="' + t("deleteUser") + '">' + I.trash + "</button>" +
          "</div></td></tr>"
        ).join("") || '<tr><td colspan="6" class="muted small">' + t("noChatFound") + "</td></tr>";

        $$("#u-rows tr[data-uid]").forEach(tr => {
          const u = store.findUser(tr.dataset.uid);
          const adminEditingSelf = u.id === store.currentUser().id;
          $("[data-role]", tr).onclick = () => {
            const us = store.getUsers();
            const x = us.find(v => v.id === u.id);
            x.role = x.role === "admin" ? "user" : "admin";
            store.saveUsers(us);
            store.logActivity(store.currentUser().email, "user-role", x.email + " → " + x.role);
            adminTab("users");
            toast(t("userUpdated"), "ok");
          };
          $("[data-dis]", tr).onclick = () => {
            const us = store.getUsers();
            const x = us.find(v => v.id === u.id);
            x.disabled = !x.disabled;
            store.saveUsers(us);
            store.logActivity(store.currentUser().email, x.disabled ? "user-disable" : "user-enable", x.email);
            adminTab("users");
            toast(t("userUpdated"), "ok");
          };
          $("[data-pass]", tr).onclick = async () => {
            const v = await OC.promptDialog({ title: t("resetPassword"), label: t("newPassword") + " (" + t("minChars") + ")", okText: t("save") });
            if (v == null) return;
            if (!store.passOk(v)) { toast(t("passWeak"), "err"); return; }
            const us = store.getUsers();
            const x = us.find(y => y.id === u.id);
            x.passHash = store.hashPass(v, x.email);
            store.saveUsers(us);
            store.logActivity(store.currentUser().email, "reset-pass", x.email);
            toast(t("passwordChanged"), "ok");
          };
          $("[data-delu]", tr).onclick = async () => {
            if (adminEditingSelf) { toast(t("noAccess"), "err"); return; }
            if (!(await OC.confirm({ title: t("deleteUser"), message: u.email, danger: true }))) return;
            store.saveUsers(store.getUsers().filter(x => x.id !== u.id));
            store.kvDel(store.K.convs(u.id)); store.kvDel(store.K.providers(u.id));
            store.kvDel(store.K.prompts(u.id)); store.kvDel(store.K.usage(u.id)); store.kvDel(store.K.settings(u.id));
            store.logActivity(store.currentUser().email, "user-delete", u.email);
            adminTab("users");
            toast(t("userDeleted"), "ok");
          };
        });
      };
      renderRows("");
      $("#u-search").addEventListener("input", U.debounce(e => renderRows(e.target.value), 200));
      $("#u-export").onclick = () => {
        const rows = [["name", "last", "phone", "email", "role", "created"]];
        for (const u of users) rows.push([u.name, u.last || "", u.phone || "", u.email, u.role, new Date(u.createdAt).toISOString()]);
        U.download("open-code-users.csv", new Blob([OC.exporter.toCSV(rows)], { type: "text/csv" }));
        store.logActivity(store.currentUser().email, "export-users", users.length + " rows");
        toast(t("downloaded"), "ok");
      };
    }

    if (tab === "prov") {
      body.innerHTML =
        '<div class="panel"><h3>' + t("systemProviders") + "</h3><p class='p-desc'>" + t("systemProvidersDesc") + "</p>" +
        '<div class="stack" id="sysprov-list"></div>' +
        '<div class="flex" style="margin-top:12px"><button class="btn btn-primary" id="sysprov-add">' + I.plus + t("addSystemProvider") + "</button></div></div>";
      renderProviderList("#sysprov-list", true, () => adminTab("prov"));
      $("#sysprov-add").onclick = () => providerEditor(null, true, () => adminTab("prov"));
    }

    if (tab === "set") {
      const sys = store.sysSettings();
      body.innerHTML =
        '<div class="panel"><h3>' + t("systemSettings") + "</h3>" +
        '<div class="stack">' +
        '<div class="grid-2">' +
        '<div class="field"><label>' + t("dailyLimit") + " (" + t("requestsPerDay") + ' — 0=' + t("unlimited") + ')</label><input class="input" id="ss-limit" type="number" min="0" value="' + (sys.dailyRequestLimit || 0) + '"></div>' +
        '<div class="field"><label>' + t("maxFileSize") + " (" + t("megabytes") + ')</label><input class="input" id="ss-file" type="number" min="1" max="50" value="' + (sys.maxFileSizeMB || 10) + '"></div>' +
        '<div class="field"><label>' + t("allowedExtensions") + ' <span class="muted">(comma)</span></label><input class="input" id="ss-ext" dir="ltr" value="' + (sys.allowedExtensions || []).join(",") + '"></div>' +
        '<div class="field"><label>' + t("trashRetention") + '</label><select class="input" id="ss-trash">' +
        [7, 14, 30].map(d => '<option value="' + d + '"' + (sys.trashDays === d ? " selected" : "") + ">" + (d === 7 ? t("days7") : d === 14 ? t("days14") : t("days30")) + "</option>").join("") +
        "</select></div>" +
        '<div class="field"><label>' + t("maxSilence") + " (" + t("ms") + ')</label><input class="input" id="ss-silence" type="number" min="5000" step="5000" value="' + (sys.silenceTimeoutMs || 60000) + '"></div>' +
        '<div class="field"><label>' + t("temperature") + " (" + t("maxTemperature") + ')</label><input class="input" id="ss-tmax" type="number" min="0.5" max="2" step="0.5" value="' + (sys.temperatureMax || 2) + '"></div>' +
        "</div>" +
        '<div class="field"><label>' + t("webSearch") + ' — API Key (Tavily) <span class="muted">(' + (sys.webSearchKeyEnc ? "✓" : t("optional")) + ')</span></label><input class="input" id="ss-wskey" type="password" dir="ltr" placeholder="tvly-…"></div>' +
        '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-ws" ' + (sys.webSearchEnabled ? "checked" : "") + '><span class="track"></span></label><span>' + t("webSearchDefault") + "</span></div>" +
        '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-maint2" ' + (sys.maintenance ? "checked" : "") + '><span class="track"></span></label><span>' + t("maintenanceMode") + "</span></div>" +
        '<div class="check-row"><label class="switch"><input type="checkbox" id="ss-signup2" ' + (sys.signupOpen ? "checked" : "") + '><span class="track"></span></label><span>' + t("signupOpen") + "</span></div>" +
        '<button class="btn btn-primary" id="ss-save" style="align-self:flex-start">' + t("saveChanges") + "</button>" +
        "</div></div>";
      $("#ss-save").onclick = () => {
        const patch = {
          dailyRequestLimit: parseInt($("#ss-limit").value, 10) || 0,
          maxFileSizeMB: OC.U.clamp(parseInt($("#ss-file").value, 10) || 10, 1, 50),
          allowedExtensions: $("#ss-ext").value.split(",").map(x => x.trim().toLowerCase()).filter(Boolean),
          trashDays: parseInt($("#ss-trash").value, 10) || 14,
          silenceTimeoutMs: parseInt($("#ss-silence").value, 10) || 60000,
          temperatureMax: parseFloat($("#ss-tmax").value) || 2,
          webSearchEnabled: $("#ss-ws").checked,
          maintenance: $("#ss-maint2").checked,
          signupOpen: $("#ss-signup2").checked,
        };
        const wsKey = $("#ss-wskey").value;
        if (wsKey) patch.webSearchKeyEnc = store.encKey(wsKey);
        store.saveSysSettings(patch);
        store.logActivity(store.currentUser().email, "sys-settings", "");
        toast(t("settingsSaved"), "ok");
      };
    }

    if (tab === "log") {
      const acts = store.getActivity();
      body.innerHTML =
        '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>' + t("events") + '</th><th>' + t("action") + '</th><th>' + t("value") + "</th></tr></thead><tbody>" +
        (acts.length ? acts.map((a, i) =>
          "<tr><td class='small muted'>" + U.faNum(i + 1) + "</td><td>" + U.esc(a.actor) + "</td><td>" + U.esc(a.type) + "</td><td class='small muted'>" + U.esc(a.details || "—") + " · " + U.fmtTime(a.ts) + " · " + U.fmtDate(a.ts) + "</td></tr>").join("")
          : '<tr><td colspan="4" class="muted small">' + t("noEvents") + "</td></tr>") +
        "</tbody></table></div>";
    }
  }

  /* ================= register routes ================= */
  OC.panels = {
    registerRoutes() {
      // routes are already assigned above by direct assignment into OC.route registry
      // (ui.js exposes `routes` via closure — re-register safely)
    },
    providerEditor,
  };
})();
