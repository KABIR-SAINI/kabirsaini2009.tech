(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60060], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var NM = __c.NM;
                var W = __c.W;
                var L = __c.L;
                var Ia = __c.Ia;
                var i3b = function(a, b) {
                        var c = g3b,
                            d = h3b;
                        a.handle("SET_CONFIG", async e => {
                            if (e === void 0) throw new Y5({
                                code: "internal_error",
                                message: "SET_CONFIG: request cannot be undefined."
                            });
                            e = c.ld(e);
                            e = await b(e);
                            if (d) return d.Jd(e)
                        })
                    },
                    l3b = async function(a, b) {
                        a = await a.rJa.request("RENDER_ELEMENT", j3b.Jd(b));
                        if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                        if (a.value == null) throw Error("RENDER_ELEMENT: Result cannot be empty");
                        return k3b.ld(a.value)
                    },
                    m3b = function(a) {
                        i3b(a.rJa,
                            b => a.handler.sgb(b))
                    },
                    o3b = async function(a, b) {
                        const c = b.requestId,
                            d = b.path;
                        b = b.Ym;
                        const e = a.requestHandler.get(d);
                        if (e) {
                            a.P3.PZ.send({
                                type: "ack",
                                requestId: c
                            });
                            var f = setInterval(() => a.P3.PZ.send({
                                type: "ack",
                                requestId: c
                            }), 9E3);
                            try {
                                var g = await e(b);
                                clearInterval(f);
                                a.P3.PZ.send({
                                    type: "response",
                                    requestId: c,
                                    payload: g
                                })
                            } catch (k) {
                                clearInterval(f);
                                g = "internal_error";
                                b = "Something went wrong on our end, if this issue persists please contact us.";
                                if (k instanceof Y5) {
                                    var h = k;
                                    k.code === "internal_error" ? a.H.Nb(k, {
                                        Ye: "Internal error in comms handler",
                                        tags: new Map([
                                            ["type", "request"],
                                            ["path", d]
                                        ])
                                    }) : (g = k.code, b = k.Ypb)
                                } else a.Kqb ? a.H.Nb(k, {
                                    Ye: "Unexpected error type thrown from comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : a.dbb.error(k);
                                g = n3b(a.P3, c, g, b);
                                g.ok || a.H.qN(g.error, {
                                    Ye: "unable to send error response",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                })
                            }
                            if (h != null)
                                for (const k of a.adb) try {
                                    k(h)
                                } catch (l) {
                                    a.H.CR(l, {
                                        Ye: "Error executing errorObserver"
                                    })
                                }
                        } else h = n3b(a.P3, c, "internal_error", `No request handler configured for path: "${d}".`),
                            h.ok || a.H.qN(h.error, {
                                Ye: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                    },
                    n3b = function(a, b, c, d) {
                        return a.PZ.send({
                            type: "error",
                            requestId: b,
                            code: c,
                            message: d
                        })
                    },
                    q3b = function({
                        src: a,
                        srcdoc: b,
                        sandbox: c
                    }) {
                        if (b.length !== 0 || !c.contains("allow-same-origin")) return p3b;
                        a = (new URL(a)).origin;
                        return a === "null" ? p3b : {
                            EDa: a,
                            LYa: a
                        }
                    },
                    t3b = async function(a, b, c, {
                        addEventListener: d,
                        removeEventListener: e
                    } = window) {
                        const f = new r3b(6E4),
                            g = q3b(c),
                            h = c.contentWindow;
                        if (!h) throw new Y5({
                            code: "internal_error",
                            message: "contentWindow is missing from iFrame"
                        });
                        c = ({
                            data: k,
                            source: l,
                            origin: m
                        }) => {
                            var n;
                            (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.EDa ? s3b(m) || b.info("received message event from an unexpected origin", {
                                extra: new Map([
                                    ["expected", g.EDa],
                                    ["actual", m]
                                ])
                            }) : l !== h ? l !== window && b.info("source and content window do not match", {
                                extra: new Map([
                                    ["data.source", k === null || k === void 0 ? void 0 : k.source]
                                ])
                            }) : (l = k ? k.source ? k.source !== "iframe" ? Ia("invalid source") : (0, __c.Ha)() :
                                Ia("'source' is missing in MessageEvent data object") : Ia("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                                    source: "parent"
                                }, g.LYa, [a]), f.resolve(void 0)) : b.mM(l.error, {
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
                    s3b = function(a) {
                        return u3b.some(b => a.endsWith(b))
                    },
                    z3b = async function(a, b, c) {
                        const {
                            port1: d,
                            port2: e
                        } = new MessageChannel;
                        var f = new v3b(d, a.H);
                        await t3b(e, a.H, b, window);
                        const g = new w3b(f, {
                            sgb: h => {
                                Z5(() => {
                                    const k = h.width,
                                        l = h.height;
                                    c.Mra.qh.set("config", {
                                        type: "string",
                                        value: h.config
                                    });
                                    x3b(c, {
                                        width: k,
                                        height: l
                                    })
                                });
                                return new h3b
                            }
                        });
                        f = y3b(() => c.Mra.qh.get("config"), async h => {
                            let k;
                            h && (__c.C(h.type === "string"), k = h.value);
                            const {
                                width: l,
                                height: m
                            } = await l3b(g, {
                                config: k
                            });
                            Z5(() => {
                                x3b(c, {
                                    width: l,
                                    height: m
                                })
                            })
                        }, {
                            fireImmediately: !0
                        });
                        a.Oh.set(b, f)
                    },
                    x3b = function(a, b) {
                        const c = a.dcb,
                            d = a.Mra,
                            e = b.width,
                            f = b.height;
                        if (!(e < 0 || f < 0)) {
                            var g = d.height,
                                h = e / f * g;
                            Z5(() => {
                                c.width = h;
                                c.height = g;
                                c.I = e;
                                c.W = f;
                                d.width =
                                    h;
                                d.I = h;
                                d.W = g
                            })
                        }
                    },
                    B3b = function({
                        lEa: a,
                        Qpa: b,
                        H: c
                    }) {
                        const d = new A3b(c);
                        b.cD = async (e, {
                            element: f,
                            container: g
                        }) => {
                            (g === null || g === void 0 ? void 0 : g.type) === "group-element" && __c.nj(g.group) && g.group.cf.app.id === a && (__c.C((f === null || f === void 0 ? void 0 : f.type) === "embed"), z3b(d, e, {
                                dcb: f,
                                Mra: g.group
                            }))
                        };
                        b.VV = e => {
                            var f;
                            (f = d.Oh.get(e)) === null || f === void 0 || f();
                            d.Oh.delete(e)
                        }
                    };
                __c.jd.prototype.qN = __c.ea(3, function(a, b) {
                    this.console.error(...__c.id(this, "critical", a, b))
                });
                __c.oM.prototype.qN = __c.ea(2, function(a, b) {
                    this.Du.qN(a, b);
                    __c.mM(this, a, "critical", b)
                });
                var $5 = __webpack_require__(443763).jsx;
                var C3b = __webpack_require__(446474).Pi;
                var D3b = __webpack_require__(875604).memo;
                var a6 = __webpack_require__(519427),
                    E3b = a6.ObservableMap,
                    y3b = a6.reaction,
                    Z5 = a6.runInAction;
                var F3b = new __c.G_({
                    UI: {},
                    Component: C3b(() => $5("div", {
                        children: "3D Widget"
                    }))
                });
                var G3b = new E3b,
                    H3b = new __c.G_({
                        UI: {
                            Kma: __c.F_("blueprintId", 0),
                            rR: __c.F_("variantId", 0)
                        },
                        hz: ({
                            data: a
                        }) => {
                            var b = G3b.get(a.Kma);
                            if (!b) throw Error(`Blueprint ${a.Kma} not found`);
                            b = b.variants.find(c => c.rR === a.rR);
                            if (!b) throw Error(`Variant ${a.rR} not found for blueprint ${a.Kma}`);
                            return {
                                $a: b.$a
                            }
                        }
                    });
                var I3b = new __c.G_({
                    UI: {
                        url: __c.F_("url", 0),
                        config: __c.F_("config", 1)
                    },
                    hz: ({
                        data: a
                    }) => ({
                        $a: __c.dQ.create([{ ...__c.wdb,
                            top: 0,
                            left: 0,
                            width: 510,
                            height: 191.25,
                            I: 800,
                            W: 300,
                            url: a.url
                        }])
                    })
                });
                var Y5 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.Ypb = a.message;
                        Object.setPrototypeOf(this, Y5.prototype)
                    }
                };
                var j3b = L(() => ({
                    config: __c.Y(1)
                }));
                var J3b = L(() => ({
                    color: W(1)
                }));
                var K3b = L(() => ({
                    type: __c.F("A?", 1, "RECOLORABLE"),
                    id: W(1),
                    value: __c.Ra(2, J3b)
                }));
                var L3b = L(() => ({
                    borderRadius: NM(1),
                    borderWidth: NM(2)
                }));
                var M3b = L(() => ({
                    type: __c.F("A?", 2, "BORDERABLE"),
                    id: W(1),
                    value: __c.Ra(2, L3b)
                }));
                var k3b = L(() => ({
                    config: W(1),
                    width: NM(2),
                    height: NM(3),
                    DW: __c.Sa(4, K3b),
                    w8a: __c.Sa(5, M3b)
                }));
                var g3b = L(() => ({
                    config: W(1),
                    width: NM(2),
                    height: NM(3),
                    DW: __c.Sa(4, K3b),
                    w8a: __c.Sa(5, M3b)
                }));
                var h3b = L(() => ({}));
                var w3b = class {
                    constructor(a, b) {
                        this.rJa = a;
                        this.handler = b;
                        m3b(this)
                    }
                };
                var N3b = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.H = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ha)()
                            } catch (e) {
                                return this.H.Nb(e), Ia(e)
                            }
                        };
                        this.unb = d => {
                            this.H.Nb(d)
                        };
                        this.onMessage = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.bqb(d)
                            } catch (e) {
                                this.H.Nb(e)
                            } else this.H.error(new Y5({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.onMessage;
                        this.port.onmessageerror = this.unb
                    }
                };
                var b6 = new Y5({
                        code: "internal_error",
                        message: "Comms promise timed out."
                    }),
                    r3b = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.Xd);
                            this.Tqb(a)
                        }
                        reject(a) {
                            clearTimeout(this.Xd);
                            this.rXa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.Xd);
                            this.Xd = setTimeout(() => {
                                this.rXa(b6)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.Tqb = b;
                                this.rXa = c
                            });
                            this.setTimeout()
                        }
                    };
                var O3b = class {
                    request(a, b) {
                        const c = this.XVa,
                            d = new r3b(5E3),
                            e = this.Mqb(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ha)(g)
                                } catch (g) {
                                    return g === b6 ? Ia(new Y5({
                                        code: b6.code,
                                        message: `Comms promise timed out (${a}).`
                                    })) : Ia(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.H.Nb(b.error, {
                            Ye: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.H = b;
                        this.Mqb = __c.ss;
                        this.XVa = new Map
                    }
                };
                var P3b = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new Y5({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.P3 = a;
                        this.H = b;
                        this.Kqb = !0;
                        this.dbb = c;
                        this.requestHandler = new Map;
                        this.adb = new Set
                    }
                };
                var v3b = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new Q3b(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.XVa.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.Ym);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new Y5({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.H.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        o3b(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.Ug("bus"));
                            this.client = new O3b(a.NA, b.Ug("client"));
                            this.requestHandler = new P3b(a, b.Ug("requestHandler"))
                        }
                    },
                    Q3b = class {
                        constructor(a, b, c) {
                            this.dca = a;
                            this.NA = (d, e, f) => this.PZ.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.Gnb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.dca({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.dca({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.dca({
                                            type: "response",
                                            requestId: d.requestId,
                                            Ym: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.dca({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            Ym: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.PZ = new N3b({
                                bqb: this.Gnb
                            }, b, c)
                        }
                    };
                var p3b = {
                    EDa: "null",
                    LYa: "*"
                };
                var u3b = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var A3b = class {
                    constructor(a) {
                        this.H = a;
                        this.Oh = new Map
                    }
                };
                var R3b = D3b(function() {
                    return $5("div", {
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
                var S3b = new __c.G_({
                    UI: {},
                    Component: C3b(({
                        data: a
                    }) => $5(R3b, {
                        state: a
                    }))
                });
                __c.dQa = {
                    Phb: function({
                        T7: a,
                        Qpa: b,
                        H: c,
                        lcb: d,
                        Jcb: e
                    }) {
                        function f(g, h) {
                            a.Ohb(g, h);
                            return g
                        }
                        b && B3b({
                            lEa: "w:embed",
                            Qpa: b,
                            H: c
                        });
                        return {
                            oQb: {
                                IAb: f("w:blueprint", H3b),
                                DCb: d ? __webpack_require__.me(345045).then(() => __c.f3b).then(({
                                    q5: g
                                }) => g.map((h, k) => f(`w:demo-${k+1}`, h))) : void 0,
                                embed: f("w:embed", I3b),
                                form: f("w:form", S3b),
                                POb: e ? f("w:3d", F3b) : void 0
                            }
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/e8d6c2123558f7c7.js.map