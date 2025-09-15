import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import { init_ssg_sandbox_shims as t, window as n } from "./react.Cd8yx0tA.mjs";
import {
  ControlType as r,
  QueryCache as i,
  QueryEngine as a,
  addPropertyControls as o,
  init_framer_MRKGI23E as s,
} from "./framer.DERDik75.mjs";
function c(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function l(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function u(e) {
  throw Error(`Unexpected value: ${e}`);
}
function d(e, t, n, r) {
  l(e >= t, e, `outside lower bound for`, r),
    l(e <= n, e, `outside upper bound for`, r);
}
function f(e) {
  return typeof e == `string`;
}
function p(e) {
  return Number.isFinite(e);
}
function m(e) {
  return e === null;
}
function h(e) {
  if (m(e)) return 0;
  switch (e.type) {
    case r.Array:
      return 1;
    case r.Boolean:
      return 2;
    case r.Color:
      return 3;
    case r.Date:
      return 4;
    case r.Enum:
      return 5;
    case r.File:
      return 6;
    case r.ResponsiveImage:
      return 10;
    case r.Link:
      return 7;
    case r.Number:
      return 8;
    case r.Object:
      return 9;
    case r.RichText:
      return 11;
    case r.String:
      return 12;
    case r.VectorSetItem:
      return 13;
    default:
      u(e);
  }
}
function ee(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = v.read(e);
    n.push(t);
  }
  return { type: r.Array, value: n };
}
function te(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) v.write(e, n);
}
function ne(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = v.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function re(e) {
  return { type: r.Boolean, value: e.readUint8() !== 0 };
}
function ie(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function ae(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function oe(e) {
  return { type: r.Color, value: e.readString() };
}
function se(e, t) {
  e.writeString(t.value);
}
function ce(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function le(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: r.Date, value: n.toISOString() };
}
function ue(e, t) {
  let n = new Date(t.value),
    r = n.getTime();
  e.writeInt64(r);
}
function de(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function fe(e) {
  return { type: r.Enum, value: e.readString() };
}
function pe(e, t) {
  e.writeString(t.value);
}
function me(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function he(e) {
  return { type: r.File, value: e.readString() };
}
function ge(e, t) {
  e.writeString(t.value);
}
function _e(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ve(e) {
  return { type: r.Link, value: e.readJson() };
}
function ye(e, t) {
  e.writeJson(t.value);
}
function be(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function xe(e) {
  return { type: r.Number, value: e.readFloat64() };
}
function Se(e, t) {
  e.writeFloat64(t.value);
}
function Ce(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function we(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = v.read(e);
  }
  return { type: r.Object, value: n };
}
function Te(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    e.writeString(t), v.write(e, r);
}
function Ee(e, t, n) {
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
      u = v.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function De(e) {
  return { type: r.ResponsiveImage, value: e.readJson() };
}
function Oe(e, t) {
  e.writeJson(t.value);
}
function ke(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ae(e) {
  let t = e.readInt8();
  if (t === 0) return { type: r.RichText, value: e.readUint32() };
  if (t === 1) return { type: r.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function je(e, t) {
  if (p(t.value)) {
    e.writeInt8(0), e.writeUint32(t.value);
    return;
  }
  if (f(t.value)) {
    e.writeInt8(1), e.writeString(t.value);
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Me(e, t) {
  let n = e.value,
    r = t.value;
  if ((p(n) && p(r)) || (f(n) && f(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Ne(e) {
  return { type: r.String, value: e.readString() };
}
function Pe(e, t) {
  e.writeString(t.value);
}
function Fe(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Ie(e) {
  return { type: r.VectorSetItem, value: e.readUint32() };
}
function Le(e, t) {
  e.writeUint32(t.value);
}
function Re(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function ze(e) {
  let t = Math.floor(W * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function g(e, t) {
  let n = Be(t),
    r = [],
    i = 0;
  for (let e of n) r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from);
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await G(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new We(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    u.write(e.from, r), (d = n);
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function _(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return r.set(e, 0), r.set(t, e.length), r;
}
function Be(e) {
  l(e.length > 0, `Must have at least one range`);
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
var v,
  y,
  b,
  x,
  S,
  C,
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
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  Ve,
  H,
  He,
  U,
  W,
  Ue,
  G,
  We,
  K,
  q,
  Ge,
  Ke,
  qe = e(() => {
    t(),
      s(),
      (y = Object.create),
      (b = Object.defineProperty),
      (x = Object.getOwnPropertyDescriptor),
      (S = Object.getOwnPropertyNames),
      (C = Object.getPrototypeOf),
      (w = Object.prototype.hasOwnProperty),
      (T = (e, t, n) =>
        t in e
          ? b(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (E = (e, t) =>
        function () {
          return (
            t || (0, e[S(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        }),
      (D = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of S(t))
            w.call(e, i) ||
              i === n ||
              b(e, i, {
                get: () => t[i],
                enumerable: !(r = x(t, i)) || r.enumerable,
              });
        return e;
      }),
      (O = (e, t, n) => (
        (n = e == null ? {} : y(C(e))),
        D(
          !t && e && e.__esModule
            ? n
            : b(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (k = (e, t, n) => T(e, typeof t == `symbol` ? t : t + ``, n)),
      (A = E({
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
      (j = O(A())),
      (M = {
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
      (N = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = M.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return (this.offset += e), t;
        }
        readUint16() {
          let e = M.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return (this.offset += e), t;
        }
        readUint32() {
          let e = M.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return (this.offset += e), t;
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = M.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return (this.offset += e), t;
        }
        readInt8() {
          let e = M.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return (this.offset += e), t;
        }
        readInt16() {
          let e = M.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return (this.offset += e), t;
        }
        readInt32() {
          let e = M.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return (this.offset += e), t;
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = M.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return (this.offset += e), t;
        }
        readFloat32() {
          let e = M.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return (this.offset += e), t;
        }
        readFloat64() {
          let e = M.Float64;
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
            k(this, `offset`, 0),
            k(this, `view`),
            k(this, `decoder`, new TextDecoder()),
            (this.view = c(this.bytes));
        }
      }),
      (P = n !== void 0),
      P && n.requestIdleCallback,
      (F = 1024),
      (I = 1.5),
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
      (Ve = class {
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
          let n = new Uint8Array(Math.ceil(t * I) + e);
          n.set(this.bytes), (this.bytes = n), (this.view = c(n));
        }
        writeUint8(e) {
          d(e, B.Uint8, V.Uint8, `Uint8`);
          let t = M.Uint8;
          this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t);
        }
        writeUint16(e) {
          d(e, B.Uint16, V.Uint16, `Uint16`);
          let t = M.Uint16;
          this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t);
        }
        writeUint32(e) {
          d(e, B.Uint32, V.Uint32, `Uint32`);
          let t = M.Uint32;
          this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t);
        }
        writeUint64(e) {
          d(e, B.Uint64, V.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          d(e, B.BigUint64, V.BigUint64, `BigUint64`);
          let t = M.BigUint64;
          this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t);
        }
        writeInt8(e) {
          d(e, B.Int8, V.Int8, `Int8`);
          let t = M.Int8;
          this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t);
        }
        writeInt16(e) {
          d(e, B.Int16, V.Int16, `Int16`);
          let t = M.Int16;
          this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t);
        }
        writeInt32(e) {
          d(e, B.Int32, V.Int32, `Int32`);
          let t = M.Int32;
          this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t);
        }
        writeInt64(e) {
          d(e, B.Int64, V.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          d(e, B.BigInt64, V.BigInt64, `BigInt64`);
          let t = M.BigInt64;
          this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t);
        }
        writeFloat32(e) {
          let t = M.Float32;
          this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t);
        }
        writeFloat64(e) {
          let t = M.Float64;
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
          k(this, `offset`, 0),
            k(this, `bytes`, new Uint8Array(F)),
            k(this, `view`, c(this.bytes)),
            k(this, `encoder`, new TextEncoder()),
            k(this, `encodedStrings`, new Map());
        }
      }),
      (H = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            l(p(n), `Invalid chunkId`),
            l(p(r), `Invalid offset`),
            l(p(i), `Invalid length`),
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
                  : (l(this.length === e.length), 0);
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
              return ee(e);
            case 2:
              return re(e);
            case 3:
              return oe(e);
            case 4:
              return le(e);
            case 5:
              return fe(e);
            case 6:
              return he(e);
            case 7:
              return ve(e);
            case 8:
              return xe(e);
            case 9:
              return we(e);
            case 10:
              return De(e);
            case 11:
              return Ae(e);
            case 12:
              return Ne(e);
            case 13:
              return Ie(e);
            default:
              u(t);
          }
        }),
          (e.write = function (e, t) {
            let n = h(t);
            if ((e.writeUint8(n), !m(t)))
              switch (t.type) {
                case r.Array:
                  return te(e, t);
                case r.Boolean:
                  return ie(e, t);
                case r.Color:
                  return se(e, t);
                case r.Date:
                  return ue(e, t);
                case r.Enum:
                  return pe(e, t);
                case r.File:
                  return ge(e, t);
                case r.Link:
                  return ye(e, t);
                case r.Number:
                  return Se(e, t);
                case r.Object:
                  return Te(e, t);
                case r.ResponsiveImage:
                  return Oe(e, t);
                case r.RichText:
                  return je(e, t);
                case r.VectorSetItem:
                  return Le(e, t);
                case r.String:
                  return Pe(e, t);
                default:
                  u(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let i = h(e),
              a = h(t);
            if (i < a) return -1;
            if (i > a) return 1;
            if (m(e) || m(t)) return 0;
            switch (e.type) {
              case r.Array:
                return l(t.type === r.Array), ne(e, t, n);
              case r.Boolean:
                return l(t.type === r.Boolean), ae(e, t);
              case r.Color:
                return l(t.type === r.Color), ce(e, t);
              case r.Date:
                return l(t.type === r.Date), de(e, t);
              case r.Enum:
                return l(t.type === r.Enum), me(e, t);
              case r.File:
                return l(t.type === r.File), _e(e, t);
              case r.Link:
                return l(t.type === r.Link), be(e, t);
              case r.Number:
                return l(t.type === r.Number), Ce(e, t);
              case r.Object:
                return l(t.type === r.Object), Ee(e, t, n);
              case r.ResponsiveImage:
                return l(t.type === r.ResponsiveImage), ke(e, t);
              case r.RichText:
                return l(t.type === r.RichText), Me(e, t);
              case r.VectorSetItem:
                return l(t.type === r.VectorSetItem), Re(e, t);
              case r.String:
                return l(t.type === r.String), Fe(e, t, n);
              default:
                u(e);
            }
          });
      })((v ||= {})),
      (He = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = v.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new N(t),
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
              let t = v.read(n);
              e.push(t);
            }
            let t = H.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Ve();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) v.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (this.fieldNames = e), (this.options = t), k(this, `entries`, []);
        }
      }),
      (U = 3),
      (W = 250),
      (Ue = [408, 429, 500, 502, 503, 504]),
      (G = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ue.includes(r.status) || ++n > U) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > U) throw e;
          }
          await ze(n);
        }
      }),
      (We = class {
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
            if ((l(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start,
                  i = e.data.subarray(0, r);
                (t = _(i, t)), (n = e.start);
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((l(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                (t = _(t, i)), (r = e.end);
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          k(this, `chunks`, []);
        }
      }),
      (K = class {
        async loadModel() {
          let [e] = await g(this.options.url, [this.options.range]);
          return l(e, `Failed to load model`), He.deserialize(e);
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          l(e.length === this.fields.length, `Invalid query length`);
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
                      u(t);
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
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.includes(i)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.startsWith(i)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== r.String || t.value?.type !== r.String) return !1;
            let n = e.value,
              i = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (i = i.toLowerCase())),
              n.endsWith(i)
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
            0 > v.compare(s, n, this.collation) ? (r = a + 1) : (i = a);
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
            v.compare(s, n, this.collation) > 0 ? (i = a) : (r = a + 1);
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
            k(this, `schema`),
            k(this, `fields`),
            k(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            k(this, `modelPromise`),
            k(this, `model`),
            k(this, `collation`);
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            l(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e });
          }
          (this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation);
        }
      }),
      (q = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = v.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            e.writeString(t), v.write(e, n);
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
          k(this, `fields`, new Map());
        }
      }),
      (Ge = class {
        scanItems() {
          return (
            (this.itemsPromise ??= G(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Uint8Array(t),
                r = new N(n),
                i = [],
                a = r.readUint32();
              for (let e = 0; e < a; e++) {
                let e = r.getOffset(),
                  t = q.read(r),
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
            k(this, `itemsPromise`),
            k(
              this,
              `itemLoader`,
              new j.default(async (e) => {
                let t = e.map((e) => {
                    let t = H.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  }),
                  n = await g(this.url, t);
                return n.map((t, n) => {
                  let r = new N(t),
                    i = q.read(r),
                    a = e[n];
                  return (
                    l(a, `Missing pointer`), { pointer: a, data: i.getData() }
                  );
                });
              }),
            );
        }
      }),
      (Ke = class {
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
              return l(n, `Missing chunk`), n.resolveItem(e);
            }),
          );
        }
        compareItems(e, t) {
          let n = H.fromString(e.pointer),
            r = H.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return v.compare(e, t, n);
        }
        constructor(e) {
          (this.options = e),
            k(this, `schema`),
            k(this, `indexes`),
            k(this, `resolveRichText`),
            k(this, `resolveVectorSetItem`),
            k(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Ge(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem);
        }
      });
  });
async function Je(e) {
  let t = Ye[e];
  if (t) return await t();
}
var Ye,
  Xe = e(() => {
    Ye = [];
  }),
  J,
  Ze,
  Y,
  Qe,
  $e,
  et,
  tt,
  nt,
  X,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Z,
  Q,
  Rt,
  zt,
  $,
  Bt = e(() => {
    s(),
      qe(),
      Xe(),
      (J = {
        A9CMKXrky: { isNullable: !0, type: r.ResponsiveImage },
        cnoaRH64w: { isNullable: !0, type: r.String },
        CxNP8UShQ: { isNullable: !0, type: r.ResponsiveImage },
        Da6N_zmi4: { isNullable: !0, type: r.String },
        E8QbXXIUR: { isNullable: !0, type: r.String },
        el_c8bdnT: { isNullable: !0, type: r.String },
        F76KQcnVj: { isNullable: !0, type: r.String },
        frNGOkgvU: { isNullable: !0, type: r.String },
        id: { isNullable: !1, type: r.String },
        iQu86Lp5W: { isNullable: !0, type: r.String },
        j_boLK3L6: { isNullable: !0, type: r.ResponsiveImage },
        j62j8F9HB: { isNullable: !0, type: r.String },
        JjGRnChP3: { isNullable: !0, type: r.String },
        KVX8SRel0: { isNullable: !0, type: r.String },
        nextItemId: { isNullable: !0, type: r.String },
        p0ESKFXO9: { isNullable: !0, type: r.String },
        PJYoNkQX3: { isNullable: !0, type: r.String },
        pKnkUXeox: { isNullable: !0, type: r.String },
        previousItemId: { isNullable: !0, type: r.String },
        Rf3ogD8BC: { isNullable: !0, type: r.ResponsiveImage },
        Rqud_Pwq9: { isNullable: !0, type: r.String },
        rzdlrtkpt: { isNullable: !0, type: r.String },
        SUNERXM1E: { isNullable: !0, type: r.String },
        t9sAE589s: { isNullable: !0, type: r.String },
        tDtB8812a: { isNullable: !0, type: r.String },
        Ul2DocLLa: { isNullable: !0, type: r.String },
        WF350Xbnl: { isNullable: !0, type: r.String },
        wn0qBxyXT: { isNullable: !0, type: r.ResponsiveImage },
        WWsHpvGt_: { isNullable: !0, type: r.String },
        WxD0Z_PRA: { isNullable: !0, type: r.String },
        X2jsuQjjE: { isNullable: !0, type: r.String },
        XervC69HP: { isNullable: !0, type: r.String },
        xp1BjmsIj: { isNullable: !0, type: r.String },
        ZdXF7Vboa: { isNullable: !0, type: r.String },
        ZJ7Ic58kr: { isNullable: !0, type: r.String },
        ZQjSIfZHa: { isNullable: !0, type: r.String },
      }),
      (Ze = [`id`]),
      (Y = { type: 1 }),
      (Qe = [`previousItemId`]),
      ($e = [`nextItemId`]),
      (et = [`id`, `ZQjSIfZHa`]),
      (tt = [`ZQjSIfZHa`, `id`]),
      (nt = [`ZQjSIfZHa`]),
      (X = { type: 0 }),
      (rt = [`X2jsuQjjE`]),
      (it = [`F76KQcnVj`]),
      (at = [`JjGRnChP3`]),
      (ot = [`Rf3ogD8BC`]),
      (st = [`iQu86Lp5W`]),
      (ct = [`cnoaRH64w`]),
      (lt = [`frNGOkgvU`]),
      (ut = [`XervC69HP`]),
      (dt = [`p0ESKFXO9`]),
      (ft = [`E8QbXXIUR`]),
      (pt = [`tDtB8812a`]),
      (mt = [`wn0qBxyXT`]),
      (ht = [`WWsHpvGt_`]),
      (gt = [`SUNERXM1E`]),
      (_t = [`CxNP8UShQ`]),
      (vt = [`ZJ7Ic58kr`]),
      (yt = [`PJYoNkQX3`]),
      (bt = [`A9CMKXrky`]),
      (xt = [`ZdXF7Vboa`]),
      (St = [`el_c8bdnT`]),
      (Ct = [`xp1BjmsIj`]),
      (wt = [`j_boLK3L6`]),
      (Tt = [`KVX8SRel0`]),
      (Et = [`j62j8F9HB`]),
      (Dt = [`Da6N_zmi4`]),
      (Ot = [`Rqud_Pwq9`]),
      (kt = [`rzdlrtkpt`]),
      (At = [`pKnkUXeox`]),
      (jt = [`WxD0Z_PRA`]),
      (Mt = [`Ul2DocLLa`]),
      (Nt = [`t9sAE589s`]),
      (Pt = [`WF350Xbnl`]),
      (Ft = []),
      (It = (e) => {
        let t = Ft[e];
        if (t) return t().then((e) => e.default);
      }),
      (Lt = new a()),
      (Z = new i(Lt)),
      (Q = {
        collectionByLocaleId: {
          default: new Ke({
            chunks: [
              new URL(
                `./jeKWmQbwE-chunk-default-0.framercms`,
                `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            indexes: [
              new K({
                collation: Y,
                collectionSchema: J,
                fieldNames: Ze,
                range: { from: 0, to: 169 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Y,
                collectionSchema: J,
                fieldNames: Qe,
                range: { from: 169, to: 337 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Y,
                collectionSchema: J,
                fieldNames: $e,
                range: { from: 337, to: 501 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Y,
                collectionSchema: J,
                fieldNames: et,
                range: { from: 501, to: 918 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Y,
                collectionSchema: J,
                fieldNames: tt,
                range: { from: 918, to: 1335 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: nt,
                range: { from: 1335, to: 1662 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: rt,
                range: { from: 1662, to: 1913 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: it,
                range: { from: 1913, to: 2611 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: at,
                range: { from: 2611, to: 2989 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: ot,
                range: { from: 2989, to: 5574 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: st,
                range: { from: 5574, to: 7950 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: ct,
                range: { from: 7950, to: 8422 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: lt,
                range: { from: 8422, to: 9553 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: ut,
                range: { from: 9553, to: 9687 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: dt,
                range: { from: 9687, to: 9844 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: ft,
                range: { from: 9844, to: 10344 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: pt,
                range: { from: 10344, to: 10814 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: mt,
                range: { from: 10814, to: 11602 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: ht,
                range: { from: 11602, to: 11859 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: gt,
                range: { from: 11859, to: 12314 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: _t,
                range: { from: 12314, to: 13096 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: vt,
                range: { from: 13096, to: 13374 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: yt,
                range: { from: 13374, to: 13871 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: bt,
                range: { from: 13871, to: 14653 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: xt,
                range: { from: 14653, to: 14937 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: St,
                range: { from: 14937, to: 15317 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Ct,
                range: { from: 15317, to: 16442 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: wt,
                range: { from: 16442, to: 18123 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Tt,
                range: { from: 18123, to: 18400 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Et,
                range: { from: 18400, to: 18579 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Dt,
                range: { from: 18579, to: 18947 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Ot,
                range: { from: 18947, to: 19645 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: kt,
                range: { from: 19645, to: 19989 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: At,
                range: { from: 19989, to: 20657 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: jt,
                range: { from: 20657, to: 20959 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Mt,
                range: { from: 20959, to: 21441 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Nt,
                range: { from: 21441, to: 21911 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: J,
                fieldNames: Pt,
                range: { from: 21911, to: 22525 },
                url: new URL(
                  `./jeKWmQbwE-indexes-default-0.framercms`,
                  `/modules/IL0mQf4yiiTSHbLVUrAK/NgZ4VDS1XEcIegRSY8qb/jeKWmQbwE.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Je,
            resolveVectorSetItem: It,
            schema: J,
          }),
        },
        displayName: `Industries`,
      }),
      o(Q, {
        ZQjSIfZHa: { title: `Slug`, type: r.String },
        X2jsuQjjE: { defaultValue: ``, title: `Service Name`, type: r.String },
        F76KQcnVj: {
          defaultValue: ``,
          displayTextArea: !0,
          maxLength: 110,
          title: `small Description`,
          type: r.String,
        },
        JjGRnChP3: { defaultValue: ``, title: `Title`, type: r.String },
        Rf3ogD8BC: { title: `Banner Image`, type: r.ResponsiveImage },
        iQu86Lp5W: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Long Description`,
          type: r.String,
        },
        cnoaRH64w: {
          defaultValue: ``,
          title: `Problem Heading`,
          type: r.String,
        },
        frNGOkgvU: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Problem Description`,
          type: r.String,
        },
        XervC69HP: {
          defaultValue: `£`,
          title: `Counter Symbol`,
          type: r.String,
        },
        p0ESKFXO9: {
          defaultValue: `5000`,
          title: `Counter Number`,
          type: r.String,
        },
        E8QbXXIUR: {
          defaultValue: `Lost to missed calls annually
`,
          displayTextArea: !0,
          title: `counter Description`,
          type: r.String,
        },
        tDtB8812a: { defaultValue: ``, title: `Help Heading`, type: r.String },
        wn0qBxyXT: { title: `1card Image`, type: r.ResponsiveImage },
        WWsHpvGt_: { defaultValue: ``, title: `1card Heading`, type: r.String },
        SUNERXM1E: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `1card Description`,
          type: r.String,
        },
        CxNP8UShQ: { title: `2card Image`, type: r.ResponsiveImage },
        ZJ7Ic58kr: { defaultValue: ``, title: `2card Heading`, type: r.String },
        PJYoNkQX3: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `2card Description`,
          type: r.String,
        },
        A9CMKXrky: { title: `3card Image`, type: r.ResponsiveImage },
        ZdXF7Vboa: { defaultValue: ``, title: `3card Heading`, type: r.String },
        el_c8bdnT: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `3card Description`,
          type: r.String,
        },
        xp1BjmsIj: {
          defaultValue: ``,
          title: `Testimonial Heading`,
          type: r.String,
        },
        j_boLK3L6: { title: `Testimonial image`, type: r.ResponsiveImage },
        KVX8SRel0: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Testmonial Name`,
          type: r.String,
        },
        j62j8F9HB: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Testmonial Designation`,
          type: r.String,
        },
        Da6N_zmi4: { defaultValue: ``, title: `Q1`, type: r.String },
        Rqud_Pwq9: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `ANS1`,
          type: r.String,
        },
        rzdlrtkpt: { defaultValue: ``, title: `Q2`, type: r.String },
        pKnkUXeox: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `ANS2`,
          type: r.String,
        },
        WxD0Z_PRA: { defaultValue: ``, title: `Q3`, type: r.String },
        Ul2DocLLa: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `ANS3`,
          type: r.String,
        },
        t9sAE589s: { defaultValue: ``, title: `CAT Heading`, type: r.String },
        WF350Xbnl: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `CTA Description`,
          type: r.String,
        },
        previousItemId: {
          dataIdentifier: `local-module:collection/jeKWmQbwE:default`,
          title: `Previous`,
          type: r.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/jeKWmQbwE:default`,
          title: `Next`,
          type: r.CollectionReference,
        },
      }),
      (Rt = {}),
      (zt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.get(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `ZQjSIfZHa`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t,
          ).readAsync();
          return n?.ZQjSIfZHa;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.get(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `ZQjSIfZHa`, type: `Identifier` },
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
      ($ = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerAutoSizeImages: `true`,
              framerEnumToDisplayNameUtils: `2`,
              framerData: ``,
              framerColorSyntax: `false`,
              framerSlug: `ZQjSIfZHa`,
              framerRecordIdKey: `id`,
              framerCollectionId: `jeKWmQbwE`,
              framerCollectionUtils: `1`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
export {
  Q as Y,
  $ as __FramerMetadata__,
  Rt as enumToDisplayNameFunctions,
  Bt as init_jeKWmQbwE,
  zt as utils,
};
//# sourceMappingURL=jeKWmQbwE.DLSmkpbp.mjs.map
