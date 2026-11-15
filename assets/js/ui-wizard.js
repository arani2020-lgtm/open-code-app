function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Open Code — New-project wizard: 3 quick questions → best model recommendation.
   Scores the models the user actually has (keys active) with static routing heuristics.
   Designer: Abbas Sedigh */
(function () {
  var t = OC.i18n.t;
  var _OC = OC,
    U = _OC.U,
    store = _OC.store;
  var $ = OC.$,
    $$ = OC.$$;
  var I = OC.ui_icons;
  function esc(s) {
    return U.esc(s);
  }
  function toast(msg, kind) {
    if (OC.toast) return OC.toast(msg, kind);
  }

  /* ---------- model traits (routing heuristics, 0–5; cost 5 = cheapest) ---------- */
  var MODEL_TRAITS = [{
    match: /gpt-5/i,
    code: 5,
    write: 4.6,
    speed: 2.5,
    cost: 1.5,
    vision: true
  }, {
    match: /o[134](-|-pro|-high|-low)?(\/|$|-mini|-preview)|o4-mini/i,
    code: 4.8,
    write: 4.2,
    speed: 2.5,
    cost: 2.5,
    vision: true
  }, {
    match: /gpt-4\.5|gpt-4-5/i,
    code: 4.6,
    write: 5,
    speed: 2,
    cost: 1,
    vision: true
  }, {
    match: /gpt-4\.1|gpt-4-1/i,
    code: 4.5,
    write: 4.2,
    speed: 3.5,
    cost: 3,
    vision: true
  }, {
    match: /gpt-4o-mini|4o-mini/i,
    code: 3.1,
    write: 3.1,
    speed: 5,
    cost: 5,
    vision: true
  }, {
    match: /gpt-4o/i,
    code: 4.1,
    write: 4.1,
    speed: 4,
    cost: 3,
    vision: true
  }, {
    match: /chatgpt-4o/i,
    code: 4.1,
    write: 4.1,
    speed: 4,
    cost: 3,
    vision: true
  }, {
    match: /gpt-3\.5/i,
    code: 2.6,
    write: 2.8,
    speed: 5,
    cost: 5,
    vision: false
  }, {
    match: /claude.*(opus)/i,
    code: 5,
    write: 5,
    speed: 2,
    cost: 1,
    vision: true
  }, {
    match: /claude.*(sonnet)/i,
    code: 4.8,
    write: 4.7,
    speed: 3.2,
    cost: 2.5,
    vision: true
  }, {
    match: /claude.*(haiku)/i,
    code: 3.5,
    write: 3.6,
    speed: 5,
    cost: 4.5,
    vision: true
  }, {
    match: /claude/i,
    code: 4.4,
    write: 4.6,
    speed: 3,
    cost: 2.5,
    vision: true
  }, {
    match: /gemini.*pro/i,
    code: 4.7,
    write: 4.5,
    speed: 3,
    cost: 3,
    vision: true
  }, {
    match: /gemini.*flash/i,
    code: 3.7,
    write: 3.6,
    speed: 5,
    cost: 4.8,
    vision: true
  }, {
    match: /gemini/i,
    code: 4,
    write: 4,
    speed: 4,
    cost: 3.5,
    vision: true
  }, {
    match: /deepseek.*(reasoner|r1)/i,
    code: 4.8,
    write: 4.2,
    speed: 2,
    cost: 5,
    vision: false
  }, {
    match: /deepseek/i,
    code: 4.3,
    write: 4,
    speed: 4,
    cost: 5,
    vision: false
  }, {
    match: /glm-4\.[5-9]|glm-4plus|glm-4-plus/i,
    code: 4.4,
    write: 4.3,
    speed: 3.5,
    cost: 4.5,
    vision: true
  }, {
    match: /glm.*flash/i,
    code: 3.3,
    write: 3.3,
    speed: 5,
    cost: 5,
    vision: true
  }, {
    match: /glm/i,
    code: 4,
    write: 4,
    speed: 4,
    cost: 4.5,
    vision: true
  }, {
    match: /qwen.*(max)/i,
    code: 4.3,
    write: 4.2,
    speed: 3.5,
    cost: 3.5,
    vision: true
  }, {
    match: /qwen.*(turbo|flash)/i,
    code: 3.3,
    write: 3.4,
    speed: 5,
    cost: 5,
    vision: true
  }, {
    match: /qwen/i,
    code: 3.9,
    write: 3.9,
    speed: 4,
    cost: 4.5,
    vision: true
  }, {
    match: /kimi|moonshot/i,
    code: 4.1,
    write: 4.2,
    speed: 3.5,
    cost: 3.5,
    vision: true
  }, {
    match: /grok/i,
    code: 4.2,
    write: 4,
    speed: 3.5,
    cost: 3,
    vision: true
  }, {
    match: /llama.*(4|70b|90b)/i,
    code: 3.9,
    write: 3.9,
    speed: 4,
    cost: 4.5,
    vision: false
  }, {
    match: /llama/i,
    code: 3.5,
    write: 3.6,
    speed: 4.5,
    cost: 4.5,
    vision: false
  }, {
    match: /mistral|mixtral/i,
    code: 3.6,
    write: 3.6,
    speed: 4,
    cost: 4,
    vision: false
  }];
  var NEUTRAL = {
    code: 3,
    write: 3,
    speed: 3,
    cost: 3,
    vision: false
  };
  function traitOf(modelId) {
    var s = String(modelId || "");
    var _iterator = _createForOfIteratorHelper(MODEL_TRAITS),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var m = _step.value;
        if (m.match.test(s)) return {
          code: m.code,
          write: m.write,
          speed: m.speed,
          cost: m.cost,
          vision: m.vision
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return NEUTRAL;
  }

  /* ---------- answers ---------- */
  var PROJECT_TYPES = [{
    id: "web",
    label: "wizTWeb",
    icon: I.code
  }, {
    id: "mobile",
    label: "wizTMobile",
    icon: I.globe
  }, {
    id: "script",
    label: "wizTScript",
    icon: I.bolt
  }, {
    id: "data",
    label: "wizTData",
    icon: I.chart
  }, {
    id: "content",
    label: "wizTContent",
    icon: I.edit
  }, {
    id: "design",
    label: "wizTDesign",
    icon: I.star
  }, {
    id: "learn",
    label: "wizTLearn",
    icon: I.book
  }, {
    id: "chat",
    label: "wizTChat",
    icon: I.globeSearch
  }];
  var SIZES = [{
    id: "small",
    label: "wizSSmall"
  }, {
    id: "medium",
    label: "wizSMedium"
  }, {
    id: "big",
    label: "wizSBig"
  }];
  var PRIOS = [{
    id: "quality",
    label: "wizPQuality"
  }, {
    id: "speed",
    label: "wizPSpeed"
  }, {
    id: "cost",
    label: "wizPCost"
  }, {
    id: "balanced",
    label: "wizPBalanced"
  }];
  function availableModels() {
    var out = [];
    var provs = [];
    try {
      provs = OC.providers.allProviders() || [];
    } catch (e) {
      provs = [];
    }
    var _iterator2 = _createForOfIteratorHelper(provs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var p = _step2.value;
        var act = [];
        try {
          act = OC.providers.activeKeys(p);
        } catch (e) {
          act = [];
        }
        if (!act.length) continue;
        var _iterator3 = _createForOfIteratorHelper(p.models || []),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var m = _step3.value;
            out.push({
              providerId: p.id,
              providerName: p.name || p.type,
              model: m,
              traits: traitOf(m)
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return out;
  }
  function scoreModel(cand, type, size, prio) {
    var x = cand.traits;
    var base = {
      quality: 0.5 * x.code + 0.3 * x.write + (x.vision ? 1 : 0),
      speed: 0.6 * x.speed + 0.25 * x.code + 0.15 * x.cost,
      cost: 0.55 * x.cost + 0.25 * x.speed + 0.2 * x.code,
      balanced: 0.35 * x.code + 0.2 * x.write + 0.25 * x.speed + 0.2 * x.cost
    }[prio] || 3;
    var bonus = 0;
    var coding = ["web", "mobile", "script", "data"].indexOf(type) >= 0;
    if (coding) bonus += 0.35 * x.code;
    if (type === "content") bonus += 0.35 * x.write;
    if (type === "design") bonus += (x.vision ? 0.5 : 0) + 0.2 * x.write;
    if (type === "learn") bonus += 0.25 * x.write + 0.15 * x.speed;
    if (type === "chat") bonus += 0.2 * x.speed + 0.2 * x.cost;
    if (size === "big") bonus += 0.3 * x.code;
    if (size === "small") bonus += 0.15 * x.speed + 0.15 * x.cost;
    if (size === "medium") bonus += 0.08 * x.speed;
    var score = base + bonus;
    var reasons = [];
    if (prio === "quality" && x.code >= 4.5) reasons.push(t("wizWhyTopCode"));
    if (prio === "speed" && x.speed >= 4.5) reasons.push(t("wizWhyFast"));
    if (prio === "cost" && x.cost >= 4.5) reasons.push(t("wizWhyCheap"));
    if (coding && x.code >= 4.3) reasons.push(t("wizWhyCodeFit"));
    if (type === "content" && x.write >= 4.3) reasons.push(t("wizWhyWriteFit"));
    if (type === "design" && x.vision) reasons.push(t("wizWhyVision"));
    if (size === "big" && x.code >= 4.5) reasons.push(t("wizWhyBig"));
    if (!reasons.length) reasons.push(t("wizWhyBalanced"));
    return {
      score: score,
      reasons: reasons.slice(0, 3)
    };
  }
  function recommend(answers) {
    var cands = availableModels();
    return cands.map(function (c) {
      var r = scoreModel(c, answers.type, answers.size, answers.prio);
      return Object.assign({}, c, r);
    }).sort(function (a, b) {
      return b.score - a.score;
    });
  }

  /* ---------- wizard UI ---------- */
  function openWizard() {
    var answers = {
      type: null,
      size: null,
      prio: null
    };
    var step = 0;
    var top = [];
    var body = document.createElement("div");
    var m = OC.modal({
      title: t("wizTitle"),
      body: body,
      foot: [],
      wide: true
    });
    function chip(id, label, icon) {
      return '<button class="wiz-chip" data-w="' + id + '">' + (icon || "") + "<span>" + esc(t(label)) + "</span></button>";
    }
    function stepHeader(n, title) {
      return '<div class="wiz-step"><span class="wiz-dot on"></span><span class="wiz-dot' + (n > 1 ? " on" : "") + '"></span><span class="wiz-dot' + (n > 2 ? " on" : "") + '"></span><b>' + esc(title) + "</b></div>";
    }
    function paint() {
      if (step === 0) {
        body.innerHTML = stepHeader(1, t("wizQ1")) + '<div class="wiz-grid">' + PROJECT_TYPES.map(function (x) {
          return chip(x.id, x.label, x.icon);
        }).join("") + "</div>" + '<div class="hint">' + t("wizHint1") + "</div>";
      } else if (step === 1) {
        body.innerHTML = stepHeader(2, t("wizQ2")) + '<div class="wiz-grid">' + SIZES.map(function (x) {
          return chip(x.id, x.label, x.icon);
        }).join("") + "</div>" + '<div class="flex" style="margin-top:10px"><button class="btn btn-sm" id="wiz-back">' + t("back") + "</button></div>";
      } else if (step === 2) {
        body.innerHTML = stepHeader(3, t("wizQ3")) + '<div class="wiz-grid">' + PRIOS.map(function (x) {
          return chip(x.id, x.label, x.icon);
        }).join("") + "</div>" + '<div class="flex" style="margin-top:10px"><button class="btn btn-sm" id="wiz-back">' + t("back") + "</button></div>";
      } else {
        paintResult();
      }
      $$("[data-w]", body).forEach(function (b) {
        b.onclick = function () {
          var v = b.dataset.w;
          if (step === 0) answers.type = v;else if (step === 1) answers.size = v;else if (step === 2) answers.prio = v;
          step++;
          paint();
        };
      });
      var bk = $("#wiz-back", body);
      if (bk) bk.onclick = function () {
        step--;
        paint();
      };
    }
    function paintResult() {
      top = recommend(answers);
      if (!top.length) {
        body.innerHTML = stepHeader(3, t("wizDone")) + '<div class="empty-state">' + I.bolt + "<p>" + t("wizNoProvider") + "</p></div>" + '<div class="flex"><button class="btn btn-sm" id="wiz-back">' + t("back") + "</button></div>";
        var bk = $("#wiz-back", body);
        if (bk) bk.onclick = function () {
          step = 2;
          paint();
        };
        return;
      }
      var best = top[0];
      var typeLabel = t((PROJECT_TYPES.find(function (x) {
        return x.id === answers.type;
      }) || {}).label || "wizTChat");
      var alt = top.slice(1, 3);
      body.innerHTML = stepHeader(3, t("wizDone")) + '<div class="wiz-result">' + '<div class="wr-crown">' + I.star + t("wizBestFor") + "</div>" + '<b class="wr-model" style="direction:ltr">' + esc(best.model) + "</b>" + '<div class="muted small">' + esc(best.providerName) + "</div>" + '<ul class="wr-why">' + best.reasons.map(function (r) {
        return "<li>" + esc(r) + "</li>";
      }).join("") + "</ul>" + (alt.length ? '<div class="wr-alts"><span class="muted small">' + t("wizAlternatives") + ":</span> " + alt.map(function (a) {
        return '<span class="attach-chip"><span class="aname" style="direction:ltr">' + esc(a.model) + '</span><span class="muted small">' + esc(a.providerName) + "</span></span>";
      }).join("") + "</div>" : "") + "</div>" + '<div class="hint">' + t("wizWillSet") + "</div>" + '<div class="flex" style="margin-top:10px"><button class="btn btn-sm" id="wiz-back">' + t("wizAgain") + "</button>" + '<button class="btn btn-primary" id="wiz-start">' + I.bolt + t("wizStart") + "</button></div>";
      $("#wiz-back", body).onclick = function () {
        step = 0;
        paint();
      };
      $("#wiz-start", body).onclick = function () {
        var c = {
          id: U.uid(),
          title: t("wizProjectPrefix") + " — " + typeLabel,
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
          webSearch: false,
          model: best.providerId + "::" + best.model,
          wizard: Object.assign({}, answers)
        };
        var list = store.getConvs();
        list.unshift(c);
        store.saveConvs(list);
        store.logActivity(store.currentUser().email, "project-wizard", best.providerId + "::" + best.model);
        m.close();
        OC._currentConvId = c.id;
        location.hash = "#/chat/" + c.id;
        if (OC.renderRoute) OC.renderRoute();else if (OC.renderSidebar) OC.renderSidebar();
        toast(t("wizStarted") + " · " + best.model, "ok");
      };
    }
    paint();
  }
  window.OC = window.OC || {};
  OC.openProjectWizard = openWizard;
  OC.recommendModels = recommend;
  OC.modelTraits = traitOf;
})();