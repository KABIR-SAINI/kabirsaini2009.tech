(() => {
    "use strict";
    var e, t, n, r = {},
        o = {};

    function s(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {
            exports: {}
        };
        return r[e](n, n.exports, s), n.exports
    }
    s.m = r, e = [], s.O = (t, n, r, o) => {
        if (!n) {
            var i = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [n, r, o] = e[f], c = !0, l = 0; l < n.length; l++)
                    if ((!1 & o || i >= o) && Object.keys(s.O).every((e => s.O[e](n[l])))) n.splice(l--, 1);
                    else if (c = !1, o < i) i = o;
                if (c) {
                    e.splice(f--, 1);
                    var a = r();
                    if (void 0 !== a) t = a
                }
            }
            return t
        } else {
            o = o || 0;
            for (var f = e.length; f > 0 && e[f - 1][2] > o; f--) e[f] = e[f - 1];
            e[f] = [n, r, o]
        }
    }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(e, r) {
        if (1 & r) e = this(e);
        if (8 & r) return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule) return e;
            if (16 & r && "function" == typeof e.then) return e
        }
        var o = Object.create(null);
        s.r(o);
        var i = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var c = 2 & r && e;
            "object" == typeof c && !~t.indexOf(c); c = n(c)) Object.getOwnPropertyNames(c).forEach((t => i[t] = () => e[t]));
        return i.default = () => e, s.d(o, i), o
    }, s.d = (e, t) => {
        for (var n in t)
            if (s.o(t, n) && !s.o(e, n)) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, n) => (s.f[n](e, t), t)), [])), s.u = e => {
        if (71981 === e) return "ec061030611baf2a.js"
    }, s.miniCssF = e => {
        if (71981 === e) return "ef46db3751d8e999.ltr.css"
    }, s.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (95433 === e) return "c166e5d20ad58f4e.5a9ync.vendor.rtl.css";
        if (21389 === e) return "hjfept.c166e5d20ad58f4e.rtl.css";
        if (71981 === e) return "c166e5d20ad58f4e.rtl.css"
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        const e = s.e,
            t = function e(t, n, r) {
                return t().catch((function(o) {
                    return 0 === r ? Promise.reject(o) : (s = n, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(t, n, r - 1)
                    }));
                    var s
                }))
            };
        s.e = function(n) {
            return t((function() {
                return e(n)
            }), 1e3, 5)
        }
    })(), s.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, t, n, r, o, s, i, c, l) {
            const a = e.l;
            let f = [],
                u = [];
            const h = [];
            for (const j of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = j.getAttribute("href");
                e && h.push(e)
            }
            let d = e => document.head.appendChild(e);
            e.l = function(e, t, o, i) {
                for (let n = 0; n < h.length; n++)
                    if (h[n].endsWith(e)) return h.splice(n, 1), a(e, t, o, i);
                if (n) {
                    if (0 === f.length) Promise.resolve().then((() => {
                        O(f, m), f = [], g = 0
                    }));
                    const t = v(e);
                    if (f.length >= 1 && g + t > s || f.length >= r) O(f, m), f = [], g = 0;
                    g += t
                } else {
                    if (p++ < 10) return a(e, t, o, i);
                    if (0 === f.length) setTimeout((() => w(f, m)), 1)
                }
                f.push({
                    src: e,
                    callback: function(n) {
                        if ("load" === n.type) t(n);
                        else a(e, t, o, i)
                    },
                    originalLoad: () => {
                        a(e, t, o, i)
                    }
                })
            }, e.loadCss = function(e, t) {
                const o = e.getAttribute("href");
                if (d = t || d, n) {
                    if (0 === u.length) Promise.resolve().then((() => {
                        O(u, _), u = [], y = 0
                    }));
                    const e = v(o);
                    if (u.length >= 1 && y + e > s || u.length >= r) O(u, _), u = [], y = 0;
                    y += e
                } else {
                    if (b++ < 15) return t(e);
                    if (0 === u.length) setTimeout((() => w(u, _)), 1)
                }
                u.push({
                    src: o,
                    callback: n => {
                        if ("load" === n.type) e.onload && e.onload(n);
                        else t(e)
                    },
                    originalLoad: () => {
                        t(e)
                    }
                })
            };
            let p = 0,
                g = 0;

            function m(e, n) {
                const r = document.createElement("script");
                let o;
                const s = e => {
                    r.onerror = r.onload = null, clearTimeout(o), r.parentNode && r.parentNode.removeChild(r), n("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                r.onload = r.onerror = s, r.src = e, r.async = !1, o = setTimeout((() => s({
                    type: "timeout",
                    target: r
                })), t), document.head.appendChild(r)
            }
            let b = 0,
                y = 0;

            function _(e, t) {
                const n = document.createElement("link");
                n.onload = n.onerror = e => t(e), n.href = e, n.rel = "stylesheet", d(n)
            }

            function v(e) {
                const t = o(),
                    n = e.substring(t.length);
                return n ? i[n] || 0 : 0
            }

            function k() {
                const e = o(),
                    t = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: t,
                        host: n
                    } = new URL(e);
                    return `${t}//chunk-composing.${n.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(t.hostname) && t.searchParams.get("pageLoadWorkerUrl")) return t.searchParams.get("pageLoadWorkerUrl");
                else return t.origin
            }
            async function w(e, t) {
                const n = o();
                let a, f = 0,
                    u = [];
                try {
                    a = self.navigator.serviceWorker
                } catch {}
                const h = c && (null == a ? void 0 : a.controller) ? await async function(e) {
                    const t = await caches.open(l),
                        n = [];
                    for (const r of e)
                        if (await t.match(r.src)) r.originalLoad();
                        else n.push(r);
                    return n
                }(e) : e;
                for (const o of h) {
                    const e = o.src.substring(n.length),
                        t = e ? i[e] || 0 : 0;
                    if (u.length >= 1 && f + t > s || u.length >= r) d(u), u = [], f = 0;
                    u.push(o), f += t
                }

                function d(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const r = k(),
                        o = e.map((({
                            src: e
                        }) => e.substring(n.length))).join("+");
                    t(`${r}/chunk-batch/${o}`, (t => {
                        for (const {
                                callback: n,
                                src: r
                            } of e) n({
                            type: t.type,
                            target: {
                                src: r,
                                href: r
                            }
                        })
                    }))
                }
                u.length && d(u), e.length = 0
            }

            function O(e, t) {
                if (0 === e.length) return;
                const n = o();
                if (1 !== e.length) t(`${k()}/chunk-batch/${e.map((({src:e})=>e.substring(n.length))).join("+")}`, (t => {
                    for (const {
                            callback: n,
                            src: r
                        } of e) n({
                        type: t.type,
                        target: {
                            src: r,
                            href: r
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(s, 12e4, self.__sync_batch_chunks__, 40, (() => s.p), 10485760, {
            "hjfept.4b22497ec4866824.js": 855870,
            "e575ff62f2091794.runtime.js": 33777,
            "411de7fe679f1413.5a9ync.vendor.js": 85008,
            "ec061030611baf2a.js": 9438
        }, self.__check_cache_batch_chunks__, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"536633":71981}'),
            t = JSON.parse('{"21389":[],"71981":[],"95433":[]}'),
            n = (e, r, o) => {
                if (!o.has(e)) return o.add(e), t[e].forEach((e => n(e, r, o))), r.push(e), r
            };
        s.me = function(t) {
            const r = e[t];
            if (null == r) return Promise.resolve(s(t));
            const o = n(r, [], new Set);
            return Promise.all(o.map((e => s.e(e)))).then((() => s(t)))
        }
    })(), (() => {
        const e = {};
        s.f.locale = function(t, n) {
            ! function(e, t, n) {
                if (null == t[e]) {
                    const n = self.cmsg;
                    if (!n || !n.assets) return;
                    const r = n.loaded,
                        o = n.locale || "en";
                    if (r && r[e + "_" + o]) return;
                    const i = n.assets[o] && n.assets[o][e] && n.assets[o][e].js;
                    if (!i) return;
                    t[e] = Promise.all(i.map((n => new Promise(((r, o) => {
                        const i = s.p + n;
                        s.l(i, (s => {
                            if ("load" === s.type) t[e] = 0, r();
                            else delete t[e], o(new Error(`Fail to load message files@${n}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const r = t[e];
                if (r) n.push(r)
            }(t, e, n)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) s.miniCssF = s.miniCssFRtl
    })(), (() => {
        var e = {
            98581: 1
        };
        s.f.i = (t, n) => {
            if (!e[t])
                if (98581 != t) importScripts(s.p + s.u(t))
        };
        var t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [],
            n = t.push.bind(t);
        t.push = t => {
            var [r, o, i] = t;
            for (var c in o)
                if (s.o(o, c)) s.m[c] = o[c];
            if (i) i(s);
            for (; r.length;) e[r.pop()] = 1;
            n(t)
        }
    })()
})();
//# sourceMappingURL=sourcemaps/e575ff62f2091794.runtime.js.map