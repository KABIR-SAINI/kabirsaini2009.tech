(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60205], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var oBb = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    Jd: A5,
                                    c6: A5
                                })
                            }
                            get Jd() {
                                switch (this.c6) {
                                    case "date":
                                        return new jBb(this.Qk, b.language || "en-AU");
                                    case "select":
                                        return new kBb(this.Qk);
                                    case "mention":
                                        return new lBb(this.Qk);
                                    case "embed":
                                        return new mBb(this.Qk);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.c6);
                                }
                            }
                            get c6() {
                                var d;
                                return (d = this.Qk.Dn) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.Qk = (c.A(this), void 0);
                                this.Qk = __c.B(a.Sr(d.sheet,
                                    d.la, d.column))
                            }
                        }
                        return nBb(d => (new c(d)).Jd)
                    },
                    pBb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.mD(a),
                                d = c instanceof __c.nD ? c.nE() : c;
                            return __c.qw(b, e => {
                                e = __c.mD(e);
                                e = e instanceof __c.nD ? __c.HL(e, d) : e;
                                return Math.abs(__c.KL(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    qBb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.ix(b)[0]).join("")
                    },
                    tBb = function(a = "") {
                        a = rBb(a);
                        a = Math.floor(a() * sBb.length);
                        return sBb[a]
                    },
                    vBb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : uBb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    xBb = function() {
                        const a = B5(() => new Map, []);
                        return {
                            lNa: b => {
                                if (a.has(b)) return __c.B(a.get(b));
                                const c = wBb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    yBb = function(a, b) {
                        return B5(() => {
                                const c = new Map;
                                return d => {
                                    if (c.has(d)) return __c.B(c.get(d));
                                    const e = a(d);
                                    c.set(d, e);
                                    return e
                                }
                            },
                            b)
                    },
                    FBb = function({
                        children: a,
                        keyFrame: b,
                        KAa: c,
                        ariaLive: d,
                        Wsa: e = !1,
                        gGa: f,
                        P7: g,
                        sKa: h,
                        f4a: k,
                        wna: l,
                        bpa: m,
                        d4a: n,
                        VXa: p
                    }) {
                        const {
                            lNa: q
                        } = xBb(), {
                            tMa: r,
                            yUa: t
                        } = zBb(b, a), v = yBb(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return C5("div", {
                            className: D5(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: C5("div", {
                                className: D5("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => C5(ABb, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => C5(BBb.Provider, {
                                        value: y,
                                        children: C5("div", {
                                            className: D5("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === CBb || y === DBb || y === EBb,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && C5(ABb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => C5(BBb.Provider, {
                                        value: u,
                                        children: C5("div", {
                                            className: D5("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === CBb || u === DBb || u === EBb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    zBb = function(a, b) {
                        const [c, d] = GBb(() => [{
                            key: a,
                            element: b
                        }]);
                        HBb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = E5(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            tMa: c,
                            yUa: e
                        }
                    },
                    IBb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    MBb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return C5(JBb, {
                                    Gq: a.user ? b.BQ(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.JMa(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.epa.YP.get(a.url);
                                return C5(KBb, {
                                    icon: a,
                                    HPa: c
                                });
                            case "date":
                                return a.text ? void 0 : C5(LBb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    OBb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return C5(NBb, {
                                    selected: !!b.Lya
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    F5 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key ===
                            "Meta" || ["91", "224"].includes(a.code) : !1
                    },
                    PBb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    QBb = function(a, b, c) {
                        if (c) {
                            var d = vBb(c.images, "medium"),
                                e = vBb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = G5(() => a.bV.set(b, e));
                                f.onerror = G5(() => a.bV.set(b, void 0));
                                !f.complete && c.complete ? a.bV.set(b, d) : c.src = ""
                            }
                        } else a.bV.set(b, void 0)
                    },
                    SBb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Ah ? a.Ah.D6a(new RBb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.hk.content.title;
                                        h ? (H5(() => a.DBa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        H5(() => a.DBa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    I5 = __webpack_require__(519427),
                    G5 = I5.action,
                    TBb = I5.comparer,
                    A5 = I5.computed,
                    UBb = I5.observable,
                    J5 = I5.ObservableMap,
                    H5 = I5.runInAction;
                var nBb = __webpack_require__(635872).Om;
                var K5 = __webpack_require__(875604),
                    VBb = K5.createContext,
                    wBb = K5.createRef,
                    L5 = K5.memo,
                    E5 = K5.useCallback,
                    HBb = K5.useEffect,
                    WBb = K5.useId,
                    XBb = K5.useLayoutEffect,
                    B5 = K5.useMemo,
                    GBb = K5.useState;
                var rBb = __webpack_require__(503216);
                var YBb = __webpack_require__(443763),
                    C5 = YBb.jsx,
                    M5 = YBb.jsxs;
                var ZBb = __webpack_require__,
                    $Bb = ZBb(993864),
                    D5 = ZBb.n_x($Bb)();
                var ABb = __webpack_require__(460876).Z;
                var N5 = __webpack_require__(223826),
                    EBb = N5.Wj,
                    CBb = N5.Ix,
                    DBb = N5.$r;
                var O5 = __webpack_require__(446474).Pi;
                var aCb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                user: A5,
                                brand: A5
                            })
                        }
                        get text() {
                            return this.Jd.text
                        }
                        get user() {
                            return this.Jd.user
                        }
                        get brand() {
                            return this.Jd.brand
                        }
                        constructor(a) {
                            this.Jd = a;
                            this.type = (aCb.A(this), "mention")
                        }
                    },
                    bCb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                url: A5
                            })
                        }
                        get text() {
                            return this.Jd.text
                        }
                        get url() {
                            return this.Jd.url
                        }
                        constructor(a) {
                            this.Jd = a;
                            this.type = (bCb.A(this), "embed")
                        }
                    },
                    cCb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                language: A5,
                                style: A5,
                                date: A5
                            })
                        }
                        get text() {
                            return this.Jd.text
                        }
                        get language() {
                            return this.Jd.language
                        }
                        get style() {
                            return this.Jd.style
                        }
                        get date() {
                            return this.Jd.date
                        }
                        constructor(a) {
                            this.Jd =
                                a;
                            this.type = (cCb.A(this), "date")
                        }
                    },
                    dCb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                options: A5,
                                Ld: A5,
                                lK: A5
                            })
                        }
                        get text() {
                            return this.Jd.text
                        }
                        get options() {
                            return this.Jd.options.map(a => a)
                        }
                        get Ld() {
                            return this.Jd.Ld
                        }
                        get lK() {
                            var a;
                            return (a = this.Jd.options.first(b => b.id === this.Jd.Ld)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Jd = a;
                            this.type = (dCb.A(this), "select")
                        }
                    },
                    eCb = nBb(a => {
                        switch (a.type) {
                            case "mention":
                                return new aCb(a);
                            case "embed":
                                return new bCb(a);
                            case "date":
                                return new cCb(a);
                            case "select":
                                return new dCb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var jBb = class {
                        static A(a) {
                            P(a, {
                                style: A5,
                                date: A5,
                                text: A5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.Kl.Fi.type === 2 ? this.Kl.Fi.date : void 0) || (a = new Date, a = __c.xA(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                aOa: a.getHours(),
                                SRa: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Kl.Qv
                        }
                        constructor(a, b) {
                            this.Kl = a;
                            this.language = b;
                            this.type = (jBb.A(this), "date")
                        }
                    },
                    fCb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    kBb = class {
                        static A(a) {
                            P(a, {
                                options: A5,
                                Ld: A5,
                                lK: A5,
                                text: A5,
                                Cqa: A5({
                                    equals: TBb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.Cqa.map((a, b) => new fCb(a, b))
                        }
                        get Ld() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get lK() {
                            var a;
                            return (a = this.options.find(b => b.id === this.Ld)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Kl.Qv
                        }
                        get Cqa() {
                            var a, b;
                            __c.A(((a = this.Kl.Dn) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Kl.Dn) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Kl = a;
                            this.type = (kBb.A(this), "select")
                        }
                    },
                    lBb = class {
                        static A(a) {
                            P(a, {
                                cG: A5
                            })
                        }
                        get text() {
                            return this.cG ? this.cG.text : ""
                        }
                        get user() {
                            return this.cG ? this.cG.user : ""
                        }
                        get brand() {
                            return this.cG ? this.cG.brand : ""
                        }
                        get cG() {
                            if (this.Kl.Fi.type !== 9) return __c.A(this.Kl.Fi.type === 7), this.Kl.Fi ? this.Kl.Fi.value[0] : void 0
                        }
                        constructor(a) {
                            this.Kl = a;
                            this.type = (lBb.A(this), "mention")
                        }
                    },
                    mBb = class {
                        static A(a) {
                            P(a, {
                                mQ: A5
                            })
                        }
                        get text() {
                            return this.mQ ? this.mQ.embed.text : ""
                        }
                        get url() {
                            return this.mQ ?
                                this.mQ.embed.url : ""
                        }
                        get mQ() {
                            if (this.Kl.Fi.type !== 9) return __c.A(this.Kl.Fi.type === 8), this.Kl.Fi ? this.Kl.Fi.value[0] : void 0
                        }
                        constructor(a) {
                            this.Kl = a;
                            this.type = (mBb.A(this), "embed")
                        }
                    };
                var gCb = class {
                    z9(a) {
                        this.C6.z9(a)
                    }
                    WT(a, b) {
                        this.C6.WT(a, b)
                    }
                    BQ(a) {
                        return this.C6.BQ(a)
                    }
                    x9(a) {
                        this.epa.x9(a)
                    }
                    constructor(a, b, c, d) {
                        this.C6 = a;
                        this.epa = b;
                        this.ib = c;
                        this.SF = d;
                        this.jia = new __c.Nab;
                        this.JMa = e => __c.Xva(this.jia, e)
                    }
                };
                var hCb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var sBb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                        try {
                            return __c.cD(__c.hD(a))
                        } catch (b) {
                            return "#8e8e8e"
                        }
                    }),
                    uBb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Ek * hCb[a];
                var iCb = L5(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        Jla: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.mD(d);
                        var n = a instanceof __c.nD ? __c.pD(a) : __c.cD(a)
                    } else n = e ? tBb(e) : "#8e8e8e";
                    var p = WBb();
                    switch (l) {
                        case "circle":
                            a = C5("defs", {
                                children: C5("clipPath", {
                                    id: p,
                                    children: C5("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = C5("defs", {
                                children: C5("clipPath", {
                                    id: p,
                                    children: C5("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = C5("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: D5("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = C5("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: D5("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    n = pBb(n);
                    return C5("span", {
                        role: f,
                        "aria-label": g,
                        className: D5("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: M5("svg", {
                            className: h,
                            style: k,
                            children: [a, p, C5("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: qBb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var jCb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var kCb = ({
                    borderColor: a,
                    lxa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => C5("span", {
                    className: D5(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                var lCb = ({
                    name: a,
                    g1a: b,
                    ariaLabel: c,
                    Jla: d,
                    backgroundColor: e,
                    borderColor: f,
                    Gq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = D5("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? C5(kCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        lxa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? C5(iCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        Jla: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : C5(kCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        lxa: jCb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                var mCb = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.116 12.366a1.25 1.25 0 0 1 1.768 0l5.586 5.586a.75.75 0 0 0 1.06 0l5.586-5.586a1.25 1.25 0 0 1 1.768 1.768l-5.586 5.586a3.25 3.25 0 0 1-4.596 0l-5.586-5.586a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"/></svg>';
                var nCb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M10.964 5.972 8.177 8.759a.25.25 0 0 1-.354 0L5.036 5.972a.75.75 0 1 0-1.06 1.06L6.762 9.82a1.75 1.75 0 0 0 2.475 0l2.787-2.788a.75.75 0 1 0-1.06-1.06"/></svg>';
                var oCb = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"/></svg>';
                var pCb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m16.384 9.225-4.207 4.207a.25.25 0 0 1-.353 0L7.623 9.224a.75.75 0 0 0-1.059.002.75.75 0 0 0-.002 1.059l4.201 4.21c.681.68 1.787.678 2.47-.005l4.207-4.207a.75.75 0 0 0 .002-1.059.75.75 0 0 0-1.058.002"/></svg>';
                var qCb = __c.PS({
                    Xq: oCb,
                    small: nCb,
                    medium: pCb,
                    XC: mCb
                });
                var BBb = VBb(void 0);
                var rCb = Number.parseInt("300ms", 10),
                    sCb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    tCb = L5(function({
                        IF: a = !1,
                        children: b,
                        keyFrame: c,
                        KAa: d,
                        wna: e = "hidden",
                        bpa: f = "hidden",
                        ariaLive: g,
                        Wsa: h,
                        e7a: k = "none"
                    }) {
                        a = __c.nb().Wc && !a;
                        return FBb({
                            children: b,
                            keyFrame: c,
                            KAa: d,
                            ariaLive: g,
                            wna: e,
                            bpa: f,
                            Wsa: h,
                            gGa: a ? rCb : 0,
                            sKa: D5({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            VXa: sCb
                        })
                    });
                var uCb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var vCb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var wCb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var xCb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var yCb = L5(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.lK,
                            f = a.SJa,
                            g = a.XEa,
                            h = a.lFa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = D5({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return M5("span", {
                            className: D5(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [C5("span", {
                                className: D5("_2Lr6pQ", p),
                                children: C5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), M5("span", {
                                className: D5("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, C5("span", {
                                    className: D5("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? C5("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    JBb = L5(a => {
                        const b = a.backgroundColor,
                            c = a.Gq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return C5(tCb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? C5(lCb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Gq: c,
                                borderColor: c ? void 0 : b
                            }) : C5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: xCb
                                }
                            })
                        })
                    }),
                    KBb = L5(a => {
                        const b = a.icon;
                        a = a.HPa;
                        return C5(tCb, {
                            keyFrame: b ?
                                "favicon" : "placeholder",
                            children: b ? C5("span", {
                                className: "_tFJqA",
                                children: C5("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : C5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? wCb : vCb
                                }
                            })
                        })
                    }),
                    LBb = L5(() => C5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: uCb
                        }
                    })),
                    NBb = L5(({
                        selected: a
                    }) => C5("div", {
                        className: D5("whph4A", {
                            zgzjww: a
                        }),
                        children: C5(qCb, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    zCb = O5(a => {
                        const {
                            Jd: b,
                            Lya: c,
                            Rca: d,
                            mode: e = "viewable",
                            measureRef: f,
                            ym: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.ib(b.url) : void 0,
                            [l, m] = GBb(!1),
                            n = E5(t => m(F5(t)), [m]),
                            p = E5(t => m(!F5(t)), [m]),
                            q = E5(t => {
                                m(F5(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = E5(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        HBb(() => {
                            H5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.z9(b.user);
                                        break;
                                    case "embed":
                                        d.x9(b.url)
                                }
                            })
                        }, [b, d]);
                        XBb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return C5(yCb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            SJa: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: IBb(b),
                            lK: b.lK,
                            XEa: MBb(b, d),
                            lFa: OBb(b, {
                                Lya: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var ACb = __c.M(() => ({
                    G7a: __c.LO(11),
                    mode: __c.H("A?", 1, "BY_USER_IDS"),
                    PYa: __c.KO(1)
                }));
                var BCb = class {
                        static A(a) {
                            P(a, {
                                VI: UBb.shallow,
                                Spa: G5
                            })
                        }
                        BQ(a) {
                            return this.Fla.BQ(a)
                        }
                        z9(a) {
                            this.iia.has(a) || this.VI.has(a) || (this.VI.add(a), this.AJa())
                        }
                        WT(a, b) {
                            this.iia.has(a) || (this.iia.set(a, b), this.VI.delete(a), QBb(this.Fla, a, b))
                        }
                        async Spa() {
                            if (this.VI.size !== 0) {
                                var a = [...this.VI.values()];
                                this.VI.clear();
                                if (this.Hla) {
                                    var b = await this.Hla;
                                    await Promise.all(PBb(a).map(async c => {
                                        const d = new ACb({
                                                PYa: c
                                            }),
                                            {
                                                y1a: e
                                            } = await b.m6a(d);
                                        H5(() => c.forEach(f => this.WT(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.WT(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.Hla = a;
                            this.iia = (BCb.A(this), new J5);
                            this.VI = new Set;
                            this.Fla = new CCb;
                            this.AJa = __c.Ec(() => this.Spa(), 200);
                            H5(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.WT(d, c))
                            })
                        }
                    },
                    CCb = class {
                        BQ(a) {
                            return this.bV.get(a)
                        }
                        constructor() {
                            this.bV = new J5
                        }
                    };
                var RBb = __c.M(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Z("extension", 3),
                    Eya: __c.GO("revision", 5),
                    version: __c.GO("version", 2),
                    l7a: __c.GO("imagesetsLimit", 6)
                }));
                var DCb = class {
                    static A(a) {
                        P(a, {
                            BLa: G5
                        })
                    }
                    async BLa(a) {
                        if (this.Ah) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await SBb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Ah = a;
                        this.DBa = (DCb.A(this), new J5);
                        this.promises = new Map
                    }
                };
                var ECb = class {
                    static A(a) {
                        P(a, {
                            YP: UBb.shallow
                        })
                    }
                    async x9(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.SF) === null || d === void 0 ? void 0 : d.eW(a));
                            c = e === null || e === void 0 ? void 0 : e.ALa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = G5(() => this.YP.set(a, c)), b.onerror = G5(() => this.YP.set(a, void 0))) : H5(() => this.YP.set(a, void 0))
                    }
                    constructor(a) {
                        this.SF = a;
                        this.YP = (ECb.A(this), new Map)
                    }
                };
                __c.tsa = {
                    VOa: function(a) {
                        const b = a.document,
                            c = a.Ah,
                            d = a.ib,
                            e = a.SF;
                        var f = a.Gla;
                        const g = a.Oe,
                            h = a.PA,
                            k = a.m4;
                        a = a.z7a;
                        f = new BCb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new ECb(e);
                        new DCb(c);
                        const l = new gCb(f, a, d, e),
                            m = oBb(k, b);
                        g.hn.x5 = O5(({
                            item: p,
                            measureRef: q
                        }) => {
                            const r = B5(() => eCb(p.Jd), [p.Jd]);
                            return C5(zCb, {
                                Jd: r,
                                Rca: l,
                                measureRef: q
                            })
                        });
                        const n = O5(({
                            context: p,
                            ym: q
                        }) => {
                            const r = B5(() => __c.B(m(p.container)), [p]);
                            XBb(q, [q, p.container.column.width]);
                            return C5(zCb, {
                                Jd: r,
                                Rca: l,
                                ym: q
                            })
                        });
                        h.kka = ({
                                context: p,
                                ym: q
                            }) =>
                            ({
                                type: "react",
                                node: C5(n, {
                                    context: p,
                                    ym: q
                                })
                            });
                        return {
                            Rca: l
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/26ec46e6748b1503.js.map