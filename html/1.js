import("data:text/javascript;base64,Cg==");
import {
    U as e,
    _ as t,
    r as n,
    R as a,
    a as r,
    c as i,
    o as l,
    b as o,
    L as s,
    t as c,
    T as m,
    d as u,
    S as d,
    N as v,
    P as f,
    A as p,
    E as h,
    e as _,
    f as E,
    g as y,
    h as g,
    i as N,
    j as b,
    k as x,
    l as w
} from "./vendor.6382b77d.js";

var I = e.useConfig
    , k = function (e, t) {
    var n = I().classPrefix
        , a = (t || n) + "m";
    return e ? a + "-" + e : "" + a
}
    , M = function () {
    return Boolean("undefined" != typeof window && window.document)
}
    , S = function () {
    if (!M())
        return !1;
    var e = navigator.userAgent.toLocaleLowerCase();
    return ["android", "ipad", "iphone", "windows phone"].some((function (t) {
            return -1 !== e.indexOf(t)
        }
    ))
}
    , P = function (e) {
    return 0 === Object.keys(e).length
}
    , A = function (e, t) {
    void 0 === t && (t = 1),
    3 === (e = e.replace(/^#/, "")).length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    var n = Number.parseInt(e, 16);
    return "rgba(" + (n >> 16) + ", " + (n >> 8 & 255) + ", " + (255 & n) + ", " + t + ")"
}
    , C = function () {
    var e = t(n.exports.useState(!0), 2)
        , a = e[0]
        , r = e[1];
    return n.exports.useEffect((function () {
            var e,
                t = !S() && !(-1 !== (null == (e = navigator.userAgent) ? void 0 : e.toLowerCase().indexOf("qqbrowser"))) && function () {
                    try {
                        var e = document.createElement("canvas");
                        return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
                    } catch (t) {
                        return !1
                    }
                }() && function () {
                    var e, t, n, a = document.createElement("canvas");
                    try {
                        e = a.getContext("webgl") || a.getContext("experimental-webgl")
                    } catch (r) {
                    }
                    if (e)
                        return t = e.getExtension("WEBGL_debug_renderer_info"),
                            n = e.getParameter(t.UNMASKED_RENDERER_WEBGL),
                            ["AMD", "Intel", "ANGLE", "NVIDIA", "Apple"].some((function (e) {
                                    return -1 !== n.indexOf(e)
                                }
                            ));
                    return !1
                }();
            r(t)
        }
    ), []),
        a
};

function z() {
    var e = n.exports.useRef(!0);
    return e.current ? (e.current = !1,
        !0) : e.current
}

var L = function (e, t) {
    var a = z();
    n.exports.useEffect((function () {
            if (!a)
                return e()
        }
    ), t)
}
    , T = a.forwardRef((function (e, n) {
        var c, m, u, d = e.type, v = e.prefixIcon, f = e.suffixIcon, p = e.size, h = e.mSize, _ = e.width,
            E = e.loading, y = e.className, g = e.style, N = e.disabled, b = e.children,
            x = r(e, ["type", "prefixIcon", "suffixIcon", "size", "mSize", "width", "loading", "className", "style", "disabled", "children"]),
            w = k("btn"), I = t(a.useState(!!E), 2), M = I[0], S = I[1];
        m = "object" == typeof E && E.delay ? E.delay || !0 : !!E,
            a.useEffect((function () {
                    return clearTimeout(u),
                        "number" == typeof m ? u = window.setTimeout((function () {
                                S(m)
                            }
                        ), m) : S(m),
                        function () {
                            clearTimeout(u)
                        }
                }
            ), [m]);
        var P = i(w, ((c = {})[w + "--" + d] = d,
            c["is-disabled"] = N,
            c[w + "--icon"] = !!v || !!f,
            c["size-" + p] = p && "default" !== p,
            c["m-size-" + h] = h && "default" !== h,
            c["size-" + _ + "-width"] = _,
            c["is-loading"] = M,
            c["" + y] = y,
            c))
            , A = function (e) {
            var t = x.onClick;
            M || t && t(e)
        }
            , C = function (e) {
            return e ? a.createElement("span", {
                className: w + "__icon"
            }, e) : null
        }
            , z = a.createElement(a.Fragment, null, C(v), b && a.createElement("span", {
            className: w + "__text"
        }, b), C(f))
            , L = l(x, ["htmlType"]);
        if (x.href)
            return a.createElement("a", o(o({}, L), {
                className: P,
                onClick: A
            }), E ? a.createElement(s, null) : z);
        var T = x.htmlType
            , R = r(x, ["htmlType"]);
        return a.createElement("button", o(o({
            ref: n
        }, l(R, ["loading"])), {
            type: T,
            className: P,
            style: g,
            onClick: A
        }), E ? a.createElement(s, {
            size: "s" === p ? p : "default"
        }) : z)
    }
));
T.defaultProps = {
    type: "primary",
    size: "default"
},
    c("primary", "pay", "hole", "weak-hole", "white-hole", "link", "link-weak", "white"),
    c("xxl", "xl", "l", "default", "s", "xs", "auto"),
    c("xxl", "xl", "default", "s"),
    c("submit", "reset", "button"),
    c("auto", "default", "full");
var R = function (e) {
    var t = e.className
        , n = r(e, ["className"])
        , l = k("link")
        , s = i(l, t);
    return a.createElement(m, o({
        className: s
    }, n))
}
    , O = function (e) {
    var t = e.className
        , n = e.style
        , r = e.title
        , l = e.desc
        , o = e.children
        , s = e.links
        , c = void 0 === s ? [] : s
        , m = e.id
        , u = k("section")
        , d = i(u, t);
    return a.createElement("section", {
        className: d,
        style: n,
        "data-id": m
    }, a.createElement("div", {
        className: u + "__inner"
    }, a.createElement("header", {
        className: u + "__hd"
    }, a.createElement("h2", {
        className: u + "__title"
    }, r), (l || !!c.length) && a.createElement("div", {
        className: u + "__sub"
    }, a.createElement("span", {
        className: u + "__desc"
    }, l), !!(null == c ? void 0 : c.length) && a.createElement("span", {
        className: u + "__links"
    }, c.map((function (e, t) {
            return a.createElement(R, {
                type: "arrow",
                href: e.to,
                key: t
            }, e.text)
        }
    ))))), a.createElement("div", {
        className: u + "__bd"
    }, o)))
}
    , B = function (e) {
    var t = e.className
        , n = e.style
        , r = e.to
        , l = e.logo
        , o = e.alt
        , s = e.hotrep
        , c = k("logo-card")
        , m = i(c, t)
        , u = r ? "a" : "div";
    return a.createElement(u, {
        href: r || void 0,
        className: m,
        style: n,
        hotrep: "home.custome." + s
    }, a.createElement("img", {
        src: l,
        alt: o
    }))
}
    , j = function (e) {
    var t, r, l = e.className, s = e.style, c = e.logos, m = e.id, d = e.row, v = void 0 === d ? 1 : d, f = e.align,
        p = k("logo-card"), h = i(p + "__wrap", l, ((t = {})[p + "__wrap--multi"] = !!v && v > 1,
            t), ((r = {})["align-" + f] = !!f,
            r)), _ = n.exports.useMemo((function () {
                for (var e = v > 1 ? Math.ceil(c.length / v) : c.length, t = [], n = 0; n < v; n++) {
                    var a = n * e
                        , r = c.slice(a, a + e);
                    t.push(r)
                }
                return t
            }
        ), [c, v]);
    return a.createElement(u, {
        offset: 200,
        once: !0
    }, a.createElement("div", {
        className: h,
        style: s,
        "data-id": m
    }, a.createElement("div", {
        className: p + "__wrap-inner"
    }, _.map((function (e, t) {
            return a.createElement(a.Fragment, {
                key: t
            }, function (e) {
                return a.createElement("ul", {
                    className: p + "__list"
                }, e.map((function (e, t) {
                        return a.createElement("li", {
                            key: t
                        }, a.createElement(B, o({}, e)))
                    }
                )))
            }(e))
        }
    )))))
};
j.Item = B;
var D = function (e) {
    var t = e.className
        , n = e.style
        , r = e.logo
        , l = e.to
        , o = e.desc
        , s = e.name
        , c = e.id
        , m = e.slug
        , u = k("case-card")
        , d = i(u, t)
        , v = l ? "a" : "div";
    return a.createElement(v, {
        href: l || void 0,
        className: d,
        style: n,
        "data-id": c,
        hotrep: "home.custome.card." + m
    }, a.createElement("div", {
        className: u + "__bg"
    }), a.createElement("div", {
        className: u + "__inner"
    }, a.createElement("div", {
        className: u + "__object"
    }, a.createElement("img", {
        src: r,
        alt: "",
        className: u + "__logo"
    })), a.createElement("div", {
        className: u + "__main"
    }, a.createElement("div", {
        className: u + "__desc"
    }, o), a.createElement("div", {
        className: u + "__name",
        "aria-hidden": "true"
    }, "—— ", s))))
};
d.use([v, f, p, h]);
var G = function (e, t) {
    return "." + e.replace(/ +/, ".") + " " + ("." + t.replace(/ +/, "."))
}
    , H = function (e) {
    var t = e.className
        , n = e.style
        , l = e.children
        , s = e.navigation
        , c = e.pagination
        , m = e.showPage
        , u = void 0 === m || m
        , d = r(e, ["className", "style", "children", "navigation", "pagination", "showPage"])
        , v = k("swiper")
        , f = i(v, t)
        , p = !1
        , h = !0
        , E = !1
        , y = !0;
    return "boolean" == typeof s && s ? p = {
        prevEl: G(f, v + "__btn " + v + "__btn--prev"),
        nextEl: G(f, v + "__btn " + v + "__btn--next")
    } : "object" == typeof s ? p = Object.assign(s, {
        prevEl: G(f, v + "__btn " + v + "__btn--prev"),
        nextEl: G(f, v + "__btn " + v + "__btn--next")
    }) : h = !1,
        "boolean" == typeof c && c ? E = {
            el: G(f, v + "__pages")
        } : "object" == typeof c ? E = Object.assign({
            el: G(f, v + "__pages")
        }, c) : y = !1,
        a.createElement("div", {
            className: f,
            style: n
        }, a.createElement(_, o(o({
            navigation: p,
            pagination: E
        }, d), {
            a11y: {
                prevSlideMessage: "上一页",
                nextSlideMessage: "下一页"
            }
        }), l), h && a.createElement(a.Fragment, null, a.createElement("button", {
            className: v + "__btn " + v + "__btn--prev"
        }, a.createElement("div", {
            className: v + "__btn-inner"
        }, "上一页")), a.createElement("button", {
            className: v + "__btn " + v + "__btn--next"
        }, a.createElement("div", {
            className: v + "__btn-inner"
        }, "下一页"))), y && u && a.createElement("div", {
            className: v + "__pages"
        }))
};
H.SwiperSlide = E;
var J = H.SwiperSlide
    , Z = function (e) {
    var t = e.className
        , n = e.style
        , r = e.items
        , l = e.id
        , s = e.col
        , c = void 0 === s ? 3 : s
        , m = k("case")
        , d = k("case-card__list")
        , v = i(d, t);
    return a.createElement(u, {
        offset: 200,
        once: !0
    }, a.createElement("div", {
        "data-id": l,
        className: m + "__cases"
    }, a.createElement(H, {
        className: v,
        style: n,
        slidesPerView: c,
        navigation: !0,
        showPage: !1,
        loop: !0,
        pagination: {
            clickable: !0
        }
    }, null == r ? void 0 : r.map((function (e, t) {
            return a.createElement(J, {
                key: t
            }, a.createElement(D, o({}, e)))
        }
    )))))
};
Z.Item = D;
var F = function (e) {
    var t = e.src
        , n = r(e, ["src"]);
    return a.createElement("video", o({
        autoPlay: !0,
        src: t,
        controls: !0
    }, n))
}
    , W = function (e) {
    var t = e.src
        , n = r(e, ["src"]);
    return a.createElement("iframe", o({
        style: {
            backgroundColor: "#000"
        },
        src: t,
        allowFullScreen: !0
    }, n))
};

function V(e) {
    return new Promise((function (t, n) {
            var a = document.createElement("script");
            a.onload = a.onerror = function () {
                t()
            }
                ,
                a.src = e,
                document.body.appendChild(a)
        }
    ))
}

var Y = function (e) {
    var t = e.src
        , i = e.vid
        , l = e.autoplay
        , s = void 0 === l || l
        , c = r(e, ["src", "vid", "autoplay"]);
    return n.exports.useEffect((function () {
            !function () {
                y(this, void 0, void 0, (function () {
                        var e;
                        return g(this, (function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, V("https://vm.gtimg.cn/tencentvideo/txp/js/txplayer.js")];
                                    case 1:
                                        return n.sent(),
                                        t && /^https?:\/\/v\.qq\.com\/[\w/]+\/(\w{11,20})\.html$/.test(t) && (e = RegExp.$1),
                                        i && (e = i),
                                            new window.TXPlayer(o({
                                                containerId: "video-container",
                                                vid: e,
                                                autoplay: s,
                                                width: "100%",
                                                height: "100%"
                                            }, c)),
                                            [2]
                                }
                            }
                        ))
                    }
                ))
            }()
        }
    ), []),
        a.createElement("div", {
            id: "video-container",
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "#000",
                width: "100%",
                height: "100%"
            }
        })
}
    , X = function (e) {
    var t = e.src
        , i = e.onHide
        , l = void 0 === i ? function () {
        }
        : i
        , s = r(e, ["src", "onHide"])
        , c = n.exports.useMemo((function () {
            return document.createElement("div")
        }
    ), []);
    n.exports.useEffect((function () {
            document.body.appendChild(c);
            var e = document.createElement("style");
            return e.setAttribute("type", "text/css"),
                e.innerHTML = '\n\t\t\t.tpm-video-close:hover {background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApLS0+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiMwMEE0RkY7fTwvc3R5bGU+PHJlY3QgaWQ9IlhNTElEXzFfIiB4PSIxNSIgeT0iLTIuNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSAxNi4wMDYxIC02LjY0MjEpIiBjbGFzcz0ic3QwIiB3aWR0aD0iMiIgaGVpZ2h0PSIzNi43Ii8+PHJlY3QgaWQ9IlhNTElEXzJfIiB4PSIxNSIgeT0iLTIuNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAtMC43MDcxIDM4LjY2MyAxNS45ODUzKSIgY2xhc3M9InN0MCIgd2lkdGg9IjIiIGhlaWdodD0iMzYuNyIvPjwvc3ZnPg==);}\n\t\t\t.tpm-video-close {background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApLS0+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNGRkZGRkY7fTwvc3R5bGU+PHJlY3QgaWQ9IlhNTElEXzFfIiB4PSIxNSIgeT0iLTIuNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSAxNi4wMDYxIC02LjY0MjEpIiBjbGFzcz0ic3QwIiB3aWR0aD0iMiIgaGVpZ2h0PSIzNi43Ii8+PHJlY3QgaWQ9IlhNTElEXzJfIiB4PSIxNSIgeT0iLTIuNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAtMC43MDcxIDM4LjY2MyAxNS45ODUzKSIgY2xhc3M9InN0MCIgd2lkdGg9IjIiIGhlaWdodD0iMzYuNyIvPjwvc3ZnPg==);}\n\t\t\t.tpm-video-container, .tpm-video-mask{\n\t\t\t\tposition: fixed; top: 0; left: 0; bottom: 0; right: 0;\n\t\t\t}\n\t\t\t.tpm-video-container {\n\t\t\t\tz-index: 1001; text-align: center; font-size: 0;\n\t\t\t}\n\t\t\t.tpm-video-container:before {\n\t\t\t\tcontent: ""; display: inline-block; vertical-align: middle; width: 0; height: 100%;\n\t\t\t}\n\t\t\t.tpm-video-mask {\n\t\t\t\tz-index: 1000; width: 100%; height: 100%; background: #495770; opacity: .2;\n\t\t\t}\n\t\t\t.tpm-video-wrapper {\n\t\t\t\tposition: relative; display: inline-block; vertical-align: middle; max-width: 98%; max-height: 100%; width: 700px; height: 500px; font-size: 14px; line-height: 500px; color: #fff;\n\t\t\t}\n\t\t\t.tpm-video-wrapper video, .tpm-video-wrapper iframe {\n\t\t\t\tposition: absolute; left: 0; top: 0; width: 100%; height: 100%; background: #000;\n\t\t\t}\n\t\t\t@media screen and (max-width: 700px){.tpm-video-wrapper { height: auto; padding-top: 71.42857143%;}}\n\t\t\t@media screen and (max-width: 700px){.tpm-video-close { display: none;}}\n\t\t',
                document.head.appendChild(e),
                function () {
                    document.body.removeChild(c),
                        document.head.removeChild(e)
                }
        }
    ), []);
    var m = n.exports.useMemo((function () {
            return -1 !== t.indexOf(".mp4") ? F : /^https?:\/\/v\.qq\.com\/[\w/]+\/(\w{11,20})\.html$/.test(t) ? Y : W
        }
    ), [t]);
    return N.createPortal(a.createElement("div", null, a.createElement("div", {
        className: "tpm-video-mask"
    }), a.createElement("div", {
        className: "tpm-video-container",
        onClick: function () {
            l()
        }
    }, a.createElement("div", {
        className: "tpm-video-wrapper",
        onClick: function (e) {
            return e.stopPropagation()
        }
    }, a.createElement("a", {
        className: "tpm-video-close",
        href: "javascript:void 0;",
        style: {
            position: "absolute",
            right: -50,
            width: 32,
            height: 32,
            fontSize: 0
        },
        onClick: function (e) {
            e.stopPropagation(),
                l()
        }
    }), a.createElement(m, o({
        src: t
    }, s))))), c)
}
    , U = function (e) {
    var r = e.className
        , l = e.style
        , o = e.children
        , s = e.extra
        , c = e.url
        , m = e.hotrep
        , u = k("video-button")
        , d = i(u, r)
        , v = t(n.exports.useState(!1), 2)
        , f = v[0]
        , p = v[1];
    return a.createElement(a.Fragment, null, a.createElement("button", {
        className: d,
        style: l,
        onClick: function () {
            return p(!0)
        },
        hotrep: m
    }, a.createElement("div", {
        className: u + "__inner"
    }, a.createElement("i", {
        className: u + "__icon"
    }), a.createElement("span", {
        className: u + "__text"
    }, o), s && a.createElement("span", {
        className: u + "__extra"
    }, s))), f && a.createElement(X, {
        onHide: function () {
            return p(!1)
        },
        src: c
    }))
}
    , q = function (e) {
    var t, n = e.className, r = e.style, l = e.type, o = void 0 === l ? "bubble" : l, s = e.children, c = k("tag"),
        m = i(c, n, ((t = {})[c + "--" + o] = !!o,
            t));
    return a.createElement("span", {
        className: m,
        style: r
    }, a.createElement("span", {
        className: c + "__inner"
    }, s))
};
let Q;
const K = {}
    , $ = function (e, t) {
    if (!t)
        return e();
    if (void 0 === Q) {
        const e = document.createElement("link").relList;
        Q = e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
    }
    return Promise.all(t.map((e => {
            if (e in K)
                return;
            K[e] = !0;
            const t = e.endsWith(".css")
                , n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`))
                return;
            const a = document.createElement("link");
            return a.rel = t ? "stylesheet" : Q,
            t || (a.as = "script",
                a.crossOrigin = ""),
                a.href = e,
                document.head.appendChild(a),
                t ? new Promise(((e, t) => {
                        a.addEventListener("load", e),
                            a.addEventListener("error", t)
                    }
                )) : void 0
        }
    ))).then((() => e()))
};
var ee = n.exports.createContext({
    isMobile: S()
})
    , te = function (e) {
    var r = e.type
        , i = e.children
        , l = t(n.exports.useState((function () {
            return null != r ? "mobile" === r : S()
        }
    )), 2)
        , o = l[0]
        , s = l[1];
    return n.exports.useEffect((function () {
            var e = function () {
                var e = window.innerWidth <= 768;
                s(e)
            };
            e();
            var t = document.querySelector(".tpm-app-hidden");
            return null == t || t.classList.remove("tpm-app-hidden"),
                window.addEventListener("resize", e),
                function () {
                    window.removeEventListener("resize", e)
                }
        }
    ), []),
        a.createElement(ee.Provider, {
            value: {
                isMobile: o
            }
        }, i)
}
    , ne = function () {
    return n.exports.useContext(ee)
}
    , ae = function (e, t, n, a) {
    var r, i, l, o, s, c, m, u, d = 0, v = 0, f = [], p = function (e) {
        if (l = l || 0,
            o = o || 0,
            r = e.offsetX,
            i = e.offsetY,
        0 === l && 0 === o)
            return l = r,
                void (o = i);
        m = r - l,
            u = i - o,
            m = Math.min(Math.abs(m), 10) * m / (Math.abs(m) || 1),
            u = Math.min(Math.abs(u), 3) * u / (Math.abs(u) || 1);
        var p = t.maxVertical
            , h = void 0 === p ? Math.PI / 16 : p
            , _ = t.minVertical
            , E = void 0 === _ ? -Math.PI / 16 : _
            , y = t.maxHorizon
            , g = void 0 === y ? Math.PI / 12 : y
            , N = t.minHorizon
            , b = void 0 === N ? -Math.PI / 12 : N;
        switch (s = m * ((g - b) / 626),
            c = u * ((h - E) / 534),
            l = r,
            o = i,
            a) {
            case "translate":
                (d < g && d > b || d >= g && s > 0 || d <= b && s < 0) && (d += -1 * s),
                (v < h && v > E || v >= h && c > 0 || v <= E && c < 0) && (v += -1 * c),
                    n.current.style.transform = "translate(" + d + "px, " + v + "px)";
                break;
            default:
                var x, w = [];
                if (x || n.traverse((function (e) {
                        "rotate_group" === e.name && w.push(e),
                            x = w[0]
                    }
                )),
                    !x)
                    return;
                (x.rotation.y < g && x.rotation.y > b || x.rotation.y >= g && s < 0 || x.rotation.y <= b && s > 0) && w.forEach((function (e, t) {
                        e.rotation.y += s
                    }
                )),
                (x.rotation.x < h && x.rotation.x > E || x.rotation.x >= h && c < 0 || x.rotation.x <= E && c > 0) && w.forEach((function (e) {
                        e.rotation.x += c
                    }
                )),
                    f = w
        }
    }, h = function (e) {
        switch (a) {
            case "translate":
                b.fromTo(n.current, {
                    translateX: d,
                    translateY: v
                }, {
                    translateX: 0,
                    translateY: 0,
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: function () {
                    }
                });
                break;
            default:
                f.forEach((function (e) {
                        b.to(e.rotation, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "power2.inOut",
                            duration: .5,
                            onComplete: function () {
                            }
                        })
                    }
                ))
        }
        l = 0,
            o = 0,
            d = 0,
            v = 0
    };
    return e.addEventListener("mousemove", p),
        e.addEventListener("mouseout", h),
        function () {
            e.removeEventListener("mousemove", p),
                e.removeEventListener("mouseout", h)
        }
}
    , re = a.forwardRef((function (e, r) {
        var i = e.options
            , l = e.activeIdx
            , s = n.exports.useRef([])
            , c = n.exports.useRef({})
            , m = n.exports.useRef(l);
        m.current = l;
        var u = n.exports.useMemo((function () {
                return i.map((function (e) {
                        var t = {};
                        if (e.url)
                            try {
                                t = o(o({}, e), {
                                    meshes: JSON.parse(e.meshes)
                                })
                            } catch (n) {
                                console.log("invalid meshes param"),
                                    t = {}
                            }
                        return t
                    }
                ))
            }
        ), [i])
            , d = n.exports.useRef()
            , v = n.exports.useRef()
            , f = n.exports.useRef()
            , p = t(n.exports.useState(0), 2)
            , h = p[0]
            , _ = p[1]
            , E = t(n.exports.useState({}), 2)
            , N = E[0]
            , x = E[1];
        n.exports.useEffect((function () {
                _(1)
            }
        ), [h]),
            L((function () {
                    y(void 0, void 0, void 0, (function () {
                            var e, n, a, i, l, u, p, h, _, E, y;
                            return g(this, (function (g) {
                                    switch (g.label) {
                                        case 0:
                                            return [4, Promise.all([$((() => import("./three.module.1d0a2815.js")), void 0), $((() => import("./index.08cd9453.js")), ["https://cloudcache.tencent-cloud.com/qcloud/portal/home/assets/index.08cd9453.js", "https://cloudcache.tencent-cloud.com/qcloud/portal/home/assets/three.module.1d0a2815.js"])])];
                                        case 1:
                                            return e = t.apply(void 0, [g.sent(), 2]),
                                                n = e[0],
                                                a = e[1],
                                                i = a.RGBELoader,
                                                l = a.GLTFLoader,
                                                r.current ? (u = new l,
                                                    (p = new n.WebGLRenderer({
                                                        antialias: !0,
                                                        alpha: !0,
                                                        canvas: r.current
                                                    })).setPixelRatio(window.devicePixelRatio),
                                                    p.setSize(626, 534),
                                                    p.outputEncoding = n.sRGBEncoding,
                                                    p.setClearColor(16777215, 0),
                                                    (h = new n.PerspectiveCamera(40, 626 / 534, 1, 1e3)).position.set(0, 0, 47),
                                                    h.lookAt(0, 0, -10),
                                                    (_ = new n.Scene).add(h),
                                                    d.current = _,
                                                    f.current = new n.Clock,
                                                    E = function (e, t) {
                                                        return new Promise((function (a, r) {
                                                                (new i).setDataType(n.UnsignedByteType).load(e, (function (e) {
                                                                        var t = l.fromEquirectangular(e);
                                                                        l.dispose(),
                                                                            e.dispose(),
                                                                            a(t.texture)
                                                                    }
                                                                ));
                                                                var l = new n.PMREMGenerator(t);
                                                                l.compileEquirectangularShader()
                                                            }
                                                        ))
                                                    }
                                                    ,
                                                    y = function (e, t, a) {
                                                        (null == e ? void 0 : e.url) && !c.current[t] && u.load(e.url, (function (r) {
                                                                var i;
                                                                if (!c.current[t]) {
                                                                    c.current[t] = !0;
                                                                    var l = o(o({}, e), {
                                                                        children: []
                                                                    })
                                                                        , u = r.scene
                                                                        , f = e.meshes;
                                                                    u.traverse((function (e) {
                                                                            if (e.isMesh) {
                                                                                if (e.layers.set(t + 1),
                                                                                e.name.indexOf("glass") > -1) {
                                                                                    var a = new n.Group
                                                                                        , r = e.clone()
                                                                                        , i = f[e.name];
                                                                                    r.material = new n.MeshPhysicalMaterial(o({}, i.frontMaterial)),
                                                                                        r.material.color.convertSRGBToLinear(),
                                                                                        r.originalOpacity = e.material.opacity,
                                                                                        r.renderOrder = 2,
                                                                                        a.add(r);
                                                                                    var s = e.clone();
                                                                                    s.name = s.name + "copy",
                                                                                        s.material = new n.MeshPhysicalMaterial(o({}, i.backMaterial)),
                                                                                        s.material.color.convertSRGBToLinear(),
                                                                                        s.originalOpacity = e.material.opacity,
                                                                                        s.renderOrder = 1,
                                                                                        a.add(s),
                                                                                        l.children.push(a)
                                                                                }
                                                                                if (e.name.indexOf("soft") > -1) {
                                                                                    var c = new n.MeshStandardMaterial(o({}, f[e.name]));
                                                                                    e.material = c,
                                                                                        e.material.color.convertSRGBToLinear(),
                                                                                        e.material.emissive.convertSRGBToLinear(),
                                                                                        e.originalOpacity = e.material.opacity,
                                                                                        l.children.push(e)
                                                                                } else
                                                                                    e.name.indexOf("glass") < 0 && (e.originalOpacity = e.material.opacity,
                                                                                        e.material.color.convertSRGBToLinear(),
                                                                                        e.material.envMapIntensity = 1,
                                                                                        l.children.push(e))
                                                                            }
                                                                        }
                                                                    ));
                                                                    var p = new n.Group;
                                                                    p.name = "rotate_group",
                                                                    null === (i = d.current) || void 0 === i || i.add(p),
                                                                        l.children.forEach((function (e) {
                                                                                p.add(e)
                                                                            }
                                                                        )),
                                                                    r.animations.length > 0 && (l.animations = r.animations,
                                                                        l.mixer = new n.AnimationMixer(d.current),
                                                                        l.animations.forEach((function (e) {
                                                                                if (e) {
                                                                                    var t = e.clone();
                                                                                    t.tracks = t.tracks.filter((function (e) {
                                                                                            return (null == e ? void 0 : e.name) && e.name.indexOf("glass") > -1
                                                                                        }
                                                                                    )).map((function (e) {
                                                                                            return e.name = e.name.replace(".", "copy."),
                                                                                                e
                                                                                        }
                                                                                    )),
                                                                                    t.tracks.length > 0 && l.mixer.clipAction(t).play(),
                                                                                        l.mixer.clipAction(e).play()
                                                                                }
                                                                            }
                                                                        ))),
                                                                        s.current[t] = l,
                                                                    t === m.current && v.current && (h.layers.disableAll(),
                                                                        h.layers.enable(t + 1)),
                                                                    null == a || a()
                                                                }
                                                            }
                                                        ))
                                                    }
                                                    ,
                                                    x({
                                                        THREE: n,
                                                        camera: h,
                                                        renderer: p,
                                                        hdrLoader: E,
                                                        modelLoader: y
                                                    }),
                                                    [2]) : [2]
                                    }
                                }
                            ))
                        }
                    ))
                }
            ), [h]),
            n.exports.useEffect((function () {
                    if (!P(N)) {
                        var e = N.hdrLoader
                            , t = N.renderer
                            , n = N.camera;
                        e("https://main.qcloudimg.com/trisys/assets/home/models/studio-0727.hdr", t).then((function (e) {
                                v.current = e,
                                    d.current.environment = e,
                                c.current[m.current] && (n.layers.disableAll(),
                                    n.layers.enable(m.current + 1))
                            }
                        ))
                    }
                }
            ), [N]),
            n.exports.useEffect((function () {
                    if (!P(N)) {
                        var e = N.renderer
                            , t = function () {
                            var t;
                            e.setSize(0, 0),
                            null === (t = r.current) || void 0 === t || t.setAttribute("style", "visibility:hidden;")
                        };
                        return window.addEventListener("pagehide", t),
                            function () {
                                window.removeEventListener("pagehide", t)
                            }
                    }
                }
            ), [N]),
            n.exports.useEffect((function () {
                    if (!P(N)) {
                        var e = N.modelLoader
                            , t = function (t, n, a) {
                            (null == t ? void 0 : t.url) && !c.current[n] ? e(t, n, a) : null == a || a()
                        }
                            , n = u[l];
                        t(n, l, (function () {
                                var e = l + 1
                                    , n = u[e];
                                n && t(n, e)
                            }
                        ))
                    }
                }
            ), [N, l, u]),
            n.exports.useEffect((function () {
                    if (!P(N)) {
                        var e, t = N.renderer, n = N.camera, a = requestAnimationFrame(i);
                        return window.IntersectionObserver && (e = new IntersectionObserver((function (e) {
                                e.forEach((function (e) {
                                        cancelAnimationFrame(a),
                                        0 !== e.intersectionRatio && (a = requestAnimationFrame(i))
                                    }
                                ))
                            }
                        ), {
                            threshold: 0
                        })).observe(r.current),
                            function () {
                                cancelAnimationFrame(a),
                                null == e || e.disconnect()
                            }
                    }

                    function i() {
                        var e, r, l;
                        if (d.current && (t.render(d.current, n),
                            d.current.rotation.y += .006),
                            null === (r = null === (e = s.current) || void 0 === e ? void 0 : e[m.current]) || void 0 === r ? void 0 : r.mixer) {
                            var o = null === (l = f.current) || void 0 === l ? void 0 : l.getDelta();
                            s.current[m.current].mixer.update(o)
                        }
                        a = requestAnimationFrame(i)
                    }
                }
            ), [N]),
            n.exports.useEffect((function () {
                    if (!P(N)) {
                        var e = ae(r.current, {}, d.current);
                        return function () {
                            null == e || e()
                        }
                    }
                }
            ), [N]),
            n.exports.useEffect((function () {
                    var e, t;
                    if (!P(N)) {
                        var n = N.camera;
                        n.layers.disableAll();
                        var a = null === (e = s.current) || void 0 === e ? void 0 : e[l];
                        if (a && !P(a)) {
                            var r = null !== (t = a.children) && void 0 !== t ? t : [];
                            r.length && (n.layers.enable(l + 1),
                                r.forEach((function (e) {
                                        e.traverse((function (e) {
                                                e.isMesh && function (e) {
                                                    b.fromTo(e.material, {
                                                        opacity: 0
                                                    }, {
                                                        duration: .3,
                                                        opacity: e.originalOpacity,
                                                        ease: "expo.in"
                                                    })
                                                }(e)
                                            }
                                        ))
                                    }
                                )))
                        }
                    }
                }
            ), [l, N]);
        return a.createElement("div", {
            className: "hero__model-wrap",
            onClick: function () {
                var t;
                null === (t = e.onClick) || void 0 === t || t.call(e)
            }
        }, a.createElement("div", {
            className: "hero__model-inner-wrap"
        }, a.createElement("canvas", {
            className: "hero__model-canvas",
            ref: r
        })))
    }
))
    , ie = function (e) {
    var r, l, s, c = e.className, m = e.style, u = e.slides, d = e.entries, v = e.duration, f = void 0 === v ? 4e3 : v,
        p = e.id, h = k("hero"),
        _ = M() && (null === (r = window.timeStamps) || void 0 === r ? void 0 : r[0]) ? new Date(null === (l = window.timeStamps) || void 0 === l ? void 0 : l[0]).getTime() : (new Date).getTime(),
        E = t(n.exports.useState((function () {
                return u
            }
        )), 2), y = E[0], g = E[1];
    n.exports.useEffect((function () {
            var e = u.filter((function (e) {
                    var t = e.activity;
                    if (null == t ? void 0 : t.deadline) {
                        var n = new Date(t.deadline).getTime();
                        return _ < n
                    }
                    return !0
                }
            ));
            e.length !== u.length && g(e)
        }
    ), [u]);
    var N = t(n.exports.useState(0), 2)
        , x = N[0]
        , w = N[1]
        , I = n.exports.useRef(null)
        , S = n.exports.useRef()
        , L = n.exports.useRef(!1)
        , O = n.exports.useMemo((function () {
            return y.map((function (e) {
                    return e.model
                }
            ))
        }
    ), [y])
        , B = C()
        , j = n.exports.useRef()
        , D = n.exports.useRef(null)
        , G = i(h, c, (null === (s = O[x]) || void 0 === s ? void 0 : s.url) ? h + "--with-3d" : h + "--with-event");
    n.exports.useEffect((function () {
            if (D.current) {
                var e = ae(D.current, {
                    maxVertical: 25,
                    minVertical: -25,
                    maxHorizon: 25,
                    minHorizon: -25
                }, j, "translate");
                return function () {
                    null == e || e()
                }
            }
        }
    ), [D.current]),
        n.exports.useEffect((function () {
                var e,
                    t = null === (e = I.current) || void 0 === e ? void 0 : e.querySelector("." + h + "__item.is-active ." + h + "__item-bg");
                j.current = t
            }
        ), [x]);
    var H = n.exports.useRef(!1);
    n.exports.useEffect((function () {
            var e, t, n, a, r, i = y[x].theme;
            i ? (null === (t = null === (e = window.QCPortalKit) || void 0 === e ? void 0 : e.setTopNavTheme) || void 0 === t || t.call(e, i),
                H.current = !0) : H.current && (window.QCPortalKit && (null === (a = (n = window.QCPortalKit).setTopNavTheme) || void 0 === a || a.call(n, null === (r = window.QCPortalKit.options.topNav) || void 0 === r ? void 0 : r.theme)),
                H.current = !1)
        }
    ), [y, x]),
        n.exports.useEffect((function () {
                var e, t = y[x];
                if (t && Array.isArray(t.videos) && t.videos.length) {
                    var n = null === (e = I.current) || void 0 === e ? void 0 : e.querySelectorAll("video");
                    n[1] && n[0].addEventListener("ended", (function () {
                            n[1].classList.remove("is-hide"),
                                n[1].play(),
                                n[0].classList.add("is-hide")
                        }
                    ))
                }
            }
        ), [x, y]);
    var J = z();
    n.exports.useEffect((function () {
            J || Z()
        }
    ), [x]),
        n.exports.useEffect((function () {
                if (!L.current) {
                    var e = y.length;
                    return S.current = setTimeout((function () {
                            F((x + 1) % e)
                        }
                    ), f),
                        function () {
                            clearTimeout(S.current)
                        }
                }
            }
        ), [x, y.length]);
    var Z = function () {
        var e, t = null === (e = I.current) || void 0 === e ? void 0 : e.querySelector("." + h + "__item.is-active");
        t && b.fromTo(t, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .3,
            ease: "expo.in"
        })
    }
        , F = function (e) {
        var t, n, a;
        e !== x && (t = function () {
            w(e)
        }
            ,
            (a = null === (n = I.current) || void 0 === n ? void 0 : n.querySelector("." + h + "__item.is-active")) ? b.fromTo(a, {
                opacity: 1
            }, {
                opacity: 0,
                duration: 0,
                ease: "expo.in",
                onComplete: function () {
                    null == t || t()
                }
            }) : null == t || t())
    }
        , W = function () {
        L.current = !0,
            clearTimeout(S.current)
    }
        , V = function () {
        L.current = !1,
            S.current = setTimeout((function () {
                    var e;
                    e = x + 1 >= y.length ? 0 : x + 1,
                        F(e)
                }
            ), f)
    }
        , Y = function (e, t) {
        var n, r, l, s = e.id, c = e.title, m = e.desc, u = e.link, d = e.bgColor, v = e.bgImage, f = e.image,
            p = e.videos, _ = void 0 === p ? [] : p, E = t === x, y = {
                backgroundImage: v ? "url(" + v + ")" : void 0
            };
        return a.createElement("li", {
            className: i(h + "__item", {
                "is-active": E
            }),
            key: t,
            style: o({
                backgroundColor: d
            }, E ? {} : {
                display: "none"
            }),
            "data-id": s
        }, a.createElement("a", o(o({}, (null == u ? void 0 : u.to) ? {
            href: u.to
        } : {}), {
            className: h + "__item-link",
            hotrep: "home.hero.banner" + (t + 1),
            "aria-label": c,
            target: "_blank"
        }), a.createElement("div", {
            className: h + "__item-bg-wrap"
        }, a.createElement("div", {
            className: h + "__item-bg",
            style: y
        }, !!_.length && function (e) {
            var t, n = null !== (t = e.videos) && void 0 !== t ? t : [];
            return n.length ? a.createElement(a.Fragment, null, a.createElement("video", {
                src: n[0],
                className: h + "__item-video",
                muted: !0,
                autoPlay: !0,
                loop: 1 === n.length
            }), n[1] && a.createElement("video", {
                src: n[1],
                className: h + "__item-video is-hide",
                muted: !0,
                loop: !0
            })) : null
        }(e), !!_.length && d && (r = {
            background: "linear-gradient(to left, " + A(n = d, 0) + " 0%, " + n + " 100%)"
        },
            l = {
                background: "linear-gradient(to right, " + A(n, 0) + " 0%, " + n + " 100%)"
            },
            a.createElement(a.Fragment, null, a.createElement("div", {
                className: h + "__item-bg-gradient-left",
                style: r
            }), a.createElement("div", {
                className: h + "__item-bg-gradient-right",
                style: l
            }))))), !B && a.createElement("div", {
            className: h + "__item-3d"
        }, a.createElement("div", {
            className: h + "__item-3d-main",
            style: {
                backgroundImage: f ? "url(" + f + ")" : void 0
            }
        })), a.createElement("div", {
            className: h + "__item-content"
        }, a.createElement("h3", {
            className: h + "__item-title"
        }, c), a.createElement("div", {
            className: h + "__item-desc"
        }, m), (null == u ? void 0 : u.text) && (null == u ? void 0 : u.to) && a.createElement("div", {
            className: h + "__item-btns"
        }, a.createElement(T, {
            type: "primary",
            size: "xl"
        }, u.text)))))
    };
    return a.createElement("div", {
        "data-id": p,
        className: G,
        style: m,
        ref: I,
        role: "banner"
    }, a.createElement("div", {
        onMouseEnter: W,
        onMouseLeave: V
    }, B && a.createElement(re, {
        options: O,
        activeIdx: x,
        ref: D,
        onClick: function () {
            var e, t, n = null === (e = y[x].link) || void 0 === e ? void 0 : e.to;
            n && ((null === (t = window.QCPortalKit) || void 0 === t ? void 0 : t.replaceUrlTLD) && (n = window.QCPortalKit.replaceUrlTLD(n)),
                window.open(n, "_blank"))
        }
    })), a.createElement("div", {
        className: h + "__main",
        onMouseEnter: W,
        onMouseLeave: V
    }, a.createElement("ul", {
        className: h + "__list"
    }, y && y.map((function (e, t) {
            return Y(e, t)
        }
    ))), a.createElement("div", {
        className: h + "__ctrl"
    }, a.createElement("ul", null, null == y ? void 0 : y.map((function (e, t) {
            return a.createElement("li", {
                className: i(h + "__ctrl-item", {
                    "is-active": t === x
                }),
                key: t,
                onClick: function () {
                    var e;
                    e = t,
                        L.current = !0,
                        clearTimeout(S.current),
                        F(e)
                }
            }, a.createElement("span", {
                className: h + "__ctrl-item-inner"
            }))
        }
    ))))), a.createElement("div", {
        className: h + "__entries-wrap"
    }, a.createElement("div", {
        className: h + "__entries-inner"
    }, null == d ? void 0 : d.map((function (e, t) {
            return function (e, t) {
                var n = e.id
                    , r = e.title
                    , i = e.desc
                    , l = e.to
                    , o = e.icon;
                return a.createElement("a", {
                    href: l,
                    className: h + "__entry",
                    key: t,
                    "data-id": n,
                    hotrep: "hp.belowbanner.news" + (t + 1),
                    target: "_blank"
                }, a.createElement("h3", {
                    className: h + "__entry-title"
                }, o && a.createElement("i", {
                    className: h + "__entry-icon",
                    style: {
                        backgroundImage: "url(" + o + ")"
                    }
                }), r), a.createElement("div", {
                    className: h + "__entry-desc"
                }, i))
            }(e, t)
        }
    )), function () {
        var e, t = y[x] || {}, n = t.activity, r = t.link;
        if (!n || P(n))
            return null;
        var l, s, c = n.image, m = n.links, u = void 0 === m ? [] : m, d = n.deadline, v = n.color,
            f = void 0 === v ? "#525af6" : v, p = n.to, E = n.title, g = n.countText, N = void 0 === g ? "还剩" : g, b = {
                backgroundImage: "linear-gradient(to bottom, " + f + " 0%, " + A(f, .85) + " 100%)",
                borderColor: A(f, .45),
                boxShadow: "8px 8px 20px 0 " + A(f, .4)
            }, w = {
                boxShadow: "8px 8px 20px 0 " + A(f, .1)
            }, I = {
                color: f
            };
        if (d) {
            var k = new Date(d).getTime();
            if (_ > k)
                return null;
            0 === (l = Math.floor((k - _) / 864e5)) && (s = Math.floor((k - _) / 36e5))
        }
        for (var M = [], S = 0; S < u.length; S += 2)
            M.push(u.slice(S, S + 2));
        var C = u.length ? "section" : "a";
        return a.createElement(C, o({
            className: i(h + "__event", (e = {},
                e[h + "__event--single"] = !u.length,
                e)),
            style: b,
            onMouseEnter: W,
            onMouseLeave: V
        }, (null != p ? p : r.to) ? {
            href: null != p ? p : r.to
        } : {}), c && a.createElement("div", {
            className: h + "__event-object"
        }, a.createElement("img", {
            src: c,
            alt: "",
            className: h + "__event-img"
        })), a.createElement("main", {
            className: h + "__event-main"
        }, M.map((function (e, t) {
                return a.createElement("ul", {
                    className: h + "__event-links",
                    key: t
                }, e.map((function (e, t) {
                        return a.createElement("li", {
                            className: h + "__event-link",
                            key: t
                        }, a.createElement(R, {
                            type: "white-arrow",
                            href: e.to
                        }, e.text))
                    }
                )))
            }
        )), E && a.createElement("h3", {
            className: h + "__event-title"
        }, E)), (void 0 !== l || void 0 !== s) && a.createElement("div", {
            className: h + "__event-count",
            style: w
        }, a.createElement("p", null, N), a.createElement("div", {
            className: h + "__event-count-num",
            style: I
        }, void 0 !== s ? a.createElement(a.Fragment, null, a.createElement("em", null, s), "小时") : a.createElement(a.Fragment, null, a.createElement("em", null, l), "天"))))
    }())))
}
    , le = H.SwiperSlide
    , oe = function (e) {
    var r, l, o = e.className, s = e.style, c = e.slides, m = e.entries, u = e.duration, d = void 0 === u ? 4e3 : u,
        v = t(n.exports.useState(0), 2), f = v[0], p = v[1], h = k("hero"),
        _ = i(h, o, (null === (l = null === (r = c[f]) || void 0 === r ? void 0 : r.model) || void 0 === l ? void 0 : l.url) ? "" : h + "--with-event"),
        E = n.exports.useRef(null), y = n.exports.useRef(!1), g = n.exports.useRef();
    n.exports.useEffect((function () {
            c.slice(1).forEach((function (e) {
                    var t;
                    e.bgImage && (t = e.bgImage,
                        new Promise((function (e, n) {
                                var a = new Image;
                                a.onload = a.onerror = function () {
                                    e()
                                }
                                    ,
                                    a.src = t
                            }
                        )))
                }
            ))
        }
    ), [c]),
        n.exports.useEffect((function () {
                if (!y.current)
                    return g.current = setTimeout((function () {
                            E.current.slideNext()
                        }
                    ), d),
                        function () {
                            clearTimeout(g.current)
                        }
            }
        ), [f, d]);
    return a.createElement("div", {
        className: _,
        style: s
    }, a.createElement("div", {
        className: h + "__main"
    }, a.createElement(H, {
        navigation: !1,
        pagination: {
            el: "." + h + "__ctrl > ul",
            bulletClass: h + "__ctrl-item",
            bulletActiveClass: "is-active",
            clickable: !0,
            renderBullet: function (e, t) {
                return '<li class="' + t + '"><span class="' + h + '__ctrl-item-inner">' + e + "</span></li>"
            }
        },
        onInit: function (e) {
            E.current = e
        },
        onSlideChange: function (e) {
            p(e.realIndex)
        },
        onTouchEnd: function () {
            y.current = !0
        },
        loop: !0,
        loopAdditionalSlides: c.length,
        className: h + "__list",
        showPage: !1
    }, c && c.map((function (e, t) {
            return function (e, t) {
                var n, r, l, o, s, c = e.bgImage, m = e.bgColor, u = e.title, d = e.desc, v = e.mobile,
                    f = null !== (n = null == v ? void 0 : v.title) && void 0 !== n ? n : u,
                    p = null !== (r = null == v ? void 0 : v.desc) && void 0 !== r ? r : d,
                    _ = null !== (l = null == v ? void 0 : v.bgImage) && void 0 !== l ? l : c, E = {
                        backgroundImage: _ ? "url(" + _ + ")" : void 0,
                        backgroundColor: null !== (o = null == v ? void 0 : v.bgColor) && void 0 !== o ? o : m
                    };
                return a.createElement(le, {
                    key: t
                }, a.createElement("div", {
                    className: i(h + "__item")
                }, a.createElement("a", {
                    href: null === (s = e.link) || void 0 === s ? void 0 : s.to,
                    className: h + "__item-link"
                }, a.createElement("div", {
                    className: h + "__item-bg " + h + "__item-bg--mobile",
                    style: E
                }), a.createElement("div", {
                    className: h + "__item-content"
                }, f && a.createElement("h3", {
                    className: h + "__item-title"
                }, f), p && a.createElement("div", {
                    className: h + "__item-desc"
                }, p)))))
            }(e, t)
        }
    ))), a.createElement("div", {
        className: h + "__ctrl",
        onClick: function (e) {
            return e.stopPropagation()
        }
    }, a.createElement("ul", null))), a.createElement("div", {
        className: h + "__entries-wrap"
    }, a.createElement("div", {
        className: h + "__entries-inner"
    }, m && m.map((function (e, t) {
            return function (e, t) {
                var n, r, i, l = e.title, o = e.desc, s = e.to, c = e.icon, m = e.mobile,
                    u = null !== (n = null == m ? void 0 : m.title) && void 0 !== n ? n : l,
                    d = null !== (r = null == m ? void 0 : m.desc) && void 0 !== r ? r : o,
                    v = null !== (i = null == m ? void 0 : m.to) && void 0 !== i ? i : s;
                return a.createElement("a", {
                    href: v,
                    className: h + "__entry",
                    key: t
                }, a.createElement("h3", {
                    className: h + "__entry-title"
                }, c && a.createElement("i", {
                    className: h + "__entry-icon",
                    style: {
                        backgroundImage: "url(" + c + ")"
                    }
                }), l), a.createElement("div", {
                    className: h + "__entry-desc"
                }, o), a.createElement("div", {
                    className: h + "__entry-mobile"
                }, a.createElement("h3", {
                    className: h + "__entry-title"
                }, c && a.createElement("i", {
                    className: h + "__entry-icon",
                    style: {
                        backgroundImage: "url(" + c + ")"
                    }
                }), u), a.createElement("div", {
                    className: h + "__entry-desc"
                }, d)))
            }(e, t)
        }
    )))))
};

function se(e) {
    return void 0 === e && (e = {}),
        function (t) {
            var n = Object.assign(e, t)
                , l = n.prefix
                , s = n.className
                , c = r(n, ["prefix", "className"])
                , m = k(l)
                , u = i(m, s);
            return a.createElement(O, o(o({}, c), {
                className: u
            }))
        }
}

var ce = function (e) {
    var t = e.recommends
        , n = ne().isMobile
        , r = k("product");
    return a.createElement("div", {
        className: r + "__recommends"
    }, null == t ? void 0 : t.map((function (e, t) {
            var i;
            return a.createElement("div", {
                className: r + "__recommend",
                key: t,
                "data-id": e.id
            }, e.to && a.createElement("a", o({
                href: e.to,
                className: r + "__recommend-link"
            }, n ? {} : {
                target: "_blank"
            })), a.createElement("header", {
                className: r + "__recommend-hd"
            }, a.createElement("h3", {
                className: r + "__recommend-title"
            }, e.title)), a.createElement("div", {
                className: r + "__recommend-desc"
            }, e.desc), !!(null === (i = e.links) || void 0 === i ? void 0 : i.length) && a.createElement("div", {
                className: r + "__recommend-btns"
            }, e.links.map((function (t, r) {
                    return a.createElement(T, o({
                        type: 0 === r ? "primary" : "white",
                        href: t.to,
                        key: r,
                        hotrep: e.hotrep + "_btn" + (r + 1)
                    }, n ? {} : {
                        target: "_blank"
                    }), t.text)
                }
            ))))
        }
    )))
}
    , me = function (e) {
    var t = e.className
        , n = e.style
        , r = e.title
        , l = e.desc
        , s = e.to
        , c = e.marks
        , m = void 0 === c ? [] : c
        , u = e.weakMarks
        , d = void 0 === u ? [] : u
        , v = e.labels
        , f = void 0 === v ? [] : v
        , p = e.link
        , h = e.hotrep
        , _ = k("product-set")
        , E = ne().isMobile
        , y = i(_, t);
    return a.createElement("a", o({
        href: (null == p ? void 0 : p.to) || s,
        className: y,
        style: n,
        hotrep: h
    }, E ? {} : {
        target: "_blank"
    }), a.createElement("header", {
        className: _ + "__hd"
    }, a.createElement("h4", {
        className: _ + "__title"
    }, r), a.createElement("div", {
        className: _ + "__marks"
    }, m && m.map((function (e, t) {
            return a.createElement(q, {
                type: "bubble",
                key: t
            }, e)
        }
    )), d && d.map((function (e, t) {
            return a.createElement(q, {
                type: "hole",
                key: t
            }, e)
        }
    )))), a.createElement("div", {
        className: _ + "__desc"
    }, l), f && a.createElement("div", {
        className: _ + "__labels"
    }, f.map((function (e, t) {
            return a.createElement(q, {
                type: "weak-hole",
                key: t
            }, e)
        }
    ))), (null == p ? void 0 : p.text) && a.createElement(R, {
        type: "arrow",
        useSpan: !0
    }, p.text))
}
    , ue = function (e) {
    var l = e.className;
    e.style;
    var s = e.items
        , c = r(e, ["className", "style", "items"])
        , m = t(n.exports.useState(!1), 2)
        , u = m[0]
        , d = m[1]
        , v = k("product-set__list")
        , f = i(v, l, {
        "is-open": u
    })
        , p = n.exports.useRef(0);
    return a.createElement(a.Fragment, null, a.createElement("ul", o({
        className: f
    }, c), null == s ? void 0 : s.map((function (e, t) {
            return a.createElement("li", {
                key: t,
                "data-id": e.id
            }, a.createElement(me, o({}, e)))
        }
    ))), s.length > 5 && a.createElement("div", {
        className: v + "-trigger"
    }, u ? a.createElement(R, {
        type: "arrow-top",
        onClick: function (e) {
            e.stopPropagation(),
                d(!1),
                window.scrollTo(0, p.current)
        }
    }, "收起") : a.createElement(R, {
        type: "arrow-bottom",
        onClick: function (e) {
            e.stopPropagation(),
                d(!0),
                p.current = window.pageYOffset
        }
    }, "展开更多")))
};

function de(e) {
    var t = e.children
        , n = e.className
        , r = e.style
        , l = void 0 === r ? {} : r
        , s = k("multi-tabs");
    return a.createElement("div", {
        className: i(s + "__panel", n),
        style: o(o({}, l), {
            flexShrink: 0
        })
    }, t)
}

ue.Item = me;
var ve = n.exports.forwardRef((function (e, r) {
        var l, o = e.id, s = e.label, c = e.onClick, m = e.actived, u = e.disabled, d = e.className, v = e.icon,
            f = e.iconAni, p = u ? null : c, h = k("multi-tabs__item"), _ = i(h, d, {
                "is-active": m,
                "is-disabled": u
            }), E = t(n.exports.useState(""), 2), y = E[0], g = E[1], N = t(n.exports.useState(""), 2), b = N[0], w = N[1],
            I = h + "-icon";
        return f && o === b && (I = i(I, ((l = {})["is-" + y] = !!y,
            l))),
            a.createElement("li", {
                role: "tab",
                "aria-hidden": "false",
                "aria-selected": !!m,
                tabIndex: m ? 0 : -1,
                className: _,
                ref: r,
                onMouseEnter: function () {
                    return e = o,
                        g("enter"),
                        void w(e);
                    var e
                },
                onMouseLeave: function () {
                    g("leave")
                }
            }, a.createElement("div", {
                className: h + "-cont",
                onClick: x(p)
            }, v && a.createElement("i", {
                className: I,
                style: {
                    backgroundImage: "url(" + v + ")"
                }
            }), s))
    }
))
    , fe = {
    transition: "opacity .5s ease",
    transformOrigin: "center"
};

function pe(e) {
    var r, l = e.tabs, o = void 0 === l ? [] : l, s = e.destroyInactivePanel, c = void 0 === s || s, m = e.activeId,
        u = e.defaultActiveId, d = e.onActive, v = void 0 === d ? function () {
            }
            : d, f = e.children, p = e.animated, h = void 0 === p || p, _ = e.className, E = e.style, y = e.iconAni,
        g = e.col, N = void 0 === g ? 7 : g, b = k("multi-tabs"), x = i(b, _, ((r = {})[b + "--ani"] = !!y,
            r)), I = Number(N), M = "", S = function () {
        }, P = "";
    if (void 0 === m) {
        var A = o.find((function (e) {
                return !e.disabled
            }
        ));
        P = A ? A.id : void 0
    } else
        P = u;
    var C = t(n.exports.useState(P), 2)
        , z = C[0]
        , L = C[1]
        , T = n.exports.useRef(-1);
    n.exports.useEffect((function () {
            if (-1 !== T.current) {
                var e = o.findIndex((function (e) {
                        return e.id === z
                    }
                ));
                -1 !== e && e < I && window.scrollTo(0, T.current)
            }
        }
    ), [z, o, I]);
    var R = []
        , O = I ? Math.ceil(o.length / I) : 1;
    void 0 === m ? (M = z,
            S = function (e, t) {
                var n = o.findIndex((function (e) {
                        return e.id === t.id
                    }
                ));
                -1 !== n && n < I && (T.current = window.pageYOffset),
                    L(t.id),
                "function" == typeof v && v(e, t, !0)
            }
    ) : (M = m,
        S = v);
    for (var B = 0; B < O; B++) {
        var j = I * B
            , D = j + I
            , G = {
            tabs: o.slice(j, D),
            panels: []
        };
        R.push(G)
    }
    var H, J = function (e) {
        var t, n, a = e.key, r = o.findIndex((function (e) {
                return e.id === z
            }
        ));
        if ("ArrowRight" === a) {
            var i = (r + 1) % o.length;
            L(null === (t = o[i]) || void 0 === t ? void 0 : t.id)
        }
        if ("ArrowLeft" === a) {
            i = r - 1 >= 0 ? r - 1 : o.length - 1;
            L(null === (n = o[i]) || void 0 === n ? void 0 : n.id)
        }
    }, Z = n.exports.useRef(new Set);

    function F(e, t) {
        void 0 === e && (e = {});
        var n = e.tabs.find((function (e) {
                return e.id === z
            }
        ));
        return a.createElement(a.Fragment, {
            key: t
        }, a.createElement("div", {
            className: i(b + "__bar")
        }, a.createElement("ul", {
            className: i(b + "__list"),
            role: "tablist",
            onKeyUp: J
        }, e.tabs.map((function (e) {
                return a.createElement(ve, {
                    key: e.id,
                    id: e.id,
                    label: e.label,
                    actived: e.id === M,
                    disabled: e.disabled,
                    icon: e.icon,
                    iconAni: y,
                    onClick: function (t) {
                        e.disabled || S(t, e)
                    }
                })
            }
        )))), n && a.createElement("div", {
            className: i(b + "__cont")
        }, e.panels))
    }

    return H = Z.current,
        a.Children.forEach(f, (function (e, t) {
                var n = Math.floor(t / I)
                    , r = R[n].panels;
                if (w(e, de)) {
                    var i = e.props
                        , l = e.key
                        , o = i.style
                        , s = void 0 === o ? {} : o
                        , m = i.id
                        , u = M === i.id;
                    u && !H.has(M) && H.add(M),
                    u || Object.assign(s, {
                        height: 0,
                        width: 0,
                        overflow: "hidden",
                        opacity: 0,
                        padding: 0,
                        margin: 0,
                        pointerEvents: "none",
                        display: "block"
                    }),
                    h && Object.assign(s, fe),
                        e.props.forceRender || c && u || !c && H.has(i.id) ? r.push(a.cloneElement(e, {
                            key: l || m,
                            style: s
                        })) : r.push(a.createElement(de, {
                            id: m,
                            key: l || m,
                            style: s
                        }))
                } else
                    a.isValidElement(e) ? r.push(a.cloneElement(e, {
                        key: t.toString()
                    })) : r.push(a.createElement("div", {
                        key: t.toString()
                    }, e))
            }
        )),
        a.createElement("div", {
            className: x,
            style: E
        }, R.map((function (e, t) {
                return F(e, t)
            }
        )))
}

var he = function (e) {
    var t, n = e.className, r = e.style, l = e.id, o = e.children, s = e.icon, c = e.label, m = e.disabled, u = e.open,
        d = e.onClick, v = k("collapse__panel"), f = i(v, n, ((t = {})["is-disabled"] = !!m,
            t["is-open"] = !!u,
            t));
    return a.createElement("div", {
        className: f,
        style: r
    }, a.createElement("header", {
        className: v + "-hd",
        onClick: function (e) {
            "function" == typeof d && d(e, {
                id: l,
                icon: s,
                label: c,
                open: !u
            })
        }
    }, s && a.createElement("i", {
        className: v + "-icon",
        style: {
            backgroundImage: "url(" + s + ")"
        }
    }), a.createElement("div", {
        className: v + "-title"
    }, c)), o && a.createElement("div", {
        className: v + "-bd"
    }, o))
}
    , _e = function (e) {
    var l = e.className
        , s = e.style
        , c = e.destroyInactivePanel
        , m = e.openId
        , u = e.onChange
        , d = e.defaultOpenId
        , v = e.children
        , f = k("collapse")
        , p = i(f, l)
        , h = t(n.exports.useState(d), 2)
        , _ = h[0]
        , E = h[1]
        , y = _;
    m && (y = m);
    var g = function () {
    };
    g = void 0 === m ? function (e, t, n) {
            void 0 === n && (n = !1);
            var a = y.includes(t.id) ? y.filter((function (e) {
                    return e !== t.id
                }
            )) : y.concat(t.id);
            E(a),
            "function" == typeof u && u(e, t, n)
        }
        : u;
    var N, b = n.exports.useRef(null), x = n.exports.useMemo((function () {
            return new Set
        }
    ), []);
    return a.createElement("div", {
        className: p,
        style: s,
        ref: b
    }, (N = [],
        a.Children.forEach(v, (function (e, t) {
                if (w(e, he)) {
                    var n = e.props
                        , i = e.key
                        , l = n.id
                        , s = n.onClick
                        , m = n.disabled
                        , u = r(n, ["id", "onClick", "disabled"])
                        , d = y.includes(n.id)
                        , v = function (e, t) {
                        "function" == typeof s && s(e, t),
                        "function" == typeof g && g(e, t)
                    };
                    d && !x.has(n.id) && x.add(n.id),
                        e.props.forceRender || c && d || !c && x.has(n.id) ? N.push(a.cloneElement(e, {
                            key: i || l,
                            open: d,
                            onClick: m ? function () {
                                }
                                : v
                        })) : (delete u.children,
                            N.push(a.createElement(he, o({
                                id: l,
                                key: i || l,
                                open: d,
                                disabled: m,
                                onClick: m ? function () {
                                    }
                                    : v
                            }, u))))
                } else
                    a.isValidElement(e) ? N.push(a.cloneElement(e, {
                        key: t.toString()
                    })) : N.push(a.createElement("div", {
                        key: t.toString()
                    }, e))
            }
        )),
        N))
};
_e.defaultProps = {
    destroyInactivePanel: !0
};
var Ee = _e;
Ee.CollapsePanel = he;
var ye = Ee.CollapsePanel;
var ge = function (e) {
    e.responsivePoint;
    var t = r(e, ["responsivePoint"]);
    if (!ne().isMobile)
        return a.createElement(pe, o({}, t));
    var n = t.tabs
        , i = t.onActive
        , l = t.children
        , s = r(t, ["tabs", "onActive", "children"])
        , c = [];
    return a.Children.forEach(l, (function (e, t) {
            if (w(e, de)) {
                var i = e.props
                    , l = e.key
                    , s = i.id
                    , m = r(i, ["id"])
                    , u = void 0
                    , d = n ? n.find((function (e) {
                        return e.id === s
                    }
                )) : null;
                d && (u = Object.assign(m, d)),
                    c.push(a.createElement(ye, o({
                        key: l
                    }, u)))
            } else
                a.isValidElement(e) ? c.push(a.cloneElement(e, {
                    key: t.toString()
                })) : c.push(a.createElement("div", {
                    key: t.toString()
                }, e))
        }
    )),
        a.createElement(Ee, o(o({}, s), {
            onChange: i,
            openId: s.openId ? [s.openId] : void 0,
            defaultOpenId: s.defaultActiveId ? [s.defaultActiveId] : []
        }), c)
};
ge.MultiTabPanel = de;
var Ne, be = ge.MultiTabPanel, xe = se({
    prefix: "product__section",
    className: "is-full"
}), we = function (e) {
    var t = e.certifications
        , n = void 0 === t ? [] : t
        , r = k("infrastructure");
    return a.createElement("div", {
        className: r + "__cert"
    }, a.createElement("ul", {
        className: r + "__cert-list"
    }, n.map((function (e, t) {
            return a.createElement("li", {
                className: r + "__cert-item",
                key: t
            }, a.createElement("a", {
                href: e.to ? e.to : void 0,
                className: r + "__cert-item-link"
            }, a.createElement("div", {
                className: r + "__cert-item-logo"
            }, a.createElement("img", {
                src: e.logo,
                alt: e.label
            })), a.createElement("div", {
                className: r + "__cert-item-text"
            }, e.label)))
        }
    )), a.createElement("li", {
        className: r + "__cert-item " + r + "__cert-item--more"
    }, a.createElement("a", {
        href: "https://cloud.tencent.com/act/event/compliance",
        className: r + "__cert-item-link",
        hotrep: "home.region.btn2"
    }, a.createElement("div", {
        className: r + "__cert-item-logo"
    }), a.createElement(R, {
        type: "arrow",
        useSpan: !0
    }, "腾讯云安全合规")))), a.createElement(R, {
        type: "arrow",
        className: r + "__cert-entry",
        href: "https://cloud.tencent.com/act/event/compliance"
    }, "了解安全与合规性"))
}, Ie = [{
    lat: 55.7635,
    lon: 37.6271
}, {
    lat: 51.52,
    lon: -.1263
}, {
    lat: 52.3795,
    lon: 4.8867
}, {
    lat: 50.126,
    lon: 8.6557
}, {
    lat: 37.36,
    lon: 122.03
}, {
    lat: 43.6878,
    lon: -79.6238
}, {
    lat: 37.2592,
    lon: -79.9429
}, {
    lat: 32.7559,
    lon: -96.8146
}, {
    lat: -23.5298,
    lon: -46.6585
}, {
    lat: 39.9111,
    lon: 116.418
}, {
    lat: 30.6696,
    lon: 104.0288
}, {
    lat: 29.5954,
    lon: 106.4544
}, {
    lat: 23.1379,
    lon: 113.3376
}, {
    lat: 22.5443,
    lon: 114.0552
}, {
    lat: 22.3253,
    lon: 114.1675
}, {
    lat: 31.2569,
    lon: 121.5055
}, {
    lat: 32.064,
    lon: 118.7871
}, {
    lat: 37.5632,
    lon: 126.9939
}, {
    lat: 35.6915,
    lon: 139.7772
}, {
    lat: 13.7685,
    lon: 100.6056
}, {
    lat: 19.0821,
    lon: 72.8825
}, {
    lat: 13.0615,
    lon: 80.1904
}, {
    lat: 1.3641,
    lon: 103.8675
}, {
    lat: -6.2065,
    lon: 106.8435
}, {
    lat: -33.8464,
    lon: 151.1825
}], ke = function (e) {
    var r, l = e.className, o = e.style, s = k("earth"), c = i(s, l), m = n.exports.useRef(null),
        u = n.exports.useRef(null), d = n.exports.useRef(null), v = C(), f = t(n.exports.useState(0), 2), p = f[0],
        h = f[1];
    return n.exports.useEffect((function () {
            h(1)
        }
    ), [p]),
        L((function () {
                if (v) {
                    var e, n;
                    return y(void 0, void 0, void 0, (function () {
                            function a() {
                                s.length > 0 && s.map((function (e) {
                                        e.update()
                                    }
                                )),
                                k && k.update(),
                                    o.rotation.y += .001,
                                    o.rotation.x += 4e-4,
                                    w.render(x, I),
                                    n = requestAnimationFrame(a)
                            }

                            var r, i, l, o, s, c, v, f, p, h, _, E, y, N, x, w, I, k;
                            return g(this, (function (g) {
                                    switch (g.label) {
                                        case 0:
                                            return [4, Promise.all([$((() => import("./three.module.1d0a2815.js")), void 0), $((() => import("./index.a59b9bb7.js")), ["https://cloudcache.tencent-cloud.com/qcloud/portal/home/assets/index.a59b9bb7.js", "https://cloudcache.tencent-cloud.com/qcloud/portal/home/assets/three.module.1d0a2815.js"])])];
                                        case 1:
                                            return r = t.apply(void 0, [g.sent(), 2]),
                                                i = r[0],
                                                l = r[1].TrackballControls,
                                                o = new i.Group,
                                                s = [],
                                                c = Ie.length,
                                                v = function (e) {
                                                    for (var t = Math.floor(e * Math.random()), n = Math.floor(e * Math.random()); n === t;)
                                                        n = Math.floor(e * Math.random());
                                                    return [t, n]
                                                }
                                                ,
                                                f = function () {
                                                    var e, t, n = function () {
                                                        var n = v(c);
                                                        e = Ie[n[0]],
                                                            t = Ie[n[1]]
                                                    };
                                                    for (n(); Math.abs(e.lat - t.lat) > 50 || Math.abs(e.lon - t.lon) > 115 || Math.abs(e.lat - t.lat) < 5 && Math.abs(e.lon - t.lon) < 5;)
                                                        n();
                                                    return [e, t]
                                                }
                                                ,
                                                p = function (e) {
                                                    return new Promise((function (t, n) {
                                                            (new i.TextureLoader).load(e, (function (e) {
                                                                    t(e)
                                                                }
                                                            ))
                                                        }
                                                    ))
                                                }
                                                ,
                                                h = function (e, t) {
                                                    var n = new i.MeshBasicMaterial({
                                                        map: e
                                                    })
                                                        , a = new i.SphereBufferGeometry(17, 68, 68)
                                                        , r = new i.Mesh(a, n);
                                                    t.add(r)
                                                }
                                                ,
                                                _ = function (e, t) {
                                                    var n = e.lon * Math.PI / 180
                                                        , a = e.lat * Math.PI / 180
                                                        , r = n + Math.PI + Math.PI / 2
                                                        , i = a - Math.PI / 2
                                                        , l = t || 0
                                                        , o = (17 - l) * Math.cos(r) * Math.sin(i);
                                                    return {
                                                        x: (17 - l) * Math.sin(r) * Math.sin(i),
                                                        y: (17 - l) * Math.cos(i),
                                                        z: o
                                                    }
                                                }
                                                ,
                                                E = function (e, t) {
                                                    var n = new i.Vector3(e.x, e.y, e.z)
                                                        , a = new i.Vector3(t.x, t.y, t.z)
                                                        , r = n.distanceTo(a)
                                                        ,
                                                        l = new i.Vector3((e.x + t.x) / 2, (e.y + t.y) / 2, (e.z + t.z) / 2)
                                                        ,
                                                        o = new i.Vector3((e.x + l.x) / 2, (e.y + l.y) / 2, (e.z + l.z) / 2)
                                                        ,
                                                        s = new i.Vector3((l.x + t.x) / 2, (l.y + t.y) / 2, (l.z + t.z) / 2);
                                                    o.normalize(),
                                                        s.normalize();
                                                    var c = (r + 1) / 4;
                                                    return o.multiplyScalar(17 + c),
                                                        s.multiplyScalar(17 + c),
                                                        [n, o, s, a]
                                                }
                                                ,
                                                y = function (e) {
                                                    var t = new i.CubicBezierCurve3(e[0], e[1], e[2], e[3])
                                                        , n = new i.TubeGeometry(t, 80, .015, 8, !1)
                                                        , a = new i.MeshBasicMaterial({
                                                        color: new i.Color(12506099),
                                                        opacity: 0,
                                                        transparent: !0
                                                    })
                                                        , r = new i.Mesh(n, a);
                                                    return r.currentPos = 0,
                                                        r
                                                }
                                                ,
                                                N = function () {
                                                    function e(e) {
                                                        var t = this;
                                                        this.delay = this.originalDelay = e.delay,
                                                            this.locations = e.locations,
                                                            this.flyMap = e.map,
                                                            this.life = this.originalLife = 1,
                                                            this.COUNT = 90;
                                                        var n = _(this.locations[0])
                                                            , a = _(this.locations[1])
                                                            , r = E(n, a);
                                                        this.line = y(r),
                                                            this.line.pointsArray = this.getLinePoints();
                                                        for (var l = 0; l < this.COUNT; l++)
                                                            this.line.pointsArray.unshift(new i.Vector3(0, 0, 0)),
                                                                this.line.pointsArray.push(new i.Vector3(0, 0, 0));
                                                        this.currentPos = 0,
                                                            this.speed = 2,
                                                            this.len = this.line.pointsArray.length,
                                                            o.add(this.line),
                                                            this.fadeIn(this.line, (function () {
                                                                    t.meteor = t.makeMeteor(t.COUNT),
                                                                        o.add(t.meteor)
                                                                }
                                                            ))
                                                    }

                                                    return e.prototype.update = function () {
                                                        this.delay > 0 ? this.delay -= .01 : this.life > 0 && this.meteor ? this.updateMeteor() : this.life <= 0 && this.reset()
                                                    }
                                                        ,
                                                        e.prototype.reset = function () {
                                                            var e = this;
                                                            this.life = this.originalLife,
                                                                this.delay = this.originalDelay,
                                                                this.locations = f();
                                                            var t = _(this.locations[0])
                                                                , n = _(this.locations[1])
                                                                , a = E(t, n);
                                                            o.remove(this.meteor),
                                                                this.meteor.geometry.dispose(),
                                                                this.meteor.material.dispose(),
                                                                this.meteor = null,
                                                                this.fadeOut(this.line, (function () {
                                                                        e.line = y(a),
                                                                            e.line.pointsArray = e.getLinePoints();
                                                                        for (var t = 0; t < e.COUNT; t++)
                                                                            e.line.pointsArray.unshift(new i.Vector3(0, 0, 0)),
                                                                                e.line.pointsArray.push(new i.Vector3(0, 0, 0));
                                                                        e.currentPos = 0,
                                                                            e.len = e.line.pointsArray.length,
                                                                            e.fadeIn(e.line, (function () {
                                                                                    e.meteor = e.makeMeteor(e.COUNT),
                                                                                        o.add(e.meteor)
                                                                                }
                                                                            )),
                                                                            o.add(e.line)
                                                                    }
                                                                ))
                                                        }
                                                        ,
                                                        e.prototype.makeMeteor = function (e) {
                                                            var t = new i.ShaderMaterial({
                                                                side: i.DoubleSide,
                                                                transparent: !0,
                                                                depthWrite: !1,
                                                                uniforms: {
                                                                    t: {
                                                                        type: "t",
                                                                        value: this.flyMap
                                                                    },
                                                                    baseSize: {
                                                                        type: "f",
                                                                        value: Math.floor(150)
                                                                    }
                                                                },
                                                                vertexShader: "uniform sampler2D t;\nuniform float baseSize;\nattribute float opacity;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix*vec4(position,1.);\n    gl_PointSize = (opacity+0.1)*baseSize*(1./ -mvPosition.z);\n    gl_Position = projectionMatrix*mvPosition;\n}\n",
                                                                fragmentShader: "uniform sampler2D t;\nvoid main() {\n    vec2 uv = vec2(gl_PointCoord.x, gl_PointCoord.y);\n    vec4 tt = texture2D(t,uv);\n    gl_FragColor = vec4(tt);\n}\n"
                                                            })
                                                                , n = new i.BufferGeometry
                                                                , a = new Float32Array(3 * e)
                                                                , r = new Float32Array(e);
                                                            n.setAttribute("position", new i.BufferAttribute(a, 3)),
                                                                n.setAttribute("opacity", new i.BufferAttribute(r, 1)),
                                                                n.attributes.position.needsUpdate = !0,
                                                                n.attributes.opacity.needsUpdate = !0;
                                                            var l = new i.Points(n, t);
                                                            return l.temPositions = a,
                                                                l.temOpacities = r,
                                                                l
                                                        }
                                                        ,
                                                        e.prototype.updateMeteor = function () {
                                                            if (this.currentPos += this.speed,
                                                            this.currentPos >= this.len) {
                                                                this.life = 0,
                                                                    this.currentPos = this.line.currentPos;
                                                                for (var e = 0; e < this.COUNT; e++)
                                                                    this.meteor.temPositions.set([0, 0, 0], 3 * e),
                                                                        this.meteor.temOpacities.set([0], e)
                                                            } else
                                                                for (e = 0; e < this.COUNT; e++) {
                                                                    var t = this.currentPos + e
                                                                        ,
                                                                        n = t >= this.len - 1 ? this.line.pointsArray[this.len - 1] : this.line.pointsArray[t];
                                                                    this.meteor.temPositions.set([n.x, n.y, n.z], 3 * e),
                                                                        this.meteor.temOpacities.set([e / this.COUNT], e)
                                                                }
                                                            this.meteor.geometry.attributes.position.array = this.meteor.temPositions,
                                                                this.meteor.geometry.attributes.opacity.array = this.meteor.temOpacities,
                                                                this.meteor.geometry.attributes.position.needsUpdate = !0,
                                                                this.meteor.geometry.attributes.opacity.needsUpdate = !0
                                                        }
                                                        ,
                                                        e.prototype.fadeIn = function (e, t) {
                                                            b.to(e.material, {
                                                                duration: .8,
                                                                opacity: .8,
                                                                onComplete: function () {
                                                                    t && t()
                                                                }
                                                            })
                                                        }
                                                        ,
                                                        e.prototype.fadeOut = function (e, t) {
                                                            b.to(e.material, {
                                                                duration: .6,
                                                                opacity: 0,
                                                                onComplete: function () {
                                                                    o.remove(e),
                                                                        e.geometry.dispose(),
                                                                        e.material.dispose(),
                                                                        b.killTweensOf(e, "material"),
                                                                    t && t()
                                                                }
                                                            })
                                                        }
                                                        ,
                                                        e.prototype.getLinePoints = function () {
                                                            var e = _(this.locations[0], -.04)
                                                                , t = _(this.locations[1], -.04)
                                                                , n = E(e, t)
                                                                , a = new i.CubicBezierCurve3(n[0], n[1], n[2], n[3])
                                                                , r = a.getLength()
                                                                , l = Math.floor(50 * r);
                                                            return a.getPoints(l)
                                                        }
                                                        ,
                                                        e
                                                }(),
                                                (x = new i.Scene).add(o),
                                                o.rotation.y = -Math.PI,
                                                (w = new i.WebGLRenderer({
                                                    antialias: !0,
                                                    alpha: !0,
                                                    canvas: m.current
                                                })).setPixelRatio(1),
                                                w.setSize(1920, 1500),
                                                (I = new i.PerspectiveCamera(40, 1.28, 1, 1e3)).position.set(0, 0, 60),
                                                x.add(I),
                                                (k = new l(I, d.current)).rotateSpeed = 1,
                                                k.enabled = !0,
                                                k.noPan = !0,
                                                k.noZoom = !0,
                                                p("https://main.qcloudimg.com/raw/5710d029a80102ed6582f6608a72d28d.png").then((function (e) {
                                                        h(e, o),
                                                            p("https://main.qcloudimg.com/raw/5f063794b8c732a92e9cc7f14f567d33.png").then((function (e) {
                                                                    for (var t = 0; t < 7; t++) {
                                                                        var n = new N({
                                                                            delay: 0,
                                                                            map: e,
                                                                            locations: f()
                                                                        });
                                                                        s.push(n)
                                                                    }
                                                                }
                                                            ))
                                                    }
                                                )),
                                                n = requestAnimationFrame(a),
                                            window.IntersectionObserver && (e = new IntersectionObserver((function (e) {
                                                    e.forEach((function (e) {
                                                            cancelAnimationFrame(n),
                                                            0 !== e.intersectionRatio && (n = requestAnimationFrame(a))
                                                        }
                                                    ))
                                                }
                                            ), {
                                                threshold: 0
                                            })).observe(u.current),
                                                [2]
                                    }
                                }
                            ))
                        }
                    )),
                        function () {
                            null == e || e.disconnect(),
                                cancelAnimationFrame(n)
                        }
                }
            }
        ), [p, v]),
        a.createElement("div", {
            className: i(c, (r = {},
                r[c + "-with-bg"] = !v,
                r)),
            style: o,
            ref: u
        }, v && a.createElement(a.Fragment, null, a.createElement("canvas", {
            className: "tpm-earth-canvas",
            ref: m
        }), a.createElement("div", {
            className: "tpm-earth-trigger",
            ref: d
        })))
}, Me = se({
    prefix: "infrastructure__section",
    className: "tpm-gap bg-gray"
}), Se = se({
    prefix: "market__section",
    className: "tpm-gap"
}), Pe = function (e) {
    var t = e.id
        , n = e.title
        , r = e.desc
        , i = e.tags
        , l = e.entries
        , o = e.image
        , s = e.to
        , c = e.slug
        , m = k("ecology");
    return a.createElement("div", {
        className: m + "__panel",
        "data-id": t
    }, a.createElement("a", {
        href: s,
        className: m + "__panel-link",
        hotrep: "home.developer." + c + ".portal",
        "aria-label": n
    }), a.createElement("div", {
        className: m + "__panel-object",
        style: {
            backgroundImage: "url(" + o + ")"
        }
    }), a.createElement("div", {
        className: m + "__panel-main"
    }, a.createElement("h3", {
        className: m + "__panel-title"
    }, n), a.createElement("div", {
        className: m + "__panel-desc"
    }, r), a.createElement("div", {
        className: m + "__panel-tags"
    }, null == i ? void 0 : i.map((function (e, t) {
            return a.createElement(q, {
                type: "weak-hole",
                key: t
            }, e)
        }
    ))), a.createElement("ul", {
        className: m + "__panel-entries"
    }, null == l ? void 0 : l.map((function (e, t) {
            return a.createElement("li", {
                key: t
            }, a.createElement("a", {
                hotrep: "home.developer." + c + ".btn" + (t + 1),
                href: e.to,
                className: m + "__panel-entry"
            }, e.text))
        }
    )))))
}, Ae = function (e) {
    var t = e.id
        , n = e.title
        , r = e.desc
        , i = e.tags
        , l = e.videoText
        , o = e.videoUrl
        , s = e.to
        , c = e.slug
        , m = k("ecology");
    return a.createElement("div", {
        className: m + "__sub",
        "data-id": t
    }, a.createElement("a", {
        href: s,
        className: m + "__sub-link",
        hotrep: "home.developer." + c + ".portal"
    }), a.createElement("h3", {
        className: m + "__sub-title"
    }, a.createElement("a", {
        href: s,
        "aria-label": n
    }, n)), a.createElement("div", {
        className: m + "__sub-tags"
    }, null == i ? void 0 : i.map((function (e, t) {
            return a.createElement(q, {
                type: "weak-hole",
                key: t
            }, e)
        }
    ))), a.createElement("div", {
        className: m + "__sub-desc"
    }, r), a.createElement(U, {
        extra: "08:28",
        url: o,
        hotrep: "home.developer." + c + ".video"
    }, l))
}, Ce = se({
    prefix: "ecology__section",
    className: "bg-gray tpm-gap"
}), ze = se({
    prefix: "case__section",
    className: "tpm-gap tpm-case"
}), Le = function (e) {
    var r = e.navs
        , l = k("solution")
        , o = t(n.exports.useState(""), 2)
        , s = o[0]
        , c = o[1]
        , m = t(n.exports.useState(-1), 2)
        , u = m[0]
        , d = m[1];
    return a.createElement("ul", {
        className: l + "__navs"
    }, null == r ? void 0 : r.map((function (e, t) {
            var n;
            return a.createElement("li", {
                key: t,
                "data-id": e.id
            }, a.createElement("a", {
                href: e.to,
                className: l + "__nav",
                hotrep: "home.solution." + e.slug,
                onMouseEnter: function () {
                    return e = t,
                        c("enter"),
                        void d(e);
                    var e
                },
                onMouseLeave: function () {
                    c("leave")
                }
            }, a.createElement("div", {
                className: l + "__nav-inner"
            }, a.createElement("i", {
                className: i(l + "__nav-icon", {
                    "is-enter": t === u && "enter" === s,
                    "is-leave": t === u && "leave" === s
                }),
                style: {
                    backgroundImage: "url(" + e.icon + ")"
                }
            }), a.createElement("h3", {
                className: l + "__nav-title"
            }, e.title), a.createElement("ul", {
                className: l + "__nav-features"
            }, null === (n = e.features) || void 0 === n ? void 0 : n.map((function (e, t) {
                    return a.createElement("li", {
                        className: l + "__nav-feature",
                        key: t
                    }, e)
                }
            ))))))
        }
    )))
}, Te = function (e) {
    var t = e.title
        , n = e.desc
        , r = e.features
        , i = e.link
        , l = e.id
        , o = k("solution");
    return a.createElement("a", {
        href: null == i ? void 0 : i.to,
        className: o + "__summary",
        "data-id": l
    }, a.createElement("div", {
        className: o + "__summary-inner"
    }, a.createElement("div", {
        className: o + "__summary-bg"
    }, a.createElement("div", {
        className: o + "__summary-ani"
    })), a.createElement("div", {
        className: o + "__summary-cnt"
    }, a.createElement("h3", {
        className: o + "__summary-title"
    }, t), a.createElement("div", {
        className: o + "__summary-desc"
    }, n), a.createElement("ul", {
        className: o + "__summary-features"
    }, null == r ? void 0 : r.map((function (e, t) {
            return a.createElement("li", {
                className: o + "__summary-feature",
                key: t
            }, e)
        }
    ))), a.createElement("div", {
        className: o + "__summary-entry",
        hotrep: "home.solution.all"
    }, a.createElement(R, {
        type: "arrow",
        useSpan: !0
    }, null == i ? void 0 : i.text)))))
}, Re = se({
    prefix: "solution__section"
}), Oe = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    Button: T,
    Link: R,
    Section: O,
    LogoCard: j,
    CaseCard: Z,
    VideoButton: U,
    Tag: q,
    Hero: function (e) {
        n.exports.useEffect((function () {
                var e;
                if (-1 !== location.href.indexOf("!debug"))
                    return function () {
                        y(this, void 0, void 0, (function () {
                                function t() {
                                    a.update(),
                                        e = requestAnimationFrame(t)
                                }

                                var n, a;
                                return g(this, (function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, $((() => import("./stats.module.349e185d.js")), void 0)];
                                            case 1:
                                                return n = r.sent().default,
                                                    a = new n,
                                                    document.body.appendChild(a.dom),
                                                    e = requestAnimationFrame(t),
                                                    [2]
                                        }
                                    }
                                ))
                            }
                        ))
                    }(),
                        function () {
                            cancelAnimationFrame(e)
                        }
            }
        ), []);
        var t = ne().isMobile ? oe : ie;
        return a.createElement(t, o({}, e))
    },
    Product: function (e) {
        var t = e.id
            , n = e.className
            , r = e.style
            , l = e.panels
            , s = k("product")
            , c = i(s, s + "--multi", n)
            , m = l.map((function (e, t) {
                return {
                    id: t.toString(),
                    icon: e.icon,
                    label: e.label
                }
            }
        ));
        return a.createElement("div", {
            className: c,
            style: r,
            "data-id": t
        }, a.createElement(ge, {
            className: s + "__tab",
            tabs: m,
            defaultActiveId: "0",
            iconAni: !0
        }, null == l ? void 0 : l.map((function (e, t) {
                var n = e.recommends.map((function (t) {
                        return o(o({}, t), {
                            hotrep: "home.product." + e.slug + "." + t.slug
                        })
                    }
                ))
                    , r = e.items.map((function (t) {
                        return o(o({}, t), {
                            hotrep: "home.prodcut." + e.slug + "." + t.slug
                        })
                    }
                ));
                return a.createElement(be, {
                    id: t.toString(),
                    key: t
                }, a.createElement("section", {
                    className: s + "__detail",
                    "data-id": e.id
                }, a.createElement("aside", {
                    className: s + "__detail-side"
                }, a.createElement(ce, {
                    recommends: n
                })), a.createElement("main", {
                    className: s + "__detail-main"
                }, a.createElement(ue, {
                    items: r
                }))))
            }
        ))))
    },
    ProductSection: xe,
    Infrastructure: function (e) {
        var t = e.className
            , n = e.style
            , r = e.pc_metrics
            , l = void 0 === r ? [] : r
            , o = e.certifications
            , s = e.metrics
            , c = void 0 === s ? [] : s
            , m = e.id
            , d = k("infrastructure")
            , v = i(d, t);
        return a.createElement(u, {
            offset: 200,
            once: !0
        }, a.createElement("div", {
            className: v,
            style: n,
            "data-id": m
        }, a.createElement("div", {
            className: d + "__bg"
        }, a.createElement(ke, null)), a.createElement("main", {
            className: d + "__main"
        }, a.createElement("ul", {
            className: d + "__pc-metrics-list"
        }, l.map((function (e, t) {
                return a.createElement("li", {
                    className: d + "__pc-metrics",
                    key: t
                }, a.createElement("h4", {
                    className: d + "__pc-metrics-title",
                    dangerouslySetInnerHTML: {
                        __html: e.title
                    }
                }), a.createElement("div", {
                    className: d + "__pc-metrics-desc"
                }, e.desc))
            }
        ))), a.createElement("ul", {
            className: d + "__metrics-list"
        }, c.map((function (e, t) {
                return a.createElement("li", {
                    className: d + "__metrics",
                    key: t
                }, a.createElement("div", {
                    className: d + "__metrics-num"
                }, e.value), a.createElement("span", {
                    className: d + "__metrics-label"
                }, e.text))
            }
        )))), a.createElement(we, {
            certifications: o
        })))
    },
    InfrastructureSection: Me,
    Market: function (e) {
        var r = e.className
            , l = e.style
            , o = e.desc
            , s = e.entries
            , c = e.id
            , m = k("market")
            , d = i(m, r)
            , v = t(n.exports.useState(""), 2)
            , f = v[0]
            , p = v[1]
            , h = t(n.exports.useState(-1), 2)
            , _ = h[0]
            , E = h[1];
        return a.createElement(u, {
            offset: 200,
            once: !0,
            overflow: !0
        }, a.createElement("div", {
            className: d,
            style: l,
            "data-id": c
        }, a.createElement("div", {
            className: m + "__cell"
        }, a.createElement("div", {
            className: m + "__bg"
        }), a.createElement("div", {
            className: m + "__inner"
        }, a.createElement("div", {
            className: m + "__desc",
            dangerouslySetInnerHTML: {
                __html: o
            }
        }), a.createElement("ul", {
            className: m + "__features"
        }, [{
            icon: "handpick",
            text: "精选优质服务商"
        }, {
            icon: "test",
            text: "官方检测保质"
        }, {
            icon: "service",
            text: "客服全程服务"
        }, {
            icon: "sale",
            text: "退款售后无忧"
        }].map((function (e, t) {
                return a.createElement("li", {
                    className: m + "__feature",
                    key: t
                }, a.createElement("i", {
                    className: m + "__feature-icon " + e.icon
                }), e.text)
            }
        ))))), a.createElement("div", {
            className: m + "__cell"
        }, function () {
            if (!s)
                return null;
            var e = s.concat({
                icon: "https://main.qcloudimg.com/trisys/assets/home/images/market/ani/more.png",
                label: "全部",
                to: "https://market.cloud.tencent.com/?purchasesource=home"
            });
            return a.createElement("ul", {
                className: m + "__entries"
            }, e.map((function (t, n) {
                    return a.createElement("li", {
                        key: n
                    }, a.createElement("a", {
                        href: t.to,
                        className: m + "__entry",
                        hotrep: n === e.length - 1 ? "home.market.all" : "home.market.btn" + (n + 1),
                        onMouseEnter: function () {
                            return e = n,
                                p("enter"),
                                void E(e);
                            var e
                        },
                        onMouseLeave: function () {
                            p("leave")
                        }
                    }, a.createElement("i", {
                        className: i(m + "__entry-icon", {
                            "is-enter": n === _ && "enter" === f,
                            "is-leave": n === _ && "leave" === f
                        }),
                        style: {
                            backgroundImage: "url(" + t.icon + ")"
                        }
                    }), a.createElement("div", {
                        className: m + "__entry-label"
                    }, t.label)))
                }
            )))
        }())))
    },
    MarketSection: Se,
    ActionPanel: function (e) {
        var t = e.className
            , n = e.style
            , r = e.desc
            , l = e.link
            , o = e.id
            , s = k("action-panel")
            , c = i(s, t, "tpm-gap");
        return a.createElement("div", {
            className: c,
            style: n,
            "data-id": o
        }, a.createElement("div", {
            className: s + "__inner"
        }, a.createElement("div", {
            className: s + "__cnt"
        }, a.createElement("div", {
            className: s + "__desc"
        }, r), a.createElement("div", {
            className: s + "__btns",
            hotrep: "home.environment.btn"
        }, a.createElement(T, {
            type: "white-hole",
            href: l.to
        }, l.text)))))
    },
    Ecology: function (e) {
        var t = e.className
            , n = e.style
            , r = e.panels
            , l = e.sub
            , s = e.id
            , c = k("ecology")
            , m = i(c, t);
        return a.createElement("div", {
            className: m,
            style: n,
            "data-id": s
        }, null == r ? void 0 : r.map((function (e, t) {
                return a.createElement("div", {
                    className: c + "__cell",
                    key: t
                }, a.createElement(Pe, o({}, e)))
            }
        )), a.createElement("div", {
            className: c + "__cell"
        }, l.map((function (e, t) {
                return a.createElement(Ae, o(o({}, e), {
                    key: t
                }))
            }
        ))))
    },
    EcologySection: Ce,
    CaseSection: ze,
    Solution: function (e) {
        var t = e.className
            , n = e.style
            , r = e.cases
            , l = e.summary
            , s = e.id
            , c = k("solution")
            , m = i(c, t)
            , u = r.slice(0, 6)
            , d = r.slice(6);
        return a.createElement("div", {
            className: m,
            style: n,
            "data-id": s
        }, a.createElement("div", {
            className: c + "__main"
        }, a.createElement(Le, {
            navs: u
        })), a.createElement("div", {
            className: c + "__main"
        }, a.createElement(Le, {
            navs: d
        })), a.createElement("div", {
            className: c + "__center"
        }, l.map((function (e, t) {
                return a.createElement(Te, o(o({}, e), {
                    key: t
                }))
            }
        ))))
    },
    SolutionSection: Re
}), Be = function (e) {
    var n = e.pageConfig
        , i = e.mode
        , l = void 0 === i ? "" : i
        , s = e.deviceType
        , c = Object.values(n).find((function (e) {
            return !e.pid
        }
    ));
    if (!c)
        return null;
    var m = c.slots.children.map((function (e) {
            return n[e]
        }
    ))
        , u = function (e) {
        if (!e)
            return null;
        var i, s = e.slots, c = void 0 === s ? {} : s, m = e.data, d = void 0 === m ? {} : m, v = e.comp, f = e.id,
            p = r(e, ["slots", "data", "comp", "id"]), h = Object.assign({
                id: "editor" === l ? f : void 0
            }, d, (i = c,
                Object.entries(i).reduce((function (e, a) {
                        var r = t(a, 2)
                            , i = r[0]
                            , l = r[1].map((function (e) {
                                var t = n[e];
                                return u(t)
                            }
                        ));
                        return e[i] = l,
                            e
                    }
                ), {})), p);
        if (!v)
            return h;
        var _ = Oe[v];
        return a.createElement(_, o({
            key: f
        }, h))
    };
    return a.createElement("div", {
        className: "page-container"
    }, a.createElement(te, {
        type: s
    }, m.map((function (e) {
            return u(e)
        }
    ))))
}, je = JSON.parse(JSON.stringify(window.__PAGE_CONFIG));
(null == (Ne = document.getElementById("root")) ? void 0 : Ne.children.length) ? N.hydrate(a.createElement(a.StrictMode, null, a.createElement(Be, {
    pageConfig: je
})), Ne) : N.render(a.createElement(a.StrictMode, null, a.createElement(Be, {
    pageConfig: je
})), Ne);
