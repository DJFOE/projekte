"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([[179], {
    902: (at,Bt,d)=>{
        var J = d(1481)
          , t = d(4650)
          , k = d(5861)
          , I = d(529)
          , q = d(6201)
          , s = d(4006);
        var _ = d(4850)
          , h = d(7221);
        let L = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/admin"
                }
                getApplicationConfiguration() {
                    return this.configObservable || (this.configObservable = this.http.get(this.host + "/application-configuration").pipe((0,
                    _.U)(e=>e.config, (0,
                    h.K)(e=>{
                        throw e
                    }
                    )))),
                    this.configObservable
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var v = d(5951)
          , D = d(5767)
          , m = d(801)
          , R = d(534)
          , p = d(1195)
          , C = d(4916)
          , A = d(4859)
          , x = d(3546);
        const Jt = function(o) {
            return {
                juicycoin: o
            }
        };
        v.vI.add(D.IxA, m.bhf, m.Xf_, m.Egd, m.lXL, R.Eg, R.lX),
        v.vz.watch();
        let Ue = (()=>{
            class o {
                constructor(e) {
                    this.configurationService = e,
                    this.altcoinName = "Juicycoin"
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        null !== (n = e?.application) && void 0 !== n && n.altcoinName && (this.altcoinName = e.application.altcoinName)
                    }
                    , e=>console.log(e))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(L))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-token-sale"]],
                decls: 117,
                vars: 26,
                consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "whitepaper-container", "offer-container"], [3, "innerHtml"], [1, "divider"], [1, "mat-elevation-z6"], [2, "margin-left", "10px"], ["translate", ""], ["href", "https://ponzico.win/ponzico.pdf", "target", "_blank", "rel", "noopener noreferrer"], ["mat-raised-button", "", "color", "accent"], [1, "fas", "fa-university", "fa-lg"], ["href", "https://www.sec.gov/investor/alerts/ia_virtualcurrencies.pdf", "target", "_blank", "rel", "noopener noreferrer"], [1, "fas", "fa-graduation-cap", "fa-lg"], [1, "offer-box"], [1, "text-justify"], [1, "fab", "fa-bitcoin"], [1, "badge"], ["fxFlexAlign.lt-md", "center", 1, "faq-container"], ["translate", "", 1, "title"], [1, "fas", "fa-comments", "fa-2x"], [1, "far", "fa-comment-alt", "fa-2x"], [1, "far", "fa-comments", "fa-2x"], [1, "fas", "fa-comment-alt", "fa-2x"], [2, "margin-left", "10px", 3, "innerHtml"], ["translate", "", 1, "text-justify"], ["src", "assets/public/images/padding/56px.png"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card")(1, "div", 0)(2, "div", 1)(3, "mat-card-header")(4, "mat-card-title"),
                    t._uU(5),
                    t.ALo(6, "translate"),
                    t.qZA(),
                    t._UZ(7, "mat-card-subtitle", 2),
                    t.ALo(8, "translate"),
                    t.qZA(),
                    t._UZ(9, "div", 3),
                    t.TgZ(10, "mat-card", 4)(11, "h4"),
                    t._uU(12),
                    t.ALo(13, "translate"),
                    t.TgZ(14, "small", 5),
                    t._uU(15, "("),
                    t.TgZ(16, "span", 6),
                    t._uU(17, "WHITEPAPER_REFERENCES"),
                    t.qZA(),
                    t._uU(18, ")"),
                    t.qZA()(),
                    t.TgZ(19, "div")(20, "a", 7)(21, "button", 8),
                    t._UZ(22, "i", 9),
                    t._uU(23, " PonzICO Whitepaper"),
                    t.qZA()(),
                    t.TgZ(24, "a", 10)(25, "button", 8),
                    t._UZ(26, "i", 11),
                    t._uU(27, " PonziCoin Whitepaper"),
                    t.qZA()()()(),
                    t.TgZ(28, "div", 12)(29, "h3", 6),
                    t._uU(30, "SECTION_SALES_PITCH"),
                    t.qZA(),
                    t.TgZ(31, "p", 13),
                    t._uU(32, " Lorem ipsum dolor sit amet "),
                    t.TgZ(33, "strong"),
                    t._UZ(34, "i", 14),
                    t._uU(35),
                    t.qZA(),
                    t._uU(36, ", consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                    t.TgZ(37, "span", 6),
                    t._uU(38, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(39, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                    t.TgZ(40, "span", 6),
                    t._uU(41, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(42, " Ut wisi enim ad minim veniam, quis "),
                    t.TgZ(43, "strong"),
                    t._UZ(44, "i", 14),
                    t._uU(45),
                    t.qZA(),
                    t._uU(46, " nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "),
                    t.TgZ(47, "span", 6),
                    t._uU(48, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(49, " Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),
                    t.TgZ(50, "span", 6),
                    t._uU(51, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(52, " Duis autem vel eum "),
                    t.TgZ(53, "strong"),
                    t._UZ(54, "i", 14),
                    t._uU(55),
                    t.qZA(),
                    t._uU(56, " iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                    t.TgZ(57, "span", 6),
                    t._uU(58, "GIVE_US_ALL_YOUR_MONEY"),
                    t.qZA(),
                    t._uU(59, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. "),
                    t.TgZ(60, "span", 15),
                    t._UZ(61, "i", 14),
                    t._uU(62),
                    t.qZA(),
                    t._uU(63, " est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. "),
                    t.qZA()()(),
                    t.TgZ(64, "div", 16)(65, "mat-card-header")(66, "mat-card-title", 17),
                    t._uU(67, "ICO_FAQ"),
                    t.qZA()(),
                    t._UZ(68, "div", 3),
                    t.TgZ(69, "mat-card", 4)(70, "h5"),
                    t._UZ(71, "i", 18),
                    t._uU(72, " Stet "),
                    t.TgZ(73, "strong"),
                    t._UZ(74, "i", 14),
                    t._uU(75),
                    t.qZA(),
                    t._uU(76, " clita kasd gubergren?"),
                    t.qZA(),
                    t.TgZ(77, "small", 13),
                    t._uU(78, " Stet clita kasd gubergren, no "),
                    t.TgZ(79, "strong"),
                    t._UZ(80, "i", 14),
                    t._uU(81),
                    t.qZA(),
                    t._uU(82, " sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                    t.qZA()(),
                    t.TgZ(83, "mat-card", 4)(84, "h5"),
                    t._UZ(85, "i", 19),
                    t._uU(86, " Consetetur sadipscing elitr?"),
                    t.qZA(),
                    t.TgZ(87, "small", 13),
                    t._uU(88, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "),
                    t.TgZ(89, "strong"),
                    t._UZ(90, "i", 14),
                    t._uU(91),
                    t.qZA(),
                    t._uU(92, " diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                    t.qZA()(),
                    t.TgZ(93, "mat-card", 4)(94, "h5"),
                    t._UZ(95, "i", 20),
                    t._uU(96, " Hendrerit "),
                    t.TgZ(97, "strong"),
                    t._UZ(98, "i", 14),
                    t._uU(99),
                    t.qZA(),
                    t._uU(100, " in vulputate velit?"),
                    t.qZA(),
                    t.TgZ(101, "small", 13),
                    t._uU(102, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                    t.qZA()(),
                    t.TgZ(103, "mat-card", 4)(104, "h5"),
                    t._UZ(105, "i", 21),
                    t._uU(106, " Justo duo dolores et ea rebum?"),
                    t.qZA(),
                    t.TgZ(107, "small", 13),
                    t._uU(108, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                    t.qZA()(),
                    t.TgZ(109, "mat-card", 4)(110, "h5"),
                    t._UZ(111, "i", 18)(112, "span", 22),
                    t.ALo(113, "translate"),
                    t.qZA(),
                    t.TgZ(114, "small", 23),
                    t._uU(115, "ICO_FAQ_ANSWER"),
                    t.qZA()()(),
                    t._UZ(116, "img", 24),
                    t.qZA()()),
                    2 & e && (t.xp6(5),
                    t.hij(" ", t.lcZ(6, 12, "TITLE_TOKENSALE"), " "),
                    t.xp6(2),
                    t.Q6J("innerHtml", t.xi3(8, 14, "SECTION_ICO", t.VKq(22, Jt, n.altcoinName)), t.oJD),
                    t.xp6(5),
                    t.hij("", t.lcZ(13, 17, "SECTION_WHITEPAPER"), " "),
                    t.xp6(23),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(7),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(13),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(6),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(10),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(8),
                    t.hij(" ", n.altcoinName, ""),
                    t.xp6(13),
                    t.Q6J("innerHtml", t.xi3(113, 19, "ICO_FAQ_QUESTION", t.VKq(24, Jt, n.altcoinName)), t.oJD))
                },
                dependencies: [p.Pi, C.xw, C.SQ, C.XD, A.lW, x.a8, x.dk, x.n5, x.$j, p.X$],
                styles: [".container[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;margin-bottom:10px;padding:12px 20px}.whitepaper-container.offer-container[_ngcontent-%COMP%]{max-width:700px;min-width:400px;width:70%}.faq-container[_ngcontent-%COMP%]{max-width:500px;min-width:200px;width:70%}a[_ngcontent-%COMP%]:nth-child(1){padding-right:10px}.title[_ngcontent-%COMP%]{padding-bottom:27px}.divider[_ngcontent-%COMP%]{border:.5px solid #f2f2f2;margin-bottom:10px}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}mat-card[_ngcontent-%COMP%]:nth-child(1){border-radius:5px;margin:0 auto;width:80%}"]
            }),
            o
        }
        )();
        var Qt = d(8929);
        let N = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.isLoggedIn = new Qt.xQ,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Users"
                }
                find(e) {
                    return this.http.get(this.hostServer + "/rest/user/authentication-details/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                login(e) {
                    return this.isLoggedIn.next(!0),
                    this.http.post(this.hostServer + "/rest/user/login", e).pipe((0,
                    _.U)(n=>n.authentication), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                getLoggedInState() {
                    return this.isLoggedIn.asObservable()
                }
                changePassword(e) {
                    return this.http.get(this.hostServer + "/rest/user/change-password?current=" + e.current + "&new=" + e.new + "&repeat=" + e.repeat).pipe((0,
                    _.U)(n=>n.user), (0,
                    h.K)(n=>{
                        throw n.error
                    }
                    ))
                }
                resetPassword(e) {
                    return this.http.post(this.hostServer + "/rest/user/reset-password", e).pipe((0,
                    _.U)(n=>n.user), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                whoAmI() {
                    return this.http.get(this.hostServer + "/rest/user/whoami").pipe((0,
                    _.U)(e=>e.user), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                oauthLogin(e) {
                    return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + e)
                }
                saveLastLoginIp() {
                    return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe((0,
                    _.U)(e=>e), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                deluxeStatus() {
                    return this.http.get(this.hostServer + "/rest/deluxe-membership").pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                upgradeToDeluxe(e, n) {
                    return this.http.post(this.hostServer + "/rest/deluxe-membership", {
                        paymentMode: e,
                        paymentId: n
                    }).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var y = d(6630);
        let ke = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.cookieService = e,
                    this.userService = n,
                    this.router = i,
                    this.route = r,
                    this.ngZone = l
                }
                ngOnInit() {
                    var e = this;
                    this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe(n=>{
                        const i = btoa(n.email.split("").reverse().join(""));
                        this.userService.save({
                            email: n.email,
                            password: i,
                            passwordRepeat: i
                        }).subscribe(()=>{
                            this.login(n)
                        }
                        , ()=>this.login(n))
                    }
                    , n=>{
                        this.invalidateSession(n),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/login"])
                        }))
                    }
                    )
                }
                login(e) {
                    var n = this;
                    this.userService.login({
                        email: e.email,
                        password: btoa(e.email.split("").reverse().join("")),
                        oauth: !0
                    }).subscribe(i=>{
                        const r = new Date;
                        r.setHours(r.getHours() + 8),
                        this.cookieService.put("token", i.token, {
                            expires: r
                        }),
                        localStorage.setItem("token", i.token),
                        sessionStorage.setItem("bid", i.bid),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield n.router.navigate(["/"])
                        }))
                    }
                    , i=>{
                        this.invalidateSession(i),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield n.router.navigate(["/login"])
                        }))
                    }
                    )
                }
                invalidateSession(e) {
                    console.log(e),
                    this.cookieService.remove("token"),
                    localStorage.removeItem("token"),
                    sessionStorage.removeItem("bid")
                }
                parseRedirectUrlParams() {
                    const n = this.route.snapshot.data.params.substr(1).split("&")
                      , i = {};
                    for (let r = 0; r < n.length; r++) {
                        const l = n[r].split("=");
                        i[l[0]] = l[1]
                    }
                    return i
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(q.N_),t.Y36(N),t.Y36(y.F0),t.Y36(y.gz),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-oauth"]],
                decls: 9,
                vars: 6,
                consts: [["fxLayoutAlign", "center"], [1, "primary-notification"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "div")(3, "h3"),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA(),
                    t.TgZ(6, "div"),
                    t._uU(7),
                    t.ALo(8, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(4),
                    t.Oqu(t.lcZ(5, 2, "TITLE_LOGIN")),
                    t.xp6(3),
                    t.Oqu(t.lcZ(8, 4, "CONFIRM_LOGGED_IN_VIA_OAUTH2")))
                },
                dependencies: [C.Wh, x.a8, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:300px;width:35%}"]
            }),
            o
        }
        )()
          , H = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.itemTotal = new Qt.xQ,
                    this.host = this.hostServer + "/api/BasketItems"
                }
                find(e) {
                    return this.http.get(`${this.hostServer}/rest/basket/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                put(e, n) {
                    return this.http.put(`${this.host}/${e}`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                checkout(e, n, i) {
                    return this.http.post(`${this.hostServer}/rest/basket/${e}/checkout`, {
                        couponData: n,
                        orderDetails: i
                    }).pipe((0,
                    _.U)(r=>r.orderConfirmation), (0,
                    h.K)(r=>{
                        throw r
                    }
                    ))
                }
                applyCoupon(e, n) {
                    return this.http.put(`${this.hostServer}/rest/basket/${e}/coupon/${n}`, {}).pipe((0,
                    _.U)(i=>i.discount), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
                updateNumberOfCartItems() {
                    this.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(e=>{
                        this.itemTotal.next(e.Products.reduce((n,i)=>n + i.BasketItem.quantity, 0))
                    }
                    , e=>console.log(e))
                }
                getItemTotal() {
                    return this.itemTotal.asObservable()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var Ht = d(491);
        let Q = (()=>{
            class o {
                constructor(e, n) {
                    this.router = e,
                    this.ngZone = n
                }
                canActivate() {
                    return !!localStorage.getItem("token") || (this.forbidRoute("UNAUTHORIZED_ACCESS_ERROR"),
                    !1)
                }
                forbidRoute(e="UNAUTHORIZED_PAGE_ACCESS_ERROR") {
                    var n = this;
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield n.router.navigate(["403"], {
                            skipLocationChange: !0,
                            queryParams: {
                                error: e
                            }
                        })
                    }))
                }
                tokenDecode() {
                    let e = null;
                    const n = localStorage.getItem("token");
                    if (n)
                        try {
                            e = Ht(n)
                        } catch (i) {
                            console.log(i)
                        }
                    return e
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(y.F0),t.LFG(t.R0b))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac
            }),
            o
        }
        )()
          , Gt = (()=>{
            class o {
                constructor(e) {
                    this.loginGuard = e
                }
                canActivate() {
                    const e = this.loginGuard.tokenDecode();
                    return !(!e?.data || "admin" !== e.data.role) || (this.loginGuard.forbidRoute(),
                    !1)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(Q))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac
            }),
            o
        }
        )()
          , jt = (()=>{
            class o {
                constructor(e) {
                    this.loginGuard = e
                }
                canActivate() {
                    const e = this.loginGuard.tokenDecode();
                    return !(!e?.data || "accounting" !== e.data.role) || (this.loginGuard.forbidRoute(),
                    !1)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(Q))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac
            }),
            o
        }
        )()
          , Tt = (()=>{
            class o {
                constructor(e) {
                    this.loginGuard = e
                }
                isDeluxe() {
                    const e = this.loginGuard.tokenDecode();
                    return e?.data && "deluxe" === e.data.role
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(Q))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac
            }),
            o
        }
        )();
        var K = d(7009);
        let M = (()=>{
            class o {
                constructor(e, n) {
                    this.translateService = e,
                    this.snackBar = n
                }
                open(e, n) {
                    this.translateService.get(e).subscribe(i=>{
                        this.snackBar.open(i, "X", {
                            duration: 5e3,
                            panelClass: n
                        })
                    }
                    , ()=>{
                        this.snackBar.open(e, "X", {
                            duration: 5e3,
                            panelClass: n
                        })
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(p.sK),t.LFG(K.ux))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var T = d(6895)
          , G = d(1600)
          , c = d(671);
        function Oe(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 19)
        }
        function Pe(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 20),
            t._UZ(1, "img", 21),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.s9C("alt", e.name),
                t.Q6J("src", "assets/public/images/products/" + e.image, t.LSH)
            }
        }
        function Le(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell", 20)
        }
        function Ne(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 19)
        }
        function Ee(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 22),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, " ")
            }
        }
        function qe(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell", 23)
        }
        function Me(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 19)
        }
        function De(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 27),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.dec(i.BasketItem.id))
                }),
                t._UZ(1, "i", 28),
                t.qZA()
            }
        }
        function Fe(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 27),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.inc(i.BasketItem.id))
                }),
                t._UZ(1, "i", 29),
                t.qZA()
            }
        }
        function Re(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 24),
            t.YNc(1, De, 2, 0, "button", 25),
            t.TgZ(2, "span", 26),
            t._uU(3),
            t.qZA(),
            t.YNc(4, Fe, 2, 0, "button", 25),
            t.qZA()),
            2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", n.allowEdit),
                t.xp6(2),
                t.hij(" ", e.BasketItem.quantity, ""),
                t.xp6(1),
                t.Q6J("ngIf", n.allowEdit)
            }
        }
        function Ye(o, a) {
            1 & o && (t.TgZ(0, "mat-footer-cell", 30),
            t._uU(1, "TOTAL"),
            t.qZA())
        }
        function Be(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 19)
        }
        function Je(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 31),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.price, "\xa4")
            }
        }
        function Qe(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell", 32)
        }
        function He(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 19)
        }
        function Ge(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 36)(1, "button", 27),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.delete(r.BasketItem.id))
                }),
                t._UZ(2, "i", 37),
                t.qZA()()
            }
        }
        function je(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell", 36)
        }
        function ze(o, a) {
            1 & o && (t.ynx(0, 33),
            t.YNc(1, He, 1, 0, "mat-header-cell", 2),
            t.YNc(2, Ge, 3, 0, "mat-cell", 34),
            t.YNc(3, je, 1, 0, "mat-footer-cell", 35),
            t.BQk())
        }
        function Ke(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function We(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function $e(o, a) {
            1 & o && t._UZ(0, "mat-footer-row", 39)
        }
        function Ve(o, a) {
            if (1 & o && (t.TgZ(0, "span"),
            t.YNc(1, $e, 1, 0, "mat-footer-row", 38),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("matFooterRowDef", e.tableColumns)
            }
        }
        function Xe(o, a) {
            if (1 & o && (t.TgZ(0, "div", 40),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.AsE("", t.lcZ(2, 2, "LABEL_TOTAL_PRICE"), ": ", e.itemTotal, "\xa4")
            }
        }
        v.vI.add(R.I7, m.El_, m.CPW),
        v.vz.watch();
        let zt = (()=>{
            class o {
                constructor(e, n, i, r) {
                    this.deluxeGuard = e,
                    this.basketService = n,
                    this.userService = i,
                    this.snackBarHelperService = r,
                    this.allowEdit = !1,
                    this.displayTotal = !1,
                    this.totalPrice = !0,
                    this.emitTotal = new t.vpe,
                    this.emitProductCount = new t.vpe,
                    this.tableColumns = ["image", "product", "quantity", "price"],
                    this.dataSource = [],
                    this.bonus = 0,
                    this.itemTotal = 0
                }
                ngOnInit() {
                    this.allowEdit && !this.tableColumns.includes("remove") && this.tableColumns.push("remove"),
                    this.load(),
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email || "anonymous",
                        this.userEmail = "(" + this.userEmail + ")"
                    }
                    , e=>console.log(e))
                }
                load() {
                    this.basketService.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(e=>{
                        this.isDeluxe() && e.Products.forEach(n=>{
                            n.price = n.deluxePrice
                        }
                        ),
                        this.dataSource = e.Products,
                        this.itemTotal = e.Products.reduce((n,i)=>n + i.price * i.BasketItem.quantity, 0),
                        this.bonus = e.Products.reduce((n,i)=>n + Math.round(i.price / 10) * i.BasketItem.quantity, 0),
                        this.sendToParent(this.dataSource.length)
                    }
                    , e=>console.log(e))
                }
                delete(e) {
                    this.basketService.del(e).subscribe(()=>{
                        this.load(),
                        this.basketService.updateNumberOfCartItems()
                    }
                    , n=>console.log(n))
                }
                inc(e) {
                    this.addToQuantity(e, 1)
                }
                dec(e) {
                    this.addToQuantity(e, -1)
                }
                addToQuantity(e, n) {
                    this.basketService.get(e).subscribe(i=>{
                        const r = i.quantity + n;
                        this.basketService.put(e, {
                            quantity: r < 1 ? 1 : r
                        }).subscribe(()=>{
                            this.load(),
                            this.basketService.updateNumberOfCartItems()
                        }
                        , l=>{
                            var u;
                            this.snackBarHelperService.open(null === (u = l.error) || void 0 === u ? void 0 : u.error, "errorBar"),
                            console.log(l)
                        }
                        )
                    }
                    , i=>console.log(i))
                }
                sendToParent(e) {
                    this.emitTotal.emit([this.itemTotal, this.bonus]),
                    this.emitProductCount.emit(e)
                }
                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Tt),t.Y36(H),t.Y36(N),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-purchase-basket"]],
                inputs: {
                    allowEdit: "allowEdit",
                    displayTotal: "displayTotal",
                    totalPrice: "totalPrice"
                },
                outputs: {
                    emitTotal: "emitTotal",
                    emitProductCount: "emitProductCount"
                },
                decls: 27,
                vars: 10,
                consts: [[3, "dataSource"], ["matColumnDef", "image"], ["style", "display: none;", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matFooterCellDef"], ["matColumnDef", "product"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", "style", "font-size: initial;", 4, "matCellDef"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 4, "matFooterCellDef"], ["matColumnDef", "quantity"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "content-align", 4, "matCellDef"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "header-align", 4, "matFooterCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", "style", "font-size: initial;", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 4, "matFooterCellDef"], ["matColumnDef", "remove", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "price", 4, "ngIf"], [2, "display", "none"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", 1, "content-align"], [1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 2, "font-size", "initial"], ["fxFlex", "35%", "fxFlex.lt-md", "30%"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "content-align"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "font-size", "initial"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-minus-square"], [1, "fas", "fa-plus-square"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "header-align"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 2, "font-size", "initial"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%"], ["matColumnDef", "remove"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matFooterCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%"], [1, "far", "fa-trash-alt"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-row", ""], ["id", "price"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "h1"),
                    t._uU(1),
                    t.ALo(2, "translate"),
                    t.TgZ(3, "small"),
                    t._uU(4),
                    t.qZA()(),
                    t.TgZ(5, "mat-table", 0),
                    t.ynx(6, 1),
                    t.YNc(7, Oe, 1, 0, "mat-header-cell", 2),
                    t.YNc(8, Pe, 2, 2, "mat-cell", 3),
                    t.YNc(9, Le, 1, 0, "mat-footer-cell", 4),
                    t.BQk(),
                    t.ynx(10, 5),
                    t.YNc(11, Ne, 1, 0, "mat-header-cell", 2),
                    t.YNc(12, Ee, 2, 1, "mat-cell", 6),
                    t.YNc(13, qe, 1, 0, "mat-footer-cell", 7),
                    t.BQk(),
                    t.ynx(14, 8),
                    t.YNc(15, Me, 1, 0, "mat-header-cell", 2),
                    t.YNc(16, Re, 5, 3, "mat-cell", 9),
                    t.YNc(17, Ye, 2, 0, "mat-footer-cell", 10),
                    t.BQk(),
                    t.ynx(18, 11),
                    t.YNc(19, Be, 1, 0, "mat-header-cell", 2),
                    t.YNc(20, Je, 2, 1, "mat-cell", 12),
                    t.YNc(21, Qe, 1, 0, "mat-footer-cell", 13),
                    t.BQk(),
                    t.YNc(22, ze, 4, 0, "ng-container", 14),
                    t.YNc(23, Ke, 1, 0, "mat-header-row", 15),
                    t.YNc(24, We, 1, 0, "mat-row", 16),
                    t.YNc(25, Ve, 2, 1, "span", 17),
                    t.qZA(),
                    t.YNc(26, Xe, 3, 4, "div", 18)),
                    2 & e && (t.xp6(1),
                    t.hij(" ", t.lcZ(2, 8, "TITLE_BASKET"), " "),
                    t.xp6(3),
                    t.Oqu(n.userEmail),
                    t.xp6(1),
                    t.Q6J("dataSource", n.dataSource),
                    t.xp6(17),
                    t.Q6J("ngIf", n.allowEdit),
                    t.xp6(1),
                    t.Q6J("matHeaderRowDef", n.tableColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.tableColumns),
                    t.xp6(1),
                    t.Q6J("ngIf", n.displayTotal),
                    t.xp6(1),
                    t.Q6J("ngIf", n.totalPrice))
                },
                dependencies: [T.O5, C.yH, G.b8, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.mD, c.Ke, c.ge, c.ev, c.yh, c.XQ, c.Gk, c.Q2, p.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{height:auto;width:90px}mat-cell[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px;padding-left:10px;padding-right:10px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.content-align[_ngcontent-%COMP%]{display:flex;justify-content:center}#price[_ngcontent-%COMP%]{font-size:large;margin-top:30px;text-align:right;width:100%}"]
            }),
            o
        }
        )();
        const to = function(o) {
            return {
                bonus: o
            }
        };
        v.vI.add(m.bMA),
        v.vz.watch();
        let eo = (()=>{
            class o {
                constructor(e, n) {
                    this.router = e,
                    this.ngZone = n,
                    this.productCount = 0,
                    this.bonus = 0
                }
                checkout() {
                    var e = this;
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/address/select"])
                    }))
                }
                getProductCount(e) {
                    this.productCount = e
                }
                getBonusPoints(e) {
                    sessionStorage.setItem("itemTotal", e[0]),
                    this.bonus = e[1]
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.F0),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-basket"]],
                decls: 8,
                vars: 8,
                consts: [[1, "mat-elevation-z6"], [3, "allowEdit", "emitTotal", "emitProductCount"], ["id", "checkoutButton", "color", "primary", "mat-raised-button", "", 1, "checkout-button", 3, "disabled", "click"], [1, "fas", "fa-cart-arrow-down"], ["translate", "", 1, "hint", 3, "translateParams"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "app-purchase-basket", 1),
                    t.NdJ("emitTotal", function(r) {
                        return n.getBonusPoints(r)
                    })("emitProductCount", function(r) {
                        return n.getProductCount(r)
                    }),
                    t.qZA(),
                    t.TgZ(2, "button", 2),
                    t.NdJ("click", function() {
                        return n.checkout()
                    }),
                    t._UZ(3, "i", 3),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7, "CHECKOUT_FOR_BONUS_POINTS"),
                    t.qZA()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowEdit", !0),
                    t.xp6(1),
                    t.Q6J("disabled", n.productCount < 1),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(5, 4, "BTN_CHECKOUT"), " "),
                    t.xp6(2),
                    t.Q6J("translateParams", t.VKq(6, to, n.bonus)))
                },
                dependencies: [p.Pi, A.lW, x.a8, zt, p.X$],
                styles: [".container[_ngcontent-%COMP%]{min-width:420px;width:40%}mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;padding:12px 20px}.mat-row[_ngcontent-%COMP%]{padding-bottom:10px}.mat-column-description[_ngcontent-%COMP%], .mat-column-bonus[_ngcontent-%COMP%], .mat-column-price[_ngcontent-%COMP%]{margin-left:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:22px}mat-form-field[_ngcontent-%COMP%]{margin-top:15px;width:100%}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:20px}#checkoutButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:center;margin-top:5px}.payment-label[_ngcontent-%COMP%]{padding-top:10px}"]
            }),
            o
        }
        )()
          , bt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/track-order"
                }
                find(e) {
                    return e = encodeURIComponent(e),
                    this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function oo(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 27),
            t.qZA())
        }
        function no(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 28),
            t.qZA())
        }
        function ao(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 29),
            t.qZA())
        }
        function io(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 30),
            t.qZA())
        }
        function ro(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 31),
            t.qZA())
        }
        function so(o, a) {
            1 & o && (t.TgZ(0, "span"),
            t._UZ(1, "i", 32),
            t.qZA())
        }
        function lo(o, a) {
            if (1 & o && (t.TgZ(0, "span", 33)(1, "span"),
            t._UZ(2, "i", 34),
            t.qZA(),
            t.TgZ(3, "span", 35),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.AsE("", e.results.eta, " ", t.lcZ(5, 2, "LABEL_DAYS"), "")
            }
        }
        function co(o, a) {
            if (1 & o && (t.TgZ(0, "span", 33)(1, "span"),
            t._UZ(2, "i", 36),
            t.qZA(),
            t.TgZ(3, "span", 35),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.AsE("", e.results.eta, " ", t.lcZ(5, 2, "LABEL_DAYS"), "")
            }
        }
        function uo(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function po(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, "")
            }
        }
        function mo(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 38),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function ho(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 39),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.price, "\xa4")
            }
        }
        function _o(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function go(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 40),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.quantity, "")
            }
        }
        function fo(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 1),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function Co(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 41),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.total, "\xa4")
            }
        }
        function vo(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function To(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        const bo = function(o) {
            return {
                bonus: o
            }
        };
        v.vI.add(m.zVD, m.UO1, m.sUJ, m.$KU, m.J9Y),
        v.vz.watch();
        var j = (()=>{
            return (o = j || (j = {}))[o.New = 0] = "New",
            o[o.Packing = 1] = "Packing",
            o[o.Transit = 2] = "Transit",
            o[o.Delivered = 3] = "Delivered",
            j;
            var o
        }
        )();
        let Kt = (()=>{
            class o {
                constructor(e, n, i) {
                    this.route = e,
                    this.trackOrderService = n,
                    this.sanitizer = i,
                    this.displayedColumns = ["product", "price", "quantity", "total price"],
                    this.dataSource = new c.by,
                    this.results = {},
                    this.status = j.New,
                    this.Status = j
                }
                ngOnInit() {
                    this.orderId = this.route.snapshot.queryParams.id,
                    this.trackOrderService.find(this.orderId).subscribe(e=>{
                        this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${e.data[0].orderId}</code>`),
                        this.results.email = e.data[0].email,
                        this.results.totalPrice = e.data[0].totalPrice,
                        this.results.products = e.data[0].products,
                        this.results.eta = void 0 !== e.data[0].eta ? e.data[0].eta : "?",
                        this.results.bonus = e.data[0].bonus,
                        this.dataSource.data = this.results.products,
                        this.status = e.data[0].delivered ? j.Delivered : this.route.snapshot.data.type ? j.New : this.results.eta > 2 ? j.Packing : j.Transit
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.gz),t.Y36(bt),t.Y36(J.H7))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-track-result"]],
                decls: 48,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], [3, "innerHtml"], [2, "text-align", "center"], [1, "container-fluid", "well"], [1, "row", "fa-4x"], [4, "ngIf"], ["class", "fa-layers fa-fw", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "table-wrapper"], [1, "table-heading", "heading"], ["fxLayoutAlign", "center"], [1, "mat-elevation-z0", 3, "dataSource"], ["table", ""], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], ["class", "product-name", 4, "matCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["class", "product-price", "fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["class", "product-quantity", 4, "matCellDef"], ["matColumnDef", "total price"], ["class", "product-total", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "bonus-container"], ["translate", "", 3, "translateParams"], [1, "fas", "fa-warehouse", "confirmation"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-truck-loading", "confirmation"], [1, "fas", "fa-truck-loading"], [1, "fas", "fa-truck", "confirmation"], [1, "fas", "fa-truck"], [1, "fa-layers", "fa-fw"], [1, "fas", "fa-home", "confirmation"], [1, "fa-layers-counter", "accent-notification", 2, "width", "max-content"], [1, "fas", "fa-home"], [1, "product-name"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", "", 1, "product-price"], [1, "product-quantity"], [1, "product-total"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1")(2, "span", 1),
                    t._uU(3, "TITLE_SEARCH_RESULTS"),
                    t.qZA(),
                    t._uU(4, " - "),
                    t._UZ(5, "span", 2),
                    t.qZA(),
                    t.TgZ(6, "div", 3)(7, "h3", 1),
                    t._uU(8, "LABEL_EXPECTED_DELIVERY"),
                    t.qZA(),
                    t.TgZ(9, "div", 4)(10, "div", 5),
                    t.YNc(11, oo, 2, 0, "span", 6),
                    t.YNc(12, no, 2, 0, "span", 6),
                    t.YNc(13, ao, 2, 0, "span", 6),
                    t.YNc(14, io, 2, 0, "span", 6),
                    t.YNc(15, ro, 2, 0, "span", 6),
                    t.YNc(16, so, 2, 0, "span", 6),
                    t.YNc(17, lo, 6, 4, "span", 7),
                    t.YNc(18, co, 6, 4, "span", 7),
                    t.qZA()()(),
                    t.TgZ(19, "div", 8)(20, "div", 9)(21, "h2", 1),
                    t._uU(22, "LABEL_PRODUCT_ORDERED"),
                    t.qZA()()(),
                    t.TgZ(23, "div", 10)(24, "mat-table", 11, 12),
                    t.ynx(26, 13),
                    t.YNc(27, uo, 2, 0, "mat-header-cell", 14),
                    t.YNc(28, po, 2, 1, "mat-cell", 15),
                    t.BQk(),
                    t.ynx(29, 16),
                    t.YNc(30, mo, 2, 0, "mat-header-cell", 17),
                    t.YNc(31, ho, 2, 1, "mat-cell", 18),
                    t.BQk(),
                    t.ynx(32, 19),
                    t.YNc(33, _o, 2, 0, "mat-header-cell", 14),
                    t.YNc(34, go, 2, 1, "mat-cell", 20),
                    t.BQk(),
                    t.ynx(35, 21),
                    t.YNc(36, fo, 2, 0, "mat-header-cell", 14),
                    t.YNc(37, Co, 2, 1, "mat-cell", 22),
                    t.BQk(),
                    t.YNc(38, vo, 1, 0, "mat-header-row", 23),
                    t.YNc(39, To, 1, 0, "mat-row", 24),
                    t.qZA()(),
                    t.TgZ(40, "div", 25)(41, "h2", 26),
                    t._uU(42, "BONUS_POINTS_EARNED"),
                    t.qZA(),
                    t.TgZ(43, "p"),
                    t._uU(44, "("),
                    t._UZ(45, "span", 2),
                    t.ALo(46, "translate"),
                    t._uU(47, ")"),
                    t.qZA()()()),
                    2 & e && (t.xp6(5),
                    t.Q6J("innerHtml", n.results.orderNo, t.oJD),
                    t.xp6(6),
                    t.Q6J("ngIf", n.status === n.Status.New),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status !== n.Status.New),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status === n.Status.Packing),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status !== n.Status.Packing),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status === n.Status.Transit),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status !== n.Status.Transit),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status === n.Status.Delivered),
                    t.xp6(1),
                    t.Q6J("ngIf", n.status !== n.Status.Delivered),
                    t.xp6(6),
                    t.Q6J("dataSource", n.dataSource),
                    t.xp6(14),
                    t.Q6J("matHeaderRowDef", n.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.displayedColumns),
                    t.xp6(2),
                    t.Q6J("translateParams", t.VKq(16, bo, n.results.bonus)),
                    t.xp6(4),
                    t.Q6J("innerHtml", t.lcZ(46, 14, "BONUS_FOR_FUTURE_PURCHASES"), t.oJD))
                },
                dependencies: [T.O5, p.Pi, C.Wh, G.b8, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, x.a8, p.X$],
                styles: ["mat-table[_ngcontent-%COMP%], .table-heading[_ngcontent-%COMP%]{width:90%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);height:35px;justify-content:center;padding:0 20px;width:90%}.product-name[_ngcontent-%COMP%]{margin-right:25px}.table-wrapper[_ngcontent-%COMP%]{margin-top:30px}.table-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.row.fa-4x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.bonus-container[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;margin-top:10px;place-content:stretch center}.bonus-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0}"]
            }),
            o
        }
        )()
          , pt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Feedbacks"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , Wt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/captcha"
                }
                getCaptcha() {
                    return this.http.get(this.host + "/").pipe((0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , W = (()=>{
            class o {
                constructor(e) {
                    this._document = e
                }
                attachEnterKeyHandler(e, n, i) {
                    const r = this._document.getElementById(e)
                      , l = this._document.getElementById(n);
                    r.addEventListener("keyup", function(u) {
                        u.preventDefault(),
                        13 === u.keyCode && !l.disabled && i()
                    })
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(T.K0))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var g = d(9549)
          , P = d(4144)
          , $t = d(7314);
        function xo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_COMMENT "),
            t.qZA())
        }
        function Ao(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        function Zo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_CAPTCHA "),
            t.qZA())
        }
        const wo = function() {
            return {
                length: "160"
            }
        };
        v.vI.add(m.Tab, m.XCy),
        v.vz.watch();
        let So = (()=>{
            class o {
                constructor(e, n, i, r, l, u) {
                    this.userService = e,
                    this.captchaService = n,
                    this.feedbackService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.snackBarHelperService = u,
                    this.authorControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.feedbackControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.captchaControl = new s.p4("",[s.kI.required, s.kI.pattern("-?[\\d]*")]),
                    this.userIdControl = new s.p4("",[]),
                    this.rating = 0,
                    this.feedback = void 0
                }
                ngOnInit() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.feedback = {},
                        this.userIdControl.setValue(e.id),
                        this.feedback.UserId = e.id,
                        this.authorControl.setValue(e.email ? `***${e.email.slice(3)}` : "anonymous")
                    }
                    , e=>{
                        this.feedback = void 0,
                        console.log(e)
                    }
                    ),
                    this.getNewCaptcha(),
                    this.formSubmitService.attachEnterKeyHandler("feedback-form", "submitButton", ()=>this.save())
                }
                getNewCaptcha() {
                    this.captchaService.getCaptcha().subscribe(e=>{
                        this.captcha = e.captcha,
                        this.captchaId = e.captchaId
                    }
                    , e=>e)
                }
                save() {
                    this.feedback.captchaId = this.captchaId,
                    this.feedback.captcha = this.captchaControl.value,
                    this.feedback.comment = `${this.feedbackControl.value} (${this.authorControl.value})`,
                    this.feedback.rating = this.rating,
                    this.feedback.UserId = this.userIdControl.value,
                    this.feedbackService.save(this.feedback).subscribe(e=>{
                        5 === e.rating ? this.translate.get("FEEDBACK_FIVE_STAR_THANK_YOU").subscribe(n=>{
                            this.snackBarHelperService.open(n)
                        }
                        , n=>{
                            this.snackBarHelperService.open(n)
                        }
                        ) : this.translate.get("FEEDBACK_THANK_YOU").subscribe(n=>{
                            this.snackBarHelperService.open(n)
                        }
                        , n=>{
                            this.snackBarHelperService.open(n)
                        }
                        ),
                        this.feedback = {},
                        this.ngOnInit(),
                        this.resetForm()
                    }
                    , e=>{
                        console.log(e),
                        this.snackBarHelperService.open(e.error, "errorBar"),
                        this.feedback = {},
                        this.resetCaptcha()
                    }
                    )
                }
                resetForm() {
                    this.authorControl.markAsUntouched(),
                    this.authorControl.markAsPristine(),
                    this.authorControl.setValue(""),
                    this.feedbackControl.markAsUntouched(),
                    this.feedbackControl.markAsPristine(),
                    this.feedbackControl.setValue(""),
                    this.rating = 0,
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
                resetCaptcha() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
                formatRating(e) {
                    return `${e}\u2605`
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(N),t.Y36(Wt),t.Y36(pt),t.Y36(W),t.Y36(p.sK),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-contact"]],
                decls: 52,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "feedback-form", 1, "form-container"], ["hidden", "", "type", "text", "id", "userId", 3, "formControl"], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "aria-label", "Field with the name of the author", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "comment", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "aria-label", "Field for entering the comment or the feedback", 3, "formControl", "placeholder"], ["comment", ""], ["align", "end"], ["translate", "", 4, "ngIf"], [1, "rating-container"], ["translate", "", 2, "font-weight", "500", "margin-right", "8px", "float", "left"], ["id", "rating", "min", "1", "max", "5", "thumbLabel", "", "tickInterval", "1", "aria-label", "Slider for selecting the star rating", 3, "value", "displayWith", "valueChange"], [2, "margin-bottom", "10px", "margin-top", "10px"], [2, "font-weight", "500"], ["translate", "", 2, "font-size", "small"], ["id", "captcha", "aria-label", "CAPTCHA code which must be solved"], [2, "font-size", "small"], ["id", "captchaControl", "matInput", "", "type", "text", "aria-label", "Field for the result of the CAPTCHA code", "pattern", "-?[\\d]*", 3, "formControl", "placeholder"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the review", 3, "disabled", "click"], [1, "material-icons"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._UZ(5, "input", 4),
                    t.TgZ(6, "mat-form-field", 5)(7, "mat-label", 2),
                    t._uU(8, "LABEL_AUTHOR"),
                    t.qZA(),
                    t._UZ(9, "input", 6),
                    t.qZA(),
                    t.TgZ(10, "mat-form-field", 5)(11, "mat-label", 2),
                    t._uU(12, "LABEL_COMMENT"),
                    t.qZA(),
                    t.TgZ(13, "mat-hint", 2),
                    t._UZ(14, "i", 7),
                    t.TgZ(15, "em", 8),
                    t._uU(16),
                    t.ALo(17, "translate"),
                    t.qZA()(),
                    t._UZ(18, "textarea", 9, 10),
                    t.ALo(20, "translate"),
                    t.TgZ(21, "mat-hint", 11),
                    t._uU(22),
                    t.qZA(),
                    t.YNc(23, xo, 2, 0, "mat-error", 12),
                    t.qZA(),
                    t.TgZ(24, "div", 13)(25, "label", 14),
                    t._uU(26, "LABEL_RATING"),
                    t.qZA(),
                    t.TgZ(27, "mat-slider", 15),
                    t.NdJ("valueChange", function(r) {
                        return n.rating = r
                    }),
                    t.qZA()(),
                    t.TgZ(28, "div", 16)(29, "label", 17),
                    t._uU(30, "CAPTCHA:"),
                    t.qZA(),
                    t._uU(31, "\xa0\xa0"),
                    t.TgZ(32, "span", 18),
                    t._uU(33, "LABEL_WHAT_IS"),
                    t.qZA(),
                    t._uU(34, "\xa0 "),
                    t.TgZ(35, "code", 19),
                    t._uU(36),
                    t.qZA(),
                    t._uU(37, "\xa0"),
                    t.TgZ(38, "label", 20),
                    t._uU(39, "?"),
                    t.qZA()(),
                    t.TgZ(40, "mat-form-field", 5)(41, "mat-label", 2),
                    t._uU(42, "LABEL_RESULT"),
                    t.qZA(),
                    t._UZ(43, "input", 21),
                    t.ALo(44, "translate"),
                    t.YNc(45, Ao, 2, 0, "mat-error", 12),
                    t.YNc(46, Zo, 2, 0, "mat-error", 12),
                    t.qZA()(),
                    t.TgZ(47, "button", 22),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(48, "i", 23),
                    t._uU(49, " send "),
                    t.qZA(),
                    t._uU(50),
                    t.ALo(51, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(19);
                        t.xp6(5),
                        t.Q6J("formControl", n.userIdControl),
                        t.xp6(4),
                        t.Q6J("formControl", n.authorControl),
                        t.xp6(7),
                        t.Oqu(t.xi3(17, 16, "MAX_TEXTAREA_LENGTH", t.DdM(25, wo))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(20, 19, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", n.feedbackControl),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.feedbackControl.invalid && n.feedbackControl.errors.required),
                        t.xp6(4),
                        t.Q6J("value", n.rating)("displayWith", n.formatRating),
                        t.xp6(9),
                        t.Oqu(n.captcha),
                        t.xp6(7),
                        t.s9C("placeholder", t.lcZ(44, 21, "MANDATORY_CAPTCHA")),
                        t.Q6J("formControl", n.captchaControl),
                        t.xp6(2),
                        t.Q6J("ngIf", n.captchaControl.invalid && n.captchaControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.captchaControl.invalid && n.captchaControl.errors.pattern),
                        t.xp6(1),
                        t.Q6J("disabled", n.authorControl.invalid || n.feedbackControl.invalid || n.captchaControl.invalid || !n.rating),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(51, 23, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, C.Wh, s.Fj, s.JJ, s.nD, s.c5, s.oH, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, $t.pH, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.rating-container[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px}.star[_ngcontent-%COMP%]{color:#c8c8c8}.active[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{color:gold}[_nghost-%COMP%]     .br{margin:0!important}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            o
        }
        )();
        var Vt = d(5192);
        function yo(o, a) {
            if (1 & o && (t.TgZ(0, "a", 15)(1, "button", 16),
            t._UZ(2, "i", 17),
            t._uU(3, " Twitter"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.twitterUrl, t.LSH)
            }
        }
        function Io(o, a) {
            if (1 & o && (t.TgZ(0, "a", 18)(1, "button", 16),
            t._UZ(2, "i", 19),
            t._uU(3, " Facebook"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.facebookUrl, t.LSH)
            }
        }
        function Uo(o, a) {
            if (1 & o && (t.TgZ(0, "a", 20)(1, "button", 16),
            t._UZ(2, "i", 21),
            t._uU(3, " Slack"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.slackUrl, t.LSH)
            }
        }
        function ko(o, a) {
            if (1 & o && (t.TgZ(0, "a", 22)(1, "button", 16),
            t._UZ(2, "i", 23),
            t._uU(3, " Reddit"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.redditUrl, t.LSH)
            }
        }
        function Oo(o, a) {
            if (1 & o && (t.TgZ(0, "a", 24)(1, "button", 16),
            t._UZ(2, "i", 25),
            t._uU(3, " Press Kit"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.pressKitUrl, t.LSH)
            }
        }
        function Po(o, a) {
            if (1 & o && (t.TgZ(0, "a", 26)(1, "button", 16),
            t._UZ(2, "i", 27),
            t._uU(3, " NFT"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("href", e.nftUrl, t.LSH)
            }
        }
        function Lo(o, a) {
            if (1 & o && (t.TgZ(0, "div", 8)(1, "h3")(2, "span", 3),
            t._uU(3, "SECTION_SOCIAL_MEDIA"),
            t.qZA()(),
            t.YNc(4, yo, 4, 1, "a", 9),
            t.YNc(5, Io, 4, 1, "a", 10),
            t.YNc(6, Uo, 4, 1, "a", 11),
            t.YNc(7, ko, 4, 1, "a", 12),
            t.YNc(8, Oo, 4, 1, "a", 13),
            t.YNc(9, Po, 4, 1, "a", 14),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.Q6J("ngIf", e.twitterUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.facebookUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.slackUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.redditUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.pressKitUrl),
                t.xp6(1),
                t.Q6J("ngIf", e.nftUrl)
            }
        }
        v.vI.add(D.neY, D.mdU, D.SrY, D.HK3, R.Xg, R.T, m.Tab, m.q2v),
        v.vz.watch();
        let No = (()=>{
            class o {
                constructor(e, n, i) {
                    this.configurationService = e,
                    this.feedbackService = n,
                    this.sanitizer = i,
                    this.slideshowDataSource = [],
                    this.images = ["assets/public/images/carousel/1.jpg", "assets/public/images/carousel/2.jpg", "assets/public/images/carousel/3.jpg", "assets/public/images/carousel/4.jpg", "assets/public/images/carousel/5.png", "assets/public/images/carousel/6.jpg", "assets/public/images/carousel/7.jpg"],
                    this.stars = [null, '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>']
                }
                ngOnInit() {
                    this.populateSlideshowFromFeedbacks(),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        null !== (n = e?.application) && void 0 !== n && n.social && (e.application.social.twitterUrl && (this.twitterUrl = e.application.social.twitterUrl),
                        e.application.social.facebookUrl && (this.facebookUrl = e.application.social.facebookUrl),
                        e.application.social.slackUrl && (this.slackUrl = e.application.social.slackUrl),
                        e.application.social.redditUrl && (this.redditUrl = e.application.social.redditUrl),
                        e.application.social.pressKitUrl && (this.pressKitUrl = e.application.social.pressKitUrl),
                        e.application.social.nftUrl && (this.nftUrl = e.application.social.nftUrl))
                    }
                    , e=>console.log(e))
                }
                populateSlideshowFromFeedbacks() {
                    this.feedbackService.find().subscribe(e=>{
                        for (let n = 0; n < e.length; n++)
                            e[n].comment = `<span style="width: 90%; display:block;">${e[n].comment}<br/> (${this.stars[e[n].rating]})</span>`,
                            e[n].comment = this.sanitizer.bypassSecurityTrustHtml(e[n].comment),
                            this.slideshowDataSource.push({
                                url: this.images[n % this.images.length],
                                caption: e[n].comment
                            })
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(L),t.Y36(pt),t.Y36(J.H7))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-about"]],
                decls: 17,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "about-us"], ["translate", ""], [1, "text-justify"], ["href", "ftp/legal.md", "aria-label", "Link to the Terms of Use", "translate", ""], [3, "height", "autoPlay", "arrowSize", "showArrows", "showDots", "imageUrls"], ["class", "social", 4, "ngIf"], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", "style", "margin-left: 0px;", "aria-label", "Button for the Twitter page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the NFT of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Twitter page of the shop", 2, "margin-left", "0px", 3, "href"], ["mat-raised-button", "", "color", "accent"], [1, "fab", "fa-twitter", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href"], [1, "fab", "fa-facebook", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href"], [1, "fab", "fa-slack", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href"], [1, "fab", "fa-reddit", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href"], [1, "far", "fa-newspaper", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the NFT of the shop", 3, "href"], [1, "fas", "fa-palette", "fa-lg"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "section", 2)(3, "h1", 3),
                    t._uU(4, "TITLE_ABOUT"),
                    t.qZA(),
                    t.TgZ(5, "h3", 3),
                    t._uU(6, "SECTION_CORPORATE_HISTORY"),
                    t.qZA(),
                    t.TgZ(7, "p", 4),
                    t._uU(8, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                    t.TgZ(9, "a", 5),
                    t._uU(10, "LINK_TERMS_OF_USE"),
                    t.qZA(),
                    t._uU(11, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. "),
                    t.qZA(),
                    t.TgZ(12, "h3")(13, "span", 3),
                    t._uU(14, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA()(),
                    t._UZ(15, "slideshow", 6),
                    t.YNc(16, Lo, 10, 6, "div", 7),
                    t.qZA()()()),
                    2 & e && (t.xp6(15),
                    t.Q6J("height", "300px")("autoPlay", !0)("arrowSize", "10px")("showArrows", !0)("showDots", !1)("imageUrls", n.slideshowDataSource),
                    t.xp6(1),
                    t.Q6J("ngIf", n.twitterUrl || n.facebookUrl))
                },
                dependencies: [T.O5, p.Pi, C.Wh, Vt.w5, A.lW, x.a8],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:30px;margin-left:auto;margin-right:auto;width:80%}.about-us[_ngcontent-%COMP%]{margin-left:8.33333%;margin-right:8.33333%;width:83.3333%}.social[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:5px}.text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}"]
            }),
            o
        }
        )()
          , Xt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/SecurityAnswers"
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , xt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/SecurityQuestions"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                findBy(e) {
                    return this.http.get(this.hostServer + "/rest/user/security-question?email=" + e).pipe((0,
                    _.U)(n=>n.question), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var rt = d(9187)
          , te = d(4385)
          , ee = d(3238)
          , At = d(455);
        function Eo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function qo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_EMAIL"),
            t.qZA())
        }
        function Mo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_PASSWORD "),
            t.qZA())
        }
        const oe = function() {
            return {
                length: "5-40"
            }
        };
        function Do(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 30),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, oe))
        }
        function Fo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_PASSWORD_REPEAT "),
            t.qZA())
        }
        function Ro(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        const Yo = function() {
            return {
                value: 8
            }
        };
        function Bo(o, a) {
            if (1 & o && (t._UZ(0, "mat-password-strength-info", 31),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t.ALo(4, "translate"),
            t.ALo(5, "translate")),
            2 & o) {
                t.oxw();
                const e = t.MAs(41);
                t.Q6J("passwordComponent", e)("lowerCaseCriteriaMsg", t.lcZ(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", t.lcZ(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", t.lcZ(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", t.lcZ(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", t.xi3(5, 14, "MIN_CHARS_CRITERIA_MSG", t.DdM(17, Yo)))
            }
        }
        function Jo(o, a) {
            if (1 & o && (t.TgZ(0, "mat-option", 32),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.Q6J("value", e.id),
                t.xp6(1),
                t.hij(" ", e.question, " ")
            }
        }
        function Qo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_QUESTION "),
            t.qZA())
        }
        function Ho(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_ANSWER "),
            t.qZA())
        }
        v.vI.add(m.FKd, m.RLE),
        v.vz.watch();
        let Go = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w) {
                    this.securityQuestionService = e,
                    this.userService = n,
                    this.securityAnswerService = i,
                    this.router = r,
                    this.formSubmitService = l,
                    this.translateService = u,
                    this.snackBar = f,
                    this.snackBarHelperService = b,
                    this.ngZone = w,
                    this.emailControl = new s.p4("",[s.kI.required, s.kI.email]),
                    this.passwordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40)]),
                    this.repeatPasswordControl = new s.p4("",[s.kI.required, jo(this.passwordControl)]),
                    this.securityQuestionControl = new s.p4("",[s.kI.required]),
                    this.securityAnswerControl = new s.p4("",[s.kI.required]),
                    this.error = null
                }
                ngOnInit() {
                    this.securityQuestionService.find(null).subscribe(e=>{
                        this.securityQuestions = e
                    }
                    , e=>console.log(e)),
                    this.formSubmitService.attachEnterKeyHandler("registration-form", "registerButton", ()=>this.save())
                }
                save() {
                    var e = this;
                    const n = {
                        email: this.emailControl.value,
                        password: this.passwordControl.value,
                        passwordRepeat: this.repeatPasswordControl.value,
                        securityQuestion: this.securityQuestions.find(i=>i.id === this.securityQuestionControl.value),
                        securityAnswer: this.securityAnswerControl.value
                    };
                    this.userService.save(n).subscribe(i=>{
                        this.securityAnswerService.save({
                            UserId: i.id,
                            answer: this.securityAnswerControl.value,
                            SecurityQuestionId: this.securityQuestionControl.value
                        }).subscribe(()=>{
                            this.ngZone.run((0,
                            k.Z)(function*() {
                                return yield e.router.navigate(["/login"])
                            })),
                            this.snackBarHelperService.open("CONFIRM_REGISTER")
                        }
                        )
                    }
                    , i=>{
                        var r;
                        if (console.log(i),
                        null !== (r = i.error) && void 0 !== r && r.errors) {
                            const l = i.error.errors[0];
                            this.error = l.message ? l.message[0].toUpperCase() + l.message.slice(1) : l
                        }
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(xt),t.Y36(N),t.Y36(Xt),t.Y36(y.F0),t.Y36(W),t.Y36(p.sK),t.Y36(K.ux),t.Y36(M),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-register"]],
                decls: 69,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["ng-if", "error", 1, "error"], ["id", "registration-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "emailControl", "type", "text", "matInput", "", "aria-label", "Email address field", 3, "formControl", "focus"], ["translate", "", 4, "ngIf"], ["id", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field for the password", 3, "formControl", "focus"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "repeatPasswordControl", "type", "password", "matInput", "", "aria-label", "Field to confirm the password", 3, "formControl", "focus"], ["repeatPassword", ""], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], [1, "security-container"], ["color", "accent", "appearance", "outline"], ["placeholder", "", "name", "securityQuestion", "aria-label", "Selection list for the security question", 3, "formControl", "value", "valueChange", "focus"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "securityAnswerControl", "type", "text", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder", "focus"], ["type", "submit", "id", "registerButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the registration", 3, "disabled", "click"], [1, "material-icons"], ["id", "alreadyACustomerLink"], ["routerLink", "/login", "translate", "", 1, "primary-link"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"], [3, "value"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_REGISTRATION"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label", 2),
                    t._uU(9, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(10, "input", 6),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.qZA(),
                    t.YNc(11, Eo, 2, 0, "mat-error", 7),
                    t.YNc(12, qo, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(13, "mat-form-field", 5)(14, "mat-label", 2),
                    t._uU(15, "LABEL_PASSWORD"),
                    t.qZA(),
                    t.TgZ(16, "input", 8, 9),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.qZA(),
                    t.TgZ(18, "mat-hint", 2),
                    t._UZ(19, "i", 10),
                    t.TgZ(20, "em", 11),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA()(),
                    t.TgZ(23, "mat-hint", 12),
                    t._uU(24),
                    t.qZA(),
                    t.YNc(25, Mo, 2, 0, "mat-error", 7),
                    t.YNc(26, Do, 2, 2, "mat-error", 13),
                    t.qZA(),
                    t.TgZ(27, "mat-form-field", 5)(28, "mat-label", 2),
                    t._uU(29, "LABEL_PASSWORD_REPEAT"),
                    t.qZA(),
                    t.TgZ(30, "input", 14, 15),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.qZA(),
                    t.TgZ(32, "mat-hint", 12),
                    t._uU(33),
                    t.qZA(),
                    t.YNc(34, Fo, 2, 0, "mat-error", 7),
                    t.YNc(35, Ro, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(36, "mat-slide-toggle", 16, 17),
                    t._uU(38),
                    t.ALo(39, "translate"),
                    t.qZA(),
                    t._UZ(40, "mat-password-strength", 18, 19),
                    t.YNc(42, Bo, 6, 18, "mat-password-strength-info", 20),
                    t.TgZ(43, "div", 21)(44, "mat-form-field", 22)(45, "mat-label"),
                    t._uU(46),
                    t.ALo(47, "translate"),
                    t.qZA(),
                    t.TgZ(48, "mat-select", 23),
                    t.NdJ("valueChange", function(r) {
                        return n.selected = r
                    })("focus", function() {
                        return n.error = null
                    }),
                    t.YNc(49, Jo, 2, 2, "mat-option", 24),
                    t.qZA(),
                    t.TgZ(50, "mat-hint", 2),
                    t._UZ(51, "i", 10),
                    t.TgZ(52, "em", 11),
                    t._uU(53, "CANNOT_BE_CHANGED_LATER"),
                    t.qZA()(),
                    t.YNc(54, Qo, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(55, "mat-form-field", 5)(56, "mat-label", 2),
                    t._uU(57, "SECURITY_ANSWER"),
                    t.qZA(),
                    t.TgZ(58, "input", 25),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.ALo(59, "translate"),
                    t.qZA(),
                    t.YNc(60, Ho, 2, 0, "mat-error", 7),
                    t.qZA()(),
                    t.TgZ(61, "button", 26),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(62, "i", 27),
                    t._uU(63, " person_add "),
                    t.qZA(),
                    t._uU(64),
                    t.ALo(65, "translate"),
                    t.qZA(),
                    t.TgZ(66, "div", 28)(67, "a", 29),
                    t._uU(68, "ALREADY_A_CUSTOMER"),
                    t.qZA()()()()()),
                    2 & e) {
                        const i = t.MAs(17)
                          , r = t.MAs(31)
                          , l = t.MAs(37)
                          , u = t.MAs(41);
                        t.xp6(5),
                        t.Oqu(n.error),
                        t.xp6(5),
                        t.Q6J("formControl", n.emailControl),
                        t.xp6(1),
                        t.Q6J("ngIf", n.emailControl.invalid && n.emailControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.emailControl.invalid && n.emailControl.errors.email),
                        t.xp6(4),
                        t.Q6J("formControl", n.passwordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(22, 27, "INVALID_PASSWORD_LENGTH", t.DdM(38, oe))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.passwordControl.invalid && n.passwordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.passwordControl.invalid && (n.passwordControl.errors.minlength || n.passwordControl.errors.maxlength)),
                        t.xp6(4),
                        t.Q6J("formControl", n.repeatPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/40"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatPasswordControl.invalid && n.repeatPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatPasswordControl.invalid && n.repeatPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("color", u.color),
                        t.xp6(2),
                        t.Oqu(t.lcZ(39, 30, "SHOW_PASSWORD_ADVICE")),
                        t.xp6(2),
                        t.Q6J("password", i.value),
                        t.xp6(2),
                        t.Q6J("ngIf", l.checked),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(47, 32, "LABEL_SECURITY_QUESTION"), " "),
                        t.xp6(2),
                        t.Q6J("formControl", n.securityQuestionControl)("value", n.selected),
                        t.xp6(1),
                        t.Q6J("ngForOf", n.securityQuestions),
                        t.xp6(5),
                        t.Q6J("ngIf", n.securityQuestionControl.invalid && n.securityQuestionControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.securityAnswerControl)("placeholder", t.lcZ(59, 34, "SECURITY_ANSWER_PLACEHOLDER")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.securityAnswerControl.invalid && n.securityAnswerControl.errors.required),
                        t.xp6(1),
                        t.Q6J("disabled", n.emailControl.invalid || n.passwordControl.invalid || n.repeatPasswordControl.invalid || n.securityQuestionControl.invalid || n.securityAnswerControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(65, 36, "BTN_REGISTER"), " ")
                    }
                },
                dependencies: [T.sg, T.O5, y.rH, p.Pi, rt.ne, rt.Xy, C.Wh, s.Fj, s.JJ, s.oH, g.TO, g.KE, g.bx, g.hX, te.gD, ee.ey, A.lW, x.a8, P.Nt, At.Rr, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#registerButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#alreadyACustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}.security-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}  mat-option .mat-option-text{font-size:14px}"]
            }),
            o
        }
        )();
        function jo(o) {
            return function(e) {
                return o.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        var O = d(7392)
          , F = d(266);
        function zo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function Ko(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_EMAIL"),
            t.qZA())
        }
        function Wo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_SECURITY_ANSWER "),
            t.qZA())
        }
        function $o(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_NEW_PASSWORD "),
            t.qZA())
        }
        function Vo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_PASSWORD_REPEAT "),
            t.qZA())
        }
        function Xo(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        const ne = function() {
            return {
                length: "5-40"
            }
        };
        function tn(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 28),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, ne))
        }
        const en = function() {
            return {
                value: 8
            }
        };
        function on(o, a) {
            if (1 & o && (t._UZ(0, "mat-password-strength-info", 29),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t.ALo(4, "translate"),
            t.ALo(5, "translate")),
            2 & o) {
                t.oxw();
                const e = t.MAs(55);
                t.Q6J("passwordComponent", e)("lowerCaseCriteriaMsg", t.lcZ(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", t.lcZ(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", t.lcZ(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", t.lcZ(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", t.xi3(5, 14, "MIN_CHARS_CRITERIA_MSG", t.DdM(17, en)))
            }
        }
        v.vI.add(m.r6l, R.Xc),
        v.vz.watch();
        let nn = (()=>{
            class o {
                constructor(e, n, i) {
                    this.securityQuestionService = e,
                    this.userService = n,
                    this.translate = i,
                    this.emailControl = new s.p4("",[s.kI.required, s.kI.email]),
                    this.securityQuestionControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required]),
                    this.passwordControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required, s.kI.minLength(5)]),
                    this.repeatPasswordControl = new s.p4({
                        disabled: !0,
                        value: ""
                    },[s.kI.required, an(this.passwordControl)]),
                    this.timeoutDuration = 1e3
                }
                findSecurityQuestion() {
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout(()=>{
                        this.securityQuestion = void 0,
                        this.emailControl.value ? this.securityQuestionService.findBy(this.emailControl.value).subscribe(e=>{
                            e ? (this.securityQuestion = e.question,
                            this.securityQuestionControl.enable(),
                            this.passwordControl.enable(),
                            this.repeatPasswordControl.enable()) : (this.securityQuestionControl.disable(),
                            this.passwordControl.disable(),
                            this.repeatPasswordControl.disable())
                        }
                        , e=>e) : (this.securityQuestionControl.disable(),
                        this.passwordControl.disable(),
                        this.repeatPasswordControl.disable())
                    }
                    , this.timeoutDuration)
                }
                resetPassword() {
                    this.userService.resetPassword({
                        email: this.emailControl.value,
                        answer: this.securityQuestionControl.value,
                        new: this.passwordControl.value,
                        repeat: this.repeatPasswordControl.value
                    }).subscribe(()=>{
                        this.error = void 0,
                        this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(e=>{
                            this.confirmation = e
                        }
                        , e=>{
                            this.confirmation = e
                        }
                        ),
                        this.resetForm()
                    }
                    , e=>{
                        this.error = e.error,
                        this.confirmation = void 0,
                        this.resetErrorForm()
                    }
                    )
                }
                resetForm() {
                    this.emailControl.setValue(""),
                    this.emailControl.markAsPristine(),
                    this.emailControl.markAsUntouched(),
                    this.securityQuestionControl.setValue(""),
                    this.securityQuestionControl.markAsPristine(),
                    this.securityQuestionControl.markAsUntouched(),
                    this.passwordControl.setValue(""),
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.repeatPasswordControl.setValue(""),
                    this.repeatPasswordControl.markAsPristine(),
                    this.repeatPasswordControl.markAsUntouched()
                }
                resetErrorForm() {
                    this.emailControl.markAsPristine(),
                    this.emailControl.markAsUntouched(),
                    this.securityQuestionControl.setValue(""),
                    this.securityQuestionControl.markAsPristine(),
                    this.securityQuestionControl.markAsUntouched(),
                    this.passwordControl.setValue(""),
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.repeatPasswordControl.setValue(""),
                    this.repeatPasswordControl.markAsPristine(),
                    this.repeatPasswordControl.markAsUntouched()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(xt),t.Y36(N),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-forgot-password"]],
                decls: 61,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], [1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "email", "type", "email", "matInput", "", "placeholder", "Enter your email", "aria-label", "Email address field", 3, "formControl", "ngModelChange"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please enter your email address to proceed", 3, "matTooltip"], ["translate", "", 4, "ngIf"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "type", "password", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please answer your selected security question", 3, "matTooltip"], ["id", "newPassword", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field for New Password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field to confirm the new password", 3, "formControl"], ["repeatPassword", ""], ["translate", "", 3, "translateParams", 4, "ngIf"], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], ["type", "submit", "id", "resetButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the changes", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_FORGOT_PASSWORD"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7),
                    t.qZA(),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(12, "input", 7),
                    t.NdJ("ngModelChange", function() {
                        return n.findSecurityQuestion()
                    }),
                    t.qZA(),
                    t.TgZ(13, "mat-icon", 8),
                    t.ALo(14, "translate"),
                    t._uU(15, "help_outline "),
                    t.qZA(),
                    t.YNc(16, zo, 2, 0, "mat-error", 9),
                    t.YNc(17, Ko, 2, 0, "mat-error", 9),
                    t.qZA()(),
                    t.TgZ(18, "div", 10)(19, "mat-form-field", 6)(20, "mat-label", 2),
                    t._uU(21, "LABEL_SECURITY_QUESTION"),
                    t.qZA(),
                    t._UZ(22, "input", 11),
                    t.TgZ(23, "mat-icon", 12),
                    t.ALo(24, "translate"),
                    t._uU(25, "help_outline "),
                    t.qZA(),
                    t.YNc(26, Wo, 2, 0, "mat-error", 9),
                    t.qZA(),
                    t.TgZ(27, "mat-form-field", 6)(28, "mat-label", 2),
                    t._uU(29, "LABEL_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(30, "input", 13, 14),
                    t.TgZ(32, "mat-hint", 2),
                    t._UZ(33, "i", 15),
                    t.TgZ(34, "em", 16),
                    t._uU(35),
                    t.ALo(36, "translate"),
                    t.qZA()(),
                    t.TgZ(37, "mat-hint", 17),
                    t._uU(38),
                    t.qZA(),
                    t.YNc(39, $o, 2, 0, "mat-error", 9),
                    t.qZA(),
                    t.TgZ(40, "mat-form-field", 6)(41, "mat-label", 2),
                    t._uU(42, "LABEL_REPEAT_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(43, "input", 18, 19),
                    t.TgZ(45, "mat-hint", 17),
                    t._uU(46),
                    t.qZA(),
                    t.YNc(47, Vo, 2, 0, "mat-error", 9),
                    t.YNc(48, Xo, 2, 0, "mat-error", 9),
                    t.YNc(49, tn, 2, 2, "mat-error", 20),
                    t.qZA(),
                    t.TgZ(50, "mat-slide-toggle", 21, 22),
                    t._uU(52),
                    t.ALo(53, "translate"),
                    t.qZA(),
                    t._UZ(54, "mat-password-strength", 23, 24),
                    t.YNc(56, on, 6, 18, "mat-password-strength-info", 25),
                    t.qZA(),
                    t.TgZ(57, "button", 26),
                    t.NdJ("click", function() {
                        return n.resetPassword()
                    }),
                    t._UZ(58, "i", 27),
                    t._uU(59),
                    t.ALo(60, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(31)
                          , r = t.MAs(44)
                          , l = t.MAs(51)
                          , u = t.MAs(55);
                        t.xp6(4),
                        t.Q6J("hidden", !(n.confirmation && !n.emailControl.dirty && !n.securityQuestionControl.dirty && !n.passwordControl.dirty && !n.repeatPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", n.confirmation, " "),
                        t.xp6(1),
                        t.Q6J("hidden", !(n.error && !n.emailControl.dirty && !n.securityQuestionControl.dirty && !n.passwordControl.dirty && !n.repeatPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", n.error, " "),
                        t.xp6(5),
                        t.Q6J("formControl", n.emailControl),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(14, 27, "MANDATORY_EMAIL")),
                        t.xp6(3),
                        t.Q6J("ngIf", n.emailControl.invalid && n.emailControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.emailControl.invalid && n.emailControl.errors.email),
                        t.xp6(5),
                        t.s9C("placeholder", n.securityQuestion),
                        t.Q6J("formControl", n.securityQuestionControl),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(24, 29, "MANDATORY_SECURITY_ANSWER")),
                        t.xp6(3),
                        t.Q6J("ngIf", n.securityQuestionControl.invalid && n.securityQuestionControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.passwordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(36, 31, "INVALID_PASSWORD_LENGTH", t.DdM(38, ne))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.passwordControl.invalid && n.passwordControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.repeatPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatPasswordControl.invalid && n.repeatPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatPasswordControl.invalid && n.repeatPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatPasswordControl.invalid && ((null == n.repeatPasswordControl ? null : n.repeatPasswordControl.errors.minlength) || (null == n.repeatPasswordControl ? null : n.repeatPasswordControl.errors.maxlength))),
                        t.xp6(1),
                        t.Q6J("color", u.color),
                        t.xp6(2),
                        t.Oqu(t.lcZ(53, 34, "SHOW_PASSWORD_ADVICE")),
                        t.xp6(2),
                        t.Q6J("password", i.value),
                        t.xp6(2),
                        t.Q6J("ngIf", l.checked),
                        t.xp6(1),
                        t.Q6J("disabled", n.emailControl.invalid || n.securityQuestionControl.invalid || n.passwordControl.invalid || n.repeatPasswordControl.invalid || n.repeatPasswordControl.disabled),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(60, 36, "BTN_CHANGE"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, rt.ne, rt.Xy, C.Wh, s.Fj, s.JJ, s.oH, O.Hw, g.TO, g.KE, g.bx, g.hX, g.R9, A.lW, x.a8, P.Nt, F.gM, At.Rr, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:30px;width:60%}"]
            }),
            o
        }
        )();
        function an(o) {
            return function(e) {
                return o.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        var U = d(5412);
        let Zt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/products"
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}/reviews`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                create(e, n) {
                    return this.http.put(`${this.host}/${e}/reviews`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
                patch(e) {
                    return this.http.patch(this.host + "/reviews", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                like(e) {
                    return this.http.post(this.host + "/reviews", {
                        id: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function rn(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 1),
            t._uU(1, "MANDATORY_REVIEW"),
            t.qZA())
        }
        v.vI.add(m.XCy, m.OFe),
        v.vz.watch();
        let sn = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.data = e,
                    this.productReviewService = n,
                    this.dialogRef = i,
                    this.snackBar = r,
                    this.snackBarHelperService = l,
                    this.editReviewControl = new s.p4("",[s.kI.required, s.kI.minLength(1), s.kI.maxLength(160)]),
                    this.error = null
                }
                ngOnInit() {
                    this.editReviewControl.setValue(this.data.reviewData.message)
                }
                editReview() {
                    this.productReviewService.patch({
                        id: this.data.reviewData._id,
                        message: this.editReviewControl.value
                    }).subscribe(()=>{
                        this.dialogRef.close()
                    }
                    , e=>{
                        console.log(e),
                        this.error = e
                    }
                    ),
                    this.snackBarHelperService.open("CONFIRM_CHANGES_SAVED")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.WI),t.Y36(Zt),t.Y36(U.so),t.Y36(K.ux),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-product-review-edit"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["translate", ""], ["appearance", "outline", "color", "accent", "hintLabel", "Max 160 characters", "floatLabel", "always"], ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to edit a product review", 3, "formControl", "placeholder", "focus"], ["textPut", ""], ["align", "end"], ["translate", "", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog"], [1, "material-icons"], ["type", "submit", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 2, "margin-left", "5px", 3, "disabled", "click"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "mat-dialog-content")(1, "div", 0)(2, "h1", 1),
                    t._uU(3, "LABEL_EDIT_REVIEW"),
                    t.qZA(),
                    t.TgZ(4, "div")(5, "mat-form-field", 2)(6, "mat-label", 1),
                    t._uU(7, "LABEL_REVIEW"),
                    t.qZA(),
                    t.TgZ(8, "textarea", 3, 4),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "mat-hint", 5),
                    t._uU(12),
                    t.qZA(),
                    t.YNc(13, rn, 2, 0, "mat-error", 6),
                    t.qZA()()()(),
                    t.TgZ(14, "mat-dialog-actions", 5)(15, "button", 7)(16, "i", 8),
                    t._uU(17, " close "),
                    t.qZA(),
                    t.TgZ(18, "span"),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA()(),
                    t.TgZ(21, "button", 9),
                    t.NdJ("click", function() {
                        return n.editReview()
                    }),
                    t.TgZ(22, "i", 8),
                    t._uU(23, " send "),
                    t.qZA(),
                    t.TgZ(24, "span"),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(9);
                        t.xp6(8),
                        t.s9C("placeholder", t.lcZ(10, 7, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", n.editReviewControl),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.editReviewControl.invalid),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(20, 9, "BTN_CLOSE"), ""),
                        t.xp6(2),
                        t.Q6J("disabled", n.editReviewControl.invalid),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(26, 11, "BTN_SUBMIT"), "")
                    }
                },
                dependencies: [T.O5, p.Pi, C.xw, s.Fj, s.JJ, s.nD, s.oH, g.TO, g.KE, g.bx, g.hX, A.lW, P.Nt, U.ZT, U.xY, U.H8, p.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"]
            }),
            o
        }
        )();
        var Y = d(8729)
          , B = d(7084);
        function ln(o, a) {
            if (1 & o && (t.TgZ(0, "div", 24),
            t.ALo(1, "translate"),
            t.TgZ(2, "span", 25),
            t._UZ(3, "i", 26),
            t.TgZ(4, "span", 27),
            t._uU(5),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw();
                t.s9C("matTooltip", t.lcZ(1, 2, "LABEL_BONUS")),
                t.xp6(5),
                t.Oqu(e.data.productData.points)
            }
        }
        function cn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div", 29)(1, "div", 30)(2, "div", 31),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG("Anonymous" !== r.author && r.author === l.author && l.editReview(r))
                }),
                t.ALo(3, "translate"),
                t.TgZ(4, "cite"),
                t._uU(5),
                t.qZA(),
                t.TgZ(6, "p"),
                t._uU(7),
                t.qZA()(),
                t.TgZ(8, "div")(9, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.likeReview(r))
                }),
                t.TgZ(10, "span", 25)(11, "mat-icon"),
                t._uU(12, "thumb_up"),
                t.qZA(),
                t.TgZ(13, "span", 33),
                t._uU(14),
                t.qZA()()()()()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(2),
                t.s9C("matTooltipDisabled", e.author !== n.author),
                t.s9C("matTooltip", t.lcZ(3, 6, "LABEL_EDIT_REVIEW")),
                t.xp6(3),
                t.Oqu(e.author),
                t.xp6(2),
                t.Oqu(e.message),
                t.xp6(2),
                t.Q6J("disabled", e.liked || !n.isLoggedIn()),
                t.xp6(5),
                t.Oqu(e.likesCount)
            }
        }
        function un(o, a) {
            if (1 & o && (t.TgZ(0, "div"),
            t.YNc(1, cn, 15, 8, "div", 28),
            t.ALo(2, "async"),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", t.lcZ(2, 1, e.reviews$))
            }
        }
        function dn(o, a) {
            1 & o && (t.TgZ(0, "div")(1, "span", 34),
            t._uU(2, " EMPTY_REVIEW_LIST "),
            t.qZA()())
        }
        const pn = function() {
            return {
                length: "160"
            }
        };
        v.vI.add(m.XCy, m.OFe, m.yXf, m.u8Q, m.nmd),
        v.vz.watch();
        let ae = (()=>{
            class o {
                constructor(e, n, i, r, l, u) {
                    this.dialog = e,
                    this.data = n,
                    this.productReviewService = i,
                    this.userService = r,
                    this.snackBar = l,
                    this.snackBarHelperService = u,
                    this.author = "Anonymous",
                    this.reviewControl = new s.p4("",[s.kI.maxLength(160)])
                }
                ngOnInit() {
                    this.data.productData.points = Math.round(this.data.productData.price / 10),
                    this.reviews$ = this.productReviewService.get(this.data.productData.id),
                    this.userSubscription = this.userService.whoAmI().subscribe(e=>{
                        this.author = e?.email ? e.email : "Anonymous"
                    }
                    , e=>console.log(e))
                }
                ngOnDestroy() {
                    this.userSubscription && this.userSubscription.unsubscribe()
                }
                addReview(e) {
                    const n = {
                        message: e.value,
                        author: this.author
                    };
                    e.value = "",
                    this.productReviewService.create(this.data.productData.id, n).subscribe(()=>{
                        this.reviews$ = this.productReviewService.get(this.data.productData.id)
                    }
                    , i=>console.log(i)),
                    this.snackBarHelperService.open("CONFIRM_REVIEW_SAVED")
                }
                editReview(e) {
                    this.dialog.open(sn, {
                        width: "500px",
                        height: "max-content",
                        data: {
                            reviewData: e
                        }
                    }).afterClosed().subscribe(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id))
                }
                likeReview(e) {
                    this.productReviewService.like(e._id).subscribe(()=>{
                        console.log("Liked " + e._id)
                    }
                    ),
                    setTimeout(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id), 200)
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.uw),t.Y36(U.WI),t.Y36(Zt),t.Y36(N),t.Y36(K.ux),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-product-details"]],
                decls: 59,
                vars: 36,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px"], ["fxFlex", "noshrink"], [1, "img-thumbnail", 3, "src", "alt"], [3, "innerHTML"], [1, "item-price"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip", 4, "ngIf"], [1, "detail-divider"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["aria-label", "Expand for Reviews", 1, "mat-elevation-z0"], ["translate", "", 2, "margin-right", "5px"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["translate", ""], ["appearance", "outline", "color", "accent", "floatLabel", "always"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["cols", "50", "matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to review a product", 3, "formControl", "placeholder"], ["textPut", ""], ["align", "end"], ["align", "end", 1, "dialogAction"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 1, "buttons", 2, "margin-bottom", "5px", "margin-top", "5px", "margin-left", "5px", 3, "disabled", "click"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip"], [1, "fa-2x", "fa-layers", "fa-fw"], [1, "fas", "fa-crown"], [1, "fa-layers-counter", "fa-layers-bottom-left", "fa-2x", "warn-notification", 2, "font-size", "47px"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"], ["fxLayout", "row"], ["matTooltipPosition", "right", 1, "review-text", 3, "matTooltipDisabled", "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Rate a helpful review", 1, "rw-button", 3, "disabled", "click"], [1, "fa-layers-counter", "fa-layers-bottom-right", "accent-notification", 2, "font-size", "32px"], ["translate", "", 1, "noResultText"]],
                template: function(e, n) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "mat-dialog-content")(1, "div", 0)(2, "div", 1)(3, "div", 2),
                        t._UZ(4, "img", 3),
                        t.qZA(),
                        t.TgZ(5, "div")(6, "h1"),
                        t._uU(7),
                        t.qZA(),
                        t._UZ(8, "div", 4)(9, "br"),
                        t.TgZ(10, "div")(11, "p", 5),
                        t._uU(12),
                        t.qZA(),
                        t.YNc(13, ln, 6, 4, "div", 6),
                        t.qZA()()(),
                        t._UZ(14, "mat-divider", 7)(15, "button", 8),
                        t.TgZ(16, "mat-expansion-panel", 9)(17, "mat-expansion-panel-header")(18, "mat-panel-title")(19, "span", 10),
                        t._uU(20, "LABEL_REVIEWS"),
                        t.qZA(),
                        t.TgZ(21, "span"),
                        t._uU(22),
                        t.ALo(23, "async"),
                        t.qZA()()(),
                        t._UZ(24, "button", 8),
                        t.YNc(25, un, 3, 3, "div", 11),
                        t.ALo(26, "async"),
                        t.YNc(27, dn, 3, 0, "ng-template", null, 12, t.W1O),
                        t.qZA(),
                        t.TgZ(29, "div"),
                        t._UZ(30, "mat-divider", 7),
                        t.TgZ(31, "h4", 13),
                        t._uU(32, "WRITE_REVIEW"),
                        t.qZA(),
                        t.TgZ(33, "mat-form-field", 14)(34, "mat-label", 13),
                        t._uU(35, "LABEL_REVIEW"),
                        t.qZA(),
                        t.TgZ(36, "mat-hint", 13),
                        t._UZ(37, "i", 15),
                        t.TgZ(38, "em", 16),
                        t._uU(39),
                        t.ALo(40, "translate"),
                        t.qZA()(),
                        t._UZ(41, "textarea", 17, 18),
                        t.ALo(43, "translate"),
                        t.TgZ(44, "mat-hint", 19),
                        t._uU(45),
                        t.qZA()(),
                        t.TgZ(46, "mat-dialog-actions", 20)(47, "button", 21)(48, "i", 22),
                        t._uU(49, " close "),
                        t.qZA(),
                        t.TgZ(50, "span"),
                        t._uU(51),
                        t.ALo(52, "translate"),
                        t.qZA()(),
                        t.TgZ(53, "button", 23),
                        t.NdJ("click", function() {
                            t.CHM(i);
                            const l = t.MAs(42);
                            return t.KtG(n.addReview(l))
                        }),
                        t.TgZ(54, "i", 22),
                        t._uU(55, " send "),
                        t.qZA(),
                        t.TgZ(56, "span"),
                        t._uU(57),
                        t.ALo(58, "translate"),
                        t.qZA()()()()()()
                    }
                    if (2 & e) {
                        const i = t.MAs(28)
                          , r = t.MAs(42);
                        let l, u;
                        t.xp6(4),
                        t.s9C("alt", n.data.productData.name),
                        t.Q6J("src", "assets/public/images/products/" + n.data.productData.image, t.LSH),
                        t.xp6(3),
                        t.Oqu(n.data.productData.name),
                        t.xp6(1),
                        t.Q6J("innerHTML", n.data.productData.description, t.oJD),
                        t.xp6(4),
                        t.hij("", n.data.productData.price, "\xa4"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.data.productData.points > 0),
                        t.xp6(9),
                        t.hij("(", null == (l = t.lcZ(23, 22, n.reviews$)) ? null : l.length, ")"),
                        t.xp6(3),
                        t.Q6J("ngIf", (null == (u = t.lcZ(26, 24, n.reviews$)) ? null : u.length) >= 1)("ngIfElse", i),
                        t.xp6(6),
                        t.Udp("display", n.isLoggedIn() ? "block" : "none"),
                        t.xp6(2),
                        t.Udp("display", n.isLoggedIn() ? "block" : "none"),
                        t.xp6(6),
                        t.Oqu(t.xi3(40, 26, "MAX_TEXTAREA_LENGTH", t.DdM(35, pn))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(43, 29, "WRITE_REVIEW_PLACEHOLDER")),
                        t.Q6J("formControl", n.reviewControl),
                        t.xp6(4),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/160"),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(52, 31, "BTN_CLOSE"), ""),
                        t.xp6(2),
                        t.Udp("display", n.isLoggedIn() ? "block" : "none"),
                        t.Q6J("disabled", !r.value.trim()),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(58, 33, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [T.sg, T.O5, p.Pi, C.xw, C.SQ, C.yH, s.Fj, s.JJ, s.nD, s.oH, O.Hw, g.KE, g.bx, g.hX, A.lW, P.Nt, U.ZT, U.xY, U.H8, Y.d, B.ib, B.yz, B.yK, F.gM, T.Ov, p.X$],
                styles: [".img-thumbnail[_ngcontent-%COMP%]{height:auto;max-width:100%;padding:0;width:200px}mat-form-field[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{word-break:break-all}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){left:530px;width:50px}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.rw-button[_ngcontent-%COMP%]{margin-left:8px}.comment[_ngcontent-%COMP%]{margin-bottom:8px}.review-link[_ngcontent-%COMP%]{font-size:11px;margin-top:-10px;text-decoration:none}#submitButton[_ngcontent-%COMP%]{float:right}.item-price[_ngcontent-%COMP%]{float:left;margin-right:40px;margin-top:8px}.noResultText[_ngcontent-%COMP%]{display:block;font-size:small;margin-left:auto;margin-right:auto;text-align:center}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}.buttons[_ngcontent-%COMP%]{padding-left:13px;padding-right:13px}"]
            }),
            o
        }
        )()
          , mt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Products"
                }
                search(e) {
                    return this.http.get(`${this.hostServer}/rest/products/search?q=${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}?d=${encodeURIComponent((new Date).toDateString())}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                put(e, n) {
                    return this.http.put(`${this.host}/${e}`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var st = d(8739)
          , ht = d(567)
          , ie = d(42);
        let V = (()=>{
            class o {
                constructor(e) {
                    this.ngZone = e,
                    this.ngZone.runOutsideAngular(()=>{
                        this._socket = (0,
                        ie.io)(window.location.origin, {
                            path: (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname + "/") + "socket.io"
                        })
                    }
                    )
                }
                socket() {
                    return this._socket
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(t.R0b))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , wt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Quantitys"
                }
                getAll() {
                    return this.http.get(this.host + "/").pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                put(e, n) {
                    return this.http.put(`${this.host}/${e}`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var St = d(782);
        function mn(o, a) {
            if (1 & o && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t._UZ(4, "span", 9),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "TITLE_SEARCH_RESULTS"), " - "),
                t.xp6(2),
                t.Q6J("innerHTML", e.searchValue, t.oJD)
            }
        }
        function hn(o, a) {
            1 & o && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "TITLE_ALL_PRODUCTS")))
        }
        const _n = function(o) {
            return {
                quantity: o
            }
        };
        function gn(o, a) {
            if (1 & o && (t.TgZ(0, "div", 24)(1, "span", 25),
            t._uU(2, "LABEL_ONLY_QUANTITY_LEFT"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("translateParams", t.VKq(1, _n, e.quantity))
            }
        }
        function fn(o, a) {
            1 & o && (t.TgZ(0, "div", 26)(1, "span", 27),
            t._uU(2, "LABEL_SOLD_OUT"),
            t.qZA()())
        }
        function Cn(o, a) {
            if (1 & o && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function vn(o, a) {
            if (1 & o && (t.TgZ(0, "span")(1, "s"),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.xp6(2),
                t.Oqu(e.price),
                t.xp6(1),
                t.hij(" ", e.deluxePrice, "\xa4")
            }
        }
        function Tn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 28),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.addToBasket(i.id))
                }),
                t.TgZ(1, "span", 27),
                t._uU(2, "ADD_BASKET"),
                t.qZA()()
            }
        }
        function bn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-grid-tile")(1, "mat-card", 13),
                t.YNc(2, gn, 3, 3, "div", 14),
                t.YNc(3, fn, 3, 0, "div", 15),
                t.TgZ(4, "div", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.showDetail(r))
                }),
                t.TgZ(5, "div", 17),
                t._UZ(6, "img", 18),
                t.qZA(),
                t.TgZ(7, "div", 19)(8, "div", 20),
                t._uU(9),
                t.qZA(),
                t.TgZ(10, "div", 21),
                t.YNc(11, Cn, 2, 1, "span", 3),
                t.YNc(12, vn, 4, 2, "span", 3),
                t.qZA()()(),
                t.TgZ(13, "div", 22),
                t.YNc(14, Tn, 3, 0, "button", 23),
                t.qZA()()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(1),
                t.Udp("width", "100%"),
                t.xp6(1),
                t.Q6J("ngIf", e.quantity <= 5 && e.quantity > 0),
                t.xp6(1),
                t.Q6J("ngIf", e.quantity <= 0),
                t.xp6(3),
                t.s9C("alt", e.name),
                t.Q6J("src", "assets/public/images/products/" + e.image, t.LSH),
                t.xp6(3),
                t.hij(" ", e.name, " "),
                t.xp6(2),
                t.Q6J("ngIf", !n.isDeluxe() || e.price === e.deluxePrice),
                t.xp6(1),
                t.Q6J("ngIf", n.isDeluxe() && e.price !== e.deluxePrice),
                t.xp6(2),
                t.Q6J("ngIf", n.isLoggedIn())
            }
        }
        function xn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "mat-grid-list", 10, 11),
                t.NdJ("resize", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onResize(i))
                }, !1, t.Jf7),
                t.YNc(3, bn, 15, 10, "mat-grid-tile", 12),
                t.ALo(4, "async"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("cols", e.breakpoint),
                t.xp6(2),
                t.Q6J("ngForOf", t.lcZ(4, 2, e.gridDataSource))
            }
        }
        function An(o, a) {
            1 & o && (t.TgZ(0, "mat-card", 29),
            t._UZ(1, "img", 30),
            t.TgZ(2, "mat-card-title")(3, "span", 31),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 31),
            t._uU(7, " EMPTY_SEARCH_RESULT "),
            t.qZA()()())
        }
        v.vI.add(m.Mdf, m.qD8),
        v.vz.watch();
        let yt = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w, S, $, et, ot) {
                    this.deluxeGuard = e,
                    this.dialog = n,
                    this.productService = i,
                    this.quantityService = r,
                    this.basketService = l,
                    this.translateService = u,
                    this.router = f,
                    this.route = b,
                    this.sanitizer = w,
                    this.ngZone = S,
                    this.io = $,
                    this.snackBarHelperService = et,
                    this.cdRef = ot,
                    this.displayedColumns = ["Image", "Product", "Description", "Price", "Select"],
                    this.pageSizeOptions = [],
                    this.resultsLength = 0,
                    this.paginator = null,
                    this.breakpoint = 6,
                    this.emptyState = !1
                }
                ngAfterViewInit() {
                    const e = this.productService.search("")
                      , n = this.quantityService.getAll();
                    (0,
                    ht.D)([n, e]).subscribe(([i,r])=>{
                        const l = [];
                        this.tableData = r,
                        this.trustProductDescription(r);
                        for (const f of r)
                            l.push({
                                name: f.name,
                                price: f.price,
                                deluxePrice: f.deluxePrice,
                                id: f.id,
                                image: f.image,
                                description: f.description
                            });
                        for (const f of i) {
                            const b = l.find(w=>w.id === f.ProductId);
                            void 0 !== b && (b.quantity = f.quantity)
                        }
                        this.dataSource = new c.by(l);
                        for (let f = 1; f <= Math.ceil(this.dataSource.data.length / 12); f++)
                            this.pageSizeOptions.push(12 * f);
                        this.paginator.pageSizeOptions = this.pageSizeOptions,
                        this.dataSource.paginator = this.paginator,
                        this.gridDataSource = this.dataSource.connect(),
                        this.resultsLength = this.dataSource.data.length,
                        this.filterTable(),
                        this.routerSubscription = this.router.events.subscribe(()=>{
                            this.filterTable()
                        }
                        );
                        const u = this.route.snapshot.queryParams.challenge;
                        u && this.route.snapshot.url.join("").match(/hacking-instructor/) && this.startHackingInstructor(decodeURIComponent(u)),
                        window.innerWidth < 2600 ? (this.breakpoint = 4,
                        window.innerWidth < 1740 && (this.breakpoint = 3,
                        window.innerWidth < 1280 && (this.breakpoint = 2,
                        window.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6,
                        this.cdRef.detectChanges()
                    }
                    , i=>console.log(i))
                }
                trustProductDescription(e) {
                    for (let n = 0; n < e.length; n++)
                        e[n].description = this.sanitizer.bypassSecurityTrustHtml(e[n].description)
                }
                ngOnDestroy() {
                    this.routerSubscription && this.routerSubscription.unsubscribe(),
                    this.productSubscription && this.productSubscription.unsubscribe(),
                    this.dataSource && this.dataSource.disconnect()
                }
                filterTable() {
                    let e = this.route.snapshot.queryParams.q;
                    e ? (e = e.trim(),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().emit("verifyLocalXssChallenge", e)
                    }
                    ),
                    this.dataSource.filter = e.toLowerCase(),
                    this.searchValue = this.sanitizer.bypassSecurityTrustHtml(e),
                    this.gridDataSource.subscribe(n=>{
                        this.emptyState = 0 === n.length
                    }
                    )) : (this.dataSource.filter = "",
                    this.searchValue = void 0,
                    this.emptyState = !1)
                }
                startHackingInstructor(e) {
                    console.log(`Starting instructions for challenge "${e}"`),
                    d.e(648).then(d.bind(d, 3907)).then(n=>{
                        n.startHackingInstructorFor(e)
                    }
                    )
                }
                showDetail(e) {
                    this.dialog.open(ae, {
                        width: "500px",
                        height: "max-content",
                        data: {
                            productData: e
                        }
                    })
                }
                addToBasket(e) {
                    this.basketService.find(Number(sessionStorage.getItem("bid"))).subscribe(n=>{
                        const i = n.Products;
                        let r = !1;
                        for (let l = 0; l < i.length; l++)
                            if (i[l].id === e) {
                                r = !0,
                                this.basketService.get(i[l].BasketItem.id).subscribe(u=>{
                                    this.basketService.put(u.id, {
                                        quantity: u.quantity + 1
                                    }).subscribe(b=>{
                                        this.productService.get(b.ProductId).subscribe(w=>{
                                            this.translateService.get("BASKET_ADD_SAME_PRODUCT", {
                                                product: w.name
                                            }).subscribe(S=>{
                                                this.snackBarHelperService.open(S, "confirmBar"),
                                                this.basketService.updateNumberOfCartItems()
                                            }
                                            , S=>{
                                                this.snackBarHelperService.open(S, "confirmBar"),
                                                this.basketService.updateNumberOfCartItems()
                                            }
                                            )
                                        }
                                        , w=>console.log(w))
                                    }
                                    , b=>{
                                        var w;
                                        this.snackBarHelperService.open(null === (w = b.error) || void 0 === w ? void 0 : w.error, "errorBar"),
                                        console.log(b)
                                    }
                                    )
                                }
                                , u=>console.log(u));
                                break
                            }
                        r || this.basketService.save({
                            ProductId: e,
                            BasketId: sessionStorage.getItem("bid"),
                            quantity: 1
                        }).subscribe(l=>{
                            this.productService.get(l.ProductId).subscribe(u=>{
                                this.translateService.get("BASKET_ADD_PRODUCT", {
                                    product: u.name
                                }).subscribe(f=>{
                                    this.snackBarHelperService.open(f, "confirmBar"),
                                    this.basketService.updateNumberOfCartItems()
                                }
                                , f=>{
                                    this.snackBarHelperService.open(f, "confirmBar"),
                                    this.basketService.updateNumberOfCartItems()
                                }
                                )
                            }
                            , u=>console.log(u))
                        }
                        , l=>{
                            var u;
                            this.snackBarHelperService.open(null === (u = l.error) || void 0 === u ? void 0 : u.error, "errorBar"),
                            console.log(l)
                        }
                        )
                    }
                    , n=>console.log(n))
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                onResize(e) {
                    e.target.innerWidth < 2600 ? (this.breakpoint = 4,
                    e.target.innerWidth < 1740 && (this.breakpoint = 3,
                    e.target.innerWidth < 1280 && (this.breakpoint = 2,
                    e.target.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6
                }
                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Tt),t.Y36(U.uw),t.Y36(mt),t.Y36(wt),t.Y36(H),t.Y36(p.sK),t.Y36(y.F0),t.Y36(y.gz),t.Y36(J.H7),t.Y36(t.R0b),t.Y36(V),t.Y36(M),t.Y36(t.sBO))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-search-result"]],
                viewQuery: function(e, n) {
                    if (1 & e && t.Gf(st.NW, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.paginator = i.first)
                    }
                },
                decls: 12,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "table-container", "custom-slate"], [1, "heading", "mat-elevation-z6"], [4, "ngIf"], ["id", "search-result-heading"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["color", "accent", 1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions", "length"], ["paginator", ""], ["id", "searchValue", 3, "innerHTML"], ["gutterSize", "30px", 3, "cols", "resize"], ["table", ""], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "ribbon-card"], ["class", "ribbon ribbon-top-left", 4, "ngIf"], ["class", "ribbon ribbon-top-left ribbon-sold", 4, "ngIf"], ["aria-label", "Click for more information about the product", "matTooltip", "Click for more information", "matTooltipPosition", "above", 1, "product", 3, "click"], ["fxFlexAlign", "center", "fxFlex", "60%", 1, "img-container"], ["mat-card-image", "", "role", "button", 1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlexAlign", "center", "fxFlex", "40%"], [1, "item-name"], [1, "item-price"], [2, "display", "flex", "justify-content", "center"], ["aria-label", "Add to Basket", "class", "btn-basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "ribbon", "ribbon-top-left"], ["translate", "", 3, "translateParams"], [1, "ribbon", "ribbon-top-left", "ribbon-sold"], ["translate", ""], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-basket", 3, "click"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    t.YNc(3, mn, 5, 4, "div", 3),
                    t.YNc(4, hn, 3, 3, "div", 3),
                    t._UZ(5, "div", 4),
                    t.qZA(),
                    t.YNc(6, xn, 5, 4, "div", 5),
                    t.YNc(7, An, 8, 0, "ng-template", null, 6, t.W1O),
                    t._UZ(9, "mat-divider")(10, "mat-paginator", 7, 8),
                    t.qZA()()),
                    2 & e) {
                        const i = t.MAs(8);
                        t.xp6(3),
                        t.Q6J("ngIf", n.searchValue),
                        t.xp6(1),
                        t.Q6J("ngIf", !n.searchValue),
                        t.xp6(2),
                        t.Q6J("ngIf", !n.emptyState)("ngIfElse", i),
                        t.xp6(4),
                        t.Q6J("pageSize", 12)("pageSizeOptions", n.pageSizeOptions)("length", n.resultsLength)
                    }
                },
                dependencies: [T.sg, T.O5, p.Pi, C.Wh, C.XD, C.yH, A.lW, st.NW, x.a8, x.dn, x.n5, x.G2, Y.d, F.gM, St.Il, St.DX, T.Ov, p.X$],
                styles: ['.table-container[_ngcontent-%COMP%]{min-width:350px;width:80%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{cursor:pointer}.btn-basket[_ngcontent-%COMP%]{bottom:10%}mat-card[_ngcontent-%COMP%]{height:calc(100% - 70px)}.item-price[_ngcontent-%COMP%]{font-size:initial;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.ribbon-card[_ngcontent-%COMP%]{position:relative}.ribbon[_ngcontent-%COMP%]{height:150px;overflow:hidden;pointer-events:none;position:absolute;width:150px}.ribbon[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;z-index:-1}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-shadow:0 5px 10px #0000001a;color:#fff;display:block;font:700 18px/1 Lato,sans-serif;padding:15px 0;position:absolute;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.2);width:225px}.ribbon-top-left[_ngcontent-%COMP%]{left:-10px;top:-10px}.ribbon-top-left[_ngcontent-%COMP%]:before{border-left-color:transparent;border-top-color:transparent;right:0;top:0}.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{right:-25px;top:30px;transform:rotate(-45deg)}']
            }),
            o
        }
        )()
          , It = (()=>{
            class o {
                get nativeWindow() {
                    return function Zn() {
                        return window
                    }()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var Ut = d(6709);
        function wn(o, a) {
            if (1 & o && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Oqu(e.error)
            }
        }
        function Sn(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, "MANDATORY_EMAIL"),
            t.qZA())
        }
        function yn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 21),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.hide = !i.hide)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 22),
                t.qZA()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "SHOW_PWD_TOOLTIP"))
        }
        function In(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 23),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.hide = !i.hide)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 24),
                t.qZA()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "HIDE_PWD_TOOLTIP"))
        }
        function Un(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, "MANDATORY_PASSWORD"),
            t.qZA())
        }
        function kn(o, a) {
            1 & o && (t.TgZ(0, "div", 25)(1, "div", 26),
            t._UZ(2, "div"),
            t.qZA(),
            t.TgZ(3, "div", 27),
            t._uU(4, "LABEL_OR"),
            t.qZA(),
            t.TgZ(5, "div", 26),
            t._UZ(6, "div"),
            t.qZA()())
        }
        function On(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 28),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.googleLogin())
                }),
                t._UZ(1, "i", 29),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            2 & o && (t.xp6(2),
            t.hij(" ", t.lcZ(3, 1, "BTN_GOOGLE_LOGIN"), " "))
        }
        v.vI.add(m.DD4, m.Mdf, m.Aq, D.xYR),
        v.vz.watch();
        let Ln = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b) {
                    this.configurationService = e,
                    this.userService = n,
                    this.windowRefService = i,
                    this.cookieService = r,
                    this.router = l,
                    this.formSubmitService = u,
                    this.basketService = f,
                    this.ngZone = b,
                    this.emailControl = new s.p4("",[s.kI.required]),
                    this.passwordControl = new s.p4("",[s.kI.required, s.kI.minLength(1)]),
                    this.hide = !0,
                    this.rememberMe = new s.p4(!1),
                    this.clientId = "1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com",
                    this.oauthUnavailable = !0,
                    this.redirectUri = ""
                }
                ngOnInit() {
                    const e = localStorage.getItem("email");
                    e ? (this.user = {},
                    this.user.email = e,
                    this.rememberMe.setValue(!0)) : this.rememberMe.setValue(!1),
                    this.redirectUri = `${this.windowRefService.nativeWindow.location.protocol}//${this.windowRefService.nativeWindow.location.host}`,
                    this.configurationService.getApplicationConfiguration().subscribe(n=>{
                        var i;
                        if (null !== (i = n?.application) && void 0 !== i && i.googleOauth) {
                            this.clientId = n.application.googleOauth.clientId;
                            const r = n.application.googleOauth.authorizedRedirects.find(l=>l.uri === this.redirectUri);
                            r ? (this.oauthUnavailable = !1,
                            this.redirectUri = r.proxy ? r.proxy : r.uri) : (this.oauthUnavailable = !0,
                            console.log(this.redirectUri + " is not an authorized redirect URI for this application."))
                        }
                    }
                    , n=>console.log(n)),
                    this.formSubmitService.attachEnterKeyHandler("login-form", "loginButton", ()=>this.login())
                }
                login() {
                    var e = this;
                    this.user = {},
                    this.user.email = this.emailControl.value,
                    this.user.password = this.passwordControl.value,
                    this.userService.login(this.user).subscribe(n=>{
                        localStorage.setItem("token", n.token);
                        const i = new Date;
                        i.setHours(i.getHours() + 8),
                        this.cookieService.put("token", n.token, {
                            expires: i
                        }),
                        sessionStorage.setItem("bid", n.bid),
                        this.basketService.updateNumberOfCartItems(),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/search"])
                        }))
                    }
                    , ({error: n})=>{
                        if (n.status && n.data && "totp_token_required" === n.status)
                            return localStorage.setItem("totp_tmp_token", n.data.tmpToken),
                            void this.ngZone.run((0,
                            k.Z)(function*() {
                                return yield e.router.navigate(["/2fa/enter"])
                            }));
                        localStorage.removeItem("token"),
                        this.cookieService.remove("token"),
                        sessionStorage.removeItem("bid"),
                        this.error = n,
                        this.userService.isLoggedIn.next(!1),
                        this.emailControl.markAsPristine(),
                        this.passwordControl.markAsPristine()
                    }
                    ),
                    this.rememberMe.value ? localStorage.setItem("email", this.user.email) : localStorage.removeItem("email")
                }
                googleLogin() {
                    this.windowRefService.nativeWindow.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(L),t.Y36(N),t.Y36(It),t.Y36(q.N_),t.Y36(y.F0),t.Y36(W),t.Y36(H),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-login"]],
                decls: 35,
                vars: 18,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["class", "error", 4, "ngIf"], ["id", "login-form", 1, "form-container"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "email", "name", "email", "matInput", "", "placeholder", "", "aria-label", "Text field for the login email", 3, "formControl", "focus"], ["email", ""], ["translate", "", 4, "ngIf"], ["id", "password", "name", "password", "matInput", "", "placeholder", "", "aria-label", "Text field for the login password", 3, "formControl", "type", "focus"], ["password", ""], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["routerLink", "/forgot-password", "translate", "", 1, "primary-link", "forgot-pw"], ["type", "submit", "id", "loginButton", "mat-raised-button", "", "color", "primary", "aria-label", "Login", 3, "disabled", "click"], ["id", "rememberMe", "aria-label", "Checkbox to stay logged in or not logged in", 3, "formControl"], ["class", "breakLine", 4, "ngIf"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", "class", "google-button", 3, "click", 4, "ngIf"], ["id", "newCustomerLink"], ["routerLink", "/register", "translate", "", 1, "primary-link"], [1, "error"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye", 1, "fas", "fa-eye"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye Slash", 1, "fas", "fa-eye-slash"], [1, "breakLine"], [1, "line"], ["translate", "", 1, "textOnLine"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", 1, "google-button", 3, "click"], [1, "fab", "fa-google", "fa-lg"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1"),
                    t._uU(3, "Login"),
                    t.qZA(),
                    t.YNc(4, wn, 2, 1, "div", 2),
                    t.TgZ(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-label", 5),
                    t._uU(8, "LABEL_EMAIL"),
                    t.qZA(),
                    t.TgZ(9, "input", 6, 7),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.qZA(),
                    t.YNc(11, Sn, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(12, "mat-form-field", 4)(13, "mat-label", 5),
                    t._uU(14, "LABEL_PASSWORD"),
                    t.qZA(),
                    t.TgZ(15, "input", 9, 10),
                    t.NdJ("focus", function() {
                        return n.error = null
                    }),
                    t.qZA(),
                    t.YNc(17, yn, 3, 3, "button", 11),
                    t.YNc(18, In, 3, 3, "button", 12),
                    t.YNc(19, Un, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(20, "a", 13),
                    t._uU(21, "FORGOT_PASSWORD"),
                    t.qZA(),
                    t.TgZ(22, "button", 14),
                    t.NdJ("click", function() {
                        return n.login()
                    }),
                    t.TgZ(23, "mat-icon"),
                    t._uU(24, " exit_to_app "),
                    t.qZA(),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA(),
                    t.TgZ(27, "mat-checkbox", 15),
                    t._uU(28),
                    t.ALo(29, "translate"),
                    t.qZA(),
                    t.YNc(30, kn, 7, 0, "div", 16),
                    t.YNc(31, On, 4, 3, "button", 17),
                    t.TgZ(32, "div", 18)(33, "a", 19),
                    t._uU(34, "NO_CUSTOMER"),
                    t.qZA()()()()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", n.error),
                    t.xp6(5),
                    t.Q6J("formControl", n.emailControl),
                    t.xp6(2),
                    t.Q6J("ngIf", n.emailControl.invalid),
                    t.xp6(4),
                    t.Q6J("formControl", n.passwordControl)("type", n.hide ? "password" : "text"),
                    t.xp6(2),
                    t.Q6J("ngIf", n.hide),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.hide),
                    t.xp6(1),
                    t.Q6J("ngIf", n.passwordControl.invalid),
                    t.xp6(3),
                    t.Q6J("disabled", !n.emailControl.value || !n.passwordControl.value),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(26, 14, "BTN_LOGIN"), " "),
                    t.xp6(2),
                    t.Q6J("formControl", n.rememberMe),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(29, 16, "REMEMBER_ME"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", !n.oauthUnavailable),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.oauthUnavailable))
                },
                dependencies: [T.O5, y.rH, p.Pi, C.Wh, s.Fj, s.JJ, s.oH, O.Hw, g.TO, g.KE, g.hX, g.R9, A.lW, x.a8, P.Nt, Ut.oG, F.gM, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.forgot-pw[_ngcontent-%COMP%]{font-size:11px;margin-top:-15px}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:20%;margin-top:5px}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}mat-form-field[_ngcontent-%COMP%]:nth-child(2){padding-bottom:20px}#loginButton[_ngcontent-%COMP%], #loginButtonGoogle[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.breakLine[_ngcontent-%COMP%]{display:table}.breakLine[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:table-cell;white-space:nowrap}.line[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-bottom:1px solid #c0c0c0;height:1px}.textOnLine[_ngcontent-%COMP%]{padding:0 5px}.line[_ngcontent-%COMP%]{vertical-align:middle;width:50%}#newCustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}[_nghost-%COMP%]     .mat-form-field-suffix{margin-bottom:auto!important;margin-top:auto!important}[_nghost-%COMP%]     .mat-icon-button{height:40px!important;width:24px!important}"]
            }),
            o
        }
        )();
        v.vI.add(m.OFe),
        v.vz.watch();
        let Nn = (()=>{
            class o {
                constructor(e, n) {
                    this.dialogData = e,
                    this.userService = n
                }
                ngOnInit() {
                    this.userService.get(this.dialogData.id).subscribe(e=>{
                        this.user = e
                    }
                    , e=>console.log(e))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.WI),t.Y36(N))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-user-details"]],
                decls: 29,
                vars: 10,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["translate", "LABEL_EMAIL"], ["translate", "LABEL_CREATED_AT"], ["translate", "LABEL_UPDATED_AT"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-dialog-content", 0)(1, "header")(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t._UZ(5, "mat-divider"),
                    t.TgZ(6, "div", 1)(7, "div", 2)(8, "div"),
                    t._UZ(9, "strong", 3),
                    t.TgZ(10, "p"),
                    t._uU(11),
                    t.qZA()()(),
                    t.TgZ(12, "div", 2)(13, "div"),
                    t._UZ(14, "strong", 4),
                    t.TgZ(15, "p"),
                    t._uU(16),
                    t.qZA()(),
                    t.TgZ(17, "div"),
                    t._UZ(18, "strong", 5),
                    t.TgZ(19, "p"),
                    t._uU(20),
                    t.qZA()()()(),
                    t.TgZ(21, "mat-dialog-actions", 6),
                    t._UZ(22, "button", 7),
                    t.TgZ(23, "button", 8)(24, "i", 9),
                    t._uU(25, " close "),
                    t.qZA(),
                    t.TgZ(26, "span"),
                    t._uU(27),
                    t.ALo(28, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(3),
                    t.AsE("", t.lcZ(4, 6, "LABEL_USER"), " #", null == n.user ? null : n.user.id, ""),
                    t.xp6(8),
                    t.Oqu(null == n.user ? null : n.user.email),
                    t.xp6(5),
                    t.Oqu(null == n.user ? null : n.user.createdAt),
                    t.xp6(4),
                    t.Oqu(null == n.user ? null : n.user.updatedAt),
                    t.xp6(7),
                    t.hij(" ", t.lcZ(28, 8, "BTN_CLOSE"), ""))
                },
                dependencies: [p.Pi, C.xw, C.SQ, A.lW, U.ZT, U.xY, U.H8, Y.d, p.X$],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
            }),
            o
        }
        )()
          , En = (()=>{
            class o {
                constructor(e) {
                    this.dialogData = e
                }
                ngOnInit() {
                    this.feedback = this.dialogData.feedback,
                    this.id = this.dialogData.id
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.WI))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-feedback-details"]],
                decls: 23,
                vars: 11,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [2, "margin-top", "10px !important"], [3, "innerHTML"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-dialog-content", 0)(1, "header")(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t._UZ(5, "mat-divider"),
                    t.TgZ(6, "div", 1)(7, "div", 2)(8, "span"),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "p"),
                    t._uU(12),
                    t.qZA()(),
                    t.TgZ(13, "div", 3),
                    t._UZ(14, "cite", 4),
                    t.qZA()(),
                    t.TgZ(15, "mat-dialog-actions", 5),
                    t._UZ(16, "button", 6),
                    t.TgZ(17, "button", 7)(18, "i", 8),
                    t._uU(19, " close "),
                    t.qZA(),
                    t.TgZ(20, "span"),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 5, "LABEL_COMMENT")),
                    t.xp6(6),
                    t.hij("", t.lcZ(10, 7, "LABEL_USER"), ":"),
                    t.xp6(3),
                    t.hij("#", n.id, ""),
                    t.xp6(2),
                    t.Q6J("innerHTML", n.feedback, t.oJD),
                    t.xp6(7),
                    t.hij(" ", t.lcZ(22, 9, "BTN_CLOSE"), ""))
                },
                dependencies: [C.xw, C.SQ, A.lW, U.ZT, U.xY, U.H8, Y.d, p.X$],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}mat-dialog-content[_ngcontent-%COMP%]{max-width:320px;min-width:280px}"]
            }),
            o
        }
        )();
        const qn = ["paginatorUsers"]
          , Mn = ["paginatorFeedb"];
        function Dn(o, a) {
            1 & o && t._UZ(0, "mat-header-cell")
        }
        function Fn(o, a) {
            1 & o && t._UZ(0, "i", 30)
        }
        function Rn(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 28),
            t.YNc(1, Fn, 1, 0, "i", 29),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.token)
            }
        }
        function Yn(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 1)
        }
        function Bn(o, a) {
            1 & o && t._UZ(0, "mat-cell", 31),
            2 & o && t.Q6J("innerHTML", a.$implicit.email, t.oJD)
        }
        function Jn(o, a) {
            1 & o && t._UZ(0, "mat-header-cell")
        }
        function Qn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showUserDetail(r.id))
                }),
                t._UZ(2, "i", 33),
                t.qZA()()
            }
        }
        function Hn(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function Gn(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function jn(o, a) {
            1 & o && t._UZ(0, "mat-header-cell")
        }
        function zn(o, a) {
            1 & o && t._UZ(0, "mat-cell", 28)
        }
        function Kn(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 1)
        }
        function Wn(o, a) {
            1 & o && t._UZ(0, "mat-cell", 31),
            2 & o && t.Q6J("innerHTML", a.$implicit.email, t.oJD)
        }
        function $n(o, a) {
            1 & o && t._UZ(0, "mat-header-cell")
        }
        function Vn(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showUserDetail(r.id))
                }),
                t._UZ(2, "i", 33),
                t.qZA()()
            }
        }
        function Xn(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function ta(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function ea(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 1)
        }
        function oa(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.UserId, "")
            }
        }
        function na(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 1)
        }
        function aa(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 34),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.showFeedbackDetails(r.comment, r.UserId))
                }),
                t._UZ(1, "p", 35),
                t.qZA()
            }
            if (2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("innerHTML", e.comment, t.oJD)
            }
        }
        function ia(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 1)
        }
        function ra(o, a) {
            1 & o && (t.TgZ(0, "mat-icon"),
            t._uU(1, " star_rate "),
            t.qZA())
        }
        function sa(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell"),
            t.YNc(1, ra, 2, 0, "mat-icon", 36),
            t.qZA()),
            2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", n.times(e.rating))
            }
        }
        function la(o, a) {
            1 & o && t._UZ(0, "mat-header-cell")
        }
        function ca(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell")(1, "button", 32),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.deleteFeedback(r.id))
                }),
                t._UZ(2, "i", 37),
                t.qZA()()
            }
        }
        function ua(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function da(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        v.vI.add(m.ILF, m.Mdf, m.J9Y, m.N2j, m.I7k),
        v.vz.watch();
        let pa = (()=>{
            class o {
                constructor(e, n, i, r) {
                    this.dialog = e,
                    this.userService = n,
                    this.feedbackService = i,
                    this.sanitizer = r,
                    this.userColumns = ["user", "email", "user_detail"],
                    this.feedbackColumns = ["user", "comment", "rating", "remove"],
                    this.resultsLengthUser = 0,
                    this.resultsLengthFeedback = 0
                }
                ngOnInit() {
                    this.findAllUsers(),
                    this.findAllFeedbacks()
                }
                findAllUsers() {
                    this.userService.find().subscribe(e=>{
                        this.userDataSource = e,
                        this.userDataSourceHidden = e;
                        for (const n of this.userDataSource)
                            n.email = this.sanitizer.bypassSecurityTrustHtml(`<span class="${n.token ? "confirmation" : "error"}">${n.email}</span>`);
                        this.userDataSource = new c.by(this.userDataSource),
                        this.userDataSource.paginator = this.paginatorUsers,
                        this.resultsLengthUser = e.length
                    }
                    , e=>{
                        this.error = e,
                        console.log(this.error)
                    }
                    )
                }
                findAllFeedbacks() {
                    this.feedbackService.find().subscribe(e=>{
                        this.feedbackDataSource = e;
                        for (const n of this.feedbackDataSource)
                            n.comment = this.sanitizer.bypassSecurityTrustHtml(n.comment);
                        this.feedbackDataSource = new c.by(this.feedbackDataSource),
                        this.feedbackDataSource.paginator = this.paginatorFeedb,
                        this.resultsLengthFeedback = e.length
                    }
                    , e=>{
                        this.error = e,
                        console.log(this.error)
                    }
                    )
                }
                deleteFeedback(e) {
                    this.feedbackService.del(e).subscribe(()=>{
                        this.findAllFeedbacks()
                    }
                    , n=>{
                        this.error = n,
                        console.log(this.error)
                    }
                    )
                }
                showUserDetail(e) {
                    this.dialog.open(Nn, {
                        data: {
                            id: e
                        }
                    })
                }
                showFeedbackDetails(e, n) {
                    this.dialog.open(En, {
                        data: {
                            feedback: e,
                            id: n
                        }
                    })
                }
                times(e) {
                    return Array(e).fill("\u2605")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.uw),t.Y36(N),t.Y36(pt),t.Y36(J.H7))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-administration"]],
                viewQuery: function(e, n) {
                    if (1 & e && (t.Gf(qn, 5),
                    t.Gf(Mn, 5)),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.paginatorUsers = i.first),
                        t.iGM(i = t.CRH()) && (n.paginatorFeedb = i.first)
                    }
                },
                decls: 58,
                vars: 13,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "user-container"], [1, "user-table"], [1, "heading"], [2, "height", "700px", 3, "dataSource"], ["matColumnDef", "user"], [4, "matHeaderCellDef"], ["style", "vertical-align: middle", 4, "matCellDef"], ["matColumnDef", "email"], ["translate", "", 4, "matHeaderCellDef"], ["style", "vertical-align: middle", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "user_detail"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize", "length"], ["paginatorUsers", ""], [2, "visibility", "hidden", "height", "0px", 3, "dataSource"], ["fxFlexAlign.lt-md", "center", 1, "customer-container"], [1, "customer-table"], ["matColumnDef", "comment"], [3, "click", 4, "matCellDef"], ["matColumnDef", "rating"], ["matColumnDef", "remove"], ["paginatorFeedb", ""], ["src", "assets/public/images/padding/19px.png"], [2, "vertical-align", "middle"], ["class", "fas fa-user fa-lg confirmation", 4, "ngIf"], [1, "fas", "fa-user", "fa-lg", "confirmation"], [2, "vertical-align", "middle", 3, "innerHTML"], ["mat-button", "", 3, "click"], [1, "fas", "fa-eye"], [3, "click"], ["matTooltip", "Click for more information", "matTooltipPosition", "above", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-trash-alt"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "TITLE_ADMINISTRATION"),
                    t.qZA(),
                    t.TgZ(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 1),
                    t._uU(8, "SECTION_USER"),
                    t.qZA()(),
                    t.TgZ(9, "mat-table", 6),
                    t.ynx(10, 7),
                    t.YNc(11, Dn, 1, 0, "mat-header-cell", 8),
                    t.YNc(12, Rn, 2, 1, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(13, 10),
                    t.YNc(14, Yn, 1, 0, "mat-header-cell", 11),
                    t.YNc(15, Bn, 1, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(16, 13),
                    t.YNc(17, Jn, 1, 0, "mat-header-cell", 8),
                    t.YNc(18, Qn, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(19, Hn, 1, 0, "mat-header-row", 15),
                    t.YNc(20, Gn, 1, 0, "mat-row", 16),
                    t.qZA(),
                    t._UZ(21, "mat-paginator", 17, 18),
                    t.qZA(),
                    t.TgZ(23, "mat-table", 19),
                    t.ynx(24, 7),
                    t.YNc(25, jn, 1, 0, "mat-header-cell", 8),
                    t.YNc(26, zn, 1, 0, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(27, 10),
                    t.YNc(28, Kn, 1, 0, "mat-header-cell", 11),
                    t.YNc(29, Wn, 1, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(30, 13),
                    t.YNc(31, $n, 1, 0, "mat-header-cell", 8),
                    t.YNc(32, Vn, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(33, Xn, 1, 0, "mat-header-row", 15),
                    t.YNc(34, ta, 1, 0, "mat-row", 16),
                    t.qZA()(),
                    t.TgZ(35, "div", 20)(36, "div", 21)(37, "div", 5)(38, "span", 1),
                    t._uU(39, "SECTION_CUSTOMER_FEEDBACK"),
                    t.qZA()(),
                    t.TgZ(40, "mat-table", 6),
                    t.ynx(41, 7),
                    t.YNc(42, ea, 1, 0, "mat-header-cell", 11),
                    t.YNc(43, oa, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(44, 22),
                    t.YNc(45, na, 1, 0, "mat-header-cell", 11),
                    t.YNc(46, aa, 2, 1, "mat-cell", 23),
                    t.BQk(),
                    t.ynx(47, 24),
                    t.YNc(48, ia, 1, 0, "mat-header-cell", 11),
                    t.YNc(49, sa, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(50, 25),
                    t.YNc(51, la, 1, 0, "mat-header-cell", 8),
                    t.YNc(52, ca, 3, 0, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(53, ua, 1, 0, "mat-header-row", 15),
                    t.YNc(54, da, 1, 0, "mat-row", 16),
                    t.qZA(),
                    t._UZ(55, "mat-paginator", 17, 26),
                    t.qZA()(),
                    t._UZ(57, "img", 27),
                    t.qZA()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("dataSource", n.userDataSource),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", n.userColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.userColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10)("length", n.resultsLengthUser),
                    t.xp6(2),
                    t.Q6J("dataSource", n.userDataSourceHidden),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", n.userColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.userColumns),
                    t.xp6(6),
                    t.Q6J("dataSource", n.feedbackDataSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", n.feedbackColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.feedbackColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10)("length", n.resultsLengthFeedback))
                },
                dependencies: [T.sg, T.O5, p.Pi, C.xw, C.SQ, C.XD, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, st.NW, x.a8, F.gM],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;justify-content:center;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.user-container[_ngcontent-%COMP%], .customer-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.user-table[_ngcontent-%COMP%], .customer-table[_ngcontent-%COMP%]{margin-bottom:25px}.mat-column-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .mat-column-user_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:38%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}.mat-column-comment[_ngcontent-%COMP%]{flex:0 0 55%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;padding:5px;white-space:unset!important;width:55%!important;word-break:break-word;word-wrap:break-word!important}.mat-column-user[_ngcontent-%COMP%]{flex:0 0 7%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;padding:5px;white-space:unset!important;width:7%!important;word-break:break-word;word-wrap:break-word!important}.mat-column-rating[_ngcontent-%COMP%]{flex:0 0 20%!important;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;white-space:unset!important;width:20%!important;word-break:break-word;word-wrap:break-word!important}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}p[_ngcontent-%COMP%]{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden}"]
            }),
            o
        }
        )();
        function ma(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CURRENT_PASSWORD"),
            t.qZA())
        }
        function ha(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NEW_PASSWORD "),
            t.qZA())
        }
        const re = function() {
            return {
                length: "5-40"
            }
        };
        function _a(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 19),
            t._uU(1, "INVALID_PASSWORD_LENGTH "),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, re))
        }
        function ga(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_PASSWORD_REPEAT"),
            t.qZA())
        }
        function fa(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " PASSWORDS_NOT_MATCHING "),
            t.qZA())
        }
        v.vI.add(m.r6l, R.Xc),
        v.vz.watch();
        let Ca = (()=>{
            class o {
                constructor(e, n, i) {
                    this.userService = e,
                    this.formSubmitService = n,
                    this.translate = i,
                    this.passwordControl = new s.p4("",[s.kI.required]),
                    this.newPasswordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40)]),
                    this.repeatNewPasswordControl = new s.p4("",[s.kI.required, s.kI.minLength(5), s.kI.maxLength(40), va(this.newPasswordControl)])
                }
                ngOnInit() {
                    this.formSubmitService.attachEnterKeyHandler("password-form", "changeButton", ()=>this.changePassword())
                }
                changePassword() {
                    var e;
                    !(null === (e = localStorage.getItem("email")) || void 0 === e) && e.match(/support@.*/) && !this.newPasswordControl.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,30}/) && console.error("Parola echipei de asisten\u021b\u0103 nu respect\u0103 politica corporativ\u0103 pentru conturile privilegiate! V\u0103 rug\u0103m s\u0103 schimba\u021bi parola \xeen consecin\u021b\u0103!"),
                    this.userService.changePassword({
                        current: this.passwordControl.value,
                        new: this.newPasswordControl.value,
                        repeat: this.repeatNewPasswordControl.value
                    }).subscribe(n=>{
                        this.error = void 0,
                        this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(i=>{
                            this.confirmation = i
                        }
                        , i=>{
                            this.confirmation = {
                                error: i
                            }
                        }
                        ),
                        this.resetForm()
                    }
                    , n=>{
                        console.log(n),
                        this.error = n,
                        this.confirmation = void 0,
                        this.resetPasswords()
                    }
                    )
                }
                resetForm() {
                    this.passwordControl.setValue(""),
                    this.resetPasswords()
                }
                resetPasswords() {
                    this.passwordControl.markAsPristine(),
                    this.passwordControl.markAsUntouched(),
                    this.newPasswordControl.setValue(""),
                    this.newPasswordControl.markAsPristine(),
                    this.newPasswordControl.markAsUntouched(),
                    this.repeatNewPasswordControl.setValue(""),
                    this.repeatNewPasswordControl.markAsPristine(),
                    this.repeatNewPasswordControl.markAsUntouched()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(N),t.Y36(W),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-change-password"]],
                decls: 42,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6", 2, "margin-bottom", "20px"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], ["id", "password-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "currentPassword", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["id", "newPassword", "type", "password", "matInput", "", "aria-label", "Field for the new password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "aria-label", "Field to repeat the new password", 3, "formControl"], ["passwordRepeat", ""], ["type", "submit", "id", "changeButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the change", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_CHANGE_PASSWORD"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "div", 4),
                    t._uU(7),
                    t.qZA(),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_CURRENT_PASSWORD"),
                    t.qZA(),
                    t._UZ(12, "input", 7),
                    t.ALo(13, "translate"),
                    t.YNc(14, ma, 2, 0, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(15, "mat-form-field", 6)(16, "mat-label", 2),
                    t._uU(17, "LABEL_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(18, "input", 9, 10),
                    t.TgZ(20, "mat-hint", 2),
                    t._UZ(21, "i", 11),
                    t.TgZ(22, "em", 12),
                    t._uU(23),
                    t.ALo(24, "translate"),
                    t.qZA()(),
                    t.TgZ(25, "mat-hint", 13),
                    t._uU(26),
                    t.qZA(),
                    t.YNc(27, ha, 2, 0, "mat-error", 8),
                    t.YNc(28, _a, 2, 2, "mat-error", 14),
                    t.qZA(),
                    t.TgZ(29, "mat-form-field", 6)(30, "mat-label", 2),
                    t._uU(31, "LABEL_REPEAT_NEW_PASSWORD"),
                    t.qZA(),
                    t._UZ(32, "input", 15, 16),
                    t.TgZ(34, "mat-hint", 13),
                    t._uU(35),
                    t.qZA(),
                    t.YNc(36, ga, 2, 0, "mat-error", 8),
                    t.YNc(37, fa, 2, 0, "mat-error", 8),
                    t.qZA()(),
                    t.TgZ(38, "button", 17),
                    t.NdJ("click", function() {
                        return n.changePassword()
                    }),
                    t._UZ(39, "i", 18),
                    t._uU(40),
                    t.ALo(41, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(19)
                          , r = t.MAs(33);
                        t.xp6(4),
                        t.Q6J("hidden", !(n.confirmation && !n.passwordControl.dirty && !n.newPasswordControl.dirty && !n.repeatNewPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", n.confirmation, " "),
                        t.xp6(1),
                        t.Q6J("hidden", !(n.error && !n.passwordControl.dirty && !n.newPasswordControl.dirty && !n.repeatNewPasswordControl.dirty)),
                        t.xp6(1),
                        t.hij(" ", n.error, " "),
                        t.xp6(5),
                        t.s9C("placeholder", t.lcZ(13, 18, "MANDATORY_CURRENT_PASSWORD")),
                        t.Q6J("formControl", n.passwordControl),
                        t.xp6(2),
                        t.Q6J("ngIf", n.passwordControl.invalid),
                        t.xp6(4),
                        t.Q6J("formControl", n.newPasswordControl),
                        t.xp6(5),
                        t.Oqu(t.xi3(24, 20, "INVALID_PASSWORD_LENGTH", t.DdM(25, re))),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/40"),
                        t.xp6(1),
                        t.Q6J("ngIf", (null == n.newPasswordControl ? null : n.newPasswordControl.invalid) && (null == n.newPasswordControl ? null : n.newPasswordControl.errors.required)),
                        t.xp6(1),
                        t.Q6J("ngIf", (null == n.newPasswordControl ? null : n.newPasswordControl.invalid) && ((null == n.newPasswordControl ? null : n.newPasswordControl.errors.minlength) || (null == n.newPasswordControl ? null : n.newPasswordControl.errors.maxlength))),
                        t.xp6(4),
                        t.Q6J("formControl", n.repeatNewPasswordControl),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/20"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatNewPasswordControl.invalid && n.repeatNewPasswordControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.repeatNewPasswordControl.invalid && n.repeatNewPasswordControl.errors.notSame),
                        t.xp6(1),
                        t.Q6J("disabled", n.passwordControl.invalid || n.newPasswordControl.invalid || n.repeatNewPasswordControl.invalid),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(41, 23, "BTN_CHANGE"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, C.Wh, s.Fj, s.JJ, s.oH, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-top:5px}#changeButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            o
        }
        )();
        function va(o) {
            return function(e) {
                return o.value !== e.value ? {
                    notSame: !0
                } : null
            }
        }
        let se = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Complaints"
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var kt = d(162);
        const Ta = ["fileControl"]
          , ba = function() {
            return {
                type: "PDF, ZIP"
            }
        };
        function xa(o, a) {
            1 & o && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.hij("", t.xi3(2, 1, "INVALID_FILE_TYPE", t.DdM(4, ba)), " "))
        }
        const Aa = function() {
            return {
                size: "100 KB"
            }
        };
        function Za(o, a) {
            1 & o && (t.TgZ(0, "div", 20),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.hij("", t.xi3(2, 1, "INVALID_FILE_SIZE", t.DdM(4, Aa)), " "))
        }
        function wa(o, a) {
            1 & o && (t.TgZ(0, "mat-error"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "MANDATORY_MESSAGE"), " "))
        }
        const Sa = function() {
            return {
                length: "160"
            }
        };
        v.vI.add(m.Yme),
        v.vz.watch();
        let ya = (()=>{
            class o {
                constructor(e, n, i, r) {
                    this.userService = e,
                    this.complaintService = n,
                    this.formSubmitService = i,
                    this.translate = r,
                    this.customerControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.messageControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.fileUploadError = void 0,
                    this.uploader = new kt.bA({
                        url: "./file-upload",
                        authToken: `Bearer ${localStorage.getItem("token")}`,
                        allowedMimeType: ["application/pdf", "application/xml", "text/xml", "application/zip", "application/x-zip-compressed", "multipart/x-zip"],
                        maxFileSize: 1e5
                    }),
                    this.userEmail = void 0,
                    this.complaint = void 0
                }
                ngOnInit() {
                    this.initComplaint(),
                    this.uploader.onWhenAddingFileFailed = (e,n)=>{
                        throw this.fileUploadError = n,
                        new Error(`Error due to : ${n.name}`)
                    }
                    ,
                    this.uploader.onAfterAddingFile = ()=>{
                        this.fileUploadError = void 0
                    }
                    ,
                    this.uploader.onSuccessItem = ()=>{
                        this.saveComplaint(),
                        this.uploader.clearQueue()
                    }
                    ,
                    this.formSubmitService.attachEnterKeyHandler("complaint-form", "submitButton", ()=>this.save())
                }
                initComplaint() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.complaint = {},
                        this.complaint.UserId = e.id,
                        this.userEmail = e.email,
                        this.customerControl.setValue(this.userEmail)
                    }
                    , e=>{
                        this.complaint = void 0,
                        console.log(e)
                    }
                    )
                }
                save() {
                    this.uploader.queue[0] ? (this.uploader.queue[0].upload(),
                    this.fileControl.nativeElement.value = null) : this.saveComplaint()
                }
                saveComplaint() {
                    this.complaint.message = this.messageControl.value,
                    this.complaintService.save(this.complaint).subscribe(e=>{
                        this.translate.get("CUSTOMER_SUPPORT_COMPLAINT_REPLY", {
                            ref: e.id
                        }).subscribe(n=>{
                            this.confirmation = n
                        }
                        , n=>{
                            this.confirmation = n
                        }
                        ),
                        this.initComplaint(),
                        this.resetForm(),
                        this.fileUploadError = void 0
                    }
                    , e=>e)
                }
                resetForm() {
                    this.messageControl.setValue(""),
                    this.messageControl.markAsUntouched(),
                    this.messageControl.markAsPristine(),
                    this.fileControl.nativeElement.value = null
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(N),t.Y36(se),t.Y36(W),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-complaint"]],
                viewQuery: function(e, n) {
                    if (1 & e && t.Gf(Ta, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.fileControl = i.first)
                    }
                },
                decls: 39,
                vars: 21,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], ["class", "error fileUploadError", 4, "ngIf"], ["id", "complaint-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", "aria-label", "Text field for the mail address of the user", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "complaintMessage", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "matInput", "", "aria-label", "Field for entering the complaint", 3, "formControl", "placeholder"], ["complaintMessage", ""], [4, "ngIf"], ["align", "end"], [2, "margin-top", "15px"], ["for", "file", "translate", ""], ["ng2FileSelect", "", "id", "file", "type", "file", "accept", ".pdf,.zip", "aria-label", "Input area for uploading a single invoice PDF or XML B2B order file or a ZIP archive containing multiple invoices or orders\x3c!----\x3e", 2, "margin-left", "10px", 3, "uploader"], ["fileControl", ""], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the complaint", 3, "disabled", "click"], [1, "material-icons"], [1, "error", "fileUploadError"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "NAV_COMPLAIN"),
                    t.qZA(),
                    t.TgZ(4, "div", 3),
                    t._uU(5),
                    t.qZA(),
                    t.YNc(6, xa, 3, 5, "div", 4),
                    t.YNc(7, Za, 3, 5, "div", 4),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_CUSTOMER"),
                    t.qZA(),
                    t._UZ(12, "input", 7),
                    t.qZA(),
                    t.TgZ(13, "mat-form-field", 6)(14, "mat-label", 2),
                    t._uU(15, "LABEL_MESSAGE"),
                    t.qZA(),
                    t.TgZ(16, "mat-hint", 2),
                    t._UZ(17, "i", 8),
                    t.TgZ(18, "em", 9),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA()(),
                    t._UZ(21, "textarea", 10, 11),
                    t.ALo(23, "translate"),
                    t.YNc(24, wa, 3, 3, "mat-error", 12),
                    t.TgZ(25, "mat-hint", 13),
                    t._uU(26),
                    t.qZA()(),
                    t.TgZ(27, "div", 14)(28, "label", 15),
                    t._uU(29, "LABEL_INVOICE"),
                    t.TgZ(30, "span"),
                    t._uU(31, ":"),
                    t.qZA()(),
                    t._UZ(32, "input", 16, 17),
                    t.qZA()(),
                    t.TgZ(34, "button", 18),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(35, "i", 19),
                    t._uU(36, " send "),
                    t.qZA(),
                    t._uU(37),
                    t.ALo(38, "translate"),
                    t.qZA()()()),
                    2 & e) {
                        const i = t.MAs(22);
                        t.xp6(4),
                        t.Q6J("hidden", !(n.confirmation && !n.messageControl.dirty)),
                        t.xp6(1),
                        t.Oqu(n.confirmation),
                        t.xp6(1),
                        t.Q6J("ngIf", n.fileUploadError && "mimeType" == n.fileUploadError.name),
                        t.xp6(1),
                        t.Q6J("ngIf", n.fileUploadError && "fileSize" == n.fileUploadError.name),
                        t.xp6(5),
                        t.Q6J("formControl", n.customerControl),
                        t.xp6(7),
                        t.Oqu(t.xi3(20, 13, "MAX_TEXTAREA_LENGTH", t.DdM(20, Sa))),
                        t.xp6(2),
                        t.s9C("placeholder", t.lcZ(23, 16, "WRITE_MESSAGE_PLACEHOLDER")),
                        t.Q6J("formControl", n.messageControl),
                        t.xp6(3),
                        t.Q6J("ngIf", n.messageControl.invalid && (null == n.messageControl ? null : n.messageControl.errors.required)),
                        t.xp6(2),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/160"),
                        t.xp6(6),
                        t.Q6J("uploader", n.uploader),
                        t.xp6(2),
                        t.Q6J("disabled", n.messageControl.invalid || n.fileUploadError),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(38, 18, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, C.Wh, s.Fj, s.JJ, s.nD, s.oH, kt.C6, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }),
            o
        }
        )()
          , le = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/chatbot"
                }
                getChatbotStatus() {
                    return this.http.get(this.host + "/status").pipe((0,
                    _.U)(e=>e), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                getResponse(e, n) {
                    return this.http.post(this.host + "/respond", {
                        action: e,
                        query: n
                    }).pipe((0,
                    _.U)(i=>i), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function Ia(o, a) {
            if (1 & o && t._UZ(0, "img", 16),
            2 & o) {
                const e = t.oxw(2);
                t.s9C("src", e.juicyImageSrc, t.LSH)
            }
        }
        function Ua(o, a) {
            if (1 & o && t._UZ(0, "img", 17),
            2 & o) {
                const e = t.oxw(2);
                t.s9C("src", e.profileImageSrc, t.LSH)
            }
        }
        function ka(o, a) {
            if (1 & o && (t.TgZ(0, "div", 13),
            t.YNc(1, Ia, 1, 1, "img", 14),
            t.YNc(2, Ua, 1, 1, "img", 15),
            t.TgZ(3, "div"),
            t._uU(4),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", "bot" == e.author),
                t.xp6(1),
                t.Q6J("ngIf", "user" == e.author),
                t.xp6(1),
                t.Tol("user" == e.author ? "speech-bubble-right" : "speech-bubble-left"),
                t.xp6(1),
                t.hij(" ", e.body, " ")
            }
        }
        const Oa = function() {
            return {
                chatbot: "juicy-chat-bot"
            }
        };
        v.vI.add(m.Yme),
        v.vz.watch();
        var X = (()=>{
            return (o = X || (X = {})).user = "user",
            o.bot = "bot",
            X;
            var o
        }
        )();
        let Pa = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.userService = e,
                    this.chatbotService = n,
                    this.cookieService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.messageControl = new s.p4,
                    this.messages = [],
                    this.juicyImageSrc = "assets/public/images/ChatbotAvatar.png",
                    this.profileImageSrc = "assets/public/images/uploads/default.svg",
                    this.messageActions = {
                        response: "query",
                        namequery: "setname"
                    },
                    this.currentAction = this.messageActions.response
                }
                ngOnInit() {
                    this.chatbotService.getChatbotStatus().subscribe(e=>{
                        this.messages.push({
                            author: X.bot,
                            body: e.body
                        }),
                        e.action && (this.currentAction = this.messageActions[e.action])
                    }
                    ),
                    this.userService.whoAmI().subscribe(e=>{
                        this.profileImageSrc = e.profileImage
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                handleResponse(e) {
                    if (this.messages.push({
                        author: X.bot,
                        body: e.body
                    }),
                    this.currentAction = this.messageActions[e.action],
                    e.token) {
                        localStorage.setItem("token", e.token);
                        const n = new Date;
                        n.setHours(n.getHours() + 8),
                        this.cookieService.put("token", e.token, {
                            expires: n
                        })
                    }
                }
                sendMessage() {
                    const e = this.messageControl.value;
                    e && (this.messages.push({
                        author: X.user,
                        body: e
                    }),
                    this.messageControl.setValue(""),
                    this.chatbotService.getChatbotStatus().subscribe(n=>{
                        n.status || n.action ? this.chatbotService.getResponse(this.currentAction, e).subscribe(r=>{
                            this.handleResponse(r)
                        }
                        ) : this.messages.push({
                            author: X.bot,
                            body: n.body
                        });
                        const i = document.getElementById("chat-window");
                        i.scrollTop = i.scrollHeight
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(N),t.Y36(le),t.Y36(q.N_),t.Y36(W),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-chatbot"]],
                decls: 20,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "powered-by"], ["id", "chat-container"], ["id", "chat-box"], ["id", "chat-window"], ["class", "message-container", 4, "ngFor", "ngForOf"], [1, "message-box-container"], [1, "form-wrapper"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "message-input", "name", "message", "matInput", "", "aria-label", "Text field for a chat message", 3, "formControl", "placeholder", "keyup.enter"], ["message", ""], [1, "message-container"], ["class", "juicy-chat-bot-image", 3, "src", 4, "ngIf"], ["class", "profile-image", 3, "src", 4, "ngIf"], [1, "juicy-chat-bot-image", 3, "src"], [1, "profile-image", 3, "src"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.TgZ(5, "span", 2),
                    t._uU(6),
                    t.ALo(7, "translate"),
                    t.qZA()(),
                    t.TgZ(8, "mat-card", 3)(9, "mat-card", 4)(10, "div", 5),
                    t.YNc(11, ka, 5, 6, "div", 6),
                    t.qZA(),
                    t.TgZ(12, "div", 7)(13, "div", 8)(14, "mat-form-field", 9)(15, "mat-label", 10),
                    t._uU(16, "LABEL_MESSAGE"),
                    t.qZA(),
                    t.TgZ(17, "input", 11, 12),
                    t.NdJ("keyup.enter", function() {
                        return n.sendMessage()
                    }),
                    t.ALo(19, "translate"),
                    t.qZA()()()()()()()()),
                    2 & e && (t.xp6(3),
                    t.hij("", t.lcZ(4, 5, "SECTION_SUPPORT_CHAT"), " "),
                    t.xp6(3),
                    t.hij("(", t.xi3(7, 7, "LABEL_POWERED_BY_CHATBOT", t.DdM(12, Oa)), ")"),
                    t.xp6(5),
                    t.Q6J("ngForOf", n.messages),
                    t.xp6(6),
                    t.s9C("placeholder", t.lcZ(19, 10, "ASK_ME_ANYTHING_PLACEHOLDER")),
                    t.Q6J("formControl", n.messageControl))
                },
                dependencies: [T.sg, T.O5, p.Pi, C.Wh, s.Fj, s.JJ, s.oH, g.KE, g.hX, x.a8, P.Nt, p.X$],
                styles: ['mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:60%}mat-form-field[_ngcontent-%COMP%]{display:block;height:0;margin:auto;width:70%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#chat-container[_ngcontent-%COMP%]{box-shadow:none;display:flex;position:relative;width:95%}#chat-box[_ngcontent-%COMP%]{align-content:space-between;background-color:#0000004d;display:block;display:flex;flex-direction:column;height:650px;margin-left:auto;margin-right:auto;padding:0;width:80%}.form-wrapper[_ngcontent-%COMP%]{font-size:10px}#chat-window[_ngcontent-%COMP%]{height:90%;overflow-y:auto;padding:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:none;width:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:none}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#f00;border-radius:10px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b30000}.message-box-container[_ngcontent-%COMP%]{border-top:solid 1px #fff;height:10%;padding-top:15px;width:auto}.message-container[_ngcontent-%COMP%]{height:auto;margin-right:25px;overflow:hidden;width:auto}.speech-bubble-right[_ngcontent-%COMP%]{background:rgb(84,110,122);border-radius:4px;float:right;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-right[_ngcontent-%COMP%]:after{border-left:20px solid transparent;border-top:20px solid rgb(84,110,122);bottom:-20px;content:"";position:absolute;right:20px}.speech-bubble-left[_ngcontent-%COMP%]{background:rgb(84,110,122);border-radius:4px;float:left;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-left[_ngcontent-%COMP%]:after{border-right:20px solid transparent;border-top:20px solid rgb(84,110,122);bottom:-20px;content:"";left:20px;position:absolute}.juicy-chat-bot-image[_ngcontent-%COMP%]{float:left;height:70px;margin-top:20px}.profile-image[_ngcontent-%COMP%]{border-radius:50%;float:right;height:40px;margin-left:10px;margin-top:20px}.powered-by[_ngcontent-%COMP%]{font-size:xx-small}']
            }),
            o
        }
        )()
          , ce = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Recycles"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , nt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Addresss"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                put(e, n) {
                    return this.http.put(`${this.host}/${e}`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var ue = d(5017)
          , tt = d(1948);
        function La(o, a) {
            1 & o && (t.TgZ(0, "h1", 5),
            t._uU(1, "TITLE_SELECT_ADDRESS"),
            t.qZA())
        }
        function Na(o, a) {
            1 & o && (t.TgZ(0, "h1", 5),
            t._uU(1, "MY_SAVED_ADRESSES"),
            t.qZA())
        }
        function Ea(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 20)
        }
        function qa(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 20)(1, "mat-radio-button", 21),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.emitSelectionToParent(r.id))
                })("change", function(i) {
                    const l = t.CHM(e).$implicit
                      , u = t.oxw(2);
                    return t.KtG(i ? u.selection.toggle(l) : null)
                }),
                t.qZA()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(1),
                t.Q6J("checked", n.selection.isSelected(e))
            }
        }
        function Ma(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 22)
        }
        function Da(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 20),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", null == e ? null : e.fullName, " ")
            }
        }
        function Fa(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 22)
        }
        function Ra(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 23),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.HOy(" ", null == e ? null : e.streetAddress, ", ", null == e ? null : e.city, ", ", null == e ? null : e.state, ", ", null == e ? null : e.zipCode, " ")
            }
        }
        function Ya(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 22)
        }
        function Ba(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 20),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Oqu(null == e ? null : e.country)
            }
        }
        function Ja(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 22)
        }
        function Qa(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 24)(1, "button", 25),
            t._UZ(2, "i", 26),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.MGl("routerLink", "/address/edit/", e.id, "")
            }
        }
        function Ha(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 22)
        }
        function Ga(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 24)(1, "button", 27),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.deleteAddress(r.id))
                }),
                t._UZ(2, "i", 28),
                t.qZA()()
            }
        }
        function ja(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function za(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-row", 29),
                t.NdJ("click", function() {
                    const i = t.CHM(e)
                      , r = i.$implicit
                      , l = i.$implicit
                      , u = t.oxw(2);
                    return u.selection.toggle(r),
                    t.KtG(u.emitSelectionToParent(l.id))
                }),
                t.qZA()
            }
        }
        function Ka(o, a) {
            if (1 & o && (t.TgZ(0, "mat-table", 6),
            t.ynx(1, 7),
            t.YNc(2, Ea, 1, 0, "mat-header-cell", 8),
            t.YNc(3, qa, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(4, 10),
            t.YNc(5, Ma, 1, 0, "mat-header-cell", 11),
            t.YNc(6, Da, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(7, 12),
            t.YNc(8, Fa, 1, 0, "mat-header-cell", 11),
            t.YNc(9, Ra, 2, 4, "mat-cell", 13),
            t.BQk(),
            t.ynx(10, 14),
            t.YNc(11, Ya, 1, 0, "mat-header-cell", 11),
            t.YNc(12, Ba, 2, 1, "mat-cell", 9),
            t.BQk(),
            t.ynx(13, 15),
            t.YNc(14, Ja, 1, 0, "mat-header-cell", 11),
            t.YNc(15, Qa, 3, 1, "mat-cell", 16),
            t.BQk(),
            t.ynx(16, 17),
            t.YNc(17, Ha, 1, 0, "mat-header-cell", 11),
            t.YNc(18, Ga, 3, 0, "mat-cell", 16),
            t.BQk(),
            t.YNc(19, ja, 1, 0, "mat-header-row", 18),
            t.YNc(20, za, 1, 0, "mat-row", 19),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("dataSource", e.dataSource),
                t.xp6(19),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function Wa(o, a) {
            1 & o && (t.TgZ(0, "div", 30)(1, "button", 31)(2, "mat-icon"),
            t._uU(3, " add "),
            t.qZA(),
            t.TgZ(4, "span", 5),
            t._uU(5, "ADD_NEW_ADDRESS"),
            t.qZA()()())
        }
        function $a(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 32),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.chooseAddress())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " navigate_next "),
                t.qZA(),
                t.TgZ(3, "span", 5),
                t._uU(4, "LABEL_CONTINUE"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("disabled", void 0 === e.addressId)
            }
        }
        v.vI.add(R.Xc, R.I7),
        v.vz.watch();
        let Ot = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.addressService = e,
                    this.translate = n,
                    this.router = i,
                    this.ngZone = r,
                    this.snackBarHelperService = l,
                    this.emitSelection = new t.vpe,
                    this.allowEdit = !1,
                    this.addNewAddressDiv = !0,
                    this.showNextButton = !1,
                    this.addressId = void 0,
                    this.displayedColumns = ["Name", "Address", "Country"],
                    this.selection = new ue.Ov(!1,[]),
                    this.addressExist = !1
                }
                ngOnInit() {
                    this.allowEdit ? this.displayedColumns.push("Edit", "Remove") : this.displayedColumns.unshift("Selection"),
                    this.load()
                }
                load() {
                    this.addressService.get().subscribe(e=>{
                        this.addressExist = e.length,
                        this.storedAddresses = e,
                        this.dataSource = new c.by(this.storedAddresses)
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                emitSelectionToParent(e) {
                    this.selection.hasValue() ? (this.emitSelection.emit(e),
                    this.addressId = e) : (this.emitSelection.emit(void 0),
                    this.addressId = void 0)
                }
                chooseAddress() {
                    var e = this;
                    sessionStorage.setItem("addressId", this.addressId),
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/delivery-method"])
                    }))
                }
                deleteAddress(e) {
                    this.addressService.del(e).subscribe(()=>{
                        this.error = null,
                        this.translate.get("ADDRESS_REMOVED").subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        ),
                        this.load()
                    }
                    , n=>{
                        var i;
                        this.snackBarHelperService.open(null === (i = n.error) || void 0 === i ? void 0 : i.error, "errorBar"),
                        console.log(n)
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(nt),t.Y36(p.sK),t.Y36(y.F0),t.Y36(t.R0b),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-address"]],
                inputs: {
                    allowEdit: "allowEdit",
                    addNewAddressDiv: "addNewAddressDiv",
                    showNextButton: "showNextButton"
                },
                outputs: {
                    emitSelection: "emitSelection"
                },
                decls: 6,
                vars: 7,
                consts: [[1, "mat-elevation-z6"], ["translate", "", 4, "ngIf"], [3, "dataSource", 4, "ngIf"], ["style", "margin-top: 20px;", 4, "ngIf"], ["mat-raised-button", "", "mat-button", "", "class", "btn btn-next", "color", "primary", "aria-label", "Proceed to payment selection", 3, "disabled", "click", 4, "ngIf"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["style", "display: none;", 4, "matHeaderCellDef"], ["matColumnDef", "Address"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Edit"], ["fxflex", "10%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxFlex", "20%"], [3, "checked", "click", "change"], [2, "display", "none"], ["fxFlex", "40%"], ["fxflex", "10%"], ["mat-icon-button", "", 3, "routerLink"], [1, "far", "fa-edit"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "click"], [2, "margin-top", "20px"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Add a new address", "routerLink", "/address/create", 1, "btn", "btn-new-address"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to payment selection", 1, "btn", "btn-next", 3, "disabled", "click"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t.YNc(1, La, 2, 0, "h1", 1),
                    t.YNc(2, Na, 2, 0, "h1", 1),
                    t.YNc(3, Ka, 21, 3, "mat-table", 2),
                    t.YNc(4, Wa, 6, 0, "div", 3),
                    t.YNc(5, $a, 5, 1, "button", 4),
                    t.qZA()),
                    2 & e && (t.ekj("div-boundary", !n.addNewAddressDiv),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showNextButton),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.showNextButton),
                    t.xp6(1),
                    t.Q6J("ngIf", n.addressExist),
                    t.xp6(1),
                    t.Q6J("ngIf", n.addNewAddressDiv),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showNextButton))
                },
                dependencies: [T.O5, y.rH, p.Pi, C.yH, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, x.a8, tt.U0],
                styles: [".btn-new-address[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.btn-next[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.div-boundary[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.3);border-radius:5px;box-shadow:0 0!important}"]
            }),
            o
        }
        )();
        var _t = d(9602);
        const Va = ["addressComp"];
        function Xa(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_QUANTITY "),
            t.qZA())
        }
        const ti = function() {
            return {
                range: "10-1000"
            }
        };
        function ei(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 21),
            t._uU(1, "INVALID_QUANTITY "),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, ti))
        }
        function oi(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "INVALID_DATE"),
            t.qZA())
        }
        function ni(o, a) {
            if (1 & o && (t.TgZ(0, "mat-form-field", 22)(1, "mat-label", 2),
            t._uU(2, "LABEL_PICKUP_DATE"),
            t.qZA(),
            t._UZ(3, "input", 23)(4, "mat-datepicker-toggle", 24)(5, "mat-datepicker", null, 25),
            t.YNc(7, oi, 2, 0, "mat-error", 7),
            t.qZA()),
            2 & o) {
                const e = t.MAs(6)
                  , n = t.oxw();
                t.xp6(3),
                t.Q6J("formControl", n.pickUpDateControl)("matDatepicker", e),
                t.xp6(1),
                t.Q6J("for", e),
                t.xp6(3),
                t.Q6J("ngIf", n.pickUpDateControl.invalid)
            }
        }
        function ai(o, a) {
            if (1 & o && (t.TgZ(0, "mat-checkbox", 26),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("formControl", e.pickup),
                t.xp6(1),
                t.hij("", t.lcZ(2, 2, "REQUEST_PICKUP"), " ")
            }
        }
        v.vI.add(m.XCy),
        v.vz.watch();
        let ii = (()=>{
            class o {
                constructor(e, n, i, r, l, u) {
                    this.recycleService = e,
                    this.userService = n,
                    this.configurationService = i,
                    this.formSubmitService = r,
                    this.translate = l,
                    this.snackBarHelperService = u,
                    this.requestorControl = new s.p4({
                        value: "",
                        disabled: !0
                    },[]),
                    this.recycleQuantityControl = new s.p4("",[s.kI.required, s.kI.min(10), s.kI.max(1e3)]),
                    this.pickUpDateControl = new s.p4,
                    this.pickup = new s.p4(!1),
                    this.recycle = {},
                    this.addressId = void 0
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        null !== (n = e?.application) && void 0 !== n && n.recyclePage && (this.topImage = `assets/public/images/products/${e.application.recyclePage.topProductImage}`,
                        this.bottomImage = `assets/public/images/products/${e.application.recyclePage.bottomProductImage}`)
                    }
                    , e=>console.log(e)),
                    this.initRecycle(),
                    this.findAll(),
                    this.formSubmitService.attachEnterKeyHandler("recycle-form", "recycleButton", ()=>this.save())
                }
                initRecycle() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.recycle = {},
                        this.recycle.UserId = e.id,
                        this.userEmail = e.email,
                        this.requestorControl.setValue(this.userEmail)
                    }
                    , e=>console.log(e))
                }
                save() {
                    this.recycle.AddressId = this.addressId,
                    this.recycle.quantity = this.recycleQuantityControl.value,
                    this.pickup.value && (this.recycle.isPickUp = this.pickup.value,
                    this.recycle.date = this.pickUpDateControl.value),
                    this.recycleService.save(this.recycle).subscribe(e=>{
                        e.isPickup ? this.translate.get("CONFIRM_RECYCLING_PICKUP", {
                            pickupdate: e.pickupDate
                        }).subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        ) : this.translate.get("CONFIRM_RECYCLING_BOX").subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        ),
                        this.addressComponent.load(),
                        this.initRecycle(),
                        this.resetForm()
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                findAll() {
                    this.recycleService.find().subscribe(e=>{
                        this.recycles = e
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                resetForm() {
                    this.addressId = void 0,
                    this.recycleQuantityControl.setValue(""),
                    this.recycleQuantityControl.markAsPristine(),
                    this.recycleQuantityControl.markAsUntouched(),
                    this.pickUpDateControl.setValue(""),
                    this.pickUpDateControl.markAsPristine(),
                    this.pickUpDateControl.markAsUntouched(),
                    this.pickup.setValue(!1)
                }
                getMessage(e) {
                    this.addressId = e
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(ce),t.Y36(N),t.Y36(L),t.Y36(W),t.Y36(p.sK),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-recycle"]],
                viewQuery: function(e, n) {
                    if (1 & e && t.Gf(Va, 7),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.addressComponent = i.first)
                    }
                },
                decls: 41,
                vars: 16,
                consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], ["translate", ""], ["id", "recycle-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "mat-elevation-z0", 3, "addNewAddressDiv", "emitSelection"], ["addressComp", ""], ["appearance", "outline", 4, "ngIf"], [3, "formControl", 4, "ngIf"], ["type", "submit", "id", "recycleButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-paper-plane", "fa-lg"], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["translate", "", 1, "responsibility-header"], ["fxLayout", "row", "fxLayoutGap", "20px", 1, "mat-elevation-z0"], ["mat-card-image", "", 3, "src"], [1, "fill-remaining-space"], ["translate", "", 3, "translateParams"], ["appearance", "outline"], ["matInput", "", 3, "formControl", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "formControl"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_RECYCLE"),
                    t.qZA(),
                    t.TgZ(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label", 2),
                    t._uU(7, "LABEL_REQUESTOR"),
                    t.qZA(),
                    t._UZ(8, "input", 5),
                    t.qZA(),
                    t.TgZ(9, "mat-form-field", 4)(10, "mat-label", 2),
                    t._uU(11, "LABEL_QUANTITY"),
                    t.qZA(),
                    t._UZ(12, "input", 6),
                    t.ALo(13, "translate"),
                    t.YNc(14, Xa, 2, 0, "mat-error", 7),
                    t.YNc(15, ei, 2, 2, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(16, "app-address", 9, 10),
                    t.NdJ("emitSelection", function(r) {
                        return n.getMessage(r)
                    }),
                    t.qZA(),
                    t.YNc(18, ni, 8, 4, "mat-form-field", 11),
                    t.YNc(19, ai, 3, 4, "mat-checkbox", 12),
                    t.qZA(),
                    t.TgZ(20, "button", 13),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t._UZ(21, "i", 14),
                    t._uU(22),
                    t.ALo(23, "translate"),
                    t.qZA()(),
                    t.TgZ(24, "div", 15)(25, "div", 16)(26, "h3", 17),
                    t._uU(27, "SECTION_PRESS_JUICE_RESPONSIBLY"),
                    t.qZA(),
                    t.TgZ(28, "mat-card", 18),
                    t._UZ(29, "img", 19),
                    t.TgZ(30, "mat-card-content")(31, "div")(32, "small"),
                    t._uU(33, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                    t.qZA()()()(),
                    t.TgZ(34, "mat-card", 18),
                    t._UZ(35, "img", 19),
                    t.TgZ(36, "mat-card-content")(37, "div")(38, "small"),
                    t._uU(39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                    t.qZA()()()(),
                    t._UZ(40, "span", 20),
                    t.qZA()()()),
                    2 & e && (t.xp6(8),
                    t.Q6J("formControl", n.requestorControl),
                    t.xp6(4),
                    t.Q6J("formControl", n.recycleQuantityControl)("placeholder", t.lcZ(13, 12, "IN_LITERS_PLACEHOLDER")),
                    t.xp6(2),
                    t.Q6J("ngIf", n.recycleQuantityControl.invalid && n.recycleQuantityControl.errors.required),
                    t.xp6(1),
                    t.Q6J("ngIf", n.recycleQuantityControl.invalid && (n.recycleQuantityControl.errors.min || n.recycleQuantityControl.errors.max)),
                    t.xp6(1),
                    t.Q6J("addNewAddressDiv", !1),
                    t.xp6(2),
                    t.Q6J("ngIf", n.pickup.value && n.recycleQuantityControl.value > 100),
                    t.xp6(1),
                    t.Q6J("ngIf", n.recycleQuantityControl.value > 100),
                    t.xp6(1),
                    t.Q6J("disabled", void 0 === n.addressId || n.recycleQuantityControl.invalid || n.pickUpDateControl.invalid),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(23, 14, "BTN_SUBMIT"), " "),
                    t.xp6(7),
                    t.Q6J("src", n.topImage, t.LSH),
                    t.xp6(6),
                    t.Q6J("src", n.bottomImage, t.LSH))
                },
                dependencies: [T.O5, p.Pi, C.xw, C.SQ, C.Wh, C.yH, s.Fj, s.wV, s.JJ, s.oH, g.TO, g.KE, g.hX, g.R9, A.lW, x.a8, x.dn, x.G2, P.Nt, Ut.oG, _t.Mq, _t.hl, _t.nW, Ot, p.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:5px;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]
            }),
            o
        }
        )()
          , z = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Challenges"
                }
                find(e) {
                    return this.http.get(this.host + "/", {
                        params: e
                    }).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                repeatNotification(e) {
                    return this.http.get(this.hostServer + "/rest/repeat-notification", {
                        params: {
                            challenge: e
                        }
                    }).pipe((0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                continueCode() {
                    return this.http.get(this.hostServer + "/rest/continue-code").pipe((0,
                    _.U)(e=>e.continueCode), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                continueCodeFindIt() {
                    return this.http.get(this.hostServer + "/rest/continue-code-findIt").pipe((0,
                    _.U)(e=>e.continueCode), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                continueCodeFixIt() {
                    return this.http.get(this.hostServer + "/rest/continue-code-fixIt").pipe((0,
                    _.U)(e=>e.continueCode), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                restoreProgress(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code/apply/" + e, {}).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                restoreProgressFindIt(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code-findIt/apply/" + e, {}).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                restoreProgressFixIt(e) {
                    return this.http.put(this.hostServer + "/rest/continue-code-fixIt/apply/" + e, {}).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var de = d(9441)
          , ri = d(5254)
          , gt = d(1086);
        let si = (()=>{
            class o {
                constructor(e, n, i, r) {
                    this.cookieService = e,
                    this.challengeService = n,
                    this.snackBarHelperService = i,
                    this.snackBar = r,
                    this.VERSION = 1
                }
                save(e="owasp_juice_shop") {
                    const n = {
                        version: this.VERSION
                    };
                    n.scoreBoard = {
                        displayedDifficulties: localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : void 0,
                        showSolvedChallenges: localStorage.getItem("showSolvedChallenges") ? JSON.parse(String(localStorage.getItem("showSolvedChallenges"))) : void 0,
                        showDisabledChallenges: localStorage.getItem("showDisabledChallenges") ? JSON.parse(String(localStorage.getItem("showDisabledChallenges"))) : void 0,
                        showOnlyTutorialChallenges: localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : void 0,
                        displayedChallengeCategories: localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : void 0
                    },
                    n.banners = {
                        welcomeBannerStatus: this.cookieService.get("welcomebanner_status") ? this.cookieService.get("welcomebanner_status") : void 0,
                        cookieConsentStatus: this.cookieService.get("cookieconsent_status") ? this.cookieService.get("cookieconsent_status") : void 0
                    },
                    n.language = this.cookieService.get("language") ? this.cookieService.get("language") : void 0;
                    const i = this.challengeService.continueCode()
                      , r = this.challengeService.continueCodeFindIt()
                      , l = this.challengeService.continueCodeFixIt();
                    (0,
                    ht.D)([i, r, l]).subscribe(([u,f,b])=>{
                        n.continueCode = u,
                        n.continueCodeFindIt = f,
                        n.continueCodeFixIt = b;
                        const w = new Blob([JSON.stringify(n)],{
                            type: "text/plain;charset=utf-8"
                        });
                        (0,
                        de.saveAs)(w, `${e}-${(new Date).toISOString().split("T")[0]}.json`)
                    }
                    , ()=>{
                        console.log("Failed to retrieve continue code(s) for backup from server. Using cookie values as fallback."),
                        n.continueCode = this.cookieService.get("continueCode") ? this.cookieService.get("continueCode") : void 0,
                        n.continueCodeFindIt = this.cookieService.get("continueCodeFindIt") ? this.cookieService.get("continueCodeFindIt") : void 0,
                        n.continueCodeFixIt = this.cookieService.get("continueCodeFixIt") ? this.cookieService.get("continueCodeFixIt") : void 0;
                        const u = new Blob([JSON.stringify(n)],{
                            type: "text/plain;charset=utf-8"
                        });
                        (0,
                        de.saveAs)(u, `${e}-${(new Date).toISOString().split("T")[0]}.json`)
                    }
                    )
                }
                restore(e) {
                    return (0,
                    ri.D)(e.text().then(n=>{
                        var i, r, l, u, f, b, w;
                        const S = JSON.parse(n);
                        S.version === this.VERSION ? (this.restoreLocalStorage("displayedDifficulties", null === (i = S.scoreBoard) || void 0 === i ? void 0 : i.displayedDifficulties),
                        this.restoreLocalStorage("showSolvedChallenges", null === (r = S.scoreBoard) || void 0 === r ? void 0 : r.showSolvedChallenges),
                        this.restoreLocalStorage("showDisabledChallenges", null === (l = S.scoreBoard) || void 0 === l ? void 0 : l.showDisabledChallenges),
                        this.restoreLocalStorage("showOnlyTutorialChallenges", null === (u = S.scoreBoard) || void 0 === u ? void 0 : u.showOnlyTutorialChallenges),
                        this.restoreLocalStorage("displayedChallengeCategories", null === (f = S.scoreBoard) || void 0 === f ? void 0 : f.displayedChallengeCategories),
                        this.restoreCookie("welcomebanner_status", null === (b = S.banners) || void 0 === b ? void 0 : b.welcomeBannerStatus),
                        this.restoreCookie("cookieconsent_status", null === (w = S.banners) || void 0 === w ? void 0 : w.cookieConsentStatus),
                        this.restoreCookie("language", S.language),
                        this.restoreCookie("continueCodeFindIt", S.continueCodeFindIt),
                        this.restoreCookie("continueCodeFixIt", S.continueCodeFixIt),
                        this.restoreCookie("continueCode", S.continueCode),
                        this.snackBar.open("Backup has been restored from " + e.name, "Apply changes now", {
                            duration: 1e4
                        }).onAction().subscribe(()=>{
                            const et = S.continueCode ? this.challengeService.restoreProgress(encodeURIComponent(S.continueCode)) : (0,
                            gt.of)(!0)
                              , ot = S.continueCodeFindIt ? this.challengeService.restoreProgressFindIt(encodeURIComponent(S.continueCodeFindIt)) : (0,
                            gt.of)(!0)
                              , Yu = S.continueCodeFixIt ? this.challengeService.restoreProgressFixIt(encodeURIComponent(S.continueCodeFixIt)) : (0,
                            gt.of)(!0);
                            (0,
                            ht.D)([et, ot, Yu]).subscribe(()=>{
                                location.reload()
                            }
                            , Bu=>console.log(Bu))
                        }
                        )) : this.snackBarHelperService.open(`Version ${S.version} is incompatible with expected version ${this.VERSION}`, "errorBar")
                    }
                    ).catch(n=>{
                        this.snackBarHelperService.open(`Backup restore operation failed: ${n.message}`, "errorBar")
                    }
                    ))
                }
                restoreCookie(e, n) {
                    if (n) {
                        const i = new Date;
                        i.setFullYear(i.getFullYear() + 1),
                        this.cookieService.put(e, n, {
                            expires: i
                        })
                    } else
                        this.cookieService.remove(e)
                }
                restoreLocalStorage(e, n) {
                    n ? localStorage.setItem(e, JSON.stringify(n)) : localStorage.removeItem(e)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(q.N_),t.LFG(z),t.LFG(M),t.LFG(K.ux))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , pe = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/snippets"
                }
                get(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                challenges() {
                    return this.http.get(`${this.host}`).pipe((0,
                    _.U)(e=>e.challenges), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , li = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/snippets/fixes"
                }
                get(e) {
                    return this.http.get(this.host + `/${e}`).pipe((0,
                    _.U)(n=>n), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                check(e, n) {
                    return this.http.post(this.host, {
                        key: e,
                        selectedFix: n
                    }).pipe((0,
                    _.U)(i=>i), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , ci = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/snippets/verdict"
                }
                check(e, n) {
                    return this.http.post(this.host, {
                        key: e,
                        selectedLines: n
                    }).pipe((0,
                    _.U)(i=>i), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var ft = d(3848)
          , Pt = d(8225);
        function ui(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div", 5),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.selectLines(r.lineNumber))
                }),
                t._uU(1),
                t.qZA()
            }
            if (2 & o) {
                const e = a.$implicit;
                t.Q6J("id", "line" + e.lineNumber),
                t.xp6(1),
                t.Oqu(e.marked ? "\u2705" : "\u{1f532}")
            }
        }
        let di = (()=>{
            class o {
                constructor() {
                    this.code = "",
                    this.addLine = new t.vpe,
                    this.langs = ["javascript", "typescript", "json", "yaml"]
                }
                ngOnInit() {
                    this.lineMarkers = this.code.split("\n").map((e,n)=>({
                        lineNumber: n + 1,
                        marked: !1
                    }))
                }
                selectLines(e) {
                    const n = this.lineMarkers[e - 1];
                    n.marked = !n.marked;
                    const i = [];
                    for (const {marked: r, lineNumber: l} of this.lineMarkers)
                        r && i.push(l);
                    this.addLine.emit(i)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-code-area"]],
                inputs: {
                    code: "code",
                    vulnLines: "vulnLines"
                },
                outputs: {
                    addLine: "addLine"
                },
                decls: 6,
                vars: 4,
                consts: [["id", "code-area"], ["id", "code"], ["id", "emphasize"], ["class", "lineMarker", 3, "id", "click", 4, "ngFor", "ngForOf"], [3, "highlight", "lineNumbers", "languages"], [1, "lineMarker", 3, "id", "click"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "pre", 1)(2, "div", 2),
                    t.YNc(3, ui, 2, 2, "div", 3),
                    t._uU(4, "\n  "),
                    t.qZA(),
                    t._UZ(5, "code", 4),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Q6J("ngForOf", n.lineMarkers),
                    t.xp6(2),
                    t.Q6J("highlight", n.code)("lineNumbers", !0)("languages", n.langs))
                },
                dependencies: [T.sg, Pt.y$],
                styles: ["pre[_ngcontent-%COMP%]   code.hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:1em}code.hljs[_ngcontent-%COMP%]{padding:3px 5px}.hljs[_ngcontent-%COMP%]{background:#fff;color:#000}.hljs-comment[_ngcontent-%COMP%], .hljs-quote[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%]{color:green}.hljs-built_in[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-selector-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]{color:#00f}.hljs-addition[_ngcontent-%COMP%], .hljs-attribute[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-section[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-template-tag[_ngcontent-%COMP%], .hljs-template-variable[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%], .hljs-type[_ngcontent-%COMP%]{color:#a31515}.hljs-deletion[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%], .hljs-selector-attr[_ngcontent-%COMP%], .hljs-selector-pseudo[_ngcontent-%COMP%]{color:#2b91af}.hljs-doctag[_ngcontent-%COMP%]{color:gray}.hljs-attr[_ngcontent-%COMP%]{color:red}.hljs-bullet[_ngcontent-%COMP%], .hljs-link[_ngcontent-%COMP%], .hljs-symbol[_ngcontent-%COMP%]{color:#00b0e8}.hljs-emphasis[_ngcontent-%COMP%]{font-style:italic}.hljs-strong[_ngcontent-%COMP%]{font-weight:700}#emphasize[_ngcontent-%COMP%]{float:left;padding:1em .5em}#code[_ngcontent-%COMP%]{width:60em}.lineMarker[_ngcontent-%COMP%]{cursor:pointer}"]
            }),
            o
        }
        )();
        var me = d(5244);
        const pi = ["codeComponent"];
        function mi(o, a) {
            if (1 & o && (t.TgZ(0, "option", 5),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.index
                  , n = t.oxw();
                t.Q6J("value", e)("selected", n.selectedFix === e),
                t.xp6(1),
                t.hij("Fix ", e + 1, "")
            }
        }
        function hi(o, a) {
            if (1 & o && (t.TgZ(0, "div"),
            t._UZ(1, "td-ngx-text-diff", 8, 9),
            t.qZA()),
            2 & o) {
                const e = t.oxw().$implicit
                  , n = t.oxw();
                t.xp6(1),
                t.Q6J("left", n.snippet)("right", null == e ? null : e.fix)("format", n.format)
            }
        }
        function _i(o, a) {
            if (1 & o && (t.TgZ(0, "div", 6),
            t.YNc(1, hi, 3, 3, "div", 7),
            t.qZA()),
            2 & o) {
                const e = a.index
                  , n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", n.selectedFix === e)
            }
        }
        let gi = (()=>{
            class o {
                constructor(e, n) {
                    this.cookieService = e,
                    this.differs = n,
                    this.snippet = "",
                    this.fixes = [],
                    this.format = "SideBySide",
                    this.emitFix = new t.vpe,
                    this.selectedFix = 0,
                    this.randomFixes = [],
                    this.cookieService = e,
                    this.differ = this.differs.find({}).create()
                }
                shuffle() {
                    let e = 0;
                    for (const i of this.fixes)
                        this.randomFixes.push({
                            fix: i,
                            index: e
                        }),
                        e++;
                    let n = 100 * Math.random();
                    for (; n > 0; ) {
                        const i = this.randomFixes[this.randomFixes.length - 1];
                        for (let r = this.randomFixes.length - 1; r > 0; r--)
                            this.randomFixes[r] = this.randomFixes[r - 1];
                        this.randomFixes[0] = i,
                        n--
                    }
                }
                ngOnInit() {
                    this.shuffle(),
                    this.cookieService.hasKey("code-fixes-component-format") ? this.format = this.cookieService.get("code-fixes-component-format") : (this.format = "LineByLine",
                    this.cookieService.put("code-fixes-component-format", "LineByLine")),
                    this.initialEmit()
                }
                initialEmit() {
                    void 0 !== this.randomFixes[0] && this.emitFix.emit(this.randomFixes[0].index)
                }
                changeFix(e) {
                    this.selectedFix = parseInt(e.target.value, 10),
                    this.emitFix.emit(this.randomFixes[this.selectedFix].index)
                }
                ngDoCheck() {
                    try {
                        const e = this.differ.diff({
                            "diff-format": this.codeComponent.format
                        });
                        e && e.forEachChangedItem(n=>{
                            this.format = n.currentValue,
                            this.cookieService.put("code-fixes-component-format", this.format)
                        }
                        )
                    } catch {}
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(q.N_),t.Y36(t.aQg))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-code-fixes"]],
                viewQuery: function(e, n) {
                    if (1 & e && t.Gf(pi, 5),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.codeComponent = i.first)
                    }
                },
                inputs: {
                    snippet: "snippet",
                    fixes: "fixes",
                    format: "format"
                },
                outputs: {
                    emitFix: "changeFix"
                },
                decls: 9,
                vars: 2,
                consts: [["appearance", "fill"], ["translate", ""], ["matNativeControl", "", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["id", "code", 4, "ngFor", "ngForOf"], [3, "value", "selected"], ["id", "code"], [4, "ngIf"], [3, "left", "right", "format"], ["codeComponent", ""]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div"),
                    t._UZ(1, "br"),
                    t.TgZ(2, "mat-form-field", 0)(3, "mat-label", 1),
                    t._uU(4, "LABEL_CORRECT_FIX"),
                    t.qZA(),
                    t.TgZ(5, "select", 2),
                    t.NdJ("change", function(r) {
                        return n.changeFix(r)
                    }),
                    t.YNc(6, mi, 2, 3, "option", 3),
                    t.qZA()(),
                    t.YNc(7, _i, 2, 1, "div", 4),
                    t._UZ(8, "br"),
                    t.qZA()),
                    2 & e && (t.xp6(6),
                    t.Q6J("ngForOf", n.randomFixes),
                    t.xp6(1),
                    t.Q6J("ngForOf", n.randomFixes))
                },
                dependencies: [T.sg, T.O5, p.Pi, s.YN, s.Kr, g.KE, g.hX, P.Nt, me.zB],
                styles: ["#code[_ngcontent-%COMP%]{width:63em}"]
            }),
            o
        }
        )();
        function fi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "app-code-area", 21),
                t.NdJ("addLine", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.addLine(i))
                }),
                t.qZA()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("code", null == e.snippet ? null : e.snippet.snippet)("vulnLines", null == e.snippet ? null : e.snippet.vulnLines)
            }
        }
        function Ci(o, a) {
            1 & o && (t.TgZ(0, "pre"),
            t._uU(1, "            "),
            t.TgZ(2, "code", 22),
            t._uU(3, "LOADING_CODE_SNIPPET"),
            t.qZA(),
            t._uU(4, "\n          "),
            t.qZA())
        }
        function vi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-card", 23),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", e.hint, " ")
            }
        }
        function Ti(o, a) {
            if (1 & o && (t._uU(0),
            t.ALo(1, "translate"),
            t.TgZ(2, "mat-icon", 24),
            t._uU(3),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.hij(" ", t.lcZ(1, 3, "TAB_FIX_IT"), " "),
                t.xp6(2),
                t.Q6J("color", e.lockColor()),
                t.xp6(1),
                t.Oqu(e.lockIcon())
            }
        }
        function bi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "app-code-fixes", 25),
                t.NdJ("changeFix", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.setFix(i))
                }),
                t.qZA()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("snippet", null == e.snippet ? null : e.snippet.snippet)("fixes", e.fixes)
            }
        }
        function xi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-card"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Tol("warn" === e.resultColor() ? "warn-notification" : "accent-notification"),
                t.xp6(1),
                t.hij(" ", e.explanation, " ")
            }
        }
        function Ai(o, a) {
            if (1 & o && (t.TgZ(0, "a", 26)(1, "button", 27)(2, "mat-icon", 28),
            t._uU(3, "thumb_up"),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.dialogData.name + "&entry.435235279=Coding+Challenge&entry.1734944650=Yes", t.LSH)
            }
        }
        function Zi(o, a) {
            if (1 & o && (t.TgZ(0, "a", 26)(1, "button", 27)(2, "mat-icon", 29),
            t._uU(3, "thumb_down"),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.dialogData.name + "&entry.435235279=Coding+Challenge&entry.1734944650=No", t.LSH)
            }
        }
        var E = (()=>{
            return (o = E || (E = {}))[o.Undecided = 0] = "Undecided",
            o[o.Right = 1] = "Right",
            o[o.Wrong = 2] = "Wrong",
            E;
            var o
        }
        )();
        let wi = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f) {
                    this.dialogData = e,
                    this.configurationService = n,
                    this.codeSnippetService = i,
                    this.vulnLinesService = r,
                    this.codeFixesService = l,
                    this.challengeService = u,
                    this.cookieService = f,
                    this.snippet = null,
                    this.fixes = null,
                    this.tab = new s.p4(0),
                    this.lock = E.Undecided,
                    this.result = E.Undecided,
                    this.hint = null,
                    this.explanation = null,
                    this.solved = {
                        findIt: !1,
                        fixIt: !1
                    },
                    this.showFeedbackButtons = !0,
                    this.addLine = b=>{
                        this.selectedLines = b
                    }
                    ,
                    this.setFix = b=>{
                        this.selectedFix = b,
                        this.explanation = null
                    }
                    ,
                    this.toggleTab = b=>{
                        this.tab.setValue(b),
                        this.result = E.Undecided,
                        0 === b && this.solved.findIt && (this.result = E.Right),
                        1 === b && this.solved.fixIt && (this.result = E.Right)
                    }
                    ,
                    this.checkFix = ()=>{
                        this.codeFixesService.check(this.dialogData.key, this.selectedFix).subscribe(b=>{
                            this.setVerdict(b.verdict),
                            this.explanation = b.explanation
                        }
                        )
                    }
                    ,
                    this.checkLines = ()=>{
                        this.vulnLinesService.check(this.dialogData.key, this.selectedLines).subscribe(b=>{
                            this.setVerdict(b.verdict),
                            this.hint = b.hint
                        }
                        )
                    }
                    ,
                    this.setVerdict = b=>{
                        this.result !== E.Right && (b ? (0 === this.tab.value ? (this.solved.findIt = !0,
                        this.challengeService.continueCodeFindIt().subscribe(w=>{
                            if (!w)
                                throw new Error("Received invalid continue code from the server!");
                            const S = new Date;
                            S.setFullYear(S.getFullYear() + 1),
                            this.cookieService.put("continueCodeFindIt", w, {
                                expires: S
                            })
                        }
                        , w=>console.log(w))) : (this.solved.fixIt = !0,
                        this.challengeService.continueCodeFixIt().subscribe(w=>{
                            if (!w)
                                throw new Error("Received invalid continue code from the server!");
                            const S = new Date;
                            S.setFullYear(S.getFullYear() + 1),
                            this.cookieService.put("continueCodeFixIt", w, {
                                expires: S
                            })
                        }
                        , w=>console.log(w))),
                        this.result = E.Right,
                        this.lock = E.Right,
                        d.e(103).then(d.bind(d, 8103)).then(w=>{
                            w.shootConfetti()
                        }
                        ).then(()=>{
                            0 === this.tab.value && null !== this.fixes && this.toggleTab(1)
                        }
                        )) : this.result = E.Wrong)
                    }
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        this.showFeedbackButtons = e.challenges.showFeedbackButtons
                    }
                    , e=>console.log(e)),
                    this.codeSnippetService.get(this.dialogData.key).subscribe(e=>{
                        this.snippet = e,
                        this.solved.findIt = !1,
                        this.dialogData.codingChallengeStatus >= 1 && (this.result = E.Right,
                        this.lock = E.Right,
                        this.solved.findIt = !0)
                    }
                    , e=>{
                        this.snippet = {
                            snippet: e.error
                        }
                    }
                    ),
                    this.codeFixesService.get(this.dialogData.key).subscribe(e=>{
                        this.fixes = e.fixes,
                        this.solved.fixIt = this.dialogData.codingChallengeStatus >= 2
                    }
                    , ()=>{
                        this.fixes = null
                    }
                    )
                }
                lockIcon() {
                    if (null === this.fixes)
                        return "lock";
                    switch (this.lock) {
                    case E.Right:
                        return "lock_open";
                    case E.Wrong:
                    case E.Undecided:
                        return "lock"
                    }
                }
                lockColor() {
                    switch (this.lockIcon()) {
                    case "lock_open":
                        return "accent";
                    case "lock":
                        return "warn"
                    }
                }
                resultIcon() {
                    switch (this.result) {
                    case E.Right:
                        return "check";
                    case E.Wrong:
                        return "clear";
                    default:
                        return "send"
                    }
                }
                resultColor() {
                    switch (this.resultIcon()) {
                    case "check":
                        return "accent";
                    case "clear":
                        return "warn"
                    }
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.WI),t.Y36(L),t.Y36(pe),t.Y36(ci),t.Y36(li),t.Y36(z),t.Y36(q.N_))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-user-details"]],
                decls: 51,
                vars: 36,
                consts: [["id", "code-snippet", 1, "mat-typography"], ["mat-stretch-tabs", "", 3, "selectedIndex", "selectedIndexChange"], [3, "label"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [3, "code", "vulnLines", "addLine", 4, "ngIf"], [4, "ngIf"], ["class", "primary-notification", 4, "ngIf"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", "id", "findItCloseButton", 1, "close-dialog", "buttons", 3, "mat-dialog-close"], [1, "material-icons"], ["mat-stroked-button", "", "id", "findItSubmitButton", 3, "disabled", "click"], [3, "color"], [3, "disabled"], ["mat-tab-label", ""], [3, "snippet", "fixes", "changeFix", 4, "ngIf"], [3, "class", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", "id", "fixItCloseButton", 1, "close-dialog", "buttons", 3, "mat-dialog-close"], ["mat-stroked-button", "", "id", "fixItSubmitButton", 3, "disabled", "click"], [3, "code", "vulnLines", "addLine"], ["translate", ""], [1, "primary-notification"], [1, "materaial-icons-outlined", 3, "color"], [3, "snippet", "fixes", "changeFix"], ["target", "_blank", 3, "href"], ["mat-icon-button", ""], ["color", "accent"], ["color", "warn"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-dialog-content", 0)(1, "header")(2, "h1"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t.TgZ(5, "mat-tab-group", 1),
                    t.NdJ("selectedIndexChange", function(r) {
                        return n.toggleTab(r)
                    }),
                    t.TgZ(6, "mat-tab", 2),
                    t.ALo(7, "translate"),
                    t.TgZ(8, "div", 3)(9, "div", 4),
                    t.YNc(10, fi, 1, 2, "app-code-area", 5),
                    t.YNc(11, Ci, 5, 0, "pre", 6),
                    t.qZA(),
                    t.YNc(12, vi, 2, 1, "mat-card", 7),
                    t.qZA(),
                    t.TgZ(13, "mat-dialog-actions", 8),
                    t._UZ(14, "button", 9),
                    t.TgZ(15, "button", 10)(16, "i", 11),
                    t._uU(17, " close "),
                    t.qZA(),
                    t.TgZ(18, "span"),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA()(),
                    t.TgZ(21, "button", 12),
                    t.NdJ("click", function() {
                        return n.checkLines()
                    }),
                    t.TgZ(22, "span"),
                    t._uU(23),
                    t.ALo(24, "translate"),
                    t.qZA(),
                    t.TgZ(25, "mat-icon", 13),
                    t._uU(26),
                    t.qZA()(),
                    t._UZ(27, "br"),
                    t.qZA()(),
                    t.TgZ(28, "mat-tab", 14),
                    t.YNc(29, Ti, 4, 5, "ng-template", 15),
                    t.TgZ(30, "div", 3)(31, "div", 4),
                    t.YNc(32, bi, 1, 2, "app-code-fixes", 16),
                    t.qZA(),
                    t.YNc(33, xi, 2, 3, "mat-card", 17),
                    t.qZA(),
                    t.TgZ(34, "mat-dialog-actions", 8),
                    t._UZ(35, "button", 9),
                    t.YNc(36, Ai, 4, 1, "a", 18),
                    t.YNc(37, Zi, 4, 1, "a", 18),
                    t.TgZ(38, "button", 19)(39, "i", 11),
                    t._uU(40, " close "),
                    t.qZA(),
                    t.TgZ(41, "span"),
                    t._uU(42),
                    t.ALo(43, "translate"),
                    t.qZA()(),
                    t.TgZ(44, "button", 20),
                    t.NdJ("click", function() {
                        return n.checkFix()
                    }),
                    t.TgZ(45, "span"),
                    t._uU(46),
                    t.ALo(47, "translate"),
                    t.qZA(),
                    t.TgZ(48, "mat-icon", 13),
                    t._uU(49),
                    t.qZA()(),
                    t._UZ(50, "br"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(3),
                    t.AsE("", t.lcZ(4, 24, "TITLE_CODING_CHALLENGE"), ": ", n.dialogData.name, ""),
                    t.xp6(2),
                    t.Q6J("selectedIndex", n.tab.value),
                    t.xp6(1),
                    t.Q6J("label", t.lcZ(7, 26, "TAB_FIND_IT")),
                    t.xp6(4),
                    t.Q6J("ngIf", null !== n.snippet),
                    t.xp6(1),
                    t.Q6J("ngIf", null === n.snippet),
                    t.xp6(1),
                    t.Q6J("ngIf", n.hint),
                    t.xp6(3),
                    t.Q6J("mat-dialog-close", n.solved),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(20, 28, "BTN_CLOSE"), ""),
                    t.xp6(2),
                    t.Q6J("disabled", n.solved.findIt),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(24, 30, "BTN_SUBMIT"), ""),
                    t.xp6(2),
                    t.Q6J("color", n.resultColor()),
                    t.xp6(1),
                    t.hij(" ", n.resultIcon(), " "),
                    t.xp6(2),
                    t.Q6J("disabled", "lock" === n.lockIcon()),
                    t.xp6(4),
                    t.Q6J("ngIf", null !== n.snippet && null !== n.fixes),
                    t.xp6(1),
                    t.Q6J("ngIf", n.explanation),
                    t.xp6(3),
                    t.Q6J("ngIf", n.showFeedbackButtons && n.solved.fixIt),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showFeedbackButtons && n.solved.fixIt),
                    t.xp6(1),
                    t.Q6J("mat-dialog-close", n.solved),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(43, 32, "BTN_CLOSE"), ""),
                    t.xp6(2),
                    t.Q6J("disabled", n.solved.fixIt),
                    t.xp6(2),
                    t.hij(" ", t.lcZ(47, 34, "BTN_SUBMIT"), ""),
                    t.xp6(2),
                    t.Q6J("color", n.resultColor()),
                    t.xp6(1),
                    t.hij(" ", n.resultIcon(), " "))
                },
                dependencies: [T.O5, p.Pi, C.xw, C.SQ, O.Hw, A.lW, x.a8, U.ZT, U.xY, U.H8, ft.SP, ft.uD, ft.uX, di, gi, p.X$],
                styles: [".stretched-tabs[_ngcontent-%COMP%]{max-width:600px}#code-snippet[_ngcontent-%COMP%]{width:65em}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
            }),
            o
        }
        )();
        var Lt = d(8423)
          , he = d(3162)
          , _e = d(811)
          , ge = d(2673)
          , Nt = d(7331);
        function Si(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 3),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.repeatNotification())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 4),
                t._uU(3, "flag"),
                t.qZA(),
                t.TgZ(4, "mat-icon", 4),
                t._uU(5, "check_box"),
                t.qZA(),
                t.TgZ(6, "span", 5),
                t._uU(7),
                t.ALo(8, "translate"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".solved")("matTooltip", e.allowRepeatNotifications ? t.lcZ(1, 5, "NOTIFICATION_RESEND_INSTRUCTIONS") : null),
                t.xp6(2),
                t.Q6J("hidden", !e.allowRepeatNotifications),
                t.xp6(2),
                t.Q6J("hidden", e.allowRepeatNotifications),
                t.xp6(3),
                t.Oqu(t.lcZ(8, 7, "STATUS_SOLVED"))
            }
        }
        function yi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.openHint())
                }),
                t.TgZ(1, "mat-icon", 4),
                t._uU(2, "book"),
                t.qZA(),
                t.TgZ(3, "mat-icon", 4),
                t._uU(4, "check_box_outline_blank"),
                t.qZA(),
                t.TgZ(5, "span", 5),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".notSolved")("matTooltip", e.showChallengeHints ? e.challenge.hint : null),
                t.xp6(1),
                t.Q6J("hidden", !e.showChallengeHints || !e.challenge.hintUrl),
                t.xp6(2),
                t.Q6J("hidden", e.showChallengeHints && e.challenge.hintUrl),
                t.xp6(3),
                t.Oqu(t.lcZ(7, 5, "STATUS_UNSOLVED"))
            }
        }
        function Ii(o, a) {
            if (1 & o && t._UZ(0, "i"),
            2 & o) {
                const e = t.oxw(2);
                t.Tol("icon-" + (null == e.challenge.disabledEnv ? null : e.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function Ui(o, a) {
            if (1 & o && t._UZ(0, "i"),
            2 & o) {
                const e = t.oxw(2);
                t.Tol("fab fa-" + (null == e.challenge.disabledEnv ? null : e.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function ki(o, a) {
            if (1 & o && (t.TgZ(0, "button", 7)(1, "span"),
            t.YNc(2, Ii, 1, 3, "i", 8),
            t.YNc(3, Ui, 1, 3, "i", 8),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("id", e.challenge.name + ".unavailable")("matTooltip", e.challenge.hint),
                t.xp6(2),
                t.Q6J("ngIf", "Windows" !== e.challenge.disabledEnv),
                t.xp6(1),
                t.Q6J("ngIf", "Windows" === e.challenge.disabledEnv),
                t.xp6(1),
                t.hij(" ", t.lcZ(5, 5, "STATUS_UNAVAILABLE"), " ")
            }
        }
        v.vI.add(D.ts2),
        v.vz.watch();
        let Oi = (()=>{
            class o {
                constructor(e, n) {
                    this.challengeService = e,
                    this.windowRefService = n,
                    this.challenge = {},
                    this.allowRepeatNotifications = !1,
                    this.showChallengeHints = !0
                }
                repeatNotification() {
                    this.allowRepeatNotifications && this.challengeService.repeatNotification(encodeURIComponent(this.challenge.name)).subscribe(()=>{
                        this.windowRefService.nativeWindow.scrollTo(0, 0)
                    }
                    , e=>console.log(e))
                }
                openHint() {
                    this.showChallengeHints && this.challenge.hintUrl && this.windowRefService.nativeWindow.open(this.challenge.hintUrl, "_blank")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(z),t.Y36(It))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-challenge-status-badge"]],
                inputs: {
                    challenge: "challenge",
                    allowRepeatNotifications: "allowRepeatNotifications",
                    showChallengeHints: "showChallengeHints"
                },
                decls: 3,
                vars: 3,
                consts: [["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], [3, "hidden"], ["fxShow", "", "fxHide.lt-lg", ""], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip"], [3, "class", 4, "ngIf"]],
                template: function(e, n) {
                    1 & e && (t.YNc(0, Si, 9, 9, "button", 0),
                    t.YNc(1, yi, 8, 7, "button", 1),
                    t.YNc(2, ki, 6, 7, "button", 2)),
                    2 & e && (t.Q6J("ngIf", !n.challenge.disabledEnv && n.challenge.solved),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.challenge.disabledEnv && !n.challenge.solved),
                    t.xp6(1),
                    t.Q6J("ngIf", n.challenge.disabledEnv))
                },
                dependencies: [T.O5, G.b8, O.Hw, A.lW, F.gM, p.X$]
            }),
            o
        }
        )();
        function Pi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-card")(1, "mat-card-title"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.TgZ(4, "small", 3),
            t._uU(5),
            t.qZA()(),
            t._UZ(6, "mat-progress-bar", 4),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(2),
                t.hij("", t.lcZ(3, 4, "TITLE_CODING_SCORE"), " "),
                t.xp6(3),
                t.hij("", e.percentCodingChallengesSolved, "%"),
                t.xp6(1),
                t.Q6J("color", "accent")("value", e.percentCodingChallengesSolved)
            }
        }
        const lt = function(o) {
            return {
                num: o
            }
        }
          , Li = function(o) {
            return {
                tier: o
            }
        };
        function Ni(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 9),
                t.NdJ("change", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.toggleDifficulty(r))
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t.TgZ(3, "label")(4, "span", 26),
                t.O4$(),
                t.TgZ(5, "svg", 27)(6, "linearGradient", 28),
                t._UZ(7, "stop", 29)(8, "stop", 30),
                t.qZA(),
                t._UZ(9, "path", 31),
                t.qZA(),
                t.kcU(),
                t.TgZ(10, "span", 32),
                t._uU(11),
                t.qZA(),
                t.TgZ(12, "span"),
                t._uU(13),
                t.qZA()()()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.Q6J("checked", n.displayedDifficulties.includes(e))("disabled", n.restrictToTutorialsFirst && e > n.tutorialsTier)("matTooltip", n.restrictToTutorialsFirst && !n.allTutorialsCompleted && e > n.tutorialsTier ? n.isLastTutorialsTier ? t.xi3(1, 13, "INFO_FULL_CHALLENGE_MODE", t.VKq(19, lt, n.challenges.length)) : t.xi3(2, 16, "INFO_NEXT_TUTORIAL_TIER", t.VKq(21, Li, "\u2605".repeat(n.tutorialsTier))) : ""),
                t.xp6(5),
                t.Udp("fill", "url(#" + e + ")"),
                t.xp6(1),
                t.Q6J("id", e),
                t.xp6(1),
                t.uIk("offset", n.challenges ? n.offsetValue[e - 1] : "100%"),
                t.xp6(1),
                t.uIk("offset", n.challenges ? n.offsetValue[e - 1] : "100%"),
                t.xp6(1),
                t.uIk("fill", "inherit"),
                t.xp6(2),
                t.Oqu(e),
                t.xp6(1),
                t.Tol("fa-layers-counter " + (n.solvedChallengesOfDifficulty[e - 1].length === n.totalChallengesOfDifficulty[e - 1].length ? "accent-notification" : 0 === n.solvedChallengesOfDifficulty[e - 1].length ? "warn-notification" : "primary-notification")),
                t.xp6(1),
                t.hij(" ", n.solvedChallengesOfDifficulty[e - 1].length + "/" + n.totalChallengesOfDifficulty[e - 1].length, " ")
            }
        }
        function Ei(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 33),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.toggleShowOnlyTutorialChallenges())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA(),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("checked", e.showOnlyTutorialChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(9, lt, e.challenges.length)) : ""),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 7, "BTN_SHOW_ONLY_TUTORIALS"), " ")
            }
        }
        function qi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 9),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.toggleShowDisabledChallenges())
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "i", 34),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()
            }
            if (2 & o) {
                const e = t.oxw();
                t.Q6J("checked", e.showDisabledChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(9, lt, e.challenges.length)) : ""),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 7, "BTN_SHOW_UNAVAILABLE"), " ")
            }
        }
        function Mi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 35),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.saveBackup())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " save_alt "),
                t.qZA()()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "SAVE_BACKUP_TOOLTIP"))
        }
        function Di(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 36),
                t.NdJ("click", function() {
                    t.CHM(e),
                    t.oxw();
                    const i = t.MAs(26);
                    return t.KtG(i.click())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " settings_backup_restore "),
                t.qZA()()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "RESTORE_BACKUP_TOOLTIP"))
        }
        const Fi = function(o, a) {
            return {
                num: o,
                env: a
            }
        };
        function Ri(o, a) {
            if (1 & o && (t._UZ(0, "div", 37),
            t.ALo(1, "translate")),
            2 & o) {
                const e = t.oxw();
                t.Q6J("innerHTML", t.xi3(1, 1, "INFO_DISABLED_CHALLENGES", t.WLB(4, Fi, e.numDisabledChallenges, e.disabledEnv)), t.oJD)
            }
        }
        function Yi(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-button-toggle", 38),
                t.NdJ("change", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.toggleShowChallengeCategory(r))
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.Q6J("checked", n.displayedChallengeCategories.includes(e))("disabled", n.restrictToTutorialsFirst && !n.allTutorialsCompleted)("matTooltip", n.restrictToTutorialsFirst && !n.allTutorialsCompleted ? t.xi3(1, 4, "INFO_FULL_CHALLENGE_MODE", t.VKq(11, lt, n.challenges.length)) : t.lcZ(2, 7, "CATEGORY_" + (null == e ? null : e.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 9, "CATEGORY_" + (null == e ? null : e.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function Bi(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 60),
            t._uU(1, "LABEL_NAME"),
            t.qZA())
        }
        function Ji(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 61),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.Q6J("id", e.name),
                t.xp6(1),
                t.hij(" ", e.name, " ")
            }
        }
        function Qi(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 62),
            t._uU(1, "LABEL_DIFFICULTY"),
            t.qZA())
        }
        function Hi(o, a) {
            1 & o && (t.TgZ(0, "mat-icon"),
            t._uU(1, " star_rate "),
            t.qZA())
        }
        function Gi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 63),
            t.YNc(1, Hi, 2, 0, "mat-icon", 64),
            t.qZA()),
            2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngForOf", n.times(e.difficulty))
            }
        }
        function ji(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 65),
            t._uU(1, "LABEL_DESCRIPTION "),
            t.qZA())
        }
        function zi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 66),
            t._UZ(1, "div", 67),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("innerHTML", e.description, t.oJD)
            }
        }
        function Ki(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 68),
            t._uU(1, "LABEL_CATEGORY"),
            t.qZA())
        }
        function Wi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 69),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 1, "CATEGORY_" + (null == e.category ? null : e.category.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function $i(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 70),
            t._uU(1, "LABEL_TAGS"),
            t.qZA())
        }
        function Vi(o, a) {
            if (1 & o && (t.TgZ(0, "mat-chip-list")(1, "mat-chip", 72),
            t.ALo(2, "translate"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(2, 2, "TAG_" + (null == e ? null : e.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")),
                t.xp6(2),
                t.hij(" ", t.lcZ(4, 4, "TAG_" + (null == e ? null : e.toUpperCase().split(" ").join("_"))), " ")
            }
        }
        function Xi(o, a) {
            if (1 & o && (t.TgZ(0, "span"),
            t.YNc(1, Vi, 5, 6, "mat-chip-list", 64),
            t.qZA()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("ngForOf", e.tags.split(",").sort())
            }
        }
        function tr(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 71),
            t.YNc(1, Xi, 2, 1, "span", 5),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.tags)
            }
        }
        function er(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 60),
            t._uU(1, "LABEL_STATUS"),
            t.qZA())
        }
        function or(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 79),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.startHackingInstructor(i.name))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA()()
            }
            2 & o && t.Q6J("matTooltip", t.lcZ(1, 1, "INFO_HACKING_INSTRUCTOR"))
        }
        function nr(o, a) {
            if (1 & o && (t.TgZ(0, "a", 80)(1, "button", 81),
            t.ALo(2, "translate"),
            t.TgZ(3, "mat-icon"),
            t._uU(4, " policy "),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.Q6J("href", e.mitigationUrl, t.LSH),
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(2, 2, "INFO_VULNERABILITY_MITIGATION_LINK"))
            }
        }
        function ar(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 82),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.showCodeSnippet(i.key, i.name, i.codingChallengeStatus))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 83),
                t._uU(3, " code "),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw().$implicit
                  , n = t.oxw(2);
                t.Q6J("disabled", "solved" === n.codingChallengesEnabled && !e.solved)("matTooltip", t.lcZ(1, 5, "LAUNCH_CODING_CHALLENGE"))("color", n.generateColor(e))("id", e.name + ".codingChallengeButton"),
                t.xp6(2),
                t.Q6J("matBadge", n.generateBadge(e))
            }
        }
        function ir(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 84),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(3);
                    return t.KtG(i.startHackingInstructor("Coding Challenges"))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon", 85),
                t._uU(3, " school "),
                t.qZA()()
            }
            2 & o && t.Q6J("matTooltip", t.lcZ(1, 1, "INFO_HACKING_INSTRUCTOR"))
        }
        function rr(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell"),
            t._UZ(1, "app-challenge-status-badge", 73),
            t.YNc(2, or, 4, 3, "button", 74),
            t.YNc(3, nr, 5, 4, "a", 75),
            t.TgZ(4, "div", 76),
            t.ALo(5, "translate"),
            t.YNc(6, ar, 4, 7, "button", 77),
            t.qZA(),
            t.YNc(7, ir, 4, 3, "button", 78),
            t.qZA()),
            2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(1),
                t.Q6J("challenge", e)("allowRepeatNotifications", n.allowRepeatNotifications)("showChallengeHints", n.showChallengeHints),
                t.xp6(1),
                t.Q6J("ngIf", n.showHackingInstructor && !e.solved && !e.disabledEnv && e.hasTutorial),
                t.xp6(1),
                t.Q6J("ngIf", n.showVulnerabilityMitigations && e.solved && e.mitigationUrl),
                t.xp6(1),
                t.Q6J("matTooltip", t.lcZ(5, 9, "SOLVE_HACKING_CHALLENGE"))("matTooltipDisabled", !e.hasSnippet || "solved" === n.codingChallengesEnabled && e.solved || "always" === n.codingChallengesEnabled),
                t.xp6(2),
                t.Q6J("ngIf", e.hasSnippet && "never" !== n.codingChallengesEnabled),
                t.xp6(1),
                t.Q6J("ngIf", "scoreBoardChallenge" === e.key && n.showHackingInstructor && e.solved && "never" !== n.codingChallengesEnabled && e.codingChallengeStatus < 1)
            }
        }
        function sr(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 89),
            t._uU(1, "LABEL_FEEDBACK"),
            t.qZA())
        }
        function lr(o, a) {
            if (1 & o && (t.TgZ(0, "a", 80)(1, "button", 91)(2, "mat-icon", 92),
            t._uU(3, "thumb_up"),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.name + "&entry.435235279=Hacking+Challenge&entry.1734944650=Yes", t.LSH)
            }
        }
        function cr(o, a) {
            if (1 & o && (t.TgZ(0, "a", 80)(1, "button", 91)(2, "mat-icon", 93),
            t._uU(3, "thumb_down"),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw().$implicit;
                t.Q6J("href", "https://docs.google.com/forms/d/e/1FAIpQLSdaNEuz0dzFA2sexCa0AJ4QOb2OYdEL04eQOLFD2Y4T-BW6ag/viewform?usp=pp_url&entry.384948954=" + e.name + "&entry.435235279=Hacking+Challenge&entry.1734944650=No", t.LSH)
            }
        }
        function ur(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 90),
            t.YNc(1, lr, 4, 1, "a", 75),
            t.YNc(2, cr, 4, 1, "a", 75),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.solved),
                t.xp6(1),
                t.Q6J("ngIf", e.solved)
            }
        }
        function dr(o, a) {
            1 & o && (t.ynx(0, 86),
            t.YNc(1, sr, 2, 0, "mat-header-cell", 87),
            t.YNc(2, ur, 3, 2, "mat-cell", 88),
            t.BQk())
        }
        function pr(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function mr(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function hr(o, a) {
            if (1 & o && (t.TgZ(0, "mat-table", 39),
            t.ynx(1, 40),
            t.YNc(2, Bi, 2, 0, "mat-header-cell", 41),
            t.YNc(3, Ji, 2, 2, "mat-cell", 42),
            t.BQk(),
            t.ynx(4, 43),
            t.YNc(5, Qi, 2, 0, "mat-header-cell", 44),
            t.YNc(6, Gi, 2, 1, "mat-cell", 45),
            t.BQk(),
            t.ynx(7, 46),
            t.YNc(8, ji, 2, 0, "mat-header-cell", 47),
            t.YNc(9, zi, 2, 1, "mat-cell", 48),
            t.BQk(),
            t.ynx(10, 49),
            t.YNc(11, Ki, 2, 0, "mat-header-cell", 50),
            t.YNc(12, Wi, 3, 3, "mat-cell", 51),
            t.BQk(),
            t.ynx(13, 52),
            t.YNc(14, $i, 2, 0, "mat-header-cell", 53),
            t.YNc(15, tr, 2, 1, "mat-cell", 54),
            t.BQk(),
            t.ynx(16, 55),
            t.YNc(17, er, 2, 0, "mat-header-cell", 41),
            t.YNc(18, rr, 8, 11, "mat-cell", 56),
            t.BQk(),
            t.YNc(19, dr, 3, 0, "ng-container", 57),
            t.YNc(20, pr, 1, 0, "mat-header-row", 58),
            t.YNc(21, mr, 1, 0, "mat-row", 59),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("dataSource", e.filterToDataSource(e.challenges))("trackBy", e.trackById),
                t.xp6(19),
                t.Q6J("ngIf", e.showFeedbackButtons),
                t.xp6(1),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function _r(o, a) {
            1 & o && (t._UZ(0, "mat-card", 98),
            t.ALo(1, "translate")),
            2 & o && t.Q6J("innerHTML", t.lcZ(1, 1, "CALL_FOR_CONTRIBUTIONS"), t.oJD)
        }
        const gr = function(o, a) {
            return {
                appname: o,
                questionnaire: a
            }
        };
        function fr(o, a) {
            if (1 & o && (t._UZ(0, "mat-card", 99),
            t.ALo(1, "translate")),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("innerHTML", t.xi3(1, 1, "CALL_FOR_FEEDBACK", t.WLB(4, gr, e.appName, e.questionnaireUrl)), t.oJD)
            }
        }
        function Cr(o, a) {
            if (1 & o && (t.TgZ(0, "div", 94),
            t.YNc(1, _r, 2, 3, "mat-card", 95),
            t._UZ(2, "span", 96),
            t.YNc(3, fr, 2, 7, "mat-card", 97),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", e.showContributionInfoBox),
                t.xp6(2),
                t.Q6J("ngIf", e.questionnaireUrl)
            }
        }
        v.vI.add(m.Tab, R.fG, D.hV2, D.zhw, D.g7i, m.kWN, m.Mm7),
        v.vz.watch();
        let vr = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w, S, $) {
                    this.configurationService = e,
                    this.challengeService = n,
                    this.codeSnippetService = i,
                    this.sanitizer = r,
                    this.ngZone = l,
                    this.io = u,
                    this.spinner = f,
                    this.translate = b,
                    this.localBackupService = w,
                    this.dialog = S,
                    this.route = $,
                    this.availableDifficulties = [1, 2, 3, 4, 5, 6],
                    this.displayedDifficulties = [1],
                    this.availableChallengeCategories = [],
                    this.displayedChallengeCategories = [],
                    this.toggledMajorityOfDifficulties = !1,
                    this.toggledMajorityOfCategories = !0,
                    this.showSolvedChallenges = !0,
                    this.numDisabledChallenges = 0,
                    this.showDisabledChallenges = !1,
                    this.showOnlyTutorialChallenges = !1,
                    this.restrictToTutorialsFirst = !1,
                    this.allTutorialsCompleted = !1,
                    this.isLastTutorialsTier = !1,
                    this.tutorialsTier = 1,
                    this.displayedColumns = ["name", "difficulty", "description", "category", "tags", "status"],
                    this.offsetValue = ["100%", "100%", "100%", "100%", "100%", "100%"],
                    this.allowRepeatNotifications = !1,
                    this.showChallengeHints = !0,
                    this.showVulnerabilityMitigations = !0,
                    this.codingChallengesEnabled = "solved",
                    this.showHackingInstructor = !0,
                    this.challenges = [],
                    this.percentChallengesSolved = "0",
                    this.percentCodingChallengesSolved = "0",
                    this.solvedChallengesOfDifficulty = [[], [], [], [], [], []],
                    this.totalChallengesOfDifficulty = [[], [], [], [], [], []],
                    this.showContributionInfoBox = !0,
                    this.questionnaireUrl = "https://forms.gle/2Tr5m1pqnnesApxN8",
                    this.appName = "OWASP Juice Shop",
                    this.localBackupEnabled = !0,
                    this.showFeedbackButtons = !0
                }
                ngAfterViewInit() {
                    const e = this.route.snapshot.queryParams.challenge;
                    if (e)
                        if (document.getElementById(e))
                            this.scrollToChallenge(e);
                        else {
                            const i = new MutationObserver(r=>{
                                for (const l of r)
                                    "childList" === l.type && document.getElementById(e) && (this.scrollToChallenge(e),
                                    i.disconnect())
                            }
                            );
                            i.observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        }
                }
                ngOnInit() {
                    this.spinner.show(),
                    this.displayedDifficulties = localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : [1],
                    this.showSolvedChallenges = !localStorage.getItem("showSolvedChallenges") || JSON.parse(String(localStorage.getItem("showSolvedChallenges"))),
                    this.showDisabledChallenges = !!localStorage.getItem("showDisabledChallenges") && JSON.parse(String(localStorage.getItem("showDisabledChallenges"))),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n, i, r;
                        this.allowRepeatNotifications = e.challenges.showSolvedNotifications && (null === (n = e.ctf) || void 0 === n ? void 0 : n.showFlagsInNotifications),
                        this.showChallengeHints = e.challenges.showHints,
                        this.showVulnerabilityMitigations = e.challenges.showMitigations,
                        this.codingChallengesEnabled = e.challenges.codingChallengesEnabled,
                        this.showHackingInstructor = null === (i = e.hackingInstructor) || void 0 === i ? void 0 : i.isEnabled,
                        this.showContributionInfoBox = e.application.showGitHubLinks,
                        this.showFeedbackButtons = e.challenges.showFeedbackButtons,
                        this.showFeedbackButtons && this.displayedColumns.push("feedback"),
                        this.questionnaireUrl = null === (r = e.application.social) || void 0 === r ? void 0 : r.questionnaireUrl,
                        this.appName = e.application.name,
                        this.restrictToTutorialsFirst = e.challenges.restrictToTutorialsFirst,
                        this.showOnlyTutorialChallenges = localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : this.restrictToTutorialsFirst,
                        this.localBackupEnabled = e.application.localBackupEnabled,
                        this.challengeService.find({
                            sort: "name"
                        }).subscribe(l=>{
                            this.codeSnippetService.challenges().subscribe(u=>{
                                this.challenges = l;
                                for (let f = 0; f < this.challenges.length; f++)
                                    this.augmentHintText(this.challenges[f]),
                                    this.trustDescriptionHtml(this.challenges[f]),
                                    "Score Board" === this.challenges[f].name && (this.challenges[f].solved = !0),
                                    this.availableChallengeCategories.includes(l[f].category) || this.availableChallengeCategories.push(l[f].category),
                                    this.showHackingInstructor && d.e(648).then(d.bind(d, 3907)).then(b=>{
                                        l[f].hasTutorial = b.hasInstructions(l[f].name)
                                    }
                                    ),
                                    l[f].hasSnippet = u.indexOf(l[f].key) > -1;
                                this.availableChallengeCategories.sort((f,b)=>f.localeCompare(b)),
                                this.displayedChallengeCategories = localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : this.availableChallengeCategories,
                                this.calculateProgressPercentage(),
                                this.calculateCodingProgressPercentage(),
                                this.populateFilteredChallengeLists(),
                                this.calculateGradientOffsets(l),
                                this.calculateTutorialTier(l),
                                this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties(),
                                this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories(),
                                this.showOnlyTutorialChallenges && this.challenges.sort((f,b)=>f.tutorialOrder - b.tutorialOrder),
                                this.spinner.hide()
                            }
                            )
                        }
                        , l=>{
                            this.challenges = [],
                            console.log(l)
                        }
                        )
                    }
                    , e=>console.log(e)),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            if (e?.challenge) {
                                for (let n = 0; n < this.challenges.length; n++)
                                    if (this.challenges[n].name === e.name) {
                                        this.challenges[n].solved = !0;
                                        break
                                    }
                                this.calculateProgressPercentage(),
                                this.populateFilteredChallengeLists(),
                                this.calculateGradientOffsets(this.challenges),
                                this.calculateTutorialTier(this.challenges)
                            }
                        }
                        )
                    }
                    )
                }
                scrollToChallenge(e) {
                    const n = document.getElementById(e);
                    n ? (console.log(`Scrolling to challenge: ${e}`),
                    n.scrollIntoView({
                        behavior: "smooth"
                    })) : console.log(`Challenge ${e} is not visible!`)
                }
                augmentHintText(e) {
                    e.disabledEnv ? (this.numDisabledChallenges++,
                    this.disabledEnv = e.disabledEnv,
                    this.translate.get("CHALLENGE_UNAVAILABLE", {
                        env: e.disabledEnv
                    }).subscribe(n=>{
                        e.hint = n
                    }
                    , n=>{
                        e.hint = n
                    }
                    )) : e.hintUrl && (e.hint ? this.translate.get("CLICK_FOR_MORE_HINTS").subscribe(n=>{
                        e.hint += ` ${n}`
                    }
                    , n=>{
                        e.hint += ` ${n}`
                    }
                    ) : this.translate.get("CLICK_TO_OPEN_HINTS").subscribe(n=>{
                        e.hint = n
                    }
                    , n=>{
                        e.hint = n
                    }
                    ))
                }
                trustDescriptionHtml(e) {
                    e.description = this.sanitizer.bypassSecurityTrustHtml(e.description)
                }
                calculateCodingProgressPercentage() {
                    let e = 0
                      , n = 0;
                    for (let i = 0; i < this.challenges.length; i++)
                        this.challenges[i].hasSnippet && (e++,
                        n += this.challenges[i].codingChallengeStatus);
                    this.percentCodingChallengesSolved = (100 * n / (2 * e)).toFixed(0)
                }
                calculateProgressPercentage() {
                    let e = 0;
                    for (let n = 0; n < this.challenges.length; n++)
                        e += this.challenges[n].solved ? 1 : 0;
                    this.percentChallengesSolved = (100 * e / this.challenges.length).toFixed(0)
                }
                calculateTutorialTier(e) {
                    this.allTutorialsCompleted = !0,
                    this.isLastTutorialsTier = !0,
                    this.tutorialsTier = 1;
                    for (let n = 1; n <= 6; n++) {
                        const i = e.filter(l=>l.tutorialOrder && l.difficulty === n).length
                          , r = e.filter(l=>l.tutorialOrder && l.difficulty === n && l.solved).length;
                        this.allTutorialsCompleted = this.allTutorialsCompleted && i === r,
                        this.tutorialsTier === n && i === r && this.tutorialsTier++
                    }
                    if (!this.allTutorialsCompleted) {
                        this.isLastTutorialsTier = 0 === e.filter(n=>n.tutorialOrder && !n.solved && n.difficulty > this.tutorialsTier).length;
                        for (let n = 1; n <= this.tutorialsTier; n++)
                            this.displayedDifficulties.includes(n) || this.toggleDifficulty(this.tutorialsTier)
                    }
                }
                calculateGradientOffsets(e) {
                    for (let n = 1; n <= 6; n++)
                        this.offsetValue[n - 1] = this.calculateGradientOffset(e, n)
                }
                calculateGradientOffset(e, n) {
                    let i = 0
                      , r = 0;
                    for (let u = 0; u < e.length; u++)
                        e[u].difficulty === n && (r++,
                        e[u].solved && i++);
                    let l = Math.round(100 * i / r);
                    return l = 100 - l,
                    +l + "%"
                }
                toggleDifficulty(e) {
                    this.displayedDifficulties.includes(e) ? this.displayedDifficulties = this.displayedDifficulties.filter(n=>n !== e) : this.displayedDifficulties.push(e),
                    localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties)),
                    this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties()
                }
                toggleAllDifficulty() {
                    this.toggledMajorityOfDifficulties ? (this.displayedDifficulties = [],
                    this.toggledMajorityOfDifficulties = !1) : (this.displayedDifficulties = this.availableDifficulties,
                    this.toggledMajorityOfDifficulties = !0),
                    localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties))
                }
                toggleShowSolvedChallenges() {
                    this.showSolvedChallenges = !this.showSolvedChallenges,
                    localStorage.setItem("showSolvedChallenges", JSON.stringify(this.showSolvedChallenges))
                }
                toggleShowDisabledChallenges() {
                    this.showDisabledChallenges = !this.showDisabledChallenges,
                    localStorage.setItem("showDisabledChallenges", JSON.stringify(this.showDisabledChallenges))
                }
                toggleShowOnlyTutorialChallenges() {
                    this.showOnlyTutorialChallenges = !this.showOnlyTutorialChallenges,
                    localStorage.setItem("showOnlyTutorialChallenges", JSON.stringify(this.showOnlyTutorialChallenges)),
                    this.challenges.sort(this.showOnlyTutorialChallenges ? (e,n)=>e.tutorialOrder - n.tutorialOrder : (e,n)=>e.name < n.name ? -1 : e.name > n.name ? 1 : 0)
                }
                toggleShowChallengeCategory(e) {
                    this.displayedChallengeCategories.includes(e) ? this.displayedChallengeCategories = this.displayedChallengeCategories.filter(n=>n !== e) : this.displayedChallengeCategories.push(e),
                    localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories)),
                    this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories()
                }
                toggleAllChallengeCategory() {
                    this.toggledMajorityOfCategories ? (this.displayedChallengeCategories = [],
                    this.toggledMajorityOfCategories = !1) : (this.displayedChallengeCategories = this.availableChallengeCategories,
                    this.toggledMajorityOfCategories = !0),
                    localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories))
                }
                determineToggledMajorityOfDifficulties() {
                    return this.displayedDifficulties.length > this.availableDifficulties.length / 2
                }
                determineToggledMajorityOfCategories() {
                    return this.displayedChallengeCategories.length > this.availableChallengeCategories.length / 2
                }
                filterToDataSource(e) {
                    e = e.filter(i=>!(!this.displayedDifficulties.includes(i.difficulty) || !this.displayedChallengeCategories.includes(i.category) || !this.showSolvedChallenges && i.solved || !this.showDisabledChallenges && i.disabledEnv || this.showOnlyTutorialChallenges && !i.hasTutorial));
                    const n = new c.by;
                    return n.data = e,
                    n
                }
                populateFilteredChallengeLists() {
                    for (const e of this.availableDifficulties)
                        0 === this.challenges.length ? (this.totalChallengesOfDifficulty[e - 1] = [],
                        this.solvedChallengesOfDifficulty[e - 1] = []) : (this.totalChallengesOfDifficulty[e - 1] = this.challenges.filter(n=>n.difficulty === e),
                        this.solvedChallengesOfDifficulty[e - 1] = this.challenges.filter(n=>n.difficulty === e && n.solved))
                }
                startHackingInstructor(e) {
                    console.log(`Starting instructions for challenge "${e}"`),
                    d.e(648).then(d.bind(d, 3907)).then(n=>{
                        n.startHackingInstructorFor(e)
                    }
                    )
                }
                trackById(e, n) {
                    return n.id
                }
                times(e) {
                    return Array(e).fill("\u2605")
                }
                saveBackup() {
                    this.localBackupService.save(this.appName.toLowerCase().replace(/ /, "_"))
                }
                restoreBackup(e) {
                    this.localBackupService.restore(e)
                }
                showCodeSnippet(e, n, i) {
                    this.dialog.open(wi, {
                        disableClose: !0,
                        data: {
                            key: e,
                            name: n,
                            codingChallengeStatus: i
                        }
                    }).afterClosed().subscribe(l=>{
                        for (const u of this.challenges)
                            u.name === n && (u.codingChallengeStatus < 1 && (u.codingChallengeStatus = l.findIt ? 1 : u.codingChallengeStatus),
                            u.codingChallengeStatus < 2 && (u.codingChallengeStatus = l.fixIt ? 2 : u.codingChallengeStatus),
                            this.calculateCodingProgressPercentage())
                    }
                    )
                }
                generateColor(e) {
                    return 2 === e.codingChallengeStatus ? "accent" : "primary"
                }
                generateBadge(e) {
                    return 1 === e.codingChallengeStatus ? "1/2" : ""
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(L),t.Y36(z),t.Y36(pe),t.Y36(J.H7),t.Y36(t.R0b),t.Y36(V),t.Y36(Lt.t2),t.Y36(p.sK),t.Y36(si),t.Y36(U.uw),t.Y36(y.gz))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-score-board"]],
                decls: 40,
                vars: 35,
                consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "grow"], [1, "confirmation"], ["mode", "determinate", 3, "color", "value"], [4, "ngIf"], ["fxLayout", "row wrap", 1, "star-container"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], ["id", "btnToggleAllDifficulties", 1, "mat-button", 3, "disabled", "click"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-trophy"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], [1, "form-group"], ["type", "file", 2, "display", "none", 3, "change"], ["restoreBackupFile", ""], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["class", "disabled-challenges-infoBox mat-button", 3, "innerHTML", 4, "ngIf"], ["fxLayout", "row wrap", 1, "category-container"], ["class", "category-toggle", "appearance", "legacy", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], [1, "mat-button", 3, "disabled", "click"], [3, "dataSource", "trackBy", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-lg", "column", 4, "ngIf"], ["src", "assets/public/images/padding/1px.png"], ["fullscreen", "true", "type", "timer", "size", "large"], [1, "fa-4x", "fa-layers", "fa-fw", 2, "display", "block", "margin", "5px"], ["aria-hidden", "true", "data-prefix", "fa", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "data-fa-i2svg", "", "stroke-width", "10", 1, "svg-inline--fa", "fa-star", "fa-w-18", "star-border"], ["x1", "0", "x2", "0", "y1", "0", "y2", "100%", 3, "id"], [1, "empty-star"], [1, "filled-star"], ["d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], ["data-fa-transform", "shrink-9", 1, "fa-layers-text", "fa-inverse", 2, "font-weight", "900"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-exclamation-circle"], ["mat-fab", "", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], ["mat-fab", "", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], [1, "disabled-challenges-infoBox", "mat-button", 3, "innerHTML"], ["appearance", "legacy", "matTooltipPosition", "above", 1, "category-toggle", 3, "checked", "disabled", "matTooltip", "change"], [3, "dataSource", "trackBy"], ["matColumnDef", "name"], ["translate", "", 4, "matHeaderCellDef"], [3, "id", 4, "matCellDef"], ["matColumnDef", "difficulty"], ["fxShow", "", "fxHide.lt-sm", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"], ["matColumnDef", "description"], ["fxFlex", "1 1 31%", "translate", "", 4, "matHeaderCellDef"], ["fxFlex", "1 1 31%", 4, "matCellDef"], ["matColumnDef", "category"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "tags"], ["fxShow", "", "fxHide.lt-lg", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-lg", "", 4, "matCellDef"], ["matColumnDef", "status"], [4, "matCellDef"], ["matColumnDef", "feedback", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", ""], [3, "id"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""], ["fxShow", "", "fxHide.lt-sm", ""], [4, "ngFor", "ngForOf"], ["fxFlex", "1 1 31%", "translate", ""], ["fxFlex", "1 1 31%"], [3, "innerHTML"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", ""], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["fxShow", "", "fxHide.lt-lg", ""], [3, "matTooltip"], [3, "challenge", "allowRepeatNotifications", "showChallengeHints"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "class", "hacking-instructor-button", 3, "matTooltip", "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "matTooltipDisabled"], ["mat-mini-fab", "", "matTooltipPosition", "above", "class", "code-snippet-button", 3, "disabled", "matTooltip", "color", "id", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "class", "code-snippet-button", "id", "codingChallengeTutorialButton", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", 1, "hacking-instructor-button", 3, "matTooltip", "click"], ["target", "_blank", 3, "href"], ["mat-mini-fab", "", "color", "accent", "matTooltipPosition", "above", 1, "vulnerability-mitigation-button", 3, "matTooltip"], ["mat-mini-fab", "", "matTooltipPosition", "above", 1, "code-snippet-button", 3, "disabled", "matTooltip", "color", "id", "click"], ["matBadgeSize", "medium", "matBadgePosition", "right", "matBadgeColor", "accent", 3, "matBadge"], ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "id", "codingChallengeTutorialButton", 1, "code-snippet-button", 3, "matTooltip", "click"], ["matBadge", "<>", "matBadgeSize", "small", "matBadgePosition", "right", "matBadgeColor", "primary"], ["matColumnDef", "feedback"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%", "translate", ""], ["fxShow", "", "fxHide.lt-xl", "", "fxFlex", "1 1 5%"], ["mat-icon-button", ""], ["color", "accent"], ["color", "warn"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", "class", "primary-notification", 3, "innerHTML", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", "class", "warn-notification", 3, "innerHTML", 4, "ngIf"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", 1, "primary-notification", 3, "innerHTML"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", 1, "warn-notification", 3, "innerHTML"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title"),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.TgZ(6, "small", 3),
                    t._uU(7),
                    t.qZA()(),
                    t._UZ(8, "mat-progress-bar", 4),
                    t.qZA(),
                    t.YNc(9, Pi, 7, 6, "mat-card", 5),
                    t.qZA(),
                    t.TgZ(10, "mat-card")(11, "div", 6),
                    t.YNc(12, Ni, 14, 23, "mat-button-toggle", 7),
                    t.TgZ(13, "button", 8),
                    t.NdJ("click", function() {
                        return n.toggleAllDifficulty()
                    }),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.TgZ(16, "mat-button-toggle", 9),
                    t.NdJ("change", function() {
                        return n.toggleShowSolvedChallenges()
                    }),
                    t.ALo(17, "translate"),
                    t._UZ(18, "i", 10),
                    t._uU(19),
                    t.ALo(20, "translate"),
                    t.qZA(),
                    t.YNc(21, Ei, 6, 11, "mat-button-toggle", 11),
                    t.YNc(22, qi, 5, 11, "mat-button-toggle", 12),
                    t.YNc(23, Mi, 4, 3, "button", 13),
                    t.TgZ(24, "div", 14)(25, "input", 15, 16),
                    t.NdJ("change", function(r) {
                        return n.restoreBackup(r.target.files.item(0))
                    }),
                    t.qZA()(),
                    t.YNc(27, Di, 4, 3, "button", 17),
                    t.YNc(28, Ri, 2, 7, "div", 18),
                    t.qZA(),
                    t._UZ(29, "mat-divider"),
                    t.TgZ(30, "div", 19),
                    t.YNc(31, Yi, 5, 13, "mat-button-toggle", 20),
                    t.TgZ(32, "button", 21),
                    t.NdJ("click", function() {
                        return n.toggleAllChallengeCategory()
                    }),
                    t._uU(33),
                    t.ALo(34, "translate"),
                    t.qZA()()(),
                    t.TgZ(35, "mat-card"),
                    t.YNc(36, hr, 22, 5, "mat-table", 22),
                    t.qZA(),
                    t.YNc(37, Cr, 4, 2, "div", 23),
                    t.qZA(),
                    t._UZ(38, "img", 24)(39, "ngx-spinner", 25)),
                    2 & e && (t.xp6(4),
                    t.hij("", t.lcZ(5, 22, "TITLE_SCORE_BOARD"), " "),
                    t.xp6(3),
                    t.hij("", n.percentChallengesSolved, "%"),
                    t.xp6(1),
                    t.Q6J("color", "accent")("value", n.percentChallengesSolved),
                    t.xp6(1),
                    t.Q6J("ngIf", "never" !== n.codingChallengesEnabled),
                    t.xp6(3),
                    t.Q6J("ngForOf", n.availableDifficulties),
                    t.xp6(1),
                    t.Q6J("disabled", n.restrictToTutorialsFirst && !n.allTutorialsCompleted),
                    t.xp6(1),
                    t.Oqu(t.lcZ(15, 24, n.toggledMajorityOfDifficulties ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                    t.xp6(2),
                    t.Q6J("checked", n.showSolvedChallenges)("disabled", n.restrictToTutorialsFirst && !n.allTutorialsCompleted)("matTooltip", n.restrictToTutorialsFirst && !n.allTutorialsCompleted ? t.xi3(17, 26, "INFO_FULL_CHALLENGE_MODE", t.VKq(33, lt, n.challenges.length)) : ""),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(20, 29, "BTN_SHOW_SOLVED"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", n.showHackingInstructor),
                    t.xp6(1),
                    t.Q6J("ngIf", n.numDisabledChallenges > 0),
                    t.xp6(1),
                    t.Q6J("ngIf", n.localBackupEnabled),
                    t.xp6(4),
                    t.Q6J("ngIf", n.localBackupEnabled),
                    t.xp6(1),
                    t.Q6J("ngIf", n.numDisabledChallenges > 0 && n.showDisabledChallenges),
                    t.xp6(3),
                    t.Q6J("ngForOf", n.availableChallengeCategories),
                    t.xp6(1),
                    t.Q6J("disabled", n.restrictToTutorialsFirst && !n.allTutorialsCompleted),
                    t.xp6(1),
                    t.Oqu(t.lcZ(34, 31, n.toggledMajorityOfCategories ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                    t.xp6(3),
                    t.Q6J("ngIf", n.challenges),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showContributionInfoBox || n.questionnaireUrl))
                },
                dependencies: [T.sg, T.O5, p.Pi, C.xw, C.yH, G.b8, Lt.Ro, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, x.a8, x.n5, Y.d, he.pW, F.gM, _e.Yi, ge.k, Nt.qn, Nt.HS, Oi, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]{margin-bottom:35px;margin-left:35px;margin-right:35px;min-width:300px}.category-container[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{margin-top:25px}.star-container[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:25px}.star-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:initial}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:pointer}.heading[_ngcontent-%COMP%]{padding-top:5px}.mat-raised-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.category-toggle[_ngcontent-%COMP%]{font-size:small}.overlay-fullscreen[_ngcontent-%COMP%]     .black-overlay{position:fixed}.hacking-instructor-button[_ngcontent-%COMP%], .vulnerability-mitigation-button[_ngcontent-%COMP%], .code-snippet-button[_ngcontent-%COMP%]{margin-left:8px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.disabled-challenges-infoBox[_ngcontent-%COMP%]{align-self:center;color:#e64a19;cursor:default;height:100%;margin:0}.disabled-challenges-infoBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#546e7a;font-style:normal}.backupButton[_ngcontent-%COMP%]{align-self:center;margin-left:15px}"]
            }),
            o
        }
        )()
          , fe = (()=>{
            class o {
                constructor(e) {
                    this.http = e
                }
                verify(e) {
                    return this.http.post("./rest/2fa/verify", {
                        tmpToken: localStorage.getItem("totp_tmp_token"),
                        totpToken: e
                    }).pipe((0,
                    _.U)(n=>n.authentication), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                status() {
                    return this.http.get("./rest/2fa/status").pipe((0,
                    _.U)(e=>e), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                setup(e, n, i) {
                    return this.http.post("./rest/2fa/setup", {
                        password: e,
                        setupToken: i,
                        initialToken: n
                    }).pipe((0,
                    _.U)(()=>{}
                    ), (0,
                    h.K)(r=>{
                        throw r
                    }
                    ))
                }
                disable(e) {
                    return this.http.post("./rest/2fa/disable", {
                        password: e
                    }).pipe((0,
                    _.U)(()=>{}
                    ), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function Tr(o, a) {
            1 & o && (t.TgZ(0, "div", 13),
            t._uU(1, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
            t.qZA())
        }
        v.vI.add(m.B$L),
        v.vz.watch();
        let br = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.twoFactorAuthService = e,
                    this.cookieService = n,
                    this.userService = i,
                    this.router = r,
                    this.ngZone = l,
                    this.twoFactorForm = new s.nJ({
                        token: new s.p4("",[s.kI.minLength(6), s.kI.maxLength(6), s.kI.required, s.kI.pattern("^[\\d]{6}$")])
                    }),
                    this.errored = !1
                }
                verify() {
                    var e = this;
                    this.twoFactorAuthService.verify(this.twoFactorForm.value.token).subscribe(i=>{
                        var r;
                        localStorage.setItem("token", i.token);
                        const l = new Date;
                        l.setHours(l.getHours() + 8),
                        this.cookieService.put("token", i.token, {
                            expires: l
                        }),
                        sessionStorage.setItem("bid", null === (r = i.bid) || void 0 === r ? void 0 : r.toString()),
                        this.userService.isLoggedIn.next(!0),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/search"])
                        }))
                    }
                    , i=>(this.errored = !0,
                    setTimeout(()=>{
                        this.errored = !1
                    }
                    , 5e3),
                    i))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(fe),t.Y36(q.N_),t.Y36(N),t.Y36(y.F0),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-two-factor-auth-enter"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["class", "error", "style", "margin-bottom: 10px;", "translate", "", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-container"], ["id", "inputToken", "appearance", "outline", "color", "accent"], ["formControlName", "token", "type", "text", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", "matInput", "", "id", "totpToken", "aria-label", "Field for entering the Two Factor token", 3, "placeholder"], ["tokenInput", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The code to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "color", "primary", "mat-raised-button", "", "id", "totpSubmitButton", "aria-label", "Button to confirm the input", 3, "disabled"], [1, "material-icons"], ["translate", "", 1, "error", 2, "margin-bottom", "10px"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_TWO_FACTOR_AUTHENTICATION"),
                    t.qZA(),
                    t.TgZ(4, "p", 2),
                    t._uU(5, "TITLE_TWO_FACTOR_AUTH_ENTER"),
                    t.qZA(),
                    t.YNc(6, Tr, 2, 0, "div", 3),
                    t.TgZ(7, "form", 4),
                    t.NdJ("ngSubmit", function() {
                        return n.verify()
                    }),
                    t.TgZ(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label", 2),
                    t._uU(11, "LABEL_TWO_FACTOR_AUTH_TOKEN"),
                    t.qZA(),
                    t._UZ(12, "input", 7, 8),
                    t.ALo(14, "translate"),
                    t.TgZ(15, "mat-icon", 9),
                    t.ALo(16, "translate"),
                    t._uU(17, " help_outline "),
                    t.qZA(),
                    t.TgZ(18, "mat-hint", 10),
                    t._uU(19),
                    t.qZA(),
                    t.TgZ(20, "mat-error", 2),
                    t._uU(21, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                    t.qZA()()(),
                    t.TgZ(22, "button", 11)(23, "i", 12),
                    t._uU(24, " lock_open "),
                    t.qZA(),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(13);
                        t.xp6(6),
                        t.Q6J("ngIf", n.errored),
                        t.xp6(1),
                        t.Q6J("formGroup", n.twoFactorForm),
                        t.xp6(5),
                        t.s9C("placeholder", t.lcZ(14, 7, "2FA_ENTER_CODE_PLACEHOLDER")),
                        t.xp6(3),
                        t.s9C("matTooltip", t.lcZ(16, 9, "INITIAL_TOKEN_TOOLTIP")),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/6"),
                        t.xp6(3),
                        t.Q6J("disabled", n.twoFactorForm.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(26, 11, "BTN_LOGIN"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, C.Wh, s._Y, s.Fj, s.JJ, s.JL, s.wO, s.nD, s.c5, s.sg, s.u, O.Hw, g.TO, g.KE, g.bx, g.hX, g.R9, A.lW, x.a8, P.Nt, F.gM, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}#totpSubmitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#inputToken[_ngcontent-%COMP%]{width:100%}"]
            }),
            o
        }
        )();
        v.vI.add(m.wOQ, m.R3t),
        v.vz.watch();
        let xr = (()=>{
            class o {
                constructor(e, n) {
                    this.route = e,
                    this.translate = n,
                    this.error = null
                }
                ngOnInit() {
                    const e = this.route.snapshot.queryParams.error;
                    e && this.translate.get(e).subscribe(n=>{
                        this.error = n
                    }
                    , n=>{
                        this.error = n
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.gz),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-error-page"]],
                decls: 7,
                vars: 1,
                consts: [[1, "warn-notification", "mat-elevation-z6"], [1, "mat-display-3"], [1, "fas", "fa-hand-paper"], [1, "mat-subheading-2"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "div", 1),
                    t._UZ(3, "i", 2),
                    t._uU(4, " 403"),
                    t.qZA(),
                    t.TgZ(5, "span", 3),
                    t._uU(6),
                    t.qZA()()()),
                    2 & e && (t.xp6(6),
                    t.Oqu(n.error))
                },
                dependencies: [x.a8],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            o
        }
        )();
        var Et = d(2289)
          , ct = d(3267);
        let Ar = (()=>{
            class o {
                constructor(e) {
                    this.breakpointObserver = e,
                    this.windowWidth = window.innerWidth,
                    this.isHandset$ = this.breakpointObserver.observe(Et.u3.Handset).pipe((0,
                    _.U)(n=>n.matches))
                }
                ngAfterViewInit() {
                    this.windowWidth = window.innerWidth
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Et.Yg))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-privacy-security"]],
                decls: 3,
                vars: 0,
                consts: [[1, "sidenav-container"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-sidenav-container", 0)(1, "mat-sidenav-content"),
                    t._UZ(2, "router-outlet"),
                    t.qZA()())
                },
                dependencies: [y.lC, ct.TM, ct.Rh]
            }),
            o
        }
        )();
        var qt = d(3079);
        function Zr(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div", 5)(1, "p", 6),
                t._uU(2, "2FA_SUCCESSFUL_SETUP"),
                t.qZA(),
                t.TgZ(3, "form", 7),
                t.NdJ("ngSubmit", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.disable())
                }),
                t.TgZ(4, "h2", 8),
                t._uU(5, "REMOVE_TWO_FACTOR_AUTH"),
                t.qZA(),
                t.TgZ(6, "div", 9),
                t._uU(7, "2FA_SETUP_ERROR"),
                t.qZA(),
                t.TgZ(8, "mat-form-field", 10)(9, "mat-label", 6),
                t._uU(10, "LABEL_CURRENT_PASSWORD"),
                t.qZA(),
                t._UZ(11, "input", 11),
                t.ALo(12, "translate"),
                t.qZA(),
                t.TgZ(13, "button", 12)(14, "i", 13),
                t._uU(15, " remove_circle_outline "),
                t.qZA(),
                t._uU(16),
                t.ALo(17, "translate"),
                t.qZA()()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(3),
                t.Q6J("formGroup", e.twoFactorDisableForm),
                t.xp6(3),
                t.Q6J("hidden", !(e.errored && !e.twoFactorDisableForm.dirty)),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(12, 5, "MANDATORY_CURRENT_PASSWORD")),
                t.xp6(2),
                t.Q6J("disabled", e.twoFactorDisableForm.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(17, 7, "BTN_REMOVE"), " ")
            }
        }
        function wr(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "form", 14),
                t.NdJ("ngSubmit", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.setup())
                }),
                t.TgZ(1, "span", 15),
                t._uU(2, "2FA_AUTH_SETUP_INSTRUCTIONS"),
                t.qZA(),
                t.TgZ(3, "div", 16),
                t._UZ(4, "qr-code", 17),
                t.qZA(),
                t.TgZ(5, "div", 9),
                t._uU(6, "2FA_SETUP_ERROR"),
                t.qZA(),
                t.TgZ(7, "mat-form-field", 10)(8, "mat-label", 6),
                t._uU(9, "LABEL_CURRENT_PASSWORD"),
                t.qZA(),
                t._UZ(10, "input", 18),
                t.ALo(11, "translate"),
                t.qZA(),
                t.TgZ(12, "mat-form-field", 10)(13, "mat-label", 6),
                t._uU(14, "INITIAL_CODE"),
                t.qZA(),
                t._UZ(15, "input", 19, 20),
                t.ALo(17, "translate"),
                t.TgZ(18, "mat-error", 6),
                t._uU(19, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                t.qZA(),
                t.TgZ(20, "mat-icon", 21),
                t.ALo(21, "translate"),
                t._uU(22, " help_outline "),
                t.qZA(),
                t.TgZ(23, "mat-hint", 22),
                t._uU(24),
                t.qZA()(),
                t.TgZ(25, "button", 23)(26, "i", 13),
                t._uU(27, " save "),
                t.qZA(),
                t._uU(28),
                t.ALo(29, "translate"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.MAs(16)
                  , n = t.oxw();
                t.Q6J("formGroup", n.twoFactorSetupForm),
                t.xp6(4),
                t.Q6J("value", n.totpUrl)("size", 300)("level", "L"),
                t.xp6(1),
                t.Q6J("hidden", !(n.errored && !n.twoFactorSetupForm.dirty)),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(11, 12, "MANDATORY_CURRENT_PASSWORD")),
                t.xp6(5),
                t.s9C("placeholder", t.lcZ(17, 14, "INITIAL_CODE_PLACEHOLDER")),
                t.uIk("data-test-totp-secret", n.totpSecret),
                t.xp6(5),
                t.s9C("matTooltip", t.lcZ(21, 16, "INITIAL_TOKEN_TOOLTIP")),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/6"),
                t.xp6(1),
                t.Q6J("disabled", n.twoFactorSetupForm.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(29, 18, "BTN_SAVE"), " ")
            }
        }
        v.vI.add(m.B$L, m.r6l),
        v.vz.watch();
        let Sr = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.twoFactorAuthService = e,
                    this.configurationService = n,
                    this.snackBar = i,
                    this.translateService = r,
                    this.snackBarHelperService = l,
                    this.twoFactorSetupForm = new s.nJ({
                        passwordControl: new s.p4("",[s.kI.required]),
                        initalTokenControl: new s.p4("",[s.kI.required, s.kI.pattern("^[\\d]{6}$")])
                    }),
                    this.twoFactorDisableForm = new s.nJ({
                        passwordControl: new s.p4("",[s.kI.required])
                    }),
                    this.setupStatus = null,
                    this.errored = null,
                    this.appName = "OWASP Juice Shop"
                }
                ngOnInit() {
                    this.updateStatus()
                }
                updateStatus() {
                    const e = this.twoFactorAuthService.status()
                      , n = this.configurationService.getApplicationConfiguration();
                    return (0,
                    ht.D)([e, n]).subscribe(([{setup: i, email: r, secret: l, setupToken: u},f])=>{
                        if (this.setupStatus = i,
                        this.appName = f.application.name,
                        !i) {
                            const b = encodeURIComponent(this.appName);
                            this.totpUrl = `otpauth://totp/${b}:${r}?secret=${l}&issuer=${b}`,
                            this.totpSecret = l,
                            this.setupToken = u
                        }
                    }
                    , ()=>{
                        console.log("Failed to fetch 2fa status")
                    }
                    ),
                    e
                }
                setup() {
                    var e, n;
                    this.twoFactorAuthService.setup(null === (e = this.twoFactorSetupForm.get("passwordControl")) || void 0 === e ? void 0 : e.value, null === (n = this.twoFactorSetupForm.get("initalTokenControl")) || void 0 === n ? void 0 : n.value, this.setupToken).subscribe(()=>{
                        this.setupStatus = !0,
                        this.snackBarHelperService.open("CONFIRM_2FA_SETUP")
                    }
                    , ()=>{
                        var i, r;
                        null === (i = this.twoFactorSetupForm.get("passwordControl")) || void 0 === i || i.markAsPristine(),
                        null === (r = this.twoFactorSetupForm.get("initalTokenControl")) || void 0 === r || r.markAsPristine(),
                        this.errored = !0
                    }
                    )
                }
                disable() {
                    var e;
                    this.twoFactorAuthService.disable(null === (e = this.twoFactorDisableForm.get("passwordControl")) || void 0 === e ? void 0 : e.value).subscribe(()=>{
                        this.updateStatus().subscribe(()=>{
                            this.setupStatus = !1
                        }
                        ),
                        this.snackBarHelperService.open("CONFIRM_2FA_DISABLE")
                    }
                    , ()=>{
                        var n;
                        null === (n = this.twoFactorDisableForm.get("passwordControl")) || void 0 === n || n.markAsPristine(),
                        this.errored = !0
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(fe),t.Y36(L),t.Y36(K.ux),t.Y36(p.sK),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-two-factor-auth"]],
                decls: 6,
                vars: 2,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["id", "2fa-setup-title", "translate", ""], ["id", "2fa-setup-successfully", 4, "ngIf"], ["class", "form-container", "id", "two-factor-auth-setup", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "2fa-setup-successfully"], ["translate", ""], ["id", "two-factor-auth-disable", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "two-factor-auth-disable-title", "translate", ""], ["translate", "", 1, "error", 3, "hidden"], ["appearance", "outline", "color", "accent"], ["id", "currentPasswordDisable", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["type", "submit", "id", "disableTwoFactorAuth", "mat-raised-button", "", "color", "warn", "aria-label", "Button to remove the two-factor authentication", 3, "disabled"], [1, "material-icons"], ["id", "two-factor-auth-setup", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "2fa-setup-instructions", "translate", ""], ["fxLayoutAlign", "center", 1, "two-factor-qr-code"], [3, "value", "size", "level"], ["id", "currentPasswordSetup", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["id", "initalToken", "formControlName", "initalTokenControl", "type", "text", "matInput", "", "aria-label", "Field to enter the initial token. This must have 6 digits.", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", 3, "placeholder"], ["initToken", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The token to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "id", "setupTwoFactorAuth", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the two-factor configuration", 3, "disabled"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                    t.qZA(),
                    t.YNc(4, Zr, 18, 9, "div", 3),
                    t.YNc(5, wr, 30, 20, "form", 4),
                    t.qZA()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", !0 === n.setupStatus),
                    t.xp6(1),
                    t.Q6J("ngIf", !1 === n.setupStatus))
                },
                dependencies: [T.O5, p.Pi, C.Wh, s._Y, s.Fj, s.JJ, s.JL, s.wO, s.nD, s.c5, s.sg, s.u, qt.V, O.Hw, g.TO, g.KE, g.bx, g.hX, g.R9, A.lW, x.a8, P.Nt, F.gM, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#setupTwoFactorAuth[_ngcontent-%COMP%], #disableTwoFactorAuth[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.two-factor-qr-code[_ngcontent-%COMP%]{margin:16px 0}#two-factor-auth-disable[_ngcontent-%COMP%]{margin-top:32px}#two-factor-auth-disable-title[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{margin-top:5px}"]
            }),
            o
        }
        )()
          , Ce = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = "."
                }
                getCaptcha() {
                    return this.http.get(this.hostServer + "/rest/image-captcha/").pipe((0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , ve = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/user"
                }
                erase(e) {
                    return this.http.post(this.host + "/erasure-request", e).pipe((0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                dataExport(e) {
                    return this.http.post(this.host + "/data-export", e).pipe((0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function yr(o, a) {
            if (1 & o && (t.TgZ(0, "div")(1, "p", 13),
            t._uU(2),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(2),
                t.Oqu(e.error)
            }
        }
        function Ir(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        function Ur(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_CAPTCHA "),
            t.qZA())
        }
        const kr = function() {
            return {
                length: "5"
            }
        };
        function Or(o, a) {
            if (1 & o && (t.TgZ(0, "div")(1, "div")(2, "span", 14),
            t._uU(3, "CAPTCHA "),
            t.TgZ(4, "span"),
            t._uU(5, ":"),
            t.qZA()(),
            t._UZ(6, "div", 15),
            t.qZA(),
            t.TgZ(7, "mat-form-field", 16)(8, "mat-label", 2),
            t._uU(9, "ENTER_CAPTCHA"),
            t.qZA(),
            t._UZ(10, "input", 17, 18),
            t.ALo(12, "translate"),
            t.TgZ(13, "mat-hint", 19),
            t._uU(14),
            t.qZA(),
            t.YNc(15, Ir, 2, 0, "mat-error", 20),
            t.YNc(16, Ur, 2, 0, "mat-error", 20),
            t.qZA()()),
            2 & o) {
                const e = t.MAs(11)
                  , n = t.oxw();
                t.xp6(6),
                t.Q6J("innerHTML", n.captcha, t.oJD),
                t.xp6(4),
                t.s9C("placeholder", t.xi3(12, 6, "TYPE_THESE_LETTERS", t.DdM(9, kr))),
                t.Q6J("formControl", n.captchaControl),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/5"),
                t.xp6(1),
                t.Q6J("ngIf", n.captchaControl.invalid && n.captchaControl.errors.required),
                t.xp6(1),
                t.Q6J("ngIf", n.captchaControl.invalid && n.captchaControl.errors.minlength)
            }
        }
        let Pr = (()=>{
            class o {
                constructor(e, n, i) {
                    this.sanitizer = e,
                    this.imageCaptchaService = n,
                    this.dataSubjectService = i,
                    this.captchaControl = new s.p4("",[s.kI.required, s.kI.minLength(5)]),
                    this.formatControl = new s.p4("",[s.kI.required]),
                    this.dataRequest = void 0,
                    this.presenceOfCaptcha = !1
                }
                ngOnInit() {
                    this.needCaptcha(),
                    this.dataRequest = {}
                }
                needCaptcha() {
                    const e = new Date
                      , n = localStorage.getItem("lstdtxprt") ? new Date(JSON.parse(String(localStorage.getItem("lstdtxprt")))) : new Date(0);
                    e.getTime() - n.getTime() < 3e5 && (this.getNewCaptcha(),
                    this.presenceOfCaptcha = !0)
                }
                getNewCaptcha() {
                    this.imageCaptchaService.getCaptcha().subscribe(e=>{
                        this.captcha = this.sanitizer.bypassSecurityTrustHtml(e.image)
                    }
                    )
                }
                save() {
                    this.presenceOfCaptcha && (this.dataRequest.answer = this.captchaControl.value),
                    this.dataRequest.format = this.formatControl.value,
                    this.dataSubjectService.dataExport(this.dataRequest).subscribe(e=>{
                        var n;
                        this.error = null,
                        this.confirmation = e.confirmation,
                        this.userData = e.userData,
                        null === (n = window.open("", "_blank", "width=500")) || void 0 === n || n.document.write(this.userData),
                        this.lastSuccessfulTry = new Date,
                        localStorage.setItem("lstdtxprt", JSON.stringify(this.lastSuccessfulTry)),
                        this.ngOnInit(),
                        this.resetForm()
                    }
                    , e=>{
                        this.error = e.error,
                        this.confirmation = null,
                        this.resetFormError()
                    }
                    )
                }
                resetForm() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue(""),
                    this.formatControl.markAsUntouched(),
                    this.formatControl.markAsPristine(),
                    this.formatControl.setValue("")
                }
                resetFormError() {
                    this.captchaControl.markAsUntouched(),
                    this.captchaControl.markAsPristine(),
                    this.captchaControl.setValue("")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(J.H7),t.Y36(Ce),t.Y36(ve))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-data-export"]],
                decls: 26,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [4, "ngIf"], ["id", "data-export-form", 1, "form-container"], ["id", "formatControl", "aria-label", "Select an option", 3, "formControl"], ["translate", "", 1, "radio-label"], ["value", "1", "aria-label", "Export Option JSON"], ["value", "2", "aria-label", "Export Option PDF", "disabled", ""], ["value", "3", "aria-label", "Export Option Excel", "disabled", ""], ["type", "submit", "id", "submitButton", "color", "primary", "mat-raised-button", "", "aria-label", "Button to send the request", 2, "margin-top", "15px", 3, "disabled", "click"], [1, "material-icons"], [1, "hint"], [1, "error"], ["translate", "", 2, "float", "left", "margin-top", "40px", "font-weight", "500", "margin-bottom", "20px"], [1, "captcha-image", 2, "margin-left", "10px", 3, "innerHTML"], ["appearance", "outline", "color", "accent", 2, "margin-top", "10px", "width", "100%"], ["type", "text", "matInput", "", "maxlength", "5", "aria-label", "Input for the CAPTCHA", 3, "formControl", "placeholder"], ["captchaInput", ""], ["align", "end"], ["translate", "", 4, "ngIf"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_REQUEST_DATA_EXPORT"),
                    t.qZA(),
                    t.YNc(4, yr, 3, 1, "div", 3),
                    t.TgZ(5, "div", 4)(6, "mat-radio-group", 5)(7, "mat-label", 6),
                    t._uU(8, "EXPORT_LABEL "),
                    t.TgZ(9, "span"),
                    t._uU(10, ":"),
                    t.qZA()(),
                    t.TgZ(11, "mat-radio-button", 7),
                    t._uU(12, "JSON"),
                    t.qZA(),
                    t.TgZ(13, "mat-radio-button", 8),
                    t._uU(14, "PDF"),
                    t.qZA(),
                    t.TgZ(15, "mat-radio-button", 9),
                    t._uU(16, "Excel"),
                    t.qZA()(),
                    t.YNc(17, Or, 17, 10, "div", 3),
                    t.qZA(),
                    t.TgZ(18, "button", 10),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(19, "i", 11),
                    t._uU(20, " save_alt "),
                    t.qZA(),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.qZA(),
                    t.TgZ(23, "div", 12)(24, "span", 2),
                    t._uU(25, "DATA_EXPORT_HINT"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(4),
                    t.Q6J("ngIf", n.error),
                    t.xp6(2),
                    t.Q6J("formControl", n.formatControl),
                    t.xp6(11),
                    t.Q6J("ngIf", n.presenceOfCaptcha),
                    t.xp6(1),
                    t.Q6J("disabled", n.formatControl.invalid || n.captchaControl.invalid && n.presenceOfCaptcha),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(22, 5, "BTN_REQUEST"), " "))
                },
                dependencies: [T.O5, p.Pi, C.Wh, s.Fj, s.JJ, s.nD, s.oH, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, tt.VQ, tt.U0, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;height:auto;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:25%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:10px;justify-content:center;margin-top:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:16px;margin-left:16px}.radio-label[_ngcontent-%COMP%]{font-weight:500;margin-right:8px}.captcha-image[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:20px}"]
            }),
            o
        }
        )()
          , Lr = (()=>{
            class o {
                constructor(e) {
                    this.sanitizer = e,
                    this.lastLoginIp = "?"
                }
                ngOnInit() {
                    try {
                        this.parseAuthToken()
                    } catch (e) {
                        console.log(e)
                    }
                }
                parseAuthToken() {
                    let e = {};
                    const n = localStorage.getItem("token");
                    n && (e = Ht(n),
                    e.data.lastLoginIp && (this.lastLoginIp = this.sanitizer.bypassSecurityTrustHtml(`<small>${e.data.lastLoginIp}</small>`)))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(J.H7))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-last-login-ip"]],
                decls: 8,
                vars: 1,
                consts: [[1, "ipCard", "mat-elevation-z6"], ["translate", ""], [2, "margin-bottom", "15px"], [3, "innerHTML"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "LAST_LOGIN_IP"),
                    t.qZA(),
                    t.TgZ(3, "p", 2)(4, "span", 1),
                    t._uU(5, "IP_ADDRESS"),
                    t.qZA(),
                    t._uU(6, "\xa0\xa0"),
                    t._UZ(7, "span", 3),
                    t.qZA()()),
                    2 & e && (t.xp6(7),
                    t.Q6J("innerHTML", n.lastLoginIp, t.oJD))
                },
                dependencies: [p.Pi, x.a8],
                styles: [".ipCard[_ngcontent-%COMP%]{display:block;margin:0 auto 5%;min-width:320px;width:25%}"]
            }),
            o
        }
        )()
          , Nr = (()=>{
            class o {
                constructor(e, n) {
                    this._document = e,
                    this.configurationService = n,
                    this.applicationName = "OWASP Juice Shop"
                }
                ngOnInit() {
                    this.applicationUrl = this._document.location.protocol + "//" + this._document.location.hostname,
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n, i;
                        !(null === (n = e?.application) || void 0 === n) && n.name && (this.applicationName = e.application.name),
                        this.privacyContactEmail = null !== (i = e?.application) && void 0 !== i && i.privacyContactEmail ? e.application.privacyContactEmail : `donotreply@${this._document.location.hostname}`
                    }
                    , e=>console.log(e))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(T.K0),t.Y36(L))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-privacy-policy"]],
                decls: 169,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], [1, "privacy-policy"], ["translate", ""], [1, "hot"], ["href", "https://www.freeprivacypolicy.com/", "aria-label", "Link to the page where the privacy policy was created"], [1, "divider"], ["src", "assets/public/images/padding/81px.png"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "section", 1)(2, "h1", 2),
                    t._uU(3, "TITLE_PRIVACY_POLICY"),
                    t.qZA(),
                    t.TgZ(4, "p"),
                    t._uU(5, "Effective date: March 15, 2019"),
                    t.qZA(),
                    t.TgZ(6, "p"),
                    t._uU(7),
                    t.TgZ(8, "span", 3),
                    t._uU(9),
                    t.qZA(),
                    t._uU(10, ' website (the "Service").'),
                    t.qZA(),
                    t.TgZ(11, "p"),
                    t._uU(12),
                    t.TgZ(13, "a", 4),
                    t._uU(14, "Free Privacy Policy website"),
                    t.qZA(),
                    t._uU(15, "."),
                    t.qZA(),
                    t.TgZ(16, "p"),
                    t._uU(17),
                    t.qZA(),
                    t._UZ(18, "mat-divider", 5),
                    t.TgZ(19, "h2"),
                    t._uU(20, "A. Information Collection And Use"),
                    t.qZA(),
                    t.TgZ(21, "p"),
                    t._uU(22, "We collect several different types of information for various purposes to provide and improve our Service to you."),
                    t.qZA(),
                    t.TgZ(23, "h3"),
                    t._uU(24, "A1. Types of Data Collected"),
                    t.qZA(),
                    t.TgZ(25, "h4"),
                    t._uU(26, "A1.1 Personal Data"),
                    t.qZA(),
                    t.TgZ(27, "p"),
                    t._uU(28, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),
                    t.qZA(),
                    t.TgZ(29, "ul")(30, "li"),
                    t._uU(31, "Email address"),
                    t.qZA(),
                    t.TgZ(32, "li"),
                    t._uU(33, "Address, State, Province, ZIP/Postal code, City"),
                    t.qZA(),
                    t.TgZ(34, "li"),
                    t._uU(35, "Cookies and Usage Data"),
                    t.qZA()(),
                    t.TgZ(36, "h4"),
                    t._uU(37, "A1.2 Usage Data"),
                    t.qZA(),
                    t.TgZ(38, "p")(39, "span", 3),
                    t._uU(40, "We may also"),
                    t.qZA(),
                    t._uU(41, ' collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'),
                    t.qZA(),
                    t.TgZ(42, "h4"),
                    t._uU(43, "A1.3 Tracking & Cookies Data"),
                    t.qZA(),
                    t.TgZ(44, "p"),
                    t._uU(45, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."),
                    t.qZA(),
                    t.TgZ(46, "p"),
                    t._uU(47, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."),
                    t.qZA(),
                    t.TgZ(48, "p"),
                    t._uU(49, "You can "),
                    t.TgZ(50, "span", 3),
                    t._uU(51, "instruct you"),
                    t.qZA(),
                    t._uU(52, "r browser "),
                    t.TgZ(53, "span", 3),
                    t._uU(54, "to refuse all"),
                    t.qZA(),
                    t._uU(55, " cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."),
                    t.qZA(),
                    t.TgZ(56, "p"),
                    t._uU(57, "Examples of Cookies we use:"),
                    t.qZA(),
                    t.TgZ(58, "ul")(59, "li")(60, "strong"),
                    t._uU(61, "Session Cookies:"),
                    t.qZA(),
                    t._uU(62, " \xa0We use Session Cookies to operate our Service."),
                    t.qZA(),
                    t.TgZ(63, "li")(64, "strong"),
                    t._uU(65, "Preference Cookies:"),
                    t.qZA(),
                    t._uU(66, "\xa0We use Preference Cookies to remember your preferences and various settings. "),
                    t.qZA(),
                    t.TgZ(67, "li")(68, "strong"),
                    t._uU(69, "Security Cookies:"),
                    t.qZA(),
                    t._uU(70, "\xa0We use Security Cookies for security purposes."),
                    t.qZA()(),
                    t.TgZ(71, "h3"),
                    t._uU(72, "A2. Use of Data"),
                    t.qZA(),
                    t.TgZ(73, "p"),
                    t._uU(74),
                    t.qZA(),
                    t.TgZ(75, "ul")(76, "li"),
                    t._uU(77, "To provide and maintain the Service"),
                    t.qZA(),
                    t.TgZ(78, "li"),
                    t._uU(79, "To notify you about changes to our Service"),
                    t.qZA(),
                    t.TgZ(80, "li"),
                    t._uU(81, "To allow you to participate in interactive features of our Service when you choose to do so"),
                    t.qZA(),
                    t.TgZ(82, "li"),
                    t._uU(83, "To provide customer care and support"),
                    t.qZA(),
                    t.TgZ(84, "li"),
                    t._uU(85, "To provide analysis or valuable information so that we can improve the Service"),
                    t.qZA(),
                    t.TgZ(86, "li"),
                    t._uU(87, "To monitor the usage of the Service"),
                    t.qZA(),
                    t.TgZ(88, "li"),
                    t._uU(89, "To detect, prevent and address technical issues"),
                    t.qZA()(),
                    t._UZ(90, "mat-divider", 5),
                    t.TgZ(91, "h2"),
                    t._uU(92, "B. Transfer Of Data"),
                    t.qZA(),
                    t.TgZ(93, "p"),
                    t._uU(94, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),
                    t.qZA(),
                    t.TgZ(95, "p"),
                    t._uU(96, "If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there."),
                    t.qZA(),
                    t.TgZ(97, "p"),
                    t._uU(98, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."),
                    t.qZA(),
                    t.TgZ(99, "p"),
                    t._uU(100),
                    t.TgZ(101, "span", 3),
                    t._uU(102, "reasonably necessary"),
                    t.qZA(),
                    t._uU(103, " to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."),
                    t.qZA(),
                    t._UZ(104, "mat-divider", 5),
                    t.TgZ(105, "h2"),
                    t._uU(106, "C. Disclosure Of Data"),
                    t.qZA(),
                    t.TgZ(107, "h3"),
                    t._uU(108, "C1. Legal Requirements"),
                    t.qZA(),
                    t.TgZ(109, "p"),
                    t._uU(110),
                    t.qZA(),
                    t.TgZ(111, "ul")(112, "li"),
                    t._uU(113, "To comply with a legal obligation"),
                    t.qZA(),
                    t.TgZ(114, "li"),
                    t._uU(115),
                    t.qZA(),
                    t.TgZ(116, "li"),
                    t._uU(117, "To prevent or investigate possible wrongdoing in connection with the Service"),
                    t.qZA(),
                    t.TgZ(118, "li"),
                    t._uU(119, "To protect the personal safety of users of the Service or the public"),
                    t.qZA(),
                    t.TgZ(120, "li"),
                    t._uU(121, "To protect against legal liability"),
                    t.qZA()(),
                    t._UZ(122, "mat-divider", 5),
                    t.TgZ(123, "h2"),
                    t._uU(124, "D. Security Of Data"),
                    t.qZA(),
                    t.TgZ(125, "p"),
                    t._uU(126, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."),
                    t.qZA(),
                    t._UZ(127, "mat-divider", 5),
                    t.TgZ(128, "h2"),
                    t._uU(129, "E. Service Providers"),
                    t.qZA(),
                    t.TgZ(130, "p"),
                    t._uU(131, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'),
                    t.qZA(),
                    t.TgZ(132, "p"),
                    t._uU(133, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."),
                    t.qZA(),
                    t._UZ(134, "mat-divider", 5),
                    t.TgZ(135, "h2"),
                    t._uU(136, "F. Links To Other Sites"),
                    t.qZA(),
                    t.TgZ(137, "p"),
                    t._uU(138, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."),
                    t.qZA(),
                    t.TgZ(139, "p"),
                    t._uU(140, "We have no control over and assume no "),
                    t.TgZ(141, "span", 3),
                    t._uU(142, "responsibility"),
                    t.qZA(),
                    t._uU(143, " for the content, privacy policies or practices of any third party sites or services."),
                    t.qZA(),
                    t._UZ(144, "mat-divider", 5),
                    t.TgZ(145, "h2"),
                    t._uU(146, "G. Children's Privacy"),
                    t.qZA(),
                    t.TgZ(147, "p"),
                    t._uU(148, 'Our Service does not address anyone under the age of 18 ("Children").'),
                    t.qZA(),
                    t.TgZ(149, "p"),
                    t._uU(150, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."),
                    t.qZA(),
                    t._UZ(151, "mat-divider", 5),
                    t.TgZ(152, "h2"),
                    t._uU(153, "H. Changes To This Privacy Policy"),
                    t.qZA(),
                    t.TgZ(154, "p"),
                    t._uU(155, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."),
                    t.qZA(),
                    t.TgZ(156, "p"),
                    t._uU(157, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),
                    t.qZA(),
                    t.TgZ(158, "p"),
                    t._uU(159, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),
                    t.qZA(),
                    t._UZ(160, "mat-divider", 5),
                    t.TgZ(161, "h2"),
                    t._uU(162, "Contact Us"),
                    t.qZA(),
                    t.TgZ(163, "p"),
                    t._uU(164, "If you have any questions about this Privacy Policy, please contact us:"),
                    t.qZA(),
                    t.TgZ(165, "ul")(166, "li"),
                    t._uU(167),
                    t.qZA()()(),
                    t._UZ(168, "img", 6),
                    t.qZA()),
                    2 & e && (t.xp6(7),
                    t.hij("", n.applicationName, ' ("us", "we", or "our") operates the '),
                    t.xp6(2),
                    t.Oqu(n.applicationUrl),
                    t.xp6(3),
                    t.hij("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for ", n.applicationName, " is created with the help of the "),
                    t.xp6(5),
                    t.hij("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from ", n.applicationUrl, " ."),
                    t.xp6(57),
                    t.hij("", n.applicationName, " uses the collected data for various purposes:"),
                    t.xp6(26),
                    t.hij("", n.applicationName, " will take all steps "),
                    t.xp6(10),
                    t.hij("", n.applicationName, " may disclose your Personal Data in the good faith belief that such action is necessary to:"),
                    t.xp6(5),
                    t.hij("To protect and defend the rights or property of ", n.applicationName, ""),
                    t.xp6(52),
                    t.hij("By email: ", n.privacyContactEmail, ""))
                },
                dependencies: [p.Pi, x.a8, Y.d],
                styles: [".privacy-policy[_ngcontent-%COMP%]{margin-bottom:15px;margin-left:8.33333%;width:83.3333%}p[_ngcontent-%COMP%]{margin-bottom:15px;text-align:justify;text-justify:inter-word}mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;width:90%}h2[_ngcontent-%COMP%]{padding-top:10px}h3[_ngcontent-%COMP%]{font-weight:550}strong[_ngcontent-%COMP%]{font-style:italic;font-weight:550}h4[_ngcontent-%COMP%]{text-decoration:underline}.hot[_ngcontent-%COMP%]:hover{text-shadow:0 0 20px #fefcc9,10px -10px 30px #feec85,-20px -20px 40px #ffae34,20px -40px 50px #ec760c,-20px -60px 60px #cd4606,0 -80px 70px #973716,10px -90px 80px #451b0e}.divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:9%!important;width:82%!important}"]
            }),
            o
        }
        )();
        function Er(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_COUNTRY "),
            t.qZA())
        }
        function qr(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NAME "),
            t.qZA())
        }
        function Mr(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_NUMBER "),
            t.qZA())
        }
        const Dr = function() {
            return {
                range: "1000000-9999999999"
            }
        };
        function Fr(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 18),
            t._uU(1, "INVALID_MOBILE_NUMBER "),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, Dr))
        }
        function Rr(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_ZIP "),
            t.qZA())
        }
        function Yr(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, "MANDATORY_ADDRESS"),
            t.qZA())
        }
        function Br(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 2),
            t._uU(1, " MANDATORY_CITY "),
            t.qZA())
        }
        const Jr = function() {
            return {
                length: "160"
            }
        };
        let Te = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f) {
                    this.location = e,
                    this.formSubmitService = n,
                    this.addressService = i,
                    this.router = r,
                    this.activatedRoute = l,
                    this.translate = u,
                    this.snackBarHelperService = f,
                    this.countryControl = new s.p4("",[s.kI.required]),
                    this.nameControl = new s.p4("",[s.kI.required]),
                    this.numberControl = new s.p4("",[s.kI.required, s.kI.min(1111111), s.kI.max(9999999999)]),
                    this.pinControl = new s.p4("",[s.kI.required, s.kI.maxLength(8)]),
                    this.addressControl = new s.p4("",[s.kI.required, s.kI.maxLength(160)]),
                    this.cityControl = new s.p4("",[s.kI.required]),
                    this.stateControl = new s.p4,
                    this.address = void 0,
                    this.mode = "create",
                    this.addressId = void 0
                }
                ngOnInit() {
                    this.address = {},
                    this.activatedRoute.paramMap.subscribe(e=>{
                        e.has("addressId") ? (this.mode = "edit",
                        this.addressId = e.get("addressId"),
                        this.addressService.getById(this.addressId).subscribe(n=>{
                            this.initializeForm(n)
                        }
                        )) : (this.mode = "create",
                        this.addressId = null)
                    }
                    ),
                    this.formSubmitService.attachEnterKeyHandler("address-form", "submitButton", ()=>this.save())
                }
                save() {
                    this.address.country = this.countryControl.value,
                    this.address.fullName = this.nameControl.value,
                    this.address.mobileNum = this.numberControl.value,
                    this.address.zipCode = this.pinControl.value,
                    this.address.streetAddress = this.addressControl.value,
                    this.address.city = this.cityControl.value,
                    this.address.state = this.stateControl.value,
                    "edit" === this.mode ? this.addressService.put(this.addressId, this.address).subscribe(e=>{
                        this.address = {},
                        this.ngOnInit(),
                        this.resetForm(),
                        this.routeToPreviousUrl(),
                        this.translate.get("ADDRESS_UPDATED", {
                            city: e.city
                        }).subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        )
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        this.address = {},
                        this.resetForm()
                    }
                    ) : this.addressService.save(this.address).subscribe(e=>{
                        this.address = {},
                        this.ngOnInit(),
                        this.resetForm(),
                        this.routeToPreviousUrl(),
                        this.translate.get("ADDRESS_ADDED", {
                            city: e.city
                        }).subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        )
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        this.address = {},
                        this.resetForm()
                    }
                    )
                }
                initializeForm(e) {
                    this.countryControl.setValue(e.country),
                    this.nameControl.setValue(e.fullName),
                    this.numberControl.setValue(e.mobileNum),
                    this.pinControl.setValue(e.zipCode),
                    this.addressControl.setValue(e.streetAddress),
                    this.cityControl.setValue(e.city),
                    this.stateControl.setValue(e.state)
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                resetForm() {
                    this.countryControl.markAsUntouched(),
                    this.countryControl.markAsPristine(),
                    this.countryControl.setValue(""),
                    this.nameControl.markAsUntouched(),
                    this.nameControl.markAsPristine(),
                    this.nameControl.setValue(""),
                    this.numberControl.markAsUntouched(),
                    this.numberControl.markAsPristine(),
                    this.numberControl.setValue(""),
                    this.pinControl.markAsUntouched(),
                    this.pinControl.markAsPristine(),
                    this.pinControl.setValue(""),
                    this.addressControl.markAsUntouched(),
                    this.addressControl.markAsPristine(),
                    this.addressControl.setValue(""),
                    this.cityControl.markAsUntouched(),
                    this.cityControl.markAsPristine(),
                    this.cityControl.setValue(""),
                    this.stateControl.markAsUntouched(),
                    this.stateControl.markAsPristine(),
                    this.stateControl.setValue("")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(T.Ye),t.Y36(W),t.Y36(nt),t.Y36(y.F0),t.Y36(y.gz),t.Y36(p.sK),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-address-create"]],
                decls: 69,
                vars: 49,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "address-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["pin", ""], ["align", "end"], ["id", "address", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", 3, "formControl", "placeholder"], ["adress", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["mat-stroked-button", "", 1, "btn-return", 3, "click"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], ["translate", "", 3, "translateParams"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "mat-card", 1)(2, "h1", 2),
                    t._uU(3, "ADD_NEW_ADDRESS"),
                    t.qZA(),
                    t.TgZ(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label", 2),
                    t._uU(7, "LABEL_COUNTRY"),
                    t.qZA(),
                    t._UZ(8, "input", 5),
                    t.ALo(9, "translate"),
                    t.YNc(10, Er, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(11, "mat-form-field", 4)(12, "mat-label", 2),
                    t._uU(13, "LABEL_NAME"),
                    t.qZA(),
                    t._UZ(14, "input", 5),
                    t.ALo(15, "translate"),
                    t.YNc(16, qr, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(17, "mat-form-field", 4)(18, "mat-label", 2),
                    t._uU(19, "LABEL_MOBILE_NUMBER"),
                    t.qZA(),
                    t._UZ(20, "input", 7),
                    t.ALo(21, "translate"),
                    t.YNc(22, Mr, 2, 0, "mat-error", 6),
                    t.YNc(23, Fr, 2, 2, "mat-error", 8),
                    t.qZA(),
                    t.TgZ(24, "mat-form-field", 4)(25, "mat-label", 2),
                    t._uU(26, "LABEL_ZIP_CODE"),
                    t.qZA(),
                    t._UZ(27, "input", 5, 9),
                    t.ALo(29, "translate"),
                    t.TgZ(30, "mat-hint", 10),
                    t._uU(31),
                    t.qZA(),
                    t.YNc(32, Rr, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(33, "mat-form-field", 4)(34, "mat-label", 2),
                    t._uU(35, "LABEL_ADDRESS"),
                    t.qZA(),
                    t._UZ(36, "textarea", 11, 12),
                    t.ALo(38, "translate"),
                    t.TgZ(39, "mat-hint", 2),
                    t._UZ(40, "i", 13),
                    t.TgZ(41, "em", 14),
                    t._uU(42),
                    t.ALo(43, "translate"),
                    t.qZA()(),
                    t.TgZ(44, "mat-hint", 10),
                    t._uU(45),
                    t.qZA(),
                    t.YNc(46, Yr, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(47, "mat-form-field", 4)(48, "mat-label", 2),
                    t._uU(49, "LABEL_CITY"),
                    t.qZA(),
                    t._UZ(50, "input", 5),
                    t.ALo(51, "translate"),
                    t.YNc(52, Br, 2, 0, "mat-error", 6),
                    t.qZA(),
                    t.TgZ(53, "mat-form-field", 4)(54, "mat-label", 2),
                    t._uU(55, "LABEL_STATE"),
                    t.qZA(),
                    t._UZ(56, "input", 5),
                    t.ALo(57, "translate"),
                    t.qZA()(),
                    t.TgZ(58, "div")(59, "button", 15),
                    t.NdJ("click", function() {
                        return n.routeToPreviousUrl()
                    }),
                    t.TgZ(60, "mat-icon"),
                    t._uU(61, " navigate_before "),
                    t.qZA(),
                    t._uU(62),
                    t.ALo(63, "translate"),
                    t.qZA(),
                    t.TgZ(64, "button", 16),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(65, "i", 17),
                    t._uU(66, " send "),
                    t.qZA(),
                    t._uU(67),
                    t.ALo(68, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(28)
                          , r = t.MAs(37);
                        t.xp6(8),
                        t.Q6J("formControl", n.countryControl)("placeholder", t.lcZ(9, 27, "MANDATORY_COUNTRY")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.countryControl.invalid && n.countryControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.nameControl)("placeholder", t.lcZ(15, 29, "MANDATORY_NAME")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.nameControl.invalid && n.nameControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.numberControl)("placeholder", t.lcZ(21, 31, "MANDATORY_NUMBER")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.numberControl.invalid && n.numberControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.numberControl.invalid && (n.numberControl.errors.min || n.numberControl.errors.max)),
                        t.xp6(4),
                        t.Q6J("formControl", n.pinControl)("placeholder", t.lcZ(29, 33, "MANDATORY_ZIP")),
                        t.xp6(4),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/8"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.pinControl.invalid && n.pinControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.addressControl)("placeholder", t.lcZ(38, 35, "MANDATORY_ADDRESS")),
                        t.xp6(6),
                        t.Oqu(t.xi3(43, 37, "MAX_TEXTAREA_LENGTH", t.DdM(48, Jr))),
                        t.xp6(3),
                        t.hij("", (null == r.value ? null : r.value.length) || 0, "/160"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.addressControl.invalid && n.addressControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.cityControl)("placeholder", t.lcZ(51, 40, "MANDATORY_CITY")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.cityControl.invalid && n.cityControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.stateControl)("placeholder", t.lcZ(57, 42, "STATE_PLACEHOLDER")),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(63, 44, "LABEL_BACK"), " "),
                        t.xp6(2),
                        t.Q6J("disabled", n.countryControl.invalid || n.nameControl.invalid || n.numberControl.invalid || n.pinControl.invalid || n.addressControl.invalid || n.cityControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(68, 46, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [T.O5, p.Pi, C.Wh, s.Fj, s.wV, s.JJ, s.nD, s.oH, O.Hw, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}#submitButton[_ngcontent-%COMP%]{float:right}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.btn-return[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }),
            o
        }
        )()
          , Qr = (()=>{
            class o {
                constructor(e, n) {
                    this.router = e,
                    this.ngZone = n,
                    this.addressId = void 0,
                    this.showNextButton = !0
                }
                getMessage(e) {
                    this.addressId = e
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.F0),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-address-select"]],
                decls: 2,
                vars: 1,
                consts: [["id", "card"], [3, "showNextButton"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t._UZ(1, "app-address", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("showNextButton", n.showNextButton))
                },
                dependencies: [Ot],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;width:100%}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px;margin-top:3px}#card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            o
        }
        )()
          , Hr = (()=>{
            class o {
            }
            return o.\u0275fac = function(e) {
                return new (e || o)
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-saved-address"]],
                decls: 2,
                vars: 1,
                consts: [[1, "main-wrapper"], [3, "allowEdit"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t._UZ(1, "app-address", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowEdit", !0))
                },
                dependencies: [Ot],
                styles: [".main-wrapper[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            o
        }
        )();
        v.vI.add(m.OFe),
        v.vz.watch();
        let Mt = (()=>{
            class o {
                constructor(e) {
                    this.dialogData = e
                }
                ngOnInit() {
                    this.title = this.dialogData.title,
                    this.url = this.dialogData.url,
                    this.address = this.dialogData.address,
                    this.data = this.dialogData.data
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.WI))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-qr-code"]],
                decls: 17,
                vars: 11,
                consts: [[1, "qr-code", "mat-typography"], ["fxLayout", "column", "fxLayoutGap", "10px"], [1, "container"], [3, "href"], [3, "value", "size", "level"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close-dialog"], [1, "fas", "fa-arrow-circle-left", "fa-lg"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "header")(2, "h3"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t.TgZ(5, "div", 1),
                    t._UZ(6, "mat-divider"),
                    t.TgZ(7, "div", 2)(8, "a", 3),
                    t._UZ(9, "qr-code", 4),
                    t.qZA()(),
                    t.TgZ(10, "small"),
                    t._uU(11),
                    t.qZA()(),
                    t.TgZ(12, "footer")(13, "button", 5),
                    t._UZ(14, "i", 6),
                    t._uU(15),
                    t.ALo(16, "translate"),
                    t.qZA()()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 7, n.title)),
                    t.xp6(5),
                    t.Q6J("href", n.url, t.LSH),
                    t.xp6(1),
                    t.Q6J("value", n.data)("size", 300)("level", "M"),
                    t.xp6(2),
                    t.Oqu(n.address),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(16, 9, "BTN_CLOSE"), ""))
                },
                dependencies: [C.xw, C.SQ, qt.V, A.lW, U.ZT, Y.d, p.X$]
            }),
            o
        }
        )()
          , Dt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/wallet/balance"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                put(e) {
                    return this.http.put(this.host, e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , Ct = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Deliverys"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , Ft = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/api/Cards"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                getById(e) {
                    return this.http.get(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                save(e) {
                    return this.http.post(this.host + "/", e).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
                del(e) {
                    return this.http.delete(`${this.host}/${e}`).pipe((0,
                    _.U)(n=>n.data), (0,
                    h.K)(n=>{
                        throw n
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function Gr(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 33)
        }
        function jr(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 33)(1, "mat-radio-button", 34),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.emitSelectionToParent(r.id))
                }),
                t.qZA()()
            }
        }
        function zr(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 35)
        }
        function Kr(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.cardNum, " ")
            }
        }
        function Wr(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 36)
        }
        function $r(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 36),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Oqu(e.fullName)
            }
        }
        function Vr(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 37)
        }
        function Xr(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.AsE("", e.expMonth, "/", e.expYear, "")
            }
        }
        function ts(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 33)
        }
        function es(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 33)(1, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.delete(r.id))
                }),
                t._UZ(2, "i", 39),
                t.qZA()()
            }
        }
        function os(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function ns(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function as(o, a) {
            if (1 & o && (t.TgZ(0, "div")(1, "mat-table", 17),
            t.ynx(2, 18),
            t.YNc(3, Gr, 1, 0, "mat-header-cell", 19),
            t.YNc(4, jr, 2, 0, "mat-cell", 20),
            t.BQk(),
            t.ynx(5, 21),
            t.YNc(6, zr, 1, 0, "mat-header-cell", 22),
            t.YNc(7, Kr, 2, 1, "mat-cell", 23),
            t.BQk(),
            t.ynx(8, 24),
            t.YNc(9, Wr, 1, 0, "mat-header-cell", 25),
            t.YNc(10, $r, 2, 1, "mat-cell", 26),
            t.BQk(),
            t.ynx(11, 27),
            t.YNc(12, Vr, 1, 0, "mat-header-cell", 28),
            t.YNc(13, Xr, 2, 2, "mat-cell", 29),
            t.BQk(),
            t.ynx(14, 30),
            t.YNc(15, ts, 1, 0, "mat-header-cell", 19),
            t.YNc(16, es, 3, 0, "mat-cell", 20),
            t.BQk(),
            t.YNc(17, os, 1, 0, "mat-header-row", 31),
            t.YNc(18, ns, 1, 0, "mat-row", 32),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("dataSource", e.dataSource),
                t.xp6(16),
                t.Q6J("matHeaderRowDef", e.displayedColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", e.displayedColumns)
            }
        }
        function is(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_NAME "),
            t.qZA())
        }
        function rs(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_CARD_NUMBER "),
            t.qZA())
        }
        function ss(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " VALID_CARD_NUMBER "),
            t.qZA())
        }
        function ls(o, a) {
            if (1 & o && (t.TgZ(0, "option", 40),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.s9C("value", e),
                t.xp6(1),
                t.Oqu(e)
            }
        }
        function cs(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_EXPIRY_MONTH "),
            t.qZA())
        }
        function us(o, a) {
            if (1 & o && (t.TgZ(0, "option", 40),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.s9C("value", e),
                t.xp6(1),
                t.Oqu(e)
            }
        }
        function ds(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 5),
            t._uU(1, " MANDATORY_EXPIRY_YEAR "),
            t.qZA())
        }
        v.vI.add(m.XCy, R.I7),
        v.vz.watch();
        let be = (()=>{
            class o {
                constructor(e, n, i) {
                    this.paymentService = e,
                    this.translate = n,
                    this.snackBarHelperService = i,
                    this.emitSelection = new t.vpe,
                    this.allowDelete = !1,
                    this.displayedColumns = ["Number", "Name", "Expiry"],
                    this.nameControl = new s.p4("",[s.kI.required]),
                    this.numberControl = new s.p4("",[s.kI.required, s.kI.min(1e15), s.kI.max(1e16)]),
                    this.monthControl = new s.p4("",[s.kI.required]),
                    this.yearControl = new s.p4("",[s.kI.required]),
                    this.card = {},
                    this.cardsExist = !1,
                    this.paymentId = void 0
                }
                ngOnInit() {
                    this.monthRange = Array.from(Array(12).keys()).map(e=>e + 1),
                    this.yearRange = Array.from(Array(20).keys()).map(e=>e + 2080),
                    this.allowDelete ? this.displayedColumns.push("Remove") : this.displayedColumns.unshift("Selection"),
                    this.load()
                }
                load() {
                    this.paymentService.get().subscribe(e=>{
                        this.cardsExist = e.length,
                        this.storedCards = e,
                        this.dataSource = new c.by(this.storedCards)
                    }
                    , e=>console.log(e))
                }
                save() {
                    this.card.fullName = this.nameControl.value,
                    this.card.cardNum = this.numberControl.value,
                    this.card.expMonth = this.monthControl.value,
                    this.card.expYear = this.yearControl.value,
                    this.paymentService.save(this.card).subscribe(e=>{
                        this.error = null,
                        this.translate.get("CREDIT_CARD_SAVED", {
                            cardnumber: String(e.cardNum).substring(String(e.cardNum).length - 4)
                        }).subscribe(n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        , n=>{
                            this.snackBarHelperService.open(n, "confirmBar")
                        }
                        ),
                        this.load(),
                        this.resetForm()
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        this.resetForm()
                    }
                    )
                }
                delete(e) {
                    this.paymentService.del(e).subscribe(()=>{
                        this.load()
                    }
                    , n=>console.log(n))
                }
                emitSelectionToParent(e) {
                    this.emitSelection.emit(e)
                }
                resetForm() {
                    this.nameControl.markAsUntouched(),
                    this.nameControl.markAsPristine(),
                    this.nameControl.setValue(""),
                    this.numberControl.markAsUntouched(),
                    this.numberControl.markAsPristine(),
                    this.numberControl.setValue(""),
                    this.monthControl.markAsUntouched(),
                    this.monthControl.markAsPristine(),
                    this.monthControl.setValue(""),
                    this.yearControl.markAsUntouched(),
                    this.yearControl.markAsPristine(),
                    this.yearControl.setValue("")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Ft),t.Y36(p.sK),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-payment-method"]],
                inputs: {
                    allowDelete: "allowDelete"
                },
                outputs: {
                    emitSelection: "emitSelection"
                },
                decls: 46,
                vars: 26,
                consts: [["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngIf"], [1, "mat-elevation-z0"], [2, "margin-bottom", "12px"], ["appearance", "outline", "color", "accent"], ["translate", ""], ["type", "text", "matInput", "", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl"], ["cardIn", ""], ["align", "end"], ["appearance", "outline", "color", "accent", 2, "width", "45%", "margin-right", "10%"], ["matNativeControl", "", "required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "color", "accent", 2, "width", "45%"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "material-icons"], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Number"], ["fxFlex", "35%", 4, "matHeaderCellDef"], ["fxFlex", "35%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Expiry"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxFlex", "15%"], [3, "click"], ["fxFlex", "35%"], ["fxFlex", "30%"], ["fxFlex", "20%"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "value"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "h1"),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.YNc(4, as, 19, 3, "div", 1),
                    t.TgZ(5, "div")(6, "mat-expansion-panel", 2)(7, "mat-expansion-panel-header", 3)(8, "mat-panel-title"),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA(),
                    t.TgZ(11, "mat-panel-description"),
                    t._uU(12),
                    t.ALo(13, "translate"),
                    t.qZA()(),
                    t.TgZ(14, "div")(15, "mat-form-field", 4)(16, "mat-label", 5),
                    t._uU(17, "LABEL_NAME"),
                    t.qZA(),
                    t._UZ(18, "input", 6),
                    t.YNc(19, is, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(20, "mat-form-field", 4)(21, "mat-label", 5),
                    t._uU(22, "LABEL_CARD_NUMBER"),
                    t.qZA(),
                    t._UZ(23, "input", 8, 9),
                    t.TgZ(25, "mat-hint", 10),
                    t._uU(26),
                    t.qZA(),
                    t.YNc(27, rs, 2, 0, "mat-error", 7),
                    t.YNc(28, ss, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(29, "mat-form-field", 11)(30, "mat-label", 5),
                    t._uU(31, "LABEL_EXPIRY_MONTH"),
                    t.qZA(),
                    t.TgZ(32, "select", 12),
                    t.YNc(33, ls, 2, 2, "option", 13),
                    t.qZA(),
                    t.YNc(34, cs, 2, 0, "mat-error", 7),
                    t.qZA(),
                    t.TgZ(35, "mat-form-field", 14)(36, "mat-label", 5),
                    t._uU(37, "LABEL_EXPIRY_YEAR"),
                    t.qZA(),
                    t.TgZ(38, "select", 12),
                    t.YNc(39, us, 2, 2, "option", 13),
                    t.qZA(),
                    t.YNc(40, ds, 2, 0, "mat-error", 7),
                    t.qZA()(),
                    t.TgZ(41, "button", 15),
                    t.NdJ("click", function() {
                        return n.save()
                    }),
                    t.TgZ(42, "i", 16),
                    t._uU(43, " send "),
                    t.qZA(),
                    t._uU(44),
                    t.ALo(45, "translate"),
                    t.qZA()()()()),
                    2 & e) {
                        const i = t.MAs(24);
                        t.xp6(2),
                        t.Oqu(t.lcZ(3, 18, "MY_PAYMENT_OPTIONS")),
                        t.xp6(2),
                        t.Q6J("ngIf", n.cardsExist),
                        t.xp6(5),
                        t.hij(" ", t.lcZ(10, 20, "ADD_NEW_CARD"), " "),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(13, 22, "ADD_NEW_CARD_DESCRIPTION"), " "),
                        t.xp6(6),
                        t.Q6J("formControl", n.nameControl),
                        t.xp6(1),
                        t.Q6J("ngIf", n.nameControl.invalid && n.nameControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.numberControl),
                        t.xp6(3),
                        t.hij("", (null == i.value ? null : i.value.length) || 0, "/16"),
                        t.xp6(1),
                        t.Q6J("ngIf", n.numberControl.invalid && n.numberControl.errors.required),
                        t.xp6(1),
                        t.Q6J("ngIf", n.numberControl.invalid && (n.numberControl.errors.min || n.numberControl.errors.max)),
                        t.xp6(4),
                        t.Q6J("formControl", n.monthControl),
                        t.xp6(1),
                        t.Q6J("ngForOf", n.monthRange),
                        t.xp6(1),
                        t.Q6J("ngIf", n.monthControl.invalid && n.monthControl.errors.required),
                        t.xp6(4),
                        t.Q6J("formControl", n.yearControl),
                        t.xp6(1),
                        t.Q6J("ngForOf", n.yearRange),
                        t.xp6(1),
                        t.Q6J("ngIf", n.yearControl.invalid && n.yearControl.errors.required),
                        t.xp6(1),
                        t.Q6J("disabled", n.nameControl.invalid || n.numberControl.invalid || n.monthControl.invalid || n.yearControl.invalid),
                        t.xp6(3),
                        t.hij(" ", t.lcZ(45, 24, "BTN_SUBMIT"), " ")
                    }
                },
                dependencies: [T.sg, T.O5, p.Pi, C.xw, C.SQ, C.yH, s.YN, s.Kr, s.Fj, s.wV, s.EJ, s.JJ, s.Q7, s.oH, g.TO, g.KE, g.bx, g.hX, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, P.Nt, B.ib, B.yz, B.yK, B.u4, tt.U0, p.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }),
            o
        }
        )();
        function ps(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14),
                t._uU(4, "LABEL_PAY_USING_WALLET"),
                t.qZA()(),
                t.TgZ(5, "div", 15)(6, "b")(7, "span", 14),
                t._uU(8, "LABEL_WALLET_BALANCE"),
                t.qZA(),
                t.TgZ(9, "span", 16),
                t._uU(10),
                t.qZA()()(),
                t.TgZ(11, "div", 17)(12, "button", 18),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.useWallet())
                }),
                t._UZ(13, "i", 19),
                t._uU(14),
                t.ALo(15, "translate"),
                t.qZA()()()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(10),
                t.hij(" ", e.walletBalanceStr, ""),
                t.xp6(2),
                t.Q6J("disabled", e.walletBalance - e.totalPrice < 0),
                t.xp6(2),
                t.AsE(" ", t.lcZ(15, 4, "LABEL_PAY"), " ", null == e.totalPrice ? null : e.totalPrice.toFixed(2), "\xa4 ")
            }
        }
        function ms(o, a) {
            if (1 & o && (t.TgZ(0, "div", 31),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("", e.couponConfirmation, " ")
            }
        }
        function hs(o, a) {
            if (1 & o && (t.TgZ(0, "div", 32),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("", null == e.couponError ? null : e.couponError.error, " ")
            }
        }
        function _s(o, a) {
            1 & o && (t.TgZ(0, "mat-error"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "COUPON_CODE_HINT"), " "))
        }
        const gs = function(o, a) {
            return {
                twitter: o,
                facebook: a
            }
        };
        function fs(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-expansion-panel", 20)(1, "mat-expansion-panel-header", 21)(2, "mat-panel-title"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA(),
                t.TgZ(5, "mat-panel-description"),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA()(),
                t.YNc(8, ms, 2, 1, "div", 22),
                t.YNc(9, hs, 2, 1, "div", 23),
                t.TgZ(10, "mat-form-field", 24)(11, "mat-label", 8),
                t._uU(12, "LABEL_COUPON"),
                t.qZA(),
                t._UZ(13, "mat-hint", 25),
                t.ALo(14, "translate"),
                t._UZ(15, "input", 26, 27),
                t.ALo(17, "translate"),
                t.TgZ(18, "mat-hint", 28),
                t._uU(19),
                t.qZA(),
                t.YNc(20, _s, 3, 3, "mat-error", 29),
                t.qZA(),
                t.TgZ(21, "button", 30),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.applyCoupon())
                }),
                t.TgZ(22, "mat-icon"),
                t._uU(23, " redeem "),
                t.qZA(),
                t._uU(24),
                t.ALo(25, "translate"),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.MAs(16)
                  , n = t.oxw();
                t.Q6J("expanded", n.couponPanelExpanded),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 12, "ADD_A_COUPON"), " "),
                t.xp6(3),
                t.hij(" ", t.lcZ(7, 14, "VOUCHERS_AND_PROMOTIONAL_CODE"), " "),
                t.xp6(2),
                t.Q6J("ngIf", n.couponConfirmation && !n.couponControl.dirty),
                t.xp6(1),
                t.Q6J("ngIf", n.couponError && !n.couponControl.dirty),
                t.xp6(4),
                t.Q6J("innerHtml", t.xi3(14, 16, "FOLLOW_FOR_MONTHLY_COUPONS", t.WLB(23, gs, n.twitterUrl, n.facebookUrl)), t.oJD),
                t.xp6(2),
                t.s9C("placeholder", t.lcZ(17, 19, "ENTER_COUPON_CODE")),
                t.Q6J("formControl", n.couponControl),
                t.xp6(4),
                t.hij("", (null == e.value ? null : e.value.length) || 0, "/10"),
                t.xp6(1),
                t.Q6J("ngIf", n.couponControl.invalid && (n.couponControl.errors.minlength || n.couponControl.errors.maxlength)),
                t.xp6(1),
                t.Q6J("disabled", n.couponControl.invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(25, 21, "BTN_REDEEM"), " ")
            }
        }
        const xe = function() {
            return {
                juiceshop: "OWASP Juice Shop"
            }
        };
        function Cs(o, a) {
            1 & o && (t.TgZ(0, "span", 56),
            t._uU(1, "THANKS_FOR_SUPPORT"),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, xe))
        }
        const Ae = function(o) {
            return {
                appname: o
            }
        };
        function vs(o, a) {
            if (1 & o && (t.TgZ(0, "span", 56),
            t._uU(1, "THANKS_FOR_SUPPORT_CUSTOMIZED"),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("translateParams", t.VKq(1, Ae, e.applicationName))
            }
        }
        function Ts(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showBitcoinQrCode())
                }),
                t._UZ(1, "i", 58),
                t._uU(2, " Bitcoin "),
                t.qZA()
            }
        }
        function bs(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showDashQrCode())
                }),
                t.TgZ(1, "i", 59),
                t._uU(2, "\xd0"),
                t.qZA(),
                t._uU(3, " Dash"),
                t.qZA()
            }
        }
        function xs(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.showEtherQrCode())
                }),
                t._UZ(1, "i", 60),
                t._uU(2, " Ether "),
                t.qZA()
            }
        }
        function As(o, a) {
            1 & o && (t.TgZ(0, "span", 56),
            t._uU(1, "OFFICIAL_MERCHANDISE_STORES"),
            t.qZA()),
            2 & o && t.Q6J("translateParams", t.DdM(1, xe))
        }
        function Zs(o, a) {
            if (1 & o && (t.TgZ(0, "span", 56),
            t._uU(1, "OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED"),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.Q6J("translateParams", t.VKq(1, Ae, e.applicationName))
            }
        }
        function ws(o, a) {
            if (1 & o && (t.TgZ(0, "mat-expansion-panel", 33)(1, "mat-expansion-panel-header", 21)(2, "mat-panel-title"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()(),
            t.TgZ(5, "div", 34)(6, "div", 35)(7, "div", 36)(8, "label", 8),
            t._uU(9, "LABEL_DONATIONS"),
            t.qZA()(),
            t.TgZ(10, "small"),
            t._uU(11, " ("),
            t.YNc(12, Cs, 2, 2, "span", 37),
            t.YNc(13, vs, 2, 3, "span", 37),
            t._UZ(14, "i", 38),
            t._uU(15, ") "),
            t.qZA(),
            t.TgZ(16, "div", 39)(17, "a", 40)(18, "button", 41),
            t._UZ(19, "i", 42),
            t._uU(20),
            t.ALo(21, "translate"),
            t.qZA()(),
            t.YNc(22, Ts, 3, 0, "button", 43),
            t.YNc(23, bs, 4, 0, "button", 43),
            t.YNc(24, xs, 3, 0, "button", 43),
            t.qZA()(),
            t._UZ(25, "span", 44),
            t.TgZ(26, "div", 45)(27, "div", 36)(28, "label", 8),
            t._uU(29, "LABEL_MERCHANDISE"),
            t.qZA()(),
            t.TgZ(30, "small"),
            t._uU(31, " ("),
            t.YNc(32, As, 2, 2, "span", 37),
            t.YNc(33, Zs, 2, 3, "span", 37),
            t._UZ(34, "i", 46),
            t._uU(35, ") "),
            t.qZA(),
            t.TgZ(36, "div", 39)(37, "a", 47)(38, "button", 41),
            t._UZ(39, "i", 48),
            t._uU(40, " Spreadshirt (US)"),
            t.qZA()(),
            t.TgZ(41, "a", 49)(42, "button", 41),
            t._UZ(43, "i", 48),
            t._uU(44, " Spreadshirt (DE)"),
            t.qZA()(),
            t.TgZ(45, "a", 50)(46, "button", 41),
            t._UZ(47, "i", 51),
            t._uU(48, " StickerYou"),
            t.qZA()(),
            t.TgZ(49, "a", 52)(50, "button", 41),
            t._UZ(51, "i", 53),
            t._uU(52, " Leanpub"),
            t.qZA()(),
            t.TgZ(53, "a", 54)(54, "button", 41),
            t._UZ(55, "i", 55),
            t._uU(56, " OpenSea"),
            t.qZA()()()()()()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("expanded", e.paymentPanelExpanded),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 10, "OTHER_PAYMENT_OPTIONS"), " "),
                t.xp6(9),
                t.Q6J("ngIf", "OWASP Juice Shop" === e.applicationName),
                t.xp6(1),
                t.Q6J("ngIf", "OWASP Juice Shop" !== e.applicationName),
                t.xp6(7),
                t.hij(" ", t.lcZ(21, 12, "BTN_CREDIT_CARD"), ""),
                t.xp6(2),
                t.Q6J("ngIf", !1),
                t.xp6(1),
                t.Q6J("ngIf", !1),
                t.xp6(1),
                t.Q6J("ngIf", !1),
                t.xp6(8),
                t.Q6J("ngIf", "OWASP Juice Shop" === e.applicationName),
                t.xp6(1),
                t.Q6J("ngIf", "OWASP Juice Shop" !== e.applicationName)
            }
        }
        function Ss(o, a) {
            1 & o && (t.TgZ(0, "span", 8),
            t._uU(1, "REVIEW_ALERT"),
            t.qZA())
        }
        function ys(o, a) {
            1 & o && (t.TgZ(0, "span", 8),
            t._uU(1, "REVIEW_WALLET"),
            t.qZA())
        }
        v.vI.add(m.bMA, m.Cly, m.m6i, D.To0, m.u8Q, m.Dfm, m.L4e, m.oFW, m.SvR, m.NBC, D.uy2, m.q2v),
        v.vz.watch();
        let Is = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w, S, $, et, ot) {
                    this.location = e,
                    this.cookieService = n,
                    this.userService = i,
                    this.deliveryService = r,
                    this.walletService = l,
                    this.router = u,
                    this.dialog = f,
                    this.configurationService = b,
                    this.basketService = w,
                    this.translate = S,
                    this.activatedRoute = $,
                    this.ngZone = et,
                    this.snackBarHelperService = ot,
                    this.card = {},
                    this.twitterUrl = null,
                    this.facebookUrl = null,
                    this.applicationName = "OWASP Juice Shop",
                    this.couponControl = new s.p4("",[s.kI.required, s.kI.minLength(10), s.kI.maxLength(10)]),
                    this.paymentId = void 0,
                    this.couponPanelExpanded = !1,
                    this.paymentPanelExpanded = !1,
                    this.walletBalance = 0,
                    this.totalPrice = 0,
                    this.paymentMode = "card",
                    this.campaigns = {
                        WMNSDY2019: {
                            validOn: 15519996e5,
                            discount: 75
                        },
                        WMNSDY2020: {
                            validOn: 1583622e6,
                            discount: 60
                        },
                        WMNSDY2021: {
                            validOn: 1615158e6,
                            discount: 60
                        },
                        WMNSDY2022: {
                            validOn: 1646694e6,
                            discount: 60
                        },
                        WMNSDY2023: {
                            validOn: 167823e7,
                            discount: 60
                        },
                        ORANGE2020: {
                            validOn: 15885468e5,
                            discount: 50
                        },
                        ORANGE2021: {
                            validOn: 16200828e5,
                            discount: 40
                        },
                        ORANGE2022: {
                            validOn: 16516188e5,
                            discount: 40
                        },
                        ORANGE2023: {
                            validOn: 16831548e5,
                            discount: 40
                        }
                    }
                }
                ngOnInit() {
                    this.initTotal(),
                    this.walletService.get().subscribe(e=>{
                        this.walletBalance = e,
                        this.walletBalanceStr = parseFloat(e).toFixed(2)
                    }
                    , e=>console.log(e)),
                    this.couponPanelExpanded = !!localStorage.getItem("couponPanelExpanded") && JSON.parse(localStorage.getItem("couponPanelExpanded")),
                    this.paymentPanelExpanded = !!localStorage.getItem("paymentPanelExpanded") && JSON.parse(localStorage.getItem("paymentPanelExpanded")),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        null !== (n = e?.application) && void 0 !== n && n.social && (e.application.social.twitterUrl && (this.twitterUrl = e.application.social.twitterUrl),
                        e.application.social.facebookUrl && (this.facebookUrl = e.application.social.facebookUrl),
                        e.application.name && (this.applicationName = e.application.name))
                    }
                    , e=>console.log(e))
                }
                initTotal() {
                    this.activatedRoute.paramMap.subscribe(e=>{
                        if (this.mode = e.get("entity"),
                        "wallet" === this.mode)
                            this.totalPrice = parseFloat(sessionStorage.getItem("walletTotal"));
                        else if ("deluxe" === this.mode)
                            this.userService.deluxeStatus().subscribe(n=>{
                                this.totalPrice = n.membershipCost
                            }
                            , n=>console.log(n));
                        else {
                            const n = parseFloat(sessionStorage.getItem("itemTotal"))
                              , i = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * n : 0;
                            this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(r=>{
                                this.totalPrice = n + r.price - i
                            }
                            )
                        }
                    }
                    , e=>console.log(e))
                }
                applyCoupon() {
                    this.campaignCoupon = this.couponControl.value,
                    this.clientDate = new Date;
                    const e = 60 * (this.clientDate.getTimezoneOffset() + 60) * 1e3;
                    this.clientDate.setHours(0, 0, 0, 0),
                    this.clientDate = this.clientDate.getTime() - e,
                    sessionStorage.setItem("couponDetails", `${this.campaignCoupon}-${this.clientDate}`);
                    const n = this.campaigns[this.couponControl.value];
                    n ? this.clientDate === n.validOn ? this.showConfirmation(n.discount) : (this.couponConfirmation = void 0,
                    this.translate.get("INVALID_COUPON").subscribe(i=>{
                        this.couponError = {
                            error: i
                        }
                    }
                    , i=>{
                        this.couponError = {
                            error: i
                        }
                    }
                    ),
                    this.resetCouponForm()) : this.basketService.applyCoupon(Number(sessionStorage.getItem("bid")), encodeURIComponent(this.couponControl.value)).subscribe(i=>{
                        this.showConfirmation(i)
                    }
                    , i=>{
                        this.couponConfirmation = void 0,
                        this.couponError = i,
                        this.resetCouponForm()
                    }
                    )
                }
                showConfirmation(e) {
                    this.resetCouponForm(),
                    this.couponError = void 0,
                    sessionStorage.setItem("couponDiscount", e),
                    this.translate.get("DISCOUNT_APPLIED", {
                        discount: e
                    }).subscribe(n=>{
                        this.couponConfirmation = n
                    }
                    , n=>{
                        this.couponConfirmation = n
                    }
                    ),
                    this.initTotal()
                }
                getMessage(e) {
                    this.paymentId = e,
                    this.paymentMode = "card"
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                choosePayment() {
                    var e = this;
                    if (sessionStorage.removeItem("itemTotal"),
                    "wallet" === this.mode)
                        this.walletService.put({
                            balance: this.totalPrice,
                            paymentId: this.paymentId
                        }).subscribe(()=>{
                            sessionStorage.removeItem("walletTotal"),
                            this.ngZone.run((0,
                            k.Z)(function*() {
                                return yield e.router.navigate(["/wallet"])
                            })),
                            this.snackBarHelperService.open("CHARGED_WALLET", "confirmBar")
                        }
                        , n=>{
                            var i;
                            console.log(n),
                            this.snackBarHelperService.open(null === (i = n.error) || void 0 === i ? void 0 : i.message, "errorBar")
                        }
                        );
                    else if ("deluxe" === this.mode)
                        this.userService.upgradeToDeluxe(this.paymentMode, this.paymentId).subscribe(n=>{
                            localStorage.setItem("token", n.token),
                            this.cookieService.put("token", n.token),
                            this.ngZone.run((0,
                            k.Z)(function*() {
                                return yield e.router.navigate(["/deluxe-membership"])
                            }))
                        }
                        , n=>console.log(n));
                    else {
                        if ("wallet" === this.paymentMode) {
                            if (this.walletBalance < this.totalPrice)
                                return void this.snackBarHelperService.open("INSUFFICIENT_WALLET_BALANCE", "errorBar");
                            sessionStorage.setItem("paymentId", "wallet")
                        } else
                            sessionStorage.setItem("paymentId", this.paymentId);
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/order-summary"])
                        }))
                    }
                }
                noop() {}
                showBitcoinQrCode() {
                    this.dialog.open(Mt, {
                        data: {
                            data: "bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            url: "./redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            address: "1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            title: "TITLE_BITCOIN_ADDRESS"
                        }
                    })
                }
                showDashQrCode() {
                    this.dialog.open(Mt, {
                        data: {
                            data: "dash:Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            url: "./redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            address: "Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            title: "TITLE_DASH_ADDRESS"
                        }
                    })
                }
                showEtherQrCode() {
                    this.dialog.open(Mt, {
                        data: {
                            data: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            url: "./redirect?to=https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6",
                            address: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            title: "TITLE_ETHER_ADDRESS"
                        }
                    })
                }
                useWallet() {
                    this.paymentMode = "wallet",
                    this.choosePayment()
                }
                resetCouponForm() {
                    this.couponControl.setValue(""),
                    this.couponControl.markAsPristine(),
                    this.couponControl.markAsUntouched()
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(T.Ye),t.Y36(q.N_),t.Y36(N),t.Y36(Ct),t.Y36(Dt),t.Y36(y.F0),t.Y36(U.uw),t.Y36(L),t.Y36(H),t.Y36(p.sK),t.Y36(y.gz),t.Y36(t.R0b),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-payment"]],
                decls: 24,
                vars: 10,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete", "emitSelection"], ["class", "mat-elevation-z0", "class", "custom-card", 4, "ngIf"], ["class", "mat-elevation-z0", "id", "collapseCouponElement", 3, "expanded", 4, "ngIf"], ["class", "mat-elevation-z0", 3, "expanded", 4, "ngIf"], [2, "margin-top", "20px", "margin-bottom", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to review", 1, "btn", "nextButton", 3, "disabled", "click"], ["translate", ""], [2, "text-align", "center", "margin-top", "-27px"], ["translate", "", 4, "ngIf"], [1, "custom-card"], ["fxLayout", "row"], ["fxFlex", "42%"], ["translate", "", 1, "card-title"], ["fxFlex", "38%"], [1, "confirmation", "card-title"], ["fxFlex", "20%"], ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "btn", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-hand-holding-usd", "fa-lg"], ["id", "collapseCouponElement", 1, "mat-elevation-z0", 3, "expanded"], [1, "detail-divider"], ["style", "margin-top:5px;", "class", "confirmation", 4, "ngIf"], ["style", "margin-top:5px;", "class", "error", 4, "ngIf"], ["appearance", "outline", "color", "accent"], [3, "innerHtml"], ["id", "coupon", "matInput", "", "type", "text", 3, "formControl", "placeholder"], ["coupon", ""], ["align", "end"], [4, "ngIf"], ["type", "submit", "id", "applyCouponButton", "color", "accent", "mat-raised-button", "", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "confirmation", 2, "margin-top", "5px"], [1, "error", 2, "margin-top", "5px"], [1, "mat-elevation-z0", 3, "expanded"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "34%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "payment-label"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "fas", "fa-heart", "error", 2, "margin-left", "3px"], [1, "button-container", 2, "margin-top", "6px"], ["href", "https://pwning.owasp-juice.shop/part3/donations.html"], ["mat-stroked-button", ""], [1, "fab", "fa-stripe", "fa-lg"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "65%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "fas", "fa-thumbs-up", "confirmation", 2, "margin-left", "3px"], ["href", "./redirect?to=http://shop.spreadshirt.com/juiceshop"], [1, "fas", "fa-tshirt", "fa-lg"], ["href", "./redirect?to=http://shop.spreadshirt.de/juiceshop"], ["href", "./redirect?to=https://www.stickeryou.com/products/owasp-juice-shop/794"], [1, "fas", "fa-sticky-note", "fa-lg"], ["href", "./redirect?to=http://leanpub.com/juice-shop"], [1, "fab", "fa-leanpub", "fa-lg"], ["href", "https://opensea.io/collection/juice-shop"], [1, "fas", "fa-palette", "fa-lg"], ["translate", "", 3, "translateParams"], ["mat-stroked-button", "", 3, "click"], [1, "fab", "fa-btc", "fa-lg"], [1, "fa-lg"], [1, "fab", "fa-ethereum", "fa-lg"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "app-payment-method", 1),
                    t.NdJ("emitSelection", function(r) {
                        return n.getMessage(r)
                    }),
                    t.qZA(),
                    t._UZ(3, "mat-divider"),
                    t.YNc(4, ps, 16, 6, "div", 2),
                    t._UZ(5, "mat-divider"),
                    t.YNc(6, fs, 26, 26, "mat-expansion-panel", 3),
                    t._UZ(7, "mat-divider"),
                    t.YNc(8, ws, 57, 14, "mat-expansion-panel", 4),
                    t._UZ(9, "mat-divider"),
                    t.TgZ(10, "div", 5)(11, "button", 6),
                    t.NdJ("click", function() {
                        return n.routeToPreviousUrl()
                    }),
                    t.TgZ(12, "mat-icon"),
                    t._uU(13, " navigate_before "),
                    t.qZA(),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.TgZ(16, "button", 7),
                    t.NdJ("click", function() {
                        return n.choosePayment()
                    }),
                    t.TgZ(17, "mat-icon"),
                    t._uU(18, " navigate_next "),
                    t.qZA(),
                    t.TgZ(19, "span", 8),
                    t._uU(20, "LABEL_CONTINUE"),
                    t.qZA()(),
                    t.TgZ(21, "p", 9),
                    t.YNc(22, Ss, 2, 0, "span", 10),
                    t.YNc(23, ys, 2, 0, "span", 10),
                    t.qZA()()()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("allowDelete", !1),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== n.mode),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== n.mode),
                    t.xp6(2),
                    t.Q6J("ngIf", "wallet" !== n.mode),
                    t.xp6(6),
                    t.hij(" ", t.lcZ(15, 8, "LABEL_BACK"), " "),
                    t.xp6(2),
                    t.Q6J("disabled", void 0 === n.paymentId && "wallet" !== n.paymentMode),
                    t.xp6(6),
                    t.Q6J("ngIf", "deluxe" !== n.mode && "wallet" !== n.mode),
                    t.xp6(1),
                    t.Q6J("ngIf", "wallet" === n.mode))
                },
                dependencies: [T.O5, p.Pi, C.xw, C.yH, s.Fj, s.JJ, s.oH, O.Hw, g.TO, g.KE, g.bx, g.hX, A.lW, x.a8, P.Nt, Y.d, B.ib, B.yz, B.yK, B.u4, be, p.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-card[_ngcontent-%COMP%]{height:auto}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px}.custom-card[_ngcontent-%COMP%]{padding:18px 24px}.card-title[_ngcontent-%COMP%]{font-size:15px;line-height:36px;vertical-align:middle}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.mat-card[_ngcontent-%COMP%]   .mat-divider-horizontal[_ngcontent-%COMP%]{position:relative!important}"]
            }),
            o
        }
        )()
          , Us = (()=>{
            class o {
            }
            return o.\u0275fac = function(e) {
                return new (e || o)
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-saved-payment-methods"]],
                decls: 2,
                vars: 1,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t._UZ(1, "app-payment-method", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("allowDelete", !0))
                },
                dependencies: [x.a8, be],
                styles: [".mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }),
            o
        }
        )()
          , Rt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/order-history"
                }
                get() {
                    return this.http.get(this.host).pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                getAll() {
                    return this.http.get(this.host + "/orders").pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
                toggleDeliveryStatus(e, n) {
                    return this.http.put(`${this.host}/${e}/delivery-status`, n).pipe((0,
                    _.U)(i=>i.data), (0,
                    h.K)(i=>{
                        throw i
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        const ks = ["paginatorOrderHistory"]
          , Os = ["paginator"];
        function Ps(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 32)
        }
        function Ls(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 33),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.orderId, "")
            }
        }
        function Ns(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 34)
        }
        function Es(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", null == e.totalPrice ? null : e.totalPrice.toFixed(2), "\xa4")
            }
        }
        function qs(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 36)
        }
        function Ms(o, a) {
            1 & o && (t.TgZ(0, "div", 40),
            t._uU(1, "LABEL_IN_TRANSIT"),
            t.qZA())
        }
        function Ds(o, a) {
            1 & o && (t.TgZ(0, "div", 41),
            t._uU(1, "LABEL_DELIVERED"),
            t.qZA())
        }
        function Fs(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 37),
            t.YNc(1, Ms, 2, 0, "div", 38),
            t.YNc(2, Ds, 2, 0, "div", 39),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", !e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", e.delivered)
            }
        }
        function Rs(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 35)
        }
        function Ys(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.changeDeliveryStatus(i.delivered, i.id))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " cached "),
                t.qZA()()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "LABEL_MARK_AS_TRANSIT"))
        }
        function Bs(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.changeDeliveryStatus(i.delivered, i.id))
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " check_circle "),
                t.qZA()()
            }
            2 & o && t.s9C("matTooltip", t.lcZ(1, 1, "LABEL_MARK_AS_DELIVERED"))
        }
        function Js(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 35),
            t.YNc(1, Ys, 4, 3, "button", 42),
            t.YNc(2, Bs, 4, 3, "button", 42),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", !e.delivered)
            }
        }
        function Qs(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function Hs(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function Gs(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 44)
        }
        function js(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 45),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij(" ", e.name, "")
            }
        }
        function zs(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 46)
        }
        function Ks(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 47)(1, "mat-form-field", 48),
                t._UZ(2, "input", 49, 50),
                t.TgZ(4, "button", 51),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.MAs(3)
                      , u = t.oxw();
                    return t.KtG(u.modifyPrice(r.id, l.value))
                }),
                t._UZ(5, "i", 52),
                t.qZA()()()
            }
            if (2 & o) {
                const e = a.$implicit;
                t.xp6(2),
                t.s9C("value", e.price)
            }
        }
        function Ws(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 53)
        }
        function $s(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 47)(1, "mat-form-field", 48),
                t._UZ(2, "input", 49, 54),
                t.TgZ(4, "button", 51),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.MAs(3)
                      , u = t.oxw();
                    return t.KtG(u.modifyQuantity(u.quantityMap[r.id].id, l.value))
                }),
                t._UZ(5, "i", 52),
                t.qZA()()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.xp6(2),
                t.s9C("value", n.quantityMap[e.id].quantity)
            }
        }
        function Vs(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function Xs(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        v.vI.add(m.LEp),
        v.vz.watch();
        let tl = (()=>{
            class o {
                constructor(e, n, i, r) {
                    this.productService = e,
                    this.quantityService = n,
                    this.orderHistoryService = i,
                    this.snackBarHelperService = r,
                    this.orderHistoryColumns = ["OrderId", "Price", "Status", "StatusButton"],
                    this.displayedColumns = ["Product", "Price", "Quantity"]
                }
                ngAfterViewInit() {
                    this.loadQuantity(),
                    this.loadProducts(),
                    this.loadOrders()
                }
                loadQuantity() {
                    this.quantitySubscription = this.quantityService.getAll().subscribe(e=>{
                        this.quantityMap = {},
                        e.forEach(n=>{
                            this.quantityMap[n.ProductId] = {
                                id: n.id,
                                quantity: n.quantity
                            }
                        }
                        )
                    }
                    , e=>console.log(e))
                }
                loadProducts() {
                    this.productSubscription = this.productService.search("").subscribe(e=>{
                        this.tableData = e,
                        this.dataSource = new c.by(this.tableData),
                        this.dataSource.paginator = this.paginator
                    }
                    , e=>console.log(e))
                }
                loadOrders() {
                    this.orderHistoryService.getAll().subscribe(e=>{
                        this.orderData = [];
                        for (const n of e)
                            this.orderData.push({
                                id: n._id,
                                orderId: n.orderId,
                                totalPrice: n.totalPrice,
                                delivered: n.delivered
                            });
                        this.orderSource = new c.by(this.orderData),
                        this.orderSource.paginator = this.paginatorOrderHistory
                    }
                    , e=>console.log(e))
                }
                ngOnDestroy() {
                    this.productSubscription && this.productSubscription.unsubscribe(),
                    this.quantitySubscription && this.quantitySubscription.unsubscribe()
                }
                modifyQuantity(e, n) {
                    this.quantityService.put(e, {
                        quantity: n < 0 ? 0 : n
                    }).subscribe(i=>{
                        const r = this.tableData.find(l=>l.id === i.ProductId);
                        this.snackBarHelperService.open(`Quantity for ${r.name} has been updated.`, "confirmBar"),
                        this.loadQuantity()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i.error, "errorBar"),
                        console.log(i)
                    }
                    )
                }
                modifyPrice(e, n) {
                    this.productService.put(e, {
                        price: n < 0 ? 0 : n
                    }).subscribe(i=>{
                        this.snackBarHelperService.open(`Price for ${i.name} has been updated.`, "confirmBar"),
                        this.loadProducts()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i.error, "errorBar"),
                        console.log(i)
                    }
                    )
                }
                changeDeliveryStatus(e, n) {
                    this.orderHistoryService.toggleDeliveryStatus(n, {
                        deliveryStatus: e
                    }).subscribe(()=>{
                        this.loadOrders()
                    }
                    , i=>{
                        this.snackBarHelperService.open(i, "errorBar"),
                        console.log(i)
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(mt),t.Y36(wt),t.Y36(Rt),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-accounting"]],
                viewQuery: function(e, n) {
                    if (1 & e && (t.Gf(ks, 7),
                    t.Gf(Os, 7)),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (n.paginatorOrderHistory = i.first),
                        t.iGM(i = t.CRH()) && (n.paginator = i.first)
                    }
                },
                decls: 45,
                vars: 8,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "orders-container"], [1, "orders-table"], [1, "heading"], [3, "dataSource"], ["matColumnDef", "OrderId"], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Status"], ["translate", "LABEL_STATUS", "fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "StatusButton"], ["fxFlex", "15%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize"], ["paginatorOrderHistory", ""], ["fxFlexAlign.lt-md", "center", 1, "inventory-container"], [1, "inventory-table"], ["matColumnDef", "Product"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matCellDef"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matCellDef"], ["matColumnDef", "Quantity"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["paginator", ""], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%"], ["fxFlex", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "15%"], ["fxFlex", "15%"], ["translate", "LABEL_STATUS", "fxFlex", "20%"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%"], ["fxFlex", "50%", "fxFlex.lt-md", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["fxFlex", "25%", "fxFlex.lt-md", "25%"], [1, "input-field"], ["matInput", "", "type", "number", 3, "value"], ["price", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "fas", "fa-check"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["quanitity", ""]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1", 1),
                    t._uU(2, "ACCOUNTING"),
                    t.qZA(),
                    t.TgZ(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 1),
                    t._uU(8, "TITLE_TRACK_ORDERS"),
                    t.qZA()(),
                    t.TgZ(9, "mat-table", 6),
                    t.ynx(10, 7),
                    t.YNc(11, Ps, 1, 0, "mat-header-cell", 8),
                    t.YNc(12, Ls, 2, 1, "mat-cell", 9),
                    t.BQk(),
                    t.ynx(13, 10),
                    t.YNc(14, Ns, 1, 0, "mat-header-cell", 11),
                    t.YNc(15, Es, 2, 1, "mat-cell", 12),
                    t.BQk(),
                    t.ynx(16, 13),
                    t.YNc(17, qs, 1, 0, "mat-header-cell", 14),
                    t.YNc(18, Fs, 3, 2, "mat-cell", 15),
                    t.BQk(),
                    t.ynx(19, 16),
                    t.YNc(20, Rs, 1, 0, "mat-header-cell", 17),
                    t.YNc(21, Js, 3, 2, "mat-cell", 12),
                    t.BQk(),
                    t.YNc(22, Qs, 1, 0, "mat-header-row", 18),
                    t.YNc(23, Hs, 1, 0, "mat-row", 19),
                    t.qZA(),
                    t._UZ(24, "mat-paginator", 20, 21),
                    t.qZA()(),
                    t.TgZ(26, "div", 22)(27, "div", 23)(28, "div", 5)(29, "span", 1),
                    t._uU(30, "TITLE_ALL_PRODUCTS"),
                    t.qZA()(),
                    t.TgZ(31, "mat-table", 6),
                    t.ynx(32, 24),
                    t.YNc(33, Gs, 1, 0, "mat-header-cell", 25),
                    t.YNc(34, js, 2, 1, "mat-cell", 26),
                    t.BQk(),
                    t.ynx(35, 10),
                    t.YNc(36, zs, 1, 0, "mat-header-cell", 27),
                    t.YNc(37, Ks, 6, 1, "mat-cell", 28),
                    t.BQk(),
                    t.ynx(38, 29),
                    t.YNc(39, Ws, 1, 0, "mat-header-cell", 30),
                    t.YNc(40, $s, 6, 1, "mat-cell", 28),
                    t.BQk(),
                    t.YNc(41, Vs, 1, 0, "mat-header-row", 18),
                    t.YNc(42, Xs, 1, 0, "mat-row", 19),
                    t.qZA(),
                    t._UZ(43, "mat-paginator", 20, 31),
                    t.qZA()()()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("dataSource", n.orderSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", n.orderHistoryColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.orderHistoryColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10),
                    t.xp6(7),
                    t.Q6J("dataSource", n.dataSource),
                    t.xp6(10),
                    t.Q6J("matHeaderRowDef", n.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.displayedColumns),
                    t.xp6(1),
                    t.Q6J("pageSize", 10))
                },
                dependencies: [T.O5, p.Pi, C.xw, C.SQ, C.XD, C.yH, O.Hw, g.KE, g.R9, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, st.NW, x.a8, P.Nt, F.gM, p.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;justify-content:center;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.orders-container[_ngcontent-%COMP%], .inventory-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.orders-table[_ngcontent-%COMP%], .inventory-table[_ngcontent-%COMP%]{margin-bottom:25px}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}.product[_ngcontent-%COMP%]{cursor:pointer}.input-field[_ngcontent-%COMP%]{width:80px}"]
            }),
            o
        }
        )();
        const el = function(o) {
            return {
                numberdays: o
            }
        };
        function ol(o, a) {
            if (1 & o && (t.TgZ(0, "span")(1, "div", 30),
            t._uU(2, "ESTIMATED_TIME_OF_DELIVERY"),
            t.qZA()()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("translateParams", t.VKq(1, el, e.orderDetails.eta))
            }
        }
        function nl(o, a) {
            if (1 & o && (t.TgZ(0, "div"),
            t.YNc(1, ol, 3, 3, "span", 7),
            t.TgZ(2, "div")(3, "b", 4),
            t._uU(4, "LABEL_DELIVERY_ADDRESS"),
            t.qZA()(),
            t.TgZ(5, "div"),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "div"),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div"),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, "div")(12, "span", 4),
            t._uU(13, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(14),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", "?" !== e.orderDetails.eta && void 0 !== e.orderDetails.eta),
                t.xp6(5),
                t.Oqu(null == e.address ? null : e.address.fullName),
                t.xp6(2),
                t.HOy("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == e.address ? null : e.address.country),
                t.xp6(4),
                t.hij(" ", null == e.address ? null : e.address.mobileNum, "")
            }
        }
        function al(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function il(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.name, " ")
            }
        }
        function rl(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell")
        }
        function sl(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function ll(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function cl(o, a) {
            1 & o && t._UZ(0, "mat-footer-cell")
        }
        function ul(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function dl(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell")(1, "span"),
            t._uU(2),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(2),
                t.Oqu(e.quantity)
            }
        }
        function pl(o, a) {
            1 & o && (t.TgZ(0, "mat-footer-cell")(1, "table", 31)(2, "tr", 32)(3, "td", 4),
            t._uU(4, "ITEMS"),
            t.qZA()(),
            t.TgZ(5, "tr", 32)(6, "td", 4),
            t._uU(7, "DELIVERY"),
            t.qZA()(),
            t.TgZ(8, "tr", 32)(9, "td", 4),
            t._uU(10, "PROMOTION"),
            t.qZA()(),
            t.TgZ(11, "tr", 33)(12, "td", 4),
            t._uU(13, "LABEL_TOTAL_PRICE"),
            t.qZA()()()())
        }
        function ml(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 4),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function hl(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 34),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.total.toFixed(2), "\xa4")
            }
        }
        function _l(o, a) {
            if (1 & o && (t.TgZ(0, "mat-footer-cell")(1, "table", 34)(2, "tr", 32)(3, "td"),
            t._uU(4),
            t.qZA()(),
            t.TgZ(5, "tr", 32)(6, "td"),
            t._uU(7),
            t.qZA()(),
            t.TgZ(8, "tr", 32)(9, "td"),
            t._uU(10),
            t.qZA()(),
            t.TgZ(11, "tr", 33)(12, "td"),
            t._uU(13),
            t.qZA()()()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij("", null == e.orderDetails.itemTotal ? null : e.orderDetails.itemTotal.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", e.deliveryPrice.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", e.promotionalDiscount.toFixed(2), "\xa4"),
                t.xp6(3),
                t.hij("", null == e.orderDetails.totalPrice ? null : e.orderDetails.totalPrice.toFixed(2), "\xa4")
            }
        }
        function gl(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function fl(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function Cl(o, a) {
            1 & o && t._UZ(0, "mat-footer-row", 35)
        }
        const vl = function(o) {
            return {
                id: o
            }
        }
          , Tl = function(o) {
            return {
                bonus: o
            }
        };
        v.vI.add(D.mdU),
        v.vz.watch();
        let bl = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.configurationService = e,
                    this.addressService = n,
                    this.trackOrderService = i,
                    this.activatedRoute = r,
                    this.basketService = l,
                    this.tableColumns = ["product", "price", "quantity", "total price"],
                    this.orderDetails = {
                        totalPrice: 0
                    },
                    this.deliveryPrice = 0,
                    this.promotionalDiscount = 0,
                    this.tweetText = "I just purchased",
                    this.truncateTweet = (u,f=140)=>{
                        if (!u)
                            return null;
                        const b = u.length > f;
                        return `${u.substring(0, f)}${b ? "..." : ""}`
                    }
                }
                ngOnInit() {
                    this.activatedRoute.paramMap.subscribe(e=>{
                        this.orderId = e.get("id"),
                        this.trackOrderService.find(this.orderId).subscribe(n=>{
                            this.promotionalDiscount = n.data[0].promotionalAmount ? parseFloat(n.data[0].promotionalAmount) : 0,
                            this.deliveryPrice = n.data[0].deliveryPrice ? parseFloat(n.data[0].deliveryPrice) : 0,
                            this.orderDetails.addressId = n.data[0].addressId,
                            this.orderDetails.paymentId = n.data[0].paymentId,
                            this.orderDetails.totalPrice = n.data[0].totalPrice,
                            this.orderDetails.itemTotal = n.data[0].totalPrice + this.promotionalDiscount - this.deliveryPrice,
                            this.orderDetails.eta = n.data[0].eta || "?",
                            this.orderDetails.products = n.data[0].products,
                            this.orderDetails.bonus = n.data[0].bonus,
                            this.dataSource = new c.by(this.orderDetails.products);
                            for (const i of this.orderDetails.products)
                                this.tweetText += `%0a- ${i.name}`;
                            this.tweetText = this.truncateTweet(this.tweetText),
                            this.configurationService.getApplicationConfiguration().subscribe(i=>{
                                var r;
                                null !== (r = i?.application) && void 0 !== r && r.social && (this.tweetText += "%0afrom ",
                                this.tweetText += i.application.social.twitterUrl ? i.application.social.twitterUrl.replace("https://twitter.com/", "@") : i.application.name)
                            }
                            , i=>console.log(i)),
                            this.addressService.getById(this.orderDetails.addressId).subscribe(i=>{
                                this.address = i
                            }
                            , i=>console.log(i))
                        }
                        , n=>console.log(n))
                    }
                    , e=>console.log(e))
                }
                openConfirmationPDF() {
                    window.open(`${this.basketService.hostServer}/ftp/order_ ${this.orderId}.pdf`, "_blank")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(L),t.Y36(nt),t.Y36(bt),t.Y36(y.gz),t.Y36(H))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-order-completion"]],
                decls: 51,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["translate", "", 1, "confirmation"], ["translate", ""], ["routerLink", "/track-result/new", "translate", "", 3, "queryParams"], ["fxFlex", "40%", 1, "mat-elevation-z0"], [4, "ngIf"], [1, "mat-elevation-z0", "table-container"], [1, "heading"], [1, "heading-text"], ["fxFlex", ""], [3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "mat-elevation-z0"], ["translate", "", 3, "translateParams"], ["translate", "", 1, "confirmation", 3, "translateParams"], [1, "mat-table"], [1, "mat-row"], [1, "mat-row", 2, "font-weight", "bold"], [1, "price-align"], ["mat-footer-row", ""]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div")(2, "div", 1)(3, "mat-card", 2)(4, "div")(5, "h1", 3),
                    t._uU(6, "THANKS_FOR_PURCHASE"),
                    t.qZA(),
                    t.TgZ(7, "div", 4),
                    t._uU(8, "PURCHASE_COMMENT_PREFIX "),
                    t.TgZ(9, "a", 5),
                    t._uU(10, "TITLE_TRACK_ORDERS"),
                    t.qZA(),
                    t._uU(11, " PURCHASE_COMMENT_SUFFIX"),
                    t.qZA()()(),
                    t.TgZ(12, "mat-card", 6),
                    t.YNc(13, nl, 15, 8, "div", 7),
                    t.qZA()()(),
                    t.TgZ(14, "div", 8)(15, "div", 9)(16, "span", 10),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.qZA(),
                    t._UZ(19, "span", 11),
                    t.TgZ(20, "a", 12)(21, "button", 13),
                    t._UZ(22, "i", 14),
                    t.qZA()(),
                    t.TgZ(23, "button", 15),
                    t.NdJ("click", function() {
                        return n.openConfirmationPDF()
                    }),
                    t.ALo(24, "translate"),
                    t.TgZ(25, "mat-icon"),
                    t._uU(26, " note "),
                    t.qZA()()(),
                    t.TgZ(27, "mat-table", 16),
                    t.ynx(28, 17),
                    t.YNc(29, al, 2, 0, "mat-header-cell", 18),
                    t.YNc(30, il, 2, 1, "mat-cell", 19),
                    t.YNc(31, rl, 1, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(32, 21),
                    t.YNc(33, sl, 2, 0, "mat-header-cell", 18),
                    t.YNc(34, ll, 2, 1, "mat-cell", 19),
                    t.YNc(35, cl, 1, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(36, 22),
                    t.YNc(37, ul, 2, 0, "mat-header-cell", 18),
                    t.YNc(38, dl, 3, 1, "mat-cell", 19),
                    t.YNc(39, pl, 14, 0, "mat-footer-cell", 20),
                    t.BQk(),
                    t.ynx(40, 23),
                    t.YNc(41, ml, 2, 0, "mat-header-cell", 18),
                    t.YNc(42, hl, 2, 1, "mat-cell", 24),
                    t.YNc(43, _l, 14, 4, "mat-footer-cell", 20),
                    t.BQk(),
                    t.YNc(44, gl, 1, 0, "mat-header-row", 25),
                    t.YNc(45, fl, 1, 0, "mat-row", 26),
                    t.YNc(46, Cl, 1, 0, "mat-footer-row", 27),
                    t.qZA()(),
                    t.TgZ(47, "div")(48, "mat-card", 28)(49, "div", 29),
                    t._uU(50, "BONUS_POINTS_COUNT"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(9),
                    t.Q6J("queryParams", t.VKq(14, vl, n.orderId)),
                    t.xp6(4),
                    t.Q6J("ngIf", n.address),
                    t.xp6(4),
                    t.Oqu(t.lcZ(18, 10, "ORDER_SUMMARY")),
                    t.xp6(3),
                    t.MGl("href", "https://twitter.com/intent/tweet?text=", n.tweetText, "&hashtags=security", t.LSH),
                    t.xp6(3),
                    t.s9C("matTooltip", t.lcZ(24, 12, "PRINT_ORDER_CONFIRMATION")),
                    t.xp6(4),
                    t.Q6J("dataSource", n.dataSource),
                    t.xp6(17),
                    t.Q6J("matHeaderRowDef", n.tableColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.tableColumns),
                    t.xp6(1),
                    t.Q6J("matFooterRowDef", n.tableColumns),
                    t.xp6(3),
                    t.Q6J("translateParams", t.VKq(16, Tl, n.orderDetails.bonus)))
                },
                dependencies: [T.O5, y.rH, p.Pi, C.xw, C.yH, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.mD, c.Ke, c.ge, c.ev, c.yh, c.XQ, c.Gk, c.Q2, x.a8, F.gM, p.X$],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }),
            o
        }
        )();
        function xl(o, a) {
            if (1 & o && (t.TgZ(0, "mat-card", 20)(1, "div")(2, "div")(3, "b", 14),
            t._uU(4, "PAYMENT_METHOD"),
            t.qZA()(),
            t.TgZ(5, "div")(6, "span", 14),
            t._uU(7, "CARD_ENDING_IN"),
            t.qZA(),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div")(10, "span", 14),
            t._uU(11, "CARD_HOLDER"),
            t.qZA(),
            t._uU(12),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(8),
                t.hij(" ", null == e.paymentMethod ? null : e.paymentMethod.cardNum, ""),
                t.xp6(4),
                t.hij(" ", null == e.paymentMethod ? null : e.paymentMethod.fullName, "")
            }
        }
        function Al(o, a) {
            1 & o && (t.TgZ(0, "mat-card", 20)(1, "div")(2, "div")(3, "b", 14),
            t._uU(4, "PAYMENT_METHOD"),
            t.qZA()(),
            t.TgZ(5, "div")(6, "span", 14),
            t._uU(7, "DIGITAL_WALLET"),
            t.qZA()()()())
        }
        function Zl(o, a) {
            if (1 & o && (t.TgZ(0, "div", 16)(1, "mat-card", 17)(2, "div")(3, "div")(4, "b", 14),
            t._uU(5, "LABEL_DELIVERY_ADDRESS"),
            t.qZA()(),
            t.TgZ(6, "div"),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, "div"),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, "div"),
            t._uU(11),
            t.qZA(),
            t.TgZ(12, "div")(13, "span", 14),
            t._uU(14, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(15),
            t.qZA()()(),
            t.YNc(16, xl, 13, 2, "mat-card", 18),
            t.YNc(17, Al, 8, 0, "ng-template", null, 19, t.W1O),
            t.qZA()),
            2 & o) {
                const e = t.MAs(18)
                  , n = t.oxw();
                t.xp6(7),
                t.Oqu(null == n.address ? null : n.address.fullName),
                t.xp6(2),
                t.HOy("", null == n.address ? null : n.address.streetAddress, ", ", null == n.address ? null : n.address.city, ", ", null == n.address ? null : n.address.state, ", ", null == n.address ? null : n.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == n.address ? null : n.address.country),
                t.xp6(4),
                t.hij(" ", null == n.address ? null : n.address.mobileNum, ""),
                t.xp6(1),
                t.Q6J("ngIf", "wallet" !== n.paymentMethod)("ngIfElse", e)
            }
        }
        const wl = function(o) {
            return {
                bonus: o
            }
        };
        let Sl = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f) {
                    this.router = e,
                    this.addressService = n,
                    this.paymentService = i,
                    this.basketService = r,
                    this.deliveryService = l,
                    this.ngZone = u,
                    this.snackBarHelperService = f,
                    this.bonus = 0,
                    this.itemTotal = 0,
                    this.deliveryPrice = 0,
                    this.promotionalDiscount = 0
                }
                ngOnInit() {
                    this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(e=>{
                        this.deliveryPrice = e.price
                    }
                    ),
                    this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(e=>{
                        this.address = e
                    }
                    , e=>console.log(e)),
                    "wallet" !== sessionStorage.getItem("paymentId") ? this.paymentService.getById(sessionStorage.getItem("paymentId")).subscribe(e=>{
                        e.cardNum = String(e.cardNum).substring(String(e.cardNum).length - 4),
                        this.paymentMethod = e
                    }
                    , e=>console.log(e)) : "wallet" === sessionStorage.getItem("paymentId") && (this.paymentMethod = "wallet")
                }
                getMessage(e) {
                    this.itemTotal = e[0],
                    this.promotionalDiscount = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * this.itemTotal : 0,
                    this.bonus = e[1]
                }
                placeOrder() {
                    var e = this;
                    const n = {
                        paymentId: sessionStorage.getItem("paymentId"),
                        addressId: sessionStorage.getItem("addressId"),
                        deliveryMethodId: sessionStorage.getItem("deliveryMethodId")
                    };
                    this.basketService.checkout(Number(sessionStorage.getItem("bid")), btoa(sessionStorage.getItem("couponDetails")), n).subscribe(i=>{
                        sessionStorage.removeItem("paymentId"),
                        sessionStorage.removeItem("addressId"),
                        sessionStorage.removeItem("deliveryMethodId"),
                        sessionStorage.removeItem("couponDetails"),
                        sessionStorage.removeItem("couponDiscount"),
                        this.basketService.updateNumberOfCartItems(),
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/order-completion", i])
                        }))
                    }
                    , i=>{
                        var r;
                        console.log(i),
                        this.snackBarHelperService.open(null === (r = i.error) || void 0 === r ? void 0 : r.error.message, "errorBar")
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.F0),t.Y36(nt),t.Y36(Ft),t.Y36(H),t.Y36(Ct),t.Y36(t.R0b),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-order-summary"]],
                decls: 36,
                vars: 10,
                consts: [["fxLayout", "row", "fxLayoutGap", "10%", "fxLayout.lt-md", "column", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "70%"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column", 4, "ngIf"], [3, "allowEdit", "totalPrice", "emitTotal"], ["fxFlex", "40%"], [1, "mat-elevation-z0"], ["translate", "", 1, "order-summary"], [1, "mat-table"], [1, "mat-row"], ["translate", "", 1, "mat-cell", "label"], [1, "mat-cell", "price"], ["translate", "", 1, "mat-footer-cell", "label"], [1, "mat-footer-cell", "price"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Complete your purchase", "id", "checkoutButton", 1, "btn", "btn-pay", 3, "click"], ["translate", ""], ["translate", "", 1, "bonus-points", 3, "translateParams"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["class", "mat-elevation-z0", "fxFlex", "40%", 4, "ngIf", "ngIfElse"], ["walletPayment", ""], ["fxFlex", "40%", 1, "mat-elevation-z0"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1),
                    t.YNc(2, Zl, 19, 9, "div", 2),
                    t.TgZ(3, "app-purchase-basket", 3),
                    t.NdJ("emitTotal", function(r) {
                        return n.getMessage(r)
                    }),
                    t.qZA()(),
                    t.TgZ(4, "div", 4)(5, "mat-card", 5)(6, "div", 6),
                    t._uU(7, "ORDER_SUMMARY"),
                    t.qZA(),
                    t.TgZ(8, "table", 7)(9, "tr", 8)(10, "td", 9),
                    t._uU(11, "ITEMS"),
                    t.qZA(),
                    t.TgZ(12, "td", 10),
                    t._uU(13),
                    t.qZA()(),
                    t.TgZ(14, "tr", 8)(15, "td", 9),
                    t._uU(16, "DELIVERY"),
                    t.qZA(),
                    t.TgZ(17, "td", 10),
                    t._uU(18),
                    t.qZA()(),
                    t.TgZ(19, "tr", 8)(20, "td", 9),
                    t._uU(21, "PROMOTION"),
                    t.qZA(),
                    t.TgZ(22, "td", 10),
                    t._uU(23),
                    t.qZA()(),
                    t.TgZ(24, "tr", 8)(25, "td", 11),
                    t._uU(26, "LABEL_TOTAL_PRICE"),
                    t.qZA(),
                    t.TgZ(27, "td", 12),
                    t._uU(28),
                    t.qZA()()(),
                    t.TgZ(29, "button", 13),
                    t.NdJ("click", function() {
                        return n.placeOrder()
                    }),
                    t.TgZ(30, "mat-icon"),
                    t._uU(31, " monetization_on "),
                    t.qZA(),
                    t.TgZ(32, "span", 14),
                    t._uU(33, "PLACE_ORDER_AND_PAY"),
                    t.qZA()(),
                    t.TgZ(34, "div", 15),
                    t._uU(35, "CHECKOUT_FOR_BONUS_POINTS"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("ngIf", n.address && n.paymentMethod),
                    t.xp6(1),
                    t.Q6J("allowEdit", !1)("totalPrice", !1),
                    t.xp6(10),
                    t.hij("", null == n.itemTotal ? null : n.itemTotal.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", n.deliveryPrice.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", n.promotionalDiscount.toFixed(2), "\xa4"),
                    t.xp6(5),
                    t.hij("", n.itemTotal + n.deliveryPrice - n.promotionalDiscount == null ? null : (n.itemTotal + n.deliveryPrice - n.promotionalDiscount).toFixed(2), "\xa4 "),
                    t.xp6(6),
                    t.Q6J("translateParams", t.VKq(8, wl, n.bonus)))
                },
                dependencies: [T.O5, p.Pi, C.xw, C.SQ, C.yH, O.Hw, A.lW, x.a8, zt],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;margin-top:10px;width:100%}mat-card[_ngcontent-%COMP%]{height:auto;margin-top:20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price[_ngcontent-%COMP%]:last-of-type{padding-right:10px;text-align:right}.label[_ngcontent-%COMP%]:first-of-type{padding-left:10px}table[_ngcontent-%COMP%]{width:100%}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.order-summary[_ngcontent-%COMP%]{font-size:x-large;padding-bottom:10px;padding-left:10px}.bonus-points[_ngcontent-%COMP%]{margin-top:5px;text-align:center}"]
            }),
            o
        }
        )();
        function yl(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 1),
            t._uU(1, " MANDATORY_AMOUNT "),
            t.qZA())
        }
        function Il(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 1),
            t._uU(1, " AMOUNT_LIMIT "),
            t.qZA())
        }
        let Ul = (()=>{
            class o {
                constructor(e, n, i) {
                    this.router = e,
                    this.walletService = n,
                    this.ngZone = i,
                    this.balanceControl = new s.p4("",[s.kI.required, s.kI.min(10), s.kI.max(1e3)])
                }
                ngOnInit() {
                    this.walletService.get().subscribe(e=>{
                        this.balance = parseFloat(e).toFixed(2)
                    }
                    , e=>{
                        console.log(e)
                    }
                    )
                }
                continue() {
                    var e = this;
                    sessionStorage.setItem("walletTotal", this.balanceControl.value),
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/payment", "wallet"])
                    }))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.F0),t.Y36(Dt),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-wallet"]],
                decls: 25,
                vars: 14,
                consts: [[1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation"], ["appearance", "outline", "color", "accent"], ["type", "number", "matInput", "", "aria-label", "Enter an amount", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to continue to payment", 3, "disabled", "click"], [1, "material-icons"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1")(2, "div"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA()(),
                    t.TgZ(5, "h3", 1),
                    t._uU(6, "LABEL_ADD_MONEY"),
                    t.qZA(),
                    t.TgZ(7, "p")(8, "b")(9, "span", 1),
                    t._uU(10, "LABEL_WALLET_BALANCE"),
                    t.qZA(),
                    t.TgZ(11, "span", 2),
                    t._uU(12),
                    t.qZA()()(),
                    t.TgZ(13, "mat-form-field", 3)(14, "mat-label"),
                    t._uU(15),
                    t.ALo(16, "translate"),
                    t.qZA(),
                    t._UZ(17, "input", 4),
                    t.YNc(18, yl, 2, 0, "mat-error", 5),
                    t.YNc(19, Il, 2, 0, "mat-error", 5),
                    t.qZA(),
                    t.TgZ(20, "button", 6),
                    t.NdJ("click", function() {
                        return n.continue()
                    }),
                    t.TgZ(21, "i", 7),
                    t._uU(22, " send "),
                    t.qZA(),
                    t._uU(23),
                    t.ALo(24, "translate"),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(t.lcZ(4, 8, "DIGITAL_WALLET")),
                    t.xp6(9),
                    t.hij(" ", n.balance, ""),
                    t.xp6(3),
                    t.Oqu(t.lcZ(16, 10, "LABEL_AMOUNT")),
                    t.xp6(2),
                    t.Q6J("formControl", n.balanceControl),
                    t.xp6(1),
                    t.Q6J("ngIf", n.balanceControl.invalid && n.balanceControl.errors.required),
                    t.xp6(1),
                    t.Q6J("ngIf", n.balanceControl.invalid && (n.balanceControl.errors.min || n.balanceControl.errors.max)),
                    t.xp6(1),
                    t.Q6J("disabled", n.balanceControl.invalid),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(24, 12, "LABEL_CONTINUE"), " "))
                },
                dependencies: [T.O5, p.Pi, s.Fj, s.wV, s.JJ, s.oH, g.TO, g.KE, g.hX, A.lW, x.a8, P.Nt, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}"]
            }),
            o
        }
        )();
        function kl(o, a) {
            1 & o && (t.TgZ(0, "div", 32),
            t._uU(1, "LABEL_IN_TRANSIT"),
            t.qZA())
        }
        function Ol(o, a) {
            1 & o && (t.TgZ(0, "div", 33),
            t._uU(1, "LABEL_DELIVERED"),
            t.qZA())
        }
        function Pl(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 34),
            t._uU(1, "LABEL_PRODUCT"),
            t.qZA())
        }
        function Ll(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 35),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.name, " ")
            }
        }
        function Nl(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_PRICE"),
            t.qZA())
        }
        function El(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 37),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price, "\xa4")
            }
        }
        function ql(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_QUANTITY"),
            t.qZA())
        }
        function Ml(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 37)(1, "span"),
            t._uU(2),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(2),
                t.Oqu(e.quantity)
            }
        }
        function Dl(o, a) {
            1 & o && (t.TgZ(0, "mat-header-cell", 36),
            t._uU(1, "LABEL_TOTAL_PRICE"),
            t.qZA())
        }
        function Fl(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 38),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.total.toFixed(2), "\xa4")
            }
        }
        function Rl(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 36)
        }
        function Yl(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 37)(1, "button", 17),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(3);
                    return t.KtG(l.showDetail(r.id))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "mat-icon"),
                t._uU(4, " rate_review "),
                t.qZA()()()
            }
            2 & o && (t.xp6(1),
            t.s9C("matTooltip", t.lcZ(2, 1, "WRITE_REVIEW")))
        }
        function Bl(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function Jl(o, a) {
            1 & o && t._UZ(0, "mat-row")
        }
        function Ql(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "div", 10),
                t._uU(6, "LABEL_ORDER_ID"),
                t.qZA(),
                t.TgZ(7, "div"),
                t._uU(8),
                t.qZA()(),
                t.TgZ(9, "div", 11)(10, "div", 10),
                t._uU(11, "LABEL_TOTAL_PRICE"),
                t.qZA(),
                t.TgZ(12, "div"),
                t._uU(13),
                t.qZA()(),
                t.TgZ(14, "div", 11)(15, "div", 10),
                t._uU(16, "LABEL_BONUS"),
                t.qZA(),
                t.TgZ(17, "div"),
                t._uU(18),
                t.qZA()(),
                t.TgZ(19, "div", 12),
                t.YNc(20, kl, 2, 0, "div", 13),
                t.YNc(21, Ol, 2, 0, "div", 14),
                t.qZA(),
                t.TgZ(22, "div", 15)(23, "button", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.trackOrder(r.orderId))
                }),
                t.ALo(24, "translate"),
                t.TgZ(25, "mat-icon"),
                t._uU(26, " local_shipping "),
                t.qZA()()(),
                t.TgZ(27, "div", 15)(28, "button", 17),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.openConfirmationPDF(r.orderId))
                }),
                t.ALo(29, "translate"),
                t.TgZ(30, "mat-icon"),
                t._uU(31, " note "),
                t.qZA()()()(),
                t._UZ(32, "div", 18),
                t.qZA(),
                t.TgZ(33, "mat-table", 19),
                t.ynx(34, 20),
                t.YNc(35, Pl, 2, 0, "mat-header-cell", 21),
                t.YNc(36, Ll, 2, 1, "mat-cell", 22),
                t.BQk(),
                t.ynx(37, 23),
                t.YNc(38, Nl, 2, 0, "mat-header-cell", 24),
                t.YNc(39, El, 2, 1, "mat-cell", 25),
                t.BQk(),
                t.ynx(40, 26),
                t.YNc(41, ql, 2, 0, "mat-header-cell", 24),
                t.YNc(42, Ml, 3, 1, "mat-cell", 25),
                t.BQk(),
                t.ynx(43, 27),
                t.YNc(44, Dl, 2, 0, "mat-header-cell", 24),
                t.YNc(45, Fl, 2, 1, "mat-cell", 28),
                t.BQk(),
                t.ynx(46, 29),
                t.YNc(47, Rl, 1, 0, "mat-header-cell", 24),
                t.YNc(48, Yl, 5, 3, "mat-cell", 25),
                t.BQk(),
                t.YNc(49, Bl, 1, 0, "mat-header-row", 30),
                t.YNc(50, Jl, 1, 0, "mat-row", 31),
                t.qZA()()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(8),
                t.hij("#", e.orderId, ""),
                t.xp6(5),
                t.hij("", e.totalPrice.toFixed(2), "\xa4"),
                t.xp6(5),
                t.Oqu(e.bonus),
                t.xp6(2),
                t.Q6J("ngIf", !e.delivered),
                t.xp6(1),
                t.Q6J("ngIf", e.delivered),
                t.xp6(2),
                t.s9C("matTooltip", t.lcZ(24, 10, "LABEL_TRACK_ORDER")),
                t.xp6(5),
                t.s9C("matTooltip", t.lcZ(29, 12, "PRINT_ORDER_CONFIRMATION")),
                t.xp6(5),
                t.Q6J("dataSource", e.products),
                t.xp6(16),
                t.Q6J("matHeaderRowDef", n.tableColumns),
                t.xp6(1),
                t.Q6J("matRowDefColumns", n.tableColumns)
            }
        }
        function Hl(o, a) {
            if (1 & o && (t.TgZ(0, "div", 4),
            t.YNc(1, Ql, 51, 14, "div", 5),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", e.orders)
            }
        }
        function Gl(o, a) {
            1 & o && (t.TgZ(0, "mat-card", 39),
            t._UZ(1, "img", 40),
            t.TgZ(2, "mat-card-title")(3, "span", 41),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 41),
            t._uU(7, " NO_ORDERS_PLACED "),
            t.qZA()()())
        }
        let jl = (()=>{
            class o {
                constructor(e, n, i, r, l, u) {
                    this.router = e,
                    this.dialog = n,
                    this.orderHistoryService = i,
                    this.basketService = r,
                    this.productService = l,
                    this.ngZone = u,
                    this.tableColumns = ["product", "price", "quantity", "total price", "review"],
                    this.orders = [],
                    this.emptyState = !0
                }
                ngOnInit() {
                    this.orderHistoryService.get().subscribe(e=>{
                        e = e.reverse(),
                        this.emptyState = 0 === e.length;
                        for (const n of e) {
                            const i = [];
                            for (const r of n.products)
                                i.push({
                                    id: r.id,
                                    name: r.name,
                                    price: r.price,
                                    quantity: r.quantity,
                                    total: r.total
                                });
                            this.orders.push({
                                orderId: n.orderId,
                                totalPrice: n.totalPrice,
                                bonus: n.bonus,
                                products: new c.by(i),
                                delivered: n.delivered
                            })
                        }
                    }
                    , e=>console.log(e))
                }
                showDetail(e) {
                    this.productService.get(e).subscribe(n=>{
                        const i = {
                            id: n.id,
                            name: n.name,
                            description: n.description,
                            image: n.image,
                            price: n.price,
                            points: Math.round(n.price / 10)
                        };
                        this.dialog.open(ae, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                productData: i
                            }
                        })
                    }
                    , n=>console.log(n))
                }
                openConfirmationPDF(e) {
                    window.open(`${this.basketService.hostServer}/ftp/order_ ${e}.pdf`, "_blank")
                }
                trackOrder(e) {
                    var n = this;
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield n.router.navigate(["/track-result"], {
                            queryParams: {
                                id: e
                            }
                        })
                    }))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(y.F0),t.Y36(U.uw),t.Y36(Rt),t.Y36(H),t.Y36(mt),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-order-history"]],
                decls: 8,
                vars: 5,
                consts: [[1, "card1"], [1, "mat-card-cvr"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngFor", "ngForOf"], [1, "table-container", "mat-elevation-z4", "custom-slate"], [1, "heading"], ["fxLayout", "row"], ["fxFlex", "40%", "fxLayout", "column"], ["translate", ""], ["fxFlex", "15%", "fxLayout", "column"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["fxFlex", "5%", "fxLayoutAlign", "end"], ["mat-icon-button", "", "aria-label", "Track Your Order", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [1, "border"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", "fxFlex", "40%", 4, "matHeaderCellDef"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "price"], ["translate", "", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", "fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "review"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["translate", "", "fxFlex", "40%"], ["fxFlex", "40%"], ["translate", "", "fxFlex", "15%"], ["fxFlex", "15%"], ["fxFlex", "15%", 1, "price-align"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "mat-card", 0)(1, "div", 1)(2, "mat-card-title"),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA(),
                    t.YNc(5, Hl, 2, 1, "div", 2),
                    t.YNc(6, Gl, 8, 0, "ng-template", null, 3, t.W1O),
                    t.qZA()()),
                    2 & e) {
                        const i = t.MAs(7);
                        t.xp6(3),
                        t.hij(" ", t.lcZ(4, 3, "LABEL_ORDER_HISTORY"), " "),
                        t.xp6(2),
                        t.Q6J("ngIf", !n.emptyState)("ngIfElse", i)
                    }
                },
                dependencies: [T.sg, T.O5, p.Pi, C.xw, C.SQ, C.Wh, C.yH, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, x.a8, x.dn, x.n5, F.gM, p.X$],
                styles: [".heading[_ngcontent-%COMP%]{padding:12px 20px}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}mat-card[_ngcontent-%COMP%]{height:auto;width:80%}.card1[_ngcontent-%COMP%]{border-radius:5px;margin:0 auto;width:80%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}mat-card-title[_ngcontent-%COMP%]{margin-bottom:25px}.border[_ngcontent-%COMP%]{border:.5px solid #f2f2f2}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.custom-slate[_ngcontent-%COMP%]{border-radius:5px}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}"]
            }),
            o
        }
        )();
        function zl(o, a) {
            if (1 & o && (t.TgZ(0, "div", 22)(1, "h1", 4),
            t._uU(2, "LABEL_DELIVERY_ADDRESS"),
            t.qZA(),
            t.TgZ(3, "div"),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, "div"),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "div"),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "div")(10, "span", 4),
            t._uU(11, "PHONE_NUMBER"),
            t.qZA(),
            t._uU(12),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.Oqu(null == e.address ? null : e.address.fullName),
                t.xp6(2),
                t.HOy("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""),
                t.xp6(2),
                t.Oqu(null == e.address ? null : e.address.country),
                t.xp6(4),
                t.hij(" ", null == e.address ? null : e.address.mobileNum, "")
            }
        }
        function Kl(o, a) {
            1 & o && t._UZ(0, "mat-divider", 23)
        }
        function Wl(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 24)
        }
        function $l(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-cell", 24)(1, "mat-radio-button", 25),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.selectMethod(r.id))
                })("change", function(i) {
                    const l = t.CHM(e).$implicit
                      , u = t.oxw();
                    return t.KtG(i ? u.selection.toggle(l) : null)
                }),
                t.qZA()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.xp6(1),
                t.Q6J("checked", n.selection.isSelected(e))
            }
        }
        function Vl(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 26)
        }
        function Xl(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 26),
            t._UZ(1, "i", 27),
            t._uU(2),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.Q6J("ngClass", e.icon),
                t.xp6(1),
                t.hij("\xa0", e.name, "")
            }
        }
        function tc(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 28)
        }
        function ec(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 29),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.hij("", e.price.toFixed(2), "\xa4")
            }
        }
        function oc(o, a) {
            1 & o && t._UZ(0, "mat-header-cell", 30)
        }
        function nc(o, a) {
            if (1 & o && (t.TgZ(0, "mat-cell", 29),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o) {
                const e = a.$implicit;
                t.xp6(1),
                t.AsE("", e.eta, " ", t.lcZ(2, 2, "LABEL_DAYS"), "")
            }
        }
        function ac(o, a) {
            1 & o && t._UZ(0, "mat-header-row")
        }
        function ic(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-row", 31),
                t.NdJ("click", function() {
                    const i = t.CHM(e)
                      , r = i.$implicit
                      , l = i.$implicit
                      , u = t.oxw();
                    return u.selection.toggle(r),
                    t.KtG(u.selectMethod(l.id))
                }),
                t.qZA()
            }
        }
        v.vI.add(m.tMT, m.x0v, m.$KU),
        v.vz.watch();
        let rc = (()=>{
            class o {
                constructor(e, n, i, r, l) {
                    this.location = e,
                    this.deliverySerivce = n,
                    this.addressService = i,
                    this.router = r,
                    this.ngZone = l,
                    this.displayedColumns = ["Selection", "Name", "Price", "ETA"],
                    this.deliveryMethodId = void 0,
                    this.selection = new ue.Ov(!1,[])
                }
                ngOnInit() {
                    this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(e=>{
                        this.address = e
                    }
                    , e=>console.log(e)),
                    this.deliverySerivce.get().subscribe(e=>{
                        console.log(e),
                        this.methods = e,
                        this.dataSource = new c.by(this.methods)
                    }
                    , e=>console.log(e))
                }
                selectMethod(e) {
                    this.deliveryMethodId = this.selection.hasValue() || e ? e : void 0
                }
                routeToPreviousUrl() {
                    this.location.back()
                }
                chooseDeliveryMethod() {
                    var e = this;
                    sessionStorage.setItem("deliveryMethodId", this.deliveryMethodId.toString()),
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/payment", "shop"])
                    }))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(T.Ye),t.Y36(Ct),t.Y36(nt),t.Y36(y.F0),t.Y36(t.R0b))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-delivery-method"]],
                decls: 33,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], ["class", "addressCont", 4, "ngIf"], ["class", "detail-divider", 4, "ngIf"], [2, "height", "12px"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", 4, "matCellDef"], ["matColumnDef", "ETA"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to delivery method selection", 1, "btn", "nextButton", 3, "disabled", "click"], [1, "addressCont"], [1, "detail-divider"], ["fxFlex", "20%"], [3, "checked", "click", "change"], ["fxFlex", "30%"], [3, "ngClass"], ["translate", "LABEL_PRICE", "fxFlex", "25%"], ["fxFlex", "25%"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%"], [3, "click"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-card", 0),
                    t.YNc(1, zl, 13, 7, "div", 1),
                    t.YNc(2, Kl, 1, 0, "mat-divider", 2),
                    t._UZ(3, "div", 3),
                    t.TgZ(4, "div")(5, "h1", 4),
                    t._uU(6, "LABEL_CHOOSE_A_DELIVERY_SPEED"),
                    t.qZA(),
                    t.TgZ(7, "mat-table", 5),
                    t.ynx(8, 6),
                    t.YNc(9, Wl, 1, 0, "mat-header-cell", 7),
                    t.YNc(10, $l, 2, 1, "mat-cell", 8),
                    t.BQk(),
                    t.ynx(11, 9),
                    t.YNc(12, Vl, 1, 0, "mat-header-cell", 10),
                    t.YNc(13, Xl, 3, 2, "mat-cell", 11),
                    t.BQk(),
                    t.ynx(14, 12),
                    t.YNc(15, tc, 1, 0, "mat-header-cell", 13),
                    t.YNc(16, ec, 2, 1, "mat-cell", 14),
                    t.BQk(),
                    t.ynx(17, 15),
                    t.YNc(18, oc, 1, 0, "mat-header-cell", 16),
                    t.YNc(19, nc, 3, 4, "mat-cell", 14),
                    t.BQk(),
                    t.YNc(20, ac, 1, 0, "mat-header-row", 17),
                    t.YNc(21, ic, 1, 0, "mat-row", 18),
                    t.qZA()(),
                    t.TgZ(22, "div", 19)(23, "button", 20),
                    t.NdJ("click", function() {
                        return n.routeToPreviousUrl()
                    }),
                    t.TgZ(24, "mat-icon"),
                    t._uU(25, " navigate_before "),
                    t.qZA(),
                    t._uU(26),
                    t.ALo(27, "translate"),
                    t.qZA(),
                    t.TgZ(28, "button", 21),
                    t.NdJ("click", function() {
                        return n.chooseDeliveryMethod()
                    }),
                    t.TgZ(29, "mat-icon"),
                    t._uU(30, " navigate_next "),
                    t.qZA(),
                    t.TgZ(31, "span", 4),
                    t._uU(32, "LABEL_CONTINUE"),
                    t.qZA()()()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", n.address),
                    t.xp6(1),
                    t.Q6J("ngIf", n.address),
                    t.xp6(5),
                    t.Q6J("dataSource", n.dataSource),
                    t.xp6(13),
                    t.Q6J("matHeaderRowDef", n.displayedColumns),
                    t.xp6(1),
                    t.Q6J("matRowDefColumns", n.displayedColumns),
                    t.xp6(5),
                    t.hij(" ", t.lcZ(27, 7, "LABEL_BACK"), " "),
                    t.xp6(2),
                    t.Q6J("disabled", void 0 === n.deliveryMethodId))
                },
                dependencies: [T.mk, T.O5, p.Pi, C.yH, G.oO, O.Hw, A.lW, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk, x.a8, Y.d, tt.U0, p.X$],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.addressCont[_ngcontent-%COMP%]{margin-bottom:12px}.detail-divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:1%!important;width:98%!important}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}"]
            }),
            o
        }
        )();
        var sc = d(6498);
        const lc = o=>{
            if ("string" == typeof o.value)
                return (0,
                gt.of)(null);
            const a = o.value
              , e = new FileReader;
            return new sc.y(i=>{
                e.addEventListener("loadend", ()=>{
                    const r = new Uint8Array(e.result).subarray(0, 4);
                    let l = ""
                      , u = !1;
                    for (let f = 0; f < r.length; f++)
                        l += r[f].toString(16);
                    switch (l) {
                    case "89504e47":
                    case "ffd8ffe0":
                    case "ffd8ffe1":
                    case "ffd8ffe2":
                    case "ffd8ffe3":
                    case "ffd8ffe8":
                        u = !0;
                        break;
                    default:
                        u = !1
                    }
                    i.next(u ? null : {
                        invalidMimeType: !0
                    }),
                    i.complete()
                }
                ),
                e.readAsArrayBuffer(a)
            }
            )
        }
        ;
        let Ze = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/memories"
                }
                addMemory(e, n) {
                    const i = new FormData;
                    return i.append("image", n, e),
                    i.append("caption", e),
                    this.http.post(this.host, i).pipe((0,
                    _.U)(r=>r.data), (0,
                    h.K)(r=>{
                        throw r
                    }
                    ))
                }
                get() {
                    return this.http.get(this.host + "/").pipe((0,
                    _.U)(e=>e.data), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function cc(o, a) {
            if (1 & o && (t.TgZ(0, "a", 10)(1, "button", 11),
            t._UZ(2, "i", 12),
            t.qZA()()),
            2 & o) {
                const e = t.oxw().$implicit
                  , n = t.oxw(2);
                t.hYB("href", "https://twitter.com/intent/tweet?text=", e.caption, " ", n.twitterHandle, "&hashtags=appsec", t.LSH)
            }
        }
        function uc(o, a) {
            if (1 & o && (t.TgZ(0, "span", 6),
            t._UZ(1, "img", 7),
            t.TgZ(2, "div", 8)(3, "div"),
            t._uU(4),
            t.qZA(),
            t.YNc(5, cc, 3, 2, "a", 9),
            t.qZA()()),
            2 & o) {
                const e = a.$implicit
                  , n = t.oxw(2);
                t.xp6(1),
                t.s9C("src", e.url, t.LSH),
                t.s9C("alt", e.caption),
                t.xp6(3),
                t.Oqu(e.caption),
                t.xp6(1),
                t.Q6J("ngIf", n.twitterHandle)
            }
        }
        function dc(o, a) {
            if (1 & o && (t.TgZ(0, "div", 4),
            t.YNc(1, uc, 6, 4, "span", 5),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", e.slideshowDataSource)
            }
        }
        function pc(o, a) {
            1 & o && (t.TgZ(0, "mat-card", 13),
            t._UZ(1, "img", 14),
            t.TgZ(2, "mat-card-title")(3, "span", 15),
            t._uU(4, " NO_SEARCH_RESULT "),
            t.qZA()(),
            t.TgZ(5, "mat-card-content")(6, "span", 15),
            t._uU(7, " EMPTY_MEMORY_LIST "),
            t.qZA()()())
        }
        function mc(o, a) {
            if (1 & o && (t.TgZ(0, "div", 28),
            t._UZ(1, "img", 29),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("src", e.imagePreview, t.LSH)("alt", e.form.value.caption)
            }
        }
        function hc(o, a) {
            1 & o && (t.TgZ(0, "mat-error", 17),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & o && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "MANDATORY_CAPTION")))
        }
        function _c(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 16)(2, "h2", 17),
                t._uU(3, "LABEL_SHARE_A_MEMORY"),
                t.qZA(),
                t.TgZ(4, "form", 18)(5, "div")(6, "button", 19),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.MAs(10);
                    return t.KtG(i.click())
                }),
                t._uU(7),
                t.ALo(8, "translate"),
                t.qZA(),
                t.TgZ(9, "input", 20, 21),
                t.NdJ("change", function(i) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onImagePicked(i))
                }),
                t.qZA()(),
                t.YNc(11, mc, 2, 2, "div", 22),
                t.TgZ(12, "mat-form-field", 23)(13, "mat-label", 17),
                t._uU(14, "LABEL_CAPTION"),
                t.qZA(),
                t._UZ(15, "input", 24),
                t.YNc(16, hc, 3, 3, "mat-error", 25),
                t.qZA(),
                t.TgZ(17, "button", 26),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.save())
                }),
                t.TgZ(18, "i", 27),
                t._uU(19, " send "),
                t.qZA(),
                t._uU(20),
                t.ALo(21, "translate"),
                t.qZA()()()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.Q6J("formGroup", e.form),
                t.xp6(3),
                t.hij("", t.lcZ(8, 6, "LABEL_PICK_IMAGE"), " "),
                t.xp6(4),
                t.Q6J("ngIf", "" !== e.imagePreview && e.imagePreview && e.form.get("image").valid),
                t.xp6(5),
                t.Q6J("ngIf", e.form.get("caption").invalid),
                t.xp6(1),
                t.Q6J("disabled", e.form.get("image").invalid || e.form.get("caption").invalid),
                t.xp6(3),
                t.hij(" ", t.lcZ(21, 8, "BTN_SUBMIT"), " ")
            }
        }
        v.vI.add(D.mdU),
        v.vz.watch();
        let gc = (()=>{
            class o {
                constructor(e, n, i) {
                    this.photoWallService = e,
                    this.configurationService = n,
                    this.snackBarHelperService = i,
                    this.emptyState = !0,
                    this.form = new s.nJ({
                        image: new s.p4("",{
                            validators: [s.kI.required],
                            asyncValidators: [lc]
                        }),
                        caption: new s.p4("",[s.kI.required])
                    }),
                    this.slideshowDataSource = [],
                    this.twitterHandle = null
                }
                ngOnInit() {
                    this.slideshowDataSource = [],
                    this.photoWallService.get().subscribe(e=>{
                        var n;
                        this.emptyState = 0 === e.length;
                        for (const i of e)
                            !(null === (n = i.User) || void 0 === n) && n.username && (i.caption = `${i.caption} (\xa9 ${i.User.username})`),
                            this.slideshowDataSource.push({
                                url: i.imagePath,
                                caption: i.caption
                            })
                    }
                    , e=>console.log(e)),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        null !== (n = e?.application) && void 0 !== n && n.social && e.application.social.twitterUrl && (this.twitterHandle = e.application.social.twitterUrl.replace("https://twitter.com/", "@"))
                    }
                    , e=>console.log(e))
                }
                onImagePicked(e) {
                    const n = e.target.files[0];
                    this.form.patchValue({
                        image: n
                    }),
                    this.form.get("image").updateValueAndValidity();
                    const i = new FileReader;
                    i.onload = ()=>{
                        this.imagePreview = i.result
                    }
                    ,
                    i.readAsDataURL(n)
                }
                save() {
                    this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(()=>{
                        this.resetForm(),
                        this.ngOnInit(),
                        this.snackBarHelperService.open("IMAGE_UPLOAD_SUCCESS", "confirmBar")
                    }
                    , e=>{
                        var n;
                        this.snackBarHelperService.open(null === (n = e.error) || void 0 === n ? void 0 : n.error, "errorBar"),
                        console.log(e)
                    }
                    )
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                resetForm() {
                    this.form.get("image").setValue(""),
                    this.form.get("image").markAsPristine(),
                    this.form.get("image").markAsUntouched(),
                    this.form.get("caption").setValue(""),
                    this.form.get("caption").markAsPristine(),
                    this.form.get("caption").markAsUntouched(),
                    this.form.get("caption").setErrors(null)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Ze),t.Y36(L),t.Y36(M))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-photo-wall"]],
                decls: 9,
                vars: 6,
                consts: [[1, "heading", "mat-elevation-z6", "mat-own-card", 2, "margin-bottom", "10px"], ["class", "grid", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], [4, "ngIf"], [1, "grid"], ["class", "container mat-elevation-z6", 4, "ngFor", "ngForOf"], [1, "container", "mat-elevation-z6"], [1, "image", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], [1, "mat-elevation-z0", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"], [2, "margin-top", "10px"], ["translate", ""], ["enctype", "multipart/form-data", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "name", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["appearance", "outline", "color", "accent"], ["formControlName", "caption", "type", "text", "matInput", ""], ["translate", "", 4, "ngIf"], ["id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], [1, "image-preview"], [3, "src", "alt"]],
                template: function(e, n) {
                    if (1 & e && (t.TgZ(0, "mat-card", 0)(1, "h1"),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "div"),
                    t.YNc(5, dc, 2, 1, "div", 1),
                    t.qZA(),
                    t.YNc(6, pc, 8, 0, "ng-template", null, 2, t.W1O),
                    t.YNc(8, _c, 22, 10, "div", 3),
                    t.qZA()),
                    2 & e) {
                        const i = t.MAs(7);
                        t.xp6(2),
                        t.Oqu(t.lcZ(3, 4, "LABEL_PHOTO_WALL")),
                        t.xp6(3),
                        t.Q6J("ngIf", !n.emptyState)("ngIfElse", i),
                        t.xp6(3),
                        t.Q6J("ngIf", n.isLoggedIn())
                    }
                },
                dependencies: [T.sg, T.O5, p.Pi, s._Y, s.Fj, s.JJ, s.JL, s.sg, s.u, g.TO, g.KE, g.hX, A.lW, x.a8, x.dn, x.n5, P.Nt, p.X$],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:10px;width:60%}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;box-shadow:2px 2px 6px #0000004d;max-width:100%}.container[_ngcontent-%COMP%]{position:relative}.image[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{bottom:0;font-size:20px;left:0;opacity:0;padding:20px;position:absolute;right:0;text-align:center;transition:.5s ease}.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }),
            o
        }
        )();
        function fc(o, a) {
            if (1 & o && (t.TgZ(0, "div", 22)(1, "div", 23)(2, "p", 24),
            t._uU(3),
            t.qZA()()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(3),
                t.Oqu(e.error)
            }
        }
        function Cc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "div", 14),
                t._uU(2),
                t.qZA(),
                t.TgZ(3, "div", 14)(4, "button", 25),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.upgradeToDeluxe())
                }),
                t.TgZ(5, "span", 13),
                t._uU(6, "LABEL_BECOME_MEMBER"),
                t.qZA()()()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(2),
                t.hij(" ", e.membershipCost, "\xa4 ")
            }
        }
        const vc = function(o) {
            return {
                appname: o
            }
        }
          , Tc = [{
            path: "administration",
            component: pa,
            canActivate: [Gt]
        }, {
            path: "accounting",
            component: tl,
            canActivate: [jt]
        }, {
            path: "about",
            component: No
        }, {
            path: "address/select",
            component: Qr,
            canActivate: [Q]
        }, {
            path: "address/saved",
            component: Hr,
            canActivate: [Q]
        }, {
            path: "address/create",
            component: Te,
            canActivate: [Q]
        }, {
            path: "address/edit/:addressId",
            component: Te,
            canActivate: [Q]
        }, {
            path: "delivery-method",
            component: rc
        }, {
            path: "deluxe-membership",
            component: (()=>{
                class o {
                    constructor(e, n, i, r, l, u, f) {
                        this.router = e,
                        this.userService = n,
                        this.cookieService = i,
                        this.configurationService = r,
                        this.route = l,
                        this.ngZone = u,
                        this.io = f,
                        this.membershipCost = 0,
                        this.error = void 0,
                        this.applicationName = "OWASP Juice Shop",
                        this.logoSrc = "assets/public/images/JuiceShop_Logo.png"
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(e=>{
                            const n = this.route.snapshot.queryParams.testDecal;
                            if (e?.application && (e.application.name && (this.applicationName = e.application.name),
                            e.application.logo)) {
                                let i = e.application.logo;
                                "http" === i.substring(0, 4) && (i = decodeURIComponent(i.substring(i.lastIndexOf("/") + 1))),
                                this.logoSrc = `assets/public/images/${n || i}`
                            }
                            n && this.ngZone.runOutsideAngular(()=>{
                                this.io.socket().emit("verifySvgInjectionChallenge", n)
                            }
                            )
                        }
                        , e=>console.log(e)),
                        this.userService.deluxeStatus().subscribe(e=>{
                            this.membershipCost = e.membershipCost
                        }
                        , e=>{
                            this.error = e.error.error
                        }
                        )
                    }
                    upgradeToDeluxe() {
                        var e = this;
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield e.router.navigate(["/payment", "deluxe"])
                        }))
                    }
                }
                return o.\u0275fac = function(e) {
                    return new (e || o)(t.Y36(y.F0),t.Y36(N),t.Y36(q.N_),t.Y36(L),t.Y36(y.gz),t.Y36(t.R0b),t.Y36(V))
                }
                ,
                o.\u0275cmp = t.Xpm({
                    type: o,
                    selectors: [["app-deluxe-user"]],
                    decls: 50,
                    vars: 10,
                    consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "main-wrapper"], ["class", "heading mat-elevation-z6", 4, "ngIf"], [1, "mat-elevation-z6", "deluxe-membership"], ["fxFlexAlign", "center", "fxFlex", "30%", 1, "img-container"], ["viewBox", "0 0 720 720", "xmlns", "http://www.w3.org/2000/svg"], ["href", "assets/public/images/deluxe/blankBoxes.png", "x", "0", "y", "0", "height", "720", "width", "720"], ["x", "260", "y", "130", "height", "50"], ["x", "230", "y", "330", "height", "70"], ["x", "70", "y", "355", "height", "40"], ["x", "120", "y", "450", "height", "55"], ["x", "500", "y", "410", "height", "45"], ["fxFlexAlign", "center", "fxFlex", "60%"], [1, "item-name"], ["translate", ""], [1, "item-description"], ["translate", "", 3, "translateParams"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "33.33%", 1, "mat-elevation-z6"], ["fxFlexAlign", "center", "fxFlex", "40%", 1, "img-container"], [1, "img-responsive", "img-thumbnail", 2, "transform", "scale(3)"], ["translate", "", 1, "item-description"], [1, "heading", "mat-elevation-z6"], [2, "margin-top", "5px"], [1, "error"], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-member", 3, "click"]],
                    template: function(e, n) {
                        1 & e && (t.TgZ(0, "div", 0),
                        t.YNc(1, fc, 4, 1, "div", 1),
                        t.TgZ(2, "mat-card", 2)(3, "div", 3),
                        t.O4$(),
                        t.TgZ(4, "svg", 4),
                        t._UZ(5, "image", 5)(6, "image", 6)(7, "image", 7)(8, "image", 8)(9, "image", 9)(10, "image", 10),
                        t.qZA()(),
                        t.kcU(),
                        t.TgZ(11, "div", 11)(12, "div", 12)(13, "b", 13),
                        t._uU(14, "LABEL_DELUXE_MEMBERSHIP"),
                        t.qZA()(),
                        t.TgZ(15, "div", 14)(16, "span", 15),
                        t._uU(17, "DESCRIPTION_DELUXE_MEMBERSHIP"),
                        t.qZA()(),
                        t.YNc(18, Cc, 7, 1, "div", 16),
                        t.qZA()(),
                        t.TgZ(19, "div", 17)(20, "mat-card", 18)(21, "div", 19)(22, "mat-icon", 20),
                        t._uU(23, " slideshow "),
                        t.qZA()(),
                        t.TgZ(24, "div", 11)(25, "div", 12)(26, "b", 13),
                        t._uU(27, "LABEL_DEALS_OFFERS"),
                        t.qZA()(),
                        t.TgZ(28, "div", 21),
                        t._uU(29, " DESCRIPTION_DEALS_OFFERS "),
                        t.qZA()()(),
                        t.TgZ(30, "mat-card", 18)(31, "div", 19)(32, "mat-icon", 20),
                        t._uU(33, " directions_car "),
                        t.qZA()(),
                        t.TgZ(34, "div", 11)(35, "div", 12)(36, "b", 13),
                        t._uU(37, "LABEL_FREE_FAST_DELIVERY"),
                        t.qZA()(),
                        t.TgZ(38, "div", 21),
                        t._uU(39, " DESCRIPTION_FREE_FAST_DELIVERY "),
                        t.qZA()()(),
                        t.TgZ(40, "mat-card", 18)(41, "div", 19)(42, "mat-icon", 20),
                        t._uU(43, " add "),
                        t.qZA()(),
                        t.TgZ(44, "div", 11)(45, "div", 12)(46, "b", 13),
                        t._uU(47, "LABEL_UNLIMITED_PURCHASE"),
                        t.qZA()(),
                        t.TgZ(48, "div", 21),
                        t._uU(49, " DESCRIPTION_UNLIMITED_PURCHASE "),
                        t.qZA()()()()()),
                        2 & e && (t.xp6(1),
                        t.Q6J("ngIf", n.error),
                        t.xp6(5),
                        t.uIk("href", n.logoSrc),
                        t.xp6(1),
                        t.uIk("href", n.logoSrc),
                        t.xp6(1),
                        t.uIk("href", n.logoSrc),
                        t.xp6(1),
                        t.uIk("href", n.logoSrc),
                        t.xp6(1),
                        t.uIk("href", n.logoSrc),
                        t.xp6(6),
                        t.Q6J("translateParams", t.VKq(8, vc, n.applicationName)),
                        t.xp6(2),
                        t.Q6J("ngIf", !n.error))
                    },
                    dependencies: [T.O5, p.Pi, C.xw, C.SQ, C.XD, C.yH, O.Hw, A.lW, x.a8],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.img-thumbnail[_ngcontent-%COMP%]{background:none;border:0;margin-left:20px}.btn-member[_ngcontent-%COMP%]{bottom:10%}.item-description[_ngcontent-%COMP%]{font-size:initial;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}"]
                }),
                o
            }
            )(),
            canActivate: [Q]
        }, {
            path: "saved-payment-methods",
            component: Us
        }, {
            path: "basket",
            component: eo
        }, {
            path: "order-completion/:id",
            component: bl
        }, {
            path: "contact",
            component: So
        }, {
            path: "photo-wall",
            component: gc
        }, {
            path: "complain",
            component: ya
        }, {
            path: "chatbot",
            component: Pa
        }, {
            path: "order-summary",
            component: Sl
        }, {
            path: "order-history",
            component: jl
        }, {
            path: "payment/:entity",
            component: Is
        }, {
            path: "wallet",
            component: Ul
        }, {
            path: "login",
            component: Ln
        }, {
            path: "forgot-password",
            component: nn
        }, {
            path: "recycle",
            component: ii
        }, {
            path: "register",
            component: Go
        }, {
            path: "search",
            component: yt
        }, {
            path: "hacking-instructor",
            component: yt
        }, {
            path: "score-board",
            component: vr
        }, {
            path: "track-result",
            component: Kt
        }, {
            path: "track-result/new",
            component: Kt,
            data: {
                type: "new"
            }
        }, {
            path: "2fa/enter",
            component: br
        }, {
            path: "privacy-security",
            component: Ar,
            children: [{
                path: "privacy-policy",
                component: Nr
            }, {
                path: "change-password",
                component: Ca
            }, {
                path: "two-factor-authentication",
                component: Sr
            }, {
                path: "data-export",
                component: Pr
            }, {
                path: "last-login-ip",
                component: Lr
            }]
        }, {
            matcher: function xc(o) {
                return 0 === o.length ? null : window.location.href.includes("#access_token=") ? {
                    consumed: o
                } : null
            },
            data: {
                params: window.location.href.substr(window.location.href.indexOf("#"))
            },
            component: ke
        }, {
            matcher: function Ac(o) {
                return 0 === o.length ? null : o[0].toString().match(function Zc(...o) {
                    const a = Array.prototype.slice.call(o)
                      , e = a.shift();
                    return a.reverse().map(function(n, i) {
                        return String.fromCharCode(n - e - 45 - i)
                    }).join("")
                }(25, 184, 174, 179, 182, 186) + 36669..toString(36).toLowerCase() + function wc(...o) {
                    const a = Array.prototype.slice.call(arguments)
                      , e = a.shift();
                    return a.reverse().map(function(n, i) {
                        return String.fromCharCode(n - e - 24 - i)
                    }).join("")
                }(13, 144, 87, 152, 139, 144, 83, 138) + 10..toString(36).toLowerCase()) ? {
                    consumed: o
                } : null
            },
            component: Ue
        }, {
            path: "403",
            component: xr
        }, {
            path: "**",
            component: yt
        }]
          , bc = y.Bz.forRoot(Tc, {
            useHash: !0
        });
        var Sc = d(2101)
          , we = d(3447);
        let Yt = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = ".",
                    this.host = this.hostServer + "/rest/admin"
                }
                getApplicationVersion() {
                    return this.http.get(this.host + "/application-version").pipe((0,
                    _.U)(e=>e.version), (0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )()
          , yc = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = "."
                }
                getLanguages() {
                    return this.http.get(`${this.hostServer}/rest/languages`).pipe((0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        var ut = d(3683)
          , vt = d(8255)
          , Se = d(2855);
        function Ic(o, a) {
            1 & o && (t.TgZ(0, "button", 38)(1, "mat-icon"),
            t._uU(2, " exit_to_app "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGIN"), " "))
        }
        function Uc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 39),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.goToProfilePage())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_circle "),
                t.qZA(),
                t.TgZ(3, "span"),
                t._uU(4),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", e.userEmail, " ")
            }
        }
        function kc(o, a) {
            1 & o && (t.TgZ(0, "button", 40)(1, "mat-icon"),
            t._uU(2, " account_balance "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "ACCOUNTING"), " "))
        }
        function Oc(o, a) {
            if (1 & o && (t.TgZ(0, "button", 41)(1, "mat-icon"),
            t._uU(2, " check_circle_outline "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o) {
                t.oxw();
                const e = t.MAs(71);
                t.Q6J("matMenuTriggerFor", e),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "ORDERS_AND_PAYMENT"), " ")
            }
        }
        function Pc(o, a) {
            if (1 & o && (t.TgZ(0, "button", 42)(1, "mat-icon"),
            t._uU(2, " security "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o) {
                t.oxw();
                const e = t.MAs(38);
                t.Q6J("matMenuTriggerFor", e),
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "PRIVACY_AND_SECURITY"), " ")
            }
        }
        function Lc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 43),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.logout())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " power_settings_new "),
                t.qZA(),
                t.TgZ(3, "span"),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGOUT"), " "))
        }
        function Nc(o, a) {
            if (1 & o && (t.TgZ(0, "button", 44)(1, "mat-icon"),
            t._uU(2, " shopping_cart "),
            t.qZA(),
            t.TgZ(3, "span", 20),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA(),
            t.TgZ(6, "span", 45),
            t._uU(7),
            t.qZA()()),
            2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "TITLE_BASKET"), ""),
                t.xp6(3),
                t.Oqu(e.itemTotal)
            }
        }
        function Ec(o, a) {
            1 & o && t._UZ(0, "span"),
            2 & o && t.Tol("fi fi-" + a.$implicit)
        }
        function qc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-radio-button", 46),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw();
                    return t.KtG(l.changeLanguage(r.key))
                }),
                t.TgZ(1, "div", 47),
                t.YNc(2, Ec, 1, 2, "span", 48),
                t._uU(3),
                t.qZA(),
                t._UZ(4, "i"),
                t.qZA()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.s9C("checked", n.selectedLanguage === e),
                t.s9C("aria-label", e.lang),
                t.Q6J("value", e),
                t.xp6(2),
                t.Q6J("ngForOf", e.icons),
                t.xp6(1),
                t.hij(" ", null == e ? null : e.lang, " "),
                t.xp6(1),
                t.Tol("fas fa-thermometer-" + e.gauge + (e.percentage > 70 ? " confirmation" : " error"))
            }
        }
        function Mc(o, a) {
            1 & o && (t.TgZ(0, "button", 49)(1, "mat-icon"),
            t._uU(2, " my_location "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function Dc(o, a) {
            1 & o && (t.TgZ(0, "button", 50)(1, "mat-icon"),
            t._uU(2, " credit_card "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function Fc(o, a) {
            1 & o && (t.TgZ(0, "button", 51)(1, "mat-icon"),
            t._uU(2, " account_balance_wallet "),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "DIGITAL_WALLET"), " "))
        }
        const Rc = function() {
            return ["privacy-security/privacy-policy"]
        }
          , Yc = function() {
            return ["privacy-security/data-export"]
        }
          , Bc = function() {
            return ["privacy-security/change-password"]
        }
          , Jc = function() {
            return ["privacy-security/two-factor-authentication"]
        }
          , Qc = function() {
            return ["privacy-security/last-login-ip"]
        };
        v.vI.add(m.BCn, m.wn1, m.$Wj, m.jLD, m.Mzg, m.Yme, m.kWN, m.sqG, m.sq$, m.BC0, m.TZC, m.Mzo, m.m08, D.zhw, R.lX, m.$cZ, m.fZP, m.whq, m.xJT, m.VN$),
        v.vz.watch();
        let Hc = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w, S, $, et, ot) {
                    this.administrationService = e,
                    this.challengeService = n,
                    this.configurationService = i,
                    this.userService = r,
                    this.ngZone = l,
                    this.cookieService = u,
                    this.router = f,
                    this.translate = b,
                    this.io = w,
                    this.langService = S,
                    this.loginGuard = $,
                    this.snackBar = et,
                    this.basketService = ot,
                    this.userEmail = "",
                    this.languages = [],
                    this.selectedLanguage = "placeholder",
                    this.version = "",
                    this.applicationName = "OWASP Juice Shop",
                    this.showGitHubLink = !0,
                    this.logoSrc = "assets/public/images/JuiceShop_Logo.png",
                    this.scoreBoardVisible = !1,
                    this.shortKeyLang = "placeholder",
                    this.itemTotal = 0,
                    this.sidenavToggle = new t.vpe,
                    this.onToggleSidenav = ()=>{
                        this.sidenavToggle.emit()
                    }
                }
                ngOnInit() {
                    this.getLanguages(),
                    this.basketService.getItemTotal().subscribe(e=>this.itemTotal = e),
                    this.administrationService.getApplicationVersion().subscribe(e=>{
                        e && (this.version = `v ${e}`)
                    }
                    , e=>console.log(e)),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n, i;
                        if (!(null === (n = e?.application) || void 0 === n) && n.name && (this.applicationName = e.application.name),
                        e?.application && (this.showGitHubLink = e.application.showGitHubLinks),
                        null !== (i = e?.application) && void 0 !== i && i.logo) {
                            let r = e.application.logo;
                            "http" === r.substring(0, 4) && (r = decodeURIComponent(r.substring(r.lastIndexOf("/") + 1))),
                            this.logoSrc = "assets/public/images/" + r
                        }
                    }
                    , e=>console.log(e)),
                    localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                    this.userService.getLoggedInState().subscribe(e=>{
                        e ? this.getUserDetails() : this.userEmail = ""
                    }
                    ),
                    this.getScoreBoardStatus(),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            "scoreBoardChallenge" === e.key && (this.scoreBoardVisible = !0)
                        }
                        )
                    }
                    )
                }
                checkLanguage() {
                    if (this.cookieService.get("language")) {
                        const e = this.cookieService.get("language");
                        this.translate.use(e),
                        this.selectedLanguage = this.languages.find(n=>n.key === e),
                        this.shortKeyLang = this.languages.find(n=>n.key === e).shortKey
                    } else
                        this.changeLanguage("en"),
                        this.selectedLanguage = this.languages.find(e=>"en" === e.key),
                        this.shortKeyLang = this.languages.find(e=>"en" === e.key).shortKey
                }
                search(e) {
                    var n = this;
                    if (e) {
                        const i = {
                            queryParams: {
                                q: e
                            }
                        };
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield n.router.navigate(["/search"], i)
                        }))
                    } else
                        this.ngZone.run((0,
                        k.Z)(function*() {
                            return yield n.router.navigate(["/search"])
                        }))
                }
                getUserDetails() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email
                    }
                    , e=>console.log(e))
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                logout() {
                    var e = this;
                    this.userService.saveLastLoginIp().subscribe(n=>{
                        this.noop()
                    }
                    , n=>console.log(n)),
                    localStorage.removeItem("token"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    this.userService.isLoggedIn.next(!1),
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/"])
                    }))
                }
                changeLanguage(e) {
                    this.translate.use(e);
                    const n = new Date;
                    if (n.setFullYear(n.getFullYear() + 1),
                    this.cookieService.put("language", e, {
                        expires: n
                    }),
                    this.languages.find(i=>i.key === e)) {
                        const i = this.languages.find(l=>l.key === e);
                        this.shortKeyLang = i.shortKey,
                        this.snackBar.open(`Language has been changed to ${i.lang}`, "Force page reload", {
                            duration: 5e3
                        }).onAction().subscribe(()=>{
                            location.reload()
                        }
                        )
                    }
                }
                getScoreBoardStatus() {
                    this.challengeService.find({
                        name: "Score Board"
                    }).subscribe(e=>{
                        this.ngZone.run(()=>{
                            this.scoreBoardVisible = e[0].solved
                        }
                        )
                    }
                    , e=>console.log(e))
                }
                goToProfilePage() {
                    window.location.replace("./profile")
                }
                goToDataErasurePage() {
                    window.location.replace("./dataerasure")
                }
                noop() {}
                getLanguages() {
                    this.langService.getLanguages().subscribe(e=>{
                        this.languages = e,
                        this.checkLanguage()
                    }
                    )
                }
                isAccounting() {
                    const e = this.loginGuard.tokenDecode();
                    return e?.data && "accounting" === e.data.role
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Yt),t.Y36(z),t.Y36(L),t.Y36(N),t.Y36(t.R0b),t.Y36(q.N_),t.Y36(y.F0),t.Y36(p.sK),t.Y36(V),t.Y36(yc),t.Y36(Q),t.Y36(K.ux),t.Y36(H))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-navbar"]],
                outputs: {
                    sidenavToggle: "sidenavToggle"
                },
                decls: 88,
                vars: 43,
                consts: [["color", "primary", "fxLayout", "column", "xmlns", "http://www.w3.org/1999/html", 1, "mat-elevation-z6"], ["fxLayout", "row"], ["mat-button", "", "aria-label", "Open Sidenav", "matTooltipPosition", "below", 2, "height", "48px", "width", "48px", 3, "matTooltip", "click"], ["mat-button", "", "routerLink", "/search", "aria-label", "Back to homepage", 1, "buttons", 2, "height", "60px"], [1, "logo", 3, "src", "alt"], ["fxHide.lt-sm", "", "fxShow", "", 2, "font-size", "x-large"], [1, "fill-remaining-space"], ["id", "searchQuery", "aria-label", "Click to search", 3, "onEnter"], ["searchControl", ""], ["mat-button", "", "fxHide.lt-md", "", "fxShow", "", "aria-label", "Show/hide account menu", "id", "navbarAccount", 1, "buttons", 2, "vertical-align", "middle", "height", "48px", 3, "matMenuTriggerFor"], [1, "material-icons"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/basket", "style", "height:48px;", "class", "buttons", "aria-label", "Show the shopping cart", 4, "ngIf"], ["mat-button", "", "aria-label", "Language selection menu", "matTooltipPosition", "below", 1, "buttons", 2, "height", "48px", "width", "48px", 3, "matMenuTriggerFor", "matTooltip"], ["fxHide.lt-md", "", "fxShow", ""], [3, "overlapTrigger"], ["menu", "matMenu"], ["class", "mat-menu-item", "style", "width: 240px;", 3, "value", "checked", "aria-label", "click", 4, "ngFor", "ngForOf"], ["privacySubMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Go to privacy policy page", 3, "routerLink"], ["translate", ""], ["mat-menu-item", "", "aria-label", "Go to data export page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to data subject page", 3, "click"], ["mat-menu-item", "", "aria-label", "Go to change password page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to two factor authentication page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to last login ip page", 3, "routerLink"], ["ordersSubMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page"], ["mat-menu-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click"], ["mat-button", "", "routerLink", "/basket", "aria-label", "Show the shopping cart", 1, "buttons", 2, "height", "48px"], [1, "fa-layers-counter", "fa-layers-top-right", "fa-3x", "warn-notification", 2, "font-size", "47px"], [1, "mat-menu-item", 2, "width", "240px", 3, "value", "checked", "aria-label", "click"], [2, "display", "inline-block", "width", "200px", "margin-left", "5px"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page"]],
                template: function(e, n) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "button", 2),
                        t.NdJ("click", function() {
                            return n.onToggleSidenav()
                        }),
                        t.ALo(3, "translate"),
                        t.TgZ(4, "mat-icon"),
                        t._uU(5, "menu"),
                        t.qZA()(),
                        t.TgZ(6, "button", 3),
                        t._UZ(7, "img", 4),
                        t.TgZ(8, "span", 5),
                        t._uU(9),
                        t.qZA()(),
                        t._UZ(10, "span", 6),
                        t.TgZ(11, "mat-search-bar", 7, 8),
                        t.NdJ("onEnter", function() {
                            t.CHM(i);
                            const l = t.MAs(12);
                            return t.KtG(n.search(l.value))
                        }),
                        t.qZA(),
                        t.TgZ(13, "button", 9)(14, "i", 10),
                        t._uU(15, " account_circle "),
                        t.qZA(),
                        t.TgZ(16, "span"),
                        t._uU(17),
                        t.ALo(18, "translate"),
                        t.qZA()(),
                        t.TgZ(19, "mat-menu", null, 11),
                        t.YNc(21, Ic, 6, 3, "button", 12),
                        t.YNc(22, Uc, 5, 1, "button", 13),
                        t.YNc(23, kc, 6, 3, "button", 14),
                        t.YNc(24, Oc, 6, 4, "button", 15),
                        t.YNc(25, Pc, 6, 4, "button", 16),
                        t.YNc(26, Lc, 6, 3, "button", 17),
                        t.qZA(),
                        t.YNc(27, Nc, 8, 4, "button", 18),
                        t.TgZ(28, "button", 19),
                        t.ALo(29, "translate"),
                        t.TgZ(30, "mat-icon"),
                        t._uU(31, " language "),
                        t.qZA(),
                        t.TgZ(32, "span", 20),
                        t._uU(33),
                        t.qZA()(),
                        t.TgZ(34, "mat-menu", 21, 22),
                        t.YNc(36, qc, 5, 7, "mat-radio-button", 23),
                        t.qZA(),
                        t.TgZ(37, "mat-menu", null, 24)(39, "button", 25)(40, "mat-icon"),
                        t._uU(41, " assignment "),
                        t.qZA(),
                        t.TgZ(42, "span", 26),
                        t._uU(43, "TITLE_PRIVACY_POLICY"),
                        t.qZA()(),
                        t.TgZ(44, "button", 27)(45, "mat-icon"),
                        t._uU(46, " get_app "),
                        t.qZA(),
                        t.TgZ(47, "span", 26),
                        t._uU(48, "TITLE_REQUEST_DATA_EXPORT"),
                        t.qZA()(),
                        t.TgZ(49, "button", 28),
                        t.NdJ("click", function() {
                            return n.goToDataErasurePage()
                        }),
                        t.TgZ(50, "mat-icon"),
                        t._uU(51, " delete_forever "),
                        t.qZA(),
                        t.TgZ(52, "span", 26),
                        t._uU(53, "DATA_SUBJECT_TITLE"),
                        t.qZA()(),
                        t._UZ(54, "mat-divider"),
                        t.TgZ(55, "button", 29)(56, "mat-icon"),
                        t._uU(57, " edit "),
                        t.qZA(),
                        t.TgZ(58, "span", 26),
                        t._uU(59, "TITLE_CHANGE_PASSWORD"),
                        t.qZA()(),
                        t.TgZ(60, "button", 30)(61, "mat-icon"),
                        t._uU(62, " exposure_plus_2 "),
                        t.qZA(),
                        t.TgZ(63, "span", 26),
                        t._uU(64, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                        t.qZA()(),
                        t.TgZ(65, "button", 31)(66, "mat-icon"),
                        t._uU(67, " place "),
                        t.qZA(),
                        t.TgZ(68, "span", 26),
                        t._uU(69, "LAST_LOGIN_IP"),
                        t.qZA()()(),
                        t.TgZ(70, "mat-menu", null, 32)(72, "button", 33)(73, "mat-icon"),
                        t._uU(74, " archive "),
                        t.qZA(),
                        t.TgZ(75, "span"),
                        t._uU(76),
                        t.ALo(77, "translate"),
                        t.qZA()(),
                        t.TgZ(78, "button", 34)(79, "mat-icon"),
                        t._uU(80, " autorenew "),
                        t.qZA(),
                        t.TgZ(81, "span"),
                        t._uU(82),
                        t.ALo(83, "translate"),
                        t.qZA()(),
                        t._UZ(84, "mat-divider"),
                        t.YNc(85, Mc, 6, 3, "button", 35),
                        t.YNc(86, Dc, 6, 3, "button", 36),
                        t.YNc(87, Fc, 6, 3, "button", 37),
                        t.qZA()()()
                    }
                    if (2 & e) {
                        const i = t.MAs(20)
                          , r = t.MAs(35);
                        t.xp6(2),
                        t.s9C("matTooltip", t.lcZ(3, 28, "SIDENAV_HINT")),
                        t.xp6(5),
                        t.s9C("alt", n.applicationName),
                        t.Q6J("src", n.logoSrc, t.LSH),
                        t.xp6(2),
                        t.hij(" ", n.applicationName, " "),
                        t.xp6(4),
                        t.Q6J("matMenuTriggerFor", i),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(18, 30, "ACCOUNT"), " "),
                        t.xp6(4),
                        t.Q6J("ngIf", !n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn() && n.isAccounting()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.s9C("matTooltip", t.lcZ(29, 32, "LANGUAGE_SEL_HINT")),
                        t.Q6J("matMenuTriggerFor", r),
                        t.xp6(5),
                        t.hij(" ", n.shortKeyLang, " "),
                        t.xp6(1),
                        t.Q6J("overlapTrigger", !0),
                        t.xp6(2),
                        t.Q6J("ngForOf", n.languages),
                        t.xp6(3),
                        t.Q6J("routerLink", t.DdM(38, Rc)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(39, Yc)),
                        t.xp6(11),
                        t.Q6J("routerLink", t.DdM(40, Bc)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(41, Jc)),
                        t.xp6(5),
                        t.Q6J("routerLink", t.DdM(42, Qc)),
                        t.xp6(11),
                        t.hij(" ", t.lcZ(77, 34, "LABEL_ORDER_HISTORY"), " "),
                        t.xp6(6),
                        t.hij(" ", t.lcZ(83, 36, "NAV_RECYCLE"), " "),
                        t.xp6(3),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn()),
                        t.xp6(1),
                        t.Q6J("ngIf", n.isLoggedIn())
                    }
                },
                dependencies: [T.sg, T.O5, y.rH, p.Pi, C.xw, G.b8, ut.Ye, ut.rD, O.Hw, A.lW, Y.d, F.gM, vt.VK, vt.OP, vt.p6, Se.w5, tt.U0, p.X$],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}.mat-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.logo[_ngcontent-%COMP%]{max-height:60px;width:auto}.avatar[_ngcontent-%COMP%]{background-repeat:no-repeat no-repeat;border-radius:50%;display:inline-block;max-height:35px;max-width:35px;padding:0;pointer-events:none}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.language-select[_ngcontent-%COMP%]{margin-left:10px;width:11%}  .mat-select-value-text{font-size:15px}.user-info[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.fi[_ngcontent-%COMP%]{margin-right:2px}[_nghost-%COMP%]     mat-form-field{background:transparent!important}[_nghost-%COMP%]     mat-icon{background:transparent!important}mat-search-bar[_ngcontent-%COMP%]{font-size:13px;margin-right:14px}.buttons[_ngcontent-%COMP%]{width:auto}@media screen and (max-width: 959px){.buttons[_ngcontent-%COMP%]{width:48px}}[_nghost-%COMP%]     .mat-form-field-infix{max-width:250px!important;width:14vw!important}"]
            }),
            o
        }
        )();
        function Gc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 4),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.startHackingInstructor())
                }),
                t.ALo(1, "translate"),
                t.TgZ(2, "mat-icon"),
                t._uU(3, " school "),
                t.qZA(),
                t.TgZ(4, "span", 5),
                t._uU(5, "BTN_GETTING_STARTED"),
                t.qZA()()
            }
            2 & o && t.Q6J("matTooltip", t.lcZ(1, 1, "SCORE_BOARD_HACKING_INSTRUCTOR"))
        }
        function jc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "button", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.closeWelcome())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " visibility_off "),
                t.qZA(),
                t.TgZ(3, "span", 7),
                t._uU(4, "BTN_DISMISS"),
                t.qZA()()
            }
        }
        let zc = (()=>{
            class o {
                constructor(e, n, i) {
                    this.dialogRef = e,
                    this.configurationService = n,
                    this.cookieService = i,
                    this.title = "Welcome to OWASP Juice Shop",
                    this.message = "<p>Being a web application with a vast number of intended security vulnerabilities, the <strong>OWASP Juice Shop</strong> is supposed to be the opposite of a best practice or template application for web developers: It is an awareness, training, demonstration and exercise tool for security risks in modern web applications. The <strong>OWASP Juice Shop</strong> is an open-source project hosted by the non-profit <a href='https://owasp.org' target='_blank'>Open Web Application Security Project (OWASP)</a> and is developed and maintained by volunteers. Check out the link below for more information and documentation on the project.</p><h1><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h1>",
                    this.showHackingInstructor = !0,
                    this.showDismissBtn = !0,
                    this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }
                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n, i, r;
                        !(null === (n = e?.application) || void 0 === n) && n.welcomeBanner && (this.title = e.application.welcomeBanner.title,
                        this.message = e.application.welcomeBanner.message),
                        this.showHackingInstructor = null === (i = e?.hackingInstructor) || void 0 === i ? void 0 : i.isEnabled,
                        this.showHackingInstructor && null !== (r = e?.challenges) && void 0 !== r && r.restrictToTutorialsFirst && (this.dialogRef.disableClose = !0,
                        this.showDismissBtn = !1)
                    }
                    , e=>console.log(e))
                }
                startHackingInstructor() {
                    this.closeWelcome(),
                    console.log('Starting instructions for challenge "Score Board"'),
                    d.e(648).then(d.bind(d, 3907)).then(e=>{
                        e.startHackingInstructorFor("Score Board")
                    }
                    )
                }
                closeWelcome() {
                    this.dialogRef.close();
                    const e = new Date;
                    e.setFullYear(e.getFullYear() + 1),
                    this.cookieService.put(this.welcomeBannerStatusCookieKey, "dismiss", {
                        expires: e
                    })
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.so),t.Y36(L),t.Y36(q.N_))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-welcome-banner"]],
                decls: 8,
                vars: 4,
                consts: [[1, "mat-typography"], [1, "text-justify", 3, "innerHtml"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "close-dialog", "color", "primary", "aria-label", "Close Welcome Banner", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["mat-raised-button", "", "color", "primary", "aria-label", "Close Welcome Banner", 1, "close-dialog", 3, "click"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "h1")(2, "span"),
                    t._uU(3),
                    t.qZA()(),
                    t._UZ(4, "div", 1),
                    t.TgZ(5, "div"),
                    t.YNc(6, Gc, 6, 3, "button", 2),
                    t.YNc(7, jc, 5, 0, "button", 3),
                    t.qZA()()),
                    2 & e && (t.xp6(3),
                    t.Oqu(n.title),
                    t.xp6(1),
                    t.Q6J("innerHtml", n.message, t.oJD),
                    t.xp6(2),
                    t.Q6J("ngIf", n.showHackingInstructor),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showDismissBtn))
                },
                dependencies: [T.O5, p.Pi, G.b8, O.Hw, A.lW, F.gM, p.X$],
                styles: [".text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}[_nghost-%COMP%]     h1 a{font-size:20px}[_nghost-%COMP%]     strong{font-style:italic}"]
            }),
            o
        }
        )()
          , Kc = (()=>{
            class o {
                constructor(e, n, i) {
                    this.dialog = e,
                    this.configurationService = n,
                    this.cookieService = i,
                    this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }
                ngOnInit() {
                    "dismiss" !== this.cookieService.get(this.welcomeBannerStatusCookieKey) && this.configurationService.getApplicationConfiguration().subscribe(n=>{
                        var i;
                        null !== (i = n?.application) && void 0 !== i && i.welcomeBanner && !n.application.welcomeBanner.showOnFirstStart || this.dialog.open(zc, {
                            minWidth: "320px",
                            width: "35%",
                            position: {
                                top: "50px"
                            }
                        })
                    }
                    , n=>console.log(n))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(U.uw),t.Y36(L),t.Y36(q.N_))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-welcome"]],
                decls: 1,
                vars: 0,
                template: function(e, n) {
                    1 & e && t._UZ(0, "div")
                },
                styles: [".welcome-style[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:50%;min-width:320px}"]
            }),
            o
        }
        )();
        function Wc(o, a) {
            1 & o && (t.TgZ(0, "span", 2),
            t._uU(1, "RESTART_REQUIRED"),
            t.qZA())
        }
        function $c(o, a) {
            1 & o && (t.TgZ(0, "span", 2),
            t._uU(1, "RESET_HACKING_PROGRESS"),
            t.qZA())
        }
        function Vc(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-card", 1),
                t._UZ(1, "mat-card-header"),
                t.TgZ(2, "mat-card-content")(3, "span", 2),
                t._uU(4, "NOTIFICATION_SERVER_STARTED"),
                t.qZA(),
                t._uU(5),
                t.TgZ(6, "button", 3),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.closeNotification())
                }),
                t._uU(7, "X"),
                t.qZA(),
                t.TgZ(8, "button", 4),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.clearProgress())
                }),
                t.TgZ(9, "mat-icon"),
                t._uU(10, " delete_forever "),
                t.qZA(),
                t.YNc(11, Wc, 2, 0, "span", 5),
                t.YNc(12, $c, 2, 0, "span", 5),
                t.qZA()()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(5),
                t.hij(": ", e.hackingProgress.autoRestoreMessage, "\xa0"),
                t.xp6(3),
                t.Q6J("disabled", e.hackingProgress.cleared),
                t.xp6(3),
                t.Q6J("ngIf", e.hackingProgress.cleared),
                t.xp6(1),
                t.Q6J("ngIf", !e.hackingProgress.cleared)
            }
        }
        let Xc = (()=>{
            class o {
                constructor(e, n, i, r, l, u) {
                    this.ngZone = e,
                    this.challengeService = n,
                    this.translate = i,
                    this.cookieService = r,
                    this.ref = l,
                    this.io = u,
                    this.hackingProgress = {}
                }
                ngOnInit() {
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("server started", ()=>{
                            const e = this.cookieService.get("continueCode")
                              , n = this.cookieService.get("continueCodeFindIt")
                              , i = this.cookieService.get("continueCodeFixIt");
                            e && this.challengeService.restoreProgress(encodeURIComponent(e)).subscribe(()=>{
                                this.translate.get("AUTO_RESTORED_PROGRESS").subscribe(r=>{
                                    this.hackingProgress.autoRestoreMessage = r
                                }
                                , r=>{
                                    this.hackingProgress.autoRestoreMessage = r
                                }
                                )
                            }
                            , r=>{
                                console.log(r),
                                this.translate.get("AUTO_RESTORE_PROGRESS_FAILED", {
                                    error: r
                                }).subscribe(l=>{
                                    this.hackingProgress.autoRestoreMessage = l
                                }
                                , l=>{
                                    this.hackingProgress.autoRestoreMessage = l
                                }
                                )
                            }
                            ),
                            n && this.challengeService.restoreProgressFindIt(encodeURIComponent(n)).subscribe(()=>{}
                            , r=>{
                                console.log(r)
                            }
                            ),
                            i && this.challengeService.restoreProgressFixIt(encodeURIComponent(i)).subscribe(()=>{}
                            , r=>{
                                console.log(r)
                            }
                            ),
                            this.ref.detectChanges()
                        }
                        )
                    }
                    )
                }
                closeNotification() {
                    this.hackingProgress.autoRestoreMessage = null
                }
                clearProgress() {
                    this.cookieService.remove("continueCode"),
                    this.cookieService.remove("continueCodeFixIt"),
                    this.cookieService.remove("continueCodeFindIt"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    localStorage.removeItem("token"),
                    localStorage.removeItem("displayedDifficulties"),
                    localStorage.removeItem("showSolvedChallenges"),
                    localStorage.removeItem("showDisabledChallenges"),
                    localStorage.removeItem("showOnlyTutorialChallenges"),
                    localStorage.removeItem("displayedChallengeCategories"),
                    this.hackingProgress.cleared = !0
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(t.R0b),t.Y36(z),t.Y36(p.sK),t.Y36(q.N_),t.Y36(t.sBO),t.Y36(V))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-server-started-notification"]],
                decls: 1,
                vars: 1,
                consts: [["class", "container primary-notification mat-elevation-z4", 4, "ngIf"], [1, "container", "primary-notification", "mat-elevation-z4"], ["translate", ""], ["id", "closeButton", "mat-button", "", 3, "click"], ["mat-stroked-button", "", 3, "disabled", "click"], ["translate", "", 4, "ngIf"]],
                template: function(e, n) {
                    1 & e && t.YNc(0, Vc, 13, 4, "mat-card", 0),
                    2 & e && t.Q6J("ngIf", n.hackingProgress.autoRestoreMessage)
                },
                dependencies: [T.O5, p.Pi, O.Hw, A.lW, x.a8, x.dk, x.dn],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}#closeButton[_ngcontent-%COMP%]{float:right}"]
            }),
            o
        }
        )()
          , tu = (()=>{
            class o {
                constructor(e) {
                    this.http = e,
                    this.hostServer = "."
                }
                getCountryMapping() {
                    return this.http.get(this.hostServer + "/rest/country-mapping").pipe((0,
                    h.K)(e=>{
                        throw e
                    }
                    ))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(I.eN))
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            }),
            o
        }
        )();
        function eu(o, a) {
            if (1 & o && (t._UZ(0, "span"),
            t.ALo(1, "lowercase")),
            2 & o) {
                const e = t.oxw(2).$implicit;
                t.Gre("fi fi-", t.lcZ(1, 3, e.country.code), "")
            }
        }
        function ou(o, a) {
            1 & o && (t.TgZ(0, "mat-icon"),
            t._uU(1, "my_location"),
            t.qZA())
        }
        function nu(o, a) {
            if (1 & o && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2).$implicit;
                t.xp6(1),
                t.hij(" ", e.country.name, " ")
            }
        }
        function au(o, a) {
            if (1 & o && (t.TgZ(0, "span", 5),
            t.YNc(1, eu, 2, 5, "span", 8),
            t.YNc(2, ou, 2, 0, "mat-icon", 9),
            t._uU(3, "\xa0 "),
            t.YNc(4, nu, 2, 1, "span", 9),
            t.qZA()),
            2 & o) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "flag" === e.showCtfCountryDetailsInNotifications || "both" === e.showCtfCountryDetailsInNotifications),
                t.xp6(1),
                t.Q6J("ngIf", "name" === e.showCtfCountryDetailsInNotifications),
                t.xp6(2),
                t.Q6J("ngIf", "name" === e.showCtfCountryDetailsInNotifications || "both" === e.showCtfCountryDetailsInNotifications)
            }
        }
        function iu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-card", 2)(1, "div"),
                t._uU(2),
                t.TgZ(3, "button", 3),
                t.NdJ("click", function(i) {
                    const l = t.CHM(e).index
                      , u = t.oxw();
                    return t.KtG(u.closeNotification(l, i.shiftKey))
                }),
                t._uU(4, "X"),
                t.qZA()(),
                t._UZ(5, "br"),
                t.TgZ(6, "div", 4)(7, "span", 5)(8, "mat-icon"),
                t._uU(9, "outlined_flag"),
                t.qZA(),
                t._uU(10),
                t.qZA(),
                t._uU(11, "\xa0 "),
                t.TgZ(12, "button", 6),
                t.NdJ("cbOnSuccess", function() {
                    const r = t.CHM(e).$implicit;
                    return t.KtG(r.copied = !0)
                }),
                t.TgZ(13, "mat-icon"),
                t._uU(14, "content_copy"),
                t.qZA(),
                t.TgZ(15, "span", 4),
                t._uU(16),
                t.ALo(17, "translate"),
                t.qZA(),
                t.TgZ(18, "span", 4),
                t._uU(19),
                t.ALo(20, "translate"),
                t.qZA()(),
                t._UZ(21, "br"),
                t.YNc(22, au, 5, 3, "span", 7),
                t.qZA()()
            }
            if (2 & o) {
                const e = a.$implicit
                  , n = t.oxw();
                t.xp6(2),
                t.Oqu(e.message),
                t.xp6(4),
                t.Q6J("hidden", !n.showCtfFlagsInNotifications),
                t.xp6(4),
                t.hij(" ", e.flag, ""),
                t.xp6(2),
                t.Q6J("cbContent", e.flag)("disabled", e.copied),
                t.xp6(3),
                t.Q6J("hidden", !e.copied),
                t.xp6(1),
                t.Oqu(t.lcZ(17, 10, "COPY_SUCCESS")),
                t.xp6(2),
                t.Q6J("hidden", e.copied),
                t.xp6(1),
                t.Oqu(t.lcZ(20, 12, "COPY_TO_CLIPBOARD")),
                t.xp6(3),
                t.Q6J("ngIf", "none" !== n.showCtfCountryDetailsInNotifications)
            }
        }
        let ru = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b) {
                    this.ngZone = e,
                    this.configurationService = n,
                    this.challengeService = i,
                    this.countryMappingService = r,
                    this.translate = l,
                    this.cookieService = u,
                    this.ref = f,
                    this.io = b,
                    this.notifications = [],
                    this.showCtfFlagsInNotifications = !1,
                    this.showCtfCountryDetailsInNotifications = "none"
                }
                ngOnInit() {
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            e?.challenge && (e.hidden || this.showNotification(e),
                            e.isRestore || (this.saveProgress(),
                            e.hidden || d.e(103).then(d.bind(d, 8103)).then(n=>{
                                n.shootConfetti()
                            }
                            )),
                            this.io.socket().emit("notification received", e.flag))
                        }
                        )
                    }
                    ),
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        e?.ctf && (this.showCtfFlagsInNotifications = !!e.ctf.showFlagsInNotifications && e.ctf.showFlagsInNotifications,
                        e.ctf.showCountryDetailsInNotifications ? (this.showCtfCountryDetailsInNotifications = e.ctf.showCountryDetailsInNotifications,
                        "none" !== e.ctf.showCountryDetailsInNotifications && this.countryMappingService.getCountryMapping().subscribe(n=>{
                            this.countryMap = n
                        }
                        , n=>console.log(n))) : this.showCtfCountryDetailsInNotifications = "none")
                    }
                    )
                }
                closeNotification(e, n=!1) {
                    n ? (this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().emit("verifyCloseNotificationsChallenge", this.notifications)
                    }
                    ),
                    this.notifications = []) : this.notifications.splice(e, 1),
                    this.ref.detectChanges()
                }
                showNotification(e) {
                    this.translate.get("CHALLENGE_SOLVED", {
                        challenge: e.challenge
                    }).toPromise().then(n=>n, n=>n).then(n=>{
                        let i;
                        this.showCtfCountryDetailsInNotifications && "none" !== this.showCtfCountryDetailsInNotifications && (i = this.countryMap[e.key]),
                        this.notifications.push({
                            message: n,
                            flag: e.flag,
                            country: i,
                            copied: !1
                        }),
                        this.ref.detectChanges()
                    }
                    )
                }
                saveProgress() {
                    this.challengeService.continueCode().subscribe(e=>{
                        if (!e)
                            throw new Error("Received invalid continue code from the server!");
                        const n = new Date;
                        n.setFullYear(n.getFullYear() + 1),
                        this.cookieService.put("continueCode", e, {
                            expires: n
                        })
                    }
                    , e=>console.log(e))
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(t.R0b),t.Y36(L),t.Y36(z),t.Y36(tu),t.Y36(p.sK),t.Y36(q.N_),t.Y36(t.sBO),t.Y36(V))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-challenge-solved-notification"]],
                decls: 2,
                vars: 1,
                consts: [[1, "container", "challenge-solved-toast", "mat-elevation-z4"], ["class", "accent-notification", 4, "ngFor", "ngForOf"], [1, "accent-notification"], ["id", "closeButton", "mat-button", "", 3, "click"], [3, "hidden"], [1, "icon-box"], ["ngxClipboard", "", "mat-stroked-button", "", 3, "cbContent", "disabled", "cbOnSuccess"], ["class", "icon-box", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, iu, 23, 14, "mat-card", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngForOf", n.notifications))
                },
                dependencies: [T.sg, T.O5, we.yb, O.Hw, A.lW, x.a8, T.i8, p.X$],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}#closeButton[_ngcontent-%COMP%]{float:right}.icon-box[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}"]
            }),
            o
        }
        )();
        var dt = d(6338);
        function su(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 36),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " exit_to_app "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGIN"), " "))
        }
        function lu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 37),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return i.onToggleSidenav(),
                    t.KtG(i.goToProfilePage())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_circle "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", e.userEmail, " ")
            }
        }
        function cu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 38),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_balance "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "ACCOUNTING"), " "))
        }
        const ye = function(o) {
            return {
                rotated: o
            }
        };
        function uu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-list-item", 39),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " check_circle_outline "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t.TgZ(6, "mat-icon", 40),
                t._uU(7, " expand_more "),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "ORDERS_AND_PAYMENT"), " "),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(4, ye, e.showOrdersSubmenu))
            }
        }
        function du(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 47),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " archive "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "LABEL_ORDER_HISTORY"), " "))
        }
        function pu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 48),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " autorenew "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "NAV_RECYCLE"), " "))
        }
        function mu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 49),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " my_location "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function hu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 50),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " credit_card "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function _u(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 51),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showOrdersSubmenu = !i.showOrdersSubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " account_balance_wallet "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "DIGITAL_WALLET"), " "))
        }
        const Ie = function(o) {
            return {
                expanded: o
            }
        };
        function gu(o, a) {
            if (1 & o && (t.TgZ(0, "div", 41),
            t.YNc(1, du, 6, 3, "a", 42),
            t.YNc(2, pu, 6, 3, "a", 43),
            t._UZ(3, "mat-divider"),
            t.YNc(4, mu, 6, 3, "a", 44),
            t.YNc(5, hu, 6, 3, "a", 45),
            t.YNc(6, _u, 6, 3, "a", 46),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(6, Ie, e.showOrdersSubmenu)),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(2),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn())
            }
        }
        function fu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "mat-list-item", 52),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " security "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t.TgZ(6, "mat-icon", 40),
                t._uU(7, " expand_more "),
                t.qZA()()
            }
            if (2 & o) {
                const e = t.oxw();
                t.xp6(4),
                t.hij(" ", t.lcZ(5, 2, "PRIVACY_AND_SECURITY"), " "),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(4, ye, e.showPrivacySubmenu))
            }
        }
        function Cu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 59),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " assignment "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_PRIVACY_POLICY"),
                t.qZA()()
            }
        }
        function vu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 61),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " get_app "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_REQUEST_DATA_EXPORT"),
                t.qZA()()
            }
        }
        function Tu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 62),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.goToDataErasurePage())
                })("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " delete_forever "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "DATA_SUBJECT_TITLE"),
                t.qZA()()
            }
        }
        function bu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 63),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " edit "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_CHANGE_PASSWORD"),
                t.qZA()()
            }
        }
        function xu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 64),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " exposure_plus_2 "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                t.qZA()()
            }
        }
        function Au(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 65),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.onToggleSidenav(),
                    t.KtG(i.showPrivacySubmenu = !i.showPrivacySubmenu)
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " place "),
                t.qZA(),
                t.TgZ(3, "span", 60),
                t._uU(4, "LAST_LOGIN_IP"),
                t.qZA()()
            }
        }
        function Zu(o, a) {
            if (1 & o && (t.TgZ(0, "div", 41),
            t.YNc(1, Cu, 5, 0, "a", 53),
            t.YNc(2, vu, 5, 0, "a", 54),
            t.YNc(3, Tu, 5, 0, "a", 55),
            t._UZ(4, "mat-divider"),
            t.YNc(5, bu, 5, 0, "a", 56),
            t.YNc(6, xu, 5, 0, "a", 57),
            t.YNc(7, Au, 5, 0, "a", 58),
            t.qZA()),
            2 & o) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(7, Ie, e.showPrivacySubmenu)),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(2),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn()),
                t.xp6(1),
                t.Q6J("ngIf", e.isLoggedIn())
            }
        }
        function wu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 66),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return i.onToggleSidenav(),
                    t.KtG(i.logout())
                }),
                t.TgZ(1, "mat-icon"),
                t._uU(2, " power_settings_new "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "TITLE_LOGOUT"), " "))
        }
        function Su(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 67),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " sentiment_dissatisfied "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "NAV_COMPLAIN"), " "))
        }
        function yu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " chat "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "SECTION_SUPPORT_CHAT"), " "))
        }
        function Iu(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 69),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " card_membership "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "LABEL_DELUXE_MEMBERSHIP"), " "))
        }
        function Uu(o, a) {
            1 & o && t._UZ(0, "mat-divider", 70)
        }
        function ku(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 71),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onToggleSidenav())
                }),
                t._UZ(1, "mat-icon", 72),
                t.TgZ(2, "span", 14),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(3),
            t.hij(" ", t.lcZ(4, 1, "TITLE_SCORE_BOARD"), " "))
        }
        function Ou(o, a) {
            if (1 & o) {
                const e = t.EpF();
                t.TgZ(0, "a", 73),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.startHackingInstructor())
                }),
                t.TgZ(1, "i", 13),
                t._uU(2, " school "),
                t.qZA(),
                t.TgZ(3, "span", 14),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            2 & o && (t.xp6(4),
            t.hij(" ", t.lcZ(5, 1, "BTN_GETTING_STARTED"), " "))
        }
        function Pu(o, a) {
            1 & o && (t.TgZ(0, "a", 74),
            t._UZ(1, "mat-icon", 75),
            t.TgZ(2, "span", 14),
            t._uU(3, " GitHub "),
            t.qZA()())
        }
        let Lu = (()=>{
            class o {
                constructor(e, n, i, r, l, u, f, b, w) {
                    this.administrationService = e,
                    this.challengeService = n,
                    this.ngZone = i,
                    this.io = r,
                    this.userService = l,
                    this.cookieService = u,
                    this.router = f,
                    this.configurationService = b,
                    this.loginGuard = w,
                    this.applicationName = "OWASP Juice Shop",
                    this.showGitHubLink = !0,
                    this.userEmail = "",
                    this.scoreBoardVisible = !1,
                    this.version = "",
                    this.showPrivacySubmenu = !1,
                    this.showOrdersSubmenu = !1,
                    this.isShowing = !1,
                    this.offerScoreBoardTutorial = !1,
                    this.sidenavToggle = new t.vpe,
                    this.onToggleSidenav = ()=>{
                        this.sidenavToggle.emit()
                    }
                }
                ngOnInit() {
                    this.administrationService.getApplicationVersion().subscribe(e=>{
                        e && (this.version = `v ${e}`)
                    }
                    , e=>console.log(e)),
                    this.getApplicationDetails(),
                    this.getScoreBoardStatus(),
                    localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                    this.userService.getLoggedInState().subscribe(e=>{
                        e ? this.getUserDetails() : this.userEmail = ""
                    }
                    ),
                    this.ngZone.runOutsideAngular(()=>{
                        this.io.socket().on("challenge solved", e=>{
                            "scoreBoardChallenge" === e.key && (this.scoreBoardVisible = !0)
                        }
                        )
                    }
                    )
                }
                isLoggedIn() {
                    return localStorage.getItem("token")
                }
                logout() {
                    var e = this;
                    this.userService.saveLastLoginIp().subscribe(n=>{
                        this.noop()
                    }
                    , n=>console.log(n)),
                    localStorage.removeItem("token"),
                    this.cookieService.remove("token"),
                    sessionStorage.removeItem("bid"),
                    sessionStorage.removeItem("itemTotal"),
                    this.userService.isLoggedIn.next(!1),
                    this.ngZone.run((0,
                    k.Z)(function*() {
                        return yield e.router.navigate(["/"])
                    }))
                }
                goToProfilePage() {
                    window.location.replace("./profile")
                }
                goToDataErasurePage() {
                    window.location.replace("./dataerasure")
                }
                noop() {}
                getScoreBoardStatus() {
                    this.challengeService.find({
                        name: "Score Board"
                    }).subscribe(e=>{
                        this.ngZone.run(()=>{
                            this.scoreBoardVisible = e[0].solved
                        }
                        )
                    }
                    , e=>console.log(e))
                }
                getUserDetails() {
                    this.userService.whoAmI().subscribe(e=>{
                        this.userEmail = e.email
                    }
                    , e=>console.log(e))
                }
                getApplicationDetails() {
                    this.configurationService.getApplicationConfiguration().subscribe(e=>{
                        var n;
                        !(null === (n = e?.application) || void 0 === n) && n.name && (this.applicationName = e.application.name),
                        e?.application && (this.showGitHubLink = e.application.showGitHubLinks),
                        e?.application.welcomeBanner.showOnFirstStart && e.hackingInstructor.isEnabled && (this.offerScoreBoardTutorial = e.application.welcomeBanner.showOnFirstStart && e.hackingInstructor.isEnabled)
                    }
                    , e=>console.log(e))
                }
                isAccounting() {
                    var e;
                    return "accounting" === (null === (e = this.loginGuard.tokenDecode()?.data) || void 0 === e ? void 0 : e.role)
                }
                startHackingInstructor() {
                    this.onToggleSidenav(),
                    console.log('Starting instructions for challenge "Score Board"'),
                    d.e(648).then(d.bind(d, 3907)).then(e=>{
                        e.startHackingInstructorFor("Score Board")
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(Yt),t.Y36(z),t.Y36(t.R0b),t.Y36(V),t.Y36(N),t.Y36(q.N_),t.Y36(y.F0),t.Y36(L),t.Y36(Q))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["sidenav"]],
                outputs: {
                    sidenavToggle: "sidenavToggle"
                },
                decls: 72,
                vars: 27,
                consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-subheader", "", "translate", "", "fxHide", "", "fxShow.lt-md", "", 1, "side-subHeader"], ["fxHide", "", "fxShow.lt-md", ""], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click", 4, "ngIf"], ["class", "parent", "aria-label", "Show Orders and Payment Menu", 3, "click", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["class", "parent", "aria-label", "Show Privacy and Security Menu", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Logout", 3, "click", 4, "ngIf"], ["mat-subheader", "", "translate", "", 1, "side-subHeader"], ["mat-list-item", "", "routerLink", "/contact", "aria-label", "Go to contact us page", 3, "click"], [1, "material-icons"], [1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/about", "aria-label", "Go to about us page", 3, "click"], ["mat-list-item", "", "routerLink", "/photo-wall", "aria-label", "Go to photo wall", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click", 4, "ngIf"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page", 4, "ngIf"], [1, "appVersion"], [2, "font-size", "13px"], [2, "font-size", "12px"], [2, "margin-top", "10px"], [1, "icon-angular"], [1, "icon-html5"], [1, "icon-sass"], [1, "icon-css3"], [1, "icon-javascript-alt"], [1, "icon-nodejs"], [1, "icon-database-alt2"], [1, "icon-mongodb"], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click"], ["aria-label", "Show Orders and Payment Menu", 1, "parent", 3, "click"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click"], ["aria-label", "Show Privacy and Security Menu", 1, "parent", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click"], ["translate", "", 1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click"], ["mat-list-item", "", "aria-label", "Logout", 3, "click"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click"], [2, "margin-bottom", "10px"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click"], ["matListIcon", "", 1, "fas", "fa-trophy", "fa-lg"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page"], ["matListIcon", "", 1, "fab", "fa-github", "fa-lg"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "h2"),
                    t._uU(3),
                    t.qZA()()(),
                    t.TgZ(4, "mat-nav-list"),
                    t._UZ(5, "button", 1),
                    t.TgZ(6, "h3", 2),
                    t._uU(7, "ACCOUNT"),
                    t.qZA(),
                    t.TgZ(8, "div", 3),
                    t.YNc(9, su, 6, 3, "a", 4),
                    t.YNc(10, lu, 5, 1, "a", 5),
                    t.YNc(11, cu, 6, 3, "a", 6),
                    t.YNc(12, uu, 8, 6, "mat-list-item", 7),
                    t.YNc(13, gu, 7, 8, "div", 8),
                    t.YNc(14, fu, 8, 6, "mat-list-item", 9),
                    t.YNc(15, Zu, 8, 9, "div", 8),
                    t.YNc(16, wu, 6, 3, "a", 10),
                    t.qZA(),
                    t._UZ(17, "mat-divider", 3),
                    t.TgZ(18, "h3", 11),
                    t._uU(19, "TITLE_CONTACT"),
                    t.qZA(),
                    t.TgZ(20, "a", 12),
                    t.NdJ("click", function() {
                        return n.onToggleSidenav()
                    }),
                    t.TgZ(21, "i", 13),
                    t._uU(22, " feedback "),
                    t.qZA(),
                    t.TgZ(23, "span", 14),
                    t._uU(24),
                    t.ALo(25, "translate"),
                    t.qZA()(),
                    t.YNc(26, Su, 6, 3, "a", 15),
                    t.YNc(27, yu, 6, 3, "a", 16),
                    t._UZ(28, "mat-divider"),
                    t.TgZ(29, "h3", 11),
                    t._uU(30, "COMPANY"),
                    t.qZA(),
                    t.TgZ(31, "a", 17),
                    t.NdJ("click", function() {
                        return n.onToggleSidenav()
                    }),
                    t.TgZ(32, "i", 13),
                    t._uU(33, " business_center "),
                    t.qZA(),
                    t.TgZ(34, "span", 14),
                    t._uU(35),
                    t.ALo(36, "translate"),
                    t.qZA()(),
                    t.TgZ(37, "a", 18),
                    t.NdJ("click", function() {
                        return n.onToggleSidenav()
                    }),
                    t.TgZ(38, "i", 13),
                    t._uU(39, " camera "),
                    t.qZA(),
                    t.TgZ(40, "span", 14),
                    t._uU(41),
                    t.ALo(42, "translate"),
                    t.qZA()(),
                    t.YNc(43, Iu, 6, 3, "a", 19),
                    t.YNc(44, Uu, 1, 0, "mat-divider", 20),
                    t.YNc(45, ku, 5, 3, "a", 21),
                    t.YNc(46, Ou, 6, 3, "a", 22),
                    t.YNc(47, Pu, 4, 0, "a", 23),
                    t.qZA(),
                    t.TgZ(48, "div", 24)(49, "span")(50, "span", 25),
                    t._uU(51),
                    t.qZA(),
                    t._UZ(52, "br"),
                    t.TgZ(53, "span", 26),
                    t._uU(54),
                    t.qZA(),
                    t._UZ(55, "br"),
                    t.TgZ(56, "div", 27),
                    t._UZ(57, "i", 28),
                    t._uU(58, "\xa0 "),
                    t._UZ(59, "i", 29),
                    t._uU(60, "\xa0 "),
                    t._UZ(61, "i", 30),
                    t._uU(62, "\xa0 "),
                    t._UZ(63, "i", 31),
                    t._uU(64, "\xa0 "),
                    t._UZ(65, "i", 32),
                    t._uU(66, "\xa0 "),
                    t._UZ(67, "i", 33),
                    t._uU(68, "\xa0 "),
                    t._UZ(69, "i", 34),
                    t._uU(70, "\xa0 "),
                    t._UZ(71, "i", 35),
                    t.qZA()()()),
                    2 & e && (t.xp6(3),
                    t.hij(" ", n.applicationName, ""),
                    t.xp6(6),
                    t.Q6J("ngIf", !n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn() && n.isAccounting()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showOrdersSubmenu),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showPrivacySubmenu),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(8),
                    t.hij(" ", t.lcZ(25, 21, "SECTION_CUSTOMER_FEEDBACK"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(8),
                    t.hij(" ", t.lcZ(36, 23, "TITLE_ABOUT"), " "),
                    t.xp6(6),
                    t.hij(" ", t.lcZ(42, 25, "LABEL_PHOTO_WALL"), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", n.isLoggedIn()),
                    t.xp6(1),
                    t.Q6J("ngIf", n.scoreBoardVisible || n.showGitHubLink),
                    t.xp6(1),
                    t.Q6J("ngIf", n.scoreBoardVisible),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.scoreBoardVisible && n.offerScoreBoardTutorial),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showGitHubLink),
                    t.xp6(4),
                    t.Oqu(n.applicationName),
                    t.xp6(3),
                    t.Oqu(n.version))
                },
                dependencies: [T.mk, T.O5, y.rH, p.Pi, G.b8, G.oO, ut.Ye, ut.rD, O.Hw, A.lW, Y.d, dt.Hk, dt.Tg, dt.Nh, dt.gs, p.X$],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}a[_ngcontent-%COMP%]{text-decoration:none!important}.menu-text[_ngcontent-%COMP%]{padding-left:10px}.mat-list-base[_ngcontent-%COMP%], .mat-list-item[_ngcontent-%COMP%], .mat-list-icon[_ngcontent-%COMP%]{padding:0!important}.toolbar-title[_ngcontent-%COMP%]{margin:0 16px}.mat-subheader[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.app-nav-list-icon[_ngcontent-%COMP%]{margin:0 12px}.side-subHeader[_ngcontent-%COMP%]{font-weight:300}mat-nav-list[_ngcontent-%COMP%]{margin-bottom:50px}.menu-button[_ngcontent-%COMP%]{transform:rotate(0);transition:.3s ease-in-out}.menu-button.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.submenu[_ngcontent-%COMP%]{overflow-y:hidden;padding-left:30px;transform:scaleY(0);transform-origin:top;transition:transform .3s ease}.submenu.expanded[_ngcontent-%COMP%]{transform:scaleY(1)}.appVersion[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px;text-align:center}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }),
            o
        }
        )()
          , Nu = (()=>{
            class o {
                constructor(e, n) {
                    this._document = e,
                    this.translate = n,
                    this.translate.setDefaultLang("en")
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.Y36(T.K0),t.Y36(p.sK))
            }
            ,
            o.\u0275cmp = t.Xpm({
                type: o,
                selectors: [["app-root"]],
                decls: 10,
                vars: 0,
                consts: [[1, "mat-typography"], ["fullscreen", ""], ["mode", "over"], ["sidenav", ""], [3, "sidenavToggle"]],
                template: function(e, n) {
                    if (1 & e) {
                        const i = t.EpF();
                        t.TgZ(0, "div", 0)(1, "mat-sidenav-container", 1)(2, "mat-sidenav", 2, 3)(4, "sidenav", 4),
                        t.NdJ("sidenavToggle", function() {
                            t.CHM(i);
                            const l = t.MAs(3);
                            return t.KtG(l.toggle())
                        }),
                        t.qZA()(),
                        t.TgZ(5, "app-navbar", 4),
                        t.NdJ("sidenavToggle", function() {
                            t.CHM(i);
                            const l = t.MAs(3);
                            return t.KtG(l.toggle())
                        }),
                        t.qZA(),
                        t._UZ(6, "app-server-started-notification")(7, "app-challenge-solved-notification")(8, "app-welcome")(9, "router-outlet"),
                        t.qZA()()
                    }
                },
                dependencies: [y.lC, ct.JX, ct.TM, Hc, Kc, Xc, ru, Lu],
                styles: [".mat-sidenav[_ngcontent-%COMP%]{width:280px}"]
            }),
            o
        }
        )()
          , Eu = (()=>{
            class o {
                intercept(e, n) {
                    return localStorage.getItem("token") && (e = e.clone({
                        setHeaders: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })),
                    localStorage.getItem("email") && (e = e.clone({
                        setHeaders: {
                            "X-User-Email": String(localStorage.getItem("email"))
                        }
                    })),
                    n.handle(e)
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)
            }
            ,
            o.\u0275prov = t.Yz7({
                token: o,
                factory: o.\u0275fac
            }),
            o
        }
        )();
        var qu = d(6784)
          , Mu = d(8746)
          , Du = d(8184);
        function Fu(o) {
            return new Sc.w(o,"./assets/i18n/",".json")
        }
        let Ru = (()=>{
            class o {
                constructor(e, n) {
                    this.configurationService = e,
                    this.overlayContainer = n,
                    e.getApplicationConfiguration().subscribe(i=>{
                        n.getContainerElement().classList.add(i.application.theme + "-theme")
                    }
                    )
                }
            }
            return o.\u0275fac = function(e) {
                return new (e || o)(t.LFG(L),t.LFG(Du.Xj))
            }
            ,
            o.\u0275mod = t.oAB({
                type: o,
                bootstrap: [Nu]
            }),
            o.\u0275inj = t.cJS({
                providers: [{
                    provide: I.TP,
                    useClass: Eu,
                    multi: !0
                }, {
                    provide: Pt.rN,
                    useValue: {
                        coreLibraryLoader: (a = (0,
                        k.Z)(function*() {
                            return yield d.e(112).then(d.bind(d, 9112))
                        }),
                        function() {
                            return a.apply(this, arguments)
                        }
                        ),
                        lineNumbersLoader: function() {
                            var a = (0,
                            k.Z)(function*() {
                                return yield d.e(859).then(d.t.bind(d, 859, 23))
                            });
                            return function() {
                                return a.apply(this, arguments)
                            }
                        }(),
                        languages: {
                            typescript: function() {
                                var a = (0,
                                k.Z)(function*() {
                                    return yield d.e(535).then(d.bind(d, 2535))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }(),
                            javascript: function() {
                                var a = (0,
                                k.Z)(function*() {
                                    return yield d.e(613).then(d.bind(d, 6613))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }(),
                            yaml: function() {
                                var a = (0,
                                k.Z)(function*() {
                                    return yield d.e(472).then(d.bind(d, 8472))
                                });
                                return function() {
                                    return a.apply(this, arguments)
                                }
                            }()
                        }
                    }
                }, mt, L, Yt, xt, ve, N, Xt, Wt, pt, It, Zt, se, le, bt, ce, H, z, q.N_, Gt, Q, Ft, jt, Tt, Ce, nt, wt, Dt, Rt, Ct, Ze],
                imports: [J.b2, bc, p.aw.forRoot({
                    loader: {
                        provide: p.Zw,
                        useFactory: Fu,
                        deps: [I.eN]
                    }
                }), q.m$.forRoot(), rt.tw.forRoot(), qu.o9, I.JF, s.UX, Mu.PW, Vt.uK, qt.N, kt.Ob, we.Iq, Lt.ef, ut.g0, O.Ps, g.lN, te.LD, A.ot, ct.SJ, c.p0, st.TU, x.QW, P.c, Ut.p9, U.Is, Y.t, _t.FA, ee.XK, B.To, he.Cv, F.AV, vt.Tx, dt.ie, _e.vV, Et.xu, St.N6, Se.PQ, ge.g, tt.Fk, K.ZX, $t.KP, ft.Nh, At.rP, Nt.Hi, me.mC, Pt._l]
            }),
            o;
            var a
        }
        )();
        (0,
        t.G48)(),
        J.q6().bootstrapModule(Ru).catch(o=>console.log(o))
    }
}, at=>{
    at.O(0, [736], ()=>at(at.s = 902)),
    at.O()
}
]);
