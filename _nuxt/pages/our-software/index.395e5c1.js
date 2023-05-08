(window.webpackJsonp = window.webpackJsonp || []).push([
    [145, 30, 39, 41, 42, 47, 48, 50, 68, 80, 82, 96, 104, 109, 111, 116], {
        1001: function(t, e, d) {
            "use strict";
            d.r(e);
            d(37), d(20), d(23), d(7), d(52), d(30), d(53);
            var c = d(3);

            function n(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(object);
                    t && (d = d.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, d)
                }
                return e
            }

            function r(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? n(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var o = {
                    cellAlign: "center",
                    contain: !0,
                    freeScroll: !0,
                    overflow: !0,
                    pageDots: !0,
                    sameHeightCells: !0,
                    slideWidth: "80%",
                    themeColor: "dark"
                },
                l = {
                    props: {
                        carouselOptions: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    computed: {
                        computedCarouselOptions: function() {
                            return r(r({}, o), this.carouselOptions)
                        },
                        portalName: function() {
                            return "carousel-grid-".concat(this._uid)
                        }
                    }
                },
                h = (d(876), d(0)),
                component = Object(h.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("ResponsiveContainer", {
                        staticClass: "carouselgrid",
                        attrs: {
                            dev: t.dev
                        },
                        scopedSlots: t._u([{
                            key: "mobiletablet",
                            fn: function() {
                                return [e("CarouselSwiper", t._b({
                                    attrs: {
                                        "portal-name": t.portalName
                                    }
                                }, "CarouselSwiper", t.computedCarouselOptions, !1))]
                            },
                            proxy: !0
                        }, {
                            key: "desktop",
                            fn: function() {
                                return [e("GridContainer", {
                                    staticClass: "carouselgrid__grid",
                                    attrs: {
                                        "portal-name": t.portalName
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, [e("PortalIn", {
                        attrs: {
                            "portal-name": t.portalName
                        }
                    }, [t._t("default")], 2)], 1)
                }), [], !1, null, "4304d87d", null);
            e.default = component.exports;
            installComponents(component, {
                PortalIn: d(838).default,
                CarouselSwiper: d(839).default,
                GridContainer: d(840).default,
                ResponsiveContainer: d(841).default
            })
        },
        1002: function(t, e, d) {
            "use strict";
            d.r(e);
            d(20), d(44), d(38);
            var c = {
                    data: function() {
                        return {}
                    },
                    props: {
                        image: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            required: !0
                        },
                        tier: {
                            type: String,
                            required: !0
                        },
                        title: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !0
                        },
                        categories: {
                            type: Array,
                            required: !0
                        },
                        pullquote: {
                            type: Object,
                            required: !0
                        }
                    },
                    methods: {
                        splitArray: function(t) {
                            var e = Math.ceil((t.length - 1) / 2);
                            return [t.slice(0, e), t.slice(e, t.length)]
                        }
                    }
                },
                n = (d(881), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "app-col app-row app-row-md--center container",
                        style: {
                            backgroundColor: t.backgroundColor
                        }
                    }, [e("div", {
                        staticClass: "app-col-md-20 app-row app-row-md--between app-row-md--middle app-row-xs--center"
                    }, [e("div", {
                        staticClass: "app-col-xs-20 app-col-md-10 app-col-xs--last app-col-md--origin"
                    }, [e("span", {
                        staticClass: "tier"
                    }, [t._v(t._s(t.tier))]), t._v(" "), e("h2", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.title)
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(t.description))]), t._v(" "), e("ul", {
                        staticClass: "app-row"
                    }, [e("div", {
                        staticClass: "app-col-md-4"
                    }, t._l(t.splitArray(t.categories)[0], (function(d, i) {
                        return e("li", {
                            key: d + i
                        }, [e("div", [e("Icon", {
                            staticClass: "feature-icon",
                            attrs: {
                                icon: "small-checkmark"
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "feature-item-text"
                        }, [e("span", [t._v(t._s(d))])])])
                    })), 0), t._v(" "), e("div", {
                        staticClass: "app-col-md-4"
                    }, t._l(t.splitArray(t.categories)[1], (function(d, i) {
                        return e("li", {
                            key: d + i
                        }, [e("div", [e("Icon", {
                            staticClass: "feature-icon",
                            attrs: {
                                icon: "small-checkmark"
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "feature-item-text"
                        }, [e("span", [t._v(t._s(d))])])])
                    })), 0)]), t._v(" "), e("div", {
                        staticClass: "pullquote"
                    }, [e("p", {
                        staticClass: "quote"
                    }, [t._v(t._s(t.pullquote.quote))]), t._v(" "), e("div", {
                        staticClass: "source"
                    }, [e("GenericImage", t._b({
                        staticClass: "avatar",
                        attrs: {
                            "fade-threshold": [.5, 1]
                        }
                    }, "GenericImage", t.pullquote.image, !1)), t._v(" "), e("div", [e("p", {
                        staticClass: "attribution"
                    }, [t._v(t._s(t.pullquote.attribution))]), t._v(" "), e("p", {
                        staticClass: "role",
                        domProps: {
                            innerHTML: t._s(t.pullquote.attributionSecondary)
                        }
                    })])], 1)])]), t._v(" "), e("div", {
                        staticClass: "app-col-md-9 app-col-xs-20 media-image"
                    }, [e("ContainerRounded", [e("GenericImage", t._b({
                        attrs: {
                            "fade-threshold": [.5, 1]
                        }
                    }, "GenericImage", t.image, !1))], 1)], 1)])])
                }), [], !1, null, "35214c05", null);
            e.default = component.exports;
            installComponents(component, {
                Icon: d(48).default,
                GenericImage: d(127).default,
                ContainerRounded: d(206).default
            })
        },
        1160: function(t, e, d) {
            "use strict";
            d.r(e);
            var c = d(42),
                n = (d(31), d(37), d(20), d(23), d(7), d(52), d(30), d(53), d(3)),
                r = d(5),
                o = d(624),
                l = d(164),
                head = d(129),
                h = d(651);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(object);
                    t && (d = d.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, d)
                }
                return e
            }

            function v(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var m = v(v({
                    data: function() {
                        return {
                            header: v(v({}, l.b), {}, {
                                backgroundColor: r.e.GRASS_LIGHT
                            }),
                            footer: l.a,
                            section1: {
                                backgroundColor: r.e.GRASS_LIGHT,
                                backgroundDecoration: [{
                                    shape: "dots",
                                    alignment: "center-left",
                                    color: r.e.GRASS,
                                    opacity: .4
                                }, {
                                    shape: "triangle-2",
                                    alignment: "center-right",
                                    color: r.e.GRASS,
                                    opacity: .2,
                                    offset: [0, -50],
                                    scale: 1.2
                                }],
                                mediaCutoff: {
                                    title: "Your key to <strong>extraordinary</strong>",
                                    description: "primeForce Property Manager unlocks new possibilities for your business all on one powerful platform. No matter what your needs might be,<br @lg/> our personalized partnership and intuitive software open every closed door along the way, helping you uncover new efficiencies and grow your business.",
                                    ctaLinks: [{
                                        cta: "Get Started",
                                        ctaLink: "/free-demo"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/5s2pckkxrt76px65qgsvfxmk/software-primeForce-ui.gif"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    imageSize: o.IMAGE_SIZES.NORMAL
                                }
                            },
                            section2: {
                                sections: ["The primeForce Difference", "Features", "Who We Serve", "Pricing"]
                            },
                            section3: {
                                backgroundColor: r.e.WHITE,
                                calloutSection1: {
                                    title: "Do more with our proven approach",
                                    cards: [{
                                        imageSize: "large",
                                        headline: "Agile technology, built to scale",
                                        description: "Discover a platform built for stability, scale, and innovation – constantly improved though automatic updates.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/39hw2n6cpkbg9vmvwh6rgxmj/Implementation.png"),
                                            altText: ""
                                        }
                                    }, {
                                        imageSize: "large",
                                        headline: "Industry-leading AI",
                                        description: "Free your team to focus on creativity and delivering great service with future-first automation and AI-driven insights.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/8jczmgrtrzx3zqjkjrhct8v/AI.png"),
                                            altText: ""
                                        }
                                    }, {
                                        imageSize: "large",
                                        headline: "One intuitive platform",
                                        description: "Save time and drive action with primeForce. Finally, easy-to-use property management software with a clear, consistent user experience.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/czbz98rtpsq62hxs2f7m89hx/Seamless_Solutions.png"),
                                            altText: ""
                                        }
                                    }]
                                },
                                calloutSection2: {
                                    cards: [{
                                        imageSize: "large",
                                        headline: "Robust accounting and reporting",
                                        description: "Accurately capture every transaction in one single source of truth and get the real-time insight needed for fast and confident decisions.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/343mxvnn4kgwjspjtr2t3z4g/Accounting.png"),
                                            altText: ""
                                        }
                                    }, {
                                        imageSize: "large",
                                        headline: "Curated integrations",
                                        description: "Add select services, outsource entire workflows, or complement primeForce with other real estate technology.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/phk878tsx4tt85ktj9kkj8vq/Success.png"),
                                            altText: ""
                                        }
                                    }, {
                                        imageSize: "large",
                                        headline: "Remarkable service",
                                        description: "You matter to us. It’s that simple. Onboarding, support, strategic advice. We’re there for you.",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/nt4tgk3zqjm73gnw5ccb8gxt/Support.png"),
                                            altText: ""
                                        }
                                    }]
                                }
                            },
                            section4: {
                                backgroundColor: r.e.WHITE,
                                headline: {
                                    title: "primeForce has everything your<br @md/> business needs in one place"
                                },
                                mediaCategories: [{
                                    title: "Communication & Service",
                                    description: "Differentiate your business through exceptional experiences and customer service with primeForce’s modern communication tools.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/pt5ptbqfvgswz8jn43z7xmn/icon_Communication___Service.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Email and Text Templates",
                                        isPlus: !0
                                    }, {
                                        text: "Owner Portal"
                                    }, {
                                        text: "Vendor Portal"
                                    }, {
                                        text: "Resident Portal"
                                    }, {
                                        text: "Document Management"
                                    }, {
                                        text: "Surveys"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/xq4g2zfj68rz44xw7sp6mgc/software-marketing-lisa.svg"),
                                        altText: "Representation of software interface showing a conversation between a property management representative and a customer about scheduling a maintenance"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/communication-service"
                                }, {
                                    title: "Accounting & Reporting",
                                    description: "Eliminate the pain of accessing and understanding the essential data that drives your business and optimizes customer relationships.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/rs8fkn7r6b5fht7wrf7w7pck/icon_accounting_reporting.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Performance Insights",
                                        isPlus: !0
                                    }, {
                                        text: "Online Payments"
                                    }, {
                                        text: "CAM Tracking & Reconciliation"
                                    }, {
                                        text: "Automated AP"
                                    }, {
                                        text: "Corporate Accounting"
                                    }, {
                                        text: "Real-time Flexible Reporting"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/sfch8tswfgrbmwfngngg4vn/residential-accounting-reporting.svg"),
                                        altText: "Representation of scanning of bills via software with progress bar"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/accounting-reporting",
                                    leftAlign: !0
                                }, {
                                    title: "Maintenance & Efficiency",
                                    description: "Keep your property values up and your customers safe and satisfied with streamlined work orders, inspections, and unit turns.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/c38x4tx6tm4th7xff9b3nm7/icon_maint_efficiency.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Smart Bill Entry"
                                    }, {
                                        text: "Online Maintenance Requests"
                                    }, {
                                        text: "Work Order Management"
                                    }, {
                                        text: "Unit Turn Board"
                                    }, {
                                        text: "In-House Maintenance"
                                    }, {
                                        text: "Mobile Inspections"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/rqrx6kx3b94ss595q2xtm/software-accounting-reporting.svg"),
                                        altText: "Representation of software interface showing a pie chart titled Work Orders"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/maintenance-efficiency"
                                }]
                            },
                            section5: {
                                backgroundColor: r.e.GRASS_DARK,
                                backgroundDecoration: {
                                    shape: "dots",
                                    alignment: "center-left",
                                    color: r.e.GRASS
                                },
                                pullquote: {
                                    image: {
                                        source: "".concat(r.a, "1TPX6JVS/at/5gkg92qfc9964b89pwcwj/headshot-carina-lyons.png"),
                                        altText: "Photo of Carina Lyons"
                                    },
                                    quote: "“primeForce has allowed us to streamline our<br @lg/> workflows so we can focus on what’s<br @lg/> most important - our relationships.”",
                                    attribution: "Carina Lyons",
                                    attributionSecondary: "Vice President, Concept Property Management",
                                    cta: "All Case Studies",
                                    ctaLink: "/industry-insights/customer-stories",
                                    themeColor: r.f.DARK
                                }
                            },
                            section6: {
                                backgroundColor: r.e.WHITE,
                                mediaCategories: [{
                                    title: "Staffing & Training",
                                    description: "Get new hires up and running faster. Give your associates more time to focus on higher-value work. Hang on to great talent with primeForce’s user-friendly interface and workflows.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/wtpxmfn8sc6r8sgtvb937v4/icon_staff_train.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Configurable Workflows",
                                        isPlus: !0
                                    }, {
                                        text: "Universal Search"
                                    }, {
                                        text: "Single Universal User Interface"
                                    }, {
                                        text: "Mobile App"
                                    }, {
                                        text: "Robust Training"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/cprx4gbvq2fxb2x7nr5xrrj/residential-staffing-training.svg"),
                                        altText: "Representation of software interface showing tracking of staff training progress"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/staffing-training",
                                    leftAlign: !0
                                }, {
                                    title: "Management & Growth",
                                    description: "Expand your portfolio, increase NOI, and eliminate inefficiencies so your business can remain healthy and continue growing for years to come.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/q86m9mjn8rsxhfw5sx9htnsp/icon_manage_growth.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Workflow Reporting",
                                        isPlus: !0
                                    }, {
                                        text: "Leasing Metrics Dashboard",
                                        isPlus: !0
                                    }, {
                                        text: "Performance Insights",
                                        isPlus: !0
                                    }, {
                                        text: "Custom User Roles"
                                    }, {
                                        text: "Audit Logs"
                                    }, {
                                        text: "Customizable Workflows"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/4kmpktvfxkh4snf89ftcbnk/residential-management-growth.svg"),
                                        altText: "Representation of software interface displaying a pie chart and a line chart"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/management-growth"
                                }, {
                                    title: "Marketing & Leasing",
                                    description: "Run and grow your business with professional website services, flexible showing options, and a fully integrated lead-to-lease process.",
                                    titleGraphic: {
                                        source: "".concat(r.a, "1TPX6JVS/at/mtp82jsb88g994xsbnwmf9vr/icon_marketing_lease.svg"),
                                        altText: "Animated representation of the primeForce Property Management software"
                                    },
                                    featuresLabel: "Key Features:",
                                    features: [{
                                        text: "Online Leases"
                                    }, {
                                        text: "Vacancy Dashboard"
                                    }, {
                                        text: "Virtual Showings"
                                    }, {
                                        text: "AI Leasing Assistant"
                                    }, {
                                        text: "Premium Leads"
                                    }, {
                                        text: "Professional Websites"
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/ng2vxttq4gh4mxcw8xvrwmr/residential-marketing-leasing.svg"),
                                        altText: "Representation of software interface for listing rental properties"
                                    },
                                    cta: "See All Features",
                                    ctaLink: "/our-software/marketing-leasing",
                                    leftAlign: !0
                                }]
                            },
                            section7: {
                                backgroundColor: r.e.KEY_LIGHT,
                                mediaTier: {
                                    backgroundColor: r.e.KEY_LIGHT,
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/jgtfbtnthnb2qv7pk9sht4c/our-software-plus-com.jpg"),
                                        altText: ""
                                    },
                                    tier: "Plus",
                                    title: "Easily manage more<br @md/> with primeForce Property <span nowrap>Manager Plus</span>",
                                    description: "primeForce Property Manager Plus is a custom-built solution for complex businesses managing thousands of units. Flexible workflows allow you to consistently execute processes, seamlessly deliver exceptional experiences, and quickly gain full transparency, even if you have a large team working across many properties. Comprehensive and intuitive, primeForce Property Manager Plus provides instant access to insights and data, enabling your team to make strategic decisions and execute on long-term plans. If your business manages thousands of units, discover why primeForce Property Manager Plus is right for you.",
                                    categories: ["Elevated Service Experience", "Advanced Performance Insights", "primeForce Stack™ Premium", "Configurable Workflows", "Revenue Management", "Auditing Center"],
                                    pullquote: {
                                        quote: "“We keep finding new ways to substantially up our reporting and workflow game with primeForce Property Manager Plus.“",
                                        attribution: "Nicholas Mertens",
                                        attributionSecondary: "Vice President of Property Management<br />Atlas Real Estate Group<br />+3600 units",
                                        image: {
                                            source: "".concat(r.a, "1TPX6JVS/at/2k6f37g3r92fc543k3g52scx/headshot-nicholas-mertens.png"),
                                            altText: "Photo of Nicholas Mertens"
                                        }
                                    }
                                }
                            },
                            section8: {
                                headline: {
                                    title: "No matter the mix, we serve<br @md/> your diverse portfolio"
                                },
                                carouselProps: [{
                                    size: r.c.MEDIUM,
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/pc8v855x9ckgxghcvxnf2x/house-front-door.jpg"),
                                        altText: "Blue front door to house, open"
                                    },
                                    cta: "Residential Properties",
                                    ctaLink: "/who-we-serve/residential"
                                }, {
                                    size: r.c.MEDIUM,
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/w7th6m36qxkkz3m8br/white-house.jpg"),
                                        altText: "Three condominium units with two stories, pilars, white front doors"
                                    },
                                    cta: "Community Associations",
                                    ctaLink: "/who-we-serve/community-associations"
                                }, {
                                    size: r.c.MEDIUM,
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/k48kr46cmr2xsjq98w4656nk/office-building.jpg"),
                                        altText: "Two-story commercial building with large windows"
                                    },
                                    cta: "Commercial Properties",
                                    ctaLink: "/who-we-serve/commercial"
                                }]
                            },
                            section9: {
                                backgroundColor: r.e.WHITE,
                                ctaBanner: {
                                    title: "Find your fit with our transparent pricing",
                                    description: "No hidden fees. No overpaying for features you don’t need. With primeForce’s transparent pricing plans, you’ll know exactly what you’re paying for and get exactly what you need.",
                                    cta: "Explore Pricing",
                                    href: "/pricing",
                                    backgroundColor: r.e.POWER_LIGHT,
                                    decorations: [{
                                        shape: "circle",
                                        alignment: "top-left-split",
                                        color: r.e.POWER,
                                        opacity: .4,
                                        offset: ["50%", "20%"],
                                        scale: .8
                                    }, {
                                        shape: "square-2",
                                        alignment: "center-right",
                                        color: r.e.POWER,
                                        opacity: .4,
                                        offset: ["25%", 0]
                                    }]
                                }
                            },
                            section10: {
                                backgroundColor: r.e.WOOD_LIGHT,
                                expertsData: {
                                    title: "See what primeForce can<br @md/> do for you",
                                    description: "Your success is our passion. Whether it’s onboarding, support, or strategic advice, product<br @md/> experts are on call to answer your questions.",
                                    ctaLinks: [{
                                        cta: "Chat with an Expert",
                                        ctaLink: "#chat-with-an-expert"
                                    }, {
                                        cta: "Book a Demo",
                                        ctaLink: "/free-demo",
                                        type: r.k.SECONDARY
                                    }],
                                    image: {
                                        source: "".concat(r.a, "GYMK570U/at/8k4h8r3b5f542zbzcr3nhxx/meeting-smile-man.jpg"),
                                        altText: "Group of three people sitting at a table having a conversation, man in focus is holding a pen"
                                    }
                                }
                            }
                        }
                    }
                }, Object(head.a)("Property Management Software Features | primeForce", "Explore our property management software with integrated accounting, marketing and management features for all portfolio types. Get a free demo now!")), {}, {
                    jsonld: function() {
                        return v({}, h.a.getVersion("1"))
                    }
                }),
                x = d(0),
                component = Object(x.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("NavHeader", {
                        attrs: {
                            data: t.header
                        },
                        scopedSlots: t._u([{
                            key: "page",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "our-software"
                                }, [e("ContainerSection", {
                                    staticClass: "hero",
                                    attrs: {
                                        "background-color": t.section1.backgroundColor,
                                        "background-decoration": t.section1.backgroundDecoration
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        size: 80
                                    }
                                }), t._v(" "), e("MediaCutoff", t._b({}, "MediaCutoff", t.section1.mediaCutoff, !1))], 1), t._v(" "), e("AnchorScroller", {
                                    attrs: {
                                        sections: t.section2.sections
                                    }
                                }, [e("template", {
                                    slot: t.section2.sections[0]
                                }, [e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section3.backgroundColor
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        size: "64"
                                    }
                                }), t._v(" "), e("ContentColumn", {
                                    staticClass: "app-col--default"
                                }, [e("h2", [t._v("\n                  " + t._s(t.section3.calloutSection1.title) + "\n                ")])]), t._v(" "), e("Spacer", {
                                    attrs: {
                                        size: "64"
                                    }
                                }), t._v(" "), e("CarouselGrid", {
                                    attrs: {
                                        dev: {
                                            styleTag: "&.mobiletablet .card-container { margin-left: 1rem; max-width: 380px; }\n@media (min-width: 587px) { &.mobiletablet .card-container { margin-left: 2rem; }}\n@media (min-width: 769px) { &.mobiletablet .card-container { margin-left: 7rem; }}"
                                        }
                                    }
                                }, t._l([].concat(Object(c.a)(t.section3.calloutSection1.cards), Object(c.a)(t.section3.calloutSection2.cards)), (function(d, c) {
                                    return e("CardCallout", t._b({
                                        key: c
                                    }, "CardCallout", d, !1))
                                })), 1), t._v(" "), e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 32,
                                            md: 40
                                        }
                                    }
                                })], 1)], 1), t._v(" "), e("template", {
                                    slot: t.section2.sections[1]
                                }, [e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section4.backgroundColor
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 32,
                                            md: 40
                                        }
                                    }
                                }), t._v(" "), e("Headline", t._b({}, "Headline", t.section4.headline, !1)), t._v(" "), e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 0,
                                            md: 40
                                        }
                                    }
                                }), t._v(" "), t._l(t.section4.mediaCategories, (function(d, c) {
                                    return [e("MediaCategory", t._b({
                                        key: "".concat(c, "-1")
                                    }, "MediaCategory", d, !1)), t._v(" "), e("Spacer", {
                                        key: "".concat(c, "-2"),
                                        attrs: {
                                            size: 40
                                        }
                                    })]
                                })), t._v(" "), e("Spacer", {
                                    attrs: {
                                        size: 40
                                    }
                                })], 2), t._v(" "), e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section5.backgroundColor,
                                        "background-decoration": t.section5.backgroundDecoration
                                    }
                                }, [e("Pullquote", t._b({}, "Pullquote", t.section5.pullquote, !1))], 1), t._v(" "), e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section6.backgroundColor
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        size: 80
                                    }
                                }), t._v(" "), t._l(t.section6.mediaCategories, (function(d, c) {
                                    return [e("MediaCategory", t._b({
                                        key: "".concat(c, "-1")
                                    }, "MediaCategory", d, !1)), t._v(" "), e("Spacer", {
                                        key: "".concat(c, "-2"),
                                        attrs: {
                                            size: 40
                                        }
                                    })]
                                })), t._v(" "), e("Spacer", {
                                    attrs: {
                                        size: 40
                                    }
                                })], 2), t._v(" "), e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section7.backgroundColor,
                                        "background-decoration": t.section7.backgroundDecoration
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        size: 80
                                    }
                                }), t._v(" "), e("MediaTier", t._b({}, "MediaTier", t.section7.mediaTier, !1)), t._v(" "), e("Spacer", {
                                    attrs: {
                                        size: 80
                                    }
                                })], 1)], 1), t._v(" "), e("template", {
                                    slot: t.section2.sections[2]
                                }, [e("section", [e("Spacer", {
                                    attrs: {
                                        size: 80
                                    }
                                }), t._v(" "), e("Headline", t._b({}, "Headline", t.section8.headline, !1)), t._v(" "), e("Spacer", {
                                    attrs: {
                                        size: 64
                                    }
                                }), t._v(" "), e("Carousel", t._l(t.section8.carouselProps, (function(t, i) {
                                    return e("Card", {
                                        key: t + i,
                                        staticClass: "card-offset",
                                        attrs: {
                                            size: t.size,
                                            image: {
                                                source: t.image.source,
                                                altText: ""
                                            },
                                            cta: t.cta,
                                            "cta-link": t.ctaLink
                                        }
                                    })
                                })), 1), t._v(" "), e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 80,
                                            md: 100
                                        }
                                    }
                                })], 1)]), t._v(" "), e("template", {
                                    slot: t.section2.sections[3]
                                }, [e("ContainerSection", {
                                    attrs: {
                                        "background-color": t.section9.backgroundColor
                                    }
                                }, [e("CtaBanner", t._b({}, "CtaBanner", t.section9.ctaBanner, !1)), t._v(" "), e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 80,
                                            md: 120
                                        }
                                    }
                                })], 1)], 1)], 2), t._v(" "), e("ContainerSection", {
                                    staticClass: "expert-section",
                                    attrs: {
                                        "background-color": t.section10.backgroundColor
                                    }
                                }, [e("Spacer", {
                                    attrs: {
                                        sizes: {
                                            xs: 80,
                                            md: 120
                                        }
                                    }
                                }), t._v(" "), e("MediaCutoff", t._b({}, "MediaCutoff", t.section10.expertsData, !1))], 1)], 1), t._v(" "), e("Footer", t._b({}, "Footer", t.footer, !1))]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Spacer: d(59).default,
                MediaCutoff: d(624).default,
                ContainerSection: d(359).default,
                ContentColumn: d(680).default,
                CardCallout: d(700).default,
                CarouselGrid: d(1001).default,
                Headline: d(357).default,
                MediaCategory: d(842).default,
                Pullquote: d(685).default,
                MediaTier: d(1002).default,
                Card: d(699).default,
                Carousel: d(619).default,
                CtaBanner: d(835).default,
                AnchorScroller: d(713).default,
                Footer: d(208).default,
                NavHeader: d(360).default
            })
        },
        608: function(t, e, d) {
            "use strict";
            var c = d(4),
                n = d(10),
                r = d(62),
                o = d(65),
                l = d(76),
                h = d(363),
                f = d(25),
                v = d(11),
                m = d(362),
                x = d(209),
                w = d(612),
                _ = d(613),
                y = d(130),
                k = d(614),
                z = [],
                C = n(z.sort),
                S = n(z.push),
                N = v((function() {
                    z.sort(void 0)
                })),
                H = v((function() {
                    z.sort(null)
                })),
                T = x("sort"),
                P = !v((function() {
                    if (y) return y < 70;
                    if (!(w && w > 3)) {
                        if (_) return !0;
                        if (k) return k < 603;
                        var code, t, e, d, c = "";
                        for (code = 65; code < 76; code++) {
                            switch (t = String.fromCharCode(code), code) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    e = 3;
                                    break;
                                case 68:
                                case 71:
                                    e = 4;
                                    break;
                                default:
                                    e = 2
                            }
                            for (d = 0; d < 47; d++) z.push({
                                k: t + d,
                                v: e
                            })
                        }
                        for (z.sort((function(a, b) {
                                return b.v - a.v
                            })), d = 0; d < z.length; d++) t = z[d].k.charAt(0), c.charAt(c.length - 1) !== t && (c += t);
                        return "DGBEFHACIJK" !== c
                    }
                }));
            c({
                target: "Array",
                proto: !0,
                forced: N || !H || !T || !P
            }, {
                sort: function(t) {
                    void 0 !== t && r(t);
                    var e = o(this);
                    if (P) return void 0 === t ? C(e) : C(e, t);
                    var d, c, n = [],
                        v = l(e);
                    for (c = 0; c < v; c++) c in e && S(n, e[c]);
                    for (m(n, function(t) {
                            return function(e, d) {
                                return void 0 === d ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, d) || 0 : f(e) > f(d) ? 1 : -1
                            }
                        }(t)), d = l(n), c = 0; c < d;) e[c] = n[c++];
                    for (; c < v;) h(e, c++);
                    return e
                }
            })
        },
        610: function(t, e, d) {
            var content = d(629);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("b2c13e7c", content, !0, {
                sourceMap: !1
            })
        },
        612: function(t, e, d) {
            var c = d(128).match(/firefox\/(\d+)/i);
            t.exports = !!c && +c[1]
        },
        613: function(t, e, d) {
            var c = d(128);
            t.exports = /MSIE|Trident/.test(c)
        },
        614: function(t, e, d) {
            var c = d(128).match(/AppleWebKit\/(\d+)\./);
            t.exports = !!c && +c[1]
        },
        617: function(t, e, d) {
            var content = d(641);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("386323d7", content, !0, {
                sourceMap: !1
            })
        },
        624: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, "IMAGE_SIZES", (function() {
                return c
            }));
            d(20), d(44), d(49), d(61), d(210);
            var c = {
                    WIDE: "wide",
                    NORMAL: "normal"
                },
                n = {
                    data: function() {
                        return {}
                    },
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !0
                        },
                        ctaLinks: {
                            type: Array,
                            required: !1
                        },
                        image: {
                            type: Object,
                            required: !0
                        },
                        imageSize: {
                            type: String,
                            required: !1,
                            default: c.NORMAL,
                            validator: function(t) {
                                return Object.values(c).includes(t)
                            }
                        },
                        isRounded: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }
                    },
                    computed: {
                        getImageColumnClass: function() {
                            switch (this.imageSize) {
                                case c.NORMAL:
                                    return "app-col--default app-col-xs app-col-md-16";
                                case c.WIDE:
                                    return "app-col--default app-col-xs app-col-md-18"
                            }
                        }
                    }
                },
                r = (d(640), d(0)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "app-container app-row app-row-xs--center"
                    }, [e("div", {
                        staticClass: "expert-wrap"
                    }, [e("Headline", {
                        attrs: {
                            size: "large",
                            title: t.title,
                            subtitle: t.description,
                            "cta-links": t.ctaLinks
                        }
                    })], 1), t._v(" "), e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 40,
                                md: 80
                            }
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "image-wrap",
                        class: t.getImageColumnClass
                    }, [t.isRounded ? e("CutoffImage", t._b({
                        directives: [{
                            name: "editable",
                            rawName: "v-editable",
                            value: t.image.$editable,
                            expression: "image.$editable"
                        }]
                    }, "CutoffImage", t.image, !1)) : e("GenericImage", t._b({
                        directives: [{
                            name: "editable",
                            rawName: "v-editable",
                            value: t.image.$editable,
                            expression: "image.$editable"
                        }]
                    }, "GenericImage", t.image, !1))], 1)], 1)
                }), [], !1, null, "79151728", null);
            e.default = component.exports;
            installComponents(component, {
                Headline: d(357).default,
                Spacer: d(59).default,
                CutoffImage: d(635).default,
                GenericImage: d(127).default
            })
        },
        628: function(t, e, d) {
            "use strict";
            d(610)
        },
        629: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-ac78cc50]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-ac78cc50]:not([class]),[vce-ready] .heading-1[data-v-ac78cc50],#__nuxt h1[data-v-ac78cc50]:not([class]),#__nuxt .heading-1[data-v-ac78cc50]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-ac78cc50]:not([class]),[vce-ready] .heading-1[data-v-ac78cc50],#__nuxt h1[data-v-ac78cc50]:not([class]),#__nuxt .heading-1[data-v-ac78cc50]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-ac78cc50]:not([class]),[vce-ready] .heading-1[data-v-ac78cc50],#__nuxt h1[data-v-ac78cc50]:not([class]),#__nuxt .heading-1[data-v-ac78cc50]{font-size:64px}}[vce-ready] h2[data-v-ac78cc50]:not([class]),[vce-ready] .heading-2[data-v-ac78cc50],#__nuxt h2[data-v-ac78cc50]:not([class]),#__nuxt .heading-2[data-v-ac78cc50]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-ac78cc50]:not([class]),[vce-ready] .heading-2[data-v-ac78cc50],#__nuxt h2[data-v-ac78cc50]:not([class]),#__nuxt .heading-2[data-v-ac78cc50]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-ac78cc50]:not([class]),[vce-ready] .heading-2[data-v-ac78cc50],#__nuxt h2[data-v-ac78cc50]:not([class]),#__nuxt .heading-2[data-v-ac78cc50]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-ac78cc50]:not([class]),[vce-ready] .heading-2[data-v-ac78cc50],#__nuxt h2[data-v-ac78cc50]:not([class]),#__nuxt .heading-2[data-v-ac78cc50]{line-height:110%}}[vce-ready] h3[data-v-ac78cc50]:not([class]),[vce-ready] .heading-3[data-v-ac78cc50],#__nuxt h3[data-v-ac78cc50]:not([class]),#__nuxt .heading-3[data-v-ac78cc50]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-ac78cc50]:not([class]),[vce-ready] .heading-3[data-v-ac78cc50],#__nuxt h3[data-v-ac78cc50]:not([class]),#__nuxt .heading-3[data-v-ac78cc50]{font-size:2rem}}[vce-ready] h4[data-v-ac78cc50]:not([class]),[vce-ready] .heading-4[data-v-ac78cc50],#__nuxt h4[data-v-ac78cc50]:not([class]),#__nuxt .heading-4[data-v-ac78cc50]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-ac78cc50]:not([class]),[vce-ready] .heading-4[data-v-ac78cc50],#__nuxt h4[data-v-ac78cc50]:not([class]),#__nuxt .heading-4[data-v-ac78cc50]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-ac78cc50]:not([class]),[vce-ready] .heading-5[data-v-ac78cc50],#__nuxt h5[data-v-ac78cc50]:not([class]),#__nuxt .heading-5[data-v-ac78cc50]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-ac78cc50]:not([class]),[vce-ready] .heading-5[data-v-ac78cc50],#__nuxt h5[data-v-ac78cc50]:not([class]),#__nuxt .heading-5[data-v-ac78cc50]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-ac78cc50]:not([class]),[vce-ready] .body-1[data-v-ac78cc50],#__nuxt p[data-v-ac78cc50]:not([class]),#__nuxt .body-1[data-v-ac78cc50]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-ac78cc50],#__nuxt .body-2[data-v-ac78cc50]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-ac78cc50],#__nuxt .body-3[data-v-ac78cc50]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-ac78cc50],#__nuxt .body-4[data-v-ac78cc50]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-ac78cc50],#__nuxt .body-caption[data-v-ac78cc50]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-ac78cc50],#__nuxt .body-caption[data-v-ac78cc50]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-ac78cc50],[vce-ready] [class*=body-]+p[data-v-ac78cc50],[vce-ready] h1+p[data-v-ac78cc50],[vce-ready] h2+p[data-v-ac78cc50],[vce-ready] h3+p[data-v-ac78cc50],[vce-ready] h4+p[data-v-ac78cc50],[vce-ready] h5+p[data-v-ac78cc50],[vce-ready] p+p[data-v-ac78cc50],#__nuxt [class*=heading-]+p[data-v-ac78cc50],#__nuxt [class*=body-]+p[data-v-ac78cc50],#__nuxt h1+p[data-v-ac78cc50],#__nuxt h2+p[data-v-ac78cc50],#__nuxt h3+p[data-v-ac78cc50],#__nuxt h4+p[data-v-ac78cc50],#__nuxt h5+p[data-v-ac78cc50],#__nuxt p+p[data-v-ac78cc50]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-ac78cc50]:not([class]),[vce-ready] [class*=body-]+ul[data-v-ac78cc50]:not([class]),#__nuxt [class*=heading-]+ul[data-v-ac78cc50]:not([class]),#__nuxt [class*=body-]+ul[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-ac78cc50]:not([class]),[vce-ready] p+p[data-v-ac78cc50]:not([class]),[vce-ready] p+h1[data-v-ac78cc50]:not([class]),[vce-ready] p+h2[data-v-ac78cc50]:not([class]),[vce-ready] p+h3[data-v-ac78cc50]:not([class]),[vce-ready] p+h4[data-v-ac78cc50]:not([class]),[vce-ready] p+h5[data-v-ac78cc50]:not([class]),#__nuxt p+ul[data-v-ac78cc50]:not([class]),#__nuxt p+p[data-v-ac78cc50]:not([class]),#__nuxt p+h1[data-v-ac78cc50]:not([class]),#__nuxt p+h2[data-v-ac78cc50]:not([class]),#__nuxt p+h3[data-v-ac78cc50]:not([class]),#__nuxt p+h4[data-v-ac78cc50]:not([class]),#__nuxt p+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-ac78cc50]:not([class]),[vce-ready] h1+p[data-v-ac78cc50]:not([class]),[vce-ready] h1+h1[data-v-ac78cc50]:not([class]),[vce-ready] h1+h2[data-v-ac78cc50]:not([class]),[vce-ready] h1+h3[data-v-ac78cc50]:not([class]),[vce-ready] h1+h4[data-v-ac78cc50]:not([class]),[vce-ready] h1+h5[data-v-ac78cc50]:not([class]),#__nuxt h1+ul[data-v-ac78cc50]:not([class]),#__nuxt h1+p[data-v-ac78cc50]:not([class]),#__nuxt h1+h1[data-v-ac78cc50]:not([class]),#__nuxt h1+h2[data-v-ac78cc50]:not([class]),#__nuxt h1+h3[data-v-ac78cc50]:not([class]),#__nuxt h1+h4[data-v-ac78cc50]:not([class]),#__nuxt h1+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-ac78cc50]:not([class]),[vce-ready] h2+p[data-v-ac78cc50]:not([class]),[vce-ready] h2+h1[data-v-ac78cc50]:not([class]),[vce-ready] h2+h2[data-v-ac78cc50]:not([class]),[vce-ready] h2+h3[data-v-ac78cc50]:not([class]),[vce-ready] h2+h4[data-v-ac78cc50]:not([class]),[vce-ready] h2+h5[data-v-ac78cc50]:not([class]),#__nuxt h2+ul[data-v-ac78cc50]:not([class]),#__nuxt h2+p[data-v-ac78cc50]:not([class]),#__nuxt h2+h1[data-v-ac78cc50]:not([class]),#__nuxt h2+h2[data-v-ac78cc50]:not([class]),#__nuxt h2+h3[data-v-ac78cc50]:not([class]),#__nuxt h2+h4[data-v-ac78cc50]:not([class]),#__nuxt h2+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-ac78cc50]:not([class]),[vce-ready] h3+p[data-v-ac78cc50]:not([class]),[vce-ready] h3+h1[data-v-ac78cc50]:not([class]),[vce-ready] h3+h2[data-v-ac78cc50]:not([class]),[vce-ready] h3+h3[data-v-ac78cc50]:not([class]),[vce-ready] h3+h4[data-v-ac78cc50]:not([class]),[vce-ready] h3+h5[data-v-ac78cc50]:not([class]),#__nuxt h3+ul[data-v-ac78cc50]:not([class]),#__nuxt h3+p[data-v-ac78cc50]:not([class]),#__nuxt h3+h1[data-v-ac78cc50]:not([class]),#__nuxt h3+h2[data-v-ac78cc50]:not([class]),#__nuxt h3+h3[data-v-ac78cc50]:not([class]),#__nuxt h3+h4[data-v-ac78cc50]:not([class]),#__nuxt h3+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-ac78cc50]:not([class]),[vce-ready] h4+p[data-v-ac78cc50]:not([class]),[vce-ready] h4+h1[data-v-ac78cc50]:not([class]),[vce-ready] h4+h2[data-v-ac78cc50]:not([class]),[vce-ready] h4+h3[data-v-ac78cc50]:not([class]),[vce-ready] h4+h4[data-v-ac78cc50]:not([class]),[vce-ready] h4+h5[data-v-ac78cc50]:not([class]),#__nuxt h4+ul[data-v-ac78cc50]:not([class]),#__nuxt h4+p[data-v-ac78cc50]:not([class]),#__nuxt h4+h1[data-v-ac78cc50]:not([class]),#__nuxt h4+h2[data-v-ac78cc50]:not([class]),#__nuxt h4+h3[data-v-ac78cc50]:not([class]),#__nuxt h4+h4[data-v-ac78cc50]:not([class]),#__nuxt h4+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-ac78cc50]:not([class]),[vce-ready] h5+p[data-v-ac78cc50]:not([class]),[vce-ready] h5+h1[data-v-ac78cc50]:not([class]),[vce-ready] h5+h2[data-v-ac78cc50]:not([class]),[vce-ready] h5+h3[data-v-ac78cc50]:not([class]),[vce-ready] h5+h4[data-v-ac78cc50]:not([class]),[vce-ready] h5+h5[data-v-ac78cc50]:not([class]),#__nuxt h5+ul[data-v-ac78cc50]:not([class]),#__nuxt h5+p[data-v-ac78cc50]:not([class]),#__nuxt h5+h1[data-v-ac78cc50]:not([class]),#__nuxt h5+h2[data-v-ac78cc50]:not([class]),#__nuxt h5+h3[data-v-ac78cc50]:not([class]),#__nuxt h5+h4[data-v-ac78cc50]:not([class]),#__nuxt h5+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-ac78cc50]:not([class]),[vce-ready] p+p[data-v-ac78cc50]:not([class]),[vce-ready] p+h1[data-v-ac78cc50]:not([class]),[vce-ready] p+h2[data-v-ac78cc50]:not([class]),[vce-ready] p+h3[data-v-ac78cc50]:not([class]),[vce-ready] p+h4[data-v-ac78cc50]:not([class]),[vce-ready] p+h5[data-v-ac78cc50]:not([class]),#__nuxt p+ul[data-v-ac78cc50]:not([class]),#__nuxt p+p[data-v-ac78cc50]:not([class]),#__nuxt p+h1[data-v-ac78cc50]:not([class]),#__nuxt p+h2[data-v-ac78cc50]:not([class]),#__nuxt p+h3[data-v-ac78cc50]:not([class]),#__nuxt p+h4[data-v-ac78cc50]:not([class]),#__nuxt p+h5[data-v-ac78cc50]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-ac78cc50]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-ac78cc50]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-ac78cc50]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-ac78cc50]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-ac78cc50]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-ac78cc50]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-ac78cc50]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-ac78cc50]::after,#__nuxt [class*=body-] a[target=_blank][data-v-ac78cc50]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-ac78cc50]::after,#__nuxt p:not([class]) a[target=_blank][data-v-ac78cc50]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-ac78cc50],[vce-ready] [class*=heading-] a[href][data-v-ac78cc50]:focus,[vce-ready] [class*=body-] a[href][data-v-ac78cc50],[vce-ready] [class*=body-] a[href][data-v-ac78cc50]:focus,[vce-ready] h1:not([class]) a[href][data-v-ac78cc50],[vce-ready] h1:not([class]) a[href][data-v-ac78cc50]:focus,[vce-ready] h2:not([class]) a[href][data-v-ac78cc50],[vce-ready] h2:not([class]) a[href][data-v-ac78cc50]:focus,[vce-ready] h3:not([class]) a[href][data-v-ac78cc50],[vce-ready] h3:not([class]) a[href][data-v-ac78cc50]:focus,[vce-ready] h4:not([class]) a[href][data-v-ac78cc50],[vce-ready] h4:not([class]) a[href][data-v-ac78cc50]:focus,[vce-ready] h5:not([class]) a[href][data-v-ac78cc50],[vce-ready] h5:not([class]) a[href][data-v-ac78cc50]:focus,[vce-ready] p:not([class]) a[href][data-v-ac78cc50],[vce-ready] p:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt [class*=heading-] a[href][data-v-ac78cc50],#__nuxt [class*=heading-] a[href][data-v-ac78cc50]:focus,#__nuxt [class*=body-] a[href][data-v-ac78cc50],#__nuxt [class*=body-] a[href][data-v-ac78cc50]:focus,#__nuxt h1:not([class]) a[href][data-v-ac78cc50],#__nuxt h1:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt h2:not([class]) a[href][data-v-ac78cc50],#__nuxt h2:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt h3:not([class]) a[href][data-v-ac78cc50],#__nuxt h3:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt h4:not([class]) a[href][data-v-ac78cc50],#__nuxt h4:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt h5:not([class]) a[href][data-v-ac78cc50],#__nuxt h5:not([class]) a[href][data-v-ac78cc50]:focus,#__nuxt p:not([class]) a[href][data-v-ac78cc50],#__nuxt p:not([class]) a[href][data-v-ac78cc50]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-ac78cc50]:hover,[vce-ready] [class*=heading-] a[href][data-v-ac78cc50]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-ac78cc50]:hover,[vce-ready] [class*=body-] a[href][data-v-ac78cc50]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] h1:not([class]) a[href][data-v-ac78cc50]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] h2:not([class]) a[href][data-v-ac78cc50]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] h3:not([class]) a[href][data-v-ac78cc50]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] h4:not([class]) a[href][data-v-ac78cc50]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] h5:not([class]) a[href][data-v-ac78cc50]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-ac78cc50]:hover,[vce-ready] p:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-ac78cc50]:hover,#__nuxt [class*=heading-] a[href][data-v-ac78cc50]:focus:hover,#__nuxt [class*=body-] a[href][data-v-ac78cc50]:hover,#__nuxt [class*=body-] a[href][data-v-ac78cc50]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt h1:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt h2:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt h3:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt h4:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt h5:not([class]) a[href][data-v-ac78cc50]:focus:hover,#__nuxt p:not([class]) a[href][data-v-ac78cc50]:hover,#__nuxt p:not([class]) a[href][data-v-ac78cc50]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-ac78cc50],[vce-ready] .body--bold[data-v-ac78cc50],#__nuxt .heading--bold[data-v-ac78cc50],#__nuxt .body--bold[data-v-ac78cc50]{font-weight:700}[vce-ready] .heading--regular[data-v-ac78cc50],[vce-ready] .body--regular[data-v-ac78cc50],#__nuxt .heading--regular[data-v-ac78cc50],#__nuxt .body--regular[data-v-ac78cc50]{font-weight:400}[vce-ready] .heading--light[data-v-ac78cc50],[vce-ready] .body--light[data-v-ac78cc50],#__nuxt .heading--light[data-v-ac78cc50],#__nuxt .body--light[data-v-ac78cc50]{font-weight:100}[vce-ready] .heading--flush[data-v-ac78cc50],[vce-ready] .body--flush[data-v-ac78cc50],#__nuxt .heading--flush[data-v-ac78cc50],#__nuxt .body--flush[data-v-ac78cc50]{margin-bottom:0;margin-top:0}.cutoff-container[data-v-ac78cc50]{overflow:hidden;border-top-left-radius:1rem;border-top-right-radius:1rem}', ""]), c.locals = {}, t.exports = c
        },
        633: function(t, e, d) {
            var content = d(664);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("09e04edb", content, !0, {
                sourceMap: !1
            })
        },
        635: function(t, e, d) {
            "use strict";
            d.r(e);
            var c = {
                    data: function() {
                        return {}
                    },
                    props: {
                        source: {
                            type: String,
                            required: !0
                        },
                        mobileSource: {
                            type: String,
                            required: !1
                        },
                        altText: {
                            type: String,
                            required: !0
                        },
                        fadeThreshold: {
                            type: Array,
                            required: !1
                        }
                    }
                },
                n = (d(628), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "cutoff-container"
                    }, [e("GenericImage", t._b({}, "GenericImage", t.$props, !1))], 1)
                }), [], !1, null, "ac78cc50", null);
            e.default = component.exports;
            installComponents(component, {
                GenericImage: d(127).default
            })
        },
        640: function(t, e, d) {
            "use strict";
            d(617)
        },
        641: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-79151728]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-79151728]:not([class]),[vce-ready] .heading-1[data-v-79151728],#__nuxt h1[data-v-79151728]:not([class]),#__nuxt .heading-1[data-v-79151728]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-79151728]:not([class]),[vce-ready] .heading-1[data-v-79151728],#__nuxt h1[data-v-79151728]:not([class]),#__nuxt .heading-1[data-v-79151728]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-79151728]:not([class]),[vce-ready] .heading-1[data-v-79151728],#__nuxt h1[data-v-79151728]:not([class]),#__nuxt .heading-1[data-v-79151728]{font-size:64px}}[vce-ready] h2[data-v-79151728]:not([class]),[vce-ready] .heading-2[data-v-79151728],#__nuxt h2[data-v-79151728]:not([class]),#__nuxt .heading-2[data-v-79151728]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-79151728]:not([class]),[vce-ready] .heading-2[data-v-79151728],#__nuxt h2[data-v-79151728]:not([class]),#__nuxt .heading-2[data-v-79151728]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-79151728]:not([class]),[vce-ready] .heading-2[data-v-79151728],#__nuxt h2[data-v-79151728]:not([class]),#__nuxt .heading-2[data-v-79151728]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-79151728]:not([class]),[vce-ready] .heading-2[data-v-79151728],#__nuxt h2[data-v-79151728]:not([class]),#__nuxt .heading-2[data-v-79151728]{line-height:110%}}[vce-ready] h3[data-v-79151728]:not([class]),[vce-ready] .heading-3[data-v-79151728],#__nuxt h3[data-v-79151728]:not([class]),#__nuxt .heading-3[data-v-79151728]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-79151728]:not([class]),[vce-ready] .heading-3[data-v-79151728],#__nuxt h3[data-v-79151728]:not([class]),#__nuxt .heading-3[data-v-79151728]{font-size:2rem}}[vce-ready] h4[data-v-79151728]:not([class]),[vce-ready] .heading-4[data-v-79151728],#__nuxt h4[data-v-79151728]:not([class]),#__nuxt .heading-4[data-v-79151728]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-79151728]:not([class]),[vce-ready] .heading-4[data-v-79151728],#__nuxt h4[data-v-79151728]:not([class]),#__nuxt .heading-4[data-v-79151728]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-79151728]:not([class]),[vce-ready] .heading-5[data-v-79151728],#__nuxt h5[data-v-79151728]:not([class]),#__nuxt .heading-5[data-v-79151728]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-79151728]:not([class]),[vce-ready] .heading-5[data-v-79151728],#__nuxt h5[data-v-79151728]:not([class]),#__nuxt .heading-5[data-v-79151728]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-79151728]:not([class]),[vce-ready] .body-1[data-v-79151728],#__nuxt p[data-v-79151728]:not([class]),#__nuxt .body-1[data-v-79151728]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-79151728],#__nuxt .body-2[data-v-79151728]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-79151728],#__nuxt .body-3[data-v-79151728]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-79151728],#__nuxt .body-4[data-v-79151728]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-79151728],#__nuxt .body-caption[data-v-79151728]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-79151728],#__nuxt .body-caption[data-v-79151728]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-79151728],[vce-ready] [class*=body-]+p[data-v-79151728],[vce-ready] h1+p[data-v-79151728],[vce-ready] h2+p[data-v-79151728],[vce-ready] h3+p[data-v-79151728],[vce-ready] h4+p[data-v-79151728],[vce-ready] h5+p[data-v-79151728],[vce-ready] p+p[data-v-79151728],#__nuxt [class*=heading-]+p[data-v-79151728],#__nuxt [class*=body-]+p[data-v-79151728],#__nuxt h1+p[data-v-79151728],#__nuxt h2+p[data-v-79151728],#__nuxt h3+p[data-v-79151728],#__nuxt h4+p[data-v-79151728],#__nuxt h5+p[data-v-79151728],#__nuxt p+p[data-v-79151728]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-79151728]:not([class]),[vce-ready] [class*=body-]+ul[data-v-79151728]:not([class]),#__nuxt [class*=heading-]+ul[data-v-79151728]:not([class]),#__nuxt [class*=body-]+ul[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-79151728]:not([class]),[vce-ready] p+p[data-v-79151728]:not([class]),[vce-ready] p+h1[data-v-79151728]:not([class]),[vce-ready] p+h2[data-v-79151728]:not([class]),[vce-ready] p+h3[data-v-79151728]:not([class]),[vce-ready] p+h4[data-v-79151728]:not([class]),[vce-ready] p+h5[data-v-79151728]:not([class]),#__nuxt p+ul[data-v-79151728]:not([class]),#__nuxt p+p[data-v-79151728]:not([class]),#__nuxt p+h1[data-v-79151728]:not([class]),#__nuxt p+h2[data-v-79151728]:not([class]),#__nuxt p+h3[data-v-79151728]:not([class]),#__nuxt p+h4[data-v-79151728]:not([class]),#__nuxt p+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-79151728]:not([class]),[vce-ready] h1+p[data-v-79151728]:not([class]),[vce-ready] h1+h1[data-v-79151728]:not([class]),[vce-ready] h1+h2[data-v-79151728]:not([class]),[vce-ready] h1+h3[data-v-79151728]:not([class]),[vce-ready] h1+h4[data-v-79151728]:not([class]),[vce-ready] h1+h5[data-v-79151728]:not([class]),#__nuxt h1+ul[data-v-79151728]:not([class]),#__nuxt h1+p[data-v-79151728]:not([class]),#__nuxt h1+h1[data-v-79151728]:not([class]),#__nuxt h1+h2[data-v-79151728]:not([class]),#__nuxt h1+h3[data-v-79151728]:not([class]),#__nuxt h1+h4[data-v-79151728]:not([class]),#__nuxt h1+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-79151728]:not([class]),[vce-ready] h2+p[data-v-79151728]:not([class]),[vce-ready] h2+h1[data-v-79151728]:not([class]),[vce-ready] h2+h2[data-v-79151728]:not([class]),[vce-ready] h2+h3[data-v-79151728]:not([class]),[vce-ready] h2+h4[data-v-79151728]:not([class]),[vce-ready] h2+h5[data-v-79151728]:not([class]),#__nuxt h2+ul[data-v-79151728]:not([class]),#__nuxt h2+p[data-v-79151728]:not([class]),#__nuxt h2+h1[data-v-79151728]:not([class]),#__nuxt h2+h2[data-v-79151728]:not([class]),#__nuxt h2+h3[data-v-79151728]:not([class]),#__nuxt h2+h4[data-v-79151728]:not([class]),#__nuxt h2+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-79151728]:not([class]),[vce-ready] h3+p[data-v-79151728]:not([class]),[vce-ready] h3+h1[data-v-79151728]:not([class]),[vce-ready] h3+h2[data-v-79151728]:not([class]),[vce-ready] h3+h3[data-v-79151728]:not([class]),[vce-ready] h3+h4[data-v-79151728]:not([class]),[vce-ready] h3+h5[data-v-79151728]:not([class]),#__nuxt h3+ul[data-v-79151728]:not([class]),#__nuxt h3+p[data-v-79151728]:not([class]),#__nuxt h3+h1[data-v-79151728]:not([class]),#__nuxt h3+h2[data-v-79151728]:not([class]),#__nuxt h3+h3[data-v-79151728]:not([class]),#__nuxt h3+h4[data-v-79151728]:not([class]),#__nuxt h3+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-79151728]:not([class]),[vce-ready] h4+p[data-v-79151728]:not([class]),[vce-ready] h4+h1[data-v-79151728]:not([class]),[vce-ready] h4+h2[data-v-79151728]:not([class]),[vce-ready] h4+h3[data-v-79151728]:not([class]),[vce-ready] h4+h4[data-v-79151728]:not([class]),[vce-ready] h4+h5[data-v-79151728]:not([class]),#__nuxt h4+ul[data-v-79151728]:not([class]),#__nuxt h4+p[data-v-79151728]:not([class]),#__nuxt h4+h1[data-v-79151728]:not([class]),#__nuxt h4+h2[data-v-79151728]:not([class]),#__nuxt h4+h3[data-v-79151728]:not([class]),#__nuxt h4+h4[data-v-79151728]:not([class]),#__nuxt h4+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-79151728]:not([class]),[vce-ready] h5+p[data-v-79151728]:not([class]),[vce-ready] h5+h1[data-v-79151728]:not([class]),[vce-ready] h5+h2[data-v-79151728]:not([class]),[vce-ready] h5+h3[data-v-79151728]:not([class]),[vce-ready] h5+h4[data-v-79151728]:not([class]),[vce-ready] h5+h5[data-v-79151728]:not([class]),#__nuxt h5+ul[data-v-79151728]:not([class]),#__nuxt h5+p[data-v-79151728]:not([class]),#__nuxt h5+h1[data-v-79151728]:not([class]),#__nuxt h5+h2[data-v-79151728]:not([class]),#__nuxt h5+h3[data-v-79151728]:not([class]),#__nuxt h5+h4[data-v-79151728]:not([class]),#__nuxt h5+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-79151728]:not([class]),[vce-ready] p+p[data-v-79151728]:not([class]),[vce-ready] p+h1[data-v-79151728]:not([class]),[vce-ready] p+h2[data-v-79151728]:not([class]),[vce-ready] p+h3[data-v-79151728]:not([class]),[vce-ready] p+h4[data-v-79151728]:not([class]),[vce-ready] p+h5[data-v-79151728]:not([class]),#__nuxt p+ul[data-v-79151728]:not([class]),#__nuxt p+p[data-v-79151728]:not([class]),#__nuxt p+h1[data-v-79151728]:not([class]),#__nuxt p+h2[data-v-79151728]:not([class]),#__nuxt p+h3[data-v-79151728]:not([class]),#__nuxt p+h4[data-v-79151728]:not([class]),#__nuxt p+h5[data-v-79151728]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-79151728]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-79151728]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-79151728]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-79151728]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-79151728]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-79151728]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-79151728]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-79151728]::after,#__nuxt [class*=body-] a[target=_blank][data-v-79151728]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-79151728]::after,#__nuxt p:not([class]) a[target=_blank][data-v-79151728]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-79151728],[vce-ready] [class*=heading-] a[href][data-v-79151728]:focus,[vce-ready] [class*=body-] a[href][data-v-79151728],[vce-ready] [class*=body-] a[href][data-v-79151728]:focus,[vce-ready] h1:not([class]) a[href][data-v-79151728],[vce-ready] h1:not([class]) a[href][data-v-79151728]:focus,[vce-ready] h2:not([class]) a[href][data-v-79151728],[vce-ready] h2:not([class]) a[href][data-v-79151728]:focus,[vce-ready] h3:not([class]) a[href][data-v-79151728],[vce-ready] h3:not([class]) a[href][data-v-79151728]:focus,[vce-ready] h4:not([class]) a[href][data-v-79151728],[vce-ready] h4:not([class]) a[href][data-v-79151728]:focus,[vce-ready] h5:not([class]) a[href][data-v-79151728],[vce-ready] h5:not([class]) a[href][data-v-79151728]:focus,[vce-ready] p:not([class]) a[href][data-v-79151728],[vce-ready] p:not([class]) a[href][data-v-79151728]:focus,#__nuxt [class*=heading-] a[href][data-v-79151728],#__nuxt [class*=heading-] a[href][data-v-79151728]:focus,#__nuxt [class*=body-] a[href][data-v-79151728],#__nuxt [class*=body-] a[href][data-v-79151728]:focus,#__nuxt h1:not([class]) a[href][data-v-79151728],#__nuxt h1:not([class]) a[href][data-v-79151728]:focus,#__nuxt h2:not([class]) a[href][data-v-79151728],#__nuxt h2:not([class]) a[href][data-v-79151728]:focus,#__nuxt h3:not([class]) a[href][data-v-79151728],#__nuxt h3:not([class]) a[href][data-v-79151728]:focus,#__nuxt h4:not([class]) a[href][data-v-79151728],#__nuxt h4:not([class]) a[href][data-v-79151728]:focus,#__nuxt h5:not([class]) a[href][data-v-79151728],#__nuxt h5:not([class]) a[href][data-v-79151728]:focus,#__nuxt p:not([class]) a[href][data-v-79151728],#__nuxt p:not([class]) a[href][data-v-79151728]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-79151728]:hover,[vce-ready] [class*=heading-] a[href][data-v-79151728]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-79151728]:hover,[vce-ready] [class*=body-] a[href][data-v-79151728]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-79151728]:hover,[vce-ready] h1:not([class]) a[href][data-v-79151728]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-79151728]:hover,[vce-ready] h2:not([class]) a[href][data-v-79151728]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-79151728]:hover,[vce-ready] h3:not([class]) a[href][data-v-79151728]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-79151728]:hover,[vce-ready] h4:not([class]) a[href][data-v-79151728]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-79151728]:hover,[vce-ready] h5:not([class]) a[href][data-v-79151728]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-79151728]:hover,[vce-ready] p:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-79151728]:hover,#__nuxt [class*=heading-] a[href][data-v-79151728]:focus:hover,#__nuxt [class*=body-] a[href][data-v-79151728]:hover,#__nuxt [class*=body-] a[href][data-v-79151728]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-79151728]:hover,#__nuxt h1:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-79151728]:hover,#__nuxt h2:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-79151728]:hover,#__nuxt h3:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-79151728]:hover,#__nuxt h4:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-79151728]:hover,#__nuxt h5:not([class]) a[href][data-v-79151728]:focus:hover,#__nuxt p:not([class]) a[href][data-v-79151728]:hover,#__nuxt p:not([class]) a[href][data-v-79151728]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-79151728],[vce-ready] .body--bold[data-v-79151728],#__nuxt .heading--bold[data-v-79151728],#__nuxt .body--bold[data-v-79151728]{font-weight:700}[vce-ready] .heading--regular[data-v-79151728],[vce-ready] .body--regular[data-v-79151728],#__nuxt .heading--regular[data-v-79151728],#__nuxt .body--regular[data-v-79151728]{font-weight:400}[vce-ready] .heading--light[data-v-79151728],[vce-ready] .body--light[data-v-79151728],#__nuxt .heading--light[data-v-79151728],#__nuxt .body--light[data-v-79151728]{font-weight:100}[vce-ready] .heading--flush[data-v-79151728],[vce-ready] .body--flush[data-v-79151728],#__nuxt .heading--flush[data-v-79151728],#__nuxt .body--flush[data-v-79151728]{margin-bottom:0;margin-top:0}.image-wrap[data-v-79151728]{position:relative}.image-wrap picture[data-v-79151728]{z-index:100}.expert-wrap[data-v-79151728]{flex:1}', ""]), c.locals = {}, t.exports = c
        },
        645: function(t, e, d) {
            var content = d(671);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("f790a334", content, !0, {
                sourceMap: !1
            })
        },
        646: function(t, e, d) {
            var content = d(673);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("6cc0c774", content, !0, {
                sourceMap: !1
            })
        },
        649: function(t, e, d) {
            var content = d(679);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("5b7cd050", content, !0, {
                sourceMap: !1
            })
        },
        651: function(t, e, d) {
            "use strict";
            d(37), d(20), d(23), d(7), d(52), d(30), d(53);
            var c = d(3);

            function n(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(object);
                    t && (d = d.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, d)
                }
                return e
            }
            var r = {
                    "@context": "https://schema.org/",
                    "@type": "WebApplication",
                    browserRequirements: "Current release of Chrome, Firefox, or Safari. Microsoft Edge 13 and 14 requires Windows 10. Internet Explorer 11 requires Windows 7 or 8. Users of Internet Explorer 9 and 10 should upgrade to a newer browser, and IE9 users on Windows XP should consider using Firefox.",
                    applicationCategory: "Property Management Software",
                    availableOnDevice: "Android, iOS, Windows",
                    countriesSupported: "United States",
                    featureList: "https://www.primeForce.com/features",
                    operatingSystem: "All",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        reviewCount: "454",
                        ratingValue: "4.3",
                        description: "primeForce Property Manager is designed for property managers who want to automate, modernize, and grow their business. Whether you manage multifamily, single-family, student housing, HOA, condo, or commercial properties - or maybe you manage a mixed portfolio - our all-in-one cloud-based solution has features built specifically for you so you can streamline your workday and focus on your bottom line. Transparent Pricing. No Hidden Fees. Free Upgrades. Period. With primeForce's cloud-based property management software you get everything you need to run a more successful business."
                    },
                    name: "primeForce Property Manager",
                    offers: [{
                        "@type": "Offer",
                        name: "primeForce Property Manager for Community Associations: $0.80 per unit/month.",
                        price: "0.80",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager for Residential: $1.40 per unit/month.",
                        price: "1.40",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager for Student Housing: $1.40 per unit/month.",
                        price: "1.40",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager for Commercial: $1.50 per unit/month.",
                        price: "1.50",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager Plus is for larger, growing organizations typically managing 1,000+ units across regions: primeForce Property Manager Plus for residential is $3.00 per unit/month.",
                        price: "3.00",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager Plus is for larger, growing organizations typically managing 1,000+ units across regions: primeForce Property Manager Plus for commercial is $1.50 per unit/month.",
                        price: "1.50",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager Plus is for larger, growing organizations typically managing 1,000+ units across regions: primeForce Property Manager Plus for community associations is $0.85 per unit/month.",
                        price: "0.85",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }, {
                        "@type": "Offer",
                        name: "primeForce Property Manager Plus is for larger, growing organizations typically managing 1,000+ units across regions: primeForce Property Manager Plus for student housing is $3.00 per unit/month.",
                        price: "3.00",
                        priceCurrency: "USD",
                        url: "https://www.primeForce.com/pricing"
                    }]
                },
                o = {
                    "@context": "https://schema.org",
                    "@graph": [{
                        "@type": "Organization",
                        name: "primeForce Property Management Software",
                        url: "https://www.primeForce.com/",
                        description: "primeForce property management software is trusted by thousands to get organized, efficient, and profitable. Automate and grow your business. Get a demo today!",
                        sameAs: ["https://www.facebook.com/primeForce/", "https://www.instagram.com/primeForce/", "https://twitter.com/primeForce"],
                        logo: "https://www.primeForce.com/v3/img/shared/logo-primeForce.svg"
                    }, function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? n(Object(source), !0).forEach((function(e) {
                                Object(c.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, r)]
                };
            e.a = {
                getVersion: function(t) {
                    switch (t) {
                        case "1":
                            return r;
                        case "2":
                            return o
                    }
                }
            }
        },
        663: function(t, e, d) {
            "use strict";
            d(633)
        },
        664: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-4de4c381]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-4de4c381]:not([class]),[vce-ready] .heading-1[data-v-4de4c381],#__nuxt h1[data-v-4de4c381]:not([class]),#__nuxt .heading-1[data-v-4de4c381]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-4de4c381]:not([class]),[vce-ready] .heading-1[data-v-4de4c381],#__nuxt h1[data-v-4de4c381]:not([class]),#__nuxt .heading-1[data-v-4de4c381]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-4de4c381]:not([class]),[vce-ready] .heading-1[data-v-4de4c381],#__nuxt h1[data-v-4de4c381]:not([class]),#__nuxt .heading-1[data-v-4de4c381]{font-size:64px}}[vce-ready] h2[data-v-4de4c381]:not([class]),[vce-ready] .heading-2[data-v-4de4c381],#__nuxt h2[data-v-4de4c381]:not([class]),#__nuxt .heading-2[data-v-4de4c381]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-4de4c381]:not([class]),[vce-ready] .heading-2[data-v-4de4c381],#__nuxt h2[data-v-4de4c381]:not([class]),#__nuxt .heading-2[data-v-4de4c381]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-4de4c381]:not([class]),[vce-ready] .heading-2[data-v-4de4c381],#__nuxt h2[data-v-4de4c381]:not([class]),#__nuxt .heading-2[data-v-4de4c381]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-4de4c381]:not([class]),[vce-ready] .heading-2[data-v-4de4c381],#__nuxt h2[data-v-4de4c381]:not([class]),#__nuxt .heading-2[data-v-4de4c381]{line-height:110%}}[vce-ready] h3[data-v-4de4c381]:not([class]),[vce-ready] .heading-3[data-v-4de4c381],#__nuxt h3[data-v-4de4c381]:not([class]),#__nuxt .heading-3[data-v-4de4c381]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-4de4c381]:not([class]),[vce-ready] .heading-3[data-v-4de4c381],#__nuxt h3[data-v-4de4c381]:not([class]),#__nuxt .heading-3[data-v-4de4c381]{font-size:2rem}}[vce-ready] h4[data-v-4de4c381]:not([class]),[vce-ready] .heading-4[data-v-4de4c381],#__nuxt h4[data-v-4de4c381]:not([class]),#__nuxt .heading-4[data-v-4de4c381]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-4de4c381]:not([class]),[vce-ready] .heading-4[data-v-4de4c381],#__nuxt h4[data-v-4de4c381]:not([class]),#__nuxt .heading-4[data-v-4de4c381]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-4de4c381]:not([class]),[vce-ready] .heading-5[data-v-4de4c381],#__nuxt h5[data-v-4de4c381]:not([class]),#__nuxt .heading-5[data-v-4de4c381]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-4de4c381]:not([class]),[vce-ready] .heading-5[data-v-4de4c381],#__nuxt h5[data-v-4de4c381]:not([class]),#__nuxt .heading-5[data-v-4de4c381]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-4de4c381]:not([class]),[vce-ready] .body-1[data-v-4de4c381],#__nuxt p[data-v-4de4c381]:not([class]),#__nuxt .body-1[data-v-4de4c381]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-4de4c381],#__nuxt .body-2[data-v-4de4c381]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-4de4c381],#__nuxt .body-3[data-v-4de4c381]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-4de4c381],#__nuxt .body-4[data-v-4de4c381]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-4de4c381],#__nuxt .body-caption[data-v-4de4c381]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-4de4c381],#__nuxt .body-caption[data-v-4de4c381]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-4de4c381],[vce-ready] [class*=body-]+p[data-v-4de4c381],[vce-ready] h1+p[data-v-4de4c381],[vce-ready] h2+p[data-v-4de4c381],[vce-ready] h3+p[data-v-4de4c381],[vce-ready] h4+p[data-v-4de4c381],[vce-ready] h5+p[data-v-4de4c381],[vce-ready] p+p[data-v-4de4c381],#__nuxt [class*=heading-]+p[data-v-4de4c381],#__nuxt [class*=body-]+p[data-v-4de4c381],#__nuxt h1+p[data-v-4de4c381],#__nuxt h2+p[data-v-4de4c381],#__nuxt h3+p[data-v-4de4c381],#__nuxt h4+p[data-v-4de4c381],#__nuxt h5+p[data-v-4de4c381],#__nuxt p+p[data-v-4de4c381]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-4de4c381]:not([class]),[vce-ready] [class*=body-]+ul[data-v-4de4c381]:not([class]),#__nuxt [class*=heading-]+ul[data-v-4de4c381]:not([class]),#__nuxt [class*=body-]+ul[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-4de4c381]:not([class]),[vce-ready] p+p[data-v-4de4c381]:not([class]),[vce-ready] p+h1[data-v-4de4c381]:not([class]),[vce-ready] p+h2[data-v-4de4c381]:not([class]),[vce-ready] p+h3[data-v-4de4c381]:not([class]),[vce-ready] p+h4[data-v-4de4c381]:not([class]),[vce-ready] p+h5[data-v-4de4c381]:not([class]),#__nuxt p+ul[data-v-4de4c381]:not([class]),#__nuxt p+p[data-v-4de4c381]:not([class]),#__nuxt p+h1[data-v-4de4c381]:not([class]),#__nuxt p+h2[data-v-4de4c381]:not([class]),#__nuxt p+h3[data-v-4de4c381]:not([class]),#__nuxt p+h4[data-v-4de4c381]:not([class]),#__nuxt p+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-4de4c381]:not([class]),[vce-ready] h1+p[data-v-4de4c381]:not([class]),[vce-ready] h1+h1[data-v-4de4c381]:not([class]),[vce-ready] h1+h2[data-v-4de4c381]:not([class]),[vce-ready] h1+h3[data-v-4de4c381]:not([class]),[vce-ready] h1+h4[data-v-4de4c381]:not([class]),[vce-ready] h1+h5[data-v-4de4c381]:not([class]),#__nuxt h1+ul[data-v-4de4c381]:not([class]),#__nuxt h1+p[data-v-4de4c381]:not([class]),#__nuxt h1+h1[data-v-4de4c381]:not([class]),#__nuxt h1+h2[data-v-4de4c381]:not([class]),#__nuxt h1+h3[data-v-4de4c381]:not([class]),#__nuxt h1+h4[data-v-4de4c381]:not([class]),#__nuxt h1+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-4de4c381]:not([class]),[vce-ready] h2+p[data-v-4de4c381]:not([class]),[vce-ready] h2+h1[data-v-4de4c381]:not([class]),[vce-ready] h2+h2[data-v-4de4c381]:not([class]),[vce-ready] h2+h3[data-v-4de4c381]:not([class]),[vce-ready] h2+h4[data-v-4de4c381]:not([class]),[vce-ready] h2+h5[data-v-4de4c381]:not([class]),#__nuxt h2+ul[data-v-4de4c381]:not([class]),#__nuxt h2+p[data-v-4de4c381]:not([class]),#__nuxt h2+h1[data-v-4de4c381]:not([class]),#__nuxt h2+h2[data-v-4de4c381]:not([class]),#__nuxt h2+h3[data-v-4de4c381]:not([class]),#__nuxt h2+h4[data-v-4de4c381]:not([class]),#__nuxt h2+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-4de4c381]:not([class]),[vce-ready] h3+p[data-v-4de4c381]:not([class]),[vce-ready] h3+h1[data-v-4de4c381]:not([class]),[vce-ready] h3+h2[data-v-4de4c381]:not([class]),[vce-ready] h3+h3[data-v-4de4c381]:not([class]),[vce-ready] h3+h4[data-v-4de4c381]:not([class]),[vce-ready] h3+h5[data-v-4de4c381]:not([class]),#__nuxt h3+ul[data-v-4de4c381]:not([class]),#__nuxt h3+p[data-v-4de4c381]:not([class]),#__nuxt h3+h1[data-v-4de4c381]:not([class]),#__nuxt h3+h2[data-v-4de4c381]:not([class]),#__nuxt h3+h3[data-v-4de4c381]:not([class]),#__nuxt h3+h4[data-v-4de4c381]:not([class]),#__nuxt h3+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-4de4c381]:not([class]),[vce-ready] h4+p[data-v-4de4c381]:not([class]),[vce-ready] h4+h1[data-v-4de4c381]:not([class]),[vce-ready] h4+h2[data-v-4de4c381]:not([class]),[vce-ready] h4+h3[data-v-4de4c381]:not([class]),[vce-ready] h4+h4[data-v-4de4c381]:not([class]),[vce-ready] h4+h5[data-v-4de4c381]:not([class]),#__nuxt h4+ul[data-v-4de4c381]:not([class]),#__nuxt h4+p[data-v-4de4c381]:not([class]),#__nuxt h4+h1[data-v-4de4c381]:not([class]),#__nuxt h4+h2[data-v-4de4c381]:not([class]),#__nuxt h4+h3[data-v-4de4c381]:not([class]),#__nuxt h4+h4[data-v-4de4c381]:not([class]),#__nuxt h4+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-4de4c381]:not([class]),[vce-ready] h5+p[data-v-4de4c381]:not([class]),[vce-ready] h5+h1[data-v-4de4c381]:not([class]),[vce-ready] h5+h2[data-v-4de4c381]:not([class]),[vce-ready] h5+h3[data-v-4de4c381]:not([class]),[vce-ready] h5+h4[data-v-4de4c381]:not([class]),[vce-ready] h5+h5[data-v-4de4c381]:not([class]),#__nuxt h5+ul[data-v-4de4c381]:not([class]),#__nuxt h5+p[data-v-4de4c381]:not([class]),#__nuxt h5+h1[data-v-4de4c381]:not([class]),#__nuxt h5+h2[data-v-4de4c381]:not([class]),#__nuxt h5+h3[data-v-4de4c381]:not([class]),#__nuxt h5+h4[data-v-4de4c381]:not([class]),#__nuxt h5+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-4de4c381]:not([class]),[vce-ready] p+p[data-v-4de4c381]:not([class]),[vce-ready] p+h1[data-v-4de4c381]:not([class]),[vce-ready] p+h2[data-v-4de4c381]:not([class]),[vce-ready] p+h3[data-v-4de4c381]:not([class]),[vce-ready] p+h4[data-v-4de4c381]:not([class]),[vce-ready] p+h5[data-v-4de4c381]:not([class]),#__nuxt p+ul[data-v-4de4c381]:not([class]),#__nuxt p+p[data-v-4de4c381]:not([class]),#__nuxt p+h1[data-v-4de4c381]:not([class]),#__nuxt p+h2[data-v-4de4c381]:not([class]),#__nuxt p+h3[data-v-4de4c381]:not([class]),#__nuxt p+h4[data-v-4de4c381]:not([class]),#__nuxt p+h5[data-v-4de4c381]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-4de4c381]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-4de4c381]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-4de4c381]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-4de4c381]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-4de4c381]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-4de4c381]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-4de4c381]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-4de4c381]::after,#__nuxt [class*=body-] a[target=_blank][data-v-4de4c381]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-4de4c381]::after,#__nuxt p:not([class]) a[target=_blank][data-v-4de4c381]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-4de4c381],[vce-ready] [class*=heading-] a[href][data-v-4de4c381]:focus,[vce-ready] [class*=body-] a[href][data-v-4de4c381],[vce-ready] [class*=body-] a[href][data-v-4de4c381]:focus,[vce-ready] h1:not([class]) a[href][data-v-4de4c381],[vce-ready] h1:not([class]) a[href][data-v-4de4c381]:focus,[vce-ready] h2:not([class]) a[href][data-v-4de4c381],[vce-ready] h2:not([class]) a[href][data-v-4de4c381]:focus,[vce-ready] h3:not([class]) a[href][data-v-4de4c381],[vce-ready] h3:not([class]) a[href][data-v-4de4c381]:focus,[vce-ready] h4:not([class]) a[href][data-v-4de4c381],[vce-ready] h4:not([class]) a[href][data-v-4de4c381]:focus,[vce-ready] h5:not([class]) a[href][data-v-4de4c381],[vce-ready] h5:not([class]) a[href][data-v-4de4c381]:focus,[vce-ready] p:not([class]) a[href][data-v-4de4c381],[vce-ready] p:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt [class*=heading-] a[href][data-v-4de4c381],#__nuxt [class*=heading-] a[href][data-v-4de4c381]:focus,#__nuxt [class*=body-] a[href][data-v-4de4c381],#__nuxt [class*=body-] a[href][data-v-4de4c381]:focus,#__nuxt h1:not([class]) a[href][data-v-4de4c381],#__nuxt h1:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt h2:not([class]) a[href][data-v-4de4c381],#__nuxt h2:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt h3:not([class]) a[href][data-v-4de4c381],#__nuxt h3:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt h4:not([class]) a[href][data-v-4de4c381],#__nuxt h4:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt h5:not([class]) a[href][data-v-4de4c381],#__nuxt h5:not([class]) a[href][data-v-4de4c381]:focus,#__nuxt p:not([class]) a[href][data-v-4de4c381],#__nuxt p:not([class]) a[href][data-v-4de4c381]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-4de4c381]:hover,[vce-ready] [class*=heading-] a[href][data-v-4de4c381]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-4de4c381]:hover,[vce-ready] [class*=body-] a[href][data-v-4de4c381]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] h1:not([class]) a[href][data-v-4de4c381]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] h2:not([class]) a[href][data-v-4de4c381]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] h3:not([class]) a[href][data-v-4de4c381]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] h4:not([class]) a[href][data-v-4de4c381]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] h5:not([class]) a[href][data-v-4de4c381]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-4de4c381]:hover,[vce-ready] p:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-4de4c381]:hover,#__nuxt [class*=heading-] a[href][data-v-4de4c381]:focus:hover,#__nuxt [class*=body-] a[href][data-v-4de4c381]:hover,#__nuxt [class*=body-] a[href][data-v-4de4c381]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt h1:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt h2:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt h3:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt h4:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt h5:not([class]) a[href][data-v-4de4c381]:focus:hover,#__nuxt p:not([class]) a[href][data-v-4de4c381]:hover,#__nuxt p:not([class]) a[href][data-v-4de4c381]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-4de4c381],[vce-ready] .body--bold[data-v-4de4c381],#__nuxt .heading--bold[data-v-4de4c381],#__nuxt .body--bold[data-v-4de4c381]{font-weight:700}[vce-ready] .heading--regular[data-v-4de4c381],[vce-ready] .body--regular[data-v-4de4c381],#__nuxt .heading--regular[data-v-4de4c381],#__nuxt .body--regular[data-v-4de4c381]{font-weight:400}[vce-ready] .heading--light[data-v-4de4c381],[vce-ready] .body--light[data-v-4de4c381],#__nuxt .heading--light[data-v-4de4c381],#__nuxt .body--light[data-v-4de4c381]{font-weight:100}[vce-ready] .heading--flush[data-v-4de4c381],[vce-ready] .body--flush[data-v-4de4c381],#__nuxt .heading--flush[data-v-4de4c381],#__nuxt .body--flush[data-v-4de4c381]{margin-bottom:0;margin-top:0}.card[data-v-4de4c381]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;background:#0f6b64;padding:2rem;color:#fff;height:100%}.rating[data-v-4de4c381]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0;display:flex;color:#f5c670}@media(min-width: 768px){.rating[data-v-4de4c381]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}.star-row[data-v-4de4c381]{display:flex;margin-left:.5rem}.star-container[data-v-4de4c381]{color:#fff;margin-left:.25rem}.star-container .icon[data-v-4de4c381]{height:1.125rem;width:1.125rem}.star-container[data-v-4de4c381]:first-of-type{margin-left:0}.star-container.active[data-v-4de4c381]{color:#f5c670}', ""]), c.locals = {}, t.exports = c
        },
        667: function(t, e, d) {
            var content = d(708);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("38cc8f17", content, !0, {
                sourceMap: !1
            })
        },
        669: function(t, e, d) {
            "use strict";
            d.r(e);
            d(90), d(49), d(361);
            var c = {
                    data: function() {
                        return {}
                    },
                    props: {
                        rating: {
                            type: Number,
                            required: !0,
                            validator: function(t) {
                                return [1, 2, 3, 4, 5].includes(t)
                            }
                        },
                        quote: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        format: function(t) {
                            return "".concat(t.toFixed(1))
                        }
                    }
                },
                n = (d(663), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("ContainerRounded", {
                        staticClass: "app-col-xs app-col-md-8 app-col-lg-5"
                    }, [e("div", {
                        staticClass: "card"
                    }, [e("div", {
                        staticClass: "rating"
                    }, [e("div", {
                        staticClass: "rating-number"
                    }, [t._v(t._s(t.format(t.rating)))]), t._v(" "), e("div", {
                        staticClass: "star-row"
                    }, t._l(5, (function(d) {
                        return e("div", {
                            key: d,
                            staticClass: "star-container",
                            class: {
                                active: d <= t.rating
                            }
                        }, [e("Icon", {
                            attrs: {
                                icon: "star",
                                size: "small"
                            }
                        })], 1)
                    })), 0)]), t._v(" "), e("Spacer", {
                        attrs: {
                            size: 16
                        }
                    }), t._v(" "), e("p", {
                        domProps: {
                            innerHTML: t._s(t.quote)
                        }
                    })], 1)])
                }), [], !1, null, "4de4c381", null);
            e.default = component.exports;
            installComponents(component, {
                Icon: d(48).default,
                Spacer: d(59).default,
                ContainerRounded: d(206).default
            })
        },
        670: function(t, e, d) {
            "use strict";
            d(645)
        },
        671: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-706fd138]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-706fd138]:not([class]),[vce-ready] .heading-1[data-v-706fd138],#__nuxt h1[data-v-706fd138]:not([class]),#__nuxt .heading-1[data-v-706fd138]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-706fd138]:not([class]),[vce-ready] .heading-1[data-v-706fd138],#__nuxt h1[data-v-706fd138]:not([class]),#__nuxt .heading-1[data-v-706fd138]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-706fd138]:not([class]),[vce-ready] .heading-1[data-v-706fd138],#__nuxt h1[data-v-706fd138]:not([class]),#__nuxt .heading-1[data-v-706fd138]{font-size:64px}}[vce-ready] h2[data-v-706fd138]:not([class]),[vce-ready] .heading-2[data-v-706fd138],#__nuxt h2[data-v-706fd138]:not([class]),#__nuxt .heading-2[data-v-706fd138]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-706fd138]:not([class]),[vce-ready] .heading-2[data-v-706fd138],#__nuxt h2[data-v-706fd138]:not([class]),#__nuxt .heading-2[data-v-706fd138]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-706fd138]:not([class]),[vce-ready] .heading-2[data-v-706fd138],#__nuxt h2[data-v-706fd138]:not([class]),#__nuxt .heading-2[data-v-706fd138]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-706fd138]:not([class]),[vce-ready] .heading-2[data-v-706fd138],#__nuxt h2[data-v-706fd138]:not([class]),#__nuxt .heading-2[data-v-706fd138]{line-height:110%}}[vce-ready] h3[data-v-706fd138]:not([class]),[vce-ready] .heading-3[data-v-706fd138],#__nuxt h3[data-v-706fd138]:not([class]),#__nuxt .heading-3[data-v-706fd138]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-706fd138]:not([class]),[vce-ready] .heading-3[data-v-706fd138],#__nuxt h3[data-v-706fd138]:not([class]),#__nuxt .heading-3[data-v-706fd138]{font-size:2rem}}[vce-ready] h4[data-v-706fd138]:not([class]),[vce-ready] .heading-4[data-v-706fd138],#__nuxt h4[data-v-706fd138]:not([class]),#__nuxt .heading-4[data-v-706fd138]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-706fd138]:not([class]),[vce-ready] .heading-4[data-v-706fd138],#__nuxt h4[data-v-706fd138]:not([class]),#__nuxt .heading-4[data-v-706fd138]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-706fd138]:not([class]),[vce-ready] .heading-5[data-v-706fd138],#__nuxt h5[data-v-706fd138]:not([class]),#__nuxt .heading-5[data-v-706fd138]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-706fd138]:not([class]),[vce-ready] .heading-5[data-v-706fd138],#__nuxt h5[data-v-706fd138]:not([class]),#__nuxt .heading-5[data-v-706fd138]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-706fd138]:not([class]),[vce-ready] .body-1[data-v-706fd138],#__nuxt p[data-v-706fd138]:not([class]),#__nuxt .body-1[data-v-706fd138]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-706fd138],#__nuxt .body-2[data-v-706fd138]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-706fd138],#__nuxt .body-3[data-v-706fd138]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-706fd138],#__nuxt .body-4[data-v-706fd138]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-706fd138],#__nuxt .body-caption[data-v-706fd138]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-706fd138],#__nuxt .body-caption[data-v-706fd138]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-706fd138],[vce-ready] [class*=body-]+p[data-v-706fd138],[vce-ready] h1+p[data-v-706fd138],[vce-ready] h2+p[data-v-706fd138],[vce-ready] h3+p[data-v-706fd138],[vce-ready] h4+p[data-v-706fd138],[vce-ready] h5+p[data-v-706fd138],[vce-ready] p+p[data-v-706fd138],#__nuxt [class*=heading-]+p[data-v-706fd138],#__nuxt [class*=body-]+p[data-v-706fd138],#__nuxt h1+p[data-v-706fd138],#__nuxt h2+p[data-v-706fd138],#__nuxt h3+p[data-v-706fd138],#__nuxt h4+p[data-v-706fd138],#__nuxt h5+p[data-v-706fd138],#__nuxt p+p[data-v-706fd138]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-706fd138]:not([class]),[vce-ready] [class*=body-]+ul[data-v-706fd138]:not([class]),#__nuxt [class*=heading-]+ul[data-v-706fd138]:not([class]),#__nuxt [class*=body-]+ul[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-706fd138]:not([class]),[vce-ready] p+p[data-v-706fd138]:not([class]),[vce-ready] p+h1[data-v-706fd138]:not([class]),[vce-ready] p+h2[data-v-706fd138]:not([class]),[vce-ready] p+h3[data-v-706fd138]:not([class]),[vce-ready] p+h4[data-v-706fd138]:not([class]),[vce-ready] p+h5[data-v-706fd138]:not([class]),#__nuxt p+ul[data-v-706fd138]:not([class]),#__nuxt p+p[data-v-706fd138]:not([class]),#__nuxt p+h1[data-v-706fd138]:not([class]),#__nuxt p+h2[data-v-706fd138]:not([class]),#__nuxt p+h3[data-v-706fd138]:not([class]),#__nuxt p+h4[data-v-706fd138]:not([class]),#__nuxt p+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-706fd138]:not([class]),[vce-ready] h1+p[data-v-706fd138]:not([class]),[vce-ready] h1+h1[data-v-706fd138]:not([class]),[vce-ready] h1+h2[data-v-706fd138]:not([class]),[vce-ready] h1+h3[data-v-706fd138]:not([class]),[vce-ready] h1+h4[data-v-706fd138]:not([class]),[vce-ready] h1+h5[data-v-706fd138]:not([class]),#__nuxt h1+ul[data-v-706fd138]:not([class]),#__nuxt h1+p[data-v-706fd138]:not([class]),#__nuxt h1+h1[data-v-706fd138]:not([class]),#__nuxt h1+h2[data-v-706fd138]:not([class]),#__nuxt h1+h3[data-v-706fd138]:not([class]),#__nuxt h1+h4[data-v-706fd138]:not([class]),#__nuxt h1+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-706fd138]:not([class]),[vce-ready] h2+p[data-v-706fd138]:not([class]),[vce-ready] h2+h1[data-v-706fd138]:not([class]),[vce-ready] h2+h2[data-v-706fd138]:not([class]),[vce-ready] h2+h3[data-v-706fd138]:not([class]),[vce-ready] h2+h4[data-v-706fd138]:not([class]),[vce-ready] h2+h5[data-v-706fd138]:not([class]),#__nuxt h2+ul[data-v-706fd138]:not([class]),#__nuxt h2+p[data-v-706fd138]:not([class]),#__nuxt h2+h1[data-v-706fd138]:not([class]),#__nuxt h2+h2[data-v-706fd138]:not([class]),#__nuxt h2+h3[data-v-706fd138]:not([class]),#__nuxt h2+h4[data-v-706fd138]:not([class]),#__nuxt h2+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-706fd138]:not([class]),[vce-ready] h3+p[data-v-706fd138]:not([class]),[vce-ready] h3+h1[data-v-706fd138]:not([class]),[vce-ready] h3+h2[data-v-706fd138]:not([class]),[vce-ready] h3+h3[data-v-706fd138]:not([class]),[vce-ready] h3+h4[data-v-706fd138]:not([class]),[vce-ready] h3+h5[data-v-706fd138]:not([class]),#__nuxt h3+ul[data-v-706fd138]:not([class]),#__nuxt h3+p[data-v-706fd138]:not([class]),#__nuxt h3+h1[data-v-706fd138]:not([class]),#__nuxt h3+h2[data-v-706fd138]:not([class]),#__nuxt h3+h3[data-v-706fd138]:not([class]),#__nuxt h3+h4[data-v-706fd138]:not([class]),#__nuxt h3+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-706fd138]:not([class]),[vce-ready] h4+p[data-v-706fd138]:not([class]),[vce-ready] h4+h1[data-v-706fd138]:not([class]),[vce-ready] h4+h2[data-v-706fd138]:not([class]),[vce-ready] h4+h3[data-v-706fd138]:not([class]),[vce-ready] h4+h4[data-v-706fd138]:not([class]),[vce-ready] h4+h5[data-v-706fd138]:not([class]),#__nuxt h4+ul[data-v-706fd138]:not([class]),#__nuxt h4+p[data-v-706fd138]:not([class]),#__nuxt h4+h1[data-v-706fd138]:not([class]),#__nuxt h4+h2[data-v-706fd138]:not([class]),#__nuxt h4+h3[data-v-706fd138]:not([class]),#__nuxt h4+h4[data-v-706fd138]:not([class]),#__nuxt h4+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-706fd138]:not([class]),[vce-ready] h5+p[data-v-706fd138]:not([class]),[vce-ready] h5+h1[data-v-706fd138]:not([class]),[vce-ready] h5+h2[data-v-706fd138]:not([class]),[vce-ready] h5+h3[data-v-706fd138]:not([class]),[vce-ready] h5+h4[data-v-706fd138]:not([class]),[vce-ready] h5+h5[data-v-706fd138]:not([class]),#__nuxt h5+ul[data-v-706fd138]:not([class]),#__nuxt h5+p[data-v-706fd138]:not([class]),#__nuxt h5+h1[data-v-706fd138]:not([class]),#__nuxt h5+h2[data-v-706fd138]:not([class]),#__nuxt h5+h3[data-v-706fd138]:not([class]),#__nuxt h5+h4[data-v-706fd138]:not([class]),#__nuxt h5+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-706fd138]:not([class]),[vce-ready] p+p[data-v-706fd138]:not([class]),[vce-ready] p+h1[data-v-706fd138]:not([class]),[vce-ready] p+h2[data-v-706fd138]:not([class]),[vce-ready] p+h3[data-v-706fd138]:not([class]),[vce-ready] p+h4[data-v-706fd138]:not([class]),[vce-ready] p+h5[data-v-706fd138]:not([class]),#__nuxt p+ul[data-v-706fd138]:not([class]),#__nuxt p+p[data-v-706fd138]:not([class]),#__nuxt p+h1[data-v-706fd138]:not([class]),#__nuxt p+h2[data-v-706fd138]:not([class]),#__nuxt p+h3[data-v-706fd138]:not([class]),#__nuxt p+h4[data-v-706fd138]:not([class]),#__nuxt p+h5[data-v-706fd138]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-706fd138]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-706fd138]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-706fd138]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-706fd138]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-706fd138]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-706fd138]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-706fd138]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-706fd138]::after,#__nuxt [class*=body-] a[target=_blank][data-v-706fd138]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-706fd138]::after,#__nuxt p:not([class]) a[target=_blank][data-v-706fd138]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-706fd138],[vce-ready] [class*=heading-] a[href][data-v-706fd138]:focus,[vce-ready] [class*=body-] a[href][data-v-706fd138],[vce-ready] [class*=body-] a[href][data-v-706fd138]:focus,[vce-ready] h1:not([class]) a[href][data-v-706fd138],[vce-ready] h1:not([class]) a[href][data-v-706fd138]:focus,[vce-ready] h2:not([class]) a[href][data-v-706fd138],[vce-ready] h2:not([class]) a[href][data-v-706fd138]:focus,[vce-ready] h3:not([class]) a[href][data-v-706fd138],[vce-ready] h3:not([class]) a[href][data-v-706fd138]:focus,[vce-ready] h4:not([class]) a[href][data-v-706fd138],[vce-ready] h4:not([class]) a[href][data-v-706fd138]:focus,[vce-ready] h5:not([class]) a[href][data-v-706fd138],[vce-ready] h5:not([class]) a[href][data-v-706fd138]:focus,[vce-ready] p:not([class]) a[href][data-v-706fd138],[vce-ready] p:not([class]) a[href][data-v-706fd138]:focus,#__nuxt [class*=heading-] a[href][data-v-706fd138],#__nuxt [class*=heading-] a[href][data-v-706fd138]:focus,#__nuxt [class*=body-] a[href][data-v-706fd138],#__nuxt [class*=body-] a[href][data-v-706fd138]:focus,#__nuxt h1:not([class]) a[href][data-v-706fd138],#__nuxt h1:not([class]) a[href][data-v-706fd138]:focus,#__nuxt h2:not([class]) a[href][data-v-706fd138],#__nuxt h2:not([class]) a[href][data-v-706fd138]:focus,#__nuxt h3:not([class]) a[href][data-v-706fd138],#__nuxt h3:not([class]) a[href][data-v-706fd138]:focus,#__nuxt h4:not([class]) a[href][data-v-706fd138],#__nuxt h4:not([class]) a[href][data-v-706fd138]:focus,#__nuxt h5:not([class]) a[href][data-v-706fd138],#__nuxt h5:not([class]) a[href][data-v-706fd138]:focus,#__nuxt p:not([class]) a[href][data-v-706fd138],#__nuxt p:not([class]) a[href][data-v-706fd138]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-706fd138]:hover,[vce-ready] [class*=heading-] a[href][data-v-706fd138]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-706fd138]:hover,[vce-ready] [class*=body-] a[href][data-v-706fd138]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] h1:not([class]) a[href][data-v-706fd138]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] h2:not([class]) a[href][data-v-706fd138]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] h3:not([class]) a[href][data-v-706fd138]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] h4:not([class]) a[href][data-v-706fd138]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] h5:not([class]) a[href][data-v-706fd138]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-706fd138]:hover,[vce-ready] p:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-706fd138]:hover,#__nuxt [class*=heading-] a[href][data-v-706fd138]:focus:hover,#__nuxt [class*=body-] a[href][data-v-706fd138]:hover,#__nuxt [class*=body-] a[href][data-v-706fd138]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-706fd138]:hover,#__nuxt h1:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-706fd138]:hover,#__nuxt h2:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-706fd138]:hover,#__nuxt h3:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-706fd138]:hover,#__nuxt h4:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-706fd138]:hover,#__nuxt h5:not([class]) a[href][data-v-706fd138]:focus:hover,#__nuxt p:not([class]) a[href][data-v-706fd138]:hover,#__nuxt p:not([class]) a[href][data-v-706fd138]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-706fd138],[vce-ready] .body--bold[data-v-706fd138],#__nuxt .heading--bold[data-v-706fd138],#__nuxt .body--bold[data-v-706fd138]{font-weight:700}[vce-ready] .heading--regular[data-v-706fd138],[vce-ready] .body--regular[data-v-706fd138],#__nuxt .heading--regular[data-v-706fd138],#__nuxt .body--regular[data-v-706fd138]{font-weight:400}[vce-ready] .heading--light[data-v-706fd138],[vce-ready] .body--light[data-v-706fd138],#__nuxt .heading--light[data-v-706fd138],#__nuxt .body--light[data-v-706fd138]{font-weight:100}[vce-ready] .heading--flush[data-v-706fd138],[vce-ready] .body--flush[data-v-706fd138],#__nuxt .heading--flush[data-v-706fd138],#__nuxt .body--flush[data-v-706fd138]{margin-bottom:0;margin-top:0}.carousel-container[data-v-706fd138] .carousel::-webkit-scrollbar{opacity:1;height:8px}.carousel-container[data-v-706fd138] .carousel::-webkit-scrollbar-track:horizontal{background-color:rgba(151,225,219,.1);border-radius:4px}.carousel-container[data-v-706fd138] .carousel::-webkit-scrollbar-thumb:horizontal{background-color:#c9ced6;border-radius:4px}.quote[data-v-706fd138]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){.quote[data-v-706fd138]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){.quote[data-v-706fd138]{font-size:44px}}@media(min-width: 768px){.quote[data-v-706fd138]{line-height:110%}}@media(min-width: 768px){.quote[data-v-706fd138]{text-align:center}}.attribution[data-v-706fd138]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}.-theme-dark .attribution[data-v-706fd138]{color:#fff}.-theme-light .attribution[data-v-706fd138]{color:#1e2430}.attribution-secondary[data-v-706fd138]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}.-theme-dark .attribution-secondary[data-v-706fd138]{color:#fff}.-theme-light .attribution-secondary[data-v-706fd138]{color:#1e2430}', ""]), c.locals = {}, t.exports = c
        },
        672: function(t, e, d) {
            "use strict";
            d(646)
        },
        673: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-48940107]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-48940107]:not([class]),[vce-ready] .heading-1[data-v-48940107],#__nuxt h1[data-v-48940107]:not([class]),#__nuxt .heading-1[data-v-48940107]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-48940107]:not([class]),[vce-ready] .heading-1[data-v-48940107],#__nuxt h1[data-v-48940107]:not([class]),#__nuxt .heading-1[data-v-48940107]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-48940107]:not([class]),[vce-ready] .heading-1[data-v-48940107],#__nuxt h1[data-v-48940107]:not([class]),#__nuxt .heading-1[data-v-48940107]{font-size:64px}}[vce-ready] h2[data-v-48940107]:not([class]),[vce-ready] .heading-2[data-v-48940107],#__nuxt h2[data-v-48940107]:not([class]),#__nuxt .heading-2[data-v-48940107]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-48940107]:not([class]),[vce-ready] .heading-2[data-v-48940107],#__nuxt h2[data-v-48940107]:not([class]),#__nuxt .heading-2[data-v-48940107]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-48940107]:not([class]),[vce-ready] .heading-2[data-v-48940107],#__nuxt h2[data-v-48940107]:not([class]),#__nuxt .heading-2[data-v-48940107]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-48940107]:not([class]),[vce-ready] .heading-2[data-v-48940107],#__nuxt h2[data-v-48940107]:not([class]),#__nuxt .heading-2[data-v-48940107]{line-height:110%}}[vce-ready] h3[data-v-48940107]:not([class]),[vce-ready] .heading-3[data-v-48940107],#__nuxt h3[data-v-48940107]:not([class]),#__nuxt .heading-3[data-v-48940107]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-48940107]:not([class]),[vce-ready] .heading-3[data-v-48940107],#__nuxt h3[data-v-48940107]:not([class]),#__nuxt .heading-3[data-v-48940107]{font-size:2rem}}[vce-ready] h4[data-v-48940107]:not([class]),[vce-ready] .heading-4[data-v-48940107],#__nuxt h4[data-v-48940107]:not([class]),#__nuxt .heading-4[data-v-48940107]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-48940107]:not([class]),[vce-ready] .heading-4[data-v-48940107],#__nuxt h4[data-v-48940107]:not([class]),#__nuxt .heading-4[data-v-48940107]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-48940107]:not([class]),[vce-ready] .heading-5[data-v-48940107],#__nuxt h5[data-v-48940107]:not([class]),#__nuxt .heading-5[data-v-48940107]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-48940107]:not([class]),[vce-ready] .heading-5[data-v-48940107],#__nuxt h5[data-v-48940107]:not([class]),#__nuxt .heading-5[data-v-48940107]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-48940107]:not([class]),[vce-ready] .body-1[data-v-48940107],#__nuxt p[data-v-48940107]:not([class]),#__nuxt .body-1[data-v-48940107]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-48940107],#__nuxt .body-2[data-v-48940107]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-48940107],#__nuxt .body-3[data-v-48940107]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-48940107],#__nuxt .body-4[data-v-48940107]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-48940107],#__nuxt .body-caption[data-v-48940107]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-48940107],#__nuxt .body-caption[data-v-48940107]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-48940107],[vce-ready] [class*=body-]+p[data-v-48940107],[vce-ready] h1+p[data-v-48940107],[vce-ready] h2+p[data-v-48940107],[vce-ready] h3+p[data-v-48940107],[vce-ready] h4+p[data-v-48940107],[vce-ready] h5+p[data-v-48940107],[vce-ready] p+p[data-v-48940107],#__nuxt [class*=heading-]+p[data-v-48940107],#__nuxt [class*=body-]+p[data-v-48940107],#__nuxt h1+p[data-v-48940107],#__nuxt h2+p[data-v-48940107],#__nuxt h3+p[data-v-48940107],#__nuxt h4+p[data-v-48940107],#__nuxt h5+p[data-v-48940107],#__nuxt p+p[data-v-48940107]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-48940107]:not([class]),[vce-ready] [class*=body-]+ul[data-v-48940107]:not([class]),#__nuxt [class*=heading-]+ul[data-v-48940107]:not([class]),#__nuxt [class*=body-]+ul[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-48940107]:not([class]),[vce-ready] p+p[data-v-48940107]:not([class]),[vce-ready] p+h1[data-v-48940107]:not([class]),[vce-ready] p+h2[data-v-48940107]:not([class]),[vce-ready] p+h3[data-v-48940107]:not([class]),[vce-ready] p+h4[data-v-48940107]:not([class]),[vce-ready] p+h5[data-v-48940107]:not([class]),#__nuxt p+ul[data-v-48940107]:not([class]),#__nuxt p+p[data-v-48940107]:not([class]),#__nuxt p+h1[data-v-48940107]:not([class]),#__nuxt p+h2[data-v-48940107]:not([class]),#__nuxt p+h3[data-v-48940107]:not([class]),#__nuxt p+h4[data-v-48940107]:not([class]),#__nuxt p+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-48940107]:not([class]),[vce-ready] h1+p[data-v-48940107]:not([class]),[vce-ready] h1+h1[data-v-48940107]:not([class]),[vce-ready] h1+h2[data-v-48940107]:not([class]),[vce-ready] h1+h3[data-v-48940107]:not([class]),[vce-ready] h1+h4[data-v-48940107]:not([class]),[vce-ready] h1+h5[data-v-48940107]:not([class]),#__nuxt h1+ul[data-v-48940107]:not([class]),#__nuxt h1+p[data-v-48940107]:not([class]),#__nuxt h1+h1[data-v-48940107]:not([class]),#__nuxt h1+h2[data-v-48940107]:not([class]),#__nuxt h1+h3[data-v-48940107]:not([class]),#__nuxt h1+h4[data-v-48940107]:not([class]),#__nuxt h1+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-48940107]:not([class]),[vce-ready] h2+p[data-v-48940107]:not([class]),[vce-ready] h2+h1[data-v-48940107]:not([class]),[vce-ready] h2+h2[data-v-48940107]:not([class]),[vce-ready] h2+h3[data-v-48940107]:not([class]),[vce-ready] h2+h4[data-v-48940107]:not([class]),[vce-ready] h2+h5[data-v-48940107]:not([class]),#__nuxt h2+ul[data-v-48940107]:not([class]),#__nuxt h2+p[data-v-48940107]:not([class]),#__nuxt h2+h1[data-v-48940107]:not([class]),#__nuxt h2+h2[data-v-48940107]:not([class]),#__nuxt h2+h3[data-v-48940107]:not([class]),#__nuxt h2+h4[data-v-48940107]:not([class]),#__nuxt h2+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-48940107]:not([class]),[vce-ready] h3+p[data-v-48940107]:not([class]),[vce-ready] h3+h1[data-v-48940107]:not([class]),[vce-ready] h3+h2[data-v-48940107]:not([class]),[vce-ready] h3+h3[data-v-48940107]:not([class]),[vce-ready] h3+h4[data-v-48940107]:not([class]),[vce-ready] h3+h5[data-v-48940107]:not([class]),#__nuxt h3+ul[data-v-48940107]:not([class]),#__nuxt h3+p[data-v-48940107]:not([class]),#__nuxt h3+h1[data-v-48940107]:not([class]),#__nuxt h3+h2[data-v-48940107]:not([class]),#__nuxt h3+h3[data-v-48940107]:not([class]),#__nuxt h3+h4[data-v-48940107]:not([class]),#__nuxt h3+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-48940107]:not([class]),[vce-ready] h4+p[data-v-48940107]:not([class]),[vce-ready] h4+h1[data-v-48940107]:not([class]),[vce-ready] h4+h2[data-v-48940107]:not([class]),[vce-ready] h4+h3[data-v-48940107]:not([class]),[vce-ready] h4+h4[data-v-48940107]:not([class]),[vce-ready] h4+h5[data-v-48940107]:not([class]),#__nuxt h4+ul[data-v-48940107]:not([class]),#__nuxt h4+p[data-v-48940107]:not([class]),#__nuxt h4+h1[data-v-48940107]:not([class]),#__nuxt h4+h2[data-v-48940107]:not([class]),#__nuxt h4+h3[data-v-48940107]:not([class]),#__nuxt h4+h4[data-v-48940107]:not([class]),#__nuxt h4+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-48940107]:not([class]),[vce-ready] h5+p[data-v-48940107]:not([class]),[vce-ready] h5+h1[data-v-48940107]:not([class]),[vce-ready] h5+h2[data-v-48940107]:not([class]),[vce-ready] h5+h3[data-v-48940107]:not([class]),[vce-ready] h5+h4[data-v-48940107]:not([class]),[vce-ready] h5+h5[data-v-48940107]:not([class]),#__nuxt h5+ul[data-v-48940107]:not([class]),#__nuxt h5+p[data-v-48940107]:not([class]),#__nuxt h5+h1[data-v-48940107]:not([class]),#__nuxt h5+h2[data-v-48940107]:not([class]),#__nuxt h5+h3[data-v-48940107]:not([class]),#__nuxt h5+h4[data-v-48940107]:not([class]),#__nuxt h5+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-48940107]:not([class]),[vce-ready] p+p[data-v-48940107]:not([class]),[vce-ready] p+h1[data-v-48940107]:not([class]),[vce-ready] p+h2[data-v-48940107]:not([class]),[vce-ready] p+h3[data-v-48940107]:not([class]),[vce-ready] p+h4[data-v-48940107]:not([class]),[vce-ready] p+h5[data-v-48940107]:not([class]),#__nuxt p+ul[data-v-48940107]:not([class]),#__nuxt p+p[data-v-48940107]:not([class]),#__nuxt p+h1[data-v-48940107]:not([class]),#__nuxt p+h2[data-v-48940107]:not([class]),#__nuxt p+h3[data-v-48940107]:not([class]),#__nuxt p+h4[data-v-48940107]:not([class]),#__nuxt p+h5[data-v-48940107]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-48940107]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-48940107]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-48940107]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-48940107]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-48940107]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-48940107]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-48940107]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-48940107]::after,#__nuxt [class*=body-] a[target=_blank][data-v-48940107]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-48940107]::after,#__nuxt p:not([class]) a[target=_blank][data-v-48940107]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-48940107],[vce-ready] [class*=heading-] a[href][data-v-48940107]:focus,[vce-ready] [class*=body-] a[href][data-v-48940107],[vce-ready] [class*=body-] a[href][data-v-48940107]:focus,[vce-ready] h1:not([class]) a[href][data-v-48940107],[vce-ready] h1:not([class]) a[href][data-v-48940107]:focus,[vce-ready] h2:not([class]) a[href][data-v-48940107],[vce-ready] h2:not([class]) a[href][data-v-48940107]:focus,[vce-ready] h3:not([class]) a[href][data-v-48940107],[vce-ready] h3:not([class]) a[href][data-v-48940107]:focus,[vce-ready] h4:not([class]) a[href][data-v-48940107],[vce-ready] h4:not([class]) a[href][data-v-48940107]:focus,[vce-ready] h5:not([class]) a[href][data-v-48940107],[vce-ready] h5:not([class]) a[href][data-v-48940107]:focus,[vce-ready] p:not([class]) a[href][data-v-48940107],[vce-ready] p:not([class]) a[href][data-v-48940107]:focus,#__nuxt [class*=heading-] a[href][data-v-48940107],#__nuxt [class*=heading-] a[href][data-v-48940107]:focus,#__nuxt [class*=body-] a[href][data-v-48940107],#__nuxt [class*=body-] a[href][data-v-48940107]:focus,#__nuxt h1:not([class]) a[href][data-v-48940107],#__nuxt h1:not([class]) a[href][data-v-48940107]:focus,#__nuxt h2:not([class]) a[href][data-v-48940107],#__nuxt h2:not([class]) a[href][data-v-48940107]:focus,#__nuxt h3:not([class]) a[href][data-v-48940107],#__nuxt h3:not([class]) a[href][data-v-48940107]:focus,#__nuxt h4:not([class]) a[href][data-v-48940107],#__nuxt h4:not([class]) a[href][data-v-48940107]:focus,#__nuxt h5:not([class]) a[href][data-v-48940107],#__nuxt h5:not([class]) a[href][data-v-48940107]:focus,#__nuxt p:not([class]) a[href][data-v-48940107],#__nuxt p:not([class]) a[href][data-v-48940107]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-48940107]:hover,[vce-ready] [class*=heading-] a[href][data-v-48940107]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-48940107]:hover,[vce-ready] [class*=body-] a[href][data-v-48940107]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-48940107]:hover,[vce-ready] h1:not([class]) a[href][data-v-48940107]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-48940107]:hover,[vce-ready] h2:not([class]) a[href][data-v-48940107]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-48940107]:hover,[vce-ready] h3:not([class]) a[href][data-v-48940107]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-48940107]:hover,[vce-ready] h4:not([class]) a[href][data-v-48940107]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-48940107]:hover,[vce-ready] h5:not([class]) a[href][data-v-48940107]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-48940107]:hover,[vce-ready] p:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-48940107]:hover,#__nuxt [class*=heading-] a[href][data-v-48940107]:focus:hover,#__nuxt [class*=body-] a[href][data-v-48940107]:hover,#__nuxt [class*=body-] a[href][data-v-48940107]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-48940107]:hover,#__nuxt h1:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-48940107]:hover,#__nuxt h2:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-48940107]:hover,#__nuxt h3:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-48940107]:hover,#__nuxt h4:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-48940107]:hover,#__nuxt h5:not([class]) a[href][data-v-48940107]:focus:hover,#__nuxt p:not([class]) a[href][data-v-48940107]:hover,#__nuxt p:not([class]) a[href][data-v-48940107]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-48940107],[vce-ready] .body--bold[data-v-48940107],#__nuxt .heading--bold[data-v-48940107],#__nuxt .body--bold[data-v-48940107]{font-weight:700}[vce-ready] .heading--regular[data-v-48940107],[vce-ready] .body--regular[data-v-48940107],#__nuxt .heading--regular[data-v-48940107],#__nuxt .body--regular[data-v-48940107]{font-weight:400}[vce-ready] .heading--light[data-v-48940107],[vce-ready] .body--light[data-v-48940107],#__nuxt .heading--light[data-v-48940107],#__nuxt .body--light[data-v-48940107]{font-weight:100}[vce-ready] .heading--flush[data-v-48940107],[vce-ready] .body--flush[data-v-48940107],#__nuxt .heading--flush[data-v-48940107],#__nuxt .body--flush[data-v-48940107]{margin-bottom:0;margin-top:0}.pullquote[data-v-48940107]{overflow:hidden}.pullquote.-theme-dark[data-v-48940107]{color:#fff}.pullquote.-theme-light[data-v-48940107]{color:#1e2430}.photo[data-v-48940107]{width:5rem;overflow:hidden}.pullquote--default .photo[data-v-48940107]{border-radius:50%;height:5rem}.pullquote--full .pullquote--row[data-v-48940107]{max-width:1440px}.pullquote--full .photo[data-v-48940107]{align-self:center;height:auto;overflow:visible;position:relative}@media(min-width: 1025px){.pullquote--full .photo[data-v-48940107]{left:-10%}}@media(min-width: 768px){.pullquote--full[data-v-48940107] .picture{display:flex;justify-content:flex-end}.pullquote--full[data-v-48940107] .image{flex:0 0 auto;height:70vh;left:-2.1875rem;max-height:42.5rem;position:relative;width:auto}}@media(min-width: 768px)and (min-width: 1025px){.pullquote--full[data-v-48940107] .image{left:0}}.pullquote--signature .photo[data-v-48940107]{width:7.5rem}.pullquote--small-signature .photo[data-v-48940107]{width:3.75rem}.pullquote--full[data-v-48940107] .quote,.pullquote--left[data-v-48940107] .quote,.pullquote--small-signature[data-v-48940107] .quote{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0;text-align:left}@media(min-width: 768px){.pullquote--full[data-v-48940107] .quote,.pullquote--left[data-v-48940107] .quote,.pullquote--small-signature[data-v-48940107] .quote{font-size:2rem}}', ""]), c.locals = {}, t.exports = c
        },
        678: function(t, e, d) {
            "use strict";
            d(649)
        },
        679: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-5b0e9cdc]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-1[data-v-5b0e9cdc],#__nuxt h1[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-1[data-v-5b0e9cdc]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-1[data-v-5b0e9cdc],#__nuxt h1[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-1[data-v-5b0e9cdc]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-1[data-v-5b0e9cdc],#__nuxt h1[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-1[data-v-5b0e9cdc]{font-size:64px}}[vce-ready] h2[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-2[data-v-5b0e9cdc],#__nuxt h2[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-2[data-v-5b0e9cdc]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-2[data-v-5b0e9cdc],#__nuxt h2[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-2[data-v-5b0e9cdc]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-2[data-v-5b0e9cdc],#__nuxt h2[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-2[data-v-5b0e9cdc]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-2[data-v-5b0e9cdc],#__nuxt h2[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-2[data-v-5b0e9cdc]{line-height:110%}}[vce-ready] h3[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-3[data-v-5b0e9cdc],#__nuxt h3[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-3[data-v-5b0e9cdc]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-3[data-v-5b0e9cdc],#__nuxt h3[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-3[data-v-5b0e9cdc]{font-size:2rem}}[vce-ready] h4[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-4[data-v-5b0e9cdc],#__nuxt h4[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-4[data-v-5b0e9cdc]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-4[data-v-5b0e9cdc],#__nuxt h4[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-4[data-v-5b0e9cdc]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-5[data-v-5b0e9cdc],#__nuxt h5[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-5[data-v-5b0e9cdc]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-5b0e9cdc]:not([class]),[vce-ready] .heading-5[data-v-5b0e9cdc],#__nuxt h5[data-v-5b0e9cdc]:not([class]),#__nuxt .heading-5[data-v-5b0e9cdc]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-5b0e9cdc]:not([class]),[vce-ready] .body-1[data-v-5b0e9cdc],#__nuxt p[data-v-5b0e9cdc]:not([class]),#__nuxt .body-1[data-v-5b0e9cdc]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-5b0e9cdc],#__nuxt .body-2[data-v-5b0e9cdc]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-5b0e9cdc],#__nuxt .body-3[data-v-5b0e9cdc]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-5b0e9cdc],#__nuxt .body-4[data-v-5b0e9cdc]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-5b0e9cdc],#__nuxt .body-caption[data-v-5b0e9cdc]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-5b0e9cdc],#__nuxt .body-caption[data-v-5b0e9cdc]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-5b0e9cdc],[vce-ready] [class*=body-]+p[data-v-5b0e9cdc],[vce-ready] h1+p[data-v-5b0e9cdc],[vce-ready] h2+p[data-v-5b0e9cdc],[vce-ready] h3+p[data-v-5b0e9cdc],[vce-ready] h4+p[data-v-5b0e9cdc],[vce-ready] h5+p[data-v-5b0e9cdc],[vce-ready] p+p[data-v-5b0e9cdc],#__nuxt [class*=heading-]+p[data-v-5b0e9cdc],#__nuxt [class*=body-]+p[data-v-5b0e9cdc],#__nuxt h1+p[data-v-5b0e9cdc],#__nuxt h2+p[data-v-5b0e9cdc],#__nuxt h3+p[data-v-5b0e9cdc],#__nuxt h4+p[data-v-5b0e9cdc],#__nuxt h5+p[data-v-5b0e9cdc],#__nuxt p+p[data-v-5b0e9cdc]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] [class*=body-]+ul[data-v-5b0e9cdc]:not([class]),#__nuxt [class*=heading-]+ul[data-v-5b0e9cdc]:not([class]),#__nuxt [class*=body-]+ul[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] p+p[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h5[data-v-5b0e9cdc]:not([class]),#__nuxt p+ul[data-v-5b0e9cdc]:not([class]),#__nuxt p+p[data-v-5b0e9cdc]:not([class]),#__nuxt p+h1[data-v-5b0e9cdc]:not([class]),#__nuxt p+h2[data-v-5b0e9cdc]:not([class]),#__nuxt p+h3[data-v-5b0e9cdc]:not([class]),#__nuxt p+h4[data-v-5b0e9cdc]:not([class]),#__nuxt p+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+p[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] h1+h5[data-v-5b0e9cdc]:not([class]),#__nuxt h1+ul[data-v-5b0e9cdc]:not([class]),#__nuxt h1+p[data-v-5b0e9cdc]:not([class]),#__nuxt h1+h1[data-v-5b0e9cdc]:not([class]),#__nuxt h1+h2[data-v-5b0e9cdc]:not([class]),#__nuxt h1+h3[data-v-5b0e9cdc]:not([class]),#__nuxt h1+h4[data-v-5b0e9cdc]:not([class]),#__nuxt h1+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+p[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] h2+h5[data-v-5b0e9cdc]:not([class]),#__nuxt h2+ul[data-v-5b0e9cdc]:not([class]),#__nuxt h2+p[data-v-5b0e9cdc]:not([class]),#__nuxt h2+h1[data-v-5b0e9cdc]:not([class]),#__nuxt h2+h2[data-v-5b0e9cdc]:not([class]),#__nuxt h2+h3[data-v-5b0e9cdc]:not([class]),#__nuxt h2+h4[data-v-5b0e9cdc]:not([class]),#__nuxt h2+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+p[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] h3+h5[data-v-5b0e9cdc]:not([class]),#__nuxt h3+ul[data-v-5b0e9cdc]:not([class]),#__nuxt h3+p[data-v-5b0e9cdc]:not([class]),#__nuxt h3+h1[data-v-5b0e9cdc]:not([class]),#__nuxt h3+h2[data-v-5b0e9cdc]:not([class]),#__nuxt h3+h3[data-v-5b0e9cdc]:not([class]),#__nuxt h3+h4[data-v-5b0e9cdc]:not([class]),#__nuxt h3+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+p[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] h4+h5[data-v-5b0e9cdc]:not([class]),#__nuxt h4+ul[data-v-5b0e9cdc]:not([class]),#__nuxt h4+p[data-v-5b0e9cdc]:not([class]),#__nuxt h4+h1[data-v-5b0e9cdc]:not([class]),#__nuxt h4+h2[data-v-5b0e9cdc]:not([class]),#__nuxt h4+h3[data-v-5b0e9cdc]:not([class]),#__nuxt h4+h4[data-v-5b0e9cdc]:not([class]),#__nuxt h4+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+p[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] h5+h5[data-v-5b0e9cdc]:not([class]),#__nuxt h5+ul[data-v-5b0e9cdc]:not([class]),#__nuxt h5+p[data-v-5b0e9cdc]:not([class]),#__nuxt h5+h1[data-v-5b0e9cdc]:not([class]),#__nuxt h5+h2[data-v-5b0e9cdc]:not([class]),#__nuxt h5+h3[data-v-5b0e9cdc]:not([class]),#__nuxt h5+h4[data-v-5b0e9cdc]:not([class]),#__nuxt h5+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-5b0e9cdc]:not([class]),[vce-ready] p+p[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h1[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h2[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h3[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h4[data-v-5b0e9cdc]:not([class]),[vce-ready] p+h5[data-v-5b0e9cdc]:not([class]),#__nuxt p+ul[data-v-5b0e9cdc]:not([class]),#__nuxt p+p[data-v-5b0e9cdc]:not([class]),#__nuxt p+h1[data-v-5b0e9cdc]:not([class]),#__nuxt p+h2[data-v-5b0e9cdc]:not([class]),#__nuxt p+h3[data-v-5b0e9cdc]:not([class]),#__nuxt p+h4[data-v-5b0e9cdc]:not([class]),#__nuxt p+h5[data-v-5b0e9cdc]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt [class*=body-] a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-5b0e9cdc]::after,#__nuxt p:not([class]) a[target=_blank][data-v-5b0e9cdc]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-5b0e9cdc],[vce-ready] [class*=heading-] a[href][data-v-5b0e9cdc]:focus,[vce-ready] [class*=body-] a[href][data-v-5b0e9cdc],[vce-ready] [class*=body-] a[href][data-v-5b0e9cdc]:focus,[vce-ready] h1:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] h1:not([class]) a[href][data-v-5b0e9cdc]:focus,[vce-ready] h2:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] h2:not([class]) a[href][data-v-5b0e9cdc]:focus,[vce-ready] h3:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] h3:not([class]) a[href][data-v-5b0e9cdc]:focus,[vce-ready] h4:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] h4:not([class]) a[href][data-v-5b0e9cdc]:focus,[vce-ready] h5:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] h5:not([class]) a[href][data-v-5b0e9cdc]:focus,[vce-ready] p:not([class]) a[href][data-v-5b0e9cdc],[vce-ready] p:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt [class*=heading-] a[href][data-v-5b0e9cdc],#__nuxt [class*=heading-] a[href][data-v-5b0e9cdc]:focus,#__nuxt [class*=body-] a[href][data-v-5b0e9cdc],#__nuxt [class*=body-] a[href][data-v-5b0e9cdc]:focus,#__nuxt h1:not([class]) a[href][data-v-5b0e9cdc],#__nuxt h1:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt h2:not([class]) a[href][data-v-5b0e9cdc],#__nuxt h2:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt h3:not([class]) a[href][data-v-5b0e9cdc],#__nuxt h3:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt h4:not([class]) a[href][data-v-5b0e9cdc],#__nuxt h4:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt h5:not([class]) a[href][data-v-5b0e9cdc],#__nuxt h5:not([class]) a[href][data-v-5b0e9cdc]:focus,#__nuxt p:not([class]) a[href][data-v-5b0e9cdc],#__nuxt p:not([class]) a[href][data-v-5b0e9cdc]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-5b0e9cdc]:hover,[vce-ready] [class*=heading-] a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-5b0e9cdc]:hover,[vce-ready] [class*=body-] a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] h1:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] h2:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] h3:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] h4:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] h5:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-5b0e9cdc]:hover,[vce-ready] p:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-5b0e9cdc]:hover,#__nuxt [class*=heading-] a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt [class*=body-] a[href][data-v-5b0e9cdc]:hover,#__nuxt [class*=body-] a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt h1:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt h2:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt h3:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt h4:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt h5:not([class]) a[href][data-v-5b0e9cdc]:focus:hover,#__nuxt p:not([class]) a[href][data-v-5b0e9cdc]:hover,#__nuxt p:not([class]) a[href][data-v-5b0e9cdc]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-5b0e9cdc],[vce-ready] .body--bold[data-v-5b0e9cdc],#__nuxt .heading--bold[data-v-5b0e9cdc],#__nuxt .body--bold[data-v-5b0e9cdc]{font-weight:700}[vce-ready] .heading--regular[data-v-5b0e9cdc],[vce-ready] .body--regular[data-v-5b0e9cdc],#__nuxt .heading--regular[data-v-5b0e9cdc],#__nuxt .body--regular[data-v-5b0e9cdc]{font-weight:400}[vce-ready] .heading--light[data-v-5b0e9cdc],[vce-ready] .body--light[data-v-5b0e9cdc],#__nuxt .heading--light[data-v-5b0e9cdc],#__nuxt .body--light[data-v-5b0e9cdc]{font-weight:100}[vce-ready] .heading--flush[data-v-5b0e9cdc],[vce-ready] .body--flush[data-v-5b0e9cdc],#__nuxt .heading--flush[data-v-5b0e9cdc],#__nuxt .body--flush[data-v-5b0e9cdc]{margin-bottom:0;margin-top:0}.app-row[data-v-5b0e9cdc]{color:#1e2430}[data-v-5b0e9cdc] i,[data-v-5b0e9cdc] em,[data-v-5b0e9cdc] u{background-repeat:no-repeat;text-decoration:none;font-style:normal}[data-v-5b0e9cdc] i,[data-v-5b0e9cdc] em{background-position:center;background-size:100% 100%}[data-v-5b0e9cdc] u{background-position:center bottom 10%;background-size:100% 7px}[data-inview-visible][data-v-5b0e9cdc] i,[data-inview-visible][data-v-5b0e9cdc] em{background-image:url("/images/ellipse.svg");background-image:var(--bg-image-ellipse)}[data-inview-visible][data-v-5b0e9cdc] u{background-image:url("/images/line.svg");background-image:var(--bg-image-line)}', ""]), c.locals = {}, t.exports = c
        },
        680: function(t, e, d) {
            "use strict";
            d.r(e);
            d(131);
            var c = {
                    props: {
                        content: {
                            type: [String, Object],
                            default: ""
                        },
                        customClasses: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        cssVars: function() {
                            return {
                                "--bg-image-line": "url('/images/line.svg?".concat(this._uid, "')"),
                                "--bg-image-ellipse": "url('/images/ellipse.svg?".concat(this._uid, "')")
                            }
                        },
                        computedClasses: function() {
                            return ((this.customClasses || "") + " " + (this.$class || "")).trim()
                        }
                    }
                },
                n = (d(678), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "element-in-view",
                            rawName: "v-element-in-view.permanent",
                            modifiers: {
                                permanent: !0
                            }
                        }, {
                            name: "tag",
                            rawName: "v-tag",
                            value: t.$styleTag,
                            expression: "$styleTag"
                        }],
                        staticClass: "app-row",
                        style: t.cssVars
                    }, [e("div", {
                        staticClass: "app-col-xs",
                        class: t.computedClasses,
                        style: t.$style
                    }, [t.$slots.default ? e("div", [t._t("default")], 2) : t.content ? e("RichTextRenderer", {
                        attrs: {
                            document: t.content
                        }
                    }) : t._e()], 1)])
                }), [], !1, null, "5b0e9cdc", null);
            e.default = component.exports
        },
        685: function(t, e, d) {
            "use strict";
            d.r(e);
            d(31);
            var c = d(5),
                n = {
                    props: {
                        quote: {
                            type: String,
                            required: !0
                        },
                        attribution: {
                            type: String,
                            required: !1,
                            default: null
                        },
                        attributionSecondary: {
                            type: String,
                            required: !1,
                            default: null
                        }
                    }
                },
                r = (d(670), d(0)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("h3", {
                        directives: [{
                            name: "markdown",
                            rawName: "v-markdown",
                            value: t.quote,
                            expression: "quote"
                        }],
                        staticClass: "quote"
                    }), t._v(" "), e("Spacer", {
                        attrs: {
                            size: 32
                        }
                    }), t._v(" "), t.attribution ? [e("div", {
                        staticClass: "attribution"
                    }, [t._v(t._s(t.attribution))]), t._v(" "), e("Spacer", {
                        attrs: {
                            size: 0
                        }
                    }), t._v(" "), t.attributionSecondary ? e("div", {
                        directives: [{
                            name: "markdown",
                            rawName: "v-markdown",
                            value: t.attributionSecondary,
                            expression: "attributionSecondary"
                        }],
                        staticClass: "attribution-secondary"
                    }) : t._e(), t._v(" "), t._t("default")] : t._e()], 2)
                }), [], !1, null, "706fd138", null),
                o = component.exports;
            installComponents(component, {
                Spacer: d(59).default
            });
            var l = {
                    props: {
                        cta: {
                            type: String,
                            required: !0
                        },
                        ctaLink: {
                            type: String,
                            required: !0
                        },
                        target: {
                            type: String,
                            required: !1,
                            default: c.j.SELF
                        },
                        themeColor: {
                            type: String,
                            required: !1,
                            default: c.f.LIGHT
                        }
                    }
                },
                h = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "app-col--default app-col-xs app-row"
                    }, [e("IconButton", {
                        attrs: {
                            label: t.cta,
                            link: t.ctaLink,
                            "theme-color": t.themeColor,
                            target: t.target
                        }
                    })], 1)
                }), [], !1, null, null, null),
                f = h.exports;
            installComponents(h, {
                IconButton: d(207).default
            });
            var v = {
                    props: {
                        ratings: {
                            type: Array,
                            required: !1,
                            default: function() {
                                return []
                            }
                        }
                    }
                },
                m = Object(r.a)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "carousel-container app-col-xs"
                    }, [e("Carousel", {
                        staticClass: "carousel--shadow-offset app-col-xs-24 app-col-md-24"
                    }, t._l(t.ratings, (function(t, i) {
                        return e("CardRating", {
                            key: t + i,
                            staticClass: "card-offset",
                            attrs: {
                                rating: t.rating,
                                quote: t.quote
                            }
                        })
                    })), 1), t._v(" "), e("Spacer", {
                        staticStyle: {
                            "margin-top": "1rem"
                        },
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    })], 1)
                }), [], !1, null, null, null),
                x = m.exports;
            installComponents(m, {
                CardRating: d(669).default,
                Carousel: d(619).default,
                Spacer: d(59).default
            });
            var w = "default",
                _ = "full",
                y = "left",
                k = "signature",
                z = "small-signature",
                C = {
                    data: function() {
                        return {}
                    },
                    components: {
                        PullquoteBody: o,
                        PullquoteCta: f,
                        PullquoteRatings: x
                    },
                    props: {
                        image: {
                            type: Object,
                            required: !1,
                            default: null
                        },
                        quote: {
                            type: String,
                            required: !0
                        },
                        attribution: {
                            type: String,
                            required: !1,
                            default: null
                        },
                        attributionSecondary: {
                            type: String,
                            required: !1
                        },
                        ratings: {
                            type: Array,
                            required: !1
                        },
                        cta: {
                            type: String,
                            required: !1
                        },
                        ctaLink: {
                            type: String,
                            required: !1
                        },
                        themeColor: {
                            type: String,
                            required: !1,
                            default: c.f.LIGHT
                        },
                        variation: {
                            type: String,
                            default: w
                        },
                        target: {
                            type: String,
                            required: !1,
                            default: c.j.SELF
                        }
                    },
                    computed: {
                        getClasses: function() {
                            var t = this.isLeftAligned && this.image ? "app-row-md--middle" : "",
                                e = this.isLeftAligned && !this.image || this.isSmallSignature ? "left" : "center",
                                d = this.isLeftAligned ? this.image ? 24 : 16 : this.isSmallSignature ? 10 : 18;
                            return "app-col-md-".concat(d, " app-row-md--").concat(e, " ").concat(t)
                        },
                        imageAt: function() {
                            return {
                                bottom: this.image && (this.isSignature || this.isSmallSignature),
                                left: this.image && (this.isLeftAligned || this.isFullWidth),
                                top: this.image && this.isDefault
                            }
                        },
                        isFullWidth: function() {
                            return this.variation === _
                        },
                        isDefault: function() {
                            return this.variation === w
                        },
                        isLeftAligned: function() {
                            return this.variation === y
                        },
                        isSignature: function() {
                            return this.variation === k
                        },
                        isSmallSignature: function() {
                            return this.variation === z
                        },
                        getTheme: function() {
                            return this.themeColor === c.f.LIGHT ? c.d.LIGHT : c.d.DARK
                        },
                        hasRatings: function() {
                            return this.ratings && Array.isArray(this.ratings) && this.ratings.length > 0
                        }
                    }
                },
                S = (d(672), Object(r.a)(C, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "pullquote app-row app-row-xs--center",
                        class: ["pullquote--".concat(t.variation), t.getTheme, {
                            "app-container": !t.isFullWidth
                        }]
                    }, [e("div", {
                        staticClass: "app-col-xs app-row app-row-md--center"
                    }, [e("div", {
                        staticClass: "pullquote--row app-col-xs",
                        class: [{
                            "app-col--default": !t.isFullWidth,
                            "app-row-md--middle": t.isFullWidth
                        }, "app-col-md-".concat(t.isLeftAligned ? 21 : t.isSmallSignature ? 10 : t.isSignature ? 12 : t.isFullWidth ? "" : 18), t.isFullWidth ? "app-row-xs--center" : "", t.isLeftAligned ? "app-row-md--middle" : "", "app-row app-row-".concat(t.isFullWidth ? "md" : "xs", "--").concat(t.isSmallSignature ? "left" : t.isFullWidth ? "between" : "center")]
                    }, [t._t("before"), t._v(" "), t.$slots.before ? e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    }) : e("Spacer", {
                        attrs: {
                            size: 80
                        }
                    }), t._v(" "), t.imageAt.top ? [e("div", {
                        staticClass: "photo"
                    }, [e("GenericImage", t._b({}, "GenericImage", t.image, !1))], 1), t._v(" "), e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    })] : t._e(), t._v(" "), t.imageAt.left ? [e("div", {
                        staticClass: "app-col-xs-20 app-col-md-10 photo",
                        class: {
                            "app-col-lg-10 photo--full": t.isFullWidth
                        }
                    }, [e("GenericImage", t._b({}, "GenericImage", t.image, !1))], 1), t._v(" "), e("Spacer", {
                        staticClass: "-hide-md",
                        attrs: {
                            size: 80
                        }
                    }), t._v(" "), t.isFullWidth ? e("div", {
                        staticClass: "app-col--default app-col-xs app-row app-row-md--center"
                    }, [e("PullquoteBody", {
                        staticClass: "app-col-md-11 app-col-lg-12",
                        attrs: {
                            quote: t.quote,
                            attribution: t.attribution,
                            "attribution-secondary": t.attributionSecondary
                        }
                    }, [t.isFullWidth ? t._e() : e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    })], 1)], 1) : e("PullquoteBody", {
                        staticClass: "app-col-md-10 app-col-md-offset-1",
                        attrs: {
                            quote: t.quote,
                            attribution: t.attribution,
                            "attribution-secondary": t.attributionSecondary
                        }
                    }, [e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    })], 1)] : e("PullquoteBody", {
                        style: {
                            textAlign: t.isLeftAligned || t.isSmallSignature ? "left" : "center"
                        },
                        attrs: {
                            quote: t.quote,
                            attribution: t.attribution,
                            "attribution-secondary": t.attributionSecondary
                        }
                    }, [e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 32,
                                md: 40
                            }
                        }
                    })], 1), t._v(" "), t.imageAt.bottom ? [e("div", {
                        staticClass: "photo"
                    }, [e("GenericImage", t._b({}, "GenericImage", t.image, !1))], 1)] : t._e()], 2), t._v(" "), t.hasRatings ? e("PullquoteRatings", {
                        attrs: {
                            ratings: t.ratings
                        }
                    }) : t._e(), t._v(" "), t.cta ? e("PullquoteCta", {
                        class: ["app-row-xs--center", "app-row-md--".concat(t.isDefault ? "center" : "left"), "app-col-md-".concat(t.isDefault ? 18 : 15)],
                        attrs: {
                            cta: t.cta,
                            "cta-link": t.ctaLink,
                            target: t.target,
                            "theme-color": t.themeColor
                        }
                    }) : t._e()], 1), t._v(" "), e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 60,
                                md: 80
                            }
                        }
                    })], 1)
                }), [], !1, null, "48940107", null));
            e.default = S.exports;
            installComponents(S, {
                Spacer: d(59).default,
                GenericImage: d(127).default
            })
        },
        707: function(t, e, d) {
            "use strict";
            d(667)
        },
        708: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-269f87db]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-269f87db]:not([class]),[vce-ready] .heading-1[data-v-269f87db],#__nuxt h1[data-v-269f87db]:not([class]),#__nuxt .heading-1[data-v-269f87db]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-269f87db]:not([class]),[vce-ready] .heading-1[data-v-269f87db],#__nuxt h1[data-v-269f87db]:not([class]),#__nuxt .heading-1[data-v-269f87db]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-269f87db]:not([class]),[vce-ready] .heading-1[data-v-269f87db],#__nuxt h1[data-v-269f87db]:not([class]),#__nuxt .heading-1[data-v-269f87db]{font-size:64px}}[vce-ready] h2[data-v-269f87db]:not([class]),[vce-ready] .heading-2[data-v-269f87db],#__nuxt h2[data-v-269f87db]:not([class]),#__nuxt .heading-2[data-v-269f87db]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-269f87db]:not([class]),[vce-ready] .heading-2[data-v-269f87db],#__nuxt h2[data-v-269f87db]:not([class]),#__nuxt .heading-2[data-v-269f87db]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-269f87db]:not([class]),[vce-ready] .heading-2[data-v-269f87db],#__nuxt h2[data-v-269f87db]:not([class]),#__nuxt .heading-2[data-v-269f87db]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-269f87db]:not([class]),[vce-ready] .heading-2[data-v-269f87db],#__nuxt h2[data-v-269f87db]:not([class]),#__nuxt .heading-2[data-v-269f87db]{line-height:110%}}[vce-ready] h3[data-v-269f87db]:not([class]),[vce-ready] .heading-3[data-v-269f87db],#__nuxt h3[data-v-269f87db]:not([class]),#__nuxt .heading-3[data-v-269f87db]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-269f87db]:not([class]),[vce-ready] .heading-3[data-v-269f87db],#__nuxt h3[data-v-269f87db]:not([class]),#__nuxt .heading-3[data-v-269f87db]{font-size:2rem}}[vce-ready] h4[data-v-269f87db]:not([class]),[vce-ready] .heading-4[data-v-269f87db],#__nuxt h4[data-v-269f87db]:not([class]),#__nuxt .heading-4[data-v-269f87db]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-269f87db]:not([class]),[vce-ready] .heading-4[data-v-269f87db],#__nuxt h4[data-v-269f87db]:not([class]),#__nuxt .heading-4[data-v-269f87db]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-269f87db]:not([class]),[vce-ready] .heading-5[data-v-269f87db],#__nuxt h5[data-v-269f87db]:not([class]),#__nuxt .heading-5[data-v-269f87db]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-269f87db]:not([class]),[vce-ready] .heading-5[data-v-269f87db],#__nuxt h5[data-v-269f87db]:not([class]),#__nuxt .heading-5[data-v-269f87db]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-269f87db]:not([class]),[vce-ready] .body-1[data-v-269f87db],#__nuxt p[data-v-269f87db]:not([class]),#__nuxt .body-1[data-v-269f87db]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-269f87db],#__nuxt .body-2[data-v-269f87db]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-269f87db],#__nuxt .body-3[data-v-269f87db]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-269f87db],#__nuxt .body-4[data-v-269f87db]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-269f87db],#__nuxt .body-caption[data-v-269f87db]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-269f87db],#__nuxt .body-caption[data-v-269f87db]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-269f87db],[vce-ready] [class*=body-]+p[data-v-269f87db],[vce-ready] h1+p[data-v-269f87db],[vce-ready] h2+p[data-v-269f87db],[vce-ready] h3+p[data-v-269f87db],[vce-ready] h4+p[data-v-269f87db],[vce-ready] h5+p[data-v-269f87db],[vce-ready] p+p[data-v-269f87db],#__nuxt [class*=heading-]+p[data-v-269f87db],#__nuxt [class*=body-]+p[data-v-269f87db],#__nuxt h1+p[data-v-269f87db],#__nuxt h2+p[data-v-269f87db],#__nuxt h3+p[data-v-269f87db],#__nuxt h4+p[data-v-269f87db],#__nuxt h5+p[data-v-269f87db],#__nuxt p+p[data-v-269f87db]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-269f87db]:not([class]),[vce-ready] [class*=body-]+ul[data-v-269f87db]:not([class]),#__nuxt [class*=heading-]+ul[data-v-269f87db]:not([class]),#__nuxt [class*=body-]+ul[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-269f87db]:not([class]),[vce-ready] p+p[data-v-269f87db]:not([class]),[vce-ready] p+h1[data-v-269f87db]:not([class]),[vce-ready] p+h2[data-v-269f87db]:not([class]),[vce-ready] p+h3[data-v-269f87db]:not([class]),[vce-ready] p+h4[data-v-269f87db]:not([class]),[vce-ready] p+h5[data-v-269f87db]:not([class]),#__nuxt p+ul[data-v-269f87db]:not([class]),#__nuxt p+p[data-v-269f87db]:not([class]),#__nuxt p+h1[data-v-269f87db]:not([class]),#__nuxt p+h2[data-v-269f87db]:not([class]),#__nuxt p+h3[data-v-269f87db]:not([class]),#__nuxt p+h4[data-v-269f87db]:not([class]),#__nuxt p+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-269f87db]:not([class]),[vce-ready] h1+p[data-v-269f87db]:not([class]),[vce-ready] h1+h1[data-v-269f87db]:not([class]),[vce-ready] h1+h2[data-v-269f87db]:not([class]),[vce-ready] h1+h3[data-v-269f87db]:not([class]),[vce-ready] h1+h4[data-v-269f87db]:not([class]),[vce-ready] h1+h5[data-v-269f87db]:not([class]),#__nuxt h1+ul[data-v-269f87db]:not([class]),#__nuxt h1+p[data-v-269f87db]:not([class]),#__nuxt h1+h1[data-v-269f87db]:not([class]),#__nuxt h1+h2[data-v-269f87db]:not([class]),#__nuxt h1+h3[data-v-269f87db]:not([class]),#__nuxt h1+h4[data-v-269f87db]:not([class]),#__nuxt h1+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-269f87db]:not([class]),[vce-ready] h2+p[data-v-269f87db]:not([class]),[vce-ready] h2+h1[data-v-269f87db]:not([class]),[vce-ready] h2+h2[data-v-269f87db]:not([class]),[vce-ready] h2+h3[data-v-269f87db]:not([class]),[vce-ready] h2+h4[data-v-269f87db]:not([class]),[vce-ready] h2+h5[data-v-269f87db]:not([class]),#__nuxt h2+ul[data-v-269f87db]:not([class]),#__nuxt h2+p[data-v-269f87db]:not([class]),#__nuxt h2+h1[data-v-269f87db]:not([class]),#__nuxt h2+h2[data-v-269f87db]:not([class]),#__nuxt h2+h3[data-v-269f87db]:not([class]),#__nuxt h2+h4[data-v-269f87db]:not([class]),#__nuxt h2+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-269f87db]:not([class]),[vce-ready] h3+p[data-v-269f87db]:not([class]),[vce-ready] h3+h1[data-v-269f87db]:not([class]),[vce-ready] h3+h2[data-v-269f87db]:not([class]),[vce-ready] h3+h3[data-v-269f87db]:not([class]),[vce-ready] h3+h4[data-v-269f87db]:not([class]),[vce-ready] h3+h5[data-v-269f87db]:not([class]),#__nuxt h3+ul[data-v-269f87db]:not([class]),#__nuxt h3+p[data-v-269f87db]:not([class]),#__nuxt h3+h1[data-v-269f87db]:not([class]),#__nuxt h3+h2[data-v-269f87db]:not([class]),#__nuxt h3+h3[data-v-269f87db]:not([class]),#__nuxt h3+h4[data-v-269f87db]:not([class]),#__nuxt h3+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-269f87db]:not([class]),[vce-ready] h4+p[data-v-269f87db]:not([class]),[vce-ready] h4+h1[data-v-269f87db]:not([class]),[vce-ready] h4+h2[data-v-269f87db]:not([class]),[vce-ready] h4+h3[data-v-269f87db]:not([class]),[vce-ready] h4+h4[data-v-269f87db]:not([class]),[vce-ready] h4+h5[data-v-269f87db]:not([class]),#__nuxt h4+ul[data-v-269f87db]:not([class]),#__nuxt h4+p[data-v-269f87db]:not([class]),#__nuxt h4+h1[data-v-269f87db]:not([class]),#__nuxt h4+h2[data-v-269f87db]:not([class]),#__nuxt h4+h3[data-v-269f87db]:not([class]),#__nuxt h4+h4[data-v-269f87db]:not([class]),#__nuxt h4+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-269f87db]:not([class]),[vce-ready] h5+p[data-v-269f87db]:not([class]),[vce-ready] h5+h1[data-v-269f87db]:not([class]),[vce-ready] h5+h2[data-v-269f87db]:not([class]),[vce-ready] h5+h3[data-v-269f87db]:not([class]),[vce-ready] h5+h4[data-v-269f87db]:not([class]),[vce-ready] h5+h5[data-v-269f87db]:not([class]),#__nuxt h5+ul[data-v-269f87db]:not([class]),#__nuxt h5+p[data-v-269f87db]:not([class]),#__nuxt h5+h1[data-v-269f87db]:not([class]),#__nuxt h5+h2[data-v-269f87db]:not([class]),#__nuxt h5+h3[data-v-269f87db]:not([class]),#__nuxt h5+h4[data-v-269f87db]:not([class]),#__nuxt h5+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-269f87db]:not([class]),[vce-ready] p+p[data-v-269f87db]:not([class]),[vce-ready] p+h1[data-v-269f87db]:not([class]),[vce-ready] p+h2[data-v-269f87db]:not([class]),[vce-ready] p+h3[data-v-269f87db]:not([class]),[vce-ready] p+h4[data-v-269f87db]:not([class]),[vce-ready] p+h5[data-v-269f87db]:not([class]),#__nuxt p+ul[data-v-269f87db]:not([class]),#__nuxt p+p[data-v-269f87db]:not([class]),#__nuxt p+h1[data-v-269f87db]:not([class]),#__nuxt p+h2[data-v-269f87db]:not([class]),#__nuxt p+h3[data-v-269f87db]:not([class]),#__nuxt p+h4[data-v-269f87db]:not([class]),#__nuxt p+h5[data-v-269f87db]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-269f87db]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-269f87db]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-269f87db]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-269f87db]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-269f87db]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-269f87db]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-269f87db]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-269f87db]::after,#__nuxt [class*=body-] a[target=_blank][data-v-269f87db]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-269f87db]::after,#__nuxt p:not([class]) a[target=_blank][data-v-269f87db]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-269f87db],[vce-ready] [class*=heading-] a[href][data-v-269f87db]:focus,[vce-ready] [class*=body-] a[href][data-v-269f87db],[vce-ready] [class*=body-] a[href][data-v-269f87db]:focus,[vce-ready] h1:not([class]) a[href][data-v-269f87db],[vce-ready] h1:not([class]) a[href][data-v-269f87db]:focus,[vce-ready] h2:not([class]) a[href][data-v-269f87db],[vce-ready] h2:not([class]) a[href][data-v-269f87db]:focus,[vce-ready] h3:not([class]) a[href][data-v-269f87db],[vce-ready] h3:not([class]) a[href][data-v-269f87db]:focus,[vce-ready] h4:not([class]) a[href][data-v-269f87db],[vce-ready] h4:not([class]) a[href][data-v-269f87db]:focus,[vce-ready] h5:not([class]) a[href][data-v-269f87db],[vce-ready] h5:not([class]) a[href][data-v-269f87db]:focus,[vce-ready] p:not([class]) a[href][data-v-269f87db],[vce-ready] p:not([class]) a[href][data-v-269f87db]:focus,#__nuxt [class*=heading-] a[href][data-v-269f87db],#__nuxt [class*=heading-] a[href][data-v-269f87db]:focus,#__nuxt [class*=body-] a[href][data-v-269f87db],#__nuxt [class*=body-] a[href][data-v-269f87db]:focus,#__nuxt h1:not([class]) a[href][data-v-269f87db],#__nuxt h1:not([class]) a[href][data-v-269f87db]:focus,#__nuxt h2:not([class]) a[href][data-v-269f87db],#__nuxt h2:not([class]) a[href][data-v-269f87db]:focus,#__nuxt h3:not([class]) a[href][data-v-269f87db],#__nuxt h3:not([class]) a[href][data-v-269f87db]:focus,#__nuxt h4:not([class]) a[href][data-v-269f87db],#__nuxt h4:not([class]) a[href][data-v-269f87db]:focus,#__nuxt h5:not([class]) a[href][data-v-269f87db],#__nuxt h5:not([class]) a[href][data-v-269f87db]:focus,#__nuxt p:not([class]) a[href][data-v-269f87db],#__nuxt p:not([class]) a[href][data-v-269f87db]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-269f87db]:hover,[vce-ready] [class*=heading-] a[href][data-v-269f87db]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-269f87db]:hover,[vce-ready] [class*=body-] a[href][data-v-269f87db]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] h1:not([class]) a[href][data-v-269f87db]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] h2:not([class]) a[href][data-v-269f87db]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] h3:not([class]) a[href][data-v-269f87db]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] h4:not([class]) a[href][data-v-269f87db]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] h5:not([class]) a[href][data-v-269f87db]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-269f87db]:hover,[vce-ready] p:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-269f87db]:hover,#__nuxt [class*=heading-] a[href][data-v-269f87db]:focus:hover,#__nuxt [class*=body-] a[href][data-v-269f87db]:hover,#__nuxt [class*=body-] a[href][data-v-269f87db]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-269f87db]:hover,#__nuxt h1:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-269f87db]:hover,#__nuxt h2:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-269f87db]:hover,#__nuxt h3:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-269f87db]:hover,#__nuxt h4:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-269f87db]:hover,#__nuxt h5:not([class]) a[href][data-v-269f87db]:focus:hover,#__nuxt p:not([class]) a[href][data-v-269f87db]:hover,#__nuxt p:not([class]) a[href][data-v-269f87db]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-269f87db],[vce-ready] .body--bold[data-v-269f87db],#__nuxt .heading--bold[data-v-269f87db],#__nuxt .body--bold[data-v-269f87db]{font-weight:700}[vce-ready] .heading--regular[data-v-269f87db],[vce-ready] .body--regular[data-v-269f87db],#__nuxt .heading--regular[data-v-269f87db],#__nuxt .body--regular[data-v-269f87db]{font-weight:400}[vce-ready] .heading--light[data-v-269f87db],[vce-ready] .body--light[data-v-269f87db],#__nuxt .heading--light[data-v-269f87db],#__nuxt .body--light[data-v-269f87db]{font-weight:100}[vce-ready] .heading--flush[data-v-269f87db],[vce-ready] .body--flush[data-v-269f87db],#__nuxt .heading--flush[data-v-269f87db],#__nuxt .body--flush[data-v-269f87db]{margin-bottom:0;margin-top:0}.app-container[data-v-269f87db]{margin:0 auto;max-width:90rem;width:100%}.app-container--fullwidth[data-v-269f87db]{max-width:none}.app-row[data-v-269f87db]{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;position:relative}.app-col.reverse[data-v-269f87db]{flex-direction:column-reverse}@media(max-width: 767px){.app-col--default[data-v-269f87db]{margin-left:1rem;margin-right:1rem}.app-col--default.app-col-xs[data-v-269f87db]{flex-grow:1;flex-basis:100%}}@media(max-width: 1024px){.app-col--default-md[data-v-269f87db]{margin-left:1rem;margin-right:1rem}.app-col--default-md.app-col-xs[data-v-269f87db]{flex-grow:1;flex-basis:100%}}@media(max-width: 1439px){.app-col--default-lg[data-v-269f87db]{margin-left:1rem;margin-right:1rem}.app-col--default-lg.app-col-xs[data-v-269f87db]{flex-grow:1;flex-basis:100%}}.app-row-xs--start[data-v-269f87db]{justify-content:flex-start}.app-row-xs--center[data-v-269f87db]{justify-content:center}.app-row-xs--end[data-v-269f87db]{justify-content:flex-end}.app-row-xs--around[data-v-269f87db]{justify-content:space-around}.app-row-xs--between[data-v-269f87db]{justify-content:space-between}.app-row-xs--top[data-v-269f87db]{align-items:flex-start}.app-row-xs--middle[data-v-269f87db]{align-items:center}.app-row-xs--bottom[data-v-269f87db]{align-items:flex-end}.app-row-xs--reverse[data-v-269f87db]{flex-direction:row-reverse}.app-row-xs--wrap[data-v-269f87db]{flex-wrap:wrap}.app-row-xs--nowrap[data-v-269f87db]{flex-wrap:nowrap}.app-col-xs[data-v-269f87db]{flex-basis:0;flex-grow:1;width:100%}.app-col-xs--first[data-v-269f87db]{order:-1}.app-col-xs--last[data-v-269f87db]{order:1}.app-col-xs--origin[data-v-269f87db]{order:0}.app-col-xs--hide[data-v-269f87db]{display:none}.app-col-xs--show[data-v-269f87db]{display:flex}.app-col-xs--show-block[data-v-269f87db]{display:block}.app-col-xs--show-inline-block[data-v-269f87db]{display:inline-block}.app-col-xs-1[data-v-269f87db]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-xs-offset-0[data-v-269f87db]{margin-left:0}.app-col-xs-offset-right-0[data-v-269f87db]{margin-right:0}.app-col-xs-offset-1[data-v-269f87db]{margin-left:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-1[data-v-269f87db]{margin-left:3.75rem}}.app-col-xs-offset-right-1[data-v-269f87db]{margin-right:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-1[data-v-269f87db]{margin-right:3.75rem}}.app-col-xs-2[data-v-269f87db]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}.app-col-xs-offset-2[data-v-269f87db]{margin-left:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-2[data-v-269f87db]{margin-left:7.5rem}}.app-col-xs-offset-right-2[data-v-269f87db]{margin-right:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-2[data-v-269f87db]{margin-right:7.5rem}}.app-col-xs-3[data-v-269f87db]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}.app-col-xs-offset-3[data-v-269f87db]{margin-left:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-3[data-v-269f87db]{margin-left:11.25rem}}.app-col-xs-offset-right-3[data-v-269f87db]{margin-right:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-3[data-v-269f87db]{margin-right:11.25rem}}.app-col-xs-4[data-v-269f87db]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}.app-col-xs-offset-4[data-v-269f87db]{margin-left:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-4[data-v-269f87db]{margin-left:15rem}}.app-col-xs-offset-right-4[data-v-269f87db]{margin-right:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-4[data-v-269f87db]{margin-right:15rem}}.app-col-xs-5[data-v-269f87db]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}.app-col-xs-offset-5[data-v-269f87db]{margin-left:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-5[data-v-269f87db]{margin-left:18.75rem}}.app-col-xs-offset-right-5[data-v-269f87db]{margin-right:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-5[data-v-269f87db]{margin-right:18.75rem}}.app-col-xs-6[data-v-269f87db]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}.app-col-xs-offset-6[data-v-269f87db]{margin-left:25vw}@media(min-width: 1440px){.app-col-xs-offset-6[data-v-269f87db]{margin-left:22.5rem}}.app-col-xs-offset-right-6[data-v-269f87db]{margin-right:25vw}@media(min-width: 1440px){.app-col-xs-offset-right-6[data-v-269f87db]{margin-right:22.5rem}}.app-col-xs-7[data-v-269f87db]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}.app-col-xs-offset-7[data-v-269f87db]{margin-left:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-7[data-v-269f87db]{margin-left:26.25rem}}.app-col-xs-offset-right-7[data-v-269f87db]{margin-right:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-7[data-v-269f87db]{margin-right:26.25rem}}.app-col-xs-8[data-v-269f87db]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}.app-col-xs-offset-8[data-v-269f87db]{margin-left:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-8[data-v-269f87db]{margin-left:30rem}}.app-col-xs-offset-right-8[data-v-269f87db]{margin-right:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-8[data-v-269f87db]{margin-right:30rem}}.app-col-xs-9[data-v-269f87db]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}.app-col-xs-offset-9[data-v-269f87db]{margin-left:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-9[data-v-269f87db]{margin-left:33.75rem}}.app-col-xs-offset-right-9[data-v-269f87db]{margin-right:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-9[data-v-269f87db]{margin-right:33.75rem}}.app-col-xs-10[data-v-269f87db]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}.app-col-xs-offset-10[data-v-269f87db]{margin-left:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-10[data-v-269f87db]{margin-left:37.5rem}}.app-col-xs-offset-right-10[data-v-269f87db]{margin-right:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-10[data-v-269f87db]{margin-right:37.5rem}}.app-col-xs-11[data-v-269f87db]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}.app-col-xs-offset-11[data-v-269f87db]{margin-left:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-11[data-v-269f87db]{margin-left:41.25rem}}.app-col-xs-offset-right-11[data-v-269f87db]{margin-right:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-11[data-v-269f87db]{margin-right:41.25rem}}.app-col-xs-12[data-v-269f87db]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}.app-col-xs-offset-12[data-v-269f87db]{margin-left:50vw}@media(min-width: 1440px){.app-col-xs-offset-12[data-v-269f87db]{margin-left:45rem}}.app-col-xs-offset-right-12[data-v-269f87db]{margin-right:50vw}@media(min-width: 1440px){.app-col-xs-offset-right-12[data-v-269f87db]{margin-right:45rem}}.app-col-xs-13[data-v-269f87db]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}.app-col-xs-offset-13[data-v-269f87db]{margin-left:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-13[data-v-269f87db]{margin-left:48.75rem}}.app-col-xs-offset-right-13[data-v-269f87db]{margin-right:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-13[data-v-269f87db]{margin-right:48.75rem}}.app-col-xs-14[data-v-269f87db]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}.app-col-xs-offset-14[data-v-269f87db]{margin-left:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-14[data-v-269f87db]{margin-left:52.5rem}}.app-col-xs-offset-right-14[data-v-269f87db]{margin-right:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-14[data-v-269f87db]{margin-right:52.5rem}}.app-col-xs-15[data-v-269f87db]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}.app-col-xs-offset-15[data-v-269f87db]{margin-left:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-15[data-v-269f87db]{margin-left:56.25rem}}.app-col-xs-offset-right-15[data-v-269f87db]{margin-right:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-15[data-v-269f87db]{margin-right:56.25rem}}.app-col-xs-16[data-v-269f87db]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}.app-col-xs-offset-16[data-v-269f87db]{margin-left:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-16[data-v-269f87db]{margin-left:60rem}}.app-col-xs-offset-right-16[data-v-269f87db]{margin-right:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-16[data-v-269f87db]{margin-right:60rem}}.app-col-xs-17[data-v-269f87db]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}.app-col-xs-offset-17[data-v-269f87db]{margin-left:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-17[data-v-269f87db]{margin-left:63.75rem}}.app-col-xs-offset-right-17[data-v-269f87db]{margin-right:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-17[data-v-269f87db]{margin-right:63.75rem}}.app-col-xs-18[data-v-269f87db]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}.app-col-xs-offset-18[data-v-269f87db]{margin-left:75vw}@media(min-width: 1440px){.app-col-xs-offset-18[data-v-269f87db]{margin-left:67.5rem}}.app-col-xs-offset-right-18[data-v-269f87db]{margin-right:75vw}@media(min-width: 1440px){.app-col-xs-offset-right-18[data-v-269f87db]{margin-right:67.5rem}}.app-col-xs-19[data-v-269f87db]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}.app-col-xs-offset-19[data-v-269f87db]{margin-left:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-19[data-v-269f87db]{margin-left:71.25rem}}.app-col-xs-offset-right-19[data-v-269f87db]{margin-right:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-19[data-v-269f87db]{margin-right:71.25rem}}.app-col-xs-20[data-v-269f87db]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}.app-col-xs-offset-20[data-v-269f87db]{margin-left:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-20[data-v-269f87db]{margin-left:75rem}}.app-col-xs-offset-right-20[data-v-269f87db]{margin-right:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-20[data-v-269f87db]{margin-right:75rem}}.app-col-xs-21[data-v-269f87db]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}.app-col-xs-offset-21[data-v-269f87db]{margin-left:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-21[data-v-269f87db]{margin-left:78.75rem}}.app-col-xs-offset-right-21[data-v-269f87db]{margin-right:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-21[data-v-269f87db]{margin-right:78.75rem}}.app-col-xs-22[data-v-269f87db]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}.app-col-xs-offset-22[data-v-269f87db]{margin-left:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-22[data-v-269f87db]{margin-left:82.5rem}}.app-col-xs-offset-right-22[data-v-269f87db]{margin-right:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-22[data-v-269f87db]{margin-right:82.5rem}}.app-col-xs-23[data-v-269f87db]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}.app-col-xs-offset-23[data-v-269f87db]{margin-left:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-23[data-v-269f87db]{margin-left:86.25rem}}.app-col-xs-offset-right-23[data-v-269f87db]{margin-right:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-23[data-v-269f87db]{margin-right:86.25rem}}.app-col-xs-24[data-v-269f87db]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}.app-col-xs-offset-24[data-v-269f87db]{margin-left:100vw}@media(min-width: 1440px){.app-col-xs-offset-24[data-v-269f87db]{margin-left:90rem}}.app-col-xs-offset-right-24[data-v-269f87db]{margin-right:100vw}@media(min-width: 1440px){.app-col-xs-offset-right-24[data-v-269f87db]{margin-right:90rem}}.app-col--default.app-col-xs-fit[data-v-269f87db],.app-col-xs-fit[data-v-269f87db]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}.app-col--default.app-col-xs-fill[data-v-269f87db],.app-col-xs-fill[data-v-269f87db]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}.app-spacer-xs-0[data-v-269f87db]{height:0rem}.app-spacer-xs-4[data-v-269f87db]{height:.25rem}.app-spacer-xs-8[data-v-269f87db]{height:.5rem}.app-spacer-xs-16[data-v-269f87db]{height:1rem}.app-spacer-xs-24[data-v-269f87db]{height:1.5rem}.app-spacer-xs-32[data-v-269f87db]{height:2rem}.app-spacer-xs-40[data-v-269f87db]{height:2.5rem}.app-spacer-xs-60[data-v-269f87db]{height:3.75rem}.app-spacer-xs-64[data-v-269f87db]{height:4rem}.app-spacer-xs-80[data-v-269f87db]{height:5rem}.app-spacer-xs-120[data-v-269f87db]{height:7.5rem}.app-spacer-xs-180[data-v-269f87db]{height:11.25rem}.-hide-xs[data-v-269f87db]{display:none !important}.-show-xs[data-v-269f87db]{display:unset !important}.-nowrap-xs[data-v-269f87db]{white-space:nowrap}.-wrap-xs[data-v-269f87db]{white-space:normal}@media(min-width: 768px){.app-row-md--start[data-v-269f87db]{justify-content:flex-start}.app-row-md--center[data-v-269f87db]{justify-content:center}.app-row-md--end[data-v-269f87db]{justify-content:flex-end}.app-row-md--around[data-v-269f87db]{justify-content:space-around}.app-row-md--between[data-v-269f87db]{justify-content:space-between}.app-row-md--top[data-v-269f87db]{align-items:flex-start}.app-row-md--middle[data-v-269f87db]{align-items:center}.app-row-md--bottom[data-v-269f87db]{align-items:flex-end}.app-row-md--reverse[data-v-269f87db]{flex-direction:row-reverse}.app-row-md--wrap[data-v-269f87db]{flex-wrap:wrap}.app-row-md--nowrap[data-v-269f87db]{flex-wrap:nowrap}.app-col-md[data-v-269f87db]{flex-basis:0;flex-grow:1;width:100%}.app-col-md--first[data-v-269f87db]{order:-1}.app-col-md--last[data-v-269f87db]{order:1}.app-col-md--origin[data-v-269f87db]{order:0}.app-col-md--hide[data-v-269f87db]{display:none}.app-col-md--show[data-v-269f87db]{display:flex}.app-col-md--show-block[data-v-269f87db]{display:block}.app-col-md--show-inline-block[data-v-269f87db]{display:inline-block}.app-col-md-1[data-v-269f87db]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-md-offset-0[data-v-269f87db]{margin-left:0}.app-col-md-offset-right-0[data-v-269f87db]{margin-right:0}.app-col-md-offset-1[data-v-269f87db]{margin-left:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-1[data-v-269f87db]{margin-left:3.75rem}}@media(min-width: 768px){.app-col-md-offset-right-1[data-v-269f87db]{margin-right:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-1[data-v-269f87db]{margin-right:3.75rem}}@media(min-width: 768px){.app-col-md-2[data-v-269f87db]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 768px){.app-col-md-offset-2[data-v-269f87db]{margin-left:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-2[data-v-269f87db]{margin-left:7.5rem}}@media(min-width: 768px){.app-col-md-offset-right-2[data-v-269f87db]{margin-right:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-2[data-v-269f87db]{margin-right:7.5rem}}@media(min-width: 768px){.app-col-md-3[data-v-269f87db]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 768px){.app-col-md-offset-3[data-v-269f87db]{margin-left:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-3[data-v-269f87db]{margin-left:11.25rem}}@media(min-width: 768px){.app-col-md-offset-right-3[data-v-269f87db]{margin-right:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-3[data-v-269f87db]{margin-right:11.25rem}}@media(min-width: 768px){.app-col-md-4[data-v-269f87db]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 768px){.app-col-md-offset-4[data-v-269f87db]{margin-left:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-4[data-v-269f87db]{margin-left:15rem}}@media(min-width: 768px){.app-col-md-offset-right-4[data-v-269f87db]{margin-right:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-4[data-v-269f87db]{margin-right:15rem}}@media(min-width: 768px){.app-col-md-5[data-v-269f87db]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 768px){.app-col-md-offset-5[data-v-269f87db]{margin-left:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-5[data-v-269f87db]{margin-left:18.75rem}}@media(min-width: 768px){.app-col-md-offset-right-5[data-v-269f87db]{margin-right:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-5[data-v-269f87db]{margin-right:18.75rem}}@media(min-width: 768px){.app-col-md-6[data-v-269f87db]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 768px){.app-col-md-offset-6[data-v-269f87db]{margin-left:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-6[data-v-269f87db]{margin-left:22.5rem}}@media(min-width: 768px){.app-col-md-offset-right-6[data-v-269f87db]{margin-right:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-6[data-v-269f87db]{margin-right:22.5rem}}@media(min-width: 768px){.app-col-md-7[data-v-269f87db]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 768px){.app-col-md-offset-7[data-v-269f87db]{margin-left:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-7[data-v-269f87db]{margin-left:26.25rem}}@media(min-width: 768px){.app-col-md-offset-right-7[data-v-269f87db]{margin-right:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-7[data-v-269f87db]{margin-right:26.25rem}}@media(min-width: 768px){.app-col-md-8[data-v-269f87db]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 768px){.app-col-md-offset-8[data-v-269f87db]{margin-left:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-8[data-v-269f87db]{margin-left:30rem}}@media(min-width: 768px){.app-col-md-offset-right-8[data-v-269f87db]{margin-right:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-8[data-v-269f87db]{margin-right:30rem}}@media(min-width: 768px){.app-col-md-9[data-v-269f87db]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 768px){.app-col-md-offset-9[data-v-269f87db]{margin-left:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-9[data-v-269f87db]{margin-left:33.75rem}}@media(min-width: 768px){.app-col-md-offset-right-9[data-v-269f87db]{margin-right:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-9[data-v-269f87db]{margin-right:33.75rem}}@media(min-width: 768px){.app-col-md-10[data-v-269f87db]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 768px){.app-col-md-offset-10[data-v-269f87db]{margin-left:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-10[data-v-269f87db]{margin-left:37.5rem}}@media(min-width: 768px){.app-col-md-offset-right-10[data-v-269f87db]{margin-right:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-10[data-v-269f87db]{margin-right:37.5rem}}@media(min-width: 768px){.app-col-md-11[data-v-269f87db]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 768px){.app-col-md-offset-11[data-v-269f87db]{margin-left:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-11[data-v-269f87db]{margin-left:41.25rem}}@media(min-width: 768px){.app-col-md-offset-right-11[data-v-269f87db]{margin-right:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-11[data-v-269f87db]{margin-right:41.25rem}}@media(min-width: 768px){.app-col-md-12[data-v-269f87db]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 768px){.app-col-md-offset-12[data-v-269f87db]{margin-left:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-12[data-v-269f87db]{margin-left:45rem}}@media(min-width: 768px){.app-col-md-offset-right-12[data-v-269f87db]{margin-right:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-12[data-v-269f87db]{margin-right:45rem}}@media(min-width: 768px){.app-col-md-13[data-v-269f87db]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 768px){.app-col-md-offset-13[data-v-269f87db]{margin-left:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-13[data-v-269f87db]{margin-left:48.75rem}}@media(min-width: 768px){.app-col-md-offset-right-13[data-v-269f87db]{margin-right:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-13[data-v-269f87db]{margin-right:48.75rem}}@media(min-width: 768px){.app-col-md-14[data-v-269f87db]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 768px){.app-col-md-offset-14[data-v-269f87db]{margin-left:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-14[data-v-269f87db]{margin-left:52.5rem}}@media(min-width: 768px){.app-col-md-offset-right-14[data-v-269f87db]{margin-right:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-14[data-v-269f87db]{margin-right:52.5rem}}@media(min-width: 768px){.app-col-md-15[data-v-269f87db]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 768px){.app-col-md-offset-15[data-v-269f87db]{margin-left:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-15[data-v-269f87db]{margin-left:56.25rem}}@media(min-width: 768px){.app-col-md-offset-right-15[data-v-269f87db]{margin-right:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-15[data-v-269f87db]{margin-right:56.25rem}}@media(min-width: 768px){.app-col-md-16[data-v-269f87db]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 768px){.app-col-md-offset-16[data-v-269f87db]{margin-left:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-16[data-v-269f87db]{margin-left:60rem}}@media(min-width: 768px){.app-col-md-offset-right-16[data-v-269f87db]{margin-right:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-16[data-v-269f87db]{margin-right:60rem}}@media(min-width: 768px){.app-col-md-17[data-v-269f87db]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 768px){.app-col-md-offset-17[data-v-269f87db]{margin-left:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-17[data-v-269f87db]{margin-left:63.75rem}}@media(min-width: 768px){.app-col-md-offset-right-17[data-v-269f87db]{margin-right:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-17[data-v-269f87db]{margin-right:63.75rem}}@media(min-width: 768px){.app-col-md-18[data-v-269f87db]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 768px){.app-col-md-offset-18[data-v-269f87db]{margin-left:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-18[data-v-269f87db]{margin-left:67.5rem}}@media(min-width: 768px){.app-col-md-offset-right-18[data-v-269f87db]{margin-right:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-18[data-v-269f87db]{margin-right:67.5rem}}@media(min-width: 768px){.app-col-md-19[data-v-269f87db]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 768px){.app-col-md-offset-19[data-v-269f87db]{margin-left:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-19[data-v-269f87db]{margin-left:71.25rem}}@media(min-width: 768px){.app-col-md-offset-right-19[data-v-269f87db]{margin-right:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-19[data-v-269f87db]{margin-right:71.25rem}}@media(min-width: 768px){.app-col-md-20[data-v-269f87db]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 768px){.app-col-md-offset-20[data-v-269f87db]{margin-left:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-20[data-v-269f87db]{margin-left:75rem}}@media(min-width: 768px){.app-col-md-offset-right-20[data-v-269f87db]{margin-right:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-20[data-v-269f87db]{margin-right:75rem}}@media(min-width: 768px){.app-col-md-21[data-v-269f87db]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 768px){.app-col-md-offset-21[data-v-269f87db]{margin-left:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-21[data-v-269f87db]{margin-left:78.75rem}}@media(min-width: 768px){.app-col-md-offset-right-21[data-v-269f87db]{margin-right:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-21[data-v-269f87db]{margin-right:78.75rem}}@media(min-width: 768px){.app-col-md-22[data-v-269f87db]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 768px){.app-col-md-offset-22[data-v-269f87db]{margin-left:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-22[data-v-269f87db]{margin-left:82.5rem}}@media(min-width: 768px){.app-col-md-offset-right-22[data-v-269f87db]{margin-right:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-22[data-v-269f87db]{margin-right:82.5rem}}@media(min-width: 768px){.app-col-md-23[data-v-269f87db]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 768px){.app-col-md-offset-23[data-v-269f87db]{margin-left:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-23[data-v-269f87db]{margin-left:86.25rem}}@media(min-width: 768px){.app-col-md-offset-right-23[data-v-269f87db]{margin-right:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-23[data-v-269f87db]{margin-right:86.25rem}}@media(min-width: 768px){.app-col-md-24[data-v-269f87db]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 768px){.app-col-md-offset-24[data-v-269f87db]{margin-left:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-24[data-v-269f87db]{margin-left:90rem}}@media(min-width: 768px){.app-col-md-offset-right-24[data-v-269f87db]{margin-right:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-24[data-v-269f87db]{margin-right:90rem}}@media(min-width: 768px){.app-col--default.app-col-md-fit[data-v-269f87db],.app-col-md-fit[data-v-269f87db]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-col--default.app-col-md-fill[data-v-269f87db],.app-col-md-fill[data-v-269f87db]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-spacer-md-0[data-v-269f87db]{height:0rem}}@media(min-width: 768px){.app-spacer-md-4[data-v-269f87db]{height:.25rem}}@media(min-width: 768px){.app-spacer-md-8[data-v-269f87db]{height:.5rem}}@media(min-width: 768px){.app-spacer-md-16[data-v-269f87db]{height:1rem}}@media(min-width: 768px){.app-spacer-md-24[data-v-269f87db]{height:1.5rem}}@media(min-width: 768px){.app-spacer-md-32[data-v-269f87db]{height:2rem}}@media(min-width: 768px){.app-spacer-md-40[data-v-269f87db]{height:2.5rem}}@media(min-width: 768px){.app-spacer-md-60[data-v-269f87db]{height:3.75rem}}@media(min-width: 768px){.app-spacer-md-64[data-v-269f87db]{height:4rem}}@media(min-width: 768px){.app-spacer-md-80[data-v-269f87db]{height:5rem}}@media(min-width: 768px){.app-spacer-md-120[data-v-269f87db]{height:7.5rem}}@media(min-width: 768px){.app-spacer-md-180[data-v-269f87db]{height:11.25rem}}@media(min-width: 768px){.-hide-md[data-v-269f87db]{display:none !important}}@media(min-width: 768px){.-show-md[data-v-269f87db]{display:unset !important}}@media(min-width: 768px){.-nowrap-md[data-v-269f87db]{white-space:nowrap}}@media(min-width: 768px){.-wrap-md[data-v-269f87db]{white-space:normal}}@media(min-width: 1025px){.app-row-lg--start[data-v-269f87db]{justify-content:flex-start}.app-row-lg--center[data-v-269f87db]{justify-content:center}.app-row-lg--end[data-v-269f87db]{justify-content:flex-end}.app-row-lg--around[data-v-269f87db]{justify-content:space-around}.app-row-lg--between[data-v-269f87db]{justify-content:space-between}.app-row-lg--top[data-v-269f87db]{align-items:flex-start}.app-row-lg--middle[data-v-269f87db]{align-items:center}.app-row-lg--bottom[data-v-269f87db]{align-items:flex-end}.app-row-lg--reverse[data-v-269f87db]{flex-direction:row-reverse}.app-row-lg--wrap[data-v-269f87db]{flex-wrap:wrap}.app-row-lg--nowrap[data-v-269f87db]{flex-wrap:nowrap}.app-col-lg[data-v-269f87db]{flex-basis:0;flex-grow:1;width:100%}.app-col-lg--first[data-v-269f87db]{order:-1}.app-col-lg--last[data-v-269f87db]{order:1}.app-col-lg--origin[data-v-269f87db]{order:0}.app-col-lg--hide[data-v-269f87db]{display:none}.app-col-lg--show[data-v-269f87db]{display:flex}.app-col-lg--show-block[data-v-269f87db]{display:block}.app-col-lg--show-inline-block[data-v-269f87db]{display:inline-block}.app-col-lg-1[data-v-269f87db]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-lg-offset-0[data-v-269f87db]{margin-left:0}.app-col-lg-offset-right-0[data-v-269f87db]{margin-right:0}.app-col-lg-offset-1[data-v-269f87db]{margin-left:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-1[data-v-269f87db]{margin-left:3.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-1[data-v-269f87db]{margin-right:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-1[data-v-269f87db]{margin-right:3.75rem}}@media(min-width: 1025px){.app-col-lg-2[data-v-269f87db]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-2[data-v-269f87db]{margin-left:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-2[data-v-269f87db]{margin-left:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-2[data-v-269f87db]{margin-right:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-2[data-v-269f87db]{margin-right:7.5rem}}@media(min-width: 1025px){.app-col-lg-3[data-v-269f87db]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-3[data-v-269f87db]{margin-left:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-3[data-v-269f87db]{margin-left:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-3[data-v-269f87db]{margin-right:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-3[data-v-269f87db]{margin-right:11.25rem}}@media(min-width: 1025px){.app-col-lg-4[data-v-269f87db]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 1025px){.app-col-lg-offset-4[data-v-269f87db]{margin-left:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-4[data-v-269f87db]{margin-left:15rem}}@media(min-width: 1025px){.app-col-lg-offset-right-4[data-v-269f87db]{margin-right:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-4[data-v-269f87db]{margin-right:15rem}}@media(min-width: 1025px){.app-col-lg-5[data-v-269f87db]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-5[data-v-269f87db]{margin-left:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-5[data-v-269f87db]{margin-left:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-5[data-v-269f87db]{margin-right:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-5[data-v-269f87db]{margin-right:18.75rem}}@media(min-width: 1025px){.app-col-lg-6[data-v-269f87db]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-6[data-v-269f87db]{margin-left:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-6[data-v-269f87db]{margin-left:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-6[data-v-269f87db]{margin-right:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-6[data-v-269f87db]{margin-right:22.5rem}}@media(min-width: 1025px){.app-col-lg-7[data-v-269f87db]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-7[data-v-269f87db]{margin-left:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-7[data-v-269f87db]{margin-left:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-7[data-v-269f87db]{margin-right:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-7[data-v-269f87db]{margin-right:26.25rem}}@media(min-width: 1025px){.app-col-lg-8[data-v-269f87db]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 1025px){.app-col-lg-offset-8[data-v-269f87db]{margin-left:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-8[data-v-269f87db]{margin-left:30rem}}@media(min-width: 1025px){.app-col-lg-offset-right-8[data-v-269f87db]{margin-right:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-8[data-v-269f87db]{margin-right:30rem}}@media(min-width: 1025px){.app-col-lg-9[data-v-269f87db]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-9[data-v-269f87db]{margin-left:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-9[data-v-269f87db]{margin-left:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-9[data-v-269f87db]{margin-right:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-9[data-v-269f87db]{margin-right:33.75rem}}@media(min-width: 1025px){.app-col-lg-10[data-v-269f87db]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-10[data-v-269f87db]{margin-left:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-10[data-v-269f87db]{margin-left:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-10[data-v-269f87db]{margin-right:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-10[data-v-269f87db]{margin-right:37.5rem}}@media(min-width: 1025px){.app-col-lg-11[data-v-269f87db]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-11[data-v-269f87db]{margin-left:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-11[data-v-269f87db]{margin-left:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-11[data-v-269f87db]{margin-right:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-11[data-v-269f87db]{margin-right:41.25rem}}@media(min-width: 1025px){.app-col-lg-12[data-v-269f87db]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 1025px){.app-col-lg-offset-12[data-v-269f87db]{margin-left:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-12[data-v-269f87db]{margin-left:45rem}}@media(min-width: 1025px){.app-col-lg-offset-right-12[data-v-269f87db]{margin-right:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-12[data-v-269f87db]{margin-right:45rem}}@media(min-width: 1025px){.app-col-lg-13[data-v-269f87db]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-13[data-v-269f87db]{margin-left:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-13[data-v-269f87db]{margin-left:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-13[data-v-269f87db]{margin-right:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-13[data-v-269f87db]{margin-right:48.75rem}}@media(min-width: 1025px){.app-col-lg-14[data-v-269f87db]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-14[data-v-269f87db]{margin-left:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-14[data-v-269f87db]{margin-left:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-14[data-v-269f87db]{margin-right:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-14[data-v-269f87db]{margin-right:52.5rem}}@media(min-width: 1025px){.app-col-lg-15[data-v-269f87db]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-15[data-v-269f87db]{margin-left:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-15[data-v-269f87db]{margin-left:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-15[data-v-269f87db]{margin-right:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-15[data-v-269f87db]{margin-right:56.25rem}}@media(min-width: 1025px){.app-col-lg-16[data-v-269f87db]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 1025px){.app-col-lg-offset-16[data-v-269f87db]{margin-left:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-16[data-v-269f87db]{margin-left:60rem}}@media(min-width: 1025px){.app-col-lg-offset-right-16[data-v-269f87db]{margin-right:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-16[data-v-269f87db]{margin-right:60rem}}@media(min-width: 1025px){.app-col-lg-17[data-v-269f87db]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-17[data-v-269f87db]{margin-left:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-17[data-v-269f87db]{margin-left:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-17[data-v-269f87db]{margin-right:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-17[data-v-269f87db]{margin-right:63.75rem}}@media(min-width: 1025px){.app-col-lg-18[data-v-269f87db]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-18[data-v-269f87db]{margin-left:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-18[data-v-269f87db]{margin-left:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-18[data-v-269f87db]{margin-right:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-18[data-v-269f87db]{margin-right:67.5rem}}@media(min-width: 1025px){.app-col-lg-19[data-v-269f87db]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-19[data-v-269f87db]{margin-left:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-19[data-v-269f87db]{margin-left:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-19[data-v-269f87db]{margin-right:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-19[data-v-269f87db]{margin-right:71.25rem}}@media(min-width: 1025px){.app-col-lg-20[data-v-269f87db]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 1025px){.app-col-lg-offset-20[data-v-269f87db]{margin-left:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-20[data-v-269f87db]{margin-left:75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-20[data-v-269f87db]{margin-right:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-20[data-v-269f87db]{margin-right:75rem}}@media(min-width: 1025px){.app-col-lg-21[data-v-269f87db]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-21[data-v-269f87db]{margin-left:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-21[data-v-269f87db]{margin-left:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-21[data-v-269f87db]{margin-right:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-21[data-v-269f87db]{margin-right:78.75rem}}@media(min-width: 1025px){.app-col-lg-22[data-v-269f87db]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-22[data-v-269f87db]{margin-left:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-22[data-v-269f87db]{margin-left:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-22[data-v-269f87db]{margin-right:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-22[data-v-269f87db]{margin-right:82.5rem}}@media(min-width: 1025px){.app-col-lg-23[data-v-269f87db]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-23[data-v-269f87db]{margin-left:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-23[data-v-269f87db]{margin-left:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-23[data-v-269f87db]{margin-right:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-23[data-v-269f87db]{margin-right:86.25rem}}@media(min-width: 1025px){.app-col-lg-24[data-v-269f87db]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 1025px){.app-col-lg-offset-24[data-v-269f87db]{margin-left:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-24[data-v-269f87db]{margin-left:90rem}}@media(min-width: 1025px){.app-col-lg-offset-right-24[data-v-269f87db]{margin-right:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-24[data-v-269f87db]{margin-right:90rem}}@media(min-width: 1025px){.app-col--default.app-col-lg-fit[data-v-269f87db],.app-col-lg-fit[data-v-269f87db]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-col--default.app-col-lg-fill[data-v-269f87db],.app-col-lg-fill[data-v-269f87db]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-spacer-lg-0[data-v-269f87db]{height:0rem}}@media(min-width: 1025px){.app-spacer-lg-4[data-v-269f87db]{height:.25rem}}@media(min-width: 1025px){.app-spacer-lg-8[data-v-269f87db]{height:.5rem}}@media(min-width: 1025px){.app-spacer-lg-16[data-v-269f87db]{height:1rem}}@media(min-width: 1025px){.app-spacer-lg-24[data-v-269f87db]{height:1.5rem}}@media(min-width: 1025px){.app-spacer-lg-32[data-v-269f87db]{height:2rem}}@media(min-width: 1025px){.app-spacer-lg-40[data-v-269f87db]{height:2.5rem}}@media(min-width: 1025px){.app-spacer-lg-60[data-v-269f87db]{height:3.75rem}}@media(min-width: 1025px){.app-spacer-lg-64[data-v-269f87db]{height:4rem}}@media(min-width: 1025px){.app-spacer-lg-80[data-v-269f87db]{height:5rem}}@media(min-width: 1025px){.app-spacer-lg-120[data-v-269f87db]{height:7.5rem}}@media(min-width: 1025px){.app-spacer-lg-180[data-v-269f87db]{height:11.25rem}}@media(min-width: 1025px){.-hide-lg[data-v-269f87db]{display:none !important}}@media(min-width: 1025px){.-show-lg[data-v-269f87db]{display:unset !important}}@media(min-width: 1025px){.-nowrap-lg[data-v-269f87db]{white-space:nowrap}}@media(min-width: 1025px){.-wrap-lg[data-v-269f87db]{white-space:normal}}span[nowrap][data-v-269f87db],span.nowrap[data-v-269f87db]{white-space:nowrap}@media(max-width: 767px){br[\\@md][data-v-269f87db]{display:none}}@media(max-width: 1024px){br[\\@lg][data-v-269f87db]{display:none}}.link[data-v-269f87db]{color:#08428d;font-weight:bold;text-decoration:none}.anchor[data-v-269f87db]{max-width:100%}.anchor-nav[data-v-269f87db]{align-items:center;background-color:#fff;display:flex;flex-direction:row;height:5rem;overflow-x:auto;position:-webkit-sticky;position:sticky;scroll-behavior:smooth;top:0;width:100%;z-index:1}.anchor-nav[data-v-269f87db]::before,.anchor-nav[data-v-269f87db]::after{content:"";flex:1}@media(min-width: 768px){.anchor-nav[data-v-269f87db]{justify-content:center}}.anchor-list[data-v-269f87db]{padding:0;list-style:none;white-space:nowrap}.anchor-list-item[data-v-269f87db]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;margin-left:8.3333333333vw}.anchor-list-item[data-v-269f87db]:first-of-type{margin-left:8.3333333333vw}@media(min-width: 768px){.anchor-list-item[data-v-269f87db]:first-of-type{margin-left:4.1666666667vw}}@media(min-width: 1440px){.anchor-list-item[data-v-269f87db]:first-of-type{margin-left:3.75rem}}.anchor-list-item[data-v-269f87db]:last-of-type{margin-right:8.3333333333vw}@media(min-width: 768px){.anchor-list-item[data-v-269f87db]:last-of-type{margin-right:4.1666666667vw}}@media(min-width: 1440px){.anchor-list-item[data-v-269f87db]:last-of-type{margin-right:3.75rem}}@media(min-width: 1440px){.anchor-list-item[data-v-269f87db]{margin-left:3.75rem}}.anchor-list-item a[data-v-269f87db]{color:#1e2430;text-decoration:none}.anchor-list-item.active[data-v-269f87db]{border-bottom:1px solid #000}.anchor-list-item.active a[data-v-269f87db]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}.anchor-section[data-v-269f87db]{position:relative}.anchor-section+.anchor-section[data-v-269f87db]{margin-top:2rem}.offset-anchor[data-v-269f87db]{display:block;left:0;position:absolute;top:-5rem;visibility:hidden;width:0}.selected-text[data-v-269f87db]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}', ""]), c.locals = {}, t.exports = c
        },
        713: function(t, e, d) {
            "use strict";
            d.r(e);
            d(608), d(38), d(15), d(77), d(54), d(33);
            var c = {
                    data: function() {
                        return {
                            activeIndex: 0,
                            isScrolling: !1
                        }
                    },
                    props: {
                        sections: {
                            type: Array,
                            required: !1
                        }
                    },
                    methods: {
                        doNavItemClick: function(t) {
                            t && this.$nuxt.$emit("navHeaderCancelShow", !0)
                        },
                        handleScroll: function(t) {
                            var e = this,
                                d = this.$refs.anchorSection.slice().sort((function(a, b) {
                                    return e.percentInView(b) - e.percentInView(a)
                                }))[0];
                            d && (this.activeIndex = this.$refs.anchorSection.indexOf(d)), this.isScrolling = !0
                        },
                        noWhiteSpace: function(t) {
                            return t.replace(" ", "")
                        },
                        percentInView: function(t) {
                            var e = t.getBoundingClientRect(),
                                d = e.top,
                                c = e.height;
                            return d > 0 ? Math.min(1, (window.innerHeight - d) / c) : (c + d) / c
                        }
                    },
                    watch: {
                        activeIndex: function(t) {
                            if (!1 === this.isScrolling) {
                                var e = Array.from(this.$refs.anchorNav.querySelectorAll(".anchor-list-item"))[t].getBoundingClientRect().left;
                                e && (this.$refs.anchorNav.scrollLeft = this.$refs.anchorNav.scrollLeft + e - 20), this.isScrolling = !0
                            }
                        }
                    }
                },
                n = (d(707), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        directives: [{
                            name: "scroll",
                            rawName: "v-scroll",
                            value: t.handleScroll,
                            expression: "handleScroll"
                        }],
                        staticClass: "anchor"
                    }, [e("nav", {
                        ref: "anchorNav",
                        staticClass: "anchor-nav app-container app-container--fullwidth",
                        attrs: {
                            "aria-label": "In-page navigation"
                        }
                    }, [e("ul", {
                        staticClass: "anchor-list app-row app-row-xs--nowrap"
                    }, t._l(t.sections, (function(d, i) {
                        return e("li", {
                            key: d + i,
                            staticClass: "anchor-list-item",
                            class: {
                                active: i === t.activeIndex
                            }
                        }, [d.href ? e("a", {
                            attrs: {
                                href: d.href,
                                "aria-current": i === t.activeIndex
                            }
                        }, [i === t.activeIndex ? e("span", {
                            staticClass: "selected-text"
                        }, [t._v("\n            Selected:\n          ")]) : t._e(), t._v("\n          " + t._s(d.cta) + "\n        ")]) : e("a", {
                            attrs: {
                                href: "#" + t.noWhiteSpace(d),
                                "aria-current": i === t.activeIndex
                            },
                            on: {
                                click: t.doNavItemClick
                            }
                        }, [i === t.activeIndex ? e("span", {
                            staticClass: "selected-text"
                        }, [t._v("\n            Selected:\n          ")]) : t._e(), t._v("\n          " + t._s(d) + "\n        ")])])
                    })), 0)]), t._v(" "), e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 16,
                                md: 24
                            }
                        }
                    }), t._v(" "), t._l(t.sections, (function(d, i) {
                        return "string" == typeof d ? e("div", {
                            key: d + i,
                            ref: "anchorSection",
                            refInFor: !0,
                            staticClass: "anchor-section"
                        }, [e("a", {
                            staticClass: "offset-anchor",
                            attrs: {
                                id: t.noWhiteSpace(d)
                            }
                        }), t._v(" "), t._t(d)], 2) : t._e()
                    }))], 2)
                }), [], !1, null, "269f87db", null);
            e.default = component.exports;
            installComponents(component, {
                Spacer: d(59).default
            })
        },
        717: function(t, e, d) {
            "use strict";
            e.a = {
                props: {
                    portalName: {
                        type: String,
                        default: null
                    }
                },
                computed: {
                    $portalName: function() {
                        return this.portalName && "string" == typeof this.portalName && "" !== this.portalName ? this.portalName : "internal-portal-".concat(this._uid)
                    }
                }
            }
        },
        726: function(t, e, d) {
            var content = d(779);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("68626fa1", content, !0, {
                sourceMap: !1
            })
        },
        735: function(t, e, d) {
            var content = d(800);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("d9c74010", content, !0, {
                sourceMap: !1
            })
        },
        736: function(t, e, d) {
            var content = d(802);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("3534abf6", content, !0, {
                sourceMap: !1
            })
        },
        737: function(t, e, d) {
            var content = d(804);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("52bd8244", content, !0, {
                sourceMap: !1
            })
        },
        778: function(t, e, d) {
            "use strict";
            d(726)
        },
        779: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-3cf6767a]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-3cf6767a]:not([class]),[vce-ready] .heading-1[data-v-3cf6767a],#__nuxt h1[data-v-3cf6767a]:not([class]),#__nuxt .heading-1[data-v-3cf6767a]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-3cf6767a]:not([class]),[vce-ready] .heading-1[data-v-3cf6767a],#__nuxt h1[data-v-3cf6767a]:not([class]),#__nuxt .heading-1[data-v-3cf6767a]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-3cf6767a]:not([class]),[vce-ready] .heading-1[data-v-3cf6767a],#__nuxt h1[data-v-3cf6767a]:not([class]),#__nuxt .heading-1[data-v-3cf6767a]{font-size:64px}}[vce-ready] h2[data-v-3cf6767a]:not([class]),[vce-ready] .heading-2[data-v-3cf6767a],#__nuxt h2[data-v-3cf6767a]:not([class]),#__nuxt .heading-2[data-v-3cf6767a]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-3cf6767a]:not([class]),[vce-ready] .heading-2[data-v-3cf6767a],#__nuxt h2[data-v-3cf6767a]:not([class]),#__nuxt .heading-2[data-v-3cf6767a]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-3cf6767a]:not([class]),[vce-ready] .heading-2[data-v-3cf6767a],#__nuxt h2[data-v-3cf6767a]:not([class]),#__nuxt .heading-2[data-v-3cf6767a]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-3cf6767a]:not([class]),[vce-ready] .heading-2[data-v-3cf6767a],#__nuxt h2[data-v-3cf6767a]:not([class]),#__nuxt .heading-2[data-v-3cf6767a]{line-height:110%}}[vce-ready] h3[data-v-3cf6767a]:not([class]),[vce-ready] .heading-3[data-v-3cf6767a],#__nuxt h3[data-v-3cf6767a]:not([class]),#__nuxt .heading-3[data-v-3cf6767a]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-3cf6767a]:not([class]),[vce-ready] .heading-3[data-v-3cf6767a],#__nuxt h3[data-v-3cf6767a]:not([class]),#__nuxt .heading-3[data-v-3cf6767a]{font-size:2rem}}[vce-ready] h4[data-v-3cf6767a]:not([class]),[vce-ready] .heading-4[data-v-3cf6767a],#__nuxt h4[data-v-3cf6767a]:not([class]),#__nuxt .heading-4[data-v-3cf6767a]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-3cf6767a]:not([class]),[vce-ready] .heading-4[data-v-3cf6767a],#__nuxt h4[data-v-3cf6767a]:not([class]),#__nuxt .heading-4[data-v-3cf6767a]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-3cf6767a]:not([class]),[vce-ready] .heading-5[data-v-3cf6767a],#__nuxt h5[data-v-3cf6767a]:not([class]),#__nuxt .heading-5[data-v-3cf6767a]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-3cf6767a]:not([class]),[vce-ready] .heading-5[data-v-3cf6767a],#__nuxt h5[data-v-3cf6767a]:not([class]),#__nuxt .heading-5[data-v-3cf6767a]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-3cf6767a]:not([class]),[vce-ready] .body-1[data-v-3cf6767a],#__nuxt p[data-v-3cf6767a]:not([class]),#__nuxt .body-1[data-v-3cf6767a]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-3cf6767a],#__nuxt .body-2[data-v-3cf6767a]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-3cf6767a],#__nuxt .body-3[data-v-3cf6767a]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-3cf6767a],#__nuxt .body-4[data-v-3cf6767a]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-3cf6767a],#__nuxt .body-caption[data-v-3cf6767a]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-3cf6767a],#__nuxt .body-caption[data-v-3cf6767a]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-3cf6767a],[vce-ready] [class*=body-]+p[data-v-3cf6767a],[vce-ready] h1+p[data-v-3cf6767a],[vce-ready] h2+p[data-v-3cf6767a],[vce-ready] h3+p[data-v-3cf6767a],[vce-ready] h4+p[data-v-3cf6767a],[vce-ready] h5+p[data-v-3cf6767a],[vce-ready] p+p[data-v-3cf6767a],#__nuxt [class*=heading-]+p[data-v-3cf6767a],#__nuxt [class*=body-]+p[data-v-3cf6767a],#__nuxt h1+p[data-v-3cf6767a],#__nuxt h2+p[data-v-3cf6767a],#__nuxt h3+p[data-v-3cf6767a],#__nuxt h4+p[data-v-3cf6767a],#__nuxt h5+p[data-v-3cf6767a],#__nuxt p+p[data-v-3cf6767a]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-3cf6767a]:not([class]),[vce-ready] [class*=body-]+ul[data-v-3cf6767a]:not([class]),#__nuxt [class*=heading-]+ul[data-v-3cf6767a]:not([class]),#__nuxt [class*=body-]+ul[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-3cf6767a]:not([class]),[vce-ready] p+p[data-v-3cf6767a]:not([class]),[vce-ready] p+h1[data-v-3cf6767a]:not([class]),[vce-ready] p+h2[data-v-3cf6767a]:not([class]),[vce-ready] p+h3[data-v-3cf6767a]:not([class]),[vce-ready] p+h4[data-v-3cf6767a]:not([class]),[vce-ready] p+h5[data-v-3cf6767a]:not([class]),#__nuxt p+ul[data-v-3cf6767a]:not([class]),#__nuxt p+p[data-v-3cf6767a]:not([class]),#__nuxt p+h1[data-v-3cf6767a]:not([class]),#__nuxt p+h2[data-v-3cf6767a]:not([class]),#__nuxt p+h3[data-v-3cf6767a]:not([class]),#__nuxt p+h4[data-v-3cf6767a]:not([class]),#__nuxt p+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-3cf6767a]:not([class]),[vce-ready] h1+p[data-v-3cf6767a]:not([class]),[vce-ready] h1+h1[data-v-3cf6767a]:not([class]),[vce-ready] h1+h2[data-v-3cf6767a]:not([class]),[vce-ready] h1+h3[data-v-3cf6767a]:not([class]),[vce-ready] h1+h4[data-v-3cf6767a]:not([class]),[vce-ready] h1+h5[data-v-3cf6767a]:not([class]),#__nuxt h1+ul[data-v-3cf6767a]:not([class]),#__nuxt h1+p[data-v-3cf6767a]:not([class]),#__nuxt h1+h1[data-v-3cf6767a]:not([class]),#__nuxt h1+h2[data-v-3cf6767a]:not([class]),#__nuxt h1+h3[data-v-3cf6767a]:not([class]),#__nuxt h1+h4[data-v-3cf6767a]:not([class]),#__nuxt h1+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-3cf6767a]:not([class]),[vce-ready] h2+p[data-v-3cf6767a]:not([class]),[vce-ready] h2+h1[data-v-3cf6767a]:not([class]),[vce-ready] h2+h2[data-v-3cf6767a]:not([class]),[vce-ready] h2+h3[data-v-3cf6767a]:not([class]),[vce-ready] h2+h4[data-v-3cf6767a]:not([class]),[vce-ready] h2+h5[data-v-3cf6767a]:not([class]),#__nuxt h2+ul[data-v-3cf6767a]:not([class]),#__nuxt h2+p[data-v-3cf6767a]:not([class]),#__nuxt h2+h1[data-v-3cf6767a]:not([class]),#__nuxt h2+h2[data-v-3cf6767a]:not([class]),#__nuxt h2+h3[data-v-3cf6767a]:not([class]),#__nuxt h2+h4[data-v-3cf6767a]:not([class]),#__nuxt h2+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-3cf6767a]:not([class]),[vce-ready] h3+p[data-v-3cf6767a]:not([class]),[vce-ready] h3+h1[data-v-3cf6767a]:not([class]),[vce-ready] h3+h2[data-v-3cf6767a]:not([class]),[vce-ready] h3+h3[data-v-3cf6767a]:not([class]),[vce-ready] h3+h4[data-v-3cf6767a]:not([class]),[vce-ready] h3+h5[data-v-3cf6767a]:not([class]),#__nuxt h3+ul[data-v-3cf6767a]:not([class]),#__nuxt h3+p[data-v-3cf6767a]:not([class]),#__nuxt h3+h1[data-v-3cf6767a]:not([class]),#__nuxt h3+h2[data-v-3cf6767a]:not([class]),#__nuxt h3+h3[data-v-3cf6767a]:not([class]),#__nuxt h3+h4[data-v-3cf6767a]:not([class]),#__nuxt h3+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-3cf6767a]:not([class]),[vce-ready] h4+p[data-v-3cf6767a]:not([class]),[vce-ready] h4+h1[data-v-3cf6767a]:not([class]),[vce-ready] h4+h2[data-v-3cf6767a]:not([class]),[vce-ready] h4+h3[data-v-3cf6767a]:not([class]),[vce-ready] h4+h4[data-v-3cf6767a]:not([class]),[vce-ready] h4+h5[data-v-3cf6767a]:not([class]),#__nuxt h4+ul[data-v-3cf6767a]:not([class]),#__nuxt h4+p[data-v-3cf6767a]:not([class]),#__nuxt h4+h1[data-v-3cf6767a]:not([class]),#__nuxt h4+h2[data-v-3cf6767a]:not([class]),#__nuxt h4+h3[data-v-3cf6767a]:not([class]),#__nuxt h4+h4[data-v-3cf6767a]:not([class]),#__nuxt h4+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-3cf6767a]:not([class]),[vce-ready] h5+p[data-v-3cf6767a]:not([class]),[vce-ready] h5+h1[data-v-3cf6767a]:not([class]),[vce-ready] h5+h2[data-v-3cf6767a]:not([class]),[vce-ready] h5+h3[data-v-3cf6767a]:not([class]),[vce-ready] h5+h4[data-v-3cf6767a]:not([class]),[vce-ready] h5+h5[data-v-3cf6767a]:not([class]),#__nuxt h5+ul[data-v-3cf6767a]:not([class]),#__nuxt h5+p[data-v-3cf6767a]:not([class]),#__nuxt h5+h1[data-v-3cf6767a]:not([class]),#__nuxt h5+h2[data-v-3cf6767a]:not([class]),#__nuxt h5+h3[data-v-3cf6767a]:not([class]),#__nuxt h5+h4[data-v-3cf6767a]:not([class]),#__nuxt h5+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-3cf6767a]:not([class]),[vce-ready] p+p[data-v-3cf6767a]:not([class]),[vce-ready] p+h1[data-v-3cf6767a]:not([class]),[vce-ready] p+h2[data-v-3cf6767a]:not([class]),[vce-ready] p+h3[data-v-3cf6767a]:not([class]),[vce-ready] p+h4[data-v-3cf6767a]:not([class]),[vce-ready] p+h5[data-v-3cf6767a]:not([class]),#__nuxt p+ul[data-v-3cf6767a]:not([class]),#__nuxt p+p[data-v-3cf6767a]:not([class]),#__nuxt p+h1[data-v-3cf6767a]:not([class]),#__nuxt p+h2[data-v-3cf6767a]:not([class]),#__nuxt p+h3[data-v-3cf6767a]:not([class]),#__nuxt p+h4[data-v-3cf6767a]:not([class]),#__nuxt p+h5[data-v-3cf6767a]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-3cf6767a]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-3cf6767a]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-3cf6767a]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-3cf6767a]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-3cf6767a]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-3cf6767a]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-3cf6767a]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-3cf6767a]::after,#__nuxt [class*=body-] a[target=_blank][data-v-3cf6767a]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-3cf6767a]::after,#__nuxt p:not([class]) a[target=_blank][data-v-3cf6767a]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-3cf6767a],[vce-ready] [class*=heading-] a[href][data-v-3cf6767a]:focus,[vce-ready] [class*=body-] a[href][data-v-3cf6767a],[vce-ready] [class*=body-] a[href][data-v-3cf6767a]:focus,[vce-ready] h1:not([class]) a[href][data-v-3cf6767a],[vce-ready] h1:not([class]) a[href][data-v-3cf6767a]:focus,[vce-ready] h2:not([class]) a[href][data-v-3cf6767a],[vce-ready] h2:not([class]) a[href][data-v-3cf6767a]:focus,[vce-ready] h3:not([class]) a[href][data-v-3cf6767a],[vce-ready] h3:not([class]) a[href][data-v-3cf6767a]:focus,[vce-ready] h4:not([class]) a[href][data-v-3cf6767a],[vce-ready] h4:not([class]) a[href][data-v-3cf6767a]:focus,[vce-ready] h5:not([class]) a[href][data-v-3cf6767a],[vce-ready] h5:not([class]) a[href][data-v-3cf6767a]:focus,[vce-ready] p:not([class]) a[href][data-v-3cf6767a],[vce-ready] p:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt [class*=heading-] a[href][data-v-3cf6767a],#__nuxt [class*=heading-] a[href][data-v-3cf6767a]:focus,#__nuxt [class*=body-] a[href][data-v-3cf6767a],#__nuxt [class*=body-] a[href][data-v-3cf6767a]:focus,#__nuxt h1:not([class]) a[href][data-v-3cf6767a],#__nuxt h1:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt h2:not([class]) a[href][data-v-3cf6767a],#__nuxt h2:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt h3:not([class]) a[href][data-v-3cf6767a],#__nuxt h3:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt h4:not([class]) a[href][data-v-3cf6767a],#__nuxt h4:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt h5:not([class]) a[href][data-v-3cf6767a],#__nuxt h5:not([class]) a[href][data-v-3cf6767a]:focus,#__nuxt p:not([class]) a[href][data-v-3cf6767a],#__nuxt p:not([class]) a[href][data-v-3cf6767a]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-3cf6767a]:hover,[vce-ready] [class*=heading-] a[href][data-v-3cf6767a]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-3cf6767a]:hover,[vce-ready] [class*=body-] a[href][data-v-3cf6767a]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] h1:not([class]) a[href][data-v-3cf6767a]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] h2:not([class]) a[href][data-v-3cf6767a]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] h3:not([class]) a[href][data-v-3cf6767a]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] h4:not([class]) a[href][data-v-3cf6767a]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] h5:not([class]) a[href][data-v-3cf6767a]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-3cf6767a]:hover,[vce-ready] p:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-3cf6767a]:hover,#__nuxt [class*=heading-] a[href][data-v-3cf6767a]:focus:hover,#__nuxt [class*=body-] a[href][data-v-3cf6767a]:hover,#__nuxt [class*=body-] a[href][data-v-3cf6767a]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt h1:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt h2:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt h3:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt h4:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt h5:not([class]) a[href][data-v-3cf6767a]:focus:hover,#__nuxt p:not([class]) a[href][data-v-3cf6767a]:hover,#__nuxt p:not([class]) a[href][data-v-3cf6767a]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-3cf6767a],[vce-ready] .body--bold[data-v-3cf6767a],#__nuxt .heading--bold[data-v-3cf6767a],#__nuxt .body--bold[data-v-3cf6767a]{font-weight:700}[vce-ready] .heading--regular[data-v-3cf6767a],[vce-ready] .body--regular[data-v-3cf6767a],#__nuxt .heading--regular[data-v-3cf6767a],#__nuxt .body--regular[data-v-3cf6767a]{font-weight:400}[vce-ready] .heading--light[data-v-3cf6767a],[vce-ready] .body--light[data-v-3cf6767a],#__nuxt .heading--light[data-v-3cf6767a],#__nuxt .body--light[data-v-3cf6767a]{font-weight:100}[vce-ready] .heading--flush[data-v-3cf6767a],[vce-ready] .body--flush[data-v-3cf6767a],#__nuxt .heading--flush[data-v-3cf6767a],#__nuxt .body--flush[data-v-3cf6767a]{margin-bottom:0;margin-top:0}.app-container[data-v-3cf6767a]{margin:0 auto;max-width:90rem;width:100%}.app-container--fullwidth[data-v-3cf6767a]{max-width:none}.app-row[data-v-3cf6767a]{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;position:relative}.app-col.reverse[data-v-3cf6767a]{flex-direction:column-reverse}@media(max-width: 767px){.app-col--default[data-v-3cf6767a]{margin-left:1rem;margin-right:1rem}.app-col--default.app-col-xs[data-v-3cf6767a]{flex-grow:1;flex-basis:100%}}@media(max-width: 1024px){.app-col--default-md[data-v-3cf6767a]{margin-left:1rem;margin-right:1rem}.app-col--default-md.app-col-xs[data-v-3cf6767a]{flex-grow:1;flex-basis:100%}}@media(max-width: 1439px){.app-col--default-lg[data-v-3cf6767a]{margin-left:1rem;margin-right:1rem}.app-col--default-lg.app-col-xs[data-v-3cf6767a]{flex-grow:1;flex-basis:100%}}.app-row-xs--start[data-v-3cf6767a]{justify-content:flex-start}.app-row-xs--center[data-v-3cf6767a]{justify-content:center}.app-row-xs--end[data-v-3cf6767a]{justify-content:flex-end}.app-row-xs--around[data-v-3cf6767a]{justify-content:space-around}.app-row-xs--between[data-v-3cf6767a]{justify-content:space-between}.app-row-xs--top[data-v-3cf6767a]{align-items:flex-start}.app-row-xs--middle[data-v-3cf6767a]{align-items:center}.app-row-xs--bottom[data-v-3cf6767a]{align-items:flex-end}.app-row-xs--reverse[data-v-3cf6767a]{flex-direction:row-reverse}.app-row-xs--wrap[data-v-3cf6767a]{flex-wrap:wrap}.app-row-xs--nowrap[data-v-3cf6767a]{flex-wrap:nowrap}.app-col-xs[data-v-3cf6767a]{flex-basis:0;flex-grow:1;width:100%}.app-col-xs--first[data-v-3cf6767a]{order:-1}.app-col-xs--last[data-v-3cf6767a]{order:1}.app-col-xs--origin[data-v-3cf6767a]{order:0}.app-col-xs--hide[data-v-3cf6767a]{display:none}.app-col-xs--show[data-v-3cf6767a]{display:flex}.app-col-xs--show-block[data-v-3cf6767a]{display:block}.app-col-xs--show-inline-block[data-v-3cf6767a]{display:inline-block}.app-col-xs-1[data-v-3cf6767a]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-xs-offset-0[data-v-3cf6767a]{margin-left:0}.app-col-xs-offset-right-0[data-v-3cf6767a]{margin-right:0}.app-col-xs-offset-1[data-v-3cf6767a]{margin-left:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-1[data-v-3cf6767a]{margin-left:3.75rem}}.app-col-xs-offset-right-1[data-v-3cf6767a]{margin-right:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-1[data-v-3cf6767a]{margin-right:3.75rem}}.app-col-xs-2[data-v-3cf6767a]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}.app-col-xs-offset-2[data-v-3cf6767a]{margin-left:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-2[data-v-3cf6767a]{margin-left:7.5rem}}.app-col-xs-offset-right-2[data-v-3cf6767a]{margin-right:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-2[data-v-3cf6767a]{margin-right:7.5rem}}.app-col-xs-3[data-v-3cf6767a]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}.app-col-xs-offset-3[data-v-3cf6767a]{margin-left:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-3[data-v-3cf6767a]{margin-left:11.25rem}}.app-col-xs-offset-right-3[data-v-3cf6767a]{margin-right:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-3[data-v-3cf6767a]{margin-right:11.25rem}}.app-col-xs-4[data-v-3cf6767a]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}.app-col-xs-offset-4[data-v-3cf6767a]{margin-left:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-4[data-v-3cf6767a]{margin-left:15rem}}.app-col-xs-offset-right-4[data-v-3cf6767a]{margin-right:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-4[data-v-3cf6767a]{margin-right:15rem}}.app-col-xs-5[data-v-3cf6767a]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}.app-col-xs-offset-5[data-v-3cf6767a]{margin-left:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-5[data-v-3cf6767a]{margin-left:18.75rem}}.app-col-xs-offset-right-5[data-v-3cf6767a]{margin-right:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-5[data-v-3cf6767a]{margin-right:18.75rem}}.app-col-xs-6[data-v-3cf6767a]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}.app-col-xs-offset-6[data-v-3cf6767a]{margin-left:25vw}@media(min-width: 1440px){.app-col-xs-offset-6[data-v-3cf6767a]{margin-left:22.5rem}}.app-col-xs-offset-right-6[data-v-3cf6767a]{margin-right:25vw}@media(min-width: 1440px){.app-col-xs-offset-right-6[data-v-3cf6767a]{margin-right:22.5rem}}.app-col-xs-7[data-v-3cf6767a]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}.app-col-xs-offset-7[data-v-3cf6767a]{margin-left:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-7[data-v-3cf6767a]{margin-left:26.25rem}}.app-col-xs-offset-right-7[data-v-3cf6767a]{margin-right:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-7[data-v-3cf6767a]{margin-right:26.25rem}}.app-col-xs-8[data-v-3cf6767a]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}.app-col-xs-offset-8[data-v-3cf6767a]{margin-left:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-8[data-v-3cf6767a]{margin-left:30rem}}.app-col-xs-offset-right-8[data-v-3cf6767a]{margin-right:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-8[data-v-3cf6767a]{margin-right:30rem}}.app-col-xs-9[data-v-3cf6767a]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}.app-col-xs-offset-9[data-v-3cf6767a]{margin-left:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-9[data-v-3cf6767a]{margin-left:33.75rem}}.app-col-xs-offset-right-9[data-v-3cf6767a]{margin-right:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-9[data-v-3cf6767a]{margin-right:33.75rem}}.app-col-xs-10[data-v-3cf6767a]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}.app-col-xs-offset-10[data-v-3cf6767a]{margin-left:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-10[data-v-3cf6767a]{margin-left:37.5rem}}.app-col-xs-offset-right-10[data-v-3cf6767a]{margin-right:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-10[data-v-3cf6767a]{margin-right:37.5rem}}.app-col-xs-11[data-v-3cf6767a]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}.app-col-xs-offset-11[data-v-3cf6767a]{margin-left:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-11[data-v-3cf6767a]{margin-left:41.25rem}}.app-col-xs-offset-right-11[data-v-3cf6767a]{margin-right:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-11[data-v-3cf6767a]{margin-right:41.25rem}}.app-col-xs-12[data-v-3cf6767a]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}.app-col-xs-offset-12[data-v-3cf6767a]{margin-left:50vw}@media(min-width: 1440px){.app-col-xs-offset-12[data-v-3cf6767a]{margin-left:45rem}}.app-col-xs-offset-right-12[data-v-3cf6767a]{margin-right:50vw}@media(min-width: 1440px){.app-col-xs-offset-right-12[data-v-3cf6767a]{margin-right:45rem}}.app-col-xs-13[data-v-3cf6767a]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}.app-col-xs-offset-13[data-v-3cf6767a]{margin-left:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-13[data-v-3cf6767a]{margin-left:48.75rem}}.app-col-xs-offset-right-13[data-v-3cf6767a]{margin-right:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-13[data-v-3cf6767a]{margin-right:48.75rem}}.app-col-xs-14[data-v-3cf6767a]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}.app-col-xs-offset-14[data-v-3cf6767a]{margin-left:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-14[data-v-3cf6767a]{margin-left:52.5rem}}.app-col-xs-offset-right-14[data-v-3cf6767a]{margin-right:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-14[data-v-3cf6767a]{margin-right:52.5rem}}.app-col-xs-15[data-v-3cf6767a]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}.app-col-xs-offset-15[data-v-3cf6767a]{margin-left:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-15[data-v-3cf6767a]{margin-left:56.25rem}}.app-col-xs-offset-right-15[data-v-3cf6767a]{margin-right:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-15[data-v-3cf6767a]{margin-right:56.25rem}}.app-col-xs-16[data-v-3cf6767a]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}.app-col-xs-offset-16[data-v-3cf6767a]{margin-left:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-16[data-v-3cf6767a]{margin-left:60rem}}.app-col-xs-offset-right-16[data-v-3cf6767a]{margin-right:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-16[data-v-3cf6767a]{margin-right:60rem}}.app-col-xs-17[data-v-3cf6767a]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}.app-col-xs-offset-17[data-v-3cf6767a]{margin-left:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-17[data-v-3cf6767a]{margin-left:63.75rem}}.app-col-xs-offset-right-17[data-v-3cf6767a]{margin-right:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-17[data-v-3cf6767a]{margin-right:63.75rem}}.app-col-xs-18[data-v-3cf6767a]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}.app-col-xs-offset-18[data-v-3cf6767a]{margin-left:75vw}@media(min-width: 1440px){.app-col-xs-offset-18[data-v-3cf6767a]{margin-left:67.5rem}}.app-col-xs-offset-right-18[data-v-3cf6767a]{margin-right:75vw}@media(min-width: 1440px){.app-col-xs-offset-right-18[data-v-3cf6767a]{margin-right:67.5rem}}.app-col-xs-19[data-v-3cf6767a]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}.app-col-xs-offset-19[data-v-3cf6767a]{margin-left:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-19[data-v-3cf6767a]{margin-left:71.25rem}}.app-col-xs-offset-right-19[data-v-3cf6767a]{margin-right:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-19[data-v-3cf6767a]{margin-right:71.25rem}}.app-col-xs-20[data-v-3cf6767a]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}.app-col-xs-offset-20[data-v-3cf6767a]{margin-left:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-20[data-v-3cf6767a]{margin-left:75rem}}.app-col-xs-offset-right-20[data-v-3cf6767a]{margin-right:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-20[data-v-3cf6767a]{margin-right:75rem}}.app-col-xs-21[data-v-3cf6767a]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}.app-col-xs-offset-21[data-v-3cf6767a]{margin-left:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-21[data-v-3cf6767a]{margin-left:78.75rem}}.app-col-xs-offset-right-21[data-v-3cf6767a]{margin-right:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-21[data-v-3cf6767a]{margin-right:78.75rem}}.app-col-xs-22[data-v-3cf6767a]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}.app-col-xs-offset-22[data-v-3cf6767a]{margin-left:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-22[data-v-3cf6767a]{margin-left:82.5rem}}.app-col-xs-offset-right-22[data-v-3cf6767a]{margin-right:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-22[data-v-3cf6767a]{margin-right:82.5rem}}.app-col-xs-23[data-v-3cf6767a]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}.app-col-xs-offset-23[data-v-3cf6767a]{margin-left:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-23[data-v-3cf6767a]{margin-left:86.25rem}}.app-col-xs-offset-right-23[data-v-3cf6767a]{margin-right:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-23[data-v-3cf6767a]{margin-right:86.25rem}}.app-col-xs-24[data-v-3cf6767a]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}.app-col-xs-offset-24[data-v-3cf6767a]{margin-left:100vw}@media(min-width: 1440px){.app-col-xs-offset-24[data-v-3cf6767a]{margin-left:90rem}}.app-col-xs-offset-right-24[data-v-3cf6767a]{margin-right:100vw}@media(min-width: 1440px){.app-col-xs-offset-right-24[data-v-3cf6767a]{margin-right:90rem}}.app-col--default.app-col-xs-fit[data-v-3cf6767a],.app-col-xs-fit[data-v-3cf6767a]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}.app-col--default.app-col-xs-fill[data-v-3cf6767a],.app-col-xs-fill[data-v-3cf6767a]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}.app-spacer-xs-0[data-v-3cf6767a]{height:0rem}.app-spacer-xs-4[data-v-3cf6767a]{height:.25rem}.app-spacer-xs-8[data-v-3cf6767a]{height:.5rem}.app-spacer-xs-16[data-v-3cf6767a]{height:1rem}.app-spacer-xs-24[data-v-3cf6767a]{height:1.5rem}.app-spacer-xs-32[data-v-3cf6767a]{height:2rem}.app-spacer-xs-40[data-v-3cf6767a]{height:2.5rem}.app-spacer-xs-60[data-v-3cf6767a]{height:3.75rem}.app-spacer-xs-64[data-v-3cf6767a]{height:4rem}.app-spacer-xs-80[data-v-3cf6767a]{height:5rem}.app-spacer-xs-120[data-v-3cf6767a]{height:7.5rem}.app-spacer-xs-180[data-v-3cf6767a]{height:11.25rem}.-hide-xs[data-v-3cf6767a]{display:none !important}.-show-xs[data-v-3cf6767a]{display:unset !important}.-nowrap-xs[data-v-3cf6767a]{white-space:nowrap}.-wrap-xs[data-v-3cf6767a]{white-space:normal}@media(min-width: 768px){.app-row-md--start[data-v-3cf6767a]{justify-content:flex-start}.app-row-md--center[data-v-3cf6767a]{justify-content:center}.app-row-md--end[data-v-3cf6767a]{justify-content:flex-end}.app-row-md--around[data-v-3cf6767a]{justify-content:space-around}.app-row-md--between[data-v-3cf6767a]{justify-content:space-between}.app-row-md--top[data-v-3cf6767a]{align-items:flex-start}.app-row-md--middle[data-v-3cf6767a]{align-items:center}.app-row-md--bottom[data-v-3cf6767a]{align-items:flex-end}.app-row-md--reverse[data-v-3cf6767a]{flex-direction:row-reverse}.app-row-md--wrap[data-v-3cf6767a]{flex-wrap:wrap}.app-row-md--nowrap[data-v-3cf6767a]{flex-wrap:nowrap}.app-col-md[data-v-3cf6767a]{flex-basis:0;flex-grow:1;width:100%}.app-col-md--first[data-v-3cf6767a]{order:-1}.app-col-md--last[data-v-3cf6767a]{order:1}.app-col-md--origin[data-v-3cf6767a]{order:0}.app-col-md--hide[data-v-3cf6767a]{display:none}.app-col-md--show[data-v-3cf6767a]{display:flex}.app-col-md--show-block[data-v-3cf6767a]{display:block}.app-col-md--show-inline-block[data-v-3cf6767a]{display:inline-block}.app-col-md-1[data-v-3cf6767a]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-md-offset-0[data-v-3cf6767a]{margin-left:0}.app-col-md-offset-right-0[data-v-3cf6767a]{margin-right:0}.app-col-md-offset-1[data-v-3cf6767a]{margin-left:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-1[data-v-3cf6767a]{margin-left:3.75rem}}@media(min-width: 768px){.app-col-md-offset-right-1[data-v-3cf6767a]{margin-right:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-1[data-v-3cf6767a]{margin-right:3.75rem}}@media(min-width: 768px){.app-col-md-2[data-v-3cf6767a]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 768px){.app-col-md-offset-2[data-v-3cf6767a]{margin-left:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-2[data-v-3cf6767a]{margin-left:7.5rem}}@media(min-width: 768px){.app-col-md-offset-right-2[data-v-3cf6767a]{margin-right:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-2[data-v-3cf6767a]{margin-right:7.5rem}}@media(min-width: 768px){.app-col-md-3[data-v-3cf6767a]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 768px){.app-col-md-offset-3[data-v-3cf6767a]{margin-left:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-3[data-v-3cf6767a]{margin-left:11.25rem}}@media(min-width: 768px){.app-col-md-offset-right-3[data-v-3cf6767a]{margin-right:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-3[data-v-3cf6767a]{margin-right:11.25rem}}@media(min-width: 768px){.app-col-md-4[data-v-3cf6767a]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 768px){.app-col-md-offset-4[data-v-3cf6767a]{margin-left:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-4[data-v-3cf6767a]{margin-left:15rem}}@media(min-width: 768px){.app-col-md-offset-right-4[data-v-3cf6767a]{margin-right:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-4[data-v-3cf6767a]{margin-right:15rem}}@media(min-width: 768px){.app-col-md-5[data-v-3cf6767a]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 768px){.app-col-md-offset-5[data-v-3cf6767a]{margin-left:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-5[data-v-3cf6767a]{margin-left:18.75rem}}@media(min-width: 768px){.app-col-md-offset-right-5[data-v-3cf6767a]{margin-right:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-5[data-v-3cf6767a]{margin-right:18.75rem}}@media(min-width: 768px){.app-col-md-6[data-v-3cf6767a]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 768px){.app-col-md-offset-6[data-v-3cf6767a]{margin-left:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-6[data-v-3cf6767a]{margin-left:22.5rem}}@media(min-width: 768px){.app-col-md-offset-right-6[data-v-3cf6767a]{margin-right:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-6[data-v-3cf6767a]{margin-right:22.5rem}}@media(min-width: 768px){.app-col-md-7[data-v-3cf6767a]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 768px){.app-col-md-offset-7[data-v-3cf6767a]{margin-left:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-7[data-v-3cf6767a]{margin-left:26.25rem}}@media(min-width: 768px){.app-col-md-offset-right-7[data-v-3cf6767a]{margin-right:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-7[data-v-3cf6767a]{margin-right:26.25rem}}@media(min-width: 768px){.app-col-md-8[data-v-3cf6767a]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 768px){.app-col-md-offset-8[data-v-3cf6767a]{margin-left:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-8[data-v-3cf6767a]{margin-left:30rem}}@media(min-width: 768px){.app-col-md-offset-right-8[data-v-3cf6767a]{margin-right:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-8[data-v-3cf6767a]{margin-right:30rem}}@media(min-width: 768px){.app-col-md-9[data-v-3cf6767a]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 768px){.app-col-md-offset-9[data-v-3cf6767a]{margin-left:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-9[data-v-3cf6767a]{margin-left:33.75rem}}@media(min-width: 768px){.app-col-md-offset-right-9[data-v-3cf6767a]{margin-right:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-9[data-v-3cf6767a]{margin-right:33.75rem}}@media(min-width: 768px){.app-col-md-10[data-v-3cf6767a]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 768px){.app-col-md-offset-10[data-v-3cf6767a]{margin-left:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-10[data-v-3cf6767a]{margin-left:37.5rem}}@media(min-width: 768px){.app-col-md-offset-right-10[data-v-3cf6767a]{margin-right:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-10[data-v-3cf6767a]{margin-right:37.5rem}}@media(min-width: 768px){.app-col-md-11[data-v-3cf6767a]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 768px){.app-col-md-offset-11[data-v-3cf6767a]{margin-left:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-11[data-v-3cf6767a]{margin-left:41.25rem}}@media(min-width: 768px){.app-col-md-offset-right-11[data-v-3cf6767a]{margin-right:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-11[data-v-3cf6767a]{margin-right:41.25rem}}@media(min-width: 768px){.app-col-md-12[data-v-3cf6767a]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 768px){.app-col-md-offset-12[data-v-3cf6767a]{margin-left:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-12[data-v-3cf6767a]{margin-left:45rem}}@media(min-width: 768px){.app-col-md-offset-right-12[data-v-3cf6767a]{margin-right:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-12[data-v-3cf6767a]{margin-right:45rem}}@media(min-width: 768px){.app-col-md-13[data-v-3cf6767a]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 768px){.app-col-md-offset-13[data-v-3cf6767a]{margin-left:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-13[data-v-3cf6767a]{margin-left:48.75rem}}@media(min-width: 768px){.app-col-md-offset-right-13[data-v-3cf6767a]{margin-right:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-13[data-v-3cf6767a]{margin-right:48.75rem}}@media(min-width: 768px){.app-col-md-14[data-v-3cf6767a]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 768px){.app-col-md-offset-14[data-v-3cf6767a]{margin-left:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-14[data-v-3cf6767a]{margin-left:52.5rem}}@media(min-width: 768px){.app-col-md-offset-right-14[data-v-3cf6767a]{margin-right:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-14[data-v-3cf6767a]{margin-right:52.5rem}}@media(min-width: 768px){.app-col-md-15[data-v-3cf6767a]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 768px){.app-col-md-offset-15[data-v-3cf6767a]{margin-left:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-15[data-v-3cf6767a]{margin-left:56.25rem}}@media(min-width: 768px){.app-col-md-offset-right-15[data-v-3cf6767a]{margin-right:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-15[data-v-3cf6767a]{margin-right:56.25rem}}@media(min-width: 768px){.app-col-md-16[data-v-3cf6767a]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 768px){.app-col-md-offset-16[data-v-3cf6767a]{margin-left:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-16[data-v-3cf6767a]{margin-left:60rem}}@media(min-width: 768px){.app-col-md-offset-right-16[data-v-3cf6767a]{margin-right:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-16[data-v-3cf6767a]{margin-right:60rem}}@media(min-width: 768px){.app-col-md-17[data-v-3cf6767a]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 768px){.app-col-md-offset-17[data-v-3cf6767a]{margin-left:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-17[data-v-3cf6767a]{margin-left:63.75rem}}@media(min-width: 768px){.app-col-md-offset-right-17[data-v-3cf6767a]{margin-right:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-17[data-v-3cf6767a]{margin-right:63.75rem}}@media(min-width: 768px){.app-col-md-18[data-v-3cf6767a]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 768px){.app-col-md-offset-18[data-v-3cf6767a]{margin-left:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-18[data-v-3cf6767a]{margin-left:67.5rem}}@media(min-width: 768px){.app-col-md-offset-right-18[data-v-3cf6767a]{margin-right:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-18[data-v-3cf6767a]{margin-right:67.5rem}}@media(min-width: 768px){.app-col-md-19[data-v-3cf6767a]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 768px){.app-col-md-offset-19[data-v-3cf6767a]{margin-left:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-19[data-v-3cf6767a]{margin-left:71.25rem}}@media(min-width: 768px){.app-col-md-offset-right-19[data-v-3cf6767a]{margin-right:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-19[data-v-3cf6767a]{margin-right:71.25rem}}@media(min-width: 768px){.app-col-md-20[data-v-3cf6767a]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 768px){.app-col-md-offset-20[data-v-3cf6767a]{margin-left:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-20[data-v-3cf6767a]{margin-left:75rem}}@media(min-width: 768px){.app-col-md-offset-right-20[data-v-3cf6767a]{margin-right:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-20[data-v-3cf6767a]{margin-right:75rem}}@media(min-width: 768px){.app-col-md-21[data-v-3cf6767a]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 768px){.app-col-md-offset-21[data-v-3cf6767a]{margin-left:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-21[data-v-3cf6767a]{margin-left:78.75rem}}@media(min-width: 768px){.app-col-md-offset-right-21[data-v-3cf6767a]{margin-right:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-21[data-v-3cf6767a]{margin-right:78.75rem}}@media(min-width: 768px){.app-col-md-22[data-v-3cf6767a]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 768px){.app-col-md-offset-22[data-v-3cf6767a]{margin-left:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-22[data-v-3cf6767a]{margin-left:82.5rem}}@media(min-width: 768px){.app-col-md-offset-right-22[data-v-3cf6767a]{margin-right:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-22[data-v-3cf6767a]{margin-right:82.5rem}}@media(min-width: 768px){.app-col-md-23[data-v-3cf6767a]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 768px){.app-col-md-offset-23[data-v-3cf6767a]{margin-left:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-23[data-v-3cf6767a]{margin-left:86.25rem}}@media(min-width: 768px){.app-col-md-offset-right-23[data-v-3cf6767a]{margin-right:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-23[data-v-3cf6767a]{margin-right:86.25rem}}@media(min-width: 768px){.app-col-md-24[data-v-3cf6767a]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 768px){.app-col-md-offset-24[data-v-3cf6767a]{margin-left:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-24[data-v-3cf6767a]{margin-left:90rem}}@media(min-width: 768px){.app-col-md-offset-right-24[data-v-3cf6767a]{margin-right:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-24[data-v-3cf6767a]{margin-right:90rem}}@media(min-width: 768px){.app-col--default.app-col-md-fit[data-v-3cf6767a],.app-col-md-fit[data-v-3cf6767a]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-col--default.app-col-md-fill[data-v-3cf6767a],.app-col-md-fill[data-v-3cf6767a]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-spacer-md-0[data-v-3cf6767a]{height:0rem}}@media(min-width: 768px){.app-spacer-md-4[data-v-3cf6767a]{height:.25rem}}@media(min-width: 768px){.app-spacer-md-8[data-v-3cf6767a]{height:.5rem}}@media(min-width: 768px){.app-spacer-md-16[data-v-3cf6767a]{height:1rem}}@media(min-width: 768px){.app-spacer-md-24[data-v-3cf6767a]{height:1.5rem}}@media(min-width: 768px){.app-spacer-md-32[data-v-3cf6767a]{height:2rem}}@media(min-width: 768px){.app-spacer-md-40[data-v-3cf6767a]{height:2.5rem}}@media(min-width: 768px){.app-spacer-md-60[data-v-3cf6767a]{height:3.75rem}}@media(min-width: 768px){.app-spacer-md-64[data-v-3cf6767a]{height:4rem}}@media(min-width: 768px){.app-spacer-md-80[data-v-3cf6767a]{height:5rem}}@media(min-width: 768px){.app-spacer-md-120[data-v-3cf6767a]{height:7.5rem}}@media(min-width: 768px){.app-spacer-md-180[data-v-3cf6767a]{height:11.25rem}}@media(min-width: 768px){.-hide-md[data-v-3cf6767a]{display:none !important}}@media(min-width: 768px){.-show-md[data-v-3cf6767a]{display:unset !important}}@media(min-width: 768px){.-nowrap-md[data-v-3cf6767a]{white-space:nowrap}}@media(min-width: 768px){.-wrap-md[data-v-3cf6767a]{white-space:normal}}@media(min-width: 1025px){.app-row-lg--start[data-v-3cf6767a]{justify-content:flex-start}.app-row-lg--center[data-v-3cf6767a]{justify-content:center}.app-row-lg--end[data-v-3cf6767a]{justify-content:flex-end}.app-row-lg--around[data-v-3cf6767a]{justify-content:space-around}.app-row-lg--between[data-v-3cf6767a]{justify-content:space-between}.app-row-lg--top[data-v-3cf6767a]{align-items:flex-start}.app-row-lg--middle[data-v-3cf6767a]{align-items:center}.app-row-lg--bottom[data-v-3cf6767a]{align-items:flex-end}.app-row-lg--reverse[data-v-3cf6767a]{flex-direction:row-reverse}.app-row-lg--wrap[data-v-3cf6767a]{flex-wrap:wrap}.app-row-lg--nowrap[data-v-3cf6767a]{flex-wrap:nowrap}.app-col-lg[data-v-3cf6767a]{flex-basis:0;flex-grow:1;width:100%}.app-col-lg--first[data-v-3cf6767a]{order:-1}.app-col-lg--last[data-v-3cf6767a]{order:1}.app-col-lg--origin[data-v-3cf6767a]{order:0}.app-col-lg--hide[data-v-3cf6767a]{display:none}.app-col-lg--show[data-v-3cf6767a]{display:flex}.app-col-lg--show-block[data-v-3cf6767a]{display:block}.app-col-lg--show-inline-block[data-v-3cf6767a]{display:inline-block}.app-col-lg-1[data-v-3cf6767a]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-lg-offset-0[data-v-3cf6767a]{margin-left:0}.app-col-lg-offset-right-0[data-v-3cf6767a]{margin-right:0}.app-col-lg-offset-1[data-v-3cf6767a]{margin-left:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-1[data-v-3cf6767a]{margin-left:3.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-1[data-v-3cf6767a]{margin-right:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-1[data-v-3cf6767a]{margin-right:3.75rem}}@media(min-width: 1025px){.app-col-lg-2[data-v-3cf6767a]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-2[data-v-3cf6767a]{margin-left:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-2[data-v-3cf6767a]{margin-left:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-2[data-v-3cf6767a]{margin-right:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-2[data-v-3cf6767a]{margin-right:7.5rem}}@media(min-width: 1025px){.app-col-lg-3[data-v-3cf6767a]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-3[data-v-3cf6767a]{margin-left:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-3[data-v-3cf6767a]{margin-left:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-3[data-v-3cf6767a]{margin-right:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-3[data-v-3cf6767a]{margin-right:11.25rem}}@media(min-width: 1025px){.app-col-lg-4[data-v-3cf6767a]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 1025px){.app-col-lg-offset-4[data-v-3cf6767a]{margin-left:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-4[data-v-3cf6767a]{margin-left:15rem}}@media(min-width: 1025px){.app-col-lg-offset-right-4[data-v-3cf6767a]{margin-right:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-4[data-v-3cf6767a]{margin-right:15rem}}@media(min-width: 1025px){.app-col-lg-5[data-v-3cf6767a]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-5[data-v-3cf6767a]{margin-left:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-5[data-v-3cf6767a]{margin-left:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-5[data-v-3cf6767a]{margin-right:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-5[data-v-3cf6767a]{margin-right:18.75rem}}@media(min-width: 1025px){.app-col-lg-6[data-v-3cf6767a]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-6[data-v-3cf6767a]{margin-left:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-6[data-v-3cf6767a]{margin-left:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-6[data-v-3cf6767a]{margin-right:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-6[data-v-3cf6767a]{margin-right:22.5rem}}@media(min-width: 1025px){.app-col-lg-7[data-v-3cf6767a]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-7[data-v-3cf6767a]{margin-left:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-7[data-v-3cf6767a]{margin-left:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-7[data-v-3cf6767a]{margin-right:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-7[data-v-3cf6767a]{margin-right:26.25rem}}@media(min-width: 1025px){.app-col-lg-8[data-v-3cf6767a]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 1025px){.app-col-lg-offset-8[data-v-3cf6767a]{margin-left:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-8[data-v-3cf6767a]{margin-left:30rem}}@media(min-width: 1025px){.app-col-lg-offset-right-8[data-v-3cf6767a]{margin-right:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-8[data-v-3cf6767a]{margin-right:30rem}}@media(min-width: 1025px){.app-col-lg-9[data-v-3cf6767a]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-9[data-v-3cf6767a]{margin-left:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-9[data-v-3cf6767a]{margin-left:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-9[data-v-3cf6767a]{margin-right:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-9[data-v-3cf6767a]{margin-right:33.75rem}}@media(min-width: 1025px){.app-col-lg-10[data-v-3cf6767a]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-10[data-v-3cf6767a]{margin-left:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-10[data-v-3cf6767a]{margin-left:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-10[data-v-3cf6767a]{margin-right:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-10[data-v-3cf6767a]{margin-right:37.5rem}}@media(min-width: 1025px){.app-col-lg-11[data-v-3cf6767a]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-11[data-v-3cf6767a]{margin-left:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-11[data-v-3cf6767a]{margin-left:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-11[data-v-3cf6767a]{margin-right:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-11[data-v-3cf6767a]{margin-right:41.25rem}}@media(min-width: 1025px){.app-col-lg-12[data-v-3cf6767a]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 1025px){.app-col-lg-offset-12[data-v-3cf6767a]{margin-left:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-12[data-v-3cf6767a]{margin-left:45rem}}@media(min-width: 1025px){.app-col-lg-offset-right-12[data-v-3cf6767a]{margin-right:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-12[data-v-3cf6767a]{margin-right:45rem}}@media(min-width: 1025px){.app-col-lg-13[data-v-3cf6767a]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-13[data-v-3cf6767a]{margin-left:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-13[data-v-3cf6767a]{margin-left:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-13[data-v-3cf6767a]{margin-right:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-13[data-v-3cf6767a]{margin-right:48.75rem}}@media(min-width: 1025px){.app-col-lg-14[data-v-3cf6767a]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-14[data-v-3cf6767a]{margin-left:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-14[data-v-3cf6767a]{margin-left:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-14[data-v-3cf6767a]{margin-right:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-14[data-v-3cf6767a]{margin-right:52.5rem}}@media(min-width: 1025px){.app-col-lg-15[data-v-3cf6767a]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-15[data-v-3cf6767a]{margin-left:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-15[data-v-3cf6767a]{margin-left:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-15[data-v-3cf6767a]{margin-right:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-15[data-v-3cf6767a]{margin-right:56.25rem}}@media(min-width: 1025px){.app-col-lg-16[data-v-3cf6767a]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 1025px){.app-col-lg-offset-16[data-v-3cf6767a]{margin-left:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-16[data-v-3cf6767a]{margin-left:60rem}}@media(min-width: 1025px){.app-col-lg-offset-right-16[data-v-3cf6767a]{margin-right:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-16[data-v-3cf6767a]{margin-right:60rem}}@media(min-width: 1025px){.app-col-lg-17[data-v-3cf6767a]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-17[data-v-3cf6767a]{margin-left:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-17[data-v-3cf6767a]{margin-left:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-17[data-v-3cf6767a]{margin-right:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-17[data-v-3cf6767a]{margin-right:63.75rem}}@media(min-width: 1025px){.app-col-lg-18[data-v-3cf6767a]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-18[data-v-3cf6767a]{margin-left:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-18[data-v-3cf6767a]{margin-left:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-18[data-v-3cf6767a]{margin-right:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-18[data-v-3cf6767a]{margin-right:67.5rem}}@media(min-width: 1025px){.app-col-lg-19[data-v-3cf6767a]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-19[data-v-3cf6767a]{margin-left:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-19[data-v-3cf6767a]{margin-left:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-19[data-v-3cf6767a]{margin-right:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-19[data-v-3cf6767a]{margin-right:71.25rem}}@media(min-width: 1025px){.app-col-lg-20[data-v-3cf6767a]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 1025px){.app-col-lg-offset-20[data-v-3cf6767a]{margin-left:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-20[data-v-3cf6767a]{margin-left:75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-20[data-v-3cf6767a]{margin-right:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-20[data-v-3cf6767a]{margin-right:75rem}}@media(min-width: 1025px){.app-col-lg-21[data-v-3cf6767a]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-21[data-v-3cf6767a]{margin-left:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-21[data-v-3cf6767a]{margin-left:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-21[data-v-3cf6767a]{margin-right:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-21[data-v-3cf6767a]{margin-right:78.75rem}}@media(min-width: 1025px){.app-col-lg-22[data-v-3cf6767a]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-22[data-v-3cf6767a]{margin-left:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-22[data-v-3cf6767a]{margin-left:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-22[data-v-3cf6767a]{margin-right:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-22[data-v-3cf6767a]{margin-right:82.5rem}}@media(min-width: 1025px){.app-col-lg-23[data-v-3cf6767a]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-23[data-v-3cf6767a]{margin-left:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-23[data-v-3cf6767a]{margin-left:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-23[data-v-3cf6767a]{margin-right:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-23[data-v-3cf6767a]{margin-right:86.25rem}}@media(min-width: 1025px){.app-col-lg-24[data-v-3cf6767a]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 1025px){.app-col-lg-offset-24[data-v-3cf6767a]{margin-left:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-24[data-v-3cf6767a]{margin-left:90rem}}@media(min-width: 1025px){.app-col-lg-offset-right-24[data-v-3cf6767a]{margin-right:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-24[data-v-3cf6767a]{margin-right:90rem}}@media(min-width: 1025px){.app-col--default.app-col-lg-fit[data-v-3cf6767a],.app-col-lg-fit[data-v-3cf6767a]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-col--default.app-col-lg-fill[data-v-3cf6767a],.app-col-lg-fill[data-v-3cf6767a]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-spacer-lg-0[data-v-3cf6767a]{height:0rem}}@media(min-width: 1025px){.app-spacer-lg-4[data-v-3cf6767a]{height:.25rem}}@media(min-width: 1025px){.app-spacer-lg-8[data-v-3cf6767a]{height:.5rem}}@media(min-width: 1025px){.app-spacer-lg-16[data-v-3cf6767a]{height:1rem}}@media(min-width: 1025px){.app-spacer-lg-24[data-v-3cf6767a]{height:1.5rem}}@media(min-width: 1025px){.app-spacer-lg-32[data-v-3cf6767a]{height:2rem}}@media(min-width: 1025px){.app-spacer-lg-40[data-v-3cf6767a]{height:2.5rem}}@media(min-width: 1025px){.app-spacer-lg-60[data-v-3cf6767a]{height:3.75rem}}@media(min-width: 1025px){.app-spacer-lg-64[data-v-3cf6767a]{height:4rem}}@media(min-width: 1025px){.app-spacer-lg-80[data-v-3cf6767a]{height:5rem}}@media(min-width: 1025px){.app-spacer-lg-120[data-v-3cf6767a]{height:7.5rem}}@media(min-width: 1025px){.app-spacer-lg-180[data-v-3cf6767a]{height:11.25rem}}@media(min-width: 1025px){.-hide-lg[data-v-3cf6767a]{display:none !important}}@media(min-width: 1025px){.-show-lg[data-v-3cf6767a]{display:unset !important}}@media(min-width: 1025px){.-nowrap-lg[data-v-3cf6767a]{white-space:nowrap}}@media(min-width: 1025px){.-wrap-lg[data-v-3cf6767a]{white-space:normal}}span[nowrap][data-v-3cf6767a],span.nowrap[data-v-3cf6767a]{white-space:nowrap}@media(max-width: 767px){br[\\@md][data-v-3cf6767a]{display:none}}@media(max-width: 1024px){br[\\@lg][data-v-3cf6767a]{display:none}}.link[data-v-3cf6767a]{color:#08428d;font-weight:bold;text-decoration:none}@media(min-width: 768px){.container[data-v-3cf6767a]{text-align:center}}.text[data-v-3cf6767a]{margin:5rem 1rem}@media(min-width: 768px){.text[data-v-3cf6767a]{margin:7.5rem 15rem}}.title[data-v-3cf6767a]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%;color:#1e2430;margin-bottom:1rem}@media(min-width: 768px){.title[data-v-3cf6767a]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){.title[data-v-3cf6767a]{font-size:64px}}.description[data-v-3cf6767a]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;margin-bottom:2rem}.button-row[data-v-3cf6767a]{display:grid;align-items:stretch;grid-template-columns:repeat(1, minmax(0, 1fr));column-gap:4.1666666667vw;row-gap:4.1666666667vw;width:100%}@media(min-width: 768px){.button-row[data-v-3cf6767a]{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media(min-width: 1025px){.button-row[data-v-3cf6767a]{grid-template-columns:repeat(2, auto);column-gap:2.25rem;row-gap:2rem}}', ""]), c.locals = {}, t.exports = c
        },
        798: function(t, e, d) {
            var content = d(877);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("e32617d0", content, !0, {
                sourceMap: !1
            })
        },
        799: function(t, e, d) {
            "use strict";
            d(735)
        },
        800: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".carousel[data-v-5e48e74d]{margin-bottom:30px;position:relative;width:100%}[data-v-5e48e74d] .flickity-slider>*{max-width:var(--slide-width);width:100%}[data-v-5e48e74d] .flickity-button{background:none;border:1px solid #1e2430}[data-v-5e48e74d] .carousel__slides:not(.carousel__slides--navigation) .flickity-button{display:none}[data-v-5e48e74d] .carousel__slides--overflow .flickity-viewport{overflow:visible}[data-v-5e48e74d] .carousel__slides--sameheight .flickity-slider>*{min-height:var(--slide-height)}[data-v-5e48e74d] .flickity-page-dots{bottom:-30px}[data-v-5e48e74d] .flickity-page-dot{width:6px;height:6px;opacity:1;background:#c9ced6;border:none}[data-v-5e48e74d] .flickity-page-dot:focus{box-shadow:none}[data-v-5e48e74d] .flickity-page-dot.is-selected{background:#1e2430}.carousel--light[data-v-5e48e74d] .flickity-button{border-color:#fff;color:#fff}.carousel--light[data-v-5e48e74d] .flickity-page-dot{width:6px;height:6px;opacity:1;background:#858fa0;border:none}.carousel--light[data-v-5e48e74d] .flickity-page-dot.is-selected{background:#fafbfb}", ""]), c.locals = {}, t.exports = c
        },
        801: function(t, e, d) {
            "use strict";
            d(736)
        },
        802: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-9af136d0]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-9af136d0]:not([class]),[vce-ready] .heading-1[data-v-9af136d0],#__nuxt h1[data-v-9af136d0]:not([class]),#__nuxt .heading-1[data-v-9af136d0]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-9af136d0]:not([class]),[vce-ready] .heading-1[data-v-9af136d0],#__nuxt h1[data-v-9af136d0]:not([class]),#__nuxt .heading-1[data-v-9af136d0]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-9af136d0]:not([class]),[vce-ready] .heading-1[data-v-9af136d0],#__nuxt h1[data-v-9af136d0]:not([class]),#__nuxt .heading-1[data-v-9af136d0]{font-size:64px}}[vce-ready] h2[data-v-9af136d0]:not([class]),[vce-ready] .heading-2[data-v-9af136d0],#__nuxt h2[data-v-9af136d0]:not([class]),#__nuxt .heading-2[data-v-9af136d0]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-9af136d0]:not([class]),[vce-ready] .heading-2[data-v-9af136d0],#__nuxt h2[data-v-9af136d0]:not([class]),#__nuxt .heading-2[data-v-9af136d0]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-9af136d0]:not([class]),[vce-ready] .heading-2[data-v-9af136d0],#__nuxt h2[data-v-9af136d0]:not([class]),#__nuxt .heading-2[data-v-9af136d0]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-9af136d0]:not([class]),[vce-ready] .heading-2[data-v-9af136d0],#__nuxt h2[data-v-9af136d0]:not([class]),#__nuxt .heading-2[data-v-9af136d0]{line-height:110%}}[vce-ready] h3[data-v-9af136d0]:not([class]),[vce-ready] .heading-3[data-v-9af136d0],#__nuxt h3[data-v-9af136d0]:not([class]),#__nuxt .heading-3[data-v-9af136d0]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-9af136d0]:not([class]),[vce-ready] .heading-3[data-v-9af136d0],#__nuxt h3[data-v-9af136d0]:not([class]),#__nuxt .heading-3[data-v-9af136d0]{font-size:2rem}}[vce-ready] h4[data-v-9af136d0]:not([class]),[vce-ready] .heading-4[data-v-9af136d0],#__nuxt h4[data-v-9af136d0]:not([class]),#__nuxt .heading-4[data-v-9af136d0]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-9af136d0]:not([class]),[vce-ready] .heading-4[data-v-9af136d0],#__nuxt h4[data-v-9af136d0]:not([class]),#__nuxt .heading-4[data-v-9af136d0]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-9af136d0]:not([class]),[vce-ready] .heading-5[data-v-9af136d0],#__nuxt h5[data-v-9af136d0]:not([class]),#__nuxt .heading-5[data-v-9af136d0]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-9af136d0]:not([class]),[vce-ready] .heading-5[data-v-9af136d0],#__nuxt h5[data-v-9af136d0]:not([class]),#__nuxt .heading-5[data-v-9af136d0]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-9af136d0]:not([class]),[vce-ready] .body-1[data-v-9af136d0],#__nuxt p[data-v-9af136d0]:not([class]),#__nuxt .body-1[data-v-9af136d0]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-9af136d0],#__nuxt .body-2[data-v-9af136d0]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-9af136d0],#__nuxt .body-3[data-v-9af136d0]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-9af136d0],#__nuxt .body-4[data-v-9af136d0]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-9af136d0],#__nuxt .body-caption[data-v-9af136d0]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-9af136d0],#__nuxt .body-caption[data-v-9af136d0]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-9af136d0],[vce-ready] [class*=body-]+p[data-v-9af136d0],[vce-ready] h1+p[data-v-9af136d0],[vce-ready] h2+p[data-v-9af136d0],[vce-ready] h3+p[data-v-9af136d0],[vce-ready] h4+p[data-v-9af136d0],[vce-ready] h5+p[data-v-9af136d0],[vce-ready] p+p[data-v-9af136d0],#__nuxt [class*=heading-]+p[data-v-9af136d0],#__nuxt [class*=body-]+p[data-v-9af136d0],#__nuxt h1+p[data-v-9af136d0],#__nuxt h2+p[data-v-9af136d0],#__nuxt h3+p[data-v-9af136d0],#__nuxt h4+p[data-v-9af136d0],#__nuxt h5+p[data-v-9af136d0],#__nuxt p+p[data-v-9af136d0]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-9af136d0]:not([class]),[vce-ready] [class*=body-]+ul[data-v-9af136d0]:not([class]),#__nuxt [class*=heading-]+ul[data-v-9af136d0]:not([class]),#__nuxt [class*=body-]+ul[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-9af136d0]:not([class]),[vce-ready] p+p[data-v-9af136d0]:not([class]),[vce-ready] p+h1[data-v-9af136d0]:not([class]),[vce-ready] p+h2[data-v-9af136d0]:not([class]),[vce-ready] p+h3[data-v-9af136d0]:not([class]),[vce-ready] p+h4[data-v-9af136d0]:not([class]),[vce-ready] p+h5[data-v-9af136d0]:not([class]),#__nuxt p+ul[data-v-9af136d0]:not([class]),#__nuxt p+p[data-v-9af136d0]:not([class]),#__nuxt p+h1[data-v-9af136d0]:not([class]),#__nuxt p+h2[data-v-9af136d0]:not([class]),#__nuxt p+h3[data-v-9af136d0]:not([class]),#__nuxt p+h4[data-v-9af136d0]:not([class]),#__nuxt p+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-9af136d0]:not([class]),[vce-ready] h1+p[data-v-9af136d0]:not([class]),[vce-ready] h1+h1[data-v-9af136d0]:not([class]),[vce-ready] h1+h2[data-v-9af136d0]:not([class]),[vce-ready] h1+h3[data-v-9af136d0]:not([class]),[vce-ready] h1+h4[data-v-9af136d0]:not([class]),[vce-ready] h1+h5[data-v-9af136d0]:not([class]),#__nuxt h1+ul[data-v-9af136d0]:not([class]),#__nuxt h1+p[data-v-9af136d0]:not([class]),#__nuxt h1+h1[data-v-9af136d0]:not([class]),#__nuxt h1+h2[data-v-9af136d0]:not([class]),#__nuxt h1+h3[data-v-9af136d0]:not([class]),#__nuxt h1+h4[data-v-9af136d0]:not([class]),#__nuxt h1+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-9af136d0]:not([class]),[vce-ready] h2+p[data-v-9af136d0]:not([class]),[vce-ready] h2+h1[data-v-9af136d0]:not([class]),[vce-ready] h2+h2[data-v-9af136d0]:not([class]),[vce-ready] h2+h3[data-v-9af136d0]:not([class]),[vce-ready] h2+h4[data-v-9af136d0]:not([class]),[vce-ready] h2+h5[data-v-9af136d0]:not([class]),#__nuxt h2+ul[data-v-9af136d0]:not([class]),#__nuxt h2+p[data-v-9af136d0]:not([class]),#__nuxt h2+h1[data-v-9af136d0]:not([class]),#__nuxt h2+h2[data-v-9af136d0]:not([class]),#__nuxt h2+h3[data-v-9af136d0]:not([class]),#__nuxt h2+h4[data-v-9af136d0]:not([class]),#__nuxt h2+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-9af136d0]:not([class]),[vce-ready] h3+p[data-v-9af136d0]:not([class]),[vce-ready] h3+h1[data-v-9af136d0]:not([class]),[vce-ready] h3+h2[data-v-9af136d0]:not([class]),[vce-ready] h3+h3[data-v-9af136d0]:not([class]),[vce-ready] h3+h4[data-v-9af136d0]:not([class]),[vce-ready] h3+h5[data-v-9af136d0]:not([class]),#__nuxt h3+ul[data-v-9af136d0]:not([class]),#__nuxt h3+p[data-v-9af136d0]:not([class]),#__nuxt h3+h1[data-v-9af136d0]:not([class]),#__nuxt h3+h2[data-v-9af136d0]:not([class]),#__nuxt h3+h3[data-v-9af136d0]:not([class]),#__nuxt h3+h4[data-v-9af136d0]:not([class]),#__nuxt h3+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-9af136d0]:not([class]),[vce-ready] h4+p[data-v-9af136d0]:not([class]),[vce-ready] h4+h1[data-v-9af136d0]:not([class]),[vce-ready] h4+h2[data-v-9af136d0]:not([class]),[vce-ready] h4+h3[data-v-9af136d0]:not([class]),[vce-ready] h4+h4[data-v-9af136d0]:not([class]),[vce-ready] h4+h5[data-v-9af136d0]:not([class]),#__nuxt h4+ul[data-v-9af136d0]:not([class]),#__nuxt h4+p[data-v-9af136d0]:not([class]),#__nuxt h4+h1[data-v-9af136d0]:not([class]),#__nuxt h4+h2[data-v-9af136d0]:not([class]),#__nuxt h4+h3[data-v-9af136d0]:not([class]),#__nuxt h4+h4[data-v-9af136d0]:not([class]),#__nuxt h4+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-9af136d0]:not([class]),[vce-ready] h5+p[data-v-9af136d0]:not([class]),[vce-ready] h5+h1[data-v-9af136d0]:not([class]),[vce-ready] h5+h2[data-v-9af136d0]:not([class]),[vce-ready] h5+h3[data-v-9af136d0]:not([class]),[vce-ready] h5+h4[data-v-9af136d0]:not([class]),[vce-ready] h5+h5[data-v-9af136d0]:not([class]),#__nuxt h5+ul[data-v-9af136d0]:not([class]),#__nuxt h5+p[data-v-9af136d0]:not([class]),#__nuxt h5+h1[data-v-9af136d0]:not([class]),#__nuxt h5+h2[data-v-9af136d0]:not([class]),#__nuxt h5+h3[data-v-9af136d0]:not([class]),#__nuxt h5+h4[data-v-9af136d0]:not([class]),#__nuxt h5+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-9af136d0]:not([class]),[vce-ready] p+p[data-v-9af136d0]:not([class]),[vce-ready] p+h1[data-v-9af136d0]:not([class]),[vce-ready] p+h2[data-v-9af136d0]:not([class]),[vce-ready] p+h3[data-v-9af136d0]:not([class]),[vce-ready] p+h4[data-v-9af136d0]:not([class]),[vce-ready] p+h5[data-v-9af136d0]:not([class]),#__nuxt p+ul[data-v-9af136d0]:not([class]),#__nuxt p+p[data-v-9af136d0]:not([class]),#__nuxt p+h1[data-v-9af136d0]:not([class]),#__nuxt p+h2[data-v-9af136d0]:not([class]),#__nuxt p+h3[data-v-9af136d0]:not([class]),#__nuxt p+h4[data-v-9af136d0]:not([class]),#__nuxt p+h5[data-v-9af136d0]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-9af136d0]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-9af136d0]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-9af136d0]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-9af136d0]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-9af136d0]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-9af136d0]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-9af136d0]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-9af136d0]::after,#__nuxt [class*=body-] a[target=_blank][data-v-9af136d0]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-9af136d0]::after,#__nuxt p:not([class]) a[target=_blank][data-v-9af136d0]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-9af136d0],[vce-ready] [class*=heading-] a[href][data-v-9af136d0]:focus,[vce-ready] [class*=body-] a[href][data-v-9af136d0],[vce-ready] [class*=body-] a[href][data-v-9af136d0]:focus,[vce-ready] h1:not([class]) a[href][data-v-9af136d0],[vce-ready] h1:not([class]) a[href][data-v-9af136d0]:focus,[vce-ready] h2:not([class]) a[href][data-v-9af136d0],[vce-ready] h2:not([class]) a[href][data-v-9af136d0]:focus,[vce-ready] h3:not([class]) a[href][data-v-9af136d0],[vce-ready] h3:not([class]) a[href][data-v-9af136d0]:focus,[vce-ready] h4:not([class]) a[href][data-v-9af136d0],[vce-ready] h4:not([class]) a[href][data-v-9af136d0]:focus,[vce-ready] h5:not([class]) a[href][data-v-9af136d0],[vce-ready] h5:not([class]) a[href][data-v-9af136d0]:focus,[vce-ready] p:not([class]) a[href][data-v-9af136d0],[vce-ready] p:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt [class*=heading-] a[href][data-v-9af136d0],#__nuxt [class*=heading-] a[href][data-v-9af136d0]:focus,#__nuxt [class*=body-] a[href][data-v-9af136d0],#__nuxt [class*=body-] a[href][data-v-9af136d0]:focus,#__nuxt h1:not([class]) a[href][data-v-9af136d0],#__nuxt h1:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt h2:not([class]) a[href][data-v-9af136d0],#__nuxt h2:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt h3:not([class]) a[href][data-v-9af136d0],#__nuxt h3:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt h4:not([class]) a[href][data-v-9af136d0],#__nuxt h4:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt h5:not([class]) a[href][data-v-9af136d0],#__nuxt h5:not([class]) a[href][data-v-9af136d0]:focus,#__nuxt p:not([class]) a[href][data-v-9af136d0],#__nuxt p:not([class]) a[href][data-v-9af136d0]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-9af136d0]:hover,[vce-ready] [class*=heading-] a[href][data-v-9af136d0]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-9af136d0]:hover,[vce-ready] [class*=body-] a[href][data-v-9af136d0]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] h1:not([class]) a[href][data-v-9af136d0]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] h2:not([class]) a[href][data-v-9af136d0]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] h3:not([class]) a[href][data-v-9af136d0]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] h4:not([class]) a[href][data-v-9af136d0]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] h5:not([class]) a[href][data-v-9af136d0]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-9af136d0]:hover,[vce-ready] p:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-9af136d0]:hover,#__nuxt [class*=heading-] a[href][data-v-9af136d0]:focus:hover,#__nuxt [class*=body-] a[href][data-v-9af136d0]:hover,#__nuxt [class*=body-] a[href][data-v-9af136d0]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt h1:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt h2:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt h3:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt h4:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt h5:not([class]) a[href][data-v-9af136d0]:focus:hover,#__nuxt p:not([class]) a[href][data-v-9af136d0]:hover,#__nuxt p:not([class]) a[href][data-v-9af136d0]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-9af136d0],[vce-ready] .body--bold[data-v-9af136d0],#__nuxt .heading--bold[data-v-9af136d0],#__nuxt .body--bold[data-v-9af136d0]{font-weight:700}[vce-ready] .heading--regular[data-v-9af136d0],[vce-ready] .body--regular[data-v-9af136d0],#__nuxt .heading--regular[data-v-9af136d0],#__nuxt .body--regular[data-v-9af136d0]{font-weight:400}[vce-ready] .heading--light[data-v-9af136d0],[vce-ready] .body--light[data-v-9af136d0],#__nuxt .heading--light[data-v-9af136d0],#__nuxt .body--light[data-v-9af136d0]{font-weight:100}[vce-ready] .heading--flush[data-v-9af136d0],[vce-ready] .body--flush[data-v-9af136d0],#__nuxt .heading--flush[data-v-9af136d0],#__nuxt .body--flush[data-v-9af136d0]{margin-bottom:0;margin-top:0}.app-container[data-v-9af136d0]{margin:0 auto;max-width:90rem;width:100%}.app-container--fullwidth[data-v-9af136d0]{max-width:none}.app-row[data-v-9af136d0]{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;position:relative}.app-col.reverse[data-v-9af136d0]{flex-direction:column-reverse}@media(max-width: 767px){.app-col--default[data-v-9af136d0]{margin-left:1rem;margin-right:1rem}.app-col--default.app-col-xs[data-v-9af136d0]{flex-grow:1;flex-basis:100%}}@media(max-width: 1024px){.app-col--default-md[data-v-9af136d0]{margin-left:1rem;margin-right:1rem}.app-col--default-md.app-col-xs[data-v-9af136d0]{flex-grow:1;flex-basis:100%}}@media(max-width: 1439px){.app-col--default-lg[data-v-9af136d0]{margin-left:1rem;margin-right:1rem}.app-col--default-lg.app-col-xs[data-v-9af136d0]{flex-grow:1;flex-basis:100%}}.app-row-xs--start[data-v-9af136d0]{justify-content:flex-start}.app-row-xs--center[data-v-9af136d0]{justify-content:center}.app-row-xs--end[data-v-9af136d0]{justify-content:flex-end}.app-row-xs--around[data-v-9af136d0]{justify-content:space-around}.app-row-xs--between[data-v-9af136d0]{justify-content:space-between}.app-row-xs--top[data-v-9af136d0]{align-items:flex-start}.app-row-xs--middle[data-v-9af136d0]{align-items:center}.app-row-xs--bottom[data-v-9af136d0]{align-items:flex-end}.app-row-xs--reverse[data-v-9af136d0]{flex-direction:row-reverse}.app-row-xs--wrap[data-v-9af136d0]{flex-wrap:wrap}.app-row-xs--nowrap[data-v-9af136d0]{flex-wrap:nowrap}.app-col-xs[data-v-9af136d0]{flex-basis:0;flex-grow:1;width:100%}.app-col-xs--first[data-v-9af136d0]{order:-1}.app-col-xs--last[data-v-9af136d0]{order:1}.app-col-xs--origin[data-v-9af136d0]{order:0}.app-col-xs--hide[data-v-9af136d0]{display:none}.app-col-xs--show[data-v-9af136d0]{display:flex}.app-col-xs--show-block[data-v-9af136d0]{display:block}.app-col-xs--show-inline-block[data-v-9af136d0]{display:inline-block}.app-col-xs-1[data-v-9af136d0]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-xs-offset-0[data-v-9af136d0]{margin-left:0}.app-col-xs-offset-right-0[data-v-9af136d0]{margin-right:0}.app-col-xs-offset-1[data-v-9af136d0]{margin-left:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-1[data-v-9af136d0]{margin-left:3.75rem}}.app-col-xs-offset-right-1[data-v-9af136d0]{margin-right:4.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-1[data-v-9af136d0]{margin-right:3.75rem}}.app-col-xs-2[data-v-9af136d0]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}.app-col-xs-offset-2[data-v-9af136d0]{margin-left:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-2[data-v-9af136d0]{margin-left:7.5rem}}.app-col-xs-offset-right-2[data-v-9af136d0]{margin-right:8.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-2[data-v-9af136d0]{margin-right:7.5rem}}.app-col-xs-3[data-v-9af136d0]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}.app-col-xs-offset-3[data-v-9af136d0]{margin-left:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-3[data-v-9af136d0]{margin-left:11.25rem}}.app-col-xs-offset-right-3[data-v-9af136d0]{margin-right:12.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-3[data-v-9af136d0]{margin-right:11.25rem}}.app-col-xs-4[data-v-9af136d0]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}.app-col-xs-offset-4[data-v-9af136d0]{margin-left:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-4[data-v-9af136d0]{margin-left:15rem}}.app-col-xs-offset-right-4[data-v-9af136d0]{margin-right:16.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-4[data-v-9af136d0]{margin-right:15rem}}.app-col-xs-5[data-v-9af136d0]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}.app-col-xs-offset-5[data-v-9af136d0]{margin-left:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-5[data-v-9af136d0]{margin-left:18.75rem}}.app-col-xs-offset-right-5[data-v-9af136d0]{margin-right:20.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-5[data-v-9af136d0]{margin-right:18.75rem}}.app-col-xs-6[data-v-9af136d0]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}.app-col-xs-offset-6[data-v-9af136d0]{margin-left:25vw}@media(min-width: 1440px){.app-col-xs-offset-6[data-v-9af136d0]{margin-left:22.5rem}}.app-col-xs-offset-right-6[data-v-9af136d0]{margin-right:25vw}@media(min-width: 1440px){.app-col-xs-offset-right-6[data-v-9af136d0]{margin-right:22.5rem}}.app-col-xs-7[data-v-9af136d0]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}.app-col-xs-offset-7[data-v-9af136d0]{margin-left:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-7[data-v-9af136d0]{margin-left:26.25rem}}.app-col-xs-offset-right-7[data-v-9af136d0]{margin-right:29.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-7[data-v-9af136d0]{margin-right:26.25rem}}.app-col-xs-8[data-v-9af136d0]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}.app-col-xs-offset-8[data-v-9af136d0]{margin-left:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-8[data-v-9af136d0]{margin-left:30rem}}.app-col-xs-offset-right-8[data-v-9af136d0]{margin-right:33.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-8[data-v-9af136d0]{margin-right:30rem}}.app-col-xs-9[data-v-9af136d0]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}.app-col-xs-offset-9[data-v-9af136d0]{margin-left:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-9[data-v-9af136d0]{margin-left:33.75rem}}.app-col-xs-offset-right-9[data-v-9af136d0]{margin-right:37.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-9[data-v-9af136d0]{margin-right:33.75rem}}.app-col-xs-10[data-v-9af136d0]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}.app-col-xs-offset-10[data-v-9af136d0]{margin-left:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-10[data-v-9af136d0]{margin-left:37.5rem}}.app-col-xs-offset-right-10[data-v-9af136d0]{margin-right:41.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-10[data-v-9af136d0]{margin-right:37.5rem}}.app-col-xs-11[data-v-9af136d0]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}.app-col-xs-offset-11[data-v-9af136d0]{margin-left:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-11[data-v-9af136d0]{margin-left:41.25rem}}.app-col-xs-offset-right-11[data-v-9af136d0]{margin-right:45.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-11[data-v-9af136d0]{margin-right:41.25rem}}.app-col-xs-12[data-v-9af136d0]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}.app-col-xs-offset-12[data-v-9af136d0]{margin-left:50vw}@media(min-width: 1440px){.app-col-xs-offset-12[data-v-9af136d0]{margin-left:45rem}}.app-col-xs-offset-right-12[data-v-9af136d0]{margin-right:50vw}@media(min-width: 1440px){.app-col-xs-offset-right-12[data-v-9af136d0]{margin-right:45rem}}.app-col-xs-13[data-v-9af136d0]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}.app-col-xs-offset-13[data-v-9af136d0]{margin-left:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-13[data-v-9af136d0]{margin-left:48.75rem}}.app-col-xs-offset-right-13[data-v-9af136d0]{margin-right:54.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-13[data-v-9af136d0]{margin-right:48.75rem}}.app-col-xs-14[data-v-9af136d0]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}.app-col-xs-offset-14[data-v-9af136d0]{margin-left:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-14[data-v-9af136d0]{margin-left:52.5rem}}.app-col-xs-offset-right-14[data-v-9af136d0]{margin-right:58.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-14[data-v-9af136d0]{margin-right:52.5rem}}.app-col-xs-15[data-v-9af136d0]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}.app-col-xs-offset-15[data-v-9af136d0]{margin-left:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-15[data-v-9af136d0]{margin-left:56.25rem}}.app-col-xs-offset-right-15[data-v-9af136d0]{margin-right:62.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-15[data-v-9af136d0]{margin-right:56.25rem}}.app-col-xs-16[data-v-9af136d0]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}.app-col-xs-offset-16[data-v-9af136d0]{margin-left:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-16[data-v-9af136d0]{margin-left:60rem}}.app-col-xs-offset-right-16[data-v-9af136d0]{margin-right:66.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-16[data-v-9af136d0]{margin-right:60rem}}.app-col-xs-17[data-v-9af136d0]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}.app-col-xs-offset-17[data-v-9af136d0]{margin-left:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-17[data-v-9af136d0]{margin-left:63.75rem}}.app-col-xs-offset-right-17[data-v-9af136d0]{margin-right:70.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-17[data-v-9af136d0]{margin-right:63.75rem}}.app-col-xs-18[data-v-9af136d0]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}.app-col-xs-offset-18[data-v-9af136d0]{margin-left:75vw}@media(min-width: 1440px){.app-col-xs-offset-18[data-v-9af136d0]{margin-left:67.5rem}}.app-col-xs-offset-right-18[data-v-9af136d0]{margin-right:75vw}@media(min-width: 1440px){.app-col-xs-offset-right-18[data-v-9af136d0]{margin-right:67.5rem}}.app-col-xs-19[data-v-9af136d0]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}.app-col-xs-offset-19[data-v-9af136d0]{margin-left:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-19[data-v-9af136d0]{margin-left:71.25rem}}.app-col-xs-offset-right-19[data-v-9af136d0]{margin-right:79.1666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-19[data-v-9af136d0]{margin-right:71.25rem}}.app-col-xs-20[data-v-9af136d0]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}.app-col-xs-offset-20[data-v-9af136d0]{margin-left:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-20[data-v-9af136d0]{margin-left:75rem}}.app-col-xs-offset-right-20[data-v-9af136d0]{margin-right:83.3333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-20[data-v-9af136d0]{margin-right:75rem}}.app-col-xs-21[data-v-9af136d0]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}.app-col-xs-offset-21[data-v-9af136d0]{margin-left:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-21[data-v-9af136d0]{margin-left:78.75rem}}.app-col-xs-offset-right-21[data-v-9af136d0]{margin-right:87.5vw}@media(min-width: 1440px){.app-col-xs-offset-right-21[data-v-9af136d0]{margin-right:78.75rem}}.app-col-xs-22[data-v-9af136d0]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}.app-col-xs-offset-22[data-v-9af136d0]{margin-left:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-22[data-v-9af136d0]{margin-left:82.5rem}}.app-col-xs-offset-right-22[data-v-9af136d0]{margin-right:91.6666666667vw}@media(min-width: 1440px){.app-col-xs-offset-right-22[data-v-9af136d0]{margin-right:82.5rem}}.app-col-xs-23[data-v-9af136d0]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}.app-col-xs-offset-23[data-v-9af136d0]{margin-left:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-23[data-v-9af136d0]{margin-left:86.25rem}}.app-col-xs-offset-right-23[data-v-9af136d0]{margin-right:95.8333333333vw}@media(min-width: 1440px){.app-col-xs-offset-right-23[data-v-9af136d0]{margin-right:86.25rem}}.app-col-xs-24[data-v-9af136d0]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}.app-col-xs-offset-24[data-v-9af136d0]{margin-left:100vw}@media(min-width: 1440px){.app-col-xs-offset-24[data-v-9af136d0]{margin-left:90rem}}.app-col-xs-offset-right-24[data-v-9af136d0]{margin-right:100vw}@media(min-width: 1440px){.app-col-xs-offset-right-24[data-v-9af136d0]{margin-right:90rem}}.app-col--default.app-col-xs-fit[data-v-9af136d0],.app-col-xs-fit[data-v-9af136d0]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}.app-col--default.app-col-xs-fill[data-v-9af136d0],.app-col-xs-fill[data-v-9af136d0]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}.app-spacer-xs-0[data-v-9af136d0]{height:0rem}.app-spacer-xs-4[data-v-9af136d0]{height:.25rem}.app-spacer-xs-8[data-v-9af136d0]{height:.5rem}.app-spacer-xs-16[data-v-9af136d0]{height:1rem}.app-spacer-xs-24[data-v-9af136d0]{height:1.5rem}.app-spacer-xs-32[data-v-9af136d0]{height:2rem}.app-spacer-xs-40[data-v-9af136d0]{height:2.5rem}.app-spacer-xs-60[data-v-9af136d0]{height:3.75rem}.app-spacer-xs-64[data-v-9af136d0]{height:4rem}.app-spacer-xs-80[data-v-9af136d0]{height:5rem}.app-spacer-xs-120[data-v-9af136d0]{height:7.5rem}.app-spacer-xs-180[data-v-9af136d0]{height:11.25rem}.-hide-xs[data-v-9af136d0]{display:none !important}.-show-xs[data-v-9af136d0]{display:unset !important}.-nowrap-xs[data-v-9af136d0]{white-space:nowrap}.-wrap-xs[data-v-9af136d0]{white-space:normal}@media(min-width: 768px){.app-row-md--start[data-v-9af136d0]{justify-content:flex-start}.app-row-md--center[data-v-9af136d0]{justify-content:center}.app-row-md--end[data-v-9af136d0]{justify-content:flex-end}.app-row-md--around[data-v-9af136d0]{justify-content:space-around}.app-row-md--between[data-v-9af136d0]{justify-content:space-between}.app-row-md--top[data-v-9af136d0]{align-items:flex-start}.app-row-md--middle[data-v-9af136d0]{align-items:center}.app-row-md--bottom[data-v-9af136d0]{align-items:flex-end}.app-row-md--reverse[data-v-9af136d0]{flex-direction:row-reverse}.app-row-md--wrap[data-v-9af136d0]{flex-wrap:wrap}.app-row-md--nowrap[data-v-9af136d0]{flex-wrap:nowrap}.app-col-md[data-v-9af136d0]{flex-basis:0;flex-grow:1;width:100%}.app-col-md--first[data-v-9af136d0]{order:-1}.app-col-md--last[data-v-9af136d0]{order:1}.app-col-md--origin[data-v-9af136d0]{order:0}.app-col-md--hide[data-v-9af136d0]{display:none}.app-col-md--show[data-v-9af136d0]{display:flex}.app-col-md--show-block[data-v-9af136d0]{display:block}.app-col-md--show-inline-block[data-v-9af136d0]{display:inline-block}.app-col-md-1[data-v-9af136d0]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-md-offset-0[data-v-9af136d0]{margin-left:0}.app-col-md-offset-right-0[data-v-9af136d0]{margin-right:0}.app-col-md-offset-1[data-v-9af136d0]{margin-left:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-1[data-v-9af136d0]{margin-left:3.75rem}}@media(min-width: 768px){.app-col-md-offset-right-1[data-v-9af136d0]{margin-right:4.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-1[data-v-9af136d0]{margin-right:3.75rem}}@media(min-width: 768px){.app-col-md-2[data-v-9af136d0]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 768px){.app-col-md-offset-2[data-v-9af136d0]{margin-left:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-2[data-v-9af136d0]{margin-left:7.5rem}}@media(min-width: 768px){.app-col-md-offset-right-2[data-v-9af136d0]{margin-right:8.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-2[data-v-9af136d0]{margin-right:7.5rem}}@media(min-width: 768px){.app-col-md-3[data-v-9af136d0]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 768px){.app-col-md-offset-3[data-v-9af136d0]{margin-left:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-3[data-v-9af136d0]{margin-left:11.25rem}}@media(min-width: 768px){.app-col-md-offset-right-3[data-v-9af136d0]{margin-right:12.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-3[data-v-9af136d0]{margin-right:11.25rem}}@media(min-width: 768px){.app-col-md-4[data-v-9af136d0]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 768px){.app-col-md-offset-4[data-v-9af136d0]{margin-left:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-4[data-v-9af136d0]{margin-left:15rem}}@media(min-width: 768px){.app-col-md-offset-right-4[data-v-9af136d0]{margin-right:16.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-4[data-v-9af136d0]{margin-right:15rem}}@media(min-width: 768px){.app-col-md-5[data-v-9af136d0]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 768px){.app-col-md-offset-5[data-v-9af136d0]{margin-left:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-5[data-v-9af136d0]{margin-left:18.75rem}}@media(min-width: 768px){.app-col-md-offset-right-5[data-v-9af136d0]{margin-right:20.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-5[data-v-9af136d0]{margin-right:18.75rem}}@media(min-width: 768px){.app-col-md-6[data-v-9af136d0]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 768px){.app-col-md-offset-6[data-v-9af136d0]{margin-left:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-6[data-v-9af136d0]{margin-left:22.5rem}}@media(min-width: 768px){.app-col-md-offset-right-6[data-v-9af136d0]{margin-right:25vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-6[data-v-9af136d0]{margin-right:22.5rem}}@media(min-width: 768px){.app-col-md-7[data-v-9af136d0]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 768px){.app-col-md-offset-7[data-v-9af136d0]{margin-left:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-7[data-v-9af136d0]{margin-left:26.25rem}}@media(min-width: 768px){.app-col-md-offset-right-7[data-v-9af136d0]{margin-right:29.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-7[data-v-9af136d0]{margin-right:26.25rem}}@media(min-width: 768px){.app-col-md-8[data-v-9af136d0]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 768px){.app-col-md-offset-8[data-v-9af136d0]{margin-left:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-8[data-v-9af136d0]{margin-left:30rem}}@media(min-width: 768px){.app-col-md-offset-right-8[data-v-9af136d0]{margin-right:33.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-8[data-v-9af136d0]{margin-right:30rem}}@media(min-width: 768px){.app-col-md-9[data-v-9af136d0]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 768px){.app-col-md-offset-9[data-v-9af136d0]{margin-left:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-9[data-v-9af136d0]{margin-left:33.75rem}}@media(min-width: 768px){.app-col-md-offset-right-9[data-v-9af136d0]{margin-right:37.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-9[data-v-9af136d0]{margin-right:33.75rem}}@media(min-width: 768px){.app-col-md-10[data-v-9af136d0]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 768px){.app-col-md-offset-10[data-v-9af136d0]{margin-left:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-10[data-v-9af136d0]{margin-left:37.5rem}}@media(min-width: 768px){.app-col-md-offset-right-10[data-v-9af136d0]{margin-right:41.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-10[data-v-9af136d0]{margin-right:37.5rem}}@media(min-width: 768px){.app-col-md-11[data-v-9af136d0]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 768px){.app-col-md-offset-11[data-v-9af136d0]{margin-left:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-11[data-v-9af136d0]{margin-left:41.25rem}}@media(min-width: 768px){.app-col-md-offset-right-11[data-v-9af136d0]{margin-right:45.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-11[data-v-9af136d0]{margin-right:41.25rem}}@media(min-width: 768px){.app-col-md-12[data-v-9af136d0]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 768px){.app-col-md-offset-12[data-v-9af136d0]{margin-left:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-12[data-v-9af136d0]{margin-left:45rem}}@media(min-width: 768px){.app-col-md-offset-right-12[data-v-9af136d0]{margin-right:50vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-12[data-v-9af136d0]{margin-right:45rem}}@media(min-width: 768px){.app-col-md-13[data-v-9af136d0]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 768px){.app-col-md-offset-13[data-v-9af136d0]{margin-left:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-13[data-v-9af136d0]{margin-left:48.75rem}}@media(min-width: 768px){.app-col-md-offset-right-13[data-v-9af136d0]{margin-right:54.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-13[data-v-9af136d0]{margin-right:48.75rem}}@media(min-width: 768px){.app-col-md-14[data-v-9af136d0]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 768px){.app-col-md-offset-14[data-v-9af136d0]{margin-left:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-14[data-v-9af136d0]{margin-left:52.5rem}}@media(min-width: 768px){.app-col-md-offset-right-14[data-v-9af136d0]{margin-right:58.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-14[data-v-9af136d0]{margin-right:52.5rem}}@media(min-width: 768px){.app-col-md-15[data-v-9af136d0]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 768px){.app-col-md-offset-15[data-v-9af136d0]{margin-left:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-15[data-v-9af136d0]{margin-left:56.25rem}}@media(min-width: 768px){.app-col-md-offset-right-15[data-v-9af136d0]{margin-right:62.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-15[data-v-9af136d0]{margin-right:56.25rem}}@media(min-width: 768px){.app-col-md-16[data-v-9af136d0]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 768px){.app-col-md-offset-16[data-v-9af136d0]{margin-left:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-16[data-v-9af136d0]{margin-left:60rem}}@media(min-width: 768px){.app-col-md-offset-right-16[data-v-9af136d0]{margin-right:66.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-16[data-v-9af136d0]{margin-right:60rem}}@media(min-width: 768px){.app-col-md-17[data-v-9af136d0]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 768px){.app-col-md-offset-17[data-v-9af136d0]{margin-left:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-17[data-v-9af136d0]{margin-left:63.75rem}}@media(min-width: 768px){.app-col-md-offset-right-17[data-v-9af136d0]{margin-right:70.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-17[data-v-9af136d0]{margin-right:63.75rem}}@media(min-width: 768px){.app-col-md-18[data-v-9af136d0]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 768px){.app-col-md-offset-18[data-v-9af136d0]{margin-left:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-18[data-v-9af136d0]{margin-left:67.5rem}}@media(min-width: 768px){.app-col-md-offset-right-18[data-v-9af136d0]{margin-right:75vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-18[data-v-9af136d0]{margin-right:67.5rem}}@media(min-width: 768px){.app-col-md-19[data-v-9af136d0]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 768px){.app-col-md-offset-19[data-v-9af136d0]{margin-left:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-19[data-v-9af136d0]{margin-left:71.25rem}}@media(min-width: 768px){.app-col-md-offset-right-19[data-v-9af136d0]{margin-right:79.1666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-19[data-v-9af136d0]{margin-right:71.25rem}}@media(min-width: 768px){.app-col-md-20[data-v-9af136d0]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 768px){.app-col-md-offset-20[data-v-9af136d0]{margin-left:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-20[data-v-9af136d0]{margin-left:75rem}}@media(min-width: 768px){.app-col-md-offset-right-20[data-v-9af136d0]{margin-right:83.3333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-20[data-v-9af136d0]{margin-right:75rem}}@media(min-width: 768px){.app-col-md-21[data-v-9af136d0]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 768px){.app-col-md-offset-21[data-v-9af136d0]{margin-left:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-21[data-v-9af136d0]{margin-left:78.75rem}}@media(min-width: 768px){.app-col-md-offset-right-21[data-v-9af136d0]{margin-right:87.5vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-21[data-v-9af136d0]{margin-right:78.75rem}}@media(min-width: 768px){.app-col-md-22[data-v-9af136d0]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 768px){.app-col-md-offset-22[data-v-9af136d0]{margin-left:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-22[data-v-9af136d0]{margin-left:82.5rem}}@media(min-width: 768px){.app-col-md-offset-right-22[data-v-9af136d0]{margin-right:91.6666666667vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-22[data-v-9af136d0]{margin-right:82.5rem}}@media(min-width: 768px){.app-col-md-23[data-v-9af136d0]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 768px){.app-col-md-offset-23[data-v-9af136d0]{margin-left:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-23[data-v-9af136d0]{margin-left:86.25rem}}@media(min-width: 768px){.app-col-md-offset-right-23[data-v-9af136d0]{margin-right:95.8333333333vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-23[data-v-9af136d0]{margin-right:86.25rem}}@media(min-width: 768px){.app-col-md-24[data-v-9af136d0]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 768px){.app-col-md-offset-24[data-v-9af136d0]{margin-left:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-24[data-v-9af136d0]{margin-left:90rem}}@media(min-width: 768px){.app-col-md-offset-right-24[data-v-9af136d0]{margin-right:100vw}}@media(min-width: 768px)and (min-width: 1440px){.app-col-md-offset-right-24[data-v-9af136d0]{margin-right:90rem}}@media(min-width: 768px){.app-col--default.app-col-md-fit[data-v-9af136d0],.app-col-md-fit[data-v-9af136d0]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-col--default.app-col-md-fill[data-v-9af136d0],.app-col-md-fill[data-v-9af136d0]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 768px){.app-spacer-md-0[data-v-9af136d0]{height:0rem}}@media(min-width: 768px){.app-spacer-md-4[data-v-9af136d0]{height:.25rem}}@media(min-width: 768px){.app-spacer-md-8[data-v-9af136d0]{height:.5rem}}@media(min-width: 768px){.app-spacer-md-16[data-v-9af136d0]{height:1rem}}@media(min-width: 768px){.app-spacer-md-24[data-v-9af136d0]{height:1.5rem}}@media(min-width: 768px){.app-spacer-md-32[data-v-9af136d0]{height:2rem}}@media(min-width: 768px){.app-spacer-md-40[data-v-9af136d0]{height:2.5rem}}@media(min-width: 768px){.app-spacer-md-60[data-v-9af136d0]{height:3.75rem}}@media(min-width: 768px){.app-spacer-md-64[data-v-9af136d0]{height:4rem}}@media(min-width: 768px){.app-spacer-md-80[data-v-9af136d0]{height:5rem}}@media(min-width: 768px){.app-spacer-md-120[data-v-9af136d0]{height:7.5rem}}@media(min-width: 768px){.app-spacer-md-180[data-v-9af136d0]{height:11.25rem}}@media(min-width: 768px){.-hide-md[data-v-9af136d0]{display:none !important}}@media(min-width: 768px){.-show-md[data-v-9af136d0]{display:unset !important}}@media(min-width: 768px){.-nowrap-md[data-v-9af136d0]{white-space:nowrap}}@media(min-width: 768px){.-wrap-md[data-v-9af136d0]{white-space:normal}}@media(min-width: 1025px){.app-row-lg--start[data-v-9af136d0]{justify-content:flex-start}.app-row-lg--center[data-v-9af136d0]{justify-content:center}.app-row-lg--end[data-v-9af136d0]{justify-content:flex-end}.app-row-lg--around[data-v-9af136d0]{justify-content:space-around}.app-row-lg--between[data-v-9af136d0]{justify-content:space-between}.app-row-lg--top[data-v-9af136d0]{align-items:flex-start}.app-row-lg--middle[data-v-9af136d0]{align-items:center}.app-row-lg--bottom[data-v-9af136d0]{align-items:flex-end}.app-row-lg--reverse[data-v-9af136d0]{flex-direction:row-reverse}.app-row-lg--wrap[data-v-9af136d0]{flex-wrap:wrap}.app-row-lg--nowrap[data-v-9af136d0]{flex-wrap:nowrap}.app-col-lg[data-v-9af136d0]{flex-basis:0;flex-grow:1;width:100%}.app-col-lg--first[data-v-9af136d0]{order:-1}.app-col-lg--last[data-v-9af136d0]{order:1}.app-col-lg--origin[data-v-9af136d0]{order:0}.app-col-lg--hide[data-v-9af136d0]{display:none}.app-col-lg--show[data-v-9af136d0]{display:flex}.app-col-lg--show-block[data-v-9af136d0]{display:block}.app-col-lg--show-inline-block[data-v-9af136d0]{display:inline-block}.app-col-lg-1[data-v-9af136d0]{flex:0 0 auto;flex-basis:4.1666666667vw;width:4.1666666667vw;max-width:3.75rem}.app-col-lg-offset-0[data-v-9af136d0]{margin-left:0}.app-col-lg-offset-right-0[data-v-9af136d0]{margin-right:0}.app-col-lg-offset-1[data-v-9af136d0]{margin-left:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-1[data-v-9af136d0]{margin-left:3.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-1[data-v-9af136d0]{margin-right:4.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-1[data-v-9af136d0]{margin-right:3.75rem}}@media(min-width: 1025px){.app-col-lg-2[data-v-9af136d0]{flex:0 0 auto;flex-basis:8.3333333333vw;width:8.3333333333vw;max-width:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-2[data-v-9af136d0]{margin-left:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-2[data-v-9af136d0]{margin-left:7.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-2[data-v-9af136d0]{margin-right:8.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-2[data-v-9af136d0]{margin-right:7.5rem}}@media(min-width: 1025px){.app-col-lg-3[data-v-9af136d0]{flex:0 0 auto;flex-basis:12.5vw;width:12.5vw;max-width:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-3[data-v-9af136d0]{margin-left:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-3[data-v-9af136d0]{margin-left:11.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-3[data-v-9af136d0]{margin-right:12.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-3[data-v-9af136d0]{margin-right:11.25rem}}@media(min-width: 1025px){.app-col-lg-4[data-v-9af136d0]{flex:0 0 auto;flex-basis:16.6666666667vw;width:16.6666666667vw;max-width:15rem}}@media(min-width: 1025px){.app-col-lg-offset-4[data-v-9af136d0]{margin-left:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-4[data-v-9af136d0]{margin-left:15rem}}@media(min-width: 1025px){.app-col-lg-offset-right-4[data-v-9af136d0]{margin-right:16.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-4[data-v-9af136d0]{margin-right:15rem}}@media(min-width: 1025px){.app-col-lg-5[data-v-9af136d0]{flex:0 0 auto;flex-basis:20.8333333333vw;width:20.8333333333vw;max-width:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-5[data-v-9af136d0]{margin-left:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-5[data-v-9af136d0]{margin-left:18.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-5[data-v-9af136d0]{margin-right:20.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-5[data-v-9af136d0]{margin-right:18.75rem}}@media(min-width: 1025px){.app-col-lg-6[data-v-9af136d0]{flex:0 0 auto;flex-basis:25vw;width:25vw;max-width:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-6[data-v-9af136d0]{margin-left:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-6[data-v-9af136d0]{margin-left:22.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-6[data-v-9af136d0]{margin-right:25vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-6[data-v-9af136d0]{margin-right:22.5rem}}@media(min-width: 1025px){.app-col-lg-7[data-v-9af136d0]{flex:0 0 auto;flex-basis:29.1666666667vw;width:29.1666666667vw;max-width:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-7[data-v-9af136d0]{margin-left:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-7[data-v-9af136d0]{margin-left:26.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-7[data-v-9af136d0]{margin-right:29.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-7[data-v-9af136d0]{margin-right:26.25rem}}@media(min-width: 1025px){.app-col-lg-8[data-v-9af136d0]{flex:0 0 auto;flex-basis:33.3333333333vw;width:33.3333333333vw;max-width:30rem}}@media(min-width: 1025px){.app-col-lg-offset-8[data-v-9af136d0]{margin-left:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-8[data-v-9af136d0]{margin-left:30rem}}@media(min-width: 1025px){.app-col-lg-offset-right-8[data-v-9af136d0]{margin-right:33.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-8[data-v-9af136d0]{margin-right:30rem}}@media(min-width: 1025px){.app-col-lg-9[data-v-9af136d0]{flex:0 0 auto;flex-basis:37.5vw;width:37.5vw;max-width:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-9[data-v-9af136d0]{margin-left:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-9[data-v-9af136d0]{margin-left:33.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-9[data-v-9af136d0]{margin-right:37.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-9[data-v-9af136d0]{margin-right:33.75rem}}@media(min-width: 1025px){.app-col-lg-10[data-v-9af136d0]{flex:0 0 auto;flex-basis:41.6666666667vw;width:41.6666666667vw;max-width:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-10[data-v-9af136d0]{margin-left:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-10[data-v-9af136d0]{margin-left:37.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-10[data-v-9af136d0]{margin-right:41.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-10[data-v-9af136d0]{margin-right:37.5rem}}@media(min-width: 1025px){.app-col-lg-11[data-v-9af136d0]{flex:0 0 auto;flex-basis:45.8333333333vw;width:45.8333333333vw;max-width:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-11[data-v-9af136d0]{margin-left:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-11[data-v-9af136d0]{margin-left:41.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-11[data-v-9af136d0]{margin-right:45.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-11[data-v-9af136d0]{margin-right:41.25rem}}@media(min-width: 1025px){.app-col-lg-12[data-v-9af136d0]{flex:0 0 auto;flex-basis:50vw;width:50vw;max-width:45rem}}@media(min-width: 1025px){.app-col-lg-offset-12[data-v-9af136d0]{margin-left:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-12[data-v-9af136d0]{margin-left:45rem}}@media(min-width: 1025px){.app-col-lg-offset-right-12[data-v-9af136d0]{margin-right:50vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-12[data-v-9af136d0]{margin-right:45rem}}@media(min-width: 1025px){.app-col-lg-13[data-v-9af136d0]{flex:0 0 auto;flex-basis:54.1666666667vw;width:54.1666666667vw;max-width:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-13[data-v-9af136d0]{margin-left:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-13[data-v-9af136d0]{margin-left:48.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-13[data-v-9af136d0]{margin-right:54.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-13[data-v-9af136d0]{margin-right:48.75rem}}@media(min-width: 1025px){.app-col-lg-14[data-v-9af136d0]{flex:0 0 auto;flex-basis:58.3333333333vw;width:58.3333333333vw;max-width:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-14[data-v-9af136d0]{margin-left:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-14[data-v-9af136d0]{margin-left:52.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-14[data-v-9af136d0]{margin-right:58.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-14[data-v-9af136d0]{margin-right:52.5rem}}@media(min-width: 1025px){.app-col-lg-15[data-v-9af136d0]{flex:0 0 auto;flex-basis:62.5vw;width:62.5vw;max-width:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-15[data-v-9af136d0]{margin-left:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-15[data-v-9af136d0]{margin-left:56.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-15[data-v-9af136d0]{margin-right:62.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-15[data-v-9af136d0]{margin-right:56.25rem}}@media(min-width: 1025px){.app-col-lg-16[data-v-9af136d0]{flex:0 0 auto;flex-basis:66.6666666667vw;width:66.6666666667vw;max-width:60rem}}@media(min-width: 1025px){.app-col-lg-offset-16[data-v-9af136d0]{margin-left:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-16[data-v-9af136d0]{margin-left:60rem}}@media(min-width: 1025px){.app-col-lg-offset-right-16[data-v-9af136d0]{margin-right:66.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-16[data-v-9af136d0]{margin-right:60rem}}@media(min-width: 1025px){.app-col-lg-17[data-v-9af136d0]{flex:0 0 auto;flex-basis:70.8333333333vw;width:70.8333333333vw;max-width:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-17[data-v-9af136d0]{margin-left:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-17[data-v-9af136d0]{margin-left:63.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-17[data-v-9af136d0]{margin-right:70.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-17[data-v-9af136d0]{margin-right:63.75rem}}@media(min-width: 1025px){.app-col-lg-18[data-v-9af136d0]{flex:0 0 auto;flex-basis:75vw;width:75vw;max-width:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-18[data-v-9af136d0]{margin-left:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-18[data-v-9af136d0]{margin-left:67.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-18[data-v-9af136d0]{margin-right:75vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-18[data-v-9af136d0]{margin-right:67.5rem}}@media(min-width: 1025px){.app-col-lg-19[data-v-9af136d0]{flex:0 0 auto;flex-basis:79.1666666667vw;width:79.1666666667vw;max-width:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-19[data-v-9af136d0]{margin-left:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-19[data-v-9af136d0]{margin-left:71.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-19[data-v-9af136d0]{margin-right:79.1666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-19[data-v-9af136d0]{margin-right:71.25rem}}@media(min-width: 1025px){.app-col-lg-20[data-v-9af136d0]{flex:0 0 auto;flex-basis:83.3333333333vw;width:83.3333333333vw;max-width:75rem}}@media(min-width: 1025px){.app-col-lg-offset-20[data-v-9af136d0]{margin-left:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-20[data-v-9af136d0]{margin-left:75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-20[data-v-9af136d0]{margin-right:83.3333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-20[data-v-9af136d0]{margin-right:75rem}}@media(min-width: 1025px){.app-col-lg-21[data-v-9af136d0]{flex:0 0 auto;flex-basis:87.5vw;width:87.5vw;max-width:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-21[data-v-9af136d0]{margin-left:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-21[data-v-9af136d0]{margin-left:78.75rem}}@media(min-width: 1025px){.app-col-lg-offset-right-21[data-v-9af136d0]{margin-right:87.5vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-21[data-v-9af136d0]{margin-right:78.75rem}}@media(min-width: 1025px){.app-col-lg-22[data-v-9af136d0]{flex:0 0 auto;flex-basis:91.6666666667vw;width:91.6666666667vw;max-width:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-22[data-v-9af136d0]{margin-left:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-22[data-v-9af136d0]{margin-left:82.5rem}}@media(min-width: 1025px){.app-col-lg-offset-right-22[data-v-9af136d0]{margin-right:91.6666666667vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-22[data-v-9af136d0]{margin-right:82.5rem}}@media(min-width: 1025px){.app-col-lg-23[data-v-9af136d0]{flex:0 0 auto;flex-basis:95.8333333333vw;width:95.8333333333vw;max-width:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-23[data-v-9af136d0]{margin-left:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-23[data-v-9af136d0]{margin-left:86.25rem}}@media(min-width: 1025px){.app-col-lg-offset-right-23[data-v-9af136d0]{margin-right:95.8333333333vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-23[data-v-9af136d0]{margin-right:86.25rem}}@media(min-width: 1025px){.app-col-lg-24[data-v-9af136d0]{flex:0 0 auto;flex-basis:100vw;width:100vw;max-width:90rem}}@media(min-width: 1025px){.app-col-lg-offset-24[data-v-9af136d0]{margin-left:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-24[data-v-9af136d0]{margin-left:90rem}}@media(min-width: 1025px){.app-col-lg-offset-right-24[data-v-9af136d0]{margin-right:100vw}}@media(min-width: 1025px)and (min-width: 1440px){.app-col-lg-offset-right-24[data-v-9af136d0]{margin-right:90rem}}@media(min-width: 1025px){.app-col--default.app-col-lg-fit[data-v-9af136d0],.app-col-lg-fit[data-v-9af136d0]{flex-grow:0;flex-shrink:0;flex-basis:0;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-col--default.app-col-lg-fill[data-v-9af136d0],.app-col-lg-fill[data-v-9af136d0]{flex-grow:1;flex-shrink:1;flex-basis:auto;margin-left:0;margin-right:0}}@media(min-width: 1025px){.app-spacer-lg-0[data-v-9af136d0]{height:0rem}}@media(min-width: 1025px){.app-spacer-lg-4[data-v-9af136d0]{height:.25rem}}@media(min-width: 1025px){.app-spacer-lg-8[data-v-9af136d0]{height:.5rem}}@media(min-width: 1025px){.app-spacer-lg-16[data-v-9af136d0]{height:1rem}}@media(min-width: 1025px){.app-spacer-lg-24[data-v-9af136d0]{height:1.5rem}}@media(min-width: 1025px){.app-spacer-lg-32[data-v-9af136d0]{height:2rem}}@media(min-width: 1025px){.app-spacer-lg-40[data-v-9af136d0]{height:2.5rem}}@media(min-width: 1025px){.app-spacer-lg-60[data-v-9af136d0]{height:3.75rem}}@media(min-width: 1025px){.app-spacer-lg-64[data-v-9af136d0]{height:4rem}}@media(min-width: 1025px){.app-spacer-lg-80[data-v-9af136d0]{height:5rem}}@media(min-width: 1025px){.app-spacer-lg-120[data-v-9af136d0]{height:7.5rem}}@media(min-width: 1025px){.app-spacer-lg-180[data-v-9af136d0]{height:11.25rem}}@media(min-width: 1025px){.-hide-lg[data-v-9af136d0]{display:none !important}}@media(min-width: 1025px){.-show-lg[data-v-9af136d0]{display:unset !important}}@media(min-width: 1025px){.-nowrap-lg[data-v-9af136d0]{white-space:nowrap}}@media(min-width: 1025px){.-wrap-lg[data-v-9af136d0]{white-space:normal}}span[nowrap][data-v-9af136d0],span.nowrap[data-v-9af136d0]{white-space:nowrap}@media(max-width: 767px){br[\\@md][data-v-9af136d0]{display:none}}@media(max-width: 1024px){br[\\@lg][data-v-9af136d0]{display:none}}.link[data-v-9af136d0]{color:#08428d;font-weight:bold;text-decoration:none}.gridcontainer__items[data-v-9af136d0]{align-items:stretch;display:grid;justify-content:center;justify-items:center;grid-template-columns:repeat(1, minmax(0, 380px));column-gap:4.1666666667vw;row-gap:4.1666666667vw;row-gap:2rem}@media(min-width: 768px){.gridcontainer__items[data-v-9af136d0]{grid-template-columns:repeat(2, minmax(0, 380px));column-gap:2.25rem;row-gap:2rem}}@media(min-width: 1025px){.gridcontainer__items[data-v-9af136d0]{grid-template-columns:repeat(3, minmax(0, 380px));row-gap:5rem}}', ""]), c.locals = {}, t.exports = c
        },
        803: function(t, e, d) {
            "use strict";
            d(737)
        },
        804: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-c5a6497c]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-c5a6497c]:not([class]),[vce-ready] .heading-1[data-v-c5a6497c],#__nuxt h1[data-v-c5a6497c]:not([class]),#__nuxt .heading-1[data-v-c5a6497c]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-c5a6497c]:not([class]),[vce-ready] .heading-1[data-v-c5a6497c],#__nuxt h1[data-v-c5a6497c]:not([class]),#__nuxt .heading-1[data-v-c5a6497c]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-c5a6497c]:not([class]),[vce-ready] .heading-1[data-v-c5a6497c],#__nuxt h1[data-v-c5a6497c]:not([class]),#__nuxt .heading-1[data-v-c5a6497c]{font-size:64px}}[vce-ready] h2[data-v-c5a6497c]:not([class]),[vce-ready] .heading-2[data-v-c5a6497c],#__nuxt h2[data-v-c5a6497c]:not([class]),#__nuxt .heading-2[data-v-c5a6497c]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-c5a6497c]:not([class]),[vce-ready] .heading-2[data-v-c5a6497c],#__nuxt h2[data-v-c5a6497c]:not([class]),#__nuxt .heading-2[data-v-c5a6497c]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-c5a6497c]:not([class]),[vce-ready] .heading-2[data-v-c5a6497c],#__nuxt h2[data-v-c5a6497c]:not([class]),#__nuxt .heading-2[data-v-c5a6497c]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-c5a6497c]:not([class]),[vce-ready] .heading-2[data-v-c5a6497c],#__nuxt h2[data-v-c5a6497c]:not([class]),#__nuxt .heading-2[data-v-c5a6497c]{line-height:110%}}[vce-ready] h3[data-v-c5a6497c]:not([class]),[vce-ready] .heading-3[data-v-c5a6497c],#__nuxt h3[data-v-c5a6497c]:not([class]),#__nuxt .heading-3[data-v-c5a6497c]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-c5a6497c]:not([class]),[vce-ready] .heading-3[data-v-c5a6497c],#__nuxt h3[data-v-c5a6497c]:not([class]),#__nuxt .heading-3[data-v-c5a6497c]{font-size:2rem}}[vce-ready] h4[data-v-c5a6497c]:not([class]),[vce-ready] .heading-4[data-v-c5a6497c],#__nuxt h4[data-v-c5a6497c]:not([class]),#__nuxt .heading-4[data-v-c5a6497c]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-c5a6497c]:not([class]),[vce-ready] .heading-4[data-v-c5a6497c],#__nuxt h4[data-v-c5a6497c]:not([class]),#__nuxt .heading-4[data-v-c5a6497c]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-c5a6497c]:not([class]),[vce-ready] .heading-5[data-v-c5a6497c],#__nuxt h5[data-v-c5a6497c]:not([class]),#__nuxt .heading-5[data-v-c5a6497c]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-c5a6497c]:not([class]),[vce-ready] .heading-5[data-v-c5a6497c],#__nuxt h5[data-v-c5a6497c]:not([class]),#__nuxt .heading-5[data-v-c5a6497c]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-c5a6497c]:not([class]),[vce-ready] .body-1[data-v-c5a6497c],#__nuxt p[data-v-c5a6497c]:not([class]),#__nuxt .body-1[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-c5a6497c],#__nuxt .body-2[data-v-c5a6497c]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-c5a6497c],#__nuxt .body-3[data-v-c5a6497c]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-c5a6497c],#__nuxt .body-4[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-c5a6497c],#__nuxt .body-caption[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-c5a6497c],#__nuxt .body-caption[data-v-c5a6497c]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-c5a6497c],[vce-ready] [class*=body-]+p[data-v-c5a6497c],[vce-ready] h1+p[data-v-c5a6497c],[vce-ready] h2+p[data-v-c5a6497c],[vce-ready] h3+p[data-v-c5a6497c],[vce-ready] h4+p[data-v-c5a6497c],[vce-ready] h5+p[data-v-c5a6497c],[vce-ready] p+p[data-v-c5a6497c],#__nuxt [class*=heading-]+p[data-v-c5a6497c],#__nuxt [class*=body-]+p[data-v-c5a6497c],#__nuxt h1+p[data-v-c5a6497c],#__nuxt h2+p[data-v-c5a6497c],#__nuxt h3+p[data-v-c5a6497c],#__nuxt h4+p[data-v-c5a6497c],#__nuxt h5+p[data-v-c5a6497c],#__nuxt p+p[data-v-c5a6497c]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-c5a6497c]:not([class]),[vce-ready] [class*=body-]+ul[data-v-c5a6497c]:not([class]),#__nuxt [class*=heading-]+ul[data-v-c5a6497c]:not([class]),#__nuxt [class*=body-]+ul[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-c5a6497c]:not([class]),[vce-ready] p+p[data-v-c5a6497c]:not([class]),[vce-ready] p+h1[data-v-c5a6497c]:not([class]),[vce-ready] p+h2[data-v-c5a6497c]:not([class]),[vce-ready] p+h3[data-v-c5a6497c]:not([class]),[vce-ready] p+h4[data-v-c5a6497c]:not([class]),[vce-ready] p+h5[data-v-c5a6497c]:not([class]),#__nuxt p+ul[data-v-c5a6497c]:not([class]),#__nuxt p+p[data-v-c5a6497c]:not([class]),#__nuxt p+h1[data-v-c5a6497c]:not([class]),#__nuxt p+h2[data-v-c5a6497c]:not([class]),#__nuxt p+h3[data-v-c5a6497c]:not([class]),#__nuxt p+h4[data-v-c5a6497c]:not([class]),#__nuxt p+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-c5a6497c]:not([class]),[vce-ready] h1+p[data-v-c5a6497c]:not([class]),[vce-ready] h1+h1[data-v-c5a6497c]:not([class]),[vce-ready] h1+h2[data-v-c5a6497c]:not([class]),[vce-ready] h1+h3[data-v-c5a6497c]:not([class]),[vce-ready] h1+h4[data-v-c5a6497c]:not([class]),[vce-ready] h1+h5[data-v-c5a6497c]:not([class]),#__nuxt h1+ul[data-v-c5a6497c]:not([class]),#__nuxt h1+p[data-v-c5a6497c]:not([class]),#__nuxt h1+h1[data-v-c5a6497c]:not([class]),#__nuxt h1+h2[data-v-c5a6497c]:not([class]),#__nuxt h1+h3[data-v-c5a6497c]:not([class]),#__nuxt h1+h4[data-v-c5a6497c]:not([class]),#__nuxt h1+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-c5a6497c]:not([class]),[vce-ready] h2+p[data-v-c5a6497c]:not([class]),[vce-ready] h2+h1[data-v-c5a6497c]:not([class]),[vce-ready] h2+h2[data-v-c5a6497c]:not([class]),[vce-ready] h2+h3[data-v-c5a6497c]:not([class]),[vce-ready] h2+h4[data-v-c5a6497c]:not([class]),[vce-ready] h2+h5[data-v-c5a6497c]:not([class]),#__nuxt h2+ul[data-v-c5a6497c]:not([class]),#__nuxt h2+p[data-v-c5a6497c]:not([class]),#__nuxt h2+h1[data-v-c5a6497c]:not([class]),#__nuxt h2+h2[data-v-c5a6497c]:not([class]),#__nuxt h2+h3[data-v-c5a6497c]:not([class]),#__nuxt h2+h4[data-v-c5a6497c]:not([class]),#__nuxt h2+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-c5a6497c]:not([class]),[vce-ready] h3+p[data-v-c5a6497c]:not([class]),[vce-ready] h3+h1[data-v-c5a6497c]:not([class]),[vce-ready] h3+h2[data-v-c5a6497c]:not([class]),[vce-ready] h3+h3[data-v-c5a6497c]:not([class]),[vce-ready] h3+h4[data-v-c5a6497c]:not([class]),[vce-ready] h3+h5[data-v-c5a6497c]:not([class]),#__nuxt h3+ul[data-v-c5a6497c]:not([class]),#__nuxt h3+p[data-v-c5a6497c]:not([class]),#__nuxt h3+h1[data-v-c5a6497c]:not([class]),#__nuxt h3+h2[data-v-c5a6497c]:not([class]),#__nuxt h3+h3[data-v-c5a6497c]:not([class]),#__nuxt h3+h4[data-v-c5a6497c]:not([class]),#__nuxt h3+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-c5a6497c]:not([class]),[vce-ready] h4+p[data-v-c5a6497c]:not([class]),[vce-ready] h4+h1[data-v-c5a6497c]:not([class]),[vce-ready] h4+h2[data-v-c5a6497c]:not([class]),[vce-ready] h4+h3[data-v-c5a6497c]:not([class]),[vce-ready] h4+h4[data-v-c5a6497c]:not([class]),[vce-ready] h4+h5[data-v-c5a6497c]:not([class]),#__nuxt h4+ul[data-v-c5a6497c]:not([class]),#__nuxt h4+p[data-v-c5a6497c]:not([class]),#__nuxt h4+h1[data-v-c5a6497c]:not([class]),#__nuxt h4+h2[data-v-c5a6497c]:not([class]),#__nuxt h4+h3[data-v-c5a6497c]:not([class]),#__nuxt h4+h4[data-v-c5a6497c]:not([class]),#__nuxt h4+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-c5a6497c]:not([class]),[vce-ready] h5+p[data-v-c5a6497c]:not([class]),[vce-ready] h5+h1[data-v-c5a6497c]:not([class]),[vce-ready] h5+h2[data-v-c5a6497c]:not([class]),[vce-ready] h5+h3[data-v-c5a6497c]:not([class]),[vce-ready] h5+h4[data-v-c5a6497c]:not([class]),[vce-ready] h5+h5[data-v-c5a6497c]:not([class]),#__nuxt h5+ul[data-v-c5a6497c]:not([class]),#__nuxt h5+p[data-v-c5a6497c]:not([class]),#__nuxt h5+h1[data-v-c5a6497c]:not([class]),#__nuxt h5+h2[data-v-c5a6497c]:not([class]),#__nuxt h5+h3[data-v-c5a6497c]:not([class]),#__nuxt h5+h4[data-v-c5a6497c]:not([class]),#__nuxt h5+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-c5a6497c]:not([class]),[vce-ready] p+p[data-v-c5a6497c]:not([class]),[vce-ready] p+h1[data-v-c5a6497c]:not([class]),[vce-ready] p+h2[data-v-c5a6497c]:not([class]),[vce-ready] p+h3[data-v-c5a6497c]:not([class]),[vce-ready] p+h4[data-v-c5a6497c]:not([class]),[vce-ready] p+h5[data-v-c5a6497c]:not([class]),#__nuxt p+ul[data-v-c5a6497c]:not([class]),#__nuxt p+p[data-v-c5a6497c]:not([class]),#__nuxt p+h1[data-v-c5a6497c]:not([class]),#__nuxt p+h2[data-v-c5a6497c]:not([class]),#__nuxt p+h3[data-v-c5a6497c]:not([class]),#__nuxt p+h4[data-v-c5a6497c]:not([class]),#__nuxt p+h5[data-v-c5a6497c]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-c5a6497c]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-c5a6497c]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-c5a6497c]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-c5a6497c]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-c5a6497c]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-c5a6497c]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-c5a6497c]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-c5a6497c]::after,#__nuxt [class*=body-] a[target=_blank][data-v-c5a6497c]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-c5a6497c]::after,#__nuxt p:not([class]) a[target=_blank][data-v-c5a6497c]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-c5a6497c],[vce-ready] [class*=heading-] a[href][data-v-c5a6497c]:focus,[vce-ready] [class*=body-] a[href][data-v-c5a6497c],[vce-ready] [class*=body-] a[href][data-v-c5a6497c]:focus,[vce-ready] h1:not([class]) a[href][data-v-c5a6497c],[vce-ready] h1:not([class]) a[href][data-v-c5a6497c]:focus,[vce-ready] h2:not([class]) a[href][data-v-c5a6497c],[vce-ready] h2:not([class]) a[href][data-v-c5a6497c]:focus,[vce-ready] h3:not([class]) a[href][data-v-c5a6497c],[vce-ready] h3:not([class]) a[href][data-v-c5a6497c]:focus,[vce-ready] h4:not([class]) a[href][data-v-c5a6497c],[vce-ready] h4:not([class]) a[href][data-v-c5a6497c]:focus,[vce-ready] h5:not([class]) a[href][data-v-c5a6497c],[vce-ready] h5:not([class]) a[href][data-v-c5a6497c]:focus,[vce-ready] p:not([class]) a[href][data-v-c5a6497c],[vce-ready] p:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt [class*=heading-] a[href][data-v-c5a6497c],#__nuxt [class*=heading-] a[href][data-v-c5a6497c]:focus,#__nuxt [class*=body-] a[href][data-v-c5a6497c],#__nuxt [class*=body-] a[href][data-v-c5a6497c]:focus,#__nuxt h1:not([class]) a[href][data-v-c5a6497c],#__nuxt h1:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt h2:not([class]) a[href][data-v-c5a6497c],#__nuxt h2:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt h3:not([class]) a[href][data-v-c5a6497c],#__nuxt h3:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt h4:not([class]) a[href][data-v-c5a6497c],#__nuxt h4:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt h5:not([class]) a[href][data-v-c5a6497c],#__nuxt h5:not([class]) a[href][data-v-c5a6497c]:focus,#__nuxt p:not([class]) a[href][data-v-c5a6497c],#__nuxt p:not([class]) a[href][data-v-c5a6497c]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-c5a6497c]:hover,[vce-ready] [class*=heading-] a[href][data-v-c5a6497c]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-c5a6497c]:hover,[vce-ready] [class*=body-] a[href][data-v-c5a6497c]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] h1:not([class]) a[href][data-v-c5a6497c]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] h2:not([class]) a[href][data-v-c5a6497c]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] h3:not([class]) a[href][data-v-c5a6497c]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] h4:not([class]) a[href][data-v-c5a6497c]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] h5:not([class]) a[href][data-v-c5a6497c]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-c5a6497c]:hover,[vce-ready] p:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-c5a6497c]:hover,#__nuxt [class*=heading-] a[href][data-v-c5a6497c]:focus:hover,#__nuxt [class*=body-] a[href][data-v-c5a6497c]:hover,#__nuxt [class*=body-] a[href][data-v-c5a6497c]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt h1:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt h2:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt h3:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt h4:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt h5:not([class]) a[href][data-v-c5a6497c]:focus:hover,#__nuxt p:not([class]) a[href][data-v-c5a6497c]:hover,#__nuxt p:not([class]) a[href][data-v-c5a6497c]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-c5a6497c],[vce-ready] .body--bold[data-v-c5a6497c],#__nuxt .heading--bold[data-v-c5a6497c],#__nuxt .body--bold[data-v-c5a6497c]{font-weight:700}[vce-ready] .heading--regular[data-v-c5a6497c],[vce-ready] .body--regular[data-v-c5a6497c],#__nuxt .heading--regular[data-v-c5a6497c],#__nuxt .body--regular[data-v-c5a6497c]{font-weight:400}[vce-ready] .heading--light[data-v-c5a6497c],[vce-ready] .body--light[data-v-c5a6497c],#__nuxt .heading--light[data-v-c5a6497c],#__nuxt .body--light[data-v-c5a6497c]{font-weight:100}[vce-ready] .heading--flush[data-v-c5a6497c],[vce-ready] .body--flush[data-v-c5a6497c],#__nuxt .heading--flush[data-v-c5a6497c],#__nuxt .body--flush[data-v-c5a6497c]{margin-bottom:0;margin-top:0}.media-category-paragraph[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}.eyebrow[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em;color:#465670}.title-container[data-v-c5a6497c]{align-items:center;display:flex;justify-content:center}.title-graphic[data-v-c5a6497c]{flex:0 0 80px;margin-right:1.25rem;height:5rem;width:5rem}.title[data-v-c5a6497c]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0;color:#1e2430;flex:1 1 auto}@media(min-width: 768px){.title[data-v-c5a6497c]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){.title[data-v-c5a6497c]{font-size:44px}}@media(min-width: 768px){.title[data-v-c5a6497c]{line-height:110%}}.title-graphic+.title[data-v-c5a6497c]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){.title-graphic+.title[data-v-c5a6497c]{font-size:2rem}}.feature-list[data-v-c5a6497c]{padding:0;list-style:none;column-count:1}@media(min-width: 768px){.feature-list[data-v-c5a6497c]{column-count:2;column-gap:.5rem}}.feature-item[data-v-c5a6497c]{display:flex;break-inside:avoid-column;margin-bottom:.5rem}.feature-item-icon-container[data-v-c5a6497c]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;color:#465670;background-color:#f2f2f2;border-radius:50%;margin:.125rem .5rem 0 0}.feature-item-icon[data-v-c5a6497c]{width:.5625rem}.feature-item-text[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}.feature-item-plus-badge[data-v-c5a6497c]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0;display:inline-flex;align-items:center;justify-content:center;color:#1e2430;background-color:#f5c670;font-family:"HelveticaNowTextBold",helvetica,sans-serif;width:2.625rem;height:1.125rem;border-radius:.1875rem}@media(min-width: 768px){.feature-item-plus-badge[data-v-c5a6497c]{line-height:150%}}', ""]), c.locals = {}, t.exports = c
        },
        805: function(t, e, d) {
            var content = d(882);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(9).default)("bf0c5c1a", content, !0, {
                sourceMap: !1
            })
        },
        835: function(t, e, d) {
            "use strict";
            d.r(e);
            d(20), d(44);
            var c = {
                    computed: {
                        bannerCtas: function() {
                            return Array.isArray(this.ctas) && 0 !== this.ctas.length ? this.ctas : this.cta ? [{
                                cta: this.cta,
                                ctaLink: this.href
                            }] : []
                        }
                    },
                    data: function() {
                        return {}
                    },
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !1
                        },
                        cta: {
                            type: String,
                            required: !0
                        },
                        href: {
                            type: String,
                            required: !0
                        },
                        ctas: {
                            type: Array,
                            default: null
                        },
                        backgroundColor: {
                            type: String,
                            required: !1
                        },
                        decorations: {
                            type: Object | Array,
                            required: !1
                        },
                        button: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                n = (d(778), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        directives: [{
                            name: "tag",
                            rawName: "v-tag",
                            value: t.$styleTag,
                            expression: "$styleTag"
                        }],
                        staticClass: "app-row app-col app-row-xs--center",
                        class: t.$class,
                        style: t.$style
                    }, [e("ContainerRounded", {
                        staticClass: "container app-row app-col--default app-col-xs app-col-md-20 app-row-md--center",
                        style: {
                            backgroundColor: t.backgroundColor
                        }
                    }, [t._l(t.decorations, (function(d, i) {
                        return e("BackgroundDecoration", t._b({
                            key: i
                        }, "BackgroundDecoration", d, !1))
                    })), t._v(" "), e("div", {
                        staticClass: "text app-col-md-12"
                    }, [t._t("default", (function() {
                        return [e("h1", {
                            staticClass: "title"
                        }, [e("RichHeadline", {
                            attrs: {
                                html: t.title
                            }
                        })], 1), t._v(" "), t.description ? e("p", {
                            staticClass: "description"
                        }, [t._v(t._s(t.description))]) : t._e(), t._v(" "), e("Spacer", {
                            attrs: {
                                size: 16
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "app-row app-row-xs--center app-row-md--nowrap",
                            class: {
                                "button-row": t.bannerCtas.length > 1
                            }
                        }, [t._l(t.bannerCtas, (function(d, c) {
                            return [t.button ? e("CtaLink", t._b({
                                key: c
                            }, "CtaLink", d, !1)) : e("IconButton", {
                                key: c,
                                staticClass: "cta",
                                attrs: {
                                    label: d.cta,
                                    link: d.ctaLink || d.href,
                                    icon: d.icon || "arrow-right"
                                }
                            })]
                        }))], 2)]
                    }))], 2)], 2)], 1)
                }), [], !1, null, "3cf6767a", null);
            e.default = component.exports;
            installComponents(component, {
                BackgroundDecoration: d(366).default,
                RichHeadline: d(358).default,
                Spacer: d(59).default,
                IconButton: d(207).default,
                CtaLink: d(60).default,
                ContainerRounded: d(206).default
            })
        },
        838: function(t, e, d) {
            "use strict";
            d.r(e);
            var c = {
                    props: {
                        portalName: {
                            type: String,
                            required: !0
                        }
                    }
                },
                n = d(0),
                component = Object(n.a)(c, (function() {
                    var t = this;
                    return (0, t._self._c)("portal", {
                        attrs: {
                            to: t.portalName
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        839: function(t, e, d) {
            "use strict";
            d.r(e);
            var c, n = d(3),
                r = (d(90), d(7), d(30), d(36), d(23), d(37), d(20), d(52), d(53), d(717));
            d(878);

            function o(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var d = Object.getOwnPropertySymbols(object);
                    t && (d = d.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, d)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? o(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var h = {
                    mixins: [r.a],
                    props: {
                        autoPlay: {
                            type: Boolean,
                            default: !1
                        },
                        cellAlign: {
                            type: String,
                            default: "center"
                        },
                        contain: {
                            type: Boolean,
                            default: !1
                        },
                        groupCells: {
                            type: Boolean | String | Number,
                            default: !1
                        },
                        freeScroll: {
                            type: Boolean,
                            default: !1
                        },
                        navigationButtons: {
                            type: Boolean,
                            default: !1
                        },
                        overflow: {
                            type: Boolean,
                            default: !1
                        },
                        pageDots: {
                            type: Boolean,
                            default: !1
                        },
                        percentPosition: {
                            type: Boolean,
                            default: !1
                        },
                        slideWidth: {
                            type: String,
                            default: null
                        },
                        themeColor: {
                            type: String,
                            default: "light"
                        },
                        wrapAround: {
                            type: Boolean,
                            default: !1
                        },
                        sameHeightCells: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            isSelectingSlide: !1,
                            slideHeight: null
                        }
                    },
                    computed: {
                        flickityOptions: function() {
                            return {
                                arrowShape: "M41.12,45.84h30.61v6.26H41.92l9.79,9.79l-4.42,4.42l-17.7-17.68l0.05-0.05l-0.05-0.05l17.7-17.7l4.42,4.42L41.12,45.84z",
                                autoPlay: this.autoPlay,
                                cellAlign: this.cellAlign,
                                contain: this.contain,
                                freeScroll: this.freeScroll,
                                groupCells: this.groupCells,
                                pageDots: this.pageDots,
                                pauseAutoPlayOnHover: !0,
                                percentPosition: this.percentPosition,
                                wrapAround: !!this.wrapAround && "fill"
                            }
                        }
                    },
                    watch: {
                        autoPlay: function(t) {
                            t ? this.$flickity.playPlayer() : this.$flickity.stopPlayer()
                        },
                        cellAlign: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        contain: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        freeScroll: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        groupCells: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        pageDots: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        percentPosition: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        },
                        slideWidth: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.$flickity.resize()
                            }))
                        },
                        wrapAround: function() {
                            this.rerender(this.$flickity.selectedIndex)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        c = d(879), this.$nextTick((function() {
                            setTimeout(t.initializeFlickity, 500)
                        }))
                    },
                    beforeDestroy: function() {
                        this.destroyFlickity()
                    },
                    methods: {
                        assignFlickityCellClasses: function() {
                            var t = this.$flickity.selectedIndex,
                                e = this.$flickity.getCellElements();
                            e.forEach((function(t) {
                                t.classList.remove("left-cell", "right-cell")
                            }));
                            var d = e.map((function(t) {
                                    return {
                                        x: t.getBoundingClientRect().x,
                                        selected: t.classList.contains("is-selected"),
                                        el: t
                                    }
                                })),
                                c = d.filter((function(e) {
                                    return e.x < d[t].x
                                })),
                                n = d.filter((function(e) {
                                    return e.x > d[t].x
                                }));
                            c.forEach((function(t) {
                                t.el.classList.add("left-cell")
                            })), n.forEach((function(t) {
                                t.el.classList.add("right-cell")
                            }))
                        },
                        destroyFlickity: function() {
                            var t;
                            clearInterval(this.$resizeTimer), this.$resizeTimer = null, null === (t = this.$flickity) || void 0 === t || t.destroy(), this.$flickity = null
                        },
                        initializeFlickity: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = this.$refs.slides.$el || this.$refs.slides;
                            this.$flickity = new c(e, l(l({}, this.flickityOptions), {}, {
                                initialIndex: t
                            })), this.$resizeTimer = setInterval(this.resize, 250), this.$flickity.on("staticClick", this.onFlickityClick), this.$flickity.on("settle", this.onFlickitySettle)
                        },
                        onFlickityClick: function(t, e, d, c) {
                            void 0 !== c && this.$flickity.select(c)
                        },
                        onFlickitySettle: function(t) {
                            var e = this;
                            this.isSelectingSlide ? (this.isSelectingSlide = !1, this.assignFlickityCellClasses()) : (this.isSelectingSlide = !0, this.$nextTick((function() {
                                return e.$flickity.select(t)
                            }), {
                                once: !0
                            }))
                        },
                        rerender: function(t) {
                            this.destroyFlickity(), this.initializeFlickity(t)
                        },
                        resize: function() {
                            var t = this;
                            this.updateSlideHeight(), this.$nextTick((function() {
                                t.$flickity.resize()
                            }))
                        },
                        updateSlideHeight: function() {
                            var t = this;
                            this.sameHeightCells && (this.slideHeight = null, this.$nextTick((function() {
                                for (var e = t.$flickity.getCellElements(), d = 0, i = 0; i < e.length; i++) {
                                    var c = e[i].offsetHeight;
                                    c > d && (d = c)
                                }
                                t.slideHeight = "".concat(d, "px")
                            })))
                        }
                    }
                },
                f = h,
                v = (d(799), d(0)),
                component = Object(v.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("client-only", [e("div", {
                        directives: [{
                            name: "tag",
                            rawName: "v-tag",
                            value: t.$styleTag,
                            expression: "$styleTag"
                        }],
                        staticClass: "carousel",
                        class: [t.$class, "carousel--".concat(t.themeColor)],
                        style: t.$style
                    }, [e("portal-target", {
                        ref: "slides",
                        staticClass: "carousel__slides",
                        class: {
                            "carousel__slides--navigation": t.navigationButtons, "carousel__slides--overflow": t.overflow, "carousel__slides--sameheight": t.sameHeightCells
                        },
                        style: {
                            "--slide-width": t.slideWidth,
                            "--slide-height": t.slideHeight
                        },
                        attrs: {
                            name: t.$portalName,
                            multiple: ""
                        }
                    }), t._v(" "), e("portal", {
                        attrs: {
                            to: t.$portalName
                        }
                    }, [t._t("default")], 2)], 1)])
                }), [], !1, null, "5e48e74d", null);
            e.default = component.exports
        },
        840: function(t, e, d) {
            "use strict";
            d.r(e);
            var c = {
                    mixins: [d(717).a]
                },
                n = (d(801), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "tag",
                            rawName: "v-tag",
                            value: t.$styleTag,
                            expression: "$styleTag"
                        }],
                        staticClass: "gridcontainer",
                        class: t.$class,
                        style: t.$style
                    }, [e("portal-target", {
                        staticClass: "gridcontainer__items",
                        attrs: {
                            name: t.$portalName,
                            multiple: ""
                        }
                    }), t._v(" "), e("portal", {
                        attrs: {
                            to: t.$portalName
                        }
                    }, [t._t("default")], 2)], 1)
                }), [], !1, null, "9af136d0", null);
            e.default = component.exports
        },
        841: function(t, e, d) {
            "use strict";
            d.r(e);
            d(131);
            var c = {
                    mixins: [d(132).a],
                    computed: {
                        className: function() {
                            var t, e = null !== (t = this.$class) && void 0 !== t ? t : "";
                            switch (this.$responsive.current) {
                                case "xs":
                                    e += " mobile mobiledesktop mobiletablet";
                                    break;
                                case "md":
                                    e += " tablet mobiletablet tabletdesktop";
                                    break;
                                case "lg":
                                    e += " desktop mobiledesktop tabletdesktop"
                            }
                            return e.trim()
                        }
                    }
                },
                n = d(0),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "tag",
                            rawName: "v-tag",
                            value: t.$styleTag,
                            expression: "$styleTag"
                        }],
                        staticClass: "responsivecontainer",
                        class: t.className,
                        style: t.$style
                    }, [e("client-only", [t.$responsive.xs || t.$responsive.lg ? t._t("mobiledesktop") : t._e(), t._v(" "), t.$responsive.xs ? t._t("mobile") : t._e(), t._v(" "), t.$responsive.xs || t.$responsive.md ? t._t("mobiletablet") : t._e(), t._v(" "), t.$responsive.md ? t._t("tablet") : t._e(), t._v(" "), t.$responsive.md || t.$responsive.lg ? t._t("tabletdesktop") : t._e(), t._v(" "), t.$responsive.lg ? t._t("desktop") : t._e()], 2), t._v(" "), t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        842: function(t, e, d) {
            "use strict";
            d.r(e);
            d(20), d(44);
            var c = {
                    data: function() {
                        return {}
                    },
                    props: {
                        eyebrow: {
                            type: String,
                            required: !1
                        },
                        title: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !0
                        },
                        featuresLabel: {
                            type: String,
                            required: !0
                        },
                        features: {
                            type: Array,
                            required: !0
                        },
                        image: {
                            type: Object,
                            required: !0
                        },
                        leftAlign: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        cta: {
                            type: String,
                            required: !0
                        },
                        ctaLink: {
                            type: String,
                            required: !0
                        },
                        titleGraphic: {
                            type: Object,
                            default: function() {}
                        }
                    }
                },
                n = (d(803), d(0)),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "media-feature app-container app-row app-row-xs--center app-row-xs--middle"
                    }, [e("ContainerRounded", {
                        staticClass: "app-col-xs-20 app-col-md-8",
                        class: t.leftAlign ? "app-col-md-offset-right-3" : "app-col-md-offset-3 app-col-md--last"
                    }, [e("GenericImage", t._b({
                        attrs: {
                            "fade-threshold": [.5, 1]
                        }
                    }, "GenericImage", t.image, !1))], 1), t._v(" "), e("div", {
                        staticClass: "app-col-xs-20 app-col-md-9"
                    }, [e("Spacer", {
                        attrs: {
                            sizes: {
                                xs: 16,
                                md: 0
                            }
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "media-category-paragraph"
                    }, [e("small", {
                        staticClass: "eyebrow"
                    }, [t._v(t._s(t.eyebrow))]), t._v(" "), t.eyebrow ? e("Spacer", {
                        attrs: {
                            size: 16
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "title-container"
                    }, [t.titleGraphic ? e("GenericImage", t._b({
                        staticClass: "title-graphic",
                        attrs: {
                            "fade-threshold": [.5, 1]
                        }
                    }, "GenericImage", t.titleGraphic, !1)) : t._e(), t._v(" "), t.titleGraphic ? e("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(t.title))]) : e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.title))])], 1), t._v(" "), e("Spacer", {
                        attrs: {
                            size: 16
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "description"
                    }, [t._v(t._s(t.description))]), t._v(" "), e("Spacer", {
                        attrs: {
                            size: 32
                        }
                    }), t._v(" "), t.features ? e("div", {
                        staticClass: "content"
                    }, [t._v("\n        " + t._s(t.featuresLabel) + "\n        "), e("Spacer", {
                        attrs: {
                            size: 16
                        }
                    }), t._v(" "), e("ul", {
                        staticClass: "feature-list"
                    }, t._l(t.features, (function(d, i) {
                        return e("li", {
                            key: d + i,
                            staticClass: "feature-item"
                        }, [e("div", {
                            staticClass: "feature-item-icon-container"
                        }, [e("Icon", {
                            staticClass: "feature-item-icon",
                            attrs: {
                                icon: "small-checkmark"
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "feature-item-text"
                        }, [e("span", [t._v(t._s(d.text))]), t._v(" "), d.isPlus ? e("span", {
                            staticClass: "feature-item-plus-badge"
                        }, [t._v("\n                Plus\n              ")]) : t._e()])])
                    })), 0)], 1) : t._e(), t._v(" "), t.cta ? [e("Spacer", {
                        attrs: {
                            size: 32
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "link"
                    }, [e("IconButton", {
                        attrs: {
                            label: t.cta,
                            link: t.ctaLink,
                            icon: "arrow-right"
                        }
                    })], 1)] : t._e()], 2)], 1)], 1)
                }), [], !1, null, "c5a6497c", null);
            e.default = component.exports;
            installComponents(component, {
                GenericImage: d(127).default,
                ContainerRounded: d(206).default,
                Spacer: d(59).default,
                Icon: d(48).default,
                IconButton: d(207).default
            })
        },
        876: function(t, e, d) {
            "use strict";
            d(798)
        },
        877: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-4304d87d]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-4304d87d]:not([class]),[vce-ready] .heading-1[data-v-4304d87d],#__nuxt h1[data-v-4304d87d]:not([class]),#__nuxt .heading-1[data-v-4304d87d]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-4304d87d]:not([class]),[vce-ready] .heading-1[data-v-4304d87d],#__nuxt h1[data-v-4304d87d]:not([class]),#__nuxt .heading-1[data-v-4304d87d]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-4304d87d]:not([class]),[vce-ready] .heading-1[data-v-4304d87d],#__nuxt h1[data-v-4304d87d]:not([class]),#__nuxt .heading-1[data-v-4304d87d]{font-size:64px}}[vce-ready] h2[data-v-4304d87d]:not([class]),[vce-ready] .heading-2[data-v-4304d87d],#__nuxt h2[data-v-4304d87d]:not([class]),#__nuxt .heading-2[data-v-4304d87d]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-4304d87d]:not([class]),[vce-ready] .heading-2[data-v-4304d87d],#__nuxt h2[data-v-4304d87d]:not([class]),#__nuxt .heading-2[data-v-4304d87d]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-4304d87d]:not([class]),[vce-ready] .heading-2[data-v-4304d87d],#__nuxt h2[data-v-4304d87d]:not([class]),#__nuxt .heading-2[data-v-4304d87d]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-4304d87d]:not([class]),[vce-ready] .heading-2[data-v-4304d87d],#__nuxt h2[data-v-4304d87d]:not([class]),#__nuxt .heading-2[data-v-4304d87d]{line-height:110%}}[vce-ready] h3[data-v-4304d87d]:not([class]),[vce-ready] .heading-3[data-v-4304d87d],#__nuxt h3[data-v-4304d87d]:not([class]),#__nuxt .heading-3[data-v-4304d87d]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-4304d87d]:not([class]),[vce-ready] .heading-3[data-v-4304d87d],#__nuxt h3[data-v-4304d87d]:not([class]),#__nuxt .heading-3[data-v-4304d87d]{font-size:2rem}}[vce-ready] h4[data-v-4304d87d]:not([class]),[vce-ready] .heading-4[data-v-4304d87d],#__nuxt h4[data-v-4304d87d]:not([class]),#__nuxt .heading-4[data-v-4304d87d]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-4304d87d]:not([class]),[vce-ready] .heading-4[data-v-4304d87d],#__nuxt h4[data-v-4304d87d]:not([class]),#__nuxt .heading-4[data-v-4304d87d]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-4304d87d]:not([class]),[vce-ready] .heading-5[data-v-4304d87d],#__nuxt h5[data-v-4304d87d]:not([class]),#__nuxt .heading-5[data-v-4304d87d]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-4304d87d]:not([class]),[vce-ready] .heading-5[data-v-4304d87d],#__nuxt h5[data-v-4304d87d]:not([class]),#__nuxt .heading-5[data-v-4304d87d]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-4304d87d]:not([class]),[vce-ready] .body-1[data-v-4304d87d],#__nuxt p[data-v-4304d87d]:not([class]),#__nuxt .body-1[data-v-4304d87d]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-4304d87d],#__nuxt .body-2[data-v-4304d87d]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-4304d87d],#__nuxt .body-3[data-v-4304d87d]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-4304d87d],#__nuxt .body-4[data-v-4304d87d]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-4304d87d],#__nuxt .body-caption[data-v-4304d87d]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-4304d87d],#__nuxt .body-caption[data-v-4304d87d]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-4304d87d],[vce-ready] [class*=body-]+p[data-v-4304d87d],[vce-ready] h1+p[data-v-4304d87d],[vce-ready] h2+p[data-v-4304d87d],[vce-ready] h3+p[data-v-4304d87d],[vce-ready] h4+p[data-v-4304d87d],[vce-ready] h5+p[data-v-4304d87d],[vce-ready] p+p[data-v-4304d87d],#__nuxt [class*=heading-]+p[data-v-4304d87d],#__nuxt [class*=body-]+p[data-v-4304d87d],#__nuxt h1+p[data-v-4304d87d],#__nuxt h2+p[data-v-4304d87d],#__nuxt h3+p[data-v-4304d87d],#__nuxt h4+p[data-v-4304d87d],#__nuxt h5+p[data-v-4304d87d],#__nuxt p+p[data-v-4304d87d]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-4304d87d]:not([class]),[vce-ready] [class*=body-]+ul[data-v-4304d87d]:not([class]),#__nuxt [class*=heading-]+ul[data-v-4304d87d]:not([class]),#__nuxt [class*=body-]+ul[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-4304d87d]:not([class]),[vce-ready] p+p[data-v-4304d87d]:not([class]),[vce-ready] p+h1[data-v-4304d87d]:not([class]),[vce-ready] p+h2[data-v-4304d87d]:not([class]),[vce-ready] p+h3[data-v-4304d87d]:not([class]),[vce-ready] p+h4[data-v-4304d87d]:not([class]),[vce-ready] p+h5[data-v-4304d87d]:not([class]),#__nuxt p+ul[data-v-4304d87d]:not([class]),#__nuxt p+p[data-v-4304d87d]:not([class]),#__nuxt p+h1[data-v-4304d87d]:not([class]),#__nuxt p+h2[data-v-4304d87d]:not([class]),#__nuxt p+h3[data-v-4304d87d]:not([class]),#__nuxt p+h4[data-v-4304d87d]:not([class]),#__nuxt p+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-4304d87d]:not([class]),[vce-ready] h1+p[data-v-4304d87d]:not([class]),[vce-ready] h1+h1[data-v-4304d87d]:not([class]),[vce-ready] h1+h2[data-v-4304d87d]:not([class]),[vce-ready] h1+h3[data-v-4304d87d]:not([class]),[vce-ready] h1+h4[data-v-4304d87d]:not([class]),[vce-ready] h1+h5[data-v-4304d87d]:not([class]),#__nuxt h1+ul[data-v-4304d87d]:not([class]),#__nuxt h1+p[data-v-4304d87d]:not([class]),#__nuxt h1+h1[data-v-4304d87d]:not([class]),#__nuxt h1+h2[data-v-4304d87d]:not([class]),#__nuxt h1+h3[data-v-4304d87d]:not([class]),#__nuxt h1+h4[data-v-4304d87d]:not([class]),#__nuxt h1+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-4304d87d]:not([class]),[vce-ready] h2+p[data-v-4304d87d]:not([class]),[vce-ready] h2+h1[data-v-4304d87d]:not([class]),[vce-ready] h2+h2[data-v-4304d87d]:not([class]),[vce-ready] h2+h3[data-v-4304d87d]:not([class]),[vce-ready] h2+h4[data-v-4304d87d]:not([class]),[vce-ready] h2+h5[data-v-4304d87d]:not([class]),#__nuxt h2+ul[data-v-4304d87d]:not([class]),#__nuxt h2+p[data-v-4304d87d]:not([class]),#__nuxt h2+h1[data-v-4304d87d]:not([class]),#__nuxt h2+h2[data-v-4304d87d]:not([class]),#__nuxt h2+h3[data-v-4304d87d]:not([class]),#__nuxt h2+h4[data-v-4304d87d]:not([class]),#__nuxt h2+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-4304d87d]:not([class]),[vce-ready] h3+p[data-v-4304d87d]:not([class]),[vce-ready] h3+h1[data-v-4304d87d]:not([class]),[vce-ready] h3+h2[data-v-4304d87d]:not([class]),[vce-ready] h3+h3[data-v-4304d87d]:not([class]),[vce-ready] h3+h4[data-v-4304d87d]:not([class]),[vce-ready] h3+h5[data-v-4304d87d]:not([class]),#__nuxt h3+ul[data-v-4304d87d]:not([class]),#__nuxt h3+p[data-v-4304d87d]:not([class]),#__nuxt h3+h1[data-v-4304d87d]:not([class]),#__nuxt h3+h2[data-v-4304d87d]:not([class]),#__nuxt h3+h3[data-v-4304d87d]:not([class]),#__nuxt h3+h4[data-v-4304d87d]:not([class]),#__nuxt h3+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-4304d87d]:not([class]),[vce-ready] h4+p[data-v-4304d87d]:not([class]),[vce-ready] h4+h1[data-v-4304d87d]:not([class]),[vce-ready] h4+h2[data-v-4304d87d]:not([class]),[vce-ready] h4+h3[data-v-4304d87d]:not([class]),[vce-ready] h4+h4[data-v-4304d87d]:not([class]),[vce-ready] h4+h5[data-v-4304d87d]:not([class]),#__nuxt h4+ul[data-v-4304d87d]:not([class]),#__nuxt h4+p[data-v-4304d87d]:not([class]),#__nuxt h4+h1[data-v-4304d87d]:not([class]),#__nuxt h4+h2[data-v-4304d87d]:not([class]),#__nuxt h4+h3[data-v-4304d87d]:not([class]),#__nuxt h4+h4[data-v-4304d87d]:not([class]),#__nuxt h4+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-4304d87d]:not([class]),[vce-ready] h5+p[data-v-4304d87d]:not([class]),[vce-ready] h5+h1[data-v-4304d87d]:not([class]),[vce-ready] h5+h2[data-v-4304d87d]:not([class]),[vce-ready] h5+h3[data-v-4304d87d]:not([class]),[vce-ready] h5+h4[data-v-4304d87d]:not([class]),[vce-ready] h5+h5[data-v-4304d87d]:not([class]),#__nuxt h5+ul[data-v-4304d87d]:not([class]),#__nuxt h5+p[data-v-4304d87d]:not([class]),#__nuxt h5+h1[data-v-4304d87d]:not([class]),#__nuxt h5+h2[data-v-4304d87d]:not([class]),#__nuxt h5+h3[data-v-4304d87d]:not([class]),#__nuxt h5+h4[data-v-4304d87d]:not([class]),#__nuxt h5+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-4304d87d]:not([class]),[vce-ready] p+p[data-v-4304d87d]:not([class]),[vce-ready] p+h1[data-v-4304d87d]:not([class]),[vce-ready] p+h2[data-v-4304d87d]:not([class]),[vce-ready] p+h3[data-v-4304d87d]:not([class]),[vce-ready] p+h4[data-v-4304d87d]:not([class]),[vce-ready] p+h5[data-v-4304d87d]:not([class]),#__nuxt p+ul[data-v-4304d87d]:not([class]),#__nuxt p+p[data-v-4304d87d]:not([class]),#__nuxt p+h1[data-v-4304d87d]:not([class]),#__nuxt p+h2[data-v-4304d87d]:not([class]),#__nuxt p+h3[data-v-4304d87d]:not([class]),#__nuxt p+h4[data-v-4304d87d]:not([class]),#__nuxt p+h5[data-v-4304d87d]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-4304d87d]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-4304d87d]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-4304d87d]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-4304d87d]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-4304d87d]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-4304d87d]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-4304d87d]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-4304d87d]::after,#__nuxt [class*=body-] a[target=_blank][data-v-4304d87d]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-4304d87d]::after,#__nuxt p:not([class]) a[target=_blank][data-v-4304d87d]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-4304d87d],[vce-ready] [class*=heading-] a[href][data-v-4304d87d]:focus,[vce-ready] [class*=body-] a[href][data-v-4304d87d],[vce-ready] [class*=body-] a[href][data-v-4304d87d]:focus,[vce-ready] h1:not([class]) a[href][data-v-4304d87d],[vce-ready] h1:not([class]) a[href][data-v-4304d87d]:focus,[vce-ready] h2:not([class]) a[href][data-v-4304d87d],[vce-ready] h2:not([class]) a[href][data-v-4304d87d]:focus,[vce-ready] h3:not([class]) a[href][data-v-4304d87d],[vce-ready] h3:not([class]) a[href][data-v-4304d87d]:focus,[vce-ready] h4:not([class]) a[href][data-v-4304d87d],[vce-ready] h4:not([class]) a[href][data-v-4304d87d]:focus,[vce-ready] h5:not([class]) a[href][data-v-4304d87d],[vce-ready] h5:not([class]) a[href][data-v-4304d87d]:focus,[vce-ready] p:not([class]) a[href][data-v-4304d87d],[vce-ready] p:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt [class*=heading-] a[href][data-v-4304d87d],#__nuxt [class*=heading-] a[href][data-v-4304d87d]:focus,#__nuxt [class*=body-] a[href][data-v-4304d87d],#__nuxt [class*=body-] a[href][data-v-4304d87d]:focus,#__nuxt h1:not([class]) a[href][data-v-4304d87d],#__nuxt h1:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt h2:not([class]) a[href][data-v-4304d87d],#__nuxt h2:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt h3:not([class]) a[href][data-v-4304d87d],#__nuxt h3:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt h4:not([class]) a[href][data-v-4304d87d],#__nuxt h4:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt h5:not([class]) a[href][data-v-4304d87d],#__nuxt h5:not([class]) a[href][data-v-4304d87d]:focus,#__nuxt p:not([class]) a[href][data-v-4304d87d],#__nuxt p:not([class]) a[href][data-v-4304d87d]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-4304d87d]:hover,[vce-ready] [class*=heading-] a[href][data-v-4304d87d]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-4304d87d]:hover,[vce-ready] [class*=body-] a[href][data-v-4304d87d]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] h1:not([class]) a[href][data-v-4304d87d]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] h2:not([class]) a[href][data-v-4304d87d]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] h3:not([class]) a[href][data-v-4304d87d]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] h4:not([class]) a[href][data-v-4304d87d]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] h5:not([class]) a[href][data-v-4304d87d]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-4304d87d]:hover,[vce-ready] p:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-4304d87d]:hover,#__nuxt [class*=heading-] a[href][data-v-4304d87d]:focus:hover,#__nuxt [class*=body-] a[href][data-v-4304d87d]:hover,#__nuxt [class*=body-] a[href][data-v-4304d87d]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt h1:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt h2:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt h3:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt h4:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt h5:not([class]) a[href][data-v-4304d87d]:focus:hover,#__nuxt p:not([class]) a[href][data-v-4304d87d]:hover,#__nuxt p:not([class]) a[href][data-v-4304d87d]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-4304d87d],[vce-ready] .body--bold[data-v-4304d87d],#__nuxt .heading--bold[data-v-4304d87d],#__nuxt .body--bold[data-v-4304d87d]{font-weight:700}[vce-ready] .heading--regular[data-v-4304d87d],[vce-ready] .body--regular[data-v-4304d87d],#__nuxt .heading--regular[data-v-4304d87d],#__nuxt .body--regular[data-v-4304d87d]{font-weight:400}[vce-ready] .heading--light[data-v-4304d87d],[vce-ready] .body--light[data-v-4304d87d],#__nuxt .heading--light[data-v-4304d87d],#__nuxt .body--light[data-v-4304d87d]{font-weight:100}[vce-ready] .heading--flush[data-v-4304d87d],[vce-ready] .body--flush[data-v-4304d87d],#__nuxt .heading--flush[data-v-4304d87d],#__nuxt .body--flush[data-v-4304d87d]{margin-bottom:0;margin-top:0}@media(max-width: 1024px){.carouselgrid[data-v-4304d87d]{padding:0 16px;max-width:100vw;overflow-x:hidden;width:100%}}', ""]), c.locals = {}, t.exports = c
        },
        881: function(t, e, d) {
            "use strict";
            d(805)
        },
        882: function(t, e, d) {
            var c = d(8)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.screen-reader-only[data-v-35214c05]{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap}[vce-ready] h1[data-v-35214c05]:not([class]),[vce-ready] .heading-1[data-v-35214c05],#__nuxt h1[data-v-35214c05]:not([class]),#__nuxt .heading-1[data-v-35214c05]{font-size:40px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;margin-left:0;margin-right:0;line-height:100%}@media(min-width: 768px){[vce-ready] h1[data-v-35214c05]:not([class]),[vce-ready] .heading-1[data-v-35214c05],#__nuxt h1[data-v-35214c05]:not([class]),#__nuxt .heading-1[data-v-35214c05]{font-size:calc(40px + 24 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h1[data-v-35214c05]:not([class]),[vce-ready] .heading-1[data-v-35214c05],#__nuxt h1[data-v-35214c05]:not([class]),#__nuxt .heading-1[data-v-35214c05]{font-size:64px}}[vce-ready] h2[data-v-35214c05]:not([class]),[vce-ready] .heading-2[data-v-35214c05],#__nuxt h2[data-v-35214c05]:not([class]),#__nuxt .heading-2[data-v-35214c05]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h2[data-v-35214c05]:not([class]),[vce-ready] .heading-2[data-v-35214c05],#__nuxt h2[data-v-35214c05]:not([class]),#__nuxt .heading-2[data-v-35214c05]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){[vce-ready] h2[data-v-35214c05]:not([class]),[vce-ready] .heading-2[data-v-35214c05],#__nuxt h2[data-v-35214c05]:not([class]),#__nuxt .heading-2[data-v-35214c05]{font-size:44px}}@media(min-width: 768px){[vce-ready] h2[data-v-35214c05]:not([class]),[vce-ready] .heading-2[data-v-35214c05],#__nuxt h2[data-v-35214c05]:not([class]),#__nuxt .heading-2[data-v-35214c05]{line-height:110%}}[vce-ready] h3[data-v-35214c05]:not([class]),[vce-ready] .heading-3[data-v-35214c05],#__nuxt h3[data-v-35214c05]:not([class]),#__nuxt .heading-3[data-v-35214c05]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1.25rem;font-weight:700;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h3[data-v-35214c05]:not([class]),[vce-ready] .heading-3[data-v-35214c05],#__nuxt h3[data-v-35214c05]:not([class]),#__nuxt .heading-3[data-v-35214c05]{font-size:2rem}}[vce-ready] h4[data-v-35214c05]:not([class]),[vce-ready] .heading-4[data-v-35214c05],#__nuxt h4[data-v-35214c05]:not([class]),#__nuxt .heading-4[data-v-35214c05]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.25rem;font-weight:500;letter-spacing:-0.01em;line-height:120%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h4[data-v-35214c05]:not([class]),[vce-ready] .heading-4[data-v-35214c05],#__nuxt h4[data-v-35214c05]:not([class]),#__nuxt .heading-4[data-v-35214c05]{font-size:1.5rem;line-height:115%;letter-spacing:-0.02em}}[vce-ready] h5[data-v-35214c05]:not([class]),[vce-ready] .heading-5[data-v-35214c05],#__nuxt h5[data-v-35214c05]:not([class]),#__nuxt .heading-5[data-v-35214c05]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:1.125rem;font-weight:700;letter-spacing:-0.01em;line-height:135%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] h5[data-v-35214c05]:not([class]),[vce-ready] .heading-5[data-v-35214c05],#__nuxt h5[data-v-35214c05]:not([class]),#__nuxt .heading-5[data-v-35214c05]{font-family:"HelveticaNowTextMedium",helvetica,sans-serif;font-size:1.375rem;font-weight:500}}[vce-ready] p[data-v-35214c05]:not([class]),[vce-ready] .body-1[data-v-35214c05],#__nuxt p[data-v-35214c05]:not([class]),#__nuxt .body-1[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-2[data-v-35214c05],#__nuxt .body-2[data-v-35214c05]{font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;font-size:1rem;font-weight:700;letter-spacing:.02em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-3[data-v-35214c05],#__nuxt .body-3[data-v-35214c05]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}[vce-ready] .body-4[data-v-35214c05],#__nuxt .body-4[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}[vce-ready] .body-caption[data-v-35214c05],#__nuxt .body-caption[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.75rem;font-weight:400;letter-spacing:0;line-height:130%;margin-left:0;margin-right:0}@media(min-width: 768px){[vce-ready] .body-caption[data-v-35214c05],#__nuxt .body-caption[data-v-35214c05]{line-height:150%}}[vce-ready] [class*=heading-]+p[data-v-35214c05],[vce-ready] [class*=body-]+p[data-v-35214c05],[vce-ready] h1+p[data-v-35214c05],[vce-ready] h2+p[data-v-35214c05],[vce-ready] h3+p[data-v-35214c05],[vce-ready] h4+p[data-v-35214c05],[vce-ready] h5+p[data-v-35214c05],[vce-ready] p+p[data-v-35214c05],#__nuxt [class*=heading-]+p[data-v-35214c05],#__nuxt [class*=body-]+p[data-v-35214c05],#__nuxt h1+p[data-v-35214c05],#__nuxt h2+p[data-v-35214c05],#__nuxt h3+p[data-v-35214c05],#__nuxt h4+p[data-v-35214c05],#__nuxt h5+p[data-v-35214c05],#__nuxt p+p[data-v-35214c05]{margin-top:1rem}[vce-ready] [class*=heading-]+ul[data-v-35214c05]:not([class]),[vce-ready] [class*=body-]+ul[data-v-35214c05]:not([class]),#__nuxt [class*=heading-]+ul[data-v-35214c05]:not([class]),#__nuxt [class*=body-]+ul[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-35214c05]:not([class]),[vce-ready] p+p[data-v-35214c05]:not([class]),[vce-ready] p+h1[data-v-35214c05]:not([class]),[vce-ready] p+h2[data-v-35214c05]:not([class]),[vce-ready] p+h3[data-v-35214c05]:not([class]),[vce-ready] p+h4[data-v-35214c05]:not([class]),[vce-ready] p+h5[data-v-35214c05]:not([class]),#__nuxt p+ul[data-v-35214c05]:not([class]),#__nuxt p+p[data-v-35214c05]:not([class]),#__nuxt p+h1[data-v-35214c05]:not([class]),#__nuxt p+h2[data-v-35214c05]:not([class]),#__nuxt p+h3[data-v-35214c05]:not([class]),#__nuxt p+h4[data-v-35214c05]:not([class]),#__nuxt p+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] h1+ul[data-v-35214c05]:not([class]),[vce-ready] h1+p[data-v-35214c05]:not([class]),[vce-ready] h1+h1[data-v-35214c05]:not([class]),[vce-ready] h1+h2[data-v-35214c05]:not([class]),[vce-ready] h1+h3[data-v-35214c05]:not([class]),[vce-ready] h1+h4[data-v-35214c05]:not([class]),[vce-ready] h1+h5[data-v-35214c05]:not([class]),#__nuxt h1+ul[data-v-35214c05]:not([class]),#__nuxt h1+p[data-v-35214c05]:not([class]),#__nuxt h1+h1[data-v-35214c05]:not([class]),#__nuxt h1+h2[data-v-35214c05]:not([class]),#__nuxt h1+h3[data-v-35214c05]:not([class]),#__nuxt h1+h4[data-v-35214c05]:not([class]),#__nuxt h1+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] h2+ul[data-v-35214c05]:not([class]),[vce-ready] h2+p[data-v-35214c05]:not([class]),[vce-ready] h2+h1[data-v-35214c05]:not([class]),[vce-ready] h2+h2[data-v-35214c05]:not([class]),[vce-ready] h2+h3[data-v-35214c05]:not([class]),[vce-ready] h2+h4[data-v-35214c05]:not([class]),[vce-ready] h2+h5[data-v-35214c05]:not([class]),#__nuxt h2+ul[data-v-35214c05]:not([class]),#__nuxt h2+p[data-v-35214c05]:not([class]),#__nuxt h2+h1[data-v-35214c05]:not([class]),#__nuxt h2+h2[data-v-35214c05]:not([class]),#__nuxt h2+h3[data-v-35214c05]:not([class]),#__nuxt h2+h4[data-v-35214c05]:not([class]),#__nuxt h2+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] h3+ul[data-v-35214c05]:not([class]),[vce-ready] h3+p[data-v-35214c05]:not([class]),[vce-ready] h3+h1[data-v-35214c05]:not([class]),[vce-ready] h3+h2[data-v-35214c05]:not([class]),[vce-ready] h3+h3[data-v-35214c05]:not([class]),[vce-ready] h3+h4[data-v-35214c05]:not([class]),[vce-ready] h3+h5[data-v-35214c05]:not([class]),#__nuxt h3+ul[data-v-35214c05]:not([class]),#__nuxt h3+p[data-v-35214c05]:not([class]),#__nuxt h3+h1[data-v-35214c05]:not([class]),#__nuxt h3+h2[data-v-35214c05]:not([class]),#__nuxt h3+h3[data-v-35214c05]:not([class]),#__nuxt h3+h4[data-v-35214c05]:not([class]),#__nuxt h3+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] h4+ul[data-v-35214c05]:not([class]),[vce-ready] h4+p[data-v-35214c05]:not([class]),[vce-ready] h4+h1[data-v-35214c05]:not([class]),[vce-ready] h4+h2[data-v-35214c05]:not([class]),[vce-ready] h4+h3[data-v-35214c05]:not([class]),[vce-ready] h4+h4[data-v-35214c05]:not([class]),[vce-ready] h4+h5[data-v-35214c05]:not([class]),#__nuxt h4+ul[data-v-35214c05]:not([class]),#__nuxt h4+p[data-v-35214c05]:not([class]),#__nuxt h4+h1[data-v-35214c05]:not([class]),#__nuxt h4+h2[data-v-35214c05]:not([class]),#__nuxt h4+h3[data-v-35214c05]:not([class]),#__nuxt h4+h4[data-v-35214c05]:not([class]),#__nuxt h4+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] h5+ul[data-v-35214c05]:not([class]),[vce-ready] h5+p[data-v-35214c05]:not([class]),[vce-ready] h5+h1[data-v-35214c05]:not([class]),[vce-ready] h5+h2[data-v-35214c05]:not([class]),[vce-ready] h5+h3[data-v-35214c05]:not([class]),[vce-ready] h5+h4[data-v-35214c05]:not([class]),[vce-ready] h5+h5[data-v-35214c05]:not([class]),#__nuxt h5+ul[data-v-35214c05]:not([class]),#__nuxt h5+p[data-v-35214c05]:not([class]),#__nuxt h5+h1[data-v-35214c05]:not([class]),#__nuxt h5+h2[data-v-35214c05]:not([class]),#__nuxt h5+h3[data-v-35214c05]:not([class]),#__nuxt h5+h4[data-v-35214c05]:not([class]),#__nuxt h5+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] p+ul[data-v-35214c05]:not([class]),[vce-ready] p+p[data-v-35214c05]:not([class]),[vce-ready] p+h1[data-v-35214c05]:not([class]),[vce-ready] p+h2[data-v-35214c05]:not([class]),[vce-ready] p+h3[data-v-35214c05]:not([class]),[vce-ready] p+h4[data-v-35214c05]:not([class]),[vce-ready] p+h5[data-v-35214c05]:not([class]),#__nuxt p+ul[data-v-35214c05]:not([class]),#__nuxt p+p[data-v-35214c05]:not([class]),#__nuxt p+h1[data-v-35214c05]:not([class]),#__nuxt p+h2[data-v-35214c05]:not([class]),#__nuxt p+h3[data-v-35214c05]:not([class]),#__nuxt p+h4[data-v-35214c05]:not([class]),#__nuxt p+h5[data-v-35214c05]:not([class]){margin-top:1rem}[vce-ready] [class*=heading-] a[target=_blank][data-v-35214c05]::after,[vce-ready] [class*=body-] a[target=_blank][data-v-35214c05]::after,[vce-ready] h1:not([class]) a[target=_blank][data-v-35214c05]::after,[vce-ready] h2:not([class]) a[target=_blank][data-v-35214c05]::after,[vce-ready] h3:not([class]) a[target=_blank][data-v-35214c05]::after,[vce-ready] h4:not([class]) a[target=_blank][data-v-35214c05]::after,[vce-ready] h5:not([class]) a[target=_blank][data-v-35214c05]::after,[vce-ready] p:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt [class*=heading-] a[target=_blank][data-v-35214c05]::after,#__nuxt [class*=body-] a[target=_blank][data-v-35214c05]::after,#__nuxt h1:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt h2:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt h3:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt h4:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt h5:not([class]) a[target=_blank][data-v-35214c05]::after,#__nuxt p:not([class]) a[target=_blank][data-v-35214c05]::after{background-image:url("./primeforce.com/apm/www/assets/static/svgs/new-tab-icon.svg");background-size:contain;content:"";display:inline-block;height:16px;margin-left:.1rem;width:16px}[vce-ready] [class*=heading-] a[href][data-v-35214c05],[vce-ready] [class*=heading-] a[href][data-v-35214c05]:focus,[vce-ready] [class*=body-] a[href][data-v-35214c05],[vce-ready] [class*=body-] a[href][data-v-35214c05]:focus,[vce-ready] h1:not([class]) a[href][data-v-35214c05],[vce-ready] h1:not([class]) a[href][data-v-35214c05]:focus,[vce-ready] h2:not([class]) a[href][data-v-35214c05],[vce-ready] h2:not([class]) a[href][data-v-35214c05]:focus,[vce-ready] h3:not([class]) a[href][data-v-35214c05],[vce-ready] h3:not([class]) a[href][data-v-35214c05]:focus,[vce-ready] h4:not([class]) a[href][data-v-35214c05],[vce-ready] h4:not([class]) a[href][data-v-35214c05]:focus,[vce-ready] h5:not([class]) a[href][data-v-35214c05],[vce-ready] h5:not([class]) a[href][data-v-35214c05]:focus,[vce-ready] p:not([class]) a[href][data-v-35214c05],[vce-ready] p:not([class]) a[href][data-v-35214c05]:focus,#__nuxt [class*=heading-] a[href][data-v-35214c05],#__nuxt [class*=heading-] a[href][data-v-35214c05]:focus,#__nuxt [class*=body-] a[href][data-v-35214c05],#__nuxt [class*=body-] a[href][data-v-35214c05]:focus,#__nuxt h1:not([class]) a[href][data-v-35214c05],#__nuxt h1:not([class]) a[href][data-v-35214c05]:focus,#__nuxt h2:not([class]) a[href][data-v-35214c05],#__nuxt h2:not([class]) a[href][data-v-35214c05]:focus,#__nuxt h3:not([class]) a[href][data-v-35214c05],#__nuxt h3:not([class]) a[href][data-v-35214c05]:focus,#__nuxt h4:not([class]) a[href][data-v-35214c05],#__nuxt h4:not([class]) a[href][data-v-35214c05]:focus,#__nuxt h5:not([class]) a[href][data-v-35214c05],#__nuxt h5:not([class]) a[href][data-v-35214c05]:focus,#__nuxt p:not([class]) a[href][data-v-35214c05],#__nuxt p:not([class]) a[href][data-v-35214c05]:focus{color:#08428d;font-weight:700;text-decoration:none}[vce-ready] [class*=heading-] a[href][data-v-35214c05]:hover,[vce-ready] [class*=heading-] a[href][data-v-35214c05]:focus:hover,[vce-ready] [class*=body-] a[href][data-v-35214c05]:hover,[vce-ready] [class*=body-] a[href][data-v-35214c05]:focus:hover,[vce-ready] h1:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] h1:not([class]) a[href][data-v-35214c05]:focus:hover,[vce-ready] h2:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] h2:not([class]) a[href][data-v-35214c05]:focus:hover,[vce-ready] h3:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] h3:not([class]) a[href][data-v-35214c05]:focus:hover,[vce-ready] h4:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] h4:not([class]) a[href][data-v-35214c05]:focus:hover,[vce-ready] h5:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] h5:not([class]) a[href][data-v-35214c05]:focus:hover,[vce-ready] p:not([class]) a[href][data-v-35214c05]:hover,[vce-ready] p:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt [class*=heading-] a[href][data-v-35214c05]:hover,#__nuxt [class*=heading-] a[href][data-v-35214c05]:focus:hover,#__nuxt [class*=body-] a[href][data-v-35214c05]:hover,#__nuxt [class*=body-] a[href][data-v-35214c05]:focus:hover,#__nuxt h1:not([class]) a[href][data-v-35214c05]:hover,#__nuxt h1:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt h2:not([class]) a[href][data-v-35214c05]:hover,#__nuxt h2:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt h3:not([class]) a[href][data-v-35214c05]:hover,#__nuxt h3:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt h4:not([class]) a[href][data-v-35214c05]:hover,#__nuxt h4:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt h5:not([class]) a[href][data-v-35214c05]:hover,#__nuxt h5:not([class]) a[href][data-v-35214c05]:focus:hover,#__nuxt p:not([class]) a[href][data-v-35214c05]:hover,#__nuxt p:not([class]) a[href][data-v-35214c05]:focus:hover{text-decoration:underline}[vce-ready] .heading--bold[data-v-35214c05],[vce-ready] .body--bold[data-v-35214c05],#__nuxt .heading--bold[data-v-35214c05],#__nuxt .body--bold[data-v-35214c05]{font-weight:700}[vce-ready] .heading--regular[data-v-35214c05],[vce-ready] .body--regular[data-v-35214c05],#__nuxt .heading--regular[data-v-35214c05],#__nuxt .body--regular[data-v-35214c05]{font-weight:400}[vce-ready] .heading--light[data-v-35214c05],[vce-ready] .body--light[data-v-35214c05],#__nuxt .heading--light[data-v-35214c05],#__nuxt .body--light[data-v-35214c05]{font-weight:100}[vce-ready] .heading--flush[data-v-35214c05],[vce-ready] .body--flush[data-v-35214c05],#__nuxt .heading--flush[data-v-35214c05],#__nuxt .body--flush[data-v-35214c05]{margin-bottom:0;margin-top:0}.container[data-v-35214c05]{color:#1e2430}.media-image[data-v-35214c05]{margin-bottom:1rem}@media(min-width: 768px){.media-image[data-v-35214c05]{margin-bottom:0}}.tier[data-v-35214c05]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0;display:inline-block;padding:3px 9px;border:1px solid #1e2430;border-radius:3px}.title[data-v-35214c05]{font-size:32px;font-family:"HelveticaNowDisplayBold",helvetica,sans-serif;letter-spacing:0;font-weight:700;line-height:120%;margin-left:0;margin-right:0;margin:1rem 0}@media(min-width: 768px){.title[data-v-35214c05]{font-size:calc(32px + 12 *\n    ((100vw - 768px) / 672))}}@media(min-width: 1440px){.title[data-v-35214c05]{font-size:44px}}@media(min-width: 768px){.title[data-v-35214c05]{line-height:110%}}.description[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;margin-bottom:2rem}ul[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;list-style:none;margin:0;margin-bottom:2rem;padding:0}@media(min-width: 768px){ul[data-v-35214c05]{columns:2}}li[data-v-35214c05]{break-inside:avoid-column;display:flex;padding-bottom:.25rem}.feature-icon[data-v-35214c05]{fill:#fff;width:1.3125rem;height:1.3125rem;padding:.1875rem;border-radius:50%;background-color:rgba(0,0,0,.2);margin:.375rem;margin-right:1rem}.feature-item-text[data-v-35214c05]{padding-top:.1875rem}.pullquote[data-v-35214c05]{background-color:rgba(0,0,0,.05);border-radius:20px;padding:2.5rem}.avatar[data-v-35214c05]{width:2.5rem;height:2.5rem;overflow:hidden;border-radius:50%;margin-right:12px}.quote[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:1rem;font-weight:400;letter-spacing:0;line-height:150%;margin-left:0;margin-right:0;margin-bottom:1rem}.attribution[data-v-35214c05]{font-family:"HelveticaNowTextBold",helvetica,sans-serif;font-size:.875rem;font-weight:700;letter-spacing:-0.01em;line-height:150%;margin-left:0;margin-right:0}.role[data-v-35214c05]{font-family:"HelveticaNowText",helvetica,sans-serif;font-size:.875rem;font-weight:400;line-height:150%;margin-left:0;margin-right:0;letter-spacing:-0.01em}.source[data-v-35214c05]{display:inline-flex}', ""]), c.locals = {}, t.exports = c
        }
    }
]);