/* Open Code — ES5 polyfills for old Android WebViews. Loaded FIRST. Designer: Abbas Sedigh */
(function () {
  "use strict";
  var D = Object.defineProperty, P = Object.prototype, A = Array.prototype, S = String.prototype, N = Number;

  if (!Object.assign) {
    Object.assign = function (t) {
      if (t == null) throw new TypeError("target is null");
      t = Object(t);
      for (var i = 1; i < arguments.length; i++) {
        var s = arguments[i];
        if (s == null) continue;
        s = Object(s);
        for (var k in s) if (P.hasOwnProperty.call(s, k)) t[k] = s[k];
      }
      return t;
    };
  }

  if (!Object.entries) {
    Object.entries = function (o) {
      o = Object(o); var r = [];
      for (var k in o) if (P.hasOwnProperty.call(o, k)) r.push([k, o[k]]);
      return r;
    };
  }

  if (!Object.values) {
    Object.values = function (o) {
      o = Object(o); var r = [];
      for (var k in o) if (P.hasOwnProperty.call(o, k)) r.push(o[k]);
      return r;
    };
  }

  if (!Array.from) {
    Array.from = function (like) {
      if (like == null) throw new TypeError("source is null");
      var arr = A.slice.call(like);
      var map = arguments[1];
      if (typeof map === "function") arr = arr.map(function (x, i) { return map(x, i); });
      return arr;
    };
  }

  if (!A.prototype.includes) {
    A.prototype.includes = function (x) {
      if (this == null) return false;
      return A.prototype.indexOf.call(this, x) !== -1;
    };
  }

  if (!A.prototype.flat) {
    A.prototype.flat = function (d) {
      d = arguments.length ? d : 1;
      var r = [];
      (function go(a, n) {
        for (var i = 0; i < a.length; i++) {
          if (A.isArray(a[i]) && n > 0) go(a[i], n - 1); else r.push(a[i]);
        }
      })(this, d === Infinity ? Infinity : (d || 1));
      return r;
    };
  }

  if (!S.prototype.includes) {
    S.prototype.includes = function (s) {
      if (this == null) return false;
      return S.prototype.indexOf.call(this, String(s)) !== -1;
    };
  }

  if (!S.prototype.padStart || !S.prototype.padEnd) {
    var pad = function (obj, n, s, fromStart) {
      obj = String(obj);
      s = s == null ? " " : String(s);
      n = Number(n) || 0;
      if (obj.length >= n) return obj;
      var need = n - obj.length, fill = "";
      while (fill.length < need) fill += s;
      fill = fill.slice(0, need);
      return fromStart ? fill + obj : obj + fill;
    };
    if (!S.prototype.padStart) S.prototype.padStart = function (n, s) { return pad(this, n, s, true); };
    if (!S.prototype.padEnd) S.prototype.padEnd = function (n, s) { return pad(this, n, s, false); };
  }

  if (!Promise.prototype.finally) {
    Promise.prototype.finally = function (fn) {
      var C = this.constructor;
      return this.then(
        function (v) { return C.resolve(typeof fn === "function" ? fn() : fn).then(function () { return v; }); },
        function (e) { return C.resolve(typeof fn === "function" ? fn() : fn).then(function () { throw e; }); }
      );
    };
  }
})();
