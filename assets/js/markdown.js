function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — Markdown renderer + lightweight syntax highlighter (XSS-safe by construction). Designer: Abbas Sedigh */
(function () {
  var _OC = OC,
    U = _OC.U;
  var esc = U.esc;

  /* ---------- syntax highlight (lt/gt already escaped) ---------- */
  function highlight(code, lang) {
    var KW = {
      js: "const|let|var|function|return|if|else|for|while|class|extends|new|import|from|export|default|async|await|try|catch|finally|throw|switch|case|break|continue|typeof|instanceof|this|super|yield|delete|void|in|of|do|static|get|set|null|undefined|true|false|NaN",
      ts: "const|let|var|function|return|if|else|for|while|class|extends|implements|interface|type|new|import|from|export|default|async|await|try|catch|finally|throw|switch|case|break|continue|typeof|keyof|readonly|public|private|protected|this|super|enum|namespace|declare|as|null|undefined|true|false|number|string|boolean|any|void|never",
      py: "def|return|if|elif|else|for|while|class|import|from|as|with|try|except|finally|raise|yield|lambda|global|nonlocal|assert|pass|break|continue|and|or|not|in|is|None|True|False|self|async|await|match|case",
      css: "",
      bash: "if|then|else|fi|for|while|do|done|case|esac|function|return|export|source|echo|exit|local|readonly",
      sql: "select|from|where|insert|into|values|update|set|delete|create|table|alter|drop|join|left|right|inner|outer|on|group|by|order|having|limit|as|and|or|not|null|primary|key|foreign|references",
      go: "func|return|if|else|for|range|package|import|var|const|type|struct|interface|go|defer|chan|select|switch|case|default|break|continue|map|nil|true|false",
      php: "function|return|if|else|elseif|foreach|for|while|class|extends|implements|new|use|namespace|public|private|protected|static|echo|print|try|catch|finally|throw|instanceof|null|true|false",
      java: "public|private|protected|static|final|void|int|long|double|float|boolean|char|String|class|interface|extends|implements|new|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|throws|import|package|this|super|null|true|false",
      c: "int|char|float|double|void|long|short|unsigned|struct|typedef|const|static|return|if|else|for|while|switch|case|break|continue|sizeof|include|define|NULL"
    };
    var langMap = {
      javascript: "js",
      js: "js",
      jsx: "js",
      typescript: "ts",
      ts: "ts",
      tsx: "ts",
      python: "py",
      py: "py",
      bash: "bash",
      sh: "bash",
      shell: "bash",
      zsh: "bash",
      json: "json",
      html: "html",
      xml: "html",
      svg: "html",
      css: "css",
      sql: "sql",
      go: "go",
      golang: "go",
      php: "php",
      java: "java",
      c: "c",
      cpp: "c",
      "c++": "c"
    };
    var fam = langMap[(lang || "").toLowerCase()];
    if (!fam && fam !== "json" && fam !== "html" && fam !== "css") return esc(code);
    if (fam === "json") {
      return esc(code).replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)/g, '<span class="tk-attr">$1</span>$2').replace(/:\s*(&quot;(?:[^&]|&(?!quot;))*?&quot;)/g, ': <span class="tk-str">$1</span>').replace(/\b(-?\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>').replace(/\b(true|false|null)\b/g, '<span class="tk-kw">$1</span>');
    }
    if (fam === "html") {
      return esc(code).replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tk-tag">$2</span>').replace(/([a-zA-Z-]+)=(&quot;[^&]*?&quot;)/g, '<span class="tk-attr">$1</span>=$2').replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tk-com">$1</span>');
    }
    if (fam === "css") {
      return esc(code).replace(/([.#][\w-]+|\*)(?=\s*[,{])/g, '<span class="tk-tag">$1</span>').replace(/([a-z-]+)(\s*:\s*)([^;{]+)/g, '<span class="tk-attr">$1</span>$2<span class="tk-str">$3</span>').replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-com">$1</span>');
    }
    var kw = KW[fam] || KW.js;
    var out = esc(code);
    // comments and strings first (tokenize into placeholders to protect from kw regex)
    var stash = [];
    var stashPush = function stashPush(s) {
      stash.push(s);
      return "\x00" + (stash.length - 1) + "\x00";
    };
    out = out.replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;|'(?:[^']|\\')*?'|`(?:[^`])*?`)/g, function (m) {
      return stashPush('<span class="tk-str">' + m + "</span>");
    }).replace(/(^|\n)(\s*)(\/\/[^\n]*|#[^\n]*)/g, function (m, a, b, c) {
      return a + b + stashPush('<span class="tk-com">' + c + "</span>");
    }).replace(/(\/\*[\s\S]*?\*\/)/g, function (m) {
      return stashPush('<span class="tk-com">' + m + "</span>");
    }).replace(new RegExp("\\b(" + kw + ")\\b", "g"), '<span class="tk-kw">$1</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>');
    out = out.replace(/\x00(\d+)\x00/g, function (m, i) {
      return stash[+i];
    });
    return out;
  }

  /* ---------- inline markdown ---------- */
  function inline(md) {
    var s = esc(md);
    var stash = [];
    var stashPush = function stashPush(html) {
      stash.push(html);
      return "\x01" + (stash.length - 1) + "\x01";
    };
    // inline code
    s = s.replace(/`([^`\n]+)`/g, function (m, c) {
      return stashPush('<code class="inline">' + c + "</code>");
    });
    // images ![alt](url)
    s = s.replace(/!\[([^\]]*)\]\((https?:[^)\s]+)\)/g, function (m, alt, url) {
      return stashPush('<img src="' + url + '" alt="' + alt + '">');
    });
    // links
    s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, function (m, txt, url) {
      return stashPush('<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + txt + "</a>");
    });
    // bold, italic, strike
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
    // line breaks
    s = s.replace(/\n/g, "<br>");
    s = s.replace(/\x01(\d+)\x01/g, function (m, i) {
      return stash[+i];
    });
    return s;
  }

  /* ---------- block renderer ---------- */
  // returns { html, codeBlocks: [{lang, code, filename}] }
  function render(md) {
    var codeBlocks = [];
    var src = String(md == null ? "" : md);

    // pull out fenced code first
    var lines = src.split("\n");
    var out = [];
    var i = 0;
    while (i < lines.length) {
      var mFence = lines[i].match(/^\s*```[`]*\s*([\w+#.-]*)\s*(?:[:(]([\w .-]+\.\w+))?[`]*\s*$/);
      if (mFence) {
        var lang = mFence[1] || "";
        var fname = mFence[2] || "";
        var body = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) {
          body.push(lines[i]);
          i++;
        }
        i++; // closing fence
        var idx = codeBlocks.length;
        codeBlocks.push({
          lang: lang,
          code: body.join("\n"),
          filename: fname
        });
        out.push('<div class="codeblock" data-cb="' + idx + '"><div class="cb-head"><span>' + esc(lang || fname || "code") + (fname ? " · " + esc(fname) : "") + '</span><span class="cb-tools"><button class="btn btn-sm no-print" data-act="copy-code" data-cb="' + idx + '">' + OC.i18n.t("copyCode") + '</button></span></div><pre><code>' + highlight(body.join("\n"), lang) + "</code></pre></div>");
        continue;
      }
      out.push(lines[i]);
      i++;
    }
    var noCode = out.join("\n");

    // block-level pass
    var bl = noCode.split("\n");
    var html = [];
    var para = [];
    var listType = null,
      listItems = [];
    var inQuote = false,
      quoteLines = [];
    var tableRows = [];
    var flushPara = function flushPara() {
      if (para.length) {
        html.push("<p>" + inline(para.join("\n")) + "</p>");
        para = [];
      }
    };
    var flushList = function flushList() {
      if (listType && listItems.length) {
        html.push("<" + listType + ">" + listItems.map(function (x) {
          return "<li>" + inline(x) + "</li>";
        }).join("") + "</" + listType + ">");
        listType = null;
        listItems = [];
      }
    };
    var flushQuote = function flushQuote() {
      if (inQuote) {
        html.push("<blockquote>" + inline(quoteLines.join("\n")) + "</blockquote>");
        inQuote = false;
        quoteLines = [];
      }
    };
    var flushTable = function flushTable() {
      if (!tableRows.length) return;
      // first row = header if next row is separator
      var rows = tableRows;
      var t = '<div style="overflow-x:auto"><table>';
      var cellsOf = function cellsOf(r) {
        return r.replace(/^\||\|$/g, "").split("|").map(function (c) {
          return c.trim();
        });
      };
      t += "<thead><tr>" + cellsOf(rows[0]).map(function (c) {
        return "<th>" + inline(c) + "</th>";
      }).join("") + "</tr></thead>";
      var bodyRows = rows.slice(1);
      if (bodyRows.length && /^[\s|:-]+$/.test(bodyRows[0])) bodyRows.shift();
      t += "<tbody>" + bodyRows.map(function (r) {
        return "<tr>" + cellsOf(r).map(function (c) {
          return "<td>" + inline(c) + "</td>";
        }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
      html.push(t);
      tableRows = [];
    };
    var _iterator = _createForOfIteratorHelper(bl),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;
        var isTable = /^\s*\|.*\|\s*$/.test(line);
        if (tableRows.length && !isTable) flushTable();
        var mH = line.match(/^\s*(#{1,4})\s+(.*)$/);
        var mUl = line.match(/^\s*[-*•]\s+(.*)$/);
        var mOl = line.match(/^\s*\d+[.)]\s+(.*)$/);
        var mQ = line.match(/^\s*>\s?(.*)$/);
        var mHr = /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line);
        if (mH) {
          flushPara();
          flushList();
          flushQuote();
          var lvl = Math.min(mH[1].length, 4);
          html.push("<h" + lvl + ">" + inline(mH[2]) + "</h" + lvl + ">");
        } else if (mHr) {
          flushPara();
          flushList();
          flushQuote();
          html.push("<hr>");
        } else if (mUl) {
          flushPara();
          flushQuote();
          flushTable();
          if (listType !== "ul") flushList();
          listType = "ul";
          listItems.push(mUl[1]);
        } else if (mOl) {
          flushPara();
          flushQuote();
          flushTable();
          if (listType !== "ol") flushList();
          listType = "ol";
          listItems.push(mOl[1]);
        } else if (mQ) {
          flushPara();
          flushList();
          flushTable();
          inQuote = true;
          quoteLines.push(mQ[1]);
        } else if (isTable) {
          flushPara();
          flushList();
          flushQuote();
          tableRows.push(line.trim());
        } else if (!line.trim()) {
          flushPara();
          flushList();
          flushQuote();
          flushTable();
        } else {
          flushList();
          flushQuote();
          para.push(line);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    flushPara();
    flushList();
    flushQuote();
    flushTable();
    return {
      html: html.join("\n"),
      codeBlocks: codeBlocks
    };
  }
  window.OC = window.OC || {};
  window.OC.markdown = {
    render: render,
    highlight: highlight,
    inline: inline
  };
})();