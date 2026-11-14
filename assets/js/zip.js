/* Open Code — minimal ZIP writer (store method, no deps) + export helpers. Designer: Abbas Sedigh */
(function () {
  /* CRC-32 */
  const crcTable = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  /* ZIP builder (no compression / stored) */
  class ZipWriter {
    constructor() { this.parts = []; this.central = []; this.offset = 0; }
    _u16(v) { return new Uint8Array([v & 255, (v >>> 8) & 255]); }
    _u32(v) { return new Uint8Array([v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255]); }
    _str(s) { return new TextEncoder().encode(s); }
    _concat(arrs) {
      const len = arrs.reduce((a, b) => a + b.length, 0);
      const out = new Uint8Array(len);
      let o = 0;
      for (const a of arrs) { out.set(a, o); o += a.length; }
      return out;
    }
    addFile(name, content) {
      const data = typeof content === "string" ? this._str(content) : content;
      const nameBytes = this._str(name);
      const crc = crc32(data);
      const dosTime = 0, dosDate = 0x21; // 1980-01-01
      const header = this._concat([
        this._u32(0x04034b50), this._u16(20), this._u16(0x0800), this._u16(0),
        this._u16(dosTime), this._u16(dosDate),
        this._u32(crc), this._u32(data.length), this._u32(data.length),
        this._u16(nameBytes.length), this._u16(0),
      ]);
      const localOffset = this.offset;
      this.parts.push(this._concat([header, nameBytes, data]));
      this.offset += header.length + nameBytes.length + data.length;
      this.central.push(this._concat([
        this._u32(0x02014b50), this._u16(20), this._u16(0x0800), this._u16(0),
        this._u16(dosTime), this._u16(dosDate),
        this._u32(crc), this._u32(data.length), this._u32(data.length),
        this._u16(nameBytes.length), this._u16(0), this._u16(0), this._u16(0), this._u16(0),
        this._u32(0), this._u32(localOffset), nameBytes,
      ]));
    }
    finish() {
      const centralAll = this._concat(this.central);
      const cdOffset = this.offset;
      const eocd = this._concat([
        this._u32(0x06054b50), this._u16(0), this._u16(0),
        this._u16(this.central.length), this._u16(this.central.length),
        this._u32(centralAll.length), this._u32(cdOffset), this._u16(0),
      ]);
      const blob = new Blob([...this.parts, centralAll, eocd], { type: "application/zip" });
      return blob;
    }
  }

  /* ---------- CSV ---------- */
  function csvEscape(v) {
    const s = String(v == null ? "" : v);
    return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(rows) {
    return "\uFEFF" + rows.map(r => r.map(csvEscape).join(",")).join("\r\n");
  }

  /* ---------- project delivery from code blocks ---------- */
  function langExt(lang) {
    const map = {
      js: "js", javascript: "js", jsx: "jsx", ts: "ts", tsx: "tsx", python: "py", py: "py",
      html: "html", xml: "xml", svg: "svg", css: "css", scss: "scss", json: "json",
      bash: "sh", sh: "sh", shell: "sh", sql: "sql", go: "go", php: "php", java: "java",
      c: "c", cpp: "cpp", csharp: "cs", cs: "cs", kotlin: "kt", kt: "kt", swift: "swift",
      ruby: "rb", rb: "rb", rust: "rs", rs: "rs", yaml: "yml", yml: "yml", md: "md", txt: "txt",
    };
    return map[(lang || "").toLowerCase()] || "txt";
  }
  function safeFilename(name, fallbackIdx, ext) {
    let base = String(name || "").replace(/[\\/:*?"<>|\s]+/g, "-").replace(/^-+|-+$/g, "");
    if (!base) base = "file-" + (fallbackIdx + 1);
    if (!/\.\w{1,6}$/.test(base)) base += "." + ext;
    return base;
  }
  function buildProjectZip({ title, messages, codeBlocks }) {
    const zip = new ZipWriter();
    const safeTitle = String(title || "open-code-project").replace(/[\\/:*?"<>|\s]+/g, "-").slice(0, 60) || "open-code-project";
    const used = {};
    const manifest = [];
    codeBlocks.forEach((cb, i) => {
      const ext = langExt(cb.lang);
      let fname = cb.filename ? safeFilename(cb.filename, i, ext) : safeFilename("", i, ext);
      if (used[fname]) {
        const dot = fname.lastIndexOf(".");
        fname = fname.slice(0, dot) + "-" + (i + 1) + fname.slice(dot);
      }
      used[fname] = true;
      zip.addFile(safeTitle + "/" + fname, cb.code);
      manifest.push({ file: fname, lang: cb.lang || "text", bytes: new Blob([cb.code]).size });
    });
    const readme = [
      "# " + (title || "Open Code Project"),
      "",
      "> " + OC.i18n.t("projectDelivery") + " — Open Code (Designer: Abbas Sedigh)",
      "",
      (OC.i18n.locale() === "fa" ? "این بسته به‌صورت خودکار از گفت‌وگوی شما در Open Code ساخته شده است." :
        "This package was built automatically from your conversation in Open Code."),
      "",
      (OC.i18n.locale() === "fa" ? "## فایل‌ها" : "## Files") + " (" + manifest.length + ")",
      "",
      ...manifest.map(m => "- `" + m.file + "` — " + (m.lang || "text") + " · " + m.bytes + " B"),
      "",
      (OC.i18n.locale() === "fa" ? "## گفت‌وگو" : "## Conversation"),
      "",
      ...messages.map(m => "**" + (m.role === "user" ? (OC.i18n.locale() === "fa" ? "کاربر" : "User") : (OC.i18n.locale() === "fa" ? "دستیار" : "Assistant")) + ":**\n\n" + String(m.content || "").slice(0, 2000) + "\n"),
    ].join("\n");
    zip.addFile(safeTitle + "/README.md", readme);
    return { blob: zip.finish(), safeTitle, manifest };
  }

  window.OC = window.OC || {};
  window.OC.zip = { ZipWriter, crc32 };
  window.OC.exporter = { toCSV, buildProjectZip, langExt, safeFilename };
})();
