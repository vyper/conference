/*! @license Firebase v3.6.1
    Build: 3.6.1-rc.3
    Terms: https://firebase.google.com/terms/ */
(function () {
  var h,
      aa = aa || {},
      l = this,
      ba = function () {},
      ca = function () {
    throw Error("unimplemented abstract method");
  },
      m = function (a) {
    var b = typeof a;
    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  },
      da = function (a) {
    return null === a;
  },
      ea = function (a) {
    return "array" == m(a);
  },
      fa = function (a) {
    var b = m(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  },
      n = function (a) {
    return "string" == typeof a;
  },
      ga = function (a) {
    return "number" == typeof a;
  },
      p = function (a) {
    return "function" == m(a);
  },
      ha = function (a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  },
      ia = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
      ja = function (a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  },
      q = function (a, b, c) {
    q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return q.apply(null, arguments);
  },
      ka = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  },
      la = Date.now || function () {
    return +new Date();
  },
      r = function (a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.Rc = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.$e = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];

      return b.prototype[c].apply(a, d);
    };
  };

  var t = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };

  r(t, Error);
  t.prototype.name = "CustomError";

  var ma = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();

    return d + c.join("%s");
  },
      na = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  },
      pa = /&/g,
      qa = /</g,
      ra = />/g,
      sa = /"/g,
      ta = /'/g,
      ua = /\x00/g,
      va = /[\x00&<>"']/,
      u = function (a, b) {
    return -1 != a.indexOf(b);
  },
      wa = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  var xa = function (a, b) {
    b.unshift(a);
    t.call(this, ma.apply(null, b));
    b.shift();
  };

  r(xa, t);
  xa.prototype.name = "AssertionError";

  var ya = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c) var e = e + (": " + c),
        f = d;else a && (e += ": " + a, f = b);
    throw new xa("" + e, f || []);
  },
      w = function (a, b, c) {
    a || ya("", null, b, Array.prototype.slice.call(arguments, 2));
  },
      za = function (a, b) {
    throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  },
      Aa = function (a, b, c) {
    ga(a) || ya("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
      Ba = function (a, b, c) {
    n(a) || ya("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
  },
      Ca = function (a, b, c) {
    p(a) || ya("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
  };

  var Da = Array.prototype.indexOf ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.indexOf.call(a, b, c);
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;

    for (; c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  },
      x = Array.prototype.forEach ? function (a, b, c) {
    w(null != a.length);
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
  },
      Ea = function (a, b) {
    for (var c = n(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
  },
      Fa = Array.prototype.map ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.map.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));

    return e;
  },
      Ga = Array.prototype.some ? function (a, b, c) {
    w(null != a.length);
    return Array.prototype.some.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return !0;

    return !1;
  },
      Ia = function (a) {
    var b;

    a: {
      b = Ha;

      for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }

      b = -1;
    }

    return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
  },
      Ja = function (a, b) {
    return 0 <= Da(a, b);
  },
      La = function (a, b) {
    b = Da(a, b);
    var c;
    (c = 0 <= b) && Ka(a, b);
    return c;
  },
      Ka = function (a, b) {
    w(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  },
      Ma = function (a, b) {
    var c = 0;
    Ea(a, function (d, e) {
      b.call(void 0, d, e, a) && Ka(a, e) && c++;
    });
  },
      Na = function (a) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  },
      Oa = function (a) {
    var b = a.length;

    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

      return c;
    }

    return [];
  };

  var Pa = function (a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  },
      Qa = function (a) {
    var b = [],
        c = 0,
        d;

    for (d in a) b[c++] = a[d];

    return b;
  },
      Ra = function (a) {
    var b = [],
        c = 0,
        d;

    for (d in a) b[c++] = d;

    return b;
  },
      Sa = function (a) {
    for (var b in a) return !1;

    return !0;
  },
      Ta = function (a, b) {
    for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;

    for (c in b) if (!(c in a)) return !1;

    return !0;
  },
      Ua = function (a) {
    var b = {},
        c;

    for (c in a) b[c] = a[c];

    return b;
  },
      Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
      Wa = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];

      for (c in d) a[c] = d[c];

      for (var f = 0; f < Va.length; f++) c = Va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };

  var Xa;

  a: {
    var Ya = l.navigator;

    if (Ya) {
      var Za = Ya.userAgent;

      if (Za) {
        Xa = Za;
        break a;
      }
    }

    Xa = "";
  }

  var y = function (a) {
    return u(Xa, a);
  };

  var $a = function (a) {
    $a[" "](a);
    return a;
  };

  $a[" "] = ba;

  var bb = function (a, b) {
    var c = ab;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  };

  var cb = y("Opera"),
      z = y("Trident") || y("MSIE"),
      db = y("Edge"),
      eb = db || z,
      fb = y("Gecko") && !(u(Xa.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
      gb = u(Xa.toLowerCase(), "webkit") && !y("Edge"),
      hb = function () {
    var a = l.document;
    return a ? a.documentMode : void 0;
  },
      ib;

  a: {
    var jb = "",
        kb = function () {
      var a = Xa;
      if (fb) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (db) return /Edge\/([\d\.]+)/.exec(a);
      if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (gb) return /WebKit\/(\S+)/.exec(a);
      if (cb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    kb && (jb = kb ? kb[1] : "");

    if (z) {
      var lb = hb();

      if (null != lb && lb > parseFloat(jb)) {
        ib = String(lb);
        break a;
      }
    }

    ib = jb;
  }

  var mb = ib,
      ab = {},
      A = function (a) {
    return bb(a, function () {
      for (var b = 0, c = na(String(mb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            k = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
          if (0 == g[0].length && 0 == k[0].length) break;
          b = wa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || wa(0 == g[2].length, 0 == k[2].length) || wa(g[2], k[2]);
          g = g[3];
          k = k[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  },
      nb;

  var ob = l.document;
  nb = ob && z ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;

  var pb = null,
      qb = null,
      sb = function (a) {
    var b = "";
    rb(a, function (a) {
      b += String.fromCharCode(a);
    });
    return b;
  },
      rb = function (a, b) {
    function c(b) {
      for (; d < a.length;) {
        var c = a.charAt(d++),
            e = qb[c];
        if (null != e) return e;
        if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
      }

      return b;
    }

    tb();

    for (var d = 0;;) {
      var e = c(-1),
          f = c(0),
          g = c(64),
          k = c(64);
      if (64 === k && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
    }
  },
      tb = function () {
    if (!pb) {
      pb = {};
      qb = {};

      for (var a = 0; 65 > a; a++) pb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), qb[pb[a]] = a, 62 <= a && (qb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
    }
  };

  var ub = !z || 9 <= Number(nb),
      vb = z && !A("9");
  !gb || A("528");
  fb && A("1.9b") || z && A("8") || cb && A("9.5") || gb && A("528");
  fb && !A("8") || z && A("9");

  var wb = function () {
    this.za = this.za;
    this.Rb = this.Rb;
  };

  wb.prototype.za = !1;

  wb.prototype.isDisposed = function () {
    return this.za;
  };

  wb.prototype.Na = function () {
    if (this.Rb) for (; this.Rb.length;) this.Rb.shift()();
  };

  var xb = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Ua = !1;
    this.ud = !0;
  };

  xb.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.ud = !1;
  };

  var yb = function (a, b) {
    xb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.lb = this.state = null;
    a && this.init(a, b);
  };

  r(yb, xb);

  yb.prototype.init = function (a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;

    if (b = a.relatedTarget) {
      if (fb) {
        var e;

        a: {
          try {
            $a(b.nodeName);
            e = !0;
            break a;
          } catch (f) {}

          e = !1;
        }

        e || (b = null);
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

    this.relatedTarget = b;
    null === d ? (this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.lb = a;
    a.defaultPrevented && this.preventDefault();
  };

  yb.prototype.preventDefault = function () {
    yb.Rc.preventDefault.call(this);
    var a = this.lb;
    if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, vb) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) {}
  };

  yb.prototype.ee = function () {
    return this.lb;
  };

  var zb = "closure_listenable_" + (1E6 * Math.random() | 0),
      Ab = 0;

  var Bb = function (a, b, c, d, e) {
    this.listener = a;
    this.Wb = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Ib = e;
    this.key = ++Ab;
    this.Za = this.Cb = !1;
  },
      Cb = function (a) {
    a.Za = !0;
    a.listener = null;
    a.Wb = null;
    a.src = null;
    a.Ib = null;
  };

  var Db = function (a) {
    this.src = a;
    this.v = {};
    this.zb = 0;
  };

  Db.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.v[f];
    a || (a = this.v[f] = [], this.zb++);
    var g = Eb(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Cb = !1)) : (b = new Bb(b, this.src, f, !!d, e), b.Cb = c, a.push(b));
    return b;
  };

  Db.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.v)) return !1;
    var e = this.v[a];
    b = Eb(e, b, c, d);
    return -1 < b ? (Cb(e[b]), Ka(e, b), 0 == e.length && (delete this.v[a], this.zb--), !0) : !1;
  };

  var Fb = function (a, b) {
    var c = b.type;
    c in a.v && La(a.v[c], b) && (Cb(b), 0 == a.v[c].length && (delete a.v[c], a.zb--));
  };

  Db.prototype.vc = function (a, b, c, d) {
    a = this.v[a.toString()];
    var e = -1;
    a && (e = Eb(a, b, c, d));
    return -1 < e ? a[e] : null;
  };

  var Eb = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Za && f.listener == b && f.capture == !!c && f.Ib == d) return e;
    }

    return -1;
  };

  var Gb = "closure_lm_" + (1E6 * Math.random() | 0),
      Hb = {},
      Ib = 0,
      Jb = function (a, b, c, d, e) {
    if (ea(b)) for (var f = 0; f < b.length; f++) Jb(a, b[f], c, d, e);else c = Kb(c), a && a[zb] ? a.listen(b, c, d, e) : Lb(a, b, c, !1, d, e);
  },
      Lb = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = !!e,
        k = Mb(a);
    k || (a[Gb] = k = new Db(a));
    c = k.add(b, c, d, e, f);

    if (!c.Wb) {
      d = Nb();
      c.Wb = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent(Ob(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
      Ib++;
    }
  },
      Nb = function () {
    var a = Pb,
        b = ub ? function (c) {
      return a.call(b.src, b.listener, c);
    } : function (c) {
      c = a.call(b.src, b.listener, c);
      if (!c) return c;
    };
    return b;
  },
      Qb = function (a, b, c, d, e) {
    if (ea(b)) for (var f = 0; f < b.length; f++) Qb(a, b[f], c, d, e);else c = Kb(c), a && a[zb] ? Rb(a, b, c, d, e) : Lb(a, b, c, !0, d, e);
  },
      Sb = function (a, b, c, d, e) {
    if (ea(b)) for (var f = 0; f < b.length; f++) Sb(a, b[f], c, d, e);else c = Kb(c), a && a[zb] ? a.$.remove(String(b), c, d, e) : a && (a = Mb(a)) && (b = a.vc(b, c, !!d, e)) && Tb(b);
  },
      Tb = function (a) {
    if (!ga(a) && a && !a.Za) {
      var b = a.src;
      if (b && b[zb]) Fb(b.$, a);else {
        var c = a.type,
            d = a.Wb;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Ob(c), d);
        Ib--;
        (c = Mb(b)) ? (Fb(c, a), 0 == c.zb && (c.src = null, b[Gb] = null)) : Cb(a);
      }
    }
  },
      Ob = function (a) {
    return a in Hb ? Hb[a] : Hb[a] = "on" + a;
  },
      Vb = function (a, b, c, d) {
    var e = !0;
    if (a = Mb(a)) if (b = a.v[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.capture == c && !f.Za && (f = Ub(f, d), e = e && !1 !== f);
    }
    return e;
  },
      Ub = function (a, b) {
    var c = a.listener,
        d = a.Ib || a.src;
    a.Cb && Tb(a);
    return c.call(d, b);
  },
      Pb = function (a, b) {
    if (a.Za) return !0;

    if (!ub) {
      if (!b) a: {
        b = ["window", "event"];

        for (var c = l, d; d = b.shift();) if (null != c[d]) c = c[d];else {
          b = null;
          break a;
        }

        b = c;
      }
      d = b;
      b = new yb(d, this);
      c = !0;

      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode) try {
            d.keyCode = -1;
            break a;
          } catch (g) {
            e = !0;
          }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }

        d = [];

        for (e = b.currentTarget; e; e = e.parentNode) d.push(e);

        a = a.type;

        for (e = d.length - 1; !b.Ua && 0 <= e; e--) {
          b.currentTarget = d[e];
          var f = Vb(d[e], a, !0, b),
              c = c && f;
        }

        for (e = 0; !b.Ua && e < d.length; e++) b.currentTarget = d[e], f = Vb(d[e], a, !1, b), c = c && f;
      }

      return c;
    }

    return Ub(a, new yb(b, this));
  },
      Mb = function (a) {
    a = a[Gb];
    return a instanceof Db ? a : null;
  },
      Wb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
      Kb = function (a) {
    w(a, "Listener can not be null.");
    if (p(a)) return a;
    w(a.handleEvent, "An object listener must have handleEvent method.");
    a[Wb] || (a[Wb] = function (b) {
      return a.handleEvent(b);
    });
    return a[Wb];
  };

  var Xb = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

  var Zb = function () {
    this.fc = "";
    this.Md = Yb;
  };

  Zb.prototype.Lb = !0;

  Zb.prototype.Gb = function () {
    return this.fc;
  };

  Zb.prototype.toString = function () {
    return "Const{" + this.fc + "}";
  };

  var $b = function (a) {
    if (a instanceof Zb && a.constructor === Zb && a.Md === Yb) return a.fc;
    za("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
      Yb = {},
      ac = function (a) {
    var b = new Zb();
    b.fc = a;
    return b;
  };

  ac("");

  var B = function () {
    this.ka = "";
    this.Ld = bc;
  };

  B.prototype.Lb = !0;

  B.prototype.Gb = function () {
    return this.ka;
  };

  B.prototype.toString = function () {
    return "SafeUrl{" + this.ka + "}";
  };

  var cc = function (a) {
    if (a instanceof B && a.constructor === B && a.Ld === bc) return a.ka;
    za("expected object of type SafeUrl, got '" + a + "' of type " + m(a));
    return "type_error:SafeUrl";
  },
      dc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
      fc = function (a) {
    if (a instanceof B) return a;
    a = a.Lb ? a.Gb() : String(a);
    dc.test(a) || (a = "about:invalid#zClosurez");
    return ec(a);
  },
      bc = {},
      ec = function (a) {
    var b = new B();
    b.ka = a;
    return b;
  };

  ec("about:blank");

  var gc = function (a) {
    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  },
      hc = function (a) {
    a = String(a);
    if (gc(a)) try {
      return eval("(" + a + ")");
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  },
      kc = function (a) {
    var b = [];
    ic(new jc(), a, b);
    return b.join("");
  },
      jc = function () {
    this.$b = void 0;
  },
      ic = function (a, b, c) {
    if (null == b) c.push("null");else {
      if ("object" == typeof b) {
        if (ea(b)) {
          var d = b;
          b = d.length;
          c.push("[");

          for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], ic(a, a.$b ? a.$b.call(d, String(f), e) : e, c), e = ",";

          c.push("]");
          return;
        }

        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
          c.push("{");
          f = "";

          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), lc(d, c), c.push(":"), ic(a, a.$b ? a.$b.call(b, d, e) : e, c), f = ","));

          c.push("}");
          return;
        }
      }

      switch (typeof b) {
        case "string":
          lc(b, c);
          break;

        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;

        case "boolean":
          c.push(String(b));
          break;

        case "function":
          c.push("null");
          break;

        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  },
      mc = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      nc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
      lc = function (a, b) {
    b.push('"', a.replace(nc, function (a) {
      var b = mc[a];
      b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), mc[a] = b);
      return b;
    }), '"');
  };

  var oc = function () {};

  oc.prototype.Vc = null;
  oc.prototype.kb = ca;

  var pc = function (a) {
    return a.Vc || (a.Vc = a.Ob());
  };

  oc.prototype.Ob = ca;

  var qc,
      rc = function () {};

  r(rc, oc);

  rc.prototype.kb = function () {
    var a = sc(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };

  rc.prototype.Ob = function () {
    var a = {};
    sc(this) && (a[0] = !0, a[1] = !0);
    return a;
  };

  var sc = function (a) {
    if (!a.jd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];

        try {
          return new ActiveXObject(d), a.jd = d;
        } catch (e) {}
      }

      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }

    return a.jd;
  };

  qc = new rc();

  var tc = function () {};

  r(tc, oc);

  tc.prototype.kb = function () {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a) return a;
    if ("undefined" != typeof XDomainRequest) return new uc();
    throw Error("Unsupported browser");
  };

  tc.prototype.Ob = function () {
    return {};
  };

  var uc = function () {
    this.na = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = "";
    this.status = -1;
    this.statusText = this.responseXML = null;
    this.na.onload = q(this.ie, this);
    this.na.onerror = q(this.gd, this);
    this.na.onprogress = q(this.je, this);
    this.na.ontimeout = q(this.ke, this);
  };

  h = uc.prototype;

  h.open = function (a, b, c) {
    if (null != c && !c) throw Error("Only async requests are supported.");
    this.na.open(a, b);
  };

  h.send = function (a) {
    if (a) {
      if ("string" == typeof a) this.na.send(a);else throw Error("Only string data is supported");
    } else this.na.send();
  };

  h.abort = function () {
    this.na.abort();
  };

  h.setRequestHeader = function () {};

  h.ie = function () {
    this.status = 200;
    this.responseText = this.na.responseText;
    vc(this, 4);
  };

  h.gd = function () {
    this.status = 500;
    this.responseText = "";
    vc(this, 4);
  };

  h.ke = function () {
    this.gd();
  };

  h.je = function () {
    this.status = 200;
    vc(this, 1);
  };

  var vc = function (a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  };

  var xc = function () {
    this.Ub = "";
    this.Nd = wc;
  };

  xc.prototype.Lb = !0;

  xc.prototype.Gb = function () {
    return this.Ub;
  };

  xc.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.Ub + "}";
  };

  var wc = {};

  var zc = function () {
    this.ka = "";
    this.Kd = yc;
  };

  zc.prototype.Lb = !0;

  zc.prototype.Gb = function () {
    return this.ka;
  };

  zc.prototype.toString = function () {
    return "SafeHtml{" + this.ka + "}";
  };

  var Ac = function (a) {
    if (a instanceof zc && a.constructor === zc && a.Kd === yc) return a.ka;
    za("expected object of type SafeHtml, got '" + a + "' of type " + m(a));
    return "type_error:SafeHtml";
  },
      yc = {};

  zc.prototype.re = function (a) {
    this.ka = a;
    return this;
  };

  !fb && !z || z && 9 <= Number(nb) || fb && A("1.9.1");
  z && A("9");

  var Cc = function (a, b) {
    Pa(b, function (b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Bc.hasOwnProperty(d) ? a.setAttribute(Bc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
    });
  },
      Bc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  var Dc = function (a, b, c) {
    this.ue = c;
    this.Ud = a;
    this.Ge = b;
    this.Qb = 0;
    this.Jb = null;
  };

  Dc.prototype.get = function () {
    var a;
    0 < this.Qb ? (this.Qb--, a = this.Jb, this.Jb = a.next, a.next = null) : a = this.Ud();
    return a;
  };

  Dc.prototype.put = function (a) {
    this.Ge(a);
    this.Qb < this.ue && (this.Qb++, a.next = this.Jb, this.Jb = a);
  };

  var Ec = function (a) {
    l.setTimeout(function () {
      throw a;
    }, 0);
  },
      Fc,
      Gc = function () {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function () {
      var a = document.createElement("IFRAME");
      a.style.display = "none";
      a.src = "";
      document.documentElement.appendChild(a);
      var b = a.contentWindow,
          a = b.document;
      a.open();
      a.write("");
      a.close();
      var c = "callImmediate" + Math.random(),
          d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
          a = q(function (a) {
        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
      }, this);
      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          b.postMessage(c, d);
        }
      };
    });

    if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var a = c.Zc;
          c.Zc = null;
          a();
        }
      };

      return function (a) {
        d.next = {
          Zc: a
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }

    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
      var b = document.createElement("SCRIPT");

      b.onreadystatechange = function () {
        b.onreadystatechange = null;
        b.parentNode.removeChild(b);
        b = null;
        a();
        a = null;
      };

      document.documentElement.appendChild(b);
    } : function (a) {
      l.setTimeout(a, 0);
    };
  };

  var Hc = function () {
    this.kc = this.Ia = null;
  },
      Jc = new Dc(function () {
    return new Ic();
  }, function (a) {
    a.reset();
  }, 100);

  Hc.prototype.add = function (a, b) {
    var c = Jc.get();
    c.set(a, b);
    this.kc ? this.kc.next = c : (w(!this.Ia), this.Ia = c);
    this.kc = c;
  };

  Hc.prototype.remove = function () {
    var a = null;
    this.Ia && (a = this.Ia, this.Ia = this.Ia.next, this.Ia || (this.kc = null), a.next = null);
    return a;
  };

  var Ic = function () {
    this.next = this.scope = this.uc = null;
  };

  Ic.prototype.set = function (a, b) {
    this.uc = a;
    this.scope = b;
    this.next = null;
  };

  Ic.prototype.reset = function () {
    this.next = this.scope = this.uc = null;
  };

  var Oc = function (a, b) {
    Kc || Lc();
    Mc || (Kc(), Mc = !0);
    Nc.add(a, b);
  },
      Kc,
      Lc = function () {
    var a = l.Promise;

    if (-1 != String(a).indexOf("[native code]")) {
      var b = a.resolve(void 0);

      Kc = function () {
        b.then(Pc);
      };
    } else Kc = function () {
      var a = Pc;
      !p(l.setImmediate) || l.Window && l.Window.prototype && !y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Fc || (Fc = Gc()), Fc(a)) : l.setImmediate(a);
    };
  },
      Mc = !1,
      Nc = new Hc(),
      Pc = function () {
    for (var a; a = Nc.remove();) {
      try {
        a.uc.call(a.scope);
      } catch (b) {
        Ec(b);
      }

      Jc.put(a);
    }

    Mc = !1;
  };

  var Qc = function (a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  },
      Rc = function (a) {
    if (!a) return !1;

    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };

  var C = function (a, b) {
    this.G = 0;
    this.la = void 0;
    this.La = this.ga = this.m = null;
    this.Hb = this.tc = !1;
    if (a != ba) try {
      var c = this;
      a.call(b, function (a) {
        Sc(c, 2, a);
      }, function (a) {
        if (!(a instanceof Tc)) try {
          if (a instanceof Error) throw a;
          throw Error("Promise rejected.");
        } catch (e) {}
        Sc(c, 3, a);
      });
    } catch (d) {
      Sc(this, 3, d);
    }
  },
      Uc = function () {
    this.next = this.context = this.Ra = this.Da = this.child = null;
    this.ib = !1;
  };

  Uc.prototype.reset = function () {
    this.context = this.Ra = this.Da = this.child = null;
    this.ib = !1;
  };

  var Vc = new Dc(function () {
    return new Uc();
  }, function (a) {
    a.reset();
  }, 100),
      Wc = function (a, b, c) {
    var d = Vc.get();
    d.Da = a;
    d.Ra = b;
    d.context = c;
    return d;
  },
      D = function (a) {
    if (a instanceof C) return a;
    var b = new C(ba);
    Sc(b, 2, a);
    return b;
  },
      E = function (a) {
    return new C(function (b, c) {
      c(a);
    });
  },
      Yc = function (a, b, c) {
    Xc(a, b, c, null) || Oc(ka(b, a));
  },
      Zc = function (a) {
    return new C(function (b) {
      var c = a.length,
          d = [];
      if (c) for (var e = function (a, e, f) {
        c--;
        d[a] = e ? {
          de: !0,
          value: f
        } : {
          de: !1,
          reason: f
        };
        0 == c && b(d);
      }, f = 0, g; f < a.length; f++) g = a[f], Yc(g, ka(e, f, !0), ka(e, f, !1));else b(d);
    });
  };

  C.prototype.then = function (a, b, c) {
    null != a && Ca(a, "opt_onFulfilled should be a function.");
    null != b && Ca(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return $c(this, p(a) ? a : null, p(b) ? b : null, c);
  };

  Qc(C);

  var bd = function (a, b) {
    b = Wc(b, b, void 0);
    b.ib = !0;
    ad(a, b);
    return a;
  };

  C.prototype.h = function (a, b) {
    return $c(this, null, a, b);
  };

  C.prototype.cancel = function (a) {
    0 == this.G && Oc(function () {
      var b = new Tc(a);
      cd(this, b);
    }, this);
  };

  var cd = function (a, b) {
    if (0 == a.G) if (a.m) {
      var c = a.m;

      if (c.ga) {
        for (var d = 0, e = null, f = null, g = c.ga; g && (g.ib || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);

        e && (0 == c.G && 1 == d ? cd(c, b) : (f ? (d = f, w(c.ga), w(null != d), d.next == c.La && (c.La = d), d.next = d.next.next) : dd(c), ed(c, e, 3, b)));
      }

      a.m = null;
    } else Sc(a, 3, b);
  },
      ad = function (a, b) {
    a.ga || 2 != a.G && 3 != a.G || fd(a);
    w(null != b.Da);
    a.La ? a.La.next = b : a.ga = b;
    a.La = b;
  },
      $c = function (a, b, c, d) {
    var e = Wc(null, null, null);
    e.child = new C(function (a, g) {
      e.Da = b ? function (c) {
        try {
          var e = b.call(d, c);
          a(e);
        } catch (oa) {
          g(oa);
        }
      } : a;
      e.Ra = c ? function (b) {
        try {
          var e = c.call(d, b);
          void 0 === e && b instanceof Tc ? g(b) : a(e);
        } catch (oa) {
          g(oa);
        }
      } : g;
    });
    e.child.m = a;
    ad(a, e);
    return e.child;
  };

  C.prototype.Qe = function (a) {
    w(1 == this.G);
    this.G = 0;
    Sc(this, 2, a);
  };

  C.prototype.Re = function (a) {
    w(1 == this.G);
    this.G = 0;
    Sc(this, 3, a);
  };

  var Sc = function (a, b, c) {
    0 == a.G && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.G = 1, Xc(c, a.Qe, a.Re, a) || (a.la = c, a.G = b, a.m = null, fd(a), 3 != b || c instanceof Tc || gd(a, c)));
  },
      Xc = function (a, b, c, d) {
    if (a instanceof C) return null != b && Ca(b, "opt_onFulfilled should be a function."), null != c && Ca(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), ad(a, Wc(b || ba, c || null, d)), !0;
    if (Rc(a)) return a.then(b, c, d), !0;
    if (ha(a)) try {
      var e = a.then;
      if (p(e)) return hd(a, e, b, c, d), !0;
    } catch (f) {
      return c.call(d, f), !0;
    }
    return !1;
  },
      hd = function (a, b, c, d, e) {
    var f = !1,
        g = function (a) {
      f || (f = !0, c.call(e, a));
    },
        k = function (a) {
      f || (f = !0, d.call(e, a));
    };

    try {
      b.call(a, g, k);
    } catch (v) {
      k(v);
    }
  },
      fd = function (a) {
    a.tc || (a.tc = !0, Oc(a.Zd, a));
  },
      dd = function (a) {
    var b = null;
    a.ga && (b = a.ga, a.ga = b.next, b.next = null);
    a.ga || (a.La = null);
    null != b && w(null != b.Da);
    return b;
  };

  C.prototype.Zd = function () {
    for (var a; a = dd(this);) ed(this, a, this.G, this.la);

    this.tc = !1;
  };

  var ed = function (a, b, c, d) {
    if (3 == c && b.Ra && !b.ib) for (; a && a.Hb; a = a.m) a.Hb = !1;
    if (b.child) b.child.m = null, id(b, c, d);else try {
      b.ib ? b.Da.call(b.context) : id(b, c, d);
    } catch (e) {
      jd.call(null, e);
    }
    Vc.put(b);
  },
      id = function (a, b, c) {
    2 == b ? a.Da.call(a.context, c) : a.Ra && a.Ra.call(a.context, c);
  },
      gd = function (a, b) {
    a.Hb = !0;
    Oc(function () {
      a.Hb && jd.call(null, b);
    });
  },
      jd = Ec,
      Tc = function (a) {
    t.call(this, a);
  };

  r(Tc, t);
  Tc.prototype.name = "cancel";
  /*
  Portions of this code are from MochiKit, received by
  The Closure Authors under the MIT license. All other code is Copyright
  2005-2009 The Closure Authors. All Rights Reserved.
  */

  var F = function (a, b) {
    this.bc = [];
    this.od = a;
    this.bd = b || null;
    this.nb = this.Pa = !1;
    this.la = void 0;
    this.Pc = this.Uc = this.oc = !1;
    this.ic = 0;
    this.m = null;
    this.pc = 0;
  };

  F.prototype.cancel = function (a) {
    if (this.Pa) this.la instanceof F && this.la.cancel();else {
      if (this.m) {
        var b = this.m;
        delete this.m;
        a ? b.cancel(a) : (b.pc--, 0 >= b.pc && b.cancel());
      }

      this.od ? this.od.call(this.bd, this) : this.Pc = !0;
      this.Pa || kd(this, new ld());
    }
  };

  F.prototype.$c = function (a, b) {
    this.oc = !1;
    md(this, a, b);
  };

  var md = function (a, b, c) {
    a.Pa = !0;
    a.la = c;
    a.nb = !b;
    nd(a);
  },
      pd = function (a) {
    if (a.Pa) {
      if (!a.Pc) throw new od();
      a.Pc = !1;
    }
  };

  F.prototype.callback = function (a) {
    pd(this);
    qd(a);
    md(this, !0, a);
  };

  var kd = function (a, b) {
    pd(a);
    qd(b);
    md(a, !1, b);
  },
      qd = function (a) {
    w(!(a instanceof F), "An execution sequence may not be initiated with a blocking Deferred.");
  },
      ud = function (a) {
    var b = rd("https://apis.google.com/js/client.js?onload=" + sd);
    td(b, null, a, void 0);
  },
      td = function (a, b, c, d) {
    w(!a.Uc, "Blocking Deferreds can not be re-used");
    a.bc.push([b, c, d]);
    a.Pa && nd(a);
  };

  F.prototype.then = function (a, b, c) {
    var d,
        e,
        f = new C(function (a, b) {
      d = a;
      e = b;
    });
    td(this, d, function (a) {
      a instanceof ld ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };

  Qc(F);

  var vd = function (a) {
    return Ga(a.bc, function (a) {
      return p(a[1]);
    });
  },
      nd = function (a) {
    if (a.ic && a.Pa && vd(a)) {
      var b = a.ic,
          c = wd[b];
      c && (l.clearTimeout(c.ob), delete wd[b]);
      a.ic = 0;
    }

    a.m && (a.m.pc--, delete a.m);

    for (var b = a.la, d = c = !1; a.bc.length && !a.oc;) {
      var e = a.bc.shift(),
          f = e[0],
          g = e[1],
          e = e[2];
      if (f = a.nb ? g : f) try {
        var k = f.call(e || a.bd, b);
        void 0 !== k && (a.nb = a.nb && (k == b || k instanceof Error), a.la = b = k);
        if (Rc(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.oc = !0;
      } catch (v) {
        b = v, a.nb = !0, vd(a) || (c = !0);
      }
    }

    a.la = b;
    d && (k = q(a.$c, a, !0), d = q(a.$c, a, !1), b instanceof F ? (td(b, k, d), b.Uc = !0) : b.then(k, d));
    c && (b = new xd(b), wd[b.ob] = b, a.ic = b.ob);
  },
      od = function () {
    t.call(this);
  };

  r(od, t);
  od.prototype.message = "Deferred has already fired";
  od.prototype.name = "AlreadyCalledError";

  var ld = function () {
    t.call(this);
  };

  r(ld, t);
  ld.prototype.message = "Deferred was canceled";
  ld.prototype.name = "CanceledError";

  var xd = function (a) {
    this.ob = l.setTimeout(q(this.Pe, this), 0);
    this.K = a;
  };

  xd.prototype.Pe = function () {
    w(wd[this.ob], "Cannot throw an error that is not scheduled.");
    delete wd[this.ob];
    throw this.K;
  };

  var wd = {};

  var rd = function (a) {
    var b = new xc();
    b.Ub = a;
    return yd(b);
  },
      yd = function (a) {
    var b = {},
        c = b.document || document,
        d;
    a instanceof xc && a.constructor === xc && a.Nd === wc ? d = a.Ub : (za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");
    var e = document.createElement("SCRIPT");
    a = {
      vd: e,
      yb: void 0
    };
    var f = new F(zd, a),
        g = null,
        k = null != b.timeout ? b.timeout : 5E3;
    0 < k && (g = window.setTimeout(function () {
      Ad(e, !0);
      kd(f, new Bd(1, "Timeout reached for loading script " + d));
    }, k), a.yb = g);

    e.onload = e.onreadystatechange = function () {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Ad(e, b.af || !1, g), f.callback(null));
    };

    e.onerror = function () {
      Ad(e, !0, g);
      kd(f, new Bd(0, "Error while loading script " + d));
    };

    a = b.attributes || {};
    Wa(a, {
      type: "text/javascript",
      charset: "UTF-8",
      src: d
    });
    Cc(e, a);
    Cd(c).appendChild(e);
    return f;
  },
      Cd = function (a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
  },
      zd = function () {
    if (this && this.vd) {
      var a = this.vd;
      a && "SCRIPT" == a.tagName && Ad(a, !0, this.yb);
    }
  },
      Ad = function (a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = ba;
    a.onerror = ba;
    a.onreadystatechange = ba;
    b && window.setTimeout(function () {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  },
      Bd = function (a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    t.call(this, c);
    this.code = a;
  };

  r(Bd, t);

  var G = function () {
    wb.call(this);
    this.$ = new Db(this);
    this.Qd = this;
    this.Ec = null;
  };

  r(G, wb);
  G.prototype[zb] = !0;
  h = G.prototype;

  h.addEventListener = function (a, b, c, d) {
    Jb(this, a, b, c, d);
  };

  h.removeEventListener = function (a, b, c, d) {
    Sb(this, a, b, c, d);
  };

  h.dispatchEvent = function (a) {
    Dd(this);
    var b,
        c = this.Ec;

    if (c) {
      b = [];

      for (var d = 1; c; c = c.Ec) b.push(c), w(1E3 > ++d, "infinite loop");
    }

    c = this.Qd;
    d = a.type || a;
    if (n(a)) a = new xb(a, c);else if (a instanceof xb) a.target = a.target || c;else {
      var e = a;
      a = new xb(d, c);
      Wa(a, e);
    }
    var e = !0,
        f;
    if (b) for (var g = b.length - 1; !a.Ua && 0 <= g; g--) f = a.currentTarget = b[g], e = Ed(f, d, !0, a) && e;
    a.Ua || (f = a.currentTarget = c, e = Ed(f, d, !0, a) && e, a.Ua || (e = Ed(f, d, !1, a) && e));
    if (b) for (g = 0; !a.Ua && g < b.length; g++) f = a.currentTarget = b[g], e = Ed(f, d, !1, a) && e;
    return e;
  };

  h.Na = function () {
    G.Rc.Na.call(this);

    if (this.$) {
      var a = this.$,
          b = 0,
          c;

      for (c in a.v) {
        for (var d = a.v[c], e = 0; e < d.length; e++) ++b, Cb(d[e]);

        delete a.v[c];
        a.zb--;
      }
    }

    this.Ec = null;
  };

  h.listen = function (a, b, c, d) {
    Dd(this);
    return this.$.add(String(a), b, !1, c, d);
  };

  var Rb = function (a, b, c, d, e) {
    a.$.add(String(b), c, !0, d, e);
  },
      Ed = function (a, b, c, d) {
    b = a.$.v[String(b)];
    if (!b) return !0;
    b = b.concat();

    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];

      if (g && !g.Za && g.capture == c) {
        var k = g.listener,
            v = g.Ib || g.src;
        g.Cb && Fb(a.$, g);
        e = !1 !== k.call(v, d) && e;
      }
    }

    return e && 0 != d.ud;
  };

  G.prototype.vc = function (a, b, c, d) {
    return this.$.vc(String(a), b, c, d);
  };

  var Dd = function (a) {
    w(a.$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
  };

  var Fd = "StopIteration" in l ? l.StopIteration : {
    message: "StopIteration",
    stack: ""
  },
      Gd = function () {};

  Gd.prototype.next = function () {
    throw Fd;
  };

  Gd.prototype.Pd = function () {
    return this;
  };

  var H = function (a, b) {
    this.aa = {};
    this.s = [];
    this.hb = this.l = 0;
    var c = arguments.length;

    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");

      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.addAll(a);
  };

  H.prototype.V = function () {
    Hd(this);

    for (var a = [], b = 0; b < this.s.length; b++) a.push(this.aa[this.s[b]]);

    return a;
  };

  H.prototype.ia = function () {
    Hd(this);
    return this.s.concat();
  };

  H.prototype.jb = function (a) {
    return Id(this.aa, a);
  };

  H.prototype.remove = function (a) {
    return Id(this.aa, a) ? (delete this.aa[a], this.l--, this.hb++, this.s.length > 2 * this.l && Hd(this), !0) : !1;
  };

  var Hd = function (a) {
    if (a.l != a.s.length) {
      for (var b = 0, c = 0; b < a.s.length;) {
        var d = a.s[b];
        Id(a.aa, d) && (a.s[c++] = d);
        b++;
      }

      a.s.length = c;
    }

    if (a.l != a.s.length) {
      for (var e = {}, c = b = 0; b < a.s.length;) d = a.s[b], Id(e, d) || (a.s[c++] = d, e[d] = 1), b++;

      a.s.length = c;
    }
  };

  h = H.prototype;

  h.get = function (a, b) {
    return Id(this.aa, a) ? this.aa[a] : b;
  };

  h.set = function (a, b) {
    Id(this.aa, a) || (this.l++, this.s.push(a), this.hb++);
    this.aa[a] = b;
  };

  h.addAll = function (a) {
    var b;
    a instanceof H ? (b = a.ia(), a = a.V()) : (b = Ra(a), a = Qa(a));

    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };

  h.forEach = function (a, b) {
    for (var c = this.ia(), d = 0; d < c.length; d++) {
      var e = c[d],
          f = this.get(e);
      a.call(b, f, e, this);
    }
  };

  h.clone = function () {
    return new H(this);
  };

  h.Pd = function (a) {
    Hd(this);
    var b = 0,
        c = this.hb,
        d = this,
        e = new Gd();

    e.next = function () {
      if (c != d.hb) throw Error("The map has changed since the iterator was created");
      if (b >= d.s.length) throw Fd;
      var e = d.s[b++];
      return a ? e : d.aa[e];
    };

    return e;
  };

  var Id = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };

  var Jd = function (a) {
    if (a.V && "function" == typeof a.V) return a.V();
    if (n(a)) return a.split("");

    if (fa(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

      return b;
    }

    return Qa(a);
  },
      Kd = function (a) {
    if (a.ia && "function" == typeof a.ia) return a.ia();

    if (!a.V || "function" != typeof a.V) {
      if (fa(a) || n(a)) {
        var b = [];
        a = a.length;

        for (var c = 0; c < a; c++) b.push(c);

        return b;
      }

      return Ra(a);
    }
  },
      Ld = function (a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (fa(a) || n(a)) x(a, b, void 0);else for (var c = Kd(a), d = Jd(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
  };

  var Md = function (a, b, c, d, e) {
    this.reset(a, b, c, d, e);
  };

  Md.prototype.dd = null;
  var Nd = 0;

  Md.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Nd++;
    d || la();
    this.rb = a;
    this.ze = b;
    delete this.dd;
  };

  Md.prototype.yd = function (a) {
    this.rb = a;
  };

  var Od = function (a) {
    this.Ae = a;
    this.hd = this.qc = this.rb = this.m = null;
  },
      Pd = function (a, b) {
    this.name = a;
    this.value = b;
  };

  Pd.prototype.toString = function () {
    return this.name;
  };

  var Qd = new Pd("SEVERE", 1E3),
      Rd = new Pd("CONFIG", 700),
      Sd = new Pd("FINE", 500);

  Od.prototype.getParent = function () {
    return this.m;
  };

  Od.prototype.yd = function (a) {
    this.rb = a;
  };

  var Td = function (a) {
    if (a.rb) return a.rb;
    if (a.m) return Td(a.m);
    za("Root logger has no level set.");
    return null;
  };

  Od.prototype.log = function (a, b, c) {
    if (a.value >= Td(this).value) for (p(b) && (b = b()), a = new Md(a, String(b), this.Ae), c && (a.dd = c), c = "log:" + a.ze, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
      b = c;
      var d = a;
      if (b.hd) for (var e = 0, f; f = b.hd[e]; e++) f(d);
      c = c.getParent();
    }
  };

  var Ud = {},
      Vd = null,
      Wd = function (a) {
    Vd || (Vd = new Od(""), Ud[""] = Vd, Vd.yd(Rd));
    var b;

    if (!(b = Ud[a])) {
      b = new Od(a);
      var c = a.lastIndexOf("."),
          d = a.substr(c + 1),
          c = Wd(a.substr(0, c));
      c.qc || (c.qc = {});
      c.qc[d] = b;
      b.m = c;
      Ud[a] = b;
    }

    return b;
  };

  var I = function (a, b) {
    a && a.log(Sd, b, void 0);
  };

  var Xd = function (a, b, c) {
    if (p(a)) c && (a = q(a, c));else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  },
      Yd = function (a) {
    var b = null;
    return new C(function (c, d) {
      b = Xd(function () {
        c(void 0);
      }, a);
      -1 == b && d(Error("Failed to schedule timer."));
    }).h(function (a) {
      l.clearTimeout(b);
      throw a;
    });
  };

  var Zd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
      $d = function (a, b) {
    if (a) {
      a = a.split("&");

      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
            e,
            f = null;
        0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
        b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
      }
    }
  };

  var J = function (a) {
    G.call(this);
    this.headers = new H();
    this.mc = a || null;
    this.oa = !1;
    this.lc = this.b = null;
    this.qb = this.md = this.Pb = "";
    this.Ba = this.yc = this.Mb = this.sc = !1;
    this.eb = 0;
    this.hc = null;
    this.td = "";
    this.jc = this.Fe = this.Gd = !1;
  };

  r(J, G);
  var ae = J.prototype,
      be = Wd("goog.net.XhrIo");
  ae.R = be;
  var ce = /^https?$/i,
      de = ["POST", "PUT"];

  J.prototype.send = function (a, b, c, d) {
    if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Pb + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Pb = a;
    this.qb = "";
    this.md = b;
    this.sc = !1;
    this.oa = !0;
    this.b = this.mc ? this.mc.kb() : qc.kb();
    this.lc = this.mc ? pc(this.mc) : pc(qc);
    this.b.onreadystatechange = q(this.qd, this);
    this.Fe && "onprogress" in this.b && (this.b.onprogress = q(function (a) {
      this.pd(a, !0);
    }, this), this.b.upload && (this.b.upload.onprogress = q(this.pd, this)));

    try {
      I(this.R, ee(this, "Opening Xhr")), this.yc = !0, this.b.open(b, String(a), !0), this.yc = !1;
    } catch (f) {
      I(this.R, ee(this, "Error opening Xhr: " + f.message));
      this.K(5, f);
      return;
    }

    a = c || "";
    var e = this.headers.clone();
    d && Ld(d, function (a, b) {
      e.set(b, a);
    });
    d = Ia(e.ia());
    c = l.FormData && a instanceof l.FormData;
    !Ja(de, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (a, b) {
      this.b.setRequestHeader(b, a);
    }, this);
    this.td && (this.b.responseType = this.td);
    "withCredentials" in this.b && this.b.withCredentials !== this.Gd && (this.b.withCredentials = this.Gd);

    try {
      fe(this), 0 < this.eb && (this.jc = ge(this.b), I(this.R, ee(this, "Will abort after " + this.eb + "ms if incomplete, xhr2 " + this.jc)), this.jc ? (this.b.timeout = this.eb, this.b.ontimeout = q(this.yb, this)) : this.hc = Xd(this.yb, this.eb, this)), I(this.R, ee(this, "Sending request")), this.Mb = !0, this.b.send(a), this.Mb = !1;
    } catch (f) {
      I(this.R, ee(this, "Send error: " + f.message)), this.K(5, f);
    }
  };

  var ge = function (a) {
    return z && A(9) && ga(a.timeout) && void 0 !== a.ontimeout;
  },
      Ha = function (a) {
    return "content-type" == a.toLowerCase();
  };

  J.prototype.yb = function () {
    "undefined" != typeof aa && this.b && (this.qb = "Timed out after " + this.eb + "ms, aborting", I(this.R, ee(this, this.qb)), this.dispatchEvent("timeout"), this.abort(8));
  };

  J.prototype.K = function (a, b) {
    this.oa = !1;
    this.b && (this.Ba = !0, this.b.abort(), this.Ba = !1);
    this.qb = b;
    he(this);
    ie(this);
  };

  var he = function (a) {
    a.sc || (a.sc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  };

  J.prototype.abort = function () {
    this.b && this.oa && (I(this.R, ee(this, "Aborting")), this.oa = !1, this.Ba = !0, this.b.abort(), this.Ba = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ie(this));
  };

  J.prototype.Na = function () {
    this.b && (this.oa && (this.oa = !1, this.Ba = !0, this.b.abort(), this.Ba = !1), ie(this, !0));
    J.Rc.Na.call(this);
  };

  J.prototype.qd = function () {
    this.isDisposed() || (this.yc || this.Mb || this.Ba ? je(this) : this.De());
  };

  J.prototype.De = function () {
    je(this);
  };

  var je = function (a) {
    if (a.oa && "undefined" != typeof aa) if (a.lc[1] && 4 == ke(a) && 2 == le(a)) I(a.R, ee(a, "Local request error detected and ignored"));else if (a.Mb && 4 == ke(a)) Xd(a.qd, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ke(a)) {
      I(a.R, ee(a, "Request complete"));
      a.oa = !1;

      try {
        var b = le(a),
            c;

        a: switch (b) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            c = !0;
            break a;

          default:
            c = !1;
        }

        var d;

        if (!(d = c)) {
          var e;

          if (e = 0 === b) {
            var f = String(a.Pb).match(Zd)[1] || null;
            if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                f = g.substr(0, g.length - 1);
            e = !ce.test(f ? f.toLowerCase() : "");
          }

          d = e;
        }

        if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
          var k;

          try {
            k = 2 < ke(a) ? a.b.statusText : "";
          } catch (v) {
            I(a.R, "Can not get status: " + v.message), k = "";
          }

          a.qb = k + " [" + le(a) + "]";
          he(a);
        }
      } finally {
        ie(a);
      }
    }
  };

  J.prototype.pd = function (a, b) {
    w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(me(a, "progress"));
    this.dispatchEvent(me(a, b ? "downloadprogress" : "uploadprogress"));
  };

  var me = function (a, b) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total
    };
  },
      ie = function (a, b) {
    if (a.b) {
      fe(a);
      var c = a.b,
          d = a.lc[0] ? ba : null;
      a.b = null;
      a.lc = null;
      b || a.dispatchEvent("ready");

      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.R) && a.log(Qd, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  },
      fe = function (a) {
    a.b && a.jc && (a.b.ontimeout = null);
    ga(a.hc) && (l.clearTimeout(a.hc), a.hc = null);
  },
      ke = function (a) {
    return a.b ? a.b.readyState : 0;
  },
      le = function (a) {
    try {
      return 2 < ke(a) ? a.b.status : -1;
    } catch (b) {
      return -1;
    }
  },
      ne = function (a) {
    try {
      return a.b ? a.b.responseText : "";
    } catch (b) {
      return I(a.R, "Can not get responseText: " + b.message), "";
    }
  },
      ee = function (a, b) {
    return b + " [" + a.md + " " + a.Pb + " " + le(a) + "]";
  };

  var oe = function (a, b) {
    this.ha = this.Ga = this.ca = "";
    this.Ta = null;
    this.Aa = this.qa = "";
    this.N = this.te = !1;
    var c;
    a instanceof oe ? (this.N = void 0 !== b ? b : a.N, pe(this, a.ca), c = a.Ga, K(this), this.Ga = c, qe(this, a.ha), re(this, a.Ta), se(this, a.qa), te(this, a.Y.clone()), a = a.Aa, K(this), this.Aa = a) : a && (c = String(a).match(Zd)) ? (this.N = !!b, pe(this, c[1] || "", !0), a = c[2] || "", K(this), this.Ga = ue(a), qe(this, c[3] || "", !0), re(this, c[4]), se(this, c[5] || "", !0), te(this, c[6] || "", !0), a = c[7] || "", K(this), this.Aa = ue(a)) : (this.N = !!b, this.Y = new L(null, 0, this.N));
  };

  oe.prototype.toString = function () {
    var a = [],
        b = this.ca;
    b && a.push(ve(b, we, !0), ":");
    var c = this.ha;
    if (c || "file" == b) a.push("//"), (b = this.Ga) && a.push(ve(b, we, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Ta, null != c && a.push(":", String(c));
    if (c = this.qa) this.ha && "/" != c.charAt(0) && a.push("/"), a.push(ve(c, "/" == c.charAt(0) ? xe : ye, !0));
    (c = this.Y.toString()) && a.push("?", c);
    (c = this.Aa) && a.push("#", ve(c, ze));
    return a.join("");
  };

  oe.prototype.resolve = function (a) {
    var b = this.clone(),
        c = !!a.ca;
    c ? pe(b, a.ca) : c = !!a.Ga;

    if (c) {
      var d = a.Ga;
      K(b);
      b.Ga = d;
    } else c = !!a.ha;

    c ? qe(b, a.ha) : c = null != a.Ta;
    d = a.qa;
    if (c) re(b, a.Ta);else if (c = !!a.qa) {
      if ("/" != d.charAt(0)) if (this.ha && !this.qa) d = "/" + d;else {
        var e = b.qa.lastIndexOf("/");
        -1 != e && (d = b.qa.substr(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (u(e, "./") || u(e, "/.")) {
        for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
          var k = e[g++];
          "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
        }

        d = f.join("/");
      } else d = e;
    }
    c ? se(b, d) : c = "" !== a.Y.toString();
    c ? te(b, a.Y.clone()) : c = !!a.Aa;
    c && (a = a.Aa, K(b), b.Aa = a);
    return b;
  };

  oe.prototype.clone = function () {
    return new oe(this);
  };

  var pe = function (a, b, c) {
    K(a);
    a.ca = c ? ue(b, !0) : b;
    a.ca && (a.ca = a.ca.replace(/:$/, ""));
  },
      qe = function (a, b, c) {
    K(a);
    a.ha = c ? ue(b, !0) : b;
  },
      re = function (a, b) {
    K(a);

    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.Ta = b;
    } else a.Ta = null;
  },
      se = function (a, b, c) {
    K(a);
    a.qa = c ? ue(b, !0) : b;
  },
      te = function (a, b, c) {
    K(a);
    b instanceof L ? (a.Y = b, a.Y.Oc(a.N)) : (c || (b = ve(b, Ae)), a.Y = new L(b, 0, a.N));
  },
      M = function (a, b, c) {
    K(a);
    a.Y.set(b, c);
  },
      Be = function (a, b) {
    K(a);
    a.Y.remove(b);
  },
      K = function (a) {
    if (a.te) throw Error("Tried to modify a read-only Uri");
  };

  oe.prototype.Oc = function (a) {
    this.N = a;
    this.Y && this.Y.Oc(a);
    return this;
  };

  var Ce = function (a) {
    return a instanceof oe ? a.clone() : new oe(a, void 0);
  },
      De = function (a, b) {
    var c = new oe(null, void 0);
    pe(c, "https");
    a && qe(c, a);
    b && se(c, b);
    return c;
  },
      ue = function (a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  },
      ve = function (a, b, c) {
    return n(a) ? (a = encodeURI(a).replace(b, Ee), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  },
      Ee = function (a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  },
      we = /[#\/\?@]/g,
      ye = /[\#\?:]/g,
      xe = /[\#\?]/g,
      Ae = /[\#\?@]/g,
      ze = /#/g,
      L = function (a, b, c) {
    this.l = this.g = null;
    this.J = a || null;
    this.N = !!c;
  },
      Fe = function (a) {
    a.g || (a.g = new H(), a.l = 0, a.J && $d(a.J, function (b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  },
      He = function (a) {
    var b = Kd(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new L(null, 0, void 0);
    a = Jd(a);

    for (var d = 0; d < b.length; d++) {
      var e = b[d],
          f = a[d];
      ea(f) ? Ge(c, e, f) : c.add(e, f);
    }

    return c;
  };

  h = L.prototype;

  h.add = function (a, b) {
    Fe(this);
    this.J = null;
    a = this.M(a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.l = Aa(this.l) + 1;
    return this;
  };

  h.remove = function (a) {
    Fe(this);
    a = this.M(a);
    return this.g.jb(a) ? (this.J = null, this.l = Aa(this.l) - this.g.get(a).length, this.g.remove(a)) : !1;
  };

  h.jb = function (a) {
    Fe(this);
    a = this.M(a);
    return this.g.jb(a);
  };

  h.ia = function () {
    Fe(this);

    for (var a = this.g.V(), b = this.g.ia(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

    return c;
  };

  h.V = function (a) {
    Fe(this);
    var b = [];
    if (n(a)) this.jb(a) && (b = Na(b, this.g.get(this.M(a))));else {
      a = this.g.V();

      for (var c = 0; c < a.length; c++) b = Na(b, a[c]);
    }
    return b;
  };

  h.set = function (a, b) {
    Fe(this);
    this.J = null;
    a = this.M(a);
    this.jb(a) && (this.l = Aa(this.l) - this.g.get(a).length);
    this.g.set(a, [b]);
    this.l = Aa(this.l) + 1;
    return this;
  };

  h.get = function (a, b) {
    a = a ? this.V(a) : [];
    return 0 < a.length ? String(a[0]) : b;
  };

  var Ge = function (a, b, c) {
    a.remove(b);
    0 < c.length && (a.J = null, a.g.set(a.M(b), Oa(c)), a.l = Aa(a.l) + c.length);
  };

  L.prototype.toString = function () {
    if (this.J) return this.J;
    if (!this.g) return "";

    for (var a = [], b = this.g.ia(), c = 0; c < b.length; c++) for (var d = b[c], e = encodeURIComponent(String(d)), d = this.V(d), f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }

    return this.J = a.join("&");
  };

  L.prototype.clone = function () {
    var a = new L();
    a.J = this.J;
    this.g && (a.g = this.g.clone(), a.l = this.l);
    return a;
  };

  L.prototype.M = function (a) {
    a = String(a);
    this.N && (a = a.toLowerCase());
    return a;
  };

  L.prototype.Oc = function (a) {
    a && !this.N && (Fe(this), this.J = null, this.g.forEach(function (a, c) {
      var b = c.toLowerCase();
      c != b && (this.remove(c), Ge(this, b, a));
    }, this));
    this.N = a;
  };

  var Ie = function () {
    var a = N();
    return z && !!nb && 11 == nb || /Edge\/\d+/.test(a);
  },
      Je = function () {
    return l.window && l.window.location.href || "";
  },
      Ke = function (a, b) {
    var c = [],
        d;

    for (d in a) d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? Ta(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Ke(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);

    for (d in b) d in a || c.push(d);

    return c;
  },
      Me = function () {
    var a;
    a = N();
    a = "Chrome" != Le(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
    return a && 30 > a ? !1 : !z || !nb || 9 < nb;
  },
      Ne = function (a) {
    a = (a || N()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
  },
      Oe = function (a) {
    a = a || l.window;

    try {
      a.close();
    } catch (b) {}
  },
      Pe = function (a, b, c) {
    var d = Math.floor(1E9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
    b = {
      width: b,
      height: c,
      top: 0 < e ? e : 0,
      left: 0 < f ? f : 0,
      location: !0,
      resizable: !0,
      statusbar: !0,
      toolbar: !1
    };
    c = N().toLowerCase();
    d && (b.target = d, u(c, "crios/") && (b.target = "_blank"));
    "Firefox" == Le(N()) && (a = a || "http://localhost", b.scrollbars = !0);
    var g;
    c = a || "about:blank";
    (d = b) || (d = {});
    a = window;
    b = c instanceof B ? c : fc("undefined" != typeof c.href ? c.href : String(c));
    c = d.target || c.target;
    e = [];

    for (g in d) switch (g) {
      case "width":
      case "height":
      case "top":
      case "left":
        e.push(g + "=" + d[g]);
        break;

      case "target":
      case "noreferrer":
        break;

      default:
        e.push(g + "=" + (d[g] ? 1 : 0));
    }

    g = e.join(",");
    (y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ha(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof B ? b : fc(b), g.href = cc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = cc(b), g && (eb && u(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = ac("b/12014412, meta tag with sanitized URL"), va.test(d) && (-1 != d.indexOf("&") && (d = d.replace(pa, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(qa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(ra, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(sa, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(ta, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(ua, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Ba($b(a), "must provide justification"), w(!/^[\s\xa0]*$/.test($b(a)), "must provide non-empty justification"), g.document.write(Ac(new zc().re(d))), g.document.close())) : g = a.open(cc(b), c, g);
    if (g) try {
      g.focus();
    } catch (k) {}
    return g;
  },
      Qe = function (a) {
    return new C(function (b) {
      var c = function () {
        Yd(2E3).then(function () {
          if (!a || a.closed) b();else return c();
        });
      };

      return c();
    });
  },
      Re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      Se = function () {
    var a = null;
    return new C(function (b) {
      "complete" == l.document.readyState ? b() : (a = function () {
        b();
      }, Qb(window, "load", a));
    }).h(function (b) {
      Sb(window, "load", a);
      throw b;
    });
  },
      O = function (a) {
    switch (a || l.navigator && l.navigator.product || "") {
      case "ReactNative":
        return "ReactNative";

      default:
        return "undefined" !== typeof l.process ? "Node" : "Browser";
    }
  },
      Te = function () {
    var a = O();
    return "ReactNative" === a || "Node" === a;
  },
      Le = function (a) {
    var b = a.toLowerCase();
    if (u(b, "opera/") || u(b, "opr/") || u(b, "opios/")) return "Opera";
    if (u(b, "iemobile")) return "IEMobile";
    if (u(b, "msie") || u(b, "trident/")) return "IE";
    if (u(b, "edge/")) return "Edge";
    if (u(b, "firefox/")) return "Firefox";
    if (u(b, "silk/")) return "Silk";
    if (u(b, "blackberry")) return "Blackberry";
    if (u(b, "webos")) return "Webos";
    if (!u(b, "safari/") || u(b, "chrome/") || u(b, "crios/") || u(b, "android")) {
      if (!u(b, "chrome/") && !u(b, "crios/") || u(b, "edge/")) {
        if (u(b, "android")) return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
      } else return "Chrome";
    } else return "Safari";
    return "Other";
  },
      Ue = function (a) {
    var b = O(void 0);
    return ("Browser" === b ? Le(N()) : b) + "/JsCore/" + a;
  },
      N = function () {
    return l.navigator && l.navigator.userAgent || "";
  },
      Ve = function (a) {
    a = a.split(".");

    for (var b = l, c = 0; c < a.length && "object" == typeof b && null != b; c++) b = b[a[c]];

    c != a.length && (b = void 0);
    return b;
  },
      Xe = function () {
    var a;

    if (!(a = !l.location || !l.location.protocol || "http:" != l.location.protocol && "https:" != l.location.protocol || Te())) {
      var b;

      a: {
        try {
          var c = l.localStorage,
              d = We();

          if (c) {
            c.setItem(d, "1");
            c.removeItem(d);
            b = Ie() ? !!l.indexedDB : !0;
            break a;
          }
        } catch (e) {}

        b = !1;
      }

      a = !b;
    }

    return !a;
  },
      Ye = function (a) {
    a = a || N();
    return Ne(a) || "Firefox" == Le(a) ? !1 : !0;
  },
      Ze = function (a) {
    return "undefined" === typeof a ? null : kc(a);
  },
      $e = function (a) {
    var b = {},
        c;

    for (c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);

    return b;
  },
      af = function (a) {
    if (null !== a) {
      var b;

      try {
        b = hc(a);
      } catch (c) {
        try {
          b = JSON.parse(a);
        } catch (d) {
          throw c;
        }
      }

      return b;
    }
  },
      We = function (a) {
    return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
  },
      bf = function (a) {
    a = a || N();
    return "Safari" == Le(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
  },
      cf = function () {
    var a = l.___jsl;
    if (a && a.H) for (var b in a.H) if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) a.CP[c] = null;
  },
      df = function (a, b, c, d) {
    if (a > b) throw Error("Short delay should be less than long delay!");
    this.Me = a;
    this.ye = b;
    a = d || O();
    this.se = Ne(c || N()) || "ReactNative" === a;
  };

  df.prototype.get = function () {
    return this.se ? this.ye : this.Me;
  };

  var ef;

  try {
    var ff = {};
    Object.defineProperty(ff, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 1
    });
    Object.defineProperty(ff, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 2
    });
    ef = 2 == ff.abcd;
  } catch (a) {
    ef = !1;
  }

  var P = function (a, b, c) {
    ef ? Object.defineProperty(a, b, {
      configurable: !0,
      enumerable: !0,
      value: c
    }) : a[b] = c;
  },
      gf = function (a, b) {
    if (b) for (var c in b) b.hasOwnProperty(c) && P(a, c, b[c]);
  },
      hf = function (a) {
    var b = {},
        c;

    for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);

    return b;
  },
      jf = function (a, b) {
    if (!b || !b.length) return !0;
    if (!a) return !1;

    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (void 0 === d || null === d || "" === d) return !1;
    }

    return !0;
  },
      kf = function (a) {
    var b = a;

    if ("object" == typeof a && null != a) {
      var b = "length" in a ? [] : {},
          c;

      for (c in a) P(b, c, kf(a[c]));
    }

    return b;
  };

  var lf = ["client_id", "response_type", "scope", "redirect_uri", "state"],
      mf = {
    Hd: {
      ub: 500,
      tb: 600,
      providerId: "facebook.com",
      ac: lf
    },
    Id: {
      ub: 500,
      tb: 620,
      providerId: "github.com",
      ac: lf
    },
    Jd: {
      ub: 515,
      tb: 680,
      providerId: "google.com",
      ac: lf
    },
    Od: {
      ub: 485,
      tb: 705,
      providerId: "twitter.com",
      ac: "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
    }
  },
      nf = function (a) {
    for (var b in mf) if (mf[b].providerId == a) return mf[b];

    return null;
  },
      of = function (a) {
    return (a = nf(a)) && a.ac || [];
  };

  var Q = function (a, b) {
    this.code = "auth/" + a;
    this.message = b || pf[a] || "";
  };

  r(Q, Error);

  Q.prototype.I = function () {
    return {
      name: this.code,
      code: this.code,
      message: this.message
    };
  };

  var pf = {
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "missing-iframe-start": "An internal error has occurred.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "user-cancelled": "User did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };

  var qf = function (a, b, c, d, e) {
    this.wa = a;
    this.U = b || null;
    this.gb = c || null;
    this.cc = d || null;
    this.K = e || null;

    if (this.gb || this.K) {
      if (this.gb && this.K) throw new Q("invalid-auth-event");
      if (this.gb && !this.cc) throw new Q("invalid-auth-event");
    } else throw new Q("invalid-auth-event");
  };

  qf.prototype.getError = function () {
    return this.K;
  };

  qf.prototype.I = function () {
    return {
      type: this.wa,
      eventId: this.U,
      urlResponse: this.gb,
      sessionId: this.cc,
      error: this.K && this.K.I()
    };
  };

  var rf = function (a) {
    var b = "unauthorized-domain",
        c = void 0,
        d = Ce(a);
    a = d.ha;
    d = d.ca;
    "http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);
    Q.call(this, b, c);
  };

  r(rf, Q);

  var sf = function (a) {
    this.xe = a.sub;
    la();
    this.Db = a.email || null;
  };

  var tf = function (a, b, c, d) {
    var e = {};
    ha(c) ? e = c : b && n(c) && n(d) ? e = {
      oauthToken: c,
      oauthTokenSecret: d
    } : !b && n(c) && (e = {
      accessToken: c
    });
    if (b || !e.idToken && !e.accessToken) {
      if (b && e.oauthToken && e.oauthTokenSecret) P(this, "accessToken", e.oauthToken), P(this, "secret", e.oauthTokenSecret);else {
        if (b) throw new Q("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
        throw new Q("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
      }
    } else e.idToken && P(this, "idToken", e.idToken), e.accessToken && P(this, "accessToken", e.accessToken);
    P(this, "provider", a);
  };

  tf.prototype.Fb = function (a) {
    return uf(a, vf(this));
  };

  tf.prototype.nd = function (a, b) {
    var c = vf(this);
    c.idToken = b;
    return wf(a, c);
  };

  var vf = function (a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.provider;
    return {
      postBody: He(b).toString(),
      requestUri: Xe() ? Je() : "http://localhost"
    };
  };

  tf.prototype.I = function () {
    var a = {
      provider: this.provider
    };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    return a;
  };

  var xf = function (a, b, c) {
    var d = !!b,
        e = c || [];

    b = function () {
      gf(this, {
        providerId: a,
        isOAuthProvider: !0
      });
      this.Nc = [];
      this.ad = {};
      "google.com" == a && this.addScope("profile");
    };

    d || (b.prototype.addScope = function (a) {
      Ja(this.Nc, a) || this.Nc.push(a);
    });

    b.prototype.setCustomParameters = function (a) {
      this.ad = Ua(a);
    };

    b.prototype.fe = function () {
      var a = $e(this.ad),
          b;

      for (b in a) a[b] = a[b].toString();

      a = Ua(a);

      for (b = 0; b < e.length; b++) {
        var c = e[b];
        c in a && delete a[c];
      }

      return a;
    };

    b.prototype.ge = function () {
      return Oa(this.Nc);
    };

    b.credential = function (b, c) {
      return new tf(a, d, b, c);
    };

    gf(b, {
      PROVIDER_ID: a
    });
    return b;
  },
      yf = xf("facebook.com", !1, of("facebook.com"));

  yf.prototype.addScope = yf.prototype.addScope || void 0;
  var zf = xf("github.com", !1, of("github.com"));
  zf.prototype.addScope = zf.prototype.addScope || void 0;
  var Af = xf("google.com", !1, of("google.com"));
  Af.prototype.addScope = Af.prototype.addScope || void 0;

  Af.credential = function (a, b) {
    if (!a && !b) throw new Q("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new tf("google.com", !1, ha(a) ? a : {
      idToken: a || null,
      accessToken: b || null
    });
  };

  var Bf = xf("twitter.com", !0, of("twitter.com")),
      Cf = function (a, b) {
    this.Db = a;
    this.Fc = b;
    P(this, "provider", "password");
  };

  Cf.prototype.Fb = function (a) {
    return R(a, Df, {
      email: this.Db,
      password: this.Fc
    });
  };

  Cf.prototype.nd = function (a, b) {
    return R(a, Ef, {
      idToken: b,
      email: this.Db,
      password: this.Fc
    });
  };

  Cf.prototype.I = function () {
    return {
      email: this.Db,
      password: this.Fc
    };
  };

  var Ff = function () {
    gf(this, {
      providerId: "password",
      isOAuthProvider: !1
    });
  };

  gf(Ff, {
    PROVIDER_ID: "password"
  });

  var Gf = {
    Ze: Ff,
    Hd: yf,
    Jd: Af,
    Id: zf,
    Od: Bf
  },
      Hf = function (a) {
    var b = a && a.providerId;
    if (!b) return null;
    var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret;
    a = a && a.oauthIdToken;

    for (var e in Gf) if (Gf[e].PROVIDER_ID == b) try {
      return Gf[e].credential({
        accessToken: c,
        idToken: a,
        oauthToken: c,
        oauthTokenSecret: d
      });
    } catch (f) {
      break;
    }

    return null;
  };

  var If = function (a, b, c, d) {
    Q.call(this, a, d);
    P(this, "email", b);
    P(this, "credential", c);
  };

  r(If, Q);

  If.prototype.I = function () {
    var a = {
      code: this.code,
      message: this.message,
      email: this.email
    },
        b = this.credential && this.credential.I();
    b && (Wa(a, b), a.providerId = b.provider, delete a.provider);
    return a;
  };

  var Jf = function (a) {
    if (a.code) {
      var b = a.code || "";
      0 == b.indexOf("auth/") && (b = b.substring(5));
      return a.email ? new If(b, a.email, Hf(a), a.message) : new Q(b, a.message || void 0);
    }

    return null;
  };

  var Kf = function (a) {
    this.Ye = a;
  };

  r(Kf, oc);

  Kf.prototype.kb = function () {
    return new this.Ye();
  };

  Kf.prototype.Ob = function () {
    return {};
  };

  var S = function (a, b, c) {
    var d;
    d = "Node" == O();
    d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
    if (!d) throw new Q("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.i = a;
    a = b || {};
    this.Ie = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.Je = a.secureTokenTimeout || Lf;
    this.wd = Ua(a.secureTokenHeaders || Mf);
    this.be = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.ce = a.firebaseTimeout || Nf;
    this.fd = Ua(a.firebaseHeaders || Of);
    c && (this.fd["X-Client-Version"] = c, this.wd["X-Client-Version"] = c);
    this.Td = new tc();
    this.Xe = new Kf(d);
  },
      Pf,
      Lf = new df(1E4, 3E4),
      Mf = {
    "Content-Type": "application/x-www-form-urlencoded"
  },
      Nf = new df(1E4, 3E4),
      Of = {
    "Content-Type": "application/json"
  },
      Rf = function (a, b, c, d, e, f, g) {
    Me() ? a = q(a.Le, a) : (Pf || (Pf = new C(function (a, b) {
      Qf(a, b);
    })), a = q(a.Ke, a));
    a(b, c, d, e, f, g);
  };

  S.prototype.Le = function (a, b, c, d, e, f) {
    var g = "Node" == O(),
        k = Te() ? g ? new J(this.Xe) : new J() : new J(this.Td),
        v;
    f && (k.eb = Math.max(0, f), v = setTimeout(function () {
      k.dispatchEvent("timeout");
    }, f));
    k.listen("complete", function () {
      v && clearTimeout(v);
      var a = null;

      try {
        var c;
        c = this.b ? hc(this.b.responseText) : void 0;
        a = c || null;
      } catch (Ei) {
        try {
          a = JSON.parse(ne(this)) || null;
        } catch (Fi) {
          a = null;
        }
      }

      b && b(a);
    });
    Rb(k, "ready", function () {
      v && clearTimeout(v);
      this.za || (this.za = !0, this.Na());
    });
    Rb(k, "timeout", function () {
      v && clearTimeout(v);
      this.za || (this.za = !0, this.Na());
      b && b(null);
    });
    k.send(a, c, d, e);
  };

  var sd = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
      Qf = function (a, b) {
    ((window.gapi || {}).client || {}).request ? a() : (l[sd] = function () {
      ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
    }, ud(function () {
      b(Error("CORS_UNSUPPORTED"));
    }));
  };

  S.prototype.Ke = function (a, b, c, d, e) {
    var f = this;
    Pf.then(function () {
      window.gapi.client.setApiKey(f.i);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: "none",
        callback: function (a) {
          window.gapi.auth.setToken(g);
          b && b(a);
        }
      });
    }).h(function (a) {
      b && b({
        error: {
          message: a && a.message || "CORS_UNSUPPORTED"
        }
      });
    });
  };

  var Tf = function (a, b) {
    return new C(function (c, d) {
      "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Rf(a, a.Ie + "?key=" + encodeURIComponent(a.i), function (a) {
        a ? a.error ? d(Sf(a)) : a.access_token && a.refresh_token ? c(a) : d(new Q("internal-error")) : d(new Q("network-request-failed"));
      }, "POST", He(b).toString(), a.wd, a.Je.get()) : d(new Q("internal-error"));
    });
  },
      Uf = function (a, b, c, d, e) {
    var f = a.be + b + "?key=" + encodeURIComponent(a.i);
    e && (f += "&cb=" + la().toString());
    return new C(function (b, e) {
      Rf(a, f, function (a) {
        a ? a.error ? e(Sf(a)) : b(a) : e(new Q("network-request-failed"));
      }, c, kc($e(d)), a.fd, a.ce.get());
    });
  },
      Vf = function (a) {
    if (!Xb.test(a.email)) throw new Q("invalid-email");
  },
      Wf = function (a) {
    "email" in a && Vf(a);
  },
      Yf = function (a, b) {
    var c = Xe() ? Je() : "http://localhost";
    return R(a, Xf, {
      identifier: b,
      continueUri: c
    }).then(function (a) {
      return a.allProviders || [];
    });
  },
      $f = function (a) {
    return R(a, Zf, {}).then(function (a) {
      return a.authorizedDomains || [];
    });
  },
      ag = function (a) {
    if (!a.idToken) throw new Q("internal-error");
  };

  S.prototype.signInAnonymously = function () {
    return R(this, bg, {});
  };

  S.prototype.updateEmail = function (a, b) {
    return R(this, cg, {
      idToken: a,
      email: b
    });
  };

  S.prototype.updatePassword = function (a, b) {
    return R(this, Ef, {
      idToken: a,
      password: b
    });
  };

  var dg = {
    displayName: "DISPLAY_NAME",
    photoUrl: "PHOTO_URL"
  };

  S.prototype.updateProfile = function (a, b) {
    var c = {
      idToken: a
    },
        d = [];
    Pa(dg, function (a, f) {
      var e = b[f];
      null === e ? d.push(a) : f in b && (c[f] = e);
    });
    d.length && (c.deleteAttribute = d);
    return R(this, cg, c);
  };

  S.prototype.sendPasswordResetEmail = function (a) {
    return R(this, eg, {
      requestType: "PASSWORD_RESET",
      email: a
    });
  };

  S.prototype.sendEmailVerification = function (a) {
    return R(this, fg, {
      requestType: "VERIFY_EMAIL",
      idToken: a
    });
  };

  var hg = function (a, b, c) {
    return R(a, gg, {
      idToken: b,
      deleteProvider: c
    });
  },
      ig = function (a) {
    if (!a.requestUri || !a.sessionId && !a.postBody) throw new Q("internal-error");
  },
      jg = function (a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Jf(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Jf(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = Jf(a));
    if (b) throw b;
    if (!a.idToken) throw new Q("internal-error");
  },
      uf = function (a, b) {
    b.returnIdpCredential = !0;
    return R(a, kg, b);
  },
      wf = function (a, b) {
    b.returnIdpCredential = !0;
    return R(a, lg, b);
  },
      mg = function (a) {
    if (!a.oobCode) throw new Q("invalid-action-code");
  };

  S.prototype.confirmPasswordReset = function (a, b) {
    return R(this, ng, {
      oobCode: a,
      newPassword: b
    });
  };

  S.prototype.checkActionCode = function (a) {
    return R(this, og, {
      oobCode: a
    });
  };

  S.prototype.applyActionCode = function (a) {
    return R(this, pg, {
      oobCode: a
    });
  };

  var pg = {
    endpoint: "setAccountInfo",
    F: mg,
    bb: "email"
  },
      og = {
    endpoint: "resetPassword",
    F: mg,
    ua: function (a) {
      if (!a.email || !a.requestType) throw new Q("internal-error");
    }
  },
      qg = {
    endpoint: "signupNewUser",
    F: function (a) {
      Vf(a);
      if (!a.password) throw new Q("weak-password");
    },
    ua: ag,
    va: !0
  },
      Xf = {
    endpoint: "createAuthUri"
  },
      rg = {
    endpoint: "deleteAccount",
    $a: ["idToken"]
  },
      gg = {
    endpoint: "setAccountInfo",
    $a: ["idToken", "deleteProvider"],
    F: function (a) {
      if (!ea(a.deleteProvider)) throw new Q("internal-error");
    }
  },
      sg = {
    endpoint: "getAccountInfo"
  },
      fg = {
    endpoint: "getOobConfirmationCode",
    $a: ["idToken", "requestType"],
    F: function (a) {
      if ("VERIFY_EMAIL" != a.requestType) throw new Q("internal-error");
    },
    bb: "email"
  },
      eg = {
    endpoint: "getOobConfirmationCode",
    $a: ["requestType"],
    F: function (a) {
      if ("PASSWORD_RESET" != a.requestType) throw new Q("internal-error");
      Vf(a);
    },
    bb: "email"
  },
      Zf = {
    Sd: !0,
    endpoint: "getProjectConfig",
    ne: "GET"
  },
      ng = {
    endpoint: "resetPassword",
    F: mg,
    bb: "email"
  },
      cg = {
    endpoint: "setAccountInfo",
    $a: ["idToken"],
    F: Wf,
    va: !0
  },
      Ef = {
    endpoint: "setAccountInfo",
    $a: ["idToken"],
    F: function (a) {
      Wf(a);
      if (!a.password) throw new Q("weak-password");
    },
    ua: ag,
    va: !0
  },
      bg = {
    endpoint: "signupNewUser",
    ua: ag,
    va: !0
  },
      kg = {
    endpoint: "verifyAssertion",
    F: ig,
    ua: jg,
    va: !0
  },
      lg = {
    endpoint: "verifyAssertion",
    F: function (a) {
      ig(a);
      if (!a.idToken) throw new Q("internal-error");
    },
    ua: jg,
    va: !0
  },
      tg = {
    endpoint: "verifyCustomToken",
    F: function (a) {
      if (!a.token) throw new Q("invalid-custom-token");
    },
    ua: ag,
    va: !0
  },
      Df = {
    endpoint: "verifyPassword",
    F: function (a) {
      Vf(a);
      if (!a.password) throw new Q("wrong-password");
    },
    ua: ag,
    va: !0
  },
      R = function (a, b, c) {
    if (!jf(c, b.$a)) return E(new Q("internal-error"));
    var d = b.ne || "POST",
        e;
    return D(c).then(b.F).then(function () {
      b.va && (c.returnSecureToken = !0);
      return Uf(a, b.endpoint, d, c, b.Sd || !1);
    }).then(function (a) {
      return e = a;
    }).then(b.ua).then(function () {
      if (!b.bb) return e;
      if (!(b.bb in e)) throw new Q("internal-error");
      return e[b.bb];
    });
  },
      Sf = function (a) {
    var b, c;
    c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {
      keyInvalid: "invalid-api-key",
      ipRefererBlocked: "app-not-authorized"
    };
    if (c = d[c] ? new Q(d[c]) : null) return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      EMAIL_NOT_FOUND: "user-not-found",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled"
    };
    b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;

    for (var e in d) if (0 === c.indexOf(e)) return new Q(d[e], b);

    !b && a && (b = Ze(a));
    return new Q("internal-error", b);
  };

  var ug = function (a) {
    this.S = a;
  };

  ug.prototype.value = function () {
    return this.S;
  };

  ug.prototype.zd = function (a) {
    this.S.style = a;
    return this;
  };

  var vg = function (a) {
    this.S = a || {};
  };

  vg.prototype.value = function () {
    return this.S;
  };

  vg.prototype.zd = function (a) {
    this.S.style = a;
    return this;
  };

  var xg = function (a) {
    this.We = a;
    this.Kb = null;
    this.Cc = wg(this);
  };

  xg.prototype.Dc = function () {
    return this.Cc;
  };

  var yg = function (a) {
    var b = new vg();
    b.S.where = document.body;
    b.S.url = a.We;
    b.S.messageHandlersFilter = Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");
    b.S.attributes = b.S.attributes || {};
    new ug(b.S.attributes).zd({
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px"
    });
    b.S.dontclear = !0;
    return b;
  },
      wg = function (a) {
    return zg().then(function () {
      return new C(function (b, c) {
        Ve("gapi.iframes.getContext")().open(yg(a).value(), function (d) {
          a.Kb = d;
          a.Kb.restyle({
            setHideOnLeave: !1
          });

          var e = setTimeout(function () {
            c(Error("Network Error"));
          }, Ag.get()),
              f = function () {
            clearTimeout(e);
            b();
          };

          d.ping(f).then(f, function () {
            c(Error("Network Error"));
          });
        });
      });
    });
  };

  xg.prototype.sendMessage = function (a) {
    var b = this;
    return this.Cc.then(function () {
      return new C(function (c) {
        b.Kb.send(a.type, a, c, Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  };

  var Bg = function (a, b) {
    a.Cc.then(function () {
      a.Kb.register("authEvent", b, Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  },
      Cg = new df(3E3, 15E3),
      Ag = new df(5E3, 15E3),
      zg = function () {
    return new C(function (a, b) {
      var c = function () {
        cf();
        Ve("gapi.load")("gapi.iframes", {
          callback: a,
          ontimeout: function () {
            cf();
            b(Error("Network Error"));
          },
          timeout: Cg.get()
        });
      };

      if (Ve("gapi.iframes.Iframe")) a();else if (Ve("gapi.load")) c();else {
        var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

        l[d] = function () {
          Ve("gapi.load") ? c() : b(Error("Network Error"));
        };

        D(rd("https://apis.google.com/js/api.js?onload=" + d)).h(function () {
          b(Error("Network Error"));
        });
      }
    });
  };

  var Dg = function (a, b, c) {
    this.A = a;
    this.i = b;
    this.C = c;
    this.Ha = null;
    this.o = De(this.A, "/__/auth/iframe");
    M(this.o, "apiKey", this.i);
    M(this.o, "appName", this.C);
  };

  Dg.prototype.setVersion = function (a) {
    this.Ha = a;
    return this;
  };

  Dg.prototype.toString = function () {
    this.Ha ? M(this.o, "v", this.Ha) : Be(this.o, "v");
    return this.o.toString();
  };

  var Eg = function (a, b, c, d, e) {
    this.A = a;
    this.i = b;
    this.C = c;
    this.Rd = d;
    this.Ha = this.U = this.Lc = null;
    this.Vb = e;
    this.o = De(this.A, "/__/auth/handler");
    M(this.o, "apiKey", this.i);
    M(this.o, "appName", this.C);
    M(this.o, "authType", this.Rd);
  };

  Eg.prototype.setVersion = function (a) {
    this.Ha = a;
    return this;
  };

  Eg.prototype.toString = function () {
    if (this.Vb.isOAuthProvider) {
      M(this.o, "providerId", this.Vb.providerId);
      var a = this.Vb.ge();
      a && a.length && M(this.o, "scopes", a.join(","));
      a = this.Vb.fe();
      Sa(a) || M(this.o, "customParameters", Ze(a));
    }

    this.Lc ? M(this.o, "redirectUrl", this.Lc) : Be(this.o, "redirectUrl");
    this.U ? M(this.o, "eventId", this.U) : Be(this.o, "eventId");
    this.Ha ? M(this.o, "v", this.Ha) : Be(this.o, "v");
    return this.o.toString();
  };

  var Gg = function (a, b, c, d) {
    this.A = a;
    this.i = b;
    this.C = c;
    d = this.ya = d || null;
    this.oe = new Dg(a, b, c).setVersion(d).toString();
    this.xc = new xg(this.oe);
    this.Ab = [];
    Fg(this);
  };

  Gg.prototype.Dc = function () {
    return this.xc.Dc();
  };

  var Hg = function (a, b, c, d, e, f, g, k) {
    a = new Eg(a, b, c, d, e);
    a.Lc = f;
    a.U = g;
    return a.setVersion(k).toString();
  },
      Fg = function (a) {
    Bg(a.xc, function (b) {
      var c = {};

      if (b && b.authEvent) {
        var d = !1;
        b = b.authEvent || {};

        if (b.type) {
          if (c = b.error) var e = (c = b.error) && (c.name || c.code),
              c = e ? new Q(e.substring(5), c.message) : null;
          b = new qf(b.type, b.eventId, b.urlResponse, b.sessionId, c);
        } else b = null;

        for (c = 0; c < a.Ab.length; c++) d = a.Ab[c](b) || d;

        c = {};
        c.status = d ? "ACK" : "ERROR";
        return D(c);
      }

      c.status = "ERROR";
      return D(c);
    });
  },
      Ig = function (a) {
    return a.xc.sendMessage({
      type: "webStorageSupport"
    }).then(function (a) {
      if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;
      throw Error();
    });
  },
      Jg = function (a, b) {
    Ma(a.Ab, function (a) {
      return a == b;
    });
  };

  var Kg = function (a) {
    this.u = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
    if (!this.u) throw new Q("internal-error", "The React Native compatibility library was not found.");
  };

  h = Kg.prototype;

  h.get = function (a) {
    return D(this.u.getItem(a)).then(function (a) {
      return a && af(a);
    });
  };

  h.set = function (a, b) {
    return D(this.u.setItem(a, Ze(b)));
  };

  h.remove = function (a) {
    return D(this.u.removeItem(a));
  };

  h.Ja = function () {};

  h.Ya = function () {};

  var Lg = function () {
    this.u = {};
  };

  h = Lg.prototype;

  h.get = function (a) {
    return D(this.u[a]);
  };

  h.set = function (a, b) {
    this.u[a] = b;
    return D();
  };

  h.remove = function (a) {
    delete this.u[a];
    return D();
  };

  h.Ja = function () {};

  h.Ya = function () {};

  var Ng = function () {
    if (!Mg()) {
      if ("Node" == O()) throw new Q("internal-error", "The LocalStorage compatibility library was not found.");
      throw new Q("web-storage-unsupported");
    }

    this.u = l.localStorage || firebase.INTERNAL.node.localStorage;
  },
      Mg = function () {
    var a = "Node" == O(),
        a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  };

  h = Ng.prototype;

  h.get = function (a) {
    var b = this;
    return D().then(function () {
      var c = b.u.getItem(a);
      return af(c);
    });
  };

  h.set = function (a, b) {
    var c = this;
    return D().then(function () {
      var d = Ze(b);
      null === d ? c.remove(a) : c.u.setItem(a, d);
    });
  };

  h.remove = function (a) {
    var b = this;
    return D().then(function () {
      b.u.removeItem(a);
    });
  };

  h.Ja = function (a) {
    l.window && Jb(l.window, "storage", a);
  };

  h.Ya = function (a) {
    l.window && Sb(l.window, "storage", a);
  };

  var Og = function () {
    this.u = {};
  };

  h = Og.prototype;

  h.get = function () {
    return D(null);
  };

  h.set = function () {
    return D();
  };

  h.remove = function () {
    return D();
  };

  h.Ja = function () {};

  h.Ya = function () {};

  var Qg = function () {
    if (!Pg()) {
      if ("Node" == O()) throw new Q("internal-error", "The SessionStorage compatibility library was not found.");
      throw new Q("web-storage-unsupported");
    }

    this.u = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
  },
      Pg = function () {
    var a = "Node" == O(),
        a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  };

  h = Qg.prototype;

  h.get = function (a) {
    var b = this;
    return D().then(function () {
      var c = b.u.getItem(a);
      return af(c);
    });
  };

  h.set = function (a, b) {
    var c = this;
    return D().then(function () {
      var d = Ze(b);
      null === d ? c.remove(a) : c.u.setItem(a, d);
    });
  };

  h.remove = function (a) {
    var b = this;
    return D().then(function () {
      b.u.removeItem(a);
    });
  };

  h.Ja = function () {};

  h.Ya = function () {};

  var Rg = function (a, b, c, d, e, f) {
    if (!window.indexedDB) throw new Q("web-storage-unsupported");
    this.Vd = a;
    this.Bc = b;
    this.rc = c;
    this.Fd = d;
    this.hb = e;
    this.P = {};
    this.wb = [];
    this.sb = 0;
    this.pe = f || l.indexedDB;
  },
      Sg,
      Tg = function (a) {
    return new C(function (b, c) {
      var d = a.pe.open(a.Vd, a.hb);

      d.onerror = function (a) {
        c(Error(a.target.errorCode));
      };

      d.onupgradeneeded = function (b) {
        b = b.target.result;

        try {
          b.createObjectStore(a.Bc, {
            keyPath: a.rc
          });
        } catch (f) {
          c(f);
        }
      };

      d.onsuccess = function (a) {
        b(a.target.result);
      };
    });
  },
      Ug = function (a) {
    a.kd || (a.kd = Tg(a));
    return a.kd;
  },
      Vg = function (a, b) {
    return b.objectStore(a.Bc);
  },
      Wg = function (a, b, c) {
    return b.transaction([a.Bc], c ? "readwrite" : "readonly");
  },
      Xg = function (a) {
    return new C(function (b, c) {
      a.onsuccess = function (a) {
        a && a.target ? b(a.target.result) : b();
      };

      a.onerror = function (a) {
        c(Error(a.target.errorCode));
      };
    });
  };

  h = Rg.prototype;

  h.set = function (a, b) {
    var c = !1,
        d,
        e = this;
    return bd(Ug(this).then(function (b) {
      d = b;
      b = Vg(e, Wg(e, d, !0));
      return Xg(b.get(a));
    }).then(function (f) {
      var g = Vg(e, Wg(e, d, !0));
      if (f) return f.value = b, Xg(g.put(f));
      e.sb++;
      c = !0;
      f = {};
      f[e.rc] = a;
      f[e.Fd] = b;
      return Xg(g.add(f));
    }).then(function () {
      e.P[a] = b;
    }), function () {
      c && e.sb--;
    });
  };

  h.get = function (a) {
    var b = this;
    return Ug(this).then(function (c) {
      return Xg(Vg(b, Wg(b, c, !1)).get(a));
    }).then(function (a) {
      return a && a.value;
    });
  };

  h.remove = function (a) {
    var b = !1,
        c = this;
    return bd(Ug(this).then(function (d) {
      b = !0;
      c.sb++;
      return Xg(Vg(c, Wg(c, d, !0))["delete"](a));
    }).then(function () {
      delete c.P[a];
    }), function () {
      b && c.sb--;
    });
  };

  h.Oe = function () {
    var a = this;
    return Ug(this).then(function (b) {
      var c = Vg(a, Wg(a, b, !1));
      return c.getAll ? Xg(c.getAll()) : new C(function (a, b) {
        var d = [],
            e = c.openCursor();

        e.onsuccess = function (b) {
          (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
        };

        e.onerror = function (a) {
          b(Error(a.target.errorCode));
        };
      });
    }).then(function (b) {
      var c = {},
          d = [];

      if (0 == a.sb) {
        for (d = 0; d < b.length; d++) c[b[d][a.rc]] = b[d][a.Fd];

        d = Ke(a.P, c);
        a.P = c;
      }

      return d;
    });
  };

  h.Ja = function (a) {
    0 == this.wb.length && this.Qc();
    this.wb.push(a);
  };

  h.Ya = function (a) {
    Ma(this.wb, function (b) {
      return b == a;
    });
    0 == this.wb.length && this.ec();
  };

  h.Qc = function () {
    var a = this;
    this.ec();

    var b = function () {
      a.Hc = Yd(800).then(q(a.Oe, a)).then(function (b) {
        0 < b.length && x(a.wb, function (a) {
          a(b);
        });
      }).then(b).h(function (a) {
        "STOP_EVENT" != a.message && b();
      });
      return a.Hc;
    };

    b();
  };

  h.ec = function () {
    this.Hc && this.Hc.cancel("STOP_EVENT");
  };

  var ah = function () {
    this.cd = {
      Browser: Yg,
      Node: Zg,
      ReactNative: $g
    }[O()];
  },
      bh,
      Yg = {
    X: Ng,
    Sc: Qg
  },
      Zg = {
    X: Ng,
    Sc: Qg
  },
      $g = {
    X: Kg,
    Sc: Og
  };

  var ch = function (a) {
    var b = {},
        c = a.email,
        d = a.newEmail;
    a = a.requestType;
    if (!c || !a) throw Error("Invalid provider user info!");
    b.fromEmail = d || null;
    b.email = c;
    P(this, "operation", a);
    P(this, "data", kf(b));
  };

  var dh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
      T = function (a, b) {
    return {
      name: a || "",
      ea: "a valid string",
      optional: !!b,
      fa: n
    };
  },
      U = function (a) {
    return {
      name: a || "",
      ea: "a valid object",
      optional: !1,
      fa: ha
    };
  },
      eh = function (a, b) {
    return {
      name: a || "",
      ea: "a function",
      optional: !!b,
      fa: p
    };
  },
      fh = function () {
    return {
      name: "",
      ea: "null",
      optional: !1,
      fa: da
    };
  },
      gh = function () {
    return {
      name: "credential",
      ea: "a valid credential",
      optional: !1,
      fa: function (a) {
        return !(!a || !a.Fb);
      }
    };
  },
      hh = function () {
    return {
      name: "authProvider",
      ea: "a valid Auth provider",
      optional: !1,
      fa: function (a) {
        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
      }
    };
  },
      ih = function (a, b, c, d) {
    return {
      name: c || "",
      ea: a.ea + " or " + b.ea,
      optional: !!d,
      fa: function (c) {
        return a.fa(c) || b.fa(c);
      }
    };
  };

  var kh = function (a, b) {
    for (var c in b) {
      var d = b[c].name;
      a[d] = jh(d, a[c], b[c].a);
    }
  },
      V = function (a, b, c, d) {
    a[b] = jh(b, c, d);
  },
      jh = function (a, b, c) {
    if (!c) return b;
    var d = lh(a);

    a = function () {
      var a = Array.prototype.slice.call(arguments),
          e;

      a: {
        e = Array.prototype.slice.call(a);
        var k;
        k = 0;

        for (var v = !1, oa = 0; oa < c.length; oa++) if (c[oa].optional) v = !0;else {
          if (v) throw new Q("internal-error", "Argument validator encountered a required argument after an optional argument.");
          k++;
        }

        v = c.length;
        if (e.length < k || v < e.length) e = "Expected " + (k == v ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + v + " arguments") + " but got " + e.length + ".";else {
          for (k = 0; k < e.length; k++) if (v = c[k].optional && void 0 === e[k], !c[k].fa(e[k]) && !v) {
            e = c[k];
            if (0 > k || k >= dh.length) throw new Q("internal-error", "Argument validator received an unsupported number of arguments.");
            e = dh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.ea + ".";
            break a;
          }

          e = null;
        }
      }

      if (e) throw new Q("argument-error", d + " failed: " + e);
      return b.apply(this, a);
    };

    for (var e in b) a[e] = b[e];

    for (e in b.prototype) a.prototype[e] = b.prototype[e];

    return a;
  },
      lh = function (a) {
    a = a.split(".");
    return a[a.length - 1];
  };

  var mh = function (a, b, c, d) {
    this.Be = a;
    this.xd = b;
    this.He = c;
    this.cb = d;
    this.O = {};
    bh || (bh = new ah());
    a = bh;

    try {
      var e;
      Ie() ? (Sg || (Sg = new Rg("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = Sg) : e = new a.cd.X();
      this.Sa = e;
    } catch (f) {
      this.Sa = new Lg(), this.cb = !0;
    }

    try {
      this.gc = new a.cd.Sc();
    } catch (f) {
      this.gc = new Lg();
    }

    this.Ad = q(this.Bd, this);
    this.P = {};
  },
      nh,
      oh = function () {
    nh || (nh = new mh("firebase", ":", !bf(N()) && l.window && l.window != l.window.top ? !0 : !1, Ye()));
    return nh;
  };

  h = mh.prototype;

  h.M = function (a, b) {
    return this.Be + this.xd + a.name + (b ? this.xd + b : "");
  };

  h.get = function (a, b) {
    return (a.X ? this.Sa : this.gc).get(this.M(a, b));
  };

  h.remove = function (a, b) {
    b = this.M(a, b);
    a.X && !this.cb && (this.P[b] = null);
    return (a.X ? this.Sa : this.gc).remove(b);
  };

  h.set = function (a, b, c) {
    var d = this.M(a, c),
        e = this,
        f = a.X ? this.Sa : this.gc;
    return f.set(d, b).then(function () {
      return f.get(d);
    }).then(function (b) {
      a.X && !this.cb && (e.P[d] = b);
    });
  };

  h.addListener = function (a, b, c) {
    a = this.M(a, b);
    this.cb || (this.P[a] = l.localStorage.getItem(a));
    Sa(this.O) && this.Qc();
    this.O[a] || (this.O[a] = []);
    this.O[a].push(c);
  };

  h.removeListener = function (a, b, c) {
    a = this.M(a, b);
    this.O[a] && (Ma(this.O[a], function (a) {
      return a == c;
    }), 0 == this.O[a].length && delete this.O[a]);
    Sa(this.O) && this.ec();
  };

  h.Qc = function () {
    this.Sa.Ja(this.Ad);
    this.cb || ph(this);
  };

  var ph = function (a) {
    qh(a);
    a.Ac = setInterval(function () {
      for (var b in a.O) {
        var c = l.localStorage.getItem(b);
        c != a.P[b] && (a.P[b] = c, c = new yb({
          type: "storage",
          key: b,
          target: window,
          oldValue: a.P[b],
          newValue: c
        }), a.Bd(c));
      }
    }, 1E3);
  },
      qh = function (a) {
    a.Ac && (clearInterval(a.Ac), a.Ac = null);
  };

  mh.prototype.ec = function () {
    this.Sa.Ya(this.Ad);
    this.cb || qh(this);
  };

  mh.prototype.Bd = function (a) {
    if (a && a.ee) {
      var b = a.lb.key;

      if (this.He) {
        var c = l.localStorage.getItem(b);
        a = a.lb.newValue;
        a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
      }

      this.P[b] = l.localStorage.getItem(b);
      this.Xc(b);
    } else x(a, q(this.Xc, this));
  };

  mh.prototype.Xc = function (a) {
    this.O[a] && x(this.O[a], function (a) {
      a();
    });
  };

  var rh = function (a) {
    this.B = a;
    this.w = oh();
  },
      sh = {
    name: "pendingRedirect",
    X: !1
  },
      th = function (a) {
    return a.w.set(sh, "pending", a.B);
  },
      uh = function (a) {
    return a.w.remove(sh, a.B);
  },
      vh = function (a) {
    return a.w.get(sh, a.B).then(function (a) {
      return "pending" == a;
    });
  };

  var yh = function (a, b, c) {
    var d = this,
        e = (this.ya = firebase.SDK_VERSION || null) ? Ue(this.ya) : null;
    this.f = new S(b, null, e);
    this.pa = null;
    this.A = a;
    this.i = b;
    this.C = c;
    this.xb = [];
    this.Nb = !1;
    this.Tc = q(this.he, this);
    this.Va = new wh(this);
    this.rd = new xh(this);
    this.Gc = new rh(this.i + ":" + this.C);
    this.fb = {};
    this.fb.unknown = this.Va;
    this.fb.signInViaRedirect = this.Va;
    this.fb.linkViaRedirect = this.Va;
    this.fb.signInViaPopup = this.rd;
    this.fb.linkViaPopup = this.rd;
    this.Zb = this.ab = null;
    this.Sb = new C(function (a, b) {
      d.ab = a;
      d.Zb = b;
    });
  };

  yh.prototype.reset = function () {
    var a = this;
    this.pa = null;
    this.Sb.cancel();
    this.Nb = !1;
    this.Zb = this.ab = null;
    this.pb && Jg(this.pb, this.Tc);
    this.Sb = new C(function (b, c) {
      a.ab = b;
      a.Zb = c;
    });
  };

  var zh = function (a) {
    var b = Je();
    return $f(a).then(function (a) {
      a: {
        var c = Ce(b),
            e = c.ca;
        if ("http" == e || "https" == e) for (c = c.ha, e = 0; e < a.length; e++) {
          var f;
          var g = a[e];
          f = c;
          Re.test(g) ? f = f == g : (g = g.split(".").join("\\."), f = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(f));

          if (f) {
            a = !0;
            break a;
          }
        }
        a = !1;
      }

      if (!a) throw new rf(Je());
    });
  },
      Ah = function (a) {
    a.Nb || (a.Nb = !0, Se().then(function () {
      a.pb = new Gg(a.A, a.i, a.C, a.ya);
      a.pb.Dc().h(function () {
        a.Zb(new Q("network-request-failed"));
        a.reset();
      });
      a.pb.Ab.push(a.Tc);
    }));
    return a.Sb;
  };

  yh.prototype.subscribe = function (a) {
    Ja(this.xb, a) || this.xb.push(a);

    if (!this.Nb) {
      var b = this,
          c = function () {
        var a = N();
        Ye(a) || bf(a) || Ah(b);
        Bh(b.Va);
      };

      vh(this.Gc).then(function (a) {
        a ? uh(b.Gc).then(function () {
          Ah(b);
        }) : c();
      }).h(function () {
        c();
      });
    }
  };

  yh.prototype.unsubscribe = function (a) {
    Ma(this.xb, function (b) {
      return b == a;
    });
  };

  yh.prototype.he = function (a) {
    if (!a) throw new Q("invalid-auth-event");
    this.ab && (this.ab(), this.ab = null);

    for (var b = !1, c = 0; c < this.xb.length; c++) {
      var d = this.xb[c];

      if (d.Yc(a.wa, a.U)) {
        (b = this.fb[a.wa]) && b.sd(a, d);
        b = !0;
        break;
      }
    }

    Bh(this.Va);
    return b;
  };

  var Ch = new df(2E3, 1E4),
      Dh = new df(1E4, 3E4);

  yh.prototype.getRedirectResult = function () {
    return this.Va.getRedirectResult();
  };

  var Fh = function (a, b, c, d, e, f) {
    if (!b) return E(new Q("popup-blocked"));
    if (f) return Ah(a), D();
    a.pa || (a.pa = zh(a.f));
    return a.pa.then(function () {
      return Ah(a);
    }).then(function () {
      Eh(d);
      var f = Hg(a.A, a.i, a.C, c, d, null, e, a.ya);
      (b || l.window).location.href = cc(fc(f));
    }).h(function (b) {
      "auth/network-request-failed" == b.code && (a.pa = null);
      throw b;
    });
  },
      Gh = function (a, b, c, d) {
    a.pa || (a.pa = zh(a.f));
    return a.pa.then(function () {
      Eh(c);
      var e = Hg(a.A, a.i, a.C, b, c, Je(), d, a.ya);
      th(a.Gc).then(function () {
        l.window.location.href = cc(fc(e));
      });
    });
  },
      Hh = function (a, b, c, d, e) {
    var f = new Q("popup-closed-by-user"),
        g = new Q("web-storage-unsupported"),
        k = !1;
    return a.Sb.then(function () {
      Ig(a.pb).then(function (a) {
        a || (d && Oe(d), b.ta(c, null, g, e), k = !0);
      });
    }).h(function () {}).then(function () {
      if (!k) return Qe(d);
    }).then(function () {
      if (!k) return Yd(Ch.get()).then(function () {
        b.ta(c, null, f, e);
      });
    });
  },
      Eh = function (a) {
    if (!a.isOAuthProvider) throw new Q("invalid-oauth-provider");
  },
      Ih = {},
      Jh = function (a, b, c) {
    var d = b + ":" + c;
    Ih[d] || (Ih[d] = new yh(a, b, c));
    return Ih[d];
  },
      wh = function (a) {
    this.w = a;
    this.vb = this.Yb = this.Wa = this.Z = null;
    this.Kc = !1;
  };

  wh.prototype.sd = function (a, b) {
    if (!a) return E(new Q("invalid-auth-event"));
    this.Kc = !0;
    var c = a.wa,
        d = a.U,
        e = a.getError() && "auth/web-storage-unsupported" == a.getError().code;
    "unknown" != c || e ? a = a.K ? this.Ic(a, b) : b.mb(c, d) ? this.Jc(a, b) : E(new Q("invalid-auth-event")) : (this.Z || Kh(this, !1, null, null), a = D());
    return a;
  };

  var Bh = function (a) {
    a.Kc || (a.Kc = !0, Kh(a, !1, null, null));
  };

  wh.prototype.Ic = function (a) {
    this.Z || Kh(this, !0, null, a.getError());
    return D();
  };

  wh.prototype.Jc = function (a, b) {
    var c = this,
        d = a.wa;
    b = b.mb(d, a.U);
    var e = a.gb;
    a = a.cc;
    var f = "signInViaRedirect" == d || "linkViaRedirect" == d;
    if (this.Z) return D();
    this.vb && this.vb.cancel();
    return b(e, a).then(function (a) {
      c.Z || Kh(c, f, a, null);
    }).h(function (a) {
      c.Z || Kh(c, f, null, a);
    });
  };

  var Kh = function (a, b, c, d) {
    b ? d ? (a.Z = function () {
      return E(d);
    }, a.Yb && a.Yb(d)) : (a.Z = function () {
      return D(c);
    }, a.Wa && a.Wa(c)) : (a.Z = function () {
      return D({
        user: null
      });
    }, a.Wa && a.Wa({
      user: null
    }));
    a.Wa = null;
    a.Yb = null;
  };

  wh.prototype.getRedirectResult = function () {
    var a = this;
    this.Wc || (this.Wc = new C(function (b, c) {
      a.Z ? a.Z().then(b, c) : (a.Wa = b, a.Yb = c, Lh(a));
    }));
    return this.Wc;
  };

  var Lh = function (a) {
    var b = new Q("timeout");
    a.vb && a.vb.cancel();
    a.vb = Yd(Dh.get()).then(function () {
      a.Z || Kh(a, !0, null, b);
    });
  },
      xh = function (a) {
    this.w = a;
  };

  xh.prototype.sd = function (a, b) {
    if (!a) return E(new Q("invalid-auth-event"));
    var c = a.wa,
        d = a.U;
    return a.K ? this.Ic(a, b) : b.mb(c, d) ? this.Jc(a, b) : E(new Q("invalid-auth-event"));
  };

  xh.prototype.Ic = function (a, b) {
    b.ta(a.wa, null, a.getError(), a.U);
    return D();
  };

  xh.prototype.Jc = function (a, b) {
    var c = a.U,
        d = a.wa;
    return b.mb(d, c)(a.gb, a.cc).then(function (a) {
      b.ta(d, a, null, c);
    }).h(function (a) {
      b.ta(d, null, a, c);
    });
  };

  var Mh = function (a) {
    this.f = a;
    this.xa = this.T = null;
    this.Oa = 0;
  };

  Mh.prototype.I = function () {
    return {
      apiKey: this.f.i,
      refreshToken: this.T,
      accessToken: this.xa,
      expirationTime: this.Oa
    };
  };

  var Oh = function (a, b) {
    var c = b.idToken,
        d = b.refreshToken;
    b = Nh(b.expiresIn);
    a.xa = c;
    a.Oa = b;
    a.T = d;
  },
      Nh = function (a) {
    return la() + 1E3 * parseInt(a, 10);
  },
      Ph = function (a, b) {
    return Tf(a.f, b).then(function (b) {
      a.xa = b.access_token;
      a.Oa = Nh(b.expires_in);
      a.T = b.refresh_token;
      return {
        accessToken: a.xa,
        expirationTime: a.Oa,
        refreshToken: a.T
      };
    }).h(function (b) {
      "auth/user-token-expired" == b.code && (a.T = null);
      throw b;
    });
  },
      Qh = function (a) {
    return !(!a.xa || a.T);
  };

  Mh.prototype.getToken = function (a) {
    a = !!a;
    return Qh(this) ? E(new Q("user-token-expired")) : a || !this.xa || la() > this.Oa - 3E4 ? this.T ? Ph(this, {
      grant_type: "refresh_token",
      refresh_token: this.T
    }) : D(null) : D({
      accessToken: this.xa,
      expirationTime: this.Oa,
      refreshToken: this.T
    });
  };

  var Rh = function (a, b, c, d, e) {
    gf(this, {
      uid: a,
      displayName: d || null,
      photoURL: e || null,
      email: c || null,
      providerId: b
    });
  },
      Sh = function (a, b) {
    xb.call(this, a);

    for (var c in b) this[c] = b[c];
  };

  r(Sh, xb);

  var W = function (a, b, c) {
    this.W = [];
    this.i = a.apiKey;
    this.C = a.appName;
    this.A = a.authDomain || null;
    a = firebase.SDK_VERSION ? Ue(firebase.SDK_VERSION) : null;
    this.f = new S(this.i, null, a);
    this.da = new Mh(this.f);
    Th(this, b.idToken);
    Oh(this.da, b);
    P(this, "refreshToken", this.da.T);
    Uh(this, c || {});
    G.call(this);
    this.Tb = !1;
    this.A && Xe() && (this.j = Jh(this.A, this.i, this.C));
    this.dc = [];
    this.nc = D();
  };

  r(W, G);

  W.prototype.ra = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1),
        d = this;
    return this.nc = this.nc.then(function () {
      return a.apply(d, c);
    }, function () {
      return a.apply(d, c);
    });
  };

  var Th = function (a, b) {
    a.ld = b;
    P(a, "_lat", b);
  },
      Vh = function (a, b) {
    Ma(a.dc, function (a) {
      return a == b;
    });
  },
      Wh = function (a) {
    for (var b = [], c = 0; c < a.dc.length; c++) b.push(a.dc[c](a));

    return Zc(b).then(function () {
      return a;
    });
  },
      Xh = function (a) {
    a.j && !a.Tb && (a.Tb = !0, a.j.subscribe(a));
  },
      Uh = function (a, b) {
    gf(a, {
      uid: b.uid,
      displayName: b.displayName || null,
      photoURL: b.photoURL || null,
      email: b.email || null,
      emailVerified: b.emailVerified || !1,
      isAnonymous: b.isAnonymous || !1,
      providerData: []
    });
  };

  P(W.prototype, "providerId", "firebase");

  var Yh = function () {},
      Zh = function (a) {
    return D().then(function () {
      if (a.Xd) throw new Q("app-deleted");
    });
  },
      $h = function (a) {
    return Fa(a.providerData, function (a) {
      return a.providerId;
    });
  },
      bi = function (a, b) {
    b && (ai(a, b.providerId), a.providerData.push(b));
  },
      ai = function (a, b) {
    Ma(a.providerData, function (a) {
      return a.providerId == b;
    });
  },
      ci = function (a, b, c) {
    ("uid" != b || c) && a.hasOwnProperty(b) && P(a, b, c);
  };

  W.prototype.copy = function (a) {
    var b = this;
    b != a && (gf(this, {
      uid: a.uid,
      displayName: a.displayName,
      photoURL: a.photoURL,
      email: a.email,
      emailVerified: a.emailVerified,
      isAnonymous: a.isAnonymous,
      providerData: []
    }), x(a.providerData, function (a) {
      bi(b, a);
    }), this.da = a.da, P(this, "refreshToken", this.da.T));
  };

  W.prototype.reload = function () {
    var a = this;
    return Zh(this).then(function () {
      return di(a).then(function () {
        return Wh(a);
      }).then(Yh);
    });
  };

  var di = function (a) {
    return a.getToken().then(function (b) {
      var c = a.isAnonymous;
      return ei(a, b).then(function () {
        c || ci(a, "isAnonymous", !1);
        return b;
      }).h(function (b) {
        "auth/user-token-expired" == b.code && (a.dispatchEvent(new Sh("userDeleted")), fi(a));
        throw b;
      });
    });
  };

  W.prototype.getToken = function (a) {
    var b = this,
        c = Qh(this.da);
    return Zh(this).then(function () {
      return b.da.getToken(a);
    }).then(function (a) {
      if (!a) throw new Q("internal-error");
      a.accessToken != b.ld && (Th(b, a.accessToken), b.Ca());
      ci(b, "refreshToken", a.refreshToken);
      return a.accessToken;
    }).h(function (a) {
      if ("auth/user-token-expired" == a.code && !c) return Wh(b).then(function () {
        ci(b, "refreshToken", null);
        throw a;
      });
      throw a;
    });
  };

  var gi = function (a, b) {
    b.idToken && a.ld != b.idToken && (Oh(a.da, b), a.Ca(), Th(a, b.idToken), ci(a, "refreshToken", a.da.T));
  };

  W.prototype.Ca = function () {
    this.dispatchEvent(new Sh("tokenChanged"));
  };

  var ei = function (a, b) {
    return R(a.f, sg, {
      idToken: b
    }).then(q(a.Ee, a));
  };

  W.prototype.Ee = function (a) {
    a = a.users;
    if (!a || !a.length) throw new Q("internal-error");
    a = a[0];
    Uh(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified
    });

    for (var b = hi(a), c = 0; c < b.length; c++) bi(this, b[c]);

    ci(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
  };

  var hi = function (a) {
    return (a = a.providerUserInfo) && a.length ? Fa(a, function (a) {
      return new Rh(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
    }) : [];
  };

  W.prototype.reauthenticate = function (a) {
    var b = this;
    return this.c(a.Fb(this.f).then(function (a) {
      var c;

      a: {
        var e = a.idToken.split(".");

        if (3 == e.length) {
          for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) e += ".";

          try {
            var k = hc(sb(e));

            if (k.sub && k.iss && k.aud && k.exp) {
              c = new sf(k);
              break a;
            }
          } catch (v) {}
        }

        c = null;
      }

      if (!c || b.uid != c.xe) throw new Q("user-mismatch");
      gi(b, a);
      return b.reload();
    }));
  };

  var ii = function (a, b) {
    return di(a).then(function () {
      if (Ja($h(a), b)) return Wh(a).then(function () {
        throw new Q("provider-already-linked");
      });
    });
  };

  h = W.prototype;

  h.ve = function (a) {
    var b = this;
    return this.c(ii(this, a.provider).then(function () {
      return b.getToken();
    }).then(function (c) {
      return a.nd(b.f, c);
    }).then(q(this.ed, this)));
  };

  h.link = function (a) {
    return this.ra(this.ve, a);
  };

  h.ed = function (a) {
    gi(this, a);
    var b = this;
    return this.reload().then(function () {
      return b;
    });
  };

  h.Te = function (a) {
    var b = this;
    return this.c(this.getToken().then(function (c) {
      return b.f.updateEmail(c, a);
    }).then(function (a) {
      gi(b, a);
      return b.reload();
    }));
  };

  h.updateEmail = function (a) {
    return this.ra(this.Te, a);
  };

  h.Ue = function (a) {
    var b = this;
    return this.c(this.getToken().then(function (c) {
      return b.f.updatePassword(c, a);
    }).then(function (a) {
      gi(b, a);
      return b.reload();
    }));
  };

  h.updatePassword = function (a) {
    return this.ra(this.Ue, a);
  };

  h.Ve = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Zh(this);
    var b = this;
    return this.c(this.getToken().then(function (c) {
      return b.f.updateProfile(c, {
        displayName: a.displayName,
        photoUrl: a.photoURL
      });
    }).then(function (a) {
      gi(b, a);
      ci(b, "displayName", a.displayName || null);
      ci(b, "photoURL", a.photoUrl || null);
      return Wh(b);
    }).then(Yh));
  };

  h.updateProfile = function (a) {
    return this.ra(this.Ve, a);
  };

  h.Se = function (a) {
    var b = this;
    return this.c(di(this).then(function (c) {
      return Ja($h(b), a) ? hg(b.f, c, [a]).then(function (a) {
        var c = {};
        x(a.providerUserInfo || [], function (a) {
          c[a.providerId] = !0;
        });
        x($h(b), function (a) {
          c[a] || ai(b, a);
        });
        return Wh(b);
      }) : Wh(b).then(function () {
        throw new Q("no-such-provider");
      });
    }));
  };

  h.unlink = function (a) {
    return this.ra(this.Se, a);
  };

  h.Wd = function () {
    var a = this;
    return this.c(this.getToken().then(function (b) {
      return R(a.f, rg, {
        idToken: b
      });
    }).then(function () {
      a.dispatchEvent(new Sh("userDeleted"));
    })).then(function () {
      fi(a);
    });
  };

  h["delete"] = function () {
    return this.ra(this.Wd);
  };

  h.Yc = function (a, b) {
    return "linkViaPopup" == a && (this.ja || null) == b && this.ba || "linkViaRedirect" == a && (this.Xb || null) == b ? !0 : !1;
  };

  h.ta = function (a, b, c, d) {
    "linkViaPopup" == a && d == (this.ja || null) && (c && this.Ea ? this.Ea(c) : b && !c && this.ba && this.ba(b), this.D && (this.D.cancel(), this.D = null), delete this.ba, delete this.Ea);
  };

  h.mb = function (a, b) {
    return "linkViaPopup" == a && b == (this.ja || null) || "linkViaRedirect" == a && (this.Xb || null) == b ? q(this.$d, this) : null;
  };

  h.Eb = function () {
    return We(this.uid + ":::");
  };

  var ki = function (a, b) {
    if (!Xe()) return E(new Q("operation-not-supported-in-this-environment"));
    var c = nf(b.providerId),
        d = a.Eb(),
        e = null;
    !Ye() && a.A && b.isOAuthProvider && (e = Hg(a.A, a.i, a.C, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));
    var f = Pe(e, c && c.ub, c && c.tb),
        c = ii(a, b.providerId).then(function () {
      return Wh(a);
    }).then(function () {
      ji(a);
      return a.getToken();
    }).then(function () {
      return Fh(a.j, f, "linkViaPopup", b, d, !!e);
    }).then(function () {
      return new C(function (b, c) {
        a.ta("linkViaPopup", null, new Q("cancelled-popup-request"), a.ja || null);
        a.ba = b;
        a.Ea = c;
        a.ja = d;
        a.D = Hh(a.j, a, "linkViaPopup", f, d);
      });
    }).then(function (a) {
      f && Oe(f);
      return a;
    }).h(function (a) {
      f && Oe(f);
      throw a;
    });
    return a.c(c);
  };

  W.prototype.linkWithPopup = function (a) {
    var b = ki(this, a);
    return this.ra(function () {
      return b;
    });
  };

  W.prototype.we = function (a) {
    if (!Xe()) return E(new Q("operation-not-supported-in-this-environment"));
    var b = this,
        c = null,
        d = this.Eb(),
        e = ii(this, a.providerId).then(function () {
      ji(b);
      return b.getToken();
    }).then(function () {
      b.Xb = d;
      return Wh(b);
    }).then(function (a) {
      b.Fa && (a = b.Fa, a = a.w.set(li, b.I(), a.B));
      return a;
    }).then(function () {
      return Gh(b.j, "linkViaRedirect", a, d);
    }).h(function (a) {
      c = a;
      if (b.Fa) return mi(b.Fa);
      throw c;
    }).then(function () {
      if (c) throw c;
    });
    return this.c(e);
  };

  W.prototype.linkWithRedirect = function (a) {
    return this.ra(this.we, a);
  };

  var ji = function (a) {
    if (!a.j || !a.Tb) {
      if (a.j && !a.Tb) throw new Q("internal-error");
      throw new Q("auth-domain-config-required");
    }
  };

  W.prototype.$d = function (a, b) {
    var c = this;
    this.D && (this.D.cancel(), this.D = null);
    var d = null,
        e = this.getToken().then(function (d) {
      return wf(c.f, {
        requestUri: a,
        sessionId: b,
        idToken: d
      });
    }).then(function (a) {
      d = Hf(a);
      return c.ed(a);
    }).then(function (a) {
      return {
        user: a,
        credential: d
      };
    });
    return this.c(e);
  };

  W.prototype.sendEmailVerification = function () {
    var a = this;
    return this.c(this.getToken().then(function (b) {
      return a.f.sendEmailVerification(b);
    }).then(function (b) {
      if (a.email != b) return a.reload();
    }).then(function () {}));
  };

  var fi = function (a) {
    for (var b = 0; b < a.W.length; b++) a.W[b].cancel("app-deleted");

    a.W = [];
    a.Xd = !0;
    P(a, "refreshToken", null);
    a.j && a.j.unsubscribe(a);
  };

  W.prototype.c = function (a) {
    var b = this;
    this.W.push(a);
    bd(a, function () {
      La(b.W, a);
    });
    return a;
  };

  W.prototype.toJSON = function () {
    return this.I();
  };

  W.prototype.I = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      isAnonymous: this.isAnonymous,
      providerData: [],
      apiKey: this.i,
      appName: this.C,
      authDomain: this.A,
      stsTokenManager: this.da.I(),
      redirectEventId: this.Xb || null
    };
    x(this.providerData, function (b) {
      a.providerData.push(hf(b));
    });
    return a;
  };

  var ni = function (a) {
    if (!a.apiKey) return null;
    var b = {
      apiKey: a.apiKey,
      authDomain: a.authDomain,
      appName: a.appName
    },
        c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;
    var d = new W(b, c, a);
    a.providerData && x(a.providerData, function (a) {
      if (a) {
        var b = {};
        gf(b, a);
        bi(d, b);
      }
    });
    a.redirectEventId && (d.Xb = a.redirectEventId);
    return d;
  },
      oi = function (a, b, c) {
    var d = new W(a, b);
    c && (d.Fa = c);
    return d.reload().then(function () {
      return d;
    });
  };

  var pi = function (a) {
    this.B = a;
    this.w = oh();
  },
      li = {
    name: "redirectUser",
    X: !1
  },
      mi = function (a) {
    return a.w.remove(li, a.B);
  },
      qi = function (a, b) {
    return a.w.get(li, a.B).then(function (a) {
      a && b && (a.authDomain = b);
      return ni(a || {});
    });
  };

  var ri = function (a) {
    this.B = a;
    this.w = oh();
  },
      si = {
    name: "authUser",
    X: !0
  },
      ti = function (a, b) {
    return a.w.set(si, b.I(), a.B);
  },
      ui = function (a) {
    return a.w.remove(si, a.B);
  },
      vi = function (a, b) {
    return a.w.get(si, a.B).then(function (a) {
      a && b && (a.authDomain = b);
      return ni(a || {});
    });
  };

  var Y = function (a) {
    this.Ma = !1;
    P(this, "app", a);
    if (X(this).options && X(this).options.apiKey) a = firebase.SDK_VERSION ? Ue(firebase.SDK_VERSION) : null, this.f = new S(X(this).options && X(this).options.apiKey, null, a);else throw new Q("invalid-api-key");
    this.W = [];
    this.Ka = [];
    this.Ce = firebase.INTERNAL.createSubscribe(q(this.qe, this));
    wi(this, null);
    this.ma = new ri(X(this).options.apiKey + ":" + X(this).name);
    this.Xa = new pi(X(this).options.apiKey + ":" + X(this).name);
    this.Bb = this.c(xi(this));
    this.sa = this.c(yi(this));
    this.zc = !1;
    this.wc = q(this.Ne, this);
    this.Dd = q(this.Qa, this);
    this.Ed = q(this.me, this);
    this.Cd = q(this.le, this);
    zi(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = q(this["delete"], this);
  };

  Y.prototype.toJSON = function () {
    return {
      apiKey: X(this).options.apiKey,
      authDomain: X(this).options.authDomain,
      appName: X(this).name,
      currentUser: Z(this) && Z(this).I()
    };
  };

  var Ai = function (a) {
    return a.Yd || E(new Q("auth-domain-config-required"));
  },
      zi = function (a) {
    var b = X(a).options.authDomain,
        c = X(a).options.apiKey;
    b && Xe() && (a.Yd = a.Bb.then(function () {
      if (!a.Ma) return a.j = Jh(b, c, X(a).name), a.j.subscribe(a), Z(a) && Xh(Z(a)), a.Mc && (Xh(a.Mc), a.Mc = null), a.j;
    }));
  };

  h = Y.prototype;

  h.Yc = function (a, b) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return !0;

      case "signInViaPopup":
        return this.ja == b && !!this.ba;

      default:
        return !1;
    }
  };

  h.ta = function (a, b, c, d) {
    "signInViaPopup" == a && this.ja == d && (c && this.Ea ? this.Ea(c) : b && !c && this.ba && this.ba(b), this.D && (this.D.cancel(), this.D = null), delete this.ba, delete this.Ea);
  };

  h.mb = function (a, b) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.ja == b && this.ba ? q(this.ae, this) : null;
  };

  h.ae = function (a, b) {
    var c = this;
    a = {
      requestUri: a,
      sessionId: b
    };
    this.D && (this.D.cancel(), this.D = null);
    var d = null,
        e = uf(c.f, a).then(function (a) {
      d = Hf(a);
      return a;
    });
    a = c.Bb.then(function () {
      return e;
    }).then(function (a) {
      return Bi(c, a);
    }).then(function () {
      return {
        user: Z(c),
        credential: d
      };
    });
    return this.c(a);
  };

  h.Eb = function () {
    return We();
  };

  h.signInWithPopup = function (a) {
    if (!Xe()) return E(new Q("operation-not-supported-in-this-environment"));
    var b = this,
        c = nf(a.providerId),
        d = this.Eb(),
        e = null;
    !Ye() && X(this).options.authDomain && a.isOAuthProvider && (e = Hg(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
    var f = Pe(e, c && c.ub, c && c.tb),
        c = Ai(this).then(function (b) {
      return Fh(b, f, "signInViaPopup", a, d, !!e);
    }).then(function () {
      return new C(function (a, c) {
        b.ta("signInViaPopup", null, new Q("cancelled-popup-request"), b.ja);
        b.ba = a;
        b.Ea = c;
        b.ja = d;
        b.D = Hh(b.j, b, "signInViaPopup", f, d);
      });
    }).then(function (a) {
      f && Oe(f);
      return a;
    }).h(function (a) {
      f && Oe(f);
      throw a;
    });
    return this.c(c);
  };

  h.signInWithRedirect = function (a) {
    if (!Xe()) return E(new Q("operation-not-supported-in-this-environment"));
    var b = this,
        c = Ai(this).then(function () {
      return Gh(b.j, "signInViaRedirect", a);
    });
    return this.c(c);
  };

  h.getRedirectResult = function () {
    if (!Xe()) return E(new Q("operation-not-supported-in-this-environment"));
    var a = this,
        b = Ai(this).then(function () {
      return a.j.getRedirectResult();
    });
    return this.c(b);
  };

  var Bi = function (a, b) {
    var c = {};
    c.apiKey = X(a).options.apiKey;
    c.authDomain = X(a).options.authDomain;
    c.appName = X(a).name;
    return a.Bb.then(function () {
      return oi(c, b, a.Xa);
    }).then(function (b) {
      if (Z(a) && b.uid == Z(a).uid) return Z(a).copy(b), a.Qa(b);
      wi(a, b);
      Xh(b);
      return a.Qa(b);
    }).then(function () {
      a.Ca();
    });
  },
      wi = function (a, b) {
    Z(a) && (Vh(Z(a), a.Dd), Sb(Z(a), "tokenChanged", a.Ed), Sb(Z(a), "userDeleted", a.Cd));
    b && (b.dc.push(a.Dd), Jb(b, "tokenChanged", a.Ed), Jb(b, "userDeleted", a.Cd));
    P(a, "currentUser", b);
  };

  Y.prototype.signOut = function () {
    var a = this,
        b = this.sa.then(function () {
      if (!Z(a)) return D();
      wi(a, null);
      return ui(a.ma).then(function () {
        a.Ca();
      });
    });
    return this.c(b);
  };

  var Ci = function (a) {
    var b = qi(a.Xa, X(a).options.authDomain).then(function (b) {
      if (a.Mc = b) b.Fa = a.Xa;
      return mi(a.Xa);
    });
    return a.c(b);
  },
      xi = function (a) {
    var b = X(a).options.authDomain,
        c = Ci(a).then(function () {
      return vi(a.ma, b);
    }).then(function (b) {
      return b ? (b.Fa = a.Xa, b.reload().then(function () {
        return ti(a.ma, b).then(function () {
          return b;
        });
      }).h(function (c) {
        return "auth/network-request-failed" == c.code ? b : ui(a.ma);
      })) : null;
    }).then(function (b) {
      wi(a, b || null);
    });
    return a.c(c);
  },
      yi = function (a) {
    return a.Bb.then(function () {
      return a.getRedirectResult();
    }).h(function () {}).then(function () {
      if (!a.Ma) return a.wc();
    }).h(function () {}).then(function () {
      if (!a.Ma) {
        a.zc = !0;
        var b = a.ma;
        b.w.addListener(si, b.B, a.wc);
      }
    });
  };

  Y.prototype.Ne = function () {
    var a = this;
    return vi(this.ma, X(this).options.authDomain).then(function (b) {
      if (!a.Ma) {
        var c;

        if (c = Z(a) && b) {
          c = Z(a).uid;
          var d = b.uid;
          c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
        }

        if (c) return Z(a).copy(b), Z(a).getToken();
        if (Z(a) || b) wi(a, b), b && (Xh(b), b.Fa = a.Xa), a.j && a.j.subscribe(a), a.Ca();
      }
    });
  };

  Y.prototype.Qa = function (a) {
    return ti(this.ma, a);
  };

  Y.prototype.me = function () {
    this.Ca();
    this.Qa(Z(this));
  };

  Y.prototype.le = function () {
    this.signOut();
  };

  var Di = function (a, b) {
    return a.c(b.then(function (b) {
      return Bi(a, b);
    }).then(function () {
      return Z(a);
    }));
  };

  h = Y.prototype;

  h.qe = function (a) {
    var b = this;
    this.addAuthTokenListener(function () {
      a.next(Z(b));
    });
  };

  h.onAuthStateChanged = function (a, b, c) {
    var d = this;
    this.zc && firebase.Promise.resolve().then(function () {
      p(a) ? a(Z(d)) : p(a.next) && a.next(Z(d));
    });
    return this.Ce(a, b, c);
  };

  h.getToken = function (a) {
    var b = this,
        c = this.sa.then(function () {
      return Z(b) ? Z(b).getToken(a).then(function (a) {
        return {
          accessToken: a
        };
      }) : null;
    });
    return this.c(c);
  };

  h.signInWithCustomToken = function (a) {
    var b = this;
    return this.sa.then(function () {
      return Di(b, R(b.f, tg, {
        token: a
      }));
    }).then(function (a) {
      ci(a, "isAnonymous", !1);
      return b.Qa(a);
    }).then(function () {
      return Z(b);
    });
  };

  h.signInWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.sa.then(function () {
      return Di(c, R(c.f, Df, {
        email: a,
        password: b
      }));
    });
  };

  h.createUserWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.sa.then(function () {
      return Di(c, R(c.f, qg, {
        email: a,
        password: b
      }));
    });
  };

  h.signInWithCredential = function (a) {
    var b = this;
    return this.sa.then(function () {
      return Di(b, a.Fb(b.f));
    });
  };

  h.signInAnonymously = function () {
    var a = Z(this),
        b = this;
    return a && a.isAnonymous ? D(a) : this.sa.then(function () {
      return Di(b, b.f.signInAnonymously());
    }).then(function (a) {
      ci(a, "isAnonymous", !0);
      return b.Qa(a);
    }).then(function () {
      return Z(b);
    });
  };

  var X = function (a) {
    return a.app;
  },
      Z = function (a) {
    return a.currentUser;
  };

  h = Y.prototype;

  h.Ca = function () {
    if (this.zc) for (var a = 0; a < this.Ka.length; a++) if (this.Ka[a]) this.Ka[a](Z(this) && Z(this)._lat || null);
  };

  h.addAuthTokenListener = function (a) {
    var b = this;
    this.Ka.push(a);
    this.c(this.sa.then(function () {
      b.Ma || Ja(b.Ka, a) && a(Z(b) && Z(b)._lat || null);
    }));
  };

  h.removeAuthTokenListener = function (a) {
    Ma(this.Ka, function (b) {
      return b == a;
    });
  };

  h["delete"] = function () {
    this.Ma = !0;

    for (var a = 0; a < this.W.length; a++) this.W[a].cancel("app-deleted");

    this.W = [];
    this.ma && (a = this.ma, a.w.removeListener(si, a.B, this.wc));
    this.j && this.j.unsubscribe(this);
    return firebase.Promise.resolve();
  };

  h.c = function (a) {
    var b = this;
    this.W.push(a);
    bd(a, function () {
      La(b.W, a);
    });
    return a;
  };

  h.fetchProvidersForEmail = function (a) {
    return this.c(Yf(this.f, a));
  };

  h.verifyPasswordResetCode = function (a) {
    return this.checkActionCode(a).then(function (a) {
      return a.data.email;
    });
  };

  h.confirmPasswordReset = function (a, b) {
    return this.c(this.f.confirmPasswordReset(a, b).then(function () {}));
  };

  h.checkActionCode = function (a) {
    return this.c(this.f.checkActionCode(a).then(function (a) {
      return new ch(a);
    }));
  };

  h.applyActionCode = function (a) {
    return this.c(this.f.applyActionCode(a).then(function () {}));
  };

  h.sendPasswordResetEmail = function (a) {
    return this.c(this.f.sendPasswordResetEmail(a).then(function () {}));
  };

  kh(Y.prototype, {
    applyActionCode: {
      name: "applyActionCode",
      a: [T("code")]
    },
    checkActionCode: {
      name: "checkActionCode",
      a: [T("code")]
    },
    confirmPasswordReset: {
      name: "confirmPasswordReset",
      a: [T("code"), T("newPassword")]
    },
    createUserWithEmailAndPassword: {
      name: "createUserWithEmailAndPassword",
      a: [T("email"), T("password")]
    },
    fetchProvidersForEmail: {
      name: "fetchProvidersForEmail",
      a: [T("email")]
    },
    getRedirectResult: {
      name: "getRedirectResult",
      a: []
    },
    onAuthStateChanged: {
      name: "onAuthStateChanged",
      a: [ih(U(), eh(), "nextOrObserver"), eh("opt_error", !0), eh("opt_completed", !0)]
    },
    sendPasswordResetEmail: {
      name: "sendPasswordResetEmail",
      a: [T("email")]
    },
    signInAnonymously: {
      name: "signInAnonymously",
      a: []
    },
    signInWithCredential: {
      name: "signInWithCredential",
      a: [gh()]
    },
    signInWithCustomToken: {
      name: "signInWithCustomToken",
      a: [T("token")]
    },
    signInWithEmailAndPassword: {
      name: "signInWithEmailAndPassword",
      a: [T("email"), T("password")]
    },
    signInWithPopup: {
      name: "signInWithPopup",
      a: [hh()]
    },
    signInWithRedirect: {
      name: "signInWithRedirect",
      a: [hh()]
    },
    signOut: {
      name: "signOut",
      a: []
    },
    toJSON: {
      name: "toJSON",
      a: [T(null, !0)]
    },
    verifyPasswordResetCode: {
      name: "verifyPasswordResetCode",
      a: [T("code")]
    }
  });
  kh(W.prototype, {
    "delete": {
      name: "delete",
      a: []
    },
    getToken: {
      name: "getToken",
      a: [{
        name: "opt_forceRefresh",
        ea: "a boolean",
        optional: !0,
        fa: function (a) {
          return "boolean" == typeof a;
        }
      }]
    },
    link: {
      name: "link",
      a: [gh()]
    },
    linkWithPopup: {
      name: "linkWithPopup",
      a: [hh()]
    },
    linkWithRedirect: {
      name: "linkWithRedirect",
      a: [hh()]
    },
    reauthenticate: {
      name: "reauthenticate",
      a: [gh()]
    },
    reload: {
      name: "reload",
      a: []
    },
    sendEmailVerification: {
      name: "sendEmailVerification",
      a: []
    },
    toJSON: {
      name: "toJSON",
      a: [T(null, !0)]
    },
    unlink: {
      name: "unlink",
      a: [T("provider")]
    },
    updateEmail: {
      name: "updateEmail",
      a: [T("email")]
    },
    updatePassword: {
      name: "updatePassword",
      a: [T("password")]
    },
    updateProfile: {
      name: "updateProfile",
      a: [U("profile")]
    }
  });
  kh(C.prototype, {
    h: {
      name: "catch"
    },
    then: {
      name: "then"
    }
  });
  V(Ff, "credential", function (a, b) {
    return new Cf(a, b);
  }, [T("email"), T("password")]);
  kh(yf.prototype, {
    addScope: {
      name: "addScope",
      a: [T("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [U("customOAuthParameters")]
    }
  });
  V(yf, "credential", yf.credential, [ih(T(), U(), "token")]);
  kh(zf.prototype, {
    addScope: {
      name: "addScope",
      a: [T("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [U("customOAuthParameters")]
    }
  });
  V(zf, "credential", zf.credential, [ih(T(), U(), "token")]);
  kh(Af.prototype, {
    addScope: {
      name: "addScope",
      a: [T("scope")]
    },
    setCustomParameters: {
      name: "setCustomParameters",
      a: [U("customOAuthParameters")]
    }
  });
  V(Af, "credential", Af.credential, [ih(T(), ih(U(), fh()), "idToken"), ih(T(), fh(), "accessToken", !0)]);
  kh(Bf.prototype, {
    setCustomParameters: {
      name: "setCustomParameters",
      a: [U("customOAuthParameters")]
    }
  });
  V(Bf, "credential", Bf.credential, [ih(T(), U(), "token"), T("secret", !0)]);

  (function () {
    if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
      var a = {
        Auth: Y,
        Error: Q
      };
      V(a, "EmailAuthProvider", Ff, []);
      V(a, "FacebookAuthProvider", yf, []);
      V(a, "GithubAuthProvider", zf, []);
      V(a, "GoogleAuthProvider", Af, []);
      V(a, "TwitterAuthProvider", Bf, []);
      firebase.INTERNAL.registerService("auth", function (a, c) {
        a = new Y(a);
        c({
          INTERNAL: {
            getToken: q(a.getToken, a),
            addAuthTokenListener: q(a.addAuthTokenListener, a),
            removeAuthTokenListener: q(a.removeAuthTokenListener, a)
          }
        });
        return a;
      }, a, function (a, c) {
        if ("create" === a) try {
          c.auth();
        } catch (d) {}
      });
      firebase.INTERNAL.extendNamespace({
        User: W
      });
    } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
})();