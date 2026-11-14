function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(a) { return _arrayWithoutHoles(a) || _iterableToArray(a) || _unsupportedIterableToArray(a) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { var e = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { for (var t, o = [], a = e.call(r); !(t = a.next()).done;) o.push(t.value); return o; } }
function _arrayWithoutHoles(a) { if (Array.isArray(a)) return _arrayLikeToArray(a); }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(r, t) { for (var o = 0; o < t.length; o++) { var i = t[o]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, _toPropertyKey(i.key), i); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == _typeof(o) ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
/* Open Code — minimal ZIP writer (store method, no deps) + export helpers. Designer: Abbas Sedigh */
(function () {
  /* CRC-32 */
  var crcTable = function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  }();
  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xFF] ^ c >>> 8;
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  /* ZIP builder (no compression / stored) */
  var ZipWriter = /*#__PURE__*/function () {
    function ZipWriter() {
      _classCallCheck(this, ZipWriter);
      this.parts = [];
      this.central = [];
      this.offset = 0;
    }
    return _createClass(ZipWriter, [{
      key: "_u16",
      value: function _u16(v) {
        return new Uint8Array([v & 255, v >>> 8 & 255]);
      }
    }, {
      key: "_u32",
      value: function _u32(v) {
        return new Uint8Array([v & 255, v >>> 8 & 255, v >>> 16 & 255, v >>> 24 & 255]);
      }
    }, {
      key: "_str",
      value: function _str(s) {
        return new TextEncoder().encode(s);
      }
    }, {
      key: "_concat",
      value: function _concat(arrs) {
        var len = arrs.reduce(function (a, b) {
          return a + b.length;
        }, 0);
        var out = new Uint8Array(len);
        var o = 0;
        var _iterator = _createForOfIteratorHelper(arrs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var a = _step.value;
            out.set(a, o);
            o += a.length;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return out;
      }
    }, {
      key: "addFile",
      value: function addFile(name, content) {
        var data = typeof content === "string" ? this._str(content) : content;
        var nameBytes = this._str(name);
        var crc = crc32(data);
        var dosTime = 0,
          dosDate = 0x21; // 1980-01-01
        var header = this._concat([this._u32(0x04034b50), this._u16(20), this._u16(0x0800), this._u16(0), this._u16(dosTime), this._u16(dosDate), this._u32(crc), this._u32(data.length), this._u32(data.length), this._u16(nameBytes.length), this._u16(0)]);
        var localOffset = this.offset;
        this.parts.push(this._concat([header, nameBytes, data]));
        this.offset += header.length + nameBytes.length + data.length;
        this.central.push(this._concat([this._u32(0x02014b50), this._u16(20), this._u16(0x0800), this._u16(0), this._u16(dosTime), this._u16(dosDate), this._u32(crc), this._u32(data.length), this._u32(data.length), this._u16(nameBytes.length), this._u16(0), this._u16(0), this._u16(0), this._u16(0), this._u32(0), this._u32(localOffset), nameBytes]));
      }
    }, {
      key: "finish",
      value: function finish() {
        var centralAll = this._concat(this.central);
        var cdOffset = this.offset;
        var eocd = this._concat([this._u32(0x06054b50), this._u16(0), this._u16(0), this._u16(this.central.length), this._u16(this.central.length), this._u32(centralAll.length), this._u32(cdOffset), this._u16(0)]);
        var blob = new Blob([].concat(_toConsumableArray(this.parts), [centralAll, eocd]), {
          type: "application/zip"
        });
        return blob;
      }
    }]);
  }();
  /* ---------- CSV ---------- */
  function csvEscape(v) {
    var s = String(v == null ? "" : v);
    return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(rows) {
    return "\uFEFF" + rows.map(function (r) {
      return r.map(csvEscape).join(",");
    }).join("\r\n");
  }

  /* ---------- project delivery from code blocks ---------- */
  function langExt(lang) {
    var map = {
      js: "js",
      javascript: "js",
      jsx: "jsx",
      ts: "ts",
      tsx: "tsx",
      python: "py",
      py: "py",
      html: "html",
      xml: "xml",
      svg: "svg",
      css: "css",
      scss: "scss",
      json: "json",
      bash: "sh",
      sh: "sh",
      shell: "sh",
      sql: "sql",
      go: "go",
      php: "php",
      java: "java",
      c: "c",
      cpp: "cpp",
      csharp: "cs",
      cs: "cs",
      kotlin: "kt",
      kt: "kt",
      swift: "swift",
      ruby: "rb",
      rb: "rb",
      rust: "rs",
      rs: "rs",
      yaml: "yml",
      yml: "yml",
      md: "md",
      txt: "txt"
    };
    return map[(lang || "").toLowerCase()] || "txt";
  }
  function safeFilename(name, fallbackIdx, ext) {
    var base = String(name || "").replace(/[\\/:*?"<>|\s]+/g, "-").replace(/^-+|-+$/g, "");
    if (!base) base = "file-" + (fallbackIdx + 1);
    if (!/\.\w{1,6}$/.test(base)) base += "." + ext;
    return base;
  }
  function buildProjectZip(_ref) {
    var title = _ref.title,
      messages = _ref.messages,
      codeBlocks = _ref.codeBlocks;
    var zip = new ZipWriter();
    var safeTitle = String(title || "open-code-project").replace(/[\\/:*?"<>|\s]+/g, "-").slice(0, 60) || "open-code-project";
    var used = {};
    var manifest = [];
    codeBlocks.forEach(function (cb, i) {
      var ext = langExt(cb.lang);
      var fname = cb.filename ? safeFilename(cb.filename, i, ext) : safeFilename("", i, ext);
      if (used[fname]) {
        var dot = fname.lastIndexOf(".");
        fname = fname.slice(0, dot) + "-" + (i + 1) + fname.slice(dot);
      }
      used[fname] = true;
      zip.addFile(safeTitle + "/" + fname, cb.code);
      manifest.push({
        file: fname,
        lang: cb.lang || "text",
        bytes: new Blob([cb.code]).size
      });
    });
    var readme = ["# " + (title || "Open Code Project"), "", "> " + OC.i18n.t("projectDelivery") + " — Open Code (Designer: Abbas Sedigh)", "", OC.i18n.locale() === "fa" ? "این بسته به‌صورت خودکار از گفت‌وگوی شما در Open Code ساخته شده است." : "This package was built automatically from your conversation in Open Code.", "", (OC.i18n.locale() === "fa" ? "## فایل‌ها" : "## Files") + " (" + manifest.length + ")", ""].concat(_toConsumableArray(manifest.map(function (m) {
      return "- `" + m.file + "` — " + (m.lang || "text") + " · " + m.bytes + " B";
    })), ["", OC.i18n.locale() === "fa" ? "## گفت‌وگو" : "## Conversation", ""], _toConsumableArray(messages.map(function (m) {
      return "**" + (m.role === "user" ? OC.i18n.locale() === "fa" ? "کاربر" : "User" : OC.i18n.locale() === "fa" ? "دستیار" : "Assistant") + ":**\n\n" + String(m.content || "").slice(0, 2000) + "\n";
    }))).join("\n");
    zip.addFile(safeTitle + "/README.md", readme);
    return {
      blob: zip.finish(),
      safeTitle: safeTitle,
      manifest: manifest
    };
  }
  window.OC = window.OC || {};
  window.OC.zip = {
    ZipWriter: ZipWriter,
    crc32: crc32
  };
  window.OC.exporter = {
    toCSV: toCSV,
    buildProjectZip: buildProjectZip,
    langExt: langExt,
    safeFilename: safeFilename
  };
})();