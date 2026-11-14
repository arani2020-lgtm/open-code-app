/* Open Code — UI layer: shell, router, auth, chat. Designer: Abbas Sedigh */
(function () {
  const { t } = OC.i18n;
  const { U, store } = OC;
  const el = (html) => {
    const d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  };
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ================= icons ================= */
  const I = {
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
    plug: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5M9 8V2m6 6V2M5 8h14v3a7 7 0 0 1-14 0z"/></svg>',
  };
  OC.ui_icons = I;
  OC.el = el; OC.$ = $; OC.$$ = $$;

  /* ================= logo ================= */
  function logoSVG(size) {
    return '<svg class="logo" width="' + (size || 34) + '" height="' + (size || 34) + '" viewBox="0 0 64 64"><defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#8a86ff"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#lg1)"/><path d="M22 22 14 32l8 10" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M42 22l8 10-8 10" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M35.5 19 28 45" stroke="#d6b26a" stroke-width="5" stroke-linecap="round" fill="none"/></svg>';
  }

  /* ================= toasts ================= */
  let toastBox = null;
  function toast(msg, kind) {
    if (!toastBox) { toastBox = el('<div class="toasts"></div>'); document.body.appendChild(toastBox); }
    const n = el('<div class="toast ' + (kind || "") + '">' + U.esc(msg) + "</div>");
    toastBox.appendChild(n);
    setTimeout(() => { n.style.opacity = "0"; n.style.transition = "opacity .3s"; setTimeout(() => n.remove(), 320); }, 2600);
  }
  OC.toast = toast;

  /* ================= modal ================= */
  function modal({ title, body, foot, wide, onClose }) {
    const back = el('<div class="modal-back"><div class="modal' + (wide ? " wide" : "") + '"><div class="modal-head"><h3>' + U.esc(title) + '</h3><button class="icon-btn" data-x>' + I.x + '</button></div><div class="modal-body"></div>' + (foot !== null ? '<div class="modal-foot"></div>' : "") + '</div></div>');
    const bodyEl = $(".modal-body", back);
    if (typeof body === "string") bodyEl.innerHTML = body; else bodyEl.appendChild(body);
    const footEl = $(".modal-foot", back);
    if (foot) for (const f of foot) footEl.appendChild(f);
    document.body.appendChild(back);
    const close = () => { back.remove(); onClose && onClose(); };
    $("[data-x]", back).onclick = close;
    back.addEventListener("mousedown", e => { if (e.target === back) close(); });
    return { el: back, body: bodyEl, close };
  }
  OC.modal = modal;

  function confirmDialog({ title, message, danger, okText }) {
    return new Promise(resolve => {
      const ok = el('<button class="btn ' + (danger ? "btn-danger" : "btn-primary") + '">' + U.esc(okText || t("confirm")) + "</button>");
      const cancel = el('<button class="btn">' + t("cancel") + "</button>");
      const m = modal({
        title: title || t("confirm"),
        body: '<p class="muted" style="margin:4px 0;font-size:14px">' + U.esc(message) + "</p>",
        foot: [cancel, ok],
      });
      ok.onclick = () => { m.close(); resolve(true); };
      cancel.onclick = () => { m.close(); resolve(false); };
      const prev = m.el.remove.bind(m.el);
      m.el.remove = () => { resolve(false); prev(); };
    });
  }
  OC.confirm = confirmDialog;

  /* ================= prompt dialog ================= */
  function promptDialog({ title, label, value, okText }) {
    return new Promise(resolve => {
      const inp = el('<input class="input" value="' + U.esc(value || "") + '">');
      const ok = el('<button class="btn btn-primary">' + U.esc(okText || t("save")) + "</button>");
      const cancel = el('<button class="btn">' + t("cancel") + "</button>");
      const m = modal({ title, body: '<div class="field"><label>' + U.esc(label || "") + "</label></div>", foot: [cancel, ok] });
      $(".field", m.body).appendChild(inp);
      ok.onclick = () => { const v = inp.value.trim(); m.close(); resolve(v); };
      cancel.onclick = () => { m.close(); resolve(null); };
      inp.focus(); inp.select();
      inp.addEventListener("keydown", e => { if (e.key === "Enter") ok.click(); });
    });
  }
  OC.promptDialog = promptDialog;

  /* ================= context menu ================= */
  function ctxMenu(x, y, items) {
    $$(".ctx").forEach(n => n.remove());
    const m = el('<div class="ctx"></div>');
    for (const it of items) {
      if (it === "-") { m.appendChild(el('<div class="sep"></div>')); continue; }
      const b = el('<button class="' + (it.danger ? "danger" : "") + '">' + (it.icon || "") + "<span>" + U.esc(it.label) + "</span></button>");
      b.onclick = () => { close(); it.onClick && it.onClick(); };
      m.appendChild(b);
    }
    document.body.appendChild(m);
    const r = m.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight;
    m.style.left = Math.min(x, vw - r.width - 8) + "px";
    m.style.top = Math.min(y, vh - r.height - 8) + "px";
    const close = () => { m.remove(); document.removeEventListener("mousedown", onDoc); };
    const onDoc = e => { if (!m.contains(e.target)) close(); };
    document.addEventListener("mousedown", onDoc);
    return close;
  }
  OC.ctxMenu = ctxMenu;

  function dropMenu(anchor, items, opts) {
    $$(".menu-pop").forEach(n => n.remove());
    const m = el('<div class="menu-pop"></div>');
    if (opts && opts.header) m.appendChild(el(opts.header));
    for (const it of items) {
      const b = el('<button class="mi ' + (it.danger ? "danger" : "") + '">' + (it.icon || "") + "<span>" + U.esc(it.label) + "</span></button>");
      b.onclick = () => { close(); it.onClick && it.onClick(); };
      m.appendChild(b);
    }
    document.body.appendChild(m);
    const ar = anchor.getBoundingClientRect(), r = m.getBoundingClientRect();
    const isRTLdir = OC.i18n.isRTL();
    let left = isRTLdir ? ar.left - r.width + ar.width : ar.left;
    left = Math.max(8, Math.min(left, window.innerWidth - r.width - 8));
    let top = ar.bottom + 6;
    if (top + r.height > window.innerHeight - 8) top = ar.top - r.height - 6;
    m.style.left = left + "px";
    m.style.top = Math.max(8, top) + "px";
    const close = () => { m.remove(); document.removeEventListener("mousedown", onDoc); };
    const onDoc = e => { if (!m.contains(e.target) && e.target !== anchor) close(); };
    setTimeout(() => document.addEventListener("mousedown", onDoc), 0);
    return close;
  }
  OC.dropMenu = dropMenu;

  /* ================= theme ================= */
  function applyTheme(theme) {
    const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0a0c12" : "#f7f8fb");
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const s = store.getUserSettings();
    if (s.theme === "system") applyTheme("system");
  });
  OC.applyTheme = applyTheme;

  /* ================= avatar ================= */
  function avatarHTML(user, size) {
    const s = size || 36;
    if (user && user.avatar) return '<span class="avatar" style="width:' + s + 'px;height:' + s + 'px"><img src="' + user.avatar + '" alt=""></span>';
    const ini = user && user.name ? user.name.trim().slice(0, 1) : "؟";
    return '<span class="avatar" style="width:' + s + 'px;height:' + s + 'px">' + U.esc(ini) + "</span>";
  }
  OC.avatarHTML = avatarHTML;

  /* ================= router ================= */
  const routes = {};
  OC.routes = routes;
  let currentRoute = "";
  function route(path, view) { routes[path] = view; }
  OC.route = route;
  function navigate(path) { location.hash = path; }
  OC.navigate = navigate;

  function renderRoute() {
    const user = store.currentUser();
    let hash = location.hash.replace(/^#/, "") || "/chat";
    if (!user && !hash.startsWith("/login") && !hash.startsWith("/register")) {
      hash = "/login";
      location.hash = "/login";
    }
    if (user && (hash.startsWith("/login") || hash.startsWith("/register"))) {
      hash = "/chat"; location.hash = "/chat";
    }
    // match longest prefix
    let path = hash.split("?")[0];
    let fn = routes[path];
    while (!fn && path.includes("/")) {
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
    const sb = $("#sidebar");
    if (!sb) return;
    sb.classList.add("open");
    if (!$(".side-scrim")) {
      const sc = el('<div class="side-scrim"></div>');
      sc.onclick = closeSidebar;
      document.body.appendChild(sc);
    }
  }
  function closeSidebar() {
    const sb = $("#sidebar");
    if (sb) sb.classList.remove("open");
    const sc = $(".side-scrim");
    if (sc) sc.remove();
  }
  OC.openSidebar = openSidebar;
  OC.closeSidebar = closeSidebar;

  /* ================= topbar ================= */
  function topbarHTML(user) {
    const adminLink = user && user.role === "admin" ? '<button class="icon-btn" data-nav="/admin" title="' + t("admin") + '">' + I.shield + "</button>" : "";
    return (
      '<div class="topbar">' +
      '<button class="icon-btn" id="side-toggle">' + I.menu + "</button>" +
      '<div class="brand">' + logoSVG() + '<div><div class="bname">' + t("appName") + '</div><div class="btag">' + t("tagline") + "</div></div></div>" +
      '<div class="spacer"></div>' +
      adminLink +
      '<button class="icon-btn" data-nav="/prompts" title="' + t("prompts") + '">' + I.book + "</button>" +
      '<button class="icon-btn" data-nav="/usage" title="' + t("usage") + '">' + I.chart + "</button>" +
      '<button class="icon-btn" id="top-theme" title="' + t("theme") + '">' + I.sun + "</button>" +
      '<button class="icon-btn" id="top-lang" title="' + t("language") + '">' + I.globe + "</button>" +
      '<button class="icon-btn" id="top-user">' + avatarHTML(user, 30) + "</button>" +
      "</div>"
    );
  }

  function bindTopbar(user) {
    const themeBtn = $("#top-theme");
    const s = store.getUserSettings();
    themeBtn.innerHTML = s.theme === "dark" ? I.moon : I.sun;
    themeBtn.onclick = () => {
      const cur = store.getUserSettings().theme;
      const order = { system: "dark", dark: "light", light: "system" };
      const next = order[cur] || "system";
      store.saveUserSettings({ theme: next });
      applyTheme(next);
      themeBtn.innerHTML = next === "dark" ? I.moon : I.sun;
      toast(t("theme") + ": " + (next === "system" ? t("themeSystem") : next === "dark" ? t("themeDark") : t("themeLight")));
    };
    $("#top-lang").onclick = () => {
      const cur = OC.i18n.locale();
      OC.i18n.setLocale(cur === "fa" ? "en" : "fa");
      renderRoute();
    };
    $("#side-toggle").onclick = () => {
      if (window.innerWidth <= 900) openSidebar();
      else {
        const sb = $("#sidebar");
        if (!sb) return;
        const hidden = sb.style.display === "none";
        sb.style.display = hidden ? "" : "none";
        $("#main-area").parentElement.classList.toggle("no-side", !hidden);
      }
    };
    $("#top-user").onclick = (e) => {
      dropMenu(e.currentTarget, [
        { icon: I.user, label: user.name + " " + (user.last || ""), onClick: () => navigate("/profile") },
        { icon: I.settings, label: t("settings"), onClick: () => navigate("/settings") },
        { icon: I.key, label: t("changePassword"), onClick: () => navigate("/profile") },
        "-",
        { icon: I.logout, label: t("loggedOut").replace("شدید", "شدن") || t("logout"), onClick: doLogout, danger: false },
      ], { header: '<div class="mi-user"><div class="u-name">' + U.esc(user.name + " " + (user.last || "")) + '</div><div class="u-mail small muted">' + U.esc(user.email) + "</div></div>" });
    };
    $$("[data-nav]").forEach(b => { b.onclick = () => navigate(b.dataset.nav); });
  }
  function doLogout() {
    const u = store.currentUser();
    store.logout();
    if (u) store.logActivity(u.email, "logout", "");
    toast(t("loggedOut"), "ok");
    navigate("/login");
    renderRoute();
  }

  /* ================= shell ================= */
  function renderShell(contentHTML) {
    const user = store.currentUser();
    const root = $("#root");
    root.innerHTML =
      '<div class="app" id="app-shell">' +
      '<div class="sidebar" id="sidebar"></div>' +
      topbarHTML(user) +
      '<div class="main" id="main-area">' + contentHTML + "</div>" +
      "</div>";
    bindTopbar(user);
    OC.renderSidebar();
  }
  OC.renderShell = renderShell;

  /* ================= sidebar render ================= */
  function sectionLabel(key, icon) {
    return '<div class="side-section">' + (icon || "") + t(key) + "</div>";
  }
  function groupConvs(list) {
    const now = Date.now();
    const groups = { pinned: [], fav: [], today: [], yest: [], d7: [], d30: [], older: [] };
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    const t0 = startOfToday.getTime();
    for (const c of list) {
      if (c.pinned) { groups.pinned.push(c); continue; }
      if (c.fav) { groups.fav.push(c); continue; }
      const d = c.updatedAt || c.createdAt || now;
      if (d >= t0) groups.today.push(c);
      else if (d >= t0 - 864e5) groups.yest.push(c);
      else if (d >= t0 - 7 * 864e5) groups.d7.push(c);
      else if (d >= t0 - 30 * 864e5) groups.d30.push(c);
      else groups.older.push(c);
    }
    for (const k of Object.keys(groups)) groups[k].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    return groups;
  }

  OC.renderSidebar = function () {
    const sb = $("#sidebar");
    if (!sb) return;
    const user = store.currentUser();
    if (!user) { sb.innerHTML = ""; return; }
    const q = (OC._sideQuery || "").trim();
    let convs = store.getConvs().filter(c => !c.archived && !c.trashed);
    if (q) convs = convs.filter(c => (c.title || "").toLowerCase().includes(q.toLowerCase()) ||
      c.messages && c.messages.some(m => (m.content || "").toLowerCase().includes(q.toLowerCase())));
    const archCount = store.getConvs().filter(c => c.archived && !c.trashed).length;
    const trashCount = store.getConvs().filter(c => c.trashed).length;
    const g = groupConvs(convs);

    const convItem = (c) => {
      const active = (OC._currentConvId === c.id) ? " active" : "";
      return '<div class="conv-item' + active + '" data-cid="' + c.id + '">' +
        '<span class="c-ico">' + I.code + "</span>" +
        '<span class="c-title">' + U.esc(c.title || t("newChat")) + "</span>" +
        (c.model ? "" : "") +
        '<button class="c-del" title="' + t("rename") + '" data-more="' + c.id + '">' + I.chevronDown + "</button>" +
        "</div>";
    };

    let html =
      '<div class="side-head"><button class="new-chat-btn" id="btn-new-chat">' + I.plus + "<span>" + t("newChat") + "</span></button></div>" +
      '<div class="side-search"><input class="input" id="side-q" placeholder="' + t("searchChats") + '" value="' + U.esc(q) + '"></div>' +
      '<div class="side-list" id="side-list">';
    if (q && !convs.length) html += '<div class="side-section">' + t("noChatFound") + "</div>";
    if (g.pinned.length) { html += sectionLabel("pinned", I.pin) + g.pinned.map(convItem).join(""); }
    if (g.fav.length) { html += sectionLabel("favorites", I.star) + g.fav.map(convItem).join(""); }
    for (const k of ["today", "yest", "d7", "d30", "older"]) {
      if (g[k].length) { html += sectionLabel(k) + g[k].map(convItem).join(""); }
    }
    if (!q && !convs.length) html += '<div class="side-section muted">' + t("nothingHere") + "</div>";
    html += "</div>" +
      '<div class="side-foot">' +
      (archCount ? '<button class="user-pill" data-arch="1"><span class="c-ico">' + I.archive + '</span><span class="u-name">' + t("archive") + ' <span class="badge">' + archCount + "</span></span></button>" : "") +
      (trashCount ? '<button class="user-pill" data-trash="1"><span class="c-ico">' + I.trash + '</span><span class="u-name">' + t("trash") + ' <span class="badge">' + trashCount + "</span></span></button>" : "") +
      '<button class="user-pill" id="pill-user">' + avatarHTML(user) + '<span style="min-width:0"><span class="u-name" style="display:block">' + U.esc(user.name + " " + (user.last || "")) + '</span><span class="u-mail" style="display:block">' + U.esc(user.email) + "</span></span></button>" +
      "</div>";

    sb.innerHTML = html;
    OC._sideQuery = q;

    $("#btn-new-chat").onclick = () => { OC.newChat(); closeSidebar(); };
    const qInp = $("#side-q");
    qInp.addEventListener("input", U.debounce(() => { OC._sideQuery = qInp.value; OC.renderSidebar(); const nq = $("#side-q"); if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); } }, 250));
    $$(".conv-item", sb).forEach(item => {
      const cid = item.dataset.cid;
      item.onclick = (e) => {
        if (e.target.closest("[data-more]")) return;
        navigate("/chat/" + cid);
        closeSidebar();
      };
      item.oncontextmenu = (e) => { e.preventDefault(); convMenu(e.clientX, e.clientY, cid); };
      const moreBtn = $("[data-more]", item);
      if (moreBtn) moreBtn.onclick = (e) => {
        const r = moreBtn.getBoundingClientRect();
        convMenu(r.left, r.bottom + 4, cid);
      };
    });
    const arch = $("[data-arch]", sb);
    if (arch) arch.onclick = () => { OC.showArchiveList(); };
    const trashBtn = $("[data-trash]", sb);
    if (trashBtn) trashBtn.onclick = () => { OC.showTrashList(); };
    $("#pill-user").onclick = (e) => {
      dropMenu(e.currentTarget, [
        { icon: I.user, label: t("profile"), onClick: () => navigate("/profile") },
        { icon: I.settings, label: t("settings"), onClick: () => navigate("/settings") },
        { icon: I.logout, label: t("loggedOut").replace("شدید", "شدن"), onClick: doLogout },
      ]);
    };
  };

  function convMenu(x, y, cid) {
    const c = store.getConv(cid);
    if (!c) return;
    ctxMenu(x, y, [
      { icon: I.edit, label: t("renameChat"), onClick: async () => {
        const v = await OC.promptDialog({ title: t("renameChat"), label: t("newName"), value: c.title, okText: t("save") });
        if (v) { c.title = v; store.putConv(c); OC.renderSidebar(); toast(t("chatRenamed"), "ok"); }
      } },
      c.pinned
        ? { icon: I.pin, label: t("unpin"), onClick: () => { c.pinned = false; store.putConv(c); OC.renderSidebar(); toast(t("unpinDone")); } }
        : { icon: I.pin, label: t("pin"), onClick: () => { c.pinned = true; store.putConv(c); OC.renderSidebar(); toast(t("pinnedTop"), "ok"); } },
      c.fav
        ? { icon: I.star, label: t("favoriteRemove"), onClick: () => { c.fav = false; store.putConv(c); OC.renderSidebar(); } }
        : { icon: I.star, label: t("favoriteAdd"), onClick: () => { c.fav = true; store.putConv(c); OC.renderSidebar(); } },
      "-",
      { icon: I.archive, label: t("archive"), onClick: () => { c.archived = true; store.putConv(c); OC.renderSidebar(); toast(t("archived")); } },
      { icon: I.trash, label: t("toTrash"), danger: true, onClick: async () => {
        if (await OC.confirm({ title: t("toTrash"), message: t("toTrashMsg"), danger: true, okText: t("confirm") })) {
          c.trashed = true; c.trashedAt = Date.now();
          store.putConv(c);
          if (OC._currentConvId === c.id) navigate("/chat");
          OC.renderSidebar();
          toast(t("trashed"));
        }
      } },
      "-",
      { icon: I.download, label: t("export") + " (MD)", onClick: () => OC.exportChatMd(c) },
      { icon: I.print, label: t("printView"), onClick: () => { navigate("/chat/" + c.id); setTimeout(() => window.print(), 400); } },
    ]);
  }
  OC.convMenu = convMenu;

  /* ================= archive & trash lists ================= */
  OC.showArchiveList = function () {
    const list = store.getConvs().filter(c => c.archived && !c.trashed);
    const body = el('<div class="stack"></div>');
    if (!list.length) body.appendChild(el('<p class="muted small">' + t("nothingHere") + "</p>"));
    list.forEach(c => {
      const row = el('<div class="flex"><span class="c-ico">' + I.archive + '</span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + U.esc(c.title) + '</span><button class="btn btn-sm">' + t("unarchived").replace("به فهرست ", "") + "</button></div>");
      $("button", row).onclick = () => {
        c.archived = false; store.putConv(c); OC.renderSidebar(); m.close(); toast(t("unarchived"), "ok");
      };
      body.appendChild(row);
    });
    const m = modal({ title: t("archive"), body });
  };

  OC.showTrashList = function () {
    const list = store.getConvs().filter(c => c.trashed);
    const body = el('<div class="stack"></div>');
    if (!list.length) body.appendChild(el('<p class="muted small">' + t("emptyTrash") + "</p>"));
    list.forEach(c => {
      const days = Math.max(0, Math.ceil((c.trashedAt + store.sysSettings().trashDays * 864e5 - Date.now()) / 864e5));
      const row = el('<div class="flex"><span class="c-ico">' + I.trash + '</span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + U.esc(c.title) + '</span><span class="badge small">' + U.faNum(days) + " " + t("days7").replace("۷ ", "") + '</span><button class="btn btn-sm">' + t("restore") + '</button><button class="btn btn-sm btn-soft-danger">' + t("deleteForever") + "</button></div>");
      const [bRestore, bDel] = $$("button", row);
      bRestore.onclick = () => { c.trashed = false; delete c.trashedAt; store.putConv(c); OC.renderSidebar(); m.close(); toast(t("restored"), "ok"); };
      bDel.onclick = async () => {
        if (await OC.confirm({ title: t("deleteForever"), message: t("deleteForeverMsg"), danger: true })) {
          const all = store.getConvs().filter(x => x.id !== c.id);
          store.saveConvs(all);
          OC.renderSidebar(); m.close(); toast(t("deletedForever"));
        }
      };
      body.appendChild(row);
    });
    const m = modal({ title: t("trash"), body });
  };

  /* ================= export chat ================= */
  OC.exportChatMd = function (c) {
    const md = [
      "# " + (c.title || t("newChat")),
      "",
      ...c.messages.map(m => (m.role === "user" ? "## " + t("you") : "## " + t("assistantAvatar")) + "\n\n" + (m.content || "")),
    ].join("\n\n");
    U.download((c.title || "chat").replace(/[\\/:*?"<>|]+/g, "-") + ".md", new Blob([md], { type: "text/markdown" }));
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
    $("#root").innerHTML =
      '<div class="auth-wrap">' +
      '<div class="auth-top">' +
      '<div class="spacer"></div>' +
      '<button class="icon-btn" id="top-theme">' + I.sun + '</button>' +
      '<button class="icon-btn" id="top-lang">' + I.globe + "</button>" +
      "</div>" +
      '<div class="auth-card">' + cardHTML + "</div>" +
      '<p class="auth-note">' + t("privacyNote") + "</p>" +
      "</div>";
    const themeBtn = $("#top-theme");
    const applyIcon = () => themeBtn.innerHTML = document.documentElement.classList.contains("dark") ? I.moon : I.sun;
    themeBtn.onclick = () => {
      const dark = document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", !dark);
      document.documentElement.style.colorScheme = !dark ? "dark" : "light";
      applyIcon();
    };
    applyIcon();
    $("#top-lang").onclick = () => { OC.i18n.setLocale(OC.i18n.locale() === "fa" ? "en" : "fa"); renderRoute(); };
  }

  routes["/login"] = function () {
    const sys = store.sysSettings();
    if (sys.maintenance) {
      authShell('<h1>' + t("maintenance") + '</h1><p class="sub">' + t("wait") + "</p>");
      return;
    }
    authShell(
      "<h1>" + t("welcomeBack") + "</h1>" +
      '<p class="sub">' + t("connectOwnKey") + "</p>" +
      '<form id="login-form">' +
      '<div class="field"><label>' + t("email") + " / " + t("username") + '</label><input class="input" id="f-id" autocomplete="username" required></div>' +
      '<div class="field"><label>' + t("password") + '</label><input class="input" type="password" id="f-pass" autocomplete="current-password" required></div>' +
      '<div class="err-text hidden" id="f-err"></div>' +
      '<button class="btn btn-primary btn-lg" type="submit">' + t("login") + "</button>" +
      "</form>" +
      '<p class="auth-alt">' + t("noAccount") + ' <a href="#/register">' + t("register") + "</a></p>"
    );
    $("#login-form").onsubmit = (e) => {
      e.preventDefault();
      const id = $("#f-id").value.trim();
      const pass = $("#f-pass").value;
      const err = $("#f-err");
      const user = store.findUser(id);
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
    const sys = store.sysSettings();
    if (sys.maintenance) { routes["/login"](); return; }
    if (!sys.signupOpen) {
      authShell("<h1>" + t("signupClosed") + '</h1><p class="sub">' + t("wait") + "</p>" +
        '<p class="auth-alt">' + t("haveAccount") + ' <a href="#/login">' + t("login") + "</a></p>");
      return;
    }
    authShell(
      "<h1>" + t("buildWorkspace") + "</h1>" +
      '<p class="sub">' + t("connectOwnKey") + "</p>" +
      '<form id="reg-form" class="stack">' +
      '<div class="grid-2"><div class="field"><label>' + t("fullName") + '</label><input class="input" id="f-name" required></div>' +
      '<div class="field"><label>' + t("lastName") + ' <span class="muted">(' + t("optional") + ')</span></label><input class="input" id="f-last"></div></div>' +
      '<div class="field"><label>' + t("email") + '</label><input class="input" id="f-email" type="email" required></div>' +
      '<div class="field"><label>' + t("username") + '</label><input class="input" id="f-user" required></div>' +
      '<div class="field"><label>' + t("phone") + ' <span class="muted">(' + t("iranianPhone") + ' ۰۹۱۲۱۲۳۴۵۶۷)</span></label><input class="input" id="f-phone" inputmode="tel" placeholder="09xxxxxxxxx"></div>' +
      '<div class="field"><label>' + t("password") + '</label><input class="input" type="password" id="f-pass" required><span class="hint">' + t("minChars") + "</span></div>" +
      '<div class="err-text hidden" id="f-err"></div>' +
      '<button class="btn btn-primary btn-lg" type="submit">' + t("register") + "</button>" +
      "</form>" +
      '<p class="auth-alt">' + t("haveAccount") + ' <a href="#/login">' + t("login") + "</a></p>"
    );
    $("#reg-form").onsubmit = (e) => {
      e.preventDefault();
      const err = $("#f-err");
      err.classList.add("hidden");
      const name = $("#f-name").value.trim();
      const last = $("#f-last").value.trim();
      const email = $("#f-email").value.trim().toLowerCase();
      const username = $("#f-user").value.trim().toLowerCase();
      const phone = $("#f-phone").value.trim();
      const pass = $("#f-pass").value;
      let msg = "";
      if (!name || !email || !username || !pass) msg = t("fillFields");
      else if (!store.validEmail(email)) msg = t("invalidEmail");
      else if (!store.passOk(pass)) msg = t("passWeak") + " — " + t("minChars");
      else if (phone && !store.validPhone(phone)) msg = t("invalidPhone");
      else if (store.getUsers().some(u => u.email.toLowerCase() === email)) msg = t("emailTaken");
      else if (store.getUsers().some(u => (u.username || "").toLowerCase() === username)) msg = t("usernameTaken");
      if (msg) { err.textContent = msg; err.classList.remove("hidden"); return; }
      const user = {
        id: U.uid(), email, username, name, last, phone,
        passHash: store.hashPass(pass, email),
        role: "user", avatar: "", createdAt: Date.now(), disabled: false,
      };
      const users = store.getUsers();
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
  let streamHandle = null;
  let pendingFiles = [];

  routes["/chat"] = function (hash) {
    const convId = hash.split("/")[2] || null;
    OC._currentConvId = convId;
    renderShell('<div class="chat-layout" id="chat-root"></div>');
    OC.renderSidebar();
    renderChat(convId);
    if (window.innerWidth <= 900) closeSidebar();
  };

  function currentConv() {
    return OC._currentConvId ? store.getConv(OC._currentConvId) : null;
  }

  function renderChat(convId) {
    const root = $("#chat-root");
    if (!root) return;
    const conv = convId ? currentConv() : null;
    if (convId && !conv) { navigate("/chat"); return; }

    const user = store.currentUser();
    const provs = OC.providers.allProviders();
    const sys = store.sysSettings();
    const settings = store.getUserSettings();

    // model selector options
    let selOptions = "";
    const defP = OC.providers.defaultProvider();
    for (const p of provs) {
      for (const m of (p.models || [])) {
        const sel = (conv && conv.model === p.id + "::" + m) ? " selected" : "";
        selOptions += '<option value="' + U.esc(p.id + "::" + m) + '"' + sel + ">" + U.esc((p.name || p.type) + " · " + m) + "</option>";
      }
    }
    const canSearch = sys.webSearchEnabled;
    const searchOn = conv ? !!conv.webSearch : !!OC._pendingSearch;

    root.innerHTML =
      '<div class="chat-scroll" id="chat-scroll"><div class="chat-inner" id="chat-inner"></div></div>' +
      '<div class="composer-wrap"><div class="composer" id="composer">' +
      '<div class="pending-strip hidden" id="pending-strip"></div>' +
      '<textarea id="composer-input" rows="1" placeholder="' + t("messagePlaceholder") + '"></textarea>' +
      '<div class="composer-row">' +
      '<button class="icon-btn" id="btn-attach" title="' + t("attach") + '">' + I.paperclip + "</button>" +
      '<input type="file" id="file-input" multiple class="hidden">' +
      (canSearch ? '<button class="icon-btn' + (searchOn ? " active" : "") + '" id="btn-websearch" title="' + (searchOn ? t("webSearchOn") : t("webSearchOff")) + '">' + I.globeSearch + "</button>" : "") +
      '<button class="icon-btn" id="btn-deliver" title="' + t("projectDelivery") + '">' + I.package + "</button>" +
      '<div class="spacer"></div>' +
      (provs.length
        ? '<div class="model-pick"><select id="model-select">' + (selOptions || '<option value="">' + t("defaultModel") + "</option>") + "</select></div>"
        : '<span class="badge badge-warn">' + t("addProviderFirst") + "</span>") +
      '<button class="send-btn" id="btn-send">' + I.send + "</button>" +
      "</div></div></div>";

    renderMessages(conv);

    const input = $("#composer-input");
    input.addEventListener("input", () => {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 180) + "px";
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendCurrent(); }
    });
    $("#btn-send").onclick = sendCurrent;
    $("#btn-attach").onclick = () => $("#file-input").click();
    $("#file-input").onchange = onFilesPicked;
    const wsBtn = $("#btn-websearch");
    if (wsBtn) wsBtn.onclick = () => {
      const c = currentConv() || {};
      c.webSearch = !searchOn;
      if (c.id) store.putConv(c);
      else OC._pendingSearch = c.webSearch;
      wsBtn.classList.toggle("active", c.webSearch);
      wsBtn.title = c.webSearch ? t("webSearchOn") : t("webSearchOff");
      toast(c.webSearch ? t("webSearchOn") : t("webSearchOff"));
    };
    const deliverBtn = $("#btn-deliver");
    if (deliverBtn) deliverBtn.onclick = () => OC.deliverProject(currentConv());

    if (window.innerWidth > 900) input.focus();
  }

  function onFilesPicked(e) {
    const sys = store.sysSettings();
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    const maxB = (sys.maxFileSizeMB || 10) * 1024 * 1024;
    const exts = sys.allowedExtensions || [];
    for (const f of files) {
      const ext = (f.name.split(".").pop() || "").toLowerCase();
      if (exts.length && !exts.includes(ext)) { toast(t("fileTypeUnsupported") + ": ." + ext, "err"); continue; }
      if (f.size > maxB) { toast(t("fileTooBig") + " (" + f.name + ")", "err"); continue; }
      if (pendingFiles.length >= 5) { toast(t("fileTooMany"), "err"); break; }
      const item = { id: U.uid(), name: f.name, size: f.size, type: f.type, ext };
      if (f.type.startsWith("image/")) {
        const rd = new FileReader();
        rd.onload = () => { item.dataUrl = rd.result; renderPending(); };
        rd.readAsDataURL(f);
      } else if (/\.(txt|md|json|csv|html|css|js|ts|py|xml|svg|yml|yaml)$/i.test(f.name)) {
        const rd = new FileReader();
        rd.onload = () => { item.text = String(rd.result || "").slice(0, 20000); renderPending(); };
        rd.readAsText(f);
      }
      pendingFiles.push(item);
    }
    renderPending();
  }

  function renderPending() {
    const strip = $("#pending-strip");
    if (!strip) return;
    if (!pendingFiles.length) { strip.classList.add("hidden"); strip.innerHTML = ""; return; }
    strip.classList.remove("hidden");
    strip.innerHTML = pendingFiles.map(f =>
      '<span class="attach-chip">' +
      (f.dataUrl ? '<img src="' + f.dataUrl + '">' : I.file) +
      '<span class="aname">' + U.esc(f.name) + "</span>" +
      '<span class="muted small">' + U.fmtBytes(f.size) + "</span>" +
      '<button class="icon-btn" style="width:24px;height:24px" data-rm="' + f.id + '">' + I.x + "</button></span>"
    ).join("");
    $$("[data-rm]", strip).forEach(b => {
      b.onclick = () => { pendingFiles = pendingFiles.filter(f => f.id !== b.dataset.rm); renderPending(); };
    });
  }

  /* ---------- message rendering ---------- */
  function renderMessages(conv) {
    const inner = $("#chat-inner");
    if (!inner) return;
    if (!conv || !conv.messages.length) {
      inner.innerHTML = emptyStateHTML();
      $$(".sugg", inner).forEach(b => {
        b.onclick = () => {
          const inp = $("#composer-input");
          if (inp) { inp.value = b.dataset.q; inp.dispatchEvent(new Event("input")); inp.focus(); }
        };
      });
      return;
    }
    inner.innerHTML = conv.messages.map((m, i) => messageHTML(m, i)).join("");
    const sc = $("#chat-scroll");
    sc.scrollTop = sc.scrollHeight;
    bindMessageActions(conv);
  }

  function emptyStateHTML() {
    return (
      '<div class="empty-state">' +
      OC.brandLogo(72) +
      "<h2>" + t("welcomeBack") + "</h2>" +
      "<p>" + t("askAnything") + "</p>" +
      '<div class="sugg-grid">' +
      '<button class="sugg" data-q="' + U.esc(t("sugg1")) + '"><span class="s-ico">' + I.book + '</span><span class="s-title">' + t("sugg1t") + "</span><br>" + t("sugg1") + "</button>" +
      '<button class="sugg" data-q="' + U.esc(t("sugg2")) + '"><span class="s-ico">' + I.chart + '</span><span class="s-title">' + t("sugg2t") + "</span><br>" + t("sugg2") + "</button>" +
      '<button class="sugg" data-q="' + U.esc(t("sugg3")) + '"><span class="s-ico">' + I.edit + '</span><span class="s-title">' + t("sugg3t") + "</span><br>" + t("sugg3") + "</button>" +
      '<button class="sugg" data-q="' + U.esc(t("sugg4")) + '"><span class="s-ico">' + I.file + '</span><span class="s-title">' + t("sugg4t") + "</span><br>" + t("sugg4") + "</button>" +
      "</div>" +
      (OC.providers.allProviders().length ? "" : '<p class="muted small" style="margin-top:18px">' + t("demoModeHint") + "</p>") +
      "</div>"
    );
  }

  function messageHTML(m, idx) {
    const user = store.currentUser();
    const isUser = m.role === "user";
    const avatar = isUser ? avatarHTML(user, 34) : '<span class="avatar" style="width:34px;height:34px;background:linear-gradient(135deg,#4f46e5,#8a86ff);color:#fff">' + I.bolt + "</span>";
    let attachHTML = "";
    if (m.attachments && m.attachments.length) {
      attachHTML = '<div class="attachments">' + m.attachments.map(a =>
        '<span class="attach-chip">' + (a.dataUrl ? '<img src="' + a.dataUrl + '">' : I.file) + '<span class="aname">' + U.esc(a.name) + "</span></span>"
      ).join("") + "</div>";
    }
    let metaHTML = "";
    if (!isUser && (m.usage || m.estimated || m.searched)) {
      metaHTML = '<div class="meta-row">' +
        (m.usage ? "<span>" + t("inputTokens") + ": " + U.faNum(m.usage.tin) + " · " + t("outputTokens") + ": " + U.faNum(m.usage.tout) + (m.estimated ? ' <span class="badge">' + t("estimated") + "</span>" : "") + "</span>" : "") +
        (m.searched ? '<span class="badge badge-brand">' + t("webSearch") + "</span>" : "") +
        "</div>";
      if (m.sources && m.sources.length) {
        metaHTML += '<div class="meta-row"><span>' + t("sources") + ':</span>' + m.sources.slice(0, 5).map(s =>
          '<a href="' + U.esc(s.url) + '" target="_blank" rel="noopener" class="small">' + U.esc(s.title || s.url) + "</a>").join(" · ") + "</div>";
      }
    }
    if (m.error) metaHTML += '<div class="meta-row"><span class="badge badge-danger">' + U.esc(m.error) + "</span></div>";
    const body = isUser
      ? '<div class="bubble">' + U.esc(m.content).replace(/\n/g, "<br>") + "</div>"
      : '<div class="bubble md" data-mi="' + idx + '">' + (OC.markdown.render(m.content || "").html || "<span class='muted'>…</span>") + "</div>";
    const actions = isUser ? "" :
      '<div class="msg-actions">' +
      '<button class="icon-btn" data-act="copy" title="' + t("copyAnswer") + '">' + I.copy + "</button>" +
      '<button class="icon-btn" data-act="regen" title="' + t("regenerate") + '">' + I.refresh + "</button>" +
      '<button class="icon-btn" data-act="good" title="' + t("goodAnswer") + '">' + I.check + "</button>" +
      '<button class="icon-btn" data-act="bad" title="' + t("badAnswer") + '">' + I.x + "</button>" +
      '<button class="icon-btn" data-act="del" title="' + t("deleteMessage") + '">' + I.trash + "</button>" +
      "</div>";
    return '<div class="msg ' + (isUser ? "user" : "assistant") + '" data-idx="' + idx + '">' +
      avatar + '<div class="msg-body">' + body + attachHTML + metaHTML + actions + "</div></div>";
  }

  function bindMessageActions(conv) {
    $$("#chat-inner .msg").forEach(msgEl => {
      const idx = +msgEl.dataset.idx;
      const m = conv.messages[idx];
      $$("[data-act]", msgEl).forEach(b => {
        const act = b.dataset.act;
        if (act === "copy-code") {
          b.onclick = () => { U.copy(conv._lastBlocks ? conv._lastBlocks[+b.dataset.cb].code : ""); toast(t("copied"), "ok"); };
          return;
        }
        b.onclick = async () => {
          if (act === "copy") { await U.copy(m.content); toast(t("copied"), "ok"); }
          else if (act === "regen") { regenerate(idx); }
          else if (act === "good" || act === "bad") {
            m.rating = act;
            store.putConv(conv);
            toast(act === "good" ? t("goodAnswer") : t("badAnswer"), act === "good" ? "ok" : "");
          }
          else if (act === "del") {
            if (await OC.confirm({ title: t("deleteMessage"), message: t("deleteMessage") + "؟", danger: true })) {
              conv.messages.splice(idx, 1);
              store.putConv(conv);
              renderMessages(conv);
              OC.renderSidebar();
            }
          }
        };
      });
      // copy-code buttons inside markdown bubbles
      $$("[data-act='copy-code']", msgEl).forEach(b => {
        b.onclick = () => {
          const blocks = OC.markdown.render(m.content || "").codeBlocks;
          const cb = blocks[+b.dataset.cb];
          if (cb) { U.copy(cb.code); toast(t("copied"), "ok"); }
        };
      });
    });
    $("#chat-inner").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-act='copy-code']");
      if (!btn) return;
    });
  }

  /* ---------- send ---------- */
  function pickModel() {
    const sel = $("#model-select");
    let pick = sel && sel.value;
    if (!pick) {
      const p = OC.providers.defaultProvider();
      if (!p) return null;
      pick = p.id + "::" + ((p.models && p.models[0]) || "gpt-4o-mini");
    }
    const [pid, model] = pick.split("::");
    const p = OC.providers.getProvider(pid);
    return p ? { provider: p, model: model || "gpt-4o-mini" } : null;
  }

  function sendCurrent() {
    const conv = currentConv();
    const input = $("#composer-input");
    const text = input.value.trim();
    if (!text || streamHandle) return;
    const files = pendingFiles.slice();

    let c = conv;
    if (!c) {
      c = {
        id: U.uid(), title: text.slice(0, 40), messages: [],
        createdAt: Date.now(), updatedAt: Date.now(),
        webSearch: !!OC._pendingSearch,
      };
      OC._pendingSearch = false;
      if (OC._pendingPrompt) {
        c.promptId = OC._pendingPrompt.id;
        OC._pendingPrompt = null;
        toast(t("useInChat") + " ✓", "ok");
      }
      const list = store.getConvs();
      list.unshift(c);
      store.saveConvs(list);
      OC._currentConvId = c.id;
      // update hash without full rerender
      history.replaceState(null, "", "#/chat/" + c.id);
    }
    const msg = { id: U.uid(), role: "user", content: text, ts: Date.now() };
    if (files.length) msg.attachments = files;
    c.messages.push(msg);
    store.putConv(c);
    input.value = "";
    input.style.height = "auto";
    pendingFiles = [];
    renderPending();

    // inline text-file contents into context
    let contextText = text;
    for (const f of files) {
      if (f.text) contextText += "\n\n[" + f.name + "]\n" + f.text.slice(0, 8000);
      else if (f.dataUrl) contextText += "\n\n[" + (OC.i18n.locale() === "fa" ? "تصویر پیوست" : "attached image") + ": " + f.name + "]";
    }

    respond(c, contextText, files);
  }

  function regenerate(idx) {
    const conv = currentConv();
    if (!conv || streamHandle) return;
    // find preceding user message
    let userIdx = -1;
    for (let i = idx - 1; i >= 0; i--) if (conv.messages[i].role === "user") { userIdx = i; break; }
    if (userIdx < 0) return;
    const u = conv.messages[userIdx];
    // remove messages after user message
    conv.messages = conv.messages.slice(0, userIdx + 1);
    store.putConv(conv);
    renderMessages(conv);
    let contextText = u.content;
    for (const f of (u.attachments || [])) {
      if (f.text) contextText += "\n\n[" + f.name + "]\n" + f.text.slice(0, 8000);
    }
    respond(conv, contextText, u.attachments || []);
  }

  async function respond(conv, userText, files) {
    const inner = $("#chat-inner");
    const user = store.currentUser();

    // build placeholder assistant message (streaming)
    const aMsg = { id: U.uid(), role: "assistant", content: "", ts: Date.now(), model: "", searched: false };
    const streamingEl = el('<div class="msg assistant"><span class="avatar" style="background:linear-gradient(135deg,#4f46e5,#8a86ff);color:#fff">' + I.bolt + '</span><div class="msg-body"><div class="bubble md" id="stream-bubble"><span class="typing"><i></i><i></i><i></i></span></div></div></div>');
    inner.appendChild(streamingEl);
    const sc = $("#chat-scroll");
    sc.scrollTop = sc.scrollHeight;
    if (window.innerWidth <= 900) closeSidebar();

    // no provider → demo mode
    const pick = pickModel();
    if (!pick) {
      demoRespond(conv, aMsg, streamingEl, userText);
      return;
    }
    aMsg.model = pick.model;

    // web search
    let sources = null;
    if (conv.webSearch) {
      try {
        const rs = await OC.providers.webSearch(userText);
        sources = rs;
        aMsg.searched = true;
        userText += OC.providers.searchContextBlock(rs);
      } catch (e) {
        toast(e.message || t("webSearchOff"), "err");
      }
    }

    // build messages with system prompt
    const settings = store.getUserSettings();
    const msgs = [];
    const defPrompt = conv.promptId
      ? (store.getPrompts().find(x => x.id === conv.promptId) || null)
      : OC.promptsDef();
    if (defPrompt) msgs.push({ role: "system", content: defPrompt.text });
    // context window: last N messages
    const maxCtx = settings.contextWindow || 8192;
    let used = 0;
    const hist = [];
    for (let i = conv.messages.length - 1; i >= 0; i--) {
      const m = conv.messages[i];
      if (m.role === "assistant" && m === aMsg) continue;
      const len = (m.content || "").length;
      if (used + len > maxCtx * 3 && hist.length) break;
      used += len;
      hist.unshift({ role: m.role, content: m.content });
    }
    msgs.push(...hist.slice(0, -1)); // exclude the just-pushed user message dup
    msgs.push({ role: "user", content: userText });

    const bubble = $("#stream-bubble", streamingEl);
    let raw = "";
    let lastPaint = 0;
    const settingsAnim = store.getUserSettings().animation;

    streamHandle = OC.providers.streamChat({
      provider: pick.provider,
      model: pick.model,
      messages: msgs,
      temperature: settings.temperature,
      maxTokens: settings.maxOutputTokens,
      onDelta(full, piece) {
        raw = full;
        const now = Date.now();
        if (now - lastPaint > 90) {
          lastPaint = now;
          if (bubble) bubble.innerHTML = U.esc(raw).replace(/\n/g, "<br>") + '<span class="cursor-blink"></span>';
          if (sc.scrollHeight - sc.scrollTop - sc.clientHeight < 160) sc.scrollTop = sc.scrollHeight;
        }
      },
      onDone({ usage, estimated, tin, tout }) {
        streamHandle = null;
        aMsg.content = raw;
        aMsg.usage = { tin: tin || 0, tout: tout || 0 };
        aMsg.estimated = !!estimated;
        aMsg.sources = sources;
        conv.messages.push(aMsg);
        store.putConv(conv);
        store.recordUsage({ tin: tin || 0, tout: tout || 0, estimated, provider: pick.provider.id, model: pick.model });
        store.logActivity(user.email, "chat", pick.model);
        finishStream(conv, streamingEl, aMsg);
      },
      onError(e) {
        streamHandle = null;
        aMsg.content = raw;
        aMsg.error = e.message;
        conv.messages.push(aMsg);
        store.putConv(conv);
        store.recordUsage({ fail: true });
        finishStream(conv, streamingEl, aMsg);
        toast(e.message || t("errorOccurred"), "err");
      },
      onAbort(partial) {
        streamHandle = null;
        aMsg.content = partial || raw;
        if (partial) {
          conv.messages.push(aMsg);
          store.putConv(conv);
        }
        finishStream(conv, streamingEl, aMsg);
        toast(t("stopped"));
      },
    });

    // swap send button to stop
    const sendBtn = $("#btn-send");
    if (sendBtn) {
      sendBtn.classList.add("stop");
      sendBtn.innerHTML = I.stop;
      sendBtn.onclick = () => { if (streamHandle) streamHandle.stop(); };
    }
  }

  function finishStream(conv, streamingEl, aMsg) {
    const sendBtn = $("#btn-send");
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
    const bubble = $("#stream-bubble", streamingEl);
    const isFa = OC.i18n.locale() === "fa";
    let reply;
    if (/کد|code|function|برنامه|اسکریپت|script/i.test(userText)) {
      reply = (isFa
        ? "در حالت نمایشی هستم، اما نمونه‌ی کد زیر را می‌بینید:\n\n```js\n// نمونه: جمع اعداد آرایه\nfunction sum(numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum([1, 2, 3])); // 6\n```\n\nبرای پاسخ واقعی، یک سرویس‌دهنده و کلید API اضافه کنید."
        : "This is demo mode. A sample code block:\n\n```js\nfunction sum(numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum([1, 2, 3])); // 6\n```\n\nAdd a provider with an API key for real answers.");
    } else {
      reply = (isFa
        ? "پیام شما دریافت شد:\n\n> " + userText.slice(0, 200) + "\n\nدر **حالت نمایشی** هستم؛ پاسخ‌ها شبیه‌سازی می‌شوند.\n\n| قدم | کار |\n| --- | --- |\n| ۱ | افزودن سرویس‌دهنده از تنظیمات |\n| ۲ | وارد کردن کلید API |\n| ۳ | انتخاب مدل و شروع گفت‌وگو |\n\nپس از افزودن سرویس‌دهنده، همین گفت‌وگو با مدل واقعی ادامه پیدا می‌کند."
        : "Message received:\n\n> " + userText.slice(0, 200) + "\n\nYou are in **demo mode**; answers are simulated.\n\n| Step | Action |\n| --- | --- |\n| 1 | Add a provider in settings |\n| 2 | Enter the API key |\n| 3 | Pick a model and start chatting |");
    }
    const words = reply.split(/(\s+)/);
    let i = 0;
    const sc = $("#chat-scroll");
    const timer = setInterval(() => {
      i += 2;
      const partial = words.slice(0, i).join("");
      if (bubble) bubble.innerHTML = U.esc(partial) + '<span class="cursor-blink"></span>';
      if (sc.scrollHeight - sc.scrollTop - sc.clientHeight < 160) sc.scrollTop = sc.scrollHeight;
      if (i >= words.length) {
        clearInterval(timer);
        streamHandle = null;
        aMsg.content = reply;
        aMsg.estimated = true;
        aMsg.usage = { tin: OC.providers.estTokens([{ content: userText }]), tout: OC.providers.estTokens([{ content: reply }]) };
        conv.messages.push(aMsg);
        store.putConv(conv);
        store.recordUsage({ tin: aMsg.usage.tin, tout: aMsg.usage.tout, estimated: true });
        finishStream(conv, streamingEl, aMsg);
      }
    }, 40);
    const sendBtn = $("#btn-send");
    if (sendBtn) {
      sendBtn.classList.add("stop");
      sendBtn.innerHTML = I.stop;
      sendBtn.onclick = () => { clearInterval(timer); streamHandle = null; sendBtn.classList.remove("stop"); sendBtn.innerHTML = I.send; sendBtn.onclick = sendCurrent; toast(t("stopped")); };
    }
  }

  /* ---------- project delivery ---------- */
  OC.deliverProject = async function (conv) {
    if (!conv || !conv.messages.length) { toast(t("noCodeBlocks"), "err"); return; }
    const blocks = [];
    for (const m of conv.messages) {
      if (m.role !== "assistant") continue;
      blocks.push(...OC.markdown.render(m.content || "").codeBlocks);
    }
    if (!blocks.length) {
      const m = OC.modal({ title: t("projectDelivery"), body: "<p class='muted'>" + t("noCodeBlocksDesc") + "</p>" });
      return;
    }
    const { blob, safeTitle, manifest } = OC.exporter.buildProjectZip({
      title: conv.title, messages: conv.messages, codeBlocks: blocks,
    });
    U.download(safeTitle + ".zip", blob);
    store.logActivity(store.currentUser().email, "export-project", manifest.length + " files");
    const m = OC.modal({
      title: t("packageReady"),
      body: '<p class="muted small" style="margin:0">' + t("filesCount") + ": " + U.faNum(manifest.length) + "</p>" +
        '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>' + t("files") + '</th><th>KB</th></tr></thead><tbody>' +
        manifest.map((f, i) => "<tr><td>" + U.faNum(i + 1) + "</td><td style='direction:ltr;text-align:start'>" + U.esc(f.file) + "</td><td>" + U.faNum(Math.round(f.bytes / 102.4) / 10) + "</td></tr>").join("") +
        "</tbody></table></div>",
      foot: [el('<button class="btn btn-primary">' + t("downloaded") + " ✓</button>")],
    });
    toast(t("packageDownloaded"), "ok");
  };

  /* ================= prompts defaults bridge ================= */
  OC.promptsDef = function () {
    const list = store.getPrompts();
    return list.find(p => p.default) || null;
  };

  /* ================= keyboard shortcuts ================= */
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); const q = $("#side-q"); if (q) { openSidebar(); q.focus(); } }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "o") { e.preventDefault(); OC.newChat(); }
    if ((e.ctrlKey || e.metaKey) && e.key === ",") { e.preventDefault(); navigate("/settings"); }
    if ((e.ctrlKey || e.metaKey) && e.key === "/") { e.preventDefault(); showShortcuts(); }
    if (e.key === "Escape") { $$(".modal-back").forEach(m => m.remove()); $$(".ctx").forEach(m => m.remove()); $$(".menu-pop").forEach(m => m.remove()); }
  });

  function showShortcuts() {
    const row = (k, d) => '<tr><td><kbd>' + k + '</kbd></td><td>' + d + "</td></tr>";
    OC.modal({
      title: t("keyboardShortcuts"),
      body: '<div class="tbl-wrap"><table class="tbl"><tbody>' +
        row("Ctrl/⌘ + K", t("scSearch")) +
        row("Ctrl/⌘ + Shift + O", t("scNewChat")) +
        row("Ctrl/⌘ + ,", t("scSettings")) +
        row("Ctrl/⌘ + /", t("scShortcuts")) +
        row("Enter", t("scSend")) +
        row("Esc", t("close")) +
        "</tbody></table></div>",
    });
  }
  OC.showShortcuts = showShortcuts;

  /* ================= offline banner ================= */
  function updateOnline() {
    let b = $(".offline-bar");
    if (!navigator.onLine) {
      if (!b) { b = el('<div class="offline-bar">' + t("networkDown") + "</div>"); document.body.appendChild(b); }
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
    const user = store.currentUser();
    if (user) applyTheme(store.getUserSettings().theme);
    else {
      try {
        const raw = localStorage.getItem("oc-theme");
        applyTheme(raw === "dark" || raw === "light" ? raw : "system");
      } catch (e) { applyTheme("system"); }
    }
    OC.panels.registerRoutes();
    updateOnline();
    renderRoute();
    // remember theme choice for pre-paint
    setInterval(() => {
      const dark = document.documentElement.classList.contains("dark");
      try { localStorage.setItem("oc-theme", dark ? "dark" : "light"); } catch (e) {}
    }, 1500);
  };

  OC.brandLogo = logoSVG;
  OC.applyThemeOnLogin = () => applyTheme(store.getUserSettings().theme);
})();
