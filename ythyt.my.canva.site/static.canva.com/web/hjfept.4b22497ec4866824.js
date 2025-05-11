(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [21389], {

        /***/
        476834: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            self._5c0f058b2d917619b177d32cbc4c572b = self._5c0f058b2d917619b177d32cbc4c572b || {};
            (function(__c) {
                /*

                 Copyright The Closure Library Authors.
                 Copyright The Closure Compiler Authors.
                 SPDX-License-Identifier: Apache-2.0
                */
                var aa = function(a) {
                        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                        for (var b = 0; b < a.length; ++b) {
                            var c = a[b];
                            if (c && c.Math == Math) return c
                        }
                        throw Error("Cannot find global object");
                    },
                    da = function(a, b) {
                        if (b) a: {
                            var c = ba;a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c)) break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ca(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    },
                    q = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid argument" : ea(b, ...c));
                    },
                    ea = function(a, ...b) {
                        let c = 0;
                        return a.replace(/\{}/g, () => c < b.length ? b[c++] : "{}")
                    },
                    fa = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid state" : ea(b, ...c));
                    },
                    ha = function(a, b, ...c) {
                        if (a == null) throw Error(b == null ? "argument is null" : ea(b, ...c));
                        return a
                    },
                    la = function(a, b) {
                        if (!(a in ia)) {
                            const c = self.bootstrap;
                            if (!c) throw Error("Could not find bootstrap");
                            ia[a] = { ...c[a]
                            };
                            delete c[a]
                        }
                        a in ja && ja[a] != null ? a = ja[a] : (b = b(ka.required(a, ia)), a = ja[a] =
                            b);
                        return a
                    },
                    na = function() {
                        var a = window.location.search;
                        ["base", "page", "ui"].forEach(b => {
                            ma(a, `bootstrap.${b}.`)
                        })
                    },
                    ma = function(a, b) {
                        const c = new Map;
                        (new URLSearchParams(a)).forEach((d, e) => {
                            e.startsWith(b) && c.set(decodeURIComponent(e.replace(b, "").replace(/\+/g, " ")), decodeURIComponent(d.replace(/\+/g, " ")))
                        });
                        return c
                    },
                    pa = function(a) {
                        return new oa(a)
                    },
                    ra = function(a) {
                        return new qa(a)
                    },
                    sa = function(a) {
                        return a != null && a.then != null
                    },
                    va = function(a) {
                        ({
                            hf: b
                        } = {
                            hf: !1
                        });
                        var b;
                        let c = !1,
                            d;
                        return (...e) => {
                            q(e.length ===
                                0);
                            if (d == null || b && (!d.ok || c)) try {
                                c = !1, d = ta(a()), sa(d.value) && d.value.then(null, () => c = !0)
                            } catch (f) {
                                d = ua(f)
                            }
                            if (d.ok) return d.value;
                            throw d.error;
                        }
                    },
                    wa = function(a, b, c, d) {
                        return {
                            tag: c,
                            K: 2,
                            F: b,
                            default: d != null ? d : a.defaultValue,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    xa = function(a, b, c) {
                        return {
                            tag: c,
                            K: 3,
                            F: b,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    za = function(a) {
                        return (b, c, d) => {
                            const {
                                tag: e,
                                F: f,
                                W: g
                            } = t(b, c, d);
                            return {
                                K: 5,
                                tag: e,
                                F: f,
                                oa: g,
                                Kc: ya.A,
                                A: a === "object" ? "object" : a === "enum" ? "string" : a.A
                            }
                        }
                    },
                    u = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 1,
                            F: void 0,
                            ld: d,
                            value: e,
                            Be: !1,
                            A: "string"
                        }
                    },
                    x = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 2,
                            F: d,
                            oa: e,
                            A: "object"
                        }
                    },
                    z = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 3,
                            F: d,
                            oa: e,
                            A: "object"
                        }
                    },
                    B = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 4,
                            F: d,
                            oa: e,
                            A: "object"
                        }
                    },
                    C = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e,
                            qd: f
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 2,
                            F: d,
                            oa: e,
                            default: f,
                            A: "string"
                        }
                    },
                    D = function(a, b) {
                        const {
                            tag: c,
                            F: d,
                            W: e
                        } = t(a, b);
                        return {
                            tag: c,
                            K: 3,
                            F: d,
                            oa: e,
                            A: "string"
                        }
                    },
                    J = function(a) {
                        var b = {};
                        const c = va(() => {
                            const e = a();
                            var f = Object.keys(e);
                            const g = {},
                                h = {};
                            for (const k of f) switch (f = e[k], f.K) {
                                case 1:
                                    h[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    g[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                default:
                                    throw new E(f);
                            }
                            return {
                                kind: 1,
                                bd: e,
                                Eb: Aa(e, b.Cb),
                                Pe: g,
                                te: h
                            }
                        });
                        class d {
                            static ya(e) {
                                return d.ob(e, [])
                            }
                            static Ub(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ba(e) : f.oa ? f.oa.ob(e, g) : e
                            }
                            static P(e) {
                                return d.Pa(e, [])
                            }
                            static Bb(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ca(e) : f.oa ?
                                    f.oa.Pa(e, g) : e
                            }
                            static Pa(e, f) {
                                var {
                                    Eb: g
                                } = c(), h = Object.create(d.prototype);
                                for (const w of g) {
                                    g = w.config;
                                    const v = w.name;
                                    var k = w.L,
                                        l = w.Z,
                                        n = k,
                                        m = e[n];
                                    m == null && l != null && e[l] != null && (n = l, m = e[n]);
                                    switch (g.K) {
                                        case 3:
                                            if (m == null) {
                                                h[v] = void 0;
                                                break
                                            } else if (!F(m, g.A)) throw Da({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Bb(m, w, f);
                                            f.pop();
                                            break;
                                        case 2:
                                            if (m == null && g.defaultValue != null) {
                                                h[v] = g.defaultValue;
                                                break
                                            } else if (m == null || !F(m, g.A)) throw Ea({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Bb(m, w, f);
                                            f.pop();
                                            break;
                                        case 1:
                                            var r = w.Qb;
                                            n = w.Hc;
                                            if (m == null && g.Be) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (m === r) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (n != null && m === n) {
                                                h[v] = g.value;
                                                break
                                            }
                                            e = r;
                                            h = n;
                                            throw new TypeError(`Expected value ${h?`either "${e}" OR "${h}"`:`"${e}"`} for key ${Fa({L:k,Z:l})} found: ${JSON.stringify(m)} ${G(f)}`);
                                        case 4:
                                            if (m == null) {
                                                h[v] = [];
                                                break
                                            } else if (!Array.isArray(m)) throw Ga({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            r = Array(m.length);
                                            for (var p = 0; p < m.length; ++p) {
                                                if (!F(m[p], g.A)) throw Ea({
                                                    L: k,
                                                    Z: l
                                                }, m[p], g.A, [...f, n], p);
                                                f.push(`${n}[${p}]`);
                                                r[p] = d.Bb(m[p], w, f);
                                                f.pop()
                                            }
                                            h[v] =
                                                r;
                                            break;
                                        case 5:
                                            if (m == null) {
                                                h[v] = new Map;
                                                break
                                            } else if (typeof m !== "object") throw new TypeError(`Expected Map for key ${Fa({L:k,Z:l})}, found: ${H(m)} ${G(f)}`);
                                            k = g.Kc === "number";
                                            m = Object.entries(m);
                                            l = Array(m.length);
                                            for (r = 0; r < m.length; ++r) {
                                                const [A, y] = m[r];
                                                if (k) {
                                                    if (p = Number(A), isNaN(p)) throw new TypeError(`Expected number map key, found: NaN ${G([...f,n])}`);
                                                } else p = A;
                                                if (!F(y, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${p}", found: ${H(y)} ${G([...f,n])}`);
                                                f.push(`${n}["${p}"]`);
                                                const I = d.Bb(y, w, f);
                                                f.pop();
                                                l[r] = [p, I]
                                            }
                                            h[v] = new Map(l);
                                            break;
                                        default:
                                            throw new E(g);
                                    }
                                }
                                return h
                            }
                            constructor(e = {}) {
                                var {
                                    Eb: f
                                } = c();
                                for (const g of f) {
                                    f = g.config;
                                    const h = g.name,
                                        k = e[h];
                                    switch (f.K) {
                                        case 1:
                                            this[h] = f.value;
                                            break;
                                        case 2:
                                            this[h] = k == null ? f.default : k;
                                            break;
                                        case 3:
                                            this[h] = k;
                                            break;
                                        case 4:
                                            this[h] = k == null ? [] : k;
                                            break;
                                        case 5:
                                            this[h] = k == null ? new Map : k;
                                            break;
                                        default:
                                            throw new E(f);
                                    }
                                }
                            }
                        }
                        d.init = c;
                        d.ob = b.Ja ? (e, f) => {
                            throw new TypeError(`Unproducible oneof case ${G(f)}`);
                        } : (e, f) => {
                            if (e == null || typeof e !== "object") throw new TypeError(`Expected type object, found: ${H(e)} ${G(f)}`);
                            var {
                                Eb: g
                            } = c();
                            const h = {};
                            for (const m of g) {
                                g = m.config;
                                var k = m.L,
                                    l = e[m.name];
                                const r = k;
                                switch (g.K) {
                                    case 1:
                                        if (l !== g.value) throw new TypeError(`Expected value ${JSON.stringify(g.value)} for key "${k}", found: ${JSON.stringify(l)} ${G(f)}`);
                                        h[r] = m.Qb;
                                        break;
                                    case 2:
                                        if (g.defaultValue != null && l === g.defaultValue) break;
                                        f.push(r);
                                        var n = d.Ub(l, m, f);
                                        f.pop();
                                        if (!F(n, g.A)) throw Ea({
                                            L: k
                                        }, l, g.A, f);
                                        h[r] = n;
                                        break;
                                    case 3:
                                        if (l == null) break;
                                        f.push(r);
                                        n = d.Ub(l, m, f);
                                        f.pop();
                                        if (!F(n, g.A)) throw Da({
                                            L: k
                                        }, l, g.A, f);
                                        h[r] = n;
                                        break;
                                    case 4:
                                        if (l == null) break;
                                        else {
                                            if (!Array.isArray(l)) throw Ga({
                                                L: k
                                            }, l, g.A, f);
                                            if (l.length === 0) break
                                        }
                                        n = Array(l.length);
                                        for (let p = 0; p < l.length; ++p) {
                                            f.push(`${r}[${p}]`);
                                            const w = d.Ub(l[p], m, f);
                                            f.pop();
                                            if (!F(w, g.A)) throw Ea({
                                                L: k
                                            }, w, g.A, [...f, r], p);
                                            n[p] = w
                                        }
                                        h[r] = n;
                                        break;
                                    case 5:
                                        if (!(l instanceof Map)) throw new TypeError(`Expected Map for key "${k}", found: ${H(l)} ${G(f)}`);
                                        if (l.size === 0) break;
                                        k = {};
                                        for (const [p, w] of l) {
                                            if (typeof p !== g.Kc) throw new TypeError(`Expected ${g.Kc} map key, found: ${H(p)} ${G([...f,
r])}`);
                                            f.push(`${r}["${p}"]`);
                                            l = d.Ub(w, m, f);
                                            f.pop();
                                            if (!F(l, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${p}", found: ${H(l)} ${G([...f,r])}`);
                                            k[p] = l
                                        }
                                        h[r] = k;
                                        break;
                                    default:
                                        throw new E(g);
                                }
                            }
                            return h
                        };
                        return d
                    },
                    K = function(a, b) {
                        var c = {};
                        const d = va(() => {
                                var g = a();
                                const h = Object.keys(g)[0];
                                let k;
                                const l = new Map,
                                    n = new Map,
                                    m = new Map;
                                for (var r = 0; r < g[h].length; r += 2) {
                                    var p = g[h][r];
                                    const A = g[h][r + 1],
                                        y = A.init().bd[h];
                                    if (!y) throw new TypeError("Missing discriminator.");
                                    if (y.K !== 1) throw new TypeError(`Discriminator must be FieldLabel.CONSTANT, was ${y.K}.}`);
                                    var w = Ha("A?", y.F, c.Cb);
                                    const {
                                        ea: I,
                                        xa: V
                                    } = Ha(Ia(p - 1), y.ld, c.Cb);
                                    m.set(p, {
                                        sg: A,
                                        value: y.value
                                    });
                                    l.set(y.value, A);
                                    n.set(I, A);
                                    V && n.set(V, A);
                                    if (k && k.L !== w.ea) throw new TypeError(`oneOf JSON keys are not consistent. ${k.L} ${w.ea}`);
                                    if (k && k.Z !== w.xa) throw new TypeError(`oneOf secondary JSON keys are not consistent. ${k.Z} ${w.xa}`);
                                    p = y.tag;
                                    k = {
                                        L: w.ea,
                                        Z: w.xa
                                    }
                                }
                                if (k == null || p == null) throw new TypeError("OneOf has no cases.");
                                g = b();
                                w = Object.keys(g);
                                r = {};
                                for (var v of w) r[g[v].tag] = { ...g[v],
                                    name: v
                                };
                                v = c.ze != null ?
                                    c.ze() : void 0;
                                return {
                                    kind: 2,
                                    Eb: Aa(g, c.Cb),
                                    Ee: h,
                                    wf: l,
                                    Ug: p,
                                    De: k,
                                    Vf: n,
                                    Ae: v,
                                    bd: g,
                                    Pe: r,
                                    te: {},
                                    Oi: m
                                }
                            }),
                            e = (g, h) => {
                                const {
                                    Ee: k,
                                    wf: l
                                } = d(), n = g[k], m = l.get(n);
                                if (!m) throw new TypeError(`Unknown oneof deserialized case: ${JSON.stringify(n)} ${G(h)}`);
                                return m.ob(g, h)
                            },
                            f = (g, h) => {
                                const {
                                    Vf: k,
                                    De: l,
                                    Ae: n
                                } = d();
                                var m = l.Z;
                                let r = g[l.L];
                                r == null && m && (r = g[m]);
                                if (r == null && n) return n.Pa(g, h);
                                m = k.get(r);
                                if (!m) throw new TypeError(`Unknown oneof serialized case: ${JSON.stringify(r)} ${G(h)}`);
                                return m.Pa(g, h)
                            };
                        return {
                            init: d,
                            ya: g =>
                                e(g, []),
                            ob: e,
                            P: g => f(g, []),
                            Pa: f
                        }
                    },
                    L = function(a, b = 0) {
                        var c = {};
                        const d = va(() => {
                                const g = a(),
                                    h = [],
                                    k = new Map,
                                    l = new Map,
                                    n = new Map,
                                    m = new Map,
                                    r = new Set;
                                let p = 0,
                                    w = 1;
                                for (; p < g.length;) {
                                    const A = w++,
                                        y = g[p];
                                    var v = Ia(y - b);
                                    p += 1;
                                    let I;
                                    const V = g[p];
                                    typeof V === "string" && (I = V, p += 1);
                                    const {
                                        ea: Gb,
                                        xa: Hb
                                    } = Ha(v, I, c.Cb);
                                    v = g[p];
                                    typeof v === "object" && v.Ja && (r.add(A), p += 1);
                                    h.push(A);
                                    k.set(Gb, A);
                                    Hb && k.set(Hb, A);
                                    l.set(A, Gb);
                                    n.set(A, y);
                                    m.set(y, A)
                                }
                                return {
                                    values: h,
                                    Jd: l,
                                    dj: n,
                                    ri: m,
                                    Wf: k,
                                    Ja: r.size ? r : void 0
                                }
                            }),
                            e = (g, h, k) => {
                                const {
                                    Ja: l
                                } = d();
                                if (l && l.has(g)) throw new TypeError(`Unproducible enum value: ${JSON.stringify(g)} ${k?G(k):""}`);
                                h = h.get(g);
                                if (h == null) throw new TypeError(`The proto enum serializer failed to serialize value ${JSON.stringify(g)} into JSON.
It does not recognize value ${JSON.stringify(g)} as a valid member of the TypeScript enum.
${k?G(k):""}`);
                                return h
                            },
                            f = (g, h) => {
                                const k = d().Wf.get(g);
                                if (k == null) throw new TypeError(`The proto enum deserializer failed to deserialize JSON ${JSON.stringify(g)} into an enum value.
It does not recognize JSON ${JSON.stringify(g)} as a valid JSON value encoding of the enum.
${G(h)}`);
                                return k
                            };
                        return {
                            values: () => d().values,
                            ni: () => {
                                const {
                                    values: g,
                                    Ja: h
                                } = d();
                                return h == null ? g : g.filter(k => !h.has(k))
                            },
                            ya: g => e(g, d().Jd, []),
                            ob: (g, h) => e(g, d().Jd, h),
                            P: g => f(g, []),
                            Pa: f
                        }
                    },
                    Aa = function(a, b) {
                        return Object.entries(a).map(([c, d]) => {
                            let e = Ia(d.tag - 1);
                            if (d.K === 1) {
                                const {
                                    ea: k,
                                    xa: l
                                } = Ha(e, d.ld, b);
                                e = "A?";
                                var f = {
                                    Qb: k,
                                    Hc: l
                                }
                            }
                            const {
                                ea: g,
                                xa: h
                            } = Ha(e, d.F, b);
                            return {
                                config: d,
                                name: c,
                                L: g,
                                Z: h,
                                Qb: f === null || f === void 0 ? void 0 : f.Qb,
                                Hc: f === null || f === void 0 ? void 0 : f.Hc
                            }
                        })
                    },
                    Ha = function(a, b, c) {
                        if (!b) {
                            if (c !==
                                void 0) throw Error("Dual Deserialization config templated but JSON full key/value wasn't");
                            return {
                                ea: a
                            }
                        }
                        if (c === void 0) return {
                            ea: b
                        };
                        if (c === 0) return {
                            ea: a,
                            xa: b
                        };
                        if (c === 1) return {
                            ea: b,
                            xa: a
                        };
                        throw Error("function should have been exhaustive, but wasn't");
                    },
                    Ga = function(a, b, c, d) {
                        return new TypeError(`Expected repeated ${c} value for key ${Fa(a)}, found: ${H(b)} ${G(d)}`)
                    },
                    Da = function(a, b, c, d) {
                        return new TypeError(`Expected optional ${c} value for key ${Fa(a)}, found: ${H(b)} ${G(d)}`)
                    },
                    Ea = function(a, b, c,
                        d, e) {
                        return new TypeError(`Expected ${c} value${e!==void 0?` at index ${e}`:""} for key ${Fa(a)}, found: ${H(b)} ${G(d)}`)
                    },
                    Fa = function(a) {
                        const b = a.L;
                        return (a = a.Z) ? `either "${b}" OR "${a}"` : `"${b}"`
                    },
                    G = function(a) {
                        return `(path: .${a.join(".")})`
                    },
                    H = function(a) {
                        return a === null ? "null" : Array.isArray(a) ? "array" : typeof a
                    },
                    Ia = function(a) {
                        if (a < 64) return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a);
                        const b = [];
                        for (; a > 0;) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a %
                            64)), a = Math.floor(a / 64);
                        return b.reverse().join("")
                    },
                    t = function(a, b, c) {
                        return typeof a === "string" ? {
                            F: a,
                            tag: b,
                            W: c,
                            qd: void 0
                        } : {
                            tag: a,
                            W: b,
                            qd: c
                        }
                    },
                    F = function(a, b) {
                        return typeof a === b || b === "Uint8Array" && typeof a === "string"
                    },
                    Ba = function(a) {
                        a = Array.from(a, b => String.fromCodePoint(b)).join("");
                        return btoa(a)
                    },
                    Ca = function(a) {
                        return Uint8Array.from(atob(a), b => b.codePointAt(0))
                    },
                    Na = async function(a, b) {
                        const c = Ja(a.rb),
                            d = a.l.ra(b.request.mode === "navigate" ? "intercept_fetch.navigate" : "intercept_fetch.other", {
                                startTime: c
                            });
                        Ka(a.wa, b);
                        try {
                            await a.l.Tb("handle_request", d, () => {
                                const e = La(a.requestHandler, b, d);
                                e != null ? (b.request.mode === "navigate" && Ma(a.wa, b, e), b.respondWith(e)) : (d.abort(), a.l.ra("intercept_fetch.unhandled", {
                                    startTime: c
                                }).end());
                                return e
                            })
                        } finally {
                            d.end()
                        }
                    },
                    Oa = function(a, b, c) {
                        b = new Headers([
                            ["X-serviceworker-error-navigation-url", b],
                            ["X-serviceworker-error-code", JSON.stringify(c)]
                        ]);
                        try {
                            fetch(a.eb, {
                                headers: b
                            })
                        } catch (d) {}
                    },
                    Pa = function(a) {
                        return a != null
                    },
                    Ra = function(a, b, c) {
                        return b != null && typeof b === "object" &&
                            b.sampleRate != null && b instanceof Error ? Qa(b.sampleRate) : c === "error" || c === "fatal" ? a.Wc : a.Vc
                    },
                    Qa = function(a) {
                        return Math.min(Math.max(0, a), 1)
                    },
                    Sa = async function(a, b) {
                        b = [
                            ["requestUrl", b]
                        ];
                        if (a instanceof Error && /quota/i.test(a.message)) {
                            var c, d;
                            (a = await ((d = navigator.storage) === null || d === void 0 ? void 0 : (c = d.estimate) === null || c === void 0 ? void 0 : c.call(d))) && b.push(...Object.entries(a))
                        }
                        return new Map(b)
                    },
                    Ta = async function(a, b, c) {
                        const d = new M(b instanceof Error ? b.message : String(b), .01);
                        try {
                            const e = await Sa(b,
                                    c.url),
                                f = new Map([
                                    ["requestMode", c.mode],
                                    ["requestOrigin", (new URL(c.url)).origin]
                                ]);
                            a.j.error(d, {
                                extra: e,
                                tags: f
                            })
                        } catch (e) {
                            a.j.error(d)
                        }
                    },
                    Wa = function({
                        C: {
                            j: a
                        },
                        eb: b
                    }) {
                        const c = b != null ? new Ua({
                                eb: b
                            }) : null,
                            d = new Va(a);
                        return {
                            gf: (e, f) => {
                                f.then(g => {
                                    e.mode !== "navigate" || g.ok || c === null || c === void 0 || Oa(c, e.url, g.status)
                                }).catch(g => {
                                    Ta(d, g, e);
                                    e.mode !== "navigate" || c !== null && c !== void 0 && Oa(c, e.url, -1)
                                })
                            }
                        }
                    },
                    La = function(a, b, c) {
                        try {
                            const d = a.Ec.resolve(b.request);
                            if (d == null) return a.B.Sa() ? Promise.resolve(Response.error()) :
                                void 0;
                            c.setAttribute("handler_name", d.name);
                            const e = d.handle(b, c);
                            a.Je.gf(b.request, e);
                            return e.then(f => a.Sf.Hd(f)).catch(() => a.xf.cf(b.request))
                        } catch (d) {
                            a.j.error(new M(d instanceof Error ? d.message : String(d), .01))
                        }
                    },
                    Za = function() {
                        ({
                            userAgent: a
                        } = {
                            userAgent: self.navigator.userAgent
                        });
                        var a;
                        return a.includes("Firefox") ? new Xa : new Ya
                    },
                    $a = function(a) {
                        return new Promise(b => setTimeout(b, a))
                    },
                    ab = function(a) {
                        const b = Error(a);
                        return c => {
                            c instanceof Error && (c.stack == null || c.stack === "") && (c.stack = b.stack);
                            return c
                        }
                    },
                    bb = function(a) {
                        return new Promise((b, c) => {
                            const d = () => {
                                    a.removeEventListener("success", e);
                                    a.removeEventListener("error", g)
                                },
                                e = () => {
                                    d();
                                    b(a.result)
                                },
                                f = ab("idb promisify_request_events error"),
                                g = () => {
                                    d();
                                    c(f(a.error))
                                };
                            a.addEventListener("success", e);
                            a.addEventListener("error", g)
                        })
                    },
                    cb = async function(a, b) {
                        const c = a.J(a.cursor.request);
                        a.cursor.continue(b);
                        return c
                    },
                    eb = function(a) {
                        return new Promise((b, c) => {
                            const d = ab("idb_transaction error");
                            a.ca.addEventListener("complete", () => b());
                            a.ca.addEventListener("error",
                                f => {
                                    f = f.target;
                                    c(d((f === null || f === void 0 ? void 0 : f.error) || a.ca.error || Error("Unknown error")))
                                });
                            const e = new db;
                            a.ca.addEventListener("abort", () => {
                                if (a.ca.error instanceof Error) {
                                    var f = e.cause = a.ca.error;
                                    f = [`${f.name}`, `${f.message}`].filter(g => !!g).join(": ");
                                    e.message = `${e.message} (${f})`
                                }
                                c(e)
                            })
                        })
                    },
                    gb = function({
                        name: a,
                        version: b,
                        Df: c,
                        ae: d
                    }) {
                        var e = indexedDB;
                        return new Promise((f, g) => {
                            try {
                                const h = e.open(a, b);
                                let k, l = !1;
                                c && h.addEventListener("upgradeneeded", m => {
                                    l || (k = new fb(h.result), c(k, m))
                                });
                                switch (d.type) {
                                    case 0:
                                        d.Bf &&
                                            h.addEventListener("blocked", d.Bf);
                                        h.addEventListener("success", () => {
                                            f(k !== null && k !== void 0 ? k : new fb(h.result))
                                        });
                                        break;
                                    case 1:
                                        h.addEventListener("blocked", () => {
                                            l = !0;
                                            g(Error("operation blocked due to open connections"))
                                        });
                                        h.addEventListener("success", () => {
                                            const m = h.result;
                                            l ? m.close() : (m.addEventListener("versionchange", r => {
                                                (d.qe && r.newVersion == null || d.re && r.newVersion != null) && m.close()
                                            }), f(k !== null && k !== void 0 ? k : new fb(m)))
                                        });
                                        break;
                                    default:
                                        throw new E(d);
                                }
                                const n = ab("idb_database open error");
                                h.addEventListener("error",
                                    () => {
                                        g(n(h.error))
                                    })
                            } catch (h) {
                                g(h)
                            }
                        })
                    },
                    jb = function(a) {
                        if (!(a instanceof Error)) return !1;
                        if (a.name === "QuotaExceededError" || a instanceof DOMException && a.code === 22 || a instanceof hb) return !0;
                        ib == null && (ib = [/Encountered full disk while opening backing store for indexedDB.open./i, /Failed to PutOrAdd in database because not enough space for domain/i]);
                        return ib.some(b => b.test(a.message))
                    },
                    mb = function(a) {
                        if (!self.indexedDB) return !0;
                        if (!(a instanceof Error)) return !1;
                        if (a instanceof kb || a instanceof db || a instanceof DOMException && ["AbortError", "TransactionInactiveError"].includes(a.name)) return !0;
                        lb == null && (lb = [/(transaction|operation) was aborted/i, /The database connection is closing/i, /connection to indexed database server lost/i, /internal error/i, /the transaction is inactive or finished/i, /unable to open database file on disk/i, /without an in-progress transaction/i]);
                        return lb.some(b => b.test(a.message))
                    },
                    ob = async function(a, b) {
                        const c = await a.Ef(),
                            d = () => {
                                e.connection = void 0;
                                c.removeEventListener("close", d)
                            };
                        c.addEventListener("close", d, {
                            once: !0
                        });
                        const e = new nb({
                            transaction: (f, g) => c.transaction(f, g),
                            close: () => {
                                d();
                                c.close();
                                b()
                            }
                        });
                        e.yb = self.setTimeout(() => {
                            e.dispose()
                        }, 2500);
                        return e
                    },
                    pb = async function(a, {
                        G: b
                    }) {
                        var c;
                        const d = b != null ? (c = a.l) === null || c === void 0 ? void 0 : c.ta("idb_connection_manager.open_idb_connection", b) : void 0,
                            e = ob(a.ff, () => {
                                a.connection === e && (a.connection = void 0)
                            }).catch(f => {
                                a.connection = void 0;
                                d === null || d === void 0 || d.setStatus("error");
                                throw f;
                            }).finally(() => d === null || d === void 0 ? void 0 :
                                d.end());
                        return e
                    },
                    qb = async function(a, b, {
                        G: c
                    }) {
                        var d;
                        const e = c != null ? (d = a.l) === null || d === void 0 ? void 0 : d.ta("idb_connection_manager.get_connection", c) : void 0;
                        try {
                            if (a.connection == null || (b === null || b === void 0 ? 0 : b.Te)) a.connection = pb(a, {
                                G: c
                            });
                            let f = await a.connection;
                            f.kf || (a.connection = pb(a, {
                                G: c
                            }), f = await a.connection);
                            return f
                        } catch (f) {
                            throw e === null || e === void 0 || e.setStatus("error"), f;
                        } finally {
                            e === null || e === void 0 || e.end()
                        }
                    },
                    rb = async function({
                        transaction: a,
                        H: b,
                        X: c
                    }) {
                        try {
                            const e = await c(a.objectStore(b));
                            try {
                                var d;
                                a === null || a === void 0 || (d = a.commit) === null || d === void 0 || d.call(a)
                            } catch (f) {}
                            return e
                        } catch (e) {
                            try {
                                a === null || a === void 0 || a.abort()
                            } catch (f) {}
                            throw e;
                        }
                    },
                    N = async function(a, {
                        H: b,
                        mode: c,
                        X: d,
                        methodName: e
                    }) {
                        var f;
                        const g = (f = a.l) === null || f === void 0 ? void 0 : f.sf({
                            methodName: e
                        });
                        try {
                            try {
                                const k = (await qb(a.ed, {}, {
                                        G: g
                                    })).transaction(b, c),
                                    [l] = await Promise.all([rb({
                                        transaction: k.transaction,
                                        H: b,
                                        X: d
                                    }), k.Md]);
                                return l
                            } catch (k) {
                                const l = (await qb(a.ed, {
                                        Te: !0
                                    }, {
                                        G: g
                                    })).transaction(b, c),
                                    [n] = await Promise.all([rb({
                                        transaction: l.transaction,
                                        H: b,
                                        X: d
                                    }), l.Md]);
                                return n
                            }
                        } catch (k) {
                            a = k;
                            var h = a instanceof Error ? jb(a) ? new hb(a) : mb(a) ? new kb(a) : a : Error(String(a));
                            h instanceof sb || h instanceof tb || h instanceof ub || h instanceof hb || (g === null || g === void 0 || g.setAttribute("error", k instanceof Error ? k.message : String(k)), g === null || g === void 0 || g.end("error"));
                            throw h;
                        } finally {
                            g === null || g === void 0 || g.end("ok")
                        }
                    },
                    yb = function(a, b, c, d = [], e) {
                        return new vb(a, b, new wb(new xb({
                            Ef: () => gb({
                                name: a,
                                version: 1,
                                Df: f => {
                                    f = f.createObjectStore(a, {
                                        keyPath: "key"
                                    });
                                    if (d !=
                                        null && d.length > 0)
                                        for (const {
                                                name: g,
                                                Fb: h,
                                                ...k
                                            } of d) f.createIndex(g, `${"record"}.${h}`, k)
                                },
                                ae: {
                                    type: 1,
                                    qe: !0,
                                    re: !0
                                }
                            })
                        }, e), e != null ? {
                            sf: ({
                                methodName: f
                            }) => {
                                if (!(e == null || Math.random() > .01)) return e.ra(`storage_layer.idb_database_manager.execute.${f}`, {
                                    attrs: new Map([
                                        ["sample_rate_override", 1]
                                    ]),
                                    timeout: 3E5
                                })
                            }
                        } : void 0), c)
                    },
                    zb = function(a, b, c, d, e) {
                        return yb(a, b, c, d, e)
                    },
                    Ab = async function(a) {
                        if (a.Ab != null) switch (a = await a.Ab.oc(), a) {
                            case 1:
                                break;
                            case 2:
                            case 3:
                            case void 0:
                                throw new sb;
                            default:
                                throw new E(a);
                        }
                    },
                    Db = async function(a, b, c) {
                        await Ab(a);
                        return N(a.na, {
                            H: a.H,
                            mode: "readwrite",
                            X: async d => {
                                await Promise.all(b.map(async e => {
                                    var f = await d.get(e);
                                    f = f ? {
                                        value: a.P(Bb(f))
                                    } : void 0;
                                    f = c(f, e);
                                    f != null ? await d.put(Cb(e, a.Vb.ya(f.value))) : await d.delete(e)
                                }))
                            },
                            methodName: "updateMany"
                        })
                    },
                    Cb = function(a, b) {
                        return {
                            key: a,
                            record: b
                        }
                    },
                    Eb = function(a) {
                        if (typeof a !== "object" || a == null) throw Error("Result is not an object");
                        a = a.key;
                        if (typeof a !== "string") throw Error("Key is not a string");
                        return a
                    },
                    Bb = function(a) {
                        if (typeof a !==
                            "object" || a == null) throw Error("Result is not an object");
                        a = a.record;
                        if (a == null) throw Error("Value is undefined");
                        return a
                    },
                    Ib = async function(a) {
                        return Promise.race([(async () => {
                            try {
                                return await Fb().get("userAgent")
                            } catch (b) {
                                a.D(b)
                            }
                        })(), $a(1E4).then(() => {})])
                    },
                    Fb = function() {
                        return yb("config", {
                            ya: a => a,
                            P: a => a
                        })
                    },
                    Jb = async function(a, b) {
                        const c = await a.Lf.Xe();
                        if (c == null || c === a.options.Zf || (new URL(b.url)).origin !== a.options.targetOrigin) return b;
                        a = b.clone();
                        a.headers.set("X-Canva-User-Agent", c);
                        return a
                    },
                    Mb = function({
                        ka: a,
                        B: b,
                        C: {
                            j: c
                        }
                    }) {
                        return new Kb(b, a ? new Lb({
                            Xe: () => Ib(c)
                        }) : void 0, (...d) => self.fetch(...d))
                    },
                    Nb = function({
                        H: a,
                        ga: b,
                        ia: c
                    }) {
                        return `${b}-${c}-${a}`
                    },
                    Ob = function(a, b, c) {
                        return a.md.Fa(b, c, void 0, a.fd[b], a.l)
                    },
                    Qb = function(a, b) {
                        var c = Pb;
                        const d = a.Oc.ga,
                            e = a.Oc.ia,
                            f = Nb({
                                H: b,
                                ga: d,
                                ia: e
                            });
                        a.cg.put(f, {
                            ga: d,
                            ia: e
                        }).catch(g => a.j.D(g));
                        return a.md.Fa(f, c, a.se[b] ? {
                            oc: async () => a.Ab.oc(d)
                        } : void 0, a.fd[b], a.l)
                    },
                    Ub = function(a) {
                        const b = new Rb(void 0),
                            c = new Sb(void 0);
                        return new Tb(void 0, b, c, a, void 0)
                    },
                    Vb =
                    function(a) {
                        return self.navigator.locks ? self.navigator.locks.request("page_preloader_lock", a) : a()
                    },
                    Zb = async function(a) {
                        async function b(k, l, n, m = "js") {
                            n && (l = m === "js" ? l + `\n//# sourceMappingURL=${n}` : l + `\n/*# sourceMappingURL=${n}*/`);
                            if (n = k.match(/^([0-9a-fA-F]{16,}).*$/))
                                if ([, n] = n, m = (new TextEncoder).encode(l.replace(new RegExp(n, "g"), "")), await Wb(m) !== n) throw Error(`The file named ${k} doesn't match its content hash.`);
                            h.push({
                                fileName: k,
                                content: l
                            })
                        }
                        if (!Wb) {
                            var {
                                rg: c
                            } = await __webpack_require__.me(536633).then(() =>
                                ({
                                    rg: __c.Xb
                                }));
                            Wb = c
                        }
                        if (c = Yb(a)) a = c.ve;
                        const d = /(?:\n|^)(?:;\/\/|\/\*) __FILE_CONTENT_FOR__:(.*?)(?: \*\/)?\n/gm;
                        let e, f, g = "";
                        const h = [];
                        for (; e = d.exec(a);) g && await b(g, a.slice(f, e.index), c === null || c === void 0 ? void 0 : c.Cd.shift(), c === null || c === void 0 ? void 0 : c.cd), g = e[1], f = d.lastIndex;
                        g && await b(g, a.slice(f, a.endsWith("\n") ? a.length - 1 : void 0), c === null || c === void 0 ? void 0 : c.Cd.shift(), c === null || c === void 0 ? void 0 : c.cd);
                        return h
                    },
                    Yb = function(a) {
                        var b = a.endsWith("\n") ? a.length - 1 : a.length;
                        const c = a.lastIndexOf("\n",
                            b);
                        if (b = a.slice(c + 1, b).match(/\/(\/|\*)# sourceMappingURL=.*\/chunk-batch-sm\/(.*?)(?: \*\/)?$/)) {
                            var [, d, e] = b;
                            b = d === "/" ? "js" : "css";
                            return {
                                Cd: e.split("+").map(f => f.split("_")[1]),
                                cd: b,
                                ve: a.slice(0, c)
                            }
                        }
                    },
                    ac = async function(a, {
                        urls: b,
                        Rf: c
                    }) {
                        const d = [];
                        await Db(a.db, b, (e, f) => {
                            e = e === null || e === void 0 ? void 0 : e.value;
                            e == null && (e = new $b({
                                Bc: [],
                                Ra: !1,
                                Hb: void 0
                            }));
                            e.Ra === !1 && d.push(f);
                            e.Qc.add(c);
                            e.Hb = Date.now();
                            return {
                                value: e
                            }
                        });
                        return {
                            kg: d
                        }
                    },
                    bc = async function(a, b, c) {
                        await a.db.update(b, d => {
                            d = d === null || d ===
                                void 0 ? void 0 : d.value;
                            d == null && (d = new $b({
                                Bc: [],
                                Ra: !1,
                                Hb: Date.now()
                            }));
                            d.Ra = !0;
                            return {
                                value: d
                            }
                        });
                        try {
                            await (await a.mc()).put(b, c)
                        } catch (d) {
                            throw a.db.update(b, e => {
                                e = e === null || e === void 0 ? void 0 : e.value;
                                if (e != null) return e.Ra = !1, {
                                    value: e
                                }
                            }).catch(() => {}), d;
                        }
                    },
                    cc = async function(a, b, c) {
                        if (b.ok) {
                            var d = await b.clone().text(),
                                e = [];
                            try {
                                e = (await a.l.Sb("chunk_composing_route.extract_files_from_batch_content", c, async () => a.pe.Ne(d))).map(({
                                    fileName: f,
                                    content: g
                                }) => ({
                                    url: `${a.N}/${f}`,
                                    response: new Response(g, {
                                        headers: b.headers
                                    })
                                }))
                            } catch (f) {
                                a.j.D(f);
                                return
                            }
                            try {
                                await a.l.Sb("chunk_composing_route.cache_chunks", c, async () => a.ke.je(e))
                            } catch (f) {
                                a.j.D(f)
                            }
                        }
                    },
                    fc = function({
                        N: a,
                        B: b,
                        I: c,
                        C: d
                    }) {
                        const e = {
                                Ne: Zb
                            },
                            f = Ub(d.j),
                            g = new dc(f, d.l);
                        return {
                            ne: new ec(b, a, c, {
                                je: async h => {
                                    await Vb(async () => {
                                        const k = new Map(h.map(({
                                                url: n,
                                                response: m
                                            }) => [n, m])),
                                            {
                                                kg: l
                                            } = await ac(g, {
                                                urls: [...k.keys()],
                                                Rf: ""
                                            });
                                        for (const n of l) {
                                            if (!k.has(n)) throw Error(`Response for ${n} not found`);
                                            await bc(g, n, k.get(n))
                                        }
                                    })
                                }
                            }, e, d.j, d.l)
                        }
                    },
                    hc = async function(a,
                        b, c) {
                        c = await a.uf.match(b.request.url, {
                            G: c
                        });
                        return c == null ? null : a.Rb != null && b.request.headers.has("range") ? gc(a.Rb, b.request, c) : c
                    },
                    ic = function({
                        start: a,
                        end: b,
                        $d: c
                    }) {
                        q(a == null || a >= 0, "Range start and end must be within the bounds of the blob");
                        q(b == null || b <= c, "Range start and end must be within the bounds of the blob");
                        if (a != null && b != null) return {
                            start: a,
                            end: b + 1
                        };
                        if (a != null && b == null) return {
                            start: a,
                            end: c
                        };
                        if (a == null && b != null) return {
                            start: c - b,
                            end: c
                        };
                        throw Error(`Invalid range. Start: ${a}, end: ${b}`);
                    },
                    gc = async function(a, b, c) {
                        try {
                            const e = b.headers.get("range");
                            if (e == null) throw Error("Range header is required");
                            const f = await c.blob();
                            var d;
                            const [, g, h] = (d = jc.exec(e)) !== null && d !== void 0 ? d : [];
                            if (g == null && h == null) throw Error(`invalid-range-header: ${e}`);
                            const {
                                start: k,
                                end: l
                            } = {
                                start: g == null ? void 0 : Number(g),
                                end: h == null ? void 0 : Number(h)
                            }, n = ic({
                                start: k,
                                end: l,
                                $d: f.size
                            }), m = f.slice(n.start, n.end), r = m.size, p = new Response(m, {
                                status: 206,
                                headers: c.headers
                            });
                            p.headers.set(...kc);
                            p.headers.set("Content-Length",
                                r.toString());
                            p.headers.set("Content-Range", `bytes ${n.start}-${n.end-1}/${f.size}`);
                            return p
                        } catch (e) {
                            return a.j.D(e), new Response("", {
                                status: 416
                            })
                        }
                    },
                    mc = function({
                        j: a
                    }) {
                        return {
                            Rb: new lc({
                                j: a
                            })
                        }
                    },
                    pc = function({
                        B: a,
                        la: b,
                        C: {
                            j: c,
                            l: d
                        },
                        I: e
                    }) {
                        d = new nc({
                            cacheName: "media",
                            Nc(f) {
                                const {
                                    origin: g,
                                    pathname: h
                                } = new URL(f);
                                return g + h
                            }
                        }, c, d);
                        ({
                            Rb: b
                        } = b ? mc({
                            j: c
                        }) : {});
                        return {
                            Ce: new oc(a, d, b, e)
                        }
                    },
                    rc = function({
                        N: a,
                        C: {
                            j: b,
                            l: c
                        },
                        B: d,
                        I: e
                    }) {
                        b = new nc({
                            cacheName: "assets-2"
                        }, b, c);
                        return {
                            Hf: new qc({
                                N: a
                            }, d, e, b)
                        }
                    },
                    tc = function({
                        C: {
                            sb: a
                        }
                    }) {
                        a =
                            Qb(a, "homepage_bootstraps");
                        return new sc({
                            pb: !1
                        }, a)
                    },
                    uc = function({
                        C: {
                            sb: a
                        }
                    }) {
                        a = Qb(a, "editor_page_bootstraps");
                        return new sc({
                            pb: !1
                        }, a)
                    },
                    vc = function({
                        C: {
                            sb: a
                        }
                    }) {
                        a = Ob(a, "offline_fallback_bootstrap", Pb);
                        return new sc({
                            pb: !0
                        }, a)
                    },
                    wc = function({
                        qc: a
                    }) {
                        return {
                            hb: async b => {
                                const c = await a();
                                if (c != null) return tc({
                                    C: {
                                        sb: c
                                    }
                                }).hb(b)
                            }
                        }
                    },
                    xc = function({
                        qc: a
                    }) {
                        return {
                            hb: async b => {
                                const c = await a();
                                if (c != null) return uc({
                                    C: {
                                        sb: c
                                    }
                                }).hb(b)
                            }
                        }
                    },
                    zc = function(a) {
                        q(a.length > 0);
                        q(a.every(b => b.indexOf("?") < 0));
                        return new yc(["",
                            ...a.map(encodeURIComponent)
                        ].join("/"))
                    },
                    Ac = function(a, b) {
                        q(!0);
                        q(!a.Va.has("ui"));
                        if (b != null)
                            if (Array.isArray(b)) {
                                b = b.filter(Pa);
                                if (b.length === 0) return a;
                                q(b.every(c => typeof c === "number" || typeof c === "string"));
                                a.Va.set("ui", b)
                            } else if (typeof b === "boolean") a.Va.set("ui", b || String(b));
                        else if (typeof b === "number" || typeof b === "string") a.Va.set("ui", String(b));
                        else throw Error(`invalid param value type: ${typeof b}`);
                        return a
                    },
                    Bc = function(a) {
                        if (a.Va.size === 0) return a.path;
                        const b = Array.from(a.Va.entries()).map(([c,
                            d
                        ]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    Cc = function(a) {
                        a = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(a);
                        if (!(a == null || a.length < 2)) {
                            var b = a[2];
                            (new Set(["edit", "remix", "view", "watch"])).has(a[2]) && (b = void 0);
                            return {
                                id: a[1],
                                zh: b
                            }
                        }
                    },
                    Dc = function({
                        T: a,
                        pf: b
                    }) {
                        return a.app === b.Ib.app && a.locale === b.locale
                    },
                    Ec = function({
                        app: a,
                        commit: b
                    }) {
                        return `${a}-${b}`
                    },
                    Fc = async function(a, b, c, d, e) {
                        b = Ec({
                            app: b,
                            commit: c
                        });
                        let f;
                        try {
                            f = await a.db.get(b)
                        } catch (g) {
                            if (g instanceof tb) {
                                a.db.delete(b);
                                return
                            }
                            throw g;
                        }
                        if (a = f != null) a = f, a.variant !== d ? a = !1 : (d = Date.now() / 1E3, a = (e === null || e === void 0 || !e.pb) && a.timestamp + 1209600 < d ? !1 : !0);
                        if (a) return f
                    },
                    Hc = async function(a, b, c) {
                        var d = ha(a.be.get(b));
                        b = a.If.normalizeUrl({
                            url: c,
                            app: b
                        });
                        d = await d.hb(b);
                        if (d != null && (b = Gc.P(JSON.parse(d.Aa)), a = await Fc(a.qf, d.app, b.commit, b.ie, {
                                    pb: c.href === a.options.V
                                }),
                                a != null && Dc({
                                    T: d,
                                    pf: a
                                }))) return {
                            Aa: b,
                            mb: d,
                            Ib: a.Ib,
                            Ic: a.Ic
                        }
                    },
                    Oc = function({
                        V: a,
                        C: {
                            l: b,
                            j: c
                        }
                    }) {
                        const d = Ub(c);
                        var e = async () => {
                                var h = await Ob(d, "active_user_brand_hint_for_service_worker_to_serve_pages", Ic).get("active");
                                if (h != null) {
                                    const k = new Rb(void 0),
                                        l = new Sb(void 0);
                                    h = new Jc(h, k, l, c, void 0)
                                } else h = void 0;
                                return h
                            },
                            f = wc({
                                qc: e
                            });
                        e = xc({
                            qc: e
                        });
                        var g = vc({
                            C: {
                                sb: d
                            }
                        });
                        f = new Map([
                            ["home", f],
                            ["editor", e],
                            ["offline_fallback", g]
                        ]);
                        e = new Kc;
                        g = Ob(d, "manifests", Lc);
                        return new Mc({
                            V: a
                        }, f, e, new Nc(g, b))
                    },
                    Pc = function(a) {
                        let b;
                        try {
                            b = a.crypto.randomUUID()
                        } catch (c) {
                            b = a.crypto.getRandomValues(new Uint8Array(16)).reduce((d, e) => d + String.fromCharCode(e), "")
                        }
                        return btoa(b)
                    },
                    Qc = function(a) {
                        var b;
                        var c = '<!DOCTYPE html>\n<html dir="' + ((b = a.direction) == null ? "" : b) + '" lang="' + ((b = a.locale) == null ? "" : b) + '">\n  <head>\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n    <meta name="referrer" content="origin">\n    ';
                        a.viewport && (c += '\n      <meta name="viewport" content="' + ((b = a.viewport) == null ? "" : b) + '">\n    ');
                        c += '\n    <link rel="shortcut icon" href="/favicon.ico">\n    <title>' + ((b = a.title) == null ? "" : b) + '</title>\n    <script nonce="' + ((b = a.nonce) == null ? "" : b) + '">\n      window["bootstrap"] = {\n        "ui": JSON.parse(' + ((b = a.Lc) == null ? "" : b) + '),\n        "base": JSON.parse(' + ((b = a.Aa) == null ? "" : b) + '),\n        "page": JSON.parse(' + ((b = a.mb) == null ? "" : b) + '),\n      };\n      window["flags"] = JSON.parse(' + ((b = a.jc) == null ? "" : b) + ');\n      window["__canva_public_path__"] = "' + ((b = a.Of) == null ? "" : b) + '";\n      window["cmsg"] = {\n        locale: "' +
                            ((b = a.locale) == null ? "" : b) + '",\n        strings: {},\n      };\n    \x3c/script>\n    ';
                        for (const d of a.links) c += '\n      <link href="' + ((b = d.href) == null ? "" : b) + '" rel="' + ((b = d.rel) == null ? "" : b) + '" ' + ((b = d.nonce ? `nonce="${d.nonce}"` : "") == null ? "" : b) + ">\n    ";
                        c += '\n  </head>\n  <body>\n    <div id="root">' + ((b = a.zc) == null ? "" : b) + "</div>\n    ";
                        for (const d of a.scripts) c += '\n      <script src="' + ((b = d.src) == null ? "" : b) + '" nonce="' + ((b = d.nonce) == null ? "" : b) + '" ' + ((b = d.defer ? "defer" : "") == null ? "" : b) + ">\x3c/script>\n    ";
                        return c + "\n  </body>\n</html>\n"
                    },
                    Rc = function(a, b) {
                        const c = [];
                        var d = a.Yc;
                        d.config.O === 3 && /android/i.test(d.config.userAgent) ? c.push(...b.zd.Ld.Vd.Ea) : (a = a.Yc, a.config.O === 3 && /ipod|iphone|ipad/i.test(a.config.userAgent) && c.push(...b.zd.Ld.jf.Ea));
                        c.push(...b.Sc.Ea);
                        return c
                    },
                    Sc = function(a, b, c, d, e) {
                        const f = b.locale,
                            g = b.direction,
                            h = b.title,
                            k = b.Lc,
                            l = b.Aa,
                            n = b.mb;
                        b = b.jc;
                        const m = c.viewport,
                            r = c.zc;
                        var p = c.Sc;
                        const w = c.mf.get(f) || {
                            $a: [],
                            Ea: []
                        };
                        p = [...c.links.filter(({
                            rel: v
                        }) => v !== "preload" && v !== "prefetch").map(v =>
                            ({
                                href: /^(https?:)?\/\//.test(v.href) ? v.href : `${d}/${v.href}`,
                                rel: v.rel,
                                nonce: e
                            })), ...w.$a.map(v => ({
                            href: `${d}/${v}`,
                            rel: "stylesheet"
                        })), ...p.$a.map(v => ({
                            href: `${d}/${v.filename}`,
                            rel: "stylesheet"
                        }))];
                        a = [...w.Ea.map(v => ({
                            src: `${d}/${v}`,
                            nonce: e
                        })), ...Rc(a, c).map(v => ({
                            src: `${d}/${v.filename}`,
                            nonce: e,
                            defer: !0
                        }))];
                        return Qc({
                            locale: f,
                            direction: g === 1 ? "ltr" : "rtl",
                            title: h,
                            viewport: m,
                            nonce: e,
                            Of: d ? `${d}/` : "",
                            Lc: JSON.stringify(k),
                            Aa: JSON.stringify(l),
                            mb: JSON.stringify(n),
                            jc: JSON.stringify(b || "{}"),
                            links: p,
                            zc: r !== null && r !== void 0 ? r : "",
                            scripts: a
                        })
                    },
                    Tc = function(a, b) {
                        const c = b.pathname;
                        if (c[0] !== "/") return a.fallback;
                        for (const d of a.rules) {
                            const e = d.match(c);
                            if (e != null) return {
                                page: d.page,
                                ib: f => e.ib(b, f)
                            }
                        }
                        return a.fallback
                    },
                    Uc = async function(a, b, {
                        G: c
                    }) {
                        c = a.l.ta("service_worker.page_assembler.render_page", c);
                        try {
                            const k = Tc(a.Uf, b);
                            let l = await Hc(a.sd, k.page, k.ib(0));
                            l == null && (l = await Hc(a.sd, "offline_fallback", new URL(a.config.V)));
                            if (l != null) {
                                var d = { ...l.mb
                                };
                                const n = Gc.ya({ ...l.Aa,
                                    gd: 2,
                                    timestamp: void 0
                                });
                                var e = JSON.stringify(n);
                                b = { ...d,
                                    Aa: e
                                };
                                var f = Pc(a.zf),
                                    g = Sc(a.Af, b, l.Ib, l.Ic, f),
                                    h = a.ue.createPolicy({
                                        page: k.page,
                                        nonce: f
                                    });
                                return new Response(g, {
                                    headers: {
                                        "content-type": "text/html;charset=utf-8",
                                        "content-security-policy-report-only": h,
                                        "X-Offline-Response": "true"
                                    }
                                })
                            }
                        } catch (k) {
                            c.setStatus("error"), a.j.D(k)
                        } finally {
                            c.end()
                        }
                    },
                    Yc = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        wc: d,
                        C: {
                            j: e,
                            l: f
                        }
                    }) {
                        b = new Vc(new Wc({
                            O: c,
                            userAgent: b
                        }));
                        c = Oc({
                            V: a,
                            C: {
                                l: f,
                                j: e
                            }
                        });
                        return new Xc({
                            V: a
                        }, d, e, c, b, f)
                    },
                    $c = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        B: d,
                        C: {
                            j: e,
                            l: f
                        },
                        wc: g,
                        I: h,
                        qa: k
                    }) {
                        a = Yc({
                            V: a,
                            userAgent: b,
                            O: c,
                            wc: g,
                            C: {
                                j: e,
                                l: f
                            }
                        });
                        return {
                            Jf: new Zc({
                                qa: k
                            }, d, h, a)
                        }
                    },
                    ad = function(a) {
                        a = a.slice(1).split("/");
                        a[a.length - 1] === "" && a.pop();
                        return a
                    },
                    bd = function(a, b, c) {
                        for (const d of b) {
                            b = a.root;
                            for (const e of ad(d)) b.children.has(e) || b.children.set(e, {
                                children: new Map,
                                config: void 0
                            }), b = b.children.get(e);
                            fa(b.config == null, "Path already exists");
                            b.config = c
                        }
                    },
                    cd = function(a, b) {
                        q(b.startsWith("/"), "Path must start with a slash");
                        a = a.root;
                        const c = b.split("/").slice(1);
                        c[c.length - 1] === "" && c.pop();
                        for (const e of ad(b)) {
                            if (e === "") return;
                            var d;
                            b = (d = a.children.get(e)) !== null && d !== void 0 ? d : a.children.get("*");
                            if (b == null) return;
                            a = b
                        }
                        return a.config
                    },
                    gd = function() {
                        const a = new dd;
                        bd(a, ed, {});
                        bd(a, fd, {
                            lf: "/settings"
                        });
                        return {
                            page: "home",
                            match: b => {
                                const c = cd(a, b);
                                if (c != null) return {
                                    ib: (d, e) => {
                                        switch (e) {
                                            case 0:
                                                var f;
                                                d = (f = c.Hh) !== null && f !== void 0 ? f : "/";
                                                return new URL(d, self.location.origin);
                                            case 1:
                                                var g;
                                                f = (g = c.lf) !== null && g !== void 0 ? g : d;
                                                return new URL(f, self.location.origin);
                                            default:
                                                throw new E(e);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    hd = function() {
                        return {
                            page: "editor",
                            match: a => Cc(a) != null ? {
                                ib: b => b
                            } : void 0
                        }
                    },
                    id = function() {
                        return {
                            page: "offline_fallback",
                            ib: () => new URL("/_offline-fallback", self.location.origin)
                        }
                    },
                    kd = function({
                        C: {
                            j: a
                        },
                        B: b,
                        I: c
                    }) {
                        a = new nc({
                            cacheName: "web_workers"
                        }, a);
                        return {
                            pg: new jd(b, c, a)
                        }
                    },
                    pd = function({
                        V: a,
                        N: b,
                        userAgent: c,
                        O: d,
                        B: e,
                        C: {
                            j: f,
                            l: g
                        },
                        bb: h,
                        ka: k,
                        qa: l,
                        la: n
                    }) {
                        k = Mb({
                            ka: k,
                            B: e,
                            C: {
                                j: f
                            }
                        });
                        const m = gd();
                        ({
                            Jf: a
                        } = $c({
                            V: a,
                            userAgent: c,
                            O: d,
                            B: e,
                            C: {
                                j: f,
                                l: g
                            },
                            wc: new ld([m, hd()]),
                            I: k,
                            qa: l
                        }));
                        ({
                                pg: c
                            } =
                            kd({
                                B: e,
                                C: {
                                    j: f,
                                    l: g
                                },
                                I: k
                            }));
                        ({
                            Hf: d
                        } = rc({
                            N: b,
                            C: {
                                j: f,
                                l: g
                            },
                            B: e,
                            I: k
                        }));
                        ({
                            Ce: n
                        } = pc({
                            B: e,
                            la: n,
                            C: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            ne: b
                        } = fc({
                            B: e,
                            I: k,
                            N: b,
                            C: {
                                j: f,
                                l: g
                            }
                        }));
                        return {
                            Ec: new md([new nd(k), new od(h), a, c, d, n, b])
                        }
                    },
                    rd = function({
                        jb: a,
                        V: b,
                        N: c,
                        userAgent: d,
                        O: e,
                        B: f,
                        C: {
                            j: g,
                            l: h
                        },
                        bb: k,
                        ka: l,
                        la: n,
                        qa: m,
                        uc: r = fetch
                    }) {
                        ({
                            Ec: b
                        } = pd({
                            V: b,
                            N: c,
                            userAgent: d,
                            O: e,
                            B: f,
                            C: {
                                j: g,
                                l: h
                            },
                            ka: l,
                            la: n,
                            bb: k,
                            qa: m
                        }));
                        a = Wa({
                            C: {
                                j: g
                            },
                            eb: a
                        });
                        c = Za();
                        return new qd(b, f, g, a, {
                                cf: async p => {
                                    if (f.Sa()) return Response.error();
                                    try {
                                        return await r(p, {
                                            redirect: "follow"
                                        })
                                    } catch (w) {
                                        return Response.error()
                                    }
                                }
                            },
                            c)
                    },
                    td = function({
                        serviceWorker: a,
                        C: {
                            j: b,
                            Ia: c,
                            rb: d,
                            wa: e
                        },
                        O: f,
                        B: g,
                        N: h,
                        jb: k,
                        xe: l,
                        qa: n,
                        ka: m,
                        la: r
                    }) {
                        c = c.Qa("service_worker.fetch_interceptor");
                        b = rd({
                            jb: k,
                            V: `${a.location.origin}/_offline-fallback`,
                            N: h,
                            userAgent: self.navigator.userAgent,
                            O: f,
                            B: g,
                            C: {
                                j: b,
                                l: c
                            },
                            bb: {
                                Ue: l
                            },
                            qa: n,
                            ka: m,
                            la: r
                        });
                        const p = new sd(b, d, e, c);
                        a.addEventListener("fetch", w => Na(p, w))
                    },
                    Ad = function(a, b) {
                        const c = a.l.ra("service_worker.handle_message");
                        try {
                            const d = a.l.Tb("process_message", c, e => {
                                try {
                                    const f = ud.P(b.data),
                                        g = f.message,
                                        h = f.requestId;
                                    e.setAttribute("message_type", f.message);
                                    switch (g) {
                                        case "GET_SW_RELEASE":
                                            return new vd({
                                                requestId: h,
                                                release: a.options.release
                                            });
                                        case "OVERRIDE_NETWORK_STRATEGY":
                                            return a.B.Gb = f.Gb, new wd({
                                                requestId: h,
                                                Sa: a.B.Sa()
                                            });
                                        case "SKIP_WAITING":
                                            return a.serviceWorker.skipWaiting(), new xd({
                                                requestId: h
                                            });
                                        default:
                                            throw new E(g);
                                    }
                                } catch (f) {
                                    return e.setStatus("error"), new yd({
                                        Qf: JSON.stringify(b.data)
                                    })
                                }
                            });
                            a.l.Tb("post_response", c, () => {
                                var e;
                                (e = b.source) === null || e === void 0 || e.postMessage(zd.ya(d))
                            })
                        } finally {
                            c.end()
                        }
                    },
                    Cd = function({
                        serviceWorker: a,
                        B: b,
                        release: c,
                        C: {
                            Ia: d
                        }
                    }) {
                        d = d.Qa("service_worker.message_handler");
                        const e = new Bd({
                            release: c
                        }, a, b, d);
                        a.addEventListener("message", f => Ad(e, f))
                    },
                    Dd = function(a, b, c, d) {
                        d = [c instanceof Error ? c : null, a.context, d].filter(Pa);
                        Object.keys(a.tags).length > 0 && d.push(a.tags);
                        return [`[ConsoleErrorClient][${a.name}][${b}]: ${c}`, ...d]
                    },
                    Fd = function() {
                        const a = Ed();
                        let b = 0;
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
                            c = Number(c);
                            return (c ^ a[b++] & 15 >> c / 4).toString(16)
                        })
                    },
                    Ed = function() {
                        if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues === "function") return window.crypto.getRandomValues(new Uint8Array(31));
                        const a = Math.random;
                        return Array.from({
                            length: 31
                        }, () => Math.floor(a() * 255))
                    },
                    Gd = function(a) {
                        Object.keys(a).forEach(b => a[b] == null && delete a[b])
                    },
                    Id = function(a) {
                        if (a instanceof Hd) {
                            const b = [];
                            a.values.forEach(c => {
                                b.push(Id(c))
                            });
                            return b
                        }
                        if (a instanceof Jd) {
                            const b = {};
                            a.values.forEach(c => {
                                b[c.name] = Id(c.value)
                            });
                            return b
                        }
                        return a.value
                    },
                    Kd = function(a, b) {
                        let c = b;
                        Object.entries(a.Ad).forEach(([d, e]) => {
                            c = c.split(e).join(d)
                        });
                        return c
                    },
                    Ld = function(a, b = {}) {
                        Object.keys(b).forEach(c => {
                            const d = b[c];
                            typeof d === "string" && (b[c] = Kd(a, d))
                        })
                    },
                    Md = function(a, b) {
                        var c;
                        return { ...b,
                            frames: b === null || b === void 0 ? void 0 : (c = b.frames) === null || c === void 0 ? void 0 : c.map(d => {
                                for (const [e, f] of Object.entries(a.Ad)) {
                                    const g = h => h === null || h === void 0 ? void 0 : h.replace(f, e);
                                    d.module = g(d.module);
                                    d.abs_path = g(d.abs_path);
                                    d.filename = g(d.filename)
                                }
                                return d
                            })
                        }
                    },
                    Nd = function(a,
                        b) {
                        var c, d;
                        b.exception && b.exception.values && (b.exception = { ...b.exception,
                            values: (d = b.exception) === null || d === void 0 ? void 0 : (c = d.values) === null || c === void 0 ? void 0 : c.map(e => ({ ...e,
                                ...(e.stacktrace && {
                                    stacktrace: Md(a, e.stacktrace)
                                })
                            }))
                        })
                    },
                    Od = function(a, b) {
                        var c = b.request;
                        c != null && c.url != null && (c.url = Kd(a, c.url));
                        Nd(a, b);
                        b.tags != null && Ld(a, b.tags)
                    },
                    Pd = function(a, b) {
                        const c = [];
                        b.message && c.push(b.message);
                        if (b.exception) {
                            const {
                                type: d = "",
                                value: e = ""
                            } = b.exception.values && b.exception.values[0] || {};
                            d !== "Error" &&
                                c.push(d, e)
                        }
                        return c.some(d => a.Sd.some(e => Object.prototype.toString.call(e) === "[object RegExp]" ? e.test(d) : typeof e === "string" ? d.indexOf(e) !== -1 : !1))
                    },
                    Rd = function(a, b) {
                        var c, d;
                        if ((a === null || a === void 0 ? void 0 : a.message) !== (b === null || b === void 0 ? void 0 : b.message)) return !1;
                        a = (c = a.exception) === null || c === void 0 ? void 0 : c.values;
                        b = (d = b.exception) === null || d === void 0 ? void 0 : d.values;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (d = 0; d < a.length; d++)
                            if (a[d].value !== b[d].value || a[d].type !== b[d].type || !Qd(a[d].stacktrace,
                                    b[d].stacktrace)) return !1;
                        return !0
                    },
                    Qd = function(a, b) {
                        a = a === null || a === void 0 ? void 0 : a.frames;
                        b = b === null || b === void 0 ? void 0 : b.frames;
                        if (a == null && b == null) return !0;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (a[c].filename !== b[c].filename || a[c].colno !== b[c].colno || a[c].lineno !== b[c].lineno) return !1;
                        return !0
                    },
                    Td = function(a, b) {
                        const c = a.history.find(f => Rd(f.event, b));
                        if (c == null) return !1;
                        const d = Sd.now(),
                            e = c.timestamp;
                        return Rd(b, c.event) && d - e < a.hg
                    },
                    Wd = function() {
                        return new Ud({
                            Nh: a =>
                                Vd({
                                    frame: a,
                                    $f: "/dist/renderer/"
                                })
                        })
                    },
                    Vd = function({
                        frame: a,
                        $f: b
                    }) {
                        if (a.filename == null) return a;
                        const c = a.filename.replace(/\\/g, "/").split(b);
                        if (c.length <= 1) return a;
                        a.filename = "app://" + b + c.pop();
                        return a
                    },
                    Yd = function(a, b) {
                        var c;
                        b === null || b === void 0 || (c = b.breadcrumbs) === null || c === void 0 || c.map((d, e) => {
                            if (b === null || b === void 0 ? 0 : b.breadcrumbs) {
                                var f = b.breadcrumbs;
                                if (d.type === "http") {
                                    var g;
                                    d.data = d.data || {};
                                    var h;
                                    d.data.url = Xd(a, (h = (g = d.data) === null || g === void 0 ? void 0 : g.url) !== null && h !== void 0 ? h : "")
                                }
                                f[e] =
                                    d
                            }
                        });
                        b.request && (b.request = a.Gc(b.request));
                        return b
                    },
                    Xd = function(a, b) {
                        try {
                            const c = new URL(b, `${a.location.protocol}//${a.location.host}`);
                            if (!["http:", "https:"].includes(c.protocol)) return "";
                            a.Td.some(d => c.hostname.includes(d)) && c.pathname.startsWith("/_ajax") || (c.pathname = "");
                            c.search = "";
                            return b.includes(c.host) ? c.toString() : c.pathname || "/"
                        } catch (c) {
                            return ""
                        }
                    },
                    $d = function(a) {
                        const b = [];
                        for (const c of Zd) {
                            const d = c(a);
                            d && b.push(d)
                        }
                        return b
                    },
                    be = function(a) {
                        return (b, c) => {
                            b.request && (b.request = a.Gc(b.request));
                            if (ae(a, b)) return null;
                            if (a.od) {
                                b.tags == null && (b.tags = {});
                                a: switch (a.od.status) {
                                    case 2:
                                        var d = "OFFLINE";
                                        break a;
                                    case 1:
                                        d = "ONLINE";
                                        break a;
                                    default:
                                        d = "UNKNOWN"
                                }
                                b.tags.offlineStatus = d
                            }
                            try {
                                Od(a.ye, b)
                            } catch (e) {
                                a.D(e)
                            }
                            return a.Zd.reduce((e, f) => f(e, c), b)
                        }
                    },
                    me = function(a, b, c) {
                        var d, e, f, g = (d = a.R) === null || d === void 0 ? void 0 : d.getCurrentHub().getClient();
                        d = g && g.getOptions() || {};
                        var h;
                        g = (h = b.sampleRate) !== null && h !== void 0 ? h : 1;
                        var k;
                        h = [new ce, new de, new ee, new fe(2E3), new ge(g, (k = b.yf) !== null && k !== void 0 ? k : g), new he,
                            new ie, new je(a.allowUrls, location), Wd()
                        ];
                        a.T.flags && a.T.flags.He && h.push(new ke(le));
                        a.setTags(a.T.tags);
                        a.setExtras(a.T.extra);
                        if (k = typeof navigator !== "undefined" ? navigator.userAgent : void 0) k = $d(k), a.setTags(k);
                        b = b.Kf;
                        b !== 1 && a.setTag("webx", String(b === 3));
                        a.setTag("iframe", String(typeof window !== "undefined" && window.self !== window.top));
                        c.td && a.setTag("webview", c.td);
                        d.beforeSend = be(a);
                        c = { ...d,
                            maxValueLength: 1024,
                            dsn: d.dsn || a.T.dsn,
                            environment: d.environment || a.T.environment,
                            release: d.release || a.T.release,
                            tracesSampleRate: 0,
                            sampleRate: 1,
                            integrations: h,
                            allowUrls: a.allowUrls,
                            autoSessionTracking: !1,
                            ignoreErrors: ["variable: _AutofillCallbackHandler", "_AutofillCallbackHandler is not defined", "Non-Error promise rejection captured with value: Object Not Found Matching Id"]
                        };
                        Gd(c);
                        (e = a.R) === null || e === void 0 || e.init(c);
                        (f = a.R) === null || f === void 0 || f.configureScope(l => {
                            l.setUser({
                                id: Fd()
                            });
                            l.setExtra("isAnonymousUser", !0);
                            l.setTag("initLocation", "error_client")
                        })
                    },
                    ae = function(a, b) {
                        const c = b.exception && b.exception.values &&
                            b.exception.values.length > 0 && b.exception.values[0],
                            d = c && c.stacktrace || void 0,
                            e = d && d.frames && d.frames[0] && d.frames[0].filename,
                            f = b.message || c && c.value || void 0;
                        return a.Qe.some(g => g({
                            message: f,
                            filename: e,
                            location,
                            tags: b.tags,
                            event: b
                        }))
                    },
                    ne = function(a, b) {
                        var c, d;
                        b instanceof Error ? (c = a.R) === null || c === void 0 || c.captureException(b) : (d = a.R) === null || d === void 0 || d.captureMessage(b)
                    },
                    oe = function(a, b, c) {
                        if (b == null) return Error((c ? c + " " : "") + "[null error thrown]");
                        if (typeof b === "object") {
                            const e = b instanceof
                            M ? new M(b.message, b.sampleRate) : Error(b.message);
                            b.stack && (e.stack = b.stack);
                            b.cause && (e.cause = b.cause);
                            if (c) {
                                var d;
                                if ((d = b.message) === null || d === void 0 ? 0 : d.startsWith(c)) return a.setTag("prefixCollision", "true"), b;
                                a = c + " " + (e.message || "[no message on error]");
                                try {
                                    e.message = a
                                } catch (f) {
                                    if (f instanceof TypeError) return Error(a);
                                    throw f;
                                }
                            }
                            return e
                        }
                        return b.toString()
                    },
                    pe = function(a, b, c, d) {
                        a.R == null ? (console.error(c), d && console.log("errorParams", d)) : a.R && a.R.withScope(e => {
                            typeof d === "string" && (d = {
                                ua: d
                            });
                            c = oe(e, c, typeof d === "string" ? d : d === null || d === void 0 ? void 0 : d.ua);
                            d != null && (d.fingerprint && e.setFingerprint(d.fingerprint), d.lg && e.setTag("userFlow", d.lg), d.extra && d.extra.forEach((f, g) => e.setExtra(g, f)), d.tags && d.tags.forEach((f, g) => e.setTag(g, f)));
                            a.Uc.length > 0 && e.setTag("component", a.Uc.join("."));
                            e.setLevel(b);
                            ne(a, c)
                        })
                    },
                    qe = function(a) {
                        return a.fa === "span" && a.attrs.get("is_uop") === !0
                    },
                    se = function(a, b) {
                        re(a, b, () => {
                            const c = a.xb.get(b.context.spanId) || [];
                            for (const d of c) se(a, d)
                        })
                    },
                    re = function(a,
                        b, c) {
                        var d, e = (d = b.attrs.get("parent_relative_start_ms")) !== null && d !== void 0 ? d : b.duration;
                        e = typeof e === "number" ? ` - ${Math.round(e)}ms` : "";
                        var f = (d = b.parentSpanId != null) ? `${b.fa==="event"?"[ChildEvent]":"[ChildSpan]"}: ` : "[OpenTelemetryClient]: ";
                        const g = qe(b) ? "User Operation - " : "";
                        e = `${f}${g}${b.name}${e}`;
                        d && !a.rc.has(b.parentSpanId) ? console.group(e) : console.groupCollapsed(e);
                        console.groupCollapsed("Attributes");
                        d = {
                            name: b.name,
                            Ii: `${b.duration}ms`,
                            ...Object.fromEntries(b.attrs.entries())
                        };
                        e = {};
                        for (const h of Object.keys(d)) f = d[h], e[h] = f instanceof Object ? JSON.stringify(f) : f;
                        console.table(e);
                        console.groupEnd();
                        c === null || c === void 0 || c();
                        console.groupEnd();
                        a.rc.add(b.context.spanId)
                    },
                    O = function(a) {
                        return [
                            ["name", a.name],
                            ["status", a.status],
                            ["instrumentationScope", a.U],
                            ["startTime", a.startTime],
                            ["endTime", a.endTime],
                            ["duration", a.duration],
                            ["parentSpanId", a.parentSpanId]
                        ]
                    },
                    te = function(a) {
                        switch (a) {
                            case "unset":
                                return 0;
                            case "ok":
                                return 1;
                            case "error":
                                return 2;
                            default:
                                return 0
                        }
                    },
                    ve = function(a) {
                        const b = [];
                        for (const [c, d] of a.entries()) d != null && b.push({
                            key: c,
                            value: ue(d)
                        });
                        return b
                    },
                    ue = function(a) {
                        const b = typeof a;
                        return b === "string" ? {
                            stringValue: a
                        } : b === "number" ? Number.isInteger(a) ? {
                            intValue: a
                        } : {
                            doubleValue: a
                        } : b === "boolean" ? {
                            boolValue: a
                        } : a instanceof Uint8Array ? {
                            bytesValue: a
                        } : Array.isArray(a) ? {
                            arrayValue: {
                                values: a.map(ue)
                            }
                        } : b === "object" && a != null ? {
                            kvlistValue: {
                                values: Object.entries(a).map(([c, d]) => ({
                                    key: c,
                                    value: ue(d)
                                }))
                            }
                        } : {}
                    },
                    we = function(a) {
                        const b = new Map;
                        for (const c of a) a = b.get(c.U), a || (a = [], b.set(c.U,
                            a)), a.push(c);
                        return b
                    },
                    xe = function(a, b) {
                        b = b(a) / 1E3;
                        a = Math.trunc(b);
                        b = Number((b - a).toFixed(9)) * 1E9;
                        let [c, d] = [a, b];
                        d > 1E9 && (d -= 1E9, c += 1);
                        return c * 1E9 + d
                    },
                    ye = function(a, b) {
                        if (a.length === 0) return {
                            resourceSpans: []
                        };
                        const c = [];
                        a = we(a);
                        for (const [d, e] of a)
                            if (e.length > 0) {
                                a = {
                                    attributes: ve(e[0].da),
                                    droppedAttributesCount: 0
                                };
                                const f = [{
                                    scope: {
                                        name: d
                                    },
                                    spans: e.map(g => {
                                        var h = g.context;
                                        const k = xe(g.startTime, b);
                                        var l;
                                        const n = xe((l = g.endTime) !== null && l !== void 0 ? l : g.startTime, b);
                                        var m = g.attrs;
                                        g.fa === "event" && (l = g.attrs.get("parent_start"),
                                            l != null && typeof l === "number" && (m = new Map([...m.entries(), ["parent_start", xe(l, b)]])));
                                        l = h.traceId;
                                        h = h.spanId;
                                        var r = g.parentSpanId,
                                            p = g.name;
                                        m = ve(m);
                                        var w = {
                                            code: te(g.status)
                                        };
                                        g = g.links;
                                        const v = [];
                                        for (const A of g) v.push({
                                            spanId: A.ig.spanId,
                                            traceId: A.ig.traceId,
                                            droppedAttributesCount: 0
                                        });
                                        return {
                                            traceId: l,
                                            spanId: h,
                                            parentSpanId: r,
                                            name: p,
                                            kind: 3,
                                            startTimeUnixNano: k,
                                            endTimeUnixNano: n,
                                            attributes: m,
                                            droppedAttributesCount: 0,
                                            events: [],
                                            droppedEventsCount: 0,
                                            status: w,
                                            links: v,
                                            droppedLinksCount: 0
                                        }
                                    })
                                }];
                                c.push({
                                    resource: a,
                                    scopeSpans: f
                                })
                            }
                        return {
                            resourceSpans: c
                        }
                    },
                    ze = function(a, b) {
                        a.ud.unshift(b);
                        return a
                    },
                    Be = function(a) {
                        try {
                            a.Ta.process(a.buffer)
                        } catch (b) {
                            a.j.D(b, {
                                ua: `Failed to export the span buffer from ${Ae.name}`,
                                extra: new Map([
                                    ["spans", JSON.stringify(a.buffer.map(O), void 0, 2)],
                                    ["maxBatchSize", a.config.Jb],
                                    ["maxBatchingTimeMs", a.config.Kb]
                                ])
                            })
                        }
                        a.buffer = [];
                        a.Xa != null && clearTimeout(a.Xa);
                        a.Xa = void 0
                    },
                    Ce = function(a, b, c, d = !1) {
                        b.aborted || d || !b.va() || (c.push(b), b.Ma.forEach(e => c.push(e)));
                        for (const e of b.Na) Ce(a, e, c,
                            d || b.aborted);
                        b.G = void 0;
                        b.Na.length = 0
                    },
                    Ge = function({
                        span: a,
                        j: b,
                        aa: c,
                        Ng: d = new Map
                    }) {
                        try {
                            var e, f, g, h, k;
                            fa(!a.kd(), "Span must be ended to create a PerformanceContext");
                            const l = De(c, "LongTaskService"),
                                n = De(c, "VisibilityService"),
                                m = a.startTime,
                                r = a.endTime;
                            fa(r != null, "Span endTime must exist to create a PerformanceContext");
                            const p = new Map([
                                    ["start", Ee(m, m)]
                                ]),
                                w = qe(a) ? (e = a.Y) === null || e === void 0 ? void 0 : e.cb : void 0;
                            for (const {
                                    name: y,
                                    startTime: I
                                } of a.Ma) p.set(y, Ee(m, I));
                            if (w != null)
                                for (const [y, I] of w) p.set(y,
                                    Ee(m, I));
                            for (const [y, I] of d) p.set(y, Ee(m, I));
                            p.set("finish", Ee(m, r));
                            if (l == null || n == null) return {
                                vf: p,
                                ...((g = a.pa) === null || g === void 0 ? void 0 : (f = g.frameRate) === null || f === void 0 ? void 0 : Fe(f))
                            };
                            const v = l.Eh(m, r),
                                A = n.fj(a);
                            return {
                                vf: p,
                                Rh: v.count,
                                Sh: v.duration,
                                ej: A,
                                resources: void 0,
                                ...((k = a.pa) === null || k === void 0 ? void 0 : (h = k.frameRate) === null || h === void 0 ? void 0 : Fe(h))
                            }
                        } catch (l) {
                            return c = l instanceof Error ? l.message : "Unknown error creating PerformanceContext", d = c.includes("Invalid metric: adjusted time must not be negative") ?
                                2E-4 : .2, b.Kd(new M(c, d), {
                                    ua: "Error creating PerformanceContext",
                                    tags: new Map([
                                        ["span.name", a.name],
                                        ["service.name", String(a.da.get("service.name"))]
                                    ])
                                }), {
                                    Ch: c
                                }
                        }
                    },
                    Ee = function(a, b) {
                        a = b - a;
                        fa(a >= 0, "Invalid metric: adjusted time must not be negative");
                        return Math.round(a)
                    },
                    Ie = function(a) {
                        return function() {
                            for (let b = 0; b < a * 2; b++) He[b] = Math.floor(Math.random() * 16) + 48, He[b] >= 58 && (He[b] += 39);
                            return String.fromCharCode.apply(null, He.slice(0, a * 2))
                        }
                    },
                    Je = function(a) {
                        let b, c;
                        a instanceof Map ? b = a : a && (c = a);
                        return {
                            Lb: b,
                            Mb: c
                        }
                    },
                    Ke = function(a) {
                        const {
                            Lb: b,
                            Mb: c
                        } = Je(a);
                        var d;
                        return { ...c,
                            attrs: (d = b !== null && b !== void 0 ? b : c === null || c === void 0 ? void 0 : c.attrs) !== null && d !== void 0 ? d : new Map
                        }
                    },
                    Le = function(a) {
                        for (const c of a.ba.plugins) try {
                            var b;
                            (b = c.bi) === null || b === void 0 || b.call(c, a)
                        } catch (d) {
                            a.j.D(d, {
                                ua: "Plugin.onSpanEnd error",
                                extra: new Map([
                                    ["plugin", c.name], ...O(a)
                                ])
                            })
                        }
                    },
                    Oe = function(a) {
                        var b;
                        (b = a.Y) === null || b === void 0 || Me(b, a);
                        a.G instanceof Ne && a.G.Y != null && a.G.Y !== a.Y && Me(a.G.Y, a)
                    },
                    Qe = function(a, b, c, d) {
                        const e = a.ec = {
                            Ca: a.Ca,
                            Da: a.Da
                        };
                        try {
                            var f;
                            a.timeout && clearTimeout(a.timeout);
                            let g, h, k;
                            b instanceof Map ? h = b : b != null && (g = b);
                            c instanceof Map ? h = c : c != null && (k = c);
                            d != null && (k = d);
                            a.Ya = !1;
                            g != null && a.setStatus(g);
                            h && a.Ga(h);
                            if ((f = a.pa) === null || f === void 0 ? 0 : f.frameRate) {
                                Pe(a.pa.frameRate);
                                const {
                                    kc: l,
                                    dd: n,
                                    frameCount: m
                                } = Fe(a.pa.frameRate);
                                l != null && n != null && m != null && (a.attrs.set("frame_duration_mean", l), a.attrs.set("frame_duration_standard_deviation", n), a.attrs.set("frame_count", m), a.attrs.set("long_frame_duration", l + 2 * n))
                            }
                            a.ended = !0;
                            a.endTime = k !== null && k !== void 0 ? k : a.getCurrentTime();
                            a.duration = a.endTime - a.startTime;
                            Le(a);
                            Oe(a);
                            a.ba.Wa.process([a]);
                            a.lb.forEach(l => l(e));
                            a.Ya = !0;
                            return e
                        } catch (g) {
                            return a.j.D(g, {
                                ua: "Error ending span",
                                extra: new Map(O(a))
                            }), e
                        }
                    },
                    Te = function({
                        tc: {
                            performance: a,
                            name: b,
                            type: c,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        },
                        l: g,
                        G: h,
                        we: k,
                        j: l,
                        Cf: n
                    }) {
                        d = d || new Map;
                        c && d.set("uop_attr_type", c);
                        d.set("sample_rate_override", 1);
                        d.set("is_uop", !0);
                        c = h === null || h === void 0 ? void 0 : h.va();
                        if (h != null && !h.va()) {
                            const p = h.Xb();
                            p instanceof
                            Re && (h = p.S)
                        }
                        const m = h ? g.ta(b, h, {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        }) : g.ra(b, {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        });
                        fa(m instanceof Ne, "User operations can only be created by SpanImpls");
                        const r = [];
                        k.forEach(p => {
                            try {
                                const w = p.Pg();
                                r.push(w)
                            } catch (w) {
                                l.D(w)
                            }
                        });
                        e = new Map(r.flatMap(p => [...p.entries()]));
                        a = new Re(b, m, e, l, c, (a === null || a === void 0 ? 0 : a.Si) ? new Map : void 0);
                        m.Y = a;
                        a.La(() => {
                            Se(m, m.attrs.get("uop_attr_type"))
                        });
                        a.Ga(e);
                        a.Ga(d);
                        n === null || n === void 0 || n(m);
                        return a
                    },
                    Ue = function(a) {
                        a =
                            a === null || a === void 0 ? void 0 : a.Xb();
                        return a instanceof Re ? a : void 0
                    },
                    Me = function(a, b) {
                        a.dc.delete(b);
                        if (!a.ended) {
                            if (a.cb && b.fa === "span" && !b.aborted) {
                                a.cb.set(`${b.name}_start`, b.startTime);
                                for (var c of b.Ma) a.cb.set(`${b.name}_${c.name}`, c.startTime);
                                b.endTime != null && a.cb.set(`${b.name}_end`, b.endTime)
                            }
                            c = b.status === "error";
                            b = b.attrs.get("timed_out") === !0;
                            if (a.dc.size === 0 || c || b) {
                                a.ended = !0;
                                const e = Ve(a, a.S);
                                if (e != null) {
                                    b && !a.S.name.endsWith("timed_out") && (a.S.setAttribute("timed_out", !0, !0), a.S.name +=
                                        ".timed_out");
                                    var d = a.fc = a.S.end(c ? "error" : "ok", e.endTime);
                                    a.lb.forEach(f => f(d))
                                } else a.S.abort(), a.kb.forEach(f => f())
                            }
                        }
                    },
                    Ve = function(a, b) {
                        if (!b.aborted) {
                            var c = b.endTime != null ? b : void 0;
                            for (const d of b.Na) b = Ve(a, d), b != null && (c == null || b.endTime > c.endTime) && (c = b);
                            return c
                        }
                    },
                    Se = function(a, b) {
                        if (typeof b === "string") {
                            for (const c of a.Ma) c.setAttribute("uop_attr_type", b, !0);
                            for (const c of a.Na) c.attrs.get("is_uop") !== !0 && (c.setAttribute("uop_attr_type", b, !0), Se(c, b))
                        }
                    },
                    We = function(a) {
                        if (a) {
                            var b = a === null ||
                                a === void 0 ? void 0 : a.Xb();
                            return b instanceof Re ? b.nb : a.va()
                        }
                    },
                    Fe = function(a) {
                        return {
                            frameCount: a.Ha.count,
                            kc: a.Ha.count > 0 ? a.Ha.tf : void 0,
                            dd: a.Ha.count > 0 ? a.Ha.Mf : void 0
                        }
                    },
                    Pe = function(a) {
                        a.Zb && a.Ac.cancelAnimationFrame(a.Zb);
                        a.document.removeEventListener("visibilitychange", a.pd);
                        a = Fe(a);
                        var b = Xe;
                        const c = a.frameCount * a.kc,
                            d = a.kc + 2 * a.dd;
                        c > 0 && (b.frameCount += a.frameCount, b.nd.add(d, c));
                        for (const e of b.hd) e(a)
                    },
                    Ye = async function(a, b, c, d) {
                        let e, f;
                        typeof d === "function" ? f = d : e = Ke(d);
                        const g = a.ta(b, c, e);
                        return f(g).catch(h => {
                            g.setStatus("error");
                            throw h;
                        }).finally(() => g.end())
                    },
                    De = function(a, b) {
                        try {
                            return a.config.plugins.find(d => d.name === b)
                        } catch (d) {
                            var c;
                            a.j.D(d, {
                                extra: new Map([
                                    ["attrs", Object.fromEntries((c = a.config) === null || c === void 0 ? void 0 : c.da)]
                                ])
                            })
                        }
                    },
                    Ze = function(a) {
                        var b = Date.now(),
                            c = performance.now();
                        Math.abs(a.Mc + (c - a.yc) - b) < a.threshold || (a.Mc = b, a.yc = c)
                    },
                    kf = function({
                        T: a,
                        fb: b,
                        hc: c,
                        userAgent: d,
                        C: {
                            j: e
                        }
                    }) {
                        let f, g = new Map;
                        switch (a.M) {
                            case "NOOP":
                                return new $e;
                            case "CONSOLE":
                                f = new af;
                                break;
                            case "HTTP":
                                var h;
                                f = new bf({
                                    url: a.endpoint,
                                    bc: (h = a.Me) !== null && h !== void 0 ? h : 1
                                }, e, new cf, df({
                                    url: a.endpoint,
                                    fg: c !== null && c !== void 0 ? c : 3E4,
                                    fb: b !== null && b !== void 0 ? b : .01
                                }));
                                var k, l, n, m;
                                g = new Map([
                                    ["telemetry_version", "v2"],
                                    ["app.component", a.app],
                                    ["service.name", a.app],
                                    ["app.release", (k = a.release) !== null && k !== void 0 ? k : ""],
                                    ["app.source", (l = a.source) !== null && l !== void 0 ? l : "web"],
                                    ["app.flavor", (n = a.Se) !== null && n !== void 0 ? n : ""],
                                    ["app.build.variant", (m = a.variant) !== null && m !== void 0 ? m : "baseline"],
                                    ["session_id", Fd()],
                                    ["x-canva-tenant", "canva-app"],
                                    ["device.platform",
                                        a.platform
                                    ],
                                    ["device.id", a.deviceId]
                                ]);
                                d != null && (g.set("browser.name", d.fe), g.set("browser.version_major", d.de), g.set("browser.version_minor", d.ee));
                                break;
                            default:
                                throw new E(a);
                        }
                        b = ze(ze(new ef, p => new ff(p)), p => {
                            var w, v;
                            return new Ae(p, {
                                Jb: (w = a.Jb) !== null && w !== void 0 ? w : 20,
                                Kb: (v = a.Kb) !== null && v !== void 0 ? v : 5E3
                            }, e)
                        }).build(f);
                        var r;
                        c = a.M === "HTTP" ? (r = a.jg) !== null && r !== void 0 ? r : .01 : 1;
                        return new gf(new hf({
                            Wa: b,
                            Fc: new jf(c, e),
                            da: g
                        }), e)
                    },
                    Ka = function(a, b) {
                        b.request.mode !== "navigate" && (b = b.clientId, a.Gd.Dc(b),
                            a.Fd.Dc(b))
                    },
                    Ma = function(a, b, c) {
                        if (b.request.mode !== "navigate") throw Error("Navigation event expected");
                        c.then(d => {
                            d.ok && (d = b.resultingClientId, a.Gd.Cc(d), a.Fd.Cc(d))
                        }).catch(() => {})
                    },
                    lf = function(a, b) {
                        const c = a.Oa.get(b);
                        if (c != null) {
                            var d = performance.now() - 5E3,
                                e = c.Db.filter(f => f >= d);
                            c.Db = e;
                            e.length >= 3 ? c.Xa = self.setTimeout(() => lf(a, b), 5E3) : (e = Math.max(...e), c.span.end(void 0, void 0, e), a.Oa.delete(b))
                        }
                    },
                    pf = function({
                        Ia: a
                    }) {
                        a = a.Qa("service_worker.network_behavior_tracer");
                        return {
                            wa: new mf(new nf(a),
                                new of (a))
                        }
                    },
                    Ja = function(a) {
                        if (a.Zc) return performance.now();
                        a.Zc = !0;
                        return a.$b == null || Date.now() - a.$b < 500 ? 0 : performance.now()
                    },
                    sf = function({
                        location: a,
                        T: b,
                        fb: c,
                        hc: d,
                        userAgent: e,
                        C: {
                            j: f
                        }
                    }) {
                        a = a.origin.includes("localhost");
                        if (b == null || a) b = new qf({});
                        b = kf({
                            T: b,
                            fb: c,
                            hc: d,
                            userAgent: e,
                            C: {
                                j: f
                            }
                        });
                        ({
                            wa: c
                        } = pf({
                            Ia: b
                        }));
                        return {
                            Ia: b,
                            rb: new rf,
                            wa: c
                        }
                    },
                    ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
                        if (a == Array.prototype || a == Object.prototype) return a;
                        a[b] = c.value;
                        return a
                    },
                    ba =
                    aa(this);
                da("Object.fromEntries", function(a) {
                    return a ? a : function(b) {
                        var c = {};
                        if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
                        b = b[Symbol.iterator].call(b);
                        for (var d = b.next(); !d.done; d = b.next()) {
                            d = d.value;
                            if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                            c[d[0]] = d[1]
                        }
                        return c
                    }
                });
                var Ud = __webpack_require__(336105).RewriteFrames;
                var de = __webpack_require__(681196).ExtraErrorData;
                var ee = __webpack_require__(802011).Dedupe;
                __webpack_require__.p = self.__canva_public_path__;
                var E = class extends Error {
                    constructor(a) {
                        super(`unhandled case: ${JSON.stringify(a)}`)
                    }
                };
                var tf = class {
                    constructor(a) {
                        this.type = a
                    }
                };
                var uf = class extends tf {
                        required(a, b) {
                            b = b[a];
                            if (b == null || typeof b !== this.type) throw new TypeError(`expected ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                            return b
                        }
                        optional(a, b) {
                            b = b[a];
                            if (b != null) {
                                if (typeof b !== this.type) throw new TypeError(`expected optional ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                                return b
                            }
                        }
                    },
                    ka = new uf("object");
                var ja = {},
                    ia = {};
                typeof window !== "undefined" && window.location && na();
                var oa = class {
                        get ok() {
                            return !0
                        }
                        map(a) {
                            return new oa(a(this.value))
                        }
                        constructor(a) {
                            this.value = a
                        }
                    },
                    qa = class {
                        get ok() {
                            return !1
                        }
                        map() {
                            return this
                        }
                        constructor(a) {
                            this.error = a
                        }
                    },
                    ta = pa,
                    ua = ra;
                var ya = {
                        A: "string"
                    },
                    vf = {
                        A: "boolean",
                        defaultValue: !1,
                        Re: 1
                    },
                    wf = {
                        A: "number",
                        defaultValue: 0,
                        Re: 8
                    },
                    xf = {
                        A: "number",
                        defaultValue: 0
                    },
                    yf = {
                        A: "number",
                        defaultValue: 0
                    },
                    zf = a => {
                        const {
                            tag: b,
                            F: c,
                            W: d
                        } = t(a);
                        return wa(xf, c, b, d)
                    },
                    Af = a => {
                        const {
                            tag: b,
                            F: c,
                            W: d
                        } = t(a);
                        return wa(yf, c, b, d)
                    },
                    P = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return xa(wf, c, b)
                    },
                    Q = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return xa(xf, c, b)
                    },
                    Bf = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return xa(yf, c, b)
                    },
                    Cf = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return {
                            tag: b,
                            K: 4,
                            F: c,
                            A: xf.A
                        }
                    },
                    R = a => {
                        const {
                            tag: b,
                            F: c,
                            W: d
                        } = t(a);
                        return wa(ya, c, b, d)
                    },
                    S = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return xa(ya, c, b)
                    },
                    Df = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return {
                            tag: b,
                            K: 4,
                            F: c,
                            A: ya.A
                        }
                    },
                    T = a => {
                        const {
                            tag: b,
                            F: c,
                            W: d
                        } = t(a);
                        return wa(vf, c, b, d)
                    },
                    U = a => {
                        const {
                            tag: b,
                            F: c
                        } = t(a);
                        return xa(vf, c, b)
                    },
                    Ef = za(ya),
                    Ff = za("object");
                var Gf = J(() => ({
                    M: u(2, "CONSOLE")
                }));
                var Hf = L(() => [1, 2, 3], 1);
                var If = J(() => ({
                    name: R(1),
                    value: R(2)
                }));
                var Jf = J(() => ({
                    He: U(1)
                }));
                var Kf = J(() => ({
                    eh: U(1),
                    Zh: Q(2),
                    $h: Q(3),
                    ai: Q(4)
                }));
                var Lf = J(() => ({
                    type: u(1, "STRING"),
                    value: R(1)
                }));
                var Mf = J(() => ({
                    type: u(2, "BOOL"),
                    value: T(1)
                }));
                var Nf = J(() => ({
                    type: u(3, "INT"),
                    value: zf(1)
                }));
                var Of = J(() => {
                    const {
                        tag: a,
                        F: b,
                        W: c
                    } = t(1);
                    return {
                        type: u(4, "DOUBLE"),
                        value: wa(wf, b, a, c)
                    }
                });
                var Hd = J(() => ({
                    type: u(5, "ARRAY"),
                    values: B(1, Pf)
                }));
                var Jd = J(() => ({
                    type: u(6, "KVLIST"),
                    values: B(1, Qf)
                }));
                var Pf = K(() => ({
                    type: [1, Lf, 2, Mf, 3, Nf, 4, Of, 5, Hd, 6, Jd]
                }), () => ({}));
                var Qf = J(() => ({
                    name: R(1),
                    value: x(2, Pf)
                }));
                var Rf = J(() => ({
                    M: u(3, "SENTRY"),
                    dsn: S(28),
                    environment: S(30),
                    release: S(34),
                    sampleRate: P(29),
                    tracesSampleRate: P(31),
                    ah: U(32),
                    Kf: D(33, Hf),
                    tags: B(35, If),
                    flags: z(36, Jf),
                    Yh: z(37, Kf),
                    extra: B(38, Qf),
                    yf: P(39)
                }));
                var Sf = K(() => ({
                    M: [2, Gf, 3, Rf]
                }), () => ({}));
                var Tf = () => ({
                    kh: U(5),
                    Kb: Q(6),
                    Jb: Q(7),
                    Me: Q(8),
                    ih: U(9),
                    yi: P(10),
                    jg: P(11),
                    source: S(13),
                    ga: S(14),
                    ia: S(4),
                    Ff: S(17),
                    deviceId: S(18),
                    zg: S(15),
                    yh: U(16),
                    qh: U(19),
                    $g: U(20),
                    rh: U(21),
                    ph: U(22),
                    wg: Df(23)
                });
                var Uf = J(() => ({ ...Tf(),
                    M: u(1, "HTTP"),
                    app: R(27),
                    endpoint: R(28),
                    release: S(29),
                    Se: S(31),
                    hh: U(32),
                    jh: U(33),
                    platform: S(35),
                    variant: S(36)
                }));
                var Vf = J(() => ({ ...Tf(),
                    M: u(2, "CONSOLE"),
                    app: R(27)
                }));
                var qf = J(() => ({ ...Tf(),
                    M: u(3, "NOOP")
                }));
                var Wf = K(() => ({
                    M: [1, Uf, 2, Vf, 3, qf]
                }), Tf);
                var sd = class {
                    constructor(a, b, c, d) {
                        this.requestHandler = a;
                        this.rb = b;
                        this.wa = c;
                        this.l = d
                    }
                };
                var Ua = class {
                    constructor({
                        eb: a
                    }) {
                        this.eb = a
                    }
                };
                var M = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.sampleRate = b;
                            this.sampleRate = Qa(b)
                        }
                    },
                    ge = class {
                        setupOnce(a, b) {
                            a((c, d) => {
                                const e = b().getIntegration(ge);
                                if (!e) return c;
                                if (!(Math.random() < Ra(e, d === null || d === void 0 ? void 0 : d.originalException, c.level))) return null;
                                d = {
                                    sampleRate: Ra(this, d === null || d === void 0 ? void 0 : d.originalException)
                                };
                                c.extra = c.extra != null ? { ...c.extra,
                                    ...d
                                } : d;
                                c.tags = c.tags != null ? { ...c.tags,
                                    ...d
                                } : d;
                                return c
                            })
                        }
                        constructor(a, b) {
                            this.Wc = a;
                            this.Vc = b;
                            this.name = ge.id;
                            this.Wc = Qa(a);
                            this.Vc =
                                Qa(b)
                        }
                    };
                ge.id = "Sampling";
                var Va = class {
                    constructor(a) {
                        this.j = a
                    }
                };
                var qd = class {
                    constructor(a, b, c, d, e, f) {
                        this.Ec = a;
                        this.B = b;
                        this.j = c;
                        this.Je = d;
                        this.xf = e;
                        this.Sf = f
                    }
                };
                var Xa = class {
                        Hd(a) {
                            if (a.status !== 401) return a
                        }
                    },
                    Ya = class {
                        Hd(a) {
                            return a
                        }
                    };
                var Xf = class {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Xf(a)
                        }
                        async update(a) {
                            a = this.cursor.update(a);
                            return this.J(a)
                        }
                        async delete() {
                            const a = this.cursor.delete();
                            return this.J(a)
                        }
                        constructor(a) {
                            this.cursor = a;
                            this.J = bb
                        }
                    },
                    Yf = class extends Xf {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Yf(a)
                        }
                        get value() {
                            return this.cursor.value
                        }
                        constructor(a) {
                            super(a);
                            this.cursor = a
                        }
                    };
                var Zf = class {
                    async get(a) {
                        a = this.index.get(a);
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.index.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.index.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.index.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.index.openCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.index.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    constructor(a) {
                        this.index = a;
                        this.J = bb
                    }
                };
                var $f = class {
                    index(a) {
                        return new Zf(this.store.index(a))
                    }
                    async put(a, b) {
                        a = this.store.put(a, b);
                        return this.J(a)
                    }
                    async get(a) {
                        a = this.store.get(a);
                        return this.J(a)
                    }
                    async delete(a) {
                        a = this.store.delete(a);
                        return this.J(a)
                    }
                    async clear() {
                        const a = this.store.clear();
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.store.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.store.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.store.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.store.openCursor(a,
                            b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.store.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    createIndex(a, b, c) {
                        return this.store.createIndex(a, b, c)
                    }
                    deleteIndex(a) {
                        return this.store.deleteIndex(a)
                    }
                    constructor(a) {
                        this.store = a;
                        this.J = bb
                    }
                };
                var ag = class {
                        objectStore(a) {
                            a = this.ca.objectStore(a);
                            return new $f(a)
                        }
                        abort() {
                            this.ca.abort()
                        }
                        commit() {
                            this.ca.commit()
                        }
                        get error() {
                            return this.ca.error
                        }
                        constructor(a) {
                            this.ca = a;
                            this.qg = eb(this)
                        }
                    },
                    db = class extends Error {
                        constructor() {
                            super("Transaction was aborted")
                        }
                    };
                var fb = class {
                    transaction(a, b) {
                        return new ag(this.db.transaction(a, b))
                    }
                    createObjectStore(a, b) {
                        return new $f(this.db.createObjectStore(a, b))
                    }
                    get objectStoreNames() {
                        return this.db.objectStoreNames
                    }
                    close() {
                        this.db.close()
                    }
                    addEventListener(a, b, c) {
                        this.db.addEventListener(a, b, c)
                    }
                    removeEventListener(a, b, c) {
                        this.db.removeEventListener(a, b, c)
                    }
                    constructor(a) {
                        this.db = a
                    }
                };
                var hb = class extends Error {
                        constructor(a) {
                            super("Quota exceeded");
                            this.cause = a
                        }
                    },
                    ib, sb = class extends Error {
                        constructor() {
                            super("Consent required")
                        }
                    },
                    kb = class extends M {
                        constructor(a) {
                            super("IndexedDb Database Error", 0);
                            this.cause = a
                        }
                    },
                    lb, ub = class extends Error {
                        constructor() {
                            super("Maximum number of rows exceeded for put request")
                        }
                    },
                    tb = class extends Error {
                        constructor(a) {
                            super("Failed to deserialize stored data");
                            this.cause = a
                        }
                    };
                var nb = class {
                    get kf() {
                        return this.connection != null
                    }
                    transaction(a, b) {
                        if (this.connection == null) throw Error("Attempted to open a transaction on a closed connection");
                        self.clearTimeout(this.yb);
                        this.yb = void 0;
                        const c = this.connection;
                        try {
                            this.sc++;
                            const d = c.transaction(a, b),
                                e = d.qg;
                            e.catch(() => this.dispose()).finally(() => {
                                this.sc--;
                                this.sc <= 0 && (this.yb = self.setTimeout(() => {
                                    this.dispose()
                                }, 2500))
                            });
                            return {
                                transaction: d,
                                Md: e
                            }
                        } catch (d) {
                            throw this.dispose(), d;
                        }
                    }
                    dispose() {
                        var a;
                        (a = this.connection) === null || a ===
                            void 0 || a.close();
                        this.connection = void 0;
                        self.clearTimeout(this.yb)
                    }
                    constructor(a) {
                        this.connection = a;
                        this.sc = 0
                    }
                };
                var xb = class {
                    constructor(a, b) {
                        this.ff = a;
                        this.l = b
                    }
                };
                var wb = class {
                    constructor(a, b) {
                        this.ed = a;
                        this.l = b
                    }
                };
                var vb = class {
                    async put(a, b, c) {
                        await Ab(this);
                        const d = Cb(a, this.Vb.ya(b));
                        return N(this.na, {
                            H: this.H,
                            mode: "readwrite",
                            X: async e => {
                                const {
                                    Qi: f
                                } = c !== null && c !== void 0 ? c : {};
                                if (f != null) {
                                    q(f > 0);
                                    const [g, h] = await Promise.all([e.get(a).then(k => !!k), e.count()]);
                                    if (h + (g ? 0 : 1) > f) throw new ub;
                                }
                                await e.put(d)
                            },
                            methodName: "put"
                        })
                    }
                    async get(a) {
                        const b = await N(this.na, {
                            H: this.H,
                            mode: "readonly",
                            X: async c => c.get(a),
                            methodName: "get"
                        });
                        return b != null ? this.P(Bb(b)) : void 0
                    }
                    async delete(a) {
                        return N(this.na, {
                            H: this.H,
                            mode: "readwrite",
                            X: async b => {
                                Array.isArray(a) ? await Promise.all(a.map(c => b.delete(c))) : await b.delete(a)
                            },
                            methodName: "delete"
                        })
                    }
                    async count() {
                        return N(this.na, {
                            H: this.H,
                            mode: "readonly",
                            X: async a => a.count(),
                            methodName: "count"
                        })
                    }
                    async update(a, b) {
                        await Ab(this);
                        return N(this.na, {
                            H: this.H,
                            mode: "readwrite",
                            X: async c => {
                                var d = await c.get(a);
                                d = d ? {
                                    value: this.P(Bb(d))
                                } : void 0;
                                d = b(d);
                                d != null ? await c.put(Cb(a, this.Vb.ya(d.value))) : await c.delete(a)
                            },
                            methodName: "update"
                        })
                    }
                    async getAll(a, b) {
                        const c = await N(this.na, {
                                H: this.H,
                                mode: "readonly",
                                X: async f => {
                                    const g = typeof b === "string" ? f.index(b) : f;
                                    try {
                                        return (await g.getAll(a)).map(h => ta(h))
                                    } catch (h) {
                                        return f = await g.getAllKeys(a), Promise.all(f.map(async k => {
                                            try {
                                                const l = await g.get(k);
                                                return ta(l)
                                            } catch (l) {
                                                return ua({
                                                    key: String(k),
                                                    error: l instanceof Error ? l : Error(String(l))
                                                })
                                            }
                                        }))
                                    }
                                },
                                methodName: "getAll"
                            }),
                            d = [],
                            e = [];
                        for (const f of c)
                            if (f.ok) try {
                                d.push({
                                    key: Eb(f.value),
                                    vd: this.P(Bb(f.value))
                                })
                            } catch (g) {
                                e.push({
                                    key: Eb(f.value),
                                    error: g instanceof Error ? g : Error(String(g))
                                })
                            } else e.push({
                                key: f.error.key,
                                error: f.error.error
                            });
                        return {
                            items: d,
                            errors: e
                        }
                    }
                    async getAllKeys() {
                        return N(this.na, {
                            H: this.H,
                            mode: "readonly",
                            X: async a => (await a.getAllKeys()).map(b => String(b)) || [],
                            methodName: "getAllKeys"
                        })
                    }
                    async clear() {
                        return N(this.na, {
                            H: this.H,
                            mode: "readwrite",
                            X: async a => a.clear(),
                            methodName: "clear"
                        })
                    }
                    close() {}
                    P(a) {
                        try {
                            return this.Vb.P(a)
                        } catch (b) {
                            throw new tb(b instanceof Error ? b : Error(String(b)));
                        }
                    }
                    constructor(a, b, c, d) {
                        this.H = a;
                        this.Vb = b;
                        this.na = c;
                        this.Ab = d
                    }
                };
                var Kb = class {
                    async fetch(a) {
                        if (this.B.Sa()) throw Error("Is force offline");
                        if (a.request.mode === "navigate") {
                            const b = await a.preloadResponse;
                            if (b != null && b.status !== 401) return b;
                            if (this.yd != null) return a = await Jb(this.yd, a.request), this.uc(a)
                        }
                        return this.uc(a.request, {
                            redirect: "follow"
                        })
                    }
                    constructor(a, b, c) {
                        this.B = a;
                        this.yd = b;
                        this.uc = c
                    }
                };
                var Lb = class {
                    constructor(a) {
                        this.options = {
                            Zf: self.navigator.userAgent,
                            targetOrigin: self.location.origin
                        };
                        this.Lf = a
                    }
                };
                var bg = L(() => [1, 2, {
                    Ja: !0
                }, 3, {
                    Ja: !0
                }]);
                var cg = J(() => ({
                    status: C(1, bg)
                }));
                var Sb = class {
                    async oc(a) {
                        a = await this.store.get(a);
                        return a === null || a === void 0 ? void 0 : a.status
                    }
                    constructor(a, b = {
                        Fa: (...c) => zb(...c)
                    }) {
                        this.store = b.Fa("private_data_persist_consent", cg, void 0, [], a)
                    }
                };
                var dg = J(() => ({
                    ga: R(1),
                    ia: R(2)
                }));
                var Rb = class {
                    async put(a, {
                        ga: b,
                        ia: c
                    }) {
                        await this.store.put(a, new dg({
                            ga: b,
                            ia: c
                        }))
                    }
                    async getAll() {
                        const {
                            items: a,
                            errors: b
                        } = await this.store.getAll();
                        if (b.length > 0) throw b[0].error;
                        return a.map(c => ({
                            Mi: c.key,
                            vd: c.vd
                        }))
                    }
                    async delete(a) {
                        await this.store.delete(a)
                    }
                    constructor(a, b = {
                        Fa: (...c) => zb(...c)
                    }) {
                        this.store = b.Fa("storage_layer_name", dg, void 0, [], a)
                    }
                };
                var eg = {
                        editor_page_bootstraps: !0,
                        homepage_bootstraps: !1,
                        lesson_config: !1,
                        offline_designs: !0,
                        offline_document_response: !0,
                        document_resources: !0
                    },
                    fg = {
                        editor_page_bootstraps: [],
                        homepage_bootstraps: [],
                        lesson_config: [],
                        offline_designs: [],
                        offline_document_response: [],
                        document_resources: [{
                            name: "documents",
                            Fb: "E",
                            multiEntry: !0
                        }],
                        storage_layer_name: [],
                        private_data_persist_consent: [],
                        active_user_brand_hint_for_service_worker_to_serve_pages: [],
                        offline_fallback_bootstrap: [],
                        config: [],
                        asset_metadata: [],
                        manifests: [],
                        leadership_lock: [],
                        index_example: [{
                            name: "indexName",
                            Fb: "values",
                            multiEntry: !0
                        }],
                        design_asset_references: [{
                            name: "referrer_ids_idx",
                            Fb: "A",
                            multiEntry: !0
                        }],
                        page_asset_references: [{
                            name: "referrer_ids_idx",
                            Fb: "A",
                            multiEntry: !0
                        }]
                    };
                var Tb = class {
                    constructor(a, b, c, d, e, f = {
                        Fa: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        this.Oc = a;
                        this.cg = b;
                        this.Ab = c;
                        this.j = d;
                        this.l = e;
                        this.md = f;
                        this.se = g;
                        this.fd = h
                    }
                };
                var Jc = class extends Tb {
                    constructor(a, b, c, d, e, f = {
                        Fa: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        super(a, b, c, d, e, f, g, h);
                        this.Oc = a
                    }
                };
                var Wb;
                var $b = class {
                    get Bc() {
                        return [...this.Qc]
                    }
                    constructor({
                        Bc: a,
                        Ra: b,
                        Hb: c
                    }) {
                        this.Qc = new Set(a.filter(d => !!d));
                        this.Hb = c || void 0;
                        this.Ra = b
                    }
                };
                var dc = class {
                        async mc() {
                            this.ja == null && (this.ja = self.caches.open(this.cacheName), self.setTimeout(() => {
                                this.ja = void 0
                            }, 5E3));
                            return this.ja
                        }
                        constructor(a, b) {
                            this.l = b;
                            this.options = void 0;
                            this.cacheName = gg[1];
                            this.db = Ob(a, hg[1], $b)
                        }
                    },
                    hg = {
                        [0]: "design_asset_references",
                        [1]: "page_asset_references"
                    },
                    gg = {
                        [0]: "media",
                        [1]: "assets-2"
                    };
                var ec = class {
                    Ba({
                        url: a
                    }) {
                        return this.B.options.le !== 1 ? a.hostname.startsWith("chunk-composing.") && a.searchParams.get("preserve-source-map-comments") !== "true" : !1
                    }
                    async handle(a, b) {
                        return this.I.fetch(a).then(c => {
                            a.waitUntil(cc(this, c, b));
                            return c
                        })
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.B = a;
                        this.N = b;
                        this.I = c;
                        this.ke = d;
                        this.pe = e;
                        this.j = f;
                        this.l = g;
                        this.name = "chunk-composing"
                    }
                };
                var od = class {
                    Ba(a) {
                        return a.url.pathname === "/__sw_debug_info"
                    }
                    async handle() {
                        return new Response(this.bb.Ue(), {
                            headers: {
                                "content-type": "text/plain"
                            }
                        })
                    }
                    constructor(a) {
                        this.bb = a;
                        this.name = "debug_info"
                    }
                };
                var ig = /[^a-zA-Z0-9]/g,
                    nc = class {
                        async match(a, {
                            G: b
                        } = {}) {
                            const c = async d => {
                                try {
                                    const e = await (await this.mc()).match(this.Nc(a));
                                    d === null || d === void 0 || d.za(`${this.Tc}.match.${e!=null?"cache_hit":"cache_miss"}`);
                                    d === null || d === void 0 || d.setAttribute("cache_hit", e != null);
                                    return e
                                } catch (e) {
                                    this.ja = null, d === null || d === void 0 || d.setStatus("error"), this.j.error(new M(e instanceof Error ? e.message : String(e), .01))
                                }
                            };
                            return this.l != null && b != null ? this.l.Sb(`${this.Tc}.match`, b, c) : c()
                        }
                        async mc() {
                            this.ja == null &&
                                (this.ja = caches.open(this.cacheName), setTimeout(() => {
                                    this.ja = null
                                }, 1E3));
                            return this.ja
                        }
                        constructor({
                            cacheName: a,
                            Nc: b = e => e
                        }, c, d) {
                            this.j = c;
                            this.l = d;
                            this.ja = null;
                            this.cacheName = a;
                            this.Tc = `browser_cache_storage.${a.replace(ig,"_")}`;
                            this.Nc = b
                        }
                    };
                var jg = new Set("audio-private audio-public audio-upload blobs document-export font-private font-public media media-private media-public media-transformation mockup-assets print-product-assets template upload video-placeholders video-private-assets video-public video-upload".split(" ")),
                    oc = class {
                        Ba({
                            url: a
                        }) {
                            if (this.B.options.Xc === 1) return !1;
                            if (a.hostname === "localhost" && !/\.js$|\.css$/.test(a.pathname)) return !0;
                            [a] = a.hostname.split(".");
                            return jg.has(a)
                        }
                        async handle(a, b) {
                            if (this.B.options.Xc === 2) try {
                                return await this.I.fetch(a)
                            } catch (c) {
                                a =
                                    await hc(this, a, b);
                                if (a != null) return a;
                                throw c;
                            }
                            b = await hc(this, a, b);
                            return b !== null && b !== void 0 ? b : this.I.fetch(a)
                        }
                        constructor(a, b, c, d) {
                            this.B = a;
                            this.uf = b;
                            this.Rb = c;
                            this.I = d;
                            this.name = "design_asset"
                        }
                    };
                var jc = /^bytes=(\d+)?-(\d+)?$/;
                var kc = ["X-Shaka-From-Cache", "true"],
                    lc = class {
                        constructor({
                            j: a
                        }) {
                            this.j = a
                        }
                    };
                var qc = class {
                    Ba({
                        url: a
                    }) {
                        return this.B.options.rd !== 1 ? a.hostname === "localhost" && /\.js$|\.css$/.test(a.pathname) && !a.pathname.includes("_web_worker") ? !0 : a.href.startsWith(this.options.N) : !1
                    }
                    async handle(a, b) {
                        if (this.B.options.rd === 2) try {
                            return await this.I.fetch(a)
                        } catch (c) {
                            a = await this.Rc.match(a.request.url, {
                                G: b
                            });
                            if (a != null) return a;
                            throw c;
                        }
                        b = await this.Rc.match(a.request.url, {
                            G: b
                        });
                        return b != null ? b : this.I.fetch(a)
                    }
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.B = b;
                        this.I = c;
                        this.Rc = d;
                        this.name = "page_asset"
                    }
                };
                var kg = L(() => [1, 2], 1);
                var Pb = J(() => ({
                    app: R(1),
                    url: R(2),
                    title: R(3),
                    locale: R(4),
                    direction: C(5, kg),
                    timestamp: Af(7),
                    Aa: R(8),
                    Lc: R(9),
                    mb: R(10),
                    jc: S(11)
                }));
                var sc = class {
                    async hb(a) {
                        a = await this.db.get(a.key);
                        const b = Date.now() / 1E3;
                        if (this.options.pb || a && a.timestamp + 1209600 > b) return a
                    }
                    constructor(a, b) {
                        this.options = a;
                        this.db = b
                    }
                };
                var yc = class {
                    constructor(a) {
                        this.path = a;
                        this.Va = new Map
                    }
                };
                var Kc = class {
                    normalizeUrl({
                        url: a,
                        app: b
                    }) {
                        switch (b) {
                            case "home":
                            case "offline_fallback":
                                return {
                                    key: a.href
                                };
                            case "editor":
                                b = ha(Cc(a.href), `Attempted to load editor bootstrap with invalid url ${a}`);
                                a = location.origin;
                                b = {
                                    id: b.id
                                };
                                var c = zc(["design", b.id]);
                                b = Bc(Ac(c, b.Ui));
                                return {
                                    key: a + b
                                };
                            default:
                                throw new E(b);
                        }
                    }
                };
                var W = J(() => ({
                    filename: R(1),
                    Mh: U(4),
                    locale: S(5),
                    Dd: S(6)
                }));
                var lg = J(() => ({
                    $a: B(1, W),
                    Ea: B(2, W)
                }));
                var mg = J(() => ({
                    jf: x(1, lg),
                    Vd: x(2, lg)
                }));
                var ng = J(() => ({
                    Ld: x(1, mg)
                }));
                var og = J(() => ({
                    Li: R(1)
                }));
                var pg = J(() => ({
                    Vi: Bf(1)
                }));
                var qg = J(() => ({
                    $a: Df(1),
                    Ea: Df(2),
                    Ji: Ef(3)
                }));
                var rg = J(() => ({
                    rel: R(1),
                    href: R(2),
                    Dd: S(6)
                }));
                var sg = J(() => ({
                    $a: B(1, W),
                    Ea: B(2, W)
                }));
                var tg = J(() => ({
                    id: R(1),
                    Mg: B(2, W),
                    Oh: B(3, W),
                    Fe: B(4, W),
                    Qh: Ff(5, sg),
                    Th: x(6, sg),
                    Bi: x(7, sg),
                    Ki: Df(8),
                    Ph: zf(9),
                    xi: U(10)
                }));
                var ug = J(() => ({
                    app: R(1),
                    Sc: x(9, lg),
                    zd: x(8, ng),
                    Fe: B(10, W),
                    wi: B(13, W),
                    fonts: z(14, og),
                    build: x(3, pg),
                    mf: Ff(4, qg),
                    zc: S(6),
                    ki: S(15),
                    li: S(16),
                    viewport: S(7),
                    links: B(11, rg),
                    sh: S(18),
                    Fg: Ff(17, tg),
                    mj: Ff(25, tg)
                }));
                var Lc = J(() => ({
                    Ib: x(1, ug),
                    commit: R(5),
                    variant: S(4),
                    timestamp: Af(2),
                    locale: R(3),
                    direction: C(6, kg),
                    Ic: R(7)
                }));
                var Nc = class {
                    constructor(a, b) {
                        this.db = a;
                        this.l = b
                    }
                };
                var Ic = J(() => ({
                    ga: R(1),
                    ia: R(2)
                }));
                var vg = L(() => [0, "CLIENT_FULL", 1, "CLIENT_HYDRATE", 2, "SERVER_FULL"]);
                var wg = L(() => [1, 3, 2], 1);
                var xg = J(() => ({
                    action: u(1, "REGISTER"),
                    Ci: R(1),
                    scope: R(2)
                }));
                var yg = J(() => ({
                    action: u(2, "UNREGISTER")
                }));
                var zg = J(() => ({
                    action: u(3, "UPDATE")
                }));
                var Ag = J(() => ({
                    action: u(4, "RETAIN")
                }));
                var Bg = K(() => ({
                    action: [1, xg, 2, yg, 3, zg, 4, Ag]
                }), () => ({}));
                var Cg = J(() => ({
                    oj: R(1),
                    nj: Q(2)
                }));
                var Dg = L(() => [1, 2]);
                var Eg = L(() => [1, 2, 3, 4]);
                var Fg = J(() => ({
                    category: C(1, Eg),
                    name: R(2)
                }));
                var Gg = J(() => ({
                    vg: T(15),
                    Hi: T(12),
                    Yi: T(13),
                    Eg: T(1),
                    Wg: T(2),
                    Zg: T(7),
                    dh: T(14),
                    Ig: R(3),
                    Uh: R(9),
                    mi: R(10),
                    si: B(5, Fg),
                    hi: S(6),
                    Jh: Cf(16),
                    Hg: Cf(17),
                    Vg: U(18),
                    Dh: U(19),
                    nh: U(20),
                    oh: U(21)
                }));
                var Hg = J(() => ({
                    traceId: R(1),
                    spanId: R(2),
                    Jc: zf(3)
                }));
                var Ig = J(() => ({
                    href: R(1),
                    Dd: S(3)
                }));
                var Jg = () => ({
                    zi: T(12),
                    fh: T(14),
                    commit: R(5),
                    timestamp: Bf(11),
                    j: x(6, Sf),
                    ui: C(7, vg),
                    O: C(9, wg),
                    Fi: z(15, Bg),
                    kj: z(4, Cg),
                    ci: S(13),
                    gd: D(17, Dg),
                    Ti: z(18, Gg),
                    Ed: z(20, Wf),
                    gi: z(24, Hg),
                    ji: B(21, Ig),
                    Zi: Df(22),
                    ie: S(34)
                });
                var Kg = J(() => ({
                    Ri: R(1),
                    xh: Af(2)
                }));
                var Lg = J(() => ({
                    Ud: S(1),
                    Ag: S(9),
                    Xd: S(2),
                    Yd: S(3),
                    Rd: S(14),
                    mg: S(12),
                    ce: S(4),
                    nf: S(10),
                    app: S(11),
                    ge: S(5),
                    he: S(6),
                    Ei: S(7),
                    Lg: Ff(8, Kg)
                }));
                var Mg = J(() => ({
                    Ud: S(1),
                    Xd: S(2),
                    Yd: S(3),
                    Rd: S(10),
                    mg: S(9),
                    ce: S(4),
                    nf: S(5),
                    app: S(6),
                    ge: S(7),
                    he: S(8)
                }));
                var Ng = J(() => ({
                    url: R(1),
                    context: z(2, Mg)
                }));
                var Og = J(() => ({
                    Le: R(27)
                }));
                var Pg = J(() => ({
                    Le: R(27),
                    Jg: S(28),
                    locale: R(29),
                    Gg: Q(30),
                    ia: S(31),
                    Ff: S(37),
                    ga: S(34),
                    uh: S(32),
                    Ah: S(33),
                    deviceId: S(35)
                }));
                var Qg = () => ({
                    bj: z(3, Og),
                    th: x(4, Pg),
                    wh: Ef(5),
                    appName: S(9),
                    Kh: Cf(16),
                    Pi: Cf(17),
                    Yg: T(18),
                    Tg: U(19)
                });
                var Rg = J(() => ({ ...Qg(),
                    M: u(2, "CONSOLE")
                }));
                var Sg = J(() => ({ ...Qg(),
                    M: u(8, "NOOP")
                }));
                var Tg = J(() => ({
                    containerId: R(1)
                }));
                var Ug = J(() => ({
                    tg: R(1),
                    projectId: R(2)
                }));
                var Vg = J(() => ({
                    Wd: R(1)
                }));
                var Wg = J(() => ({}));
                var Xg = J(() => ({
                    Gh: z(2, Tg),
                    di: z(4, Ug),
                    Bg: z(6, Vg),
                    Fh: z(7, Wg)
                }));
                var Yg = J(() => ({ ...Qg(),
                    M: u(14, "PRODUCT_ANALYTICS"),
                    plugins: z(32, Xg),
                    ij: Q(36),
                    mh: T(37),
                    jj: T(40),
                    bh: T(45),
                    Xg: T(47)
                }));
                var Zg = K(() => ({
                    M: [2, Rg, 8, Sg, 14, Yg]
                }), Qg);
                var $g = J(() => ({
                    M: u(1, "NONE")
                }));
                var ah = J(() => ({
                    M: u(2, "FULLSTORY"),
                    ei: R(28)
                }));
                var bh = K(() => ({
                    M: [1, $g, 2, ah]
                }), () => ({}));
                var X = L(() => [1, 2, 3, 4]);
                var ch = J(() => ({
                    Rg: D(1, X),
                    pi: D(2, X),
                    Wh: D(4, X),
                    Vh: D(8, X),
                    aj: D(5, X),
                    Ai: D(6, X),
                    Qg: D(7, X),
                    Og: D(10, X),
                    Gi: D(9, X),
                    cj: D(11, X),
                    Sg: D(12, X),
                    Dg: D(13, X),
                    Kg: D(14, X),
                    ug: D(15, X)
                }));
                var dh = J(() => ({
                    ii: x(1, ch),
                    oi: T(2)
                }));
                var eh = J(() => ({
                    ga: S(1),
                    Wd: R(2),
                    Xi: T(3),
                    $i: z(4, dh)
                }));
                var fh = J(() => ({
                    url: R(1),
                    yg: S(2),
                    Wi: T(3),
                    gj: S(4)
                }));
                var gh = J(() => ({ ...Jg(),
                    mode: u(2, "REAL"),
                    Ih: x(27, Lg),
                    hj: x(30, Ng),
                    xg: x(28, Zg),
                    Lh: z(29, bh),
                    Cg: z(32, eh),
                    Di: z(31, fh)
                }));
                var hh = J(() => ({ ...Jg(),
                    mode: u(3, "FAKE"),
                    Ni: zf(27),
                    hostname: S(28)
                }));
                var Gc = K(() => ({
                    mode: [2, gh, 3, hh]
                }), Jg);
                var Mc = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.be = b;
                        this.If = c;
                        this.qf = d
                    }
                };
                var ih = ["iOi0iWfdfKTOZE7Vp8+d8Cvsk9vE8DL4J4a5fgzlsUk="],
                    jh = class {
                        createPolicy({
                            page: a,
                            nonce: b
                        }) {
                            return [
                                ["frame-ancestors", "'none'"],
                                ["base-uri", "'self'"],
                                ["object-src", "'none'"],
                                ["script-src", `'report-sample' 'strict-dynamic' 'unsafe-eval' 'nonce-${b}' ${ih.map(c=>`'sha256-${c}'`).join(" ")}`],
                                ["report-uri", `https://csp.canva.com/_cspreport?app=sw_${a}&ro=true`]
                            ].map(([c, d]) => `${c} ${d}`).join("; ")
                        }
                    };
                var Wc = class {
                    constructor(a) {
                        this.config = a
                    }
                };
                var kh = class {
                    constructor() {
                        this.crypto = self.crypto
                    }
                };
                var Vc = class {
                    constructor(a) {
                        this.Yc = a
                    }
                };
                var ld = class {
                    constructor(a) {
                        var b = id();
                        this.rules = a;
                        this.fallback = b
                    }
                };
                var Xc = class {
                    constructor(a, b, c, d, e, f) {
                        var g = new kh,
                            h = new jh;
                        this.config = a;
                        this.Uf = b;
                        this.j = c;
                        this.sd = d;
                        this.Af = e;
                        this.zf = g;
                        this.ue = h;
                        this.l = f
                    }
                };
                var Zc = class {
                    Ba({
                        request: a
                    }) {
                        return this.B.options.Ob !== 1 ? a.mode === "navigate" : !1
                    }
                    async handle(a, b) {
                        let c;
                        try {
                            if (c = await this.I.fetch(a), (c === null || c === void 0 ? void 0 : c.status) !== 0 || (c === null || c === void 0 ? 0 : c.type.includes("opaque"))) return c
                        } catch (e) {}
                        var d = this.B;
                        return d.options.Ob !== 5 && d.options.Ob !== 1 && (d = this.options.qa, a = Uc(this.Gf, new URL(a.request.url), {
                            G: b
                        }), a = d != null && d > 500 ? await Promise.race([a, $a(d)]) : await a, a === null || a === void 0 ? 0 : a.ok) ? a : c !== null && c !== void 0 ? c : Response.error()
                    }
                    constructor(a,
                        b, c, d) {
                        this.options = a;
                        this.B = b;
                        this.I = c;
                        this.Gf = d;
                        this.name = "page"
                    }
                };
                var dd = class {
                    constructor() {
                        this.root = {
                            children: new Map,
                            config: void 0
                        }
                    }
                };
                var ed = "/ /folder /folder/* /folder/*/designs /folder/*/designs/* /folder/*/images /folder/*/images/* /folder/*/videos /folder/*/videos/* /folder/*/templates /folder/*/templates/* /your-projects /your-projects/videos /your-projects/videos/* /projects /projects/videos /projects/videos/* /library/* /library/*/videos /library/*/videos/* /dream-lab /assistant /assistant/* /ai /ai/* /ai/code /ai/code/* /s/designs /s/templates /offline-designs /shared-with-you /rewards /planner /design-reviews /classwork /menu /creators/apply /creators/template /creators/template/dashboard /creators/template/inspiration /creators/element /creators/my-items /creators/resources /creators/resources/videos /creators/resources/videos/* /creators/verify/* /creators/inspiration /creators/inspiration/campaigns/* /creators/welcome /creator-hub /contributors/upload /earnings /teams /teams/apps /teams/brand-control /teams/create /teams/designs /teams/folders /teams/groups /teams/groups/* /teams/layouts /teams/members /teams/settings /teams/timeline /groups/* /groups/*/designs /groups/*/folders /groups/*/members /pro-features /mockups /mockups/collection/* /mockups/mockup/* /smartmockups /smartmockups/collection/* /smartmockups/mockup/* /starred /team-stream /design-stream /trash /_design-spec-selector /your-apps /your-apps/* /portfolio /brand /brand/* /brand/brand-templates /brand/brand-templates/* /search/templates /search/designs /search /templates".split(" "),
                    fd = ["/settings", "/settings/*"];
                var nd = class {
                    Ba({
                        url: a
                    }) {
                        return a.pathname === "/popout"
                    }
                    async handle(a) {
                        try {
                            return await this.I.fetch(a)
                        } catch (b) {
                            return new Response(null, {
                                headers: {
                                    "content-type": "text/plain",
                                    "content-security-policy": "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; script-src 'none'; report-uri https://csp.canva.com/_cspreport?app=popout;"
                                }
                            })
                        }
                    }
                    constructor(a) {
                        this.I = a;
                        this.name = "popout"
                    }
                };
                var lh = ["/_ajax/", "/local-intercept/", "/_online"],
                    mh = new Set(["GET"]),
                    md = class {
                        resolve(a) {
                            if (mh.has(a.method)) {
                                var b = new URL(a.url);
                                if (!lh.some(c => b.pathname.startsWith(c)) && (b.hostname !== "localhost" || b.origin === this.options.Yf)) return this.Tf.find(c => c.Ba({
                                    request: a,
                                    url: b
                                }))
                            }
                        }
                        constructor(a) {
                            this.options = {
                                Yf: self.location.origin
                            };
                            this.Tf = a
                        }
                    };
                var jd = class {
                    Ba({
                        url: a
                    }) {
                        return this.B.options.og !== 1 ? a.pathname.startsWith("/_web_worker/") : !1
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a)
                        } catch (c) {
                            a = await this.ng.match(a.request.url, {
                                G: b
                            });
                            if (a != null) return a;
                            throw c;
                        }
                    }
                    constructor(a, b, c) {
                        this.B = a;
                        this.I = b;
                        this.ng = c;
                        this.name = "web_worker"
                    }
                };
                var nh = () => ({
                    requestId: R(1)
                });
                var oh = J(() => ({ ...nh(),
                    message: u(2, "OVERRIDE_NETWORK_STRATEGY"),
                    Gb: T(2)
                }));
                var ph = J(() => ({ ...nh(),
                    message: u(3, "GET_SW_RELEASE")
                }));
                var qh = J(() => ({ ...nh(),
                    message: u(4, "SKIP_WAITING")
                }));
                var ud = K(() => ({
                    message: [2, oh, 3, ph, 4, qh]
                }), nh);
                var vd = J(() => ({
                    message: u(3, "GET_SW_RELEASE"),
                    requestId: R(1),
                    release: R(2)
                }));
                var wd = J(() => ({
                    message: u(2, "OVERRIDE_NETWORK_STRATEGY"),
                    requestId: R(1),
                    Sa: T(2)
                }));
                var xd = J(() => ({
                    message: u(4, "SKIP_WAITING"),
                    requestId: R(1)
                }));
                var yd = J(() => ({
                    message: u(1, "MESSAGE_NOT_RECOGNISED"),
                    Qf: R(1)
                }));
                var zd = K(() => ({
                    message: [1, yd, 2, wd, 3, vd, 4, xd]
                }), () => ({}));
                var Bd = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.serviceWorker = b;
                        this.B = c;
                        this.l = d
                    }
                };
                var rh = class {
                    Sa() {
                        return this.Gb
                    }
                    constructor(a) {
                        this.options = a;
                        this.Gb = !1
                    }
                };
                var Y = L(() => [1, "N", 2, "O", 3, "A", 4, "C", {
                    Ja: !0
                }, 5, "B", 6, "D"]);
                var sh = J(() => ({
                    fe: R(1),
                    de: Q(2),
                    ee: Q(3),
                    pj: S(4)
                }));
                var th = () => ({
                    j: x(1, Sf),
                    O: C(8, wg),
                    $e: C(11, Y),
                    bf: C(12, Y),
                    af: D(42, Y),
                    Ze: C(7, Y),
                    df: C(40, Y),
                    Ye: D(41, Y),
                    gh: T(38),
                    la: T(39),
                    jb: S(14),
                    Oe: Q(18),
                    $c: T(20),
                    Ge: T(31),
                    Ie: T(21),
                    release: R(22),
                    Ed: z(26, Wf),
                    dg: P(36),
                    eg: Q(37),
                    ka: T(30),
                    userAgent: z(35, sh)
                });
                var uh = J(() => ({ ...th(),
                    mode: u(2, "REAL"),
                    N: R(27)
                }));
                var vh = J(() => ({ ...th(),
                    mode: u(3, "FAKE")
                }));
                var wh = K(() => ({
                    mode: [2, uh, 3, vh]
                }), th);
                var xh = !1,
                    yh = class {
                        setTag(a, b) {
                            this.tags[a] = b
                        }
                        setContext(a) {
                            this.context = a
                        }
                        error(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        D(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        Kd(a, b) {
                            this.console.warn(...Dd(this, "warning", a, b))
                        }
                        info(a, b) {
                            this.console.info(...Dd(this, "info", a, b))
                        }
                        debug(a, b) {
                            this.console.debug(...Dd(this, "debug", a, b))
                        }
                        toJSON() {
                            return {
                                name: this.name,
                                context: this.context,
                                tags: this.tags
                            }
                        }
                        constructor() {
                            var a = console;
                            this.name = "default";
                            this.tags = {};
                            if (!xh && typeof window === "object") {
                                const b =
                                    window.onerror;
                                window.onerror = (...d) => {
                                    typeof b === "function" && b(...d);
                                    console.error("unhandled error:", ...d)
                                };
                                const c = window.onunhandledrejection;
                                window.onunhandledrejection = d => {
                                    typeof c === "function" && c(d);
                                    console.error("[ConsoleErrorClient]: Unhandled promise rejection", d)
                                };
                                xh = !0
                            }
                            q(!0, "name must not contain a dot");
                            a instanceof yh ? (this.name = `${a.name}.${"default"}`, this.console = a.console) : this.console = a
                        }
                    };
                var zh = class {
                    constructor() {
                        this.Ad = {}
                    }
                };
                var ke = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(ke);
                            return d ? Pd(d, c) ? null : c : c
                        })
                    }
                    constructor(a = []) {
                        this.Sd = a;
                        this.name = ke.id
                    }
                };
                ke.id = "FilterErrors";
                var he = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(he);
                            return c
                        })
                    }
                    constructor() {
                        this.name = he.id
                    }
                };
                he.id = "HostRpcServiceErrors";
                var ie = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(ie);
                            return c
                        })
                    }
                    constructor() {
                        this.name = ie.id
                    }
                };
                ie.id = "HttpServiceErrors";
                var Sd = {
                    now: () => Date.now()
                };
                var Ah = class {
                        add(a) {
                            this.ab = this.Ve(this.ab);
                            this.list[this.ab] = a
                        }
                        find(a) {
                            let b = this.ab;
                            do {
                                if (this.list[b] && a(this.list[b])) return this.list[b];
                                b = this.We(b)
                            } while (b !== this.ab)
                        }
                        constructor() {
                            this.ac = 10;
                            this.ab = 0;
                            this.Ve = a => (a + 1) % this.ac;
                            this.We = a => (a + this.ac - 1) % this.ac;
                            this.list = Array(10)
                        }
                    },
                    fe = class {
                        setupOnce(a, b) {
                            a(c => {
                                const d = b().getIntegration(fe);
                                d && (Td(d, c) ? c = null : d.history.add({
                                    event: c,
                                    timestamp: Sd.now()
                                }));
                                return c
                            })
                        }
                        constructor(a) {
                            this.hg = a;
                            this.name = fe.id;
                            this.history = new Ah
                        }
                    };
                fe.id = "NoSuccessiveEvent";
                var ce = class {
                    setupOnce(a, b) {
                        a(c => {
                            var d, e;
                            if (!b().getIntegration(ce)) return c;
                            var f;
                            c.tags = (f = c.tags) !== null && f !== void 0 ? f : {};
                            c.tags["prior.unhandled.error.count"] = this.xd;
                            ((e = c.exception) === null || e === void 0 ? 0 : (d = e.values) === null || d === void 0 ? 0 : d.some(g => {
                                var h;
                                return ((h = g.mechanism) === null || h === void 0 ? void 0 : h.handled) === !1
                            })) && this.xd++;
                            return c
                        })
                    }
                    constructor() {
                        this.name = ce.id;
                        this.xd = 0
                    }
                };
                var je = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(je);
                            return d ? Yd(d, c) : c
                        })
                    }
                    Gc(a) {
                        var b, c, d;
                        const e = (a === null || a === void 0 ? 0 : a.url) ? Xd(this, a === null || a === void 0 ? void 0 : a.url) : void 0,
                            f = {};
                        if (a === null || a === void 0 ? 0 : (b = a.headers) === null || b === void 0 ? 0 : b["User-Agent"]) f["User-Agent"] = a === null || a === void 0 ? void 0 : a.headers["User-Agent"];
                        if (a === null || a === void 0 ? 0 : (c = a.headers) === null || c === void 0 ? 0 : c.Referer) f.Referer = Xd(this, a === null || a === void 0 ? void 0 : (d = a.headers) === null || d === void 0 ? void 0 : d.Referer);
                        return {
                            url: e,
                            headers: f
                        }
                    }
                    constructor(a, b) {
                        this.Td = a;
                        this.location = b;
                        this.name = je.id
                    }
                };
                je.id = "UrlScrubber";
                var Zd = [function(a) {
                    if (a = /canvaeditor\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }, function(a) {
                    if (a = /com.canva.editor\s\(version\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }];
                var le = ["TimeoutError", "HttpTimeoutError", /^ResizeObserver loop/, /^WHEN_CANCELLED$/, "ChunkLoadError", /^NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope':/, /Failed to register a ServiceWorker.*(The document is in an invalid state|An unknown error occurred when fetching the script|Failed to access storage|The URL protocol of the current origin \('null'\) is not supported|Timed out while trying to start the Service Worker)\.$/, /^(Can't find variable: indexedDB|Internal error opening backing store for indexedDB.open.|Encountered full disk while opening backing store for indexedDB.open.|An internal error was encountered in the Indexed Database server)/,
                        /Non-Error promise rejection captured with value: [Tt]imeout( \(.\))?/
                    ],
                    Bh = class {
                        Gc(a) {
                            var b, c, d;
                            if (!a.url) return {
                                headers: {
                                    "User-Agent": (d = a === null || a === void 0 ? void 0 : (b = a.headers) === null || b === void 0 ? void 0 : b["User-Agent"]) !== null && d !== void 0 ? d : ""
                                }
                            };
                            b = /^(\/design\/[a-zA-Z0-9_-]+\/)([a-zA-Z0-9_-]{22})(.*)/;
                            d = new URL(a.url);
                            d.search = "";
                            b.test(d.pathname) && (d.pathname = d.pathname.replace(b, "$1<REDACTED>$3"));
                            var e;
                            return {
                                url: d.toString(),
                                headers: {
                                    "User-Agent": (e = a === null || a === void 0 ? void 0 : (c = a.headers) ===
                                        null || c === void 0 ? void 0 : c["User-Agent"]) !== null && e !== void 0 ? e : ""
                                }
                            }
                        }
                        setContext({
                            user: a,
                            locale: b,
                            Bh: c
                        }) {
                            var d, e;
                            (e = this.R) === null || e === void 0 || (d = e.getCurrentHub()) === null || d === void 0 || d.configureScope(f => {
                                a && (f.setUser(a), f.setExtra("isAnonymousUser", !1));
                                b && f.setTag("locale", b);
                                c === null || c === void 0 || c.forEach((g, h) => f.setExtra(h, g))
                            })
                        }
                        setTags(a) {
                            for (const b of a) this.setTag(b.name, b.value)
                        }
                        setTag(a, b) {
                            if (this.R != null) {
                                {
                                    var c = a.length <= 32;
                                    const d = b.length <= 200;
                                    c && d ? c = ta(!0) : (c = (c ? "" : "Key name length cannot exceed 32 characters.\n") +
                                        (d ? "" : "Key value length cannot exceed 200 characters.\n"), c = ua(Error(c + `Tag: ${a}:${b}`)))
                                }
                                c.ok ? this.R.setTag(a, b) : ne(this, c.error)
                            }
                        }
                        setExtras(a) {
                            for (const b of a) this.setExtra(b.name, b.value)
                        }
                        setExtra(a, b) {
                            this.R != null && this.R.setExtra(a, Id(b))
                        }
                        error(a, b) {
                            pe(this, "error", a instanceof Error ? a : Error(a), b)
                        }
                        D(a, b) {
                            pe(this, "error", a, b)
                        }
                        Kd(a, b) {
                            pe(this, "warning", a, b)
                        }
                        info(a, b) {
                            pe(this, "info", a instanceof Error ? a : Error(a), b)
                        }
                        debug(a, b) {
                            pe(this, "debug", a instanceof Error ? a : Error(a), b)
                        }
                        constructor(a) {
                            var b =
                                self.Sentry,
                                c = new zh;
                            a: {
                                var d = self;
                                if (typeof d.Android === "object" && typeof d.Android.getPageLocation === "function") {
                                    let e;
                                    try {
                                        e = d.Android.getPageLocation()
                                    } catch (f) {
                                        d = void 0;
                                        break a
                                    }
                                    d = typeof e === "string" ? e : void 0
                                } else d = void 0
                            }
                            this.T = a;
                            this.Uc = [];
                            this.Qe = [];
                            this.R = b;
                            this.ye = c;
                            this.Zd = [];
                            this.gd = this.od = void 0;
                            this.allowUrls = "/dist/renderer/ canva.com canva.cn canva-dev.com canva-staging.com canva-staging.cn www.features.canva-internal.com www.features.canva-internal-staging.com canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-staging.com canva-apps-staging.cn".split(" ");
                            this.R ? me(this, a, {
                                td: d
                            }) : typeof self.suppressSentryInitializationError !== "undefined" && self.suppressSentryInitializationError === !0 || console.error("Sentry can not be found on the global scope.")
                        }
                    };
                var $e = class {
                        Qa() {
                            return new Ch
                        }
                    },
                    Ch = class {
                        ra() {
                            return new Dh
                        }
                        ta() {
                            return new Dh
                        }
                        Tb(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Dh)
                        }
                        async Sb(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Dh)
                        }
                        za() {}
                        async flush() {}
                    },
                    Dh = class {
                        Xb() {
                            return new Eh
                        }
                        abort() {}
                        Ga() {}
                        setAttribute() {
                            return this
                        }
                        setStatus() {
                            return this
                        }
                        kd() {
                            return !1
                        }
                        va() {
                            return !1
                        }
                        end() {
                            return {
                                Ca: () => ({}),
                                Da: () => ({})
                            }
                        }
                        za() {}
                        La() {}
                        Za() {}
                        constructor() {
                            this.name = "";
                            this.attrs = new Map;
                            this.U = "NOOP";
                            this.Ma = [];
                            this.status = "unset";
                            this.da = new Map;
                            this.startTime = performance.now();
                            this.fa = "span";
                            this.context = {
                                traceId: "",
                                spanId: "",
                                Jc: 0
                            };
                            this.links = []
                        }
                    },
                    Eh = class {
                        za() {}
                        La() {}
                        Za() {}
                        setAttribute() {}
                        Ga() {}
                    };
                var af = class {
                    ad(a) {
                        var b = [];
                        for (const c of a) c.parentSpanId && !this.rc.has(c.parentSpanId) ? (a = this.xb.get(c.parentSpanId) || [], a.push(c), this.xb.set(c.parentSpanId, a)) : b.push(c);
                        for (const c of b) b = c.context.spanId, se(this, c), this.xb.delete(b)
                    }
                    async flush() {}
                    constructor() {
                        this.xb = new Map;
                        this.rc = new Set
                    }
                };
                var Fh = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.tc = b;
                            this.name = "TelemetryExportError";
                            Object.setPrototypeOf(this, Fh.prototype)
                        }
                    },
                    Gh = class extends M {
                        constructor(a, b, c) {
                            super(a, b);
                            this.tc = c;
                            this.name = "SampledTracingExportError";
                            Object.setPrototypeOf(this, Gh.prototype)
                        }
                    };
                var bf = class {
                    async ad(a) {
                        if (a.length !== 0)
                            if (this.zb.size < this.bc) {
                                try {
                                    Ze(this.Id);
                                    var b = ye(a, c => {
                                        var d = this.Id;
                                        return d.Mc + (c - d.yc)
                                    })
                                } catch (c) {
                                    this.j.D(c, {
                                        ua: "OTLPSpanAdapter: Unable to convert spans",
                                        extra: new Map([
                                            ["spans", JSON.stringify(a.map(O), void 0, 2)]
                                        ])
                                    });
                                    return
                                }
                                try {
                                    const c = this.send(b);
                                    this.zb.add(c);
                                    c.catch(d => {
                                        this.j.D(d)
                                    }).finally(() => {
                                        this.zb.delete(c)
                                    })
                                } catch (c) {
                                    this.j.D(c)
                                }
                            } else this.j.D(new Fh("OTLPExporter: Concurrency Limit Reached"))
                    }
                    async flush() {
                        await Promise.all(this.zb)
                    }
                    constructor(a,
                        b, c, d) {
                        this.config = a;
                        this.j = b;
                        this.Id = c;
                        this.send = d;
                        this.zb = new Set;
                        var e;
                        this.bc = (e = a.bc) !== null && e !== void 0 ? e : Infinity
                    }
                };
                var df = ({
                    fg: a,
                    url: b,
                    fb: c,
                    fetch: d = self.fetch
                }) => async e => {
                    var f, g;
                    e = new Request(b, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        priority: "low",
                        signal: (f = (g = AbortSignal).timeout) === null || f === void 0 ? void 0 : f.call(g, a)
                    });
                    try {
                        const h = await d(e);
                        if (h.status > 299 || h.status < 200) throw c != null ? new Gh(`SendWithFetch: Failed to export (status: ${h.status})`, c) : new Fh(`SendWithFetch: Failed to export (status: ${h.status})`);
                    } catch (h) {
                        throw f = h instanceof
                        Error && h.name === "AbortError" ? `SendWithFetch: Fetch request timeout: ${a}ms` : "SendWithFetch: Failed to export", c != null ? new Gh(f, c) : new Fh(f);
                    }
                };
                var ef = class {
                    build(a) {
                        return this.ud.reduce((b, c) => c(b), {
                            Ua: () => {},
                            process: b => a.ad(b),
                            flush: () => a.flush()
                        })
                    }
                    constructor() {
                        this.ud = []
                    }
                };
                var Ae = class {
                    Ua() {}
                    process(a) {
                        for (const b of a) b.va() && (this.buffer.push(b), this.buffer.length >= this.config.Jb && Be(this));
                        this.buffer.length > 0 && this.Xa == null && (this.Xa = setTimeout(() => Be(this), this.config.Kb))
                    }
                    async flush() {
                        Be(this);
                        await this.Ta.flush()
                    }
                    constructor(a, b, c) {
                        this.Ta = a;
                        this.config = b;
                        this.j = c;
                        this.buffer = []
                    }
                };
                var ff = class {
                        Ua(a) {
                            const b = a.context.traceId,
                                c = this.Wb.get(b);
                            c != null ? (c.Nb += 1, a.G === void 0 && (c.root = a)) : this.Wb.set(b, {
                                Nb: 1,
                                root: a
                            });
                            this.Ta.Ua(a)
                        }
                        process(a) {
                            for (const c of a) {
                                a = c.context.traceId;
                                var b = this.Wb.get(a);
                                b != null && (--b.Nb, b.Nb === 0 && (b = this.Pf.process(b), this.Ta.process(b), this.Wb.delete(a)))
                            }
                        }
                        flush() {
                            return this.Ta.flush()
                        }
                        constructor(a) {
                            var b = new Hh;
                            this.Ta = a;
                            this.Pf = b;
                            this.Wb = new Map
                        }
                    },
                    Hh = class {
                        process(a) {
                            const b = [];
                            Ce(this, a.root, b);
                            return b
                        }
                    };
                var Ih = Ie(16),
                    Jh = Ie(8),
                    He = Array(32);
                var Ne = class {
                        Xb() {
                            return this.Y || new Eh
                        }
                        Ga(a) {
                            this.Ya || (this.attrs = new Map([...this.attrs, ...a]))
                        }
                        setAttribute(a, b, c = !1) {
                            if (this.Ya && !c) return this;
                            this.attrs.set(a, b);
                            return this
                        }
                        setStatus(a) {
                            try {
                                if (this.Ya) return this;
                                this.status = a;
                                return this
                            } catch (b) {
                                return this.status = "error", this.j.D(b), this
                            }
                        }
                        kd() {
                            return !this.ended
                        }
                        va() {
                            return (this.context.Jc & 1) !== 0
                        }
                        abort() {
                            try {
                                var a;
                                if (!this.aborted) {
                                    this.aborted = !0;
                                    this.setAttribute("span_aborted", !0);
                                    for (const b of this.Na) b.abort();
                                    this.ended || (this.Ya =
                                        this.ended = !0, this.timeout && clearTimeout(this.timeout), ((a = this.pa) === null || a === void 0 ? 0 : a.frameRate) && Pe(this.pa.frameRate), this.endTime = this.getCurrentTime(), this.duration = this.endTime - this.startTime, Le(this), Oe(this), this.kb.forEach(b => b()), this.ba.Wa.process([this]))
                                }
                            } catch (b) {
                                this.j.D(b)
                            }
                        }
                        end(a, b, c) {
                            try {
                                if (this.ended) return {
                                    Ca: this.Ca,
                                    Da: this.Da
                                };
                                this.ended = !0;
                                return Qe(this, a, b, c)
                            } catch (d) {
                                return this.j.D(d, {
                                    ua: "Error ending span",
                                    extra: new Map(O(this))
                                }), {
                                    Ca: this.Ca,
                                    Da: this.Da
                                }
                            }
                        }
                        La(a) {
                            try {
                                this.ended &&
                                    this.aborted || (this.ended && this.ec ? a(this.ec) : this.lb.push(a))
                            } catch (b) {
                                this.j.D(b)
                            }
                        }
                        Za(a) {
                            try {
                                this.ended && this.aborted ? a() : this.kb.push(a)
                            } catch (b) {
                                this.j.D(b)
                            }
                        }
                        za(a, b) {
                            try {
                                q(a.length > 0, "Event name cannot be empty");
                                const {
                                    Lb: c,
                                    Mb: d
                                } = Je(b), e = new Kh({
                                    name: a,
                                    G: this,
                                    ba: this.ba,
                                    ma: this.ma,
                                    U: this.U,
                                    j: this.j,
                                    startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                    Y: void 0,
                                    fa: "event",
                                    gb: d === null || d === void 0 ? void 0 : d.gb,
                                    getCurrentTime: this.getCurrentTime,
                                    aa: this.aa,
                                    attrs: (d === null || d === void 0 ? void 0 : d.attrs) ||
                                        c,
                                    xc: this.startTime
                                });
                                this.Ma.push(e)
                            } catch (c) {
                                this.j.D(c)
                            }
                        }
                        get da() {
                            return this.ma()
                        }
                        constructor(a) {
                            var b;
                            this.Ya = this.aborted = this.ended = !1;
                            this.attrs = new Map;
                            this.Ma = [];
                            this.Na = [];
                            this.status = "unset";
                            this.ec = void 0;
                            this.lb = [];
                            this.kb = [];
                            this.Ca = f => Ge({
                                span: this,
                                j: this.j,
                                aa: this.aa,
                                ...f
                            });
                            this.Da = () => this.va() ? this.context : void 0;
                            this.name = a.name;
                            this.ended = !1;
                            this.ba = a.ba;
                            var c;
                            this.getCurrentTime = (c = a.getCurrentTime) !== null && c !== void 0 ? c : f => {
                                var g;
                                return (g = f === null || f === void 0 ? void 0 : f.vc) !==
                                    null && g !== void 0 ? g : performance.now()
                            };
                            c = Jh();
                            this.identifier = `${this.name}_${c}`;
                            this.startTime = this.getCurrentTime({
                                id: this.identifier,
                                vc: a.startTime
                            });
                            this.U = a.U;
                            this.Y = a.Y;
                            this.fa = a.fa;
                            this.j = a.j;
                            this.pa = a.pa;
                            const d = ((b = a.G) === null || b === void 0 ? void 0 : b.context.traceId) || Ih();
                            a.attrs && (this.attrs = new Map(a.attrs));
                            this.attrs.set("span_type", this.fa);
                            b = a.ba.Fc.Bd({
                                traceId: d,
                                ag: this.name,
                                attributes: this.attrs,
                                G: a.G
                            }) ? 1 : 0;
                            this.context = {
                                spanId: c,
                                traceId: d,
                                Jc: b
                            };
                            this.links = a.links || [];
                            a.G && (this.parentSpanId =
                                a.G.context.spanId, this.G = a.G);
                            this.ma = a.ma;
                            this.aa = a.aa;
                            this.setStatus("ok");
                            this.timeout = setTimeout(() => {
                                this.name += ".timed_out";
                                this.setAttribute("timed_out", !0);
                                this.end("ok")
                            }, a.timeout || 12E4);
                            for (const f of this.ba.plugins) try {
                                var e;
                                (e = f.Ua) === null || e === void 0 || e.call(f, this)
                            } catch (g) {
                                this.j.D(g, {
                                    ua: "Error calling plugin onSpanStart",
                                    extra: new Map([
                                        ["plugin", f.name], ...O(this)
                                    ])
                                })
                            }
                            this.ba.Wa.Ua(this)
                        }
                    },
                    Kh = class extends Ne {
                        constructor(a) {
                            super(a);
                            a.xc != null && (this.setAttribute("parent_relative_start_ms",
                                Math.round(this.startTime - a.xc)), this.setAttribute("parent_start", a.xc));
                            a.gb && this.setAttribute("event_type", a.gb);
                            this.end("ok", this.startTime)
                        }
                    };
                var Re = class {
                    get aborted() {
                        return this.S.aborted
                    }
                    La(a) {
                        try {
                            this.ended && this.aborted || (this.ended && this.fc ? a(this.fc) : this.lb.push(a))
                        } catch (b) {
                            this.j.D(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Za(a) {
                        try {
                            this.ended && this.aborted ? a() : this.kb.push(a)
                        } catch (b) {
                            this.j.D(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    za(a, b) {
                        try {
                            const c = Ke(b);
                            this.Ke.forEach((e, f) => {
                                c.attrs.has(f) || c.attrs.set(f, e)
                            });
                            c.attrs.set("user_operation", this.name);
                            c.attrs.set("is_uop", !0);
                            c.attrs.set("sample_rate_override",
                                1);
                            const d = this.S.attrs.get("uop_attr_type");
                            d != null && c.attrs.set("uop_attr_type", d);
                            this.nb && c.attrs.set("uop_persist", !0);
                            this.S.za(a, c)
                        } catch (c) {
                            this.j.D(c, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Ga(a) {
                        this.S.Ga(a)
                    }
                    setAttribute(a, b) {
                        this.S.setAttribute(a, b)
                    }
                    constructor(a, b, c, d, e, f) {
                        var g = new Set;
                        this.name = a;
                        this.S = b;
                        this.Ke = c;
                        this.j = d;
                        this.nb = e;
                        this.cb = f;
                        this.dc = g;
                        this.lb = [];
                        this.kb = [];
                        this.fc = void 0;
                        this.ended = !1
                    }
                };
                var jf = class {
                    Bd({
                        ag: a,
                        attributes: b,
                        G: c
                    }) {
                        b = b === null || b === void 0 ? void 0 : b.get("sample_rate_override");
                        if (b != null && typeof b === "number") {
                            if (b < 0 || b > 1) this.j.error(Error(`Invalid sample rate (${b}) for ${a}`)), b = this.sampleRate;
                            return Math.random() < b
                        }
                        a = this.rf(c);
                        return a != null ? a : Math.random() < this.sampleRate
                    }
                    constructor(a = 0, b) {
                        var c = We;
                        this.sampleRate = a;
                        this.j = b;
                        this.rf = c;
                        this.sampleRate = Math.min(Math.max(0, this.sampleRate), 1)
                    }
                };
                var Lh = class {
                    add(a, b = 1) {
                        q(isFinite(a));
                        q(b > 0);
                        if (this.ha === 0) this.ha = b, this.tb = this.ub = this.Ka = a, this.wb = 0;
                        else {
                            this.ha += b;
                            const c = a - this.Ka;
                            this.Ka += b * c / this.ha;
                            this.wb += b * c * (a - this.Ka);
                            this.ub = Math.min(this.ub, a);
                            this.tb = Math.max(this.tb, a)
                        }
                    }
                    addAll(a) {
                        for (const b of a) this.add(b)
                    }
                    get count() {
                        return this.ha
                    }
                    get tf() {
                        return this.Ka
                    }
                    get min() {
                        return this.ub
                    }
                    get max() {
                        return this.tb
                    }
                    get Nf() {
                        return this.ha === 0 ? NaN : this.ha === 1 ? 0 : Math.max(this.wb, 0) / this.ha
                    }
                    get Mf() {
                        return Math.sqrt(this.Nf)
                    }
                    constructor() {
                        this.ha =
                            0;
                        this.Ka = NaN;
                        this.wb = 0;
                        this.tb = this.ub = NaN
                    }
                };
                var Mh = class {
                        start() {
                            this.Ha = new Lh;
                            this.Pb = void 0;
                            this.Zb = this.Ac.requestAnimationFrame(this.wd);
                            this.document.addEventListener("visibilitychange", this.pd)
                        }
                        get jd() {
                            return this.document.visibilityState === "visible"
                        }
                        constructor() {
                            var a = window.document;
                            this.Ac = window;
                            this.document = a;
                            this.Ha = new Lh;
                            this.wd = b => {
                                this.Pb !== void 0 && this.Ha.add(Math.min(b - this.Pb, 5E3));
                                this.Pb = this.jd ? b : void 0;
                                this.Zb = this.Ac.requestAnimationFrame(this.wd)
                            };
                            this.pd = () => {
                                this.jd || (this.Pb = void 0)
                            }
                        }
                    },
                    Nh = class {
                        reset() {
                            this.frameCount =
                                0;
                            this.nd = new Lh;
                            this.hd.clear()
                        }
                        constructor() {
                            this.frameCount = 0;
                            this.nd = new Lh;
                            this.hd = new Set
                        }
                    },
                    Xe = new Nh;
                var Oh = class {
                    Ua() {}
                    process() {}
                    async flush() {}
                };
                var Ph = class {
                    Bd() {
                        return !0
                    }
                };
                var Qh = class {
                    ra(a, b) {
                        return this.ta(a, void 0, b)
                    }
                    ta(a, b, c) {
                        try {
                            var d;
                            const {
                                Lb: e,
                                Mb: f
                            } = Je(c), g = ha(this.U(b), "No instrumentation scope found for '{}' of parent '{}:{}'", a, b === null || b === void 0 ? void 0 : b.U, b === null || b === void 0 ? void 0 : b.context.spanId), h = (f === null || f === void 0 ? 0 : (d = f.performance) === null || d === void 0 ? 0 : d.Xh) ? this.cc.frameRate() : void 0;
                            h === null || h === void 0 || h.start();
                            const k = (f === null || f === void 0 ? 0 : f.bg) ? Te({
                                    tc: { ...f.bg,
                                        startTime: f.startTime,
                                        timeout: f.timeout
                                    },
                                    l: this.Pc,
                                    G: b,
                                    we: [this.config.Yb,
                                        this.Yb
                                    ].filter(Pa),
                                    j: this.j,
                                    Cf: n => {
                                        b = n
                                    }
                                }) : Ue(b),
                                l = new Ne({
                                    name: a,
                                    G: b,
                                    ba: this.config,
                                    ma: this.ma,
                                    U: g,
                                    j: this.j,
                                    getCurrentTime: this.getCurrentTime,
                                    startTime: f === null || f === void 0 ? void 0 : f.startTime,
                                    timeout: f === null || f === void 0 ? void 0 : f.timeout,
                                    aa: this.aa,
                                    attrs: (f === null || f === void 0 ? void 0 : f.attrs) || e,
                                    links: f === null || f === void 0 ? void 0 : f.links,
                                    Y: k,
                                    fa: "span",
                                    pa: {
                                        frameRate: h
                                    }
                                });
                            k !== null && k !== void 0 && (l.attrs.get("is_uop") || l.setAttribute("user_operation", k.name), k.nb == null && (k.nb = l.va(), k.nb && k.S.setAttribute("uop_persist", !0)), k.dc.add(l));
                            b != null && b instanceof Ne && b.Na.push(l);
                            return l
                        } catch (e) {
                            return this.j.D(e), new Dh
                        }
                    }
                    Tb(a, b, c) {
                        {
                            let e, f;
                            typeof c === "function" ? f = c : e = Ke(c);
                            a = this.ta(a, b, e);
                            try {
                                var d = f(a)
                            } catch (g) {
                                throw a.setStatus("error"), g;
                            } finally {
                                a.end()
                            }
                        }
                        return d
                    }
                    async Sb(a, b, c) {
                        return Ye(this, a, b, c)
                    }
                    za(a, b) {
                        try {
                            const {
                                Lb: c,
                                Mb: d
                            } = Je(b);
                            q(a.length > 0, "Event name cannot be empty");
                            const e = ha(this.U(), "Event ({}) requires instrumentation scope", a);
                            new Kh({
                                name: a,
                                ba: this.config,
                                ma: this.ma,
                                U: e,
                                Y: void 0,
                                j: this.j,
                                fa: "event",
                                gb: d === null || d === void 0 ? void 0 : d.gb,
                                getCurrentTime: this.getCurrentTime,
                                startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                aa: this.aa,
                                attrs: (d === null || d === void 0 ? void 0 : d.attrs) || c,
                                G: void 0
                            })
                        } catch (c) {
                            this.j.D(c)
                        }
                    }
                    async flush() {
                        try {
                            await this.config.Wa.flush()
                        } catch (a) {
                            this.j.D(a)
                        }
                    }
                    constructor(a, b, c, d, e, f, g, h = l => {
                        var n;
                        return (n = l === null || l === void 0 ? void 0 : l.vc) !== null && n !== void 0 ? n : performance.now()
                    }, k = {
                        frameRate: () => new Mh
                    }) {
                        this.U = a;
                        this.aa = b;
                        this.config = c;
                        this.ma = d;
                        this.j = e;
                        this.Pc = f;
                        this.Yb = g;
                        this.getCurrentTime =
                            h;
                        this.cc = k
                    }
                };
                var hf = class {
                        constructor(a) {
                            var b;
                            this.Fc = (b = a.Fc) !== null && b !== void 0 ? b : new Ph;
                            var c;
                            this.Wa = (c = a.Wa) !== null && c !== void 0 ? c : new Oh;
                            var d;
                            this.plugins = (d = a.plugins) !== null && d !== void 0 ? d : [];
                            var e;
                            this.da = (e = a.da) !== null && e !== void 0 ? e : new Map;
                            this.Yb = a.Yb
                        }
                    },
                    gf = class {
                        Qa(a) {
                            try {
                                return new Qh(() => a, this, this.config, () => new Map([...this.config.da, ["service.name", this.Xf + " | " + a]]), this.j, this.Pc, void 0, this.getCurrentTime, this.cc)
                            } catch (c) {
                                var b;
                                this.j.D(c, {
                                    extra: new Map([
                                        ["attrs", Object.fromEntries((b = this.config) ===
                                            null || b === void 0 ? void 0 : b.da)]
                                    ])
                                });
                                return new Ch
                            }
                        }
                        constructor(a, b, c = e => {
                            var f;
                            return (f = e === null || e === void 0 ? void 0 : e.vc) !== null && f !== void 0 ? f : performance.now()
                        }, d = {
                            frameRate: () => new Mh
                        }) {
                            this.config = a;
                            this.j = b;
                            this.getCurrentTime = c;
                            this.cc = d;
                            this.Xf = (a = this.config.da.get("service.name")) && typeof a === "string" ? a : "no_service_name";
                            this.Pc = this.Qa("telemetry.user_operation")
                        }
                    };
                var cf = class {
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.Mc = a;
                        this.yc = b;
                        this.threshold = 1E4
                    }
                };
                var mf = class {
                    constructor(a, b) {
                        this.Gd = a;
                        this.Fd = b
                    }
                };
                var of = class {
                    Cc(a) {
                        const b = this.l.ra("time_until_idle");
                        b.La(() => this.Oa.delete(a));
                        b.Za(() => this.Oa.delete(a));
                        this.Oa.set(a, {
                            span: b,
                            Xa: self.setTimeout(() => lf(this, a), 5E3),
                            Db: [performance.now()]
                        })
                    }
                    Dc(a) {
                        a = this.Oa.get(a);
                        a != null && (a.Db = a.Db.slice(-5).concat(performance.now()))
                    }
                    constructor(a) {
                        this.l = a;
                        this.Oa = new Map
                    }
                };
                var nf = class {
                    Cc(a) {
                        const b = this.l.ra("time_to_second_fetch_event", {
                            timeout: this.options.gg
                        });
                        b.La(() => this.qb.delete(a));
                        b.Za(() => this.qb.delete(a));
                        this.qb.set(a, b)
                    }
                    Dc(a) {
                        const b = this.qb.get(a);
                        b != null && (b.end(), this.qb.delete(a))
                    }
                    constructor(a) {
                        this.options = {
                            gg: 3E4
                        };
                        this.l = a;
                        this.qb = new Map
                    }
                };
                var rf = class {
                    constructor() {
                        this.Zc = !1;
                        this.$b = null
                    }
                };
                (function() {
                    var a;
                    const b = performance.now(),
                        c = la("page", wh.P);
                    var d;
                    const e = (d = c.release) !== null && d !== void 0 ? d : self.bootstrap.release;
                    var f;
                    d = (f = c.j) !== null && f !== void 0 ? f : la("errorService", Sf.P);
                    var g;
                    f = (g = c.Ed) !== null && g !== void 0 ? g : la("telemetryService", Wf.P);
                    a: switch (d.M) {
                        case "CONSOLE":
                            g = new yh;
                            break a;
                        case "SENTRY":
                            g = new Bh(d);
                            break a;
                        default:
                            throw new E(d);
                    }
                    const h = g,
                        {
                            Ia: k,
                            rb: l,
                            wa: n
                        } = sf({
                            location: self.location,
                            T: f,
                            fb: c.dg,
                            hc: c.eg,
                            userAgent: c.userAgent,
                            C: {
                                j: h
                            }
                        });
                    g = k.Qa("service_worker.install");
                    var m;
                    const r = g.ra(`boot.${(m=(a=self.serviceWorker)===null||a===void 0?void 0:a.state)!==null&&m!==void 0?m:"na"}`, {
                        startTime: 0
                    });
                    a = g.ta("main", r, {
                        startTime: b
                    });
                    var p, w;
                    const v = new rh({
                        Ob: c.bf,
                        fi: (p = c.af) !== null && p !== void 0 ? p : 1,
                        rd: c.$e,
                        Xc: c.Ze,
                        le: (w = c.Ye) !== null && w !== void 0 ? w : 1,
                        og: c.df
                    });
                    if (c.$c) try {
                        td({
                            serviceWorker: self,
                            C: {
                                j: h,
                                Ia: k,
                                rb: l,
                                wa: n
                            },
                            O: c.O,
                            B: v,
                            N: c.mode === "REAL" ? c.N : location.origin,
                            jb: c.jb,
                            xe: () => JSON.stringify(c, void 0, 2),
                            qa: c.Oe,
                            ka: c.ka,
                            la: c.la
                        })
                    } catch (A) {
                        h.D(A)
                    }
                    Cd({
                        serviceWorker: self,
                        B: v,
                        release: e,
                        C: {
                            Ia: k
                        }
                    });
                    self.addEventListener("activate", A => {
                        A.waitUntil(async function() {
                            var y, I;
                            c.Ge && await self.clients.claim().catch(V => h.D(V));
                            c.$c && v.options.Ob !== 1 ? await ((y = self.registration.navigationPreload) === null || y === void 0 ? void 0 : y.enable().catch(() => {})) : await ((I = self.registration.navigationPreload) === null || I === void 0 ? void 0 : I.disable().catch(() => {}))
                        }())
                    });
                    self.addEventListener("install", () => {
                        c.Ie && self.skipWaiting()
                    });
                    a.end();
                    Promise.resolve().then(() => {
                        r.end();
                        l.$b = Date.now()
                    })
                })();
            }).call(self, self._5c0f058b2d917619b177d32cbc4c572b);
        },

        /***/
        692950:
            (_, __, r) => r(476834)

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/
        __webpack_require__.O(0, [95433], () => (__webpack_exec__(476834), __webpack_exec__(692950)));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
])
//# sourceMappingURL=sourcemaps/hjfept.4b22497ec4866824.js.map