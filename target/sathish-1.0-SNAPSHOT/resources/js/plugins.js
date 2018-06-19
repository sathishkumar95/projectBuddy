;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*! jQuery.easing*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

/**
 *  Parallax Scrolling Library
 *
 */
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function(e) {
    function W(a) {
        if (console && console.warn) console.warn("Scrollax: " + a);
        else throw "Scrollax: " + a;
    }

    function ka(a) {
        var g = !!("pageYOffset" in a);
        return {
            width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
            height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
            left: a[g ? "pageXOffset" : "scrollLeft"],
            top: a[g ? "pageYOffset" : "scrollTop"]
        }
    }

    function X(a) {
        return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
    }

    function Y(a) {
        var g, c;
        return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
    }
    var v = Array.prototype,
        C = v.push,
        Z = v.splice,
        aa = Object.prototype.hasOwnProperty,
        la = /[-+]?\d+(\.\d+)?/g,
        ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
        ba = e(window),
        ca = e(document.body),
        da, ea, L, M, N, q = function(a, g, c) {
            function k() {
                O = fa ? ca.find(ga) : P.find(ga);
                x.length = 0;
                r = !!t.horizontal;
                O.each(na);
                d();
                t.performanceTrick && (F = fa ? ca : P);
                u("load");
                return f
            }

            function l() {
                G && (G = clearTimeout(G));
                G = setTimeout(function() {
                    f.reload()
                })
            }

            function d() {
                var ha = x.length;
                t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function() {
                    F.removeClass("scrollax-performance");
                    Q = !1
                }, 100));
                if (ha) {
                    H = ka(a);
                    for (var c = 0; c < ha; c++) I = x[c],
                        y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
                    u("scroll", H)
                }
            }

            function b(a, b) {
                S = a.parallaxElements;
                var c = S.length;
                if (c)
                    for (var f = 0; f < c; f++) {
                        T = S[f];
                        var g = oa = T.element,
                            d = b;
                        U = T.properties || (r ? {
                            translateX: "100%"
                        } : {
                            translateY: "100%"
                        });
                        D = "";
                        for (B in U) {
                            n = U[B];
                            if ("number" === typeof n) n *=
                                d;
                            else if ("string" === typeof n)
                                for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
                            if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
                            else {
                                var k = g.style,
                                    l = B,
                                    h;
                                "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
                                k[l] = h
                            }
                        }
                        D && (g.style[da] = ea + D)
                    }
            }

            function pa(a) {
                return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
            }

            function u(a, b) {
                if (h[a]) {
                    E = h[a].length;
                    for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
                    for (m = 0; m < E; m++) V[m].call(f,
                        a, b)
                }
            }

            function p(a, b) {
                for (var c = 0, f = h[a].length; c < f; c++)
                    if (h[a][c] === b) return c;
                return -1
            }
            var f = this,
                P = a && e(a).eq(0) || ba,
                w = q.instances,
                v = null;
            a = P[0];
            e.each(w, function(b, c) {
                b && b.frame === a && (v = !0)
            });
            if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
            else {
                var t = e.extend({}, q.defaults, g),
                    x = [],
                    O = null,
                    ga = t.parentSelector || "[data-scrollax-parent]",
                    qa = t.elementsSelector || "[data-scrollax]",
                    h = {},
                    V = [],
                    G, fa = Y(a),
                    m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
                    B, n, D, K;
                f.frame = a;
                f.options = t;
                f.parents = x;
                f.initialized = !1;
                f.reload = k;
                var na = function(a, b) {
                    var c = e(b),
                        f = X(e(b)),
                        d = {};
                    d.element = b;
                    d.options = f;
                    d.parallaxElements = [];
                    c.find(qa).each(function(a, b) {
                        var c = X(e(b));
                        c.element = b;
                        C.call(d.parallaxElements, c)
                    });
                    C.call(x, d)
                };
                f.scroll = d;
                f.getIndex = pa;
                f.one = function(a, b) {
                    function c() {
                        b.apply(f, arguments);
                        f.off(a, c)
                    }
                    f.on(a, c);
                    return f
                };
                f.on = function(a, b) {
                    if ("object" === typeof a)
                        for (var c in a) {
                            if (aa.call(a, c)) f.on(c, a[c])
                        } else if ("function" === typeof b) {
                            c = a.split(" ");
                            for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
                        } else if ("array" === typeof b)
                        for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
                    return f
                };
                f.off = function(a, c) {
                    if (c instanceof Array)
                        for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
                    else
                        for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
                            if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
                            else {
                                var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1)
                            } return f
                };
                f.set = function(a, b) {
                    e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
                    k();
                    return f
                };
                f.destroy = function() {
                    N(window, "resize", l);
                    N(a, "scroll", d);
                    e.each(w, function(b, c) {
                        b && b.frame === a && Z.call(q.instances, c, 1)
                    });
                    x.length = 0;
                    f.initialized = !1;
                    u("destroy");
                    return f
                };
                f.init = function() {
                    if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f
                }
            }
        };
    q.instances = [];
    (function() {
        var a, g, c, k, l, d, b, e;
        L = function(u, p) {
            g = u.ownerDocument || u;
            c = g.documentElement;
            k = Y(p) ? p : g.defaultView || window;
            p = p && p !== g ? p : c;
            l = (k.pageYOffset ||
                c.scrollTop) - c.clientTop;
            d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
            b = {
                top: 0,
                left: 0
            };
            if (u && u.getBoundingClientRect) {
                var f = {},
                    q = u.getBoundingClientRect();
                for (a in q) f[a] = q[a];
                b = f;
                b.width = b.right - b.left;
                b.height = b.bottom - b.top
            } else return null;
            if (p === k) return b;
            b.top += l;
            b.left += d;
            b.right += d;
            b.bottom += l;
            if (p === c) return b;
            e = L(p);
            b.left -= e.left;
            b.right -= e.left;
            b.top -= e.top;
            b.bottom -= e.top;
            return b
        }
    })();
    (function() {
        function a() {
            this.returnValue = !1
        }

        function g() {
            this.cancelBubble = !0
        }
        M = window.addEventListener ?
            function(a, g, e, d) {
                a.addEventListener(g, e, d || !1);
                return e
            } : function(c, e, l) {
                var d = e + l;
                c[d] = c[d] || function() {
                    var b = window.event;
                    b.target = b.srcElement;
                    b.preventDefault = a;
                    b.stopPropagation = g;
                    l.call(c, b)
                };
                c.attachEvent("on" + e, c[d]);
                return l
            };
        N = window.removeEventListener ? function(a, g, e, d) {
            a.removeEventListener(g, e, d || !1);
            return e
        } : function(a, g, e) {
            var d = g + e;
            a.detachEvent("on" + g, a[d]);
            try {
                delete a[d]
            } catch (b) {
                a[d] = void 0
            }
            return e
        }
    })();
    (function() {
        function a(a) {
            for (var e = 0, d = g.length; e < d; e++) {
                var b = g[e] ? g[e] +
                    a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (null != c.style[b]) return b
            }
        }
        var g = ["", "webkit", "moz", "ms", "o"],
            c = document.createElement("div");
        da = a("transform");
        ea = a("perspective") ? "translateZ(0) " : ""
    })();
    q.defaults = {
        horizontal: !1,
        offset: 0,
        parentSelector: null,
        elementsSelector: null,
        performanceTrick: !1
    };
    window.Scrollax = q;
    e.fn.Scrollax = function(a, g) {
        var c, k;
        if (!e.isPlainObject(a)) {
            if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
            a = {}
        }
        return this.each(function(l, d) {
            var b = e.data(d,
                "scrollax");
            b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
        })
    };
    e.Scrollax = function(a, e) {
        ba.Scrollax(a, e)
    };
    var v = document.head || document.getElementsByTagName("head")[0],
        w = document.createElement("style");
    w.type = "text/css";
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
        w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q
});
// appear
(function($) {
    $.fn.appear = function(f, o) {
        var s = $.extend({
            one: true
        }, o);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!f) {
                t.trigger('appear', s.data);
                return;
            }
            var w = $(window);
            var c = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
                    if (!t.appeared) t.trigger('appear', s.data);
                } else {
                    t.appeared = false;
                }
            };
            var m = function() {
                t.appeared = true;
                if (s.one) {
                    w.unbind('scroll', c);
                    var i = $.inArray(c, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                f.apply(this, arguments);
            };
            if (s.one) t.one('appear', s.data, m);
            else t.bind('appear', s.data, m);
            w.scroll(c);
            $.fn.appear.checks.push(c);
            (c)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var l = $.fn.appear.checks.length;
            if (l > 0)
                while (l--)($.fn.appear.checks[l])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var u = $.fn[n];
        if (u) {
            $.fn[n] = function() {
                var r = u.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);


! function(e) {
    "use strict";
    var t, n;
    n = {}, e.fn.jParticle = function(n) {
        return this.each(function(i, a) {
            "object" == typeof a.sandbox && e(a).removeJParticle(), a.sandbox = t(a, n)
        }), this
    }, e.fn.removeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && (t.sandbox.remove(), delete t.sandbox)
        }), this
    }, e.fn.freezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.freeze()
        }), this
    }, e.fn.unfreezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.unfreeze()
        }), this
    }, t = function(t, i) {
        var a, o;
        return a = {}, a.canvas = {}, a.mouse = {}, a.particles = [], a.isAnimated = !1, a.initialize = function(e, t) {
            a.initParams(t), a.initHTML(e), a.initParticles(), a.initEvents(), a.initAnimation()
        }, a.initParams = function(t) {
            t && t.color && (!t.particle || t.particle && !t.particle.color) && (t.particle || (t.particle = {}), t.particle.color = t.color), a.params = e.extend({
                particlesNumber: 100,
                linkDist: 50,
                createLinkDist: 150,
                disableLinks: !1,
                disableMouse: !1,
                background: "black",
                color: "white",
                width: null,
                height: null,
                linksWidth: 1
            }, t)
        }, a.initHTML = function(t) {
            var n;
            n = a.canvas, n.container = e(t), n.element = e("<canvas/>"), n.context = n.element.get(0).getContext("2d"), n.container.append(n.element), n.element.css("display", "block"), n.element.get(0).width = a.params.width ? a.params.width : n.container.width(), n.element.get(0).height = a.params.height ? a.params.height : n.container.height(), n.element.css("background", a.params.background)
        }, a.resize = function(e, t) {
            e && (canvas.element.get(0).width = e), t && (canvas.element.get(0).height = t)
        }, a.initParticles = function() {
            var e, t;
            for (e = 0, t = a.params.particlesNumber; t > e; e += 1) a.particles.push(o(a.canvas.element.get(0), a.params.particle))
        }, a.initEvents = function() {
            a.canvas.element.mouseenter(function() {
                a.mouse.hoverCanvas = !0, a.isAnimated || a.draw()
            }), a.canvas.element.mouseleave(function() {
                a.mouse.hoverCanvas = !1
            }), a.canvas.element.mousemove(function(t) {
                a.mouse = e.extend(a.mouse, n.getMousePosition(t, a.canvas.element[0]))
            })
        }, a.initAnimation = function() {
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                setTimeOut(e, 1e3 / 60)
            }, a.isAnimated = !0, a.draw()
        }, a.draw = function() {
            var e, t, n, i, o, r;
            for (e = 0, n = a.particles.length, i = a.canvas, i.context.clearRect(0, 0, i.element.get(0).width, i.element.get(0).height); n > e; e += 1)
                if (o = a.particles[e], a.isAnimated && o.update(), o.draw(), !a.params.disableMouse && a.mouse.hoverCanvas && a.drawLink(o.getPosition("x"), o.getPosition("y"), a.mouse.x, a.mouse.y), !a.params.disableLinks)
                    for (t = e + 1; n > t; t += 1) r = a.particles[t], a.drawLink(o.getPosition("x"), o.getPosition("y"), r.getPosition("x"), r.getPosition("y"));
            a.requestID = window.requestAnimFrame(a.draw)
        }, a.drawLink = function(e, t, i, o) {
            var r;
            n.getDistance(e, t, i, o) <= a.params.createLinkDist && (r = a.canvas.context, r.save(), r.beginPath(), r.lineWidth = a.params.linksWidth, r.moveTo(e, t), r.lineTo(i, o), r.globalAlpha = a.getOpacityLink(e, t, i, o), r.strokeStyle = a.params.color, r.lineCap = "round", r.stroke(), r.closePath(), r.restore())
        }, a.getOpacityLink = function(e, t, i, o) {
            var r, s, c, u;
            return r = n.getDistance(e, t, i, o), c = a.params.linkDist, u = a.params.createLinkDist, s = c >= r ? 1 : r > u ? 0 : 1 - 100 * (r - c) / (u - c) / 100
        }, a.freeze = function() {
            a.isAnimated && (a.isAnimated = !1)
        }, a.unfreeze = function() {
            a.isAnimated || (a.isAnimated = !0)
        }, a.remove = function() {
            a.canvas.element.remove()
        }, o = function(t, i) {
            var a;
            return a = {}, a.canvas = {}, a.vector = {}, a.initialize = function(t, n) {
                a.params = e.extend({
                    color: "white",
                    minSize: 2,
                    maxSize: 4,
                    speed: 60
                }, n), a.setCanvasContext(t), a.initSize(), a.initPosition(), a.initVectors()
            }, a.initPosition = function() {
                a.x = n.getRandNumber(0 + a.radius, a.canvas.element.width - a.radius), a.y = n.getRandNumber(0 + a.radius, a.canvas.element.height - a.radius)
            }, a.initSize = function() {
                a.size = n.getRandNumber(a.params.minSize, a.params.maxSize), a.radius = a.size / 2
            }, a.initVectors = function() {
                do a.vector.x = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1), a.vector.y = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1); while (0 == a.vector.x || 0 == a.vector.y)
            }, a.setCanvasContext = function(e) {
                var t;
                if (a.canvas.element = e, t = e.getContext("2d"), "object" != typeof t || "object" != typeof t.canvas) throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
                a.canvas.context = t
            }, a.draw = function() {
                var e = a.canvas.context;
                e.beginPath(), e.arc(a.x, a.y, a.size / 2, 0, 2 * Math.PI), e.fillStyle = a.params.color, e.fill(), e.closePath()
            }, a.update = function() {
                a.x += a.vector.x, a.y += a.vector.y, (0 > a.x - a.radius || a.x + a.radius > a.canvas.element.width) && (a.vector.x = -a.vector.x), (0 > a.y - a.radius || a.y + a.radius > a.canvas.element.height) && (a.vector.y = -a.vector.y)
            }, a.getPosition = function(e) {
                return "string" == typeof e && "x" != e && "y" != e && (e = null), "string" == typeof e ? a[e] : {
                    x: a.x,
                    y: a.y
                }
            }, a.initialize(t, i), {
                getPosition: a.getPosition,
                update: a.update,
                draw: a.draw
            }
        }, a.initialize(t, i), {
            remove: a.remove,
            freeze: a.freeze,
            unfreeze: a.unfreeze,
            resize: a.resize
        }
    }, n.getRandNumber = function(e, t, n) {
        var i;
        return null == e && (e = 0), null == t && (t = 10), null == n && (n = !0), i = Math.random() * (t - e) + e, n ? Math.round(i) : i
    }, n.getDistance = function(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }, n.getMousePosition = function(t, n) {
        var i;
        return "undefined" == typeof n && (n = e("body")[0]), i = n.getBoundingClientRect(), {
            x: t.clientX - i.left,
            y: t.clientY - i.top
        }
    }
}(jQuery);

! function(t) {
    function n(n, e, i, r) {
        var a = n.text(),
            o = a.split(e),
            c = "";
        o.length && (t(o).each(function(t, n) {
            c += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + n + "</span>" + r
        }), n.attr("aria-label", a).empty().append(c))
    }
    var e = {
        init: function() {
            return this.each(function() {
                n(t(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                n(t(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var e = "eefec303079ad17405c889e092e105b0";
                n(t(this).children("br").replaceWith(e).end(), e, "line", "")
            })
        }
    };
    t.fn.lettering = function(n) {
        return n && e[n] ? e[n].apply(this, [].slice.call(arguments, 1)) : "letters" !== n && n ? (t.error("Method " + n + " does not exist on jQuery.lettering"), this) : e.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),
function(t) {
    t.fn.fitText = function(n, e) {
        var i = n || 1,
            r = t.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, e);
        return this.each(function() {
            var n = t(this),
                e = function() {
                    n.css("font-size", Math.max(Math.min(n.width() / (10 * i), parseFloat(r.maxFontSize)), parseFloat(r.minFontSize)))
                };
            e(), t(window).on("resize.fittext orientationchange.fittext", e)
        })
    }
}(jQuery);