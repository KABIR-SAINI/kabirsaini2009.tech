(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var C = __c.C;
                var g2b = function(a, b, c, d) {
                        c = new f2b(c, d);
                        C(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        C(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Fja(a, b)
                    },
                    i2b = function(a) {
                        return { ...__c.udb,
                            ...F5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.zja.width,
                                height: a.zja.height
                            },
                            xb: a.xb.map(h2b)
                        }
                    },
                    j2b = function(a) {
                        switch (a.RD) {
                            case 0:
                                var b = __c.wk.Kc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Eg("color", a.color);
                                b = b.Cc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.aL,
                                    ...G5,
                                    ...F5,
                                    Ta: (c = a.Ta) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    ph: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.aL,
                                    ...G5,
                                    ...F5,
                                    text: b,
                                    ph: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    K5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.fdb,
                            fill: H5(b),
                            border: I5(c),
                            X: J5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: i2b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: j2b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: k2b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    k2b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.gdb,
                            ...G5,
                            ...F5,
                            I: G5.width,
                            W: G5.height,
                            fill: H5(c),
                            border: I5(b),
                            direction: 1,
                            X: J5(d),
                            cells: new Map(a.map(k => [k.id, K5(k)])),
                            behavior: {
                                rules: [{
                                    rh: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        Lh: l2b(a)
                                    }
                                }]
                            },
                            cf: void 0
                        }
                    },
                    l2b = function(a) {
                        return new Map(a.map(b => [b.id, m2b(b)]))
                    },
                    m2b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.kCa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.kR,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    I5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.qE,
                            all: a ? { ...__c.aR,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                ng: !0
                            } : void 0
                        }
                    },
                    J5 = function(a) {
                        return { ...__c.jR,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    h2b = function(a) {
                        return { ...__c.vdb,
                            ...a,
                            fill: H5(a.fill),
                            stroke: n2b(a.stroke)
                        }
                    },
                    n2b = function(a) {
                        return a ? { ...__c.aR,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    H5 = function(a) {
                        var b;
                        const c = { ...__c.Sv,
                            Ta: (b = a === null || a === void 0 ? void 0 : a.Ta) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    ob: a.ob
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    t2b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        o2b(a.cells, c, (e, f) => {
                            let g = !1;
                            p2b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, K5(f));
                                g = !0
                            });
                            g || (L5(e.fill, f.fill), q2b(e.border, f.border), r2b(e.X, f.X))
                        }, e => K5(e));
                        s2b(a.behavior, b, c);
                        L5(a.fill, b.fill);
                        r2b(a.X, b.X);
                        q2b(a.border, b.border);
                        var d;
                        a.Ta = (d = b.Ta) !== null && d !== void 0 ? d : 0
                    },
                    s2b = function(a, b, c) {
                        M5(a.rules, [b], d => {
                            u2b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            u2b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            o2b(d.grid.Lh, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.Ba = k === null || k === void 0 ? void 0 : k.Ba, g.padding.Na = k === null || k === void 0 ? void 0 : k.Na, g.padding.Aa = k === null || k === void 0 ? void 0 : k.Aa, g.padding.Ua = k === null || k === void 0 ? void 0 : k.Ua);
                                g.alignSelf = p
                            }, g => m2b(g))
                        }, d => {
                            var e, f;
                            return {
                                rh: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    Lh: l2b(d.cells)
                                }
                            }
                        })
                    },
                    v2b = function(a, b) {
                        M5(a.xb, b.xb, (e, f) => {
                            e.d = f.d;
                            L5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(n2b(f.stroke))
                        }, e => h2b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = i2b(b);
                        a.width = d;
                        __c.Qu(a.viewBox).equals(__c.Qu(c)) || (a.viewBox = c)
                    },
                    p2b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? v2b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.wk.domain.Xb(__c.wk.ua(a.text), j2b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? t2b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    o2b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    M5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    L5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.ob.set(void 0);
                                var c;
                                a.Ta = (c = b.Ta) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.ob.ref && __c.V2a.domain.Xb(a.ob.ref, b.ob)) break;
                                a.color = void 0;
                                a.ob.set(b.ob);
                                var d;
                                a.Ta = (d = b.Ta) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.ob.set(void 0)
                        }
                    },
                    r2b = function(a, b) {
                        b = J5(b);
                        a.all = b.all;
                        a.LE = b.LE;
                        a.IE = b.IE;
                        a.KE = b.KE;
                        a.HE = b.HE
                    },
                    q2b = function(a, b) {
                        b = I5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.rE.domain.Xb(__c.rE.ua(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    u2b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    x2b = function(a, b, c, d) {
                        let e = a.zXa.get(b);
                        if (e) return e;
                        e = {
                            jz: new w2b(c.KA, b, d, c.Csa),
                            tHa: void 0,
                            mRa: void 0,
                            lTa: __c.$V.mode
                        };
                        a.zXa.set(b, e);
                        return e
                    },
                    z2b = function(a, b, c, d, e) {
                        var f, g;
                        e = x2b(a, c, b, e);
                        const h = e.jz,
                            k = e.mRa,
                            l = e.tHa,
                            m = e.lTa;
                        c = __c.bQ.ua(c);
                        const n = ((f = (g = a.qB).Ira) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.$V;
                        h.xk === k && y2b.structural(c, l) && n.mode === m || (e.tHa = c, e.mRa = h.xk, e.lTa = n.mode, b = b.render(h, n), a.Hlb.update(d, b), g2b(d, b, (p, q) => a.uR.Tsa.set(p, q), (p, q, r) => a.uR.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    C2b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.wmb());
                        c.push(A2b(() => {
                            a: {
                                var e = new B2b;
                                for (const f of b)
                                    if (e.xR(f), e.Eqa) {
                                        e = e.Eqa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.dc.isLoaded(e) || a.Nta.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) C(f.type === "layout"), a.Al.Fga(f);
                                d()
                            }
                        }));
                        return d
                    },
                    D2b = function(a, b) {
                        return {
                            hz: ({
                                qh: c
                            }) => {
                                var d;
                                const {
                                    jz: e
                                } = x2b(a.renderer, c, b, a.y3), f = __c.dQ.create([]), g = [];
                                g.push(C2b(a.ieb, f));
                                g.push(A2b(() => {
                                    var k, l;
                                    return [(k = (l = a.qB).Ira) === null || k === void 0 ? void 0 : k.call(l, f), __c.bQ.ua(c),
                                        e.xk
                                    ]
                                }, () => {
                                    z2b(a.renderer, b, c, f, a.y3)
                                }, {
                                    fireImmediately: !0,
                                    equals: y2b.structural
                                }));
                                const h = (d = b.qva) === null || d === void 0 ? void 0 : d.call(b, {
                                    jz: e
                                });
                                h && g.push(h);
                                return {
                                    $a: f,
                                    Ev: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    F2b = function(a, b) {
                        let c = a.g9.get(b);
                        c || (c = E2b("weakKey"), a.g9.set(b, c));
                        c.reportObserved()
                    },
                    N5 = __webpack_require__(519427),
                    y2b = N5.comparer,
                    G2b = N5.computed,
                    E2b = N5.createAtom,
                    O5 = N5.observable,
                    A2b = N5.reaction,
                    H2b = N5.runInAction;
                var I2b = class {
                    static A(a) {
                        __c.Q(a, {
                            gob: O5.ref,
                            xfb: O5.ref
                        })
                    }
                    constructor() {
                        this.Ira = (I2b.A(this), void 0)
                    }
                };
                var J2b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    w2b = class {
                        static A(a) {
                            __c.Q(a, {
                                Hf: G2b
                            })
                        }
                        get nRa() {
                            var a = this.y3,
                                b = this.qh,
                                c = this.Csa;
                            let d = a.sources.get(b);
                            d || (d = O5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get xk() {
                            return this.nRa.get()
                        }
                        get Hf() {
                            return this.KA.fw({
                                type: "dict",
                                value: this.qh
                            })
                        }
                        hn(a) {
                            this.nRa.set(a instanceof Function ? { ...this.xk,
                                ...a()
                            } : { ...this.xk,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.KA = a;
                            this.qh = b;
                            this.y3 = c;
                            this.Csa = d;
                            w2b.A(this)
                        }
                    };
                var f2b = class {
                    R7(a, b) {
                        this.pXa(a, b);
                        b.ref && this.Sxa(a, b.ref, b.key)
                    }
                    AR(a, b) {
                        b.ref && this.Sxa(a.text, b.ref, b.key)
                    }
                    fEa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                C(a.element.type === "shape");
                                this.R7(a.element, b.content);
                                break;
                            case "text":
                                C(a.element.type === "text");
                                this.AR(a.element, b.content);
                                break;
                            case "layout":
                                C(a.element.type === "layout");
                                this.Fja(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Fja(a, b) {
                        this.pXa(a, b);
                        b.ref && this.Sxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), C(!!d && !!a), this.fEa(d, a)
                    }
                    constructor(a, b) {
                        this.pXa = a;
                        this.Sxa = b
                    }
                };
                var F5 = {
                        locked: !0,
                        Fl: {
                            v_: !1,
                            BX: !1
                        },
                        Ni: !0
                    },
                    G5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var K2b = class {
                    constructor(a) {
                        this.Al = a;
                        this.update = (b, c) => {
                            M5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        t2b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...k2b(d),
                                            ...F5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            I: d.minWidth,
                                            W: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) C(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.I = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.Al.Fga(d)
                        }
                    }
                };
                var L2b = class {
                    constructor(a, b, c) {
                        this.Hlb = a;
                        this.uR = b;
                        this.qB = c;
                        this.zXa = new WeakMap
                    }
                };
                var M2b = class {
                        static A(a) {
                            __c.Q(a, {
                                Nta: O5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.dc = a;
                            this.Al = b;
                            this.Nta = (M2b.A(this), new Set);
                            this.Pqa = new Set;
                            this.wmb = () => {
                                this.xba || (this.xba = __c.wga(this.dc).subscribe(d => {
                                    H2b(() => {
                                        this.Nta.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.Pqa.add(c);
                                return () => {
                                    this.Pqa.delete(c);
                                    this.Pqa.size <= 0 && this.xba && (this.xba.unsubscribe(), this.xba = void 0)
                                }
                            }
                        }
                    },
                    B2b = class extends __c.PC {
                        xR(a, b) {
                            this.Eqa || super.xR(a, b)
                        }
                        AR(a) {
                            this.Eqa = (a = a.text.Ez("font-family")["font-family"].values().next().value) &&
                                __c.os(a).id
                        }
                    };
                var N2b = !1,
                    O2b = class {
                        register(a, b) {
                            this.VE.has(a) || (this.VE.set(a, b), N2b || (__c.cQ.set(a, D2b(this, b)), N2b = !0))
                        }
                        get(a) {
                            return this.VE.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.y3 = b;
                            this.qB = c;
                            this.dc = d;
                            this.Al = e;
                            this.VE = new Map;
                            this.ieb = new M2b(this.dc, this.Al)
                        }
                    };
                var P2b = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && ((b = this.g9.get(a)) === null || b === void 0 || b.reportChanged());
                        return c
                    }
                    get(a) {
                        F2b(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        F2b(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            (c = this.g9.get(a)) === null || c === void 0 || c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.g9 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var Q2b = class {
                        constructor() {
                            this.Tsa = new P2b;
                            this.refs = new P2b
                        }
                    },
                    R2b = class {
                        getContext(a) {
                            return this.uR.refs.get(a)
                        }
                        aO(a) {
                            return this.uR.Tsa.get(a)
                        }
                        constructor(a, b, c) {
                            this.uR = a;
                            this.y3 = b;
                            this.renderer = c
                        }
                    };
                __c.$Pa = {
                    Rhb: function(a) {
                        const b = new I2b,
                            c = new Q2b,
                            d = new L2b(new K2b(a.Al), c, b),
                            e = new J2b;
                        a = new O2b(d, e, b, a.dc, a.Al);
                        return {
                            qB: b,
                            pQb: new R2b(c, e, d),
                            T7: a,
                            uR: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/0146e780a29f8f75.js.map