(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        59534: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var ZHb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.tt(a),
                                d = c instanceof __c.ut ? c.Qt() : c;
                            return __c.js(b, e => {
                                e = __c.tt(e);
                                e = e instanceof __c.ut ? __c.XH(e, d) : e;
                                return Math.abs(__c.It(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    $Hb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Ks(b)[0]).join("")
                    },
                    cIb = function(a = "") {
                        a = aIb(a);
                        a = Math.floor(a() * bIb.length);
                        return bIb[a]
                    },
                    dIb = __webpack_require__(875604),
                    eIb =
                    dIb.memo,
                    fIb = dIb.useId;
                var aIb = __webpack_require__(503216);
                var gIb = __webpack_require__(443763),
                    HY = gIb.jsx,
                    hIb = gIb.jsxs;
                var iIb = __webpack_require__,
                    jIb = iIb(993864),
                    IY = iIb.n_x(jIb)();
                __c.kIb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var bIb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.vt(__c.ot(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var lIb = eIb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        MS: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.tt(d);
                        var n = a instanceof __c.ut ? __c.wt(a) : __c.vt(a)
                    } else n = e ? cIb(e) : "#8e8e8e";
                    var p = fIb();
                    switch (l) {
                        case "circle":
                            a = HY("defs", {
                                children: HY("clipPath", {
                                    id: p,
                                    children: HY("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = HY("defs", {
                                children: HY("clipPath", {
                                    id: p,
                                    children: HY("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = HY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: IY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = HY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: IY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = ZHb(n);
                    return HY("span", {
                        role: f,
                        "aria-label": g,
                        className: IY("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: hIb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, HY("text", {
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
                                children: $Hb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var mIb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var nIb = ({
                    borderColor: a,
                    eWa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => HY("span", {
                    className: IY(d, {
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
                __c.oIb = ({
                    name: a,
                    z7a: b,
                    ariaLabel: c,
                    MS: d,
                    backgroundColor: e,
                    borderColor: f,
                    Xr: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = IY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? HY(nIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        eWa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? HY(lIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        MS: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : HY(nIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        eWa: mIb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/8c2cc6726c8288e6.js.map