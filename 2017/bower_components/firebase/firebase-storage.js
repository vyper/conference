/*! @license Firebase v3.6.1
    Build: 3.6.1-rc.3
    Terms: https://firebase.google.com/terms/ */
(function () {
  var k,
      l = this,
      n = function (a) {
    return void 0 !== a;
  },
      aa = function (a) {
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
      p = function (a) {
    return "string" == typeof a;
  },
      ba = function (a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.sa = b.prototype;
    a.prototype = new c();

    a.ra = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];

      return b.prototype[c].apply(a, d);
    };
  };

  var ca = function (a, b, c) {
    function d() {
      z || (z = !0, b.apply(null, arguments));
    }

    function e(b) {
      m = setTimeout(function () {
        m = null;
        a(f, 2 === C);
      }, b);
    }

    function f(a, b) {
      if (!z) if (a) d.apply(null, arguments);else if (2 === C || B) d.apply(null, arguments);else {
        64 > h && (h *= 2);
        var c;
        1 === C ? (C = 2, c = 0) : c = 1E3 * (h + Math.random());
        e(c);
      }
    }

    function g(a) {
      Na || (Na = !0, z || (null !== m ? (a || (C = 2), clearTimeout(m), e(0)) : a || (C = 1)));
    }

    var h = 1,
        m = null,
        B = !1,
        C = 0,
        z = !1,
        Na = !1;
    e(0);
    setTimeout(function () {
      B = !0;
      g(!0);
    }, c);
    return g;
  };

  var q = "https://firebasestorage.googleapis.com";

  var r = function (a, b) {
    this.code = "storage/" + a;
    this.message = "Firebase Storage: " + b;
    this.serverResponse = null;
    this.name = "FirebaseError";
  };

  ba(r, Error);

  var da = function () {
    return new r("unknown", "An unknown error occurred, please check the error payload for server response.");
  },
      ea = function () {
    return new r("canceled", "User canceled the upload/download.");
  },
      fa = function () {
    return new r("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
  },
      ga = function (a, b, c) {
    return new r("invalid-argument", "Invalid argument in `" + b + "` at index " + a + ": " + c);
  },
      ha = function () {
    return new r("app-deleted", "The Firebase app was deleted.");
  },
      t = function (a, b) {
    return new r("invalid-format", "String does not match format '" + a + "': " + b);
  },
      ia = function (a) {
    throw new r("internal-error", "Internal error: " + a);
  };

  var ja = function (a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  },
      ka = function (a) {
    var b = {};
    ja(a, function (a, d) {
      b[a] = d;
    });
    return b;
  };

  var la = function (a) {
    if ("undefined" !== typeof firebase) return new firebase.Promise(a);
    throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");
  };

  var u = function (a, b, c, d) {
    this.h = a;
    this.b = {};
    this.method = b;
    this.headers = {};
    this.body = null;
    this.j = c;
    this.l = this.a = null;
    this.c = [200];
    this.g = [];
    this.timeout = d;
    this.f = !0;
  };

  var ma = {
    STATE_CHANGED: "state_changed"
  },
      v = {
    RUNNING: "running",
    PAUSED: "paused",
    SUCCESS: "success",
    CANCELED: "canceled",
    ERROR: "error"
  },
      na = function (a) {
    switch (a) {
      case "running":
      case "pausing":
      case "canceling":
        return "running";

      case "paused":
        return "paused";

      case "success":
        return "success";

      case "canceled":
        return "canceled";

      case "error":
        return "error";

      default:
        return "error";
    }
  };

  var w = function (a) {
    return n(a) && null !== a;
  },
      oa = function (a) {
    return "string" === typeof a || a instanceof String;
  },
      pa = function () {
    return "undefined" !== typeof Blob;
  };

  var qa = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, qa);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };

  ba(qa, Error);

  var sa = function (a, b) {
    var c = ra;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  };

  var ta = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();

    return d + c.join("%s");
  },
      ua = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  },
      va = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  var x = function (a) {
    return function () {
      var b = [];
      Array.prototype.push.apply(b, arguments);
      firebase.Promise.resolve(!0).then(function () {
        a.apply(null, b);
      });
    };
  };

  var y = function (a, b) {
    this.bucket = a;
    this.path = b;
  },
      wa = function (a) {
    var b = encodeURIComponent;
    return "/b/" + b(a.bucket) + "/o/" + b(a.path);
  },
      xa = function (a) {
    for (var b = null, c = [{
      K: /^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,
      G: {
        bucket: 1,
        path: 3
      },
      J: function (a) {
        "/" === a.path.charAt(a.path.length - 1) && (a.path = a.path.slice(0, -1));
      }
    }, {
      K: /^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
      G: {
        bucket: 1,
        path: 3
      },
      J: function (a) {
        a.path = decodeURIComponent(a.path);
      }
    }], d = 0; d < c.length; d++) {
      var e = c[d],
          f = e.K.exec(a);

      if (f) {
        b = f[e.G.bucket];
        (f = f[e.G.path]) || (f = "");
        b = new y(b, f);
        e.J(b);
        break;
      }
    }

    if (null == b) throw new r("invalid-url", "Invalid URL '" + a + "'.");
    return b;
  };

  var ya = function (a, b, c) {
    "function" == aa(a) || w(b) || w(c) ? (this.c = a, this.a = b || null, this.b = c || null) : (this.c = a.next || null, this.a = a.error || null, this.b = a.complete || null);
  };

  var A = {
    RAW: "raw",
    BASE64: "base64",
    BASE64URL: "base64url",
    DATA_URL: "data_url"
  },
      za = function (a) {
    switch (a) {
      case "raw":
      case "base64":
      case "base64url":
      case "data_url":
        break;

      default:
        throw "Expected one of the event types: [raw, base64, base64url, data_url].";
    }
  },
      Aa = function (a, b) {
    this.b = a;
    this.a = b || null;
  },
      Ea = function (a, b) {
    switch (a) {
      case "raw":
        return new Aa(Ba(b));

      case "base64":
      case "base64url":
        return new Aa(Ca(a, b));

      case "data_url":
        return a = new Da(b), a = a.a ? Ca("base64", a.c) : Ba(a.c), new Aa(a, new Da(b).b);
    }

    throw da();
  },
      Ba = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      if (127 >= d) b.push(d);else if (2047 >= d) b.push(192 | d >> 6, 128 | d & 63);else if (55296 == (d & 64512)) {
        if (c < a.length - 1 && 56320 == (a.charCodeAt(c + 1) & 64512)) {
          var e = a.charCodeAt(++c),
              d = 65536 | (d & 1023) << 10 | e & 1023;
          b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63);
        } else b.push(239, 191, 189);
      } else 56320 == (d & 64512) ? b.push(239, 191, 189) : b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63);
    }

    return new Uint8Array(b);
  },
      Ca = function (a, b) {
    switch (a) {
      case "base64":
        var c = -1 !== b.indexOf("-"),
            d = -1 !== b.indexOf("_");
        if (c || d) throw t(a, "Invalid character '" + (c ? "-" : "_") + "' found: is it base64url encoded?");
        break;

      case "base64url":
        c = -1 !== b.indexOf("+");
        d = -1 !== b.indexOf("/");
        if (c || d) throw t(a, "Invalid character '" + (c ? "+" : "/") + "' found: is it base64 encoded?");
        b = b.replace(/-/g, "+").replace(/_/g, "/");
    }

    var e;

    try {
      e = atob(b);
    } catch (f) {
      throw t(a, "Invalid character found");
    }

    a = new Uint8Array(e.length);

    for (b = 0; b < e.length; b++) a[b] = e.charCodeAt(b);

    return a;
  },
      Da = function (a) {
    var b = a.match(/^data:([^,]+)?,/);
    if (null === b) throw t("data_url", "Must be formatted 'data:[<mediatype>][;base64],<data>");
    b = b[1] || null;
    this.a = !1;
    this.b = null;

    if (null != b) {
      var c = b.length - 7;
      this.b = (this.a = 0 <= c && b.indexOf(";base64", c) == c) ? b.substring(0, b.length - 7) : b;
    }

    this.c = a.substring(a.indexOf(",") + 1);
  };

  var Fa = function (a) {
    var b = encodeURIComponent,
        c = "?";
    ja(a, function (a, e) {
      a = b(a) + "=" + b(e);
      c = c + a + "&";
    });
    return c = c.slice(0, -1);
  };

  var Ga = function () {
    var a = this;
    this.a = new XMLHttpRequest();
    this.c = 0;
    this.f = la(function (b) {
      a.a.addEventListener("abort", function () {
        a.c = 2;
        b(a);
      });
      a.a.addEventListener("error", function () {
        a.c = 1;
        b(a);
      });
      a.a.addEventListener("load", function () {
        b(a);
      });
    });
    this.b = !1;
  },
      Ha = function (a, b, c, d, e) {
    if (a.b) throw ia("cannot .send() more than once");
    a.b = !0;
    a.a.open(c, b, !0);
    w(e) && ja(e, function (b, c) {
      a.a.setRequestHeader(b, c.toString());
    });
    w(d) ? a.a.send(d) : a.a.send();
    return a.f;
  },
      Ia = function (a) {
    if (!a.b) throw ia("cannot .getErrorCode() before sending");
    return a.c;
  },
      D = function (a) {
    if (!a.b) throw ia("cannot .getStatus() before sending");

    try {
      return a.a.status;
    } catch (b) {
      return -1;
    }
  },
      Ja = function (a) {
    if (!a.b) throw ia("cannot .getResponseText() before sending");
    return a.a.responseText;
  };

  Ga.prototype.abort = function () {
    this.a.abort();
  };

  var E = function (a, b, c, d, e, f) {
    this.b = a;
    this.h = b;
    this.f = c;
    this.a = d;
    this.g = e;
    this.c = f;
  };

  k = E.prototype;

  k.V = function () {
    return this.b;
  };

  k.qa = function () {
    return this.h;
  };

  k.na = function () {
    return this.f;
  };

  k.ia = function () {
    return this.a;
  };

  k.W = function () {
    if (w(this.a)) {
      var a = this.a.downloadURLs;
      return w(a) && w(a[0]) ? a[0] : null;
    }

    return null;
  };

  k.pa = function () {
    return this.g;
  };

  k.la = function () {
    return this.c;
  };

  var Ka = function (a, b) {
    b.unshift(a);
    qa.call(this, ta.apply(null, b));
    b.shift();
  };

  ba(Ka, qa);

  var F = function (a, b, c) {
    if (!a) {
      var d = Array.prototype.slice.call(arguments, 2),
          e = "Assertion failed";
      if (b) var e = e + (": " + b),
          f = d;
      throw new Ka("" + e, f || []);
    }
  };

  var G;

  a: {
    var La = l.navigator;

    if (La) {
      var Ma = La.userAgent;

      if (Ma) {
        G = Ma;
        break a;
      }
    }

    G = "";
  }

  ;

  var Oa = function () {};

  var H = Array.prototype.indexOf ? function (a, b, c) {
    F(null != a.length);
    return Array.prototype.indexOf.call(a, b, c);
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;

    for (; c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  },
      Pa = Array.prototype.forEach ? function (a, b, c) {
    F(null != a.length);
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
  },
      Qa = Array.prototype.filter ? function (a, b, c) {
    F(null != a.length);
    return Array.prototype.filter.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = p(a) ? a.split("") : a, h = 0; h < d; h++) if (h in g) {
      var m = g[h];
      b.call(c, m, h, a) && (e[f++] = m);
    }

    return e;
  },
      Ra = Array.prototype.map ? function (a, b, c) {
    F(null != a.length);
    return Array.prototype.map.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));

    return e;
  },
      Sa = function (a) {
    var b = a.length;

    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

      return c;
    }

    return [];
  };

  var Ta = function (a, b) {
    b = Qa(b.split("/"), function (a) {
      return 0 < a.length;
    }).join("/");
    return 0 === a.length ? b : a + "/" + b;
  },
      Ua = function (a) {
    var b = a.lastIndexOf("/", a.length - 2);
    return -1 === b ? a : a.slice(b + 1);
  };

  var Wa = function (a, b, c, d, e, f, g, h, m, B, C) {
    this.C = a;
    this.A = b;
    this.v = c;
    this.o = d;
    this.B = e.slice();
    this.m = f.slice();
    this.j = this.l = this.c = this.b = null;
    this.f = this.g = !1;
    this.s = g;
    this.h = h;
    this.D = C;
    this.w = m;
    var z = this;
    this.u = la(function (a, b) {
      z.l = a;
      z.j = b;
      Va(z);
    });
  },
      Xa = function (a, b, c) {
    this.b = a;
    this.c = b;
    this.a = !!c;
  },
      Va = function (a) {
    function b(a, b) {
      b ? a(!1, new Xa(!1, null, !0)) : (b = new Ga(), b.a.withCredentials = d.D, d.b = b, Ha(b, d.C, d.A, d.o, d.v).then(function (b) {
        d.b = null;
        var c = 0 === Ia(b),
            e = D(b);

        if (!(c = !c)) {
          var f = d,
              c = 500 <= e && 600 > e,
              g;
          g = 0 <= H([408, 429], e);
          f = 0 <= H(f.m, e);
          c = c || g || f;
        }

        c ? (b = 2 === Ia(b), a(!1, new Xa(!1, null, b))) : (e = 0 <= H(d.B, e), a(!0, new Xa(e, b)));
      }));
    }

    function c(a, b) {
      var c = d.l;
      a = d.j;
      var e = b.c;
      if (b.b) try {
        var f = d.s(e, Ja(e));
        n(f) ? c(f) : c();
      } catch (B) {
        a(B);
      } else null !== e ? (b = da(), f = Ja(e), b.serverResponse = f, d.h ? a(d.h(e, b)) : a(b)) : (b = b.a ? d.f ? ha() : ea() : new r("retry-limit-exceeded", "Max retry time for operation exceeded, please try again."), a(b));
    }

    var d = a;
    a.g ? c(0, new Xa(!1, null, !0)) : a.c = ca(b, c, a.w);
  };

  Wa.prototype.a = function () {
    return this.u;
  };

  Wa.prototype.cancel = function (a) {
    this.g = !0;
    this.f = a || !1;
    null !== this.c && (0, this.c)(!1);
    null !== this.b && this.b.abort();
  };

  var Ya = function (a, b, c) {
    var d = Fa(a.b),
        d = a.h + d,
        e = a.headers ? ka(a.headers) : {};
    null !== b && 0 < b.length && (e.Authorization = "Firebase " + b);
    e["X-Firebase-Storage-Version"] = "webjs/" + ("undefined" !== typeof firebase ? firebase.SDK_VERSION : "AppManager");
    return new Wa(d, a.method, e, a.body, a.c, a.g, a.j, a.a, a.timeout, 0, c);
  };

  var Za = function (a) {
    this.b = firebase.Promise.reject(a);
  };

  Za.prototype.a = function () {
    return this.b;
  };

  Za.prototype.cancel = function () {};

  var $a = function () {
    this.a = {};
    this.b = Number.MIN_SAFE_INTEGER;
  },
      ab = function (a, b) {
    function c() {
      delete e.a[d];
    }

    var d = a.b;
    a.b++;
    a.a[d] = b;
    var e = a;
    b.a().then(c, c);
  },
      bb = function (a) {
    ja(a.a, function (a, c) {
      c && c.cancel(!0);
    });
    a.a = {};
  };

  var cb = -1 != G.indexOf("Opera"),
      db = -1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE"),
      eb = -1 != G.indexOf("Edge"),
      fb = -1 != G.indexOf("Gecko") && !(-1 != G.toLowerCase().indexOf("webkit") && -1 == G.indexOf("Edge")) && !(-1 != G.indexOf("Trident") || -1 != G.indexOf("MSIE")) && -1 == G.indexOf("Edge"),
      gb = -1 != G.toLowerCase().indexOf("webkit") && -1 == G.indexOf("Edge"),
      hb;

  a: {
    var ib = "",
        jb = function () {
      var a = G;
      if (fb) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (eb) return /Edge\/([\d\.]+)/.exec(a);
      if (db) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (gb) return /WebKit\/(\S+)/.exec(a);
      if (cb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    jb && (ib = jb ? jb[1] : "");

    if (db) {
      var kb,
          lb = l.document;
      kb = lb ? lb.documentMode : void 0;

      if (null != kb && kb > parseFloat(ib)) {
        hb = String(kb);
        break a;
      }
    }

    hb = ib;
  }

  var mb = hb,
      ra = {},
      nb = function (a) {
    return sa(a, function () {
      for (var b = 0, c = ua(String(mb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            h = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b = va(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || va(0 == g[2].length, 0 == h[2].length) || va(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  };

  var ob = function (a, b, c, d, e) {
    this.a = a;
    this.g = null;

    if (null !== this.a && (a = this.a.options, w(a))) {
      a = a.storageBucket || null;
      if (null == a) a = null;else {
        var f = null;

        try {
          f = xa(a);
        } catch (g) {}

        if (null !== f) {
          if ("" !== f.path) throw new r("invalid-default-bucket", "Invalid default bucket '" + a + "'.");
          a = f.bucket;
        }
      }
      this.g = a;
    }

    this.o = b;
    this.m = c;
    this.j = e;
    this.l = d;
    this.c = 12E4;
    this.b = 6E4;
    this.h = new $a();
    this.f = !1;
  },
      pb = function (a) {
    return null !== a.a && w(a.a.INTERNAL) && w(a.a.INTERNAL.getToken) ? a.a.INTERNAL.getToken().then(function (a) {
      return w(a) ? a.accessToken : null;
    }, function () {
      return null;
    }) : firebase.Promise.resolve(null);
  };

  ob.prototype.bucket = function () {
    if (this.f) throw ha();
    return this.g;
  };

  var I = function (a, b, c) {
    if (a.f) return new Za(ha());
    b = a.m(b, c, null === a.a, a.j);
    ab(a.h, b);
    return b;
  };

  var qb = function (a) {
    var b = l.BlobBuilder || l.WebKitBlobBuilder;

    if (n(b)) {
      for (var b = new b(), c = 0; c < arguments.length; c++) b.append(arguments[c]);

      return b.getBlob();
    }

    b = Sa(arguments);
    c = l.BlobBuilder || l.WebKitBlobBuilder;

    if (n(c)) {
      for (var c = new c(), d = 0; d < b.length; d++) c.append(b[d], void 0);

      b = c.getBlob(void 0);
    } else if (n(l.Blob)) b = new Blob(b, {});else throw Error("This browser doesn't seem to support creating Blobs");

    return b;
  },
      rb = function (a, b, c) {
    n(c) || (c = a.size);
    return a.webkitSlice ? a.webkitSlice(b, c) : a.mozSlice ? a.mozSlice(b, c) : a.slice ? fb && !nb("13.0") || gb && !nb("537.1") ? (0 > b && (b += a.size), 0 > b && (b = 0), 0 > c && (c += a.size), c < b && (c = b), a.slice(b, c - b)) : a.slice(b, c) : null;
  };

  var J = function (a, b) {
    pa() && a instanceof Blob ? (this.i = a, b = a.size, a = a.type) : (a instanceof ArrayBuffer ? (b ? this.i = new Uint8Array(a) : (this.i = new Uint8Array(a.byteLength), this.i.set(new Uint8Array(a))), b = this.i.length) : (b ? this.i = a : (this.i = new Uint8Array(a.length), this.i.set(a)), b = a.length), a = "");
    this.a = b;
    this.b = a;
  };

  J.prototype.type = function () {
    return this.b;
  };

  J.prototype.slice = function (a, b) {
    if (pa() && this.i instanceof Blob) return a = rb(this.i, a, b), null === a ? null : new J(a);
    a = new Uint8Array(this.i.buffer, a, b - a);
    return new J(a, !0);
  };

  var sb = function (a) {
    var b = [];
    Array.prototype.push.apply(b, arguments);
    if (pa()) return b = Ra(b, function (a) {
      return a instanceof J ? a.i : a;
    }), new J(qb.apply(null, b));
    var b = Ra(b, function (a) {
      return oa(a) ? Ea("raw", a).b.buffer : a.i.buffer;
    }),
        c = 0;
    Pa(b, function (a) {
      c += a.byteLength;
    });
    var d = new Uint8Array(c),
        e = 0;
    Pa(b, function (a) {
      a = new Uint8Array(a);

      for (var b = 0; b < a.length; b++) d[e++] = a[b];
    });
    return new J(d, !0);
  };

  var tb = function (a, b) {
    return b;
  },
      K = function (a, b, c, d) {
    this.c = a;
    this.b = b || a;
    this.writable = !!c;
    this.a = d || tb;
  },
      ub = null,
      vb = function () {
    if (ub) return ub;
    var a = [];
    a.push(new K("bucket"));
    a.push(new K("generation"));
    a.push(new K("metageneration"));
    a.push(new K("name", "fullPath", !0));
    var b = new K("name");

    b.a = function (a, b) {
      return !oa(b) || 2 > b.length ? b : Ua(b);
    };

    a.push(b);
    b = new K("size");

    b.a = function (a, b) {
      return w(b) ? +b : b;
    };

    a.push(b);
    a.push(new K("timeCreated"));
    a.push(new K("updated"));
    a.push(new K("md5Hash", null, !0));
    a.push(new K("cacheControl", null, !0));
    a.push(new K("contentDisposition", null, !0));
    a.push(new K("contentEncoding", null, !0));
    a.push(new K("contentLanguage", null, !0));
    a.push(new K("contentType", null, !0));
    a.push(new K("metadata", "customMetadata", !0));
    a.push(new K("downloadTokens", "downloadURLs", !1, function (a, b) {
      if (!(oa(b) && 0 < b.length)) return [];
      var c = encodeURIComponent;
      return Ra(b.split(","), function (b) {
        var d = a.fullPath,
            d = "https://firebasestorage.googleapis.com/v0" + ("/b/" + c(a.bucket) + "/o/" + c(d));
        b = Fa({
          alt: "media",
          token: b
        });
        return d + b;
      });
    }));
    return ub = a;
  },
      wb = function (a, b) {
    Object.defineProperty(a, "ref", {
      get: function () {
        return b.o(b, new y(a.bucket, a.fullPath));
      }
    });
  },
      xb = function (a, b) {
    for (var c = {}, d = b.length, e = 0; e < d; e++) {
      var f = b[e];
      f.writable && (c[f.c] = a[f.b]);
    }

    return JSON.stringify(c);
  },
      yb = function (a) {
    if (!a || "object" !== typeof a) throw "Expected Metadata object.";

    for (var b in a) {
      var c = a[b];
      if ("customMetadata" === b && "object" !== typeof c) throw "Expected object for 'customMetadata' mapping.";
    }
  };

  var L = function (a, b, c) {
    for (var d = b.length, e = b.length, f = 0; f < b.length; f++) if (b[f].b) {
      d = f;
      break;
    }

    if (!(d <= c.length && c.length <= e)) throw d === e ? (b = d, d = 1 === d ? "argument" : "arguments") : (b = "between " + d + " and " + e, d = "arguments"), new r("invalid-argument-count", "Invalid argument count in `" + a + "`: Expected " + b + " " + d + ", received " + c.length + ".");

    for (f = 0; f < c.length; f++) try {
      b[f].a(c[f]);
    } catch (g) {
      if (g instanceof Error) throw ga(f, a, g.message);
      throw ga(f, a, g);
    }
  },
      M = function (a, b) {
    var c = this;

    this.a = function (b) {
      c.b && !n(b) || a(b);
    };

    this.b = !!b;
  },
      zb = function (a, b) {
    return function (c) {
      a(c);
      b(c);
    };
  },
      N = function (a, b) {
    function c(a) {
      if (!("string" === typeof a || a instanceof String)) throw "Expected string.";
    }

    var d;
    a ? d = zb(c, a) : d = c;
    return new M(d, b);
  },
      Ab = function () {
    return new M(function (a) {
      if (!(a instanceof Uint8Array || a instanceof ArrayBuffer || pa() && a instanceof Blob)) throw "Expected Blob or File.";
    });
  },
      Bb = function () {
    return new M(function (a) {
      if (!(("number" === typeof a || a instanceof Number) && 0 <= a)) throw "Expected a number 0 or greater.";
    });
  },
      Cb = function (a, b) {
    return new M(function (b) {
      if (!(null === b || w(b) && b instanceof Object)) throw "Expected an Object.";
      w(a) && a(b);
    }, b);
  },
      O = function () {
    return new M(function (a) {
      if (null !== a && "function" != aa(a)) throw "Expected a Function.";
    }, !0);
  };

  var P = function (a) {
    if (!a) throw da();
  },
      Db = function (a, b) {
    return function (c, d) {
      var e;

      a: {
        try {
          e = JSON.parse(d);
        } catch (h) {
          e = null;
          break a;
        }

        c = typeof e;
        e = "object" == c && null != e || "function" == c ? e : null;
      }

      if (null === e) e = null;else {
        c = {
          type: "file"
        };
        d = b.length;

        for (var f = 0; f < d; f++) {
          var g = b[f];
          c[g.b] = g.a(c, e[g.c]);
        }

        wb(c, a);
        e = c;
      }
      P(null !== e);
      return e;
    };
  },
      Q = function (a) {
    return function (b, c) {
      b = 401 === D(b) ? new r("unauthenticated", "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === D(b) ? new r("quota-exceeded", "Quota for bucket '" + a.bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.") : 403 === D(b) ? new r("unauthorized", "User does not have permission to access '" + a.path + "'.") : c;
      b.serverResponse = c.serverResponse;
      return b;
    };
  },
      Eb = function (a) {
    var b = Q(a);
    return function (c, d) {
      var e = b(c, d);
      404 === D(c) && (e = new r("object-not-found", "Object '" + a.path + "' does not exist."));
      e.serverResponse = d.serverResponse;
      return e;
    };
  },
      Fb = function (a, b, c) {
    var d = wa(b);
    a = new u(q + "/v0" + d, "GET", Db(a, c), a.c);
    a.a = Eb(b);
    return a;
  },
      Gb = function (a, b) {
    var c = wa(b);
    a = new u(q + "/v0" + c, "DELETE", function () {}, a.c);
    a.c = [200, 204];
    a.a = Eb(b);
    return a;
  },
      Hb = function (a, b, c) {
    c = c ? ka(c) : {};
    c.fullPath = a.path;
    c.size = b.a;
    c.contentType || (a = b && b.type() || "application/octet-stream", c.contentType = a);
    return c;
  },
      Ib = function (a, b, c, d, e) {
    var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
        g = {
      "X-Goog-Upload-Protocol": "multipart"
    },
        h;
    h = "";

    for (var m = 0; 2 > m; m++) h += Math.random().toString().slice(2);

    g["Content-Type"] = "multipart/related; boundary=" + h;
    e = Hb(b, d, e);
    m = xb(e, c);
    d = sb("--" + h + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + m + "\r\n--" + h + "\r\nContent-Type: " + e.contentType + "\r\n\r\n", d, "\r\n--" + h + "--");
    if (null === d) throw fa();
    a = new u(q + "/v0" + f, "POST", Db(a, c), a.b);
    a.b = {
      name: e.fullPath
    };
    a.headers = g;
    a.body = d.i;
    a.a = Q(b);
    return a;
  },
      Jb = function (a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = !!c;
    this.f = d || null;
  },
      Kb = function (a, b) {
    var c;

    try {
      c = a.a.getResponseHeader("X-Goog-Upload-Status");
    } catch (d) {
      P(!1);
    }

    a = 0 <= H(b || ["active"], c);
    P(a);
    return c;
  },
      Lb = function (a, b, c, d, e) {
    var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
        g = Hb(b, d, e);
    e = {
      name: g.fullPath
    };
    f = q + "/v0" + f;
    d = {
      "X-Goog-Upload-Protocol": "resumable",
      "X-Goog-Upload-Command": "start",
      "X-Goog-Upload-Header-Content-Length": d.a,
      "X-Goog-Upload-Header-Content-Type": g.contentType,
      "Content-Type": "application/json; charset=utf-8"
    };
    c = xb(g, c);
    a = new u(f, "POST", function (a) {
      Kb(a);
      var b;

      try {
        b = a.a.getResponseHeader("X-Goog-Upload-URL");
      } catch (B) {
        P(!1);
      }

      P(oa(b));
      return b;
    }, a.b);
    a.b = e;
    a.headers = d;
    a.body = c;
    a.a = Q(b);
    return a;
  },
      Mb = function (a, b, c, d) {
    a = new u(c, "POST", function (a) {
      var b = Kb(a, ["active", "final"]),
          c;

      try {
        c = a.a.getResponseHeader("X-Goog-Upload-Size-Received");
      } catch (h) {
        P(!1);
      }

      a = c;
      isFinite(a) && (a = String(a));
      a = p(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
      P(!isNaN(a));
      return new Jb(a, d.a, "final" === b);
    }, a.b);
    a.headers = {
      "X-Goog-Upload-Command": "query"
    };
    a.a = Q(b);
    a.f = !1;
    return a;
  },
      Nb = function (a, b, c, d, e, f, g) {
    var h = new Jb(0, 0);
    g ? (h.a = g.a, h.b = g.b) : (h.a = 0, h.b = d.a);
    if (d.a !== h.b) throw new r("server-file-wrong-size", "Server recorded incorrect upload file size, please retry the upload.");
    var m = g = h.b - h.a;
    0 < e && (m = Math.min(m, e));
    var B = h.a;
    e = {
      "X-Goog-Upload-Command": m === g ? "upload, finalize" : "upload",
      "X-Goog-Upload-Offset": h.a
    };
    g = d.slice(B, B + m);
    if (null === g) throw fa();
    c = new u(c, "POST", function (a, c) {
      var e = Kb(a, ["active", "final"]),
          g = h.a + m,
          C = d.a,
          z;
      "final" === e ? z = Db(b, f)(a, c) : z = null;
      return new Jb(g, C, "final" === e, z);
    }, b.b);
    c.headers = e;
    c.body = g.i;
    c.l = null;
    c.a = Q(a);
    c.f = !1;
    return c;
  };

  var T = function (a, b, c, d, e, f) {
    this.L = a;
    this.c = b;
    this.l = c;
    this.f = e;
    this.h = f || null;
    this.s = d;
    this.m = 0;
    this.D = this.u = !1;
    this.B = [];
    this.S = 262144 < this.f.a;
    this.b = "running";
    this.a = this.v = this.g = null;
    this.j = 1;
    var g = this;

    this.F = function (a) {
      g.a = null;
      g.j = 1;
      "storage/canceled" === a.code ? (g.u = !0, R(g)) : (g.g = a, S(g, "error"));
    };

    this.P = function (a) {
      g.a = null;
      "storage/canceled" === a.code ? R(g) : (g.g = a, S(g, "error"));
    };

    this.A = this.o = null;
    this.C = la(function (a, b) {
      g.o = a;
      g.A = b;
      Ob(g);
    });
    this.C.then(null, function () {});
  },
      Ob = function (a) {
    "running" === a.b && null === a.a && (a.S ? null === a.v ? Pb(a) : a.u ? Qb(a) : a.D ? Rb(a) : Sb(a) : Tb(a));
  },
      U = function (a, b) {
    pb(a.c).then(function (c) {
      switch (a.b) {
        case "running":
          b(c);
          break;

        case "canceling":
          S(a, "canceled");
          break;

        case "pausing":
          S(a, "paused");
      }
    });
  },
      Pb = function (a) {
    U(a, function (b) {
      var c = Lb(a.c, a.l, a.s, a.f, a.h);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.v = b;
        a.u = !1;
        R(a);
      }, this.F);
    });
  },
      Qb = function (a) {
    var b = a.v;
    U(a, function (c) {
      var d = Mb(a.c, a.l, b, a.f);
      a.a = I(a.c, d, c);
      a.a.a().then(function (b) {
        a.a = null;
        Ub(a, b.a);
        a.u = !1;
        b.c && (a.D = !0);
        R(a);
      }, a.F);
    });
  },
      Sb = function (a) {
    var b = 262144 * a.j,
        c = new Jb(a.m, a.f.a),
        d = a.v;
    U(a, function (e) {
      var f;

      try {
        f = Nb(a.l, a.c, d, a.f, b, a.s, c);
      } catch (g) {
        a.g = g;
        S(a, "error");
        return;
      }

      a.a = I(a.c, f, e);
      a.a.a().then(function (b) {
        33554432 > 262144 * a.j && (a.j *= 2);
        a.a = null;
        Ub(a, b.a);
        b.c ? (a.h = b.f, S(a, "success")) : R(a);
      }, a.F);
    });
  },
      Rb = function (a) {
    U(a, function (b) {
      var c = Fb(a.c, a.l, a.s);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.h = b;
        S(a, "success");
      }, a.P);
    });
  },
      Tb = function (a) {
    U(a, function (b) {
      var c = Ib(a.c, a.l, a.s, a.f, a.h);
      a.a = I(a.c, c, b);
      a.a.a().then(function (b) {
        a.a = null;
        a.h = b;
        Ub(a, a.f.a);
        S(a, "success");
      }, a.F);
    });
  },
      Ub = function (a, b) {
    var c = a.m;
    a.m = b;
    a.m > c && V(a);
  },
      S = function (a, b) {
    if (a.b !== b) switch (b) {
      case "canceling":
        a.b = b;
        null !== a.a && a.a.cancel();
        break;

      case "pausing":
        a.b = b;
        null !== a.a && a.a.cancel();
        break;

      case "running":
        var c = "paused" === a.b;
        a.b = b;
        c && (V(a), Ob(a));
        break;

      case "paused":
        a.b = b;
        V(a);
        break;

      case "canceled":
        a.g = ea();
        a.b = b;
        V(a);
        break;

      case "error":
        a.b = b;
        V(a);
        break;

      case "success":
        a.b = b, V(a);
    }
  },
      R = function (a) {
    switch (a.b) {
      case "pausing":
        S(a, "paused");
        break;

      case "canceling":
        S(a, "canceled");
        break;

      case "running":
        Ob(a);
    }
  };

  T.prototype.w = function () {
    return new E(this.m, this.f.a, na(this.b), this.h, this, this.L);
  };

  T.prototype.M = function (a, b, c, d) {
    function e(a) {
      try {
        g(a);
        return;
      } catch (z) {}

      try {
        if (h(a), !(n(a.next) || n(a.error) || n(a.complete))) throw "";
      } catch (z) {
        throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
      }
    }

    function f(a) {
      return function (b, c, d) {
        null !== a && L("on", a, arguments);
        var e = new ya(b, c, d);
        Vb(m, e);
        return function () {
          var a = m.B,
              b = H(a, e);
          0 <= b && (F(null != a.length), Array.prototype.splice.call(a, b, 1));
        };
      };
    }

    var g = O().a,
        h = Cb(null, !0).a;
    L("on", [N(function () {
      if ("state_changed" !== a) throw "Expected one of the event types: [state_changed].";
    }), Cb(e, !0), O(), O()], arguments);
    var m = this,
        B = [Cb(function (a) {
      if (null === a) throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
      e(a);
    }), O(), O()];
    return n(b) || n(c) || n(d) ? f(null)(b, c, d) : f(B);
  };

  T.prototype.then = function (a, b) {
    return this.C.then(a, b);
  };

  var Vb = function (a, b) {
    a.B.push(b);
    Wb(a, b);
  },
      V = function (a) {
    Xb(a);
    var b = Sa(a.B);
    Pa(b, function (b) {
      Wb(a, b);
    });
  },
      Xb = function (a) {
    if (null !== a.o) {
      var b = !0;

      switch (na(a.b)) {
        case "success":
          x(a.o.bind(null, a.w()))();
          break;

        case "canceled":
        case "error":
          x(a.A.bind(null, a.g))();
          break;

        default:
          b = !1;
      }

      b && (a.o = null, a.A = null);
    }
  },
      Wb = function (a, b) {
    switch (na(a.b)) {
      case "running":
      case "paused":
        null !== b.c && x(b.c.bind(b, a.w()))();
        break;

      case "success":
        null !== b.b && x(b.b.bind(b))();
        break;

      case "canceled":
      case "error":
        null !== b.a && x(b.a.bind(b, a.g))();
        break;

      default:
        null !== b.a && x(b.a.bind(b, a.g))();
    }
  };

  T.prototype.O = function () {
    L("resume", [], arguments);
    var a = "paused" === this.b || "pausing" === this.b;
    a && S(this, "running");
    return a;
  };

  T.prototype.N = function () {
    L("pause", [], arguments);
    var a = "running" === this.b;
    a && S(this, "pausing");
    return a;
  };

  T.prototype.cancel = function () {
    L("cancel", [], arguments);
    var a = "running" === this.b || "pausing" === this.b;
    a && S(this, "canceling");
    return a;
  };

  var W = function (a, b) {
    this.b = a;
    if (b) this.a = b instanceof y ? b : xa(b);else if (a = a.bucket(), null !== a) this.a = new y(a, "");else throw new r("no-default-bucket", "No default bucket found. Did you set the 'storageBucket' property when initializing the app?");
  };

  W.prototype.toString = function () {
    L("toString", [], arguments);
    return "gs://" + this.a.bucket + "/" + this.a.path;
  };

  var Yb = function (a, b) {
    return new W(a, b);
  };

  k = W.prototype;

  k.H = function (a) {
    L("child", [N()], arguments);
    var b = Ta(this.a.path, a);
    return Yb(this.b, new y(this.a.bucket, b));
  };

  k.ka = function () {
    var a;
    a = this.a.path;
    if (0 == a.length) a = null;else {
      var b = a.lastIndexOf("/");
      a = -1 === b ? "" : a.slice(0, b);
    }
    return null === a ? null : Yb(this.b, new y(this.a.bucket, a));
  };

  k.ma = function () {
    return Yb(this.b, new y(this.a.bucket, ""));
  };

  k.U = function () {
    return this.a.bucket;
  };

  k.fa = function () {
    return this.a.path;
  };

  k.ja = function () {
    return Ua(this.a.path);
  };

  k.oa = function () {
    return this.b.l;
  };

  k.Z = function (a, b) {
    L("put", [Ab(), new M(yb, !0)], arguments);
    X(this, "put");
    return new T(this, this.b, this.a, vb(), new J(a), b);
  };

  k.$ = function (a, b, c) {
    L("putString", [N(), N(za, !0), new M(yb, !0)], arguments);
    X(this, "putString");
    var d = Ea(w(b) ? b : "raw", a),
        e = c ? ka(c) : {};
    !w(e.contentType) && w(d.a) && (e.contentType = d.a);
    return new T(this, this.b, this.a, vb(), new J(d.b, !0), e);
  };

  k.X = function () {
    L("delete", [], arguments);
    X(this, "delete");
    var a = this;
    return pb(this.b).then(function (b) {
      var c = Gb(a.b, a.a);
      return I(a.b, c, b).a();
    });
  };

  k.I = function () {
    L("getMetadata", [], arguments);
    X(this, "getMetadata");
    var a = this;
    return pb(this.b).then(function (b) {
      var c = Fb(a.b, a.a, vb());
      return I(a.b, c, b).a();
    });
  };

  k.aa = function (a) {
    L("updateMetadata", [new M(yb, void 0)], arguments);
    X(this, "updateMetadata");
    var b = this;
    return pb(this.b).then(function (c) {
      var d = b.b,
          e = b.a,
          f = a,
          g = vb(),
          h = wa(e),
          h = q + "/v0" + h,
          f = xb(f, g),
          d = new u(h, "PATCH", Db(d, g), d.c);
      d.headers = {
        "Content-Type": "application/json; charset=utf-8"
      };
      d.body = f;
      d.a = Eb(e);
      return I(b.b, d, c).a();
    });
  };

  k.Y = function () {
    L("getDownloadURL", [], arguments);
    X(this, "getDownloadURL");
    return this.I().then(function (a) {
      a = a.downloadURLs[0];
      if (w(a)) return a;
      throw new r("no-download-url", "The given file does not have any download URLs.");
    });
  };

  var X = function (a, b) {
    if ("" === a.a.path) throw new r("invalid-root-operation", "The operation '" + b + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
  };

  var Y = function (a, b) {
    this.a = new ob(a, function (a, b) {
      return new W(a, b);
    }, Ya, this, w(b) ? b : new Oa());
    this.b = a;
    this.c = new Zb(this);
  };

  k = Y.prototype;

  k.ba = function (a) {
    L("ref", [N(function (a) {
      if (/^[A-Za-z]+:\/\//.test(a)) throw "Expected child path but got a URL, use refFromURL instead.";
    }, !0)], arguments);
    var b = new W(this.a);
    return n(a) ? b.H(a) : b;
  };

  k.ca = function (a) {
    L("refFromURL", [N(function (a) {
      if (!/^[A-Za-z]+:\/\//.test(a)) throw "Expected full URL but got a child path, use ref instead.";

      try {
        xa(a);
      } catch (c) {
        throw "Expected valid full URL but got an invalid one.";
      }
    }, !1)], arguments);
    return new W(this.a, a);
  };

  k.ha = function () {
    return this.a.b;
  };

  k.ea = function (a) {
    L("setMaxUploadRetryTime", [Bb()], arguments);
    this.a.b = a;
  };

  k.ga = function () {
    return this.a.c;
  };

  k.da = function (a) {
    L("setMaxOperationRetryTime", [Bb()], arguments);
    this.a.c = a;
  };

  k.T = function () {
    return this.b;
  };

  k.R = function () {
    return this.c;
  };

  var Zb = function (a) {
    this.a = a;
  };

  Zb.prototype.b = function () {
    var a = this.a.a;
    a.f = !0;
    a.a = null;
    bb(a.h);
  };

  var Z = function (a, b, c) {
    Object.defineProperty(a, b, {
      get: c
    });
  };

  W.prototype.toString = W.prototype.toString;
  W.prototype.child = W.prototype.H;
  W.prototype.put = W.prototype.Z;
  W.prototype.putString = W.prototype.$;
  W.prototype["delete"] = W.prototype.X;
  W.prototype.getMetadata = W.prototype.I;
  W.prototype.updateMetadata = W.prototype.aa;
  W.prototype.getDownloadURL = W.prototype.Y;
  Z(W.prototype, "parent", W.prototype.ka);
  Z(W.prototype, "root", W.prototype.ma);
  Z(W.prototype, "bucket", W.prototype.U);
  Z(W.prototype, "fullPath", W.prototype.fa);
  Z(W.prototype, "name", W.prototype.ja);
  Z(W.prototype, "storage", W.prototype.oa);
  Y.prototype.ref = Y.prototype.ba;
  Y.prototype.refFromURL = Y.prototype.ca;
  Z(Y.prototype, "maxOperationRetryTime", Y.prototype.ga);
  Y.prototype.setMaxOperationRetryTime = Y.prototype.da;
  Z(Y.prototype, "maxUploadRetryTime", Y.prototype.ha);
  Y.prototype.setMaxUploadRetryTime = Y.prototype.ea;
  Z(Y.prototype, "app", Y.prototype.T);
  Z(Y.prototype, "INTERNAL", Y.prototype.R);
  Zb.prototype["delete"] = Zb.prototype.b;

  Y.prototype.capi_ = function (a) {
    q = a;
  };

  T.prototype.on = T.prototype.M;
  T.prototype.resume = T.prototype.O;
  T.prototype.pause = T.prototype.N;
  T.prototype.cancel = T.prototype.cancel;
  Z(T.prototype, "snapshot", T.prototype.w);
  Z(E.prototype, "bytesTransferred", E.prototype.V);
  Z(E.prototype, "totalBytes", E.prototype.qa);
  Z(E.prototype, "state", E.prototype.na);
  Z(E.prototype, "metadata", E.prototype.ia);
  Z(E.prototype, "downloadURL", E.prototype.W);
  Z(E.prototype, "task", E.prototype.pa);
  Z(E.prototype, "ref", E.prototype.la);
  ma.STATE_CHANGED = "state_changed";
  v.RUNNING = "running";
  v.PAUSED = "paused";
  v.SUCCESS = "success";
  v.CANCELED = "canceled";
  v.ERROR = "error";
  A.RAW = "raw";
  A.BASE64 = "base64";
  A.BASE64URL = "base64url";
  A.DATA_URL = "data_url";

  (function () {
    function a(a) {
      return new Y(a);
    }

    var b = {
      TaskState: v,
      TaskEvent: ma,
      StringFormat: A,
      Storage: Y,
      Reference: W
    };
    if ("undefined" !== typeof firebase) firebase.INTERNAL.registerService("storage", a, b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");
  })();
})();