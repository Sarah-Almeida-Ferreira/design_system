import j, { useState as yr } from "react";
var te = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function hr() {
  if (Se) return $;
  Se = 1;
  var n = j, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(_, d, x) {
    var h, P = {}, T = null, Y = null;
    x !== void 0 && (T = "" + x), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (h in d) u.call(d, h) && !E.hasOwnProperty(h) && (P[h] = d[h]);
    if (_ && _.defaultProps) for (h in d = _.defaultProps, d) P[h] === void 0 && (P[h] = d[h]);
    return { $$typeof: a, type: _, key: T, ref: Y, props: P, _owner: b.current };
  }
  return $.Fragment = o, $.jsx = O, $.jsxs = O, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Er() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var n = j, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ie = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var i = k.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var $e = !1, Le = !1, Ye = !1, Me = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === E || Ve || e === b || e === x || e === h || Me || e === Y || $e || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === P || e.$$typeof === O || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case E:
          return "Profiler";
        case b:
          return "StrictMode";
        case x:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ie(r) + ".Consumer";
          case O:
            var t = e;
            return ie(t._context) + ".Provider";
          case d:
            return Ue(e, e.render, "ForwardRef");
          case P:
            var i = e.displayName || null;
            return i !== null ? i : w(e.type) || "Memo";
          case T: {
            var c = e, f = c._payload, l = c._init;
            try {
              return w(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, I = 0, oe, ue, se, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Be() {
      {
        if (I === 0) {
          oe = console.log, ue = console.info, se = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Je() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: ue
            }),
            warn: S({}, e, {
              value: se
            }),
            error: S({}, e, {
              value: le
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: de
            })
          });
        }
        I < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = k.ReactCurrentDispatcher, q;
    function M(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            q = i && i[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, V;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ke();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      G = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, Be();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (y) {
              i = y;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (y) {
              i = y;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            i = y;
          }
          e();
        }
      } catch (y) {
        if (y && i && typeof y.stack == "string") {
          for (var s = y.stack.split(`
`), m = i.stack.split(`
`), v = s.length - 1, p = m.length - 1; v >= 1 && p >= 0 && s[v] !== m[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (s[v] !== m[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || s[v] !== m[p]) {
                    var R = `
` + s[v].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, R), R;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        G = !1, K.current = f, Je(), Error.prepareStackTrace = c;
      }
      var A = e ? e.displayName || e.name : "", C = A ? M(A) : "";
      return typeof e == "function" && V.set(e, C), C;
    }
    function qe(e, r, t) {
      return pe(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ge(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case x:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return qe(e.render);
          case P:
            return z(e.type, r, t);
          case T: {
            var i = e, c = i._payload, f = i._init;
            try {
              return z(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ge = {}, be = k.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Xe(e, r, t, i, c) {
      {
        var f = Function.call.bind(W);
        for (var l in e)
          if (f(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var m = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              s = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (U(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof s), U(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, U(c), g("Failed %s type: %s", t, s.message), U(null));
          }
      }
    }
    var He = Array.isArray;
    function X(e) {
      return He(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ye(e) {
      if (Qe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), me(e);
    }
    var N = k.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, Ee, H;
    H = {};
    function rr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = w(N.current.type);
        H[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(N.current.type), e.ref), H[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          he || (he = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, i, c, f, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ur(e, r, t, i, c) {
      {
        var f, l = {}, s = null, m = null;
        t !== void 0 && (ye(t), s = "" + t), tr(r) && (ye(r.key), s = "" + r.key), rr(r) && (m = r.ref, nr(r, c));
        for (f in r)
          W.call(r, f) && !er.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            l[f] === void 0 && (l[f] = v[f]);
        }
        if (s || m) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ar(l, p), m && ir(l, p);
        }
        return or(e, s, m, c, i, N.current, l);
      }
    }
    var Z = k.ReactCurrentOwner, _e = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (Z.current) {
          var e = w(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Oe = {};
    function lr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var i = "";
        e && e._owner && e._owner !== Z.current && (i = " It was passed a child from " + w(e._owner.type) + "."), D(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), D(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            ee(i) && we(i, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = We(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              ee(l.value) && we(l.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === P))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = w(r);
          Xe(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = w(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            D(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function Te(e, r, t, i, c, f) {
      {
        var l = ze(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = sr();
          m ? s += m : s += Re();
          var v;
          e === null ? v = "null" : X(e) ? v = "array" : e !== void 0 && e.$$typeof === a ? (v = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var p = ur(e, r, t, c, f);
        if (p == null)
          return p;
        if (l) {
          var R = r.children;
          if (R !== void 0)
            if (i)
              if (X(R)) {
                for (var A = 0; A < R.length; A++)
                  Pe(R[A], e);
                Object.freeze && Object.freeze(R);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(R, e);
        }
        if (W.call(r, "key")) {
          var C = w(e), y = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), re = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[C + re]) {
            var br = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, C, br, C), je[C + re] = !0;
          }
        }
        return e === u ? fr(p) : cr(p), p;
      }
    }
    function dr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var pr = vr, gr = dr;
    L.Fragment = u, L.jsx = pr, L.jsxs = gr;
  }()), L;
}
process.env.NODE_ENV === "production" ? te.exports = hr() : te.exports = Er();
var F = te.exports, De = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, xe = j.createContext && /* @__PURE__ */ j.createContext(De), _r = ["attr", "size", "title"];
function Rr(n, a) {
  if (n == null) return {};
  var o = Or(n, a), u, b;
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(n);
    for (b = 0; b < E.length; b++)
      u = E[b], !(a.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(n, u) && (o[u] = n[u]);
  }
  return o;
}
function Or(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n)
    if (Object.prototype.hasOwnProperty.call(n, u)) {
      if (a.indexOf(u) >= 0) continue;
      o[u] = n[u];
    }
  return o;
}
function B() {
  return B = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u]);
    }
    return n;
  }, B.apply(this, arguments);
}
function ke(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    a && (u = u.filter(function(b) {
      return Object.getOwnPropertyDescriptor(n, b).enumerable;
    })), o.push.apply(o, u);
  }
  return o;
}
function J(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ke(Object(o), !0).forEach(function(u) {
      wr(n, u, o[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : ke(Object(o)).forEach(function(u) {
      Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(o, u));
    });
  }
  return n;
}
function wr(n, a, o) {
  return a = Pr(a), a in n ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = o, n;
}
function Pr(n) {
  var a = jr(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
function jr(n, a) {
  if (typeof n != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(n, a || "default");
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function Ae(n) {
  return n && n.map((a, o) => /* @__PURE__ */ j.createElement(a.tag, J({
    key: o
  }, a.attr), Ae(a.child)));
}
function Fe(n) {
  return (a) => /* @__PURE__ */ j.createElement(Tr, B({
    attr: J({}, n.attr)
  }, a), Ae(n.child));
}
function Tr(n) {
  var a = (o) => {
    var {
      attr: u,
      size: b,
      title: E
    } = n, O = Rr(n, _r), _ = b || o.size || "1em", d;
    return o.className && (d = o.className), n.className && (d = (d ? d + " " : "") + n.className), /* @__PURE__ */ j.createElement("svg", B({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, u, O, {
      className: d,
      style: J(J({
        color: n.color || o.color
      }, o.style), n.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), E && /* @__PURE__ */ j.createElement("title", null, E), n.children);
  };
  return xe !== void 0 ? /* @__PURE__ */ j.createElement(xe.Consumer, null, (o) => a(o)) : a(De);
}
function Sr(n) {
  return Fe({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(n);
}
function Cr(n) {
  return Fe({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(n);
}
const kr = ({ type: n, name: a, placeholder: o, value: u, onChange: b, ...E }) => {
  const [O, _] = yr(!1), d = () => {
    _(!O);
  };
  return /* @__PURE__ */ F.jsx("div", { className: "input-field", children: /* @__PURE__ */ F.jsxs("div", { className: "input-wrapper", children: [
    /* @__PURE__ */ F.jsx(
      "input",
      {
        id: a,
        className: "input",
        type: n === "password" ? O ? "text" : "password" : n,
        name: a,
        placeholder: o,
        value: u,
        onChange: b,
        ...E
      }
    ),
    n === "password" && /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "toggle-password",
        "data-testid": "toggle-password-button",
        onClick: d,
        children: O ? /* @__PURE__ */ F.jsx(Sr, {}) : /* @__PURE__ */ F.jsx(Cr, {})
      }
    )
  ] }) });
};
export {
  kr as Input
};
