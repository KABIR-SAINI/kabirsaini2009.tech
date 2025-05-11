(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [28646], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var DO = __c.DO;
                var X = __c.X;
                var M = __c.M;
                var Ga = __c.Ga;
                var bGb = function(a, b) {
                        var c = $Fb,
                            d = aGb;
                        a.handle("SET_CONFIG", async e => {
                            if (e === void 0) throw new c7({
                                code: "internal_error",
                                message: "SET_CONFIG: request cannot be undefined."
                            });
                            e = c.deserialize(e);
                            e = await b(e);
                            if (d) return d.serialize(e)
                        })
                    },
                    eGb = async function(a, b) {
                        a = await a.jna.request("RENDER_ELEMENT", cGb.serialize(b));
                        if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                        if (a.value == null) throw Error("RENDER_ELEMENT: Result cannot be empty");
                        return dGb.deserialize(a.value)
                    },
                    fGb = function(a) {
                        bGb(a.jna, b => a.handler.LNa(b))
                    },
                    hGb = async function(a, b) {
                        const c = b.requestId,
                            d = b.path;
                        b = b.payload;
                        const e = a.requestHandler.get(d);
                        if (e) {
                            a.uS.WO.send({
                                type: "ack",
                                requestId: c
                            });
                            var f = setInterval(() => a.uS.WO.send({
                                type: "ack",
                                requestId: c
                            }), 9E3);
                            try {
                                var g = await e(b);
                                clearInterval(f);
                                a.uS.WO.send({
                                    type: "response",
                                    requestId: c,
                                    payload: g
                                })
                            } catch (k) {
                                clearInterval(f);
                                g = "internal_error";
                                b = "Something went wrong on our end, if this issue persists please contact us.";
                                if (k instanceof c7) {
                                    var h = k;
                                    k.code ===
                                        "internal_error" ? a.L.Gb(k, {
                                            Te: "Internal error in comms handler",
                                            tags: new Map([
                                                ["type", "request"],
                                                ["path", d]
                                            ])
                                        }) : (g = k.code, b = k.mUa)
                                } else a.IUa ? a.L.Gb(k, {
                                    Te: "Unexpected error type thrown from comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : a.RJa.error(k);
                                g = gGb(a.uS, c, g, b);
                                g.ok || a.L.zP(g.error, {
                                    Te: "unable to send error response",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                })
                            }
                            if (h != null)
                                for (const k of a.fLa) try {
                                    k(h)
                                } catch (l) {
                                    a.L.mV(l, {
                                        Te: "Error executing errorObserver"
                                    })
                                }
                        } else h = gGb(a.uS,
                            c, "internal_error", `No request handler configured for path: "${d}".`), h.ok || a.L.zP(h.error, {
                            Te: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                    },
                    gGb = function(a, b, c, d) {
                        return a.WO.send({
                            type: "error",
                            requestId: b,
                            code: c,
                            message: d
                        })
                    },
                    jGb = function({
                        src: a,
                        srcdoc: b,
                        sandbox: c
                    }) {
                        if (b.length !== 0 || !c.contains("allow-same-origin")) return iGb;
                        a = (new URL(a)).origin;
                        return a === "null" ? iGb : {
                            mia: a,
                            qza: a
                        }
                    },
                    mGb = async function(a, b, c, {
                        addEventListener: d,
                        removeEventListener: e
                    } = window) {
                        const f =
                            new kGb(6E4),
                            g = jGb(c),
                            h = c.contentWindow;
                        if (!h) throw new c7({
                            code: "internal_error",
                            message: "contentWindow is missing from iFrame"
                        });
                        c = ({
                            data: k,
                            source: l,
                            origin: m
                        }) => {
                            var n;
                            (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.mia ? lGb(m) || b.info("received message event from an unexpected origin", {
                                extra: new Map([
                                    ["expected", g.mia],
                                    ["actual", m]
                                ])
                            }) : l !== h ? l !== window && b.info("source and content window do not match", {
                                extra: new Map([
                                    ["data.source", k === null || k === void 0 ? void 0 :
                                        k.source
                                    ]
                                ])
                            }) : (l = k ? k.source ? k.source !== "iframe" ? Ga("invalid source") : (0, __c.Fa)() : Ga("'source' is missing in MessageEvent data object") : Ga("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                                source: "parent"
                            }, g.qza, [a]), f.resolve(void 0)) : b.u4(l.error, {
                                extra: new Map([
                                    ["data.source", k === null || k === void 0 ? void 0 : k.source]
                                ])
                            })))
                        };
                        d("message", c);
                        try {
                            await f.promise()
                        } finally {
                            e("message", c)
                        }
                    },
                    lGb = function(a) {
                        return nGb.some(b => a.endsWith(b))
                    },
                    sGb = async function(a, b, c) {
                        const {
                            port1: d,
                            port2: e
                        } = new MessageChannel;
                        var f = new oGb(d, a.L);
                        await mGb(e, a.L, b, window);
                        const g = new pGb(f, {
                            LNa: h => {
                                d7(() => {
                                    const k = h.width,
                                        l = h.height;
                                    c.z$.Kf.set("config", {
                                        type: "string",
                                        value: h.config
                                    });
                                    qGb(c, {
                                        width: k,
                                        height: l
                                    })
                                });
                                return new aGb
                            }
                        });
                        f = rGb(() => c.z$.Kf.get("config"), async h => {
                            let k;
                            h && (__c.A(h.type === "string"), k = h.value);
                            const {
                                width: l,
                                height: m
                            } = await eGb(g, {
                                config: k
                            });
                            d7(() => {
                                qGb(c, {
                                    width: l,
                                    height: m
                                })
                            })
                        }, {
                            fireImmediately: !0
                        });
                        a.Ht.set(b, f)
                    },
                    qGb = function(a, b) {
                        const c = a.wKa,
                            d = a.z$,
                            e = b.width,
                            f = b.height;
                        if (!(e < 0 || f < 0)) {
                            var g =
                                d.height,
                                h = e / f * g;
                            d7(() => {
                                c.width = h;
                                c.height = g;
                                c.N = e;
                                c.Y = f;
                                d.width = h;
                                d.N = h;
                                d.Y = g
                            })
                        }
                    },
                    uGb = function({
                        Pia: a,
                        Z8: b,
                        L: c
                    }) {
                        const d = new tGb(c);
                        b.Xw = async (e, {
                            element: f,
                            container: g
                        }) => {
                            (g === null || g === void 0 ? void 0 : g.type) === "group-element" && __c.jj(g.group) && g.group.qe.app.id === a && (__c.A((f === null || f === void 0 ? void 0 : f.type) === "embed"), sGb(d, e, {
                                wKa: f,
                                z$: g.group
                            }))
                        };
                        b.dM = e => {
                            var f;
                            (f = d.Ht.get(e)) === null || f === void 0 || f();
                            d.Ht.delete(e)
                        }
                    };
                __c.ud.prototype.zP = __c.ca(3, function(a, b) {
                    this.console.error(...__c.Yc(this, "critical", a, b))
                });
                __c.vd.prototype.zP = __c.ca(2, function(a, b) {
                    __c.sd(this, "fatal", a, b)
                });
                var e7 = __webpack_require__(443763).jsx;
                var vGb = __webpack_require__(446474).Pi;
                var wGb = __webpack_require__(875604).memo;
                var f7 = __webpack_require__(519427),
                    xGb = f7.ObservableMap,
                    rGb = f7.reaction,
                    d7 = f7.runInAction;
                var yGb = new __c.w0({
                    lC: {},
                    Component: vGb(() => e7("div", {
                        children: "3D Widget"
                    }))
                });
                var zGb = new xGb,
                    AGb = new __c.w0({
                        lC: {
                            K6: __c.v0("blueprintId", 0),
                            qia: __c.v0("variantId", 0)
                        },
                        zt: ({
                            data: a
                        }) => {
                            var b = zGb.get(a.K6);
                            if (!b) throw Error(`Blueprint ${a.K6} not found`);
                            b = b.ncb.find(c => c.qia === a.qia);
                            if (!b) throw Error(`Variant ${a.qia} not found for blueprint ${a.K6}`);
                            return {
                                gb: b.gb
                            }
                        }
                    });
                var BGb = new __c.w0({
                    lC: {
                        url: __c.v0("url", 0),
                        config: __c.v0("config", 1)
                    },
                    zt: ({
                        data: a
                    }) => ({
                        gb: __c.aS.create([{ ...__c.SPa,
                            top: 0,
                            left: 0,
                            width: 510,
                            height: 191.25,
                            N: 800,
                            Y: 300,
                            url: a.url
                        }])
                    })
                });
                var c7 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.mUa = a.message;
                        Object.setPrototypeOf(this, c7.prototype)
                    }
                };
                var cGb = M(() => ({
                    config: __c.Z(1)
                }));
                var CGb = M(() => ({
                    color: X(1)
                }));
                var DGb = M(() => ({
                    type: __c.H("A?", 1, "RECOLORABLE"),
                    id: X(1),
                    value: __c.Pa(2, CGb)
                }));
                var EGb = M(() => ({
                    borderRadius: DO(1),
                    borderWidth: DO(2)
                }));
                var FGb = M(() => ({
                    type: __c.H("A?", 2, "BORDERABLE"),
                    id: X(1),
                    value: __c.Pa(2, EGb)
                }));
                var dGb = M(() => ({
                    config: X(1),
                    width: DO(2),
                    height: DO(3),
                    AM: __c.Qa(4, DGb),
                    lHa: __c.Qa(5, FGb)
                }));
                var $Fb = M(() => ({
                    config: X(1),
                    width: DO(2),
                    height: DO(3),
                    AM: __c.Qa(4, DGb),
                    lHa: __c.Qa(5, FGb)
                }));
                var aGb = M(() => ({}));
                var pGb = class {
                    constructor(a, b) {
                        this.jna = a;
                        this.handler = b;
                        fGb(this)
                    }
                };
                var GGb = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.L = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Fa)()
                            } catch (e) {
                                return this.L.Gb(e), Ga(e)
                            }
                        };
                        this.MSa = d => {
                            this.L.Gb(d)
                        };
                        this.LSa = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.receive(d)
                            } catch (e) {
                                this.L.Gb(e)
                            } else this.L.error(new c7({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.LSa;
                        this.port.onmessageerror = this.MSa
                    }
                };
                var g7 = new c7({
                        code: "internal_error",
                        message: "Comms promise timed out."
                    }),
                    kGb = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.If);
                            this.NUa(a)
                        }
                        reject(a) {
                            clearTimeout(this.If);
                            this.iya(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.If);
                            this.If = setTimeout(() => {
                                this.iya(g7)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.NUa = b;
                                this.iya = c
                            });
                            this.setTimeout()
                        }
                    };
                var HGb = class {
                    request(a, b) {
                        const c = this.dxa,
                            d = new kGb(5E3),
                            e = this.JUa(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Fa)(g)
                                } catch (g) {
                                    return g === g7 ? Ga(new c7({
                                        code: g7.code,
                                        message: `Comms promise timed out (${a}).`
                                    })) : Ga(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.L.Gb(b.error, {
                            Te: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.L = b;
                        this.JUa = __c.Zc;
                        this.dxa = new Map
                    }
                };
                var IGb = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new c7({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.uS = a;
                        this.L = b;
                        this.IUa = !0;
                        this.RJa = c;
                        this.requestHandler = new Map;
                        this.fLa = new Set
                    }
                };
                var oGb = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new JGb(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.dxa.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.payload);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new c7({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.L.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        hGb(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.Vl("bus"));
                            this.client = new HGb(a.NA, b.Vl("client"));
                            this.requestHandler = new IGb(a, b.Vl("requestHandler"))
                        }
                    },
                    JGb = class {
                        constructor(a, b, c) {
                            this.yZ = a;
                            this.NA = (d, e, f) => this.WO.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.TSa = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.yZ({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.yZ({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.yZ({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.yZ({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.WO = new GGb({
                                receive: this.TSa
                            }, b, c)
                        }
                    };
                var iGb = {
                    mia: "null",
                    qza: "*"
                };
                var nGb = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var tGb = class {
                    constructor(a) {
                        this.L = a;
                        this.Ht = new Map
                    }
                };
                var KGb = wGb(function() {
                    return e7("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            backgroundColor: "#fFfFfF",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: "FORM V2 Widget"
                    })
                });
                var LGb = new __c.w0({
                    lC: {},
                    Component: vGb(({
                        data: a
                    }) => e7(KGb, {
                        state: a
                    }))
                });
                __c.Iza = {
                    aPa: function({
                        oV: a,
                        Z8: b,
                        L: c,
                        DKa: d,
                        SKa: e
                    }) {
                        function f(g, h) {
                            a.$Oa(g, h);
                            return g
                        }
                        b && uGb({
                            Pia: "w:embed",
                            Z8: b,
                            L: c
                        });
                        return {
                            Bcb: {
                                I1a: f("w:blueprint", AGb),
                                g3a: d ? __webpack_require__.me(345045).then(() => __c.ZFb).then(({
                                    wT: g
                                }) => g.map((h, k) => f(`w:demo-${k+1}`, h))) : void 0,
                                embed: f("w:embed", BGb),
                                form: f("w:form", LGb),
                                Dbb: e ? f("w:3d", yGb) : void 0
                            }
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/2738113375320d15.js.map