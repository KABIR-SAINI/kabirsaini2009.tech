(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [70911], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var Ff = __c.Ff;
                var E = __c.E;
                var w = __c.w;
                var T3b = function(a) {
                        return () => a
                    },
                    c6 = function(a, b, c, d) {
                        return new U3b(a, b, c, d)
                    },
                    d6 = function(a, b) {
                        return b(a)
                    },
                    V3b = function(a, b, c) {
                        return c(a, b)
                    },
                    W3b = function(a, b) {
                        return b(a)
                    },
                    e6 = function(a, b) {
                        return a === b || b.map(c => a.$sa(X3b(c)))
                    },
                    Z3b = function(a, b) {
                        return a.Uua(b).map(c => new Y3b(c, d => d.props[b]))
                    },
                    X3b = function(a) {
                        w(a instanceof f6);
                        return a
                    },
                    h6 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" ||
                                    a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind === "array" && g6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : g6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : g6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && $3b(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    g6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!h6(a[c], b[c])) return !1;
                        return !0
                    },
                    $3b = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!h6(a[f], b[f])) return !1;
                        return !0
                    },
                    i6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    j6 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return a4b(c.value);
                            case 1:
                                const f =
                                    j6(a, b, c.Gw);
                                return b4b[c.name].map(r => k6(r, f));
                            case 2:
                                const g = j6(a, b, c.t7a),
                                    h = j6(a, b, c.u7a);
                                return c4b[c.name].map(r => d4b(r, g, h));
                            case 3:
                                const k = c.args.map(r => r.kind !== 13 ? new e4b(j6(a, b, r)) : new f4b(j6(a, b, r.dIb))),
                                    l = c.name;
                                switch (l) {
                                    case 0:
                                    case 1:
                                        var d = k.map(r => r.Hqa(t => t.type, t => t.type.PO()));
                                        return d6(d, r => l6.union(...r).map(t => g4b[l](t).map(v => h4b(v, k))));
                                    default:
                                        return i4b[l].map(r => h4b(r, k))
                                }
                            case 4:
                                return j4b(j6(a, b, c.t$), (r, t) => k4b(a, b, c.param, t, c.body).map(v => l4b[c.name](t, v.resultType).map(u =>
                                    m4b(u, r, v))));
                            case 5:
                                const m = c.entries.map(([r, t]) => [j6(a, b, r), j6(a, b, t)]);
                                d = l6.union(...m.map(([r]) => r.type));
                                var e = l6.union(...m.map(([, r]) => r.type));
                                return V3b(d, e, (r, t) => n4b[0](r, t).map(v => o4b(v, m)));
                            case 6:
                                const n = Ff(c.fields, r => j6(a, b, r));
                                d = Ff(n, r => r.type);
                                return W3b(d, r => p4b[0](r).map(t => q4b(t, n)));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = j6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.Xlb.map(r => k6(r, p, {
                                    Sr: !0
                                }));
                            case 8:
                                return d = j6(a,
                                    b, c.base), r4b(d, c.oMb);
                            case 9:
                                return s4b(b, c.name);
                            case 10:
                                return d = __c.Ad(c.defs, r => j6(a, b, r)), t4b(a, b, d, c.body);
                            case 11:
                                d = j6(a, b, c.test).as(l6.Gi);
                                e = j6(a, b, c.BBb);
                                const q = j6(a, b, c.alternate);
                                return u4b(d, e, q);
                            case 12:
                                return j6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    k4b = function(a, b, c, d, e) {
                        return j6(a, b.define(c, d), e).map(f => v4b.of(d, f.type, g => h => f.eval(g.define(c, h))))
                    },
                    a4b = function(a) {
                        switch (typeof a) {
                            case "string":
                                return m6(l6.string, a);
                            case "number":
                                return m6(l6.number, a);
                            case "boolean":
                                return m6(l6.Gi,
                                    a);
                            case "undefined":
                                return m6(l6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    r4b = function(a, b) {
                        return a.map(c => Z3b(c.type, b).map(({
                            type: d,
                            get: e
                        }) => k6(new n6(c.type, d, e), c)))
                    },
                    s4b = function(a, b) {
                        return a.resolve(b).map(c => o6.of(c, d => d.resolve(b)))
                    },
                    t4b = function(a, b, c, d) {
                        const e = __c.Ad(c, f => f.type);
                        return w4b(j6(a, new p6(new Map(e), b), d), f => {
                            const g = __c.Ad(c, h => h.eval(f));
                            return new p6(new Map(g), f)
                        })
                    },
                    u4b = function(a, b, c) {
                        return b.map(d => c.map(e => {
                            const f = l6.union(d.type, e.type);
                            return o6.of(f, g => {
                                const h =
                                    a.eval(g),
                                    k = d.eval(g),
                                    l = e.eval(g);
                                return () => h() ? k() : l()
                            })
                        }))
                    },
                    k6 = function({
                        jma: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new o6(b, g => {
                            const h = f.eval(g);
                            if (e === null || e === void 0 ? 0 : e.Sr) {
                                const k = x4b(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    d4b = function({
                        jma: a,
                        v7a: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new o6(c, k => {
                            const l = g.eval(k),
                                m = h.eval(k);
                            return () => d(l(), m())
                        })
                    },
                    h4b = function({
                        x7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.Ima(h => h.as(a), h => h.as(e !== null &&
                            e !== void 0 ? e : e = l6.t$(a))));
                        return new o6(b, g => {
                            const h = l => l.eval(g),
                                k = f.map(l => l.Ima(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.Hqa(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    m4b = function({
                        S7a: a,
                        resultType: b,
                        reduce: c
                    }, d, e) {
                        const f = y4b(e, a);
                        return o6.of(b, g => {
                            const h = d.eval(g),
                                k = f.eval(g),
                                l = x4b(m => {
                                    m = m.map(T3b);
                                    return [m, m.map(k)]
                                });
                            return () => {
                                const [m, n] = l(h());
                                return c(m, n)
                            }
                        })
                    },
                    o4b = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new o6(c,
                            g => {
                                const h = f.map(([k, l]) => [k.eval(g), l.eval(g)]);
                                return () => d(h.map(([k, l]) => [k(), l()]))
                            })
                    },
                    q4b = function({
                        w7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = z4b(a, (g, h) => d[h].as(g));
                        return new o6(b, g => {
                            const h = A4b(f, k => k.eval(g));
                            return () => c(B4b(h, k => k()))
                        })
                    },
                    m6 = function(a, b) {
                        const c = T3b(b);
                        return new o6(a, () => c)
                    },
                    j4b = function(a, b) {
                        return a.type.PO().map(c => b(a.as(l6.t$(c)), c))
                    },
                    w4b = function(a, b) {
                        return new o6(a.type,
                            c => a.eval(b(c)))
                    },
                    y4b = function(a, b) {
                        if (!e6(a.resultType, b)) throw Error(`type ${a.resultType} is not assignable to expected type: ${b}`);
                        return a
                    },
                    x4b = function(a) {
                        let b;
                        return c => {
                            if (b && q6.Kh(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    z4b = function(a, b) {
                        return Ff(a, b)
                    },
                    A4b = function(a, b) {
                        return Ff(a, b)
                    },
                    B4b = function(a, b) {
                        return Ff(a, b)
                    },
                    G4b = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const H = this.Jia,
                                    K = this.Cga,
                                    I = this.sEa,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, O => O !=
                                    null ? H(O) : void 0, (O, S, V) => V != null ? K(O, S, V) : void 0, (O, S, V, ba) => V != null ? I(O, S, V, ba) : ba.delete(S))
                            }
                            rD() {
                                return new d(this.type, this.Jia, this.Cga, (H, K) => {
                                    throw H.error(K, "read-only field");
                                })
                            }
                            F7(H) {
                                return H ? new d(this.type, this.Jia, (K, I, M) => {
                                    M = this.Cga(K, I, M);
                                    M != null && H(K, I, M);
                                    return M
                                }, (K, I, M, O) => {
                                    M != null && H(K, I, M);
                                    this.sEa(K, I, M, O)
                                }) : this
                            }
                            Nub(H, K) {
                                const I = this.Jia,
                                    M = this.Cga,
                                    O = this.sEa;
                                return C4b(this.type, S => {
                                    const V = () => M(H, K, S.qh.get(K));
                                    return {
                                        Rfb: () => I(V()),
                                        DNa: V,
                                        ssb: ba => O(H, K, ba, S.qh)
                                    }
                                })
                            }
                            constructor(H,
                                K, I, M) {
                                this.type = H;
                                this.Jia = K;
                                this.Cga = I;
                                this.sEa = M
                            }
                        }
                        a = new d(b.string, H => H, r6("string", H => H.value), s6("string"));
                        const e = new d(b.Gi, H => H, r6("boolean", H => H.value), s6("boolean")),
                            f = (new d(b.number, H => H, r6("int32", H => H.value), s6("int32"))).F7(H => Number.isInteger(H)),
                            g = (new d(b.number, H => H, r6("double", H => H.value), s6("double"))).F7(H => Number.isFinite(H)),
                            h = new d(b.instance("Fill"), H => c.instance("Fill", H), r6("fill", H => H.value), s6("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.rD(),
                            r = e.rD(),
                            t = f.rD(),
                            v = g.rD(),
                            u = h.rD(),
                            x = k.rD(),
                            y = l.rD(),
                            A = m.rD(),
                            z = n.rD(),
                            B = p.rD(),
                            G = {
                                [0]: {
                                    [0]: {
                                        string: a,
                                        boolean: e,
                                        int32: f,
                                        double: g,
                                        fill: h
                                    },
                                    [1]: {
                                        string: q,
                                        boolean: r,
                                        int32: t,
                                        double: v,
                                        fill: u
                                    }
                                },
                                [1]: {
                                    [0]: {
                                        string: k,
                                        boolean: l,
                                        int32: m,
                                        double: n,
                                        fill: p
                                    },
                                    [1]: {
                                        string: x,
                                        boolean: y,
                                        int32: A,
                                        double: z,
                                        fill: B
                                    }
                                }
                            };
                        return (H, K) => {
                            const I = new D4b(H),
                                M = Ff(K, S => S.key),
                                O = Ff(K, S => {
                                    var V = S.tWa;
                                    const ba = S.uTa;
                                    switch (S.type) {
                                        case "string":
                                            V = G[V][ba].string.F7(E4b(S.fL));
                                            break;
                                        case "boolean":
                                            V = G[V][ba]["boolean"];
                                            break;
                                        case "double":
                                            V =
                                                G[V][ba]["double"].F7(F4b(S.range));
                                            break;
                                        case "int32":
                                            V = G[V][ba].int32.F7(F4b(S.range));
                                            break;
                                        case "fill":
                                            V = G[V][ba].fill;
                                            break;
                                        default:
                                            throw new E(S);
                                    }
                                    return V.Nub(I, S.key)
                                });
                            return {
                                N9a: new Map(Object.entries(O).map(([S, V]) => [M[S], V.type])),
                                eval: S => {
                                    const V = Ff(O, ma => ma.eval(S)),
                                        ba = Ff(V, ma => ({
                                            get: ma.DNa
                                        })),
                                        ka = Ff(V, ma => ({
                                            get: ma.DNa,
                                            set: ma.ssb
                                        }));
                                    return {
                                        jrb: new Map(Object.entries(V).map(([ma, oa]) => [M[ma], oa.Rfb])),
                                        data: Object.create(null, ba),
                                        VJb: Object.create(null, ka)
                                    }
                                }
                            }
                        }
                    },
                    r6 = function(a, b) {
                        return (c,
                            d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    s6 = function(a) {
                        return (b, c, d, e) => {
                            if (d == null) throw b.error(a, "value is nullish");
                            if (a === "string" && typeof d === "string" || a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number") b = {
                                type: a,
                                value: d
                            };
                            else {
                                if (a === "fill" && typeof d === "object") throw b.error(a, "Write for fill is not yet supported");
                                throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                            }
                            e.set(c, b)
                        }
                    },
                    F4b = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    E4b = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    C4b = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    I4b = function() {
                        return (new H4b({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.YO.create({ ...__c.Sv,
                                color: c.color
                            }))
                        })).add((a,
                            b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                X: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.Qv.create({ ...__c.Rv,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.Rv.rotation,
                                    fill: __c.Sv,
                                    X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.Rv.X
                                });
                                Object.defineProperties(g, {
                                    fill: {
                                        value: c.fill.instance
                                    }
                                });
                                return g
                            })
                        }))
                    },
                    t6 = function() {
                        throw Error("ref not found");
                    },
                    K4b = function(a, b) {
                        return class extends J4b {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? u6(__c.Gy, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: u6(__c.Dy, {
                                        size: "xsmall",
                                        alignment: "center",
                                        children: __c.P("Q6XSow")
                                    })
                                }) : u6(b, { ...this.props
                                })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    L4b = function(a, b, c) {
                        const d = a.x3a.get(b);
                        if (d) return d;
                        c = a.hab(b, c.UI);
                        a.x3a.set(b, c);
                        return c
                    },
                    M4b = __webpack_require__(519427),
                    v6 = M4b.computed,
                    N4b = M4b.observable;
                var u6 = __webpack_require__(443763).jsx;
                var w6 = __webpack_require__(875604),
                    O4b = w6.memo,
                    J4b = w6.PureComponent,
                    P4b = w6.useState;
                var n6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.jma = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    x6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.jma = a;
                            this.v7a = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    y6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.x7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    R4b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = Q4b;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    T4b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = S4b;
                            this.w7a = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    U3b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.S7a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var Y3b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var U4b = class {},
                    e4b = class extends U4b {
                        Ima(a) {
                            return new e4b(a(this.value))
                        }
                        Hqa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    f4b = class extends U4b {
                        Ima(a, b) {
                            return new f4b(b(this.value))
                        }
                        Hqa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var f6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    z6 = class extends f6 {
                        $sa(a) {
                            return this === a || a.Kza(b => this.E2(b))
                        }
                        PO() {
                            throw Error(`${this} is not iterable`);
                        }
                        Uua(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.Sda();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        Sda() {
                            throw Error(`${this} is not navigable`);
                        }
                        Qqa(a) {
                            a(this)
                        }
                        Kza(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    A6 = class extends z6 {
                        E2(a) {
                            return a instanceof A6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    B6 = class extends z6 {
                        E2(a) {
                            return a instanceof B6 && this.cF === a.cF
                        }
                        toString() {
                            return this.cF.name
                        }
                        constructor(a) {
                            super();
                            this.cF = a
                        }
                    },
                    C6 = class extends z6 {
                        E2(a) {
                            return a instanceof C6 && this.cF === a.cF && e6(this.Gw, a.Gw)
                        }
                        toString() {
                            return `${this.cF}<${this.Gw}>`
                        }
                        constructor(a, b) {
                            super();
                            this.cF = a;
                            this.Gw = b
                        }
                    },
                    V4b = class extends C6 {
                        PO() {
                            return this.Gw
                        }
                        Sda() {
                            const a =
                                this.Gw;
                            return {
                                size: l6.number,
                                empty: l6.Gi,
                                get first() {
                                    return l6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    W4b = class extends C6 {
                        PO() {
                            return this.Gw
                        }
                        Sda() {
                            const a = this.Gw;
                            return {
                                size: l6.number,
                                empty: l6.Gi,
                                get first() {
                                    return l6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    X4b = class extends z6 {
                        E2(a) {
                            return a instanceof X4b && e6(this.key, a.key) && e6(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    Y4b = class extends z6 {
                        E2(a) {
                            return a instanceof
                            Y4b ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && e6(this.fields[b], c)) : !1
                        }
                        Sda() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    D6 = class extends f6 {
                        $sa(a) {
                            return this === a || this.Dn.every(b => b.$sa(a))
                        }
                        PO() {
                            const a = this.Dn.map(b => b.PO());
                            return d6(a, b => l6.union(...b))
                        }
                        Uua(a) {
                            const b = this.Dn.map(c => c.Uua(a));
                            return d6(b, c => l6.union(...c))
                        }
                        Qqa(a) {
                            this.Dn.forEach(b =>
                                b.Qqa(a))
                        }
                        Kza(a) {
                            return this.Dn.some(b => b.Kza(a))
                        }
                        toString() {
                            return this.Dn.length ? this.Dn.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Dn = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    E6 = new D6([]),
                    Z4b = new A6("string"),
                    $4b = new A6("number"),
                    a5b = new A6("boolean"),
                    b5b = new A6("undefined"),
                    c5b = class {
                        get never() {
                            return E6
                        }
                        get string() {
                            return Z4b
                        }
                        get number() {
                            return $4b
                        }
                        get Gi() {
                            return a5b
                        }
                        get undefined() {
                            return b5b
                        }
                        optional(a) {
                            return l6.union(a, l6.undefined)
                        }
                        array(a) {
                            return new V4b(a)
                        }
                        set(a) {
                            return new W4b(a)
                        }
                        t$(a) {
                            return new D6([new V4b(a),
                                new W4b(a)
                            ])
                        }
                        map(a, b) {
                            return new X4b(a, b)
                        }
                        fd(a) {
                            return new Y4b({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return E6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) X3b(d).Qqa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return E6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return e6(d, e) ? e : e6(e, d) ? d : new D6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => e6(d, e)) || (c.forEach(e => e6(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new D6([...c])
                        }
                    },
                    d5b = class extends c5b {
                        instance(a) {
                            return new B6(a)
                        }
                    },
                    l6 = new d5b,
                    e5b = class extends c5b {
                        instance(a) {
                            return new B6(__c.D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var f5b, g5b, F6 = Symbol("value"),
                    G6 = class {
                        get props() {
                            var a;
                            return (a = this.J6a) !== null && a !== void 0 ? a : this.J6a = this.kma()
                        }
                    },
                    h5b = class {
                        get size() {
                            return this[F6].length
                        }
                        get empty() {
                            return this[F6].length === 0
                        }
                        get first() {
                            return this[F6][0]
                        }
                        constructor(a) {
                            this[F6] = a
                        }
                    };
                f5b = Symbol.iterator;
                var i5b = class extends G6 {
                        kma() {
                            return new h5b(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[f5b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,i6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    j5b = class {
                        get size() {
                            return this[F6].size
                        }
                        get empty() {
                            return this[F6].size === 0
                        }
                        get first() {
                            return this[F6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[F6] = a
                        }
                    };
                g5b = Symbol.iterator;
                var k5b = class extends G6 {
                        kma() {
                            return new j5b(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[g5b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,i6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    l5b = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${i6(a)}]: ${i6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    m5b = class extends G6 {
                        kma() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${i6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    n5b = class {
                        toString() {
                            return `[instance ${this.cF.name}]`
                        }
                        constructor(a, b) {
                            this.cF = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    o5b = class {
                        array(a) {
                            return new i5b(a)
                        }
                        arrayOf(...a) {
                            return new i5b(a)
                        }
                        set(a) {
                            return new k5b(a)
                        }
                        map(a) {
                            return new l5b(new Map(a))
                        }
                        fd(a) {
                            return new m5b({ ...a
                            })
                        }
                    },
                    p5b = class extends o5b {
                        instance(a, b) {
                            return new n5b(a, b)
                        }
                        stringify(a) {
                            return i6(a)
                        }
                        constructor() {
                            super();
                            this.Kh = h6
                        }
                    },
                    q6 = new p5b,
                    q5b = class extends o5b {
                        instance(a, b) {
                            a = __c.D(this.classes[a]);
                            return new n5b(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var b4b = {
                        [0]: new n6(l6.number, l6.number, a => -a),
                        [1]: new n6(l6.string, l6.number, a => a.length),
                        [2]: new n6(l6.Gi, l6.Gi, a => !a)
                    },
                    c4b = {
                        [0]: new x6(l6.number, l6.number, l6.number, (a, b) => a + b),
                        [1]: new x6(l6.number, l6.number, l6.number, (a, b) => a - b),
                        [2]: new x6(l6.number, l6.number, l6.number, (a, b) => a * b),
                        [3]: new x6(l6.number, l6.number, l6.number, (a, b) => a / b),
                        [4]: new x6(l6.number, l6.number, l6.number, (a, b) => a % b),
                        [5]: new x6(l6.string, l6.string, l6.string, (a, b) => a + b),
                        [6]: new x6(l6.number, l6.number, l6.Gi, (a, b) => a === b),
                        [7]: new x6(l6.number,
                            l6.number, l6.Gi, (a, b) => a !== b),
                        [8]: new x6(l6.number, l6.number, l6.Gi, (a, b) => a < b),
                        [9]: new x6(l6.number, l6.number, l6.Gi, (a, b) => a <= b),
                        [10]: new x6(l6.number, l6.number, l6.Gi, (a, b) => a > b),
                        [11]: new x6(l6.number, l6.number, l6.Gi, (a, b) => a >= b),
                        [12]: new x6(l6.Gi, l6.Gi, l6.Gi, (a, b) => a && b),
                        [13]: new x6(l6.Gi, l6.Gi, l6.Gi, (a, b) => a || b)
                    },
                    i4b = {
                        [2]: new y6(l6.number, l6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new y6(l6.number, l6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new y6(l6.number, l6.number, a => Math.max(...a)),
                        [5]: new y6(l6.number,
                            l6.number, a => Math.min(...a)),
                        [6]: new y6(l6.string, l6.string, a => a.join(""))
                    },
                    r5b = a => q6.array(a),
                    s5b = a => q6.set(a),
                    g4b = {
                        [0]: a => new y6(a, l6.array(a), r5b),
                        [1]: a => new y6(a, l6.set(a), s5b)
                    },
                    Q4b = a => q6.map(a),
                    n4b = {
                        [0]: (a, b) => new R4b(a, b, l6.map(a, b))
                    },
                    S4b = a => q6.fd(a),
                    p4b = {
                        [0]: a => new T4b(a, l6.fd(a))
                    },
                    t5b = (a, b) => q6.array(b.map(c => c())),
                    u5b = (a, b) => q6.array(b.flatMap(c => c().items)),
                    v5b = (a, b) => q6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    w5b = (a, b) => b.some(c => c()),
                    x5b = (a, b) => b.every(c => c()),
                    y5b = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    l4b = {
                        [0]: (a, b) => c6(a, b, l6.array(b), t5b),
                        [1]: (a, b) => b.PO().map(c => c6(a, l6.array(c), l6.array(c), u5b)),
                        [2]: a => c6(a, l6.Gi, l6.array(a), v5b),
                        [3]: a => c6(a, l6.Gi, l6.Gi, w5b),
                        [4]: a => c6(a, l6.Gi, l6.Gi, x5b),
                        [5]: a => c6(a, l6.Gi, l6.optional(a), y5b)
                    };
                var p6 = class {
                    define(a, b) {
                        return new p6(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: ${a}`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var A5b = (a, b, c) => {
                        const d = new p6(new Map(b.N9a)),
                            e = new z5b(a);
                        return {
                            compile: f => {
                                const g = j6(e, d, f).as(c);
                                return {
                                    eval: h => {
                                        h = new p6(new Map(b.eval(h).jrb));
                                        return g.eval(h)
                                    }
                                }
                            }
                        }
                    },
                    z5b = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    o6 = class {
                        static of (a, b) {
                            return new o6(a, b)
                        }
                        as(a) {
                            if (!e6(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this
                        }
                        eval(a) {
                            return this.mla(a)
                        }
                        computed() {
                            return new o6(this.type, a => {
                                const b = v6(this.eval(a), {
                                    equals: q6.Kh
                                });
                                return () => b.get()
                            })
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b) {
                            this.type = a;
                            this.mla = b
                        }
                    },
                    v4b = class {
                        static of (a, b, c) {
                            return new v4b(a, b, c)
                        }
                        eval(a) {
                            return this.mla(a)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.resultType = b;
                            this.mla = c
                        }
                    };
                var H4b = class {
                        add(a) {
                            a = a(B5b, this.types);
                            return new H4b({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new e5b(this.classes);
                            this.values = new q5b(this.classes)
                        }
                    },
                    B5b = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.Xlb = new n6(l6.fd(b), l6.instance(this), d => q6.instance(this, c(d.fields)))
                        }
                    };
                var D4b = class {
                    error(a, b) {
                        return Error(`widget '${this.lEa}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.lEa = a
                    }
                };
                var C5b = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Pt() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        t6()
                    },
                    ec() {
                        t6()
                    },
                    gf() {
                        t6()
                    },
                    CC() {
                        t6()
                    },
                    has() {
                        return !1
                    },
                    Yu() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var D5b;
                D5b = Symbol.iterator;
                var E5b = class {
                    static A(a) {
                        __c.Q(a, {
                            We: v6,
                            Kz: v6
                        })
                    }
                    get We() {
                        return this.C7a().map(a => {
                            let b = this.KOa.get(a);
                            b == null && (b = `${this.Sgb++}`, this.KOa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Kz() {
                        const a = new Map;
                        this.We.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Rm(a) {
                        return __c.D(this.Kz.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.We.length
                    }
                    count() {
                        return this.We.length
                    }
                    toArray() {
                        return this.We.map(a => a.ref)
                    }
                    Pt() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get jba() {
                        const a = this.We[0];
                        return a && a.ref
                    }
                    get Bda() {
                        const a =
                            this.We[this.We.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.jba;
                        const b = this.We.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.Bda;
                        const b = this.We;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.We;
                        for (a = this.Rm(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    ec(a, b) {
                        const c = this.We;
                        for (a = this.Rm(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    gf(a, b) {
                        a = this.Kz.get(a);
                        b = this.Kz.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    CC(a) {
                        return this.We[this.Rm(a)].id
                    }
                    has(a) {
                        return this.Kz.has(a)
                    }
                    Yu(a) {
                        return new __c.eO(this, a)
                    }
                    map(a) {
                        return this.We.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.We.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.We.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.We.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.We.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.We.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.We.every(b => a(b.ref, b.id))
                    }[D5b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.C7a =
                            a;
                        this.Sgb = (E5b.A(this), 0);
                        this.KOa = new WeakMap
                    }
                };
                var F5b = new Set,
                    G5b = {
                        hz: () => ({
                            $a: C5b
                        })
                    },
                    H5b = class {
                        static A(a) {
                            __c.Q(a, {
                                q5: N4b.shallow
                            })
                        }
                        Ohb(a, b) {
                            F5b.has(a) || (b = b.map(c => {
                                const d = L4b(this.w3a, a, c);
                                if (c.hz) {
                                    const e = c.hz;
                                    if (typeof e === "function") return {
                                        type: 0,
                                        hz: ({
                                            na: h
                                        }) => e({
                                            data: d.eval(h).data
                                        })
                                    };
                                    c = this.dn.types;
                                    const f = c.instance("RectElement"),
                                        g = this.soa(this.dn, d, c.t$(f)).compile(e);
                                    return {
                                        type: 0,
                                        hz: ({
                                            na: h
                                        }) => {
                                            const k = g.eval(h);
                                            return {
                                                $a: new __c.O0a(new E5b(() => Array.from(k()).map(l => l.instance)))
                                            }
                                        }
                                    }
                                }
                                if (c.Component) {
                                    const e = c.Component;
                                    return {
                                        type: 1,
                                        Component: K4b(this.H, O4b(function({
                                            Vbb: f
                                        }) {
                                            const [g] = P4b(() => d.eval({
                                                qh: f
                                            }).data);
                                            return u6(e, {
                                                data: g
                                            })
                                        }))
                                    }
                                }
                                throw new E(c);
                            }), this.q5.set(a, b), F5b.add(a), __c.cQ.set(a, G5b))
                        }
                        Ndb(a) {
                            return this.q5.get(a)
                        }
                        constructor(a, b, c, d) {
                            this.w3a = a;
                            this.dn = b;
                            this.soa = c;
                            this.H = d;
                            this.q5 = (H5b.A(this), new Map)
                        }
                    };
                var I5b = class {
                    constructor(a) {
                        this.hab = a;
                        this.x3a = new Map
                    }
                };
                __c.cQa = {
                    Qhb: function({
                        H: a
                    }) {
                        var b = {
                            dn: I4b(),
                            soa: A5b
                        };
                        const {
                            dn: c,
                            soa: d
                        } = b;
                        b = G4b(c);
                        b = new I5b(b);
                        a = new H5b(b, c, d, a);
                        return {
                            w3a: b,
                            T7: a,
                            U7: a
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/b7119ff1f9c9c51d.js.map