(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [57399], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var LL = __c.LL;
                var ML = __c.ML;
                var ca = __c.ca;
                var ba = __c.ba;
                var pW = __c.pW;
                var qn = __c.qn;
                var A = __c.A;
                var eK = __c.eK;
                var Il = __c.Il;
                var Ql = __c.Ql;
                var ll = __c.ll;
                var fK = __c.fK;
                var B = __c.B;
                var E = __c.E;
                var AEb = function(a, b) {
                        for (let d = 0; d < 10; d++) {
                            var c = Math.max(b * .001, 1);
                            const e = a(b);
                            c = (a(b + c) - e) / c;
                            Math.abs(c - 0) < 1E-8 && (c = 1);
                            if (Math.abs(e / b) < 1E-8) break;
                            b -= e / c
                        }
                        return b
                    },
                    BEb = function(a, b, c, d, e, f, g) {
                        const h = a - c;
                        g = Math.max(g !== null && g !== void 0 ? g : a, h);
                        return AEb(k => {
                            const l = Math.max(k, h),
                                m = l - h;
                            var n = __c.SE(b, b + c, b + m),
                                p = n(d);
                            n = n(d + e);
                            p += f;
                            k -= l;
                            return Math.abs(m - 0) < 1E-8 && n > p ? k : n - p + k
                        }, g)
                    },
                    CEb = function(a) {
                        const b = a.rb;
                        if (a = a.ec.first()) {
                            var c;
                            a = ((c = a.bF[0]) !== null && c !== void 0 ? c : 0) + __c.EL(b.toArray())
                        } else a =
                            0;
                        return a
                    },
                    z6 = function(a) {
                        return !!a && a.text.charLength > 1
                    },
                    A6 = function(a, b, c, d) {
                        a = DEb[a][b];
                        switch (c) {
                            case "left":
                                return a.left(d);
                            case "center":
                                return a.center(d);
                            case "right":
                                return a.right(d);
                            default:
                                throw new E(c);
                        }
                    },
                    EEb = function(a, {
                        f3: b,
                        SPa: c
                    }) {
                        const d = a.target,
                            e = d.viewBox,
                            f = d.slice,
                            g = d.ec.first();
                        if (z6(g) && f) {
                            var h = B(d.resizeMode, "resizeMode must be provided if there is text content"),
                                k = 2 * CEb(d),
                                l, m = a.Jg.width / ((l = a.pk) !== null && l !== void 0 ? l : e.width),
                                n;
                            a = a.Jg.height / ((n = a.al) !== null && n !== void 0 ?
                                n : e.height);
                            h.minBlockSize = Math.max(h.minBlockSize, (e.height - f.source.height) * a);
                            var p;
                            c = c ? b.height : (p = h.minBlockSize) !== null && p !== void 0 ? p : b.height;
                            return {
                                textBox: __c.gK({
                                    width: b.width,
                                    height: c,
                                    viewBox: d.viewBox,
                                    slice: { ...f,
                                        kh: b.width / m + f.source.width - e.width,
                                        jh: c / a + f.source.height - e.height
                                    }
                                }, g.box),
                                desiredHeight: c,
                                le: a,
                                nXa: k
                            }
                        }
                    },
                    FEb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    B6 = function(a, b, c) {
                        a.bf || __c.uta(a);
                        var d = B(a.bf, "Cannot measure text using a destroyed qltt");
                        if (__c.QL(a.Sf, a.La) != null) return __c.bM(d);
                        const e = a.writingMode;
                        __c.GL(e) ? d.style.width = `${b}px` : d.style.height = `${b}px`;
                        d = d.getBoundingClientRect();
                        d = __c.zsa(e, d);
                        const {
                            width: f,
                            height: g
                        } = __c.Asa(e, {
                            inline: b,
                            block: d.block + a.AW
                        });
                        return {
                            width: f,
                            height: g,
                            Qb: (c === null || c === void 0 ? 0 : c.B2) ? [] : a.XL(b)
                        }
                    },
                    GEb = function(a, b, c = !0, d = a.Jg.tl, e) {
                        var f = a.target;
                        const g = f.viewBox,
                            h = f.slice;
                        var k = f.ec.first(),
                            l = EEb(a, {
                                f3: b,
                                SPa: c
                            });
                        if (!l || !h || !k || !z6(k) && !a.Le.QMa(f).length) return {
                            f3: b,
                            Qb: []
                        };
                        const m = B(a.jr, "typesetter must be provided if there is text content");
                        a = l.textBox;
                        c = l.desiredHeight;
                        const n = l.le;
                        l = l.nXa;
                        e = B6(m, a.width - l, e);
                        FEb(k.Qa.Qb, e.Qb) || (k.Qa = {
                            Qb: e.Qb
                        });
                        l = e.height + l;
                        f = a.height > l ? c : BEb(g.height, h.source.top, h.source.height, k.box.top, k.box.height, l / n, fK(f.viewBox, h)) * n;
                        k = k.Uc;
                        d = ll(d, b.bb) || ll(d, b.r) || ll(d, b.c) ? A6({
                            [1]: 1,
                            [2]: 2,
                            [3]: 3
                        }[k], 1, ll(d, b.bb) ? "left" : ll(d, b.r) ? "right" : "center", b) : d;
                        return {
                            f3: b.resizeTo(d, b.width, f),
                            Qb: e.Qb
                        }
                    },
                    HEb = function(a, b) {
                        return __c.dM(a, b, 1, "glyph")
                    },
                    IEb = function(a, b, c) {
                        c = __c.Yl(a, b, c);
                        return c > 1 ? a.transform(__c.Bl(b,
                            c)) : a
                    },
                    JEb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.Vl(a));
                        var e = b.transform(__c.Vl(a)),
                            f = e.c;
                        b = e.width;
                        const g = e.height;
                        e = e.rotation;
                        f = __c.Cl(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(f);
                        return __c.Jl({
                            center: f,
                            width: b,
                            height: g,
                            rotation: d ? c ? e + 180 : 2 * a.rotation + 180 - e : 2 * a.rotation - e
                        })
                    },
                    KEb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.Sl(a));
                        var e = b.c;
                        const f = b.width,
                            g = b.height;
                        b = b.rotation;
                        e = __c.Cl(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(e);
                        return __c.Jl({
                            center: e,
                            width: f,
                            height: g,
                            rotation: d ? c ? b - 180 : 2 * a.rotation + 180 - b : 2 * a.rotation - b
                        }).transform(__c.Sl(a))
                    },
                    LEb = function(a, b, c, d = !1, e = !1) {
                        const f = a.center();
                        var g = b.center();
                        const h = b.width / a.width,
                            k = b.height / a.height;
                        a = JEb(a, c, d, e).transform(__c.wl(g.x - f.x, g.y - f.y).then(__c.Bl(g, Math.min(1, Math.min(h, k)))));
                        g = IEb(a, g, b.xa());
                        return KEb(b, g, d, e)
                    },
                    C6 = function(a, b, c, d = !1, e = !1) {
                        return c && Ql(LEb(a, b, Il(c), d, e))
                    },
                    MEb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / eK(c, d);
                        a = a.height / fK(c, d);
                        return {
                            top: (b.top - c.top) *
                                a,
                            left: (b.left - c.left) * e,
                            width: b.width * e,
                            height: b.height * a,
                            rotation: b.rotation
                        }
                    },
                    NEb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / eK(c, d);
                        a = a.height / fK(c, d);
                        return {
                            top: b.top / a + c.top,
                            left: b.left / e + c.left,
                            width: b.width / e,
                            height: b.height / a,
                            rotation: b.rotation
                        }
                    },
                    OEb = function(a, b, c) {
                        var d = a.Wra.get(b),
                            e = a.Zra.get(b);
                        if (d != null || e != null) {
                            if (d === null || d === void 0 ? 0 : d.Eb) {
                                d = d.Eb;
                                var f = MEb(a.target, d);
                                const g = B(a.Yra.get(b));
                                f = C6(g, c, f);
                                b.fill.image.ref && f && (b.fill.image.ref.Eb = { ...NEb(a.target, f),
                                    rotation: d.rotation
                                })
                            }
                            if (e ===
                                null || e === void 0 ? 0 : e.Eb) e = e.Eb, d = MEb(a.target, e), f = B(a.Yra.get(b)), c = C6(f, c, d), b.fill.video.ref && c && (b.fill.video.ref.Eb = { ...NEb(a.target, c),
                                rotation: e.rotation
                            })
                        }
                    },
                    D6 = function(a) {
                        const b = new Map;
                        a.rb.forEach(c => {
                            const d = __c.zU(c.d);
                            d && b.set(c, Il(__c.gK(a, Ql(d))).translate(a.left, a.top))
                        });
                        return b
                    },
                    PEb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    QEb = function(a, b, c, d, e = !1, f = !1) {
                        if (d) return b = JEb(b, Il(d), e, f), a = IEb(b, a, c.xa()), Ql(KEb(c, a, e, f))
                    },
                    REb = function({
                        width: a,
                        height: b
                    }) {
                        return Il({
                            width: a,
                            height: b,
                            top: 0,
                            left: 0
                        })
                    },
                    SEb = function(a, b) {
                        switch (b.element.type) {
                            case "text":
                                return a.J1.GX(b.element);
                            case "rect":
                                return a.J1.EX(b.element);
                            case "shape":
                                if (!b.element.slice) break;
                                return a.J1.FX(b.element);
                            case "layout":
                                return new E6(b.element, a.Le, a.J1, a.bu);
                            default:
                                throw new E(b.element);
                        }
                    },
                    TEb = function(a) {
                        a.BT.forEach(({
                            writingMode: b,
                            state: c,
                            La: d
                        }, e) => {
                            var f = c.cells.T();
                            a.Pma.set(e, f.length);
                            __c.GL(b) && !__c.V$a.test(f) && a.tma.add(e);
                            f = document.createElement("div");
                            f.classList.add("AdBbhQ", __c.ZL(b));
                            f.style.writingMode = __c.FL(b);
                            a.Ou.set(e, f);
                            a.renderer.render(f, c, d, b)
                        });
                        a.rv.append(...a.Ou.values());
                        a.rv.classList.add("kBwe2A");
                        a.BT.forEach(({
                            X_: b,
                            state: c
                        }, d) => {
                            const e = B(a.Ou.get(d));
                            b = __c.SL(c, a.tb, b);
                            a.Zla.set(d, b);
                            a.dT.set(d, __c.tta(e))
                        })
                    },
                    UEb = function(a, b) {
                        var c = Il(b);
                        a = a.Ih.DX(b);
                        b = c.tl;
                        const d = c.br;
                        c = c.br;
                        try {
                            a.Qi(b, d, c, !0, !1)
                        } finally {
                            a.destroy()
                        }
                    },
                    WEb = function(a, b, c, d) {
                        c = new VEb(c, d);
                        A(a.count() === 1, "Only single widget root element is supported");
                        a =
                            a.first();
                        A(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.s4(a, b)
                    },
                    YEb = function(a) {
                        return { ...__c.PPa,
                            ...F6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.BDa.width,
                                height: a.BDa.height
                            },
                            rb: a.rb.map(XEb)
                        }
                    },
                    ZEb = function(a) {
                        switch (a.Kx) {
                            case 0:
                                var b = qn.Cc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight * 1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Lf("color", a.color);
                                b = b.fc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.RPa,
                                    ...G6,
                                    ...F6,
                                    Xa: (c = a.Xa) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    Fg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.RPa,
                                    ...G6,
                                    ...F6,
                                    text: b,
                                    Fg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    K6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        P: d
                    }) {
                        b = { ...__c.APa,
                            fill: H6(b),
                            border: I6(c),
                            P: J6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: YEb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: ZEb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: $Eb(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    $Eb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        P: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.BPa,
                            ...G6,
                            ...F6,
                            N: G6.width,
                            Y: G6.height,
                            fill: H6(c),
                            border: I6(b),
                            direction: 1,
                            P: J6(d),
                            cells: new Map(a.map(k => [k.id, K6(k)])),
                            behavior: {
                                rules: [{
                                    Mf: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        Xf: aFb(a)
                                    }
                                }]
                            },
                            qe: void 0
                        }
                    },
                    aFb = function(a) {
                        return new Map(a.map(b => [b.id, bFb(b)]))
                    },
                    bFb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.tI,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.nS,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    I6 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.AI,
                            all: a ? { ...__c.PQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Ue: !0
                            } : void 0
                        }
                    },
                    J6 = function(a) {
                        return { ...__c.mS,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    XEb = function(a) {
                        return { ...__c.QPa,
                            ...a,
                            fill: H6(a.fill),
                            stroke: cFb(a.stroke)
                        }
                    },
                    cFb = function(a) {
                        return a ? { ...__c.PQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    H6 = function(a) {
                        var b;
                        const c = { ...__c.OQ,
                            Xa: (b = a === null || a === void 0 ? void 0 : a.Xa) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    $a: a.$a
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    iFb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        dFb(a.cells,
                            c, (e, f) => {
                                let g = !1;
                                eFb(e.element, f.content, () => {
                                    a.cells.delete(f.id);
                                    a.cells.set(f.id, K6(f));
                                    g = !0
                                });
                                g || (L6(e.fill, f.fill), fFb(e.border, f.border), gFb(e.P, f.P))
                            }, e => K6(e));
                        hFb(a.behavior, b, c);
                        L6(a.fill, b.fill);
                        gFb(a.P, b.P);
                        fFb(a.border, b.border);
                        var d;
                        a.Xa = (d = b.Xa) !== null && d !== void 0 ? d : 0
                    },
                    hFb = function(a, b, c) {
                        M6(a.rules, [b], d => {
                            jFb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            jFb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows =
                                b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            dFb(d.grid.Xf, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.va = k === null || k === void 0 ?
                                    void 0 : k.va, g.padding.Ka = k === null || k === void 0 ? void 0 : k.Ka, g.padding.qa = k === null || k === void 0 ? void 0 : k.qa, g.padding.Ma = k === null || k === void 0 ? void 0 : k.Ma);
                                g.alignSelf = p
                            }, g => bFb(g))
                        }, d => {
                            var e, f;
                            return {
                                Mf: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    Xf: aFb(d.cells)
                                }
                            }
                        })
                    },
                    kFb = function(a, b) {
                        M6(a.rb, b.rb, (e, f) => {
                            e.d = f.d;
                            L6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref,
                                f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(cFb(f.stroke))
                        }, e => XEb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = YEb(b);
                        a.width = d;
                        Il(a.viewBox).equals(Il(c)) || (a.viewBox = c)
                    },
                    eFb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? kFb(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && qn.domain.Jb(qn.ua(a.text), ZEb(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? iFb(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    dFb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f),
                            c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    M6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    L6 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.$a.set(void 0);
                                var c;
                                a.Xa = (c = b.Xa) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.$a.ref && __c.bHa.domain.Jb(a.$a.ref, b.$a)) break;
                                a.color = void 0;
                                a.$a.set(b.$a);
                                var d;
                                a.Xa = (d = b.Xa) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.$a.set(void 0)
                        }
                    },
                    gFb = function(a, b) {
                        b = J6(b);
                        a.all = b.all;
                        a.Hy = b.Hy;
                        a.Ey = b.Ey;
                        a.Gy = b.Gy;
                        a.Dy = b.Dy
                    },
                    fFb = function(a, b) {
                        b = I6(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.BI.domain.Jb(__c.BI.ua(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    jFb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    mFb = function(a, b, c, d) {
                        let e = a.mya.get(b);
                        if (e) return e;
                        e = {
                            Bt: new lFb(c.vx, b, d, c.caa),
                            qla: void 0,
                            xta: void 0,
                            kva: __c.uX.mode
                        };
                        a.mya.set(b, e);
                        return e
                    },
                    oFb = function(a, b, c, d, e) {
                        var f, g;
                        e = mFb(a, c, b, e);
                        const h = e.Bt,
                            k = e.xta,
                            l = e.qla,
                            m = e.kva;
                        c = __c.ZR.ua(c);
                        const n = ((f = (g = a.yv).x$) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.uX;
                        h.Th === k && nFb.structural(c, l) && n.mode === m || (e.qla = c, e.xta = h.Th, e.kva = n.mode, b = b.render(h, n), a.TRa.update(d, b), WEb(d, b, (p, q) => a.YI.maa.set(p, q), (p, q, r) => a.YI.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    rFb = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.zSa());
                        c.push(pFb(() => {
                            a: {
                                var e = new qFb;
                                for (const f of b)
                                    if (e.aJ(f), e.F9) {
                                        e = e.F9;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.mc.isLoaded(e) || a.Vaa.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) A(f.type === "layout"), UEb(a.Fm, f);
                                d()
                            }
                        }));
                        return d
                    },
                    sFb = function(a, b) {
                        return {
                            zt: ({
                                Kf: c
                            }) => {
                                var d;
                                const {
                                    Bt: e
                                } = mFb(a.renderer, c, b, a.eS), f = __c.aS.create([]), g = [];
                                g.push(rFb(a.ZLa, f));
                                g.push(pFb(() => {
                                    var k, l;
                                    return [(k = (l = a.yv).x$) === null || k === void 0 ? void 0 : k.call(l, f), __c.ZR.ua(c), e.Th]
                                }, () => {
                                    oFb(a.renderer, b, c, f, a.eS)
                                }, {
                                    fireImmediately: !0,
                                    equals: nFb.structural
                                }));
                                const h = (d =
                                    b.Xba) === null || d === void 0 ? void 0 : d.call(b, {
                                    Bt: e
                                });
                                h && g.push(h);
                                return {
                                    gb: f,
                                    mu: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    uFb = function(a, b) {
                        let c = a.lW.get(b);
                        c || (c = tFb("weakKey"), a.lW.set(b, c));
                        c.reportObserved()
                    },
                    vFb = {
                        left: a => a.Df,
                        center: a => a.bb,
                        right: a => a.tl
                    },
                    wFb = {
                        left: a => a.b,
                        center: a => a.c,
                        right: a => a.t
                    },
                    xFb = {
                        left: a => a.br,
                        center: a => a.r,
                        right: a => a.tr
                    },
                    DEb = {
                        [1]: {
                            [1]: {
                                left: a => a.tr,
                                center: a => a.t,
                                right: a => a.tl
                            },
                            [2]: xFb,
                            [3]: vFb
                        },
                        [2]: {
                            [1]: {
                                left: a => a.r,
                                center: a => a.c,
                                right: a => a.bb
                            },
                            [2]: wFb,
                            [3]: wFb
                        },
                        [3]: {
                            [1]: {
                                left: a => a.br,
                                center: a => a.b,
                                right: a => a.Df
                            },
                            [2]: vFb,
                            [3]: xFb
                        }
                    },
                    N6 = class extends pW {
                        constructor(a, b, c, d, e) {
                            super(a, b);
                            this.jr = c;
                            this.al = d;
                            this.pk = e;
                            this.al = d !== null && d !== void 0 ? d : fK(a.viewBox, a.slice);
                            this.pk = e !== null && e !== void 0 ? e : eK(a.viewBox, a.slice)
                        }
                    };
                N6.prototype.XH = ba(34);
                N6.prototype.XH = ca(34, function(a = Il(this.target), b, c = this.Jg.tl, d) {
                    const e = this.target,
                        f = e.slice,
                        {
                            f3: g,
                            Qb: h
                        } = GEb(this, a, b, c, d);
                    (a = this.target.ec.first()) && h && (a.Qa = {
                        Qb: h
                    });
                    b && e.resizeMode && (e.resizeMode.minBlockSize = g.height);
                    this.pk != null && f && (f.kh = Math.max(0, this.pk / this.Jg.width * g.width + f.source.width - e.viewBox.width));
                    this.al != null && f && (f.jh = Math.max(0, this.al / this.Jg.height * g.height + f.source.height - e.viewBox.height));
                    this.Bx(Ql(g));
                    return g
                });
                __c.NL.prototype.XH = ca(33, function(a, b) {
                    var c = a.ec.first();
                    c = z6(c) ? HEb(this.zg, qn.ua(c === null || c === void 0 ? void 0 : c.text)) : void 0;
                    a = new N6(a, this.jj, c);
                    try {
                        return a.XH(void 0, !1, void 0, b)
                    } finally {
                        c === null || c === void 0 || c.destroy()
                    }
                });
                var yFb = class extends pW {
                        constructor(a, b, c, d) {
                            super(a, b);
                            this.jr = c;
                            this.bu = d
                        }
                    },
                    O6 = class extends pW {
                        resize(a, b, c, d) {
                            a = this.Fm.XH(this.Jg.resize(a, b, c, d), !0, void 0, {
                                B2: !0
                            });
                            D6(this.target).forEach((e, f) => OEb(this, f, e));
                            return a !== null && a !== void 0 ? a : this.Jg
                        }
                        reset() {
                            super.reset();
                            const a = B(this.target.slice);
                            a.kh = this.GOa;
                            a.jh = this.FOa
                        }
                        complete() {
                            this.Fm.XH(void 0, !1, void 0, {
                                B2: !0
                            })
                        }
                        destroy() {
                            this.jr && this.jr.destroy()
                        }
                        constructor(a, b, c) {
                            super(a, b);
                            this.Yra = D6(this.target);
                            this.Wra = new WeakMap;
                            this.Zra =
                                new WeakMap;
                            var d = B(a.slice);
                            this.GOa = d.kh;
                            this.FOa = d.jh;
                            a.rb.forEach(g => {
                                var h = g.fill.image.ref;
                                h && this.Wra.set(g, __c.SGa.ua(h));
                                (h = g.fill.video.ref) && this.Zra.set(g, __c.VGa.ua(h))
                            });
                            if (d.kh != null) {
                                const g = a.ec.first();
                                this.pk = eK(a.viewBox, d);
                                const h = a.width / this.pk;
                                var e = a.viewBox.width - d.source.width;
                                if (z6(g)) {
                                    var f;
                                    e = (f = g.text.Jj(0)["font-size"]) !== null && f !== void 0 ? f : __c.Tg.Sc["font-size"];
                                    e = BEb(a.viewBox.width, d.source.left, d.source.width, g.box.left, g.box.width, (e + 2 * CEb(a)) / h, eK(a.viewBox, d))
                                }
                                this.minWidth =
                                    Math.max(5, e * h)
                            } else this.pk = void 0, this.minWidth = 5;
                            d.jh != null ? (this.al = fK(a.viewBox, d), this.minHeight = Math.max(5, a.height / this.al * (a.viewBox.height - d.source.height))) : (this.al = void 0, this.minHeight = 5);
                            this.zg = c;
                            d = a.ec.first();
                            z6(d) && (this.jr = HEb(c, qn.ua(d.text)));
                            this.Fm = new N6(a, b, this.jr, this.al, this.pk)
                        }
                    };
                O6.prototype.Qi = ba(5);
                var P6 = class extends pW {
                    resize() {
                        throw Error("Unimplemented");
                    }
                    complete() {
                        const a = B6(this.jr, Math.max(5, this.target.N || this.target.width));
                        this.target.Qa = {
                            Qb: a.Qb
                        }
                    }
                    destroy() {
                        this.bu.destroy();
                        this.jr.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.Qa = this.HOa;
                        this.target.Al = this.EOa;
                        this.target.N = this.pk;
                        this.target.Y = this.al
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.zg = c;
                        this.zb = d;
                        this.pk = a.N;
                        this.al = a.Y;
                        this.EOa = a.Al;
                        this.HOa = a.Qa;
                        this.Kd = a.N != null ? a.width / a.N : void 0;
                        this.le = a.Y != null ? a.height / a.Y : void 0;
                        this.Fg = a.Fg;
                        this.writingMode = a.writingMode || 1;
                        this.bu = d.Zp();
                        this.jr = __c.dM(c, qn.ua(a.text), this.writingMode, "em-square", a.La.ref);
                        this.Fm = new yFb(a, b, this.jr, this.bu)
                    }
                };
                P6.prototype.Qi = ba(4);
                var Q6 = class extends pW {
                    resizeTo(a, b, c) {
                        A(this.flipX === this.target.fill.flipX);
                        A(this.flipY === this.target.fill.flipY);
                        this.Bx(Ql(a));
                        var d = this.target.fill.image.ref;
                        d && b && (d.Eb = b);
                        (b = this.target.fill.video.ref) && c && (b.Eb = c);
                        return a
                    }
                    resize(a, b, c, d) {
                        a = this.Jg.resize(a, b, c, d);
                        b = C6(this.Jg, a, this.$$, this.flipX, this.flipY);
                        c = C6(this.Jg, a, this.aaa, this.flipX, this.flipY);
                        return this.resizeTo(a, b, c)
                    }
                    reset() {
                        super.reset();
                        var a = this.target.fill.image.ref,
                            b = this.$$;
                        a && b && (a.Eb = b);
                        a = this.target.fill.video.ref;
                        b = this.aaa;
                        a && b && (a.Eb = b)
                    }
                    complete() {}
                    destroy() {}
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.$$ = c;
                        this.aaa = d;
                        this.flipX = this.target.fill.flipX;
                        this.flipY = this.target.fill.flipY
                    }
                };
                Q6.prototype.Qi = ba(6);
                ML.prototype.FX = ca(32, function(a) {
                    return new O6(a, this.jj, this.zg)
                });
                LL.prototype.FX = ca(31, function() {
                    throw Error("Unimplemented");
                });
                ML.prototype.EX = ca(30, function(a) {
                    var b = a.fill.image.ref;
                    const c = a.fill.video.ref;
                    b = b && (b.Eb || Ql(this.nZ(a, b)));
                    return new Q6(a, this.jj, b, c === null || c === void 0 ? void 0 : c.Eb)
                });
                LL.prototype.EX = ca(29, function() {
                    throw Error("Unimplemented");
                });
                ML.prototype.GX = ca(28, function(a) {
                    return new P6(a, this.jj, this.zg, this.zb)
                });
                LL.prototype.GX = ca(27, function() {
                    throw Error("Unimplemented");
                });
                ML.prototype.nZ = ca(26, function(a, b) {
                    const c = b.Eb;
                    if (c) return Il(c);
                    b = this.bG(b.media);
                    return __c.fG(a, b)
                });
                LL.prototype.nZ = ca(25, function(a, b) {
                    const c = b.Eb;
                    if (c) return Il(c);
                    b = this.bG(b.media);
                    return __c.fG(a, b)
                });
                var E6 = class extends pW {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        for (const [, {
                                Ih: a
                            }] of this.ZO) a.complete()
                    }
                    destroy() {
                        for (const [, {
                                Ih: a
                            }] of this.ZO) a.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.width = this.NZ;
                        this.target.height = this.COa;
                        this.target.N = this.pk;
                        this.target.Y = this.al;
                        for (const [, {
                                Ih: a
                            }] of this.ZO) a.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.J1 = c;
                        this.bu = d;
                        this.NZ = this.target.width;
                        this.COa = this.target.height;
                        this.pk = this.target.N;
                        this.al = this.target.Y;
                        this.ZO = new Map;
                        for (const [, e] of a.cells)(a = SEb(this, e)) && this.ZO.set(e, {
                            Ih: a,
                            BOa: Il(e.element)
                        })
                    }
                };
                E6.prototype.Qi = ba(7);
                var R6 = class extends pW {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        this.Ih.complete()
                    }
                    destroy() {
                        this.Ih.destroy();
                        this.bu.destroy()
                    }
                    reset() {
                        super.reset();
                        this.Ih.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.zb = d;
                        this.NZ = this.target.width;
                        this.pk = this.target.N;
                        this.al = this.target.Y;
                        this.bu = this.zb.create(a);
                        this.Ih = new E6(a, b, c, this.bu)
                    }
                };
                R6.prototype.Qi = ba(8);
                ML.prototype.DX = ca(21, function(a) {
                    return new R6(a, this.jj, this, this.gH)
                });
                LL.prototype.DX = ca(20, function() {
                    throw Error("Unimplemented");
                });
                __c.Fl.prototype.Qi = ca(10, function(a, b, c, d, e, f = 0, g = 0) {
                    const h = this.rotation;
                    var k = __c.wl(-a.x, -a.y).then(__c.zl(-h * __c.hl / 180));
                    a = k.invert();
                    b = k.transformPoint(b);
                    c = k.transformPoint(c);
                    k = k.transformPoint(this.center());
                    d = d ? Math.max(f, Math.min(Infinity, this.width * c.x / b.x)) : this.width;
                    e = e ? Math.max(g, Math.min(Infinity, this.height * c.y / b.y)) : this.height;
                    g = a.transformPoint(new __c.jl(d / this.width * k.x, e / this.height * k.y));
                    return __c.Jl({
                        center: g,
                        width: d,
                        height: e,
                        rotation: h
                    })
                });
                __c.qW.prototype.Qi = ca(9, function(a, b, c, d, e) {
                    this.resizeTo(this.Jg.Qi(a, b, c, d, e, this.minWidth, this.minHeight))
                });
                R6.prototype.Qi = ca(8, function(a, b, c, d, e) {
                    const {
                        width: f,
                        height: g
                    } = this.Jg.Qi(a, b, c, d, e);
                    var h = this.NZ / this.pk,
                        k = this.bu,
                        l = f / h;
                    h = e ? g / h : this.al;
                    const m = B(k.Ih, "Cannot measure layout using a destroyed measurer");
                    m.style.width = __c.HI(l);
                    m.style.height = __c.HI(h);
                    for (var [, n] of k.j3.entries()) n.style.minWidth = "", n.style.minHeight = "";
                    l = new Map;
                    for (const [p, q] of k.j3) n = B(q.parentElement), {
                        width: n
                    } = Il(n.getBoundingClientRect()), l.set(p, n);
                    n = k.Ola;
                    n.Ou.size === 0 && TEb(n);
                    for (const [p, q] of l) {
                        h = B(n.Ou.get(p),
                            "Cannot measure text using a destroyed bqltt");
                        const {
                            writingMode: r,
                            La: t
                        } = B(n.BT.get(p), "Cannot measure text using an unknown key");
                        __c.QL(n.Sf, t) == null && (__c.GL(r) ? h.style.width = `${q}px` : h.style.height = `${q}px`)
                    }
                    l = n.measure(l, void 0);
                    for (const [p, q] of k.j3) {
                        const {
                            width: r,
                            height: t
                        } = B(l.get(p));
                        q.style.minWidth = __c.HI(r);
                        q.style.minHeight = __c.HI(t)
                    }
                    B(k.bf).getBoundingClientRect();
                    this.Ih.Qi(a, b, c, d, e)
                });
                E6.prototype.Qi = ca(7, function(a, b, c, d, e) {
                    for (const [n, {
                            Ih: p,
                            BOa: q
                        }] of this.ZO) {
                        ({
                            g7: b
                        } = B(this.bu.h7.get(n)));
                        const {
                            top: r,
                            left: t,
                            width: v,
                            height: u
                        } = b.getBoundingClientRect();
                        b = B(Il({
                            top: r,
                            left: t,
                            width: v,
                            height: u
                        }));
                        c = REb(q);
                        p.Qi(c.tl, c.br, REb(b).br, d, e);
                        n.element.top !== 0 && (n.element.top = 0);
                        n.element.left !== 0 && (n.element.left = 0)
                    }
                    b = this.NZ / this.pk;
                    c = B(this.bu.hta.get(this.target));
                    const {
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    } = c.getBoundingClientRect(), {
                        width: l,
                        height: m
                    } = B(Il({
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    }));
                    this.Bx(Ql(this.Jg.resizeTo(a, l * b, m * b)));
                    d && (this.target.N = l);
                    e && (this.target.Y = m)
                });
                Q6.prototype.Qi = ca(6, function(a, b, c, d, e) {
                    const f = this.target.fill.image.ref ? 5 : 1;
                    b = this.Jg.Qi(a, b, c, d, e, f, f);
                    c = QEb(a, this.Jg, b, this.$$, this.flipX, this.flipY);
                    a = QEb(a, this.Jg, b, this.aaa, this.flipX, this.flipY);
                    this.resizeTo(b, c, a)
                });
                O6.prototype.Qi = ca(5, function(a, b, c, d, e) {
                    this.Fm.XH(this.Jg.Qi(a, b, c, d, e, this.minWidth, this.minHeight), e, a, {
                        B2: !0
                    });
                    D6(this.target).forEach((f, g) => OEb(this, g, f))
                });
                P6.prototype.Qi = ca(4, function(a, b, c, d, e) {
                    b = this.Jg.Qi(a, b, c, d, e, 5, 5);
                    c = this.Jg;
                    a = __c.Sl(c).transformPoint(a);
                    var f = A6(this.Fg, this.writingMode, d ? a.x < c.width / 2 ? "right" : a.x > c.width / 2 ? "left" : "center" : a.y < c.height / 2 ? "right" : a.y > c.height / 2 ? "left" : "center", this.Jg); {
                        d = this.Fm;
                        a = d.target;
                        e = d.jr;
                        c = d.Jg;
                        var g = d.target,
                            h = g.N != null ? g.width / g.N : 1;
                        g = g.Y != null ? g.height / g.Y : 1;
                        !Number.isFinite(h) && Number.isFinite(g) ? h = g : !Number.isFinite(g) && Number.isFinite(h) && (g = h);
                        const {
                            Kd: m,
                            le: n
                        } = {
                            Kd: h,
                            le: g
                        };
                        h = a.writingMode ||
                            1;
                        f = f || A6(a.Fg, h, "left", c);
                        var k, l;
                        h = __c.GL(h) ? ((k = b === null || b === void 0 ? void 0 : b.width) !== null && k !== void 0 ? k : a.width) / m : ((l = b === null || b === void 0 ? void 0 : b.height) !== null && l !== void 0 ? l : a.height) / n;
                        k = B6(e, h);
                        l = c.resizeTo(f, m * Math.max(1, k.width), n * Math.max(1, k.height));
                        __c.Rl(c, l) && PEb(a.Qa.Qb, k.Qb) || (d.Bx(Ql(l)), a.Al = 1, a.Qa = {
                            Qb: k.Qb
                        }, a.N = m !== 1 ? Math.max(1, k.width) : void 0, a.Y = n !== 1 ? Math.max(1, k.height) : void 0)
                    }
                });
                var S6 = __webpack_require__(519427),
                    nFb = S6.comparer,
                    zFb = S6.computed,
                    tFb = S6.createAtom,
                    T6 = S6.observable,
                    pFb = S6.reaction,
                    AFb = S6.runInAction;
                var BFb = class {
                    static A(a) {
                        __c.P(a, {
                            aTa: T6.ref,
                            gNa: T6.ref
                        })
                    }
                    constructor() {
                        this.x$ = (BFb.A(this), void 0)
                    }
                };
                var CFb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    lFb = class {
                        static A(a) {
                            __c.P(a, {
                                pe: zFb
                            })
                        }
                        get yta() {
                            var a = this.eS,
                                b = this.Kf,
                                c = this.caa;
                            let d = a.sources.get(b);
                            d || (d = T6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Th() {
                            return this.yta.get()
                        }
                        get pe() {
                            return this.vx.Yq({
                                type: "dict",
                                value: this.Kf
                            })
                        }
                        Uj(a) {
                            this.yta.set(a instanceof Function ? { ...this.Th,
                                ...a()
                            } : { ...this.Th,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.vx = a;
                            this.Kf = b;
                            this.eS = c;
                            this.caa = d;
                            lFb.A(this)
                        }
                    };
                var VEb = class {
                    lV(a, b) {
                        this.hya(a, b);
                        b.ref && this.Dda(a, b.ref, b.key)
                    }
                    dJ(a, b) {
                        b.ref && this.Dda(a.text, b.ref, b.key)
                    }
                    Kia(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                A(a.element.type === "shape");
                                this.lV(a.element, b.content);
                                break;
                            case "text":
                                A(a.element.type === "text");
                                this.dJ(a.element, b.content);
                                break;
                            case "layout":
                                A(a.element.type === "layout");
                                this.s4(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    s4(a, b) {
                        this.hya(a, b);
                        b.ref && this.Dda(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), A(!!d && !!a), this.Kia(d, a)
                    }
                    constructor(a, b) {
                        this.hya = a;
                        this.Dda = b
                    }
                };
                var F6 = {
                        locked: !0,
                        yj: {
                            vX: !1,
                            qU: !1
                        },
                        Mg: !0
                    },
                    G6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var DFb = class {
                    constructor(a) {
                        this.Fm = a;
                        this.update = (b, c) => {
                            M6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        iFb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...$Eb(d),
                                            ...F6,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            N: d.minWidth,
                                            Y: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) A(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.N = c.minWidth, d.Y = c.minHeight, c.direction && (d.direction = c.direction), UEb(this.Fm,
                                d)
                        }
                    }
                };
                var EFb = class {
                    constructor(a, b, c) {
                        this.TRa = a;
                        this.YI = b;
                        this.yv = c;
                        this.mya = new WeakMap
                    }
                };
                var FFb = class {
                        static A(a) {
                            __c.P(a, {
                                Vaa: T6.shallow
                            })
                        }
                        constructor(a, b) {
                            this.mc = a;
                            this.Fm = b;
                            this.Vaa = (FFb.A(this), new Set);
                            this.O9 = new Set;
                            this.zSa = () => {
                                this.UY || (this.UY = __c.Kw(this.mc).subscribe(d => {
                                    AFb(() => {
                                        this.Vaa.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.O9.add(c);
                                return () => {
                                    this.O9.delete(c);
                                    this.O9.size <= 0 && this.UY && (this.UY.unsubscribe(), this.UY = void 0)
                                }
                            }
                        }
                    },
                    qFb = class extends __c.Ey {
                        aJ(a, b) {
                            this.F9 || super.aJ(a, b)
                        }
                        dJ(a) {
                            this.F9 = (a = a.text.lz("font-family")["font-family"].values().next().value) && __c.yw(a).id
                        }
                    };
                var GFb = !1,
                    HFb = class {
                        register(a, b) {
                            this.L7.has(a) || (this.L7.set(a, b), GFb || (__c.$R.set(a, sFb(this, b)), GFb = !0))
                        }
                        get(a) {
                            return this.L7.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.eS = b;
                            this.yv = c;
                            this.mc = d;
                            this.Fm = e;
                            this.L7 = new Map;
                            this.ZLa = new FFb(this.mc, this.Fm)
                        }
                    };
                var IFb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && ((b = this.lW.get(a)) === null || b === void 0 || b.reportChanged());
                        return c
                    }
                    get(a) {
                        uFb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        uFb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            (c = this.lW.get(a)) === null || c === void 0 || c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.lW = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var JFb = class {
                        constructor() {
                            this.maa = new IFb;
                            this.refs = new IFb
                        }
                    },
                    KFb = class {
                        getContext(a) {
                            return this.YI.refs.get(a)
                        }
                        qG(a) {
                            return this.YI.maa.get(a)
                        }
                        constructor(a, b, c) {
                            this.YI = a;
                            this.eS = b;
                            this.renderer = c
                        }
                    };
                __c.Cza = {
                    cPa: function(a) {
                        const b = new BFb,
                            c = new JFb,
                            d = new EFb(new DFb(a.Fm), c, b),
                            e = new CFb;
                        a = new HFb(d, e, b, a.mc, a.Fm);
                        return {
                            yv: b,
                            Ccb: new KFb(c, e, d),
                            oV: a,
                            YI: c
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/3da4c31a31ceea3c.js.map