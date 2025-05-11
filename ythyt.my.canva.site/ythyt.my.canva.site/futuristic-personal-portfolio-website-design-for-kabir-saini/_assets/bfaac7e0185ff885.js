(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var aI = __c.aI;
                var Jc = __c.Jc;
                var Q = __c.Q;
                var Qu = __c.Qu;
                var P = __c.P;
                var Dx = __c.Dx;
                var su = __c.su;
                var D = __c.D;
                var E = __c.E;
                var V4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.hT(b.reference.Hi);
                                a = a.OW(b.reference.Ri);
                                return c != null && a != null;
                            case 1:
                                return a.hT(b.reference.Hi) != null;
                            case 2:
                                return a.OW(b.reference.Ri) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    o0b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.la.length > 0) return !1;
                                a = a.MG(c.UZ.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.gE(new __c.jE, a.RI).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return V4(b, d);
                                        case 1:
                                            return V4(b,
                                                d.start) && V4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    p0b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.xa;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.ac === c : g.span.bd === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.Ba : c === null || c === void 0 ? void 0 : c.Na) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.fqa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.aYa, h = h.xa === k.xa && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.yc === c.yc && g.yc === 0 ? g.fqa = f : e.push({
                                            aYa: k,
                                            wtb: l,
                                            fqa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            yc: c.yc
                                        })
                                    }
                            }
                        return e
                    },
                    q0b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.xa,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Wb === h : d.span.Qc === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.Aa : d === null || d === void 0 ? void 0 : d.Ua) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            xa: g,
                                            boundary: "start"
                                        } : {
                                            xa: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.eJa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.jqa, k = k.xa === m.xa && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.yc === d.yc && h.yc === 0 ? h.jqa = g : f.push({
                                            eJa: l,
                                            Htb: m,
                                            jqa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            yc: d.yc
                                        })
                                    }
                            }
                        return f
                    },
                    r0b = function(a, b, c, d, e) {
                        const f =
                            a.TZa.H$a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.ec(e[0].column);
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
                        (k = b.layout.rows.ec(d[0].xa)) && e.push({
                            xa: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].xa)) && e.push({
                            xa: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.ec(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.xa : void 0;
                                k = l ? b.layout.rows.ec(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ua : m === null || m === void 0 ? void 0 : m.Aa;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Na : m === null || m === void 0 ?
                                    void 0 : m.Ba;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ua : n === null || n === void 0 ? void 0 : n.Aa;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Na : l === null || l === void 0 ? void 0 : l.Ba;
                                p = __c.sDa({
                                    Ba: n,
                                    Na: k,
                                    Aa: l,
                                    Ua: m
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
                                } = (t === null || t === void 0 ? void 0 : t.yc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(W4(q, r), __c.KE(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    s0b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = p0b(b, c, d, e);
                        f = q0b(b, c, d, e, f);
                        const h = r0b(a, b, c, d, e),
                            k = a.Hfb(b),
                            l = a.afb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.wtb,
                                t = n.fqa,
                                v = n.aYa;
                            const u = n.color,
                                x = n.weight;
                            n = n.yc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(W4(r, v))) === null || p === void 0 ?
                                void 0 : p.Ua;
                            p = (q = h.get(W4(t, v))) === null || q === void 0 ? void 0 : q.Aa;
                            if (A != null && p != null) {
                                q = D(k.get(v.xa));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    yc: n,
                                    p1: new su(q + A * y, v),
                                    p2: new su(t + p * y, v),
                                    ...__c.PE((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.wb);
                        return [...f.map(n => {
                            var p, q, r = n.eJa,
                                t = n.Htb,
                                v = n.jqa;
                            const u = n.color,
                                x = n.weight;
                            n = n.yc;
                            const y = (p = h.get(W4(r, t))) === null || p === void 0 ? void 0 : p.Na;
                            p = (q = h.get(W4(r,
                                v))) === null || q === void 0 ? void 0 : q.Ba;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.xa));
                                t = D(k.get(v.xa));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    yc: n,
                                    p1: new su(r, q + y),
                                    p2: new su(r, v + p),
                                    ...__c.PE(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.wb), ...a]
                    },
                    t0b = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Bd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Bd(d, e => `${e.Uk}_${e.Vk}`);
                            for (const [, e] of a) {
                                const {
                                    Vk: f,
                                    Uk: g
                                } = e[0];
                                a = __c.Bd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Uk: g,
                                    Vk: f
                                })
                            }
                        }
                        return b
                    },
                    u0b = function(a, b, c, d) {
                        var e = __c.Utb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                xa: k,
                                boundary: "start"
                            }, {
                                xa: k,
                                boundary: "end"
                            }] : [{
                                xa: k,
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
                                e.TZa.Sqb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = s0b(e, a, h, f, g, d);
                        return t0b(c)
                    },
                    X4 = function() {
                        const [a] = (0, __c.fc)(() => Dx());
                        return a
                    },
                    v0b = function(a) {
                        switch (a) {
                            case 2:
                                return P("ibdecg");
                            case 7:
                                return P("446quA");
                            case 5:
                                return P("j1fbqg");
                            case 1:
                                return P("O5i4AQ");
                            case 6:
                                return P("C0VHsg");
                            case 4:
                                return P("9ND0kg");
                            case -1:
                                return P("RWqnLA");
                            case 9:
                                return P("nQR/7w");
                            case -2:
                                return P("P23rtA");
                            case 3:
                                return P("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    w0b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    x0b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.Xtb)(a) / 2 : -(0, __c.Vtb)(a) / 2,
                            c = -(0, __c.Wtb)(a) / 2,
                            d = a.width + (0, __c.Vtb)(a) / 2 + (0, __c.Xtb)(a) / 2;
                        a = a.height + (0, __c.Wtb)(a) / 2 + (0, __c.Ytb)(a) / 2;
                        return Qu({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    y0b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    A0b = function(a) {
                        var b;
                        const c = a.QA;
                        var d = a.content;
                        const e = a.context;
                        a = a.vq;
                        __c.C((d === null || d === void 0 ? void 0 : (b = d.Fg) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Zk;
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
                                d = (g = c.Vka) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.ke(__c.h4a, { ...__c.hdb,
                                        value: b.value
                                    }),
                                    context: e,
                                    vq: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = z0b(c, e, d.EB, d.Zk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: Y4(__c.YR, {
                                        label: v0b(b.error),
                                        children: Y4(__c.Gy, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: Y4(__c.cEb, {
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
                    z0b = function(a, b, c, d) {
                        var e;
                        return (e = a.Yka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    D0b = function(a) {
                        const b = a.QA,
                            c = a.Yf,
                            d = a.qub,
                            e = a.Ab;
                        b.Yka = f => __c.wKa({ ...f,
                            Ab: e
                        });
                        b.XFa = f => A0b({ ...f,
                            QA: b
                        });
                        b.Vka = y0b(B0b({
                            Yf: c,
                            XR: void 0
                        }));
                        b.ZFa = C0b(d, e);
                        b.$Fa = y0b(f => Y4(Z4, { ...f,
                            Ab: e
                        }))
                    },
                    E0b = function({
                        label: a,
                        cb: b,
                        width: c,
                        height: d,
                        scale: e,
                        nJa: f
                    }) {
                        return Y4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: $4(__c.Dy, {
                                className: a5("ivlMMQ", b5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && Y4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    b5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    G0b = function({
                        Gd: a,
                        AOa: b,
                        scale: c,
                        cq: d,
                        eq: e,
                        B3a: f
                    }) {
                        const g = c5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.yE(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return Y4(__c.Ey, {
                            kr: "light",
                            light: "light",
                            xu: "light",
                            dark: "light",
                            children: m => Y4("div", {
                                className: a5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: Y4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: a5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.jn,
                                    children: Y4(__c.bS, {
                                        className: a5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: P("ruWN9A"),
                                        children: Y4(F0b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    I0b = function() {
                        const a = new H0b,
                            b = new __c.BS,
                            c = d5(f => {
                                const {
                                    scale: g = 1,
                                    vOa: h,
                                    size: k =
                                        "small",
                                    B3a: l = !0
                                } = f, m = e5(n => a.eq({
                                    scale: n,
                                    size: k,
                                    Fua: h
                                }), [k, h]);
                                return Y4(G0b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    Gd: f.sheet.direction === "rtl",
                                    AOa: f.selection != null && a.Rib(f.sheet, f.selection),
                                    eq: m,
                                    B3a: l
                                })
                            }),
                            d = d5(f => {
                                const {
                                    scale: g = 1,
                                    vOa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    xrb: n
                                } = f, p = e5(u => a.eq({
                                    scale: u,
                                    size: k,
                                    Fua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = e5(u => m != null && a.Mya(m).has(u), [m]), t = e5(u => m != null && a.Igb(l, m).has(u), [l, m]), v = e5(u => {
                                    const x = n != null && l.layout.cols.gf(u, n.Wb) >= 0 && l.layout.cols.gf(u, n.Qc) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return Y4(f5, { ...f,
                                    vd: g,
                                    Od: q,
                                    eq: p,
                                    HF: v,
                                    wG: b
                                })
                            }),
                            e = d5(f => {
                                const {
                                    scale: g = 1,
                                    vOa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    xrb: n
                                } = f, p = e5(u => a.eq({
                                    scale: u,
                                    size: k,
                                    Fua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = e5(u => m != null && a.Oya(m).has(u), [m]), t = e5(u => m != null && a.Jgb(l, m).has(u), [l, m]), v = e5(u => {
                                    const x = n != null && l.layout.rows.gf(u, n.ac) >= 0 && l.layout.rows.gf(u, n.bd) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return Y4(g5, { ...f,
                                    vd: q,
                                    Od: g,
                                    eq: p,
                                    HF: v,
                                    wG: b
                                })
                            });
                        return {
                            b4a: c,
                            a4a: d,
                            c4a: e
                        }
                    },
                    J0b = function(a) {
                        const b = a.Rq,
                            c = () => null;
                        return __c.Nx(d => Y4(h5, { ...d,
                            Rq: b,
                            Zh: c
                        }))
                    },
                    K0b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Sd: d
                    }) {
                        i5(() => j5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.Aa(c.Wb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.Ba(c.ac) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    N0b = function({
                        onScroll: a
                    }) {
                        const b = new L0b(a);
                        return {
                            BD: b,
                            Hka: d5(c => Y4(M0b, {
                                sheet: c.sheet,
                                BD: b,
                                children: c.children
                            }))
                        }
                    },
                    Q0b = function(a) {
                        const b = a.Rq,
                            c = a.If,
                            d = a.UZa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                BD: f,
                                Hka: g
                            } = N0b({
                                onScroll: a.onScroll
                            });
                        class h extends O0b {
                            get yM() {
                                const k = this.props.qa.Mu;
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
                                d.DZa(this.props.item, {
                                    Zb: this.props.Zb,
                                    qa: this.props.qa
                                })
                            }
                            componentWillUnmount() {
                                d.u9a(this.props.item, {
                                    Zb: this.props.Zb,
                                    qa: this.props.qa
                                })
                            }
                            render() {
                                d.DZa(this.props.item, {
                                    Zb: this.props.Zb,
                                    qa: this.props.qa
                                });
                                return Y4(P0b, { ...this.props,
                                    Y: this.Y,
                                    Rq: b,
                                    yM: this.yM,
                                    Zh: this.Zh,
                                    UZa: d,
                                    BD: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = k5(() => {
                                    const l = this.props.item;
                                    var m = this.props.qa,
                                        n = m.Mu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Lfb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.ZE(l,
                                                n.Zb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Zh = d5(l => Y4("div", {
                                    className: "wKvivQ",
                                    children: Y4(__c.EKa, { ...this.props,
                                        ...l,
                                        If: c
                                    })
                                }))
                            }
                        }
                        return {
                            X5a: h,
                            BD: f
                        }
                    },
                    R0b = function(a, b) {
                        if (b != null && b.Wb != null && b.ac != null && b.Qc != null && b.bd != null) {
                            var c = a.Aa(b.Wb),
                                d = a.Ba(b.ac),
                                e = a.Aa(b.Qc) + b.Qc.width - c;
                            a = a.Ba(b.bd) + b.bd.height - d;
                            return Qu({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    T0b = function(a) {
                        const b = a.Rq,
                            c = () => null;
                        return d => Y4(S0b, { ...d,
                            Rq: b,
                            Zh: c
                        })
                    },
                    X0b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                DIa: b,
                                Pw: b,
                                Pa: {},
                                Io: {}
                            },
                            d = l5(() => a.YA.style || c, h => {
                                var k;
                                Object.assign(a.V9.style, h.DIa);
                                Object.assign(a.RM.style, h.Pw);
                                Object.assign(a.RE.style, h.Pa);
                                Object.assign(a.WE.style, h.Io);
                                h = h === null || h === void 0 ? void 0 : (k = h.Pa) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.RE.classList.toggle("OQx3PQ", h === "underline");
                                a.RE.classList.toggle("_99ezUA", h === "line-through");
                                a.RE.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: U0b
                            }),
                            e = l5(() => a.yta, h => {
                                a.RE.classList.toggle("_84KvRA", !h);
                                a.V9.classList.toggle("_84KvRA", !h);
                                a.RM.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = l5(() => a.renderer, h => {
                                a.H$ && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.H$ = void 0, a.V4.remove()) : a.WE.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.H$ = V0b(h.node, a.V4);
                                        a.WE.appendChild(a.V4);
                                        break;
                                    case "dom":
                                        h.render(a.WE);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.yva()
                            }, {
                                fireImmediately: !0
                            }),
                            g = W0b ? l5(() => a.Vra, h => {
                                a.RE.classList.toggle("qxD1GA", h)
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
                    U0b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    Z0b = function(a) {
                        const b = a.RA,
                            c = a.ID,
                            d = a.eE,
                            e = a.U2a,
                            f = a.Qo,
                            g = new Y0b(c),
                            h = (k, l) => f ? o0b(f, k, l) : !1;
                        return k => Y4(m5, { ...k,
                            IO: h,
                            eE: d,
                            ID: c,
                            RA: b,
                            Xsa: g,
                            U2a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    W4 = (a, b) => `${a.column.id}-${a.boundary}:${b.xa.id}-${b.boundary}`,
                    B0b = ({
                        Yf: a,
                        XR: b
                    }) => c => (0, __c.N)(__c.$tb, { ...c,
                        Yf: a,
                        XR: b
                    }),
                    n5 = __webpack_require__(443763),
                    $0b = n5.Fragment,
                    Y4 = n5.jsx,
                    $4 = n5.jsxs;
                var a1b = __webpack_require__(358579).Z;
                var b1b = __webpack_require__,
                    c1b = b1b(993864),
                    a5 = b1b.n_x(c1b)();
                var d5 = __webpack_require__(446474).Pi;
                var o5 = __webpack_require__(875604),
                    p5 = o5.Component,
                    O0b = o5.PureComponent,
                    e5 = o5.useCallback,
                    i5 = o5.useEffect,
                    d1b = o5.useLayoutEffect,
                    c5 = o5.useMemo,
                    q5 = o5.useRef,
                    e1b = o5.useState;
                var r5 = __webpack_require__(635872),
                    s5 = r5.Om,
                    f1b = r5.kq,
                    g1b = r5.YN;
                var t5 = __webpack_require__(519427),
                    u5 = t5.action,
                    j5 = t5.autorun,
                    v5 = t5.comparer,
                    k5 = t5.computed,
                    h1b = t5.createAtom,
                    w5 = t5.observable,
                    l5 = t5.reaction,
                    i1b = t5.untracked;
                var x5 = __webpack_require__(937763)._;
                var y5 = __webpack_require__(161563)._;
                var V0b = __webpack_require__(36281).createPortal;
                var j1b = d5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = e1b(() => Dx()), f = {
                            get: e5(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Qu(g)
                            }, [e])
                        };
                        return $4("div", {
                            className: a5("nMvVqA", d),
                            children: [$4("div", {
                                ref: a1b(a.Sd, e),
                                className: "_0YOFPg",
                                children: [Y4(a.Rq, { ...a,
                                    viewport: f
                                }), Y4("div", {
                                    className: a5("Gdl7fQ", d),
                                    children: (c = a.rFa) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => Y4(g, {}, h))
                                })]
                            }), a.fHb === "visible" && $4($0b, {
                                children: [Y4("div", {
                                    className: a5("_32sKQw", d),
                                    children: Y4(a.U5a, { ...a
                                    })
                                }), Y4("div", {
                                    className: a5("xdIsTQ", d),
                                    children: Y4(a.Y5a, { ...a
                                    })
                                }), Y4("div", {
                                    className: a5("rsTRSA", d),
                                    children: Y4(a.W5a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    k1b = d5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.pr.ua(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var C0b = (a, b) => __c.iKa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            wh: c
                        } = __c.mg(__c.Ug, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            Qa: void 0,
                            writingMode: 1,
                            Md: "start",
                            bh: l1b(e, c),
                            Ab: b
                        })
                    }),
                    l1b = s5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: v5.structural
                    });
                var m1b, n1b, o1b, Z4;
                new(m1b = class extends x5 {
                    constructor() {
                        super(Z4);
                        n1b()
                    }
                }, (() => {
                    class a extends(o1b = p5) {
                        static A(b) {
                            Q(b, {
                                wh: k5
                            })
                        }
                        get wh() {
                            return __c.mg(__c.Ug, this.props.context.attrs).wh
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = Y4(this.props.Zh, {
                                content: b,
                                xa: c.container.xa,
                                col: c.container.column,
                                wh: this.wh
                            });
                            return this.wh === "wrap" ? Y4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [Z4, n1b]
                    } = y5(a, [], [Jc], o1b))
                })(), m1b);
                var H0b = class {
                    eq({
                        size: a,
                        scale: b,
                        Fua: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.fW * b : __c.TCb * b
                    }
                    constructor() {
                        this.Rib = s5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Mya = f1b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.ds
                        });
                        this.Oya = f1b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.ds
                        });
                        this.Igb = s5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Oya(b).size > 0) return new Set(a.layout.cols);
                            b = this.Mya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.xa, e.column);
                                for (const f of w0b(c ? c.span.Wb : e.column, c ? c.span.Qc : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.ds
                        });
                        this.Jgb = s5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Mya(b).size > 0) return new Set(a.layout.rows);
                            b = this.Oya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.xa, e.column);
                                for (const f of w0b(c ? c.span.ac : e.xa, c ? c.span.bd : e.xa, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.ds
                        })
                    }
                };
                var p1b, q1b, r1b, s1b, t1b, u1b, v1b = parseInt("4px", 10) || 4,
                    f5;
                new(p1b = class extends x5 {
                    constructor() {
                        super(f5);
                        r1b()
                    }
                }, (() => {
                    class a extends(s1b = p5) {
                        static A(b) {
                            Q(b, {
                                Gd: k5,
                                Er: k5,
                                u6: k5
                            })
                        }
                        get Gd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Er() {
                            var b;
                            const c = (b = this.props.cq) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.yE(c)
                        }
                        get u6() {
                            var b, c, d;
                            return (c = (d = this.props).qra) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return Y4(__c.Ey, {
                                kr: "light",
                                light: "light",
                                xu: "light",
                                dark: "light",
                                children: this.L9a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (f5.A(this), u5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    vd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = u5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.xXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    eq: g,
                                    HF: h,
                                    pHb: k,
                                    vd: l = 1,
                                    Od: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.Gd,
                                    gtA7Dw: this.Gd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.Gd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.u6) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return $4("div", {
                                    style: r,
                                    className: a5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(v => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.gf(v, c) < 0 || d && f.layout.cols.gf(v, d) > 0)) return Y4(w1b, {
                                            col: v,
                                            label: __c.bB(t),
                                            cb: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            eq: g,
                                            HF: h,
                                            vd: l,
                                            Od: m
                                        }, v.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && Y4("div", {
                                        style: {
                                            width: v1b * l
                                        },
                                        className: a5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.L9a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.DI ? e.layout.Yd.get(e.view.freeze.DI) : void 0,
                                    g = {
                                        jNbTIg: !this.Gd,
                                        gtA7Dw: this.Gd
                                    };
                                return $4("div", {
                                    ref: (d = this.Er) === null || d === void 0 ? void 0 : d.jn,
                                    className: a5("xhBZaw", g, c.className),
                                    children: [f && this.xXa(void 0, f, {
                                        sticky: !0
                                    }), this.xXa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [f5, r1b]
                    } = y5(a, [], [Jc], s1b))
                })(), p1b);
                var g5;
                new(q1b = class extends x5 {
                    constructor() {
                        super(g5);
                        t1b()
                    }
                }, (() => {
                    class a extends(u1b = p5) {
                        static A(b) {
                            Q(b, {
                                Gd: k5,
                                Er: k5,
                                u6: k5
                            })
                        }
                        get Gd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Er() {
                            var b;
                            const c = (b = this.props.cq) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.yE(c)
                        }
                        get u6() {
                            var b, c, d;
                            return (c = (d = this.props).qra) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return Y4(__c.Ey, {
                                kr: "light",
                                light: "light",
                                xu: "light",
                                dark: "light",
                                children: this.hrb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (g5.A(this), u5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Od: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = u5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.DXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    eq: g,
                                    HF: h,
                                    vd: k = 1,
                                    Od: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.Gd,
                                    gtA7Dw: this.Gd
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.u6) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return $4("div", {
                                    style: q,
                                    className: a5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.gf(t, c) < 0 || d && f.rows.gf(t, d) > 0)) return Y4(x1b, {
                                            xa: t,
                                            label: `${r+1}`,
                                            HF: h,
                                            eq: g,
                                            vd: k,
                                            Od: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && Y4("div", {
                                        style: {
                                            height: v1b * l
                                        },
                                        className: a5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.hrb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.PW ? e.layout.ze.get(e.view.freeze.PW) : void 0,
                                    g = {
                                        jNbTIg: !this.Gd,
                                        gtA7Dw: this.Gd
                                    };
                                return $4("div", {
                                    ref: (d = this.Er) === null || d === void 0 ? void 0 : d.jn,
                                    className: a5("An9VeA", g, c.className),
                                    children: [f && this.DXa(void 0, f, {
                                        sticky: !0
                                    }), this.DXa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [g5, t1b]
                    } = y5(a, [], [Jc], u1b))
                })(), q1b);
                var w1b = d5(a => {
                        const b = a.label,
                            c = a.cb,
                            d = a.col,
                            e = a.HF,
                            f = a.eq,
                            g = a.vd;
                        a = a.Od;
                        const h = f(a),
                            k = g1b(() => e(d));
                        return Y4("div", {
                            className: a5("_83Rssw", "d2uLIA", b5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: Y4(E0b, {
                                label: b,
                                cb: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                nJa: k
                            })
                        })
                    }),
                    x1b = d5(a => {
                        const b = a.label,
                            c = a.xa,
                            d = a.eq,
                            e = a.HF,
                            f = a.vd;
                        a = a.Od;
                        const g = d(f),
                            h = g1b(() => e(c));
                        return Y4("div", {
                            className: a5("_83Rssw", "JhBzyw", b5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: Y4(E0b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                nJa: h
                            })
                        })
                    });
                var y1b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var z1b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var F0b = __c.QR({
                    Bp: y1b,
                    medium: z1b
                });
                var A1b, B1b, C1b, h5;
                new(A1b = class extends x5 {
                    constructor() {
                        super(h5);
                        B1b()
                    }
                }, (() => {
                    class a extends(C1b = p5) {
                        static A(b) {
                            Q(b, {
                                Ke: k5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return Y4(this.props.Rq, {
                                sheet: b.na.config,
                                container: b,
                                A9: "visible",
                                cq: this.props.cq,
                                Zu: this.props.Zu,
                                bv: this.props.bv,
                                Y: this.props.Y,
                                Ke: this.Ke,
                                Zh: this.props.Zh,
                                $H: void 0
                            })
                        }
                        get Ke() {
                            return __c.jB(this.props.element.na.Wa, this.props.$e)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [h5, B1b]
                    } = y5(a, [], [Jc], C1b))
                })(), A1b);
                var D1b = class {
                    constructor() {
                        this.yha = new WeakMap;
                        this.Lfb = a => this.yha.get(a);
                        this.DZa = (a, b) => {
                            this.yha.set(a, b)
                        };
                        this.u9a = (a, b) => {
                            const c = this.yha.get(a);
                            c && c.qa === b.qa && c.Zb === b.Zb && this.yha.delete(a)
                        }
                    }
                };
                var z5 = parseInt("4px", 10) || 4,
                    E1b = d5(({
                        sheet: a,
                        Y: b,
                        range: c,
                        gx: d,
                        hx: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.Ba(c.bd) + c.bd.height, a = a.Aa(c.Qc) + c.Qc.width, Y4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: z5 * b
                                },
                                className: a5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.Aa(c.Qc) + c.Qc.width, Y4("div", {
                                style: {
                                    width: z5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: a5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.Ba(c.bd) + c.bd.height, Y4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: z5 * b
                                },
                                className: a5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var A5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = X4();
                        K0b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Sd: e
                        });
                        return Y4("div", {
                            ref: e,
                            className: a5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    F1b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = X4();
                        K0b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Sd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return Y4("div", {
                            className: a5("nstn2A", a, "_9sodyg"),
                            children: Y4("div", {
                                ref: e,
                                className: a5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var M0b = d5(({
                        sheet: a,
                        children: b,
                        BD: c
                    }) => {
                        const d = e5(f => {
                                c.jza(a, f)
                            }, [c, a]),
                            e = e5(f => {
                                f != null ? c.CD.set(a, f) : c.CD.delete(a)
                            }, [c, a]);
                        return Y4(__c.Mxb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            Rv: e,
                            children: b
                        })
                    }),
                    L0b = class {
                        jza(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.C5.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.CD = new WeakMap;
                            this.C5 = w5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = u5((b, c) => {
                                b = this.CD.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var P0b = d5(a => {
                    const b = a.item,
                        c = a.cq,
                        d = a.pg,
                        e = a.measureRef,
                        f = a.Y,
                        g = a.yPa,
                        h = a.Zb,
                        k = a.Zu,
                        l = a.bv,
                        m = a.Rq,
                        n = a.yM,
                        p = a.Zh,
                        q = a.$e,
                        r = a.BD;
                    a = c5(() => __c.jB(b.Wa, q), [b, q]);
                    const t = c5(() => d5(({
                            sheet: y,
                            range: A,
                            gx: z,
                            hx: B
                        }) => Y4(A5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: Y4(E1b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                gx: z,
                                hx: B
                            })
                        })), [f]),
                        v = x0b(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    i5(() => j5(() => {
                        var y = b.config.view.freeze.DI ? b.config.layout.Yd.get(b.config.view.freeze.DI) : void 0;
                        if (y != null)
                            if (b.config.Aa(y) + y.width > x) {
                                if (y = r.CD.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.CD.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return Y4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: Y4(n, {
                            sheet: b,
                            children: Y4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: Y4("div", {
                                    className: "W1ir5A",
                                    children: Y4(m, {
                                        container: d.jk(b),
                                        sheet: b.config,
                                        A9: "visible",
                                        cq: c,
                                        Y: f,
                                        Zu: k,
                                        bv: l,
                                        Ke: a,
                                        Zh: p,
                                        $H: t
                                    })
                                })
                            })
                        })
                    })
                });
                var G1b = d5(({
                    page: a,
                    range: b,
                    tD: c
                }) => {
                    const d = R0b(a.sheet, b);
                    return Y4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Ou(Qu(e)).iq(d) && c(e, f))
                    })
                });
                var H1b = new __c.BS,
                    B5 = a => __c.fW * a,
                    I1b = () => "primary-default",
                    S0b = d5(({
                        container: a,
                        cq: b,
                        Zu: c,
                        bv: d,
                        t1: e,
                        Y: f,
                        viewport: g,
                        Zsb: h,
                        Rq: k,
                        Zh: l,
                        tD: m,
                        Qga: n,
                        hzb: p,
                        Vxb: q,
                        Uxb: r
                    }) => {
                        const t = a.page,
                            v = c5(() => d5(({
                                sheet: u,
                                range: x,
                                gx: y,
                                hx: A
                            }) => $4($0b, {
                                children: [Y4(A5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: Y4(E1b, {
                                        sheet: u,
                                        Y: f,
                                        range: x,
                                        gx: y,
                                        hx: A
                                    })
                                }), $4(F1b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && Y4(p, {}), m && Y4(G1b, {
                                        page: t,
                                        tD: m,
                                        range: x
                                    }), r && Y4(r, {}), n && n()]
                                }), q && x && Y4(A5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: Y4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? Y4(J1b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            cq: b,
                            Zu: c,
                            bv: d,
                            Rq: k,
                            Zh: l,
                            $H: v
                        }) : Y4(k, {
                            sheet: t.sheet,
                            container: a,
                            A9: "hidden",
                            cq: b,
                            Zu: c,
                            bv: d,
                            t1: e,
                            Y: f,
                            viewport: g,
                            Zh: l,
                            $H: v
                        })
                    }),
                    J1b = d5(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.cq,
                            f = a.Zu,
                            g = a.bv,
                            h = a.Rq,
                            k = a.Zh;
                        a = a.$H;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = q5(null),
                            p = q5(null),
                            q = q5(null);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                aia: !0,
                                bia: !0,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = n.current;
                                if (A && z) {
                                    var B =
                                        l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H;
                                    z.style.top = (H = A.top) !== null && H !== void 0 ? H : "0px";
                                    var K, I;
                                    B ? z.style.right = (K = A.right) !== null && K !== void 0 ? K : "0px" : z.style.left = (I = A.left) !== null && I !== void 0 ? I : "0px";
                                    var M;
                                    z.style.transform = (M = A.transform) !== null && M !== void 0 ? M : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                aia: !1,
                                bia: !0,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = q.current;
                                if (A && z) {
                                    var B;
                                    z.style.position =
                                        (B = A.position) !== null && B !== void 0 ? B : "sticky";
                                    var G;
                                    z.style.top = (G = A.top) !== null && G !== void 0 ? G : "0px";
                                    var H;
                                    z.style.transform = (H = A.transform) !== null && H !== void 0 ? H : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                aia: !0,
                                bia: !1,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = p.current;
                                if (A && z) {
                                    var B = l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H, K;
                                    B ? z.style.right = (H = A.right) !== null && H !== void 0 ? H : "0px" : z.style.left =
                                        (K = A.left) !== null && K !== void 0 ? K : "0px";
                                    var I;
                                    z.style.transform = (I = A.transform) !== null && I !== void 0 ? I : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = e5((y, A, z) => C5({
                                sheet: y,
                                aia: A,
                                bia: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = c5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = c5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return $4("div", {
                            className: a5("OsKKIQ", "cbOp6Q"),
                            children: [Y4("div", {
                                className: "VDFv_A",
                                children: Y4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    A9: "hidden",
                                    cq: e,
                                    Zu: f,
                                    bv: g,
                                    t1: r,
                                    Y: c,
                                    viewport: d,
                                    Zh: k,
                                    $H: a
                                })
                            }), Y4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: Y4(G0b, {
                                    Gd: m,
                                    AOa: !1,
                                    eq: B5,
                                    scale: x
                                })
                            }), Y4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: Y4(f5, {
                                    sheet: l.sheet,
                                    vd: x,
                                    Od: x,
                                    eq: B5,
                                    HF: I1b,
                                    wG: H1b,
                                    qra: t
                                })
                            }), Y4("div", {
                                ref: p,
                                className: "zm537g",
                                children: Y4(g5, {
                                    sheet: l.sheet,
                                    vd: x,
                                    Od: x,
                                    eq: B5,
                                    HF: I1b,
                                    wG: H1b,
                                    qra: v
                                })
                            })]
                        })
                    }),
                    C5 = ({
                        sheet: a,
                        aia: b,
                        bia: c,
                        Y: d,
                        viewport: e
                    }) => k5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.$u(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new su(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var Y0b = class {
                    constructor(a) {
                        this.ID = a;
                        this.f9a = __c.qU;
                        this.qfb = s5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.kfb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !aI(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !aI(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !aI(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !aI(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.f9a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.Aa(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.Aa(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.Aa(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || aI(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || aI(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.Aa(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = aI(b, c, l)) m = h, n = k, p = b.Aa(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.kfb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Ga.ref) && g.span.ac === g.span.bd && g.span.Wb === g.span.Qc) {
                                var h = this.ID.jx(b, c, d);
                                b = this.ID.kra(b, c, d, __c.Yg({
                                    wh: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    wh: k,
                                    textAlign: l
                                } = __c.mg(__c.Ug, b);
                                if (k === "overflow") return __c.jKa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Ga.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Zk.type : void 0)
                            }
                        }
                    }
                };
                var K1b = d5(function(a) {
                    const b = a.sheet;
                    var c = a.Bj;
                    const d = a.ywb,
                        e = a.Y,
                        f = a.Xsa,
                        g = a.Zeb;
                    a = a.overflow;
                    const h = X4();
                    d1b(() => j5(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = e5(p => f.qfb(b, p, d, g), [f, b, d, g]);
                    var l = e5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = u0b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return Y4("svg", {
                        ref: h,
                        role: "presentation",
                        className: a5("c6a1eQ", {
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
                            Uk: t,
                            Vk: v
                        }) => Y4("path", {
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
                var L1b;
                L1b = Symbol.iterator;
                var M1b = class {
                    get size() {
                        return this.Kha
                    }
                    get([a, b]) {
                        return (a = this.fG.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.fG.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.fG.get(a);
                        d == null && (d = new Map, this.fG.set(a, d));
                        d.set(b, c);
                        this.Kha++;
                        return this
                    }
                    clear() {
                        this.fG.clear();
                        this.Kha = 0
                    }
                    delete([a, b]) {
                        const c = this.fG.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.Kha--;
                        c.size === 0 && this.fG.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.fG)
                            for (const [d, e] of c) a([b, d], e)
                    }*[L1b]() {
                        for (const [a, b] of this.fG)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.Kha = 0;
                        this.fG = new Map
                    }
                };
                var N1b, O1b, P1b, Q1b, R1b, S1b, T1b, W0b = __c.Yw("285688d5", !1),
                    U1b, V1b = class extends p5 {
                        render() {
                            const {
                                Hba: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return $4("div", {
                                ref: this.WZa,
                                className: a5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.UHa) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.UHa.range,
                                    gx: !0,
                                    hx: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.d3a) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.d3a.range,
                                    gx: !1,
                                    hx: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.DOa) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.DOa.range,
                                    gx: !0,
                                    hx: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.R1a) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.R1a.range,
                                    gx: !1,
                                    hx: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = j5(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.WZa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.vc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.WZa = Dx()
                        }
                    };
                ({
                    c: [U1b, P1b]
                } = y5(V1b, [], [Jc], p5));
                P1b();
                var D5;
                new(N1b = class extends x5 {
                    constructor() {
                        super(D5);
                        Q1b()
                    }
                }, (() => {
                    class a extends(R1b = p5) {
                        static A(b) {
                            Q(b, {
                                xza: k5,
                                bounds: k5
                            })
                        }
                        get xza() {
                            const b = this.props.viewport,
                                c = this.props.gx,
                                d = this.props.hx;
                            return b == null || !c && !d ? b : k5(() => {
                                const e = __c.$u(b.get());
                                return Qu({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.IO,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.$H,
                                g = this.props.gx,
                                h = this.props.hx;
                            return $4("div", {
                                ref: this.Jwa,
                                className: a5("i0YQww",
                                    this.props.className),
                                children: [Y4("div", {
                                    ref: this.IVa,
                                    className: "vUKoKg",
                                    children: Y4("div", {
                                        ref: this.JVa,
                                        children: Y4(E5, {
                                            IO: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            cq: this.props.cq,
                                            eE: this.props.eE,
                                            Zh: this.props.Zh,
                                            C_: this.props.C_,
                                            Y: this.props.Y,
                                            Bj: this.Bj,
                                            Q7: this.Q7,
                                            rT: this.rT
                                        })
                                    })
                                }), Y4(this.Jka, {}), f && Y4(f, {
                                    sheet: c,
                                    range: e,
                                    gx: g,
                                    hx: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = j5(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.Jwa.current;
                                    const p = this.IVa.current;
                                    h = this.JVa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.Aa(m.Qc) + m.Qc.width - l.Aa(m.Wb) : l.width,
                                        r = m ? l.Ba(m.bd) + m.bd.height - l.Ba(m.ac) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.Aa(m.Wb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.Ba(m.ac) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.t1;
                            const e = this.props.gx,
                                f = this.props.hx,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = j5(() => {
                                const h = this.Jwa.current;
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
                            __c.vc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Wb: void 0,
                                Qc: void 0,
                                ac: void 0,
                                bd: void 0
                            };
                            var d, e, f, g;
                            return {
                                Wb: (d = c === null || c === void 0 ? void 0 : c.Wb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Qc: (e = c === null || c === void 0 ? void 0 : c.Qc) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                ac: (f = c === null || c === void 0 ? void 0 : c.ac) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                bd: (g = c === null || c === void 0 ? void 0 : c.bd) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.Jwa = (D5.A(this), Dx());
                            this.IVa = Dx();
                            this.JVa = Dx();
                            this.rT = new W1b;
                            this.zwb = k5(() => [...this.Bj.get().keys()].sort((c, d) => this.props.sheet.layout.rows.gf(c, d)), {
                                equals: __c.es()
                            });
                            this.xwb = k5(() => [...this.Q7.get().keys()].sort((c, d) => this.props.sheet.layout.cols.gf(c, d)), {
                                equals: __c.es()
                            });
                            this.Jka = d5(() => Y4(this.props.T5a, {
                                Bj: this.zwb,
                                ywb: this.xwb,
                                Zeb: this.rT.hfb,
                                range: this.props.range
                            }));
                            this.Bj = k5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.xza) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.tl.y - g : c.ac ? d.Ba(c.ac) : 0;
                                f = f ? f.br.y + g : c.bd ? d.Ba(c.bd) + c.bd.height : 0;
                                g = new Map;
                                for (let k = c.ac; k != null && c.bd != null && d.layout.rows.gf(k, c.bd) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.Ba(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: v5.shallow
                            });
                            this.Q7 = k5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.xza) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.tl.x - g : c.Wb ? d.Aa(c.Wb) : 0;
                                f = f ? f.br.x + g : c.Qc ? d.Aa(c.Qc) + c.Qc.width : 0;
                                g = new Map;
                                for (let k = c.Wb; k != null && c.Qc != null && d.layout.cols.gf(k, c.Qc) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.Aa(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: v5.shallow
                            })
                        }
                    }({
                        c: [D5, Q1b]
                    } = y5(a, [], [Jc], R1b))
                })(), N1b);
                var W1b = class {
                        constructor() {
                            this.cells = new M1b;
                            this.Rxa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.hfb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.NJa
                            }
                        }
                    },
                    E5;
                new(O1b = class extends x5 {
                    constructor() {
                        super(E5);
                        S1b()
                    }
                }, (() => {
                    class a extends(T1b = p5) {
                        static A(b) {
                            Q(b, {
                                iM: w5.shallow,
                                Er: k5,
                                AHa: u5,
                                O$: u5.bound
                            })
                        }
                        get Er() {
                            var b;
                            const c = (b = this.props.cq) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.yE(c)
                        }
                        render() {
                            var b;
                            return $4("div", {
                                ref: a1b(this.Sd, (b = this.Er) === null || b === void 0 ? void 0 : b.jn),
                                children: [Y4("div", {
                                    ref: this.una,
                                    className: "_5YlOqQ"
                                }), Y4("div", {
                                    ref: this.wna,
                                    className: "_XCmKw"
                                }), this.iM.map(c => c.rpb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                l5(() => [this.props.sheet, this.props.Q7.get(), this.props.Bj.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.v9a();
                                    this.AHa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = j5(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Sd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.iM.map(e => X0b(e));
                            __c.vc(this, [c, b, ...d])
                        }
                        v9a() {
                            const b = D(this.una.current),
                                c = D(this.wna.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.SDa.length = 0;
                            this.iM.length = 0
                        }
                        AHa(b, c) {
                            const d = D(this.una.current),
                                e = D(this.wna.current),
                                f = [],
                                g = new Map;
                            for (const h of this.SDa) c.has(h.xa) ? g.set(h.xa, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new X1b(this.O$, h), d.appendChild(c.W9), e.appendChild(c.Y9), this.SDa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        O$(b, c) {
                            const d = this.props.C_,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.rT;
                            b = new Y1b(this.props.IO, this.props.eE, this.props.Zh, d(b, c), e, b, c, f, g.Rxa, this.Yba, this.Xba);
                            __c.vc(this, X0b(b));
                            this.iM.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Sd = (E5.A(this), Dx());
                            this.una = Dx();
                            this.wna = Dx();
                            this.SDa = [];
                            this.iM = [];
                            this.Yba = s5(c => {
                                const d = this.props.Bj.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.Xba = s5(c => {
                                const d = this.props.Q7.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [E5, S1b]
                    } = y5(a, [], [Jc], T1b))
                })(), O1b);
                var X1b = class {
                        static A(a) {
                            Q(a, {
                                update: u5
                            })
                        }
                        update(a, b, c) {
                            [this.W9, this.Y9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.xa = b;
                            for (const [d] of c) c = this.iM.get(d), c || (c = this.O$(d, b), this.iM.set(d, c), this.W9.appendChild(c.V9), this.Y9.appendChild(c.RM)), c.update(b)
                        }
                        hide() {
                            [this.W9, this.Y9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.O$ = a;
                            this.xa = b;
                            this.W9 = (X1b.A(this), document.createElement("div"));
                            this.Y9 = document.createElement("div");
                            this.iM = new Map
                        }
                    },
                    Y1b = class {
                        static A(a) {
                            Q(a, {
                                H$: w5.ref,
                                xa: w5.ref,
                                Vra: k5,
                                update: u5,
                                vu: k5,
                                attrs: k5.struct,
                                yta: k5,
                                Pw: k5,
                                renderer: k5,
                                NJa: k5.struct
                            })
                        }
                        get Vra() {
                            if (!W0b) return !1;
                            const a = this.vu;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.IO(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.xa && (this.xa = a, this.YA.xa = a, this.rpa && this.rpa(), this.rpa = this.Rxa(this.xa, this.col, this))
                        }
                        get rpb() {
                            return this.H$
                        }
                        get vu() {
                            const a = this.sheet.layout.cells.get(this.xa, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.YA.attrs;
                            return {
                                wh: a === null || a === void 0 ? void 0 : a.wh,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get yta() {
                            var a = this.YA.span;
                            if (!a) return !1;
                            if (a.ac === a.bd && a.Wb === a.Qc) return !0;
                            var b = this.Yba("first");
                            const c = this.Yba("last"),
                                d = this.Xba("first"),
                                e = this.Xba("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.gf(a.ac, b) >= 0 && this.sheet.layout.rows.gf(a.ac, c) <=
                                0 ? a.ac : b;
                            a = this.sheet.layout.cols.gf(a.Wb, d) >= 0 && this.sheet.layout.cols.gf(a.Wb, e) <= 0 ? a.Wb : d;
                            return b === this.xa && a === this.col
                        }
                        get Pw() {
                            const a = this.sheet,
                                b = this.xa,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                xa: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.Gob.Nd(c, b);
                                case "sheet-item":
                                    return this.container.wza.Nd(c, b);
                                case "sheet-element":
                                    return this.container.Osb.Nd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.vu;
                            if (a && this.yta &&
                                (a.content.ref || a.Ga.ref)) return this.eE({
                                context: {
                                    container: this.Pw,
                                    attrs: this.attrs
                                },
                                vq: this.yva,
                                Zh: this.Zh
                            })
                        }
                        get NJa() {
                            this.OJa.reportObserved();
                            var a = i1b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.V4 : this.WE, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.IO = a;
                            this.eE = b;
                            this.YA = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Rxa = k;
                            this.Yba = l;
                            this.Xba = m;
                            this.V9 =
                                (Y1b.A(this), document.createElement("div"));
                            this.RM = document.createElement("div");
                            this.RE = document.createElement("div");
                            this.WE = document.createElement("div");
                            this.V4 = document.createElement("div");
                            this.OJa = h1b("content size atom");
                            this.yva = u5(() => this.OJa.reportChanged());
                            this.xa = g;
                            this.V9.className = "_2JFriw";
                            this.RM.className = "imy9ug";
                            this.RE.className = a5("pDMp7w", {
                                _0yZ6Qg: ((p = this.vu) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.vu) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.vu) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.Vra
                            });
                            this.WE.className = "_30B9pw";
                            this.RE.appendChild(this.WE);
                            this.RM.appendChild(this.RE);
                            this.V4.className = "G7zH2w";
                            this.rpa = k(this.xa, this.col, this);
                            this.Zh = u => Y4(c, { ...u,
                                vq: this.yva
                            })
                        }
                    };
                var Z1b, $1b, a2b, m5;
                new(Z1b = class extends x5 {
                    constructor() {
                        super(m5);
                        $1b()
                    }
                }, (() => {
                    class a extends(a2b = p5) {
                        static A(b) {
                            Q(b, {
                                Hba: k5
                            })
                        }
                        render() {
                            const {
                                IO: b,
                                sheet: c,
                                container: d,
                                cq: e,
                                t1: f,
                                eE: g,
                                Ke: h,
                                Zh: k,
                                viewport: l,
                                $H: m,
                                U2a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return Y4("div", {
                                className: a5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: Y4(U1b, {
                                    IO: b,
                                    eE: g,
                                    Zh: k,
                                    T5a: this.Jka,
                                    C_: this.C_,
                                    sheet: c,
                                    container: d,
                                    cq: e,
                                    t1: f,
                                    Y: this.Y,
                                    viewport: l,
                                    $H: m,
                                    Hba: this.Hba
                                })
                            })
                        }
                        get Hba() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.PW ? b.layout.ze.get(b.view.freeze.PW) : void 0,
                                e = b.view.freeze.DI ? b.layout.Yd.get(b.view.freeze.DI) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.UHa = {
                                    range: {
                                        Wb: h,
                                        ac: f,
                                        Qc: e,
                                        bd: d
                                    }
                                });
                                d && l && (c.d3a = {
                                    range: {
                                        Wb: l,
                                        ac: f,
                                        Qc: k,
                                        bd: d
                                    }
                                });
                                e && b && (c.DOa = {
                                    range: {
                                        Wb: h,
                                        ac: b,
                                        Qc: e,
                                        bd: g
                                    }
                                });
                                b && l && (c.R1a = {
                                    range: {
                                        Wb: l,
                                        ac: b,
                                        Qc: k,
                                        bd: g
                                    }
                                });
                                return c
                            }
                        }
                        get Y() {
                            return this.props.Y ?
                                this.props.Y : k5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.Jka = (m5.A(this), d5(c => {
                                const {
                                    sheet: d,
                                    Xsa: e,
                                    Y: f,
                                    A9: g = "hidden"
                                } = this.props;
                                return Y4(A5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: Y4(K1b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        Xsa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.C_ = (c, d) => new __c.CKa(this.props.ID, this.props.RA, this.props.sheet, c, d, this.Y, this.Zu, this.bv);
                            this.Zu = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Zu) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.bv = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).bv) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [m5, $1b]
                    } = y5(a, [], [Jc], a2b))
                })(), Z1b);
                __c.JKa = {
                    Mhb: function(a) {
                        const b = a.Po,
                            c = a.Td,
                            d = a.ud,
                            e = a.gn,
                            f = a.ID,
                            g = a.RA,
                            h = a.HY;
                        D0b({
                            QA: a.QA,
                            Yf: a.Yf,
                            qub: a.lQ,
                            Ab: a.Ab
                        });
                        const k = Z0b({
                            eE: h,
                            ID: f,
                            RA: g,
                            Qo: void 0
                        });
                        b.bla = T0b({
                            Rq: k
                        });
                        c.Kka = J0b({
                            Rq: k
                        });
                        ({
                            X5a: a
                        } = Q0b({
                            Rq: k,
                            If: e(),
                            UZa: new D1b
                        }));
                        d.Yq.ala = a;
                        const {
                            b4a: l,
                            c4a: m,
                            a4a: n
                        } = I0b();
                        return {
                            LFa: d5(p => Y4(j1b, { ...p,
                                container: void 0,
                                Rq: k,
                                W5a: l,
                                Y5a: m,
                                U5a: n,
                                Zh: k1b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/bfaac7e0185ff885.js.map