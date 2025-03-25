(() => {
    var e = {
            428: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, { attributes: () => n });
                const n = [
                    { value: { "@type": "PhoneNumber", value: "06221/215221" } },
                    { value: { "@type": "PhoneNumber", value: "06221/553132" }, tags: ["emergency"] },
                    { value: { "@type": "Website", value: "https://enmeshed.eu" } },
                    { value: { "@type": "GivenName", value: "Steven-Nicholas" } },
                    { value: { "@type": "LastName", value: "O'Malley" } },
                    {
                        value: {
                            "@type": "StreetAddress",
                            recipient: "Steven-Nicholas O'Malley",
                            street: "Luisenstr.",
                            houseNo: "7",
                            zipCode: "76646",
                            city: "Bruchsal",
                            country: "DE"
                        },
                        tags: ["delivery", "business"]
                    },
                    {
                        value: {
                            "@type": "StreetAddress",
                            recipient: "Steven-Nicholas O'Malley",
                            street: "Frankfurter Straße",
                            houseNo: "81",
                            zipCode: "76646",
                            city: "Bruchsal",
                            country: "DE"
                        },
                        tags: ["private"]
                    },
                    {
                        value: { "@type": "IdentityFileReference", value: "0xdeadbeef" },
                        tags: [
                            "urn:xbildung-de:xbildung:codeliste:artdesnachweises=http://www.xbildung.de/def/xbildung/0.9/code/ArtDesNachweises",
                            "urn:xhochschule-de:destatis:codeliste:artdeshsa=http://xhochschule.de/def/destatis/WS22/code/ArtDesHSA/111",
                            "urn:xbildung-de:unesco:codeliste:isced2011=6",
                            "urn:xbildung-de:unesco:codeliste:isced2011=64",
                            "urn:xbildung-de:unesco:codeliste:isced2011=647",
                            "content:edu.de.higher.certOfEnrolment",
                            "language:es"
                        ]
                    }
                ];
            },
            806: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.validate = t.execute = void 0);
                const n = r(588);
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
            },
            588: (e) => {
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
                    const u = [];
                    for (let s = 0; s < e.length; s++) {
                        const i = t(e[s], r, null);
                        (void 0 !== o && e[s].value["@type"] !== o) || (null !== i && n(i) && u.push(s));
                    }
                    return u;
                }
                function n(e, t, r, o) {
                    var u = Error.call(this, e);
                    return Object.setPrototypeOf && Object.setPrototypeOf(u, n.prototype), (u.expected = t), (u.found = r), (u.location = o), (u.name = "SyntaxError"), u;
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
                            var u = this.location.start,
                                s = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(u) : u,
                                i = this.location.source + ":" + s.line + ":" + s.column;
                            if (n) {
                                var a = this.location.end,
                                    l = o("", s.line.toString().length, " "),
                                    c = n[u.line - 1],
                                    f = (u.line === a.line ? a.column : c.length + 1) - u.column || 1;
                                t += "\n --\x3e " + i + "\n" + l + " |\n" + s.line + " | " + c + "\n" + l + " | " + o("", u.column - 1, " ") + o("", f, "^");
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
                                    return Array.isArray(e) ? u(e[0]) + "-" + u(e[1]) : u(e);
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
                        function u(e) {
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
                        function s(e) {
                            return r[e.type](e);
                        }
                        return (
                            "Expected " +
                            (function (e) {
                                var t,
                                    r,
                                    n = e.map(s);
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
                        StartRules: ["Expr"],
                        SyntaxError: n,
                        parse: function (e, t) {
                            var o,
                                u,
                                s,
                                i,
                                a = {},
                                l = (t = void 0 !== t ? t : {}).grammarSource,
                                c = { Expr: Se },
                                f = Se,
                                d = "||",
                                p = "&&",
                                h = "!",
                                g = "(",
                                v = ")",
                                y = ".",
                                b = "#",
                                m = "'",
                                x = "\\\\",
                                A = "\\'",
                                S = /^[=><~]/,
                                C = /^[?]/,
                                E = /^[^'\\]/,
                                w = /^[^'\\ ]/,
                                F = /^[a-z]/,
                                O = /^[A-Za-z0-9]/,
                                T = /^[A-Z]/,
                                j = /^[ \t\n\r]/,
                                N = ve("||", !1),
                                P = ve("&&", !1),
                                $ = ve("!", !1),
                                M = ve("(", !1),
                                D = ve(")", !1),
                                k = be("metadata field term"),
                                z = ve(".", !1),
                                L = be("tag term"),
                                R = ve("#", !1),
                                B = be("primary field term"),
                                I = ye(["=", ">", "<", "~"], !1, !1),
                                V = ye(["?"], !1, !1),
                                Z = ve("'", !1),
                                _ = ve("\\\\", !1),
                                H = ve("\\'", !1),
                                J = ye(["'", "\\"], !0, !1),
                                W = ye(["'", "\\", " "], !0, !1),
                                q = ye([["a", "z"]], !1, !1),
                                G = ye(
                                    [
                                        ["A", "Z"],
                                        ["a", "z"],
                                        ["0", "9"]
                                    ],
                                    !1,
                                    !1
                                ),
                                U = be("attribute type"),
                                K = ye([["A", "Z"]], !1, !1),
                                Q = be("whitespace"),
                                X = ye([" ", "\t", "\n", "\r"], !1, !1),
                                Y = function (e, t) {
                                    return t.reduce(
                                        (e, t) =>
                                            (function (e, t) {
                                                const r = Array.from(new Set([...e, ...t]));
                                                return r.sort((e, t) => e - t), r;
                                            })(e, t),
                                        e
                                    );
                                },
                                ee = function (e, t) {
                                    return t.reduce(
                                        (e, t) =>
                                            (function (e, ...t) {
                                                const r = [e, ...t].reduce((e, t) => e.filter((e) => t.includes(e)));
                                                return r.sort((e, t) => e - t), r;
                                            })(e, t),
                                        e
                                    );
                                },
                                te = function (e) {
                                    return (function (e, t) {
                                        const r = e.filter((e) => !t.includes(e));
                                        return r.sort((e, t) => e - t), r;
                                    })([...Array(t.attributes.length).keys()], e);
                                },
                                re = function (e, n, o) {
                                    return r(t.attributes, [e, ...n], o);
                                },
                                ne = function (e) {
                                    return r(t.attributes, ["tags"], (t) => Array.isArray(t) && t.includes(e));
                                },
                                oe = function (e, n, o) {
                                    return r(t.attributes, ["value", ...n], o, e);
                                },
                                ue = function (e, n) {
                                    return r(t.attributes, ["value", "value"], n, e);
                                },
                                se = function (e) {
                                    return r(t.attributes, ["value", "@type"], (t) => t === e);
                                },
                                ie = function (e, t) {
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
                                ae = function (e) {
                                    if ("?" === e) return (e) => (Array.isArray(e) ? e.length > 0 : "Object" === e.constructor.name ? Object.keys(e).length > 0 : null != e);
                                },
                                le = function (e) {
                                    return e.join("").replaceAll("\\\\", "\\").replaceAll("\\'", "'");
                                },
                                ce = function (e) {
                                    return e.join("").replaceAll("\\\\", "\\").replaceAll("\\'", "'");
                                },
                                fe = 0 | t.peg$currPos,
                                de = [{ line: 1, column: 1 }],
                                pe = fe,
                                he = t.peg$maxFailExpected || [],
                                ge = 0 | t.peg$silentFails;
                            if (t.startRule) {
                                if (!(t.startRule in c)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                                f = c[t.startRule];
                            }
                            function ve(e, t) {
                                return { type: "literal", text: e, ignoreCase: t };
                            }
                            function ye(e, t, r) {
                                return { type: "class", parts: e, inverted: t, ignoreCase: r };
                            }
                            function be(e) {
                                return { type: "other", description: e };
                            }
                            function me(t) {
                                var r,
                                    n = de[t];
                                if (n) return n;
                                if (t >= de.length) r = de.length - 1;
                                else for (r = t; !de[--r]; );
                                for (n = { line: (n = de[r]).line, column: n.column }; r < t; ) 10 === e.charCodeAt(r) ? (n.line++, (n.column = 1)) : n.column++, r++;
                                return (de[t] = n), n;
                            }
                            function xe(e, t, r) {
                                var n = me(e),
                                    o = me(t),
                                    u = { source: l, start: { offset: e, line: n.line, column: n.column }, end: { offset: t, line: o.line, column: o.column } };
                                return r && l && "function" == typeof l.offset && ((u.start = l.offset(u.start)), (u.end = l.offset(u.end))), u;
                            }
                            function Ae(e) {
                                fe < pe || (fe > pe && ((pe = fe), (he = [])), he.push(e));
                            }
                            function Se() {
                                var t, r, n, o, u, s, i, l;
                                if (((t = fe), (r = Ce()) !== a)) {
                                    if (((n = []), (o = fe), (u = []), (s = je()) !== a)) for (; s !== a; ) u.push(s), (s = je());
                                    else u = a;
                                    if (u !== a)
                                        if ((e.substr(fe, 2) === d ? ((s = d), (fe += 2)) : ((s = a), 0 === ge && Ae(N)), s !== a)) {
                                            if (((i = []), (l = je()) !== a)) for (; l !== a; ) i.push(l), (l = je());
                                            else i = a;
                                            i !== a && (l = Ce()) !== a ? (o = l) : ((fe = o), (o = a));
                                        } else (fe = o), (o = a);
                                    else (fe = o), (o = a);
                                    for (; o !== a; ) {
                                        if ((n.push(o), (o = fe), (u = []), (s = je()) !== a)) for (; s !== a; ) u.push(s), (s = je());
                                        else u = a;
                                        if (u !== a)
                                            if ((e.substr(fe, 2) === d ? ((s = d), (fe += 2)) : ((s = a), 0 === ge && Ae(N)), s !== a)) {
                                                if (((i = []), (l = je()) !== a)) for (; l !== a; ) i.push(l), (l = je());
                                                else i = a;
                                                i !== a && (l = Ce()) !== a ? (o = l) : ((fe = o), (o = a));
                                            } else (fe = o), (o = a);
                                        else (fe = o), (o = a);
                                    }
                                    t = Y(r, n);
                                } else (fe = t), (t = a);
                                return t;
                            }
                            function Ce() {
                                var t, r, n, o, u, s, i, l;
                                if (((t = fe), (r = Ee()) !== a)) {
                                    if (((n = []), (o = fe), (u = []), (s = je()) !== a)) for (; s !== a; ) u.push(s), (s = je());
                                    else u = a;
                                    if (u !== a)
                                        if ((e.substr(fe, 2) === p ? ((s = p), (fe += 2)) : ((s = a), 0 === ge && Ae(P)), s !== a)) {
                                            if (((i = []), (l = je()) !== a)) for (; l !== a; ) i.push(l), (l = je());
                                            else i = a;
                                            i !== a && (l = Ee()) !== a ? (o = l) : ((fe = o), (o = a));
                                        } else (fe = o), (o = a);
                                    else (fe = o), (o = a);
                                    for (; o !== a; ) {
                                        if ((n.push(o), (o = fe), (u = []), (s = je()) !== a)) for (; s !== a; ) u.push(s), (s = je());
                                        else u = a;
                                        if (u !== a)
                                            if ((e.substr(fe, 2) === p ? ((s = p), (fe += 2)) : ((s = a), 0 === ge && Ae(P)), s !== a)) {
                                                if (((i = []), (l = je()) !== a)) for (; l !== a; ) i.push(l), (l = je());
                                                else i = a;
                                                i !== a && (l = Ee()) !== a ? (o = l) : ((fe = o), (o = a));
                                            } else (fe = o), (o = a);
                                        else (fe = o), (o = a);
                                    }
                                    t = ee(r, n);
                                } else (fe = t), (t = a);
                                return t;
                            }
                            function Ee() {
                                var t, r, n;
                                return (
                                    (t = fe),
                                    33 === e.charCodeAt(fe) ? ((r = h), fe++) : ((r = a), 0 === ge && Ae($)),
                                    r !== a && (n = Ee()) !== a ? (t = te(n)) : ((fe = t), (t = a)),
                                    t === a &&
                                        (t = (function () {
                                            var t, r, n, o, u, s;
                                            if (((t = fe), 40 === e.charCodeAt(fe) ? ((r = g), fe++) : ((r = a), 0 === ge && Ae(M)), r !== a)) {
                                                if (((n = []), (o = je()) !== a)) for (; o !== a; ) n.push(o), (o = je());
                                                else n = a;
                                                if (n !== a)
                                                    if ((o = Se()) !== a) {
                                                        if (((u = []), (s = je()) !== a)) for (; s !== a; ) u.push(s), (s = je());
                                                        else u = a;
                                                        u !== a
                                                            ? (41 === e.charCodeAt(fe) ? ((s = v), fe++) : ((s = a), 0 === ge && Ae(D)), s !== a ? (t = o) : ((fe = t), (t = a)))
                                                            : ((fe = t), (t = a));
                                                    } else (fe = t), (t = a);
                                                else (fe = t), (t = a);
                                            } else (fe = t), (t = a);
                                            return (
                                                t === a &&
                                                    (t = (function () {
                                                        var t;
                                                        return (
                                                            (t = (function () {
                                                                var t, r, n, o, u, s;
                                                                if ((ge++, (t = fe), (r = Te()) !== a)) {
                                                                    if (
                                                                        ((n = []),
                                                                        (o = fe),
                                                                        46 === e.charCodeAt(fe) ? ((u = y), fe++) : ((u = a), 0 === ge && Ae(z)),
                                                                        u !== a && (s = Oe()) !== a ? (o = s) : ((fe = o), (o = a)),
                                                                        o !== a)
                                                                    )
                                                                        for (; o !== a; )
                                                                            n.push(o),
                                                                                (o = fe),
                                                                                46 === e.charCodeAt(fe) ? ((u = y), fe++) : ((u = a), 0 === ge && Ae(z)),
                                                                                u !== a && (s = Oe()) !== a ? (o = s) : ((fe = o), (o = a));
                                                                    else n = a;
                                                                    n !== a && (o = we()) !== a ? (t = oe(r, n, o)) : ((fe = t), (t = a));
                                                                } else (fe = t), (t = a);
                                                                return (
                                                                    t === a &&
                                                                        ((t = fe),
                                                                        (r = Te()) !== a && (n = we()) !== a ? (t = ue(r, n)) : ((fe = t), (t = a)),
                                                                        t === a && ((t = fe), (r = Te()) !== a && (r = se(r)), (t = r))),
                                                                    ge--,
                                                                    t === a && ((r = a), 0 === ge && Ae(B)),
                                                                    t
                                                                );
                                                            })()),
                                                            t === a &&
                                                                ((t = (function () {
                                                                    var t, r, n, o, u, s;
                                                                    if ((ge++, (t = fe), (r = Oe()) !== a)) {
                                                                        for (
                                                                            n = [],
                                                                                o = fe,
                                                                                46 === e.charCodeAt(fe) ? ((u = y), fe++) : ((u = a), 0 === ge && Ae(z)),
                                                                                u !== a && (s = Oe()) !== a ? (o = s) : ((fe = o), (o = a));
                                                                            o !== a;

                                                                        )
                                                                            n.push(o),
                                                                                (o = fe),
                                                                                46 === e.charCodeAt(fe) ? ((u = y), fe++) : ((u = a), 0 === ge && Ae(z)),
                                                                                u !== a && (s = Oe()) !== a ? (o = s) : ((fe = o), (o = a));
                                                                        (o = we()) !== a ? (t = re(r, n, o)) : ((fe = t), (t = a));
                                                                    } else (fe = t), (t = a);
                                                                    return ge--, t === a && ((r = a), 0 === ge && Ae(k)), t;
                                                                })()),
                                                                t === a &&
                                                                    (t = (function () {
                                                                        var t, r, n;
                                                                        return (
                                                                            ge++,
                                                                            (t = fe),
                                                                            35 === e.charCodeAt(fe) ? ((r = b), fe++) : ((r = a), 0 === ge && Ae(R)),
                                                                            r !== a && (n = Fe()) !== a ? (t = ne(n)) : ((fe = t), (t = a)),
                                                                            ge--,
                                                                            t === a && ((r = a), 0 === ge && Ae(L)),
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
                            function we() {
                                var t, r, n;
                                return (
                                    (t = fe),
                                    (r = e.charAt(fe)),
                                    S.test(r) ? fe++ : ((r = a), 0 === ge && Ae(I)),
                                    r !== a && (n = Fe()) !== a ? (t = ie(r, n)) : ((fe = t), (t = a)),
                                    t === a && ((t = fe), (r = e.charAt(fe)), C.test(r) ? fe++ : ((r = a), 0 === ge && Ae(V)), r !== a && (r = ae(r)), (t = r)),
                                    t
                                );
                            }
                            function Fe() {
                                var t, r, n, o;
                                if (((t = fe), 39 === e.charCodeAt(fe) ? ((r = m), fe++) : ((r = a), 0 === ge && Ae(Z)), r !== a)) {
                                    for (
                                        n = [],
                                            e.substr(fe, 2) === x ? ((o = x), (fe += 2)) : ((o = a), 0 === ge && Ae(_)),
                                            o === a &&
                                                (e.substr(fe, 2) === A ? ((o = A), (fe += 2)) : ((o = a), 0 === ge && Ae(H)),
                                                o === a && ((o = e.charAt(fe)), E.test(o) ? fe++ : ((o = a), 0 === ge && Ae(J))));
                                        o !== a;

                                    )
                                        n.push(o),
                                            e.substr(fe, 2) === x ? ((o = x), (fe += 2)) : ((o = a), 0 === ge && Ae(_)),
                                            o === a &&
                                                (e.substr(fe, 2) === A ? ((o = A), (fe += 2)) : ((o = a), 0 === ge && Ae(H)),
                                                o === a && ((o = e.charAt(fe)), E.test(o) ? fe++ : ((o = a), 0 === ge && Ae(J))));
                                    39 === e.charCodeAt(fe) ? ((o = m), fe++) : ((o = a), 0 === ge && Ae(Z)), o !== a ? (t = le(n)) : ((fe = t), (t = a));
                                } else (fe = t), (t = a);
                                if (t === a) {
                                    for (
                                        t = fe,
                                            r = [],
                                            e.substr(fe, 2) === x ? ((n = x), (fe += 2)) : ((n = a), 0 === ge && Ae(_)),
                                            n === a &&
                                                (e.substr(fe, 2) === A ? ((n = A), (fe += 2)) : ((n = a), 0 === ge && Ae(H)),
                                                n === a && ((n = e.charAt(fe)), w.test(n) ? fe++ : ((n = a), 0 === ge && Ae(W))));
                                        n !== a;

                                    )
                                        r.push(n),
                                            e.substr(fe, 2) === x ? ((n = x), (fe += 2)) : ((n = a), 0 === ge && Ae(_)),
                                            n === a &&
                                                (e.substr(fe, 2) === A ? ((n = A), (fe += 2)) : ((n = a), 0 === ge && Ae(H)),
                                                n === a && ((n = e.charAt(fe)), w.test(n) ? fe++ : ((n = a), 0 === ge && Ae(W))));
                                    t = r = ce(r);
                                }
                                return t;
                            }
                            function Oe() {
                                var t, r, n, o, u;
                                if (((t = fe), (r = fe), (n = e.charAt(fe)), F.test(n) ? fe++ : ((n = a), 0 === ge && Ae(q)), n !== a)) {
                                    if (((o = []), (u = e.charAt(fe)), O.test(u) ? fe++ : ((u = a), 0 === ge && Ae(G)), u !== a))
                                        for (; u !== a; ) o.push(u), (u = e.charAt(fe)), O.test(u) ? fe++ : ((u = a), 0 === ge && Ae(G));
                                    else o = a;
                                    o !== a ? (r = n = [n, o]) : ((fe = r), (r = a));
                                } else (fe = r), (r = a);
                                return r !== a ? e.substring(t, fe) : r;
                            }
                            function Te() {
                                var t, r, n, o, u;
                                if ((ge++, (t = fe), (r = fe), (n = e.charAt(fe)), T.test(n) ? fe++ : ((n = a), 0 === ge && Ae(K)), n !== a)) {
                                    for (o = [], u = e.charAt(fe), O.test(u) ? fe++ : ((u = a), 0 === ge && Ae(G)); u !== a; )
                                        o.push(u), (u = e.charAt(fe)), O.test(u) ? fe++ : ((u = a), 0 === ge && Ae(G));
                                    r = n = [n, o];
                                } else (fe = r), (r = a);
                                return (t = r !== a ? e.substring(t, fe) : r), ge--, t === a && ((r = a), 0 === ge && Ae(U)), t;
                            }
                            function je() {
                                var t;
                                return ge++, (t = e.charAt(fe)), j.test(t) ? fe++ : ((t = a), 0 === ge && Ae(X)), ge--, t === a && 0 === ge && Ae(Q), t;
                            }
                            if (((o = f()), t.peg$library)) return { peg$result: o, peg$currPos: fe, peg$FAILED: a, peg$maxFailExpected: he, peg$maxFailPos: pe };
                            if (o !== a && fe === e.length) return o;
                            throw (
                                (o !== a && fe < e.length && Ae({ type: "end" }),
                                (u = he),
                                (s = pe < e.length ? e.charAt(pe) : null),
                                (i = pe < e.length ? xe(pe, pe + 1) : xe(pe, pe)),
                                new n(n.buildMessage(u, s), u, s, i))
                            );
                        }
                    });
            }
        },
        t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var u = (t[n] = { exports: {} });
        return e[n](u, u.exports, r), u.exports;
    }
    (r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        });
    const n = r(806),
        { attributes: o } = r(428),
        u = document.getElementById("data"),
        s = document.getElementById("query"),
        i = document.getElementById("validation");
    function a(e = []) {
        u.innerHTML = "";
        for (let t = 0; t < o.length; t++) {
            const r = JSON.stringify(o[t], null, 2);
            let n = "";
            e.includes(t) && (n = " style='font-weight:bold;background-color:#dcf2df'"), (u.innerHTML += `<pre${n}>${r}</pre>`);
        }
    }
    const l = s.value;
    a(n.execute(l, o)),
        s.addEventListener("input", (e) => {
            const t = s.value,
                r = n.validate(t);
            r.isValid
                ? ((s.style.borderColor = "black"), (s.style.outlineColor = "black"), (i.value = ""), a(n.execute(t, o)))
                : ((s.style.borderColor = "red"),
                  (s.style.outlineColor = "red"),
                  (i.value = " ".repeat(r.error.location.start.column - 1) + "^\nError: " + r.error.message),
                  a([]));
        });
})();
