/* Open Code — Markdown renderer + lightweight syntax highlighter (XSS-safe by construction). Designer: Abbas Sedigh */
(function () {
  const { U } = OC;
  const { esc } = U;

  /* ---------- syntax highlight (lt/gt already escaped) ---------- */
  function highlight(code, lang) {
    const KW = {
      js: "const|let|var|function|return|if|else|for|while|class|extends|new|import|from|export|default|async|await|try|catch|finally|throw|switch|case|break|continue|typeof|instanceof|this|super|yield|delete|void|in|of|do|static|get|set|null|undefined|true|false|NaN",
      ts: "const|let|var|function|return|if|else|for|while|class|extends|implements|interface|type|new|import|from|export|default|async|await|try|catch|finally|throw|switch|case|break|continue|typeof|keyof|readonly|public|private|protected|this|super|enum|namespace|declare|as|null|undefined|true|false|number|string|boolean|any|void|never",
      py: "def|return|if|elif|else|for|while|class|import|from|as|with|try|except|finally|raise|yield|lambda|global|nonlocal|assert|pass|break|continue|and|or|not|in|is|None|True|False|self|async|await|match|case",
      css: "",
      bash: "if|then|else|fi|for|while|do|done|case|esac|function|return|export|source|echo|exit|local|readonly",
      sql: "select|from|where|insert|into|values|update|set|delete|create|table|alter|drop|join|left|right|inner|outer|on|group|by|order|having|limit|as|and|or|not|null|primary|key|foreign|references",
      go: "func|return|if|else|for|range|package|import|var|const|type|struct|interface|go|defer|chan|select|switch|case|default|break|continue|map|nil|true|false",
      php: "function|return|if|else|elseif|foreach|for|while|class|extends|implements|new|use|namespace|public|private|protected|static|echo|print|try|catch|finally|throw|instanceof|null|true|false",
      java: "public|private|protected|static|final|void|int|long|double|float|boolean|char|String|class|interface|extends|implements|new|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|throws|import|package|this|super|null|true|false",
      c: "int|char|float|double|void|long|short|unsigned|struct|typedef|const|static|return|if|else|for|while|switch|case|break|continue|sizeof|include|define|NULL",
    };
    const langMap = { javascript: "js", js: "js", jsx: "js", typescript: "ts", ts: "ts", tsx: "ts", python: "py", py: "py", bash: "bash", sh: "bash", shell: "bash", zsh: "bash", json: "json", html: "html", xml: "html", svg: "html", css: "css", sql: "sql", go: "go", golang: "go", php: "php", java: "java", c: "c", cpp: "c", "c++": "c" };
    const fam = langMap[(lang || "").toLowerCase()];
    if (!fam && fam !== "json" && fam !== "html" && fam !== "css") return esc(code);

    if (fam === "json") {
      return esc(code)
        .replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)/g, '<span class="tk-attr">$1</span>$2')
        .replace(/:\s*(&quot;(?:[^&]|&(?!quot;))*?&quot;)/g, ': <span class="tk-str">$1</span>')
        .replace(/\b(-?\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>')
        .replace(/\b(true|false|null)\b/g, '<span class="tk-kw">$1</span>');
    }
    if (fam === "html") {
      return esc(code)
        .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tk-tag">$2</span>')
        .replace(/([a-zA-Z-]+)=(&quot;[^&]*?&quot;)/g, '<span class="tk-attr">$1</span>=$2')
        .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tk-com">$1</span>');
    }
    if (fam === "css") {
      return esc(code)
        .replace(/([.#][\w-]+|\*)(?=\s*[,{])/g, '<span class="tk-tag">$1</span>')
        .replace(/([a-z-]+)(\s*:\s*)([^;{]+)/g, '<span class="tk-attr">$1</span>$2<span class="tk-str">$3</span>')
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-com">$1</span>');
    }
    const kw = KW[fam] || KW.js;
    let out = esc(code);
    // comments and strings first (tokenize into placeholders to protect from kw regex)
    const stash = [];
    const stashPush = s => { stash.push(s); return "\x00" + (stash.length - 1) + "\x00"; };
    out = out.replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;|'(?:[^']|\\')*?'|`(?:[^`])*?`)/g, m => stashPush('<span class="tk-str">' + m + "</span>"))
             .replace(/(^|\n)(\s*)(\/\/[^\n]*|#[^\n]*)/g, (m, a, b, c) => a + b + stashPush('<span class="tk-com">' + c + "</span>"))
             .replace(/(\/\*[\s\S]*?\*\/)/g, m => stashPush('<span class="tk-com">' + m + "</span>"))
             .replace(new RegExp("\\b(" + kw + ")\\b", "g"), '<span class="tk-kw">$1</span>')
             .replace(/\b(\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>');
    out = out.replace(/\x00(\d+)\x00/g, (m, i) => stash[+i]);
    return out;
  }

  /* ---------- inline markdown ---------- */
  function inline(md) {
    let s = esc(md);
    const stash = [];
    const stashPush = html => { stash.push(html); return "\x01" + (stash.length - 1) + "\x01"; };
    // inline code
    s = s.replace(/`([^`\n]+)`/g, (m, c) => stashPush('<code class="inline">' + c + "</code>"));
    // images ![alt](url)
    s = s.replace(/!\[([^\]]*)\]\((https?:[^)\s]+)\)/g, (m, alt, url) => stashPush('<img src="' + url + '" alt="' + alt + '">'));
    // links
    s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, (m, txt, url) => stashPush('<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + txt + "</a>"));
    // bold, italic, strike
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
    // line breaks
    s = s.replace(/\n/g, "<br>");
    s = s.replace(/\x01(\d+)\x01/g, (m, i) => stash[+i]);
    return s;
  }

  /* ---------- block renderer ---------- */
  // returns { html, codeBlocks: [{lang, code, filename}] }
  function render(md) {
    const codeBlocks = [];
    const src = String(md == null ? "" : md);

    // pull out fenced code first
    const lines = src.split("\n");
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const mFence = lines[i].match(/^\s*```[`]*\s*([\w+#.-]*)\s*(?:[:(]([\w .-]+\.\w+))?[`]*\s*$/);
      if (mFence) {
        const lang = mFence[1] || "";
        const fname = mFence[2] || "";
        const body = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { body.push(lines[i]); i++; }
        i++; // closing fence
        const idx = codeBlocks.length;
        codeBlocks.push({ lang, code: body.join("\n"), filename: fname });
        out.push('<div class="codeblock" data-cb="' + idx + '"><div class="cb-head"><span>' + esc(lang || fname || "code") + (fname ? " · " + esc(fname) : "") + '</span><span class="cb-tools"><button class="btn btn-sm no-print" data-act="copy-code" data-cb="' + idx + '">' + OC.i18n.t("copyCode") + '</button></span></div><pre><code>' + highlight(body.join("\n"), lang) + "</code></pre></div>");
        continue;
      }
      out.push(lines[i]);
      i++;
    }
    const noCode = out.join("\n");

    // block-level pass
    const bl = noCode.split("\n");
    const html = [];
    let para = [];
    let listType = null, listItems = [];
    let inQuote = false, quoteLines = [];
    let tableRows = [];

    const flushPara = () => {
      if (para.length) { html.push("<p>" + inline(para.join("\n")) + "</p>"); para = []; }
    };
    const flushList = () => {
      if (listType && listItems.length) {
        html.push("<" + listType + ">" + listItems.map(x => "<li>" + inline(x) + "</li>").join("") + "</" + listType + ">");
        listType = null; listItems = [];
      }
    };
    const flushQuote = () => {
      if (inQuote) { html.push("<blockquote>" + inline(quoteLines.join("\n")) + "</blockquote>"); inQuote = false; quoteLines = []; }
    };
    const flushTable = () => {
      if (!tableRows.length) return;
      // first row = header if next row is separator
      const rows = tableRows;
      let t = '<div style="overflow-x:auto"><table>';
      const cellsOf = r => r.replace(/^\||\|$/g, "").split("|").map(c => c.trim());
      t += "<thead><tr>" + cellsOf(rows[0]).map(c => "<th>" + inline(c) + "</th>").join("") + "</tr></thead>";
      const bodyRows = rows.slice(1);
      if (bodyRows.length && /^[\s|:-]+$/.test(bodyRows[0])) bodyRows.shift();
      t += "<tbody>" + bodyRows.map(r => "<tr>" + cellsOf(r).map(c => "<td>" + inline(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>";
      html.push(t);
      tableRows = [];
    };

    for (const line of bl) {
      const isTable = /^\s*\|.*\|\s*$/.test(line);
      if (tableRows.length && !isTable) flushTable();

      const mH = line.match(/^\s*(#{1,4})\s+(.*)$/);
      const mUl = line.match(/^\s*[-*•]\s+(.*)$/);
      const mOl = line.match(/^\s*\d+[.)]\s+(.*)$/);
      const mQ = line.match(/^\s*>\s?(.*)$/);
      const mHr = /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line);

      if (mH) {
        flushPara(); flushList(); flushQuote();
        const lvl = Math.min(mH[1].length, 4);
        html.push("<h" + lvl + ">" + inline(mH[2]) + "</h" + lvl + ">");
      } else if (mHr) {
        flushPara(); flushList(); flushQuote();
        html.push("<hr>");
      } else if (mUl) {
        flushPara(); flushQuote(); flushTable();
        if (listType !== "ul") flushList();
        listType = "ul"; listItems.push(mUl[1]);
      } else if (mOl) {
        flushPara(); flushQuote(); flushTable();
        if (listType !== "ol") flushList();
        listType = "ol"; listItems.push(mOl[1]);
      } else if (mQ) {
        flushPara(); flushList(); flushTable();
        inQuote = true; quoteLines.push(mQ[1]);
      } else if (isTable) {
        flushPara(); flushList(); flushQuote();
        tableRows.push(line.trim());
      } else if (!line.trim()) {
        flushPara(); flushList(); flushQuote(); flushTable();
      } else {
        flushList(); flushQuote();
        para.push(line);
      }
    }
    flushPara(); flushList(); flushQuote(); flushTable();

    return { html: html.join("\n"), codeBlocks };
  }

  window.OC = window.OC || {};
  window.OC.markdown = { render, highlight, inline };
})();
