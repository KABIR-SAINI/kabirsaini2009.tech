(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [32915], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var If = __c.If;
                var E = __c.E;
                var w = __c.w;
                var MGb = function(a) {
                        return () => a
                    },
                    h7 = function(a, b, c, d) {
                        return new NGb(a, b, c, d)
                    },
                    i7 = function(a, b) {
                        return b(a)
                    },
                    OGb = function(a, b, c) {
                        return c(a, b)
                    },
                    PGb = function(a, b) {
                        return b(a)
                    },
                    j7 = function(a, b) {
                        return a === b || b.map(c => a.raa(QGb(c)))
                    },
                    SGb = function(a, b) {
                        return a.Mba(b).map(c => new RGb(c, d => d.props[b]))
                    },
                    QGb = function(a) {
                        w(a instanceof k7);
                        return a
                    },
                    m7 = function(a, b) {
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
                                        return b.kind === "array" && l7(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : l7([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : l7([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && TGb(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    l7 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!m7(a[c], b[c])) return !1;
                        return !0
                    },
                    TGb = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!m7(a[f], b[f])) return !1;
                        return !0
                    },
                    n7 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    o7 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return UGb(c.value);
                            case 1:
                                const f =
                                    o7(a, b, c.yr);
                                return VGb[c.name].map(r => p7(r, f));
                            case 2:
                                const g = o7(a, b, c.rGa),
                                    h = o7(a, b, c.sGa);
                                return WGb[c.name].map(r => XGb(r, g, h));
                            case 3:
                                const k = c.args.map(r => r.kind !== 13 ? new YGb(o7(a, b, r)) : new ZGb(o7(a, b, r.S7a))),
                                    l = c.name;
                                switch (l) {
                                    case 0:
                                    case 1:
                                        var d = k.map(r => r.I9(t => t.type, t => t.type.bH()));
                                        return i7(d, r => q7.union(...r).map(t => $Gb[l](t).map(v => aHb(v, k))));
                                    default:
                                        return bHb[l].map(r => aHb(r, k))
                                }
                            case 4:
                                return cHb(o7(a, b, c.iX), (r, t) => dHb(a, b, c.param, t, c.body).map(v => eHb[c.name](t, v.resultType).map(u =>
                                    fHb(u, r, v))));
                            case 5:
                                const m = c.entries.map(([r, t]) => [o7(a, b, r), o7(a, b, t)]);
                                d = q7.union(...m.map(([r]) => r.type));
                                var e = q7.union(...m.map(([, r]) => r.type));
                                return OGb(d, e, (r, t) => gHb[0](r, t).map(v => hHb(v, m)));
                            case 6:
                                const n = If(c.fields, r => o7(a, b, r));
                                d = If(n, r => r.type);
                                return PGb(d, r => iHb[0](r).map(t => jHb(t, n)));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = o7(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.dSa.map(r => p7(r, p, {
                                    On: !0
                                }));
                            case 8:
                                return d = o7(a,
                                    b, c.base), kHb(d, c.N$a);
                            case 9:
                                return lHb(b, c.name);
                            case 10:
                                return d = __c.Gd(c.defs, r => o7(a, b, r)), mHb(a, b, d, c.body);
                            case 11:
                                d = o7(a, b, c.test).as(q7.Hg);
                                e = o7(a, b, c.v2a);
                                const q = o7(a, b, c.alternate);
                                return nHb(d, e, q);
                            case 12:
                                return o7(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    dHb = function(a, b, c, d, e) {
                        return o7(a, b.define(c, d), e).map(f => oHb.of(d, f.type, g => h => f.eval(g.define(c, h))))
                    },
                    UGb = function(a) {
                        switch (typeof a) {
                            case "string":
                                return r7(q7.string, a);
                            case "number":
                                return r7(q7.number, a);
                            case "boolean":
                                return r7(q7.Hg,
                                    a);
                            case "undefined":
                                return r7(q7.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    kHb = function(a, b) {
                        return a.map(c => SGb(c.type, b).map(({
                            type: d,
                            get: e
                        }) => p7(new s7(c.type, d, e), c)))
                    },
                    lHb = function(a, b) {
                        return a.resolve(b).map(c => t7.of(c, d => d.resolve(b)))
                    },
                    mHb = function(a, b, c, d) {
                        const e = __c.Gd(c, f => f.type);
                        return pHb(o7(a, new u7(new Map(e), b), d), f => {
                            const g = __c.Gd(c, h => h.eval(f));
                            return new u7(new Map(g), f)
                        })
                    },
                    nHb = function(a, b, c) {
                        return b.map(d => c.map(e => {
                            const f = q7.union(d.type, e.type);
                            return t7.of(f, g => {
                                const h =
                                    a.eval(g),
                                    k = d.eval(g),
                                    l = e.eval(g);
                                return () => h() ? k() : l()
                            })
                        }))
                    },
                    p7 = function({
                        t6: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new t7(b, g => {
                            const h = f.eval(g);
                            if (e === null || e === void 0 ? 0 : e.On) {
                                const k = qHb(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    XGb = function({
                        t6: a,
                        tGa: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new t7(c, k => {
                            const l = g.eval(k),
                                m = h.eval(k);
                            return () => d(l(), m())
                        })
                    },
                    aHb = function({
                        vGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.I6(h => h.as(a), h => h.as(e !== null && e !==
                            void 0 ? e : e = q7.iX(a))));
                        return new t7(b, g => {
                            const h = l => l.eval(g),
                                k = f.map(l => l.I6(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.I9(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    fHb = function({
                        NGa: a,
                        resultType: b,
                        reduce: c
                    }, d, e) {
                        const f = rHb(e, a);
                        return t7.of(b, g => {
                            const h = d.eval(g),
                                k = f.eval(g),
                                l = qHb(m => {
                                    m = m.map(MGb);
                                    return [m, m.map(k)]
                                });
                            return () => {
                                const [m, n] = l(h());
                                return c(m, n)
                            }
                        })
                    },
                    hHb = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new t7(c,
                            g => {
                                const h = f.map(([k, l]) => [k.eval(g), l.eval(g)]);
                                return () => d(h.map(([k, l]) => [k(), l()]))
                            })
                    },
                    jHb = function({
                        uGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = sHb(a, (g, h) => d[h].as(g));
                        return new t7(b, g => {
                            const h = tHb(f, k => k.eval(g));
                            return () => c(uHb(h, k => k()))
                        })
                    },
                    r7 = function(a, b) {
                        const c = MGb(b);
                        return new t7(a, () => c)
                    },
                    cHb = function(a, b) {
                        return a.type.bH().map(c => b(a.as(q7.iX(c)), c))
                    },
                    pHb = function(a, b) {
                        return new t7(a.type,
                            c => a.eval(b(c)))
                    },
                    rHb = function(a, b) {
                        if (!j7(a.resultType, b)) throw Error(`type ${a.resultType} is not assignable to expected type: ${b}`);
                        return a
                    },
                    qHb = function(a) {
                        let b;
                        return c => {
                            if (b && v7.pi(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    sHb = function(a, b) {
                        return If(a, b)
                    },
                    tHb = function(a, b) {
                        return If(a, b)
                    },
                    uHb = function(a, b) {
                        return If(a, b)
                    },
                    zHb = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const G = this.D3,
                                    I = this.v1,
                                    J = this.Uia,
                                    L = b.union(this.type, b.undefined);
                                return new d(L, R => R != null ?
                                    G(R) : void 0, (R, S, V) => V != null ? I(R, S, V) : void 0, (R, S, V, da) => V != null ? J(R, S, V, da) : da.delete(S))
                            }
                            nx() {
                                return new d(this.type, this.D3, this.v1, (G, I) => {
                                    throw G.error(I, "read-only field");
                                })
                            }
                            dV(G) {
                                return G ? new d(this.type, this.D3, (I, J, L) => {
                                    L = this.v1(I, J, L);
                                    L != null && G(I, J, L);
                                    return L
                                }, (I, J, L, R) => {
                                    L != null && G(I, J, L);
                                    this.Uia(I, J, L, R)
                                }) : this
                            }
                            BXa(G, I) {
                                const J = this.D3,
                                    L = this.v1,
                                    R = this.Uia;
                                return vHb(this.type, S => {
                                    const V = () => L(G, I, S.Kf.get(I));
                                    return {
                                        xNa: () => J(V()),
                                        Xqa: V,
                                        SVa: da => R(G, I, da, S.Kf)
                                    }
                                })
                            }
                            constructor(G, I,
                                J, L) {
                                this.type = G;
                                this.D3 = I;
                                this.v1 = J;
                                this.Uia = L
                            }
                        }
                        a = new d(b.string, G => G, w7("string", G => G.value), x7("string"));
                        const e = new d(b.Hg, G => G, w7("boolean", G => G.value), x7("boolean")),
                            f = (new d(b.number, G => G, w7("int32", G => G.value), x7("int32"))).dV(G => Number.isInteger(G)),
                            g = (new d(b.number, G => G, w7("double", G => G.value), x7("double"))).dV(G => Number.isFinite(G)),
                            h = new d(b.instance("Fill"), G => c.instance("Fill", G), w7("fill", G => G.value), x7("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.nx(),
                            r = e.nx(),
                            t = f.nx(),
                            v = g.nx(),
                            u = h.nx(),
                            x = k.nx(),
                            y = l.nx(),
                            z = m.nx(),
                            D = n.nx(),
                            C = p.nx(),
                            F = {
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
                                        int32: z,
                                        double: D,
                                        fill: C
                                    }
                                }
                            };
                        return (G, I) => {
                            const J = new wHb(G),
                                L = If(I, S => S.key),
                                R = If(I, S => {
                                    var V = S.sxa;
                                    const da = S.nva;
                                    switch (S.type) {
                                        case "string":
                                            V = F[V][da].string.dV(xHb(S.LD));
                                            break;
                                        case "boolean":
                                            V = F[V][da]["boolean"];
                                            break;
                                        case "double":
                                            V =
                                                F[V][da]["double"].dV(yHb(S.range));
                                            break;
                                        case "int32":
                                            V = F[V][da].int32.dV(yHb(S.range));
                                            break;
                                        case "fill":
                                            V = F[V][da].fill;
                                            break;
                                        default:
                                            throw new E(S);
                                    }
                                    return V.BXa(J, S.key)
                                });
                            return {
                                gIa: new Map(Object.entries(R).map(([S, V]) => [L[S], V.type])),
                                eval: S => {
                                    const V = If(R, pa => pa.eval(S)),
                                        da = If(V, pa => ({
                                            get: pa.Xqa
                                        })),
                                        ua = If(V, pa => ({
                                            get: pa.Xqa,
                                            set: pa.SVa
                                        }));
                                    return {
                                        dVa: new Map(Object.entries(V).map(([pa, za]) => [L[pa], za.xNa])),
                                        data: Object.create(null, da),
                                        n9a: Object.create(null, ua)
                                    }
                                }
                            }
                        }
                    },
                    w7 = function(a, b) {
                        return (c,
                            d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    x7 = function(a) {
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
                    yHb = function(a) {
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
                    xHb = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    vHb = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    BHb = function() {
                        return (new AHb({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.MQ.create({ ...__c.OQ,
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
                                P: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.yL.create({ ...__c.pS,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.pS.rotation,
                                    fill: __c.OQ,
                                    P: (f = (d = c.P) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.pS.P
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
                    y7 = function() {
                        throw Error("ref not found");
                    },
                    DHb = function(a, b) {
                        return class extends CHb {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? z7(__c.Dk, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: z7(__c.Ak, {
                                        size: "xsmall",
                                        alignment: "center",
                                        children: __c.O("Q6XSow")
                                    })
                                }) : z7(b, { ...this.props
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
                    EHb = function(a, b, c) {
                        const d = a.JDa.get(b);
                        if (d) return d;
                        c = a.iJa(b, c.lC);
                        a.JDa.set(b, c);
                        return c
                    },
                    FHb = __webpack_require__(519427),
                    A7 = FHb.computed,
                    GHb = FHb.observable;
                var z7 = __webpack_require__(443763).jsx;
                var B7 = __webpack_require__(875604),
                    HHb = B7.memo,
                    CHb = B7.PureComponent,
                    IHb = B7.useState;
                var s7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.t6 = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    C7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.t6 = a;
                            this.tGa = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    D7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.vGa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    KHb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = JHb;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    MHb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = LHb;
                            this.uGa = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    NGb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.NGa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var RGb = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var NHb = class {},
                    YGb = class extends NHb {
                        I6(a) {
                            return new YGb(a(this.value))
                        }
                        I9(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    ZGb = class extends NHb {
                        I6(a, b) {
                            return new ZGb(b(this.value))
                        }
                        I9(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var k7 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    E7 = class extends k7 {
                        raa(a) {
                            return this === a || a.Oea(b => this.vR(b))
                        }
                        bH() {
                            throw Error(`${this} is not iterable`);
                        }
                        Mba(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.C_();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        C_() {
                            throw Error(`${this} is not navigable`);
                        }
                        P9(a) {
                            a(this)
                        }
                        Oea(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    F7 = class extends E7 {
                        vR(a) {
                            return a instanceof F7 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    G7 = class extends E7 {
                        vR(a) {
                            return a instanceof G7 && this.Uy === a.Uy
                        }
                        toString() {
                            return this.Uy.name
                        }
                        constructor(a) {
                            super();
                            this.Uy = a
                        }
                    },
                    H7 = class extends E7 {
                        vR(a) {
                            return a instanceof H7 && this.Uy === a.Uy && j7(this.yr, a.yr)
                        }
                        toString() {
                            return `${this.Uy}<${this.yr}>`
                        }
                        constructor(a, b) {
                            super();
                            this.Uy = a;
                            this.yr = b
                        }
                    },
                    OHb = class extends H7 {
                        bH() {
                            return this.yr
                        }
                        C_() {
                            const a = this.yr;
                            return {
                                size: q7.number,
                                empty: q7.Hg,
                                get first() {
                                    return q7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    PHb = class extends H7 {
                        bH() {
                            return this.yr
                        }
                        C_() {
                            const a = this.yr;
                            return {
                                size: q7.number,
                                empty: q7.Hg,
                                get first() {
                                    return q7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    QHb = class extends E7 {
                        vR(a) {
                            return a instanceof QHb && j7(this.key, a.key) && j7(this.value, a.value)
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
                    RHb = class extends E7 {
                        vR(a) {
                            return a instanceof
                            RHb ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && j7(this.fields[b], c)) : !1
                        }
                        C_() {
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
                    I7 = class extends k7 {
                        raa(a) {
                            return this === a || this.Pk.every(b => b.raa(a))
                        }
                        bH() {
                            const a = this.Pk.map(b => b.bH());
                            return i7(a, b => q7.union(...b))
                        }
                        Mba(a) {
                            const b = this.Pk.map(c => c.Mba(a));
                            return i7(b, c => q7.union(...c))
                        }
                        P9(a) {
                            this.Pk.forEach(b =>
                                b.P9(a))
                        }
                        Oea(a) {
                            return this.Pk.some(b => b.Oea(a))
                        }
                        toString() {
                            return this.Pk.length ? this.Pk.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Pk = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    J7 = new I7([]),
                    SHb = new F7("string"),
                    THb = new F7("number"),
                    UHb = new F7("boolean"),
                    VHb = new F7("undefined"),
                    WHb = class {
                        get never() {
                            return J7
                        }
                        get string() {
                            return SHb
                        }
                        get number() {
                            return THb
                        }
                        get Hg() {
                            return UHb
                        }
                        get undefined() {
                            return VHb
                        }
                        optional(a) {
                            return q7.union(a, q7.undefined)
                        }
                        array(a) {
                            return new OHb(a)
                        }
                        set(a) {
                            return new PHb(a)
                        }
                        iX(a) {
                            return new I7([new OHb(a),
                                new PHb(a)
                            ])
                        }
                        map(a, b) {
                            return new QHb(a, b)
                        }
                        yc(a) {
                            return new RHb({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return J7;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) QGb(d).P9(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return J7;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return j7(d, e) ? e : j7(e, d) ? d : new I7(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => j7(d, e)) || (c.forEach(e => j7(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new I7([...c])
                        }
                    },
                    XHb = class extends WHb {
                        instance(a) {
                            return new G7(a)
                        }
                    },
                    q7 = new XHb,
                    YHb = class extends WHb {
                        instance(a) {
                            return new G7(__c.B(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var ZHb, $Hb, K7 = Symbol("value"),
                    L7 = class {
                        get props() {
                            var a;
                            return (a = this.HFa) !== null && a !== void 0 ? a : this.HFa = this.w6()
                        }
                    },
                    aIb = class {
                        get size() {
                            return this[K7].length
                        }
                        get empty() {
                            return this[K7].length === 0
                        }
                        get first() {
                            return this[K7][0]
                        }
                        constructor(a) {
                            this[K7] = a
                        }
                    };
                ZHb = Symbol.iterator;
                var bIb = class extends L7 {
                        w6() {
                            return new aIb(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[ZHb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,n7).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    cIb = class {
                        get size() {
                            return this[K7].size
                        }
                        get empty() {
                            return this[K7].size === 0
                        }
                        get first() {
                            return this[K7][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[K7] = a
                        }
                    };
                $Hb = Symbol.iterator;
                var dIb = class extends L7 {
                        w6() {
                            return new cIb(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[$Hb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,n7).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    eIb = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${n7(a)}]: ${n7(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    fIb = class extends L7 {
                        w6() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${n7(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    gIb = class {
                        toString() {
                            return `[instance ${this.Uy.name}]`
                        }
                        constructor(a, b) {
                            this.Uy = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    hIb = class {
                        array(a) {
                            return new bIb(a)
                        }
                        arrayOf(...a) {
                            return new bIb(a)
                        }
                        set(a) {
                            return new dIb(a)
                        }
                        map(a) {
                            return new eIb(new Map(a))
                        }
                        yc(a) {
                            return new fIb({ ...a
                            })
                        }
                    },
                    iIb = class extends hIb {
                        instance(a, b) {
                            return new gIb(a, b)
                        }
                        stringify(a) {
                            return n7(a)
                        }
                        constructor() {
                            super();
                            this.pi = m7
                        }
                    },
                    v7 = new iIb,
                    jIb = class extends hIb {
                        instance(a, b) {
                            a = __c.B(this.classes[a]);
                            return new gIb(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var VGb = {
                        [0]: new s7(q7.number, q7.number, a => -a),
                        [1]: new s7(q7.string, q7.number, a => a.length),
                        [2]: new s7(q7.Hg, q7.Hg, a => !a)
                    },
                    WGb = {
                        [0]: new C7(q7.number, q7.number, q7.number, (a, b) => a + b),
                        [1]: new C7(q7.number, q7.number, q7.number, (a, b) => a - b),
                        [2]: new C7(q7.number, q7.number, q7.number, (a, b) => a * b),
                        [3]: new C7(q7.number, q7.number, q7.number, (a, b) => a / b),
                        [4]: new C7(q7.number, q7.number, q7.number, (a, b) => a % b),
                        [5]: new C7(q7.string, q7.string, q7.string, (a, b) => a + b),
                        [6]: new C7(q7.number, q7.number, q7.Hg, (a, b) => a === b),
                        [7]: new C7(q7.number,
                            q7.number, q7.Hg, (a, b) => a !== b),
                        [8]: new C7(q7.number, q7.number, q7.Hg, (a, b) => a < b),
                        [9]: new C7(q7.number, q7.number, q7.Hg, (a, b) => a <= b),
                        [10]: new C7(q7.number, q7.number, q7.Hg, (a, b) => a > b),
                        [11]: new C7(q7.number, q7.number, q7.Hg, (a, b) => a >= b),
                        [12]: new C7(q7.Hg, q7.Hg, q7.Hg, (a, b) => a && b),
                        [13]: new C7(q7.Hg, q7.Hg, q7.Hg, (a, b) => a || b)
                    },
                    bHb = {
                        [2]: new D7(q7.number, q7.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new D7(q7.number, q7.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new D7(q7.number, q7.number, a => Math.max(...a)),
                        [5]: new D7(q7.number,
                            q7.number, a => Math.min(...a)),
                        [6]: new D7(q7.string, q7.string, a => a.join(""))
                    },
                    kIb = a => v7.array(a),
                    lIb = a => v7.set(a),
                    $Gb = {
                        [0]: a => new D7(a, q7.array(a), kIb),
                        [1]: a => new D7(a, q7.set(a), lIb)
                    },
                    JHb = a => v7.map(a),
                    gHb = {
                        [0]: (a, b) => new KHb(a, b, q7.map(a, b))
                    },
                    LHb = a => v7.yc(a),
                    iHb = {
                        [0]: a => new MHb(a, q7.yc(a))
                    },
                    mIb = (a, b) => v7.array(b.map(c => c())),
                    nIb = (a, b) => v7.array(b.flatMap(c => c().items)),
                    oIb = (a, b) => v7.array(a.filter((c, d) => b[d]()).map(c => c())),
                    pIb = (a, b) => b.some(c => c()),
                    qIb = (a, b) => b.every(c => c()),
                    rIb = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    eHb = {
                        [0]: (a, b) => h7(a, b, q7.array(b), mIb),
                        [1]: (a, b) => b.bH().map(c => h7(a, q7.array(c), q7.array(c), nIb)),
                        [2]: a => h7(a, q7.Hg, q7.array(a), oIb),
                        [3]: a => h7(a, q7.Hg, q7.Hg, pIb),
                        [4]: a => h7(a, q7.Hg, q7.Hg, qIb),
                        [5]: a => h7(a, q7.Hg, q7.optional(a), rIb)
                    };
                var u7 = class {
                    define(a, b) {
                        return new u7(new Map([
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
                var tIb = (a, b, c) => {
                        const d = new u7(new Map(b.gIa)),
                            e = new sIb(a);
                        return {
                            compile: f => {
                                const g = o7(e, d, f).as(c);
                                return {
                                    eval: h => {
                                        h = new u7(new Map(b.eval(h).dVa));
                                        return g.eval(h)
                                    }
                                }
                            }
                        }
                    },
                    sIb = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    t7 = class {
                        static of (a, b) {
                            return new t7(a, b)
                        }
                        as(a) {
                            if (!j7(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this
                        }
                        eval(a) {
                            return this.I5(a)
                        }
                        computed() {
                            return new t7(this.type, a => {
                                const b = A7(this.eval(a), {
                                    equals: v7.pi
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
                            this.I5 = b
                        }
                    },
                    oHb = class {
                        static of (a, b, c) {
                            return new oHb(a, b, c)
                        }
                        eval(a) {
                            return this.I5(a)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.resultType = b;
                            this.I5 = c
                        }
                    };
                var AHb = class {
                        add(a) {
                            a = a(uIb, this.types);
                            return new AHb({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new YHb(this.classes);
                            this.values = new jIb(this.classes)
                        }
                    },
                    uIb = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.dSa = new s7(q7.yc(b), q7.instance(this), d => v7.instance(this, c(d.fields)))
                        }
                    };
                var wHb = class {
                    error(a, b) {
                        return Error(`widget '${this.Pia}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.Pia = a
                    }
                };
                var vIb = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Rs() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        y7()
                    },
                    Qc() {
                        y7()
                    },
                    Qd() {
                        y7()
                    },
                    Cw() {
                        y7()
                    },
                    has() {
                        return !1
                    },
                    yC() {
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
                var wIb;
                wIb = Symbol.iterator;
                var xIb = class {
                    static A(a) {
                        __c.P(a, {
                            Id: A7,
                            Vt: A7
                        })
                    }
                    get Id() {
                        return this.zGa().map(a => {
                            let b = this.Lra.get(a);
                            b == null && (b = `${this.gOa++}`, this.Lra.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Vt() {
                        const a = new Map;
                        this.Id.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    xk(a) {
                        return __c.B(this.Vt.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.Id.length
                    }
                    count() {
                        return this.Id.length
                    }
                    toArray() {
                        return this.Id.map(a => a.ref)
                    }
                    Rs() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get MY() {
                        const a = this.Id[0];
                        return a && a.ref
                    }
                    get r_() {
                        const a =
                            this.Id[this.Id.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.MY;
                        const b = this.Id.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.r_;
                        const b = this.Id;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.Id;
                        for (a = this.xk(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Qc(a, b) {
                        const c = this.Id;
                        for (a = this.xk(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Qd(a, b) {
                        a = this.Vt.get(a);
                        b = this.Vt.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Cw(a) {
                        return this.Id[this.xk(a)].id
                    }
                    has(a) {
                        return this.Vt.has(a)
                    }
                    yC(a) {
                        return new __c.OP(this, a)
                    }
                    map(a) {
                        return this.Id.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.Id.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.Id.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.Id.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.Id.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.Id.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.Id.every(b => a(b.ref, b.id))
                    }[wIb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.zGa =
                            a;
                        this.gOa = (xIb.A(this), 0);
                        this.Lra = new WeakMap
                    }
                };
                var yIb = new Set,
                    zIb = {
                        zt: () => ({
                            gb: vIb
                        })
                    },
                    AIb = class {
                        static A(a) {
                            __c.P(a, {
                                wT: GHb.shallow
                            })
                        }
                        $Oa(a, b) {
                            yIb.has(a) || (b = b.map(c => {
                                const d = EHb(this.IDa, a, c);
                                if (c.zt) {
                                    const e = c.zt;
                                    if (typeof e === "function") return {
                                        type: 0,
                                        zt: ({
                                            W: h
                                        }) => e({
                                            data: d.eval(h).data
                                        })
                                    };
                                    c = this.Tj.types;
                                    const f = c.instance("RectElement"),
                                        g = this.Z7(this.Tj, d, c.iX(f)).compile(e);
                                    return {
                                        type: 0,
                                        zt: ({
                                            W: h
                                        }) => {
                                            const k = g.eval(h);
                                            return {
                                                gb: new __c.aFa(new xIb(() => Array.from(k()).map(l => l.instance)))
                                            }
                                        }
                                    }
                                }
                                if (c.Component) {
                                    const e = c.Component;
                                    return {
                                        type: 1,
                                        Component: DHb(this.L, HHb(function({
                                            pKa: f
                                        }) {
                                            const [g] = IHb(() => d.eval({
                                                Kf: f
                                            }).data);
                                            return z7(e, {
                                                data: g
                                            })
                                        }))
                                    }
                                }
                                throw new E(c);
                            }), this.wT.set(a, b), yIb.add(a), __c.$R.set(a, zIb))
                        }
                        ILa(a) {
                            return this.wT.get(a)
                        }
                        constructor(a, b, c, d) {
                            this.IDa = a;
                            this.Tj = b;
                            this.Z7 = c;
                            this.L = d;
                            this.wT = (AIb.A(this), new Map)
                        }
                    };
                var BIb = class {
                    constructor(a) {
                        this.iJa = a;
                        this.JDa = new Map
                    }
                };
                __c.Hza = {
                    bPa: function({
                        L: a
                    }) {
                        var b = {
                            Tj: BHb(),
                            Z7: tIb
                        };
                        const {
                            Tj: c,
                            Z7: d
                        } = b;
                        b = zHb(c);
                        b = new BIb(b);
                        a = new AIb(b, c, d, a);
                        return {
                            IDa: b,
                            oV: a,
                            pV: a
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/75a60be2a9e6bc67.js.map