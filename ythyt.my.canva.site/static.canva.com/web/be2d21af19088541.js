(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76301], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var $M = __c.$M;
                var yc = __c.yc;
                var P = __c.P;
                var Il = __c.Il;
                var BC = __c.BC;
                var O = __c.O;
                var jl = __c.jl;
                var B = __c.B;
                var E = __c.E;
                var P5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.iK(b.reference.Ig);
                                a = a.FM(b.reference.Og);
                                return c != null && a != null;
                            case 1:
                                return a.iK(b.reference.Ig) != null;
                            case 2:
                                return a.FM(b.reference.Og) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    FCb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.S.length > 0) return !1;
                                a = a.pA(c.YO.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.iI(new __c.mI, a.jC).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return P5(b, d);
                                        case 1:
                                            return P5(b,
                                                d.start) && P5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    GCb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.la;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Fb === c : g.span.wc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.va : c === null || c === void 0 ? void 0 : c.Ka) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: B(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.j9, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.Nya, h = h.la === k.la && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Rb === c.Rb && g.Rb === 0 ? g.j9 = f : e.push({
                                            Nya: k,
                                            GWa: l,
                                            j9: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Rb: c.Rb
                                        })
                                    }
                            }
                        return e
                    },
                    HCb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.la,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Bb === h : d.span.$b === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.qa : d === null || d === void 0 ? void 0 : d.Ma) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            la: g,
                                            boundary: "start"
                                        } : {
                                            la: B(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Zma, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.n9, k = k.la === m.la && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Rb === d.Rb && h.Rb === 0 ? h.n9 = g : f.push({
                                            Zma: l,
                                            QWa: m,
                                            n9: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Rb: d.Rb
                                        })
                                    }
                            }
                        return f
                    },
                    ICb = function(a, b, c, d, e) {
                        const f =
                            a.kAa.NIa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Qc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Qc(d[0].la)) && e.push({
                            la: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].la)) && e.push({
                            la: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Qc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.la : void 0;
                                k = l ? b.layout.rows.Qc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ma : m === null || m === void 0 ? void 0 : m.qa;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ka : m === null || m === void 0 ?
                                    void 0 : m.va;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ma : n === null || n === void 0 ? void 0 : n.qa;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ka : l === null || l === void 0 ? void 0 : l.va;
                                p = __c.bl({
                                    va: n,
                                    Ka: k,
                                    qa: l,
                                    Ma: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: v,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.Rb) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(Q5(q, r), __c.Zk(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    JCb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = GCb(b, c, d, e);
                        f = HCb(b, c, d, e, f);
                        const h = ICb(a, b, c, d, e),
                            k = a.nNa(b),
                            l = a.NMa(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.GWa,
                                t = n.j9,
                                v = n.Nya;
                            const u = n.color,
                                x = n.weight;
                            n = n.Rb;
                            const y = m ? -1 : 1,
                                z = (p = h.get(Q5(r, v))) === null || p === void 0 ?
                                void 0 : p.Ma;
                            p = (q = h.get(Q5(t, v))) === null || q === void 0 ? void 0 : q.qa;
                            if (z != null && p != null) {
                                q = B(k.get(v.la));
                                var D = B(l.get(r.column));
                                r = B(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = D.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Rb: n,
                                    p1: new jl(q + z * y, v),
                                    p2: new jl(t + p * y, v),
                                    ...__c.el((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.pb);
                        return [...f.map(n => {
                            var p, q, r = n.Zma,
                                t = n.QWa,
                                v = n.n9;
                            const u = n.color,
                                x = n.weight;
                            n = n.Rb;
                            const y = (p = h.get(Q5(r, t))) === null || p === void 0 ? void 0 : p.Ka;
                            p = (q = h.get(Q5(r,
                                v))) === null || q === void 0 ? void 0 : q.va;
                            if (y != null && p != null) {
                                q = B(l.get(r.column));
                                var z = B(k.get(t.la));
                                t = B(k.get(v.la));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Rb: n,
                                    p1: new jl(r, q + y),
                                    p2: new jl(r, v + p),
                                    ...__c.el(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.pb), ...a]
                    },
                    KCb = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Hd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Hd(d, e => `${e.zi}_${e.Ai}`);
                            for (const [, e] of a) {
                                const {
                                    Ai: f,
                                    zi: g
                                } = e[0];
                                a = __c.Hd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    zi: g,
                                    Ai: f
                                })
                            }
                        }
                        return b
                    },
                    LCb = function(a, b, c, d) {
                        var e = __c.f9a;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                la: k,
                                boundary: "start"
                            }, {
                                la: k,
                                boundary: "end"
                            }] : [{
                                la: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.kAa.MUa(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = JCb(e, a, h, f, g, d);
                        return KCb(c)
                    },
                    MCb = function(a) {
                        switch (a) {
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 4:
                                return O("9ND0kg");
                            case -1:
                                return O("RWqnLA");
                            case 9:
                                return O("nQR/7w");
                            case -2:
                                return O("P23rtA");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    R5 = function() {
                        const [a] = (0, __c.Sb)(() => BC());
                        return a
                    },
                    NCb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    OCb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.i9a)(a) / 2 : -(0, __c.g9a)(a) / 2,
                            c = -(0, __c.h9a)(a) / 2,
                            d = a.width + (0, __c.g9a)(a) / 2 + (0, __c.i9a)(a) / 2;
                        a = a.height + (0, __c.h9a)(a) / 2 + (0, __c.j9a)(a) / 2;
                        return Il({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    PCb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    SCb = function(a) {
                        var b;
                        const c = a.PA;
                        var d = a.content;
                        const e = a.context;
                        a = a.ym;
                        __c.A((d === null || d === void 0 ? void 0 : (b = d.lf) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Fi;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.v5) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.re(__c.LKa, { ...__c.CPa,
                                        value: b.value
                                    }),
                                    context: e,
                                    ym: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = QCb(c, e, d.Qv, d.Fi.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: S5(__c.ZS, {
                                        label: MCb(b.error),
                                        children: S5(__c.Dk, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: S5(RCb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    QCb = function(a, b, c, d) {
                        var e;
                        return (e = a.y5) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    VCb = function(a) {
                        const b = a.PA,
                            c = a.hg,
                            d = a.lXa,
                            e = a.ib;
                        b.y5 = f => __c.Fwa({ ...f,
                            ib: e
                        });
                        b.jka = f => SCb({ ...f,
                            PA: b
                        });
                        b.v5 = PCb(TCb({
                            hg: c,
                            tJ: void 0
                        }));
                        b.lka = UCb(d, e);
                        b.mka = PCb(f => S5(T5, { ...f,
                            ib: e
                        }))
                    },
                    WCb = function({
                        label: a,
                        Fv: b,
                        width: c,
                        height: d,
                        scale: e,
                        fna: f
                    }) {
                        return S5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: U5(__c.Ak, {
                                className: V5("ivlMMQ", W5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && S5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    W5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    YCb = function({
                        kj: a,
                        Era: b,
                        scale: c,
                        $l: d,
                        fm: e,
                        MDa: f
                    }) {
                        const g = X5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.VI(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return S5(__c.Bk, {
                            xn: "light",
                            light: "light",
                            Sp: "light",
                            dark: "light",
                            children: m => S5("div", {
                                className: V5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: S5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: V5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.up,
                                    children: S5(__c.cT, {
                                        className: V5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: S5(XCb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    $Cb = function() {
                        const a = new ZCb,
                            b = new __c.lU,
                            c = Y5(f => {
                                const {
                                    scale: g = 1,
                                    Ara: h,
                                    size: k =
                                        "small",
                                    MDa: l = !0
                                } = f, m = Z5(n => a.fm({
                                    scale: n,
                                    size: k,
                                    Bba: h
                                }), [k, h]);
                                return S5(YCb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    kj: f.sheet.direction === "rtl",
                                    Era: f.selection != null && a.NPa(f.sheet, f.selection),
                                    fm: m,
                                    MDa: l
                                })
                            }),
                            d = Y5(f => {
                                const {
                                    scale: g = 1,
                                    Ara: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    mVa: n
                                } = f, p = Z5(u => a.fm({
                                    scale: u,
                                    size: k,
                                    Bba: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Z5(u => m != null && a.lea(m).has(u), [m]), t = Z5(u => m != null && a.XNa(l, m).has(u), [l, m]), v = Z5(u => {
                                    const x = n != null && l.layout.cols.Qd(u, n.Bb) >= 0 && l.layout.cols.Qd(u, n.$b) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return S5($5, { ...f,
                                    Kd: g,
                                    le: q,
                                    fm: p,
                                    nz: v,
                                    aA: b
                                })
                            }),
                            e = Y5(f => {
                                const {
                                    scale: g = 1,
                                    Ara: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    mVa: n
                                } = f, p = Z5(u => a.fm({
                                    scale: u,
                                    size: k,
                                    Bba: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Z5(u => m != null && a.nea(m).has(u), [m]), t = Z5(u => m != null && a.YNa(l, m).has(u), [l, m]), v = Z5(u => {
                                    const x = n != null && l.layout.rows.Qd(u, n.Fb) >= 0 && l.layout.rows.Qd(u, n.wc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return S5(a6, { ...f,
                                    Kd: q,
                                    le: g,
                                    fm: p,
                                    nz: v,
                                    aA: b
                                })
                            });
                        return {
                            gEa: c,
                            fEa: d,
                            hEa: e
                        }
                    },
                    aDb = function(a) {
                        const b = a.Xm,
                            c = () => null;
                        return __c.NC(d => S5(b6, { ...d,
                            Xm: b,
                            gg: c
                        }))
                    },
                    bDb = function({
                        sheet: a,
                        O: b,
                        range: c,
                        xi: d
                    }) {
                        c6(() => d6(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.qa(c.Bb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.va(c.Fb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    eDb = function({
                        onScroll: a
                    }) {
                        const b = new cDb(a);
                        return {
                            wx: b,
                            k5: Y5(c => S5(dDb, {
                                sheet: c.sheet,
                                wx: b,
                                children: c.children
                            }))
                        }
                    },
                    hDb = function(a) {
                        const b = a.Xm,
                            c = a.Cf,
                            d = a.lAa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                wx: f,
                                k5: g
                            } = eDb({
                                onScroll: a.onScroll
                            });
                        class h extends fDb {
                            get RE() {
                                const k = this.props.aa.Et;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.Zza(this.props.item, {
                                    Cb: this.props.Cb,
                                    aa: this.props.aa
                                })
                            }
                            componentWillUnmount() {
                                d.RHa(this.props.item, {
                                    Cb: this.props.Cb,
                                    aa: this.props.aa
                                })
                            }
                            render() {
                                d.Zza(this.props.item, {
                                    Cb: this.props.Cb,
                                    aa: this.props.aa
                                });
                                return S5(gDb, { ...this.props,
                                    O: this.O,
                                    Xm: b,
                                    RE: this.RE,
                                    gg: this.gg,
                                    lAa: d,
                                    wx: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.O = e6(() => {
                                    const l = this.props.item;
                                    var m = this.props.aa,
                                        n = m.Et;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.sNa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.xm(l,
                                                n.Cb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.gg = Y5(l => S5("div", {
                                    className: "wKvivQ",
                                    children: S5(__c.Nwa, { ...this.props,
                                        ...l,
                                        Cf: c
                                    })
                                }))
                            }
                        }
                        return {
                            hFa: h,
                            wx: f
                        }
                    },
                    iDb = function(a, b) {
                        if (b != null && b.Bb != null && b.Fb != null && b.$b != null && b.wc != null) {
                            var c = a.qa(b.Bb),
                                d = a.va(b.Fb),
                                e = a.qa(b.$b) + b.$b.width - c;
                            a = a.va(b.wc) + b.wc.height - d;
                            return Il({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    kDb = function(a) {
                        const b = a.Xm,
                            c = () => null;
                        return d => S5(jDb, { ...d,
                            Xm: b,
                            gg: c
                        })
                    },
                    oDb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                Cma: b,
                                Er: b,
                                Ia: {},
                                Qk: {}
                            },
                            d = f6(() => a.Yu.style || c, h => {
                                var k;
                                Object.assign(a.SW.style, h.Cma);
                                Object.assign(a.gF.style, h.Er);
                                Object.assign(a.Jy.style, h.Ia);
                                Object.assign(a.Oy.style, h.Qk);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ia) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.Jy.classList.toggle("OQx3PQ", h === "underline");
                                a.Jy.classList.toggle("_99ezUA", h === "line-through");
                                a.Jy.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: lDb
                            }),
                            e = f6(() => a.Jaa, h => {
                                a.Jy.classList.toggle("_84KvRA", !h);
                                a.SW.classList.toggle("_84KvRA", !h);
                                a.gF.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = f6(() => a.renderer, h => {
                                a.uX && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.uX = void 0, a.iT.remove()) : a.Oy.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.uX = mDb(h.node, a.iT);
                                        a.Oy.appendChild(a.iT);
                                        break;
                                    case "dom":
                                        h.render(a.Oy);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.bca()
                            }, {
                                fireImmediately: !0
                            }),
                            g = nDb ? f6(() => a.G$, h => {
                                a.Jy.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    lDb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    qDb = function(a) {
                        const b = a.Tu,
                            c = a.Cx,
                            d = a.Ux,
                            e = a.iDa,
                            f = a.To,
                            g = new pDb(c),
                            h = (k, l) => f ? FCb(f, k, l) : !1;
                        return k => S5(g6, { ...k,
                            WG: h,
                            Ux: d,
                            Cx: c,
                            Tu: b,
                            qaa: g,
                            iDa: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    Q5 = (a, b) => `${a.column.id}-${a.boundary}:${b.la.id}-${b.boundary}`,
                    TCb = ({
                        hg: a,
                        tJ: b
                    }) => c => (0, __c.N)(__c.l9a, { ...c,
                        hg: a,
                        tJ: b
                    }),
                    h6 = __webpack_require__(443763),
                    rDb = h6.Fragment,
                    S5 = h6.jsx,
                    U5 = h6.jsxs;
                var sDb = __webpack_require__(358579).Z;
                var tDb = __webpack_require__,
                    uDb = tDb(993864),
                    V5 = tDb.n_x(uDb)();
                var Y5 = __webpack_require__(446474).Pi;
                var i6 = __webpack_require__(875604),
                    j6 = i6.Component,
                    fDb = i6.PureComponent,
                    Z5 = i6.useCallback,
                    c6 = i6.useEffect,
                    vDb = i6.useLayoutEffect,
                    X5 = i6.useMemo,
                    k6 = i6.useRef,
                    wDb = i6.useState;
                var l6 = __webpack_require__(635872),
                    m6 = l6.Om,
                    xDb = l6.kq,
                    yDb = l6.YN;
                var n6 = __webpack_require__(519427),
                    o6 = n6.action,
                    d6 = n6.autorun,
                    p6 = n6.comparer,
                    e6 = n6.computed,
                    zDb = n6.createAtom,
                    q6 = n6.observable,
                    f6 = n6.reaction,
                    ADb = n6.untracked;
                var r6 = __webpack_require__(937763)._;
                var s6 = __webpack_require__(161563)._;
                var mDb = __webpack_require__(36281).createPortal;
                var BDb = Y5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = wDb(() => BC()), f = {
                            get: Z5(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Il(g)
                            }, [e])
                        };
                        return U5("div", {
                            className: V5("nMvVqA", d),
                            children: [U5("div", {
                                ref: sDb(a.xi, e),
                                className: "_0YOFPg",
                                children: [S5(a.Xm, { ...a,
                                    viewport: f
                                }), S5("div", {
                                    className: V5("Gdl7fQ", d),
                                    children: (c = a.Lja) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => S5(g, {}, h))
                                })]
                            }), a.a7a === "visible" && U5(rDb, {
                                children: [S5("div", {
                                    className: V5("_32sKQw", d),
                                    children: S5(a.eFa, { ...a
                                    })
                                }), S5("div", {
                                    className: V5("xdIsTQ", d),
                                    children: S5(a.iFa, { ...a
                                    })
                                }), S5("div", {
                                    className: V5("rsTRSA", d),
                                    children: S5(a.gFa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    CDb = Y5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.T;
                            case "text3":
                                return __c.av.ua(a.value).cells.T();
                            default:
                                throw new E(a);
                        }
                    });
                var DDb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var RCb = __c.PS({
                    medium: DDb
                });
                var UCb = (a, b) => __c.rwa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Of: c
                        } = __c.qg(__c.Wg, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            La: void 0,
                            writingMode: 1,
                            Uc: "start",
                            Bf: EDb(e, c),
                            ib: b
                        })
                    }),
                    EDb = m6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.T.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: p6.structural
                    });
                var FDb, GDb, HDb, T5;
                new(FDb = class extends r6 {
                    constructor() {
                        super(T5);
                        GDb()
                    }
                }, (() => {
                    class a extends(HDb = j6) {
                        static A(b) {
                            P(b, {
                                Of: e6
                            })
                        }
                        get Of() {
                            return __c.qg(__c.Wg, this.props.context.attrs).Of
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = S5(this.props.gg, {
                                content: b,
                                la: c.container.la,
                                col: c.container.column,
                                Of: this.Of
                            });
                            return this.Of === "wrap" ? S5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [T5, GDb]
                    } = s6(a, [], [yc], HDb))
                })(), FDb);
                var IDb = __c.Ek * 5,
                    JDb = __c.Ek * 4;
                var ZCb = class {
                    fm({
                        size: a,
                        scale: b,
                        Bba: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? IDb * b : JDb * b
                    }
                    constructor() {
                        this.NPa = m6((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.lea = xDb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Rk
                        });
                        this.nea = xDb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.Rk
                        });
                        this.XNa = m6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.nea(b).size > 0) return new Set(a.layout.cols);
                            b = this.lea(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.la, e.column);
                                for (const f of NCb(c ? c.span.Bb : e.column, c ? c.span.$b : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Rk
                        });
                        this.YNa = m6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.lea(b).size > 0) return new Set(a.layout.rows);
                            b = this.nea(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.la, e.column);
                                for (const f of NCb(c ? c.span.Fb : e.la, c ? c.span.wc : e.la, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Rk
                        })
                    }
                };
                var KDb, LDb, MDb, NDb, ODb, PDb, QDb = parseInt("4px", 10) || 4,
                    $5;
                new(KDb = class extends r6 {
                    constructor() {
                        super($5);
                        MDb()
                    }
                }, (() => {
                    class a extends(NDb = j6) {
                        static A(b) {
                            P(b, {
                                kj: e6,
                                Rt: e6,
                                mU: e6
                            })
                        }
                        get kj() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Rt() {
                            var b;
                            const c = (b = this.props.$l) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.VI(c)
                        }
                        get mU() {
                            var b, c, d;
                            return (c = (d = this.props).j$) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return S5(__c.Bk, {
                                xn: "light",
                                light: "light",
                                Sp: "light",
                                dark: "light",
                                children: this.eIa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = ($5.A(this), o6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Kd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = o6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.lya = (c, d, e) => {
                                const {
                                    sheet: f,
                                    fm: g,
                                    nz: h,
                                    j7a: k,
                                    Kd: l = 1,
                                    le: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.kj,
                                    gtA7Dw: this.kj
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.kj ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.mU) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return U5("div", {
                                    style: r,
                                    className: V5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(v => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Qd(v, c) < 0 || d && f.layout.cols.Qd(v, d) > 0)) return S5(RDb, {
                                            col: v,
                                            label: __c.WB(t),
                                            Fv: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            fm: g,
                                            nz: h,
                                            Kd: l,
                                            le: m
                                        }, v.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && S5("div", {
                                        style: {
                                            width: QDb * l
                                        },
                                        className: V5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.eIa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.YB ? e.layout.qd.get(e.view.freeze.YB) : void 0,
                                    g = {
                                        jNbTIg: !this.kj,
                                        gtA7Dw: this.kj
                                    };
                                return U5("div", {
                                    ref: (d = this.Rt) === null || d === void 0 ? void 0 : d.up,
                                    className: V5("xhBZaw", g, c.className),
                                    children: [f && this.lya(void 0, f, {
                                        sticky: !0
                                    }), this.lya(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [$5, MDb]
                    } = s6(a, [], [yc], NDb))
                })(), KDb);
                var a6;
                new(LDb = class extends r6 {
                    constructor() {
                        super(a6);
                        ODb()
                    }
                }, (() => {
                    class a extends(PDb = j6) {
                        static A(b) {
                            P(b, {
                                kj: e6,
                                Rt: e6,
                                mU: e6
                            })
                        }
                        get kj() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Rt() {
                            var b;
                            const c = (b = this.props.$l) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.VI(c)
                        }
                        get mU() {
                            var b, c, d;
                            return (c = (d = this.props).j$) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return S5(__c.Bk, {
                                xn: "light",
                                light: "light",
                                Sp: "light",
                                dark: "light",
                                children: this.bVa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (a6.A(this), o6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    le: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = o6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.oya = (c, d, e) => {
                                const {
                                    sheet: f,
                                    fm: g,
                                    nz: h,
                                    Kd: k = 1,
                                    le: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.kj,
                                    gtA7Dw: this.kj
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.mU) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return U5("div", {
                                    style: q,
                                    className: V5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Qd(t, c) < 0 || d && f.rows.Qd(t, d) > 0)) return S5(SDb, {
                                            la: t,
                                            label: `${r+1}`,
                                            nz: h,
                                            fm: g,
                                            Kd: k,
                                            le: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && S5("div", {
                                        style: {
                                            height: QDb * l
                                        },
                                        className: V5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.bVa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.GM ? e.layout.Ed.get(e.view.freeze.GM) : void 0,
                                    g = {
                                        jNbTIg: !this.kj,
                                        gtA7Dw: this.kj
                                    };
                                return U5("div", {
                                    ref: (d = this.Rt) === null || d === void 0 ? void 0 : d.up,
                                    className: V5("An9VeA", g, c.className),
                                    children: [f && this.oya(void 0, f, {
                                        sticky: !0
                                    }), this.oya(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [a6, ODb]
                    } = s6(a, [], [yc], PDb))
                })(), LDb);
                var RDb = Y5(a => {
                        const b = a.label,
                            c = a.Fv,
                            d = a.col,
                            e = a.nz,
                            f = a.fm,
                            g = a.Kd;
                        a = a.le;
                        const h = f(a),
                            k = yDb(() => e(d));
                        return S5("div", {
                            className: V5("_83Rssw", "d2uLIA", W5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: S5(WCb, {
                                label: b,
                                Fv: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                fna: k
                            })
                        })
                    }),
                    SDb = Y5(a => {
                        const b = a.label,
                            c = a.la,
                            d = a.fm,
                            e = a.nz,
                            f = a.Kd;
                        a = a.le;
                        const g = d(f),
                            h = yDb(() => e(c));
                        return S5("div", {
                            className: V5("_83Rssw", "JhBzyw", W5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: S5(WCb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                fna: h
                            })
                        })
                    });
                var TDb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var UDb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var XCb = __c.PS({
                    Xq: TDb,
                    medium: UDb
                });
                var VDb, WDb, XDb, b6;
                new(VDb = class extends r6 {
                    constructor() {
                        super(b6);
                        WDb()
                    }
                }, (() => {
                    class a extends(XDb = j6) {
                        static A(b) {
                            P(b, {
                                Ad: e6.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return S5(this.props.Xm, {
                                sheet: b.W.config,
                                container: b,
                                BW: "visible",
                                $l: this.props.$l,
                                lq: this.props.lq,
                                mq: this.props.mq,
                                O: this.props.O,
                                Ad: this.Ad,
                                gg: this.props.gg,
                                BB: void 0
                            })
                        }
                        get Ad() {
                            return __c.hC(this.props.element.W.Oa, this.props.Md)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [b6, WDb]
                    } = s6(a, [], [yc], XDb))
                })(), VDb);
                var YDb = class {
                    constructor() {
                        this.l2 = new WeakMap;
                        this.sNa = a => this.l2.get(a);
                        this.Zza = (a, b) => {
                            this.l2.set(a, b)
                        };
                        this.RHa = (a, b) => {
                            const c = this.l2.get(a);
                            c && c.aa === b.aa && c.Cb === b.Cb && this.l2.delete(a)
                        }
                    }
                };
                var t6 = parseInt("4px", 10) || 4,
                    ZDb = Y5(({
                        sheet: a,
                        O: b,
                        range: c,
                        Qr: d,
                        Rr: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.va(c.wc) + c.wc.height, a = a.qa(c.$b) + c.$b.width, S5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: t6 * b
                                },
                                className: V5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.qa(c.$b) + c.$b.width, S5("div", {
                                style: {
                                    width: t6 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: V5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.va(c.wc) + c.wc.height, S5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: t6 * b
                                },
                                className: V5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var u6 = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = R5();
                        bDb({
                            sheet: a,
                            O: c,
                            range: b,
                            xi: e
                        });
                        return S5("div", {
                            ref: e,
                            className: V5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    $Db = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = R5();
                        bDb({
                            sheet: a,
                            O: c,
                            range: b,
                            xi: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return S5("div", {
                            className: V5("nstn2A", a, "_9sodyg"),
                            children: S5("div", {
                                ref: e,
                                className: V5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var dDb = Y5(({
                        sheet: a,
                        children: b,
                        wx: c
                    }) => {
                        const d = Z5(f => {
                                c.xea(a, f)
                            }, [c, a]),
                            e = Z5(f => {
                                f != null ? c.xx.set(a, f) : c.xx.delete(a)
                            }, [c, a]);
                        return S5(__c.Ybb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            TD: e,
                            children: b
                        })
                    }),
                    cDb = class {
                        xea(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.IT.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.xx = new WeakMap;
                            this.IT = q6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = o6((b, c) => {
                                b = this.xx.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var gDb = Y5(a => {
                    const b = a.item,
                        c = a.$l,
                        d = a.We,
                        e = a.measureRef,
                        f = a.O,
                        g = a.csa,
                        h = a.Cb,
                        k = a.lq,
                        l = a.mq,
                        m = a.Xm,
                        n = a.RE,
                        p = a.gg,
                        q = a.Md,
                        r = a.wx;
                    a = X5(() => __c.hC(b.Oa, q), [b, q]);
                    const t = X5(() => Y5(({
                            sheet: y,
                            range: z,
                            Qr: D,
                            Rr: C
                        }) => S5(u6, {
                            sheet: y,
                            range: z,
                            O: f,
                            children: S5(ZDb, {
                                sheet: y,
                                O: f,
                                range: z,
                                Qr: D,
                                Rr: C
                            })
                        })), [f]),
                        v = OCb(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    c6(() => d6(() => {
                        var y = b.config.view.freeze.YB ? b.config.layout.qd.get(b.config.view.freeze.YB) : void 0;
                        if (y != null)
                            if (b.config.qa(y) + y.width > x) {
                                if (y = r.xx.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.xx.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return S5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: S5(n, {
                            sheet: b,
                            children: S5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: S5("div", {
                                    className: "W1ir5A",
                                    children: S5(m, {
                                        container: d.Qh(b),
                                        sheet: b.config,
                                        BW: "visible",
                                        $l: c,
                                        O: f,
                                        lq: k,
                                        mq: l,
                                        Ad: a,
                                        gg: p,
                                        BB: t
                                    })
                                })
                            })
                        })
                    })
                });
                var aEb = Y5(({
                    page: a,
                    range: b,
                    ox: c
                }) => {
                    const d = iDb(a.sheet, b);
                    return S5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Gl(Il(e)).jm(d) && c(e, f))
                    })
                });
                var bEb = new __c.lU,
                    v6 = a => IDb * a,
                    cEb = () => "primary-default",
                    jDb = Y5(({
                        container: a,
                        $l: b,
                        lq: c,
                        mq: d,
                        LQ: e,
                        O: f,
                        viewport: g,
                        pWa: h,
                        Xm: k,
                        gg: l,
                        ox: m,
                        I1: n,
                        q0a: p,
                        r_a: q,
                        q_a: r
                    }) => {
                        const t = a.page,
                            v = X5(() => Y5(({
                                sheet: u,
                                range: x,
                                Qr: y,
                                Rr: z
                            }) => U5(rDb, {
                                children: [S5(u6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: S5(ZDb, {
                                        sheet: u,
                                        O: f,
                                        range: x,
                                        Qr: y,
                                        Rr: z
                                    })
                                }), U5($Db, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: [p && S5(p, {}), m && S5(aEb, {
                                        page: t,
                                        ox: m,
                                        range: x
                                    }), r && S5(r, {}), n && n()]
                                }), q && x && S5(u6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: S5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? S5(dEb, {
                            container: a,
                            viewport: g,
                            O: f,
                            $l: b,
                            lq: c,
                            mq: d,
                            Xm: k,
                            gg: l,
                            BB: v
                        }) : S5(k, {
                            sheet: t.sheet,
                            container: a,
                            BW: "hidden",
                            $l: b,
                            lq: c,
                            mq: d,
                            LQ: e,
                            O: f,
                            viewport: g,
                            gg: l,
                            BB: v
                        })
                    }),
                    dEb = Y5(a => {
                        const b = a.container,
                            c = a.O,
                            d = a.viewport,
                            e = a.$l,
                            f = a.lq,
                            g = a.mq,
                            h = a.Xm,
                            k = a.gg;
                        a = a.BB;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = k6(null),
                            p = k6(null),
                            q = k6(null);
                        c6(() => {
                            const y = w6({
                                sheet: l.sheet,
                                R2: !0,
                                S2: !0,
                                O: c,
                                viewport: d
                            });
                            return f6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const D = n.current;
                                if (z && D) {
                                    var C =
                                        l.sheet.direction === "rtl",
                                        F;
                                    D.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G;
                                    D.style.top = (G = z.top) !== null && G !== void 0 ? G : "0px";
                                    var I, J;
                                    C ? D.style.right = (I = z.right) !== null && I !== void 0 ? I : "0px" : D.style.left = (J = z.left) !== null && J !== void 0 ? J : "0px";
                                    var L;
                                    D.style.transform = (L = z.transform) !== null && L !== void 0 ? L : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        c6(() => {
                            const y = w6({
                                sheet: l.sheet,
                                R2: !1,
                                S2: !0,
                                O: c,
                                viewport: d
                            });
                            return f6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const D = q.current;
                                if (z && D) {
                                    var C;
                                    D.style.position =
                                        (C = z.position) !== null && C !== void 0 ? C : "sticky";
                                    var F;
                                    D.style.top = (F = z.top) !== null && F !== void 0 ? F : "0px";
                                    var G;
                                    D.style.transform = (G = z.transform) !== null && G !== void 0 ? G : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        c6(() => {
                            const y = w6({
                                sheet: l.sheet,
                                R2: !0,
                                S2: !1,
                                O: c,
                                viewport: d
                            });
                            return f6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const D = p.current;
                                if (z && D) {
                                    var C = l.sheet.direction === "rtl",
                                        F;
                                    D.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G, I;
                                    C ? D.style.right = (G = z.right) !== null && G !== void 0 ? G : "0px" : D.style.left = (I =
                                        z.left) !== null && I !== void 0 ? I : "0px";
                                    var J;
                                    D.style.transform = (J = z.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = Z5((y, z, D) => w6({
                                sheet: y,
                                R2: z,
                                S2: D,
                                O: c,
                                viewport: d
                            }), [c, d]),
                            t = X5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = X5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return U5("div", {
                            className: V5("OsKKIQ", "cbOp6Q"),
                            children: [S5("div", {
                                className: "VDFv_A",
                                children: S5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    BW: "hidden",
                                    $l: e,
                                    lq: f,
                                    mq: g,
                                    LQ: r,
                                    O: c,
                                    viewport: d,
                                    gg: k,
                                    BB: a
                                })
                            }), S5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: S5(YCb, {
                                    kj: m,
                                    Era: !1,
                                    fm: v6,
                                    scale: x
                                })
                            }), S5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: S5($5, {
                                    sheet: l.sheet,
                                    Kd: x,
                                    le: x,
                                    fm: v6,
                                    nz: cEb,
                                    aA: bEb,
                                    j$: t
                                })
                            }), S5("div", {
                                ref: p,
                                className: "zm537g",
                                children: S5(a6, {
                                    sheet: l.sheet,
                                    Kd: x,
                                    le: x,
                                    fm: v6,
                                    nz: cEb,
                                    aA: bEb,
                                    j$: v
                                })
                            })]
                        })
                    }),
                    w6 = ({
                        sheet: a,
                        R2: b,
                        S2: c,
                        O: d,
                        viewport: e
                    }) => e6(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Ql(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new jl(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var pDb = class {
                    constructor(a) {
                        this.Cx = a;
                        this.GHa = __c.eW;
                        this.$Ma = m6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.VMa(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !$M(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !$M(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !$M(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !$M(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.GHa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.qa(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.qa(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.qa(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || $M(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || $M(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.qa(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = $M(b, c, l)) m = h, n = k, p = b.qa(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.VMa = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.za.ref) && g.span.Fb === g.span.wc && g.span.Bb === g.span.$b) {
                                var h = this.Cx.Sr(b, c, d);
                                b = this.Cx.f$(b, c, d, __c.Xg({
                                    Of: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Of: k,
                                    textAlign: l
                                } = __c.qg(__c.Wg, b);
                                if (k === "overflow") return __c.swa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.za.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Fi.type : void 0)
                            }
                        }
                    }
                };
                var eEb = Y5(function(a) {
                    const b = a.sheet;
                    var c = a.ph;
                    const d = a.gZa,
                        e = a.O,
                        f = a.qaa,
                        g = a.LMa;
                    a = a.overflow;
                    const h = R5();
                    vDb(() => d6(() => {
                        const p = B(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = Z5(p => f.$Ma(b, p, d, g), [f, b, d, g]);
                    var l = Z5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = LCb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return S5("svg", {
                        ref: h,
                        role: "presentation",
                        className: V5("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            zi: t,
                            Ai: v
                        }) => S5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: v,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${v}`))
                    })
                });
                var fEb;
                fEb = Symbol.iterator;
                var gEb = class {
                    get size() {
                        return this.A2
                    }
                    get([a, b]) {
                        return (a = this.Nz.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.Nz.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.Nz.get(a);
                        d == null && (d = new Map, this.Nz.set(a, d));
                        d.set(b, c);
                        this.A2++;
                        return this
                    }
                    clear() {
                        this.Nz.clear();
                        this.A2 = 0
                    }
                    delete([a, b]) {
                        const c = this.Nz.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.A2--;
                        c.size === 0 && this.Nz.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.Nz)
                            for (const [d, e] of c) a([b, d], e)
                    }*[fEb]() {
                        for (const [a, b] of this.Nz)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.A2 = 0;
                        this.Nz = new Map
                    }
                };
                var hEb, iEb, jEb, kEb, lEb, mEb, nEb, nDb = __c.Az("285688d5", !1),
                    oEb, pEb = class extends j6 {
                        render() {
                            const {
                                dZ: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return U5("div", {
                                ref: this.nAa,
                                className: V5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.Pla) && S5(x6, { ...b,
                                    sheet: c,
                                    range: a.Pla.range,
                                    Qr: !0,
                                    Rr: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.qDa) && S5(x6, { ...b,
                                    sheet: c,
                                    range: a.qDa.range,
                                    Qr: !1,
                                    Rr: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.Gra) && S5(x6, { ...b,
                                    sheet: c,
                                    range: a.Gra.range,
                                    Qr: !0,
                                    Rr: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.rCa) && S5(x6, { ...b,
                                    sheet: c,
                                    range: a.rCa.range,
                                    Qr: !1,
                                    Rr: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = d6(() => {
                                var b = this.props,
                                    c = b.O;
                                b = b.sheet;
                                const d = this.nAa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.kc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.nAa = BC()
                        }
                    };
                ({
                    c: [oEb, jEb]
                } = s6(pEb, [], [yc], j6));
                jEb();
                var x6;
                new(hEb = class extends r6 {
                    constructor() {
                        super(x6);
                        kEb()
                    }
                }, (() => {
                    class a extends(lEb = j6) {
                        static A(b) {
                            P(b, {
                                Fea: e6,
                                bounds: e6
                            })
                        }
                        get Fea() {
                            const b = this.props.viewport,
                                c = this.props.Qr,
                                d = this.props.Rr;
                            return b == null || !c && !d ? b : e6(() => {
                                const e = __c.Ql(b.get());
                                return Il({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.WG,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.BB,
                                g = this.props.Qr,
                                h = this.props.Rr;
                            return U5("div", {
                                ref: this.Ica,
                                className: V5("i0YQww",
                                    this.props.className),
                                children: [S5("div", {
                                    ref: this.Swa,
                                    className: "vUKoKg",
                                    children: S5("div", {
                                        ref: this.Twa,
                                        children: S5(y6, {
                                            WG: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            $l: this.props.$l,
                                            Ux: this.props.Ux,
                                            gg: this.props.gg,
                                            wP: this.props.wP,
                                            O: this.props.O,
                                            ph: this.ph,
                                            kV: this.kV,
                                            sK: this.sK
                                        })
                                    })
                                }), S5(this.m5, {}), f && S5(f, {
                                    sheet: c,
                                    range: e,
                                    Qr: g,
                                    Rr: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = d6(() => {
                                    var h = this.props,
                                        k = h.O,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.Ica.current;
                                    const p = this.Swa.current;
                                    h = this.Twa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.qa(m.$b) + m.$b.width - l.qa(m.Bb) : l.width,
                                        r = m ? l.va(m.wc) + m.wc.height - l.va(m.Fb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.qa(m.Bb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.va(m.Fb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.LQ;
                            const e = this.props.Qr,
                                f = this.props.Rr,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = d6(() => {
                                const h = this.Ica.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var v;
                                        h.style.right = p ? (v = x.right) !== null && v !== void 0 ? v : n : "unset";
                                        var u;
                                        h.style.transform = (u = x.transform) !== null &&
                                            u !== void 0 ? u : "unset"
                                    }
                                }
                            });
                            __c.kc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Bb: void 0,
                                $b: void 0,
                                Fb: void 0,
                                wc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Bb: (d = c === null || c === void 0 ? void 0 : c.Bb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                $b: (e = c === null || c === void 0 ? void 0 : c.$b) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                Fb: (f = c === null || c === void 0 ? void 0 : c.Fb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                wc: (g = c === null || c === void 0 ? void 0 : c.wc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.Ica = (x6.A(this), BC());
                            this.Swa = BC();
                            this.Twa = BC();
                            this.sK = new qEb;
                            this.hZa = e6(() => [...this.ph.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Qd(c, d)), {
                                equals: __c.Uk()
                            });
                            this.fZa = e6(() => [...this.kV.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Qd(c, d)), {
                                equals: __c.Uk()
                            });
                            this.m5 = Y5(() => S5(this.props.dFa, {
                                ph: this.hZa,
                                gZa: this.fZa,
                                LMa: this.sK.TMa,
                                range: this.props.range
                            }));
                            this.ph = e6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.Fea) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.tl.y - g : c.Fb ? d.va(c.Fb) : 0;
                                f = f ? f.br.y + g : c.wc ? d.va(c.wc) + c.wc.height : 0;
                                g = new Map;
                                for (let k = c.Fb; k != null && c.wc != null && d.layout.rows.Qd(k, c.wc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.va(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: p6.shallow
                            });
                            this.kV = e6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.Fea) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.tl.x - g : c.Bb ? d.qa(c.Bb) : 0;
                                f = f ? f.br.x + g : c.$b ? d.qa(c.$b) + c.$b.width : 0;
                                g = new Map;
                                for (let k = c.Bb; k != null && c.$b != null && d.layout.cols.Qd(k, c.$b) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.qa(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: p6.shallow
                            })
                        }
                    }({
                        c: [x6, kEb]
                    } = s6(a, [], [yc], lEb))
                })(), hEb);
                var qEb = class {
                        constructor() {
                            this.cells = new gEb;
                            this.Cda = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = q6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.TMa = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = q6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.Cna
                            }
                        }
                    },
                    y6;
                new(iEb = class extends r6 {
                    constructor() {
                        super(y6);
                        mEb()
                    }
                }, (() => {
                    class a extends(nEb = j6) {
                        static A(b) {
                            P(b, {
                                CE: q6.shallow,
                                Rt: e6,
                                vla: o6,
                                HX: o6.bound
                            })
                        }
                        get Rt() {
                            var b;
                            const c = (b = this.props.$l) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.VI(c)
                        }
                        render() {
                            var b;
                            return U5("div", {
                                ref: sDb(this.xi, (b = this.Rt) === null || b === void 0 ? void 0 : b.up),
                                children: [S5("div", {
                                    ref: this.d7,
                                    className: "_5YlOqQ"
                                }), S5("div", {
                                    ref: this.f7,
                                    className: "_XCmKw"
                                }), this.CE.map(c => c.XTa)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                f6(() => [this.props.sheet, this.props.kV.get(), this.props.ph.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.SHa();
                                    this.vla(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = d6(() => {
                                    var e = this.props,
                                        f = e.O;
                                    e = e.sheet;
                                    const g = this.xi.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.CE.map(e => oDb(e));
                            __c.kc(this, [c, b, ...d])
                        }
                        SHa() {
                            const b = B(this.d7.current),
                                c = B(this.f7.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.yia.length = 0;
                            this.CE.length = 0
                        }
                        vla(b, c) {
                            const d = B(this.d7.current),
                                e = B(this.f7.current),
                                f = [],
                                g = new Map;
                            for (const h of this.yia) c.has(h.la) ? g.set(h.la, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new rEb(this.HX, h), d.appendChild(c.TW), e.appendChild(c.VW), this.yia.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        HX(b, c) {
                            const d = this.props.wP,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.sK;
                            b = new sEb(this.props.WG, this.props.Ux, this.props.gg, d(b, c), e, b, c, f, g.Cda, this.rZ, this.qZ);
                            __c.kc(this, oDb(b));
                            this.CE.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.xi = (y6.A(this), BC());
                            this.d7 = BC();
                            this.f7 = BC();
                            this.yia = [];
                            this.CE = [];
                            this.rZ = m6(c => {
                                const d = this.props.ph.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.qZ = m6(c => {
                                const d = this.props.kV.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [y6, mEb]
                    } = s6(a, [], [yc], nEb))
                })(), iEb);
                var rEb = class {
                        static A(a) {
                            P(a, {
                                update: o6
                            })
                        }
                        update(a, b, c) {
                            [this.TW, this.VW].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.la = b;
                            for (const [d] of c) c = this.CE.get(d), c || (c = this.HX(d, b), this.CE.set(d, c), this.TW.appendChild(c.SW), this.VW.appendChild(c.gF)), c.update(b)
                        }
                        hide() {
                            [this.TW, this.VW].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.HX = a;
                            this.la = b;
                            this.TW = (rEb.A(this), document.createElement("div"));
                            this.VW = document.createElement("div");
                            this.CE = new Map
                        }
                    },
                    sEb = class {
                        static A(a) {
                            P(a, {
                                uX: q6.ref,
                                la: q6.ref,
                                G$: e6,
                                update: o6,
                                Rp: e6,
                                attrs: e6.struct,
                                Jaa: e6,
                                Er: e6,
                                renderer: e6,
                                Cna: e6.struct
                            })
                        }
                        get G$() {
                            if (!nDb) return !1;
                            const a = this.Rp;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.WG(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.la && (this.la = a, this.Yu.la = a, this.F8 && this.F8(), this.F8 = this.Cda(this.la, this.col, this))
                        }
                        get XTa() {
                            return this.uX
                        }
                        get Rp() {
                            const a = this.sheet.layout.cells.get(this.la, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.Yu.attrs;
                            return {
                                Of: a === null || a === void 0 ? void 0 : a.Of,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Jaa() {
                            var a = this.Yu.span;
                            if (!a) return !1;
                            if (a.Fb === a.wc && a.Bb === a.$b) return !0;
                            var b = this.rZ("first");
                            const c = this.rZ("last"),
                                d = this.qZ("first"),
                                e = this.qZ("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Qd(a.Fb, b) >= 0 && this.sheet.layout.rows.Qd(a.Fb, c) <= 0 ? a.Fb :
                                b;
                            a = this.sheet.layout.cols.Qd(a.Bb, d) >= 0 && this.sheet.layout.cols.Qd(a.Bb, e) <= 0 ? a.Bb : d;
                            return b === this.la && a === this.col
                        }
                        get Er() {
                            const a = this.sheet,
                                b = this.la,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                la: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.wTa.Oc(c, b);
                                case "sheet-item":
                                    return this.container.Eea.Oc(c, b);
                                case "sheet-element":
                                    return this.container.gWa.Oc(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Rp;
                            if (a && this.Jaa &&
                                (a.content.ref || a.za.ref)) return this.Ux({
                                context: {
                                    container: this.Er,
                                    attrs: this.attrs
                                },
                                ym: this.bca,
                                gg: this.gg
                            })
                        }
                        get Cna() {
                            this.Dna.reportObserved();
                            var a = ADb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.iT : this.Oy, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.WG = a;
                            this.Ux = b;
                            this.Yu = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Cda = k;
                            this.rZ = l;
                            this.qZ = m;
                            this.SW =
                                (sEb.A(this), document.createElement("div"));
                            this.gF = document.createElement("div");
                            this.Jy = document.createElement("div");
                            this.Oy = document.createElement("div");
                            this.iT = document.createElement("div");
                            this.Dna = zDb("content size atom");
                            this.bca = o6(() => this.Dna.reportChanged());
                            this.la = g;
                            this.SW.className = "_2JFriw";
                            this.gF.className = "imy9ug";
                            this.Jy.className = V5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Rp) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Rp) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.Rp) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.G$
                            });
                            this.Oy.className = "_30B9pw";
                            this.Jy.appendChild(this.Oy);
                            this.gF.appendChild(this.Jy);
                            this.iT.className = "G7zH2w";
                            this.F8 = k(this.la, this.col, this);
                            this.gg = u => S5(c, { ...u,
                                ym: this.bca
                            })
                        }
                    };
                var tEb, uEb, vEb, g6;
                new(tEb = class extends r6 {
                    constructor() {
                        super(g6);
                        uEb()
                    }
                }, (() => {
                    class a extends(vEb = j6) {
                        static A(b) {
                            P(b, {
                                dZ: e6
                            })
                        }
                        render() {
                            const {
                                WG: b,
                                sheet: c,
                                container: d,
                                $l: e,
                                LQ: f,
                                Ux: g,
                                Ad: h,
                                gg: k,
                                viewport: l,
                                BB: m,
                                iDa: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return S5("div", {
                                className: V5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: S5(oEb, {
                                    WG: b,
                                    Ux: g,
                                    gg: k,
                                    dFa: this.m5,
                                    wP: this.wP,
                                    sheet: c,
                                    container: d,
                                    $l: e,
                                    LQ: f,
                                    O: this.O,
                                    viewport: l,
                                    BB: m,
                                    dZ: this.dZ
                                })
                            })
                        }
                        get dZ() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.GM ? b.layout.Ed.get(b.view.freeze.GM) : void 0,
                                e = b.view.freeze.YB ? b.layout.qd.get(b.view.freeze.YB) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.Pla = {
                                    range: {
                                        Bb: h,
                                        Fb: f,
                                        $b: e,
                                        wc: d
                                    }
                                });
                                d && l && (c.qDa = {
                                    range: {
                                        Bb: l,
                                        Fb: f,
                                        $b: k,
                                        wc: d
                                    }
                                });
                                e && b && (c.Gra = {
                                    range: {
                                        Bb: h,
                                        Fb: b,
                                        $b: e,
                                        wc: g
                                    }
                                });
                                b && l && (c.rCa = {
                                    range: {
                                        Bb: l,
                                        Fb: b,
                                        $b: k,
                                        wc: g
                                    }
                                });
                                return c
                            }
                        }
                        get O() {
                            return this.props.O ?
                                this.props.O : e6(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.m5 = (g6.A(this), Y5(c => {
                                const {
                                    sheet: d,
                                    qaa: e,
                                    O: f,
                                    BW: g = "hidden"
                                } = this.props;
                                return S5(u6, {
                                    sheet: d,
                                    range: c.range,
                                    O: f,
                                    children: S5(eEb, { ...c,
                                        sheet: d,
                                        O: this.O,
                                        qaa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.wP = (c, d) => new __c.Lwa(this.props.Cx, this.props.Tu, this.props.sheet, c, d, this.O, this.lq, this.mq);
                            this.lq = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).lq) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.mq = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).mq) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [g6, uEb]
                    } = s6(a, [], [yc], vEb))
                })(), tEb);
                __c.Swa = {
                    XOa: function(a) {
                        const b = a.Gn,
                            c = a.nf,
                            d = a.Oe,
                            e = a.pp,
                            f = a.Cx,
                            g = a.Tu,
                            h = a.aO;
                        VCb({
                            PA: a.PA,
                            hg: a.hg,
                            lXa: a.AT,
                            ib: a.ib
                        });
                        const k = qDb({
                            Ux: h,
                            Cx: f,
                            Tu: g,
                            To: void 0
                        });
                        b.C5 = kDb({
                            Xm: k
                        });
                        c.n5 = aDb({
                            Xm: k
                        });
                        ({
                            hFa: a
                        } = hDb({
                            Xm: k,
                            Cf: e(),
                            lAa: new YDb
                        }));
                        d.hn.B5 = a;
                        const {
                            gEa: l,
                            hEa: m,
                            fEa: n
                        } = $Cb();
                        return {
                            $ja: Y5(p => S5(BDb, { ...p,
                                container: void 0,
                                Xm: k,
                                gFa: l,
                                iFa: m,
                                eFa: n,
                                gg: CDb
                            }))
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/be2d21af19088541.js.map