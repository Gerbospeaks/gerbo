import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  B as t,
  init_jsx_runtime as n,
  init_npm_react_18_2 as r,
  init_ssg_sandbox_shims as i,
  p as a,
  window as o,
  x as s,
} from "./react.Cd8yx0tA.mjs";
import { motion as c } from "./motion.BvMEYU-E.mjs";
import {
  ComponentPresetsConsumer as l,
  ControlType as u,
  Link as d,
  QueryCache as ee,
  QueryEngine as te,
  addPropertyControls as ne,
  init_framer_MRKGI23E as f,
} from "./framer.DERDik75.mjs";
function p(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function m(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function h(e) {
  throw Error(`Unexpected value: ${e}`);
}
function g(e, t, n, r) {
  m(e >= t, e, `outside lower bound for`, r),
    m(e <= n, e, `outside upper bound for`, r);
}
function _(e) {
  return typeof e == `string`;
}
function v(e) {
  return Number.isFinite(e);
}
function y(e) {
  return e === null;
}
function b(e) {
  if (y(e)) return 0;
  switch (e.type) {
    case u.Array:
      return 1;
    case u.Boolean:
      return 2;
    case u.Color:
      return 3;
    case u.Date:
      return 4;
    case u.Enum:
      return 5;
    case u.File:
      return 6;
    case u.ResponsiveImage:
      return 10;
    case u.Link:
      return 7;
    case u.Number:
      return 8;
    case u.Object:
      return 9;
    case u.RichText:
      return 11;
    case u.String:
      return 12;
    case u.VectorSetItem:
      return 13;
    default:
      h(e);
  }
}
function re(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = C.read(e);
    n.push(t);
  }
  return { type: u.Array, value: n };
}
function ie(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) C.write(e, n);
}
function ae(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = C.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function oe(e) {
  return { type: u.Boolean, value: e.readUint8() !== 0 };
}
function se(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function ce(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function le(e) {
  return { type: u.Color, value: e.readString() };
}
function ue(e, t) {
  e.writeString(t.value);
}
function de(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function fe(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: u.Date, value: n.toISOString() };
}
function pe(e, t) {
  let n = new Date(t.value),
    r = n.getTime();
  e.writeInt64(r);
}
function me(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function he(e) {
  return { type: u.Enum, value: e.readString() };
}
function ge(e, t) {
  e.writeString(t.value);
}
function _e(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ve(e) {
  return { type: u.File, value: e.readString() };
}
function ye(e, t) {
  e.writeString(t.value);
}
function be(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function xe(e) {
  return { type: u.Link, value: e.readJson() };
}
function Se(e, t) {
  e.writeJson(t.value);
}
function Ce(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function we(e) {
  return { type: u.Number, value: e.readFloat64() };
}
function Te(e, t) {
  e.writeFloat64(t.value);
}
function Ee(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function De(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = C.read(e);
  }
  return { type: u.Object, value: n };
}
function Oe(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    e.writeString(t), C.write(e, r);
}
function ke(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = C.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ae(e) {
  return { type: u.ResponsiveImage, value: e.readJson() };
}
function je(e, t) {
  e.writeJson(t.value);
}
function Me(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ne(e) {
  let t = e.readInt8();
  if (t === 0) return { type: u.RichText, value: e.readUint32() };
  if (t === 1) return { type: u.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Pe(e, t) {
  if (v(t.value)) {
    e.writeInt8(0), e.writeUint32(t.value);
    return;
  }
  if (_(t.value)) {
    e.writeInt8(1), e.writeString(t.value);
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  let n = e.value,
    r = t.value;
  if ((v(n) && v(r)) || (_(n) && _(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Ie(e) {
  return { type: u.String, value: e.readString() };
}
function Le(e, t) {
  e.writeString(t.value);
}
function Re(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function ze(e) {
  return { type: u.VectorSetItem, value: e.readUint32() };
}
function Be(e, t) {
  e.writeUint32(t.value);
}
function Ve(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function He(e) {
  let t = Math.floor(Ze * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function x(e, t) {
  let n = Ue(t),
    r = [],
    i = 0;
  for (let e of n) r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from);
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await W(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new $e(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    u.write(e.from, r), (d = n);
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function S(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return r.set(e, 0), r.set(t, e.length), r;
}
function Ue(e) {
  m(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  We,
  Ge,
  F,
  I,
  Ke,
  qe,
  Je,
  L,
  R,
  z,
  B,
  V,
  Ye,
  H,
  Xe,
  U,
  Ze,
  Qe,
  W,
  $e,
  G,
  K,
  et,
  tt,
  nt = e(() => {
    i(),
      f(),
      (w = Object.create),
      (T = Object.defineProperty),
      (E = Object.getOwnPropertyDescriptor),
      (D = Object.getOwnPropertyNames),
      (O = Object.getPrototypeOf),
      (k = Object.prototype.hasOwnProperty),
      (A = (e, t, n) =>
        t in e
          ? T(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (j = (e, t) =>
        function () {
          return (
            t || (0, e[D(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        }),
      (M = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of D(t))
            k.call(e, i) ||
              i === n ||
              T(e, i, {
                get: () => t[i],
                enumerable: !(r = E(t, i)) || r.enumerable,
              });
        return e;
      }),
      (N = (e, t, n) => (
        (n = e == null ? {} : w(O(e))),
        M(
          !t && e && e.__esModule
            ? n
            : T(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (P = (e, t, n) => A(e, typeof t == `symbol` ? t : t + ``, n)),
      (We = j({
        "../../../node_modules/dataloader/index.js"(e, t) {
          var n,
            r = (function () {
              function e(e, t) {
                if (typeof e != `function`)
                  throw TypeError(
                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                      e +
                      `.`,
                  );
                (this._batchLoadFn = e),
                  (this._maxBatchSize = (function (e) {
                    if (!(!e || !1 !== e.batch)) return 1;
                    var t = e && e.maxBatchSize;
                    if (t === void 0) return 1 / 0;
                    if (typeof t != `number` || t < 1)
                      throw TypeError(
                        `maxBatchSize must be a positive number: ` + t,
                      );
                    return t;
                  })(t)),
                  (this._batchScheduleFn = (function (e) {
                    var t = e && e.batchScheduleFn;
                    if (t === void 0) return i;
                    if (typeof t != `function`)
                      throw TypeError(
                        `batchScheduleFn must be a function: ` + t,
                      );
                    return t;
                  })(t)),
                  (this._cacheKeyFn = (function (e) {
                    var t = e && e.cacheKeyFn;
                    if (t === void 0)
                      return function (e) {
                        return e;
                      };
                    if (typeof t != `function`)
                      throw TypeError(`cacheKeyFn must be a function: ` + t);
                    return t;
                  })(t)),
                  (this._cacheMap = (function (e) {
                    if (!(!e || !1 !== e.cache)) return null;
                    var t = e && e.cacheMap;
                    if (t === void 0) return new Map();
                    if (t !== null) {
                      var n = [`get`, `set`, `delete`, `clear`].filter(
                        function (e) {
                          return t && typeof t[e] != `function`;
                        },
                      );
                      if (n.length !== 0)
                        throw TypeError(
                          `Custom cacheMap missing methods: ` + n.join(`, `),
                        );
                    }
                    return t;
                  })(t)),
                  (this._batch = null),
                  (this.name = t && t.name ? t.name : null);
              }
              var t = e.prototype;
              return (
                (t.load = function (e) {
                  if (e == null)
                    throw TypeError(
                      `The loader.load() function must be called with a value, but got: ` +
                        String(e) +
                        `.`,
                    );
                  var t = (function (e) {
                      var t = e._batch;
                      if (
                        t !== null &&
                        !t.hasDispatched &&
                        t.keys.length < e._maxBatchSize
                      )
                        return t;
                      var n = { hasDispatched: !1, keys: [], callbacks: [] };
                      return (
                        (e._batch = n),
                        e._batchScheduleFn(function () {
                          (function (e, t) {
                            var n;
                            if (((t.hasDispatched = !0), t.keys.length === 0)) {
                              o(t);
                              return;
                            }
                            try {
                              n = e._batchLoadFn(t.keys);
                            } catch (n) {
                              return a(
                                e,
                                t,
                                TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                    String(n) +
                                    `.`,
                                ),
                              );
                            }
                            if (!n || typeof n.then != `function`)
                              return a(
                                e,
                                t,
                                TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                    String(n) +
                                    `.`,
                                ),
                              );
                            n.then(function (e) {
                              if (!s(e))
                                throw TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                    String(e) +
                                    `.`,
                                );
                              if (e.length !== t.keys.length)
                                throw TypeError(
                                  `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                    String(t.keys) +
                                    `

Values:
` +
                                    String(e),
                                );
                              o(t);
                              for (var n = 0; n < t.callbacks.length; n++) {
                                var r = e[n];
                                r instanceof Error
                                  ? t.callbacks[n].reject(r)
                                  : t.callbacks[n].resolve(r);
                              }
                            }).catch(function (n) {
                              a(e, t, n);
                            });
                          })(e, n);
                        }),
                        n
                      );
                    })(this),
                    n = this._cacheMap,
                    r = this._cacheKeyFn(e);
                  if (n) {
                    var i = n.get(r);
                    if (i) {
                      var c = (t.cacheHits ||= []);
                      return new Promise(function (e) {
                        c.push(function () {
                          e(i);
                        });
                      });
                    }
                  }
                  t.keys.push(e);
                  var l = new Promise(function (e, n) {
                    t.callbacks.push({ resolve: e, reject: n });
                  });
                  return n && n.set(r, l), l;
                }),
                (t.loadMany = function (e) {
                  if (!s(e))
                    throw TypeError(
                      `The loader.loadMany() function must be called with Array<key> but got: ` +
                        e +
                        `.`,
                    );
                  for (var t = [], n = 0; n < e.length; n++)
                    t.push(
                      this.load(e[n]).catch(function (e) {
                        return e;
                      }),
                    );
                  return Promise.all(t);
                }),
                (t.clear = function (e) {
                  var t = this._cacheMap;
                  if (t) {
                    var n = this._cacheKeyFn(e);
                    t.delete(n);
                  }
                  return this;
                }),
                (t.clearAll = function () {
                  var e = this._cacheMap;
                  return e && e.clear(), this;
                }),
                (t.prime = function (e, t) {
                  var n = this._cacheMap;
                  if (n) {
                    var r,
                      i = this._cacheKeyFn(e);
                    n.get(i) === void 0 &&
                      (t instanceof Error
                        ? (r = Promise.reject(t)).catch(function () {})
                        : (r = Promise.resolve(t)),
                      n.set(i, r));
                  }
                  return this;
                }),
                e
              );
            })(),
            i =
              typeof process == `object` &&
              typeof process.nextTick == `function`
                ? function (e) {
                    (n ||= Promise.resolve()),
                      n.then(function () {
                        process.nextTick(e);
                      });
                  }
                : typeof setImmediate == `function`
                  ? function (e) {
                      setImmediate(e);
                    }
                  : function (e) {
                      setTimeout(e);
                    };
          function a(e, t, n) {
            o(t);
            for (var r = 0; r < t.keys.length; r++)
              e.clear(t.keys[r]), t.callbacks[r].reject(n);
          }
          function o(e) {
            if (e.cacheHits)
              for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
          }
          function s(e) {
            return (
              typeof e == `object` &&
              !!e &&
              typeof e.length == `number` &&
              (e.length === 0 ||
                (e.length > 0 &&
                  Object.prototype.hasOwnProperty.call(e, e.length - 1)))
            );
          }
          t.exports = r;
        },
      })),
      (Ge = N(We())),
      (F = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (I = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = F.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return (this.offset += e), t;
        }
        readUint16() {
          let e = F.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return (this.offset += e), t;
        }
        readUint32() {
          let e = F.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return (this.offset += e), t;
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = F.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return (this.offset += e), t;
        }
        readInt8() {
          let e = F.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return (this.offset += e), t;
        }
        readInt16() {
          let e = F.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return (this.offset += e), t;
        }
        readInt32() {
          let e = F.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return (this.offset += e), t;
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = F.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return (this.offset += e), t;
        }
        readFloat32() {
          let e = F.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return (this.offset += e), t;
        }
        readFloat64() {
          let e = F.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return (this.offset += e), t;
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return (this.offset = n), r;
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          (this.bytes = e),
            P(this, `offset`, 0),
            P(this, `view`),
            P(this, `decoder`, new TextDecoder()),
            (this.view = p(this.bytes));
        }
      }),
      (Ke = o !== void 0),
      Ke && o.requestIdleCallback,
      (qe = 1024),
      (Je = 1.5),
      (L = (e) => 2 ** e - 1),
      (R = (e) => -(2 ** (e - 1))),
      (z = (e) => 2 ** (e - 1) - 1),
      (B = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: R(8),
        Int16: R(16),
        Int32: R(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (V = {
        Uint8: L(8),
        Uint16: L(16),
        Uint32: L(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: z(8),
        Int16: z(16),
        Int32: z(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (Ye = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Je) + e);
          n.set(this.bytes), (this.bytes = n), (this.view = p(n));
        }
        writeUint8(e) {
          g(e, B.Uint8, V.Uint8, `Uint8`);
          let t = F.Uint8;
          this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t);
        }
        writeUint16(e) {
          g(e, B.Uint16, V.Uint16, `Uint16`);
          let t = F.Uint16;
          this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t);
        }
        writeUint32(e) {
          g(e, B.Uint32, V.Uint32, `Uint32`);
          let t = F.Uint32;
          this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t);
        }
        writeUint64(e) {
          g(e, B.Uint64, V.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          g(e, B.BigUint64, V.BigUint64, `BigUint64`);
          let t = F.BigUint64;
          this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t);
        }
        writeInt8(e) {
          g(e, B.Int8, V.Int8, `Int8`);
          let t = F.Int8;
          this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t);
        }
        writeInt16(e) {
          g(e, B.Int16, V.Int16, `Int16`);
          let t = F.Int16;
          this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t);
        }
        writeInt32(e) {
          g(e, B.Int32, V.Int32, `Int32`);
          let t = F.Int32;
          this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t);
        }
        writeInt64(e) {
          g(e, B.Int64, V.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          g(e, B.BigInt64, V.BigInt64, `BigInt64`);
          let t = F.BigInt64;
          this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t);
        }
        writeFloat32(e) {
          let t = F.Float32;
          this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t);
        }
        writeFloat64(e) {
          let t = F.Float64;
          this.ensureLength(t),
            this.view.setFloat64(this.offset, e),
            (this.offset += t);
        }
        writeBytes(e) {
          let t = e.length;
          this.ensureLength(t),
            this.bytes.set(e, this.offset),
            (this.offset += t);
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return this.encodedStrings.set(e, n), n;
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          this.writeUint32(n), this.writeBytes(t);
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          P(this, `offset`, 0),
            P(this, `bytes`, new Uint8Array(qe)),
            P(this, `view`, p(this.bytes)),
            P(this, `encoder`, new TextEncoder()),
            P(this, `encodedStrings`, new Map());
        }
      }),
      (H = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            m(v(n), `Invalid chunkId`),
            m(v(r), `Invalid offset`),
            m(v(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length);
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (m(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (this.chunkId = e), (this.offset = t), (this.length = n);
        }
      }),
      ((e) => {
        (e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return re(e);
            case 2:
              return oe(e);
            case 3:
              return le(e);
            case 4:
              return fe(e);
            case 5:
              return he(e);
            case 6:
              return ve(e);
            case 7:
              return xe(e);
            case 8:
              return we(e);
            case 9:
              return De(e);
            case 10:
              return Ae(e);
            case 11:
              return Ne(e);
            case 12:
              return Ie(e);
            case 13:
              return ze(e);
            default:
              h(t);
          }
        }),
          (e.write = function (e, t) {
            let n = b(t);
            if ((e.writeUint8(n), !y(t)))
              switch (t.type) {
                case u.Array:
                  return ie(e, t);
                case u.Boolean:
                  return se(e, t);
                case u.Color:
                  return ue(e, t);
                case u.Date:
                  return pe(e, t);
                case u.Enum:
                  return ge(e, t);
                case u.File:
                  return ye(e, t);
                case u.Link:
                  return Se(e, t);
                case u.Number:
                  return Te(e, t);
                case u.Object:
                  return Oe(e, t);
                case u.ResponsiveImage:
                  return je(e, t);
                case u.RichText:
                  return Pe(e, t);
                case u.VectorSetItem:
                  return Be(e, t);
                case u.String:
                  return Le(e, t);
                default:
                  h(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = b(e),
              i = b(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (y(e) || y(t)) return 0;
            switch (e.type) {
              case u.Array:
                return m(t.type === u.Array), ae(e, t, n);
              case u.Boolean:
                return m(t.type === u.Boolean), ce(e, t);
              case u.Color:
                return m(t.type === u.Color), de(e, t);
              case u.Date:
                return m(t.type === u.Date), me(e, t);
              case u.Enum:
                return m(t.type === u.Enum), _e(e, t);
              case u.File:
                return m(t.type === u.File), be(e, t);
              case u.Link:
                return m(t.type === u.Link), Ce(e, t);
              case u.Number:
                return m(t.type === u.Number), Ee(e, t);
              case u.Object:
                return m(t.type === u.Object), ke(e, t, n);
              case u.ResponsiveImage:
                return m(t.type === u.ResponsiveImage), Me(e, t);
              case u.RichText:
                return m(t.type === u.RichText), Fe(e, t);
              case u.VectorSetItem:
                return m(t.type === u.VectorSetItem), Ve(e, t);
              case u.String:
                return m(t.type === u.String), Re(e, t, n);
              default:
                h(e);
            }
          });
      })((C ||= {})),
      (Xe = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = C.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new I(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = C.read(n);
              e.push(t);
            }
            let t = H.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Ye();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) C.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (this.fieldNames = e), (this.options = t), P(this, `entries`, []);
        }
      }),
      (U = 3),
      (Ze = 250),
      (Qe = [408, 429, 500, 502, 503, 504]),
      (W = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Qe.includes(r.status) || ++n > U) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > U) throw e;
          }
          await He(n);
        }
      }),
      ($e = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((m(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start,
                  i = e.data.subarray(0, r);
                (t = S(i, t)), (n = e.start);
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((m(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                (t = S(t, i)), (r = e.end);
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          P(this, `chunks`, []);
        }
      }),
      (G = class {
        async loadModel() {
          let [e] = await x(this.options.url, [this.options.range]);
          return m(e, `Failed to load model`), Xe.deserialize(e);
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          m(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      h(t);
                  }
                }),
              [t.entries],
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n],
                  i = t.values[n];
                e[r] = i;
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return s.length > 0 && a.push(s), a;
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== u.String || t.value?.type !== u.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== u.String || t.value?.type !== u.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== u.String || t.value?.type !== u.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a],
              s = o.values[t];
            0 > C.compare(s, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a],
              s = o.values[t];
            C.compare(s, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a],
              s = o.values[t],
              c = n(s);
            if (!c) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          (this.options = e),
            P(this, `schema`),
            P(this, `fields`),
            P(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            P(this, `modelPromise`),
            P(this, `model`),
            P(this, `collation`);
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            m(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e });
          }
          (this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation);
        }
      }),
      (K = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = C.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            e.writeString(t), C.write(e, n);
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          P(this, `fields`, new Map());
        }
      }),
      (et = class {
        scanItems() {
          return (
            (this.itemsPromise ??= W(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Uint8Array(t),
                r = new I(n),
                i = [],
                a = r.readUint32();
              for (let e = 0; e < a; e++) {
                let e = r.getOffset(),
                  t = K.read(r),
                  n = r.getOffset() - e,
                  a = new H(this.id, e, n),
                  o = a.toString(),
                  s = { pointer: o, data: t.getData() };
                this.itemLoader.prime(o, s), i.push(s);
              }
              return i;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (this.id = e),
            (this.url = t),
            P(this, `itemsPromise`),
            P(
              this,
              `itemLoader`,
              new Ge.default(async (e) => {
                let t = e.map((e) => {
                    let t = H.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  }),
                  n = await x(this.url, t);
                return n.map((t, n) => {
                  let r = new I(t),
                    i = K.read(r),
                    a = e[n];
                  return (
                    m(a, `Missing pointer`), { pointer: a, data: i.getData() }
                  );
                });
              }),
            );
        }
      }),
      (tt = class {
        async scanItems() {
          let e = await Promise.all(
            this.chunks.map(async (e) => e.scanItems()),
          );
          return e.flat();
        }
        async resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = H.fromString(e),
                n = this.chunks[t.chunkId];
              return m(n, `Missing chunk`), n.resolveItem(e);
            }),
          );
        }
        compareItems(e, t) {
          let n = H.fromString(e.pointer),
            r = H.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return C.compare(e, t, n);
        }
        constructor(e) {
          (this.options = e),
            P(this, `schema`),
            P(this, `indexes`),
            P(this, `resolveRichText`),
            P(this, `resolveVectorSetItem`),
            P(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new et(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem);
        }
      });
  });
function rt(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function it(e) {
  let n = new Map();
  return (r) => {
    let i = n.get(r);
    if (i) return i;
    let o = JSON.parse(r),
      u = (function n(r) {
        switch (r[0]) {
          case 1: {
            let [, ...e] = r,
              i = e.map(n);
            return t(s, void 0, ...i);
          }
          case 2: {
            let [, e, ...i] = r,
              a = i.map(n);
            return t(d, e, ...a);
          }
          case 3: {
            let [, t, n] = r,
              i = e[t];
            return (
              rt(i, `Module not found`),
              a(l, {
                componentIdentifier: t,
                children: (e) => a(i, { ...e, ...n }),
              })
            );
          }
          case 4: {
            let [, e, i, ...a] = r,
              o = a.map(n);
            return t(e === `a` ? c.a : e, i, ...o);
          }
          case 5: {
            let [, e] = r;
            return e;
          }
        }
      })(o);
    return n.set(r, u), u;
  };
}
var q,
  at,
  ot = e(() => {
    n(),
      f(),
      r(),
      (at =
        (((q = at || {})[(q.Fragment = 1)] = `Fragment`),
        (q[(q.Link = 2)] = `Link`),
        (q[(q.Module = 3)] = `Module`),
        (q[(q.Tag = 4)] = `Tag`),
        (q[(q.Text = 5)] = `Text`),
        q));
  }),
  J,
  st,
  Y,
  ct,
  lt,
  ut,
  dt,
  ft,
  X,
  pt,
  mt,
  Z,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  Q,
  $,
  St,
  Ct,
  wt,
  Tt = e(() => {
    f(),
      nt(),
      ot(),
      (J = {
        id: { isNullable: !1, type: u.String },
        IZpKwAVeh: { isNullable: !0, type: u.Date },
        LS8OlH3Ua: { isNullable: !0, type: u.ResponsiveImage },
        m1Lgae9gS: { isNullable: !0, type: u.String },
        nextItemId: { isNullable: !0, type: u.String },
        previousItemId: { isNullable: !0, type: u.String },
        qD_Cz8fLf: { isNullable: !0, type: u.String },
        taHMx4Dgb: { isNullable: !0, type: u.RichText },
        zHEZZmHJx: { isNullable: !0, type: u.String },
      }),
      (st = [`id`]),
      (Y = { type: 1 }),
      (ct = [`previousItemId`]),
      (lt = [`nextItemId`]),
      (ut = [`id`, `m1Lgae9gS`]),
      (dt = [`m1Lgae9gS`, `id`]),
      (ft = [`zHEZZmHJx`]),
      (X = { type: 0 }),
      (pt = [`m1Lgae9gS`]),
      (mt = [`qD_Cz8fLf`]),
      (Z = [`IZpKwAVeh`]),
      (ht = [`LS8OlH3Ua`]),
      (gt = [`taHMx4Dgb`]),
      (_t = []),
      (vt = (e) => {
        let t = _t[e];
        if (t) return t().then((e) => e.default);
      }),
      (yt = {}),
      (bt = it(yt)),
      (xt = new te()),
      (Q = new ee(xt)),
      ($ = {
        collectionByLocaleId: {
          default: new tt({
            chunks: [
              new URL(
                `./sS_XZEOTg-chunk-default-0.framercms`,
                `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            indexes: [
              new G({
                collation: Y,
                collectionSchema: J,
                fieldNames: st,
                range: { from: 0, to: 289 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: J,
                fieldNames: ct,
                range: { from: 289, to: 577 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: J,
                fieldNames: lt,
                range: { from: 577, to: 861 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: J,
                fieldNames: ut,
                range: { from: 861, to: 1675 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: J,
                fieldNames: dt,
                range: { from: 1675, to: 2489 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: ft,
                range: { from: 2489, to: 3348 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: pt,
                range: { from: 3348, to: 4002 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: mt,
                range: { from: 4002, to: 5227 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: Z,
                range: { from: 5227, to: 5468 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: ht,
                range: { from: 5468, to: 10955 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: X,
                collectionSchema: J,
                fieldNames: gt,
                range: { from: 10955, to: 68721 },
                url: new URL(
                  `./sS_XZEOTg-indexes-default-0.framercms`,
                  `/modules/2sqwY9EjAtHZLgJYjOD9/Cll4OOzHB6FEtTomoPvB/sS_XZEOTg.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: bt,
            resolveVectorSetItem: vt,
            schema: J,
          }),
        },
        displayName: `Articles`,
      }),
      ne($, {
        zHEZZmHJx: { defaultValue: ``, title: `Title`, type: u.String },
        m1Lgae9gS: { title: `Slug`, type: u.String },
        qD_Cz8fLf: {
          defaultValue: ``,
          displayTextArea: !0,
          maxLength: 110,
          title: `Description`,
          type: u.String,
        },
        IZpKwAVeh: { defaultValue: ``, title: `Date`, type: u.Date },
        LS8OlH3Ua: { title: `Image`, type: u.ResponsiveImage },
        taHMx4Dgb: { defaultValue: ``, title: `Content`, type: u.RichText },
        previousItemId: {
          dataIdentifier: `local-module:collection/sS_XZEOTg:default`,
          title: `Previous`,
          type: u.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/sS_XZEOTg:default`,
          title: `Next`,
          type: u.CollectionReference,
        },
      }),
      (St = {}),
      (Ct = {
        async getSlugByRecordId(e, t) {
          let [n] = await Q.get(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `m1Lgae9gS`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t,
          ).readAsync();
          return n?.m1Lgae9gS;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Q.get(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `m1Lgae9gS`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t,
          ).readAsync();
          return n?.id;
        },
      }),
      (wt = {
        exports: {
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerColorSyntax: `false`,
              framerRecordIdKey: `id`,
              framerContractVersion: `1`,
              framerData: ``,
              framerEnumToDisplayNameUtils: `2`,
              framerAutoSizeImages: `true`,
              framerCollectionId: `sS_XZEOTg`,
              framerSlug: `m1Lgae9gS`,
              framerCollectionUtils: `1`,
            },
          },
          utils: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
export {
  $ as R,
  wt as __FramerMetadata__,
  St as enumToDisplayNameFunctions,
  Tt as init_sS_XZEOTg,
  Ct as utils,
};
//# sourceMappingURL=sS_XZEOTg.CdCOkZdn.mjs.map
