(() => {
    var e = {
            428: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, { attributes: () => n });
                const n = [
                    { value: { "@type": "PhoneNumber", value: "06221/215221" }, validFrom: "2011-01-01T00:00:00", validTo: "2013-01-01T00:00:00" },
                    {
                        value: { "@type": "PhoneNumber", value: "06221/553132" },
                        tags: ["emergency", "hello world", "pew"],
                        validFrom: "2021-02-03T00:00:00",
                        validTo: "2024-01-01T00:00:00",
                        flag: !0
                    },
                    { value: { "@type": "GivenName", value: "Steven Nicholas" }, validFrom: "2020-01-01T00:00:00", validTo: "2023-11-01T00:00:00", flag: !0, emptyValue: "" },
                    {
                        value: { "@type": "LastName", value: "O'Malley" },
                        validFrom: "2021-01-01T00:00:00",
                        validTo: "2023-12-01T00:00:00",
                        friends: ["Hans Peter", "Julia", "'X' \\\\ '", "'X'\\\\'"]
                    },
                    {
                        value: {
                            "@type": "LanguageCertification",
                            grade: "c1",
                            language: "en",
                            validFrom: "2021-01-01T00:00:00",
                            validTo: "2023-01-01T00:00:00",
                            lvl1: { lvl2: { lvl3: "hello world", date: "2019-03-11", cities: ["Paris", "New York"] } }
                        },
                        validFrom: "2021-01-01T00:00:00",
                        validTo: "2023-01-01T00:00:00",
                        peer: "idasdf0x123152",
                        tags: ["language:en", "language:de"]
                    },
                    {
                        value: { "@type": "LanguageCertification", grade: "b2", language: "de" },
                        tags: ["language:en", "language:es"],
                        validFrom: "2021-01-01T00:00:00",
                        validTo: "2028-01-01T00:00:00"
                    },
                    {
                        value: { "@type": "FileReference", id: "0xaffed00fdecafbad" },
                        tags: ["language:de", "language:en", "content:edu.de.higher.certOfEnrolment", "#hashtag pewpew"],
                        validFrom: "2019-01-01T00:00:00",
                        validTo: "2020-01-14T00:00:00"
                    },
                    {
                        value: { "@type": "FileReference", id: "0xdeadbeef" },
                        tags: [
                            "urn:xbildung-de:xbildung:codeliste:artdesnachweises=http://www.xbildung.de/def/xbildung/0.9/code/ArtDesNachweises",
                            "urn:xhochschule-de:destatis:codeliste:artdeshsa=http://xhochschule.de/def/destatis/WS22/code/ArtDesHSA/111",
                            "urn:xbildung-de:unesco:codeliste:isced2011=6",
                            "urn:xbildung-de:unesco:codeliste:isced2011=64",
                            "urn:xbildung-de:unesco:codeliste:isced2011=647",
                            "content:edu.de.higher.certOfEnrolment",
                            "language:es"
                        ],
                        validFrom: "2021-01-01T00:00:00",
                        validTo: "2023-01-01T00:00:00"
                    }
                ];
            },
            318: (e) => {
                "use strict";
                function t(e, t, r = null) {
                    let n = e;
                    for (const e of t) {
                        if (!Object.keys(n).includes(e)) return r;
                        n = n[e];
                    }
                    return n;
                }
                function r(e, r, n, o = void 0) {
                    const a = [];
                    for (let u = 0; u < e.length; u++) {
                        const i = t(e[u], r, null);
                        (void 0 !== o && e[u].value["@type"] !== o) || (null !== i && n(i) && a.push(u));
                    }
                    return a;
                }
                function n(e, t, r, o) {
                    var a = Error.call(this, e);
                    return Object.setPrototypeOf && Object.setPrototypeOf(a, n.prototype), (a.expected = t), (a.found = r), (a.location = o), (a.name = "SyntaxError"), a;
                }
                function o(e, t, r) {
                    return (r = r || " "), e.length > t ? e : ((t -= e.length), e + (r += r.repeat(t)).slice(0, t));
                }
                !(function (e, t) {
                    function r() {
                        this.constructor = e;
                    }
                    (r.prototype = t.prototype), (e.prototype = new r());
                })(n, Error),
                    (n.prototype.format = function (e) {
                        var t = "Error: " + this.message;
                        if (this.location) {
                            var r,
                                n = null;
                            for (r = 0; r < e.length; r++)
                                if (e[r].source === this.location.source) {
                                    n = e[r].text.split(/\r\n|\n|\r/g);
                                    break;
                                }
                            var a = this.location.start,
                                u = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(a) : a,
                                i = this.location.source + ":" + u.line + ":" + u.column;
                            if (n) {
                                var l = this.location.end,
                                    s = o("", u.line.toString().length, " "),
                                    c = n[a.line - 1],
                                    f = (a.line === l.line ? l.column : c.length + 1) - a.column || 1;
                                t += "\n --\x3e " + i + "\n" + s + " |\n" + u.line + " | " + c + "\n" + s + " | " + o("", a.column - 1, " ") + o("", f, "^");
                            } else t += "\n at " + i;
                        }
                        return t;
                    }),
                    (n.buildMessage = function (e, t) {
                        var r = {
                            literal: function (e) {
                                return '"' + o(e.text) + '"';
                            },
                            class: function (e) {
                                var t = e.parts.map(function (e) {
                                    return Array.isArray(e) ? a(e[0]) + "-" + a(e[1]) : a(e);
                                });
                                return "[" + (e.inverted ? "^" : "") + t.join("") + "]";
                            },
                            any: function () {
                                return "any character";
                            },
                            end: function () {
                                return "end of input";
                            },
                            other: function (e) {
                                return e.description;
                            }
                        };
                        function n(e) {
                            return e.charCodeAt(0).toString(16).toUpperCase();
                        }
                        function o(e) {
                            return e
                                .replace(/\\/g, "\\\\")
                                .replace(/"/g, '\\"')
                                .replace(/\0/g, "\\0")
                                .replace(/\t/g, "\\t")
                                .replace(/\n/g, "\\n")
                                .replace(/\r/g, "\\r")
                                .replace(/[\x00-\x0F]/g, function (e) {
                                    return "\\x0" + n(e);
                                })
                                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                                    return "\\x" + n(e);
                                });
                        }
                        function a(e) {
                            return e
                                .replace(/\\/g, "\\\\")
                                .replace(/\]/g, "\\]")
                                .replace(/\^/g, "\\^")
                                .replace(/-/g, "\\-")
                                .replace(/\0/g, "\\0")
                                .replace(/\t/g, "\\t")
                                .replace(/\n/g, "\\n")
                                .replace(/\r/g, "\\r")
                                .replace(/[\x00-\x0F]/g, function (e) {
                                    return "\\x0" + n(e);
                                })
                                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                                    return "\\x" + n(e);
                                });
                        }
                        function u(e) {
                            return r[e.type](e);
                        }
                        return (
                            "Expected " +
                            (function (e) {
                                var t,
                                    r,
                                    n = e.map(u);
                                if ((n.sort(), n.length > 0)) {
                                    for (t = 1, r = 1; t < n.length; t++) n[t - 1] !== n[t] && ((n[r] = n[t]), r++);
                                    n.length = r;
                                }
                                switch (n.length) {
                                    case 1:
                                        return n[0];
                                    case 2:
                                        return n[0] + " or " + n[1];
                                    default:
                                        return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
                                }
                            })(e) +
                            " but " +
                            (function (e) {
                                return e ? '"' + o(e) + '"' : "end of input";
                            })(t) +
                            " found."
                        );
                    }),
                    (e.exports = {
                        SyntaxError: n,
                        parse: function (e, t) {
                            var o,
                                a,
                                u,
                                i,
                                l = {},
                                s = (t = void 0 !== t ? t : {}).grammarSource,
                                c = { Expr: Ce },
                                f = Ce,
                                d = "||",
                                h = "&&",
                                p = "!",
                                g = "(",
                                v = ")",
                                y = ".",
                                m = "#",
                                A = "'",
                                b = "\\\\",
                                x = "\\'",
                                T = /^[=><~]/,
                                w = /^[?]/,
                                C = /^[^'\\]/,
                                F = /^[^'\\ ]/,
                                O = /^[a-z]/,
                                S = /^[A-za-z0-9]/,
                                E = /^[A-Z]/,
                                j = /^[A-Za-z0-9]/,
                                P = /^[ \t\n\r]/,
                                N = me("||", !1),
                                k = me("&&", !1),
                                z = me("!", !1),
                                M = me("(", !1),
                                D = me(")", !1),
                                L = be("metadata field term"),
                                R = me(".", !1),
                                V = be("tag term"),
                                H = me("#", !1),
                                Z = be("primary field term"),
                                _ = Ae(["=", ">", "<", "~"], !1, !1),
                                B = Ae(["?"], !1, !1),
                                I = me("'", !1),
                                J = me("\\\\", !1),
                                X = me("\\'", !1),
                                $ = Ae(["'", "\\"], !0, !1),
                                q = Ae(["'", "\\", " "], !0, !1),
                                G = Ae([["a", "z"]], !1, !1),
                                U = Ae(
                                    [
                                        ["A", "z"],
                                        ["a", "z"],
                                        ["0", "9"]
                                    ],
                                    !1,
                                    !1
                                ),
                                W = be("attribute type"),
                                Y = Ae([["A", "Z"]], !1, !1),
                                K = Ae(
                                    [
                                        ["A", "Z"],
                                        ["a", "z"],
                                        ["0", "9"]
                                    ],
                                    !1,
                                    !1
                                ),
                                Q = be("whitespace"),
                                ee = Ae([" ", "\t", "\n", "\r"], !1, !1),
                                te = function (e, t) {
                                    return t.reduce(
                                        (e, t) =>
                                            (function (e, t) {
                                                const r = Array.from(new Set([...e, ...t]));
                                                return r.sort((e, t) => e - t), r;
                                            })(e, t),
                                        e
                                    );
                                },
                                re = function (e, t) {
                                    return t.reduce(
                                        (e, t) =>
                                            (function (e, ...t) {
                                                const r = [e, ...t].reduce((e, t) => e.filter((e) => t.includes(e)));
                                                return r.sort((e, t) => e - t), r;
                                            })(e, t),
                                        e
                                    );
                                },
                                ne = function (e) {
                                    return (function (e, t) {
                                        const r = e.filter((e) => !t.includes(e));
                                        return r.sort((e, t) => e - t), r;
                                    })([...Array(t.attributes.length).keys()], e);
                                },
                                oe = function (e, n, o) {
                                    return r(t.attributes, [e, ...n], o);
                                },
                                ae = function (e) {
                                    return r(t.attributes, ["tags"], (t) => Array.isArray(t) && t.includes(e));
                                },
                                ue = function (e, n, o) {
                                    return r(t.attributes, ["value", ...n], o, e);
                                },
                                ie = function (e, n) {
                                    return r(t.attributes, ["value", "value"], n, e);
                                },
                                le = function (e) {
                                    return r(t.attributes, ["value", "@type"], (t) => t === e);
                                },
                                se = function (e, t) {
                                    switch (e) {
                                        case "=":
                                            return (e) => String(e) === t;
                                        case ">":
                                            return (e) => new Date(e) >= new Date(t);
                                        case "<":
                                            return (e) => new Date(e) <= new Date(t);
                                        case "~":
                                            return (e) => Array.isArray(e) && e.includes(t);
                                    }
                                },
                                ce = function (e) {
                                    if ("?" === e) return (e) => (Array.isArray(e) ? e.length > 0 : "Object" === e.constructor.name ? Object.keys(e).length > 0 : null != e);
                                },
                                fe = function (e) {
                                    return e.join("").replaceAll("\\\\", "\\").replaceAll("\\'", "'");
                                },
                                de = function (e) {
                                    return e.join("").replaceAll("\\\\", "\\").replaceAll("\\'", "'");
                                },
                                he = 0,
                                pe = [{ line: 1, column: 1 }],
                                ge = 0,
                                ve = [],
                                ye = 0;
                            if ("startRule" in t) {
                                if (!(t.startRule in c)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                                f = c[t.startRule];
                            }
                            function me(e, t) {
                                return { type: "literal", text: e, ignoreCase: t };
                            }
                            function Ae(e, t, r) {
                                return { type: "class", parts: e, inverted: t, ignoreCase: r };
                            }
                            function be(e) {
                                return { type: "other", description: e };
                            }
                            function xe(t) {
                                var r,
                                    n = pe[t];
                                if (n) return n;
                                for (r = t - 1; !pe[r]; ) r--;
                                for (n = { line: (n = pe[r]).line, column: n.column }; r < t; ) 10 === e.charCodeAt(r) ? (n.line++, (n.column = 1)) : n.column++, r++;
                                return (pe[t] = n), n;
                            }
                            function Te(e, t, r) {
                                var n = xe(e),
                                    o = xe(t),
                                    a = { source: s, start: { offset: e, line: n.line, column: n.column }, end: { offset: t, line: o.line, column: o.column } };
                                return r && s && "function" == typeof s.offset && ((a.start = s.offset(a.start)), (a.end = s.offset(a.end))), a;
                            }
                            function we(e) {
                                he < ge || (he > ge && ((ge = he), (ve = [])), ve.push(e));
                            }
                            function Ce() {
                                var t, r, n, o, a, u, i, s;
                                if (((t = he), (r = Fe()) !== l)) {
                                    if (((n = []), (o = he), (a = []), (u = Ne()) !== l)) for (; u !== l; ) a.push(u), (u = Ne());
                                    else a = l;
                                    if (a !== l)
                                        if ((e.substr(he, 2) === d ? ((u = d), (he += 2)) : ((u = l), 0 === ye && we(N)), u !== l)) {
                                            if (((i = []), (s = Ne()) !== l)) for (; s !== l; ) i.push(s), (s = Ne());
                                            else i = l;
                                            i !== l && (s = Fe()) !== l ? (o = s) : ((he = o), (o = l));
                                        } else (he = o), (o = l);
                                    else (he = o), (o = l);
                                    for (; o !== l; ) {
                                        if ((n.push(o), (o = he), (a = []), (u = Ne()) !== l)) for (; u !== l; ) a.push(u), (u = Ne());
                                        else a = l;
                                        if (a !== l)
                                            if ((e.substr(he, 2) === d ? ((u = d), (he += 2)) : ((u = l), 0 === ye && we(N)), u !== l)) {
                                                if (((i = []), (s = Ne()) !== l)) for (; s !== l; ) i.push(s), (s = Ne());
                                                else i = l;
                                                i !== l && (s = Fe()) !== l ? (o = s) : ((he = o), (o = l));
                                            } else (he = o), (o = l);
                                        else (he = o), (o = l);
                                    }
                                    t = te(r, n);
                                } else (he = t), (t = l);
                                return t;
                            }
                            function Fe() {
                                var t, r, n, o, a, u, i, s;
                                if (((t = he), (r = Oe()) !== l)) {
                                    if (((n = []), (o = he), (a = []), (u = Ne()) !== l)) for (; u !== l; ) a.push(u), (u = Ne());
                                    else a = l;
                                    if (a !== l)
                                        if ((e.substr(he, 2) === h ? ((u = h), (he += 2)) : ((u = l), 0 === ye && we(k)), u !== l)) {
                                            if (((i = []), (s = Ne()) !== l)) for (; s !== l; ) i.push(s), (s = Ne());
                                            else i = l;
                                            i !== l && (s = Oe()) !== l ? (o = s) : ((he = o), (o = l));
                                        } else (he = o), (o = l);
                                    else (he = o), (o = l);
                                    for (; o !== l; ) {
                                        if ((n.push(o), (o = he), (a = []), (u = Ne()) !== l)) for (; u !== l; ) a.push(u), (u = Ne());
                                        else a = l;
                                        if (a !== l)
                                            if ((e.substr(he, 2) === h ? ((u = h), (he += 2)) : ((u = l), 0 === ye && we(k)), u !== l)) {
                                                if (((i = []), (s = Ne()) !== l)) for (; s !== l; ) i.push(s), (s = Ne());
                                                else i = l;
                                                i !== l && (s = Oe()) !== l ? (o = s) : ((he = o), (o = l));
                                            } else (he = o), (o = l);
                                        else (he = o), (o = l);
                                    }
                                    t = re(r, n);
                                } else (he = t), (t = l);
                                return t;
                            }
                            function Oe() {
                                var t, r, n;
                                return (
                                    (t = he),
                                    33 === e.charCodeAt(he) ? ((r = p), he++) : ((r = l), 0 === ye && we(z)),
                                    r !== l && (n = Oe()) !== l ? (t = ne(n)) : ((he = t), (t = l)),
                                    t === l &&
                                        (t = (function () {
                                            var t, r, n, o, a, u;
                                            if (((t = he), 40 === e.charCodeAt(he) ? ((r = g), he++) : ((r = l), 0 === ye && we(M)), r !== l)) {
                                                if (((n = []), (o = Ne()) !== l)) for (; o !== l; ) n.push(o), (o = Ne());
                                                else n = l;
                                                if (n !== l)
                                                    if ((o = Ce()) !== l) {
                                                        if (((a = []), (u = Ne()) !== l)) for (; u !== l; ) a.push(u), (u = Ne());
                                                        else a = l;
                                                        a !== l
                                                            ? (41 === e.charCodeAt(he) ? ((u = v), he++) : ((u = l), 0 === ye && we(D)), u !== l ? (t = o) : ((he = t), (t = l)))
                                                            : ((he = t), (t = l));
                                                    } else (he = t), (t = l);
                                                else (he = t), (t = l);
                                            } else (he = t), (t = l);
                                            return (
                                                t === l &&
                                                    (t = (function () {
                                                        var t;
                                                        return (
                                                            (t = (function () {
                                                                var t, r, n, o, a, u;
                                                                if ((ye++, (t = he), (r = Pe()) !== l)) {
                                                                    if (
                                                                        ((n = []),
                                                                        (o = he),
                                                                        46 === e.charCodeAt(he) ? ((a = y), he++) : ((a = l), 0 === ye && we(R)),
                                                                        a !== l && (u = je()) !== l ? (o = u) : ((he = o), (o = l)),
                                                                        o !== l)
                                                                    )
                                                                        for (; o !== l; )
                                                                            n.push(o),
                                                                                (o = he),
                                                                                46 === e.charCodeAt(he) ? ((a = y), he++) : ((a = l), 0 === ye && we(R)),
                                                                                a !== l && (u = je()) !== l ? (o = u) : ((he = o), (o = l));
                                                                    else n = l;
                                                                    n !== l && (o = Se()) !== l ? (t = ue(r, n, o)) : ((he = t), (t = l));
                                                                } else (he = t), (t = l);
                                                                return (
                                                                    t === l &&
                                                                        ((t = he),
                                                                        (r = Pe()) !== l && (n = Se()) !== l ? (t = ie(r, n)) : ((he = t), (t = l)),
                                                                        t === l && ((t = he), (r = Pe()) !== l && (r = le(r)), (t = r))),
                                                                    ye--,
                                                                    t === l && ((r = l), 0 === ye && we(Z)),
                                                                    t
                                                                );
                                                            })()),
                                                            t === l &&
                                                                ((t = (function () {
                                                                    var t, r, n, o, a, u;
                                                                    if ((ye++, (t = he), (r = je()) !== l)) {
                                                                        for (
                                                                            n = [],
                                                                                o = he,
                                                                                46 === e.charCodeAt(he) ? ((a = y), he++) : ((a = l), 0 === ye && we(R)),
                                                                                a !== l && (u = je()) !== l ? (o = u) : ((he = o), (o = l));
                                                                            o !== l;

                                                                        )
                                                                            n.push(o),
                                                                                (o = he),
                                                                                46 === e.charCodeAt(he) ? ((a = y), he++) : ((a = l), 0 === ye && we(R)),
                                                                                a !== l && (u = je()) !== l ? (o = u) : ((he = o), (o = l));
                                                                        (o = Se()) !== l ? (t = oe(r, n, o)) : ((he = t), (t = l));
                                                                    } else (he = t), (t = l);
                                                                    return ye--, t === l && ((r = l), 0 === ye && we(L)), t;
                                                                })()),
                                                                t === l &&
                                                                    (t = (function () {
                                                                        var t, r, n;
                                                                        return (
                                                                            ye++,
                                                                            (t = he),
                                                                            35 === e.charCodeAt(he) ? ((r = m), he++) : ((r = l), 0 === ye && we(H)),
                                                                            r !== l && (n = Ee()) !== l ? (t = ae(n)) : ((he = t), (t = l)),
                                                                            ye--,
                                                                            t === l && ((r = l), 0 === ye && we(V)),
                                                                            t
                                                                        );
                                                                    })())),
                                                            t
                                                        );
                                                    })()),
                                                t
                                            );
                                        })()),
                                    t
                                );
                            }
                            function Se() {
                                var t, r, n;
                                return (
                                    (t = he),
                                    T.test(e.charAt(he)) ? ((r = e.charAt(he)), he++) : ((r = l), 0 === ye && we(_)),
                                    r !== l && (n = Ee()) !== l ? (t = se(r, n)) : ((he = t), (t = l)),
                                    t === l && ((t = he), w.test(e.charAt(he)) ? ((r = e.charAt(he)), he++) : ((r = l), 0 === ye && we(B)), r !== l && (r = ce(r)), (t = r)),
                                    t
                                );
                            }
                            function Ee() {
                                var t, r, n, o;
                                if (((t = he), 39 === e.charCodeAt(he) ? ((r = A), he++) : ((r = l), 0 === ye && we(I)), r !== l)) {
                                    for (
                                        n = [],
                                            e.substr(he, 2) === b ? ((o = b), (he += 2)) : ((o = l), 0 === ye && we(J)),
                                            o === l &&
                                                (e.substr(he, 2) === x ? ((o = x), (he += 2)) : ((o = l), 0 === ye && we(X)),
                                                o === l && (C.test(e.charAt(he)) ? ((o = e.charAt(he)), he++) : ((o = l), 0 === ye && we($))));
                                        o !== l;

                                    )
                                        n.push(o),
                                            e.substr(he, 2) === b ? ((o = b), (he += 2)) : ((o = l), 0 === ye && we(J)),
                                            o === l &&
                                                (e.substr(he, 2) === x ? ((o = x), (he += 2)) : ((o = l), 0 === ye && we(X)),
                                                o === l && (C.test(e.charAt(he)) ? ((o = e.charAt(he)), he++) : ((o = l), 0 === ye && we($))));
                                    39 === e.charCodeAt(he) ? ((o = A), he++) : ((o = l), 0 === ye && we(I)), o !== l ? (t = fe(n)) : ((he = t), (t = l));
                                } else (he = t), (t = l);
                                if (t === l) {
                                    for (
                                        t = he,
                                            r = [],
                                            e.substr(he, 2) === b ? ((n = b), (he += 2)) : ((n = l), 0 === ye && we(J)),
                                            n === l &&
                                                (e.substr(he, 2) === x ? ((n = x), (he += 2)) : ((n = l), 0 === ye && we(X)),
                                                n === l && (F.test(e.charAt(he)) ? ((n = e.charAt(he)), he++) : ((n = l), 0 === ye && we(q))));
                                        n !== l;

                                    )
                                        r.push(n),
                                            e.substr(he, 2) === b ? ((n = b), (he += 2)) : ((n = l), 0 === ye && we(J)),
                                            n === l &&
                                                (e.substr(he, 2) === x ? ((n = x), (he += 2)) : ((n = l), 0 === ye && we(X)),
                                                n === l && (F.test(e.charAt(he)) ? ((n = e.charAt(he)), he++) : ((n = l), 0 === ye && we(q))));
                                    t = r = de(r);
                                }
                                return t;
                            }
                            function je() {
                                var t, r, n, o, a;
                                if (((t = he), (r = he), O.test(e.charAt(he)) ? ((n = e.charAt(he)), he++) : ((n = l), 0 === ye && we(G)), n !== l)) {
                                    if (((o = []), S.test(e.charAt(he)) ? ((a = e.charAt(he)), he++) : ((a = l), 0 === ye && we(U)), a !== l))
                                        for (; a !== l; ) o.push(a), S.test(e.charAt(he)) ? ((a = e.charAt(he)), he++) : ((a = l), 0 === ye && we(U));
                                    else o = l;
                                    o !== l ? (r = n = [n, o]) : ((he = r), (r = l));
                                } else (he = r), (r = l);
                                return r !== l ? e.substring(t, he) : r;
                            }
                            function Pe() {
                                var t, r, n, o, a;
                                if ((ye++, (t = he), (r = he), E.test(e.charAt(he)) ? ((n = e.charAt(he)), he++) : ((n = l), 0 === ye && we(Y)), n !== l)) {
                                    for (o = [], j.test(e.charAt(he)) ? ((a = e.charAt(he)), he++) : ((a = l), 0 === ye && we(K)); a !== l; )
                                        o.push(a), j.test(e.charAt(he)) ? ((a = e.charAt(he)), he++) : ((a = l), 0 === ye && we(K));
                                    r = n = [n, o];
                                } else (he = r), (r = l);
                                return (t = r !== l ? e.substring(t, he) : r), ye--, t === l && ((r = l), 0 === ye && we(W)), t;
                            }
                            function Ne() {
                                var t;
                                return ye++, P.test(e.charAt(he)) ? ((t = e.charAt(he)), he++) : ((t = l), 0 === ye && we(ee)), ye--, t === l && 0 === ye && we(Q), t;
                            }
                            if ((o = f()) !== l && he === e.length) return o;
                            throw (
                                (o !== l && he < e.length && we({ type: "end" }),
                                (a = ve),
                                (u = ge < e.length ? e.charAt(ge) : null),
                                (i = ge < e.length ? Te(ge, ge + 1) : Te(ge, ge)),
                                new n(n.buildMessage(a, u), a, u, i))
                            );
                        }
                    });
            },
            879: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.validate = t.execute = void 0);
                const n = r(318);
                (t.execute = function (e, t) {
                    return (0, n.parse)(e, { attributes: t });
                }),
                    (t.validate = function (e) {
                        try {
                            return (0, n.parse)(e, { attributes: [] }), { isValid: !0 };
                        } catch (e) {
                            if (e instanceof n.SyntaxError) {
                                const t = e;
                                return { isValid: !1, error: { message: t.message, location: { start: t.location.start, end: t.location.end } } };
                            }
                            return {
                                isValid: !1,
                                error: { message: JSON.stringify(e), location: { start: { column: 0, line: 0, offset: 0 }, end: { column: 0, line: 0, offset: 0 } } }
                            };
                        }
                    });
            }
        },
        t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = (t[n] = { exports: {} });
        return e[n](a, a.exports, r), a.exports;
    }
    (r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (() => {
            const e = r(879),
                { attributes: t } = r(428),
                n = document.getElementById("data"),
                o = document.getElementById("query"),
                a = document.getElementById("validation");
            function u(e = []) {
                n.innerHTML = "";
                for (let r = 0; r < t.length; r++) {
                    const o = JSON.stringify(t[r], null, 2);
                    let a = "";
                    e.includes(r) && (a = " style='font-weight:bold;background-color:#dcf2df'"), (n.innerHTML += `<pre${a}>${o}</pre>`);
                }
            }
            const i = o.value;
            u(e.execute(i, t)),
                o.addEventListener("input", (r) => {
                    const n = o.value,
                        i = e.validate(n);
                    i.isValid
                        ? ((o.style.borderColor = "black"), (o.style.outlineColor = "black"), (a.value = ""), u(e.execute(n, t)))
                        : ((o.style.borderColor = "red"),
                          (o.style.outlineColor = "red"),
                          (a.value = " ".repeat(i.error.location.start.column - 1) + "^\nError: " + i.error.message),
                          u([]));
                });
        })();
})();
