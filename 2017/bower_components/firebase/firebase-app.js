/*! @license Firebase v3.6.1
    Build: 3.6.1-rc.3
    Terms: https://firebase.google.com/terms/ */
var firebase = null;

(function () {
  var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  },
      h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
      l = function () {
    l = function () {};

    h.Symbol || (h.Symbol = ba);
  },
      ca = 0,
      ba = function (a) {
    return "jscomp_symbol_" + (a || "") + ca++;
  },
      n = function () {
    l();
    var a = h.Symbol.iterator;
    a || (a = h.Symbol.iterator = h.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return m(this);
      }
    });

    n = function () {};
  },
      m = function (a) {
    var b = 0;
    return da(function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      };
    });
  },
      da = function (a) {
    n();
    a = {
      next: a
    };

    a[h.Symbol.iterator] = function () {
      return this;
    };

    return a;
  },
      q = this,
      r = function () {},
      t = function (a) {
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
      v = function (a) {
    return "function" == t(a);
  },
      ea = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  },
      fa = function (a, b, c) {
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
      w = function (a, b, c) {
    w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
    return w.apply(null, arguments);
  },
      x = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  },
      y = function (a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.ba = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.aa = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];

      return b.prototype[c].apply(a, d);
    };
  };

  var z;
  z = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;

  function __extends(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);

    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
  }

  function __decorate(a, b, c, d) {
    var e = arguments.length,
        f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
        g;
    g = z.Reflect;
    if ("object" === typeof g && "function" === typeof g.decorate) f = g.decorate(a, b, c, d);else for (var k = a.length - 1; 0 <= k; k--) if (g = a[k]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
    return 3 < e && f && Object.defineProperty(b, c, f), f;
  }

  function __metadata(a, b) {
    var c = z.Reflect;
    if ("object" === typeof c && "function" === typeof c.metadata) return c.metadata(a, b);
  }

  var __param = function (a, b) {
    return function (c, d) {
      b(c, d, a);
    };
  },
      __awaiter = function (a, b, c, d) {
    return new (c || (c = Promise))(function (e, f) {
      function g(a) {
        try {
          p(d.next(a));
        } catch (u) {
          f(u);
        }
      }

      function k(a) {
        try {
          p(d.throw(a));
        } catch (u) {
          f(u);
        }
      }

      function p(a) {
        a.done ? e(a.value) : new c(function (b) {
          b(a.value);
        }).then(g, k);
      }

      p((d = d.apply(a, b)).next());
    });
  };

  "undefined" !== typeof z.M && z.M || (z.__extends = __extends, z.__decorate = __decorate, z.__metadata = __metadata, z.__param = __param, z.__awaiter = __awaiter);

  var A = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, A);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };

  y(A, Error);
  A.prototype.name = "CustomError";

  var ga = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();

    return d + c.join("%s");
  };

  var B = function (a, b) {
    b.unshift(a);
    A.call(this, ga.apply(null, b));
    b.shift();
  };

  y(B, A);
  B.prototype.name = "AssertionError";

  var ha = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c) var e = e + (": " + c),
        f = d;else a && (e += ": " + a, f = b);
    throw new B("" + e, f || []);
  },
      C = function (a, b, c) {
    a || ha("", null, b, Array.prototype.slice.call(arguments, 2));
  },
      D = function (a, b, c) {
    v(a) || ha("Expected function but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2));
  };

  var E = function (a, b, c) {
    this.T = c;
    this.N = a;
    this.U = b;
    this.s = 0;
    this.o = null;
  };

  E.prototype.get = function () {
    var a;
    0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.N();
    return a;
  };

  E.prototype.put = function (a) {
    this.U(a);
    this.s < this.T && (this.s++, a.next = this.o, this.o = a);
  };

  var F;

  a: {
    var ia = q.navigator;

    if (ia) {
      var ja = ia.userAgent;

      if (ja) {
        F = ja;
        break a;
      }
    }

    F = "";
  }

  ;

  var ka = function (a) {
    q.setTimeout(function () {
      throw a;
    }, 0);
  },
      G,
      la = function () {
    var a = q.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == F.indexOf("Presto") && (a = function () {
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
          a = w(function (a) {
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

    if ("undefined" !== typeof a && -1 == F.indexOf("Trident") && -1 == F.indexOf("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var a = c.G;
          c.G = null;
          a();
        }
      };

      return function (a) {
        d.next = {
          G: a
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
      q.setTimeout(a, 0);
    };
  };

  var H = function () {
    this.v = this.f = null;
  },
      ma = new E(function () {
    return new I();
  }, function (a) {
    a.reset();
  }, 100);

  H.prototype.add = function (a, b) {
    var c = ma.get();
    c.set(a, b);
    this.v ? this.v.next = c : (C(!this.f), this.f = c);
    this.v = c;
  };

  H.prototype.remove = function () {
    var a = null;
    this.f && (a = this.f, this.f = this.f.next, this.f || (this.v = null), a.next = null);
    return a;
  };

  var I = function () {
    this.next = this.scope = this.B = null;
  };

  I.prototype.set = function (a, b) {
    this.B = a;
    this.scope = b;
    this.next = null;
  };

  I.prototype.reset = function () {
    this.next = this.scope = this.B = null;
  };

  var M = function (a, b) {
    J || na();
    L || (J(), L = !0);
    oa.add(a, b);
  },
      J,
      na = function () {
    var a = q.Promise;

    if (-1 != String(a).indexOf("[native code]")) {
      var b = a.resolve(void 0);

      J = function () {
        b.then(pa);
      };
    } else J = function () {
      var a = pa;
      !v(q.setImmediate) || q.Window && q.Window.prototype && -1 == F.indexOf("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (G || (G = la()), G(a)) : q.setImmediate(a);
    };
  },
      L = !1,
      oa = new H(),
      pa = function () {
    for (var a; a = oa.remove();) {
      try {
        a.B.call(a.scope);
      } catch (b) {
        ka(b);
      }

      ma.put(a);
    }

    L = !1;
  };

  var O = function (a, b) {
    this.b = 0;
    this.L = void 0;
    this.j = this.g = this.u = null;
    this.m = this.A = !1;
    if (a != r) try {
      var c = this;
      a.call(b, function (a) {
        N(c, 2, a);
      }, function (a) {
        try {
          if (a instanceof Error) throw a;
          throw Error("Promise rejected.");
        } catch (e) {}

        N(c, 3, a);
      });
    } catch (d) {
      N(this, 3, d);
    }
  },
      qa = function () {
    this.next = this.context = this.h = this.c = this.child = null;
    this.w = !1;
  };

  qa.prototype.reset = function () {
    this.context = this.h = this.c = this.child = null;
    this.w = !1;
  };

  var ra = new E(function () {
    return new qa();
  }, function (a) {
    a.reset();
  }, 100),
      sa = function (a, b, c) {
    var d = ra.get();
    d.c = a;
    d.h = b;
    d.context = c;
    return d;
  },
      ua = function (a, b, c) {
    ta(a, b, c, null) || M(x(b, a));
  };

  O.prototype.then = function (a, b, c) {
    null != a && D(a, "opt_onFulfilled should be a function.");
    null != b && D(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return va(this, v(a) ? a : null, v(b) ? b : null, c);
  };

  O.prototype.then = O.prototype.then;
  O.prototype.$goog_Thenable = !0;

  O.prototype.X = function (a, b) {
    return va(this, null, a, b);
  };

  var xa = function (a, b) {
    a.g || 2 != a.b && 3 != a.b || wa(a);
    C(null != b.c);
    a.j ? a.j.next = b : a.g = b;
    a.j = b;
  },
      va = function (a, b, c, d) {
    var e = sa(null, null, null);
    e.child = new O(function (a, g) {
      e.c = b ? function (c) {
        try {
          var e = b.call(d, c);
          a(e);
        } catch (K) {
          g(K);
        }
      } : a;
      e.h = c ? function (b) {
        try {
          var e = c.call(d, b);
          a(e);
        } catch (K) {
          g(K);
        }
      } : g;
    });
    e.child.u = a;
    xa(a, e);
    return e.child;
  };

  O.prototype.Y = function (a) {
    C(1 == this.b);
    this.b = 0;
    N(this, 2, a);
  };

  O.prototype.Z = function (a) {
    C(1 == this.b);
    this.b = 0;
    N(this, 3, a);
  };

  var N = function (a, b, c) {
    0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, ta(c, a.Y, a.Z, a) || (a.L = c, a.b = b, a.u = null, wa(a), 3 != b || ya(a, c)));
  },
      ta = function (a, b, c, d) {
    if (a instanceof O) return null != b && D(b, "opt_onFulfilled should be a function."), null != c && D(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), xa(a, sa(b || r, c || null, d)), !0;
    var e;
    if (a) try {
      e = !!a.$goog_Thenable;
    } catch (g) {
      e = !1;
    } else e = !1;
    if (e) return a.then(b, c, d), !0;
    e = typeof a;
    if ("object" == e && null != a || "function" == e) try {
      var f = a.then;
      if (v(f)) return za(a, f, b, c, d), !0;
    } catch (g) {
      return c.call(d, g), !0;
    }
    return !1;
  },
      za = function (a, b, c, d, e) {
    var f = !1,
        g = function (a) {
      f || (f = !0, c.call(e, a));
    },
        k = function (a) {
      f || (f = !0, d.call(e, a));
    };

    try {
      b.call(a, g, k);
    } catch (p) {
      k(p);
    }
  },
      wa = function (a) {
    a.A || (a.A = !0, M(a.P, a));
  },
      Aa = function (a) {
    var b = null;
    a.g && (b = a.g, a.g = b.next, b.next = null);
    a.g || (a.j = null);
    null != b && C(null != b.c);
    return b;
  };

  O.prototype.P = function () {
    for (var a; a = Aa(this);) {
      var b = this.b,
          c = this.L;

      if (3 == b && a.h && !a.w) {
        var d;

        for (d = this; d && d.m; d = d.u) d.m = !1;
      }

      if (a.child) a.child.u = null, Ba(a, b, c);else try {
        a.w ? a.c.call(a.context) : Ba(a, b, c);
      } catch (e) {
        Ca.call(null, e);
      }
      ra.put(a);
    }

    this.A = !1;
  };

  var Ba = function (a, b, c) {
    2 == b ? a.c.call(a.context, c) : a.h && a.h.call(a.context, c);
  },
      ya = function (a, b) {
    a.m = !0;
    M(function () {
      a.m && Ca.call(null, b);
    });
  },
      Ca = ka;

  function P(a, b) {
    if (!(b instanceof Object)) return b;

    switch (b.constructor) {
      case Date:
        return new Date(b.getTime());

      case Object:
        void 0 === a && (a = {});
        break;

      case Array:
        a = [];
        break;

      default:
        return b;
    }

    for (var c in b) b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));

    return a;
  }

  ;

  O.all = function (a) {
    return new O(function (b, c) {
      var d = a.length,
          e = [];
      if (d) for (var f = function (a, c) {
        d--;
        e[a] = c;
        0 == d && b(e);
      }, g = function (a) {
        c(a);
      }, k = 0, p; k < a.length; k++) p = a[k], ua(p, x(f, k), g);else b(e);
    });
  };

  O.resolve = function (a) {
    if (a instanceof O) return a;
    var b = new O(r);
    N(b, 2, a);
    return b;
  };

  O.reject = function (a) {
    return new O(function (b, c) {
      c(a);
    });
  };

  O.prototype["catch"] = O.prototype.X;
  var Q = O;
  "undefined" !== typeof Promise && (Q = Promise);
  var Da = Q;

  function Ea(a, b) {
    a = new R(a, b);
    return a.subscribe.bind(a);
  }

  var R = function (a, b) {
    var c = this;
    this.a = [];
    this.K = 0;
    this.task = Da.resolve();
    this.l = !1;
    this.D = b;
    this.task.then(function () {
      a(c);
    }).catch(function (a) {
      c.error(a);
    });
  };

  R.prototype.next = function (a) {
    S(this, function (b) {
      b.next(a);
    });
  };

  R.prototype.error = function (a) {
    S(this, function (b) {
      b.error(a);
    });
    this.close(a);
  };

  R.prototype.complete = function () {
    S(this, function (a) {
      a.complete();
    });
    this.close();
  };

  R.prototype.subscribe = function (a, b, c) {
    var d = this,
        e;
    if (void 0 === a && void 0 === b && void 0 === c) throw Error("Missing Observer.");
    e = Fa(a) ? a : {
      next: a,
      error: b,
      complete: c
    };
    void 0 === e.next && (e.next = T);
    void 0 === e.error && (e.error = T);
    void 0 === e.complete && (e.complete = T);
    a = this.$.bind(this, this.a.length);
    this.l && this.task.then(function () {
      try {
        d.H ? e.error(d.H) : e.complete();
      } catch (f) {}
    });
    this.a.push(e);
    return a;
  };

  R.prototype.$ = function (a) {
    void 0 !== this.a && void 0 !== this.a[a] && (delete this.a[a], --this.K, 0 === this.K && void 0 !== this.D && this.D(this));
  };

  var S = function (a, b) {
    if (!a.l) for (var c = 0; c < a.a.length; c++) Ga(a, c, b);
  },
      Ga = function (a, b, c) {
    a.task.then(function () {
      if (void 0 !== a.a && void 0 !== a.a[b]) try {
        c(a.a[b]);
      } catch (d) {
        "undefined" !== typeof console && console.error && console.error(d);
      }
    });
  };

  R.prototype.close = function (a) {
    var b = this;
    this.l || (this.l = !0, void 0 !== a && (this.H = a), this.task.then(function () {
      b.a = void 0;
      b.D = void 0;
    }));
  };

  function Fa(a) {
    if ("object" !== typeof a || null === a) return !1;
    var b;
    b = ["next", "error", "complete"];
    n();
    var c = b[Symbol.iterator];
    b = c ? c.call(b) : m(b);

    for (c = b.next(); !c.done; c = b.next()) if (c = c.value, c in a && "function" === typeof a[c]) return !0;

    return !1;
  }

  function T() {}

  ;

  var Ha = Error.captureStackTrace,
      V = function (a, b) {
    this.code = a;
    this.message = b;
    if (Ha) Ha(this, U.prototype.create);else {
      var c = Error.apply(this, arguments);
      this.name = "FirebaseError";
      Object.defineProperty(this, "stack", {
        get: function () {
          return c.stack;
        }
      });
    }
  };

  V.prototype = Object.create(Error.prototype);
  V.prototype.constructor = V;
  V.prototype.name = "FirebaseError";

  var U = function (a, b, c) {
    this.V = a;
    this.W = b;
    this.O = c;
    this.pattern = /\{\$([^}]+)}/g;
  };

  U.prototype.create = function (a, b) {
    void 0 === b && (b = {});
    var c = this.O[a];
    a = this.V + "/" + a;
    var c = void 0 === c ? "Error" : c.replace(this.pattern, function (a, c) {
      a = b[c];
      return void 0 !== a ? a.toString() : "<" + c + "?>";
    }),
        c = this.W + ": " + c + " (" + a + ").",
        c = new V(a, c),
        d;

    for (d in b) b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);

    return c;
  };

  var W = Q,
      X = function (a, b, c) {
    var d = this;
    this.I = c;
    this.J = !1;
    this.i = {};
    this.C = b;
    this.F = P(void 0, a);
    a = "serviceAccount" in this.F;
    ("credential" in this.F || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");
    Object.keys(c.INTERNAL.factories).forEach(function (a) {
      var b = c.INTERNAL.useAsService(d, a);
      null !== b && (b = d.S.bind(d, b), d[a] = b);
    });
  };

  X.prototype.delete = function () {
    var a = this;
    return new W(function (b) {
      Y(a);
      b();
    }).then(function () {
      a.I.INTERNAL.removeApp(a.C);
      return W.all(Object.keys(a.i).map(function (b) {
        return a.i[b].INTERNAL.delete();
      }));
    }).then(function () {
      a.J = !0;
      a.i = {};
    });
  };

  X.prototype.S = function (a) {
    Y(this);
    void 0 === this.i[a] && (this.i[a] = this.I.INTERNAL.factories[a](this, this.R.bind(this)));
    return this.i[a];
  };

  X.prototype.R = function (a) {
    P(this, a);
  };

  var Y = function (a) {
    a.J && Z(Ia("deleted", {
      name: a.C
    }));
  };

  h.Object.defineProperties(X.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.C;
      }
    },
    options: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.F;
      }
    }
  });
  X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");

  function Ja() {
    function a(a) {
      a = a || "[DEFAULT]";
      var b = d[a];
      void 0 === b && Z("noApp", {
        name: a
      });
      return b;
    }

    function b(a, b) {
      Object.keys(e).forEach(function (d) {
        d = c(a, d);
        if (null !== d && f[d]) f[d](b, a);
      });
    }

    function c(a, b) {
      if ("serverAuth" === b) return null;
      var c = b;
      a = a.options;
      "auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("serverAuthMissing"));
      return c;
    }

    var d = {},
        e = {},
        f = {},
        g = {
      __esModule: !0,
      initializeApp: function (a, c) {
        void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", {
          name: c + ""
        });
        void 0 !== d[c] && Z("dupApp", {
          name: c
        });
        a = new X(a, c, g);
        d[c] = a;
        b(a, "create");
        void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || P(a, {
          INTERNAL: {
            getToken: function () {
              return W.resolve(null);
            },
            addAuthTokenListener: function () {},
            removeAuthTokenListener: function () {}
          }
        });
        return a;
      },
      app: a,
      apps: null,
      Promise: W,
      SDK_VERSION: "0.0.0",
      INTERNAL: {
        registerService: function (b, c, d, u) {
          e[b] && Z("dupService", {
            name: b
          });
          e[b] = c;
          u && (f[b] = u);

          c = function (c) {
            void 0 === c && (c = a());
            return c[b]();
          };

          void 0 !== d && P(c, d);
          return g[b] = c;
        },
        createFirebaseNamespace: Ja,
        extendNamespace: function (a) {
          P(g, a);
        },
        createSubscribe: Ea,
        ErrorFactory: U,
        removeApp: function (a) {
          b(d[a], "delete");
          delete d[a];
        },
        factories: e,
        useAsService: c,
        Promise: O,
        deepExtend: P
      }
    };
    g["default"] = g;
    Object.defineProperty(g, "apps", {
      get: function () {
        return Object.keys(d).map(function (a) {
          return d[a];
        });
      }
    });
    a.App = X;
    return g;
  }

  function Z(a, b) {
    throw Error(Ia(a, b));
  }

  function Ia(a, b) {
    b = b || {};
    b = {
      noApp: "No Firebase App '" + b.name + "' has been created - call Firebase App.initializeApp().",
      "bad-app-name": "Illegal App name: '" + b.name + "'.",
      dupApp: "Firebase App named '" + b.name + "' already exists.",
      deleted: "Firebase App named '" + b.name + "' already deleted.",
      dupService: "Firebase Service named '" + b.name + "' already registered.",
      serverAuthMissing: "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."
    }[a];
    return void 0 === b ? "Application Error: (" + a + ")" : b;
  }

  ;
  "undefined" !== typeof firebase && (firebase = Ja());
})();

firebase.SDK_VERSION = "3.6.1";