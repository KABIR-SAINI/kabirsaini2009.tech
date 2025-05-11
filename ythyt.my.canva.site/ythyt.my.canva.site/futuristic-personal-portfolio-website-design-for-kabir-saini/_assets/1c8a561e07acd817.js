(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(59534);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var Q = __c.Q;
                var i_b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : h_b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    o_b = function(a, b) {
                        class c {
                            static A(d) {
                                Q(d, {
                                    Ze: H4,
                                    Kla: H4
                                })
                            }
                            get Ze() {
                                switch (this.Kla) {
                                    case "date":
                                        return new j_b(this.Io, b.language || "en-AU");
                                    case "select":
                                        return new k_b(this.Io);
                                    case "mention":
                                        return new l_b(this.Io);
                                    case "embed":
                                        return new m_b(this.Io);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.Kla);
                                }
                            }
                            get Kla() {
                                var d;
                                return (d = this.Io.zr) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.Io = (c.A(this), void 0);
                                this.Io = __c.D(a.jx(d.sheet, d.xa, d.column))
                            }
                        }
                        return n_b(d => (new c(d)).Ze)
                    },
                    q_b = function() {
                        const a = I4(() => new Map, []);
                        return {
                            Efb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = p_b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    r_b = function(a, b) {
                        return I4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    y_b = function({
                        children: a,
                        keyFrame: b,
                        y_a: c,
                        ariaLive: d,
                        zQa: e = !1,
                        j7a: f,
                        foa: g,
                        Ybb: h,
                        JDb: k,
                        FJa: l,
                        HLa: m,
                        HDb: n,
                        hvb: p
                    }) {
                        const {
                            Efb: q
                        } = q_b(), {
                            Eeb: r,
                            tqb: t
                        } = s_b(b, a), v = r_b(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return J4("div", {
                            className: K4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: J4("div", {
                                className: K4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => J4(t_b, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => J4(u_b.Provider, {
                                        value: y,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === v_b || y === w_b || y === x_b,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && J4(t_b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => J4(u_b.Provider, {
                                        value: u,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === v_b || u === w_b || u === x_b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    s_b = function(a,
                        b) {
                        const [c, d] = z_b(() => [{
                            key: a,
                            element: b
                        }]);
                        A_b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = L4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            Eeb: c,
                            tqb: e
                        }
                    },
                    B_b = function(a) {
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
                    F_b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return J4(C_b, {
                                    Xr: a.user ? b.d1(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Veb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.KLa.l0.get(a.url);
                                return J4(D_b, {
                                    icon: a,
                                    Kib: c
                                });
                            case "date":
                                return a.text ? void 0 : J4(E_b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    H_b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return J4(G_b, {
                                    selected: !!b.YXa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    M4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    I_b = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    J_b = function(a, b, c) {
                        if (c) {
                            var d = i_b(c.images, "medium"),
                                e = i_b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = N4(() => a.D7.set(b, e));
                                f.onerror = N4(() => a.D7.set(b, void 0));
                                !f.complete && c.complete ? a.D7.set(b, d) : c.src = ""
                            }
                        } else a.D7.set(b, void 0)
                    },
                    L_b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.jh ? a.jh.CGb(new K_b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.ag.content.title;
                                        h ? (O4(() => a.K0a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        O4(() => a.K0a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    h_b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Hy * __c.kIb[a],
                    P4 = __webpack_require__(519427),
                    N4 = P4.action,
                    M_b = P4.comparer,
                    H4 = P4.computed,
                    N_b = P4.observable,
                    Q4 = P4.ObservableMap,
                    O4 = P4.runInAction;
                var n_b = __webpack_require__(635872).Om;
                var R4 = __webpack_require__(875604),
                    O_b = R4.createContext,
                    p_b = R4.createRef,
                    S4 = R4.memo,
                    L4 = R4.useCallback,
                    A_b = R4.useEffect,
                    P_b = R4.useLayoutEffect,
                    I4 = R4.useMemo,
                    z_b = R4.useState;
                var Q_b = __webpack_require__(443763),
                    J4 = Q_b.jsx,
                    R_b = Q_b.jsxs;
                var S_b = __webpack_require__,
                    T_b = S_b(993864),
                    K4 = S_b.n_x(T_b)();
                var t_b = __webpack_require__(460876).Z;
                var T4 = __webpack_require__(223826),
                    x_b = T4.Wj,
                    v_b = T4.Ix,
                    w_b = T4.$r;
                var U4 = __webpack_require__(446474).Pi;
                var U_b = class {
                        static A(a) {
                            Q(a, {
                                text: H4,
                                user: H4,
                                brand: H4
                            })
                        }
                        get text() {
                            return this.Ze.text
                        }
                        get user() {
                            return this.Ze.user
                        }
                        get brand() {
                            return this.Ze.brand
                        }
                        constructor(a) {
                            this.Ze = a;
                            this.type = (U_b.A(this), "mention")
                        }
                    },
                    V_b = class {
                        static A(a) {
                            Q(a, {
                                text: H4,
                                url: H4
                            })
                        }
                        get text() {
                            return this.Ze.text
                        }
                        get url() {
                            return this.Ze.url
                        }
                        constructor(a) {
                            this.Ze = a;
                            this.type = (V_b.A(this), "embed")
                        }
                    },
                    W_b = class {
                        static A(a) {
                            Q(a, {
                                text: H4,
                                language: H4,
                                style: H4,
                                date: H4
                            })
                        }
                        get text() {
                            return this.Ze.text
                        }
                        get language() {
                            return this.Ze.language
                        }
                        get style() {
                            return this.Ze.style
                        }
                        get date() {
                            return this.Ze.date
                        }
                        constructor(a) {
                            this.Ze =
                                a;
                            this.type = (W_b.A(this), "date")
                        }
                    },
                    X_b = class {
                        static A(a) {
                            Q(a, {
                                text: H4,
                                options: H4,
                                Ff: H4,
                                jT: H4
                            })
                        }
                        get text() {
                            return this.Ze.text
                        }
                        get options() {
                            return this.Ze.options.map(a => a)
                        }
                        get Ff() {
                            return this.Ze.Ff
                        }
                        get jT() {
                            var a;
                            return (a = this.Ze.options.first(b => b.id === this.Ze.Ff)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ze = a;
                            this.type = (X_b.A(this), "select")
                        }
                    },
                    Y_b = n_b(a => {
                        switch (a.type) {
                            case "mention":
                                return new U_b(a);
                            case "embed":
                                return new V_b(a);
                            case "date":
                                return new W_b(a);
                            case "select":
                                return new X_b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var j_b = class {
                        static A(a) {
                            Q(a, {
                                style: H4,
                                date: H4,
                                text: H4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.Gp.Zk.type === 2 ? this.Gp.Zk.date : void 0) || (a = new Date, a = __c.fA(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Mgb: a.getHours(),
                                Dlb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Gp.EB
                        }
                        constructor(a, b) {
                            this.Gp = a;
                            this.language = b;
                            this.type = (j_b.A(this), "date")
                        }
                    },
                    Z_b = class {
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
                    k_b = class {
                        static A(a) {
                            Q(a, {
                                options: H4,
                                Ff: H4,
                                jT: H4,
                                text: H4,
                                hNa: H4({
                                    equals: M_b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.hNa.map((a, b) => new Z_b(a, b))
                        }
                        get Ff() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get jT() {
                            var a;
                            return (a = this.options.find(b => b.id === this.Ff)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Gp.EB
                        }
                        get hNa() {
                            var a, b;
                            __c.C(((a = this.Gp.zr) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Gp.zr) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Gp = a;
                            this.type = (k_b.A(this), "select")
                        }
                    },
                    l_b = class {
                        static A(a) {
                            Q(a, {
                                PN: H4
                            })
                        }
                        get text() {
                            return this.PN ? this.PN.text : ""
                        }
                        get user() {
                            return this.PN ? this.PN.user : ""
                        }
                        get brand() {
                            return this.PN ? this.PN.brand : ""
                        }
                        get PN() {
                            if (this.Gp.Zk.type !== 9) return __c.C(this.Gp.Zk.type === 7), this.Gp.Zk ? this.Gp.Zk.value[0] : void 0
                        }
                        constructor(a) {
                            this.Gp = a;
                            this.type = (l_b.A(this), "mention")
                        }
                    },
                    m_b = class {
                        static A(a) {
                            Q(a, {
                                J0: H4
                            })
                        }
                        get text() {
                            return this.J0 ? this.J0.embed.text : ""
                        }
                        get url() {
                            return this.J0 ?
                                this.J0.embed.url : ""
                        }
                        get J0() {
                            if (this.Gp.Zk.type !== 9) return __c.C(this.Gp.Zk.type === 8), this.Gp.Zk ? this.Gp.Zk.value[0] : void 0
                        }
                        constructor(a) {
                            this.Gp = a;
                            this.type = (m_b.A(this), "embed")
                        }
                    };
                var $_b = class {
                    xqa(a) {
                        this.Ama.xqa(a)
                    }
                    S5(a, b) {
                        this.Ama.S5(a, b)
                    }
                    d1(a) {
                        return this.Ama.d1(a)
                    }
                    uqa(a) {
                        this.KLa.uqa(a)
                    }
                    constructor(a, b, c, d) {
                        this.Ama = a;
                        this.KLa = b;
                        this.Ab = c;
                        this.pF = d;
                        this.BDa = new __c.swb;
                        this.Veb = e => __c.FJa(this.BDa, e)
                    }
                };
                var u_b = O_b(void 0);
                var a0b = Number.parseInt("300ms", 10),
                    b0b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    c0b = S4(function({
                        Ss: a = !1,
                        children: b,
                        keyFrame: c,
                        y_a: d,
                        FJa: e = "hidden",
                        HLa: f = "hidden",
                        ariaLive: g,
                        zQa: h,
                        gHb: k = "none"
                    }) {
                        a = __c.sb() && !a;
                        return y_b({
                            children: b,
                            keyFrame: c,
                            y_a: d,
                            ariaLive: g,
                            FJa: e,
                            HLa: f,
                            zQa: h,
                            j7a: a ? a0b : 0,
                            Ybb: K4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            hvb: b0b
                        })
                    });
                var d0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var e0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var f0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var g0b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var h0b = S4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.jT,
                            f = a.hbb,
                            g = a.E5a,
                            h = a.f6a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = K4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return R_b("span", {
                            className: K4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [J4("span", {
                                className: K4("_2Lr6pQ", p),
                                children: J4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), R_b("span", {
                                className: K4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, J4("span", {
                                    className: K4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? J4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    C_b = S4(a => {
                        const b = a.backgroundColor,
                            c = a.Xr;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return J4(c0b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? J4(__c.oIb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Xr: c,
                                borderColor: c ? void 0 : b
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: g0b
                                }
                            })
                        })
                    }),
                    D_b = S4(a => {
                        const b = a.icon;
                        a = a.Kib;
                        return J4(c0b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? J4("span", {
                                className: "_tFJqA",
                                children: J4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? f0b : e0b
                                }
                            })
                        })
                    }),
                    E_b = S4(() => J4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: d0b
                        }
                    })),
                    G_b = S4(({
                        selected: a
                    }) => J4("div", {
                        className: K4("whph4A", {
                            zgzjww: a
                        }),
                        children: J4(__c.ML, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    i0b = U4(a => {
                        const {
                            Ze: b,
                            YXa: c,
                            Xwa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            vq: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Ab(b.url) : void 0,
                            [l, m] = z_b(!1),
                            n = L4(t => m(M4(t)), [m]),
                            p = L4(t => m(!M4(t)), [m]),
                            q = L4(t => {
                                m(M4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = L4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        A_b(() => {
                            O4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.xqa(b.user);
                                        break;
                                    case "embed":
                                        d.uqa(b.url)
                                }
                            })
                        }, [b, d]);
                        P_b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return J4(h0b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            hbb: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: B_b(b),
                            jT: b.jT,
                            E5a: F_b(b, d),
                            f6a: H_b(b, {
                                YXa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var j0b = __c.L(() => ({
                    QHb: __c.VM(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    dwb: __c.UM(1)
                }));
                var k0b = class {
                        static A(a) {
                            Q(a, {
                                pR: N_b.shallow,
                                xMa: N4
                            })
                        }
                        d1(a) {
                            return this.NHa.d1(a)
                        }
                        xqa(a) {
                            this.ADa.has(a) || this.pR.has(a) || (this.pR.add(a), this.Kab())
                        }
                        S5(a, b) {
                            this.ADa.has(a) || (this.ADa.set(a, b), this.pR.delete(a), J_b(this.NHa, a, b))
                        }
                        async xMa() {
                            if (this.pR.size !== 0) {
                                var a = [...this.pR.values()];
                                this.pR.clear();
                                if (this.OHa) {
                                    var b = await this.OHa;
                                    await Promise.all(I_b(a).map(async c => {
                                        const d = new j0b({
                                                dwb: c
                                            }),
                                            {
                                                xAb: e
                                            } = await b.eGb(d);
                                        O4(() => c.forEach(f => this.S5(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.S5(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.OHa = a;
                            this.ADa = (k0b.A(this), new Q4);
                            this.pR = new Set;
                            this.NHa = new l0b;
                            this.Kab = __c.Pc(() => this.xMa(), 200);
                            O4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.S5(d, c))
                            })
                        }
                    },
                    l0b = class {
                        d1(a) {
                            return this.D7.get(a)
                        }
                        constructor() {
                            this.D7 = new Q4
                        }
                    };
                var K_b = __c.L(() => ({
                    id: __c.W("id", 1),
                    extension: __c.Y("extension", 3),
                    RXa: __c.QM("revision", 5),
                    version: __c.QM("version", 2),
                    vHb: __c.QM("imagesetsLimit", 6)
                }));
                var m0b = class {
                    static A(a) {
                        Q(a, {
                            Ddb: N4
                        })
                    }
                    async Ddb(a) {
                        if (this.jh) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await L_b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.jh = a;
                        this.K0a = (m0b.A(this), new Q4);
                        this.promises = new Map
                    }
                };
                var n0b = class {
                    static A(a) {
                        Q(a, {
                            l0: N_b.shallow
                        })
                    }
                    async uqa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.pF) === null || d === void 0 ? void 0 : d.X8(a));
                            c = e === null || e === void 0 ? void 0 : e.Cdb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = N4(() => this.l0.set(a, c)), b.onerror = N4(() => this.l0.set(a, void 0))) : O4(() => this.l0.set(a, void 0))
                    }
                    constructor(a) {
                        this.pF = a;
                        this.l0 = (n0b.A(this), new Map)
                    }
                };
                __c.oGa = {
                    Khb: function(a) {
                        const b = a.document,
                            c = a.jh,
                            d = a.Ab,
                            e = a.pF;
                        var f = a.p9;
                        const g = a.ud,
                            h = a.QA,
                            k = a.jY;
                        a = a.IHb;
                        f = new k0b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new n0b(e);
                        new m0b(c);
                        const l = new $_b(f, a, d, e),
                            m = o_b(k, b);
                        g.Yq.Xka = U4(({
                            item: p,
                            measureRef: q
                        }) => {
                            const r = I4(() => Y_b(p.Ze), [p.Ze]);
                            return J4(i0b, {
                                Ze: r,
                                Xwa: l,
                                measureRef: q
                            })
                        });
                        const n = U4(({
                            context: p,
                            vq: q
                        }) => {
                            const r = I4(() => __c.D(m(p.container)), [p]);
                            P_b(q, [q, p.container.column.width]);
                            return J4(i0b, {
                                Ze: r,
                                Xwa: l,
                                vq: q
                            })
                        });
                        h.YFa = ({
                                context: p,
                                vq: q
                            }) =>
                            ({
                                type: "react",
                                node: J4(n, {
                                    context: p,
                                    vq: q
                                })
                            });
                        return {
                            Xwa: l
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/1c8a561e07acd817.js.map