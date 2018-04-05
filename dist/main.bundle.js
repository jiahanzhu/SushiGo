webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  margin-bottom: 5px;\n}\n\n.hugh-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5\n}\n\n.hugh-widget .hugh-content {\n  width: 100%;\n}\n\n.panel-heading, .panel-footer {\n  background-color: #337ab7;\n  color: white;\n  position: fixed;\n  width: 100%;\n}\n\n.panel-heading {\n  top: 0px;\n}\n\n.panel-footer {\n  bottom: 0px;\n}\n\n.panel-body {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n\n.panel-heading .glyphicon, .panel-footer .glyphicon {\n  color: white;\n}\n\n.hugh-heading, .hugh-footer {\n  background-color: whitesmoke;\n  color: black;\n}\n\n.hugh-heading .glyphicon, .hugh-footer .glyphicon {\n  color: black;\n}\n\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\n\na:hover{\n  text-decoration: none;\n}\n\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n\n.cl-text-white{\n  color: #fff;\n}\n\n.cl-text-black{\n  color: #000000;\n}\n\n.cl-text-bold{\n  font-weight: bold;\n}\n\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl-header-padding{\n  padding-left: 5%;\n}\n\n.cl-full-width{\n  width: 100%;\n}\n\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n\n.cl-relative-position{\n  position: relative;\n}\n\n.cl-absolute-position{\n  position: absolute;\n}\n\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n.youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");




var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background{\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/Background.jpg")) + ") !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\"\n                    class=\"navbar-toggle collapsed\"\n                    data-toggle=\"collapse\"\n                    data-target=\"#navbar\"\n                    aria-expanded=\"false\"\n                    aria-controls=\"navbar\">\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </button>\n            <a class=\"navbar-brand\">Sushi Go!</a>\n        </div>\n\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <div class=\"navbar-nav navbar-brand navbar-header\">\n                <a class=\"nav-item nav-link\" href=\"https://boardgamegeek.com/boardgame/133473/sushi-go\">Intro</a>\n                <a class=\"nav-item nav-link\" href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">About</a>\n                <a class=\"nav-item nav-link\" routerLink=\"/game\">Start Game</a>\n            </div>\n\n            <form (ngSubmit)=\"login()\" #f=\"ngForm\" class=\"navbar-form navbar-right\">\n                <input placeholder=\"username\"\n                       name=\"username\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"username\" required #name=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">\n                  Please enter username!\n                </span>\n\n                <input placeholder=\"password\"\n                       name=\"password\"\n                       type=\"password\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"password\" required #pass=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"pass.invalid && pass.touched\">\n                  Please enter password!\n                </span>\n\n                <button type=\"submit\"\n                        class=\"btn btn-success\"\n                        [disabled]=\"f.invalid\">\n                    Sign in\n                </button>\n\n                <button routerLink=\"/register\"\n                        class=\"btn btn-primary\">\n                    Register\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n\n<div class=\"background\" id=\"login\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.username, this.password)
            .subscribe(function (response) {
            _this.user = response;
            _this.router.navigate(['/user', _this.user._id]);
        }, function (err) {
            alert('Invalid Password!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label {\n    float: left;\n    width: 200px;\n}\n\n.field {\n    margin-left: 200px;\n}\n\n.field input {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\"\n              class=\"navbar-toggle collapsed\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar\"\n              aria-expanded=\"false\"\n              aria-controls=\"navbar\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"\">Sushi Go!</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <form class=\"navbar-form navbar-right\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-danger\">Logout</a>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a class=\"navbar-brand\">Hi {{username}}</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!--<div class=\"container-fluid\">-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-sm-6\">-->\n      <!--<div class=\"card text-center\">-->\n        <!--<img class=\"card-img-top\" src=\"../../../../assets/img/sushigo_profile.png\" alt=\"Card image cap\">-->\n        <!--<div class=\"card-body\">-->\n          <!--<h3 class=\"card-title text-center\">-->\n            <!--<div class=\"label\">Username: </div>-->\n            <!--<input name=\"username\"-->\n                   <!--[(ngModel)]=\"user.username\"-->\n                   <!--class=\"form-control input field\"-->\n                   <!--type=\"text\"-->\n                   <!--id=\"username\"-->\n                   <!--placeholder=\"{{user.username}}\">-->\n          <!--</h3>-->\n          <!--<ul class=\"list-group list-group-flush\">-->\n            <!--<li class=\"list-group-item form-group\">-->\n              <!--<label>Email</label>-->\n              <!--<input [(ngModel)]=\"user.email\" class=\"form-control\" type=\"text\"-->\n            <!--id=\"email\" placeholder=\"{{user.email}}\">-->\n            <!--&lt;!&ndash;<label>Fisrt Name</label>&ndash;&gt;-->\n            <!--&lt;!&ndash;<input [(ngModel)]=\"user.firstName\" class=\"form-control\" type=\"text\"&ndash;&gt;-->\n            <!--&lt;!&ndash;id=\"first-name\" placeholder=\"{{user.firstName}}\">&ndash;&gt;-->\n            <!--&lt;!&ndash;<label>Last Name</label>&ndash;&gt;-->\n            <!--&lt;!&ndash;<input [(ngModel)]=\"user.lastName\" class=\"form-control\" type=\"text\"&ndash;&gt;-->\n            <!--&lt;!&ndash;id=\"last-name\" placeholder=\"{{user.lastName}}\">&ndash;&gt;-->\n            <!--<li class=\"list-group-item\">Cras justo odio</li>-->\n            <!--<li class=\"list-group-item\">Dapibus ac facilisis in</li>-->\n            <!--<li class=\"list-group-item\">Vestibulum at eros</li>-->\n          <!--</ul>-->\n          <!--<a (click)=\"updateUser()\" class=\"btn btn-primary\">Update</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6\">-->\n      <!--<div class=\"card text-white bg-info mb-3 text-center\">-->\n        <!--<div class=\"card-header\">Header</div>-->\n        <!--<div class=\"card-body\">-->\n          <!--<h5 class=\"card-title\">Primary card title</h5>-->\n          <!--<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"card text-white bg-warning mb-3 text-center\">-->\n        <!--<div class=\"card-header\">Header</div>-->\n        <!--<div class=\"card-body\">-->\n          <!--<h5 class=\"card-title\">Secondary card title</h5>-->\n          <!--<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n    <!--&lt;!&ndash;<div class=\"card text-center\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<img class=\"card-img-top\" src=\"../../../../assets/img/sushigo_tempura.jpg\" alt=\"Card image cap\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"card-block\">&ndash;&gt;-->\n        <!--&lt;!&ndash;<br/>&ndash;&gt;-->\n        <!--&lt;!&ndash;<button type=\"button\" class=\"btn btn-lg btn-warning\" data-toggle=\"modal\" data-target=\"#gamestart\">&ndash;&gt;-->\n          <!--&lt;!&ndash;PvE&ndash;&gt;-->\n        <!--&lt;!&ndash;</button>&ndash;&gt;-->\n\n        <!--&lt;!&ndash;&lt;!&ndash; Modal &ndash;&gt;&ndash;&gt;-->\n        <!--&lt;!&ndash;<div class=\"modal fade\"&ndash;&gt;-->\n             <!--&lt;!&ndash;id=\"gamestart\"&ndash;&gt;-->\n             <!--&lt;!&ndash;tabindex=\"-1\"&ndash;&gt;-->\n             <!--&lt;!&ndash;role=\"dialog\"&ndash;&gt;-->\n             <!--&lt;!&ndash;aria-labelledby=\"gamestartLabel\"&ndash;&gt;-->\n             <!--&lt;!&ndash;aria-hidden=\"true\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<div class=\"modal-dialog modal-sm\" role=\"document\">&ndash;&gt;-->\n            <!--&lt;!&ndash;<div class=\"modal-content\">&ndash;&gt;-->\n              <!--&lt;!&ndash;<div class=\"modal-header\">&ndash;&gt;-->\n                <!--&lt;!&ndash;<h5 class=\"modal-title\" id=\"gamestartLabel\">How many players?</h5>&ndash;&gt;-->\n              <!--&lt;!&ndash;</div>&ndash;&gt;-->\n              <!--&lt;!&ndash;<div class=\"modal-body\">&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"input-group input-number-group\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"input-group-button\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<span class=\"input-number-decrement\">-</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<input class=\"input-number\" type=\"number\" value=\"4\" min=\"2\" max=\"6\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"input-group-button\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<span class=\"input-number-increment\">+</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\n              <!--&lt;!&ndash;</div>&ndash;&gt;-->\n              <!--&lt;!&ndash;<div class=\"modal-footer\">&ndash;&gt;-->\n                <!--&lt;!&ndash;<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>&ndash;&gt;-->\n                <!--&lt;!&ndash;<button type=\"button\" class=\"btn btn-success\">Game Start</button>&ndash;&gt;-->\n              <!--&lt;!&ndash;</div>&ndash;&gt;-->\n            <!--&lt;!&ndash;</div>&ndash;&gt;-->\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--&lt;!&ndash;<div class=\"col-sm-6\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<div class=\"card text-center\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<img class=\"card-img-top\" src=\"../../../../assets/img/sushigo_sashimi.jpg\" alt=\"Card image cap\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"card-block\">&ndash;&gt;-->\n        <!--&lt;!&ndash;<br/>&ndash;&gt;-->\n        <!--&lt;!&ndash;<button type=\"button\"&ndash;&gt;-->\n                <!--&lt;!&ndash;class=\"btn btn-lg btn-warning\"&ndash;&gt;-->\n                <!--&lt;!&ndash;data-toggle=\"popover\"&ndash;&gt;-->\n                <!--&lt;!&ndash;data-placement=\"left\"&ndash;&gt;-->\n                <!--&lt;!&ndash;title=\"Uh-oh!\"&ndash;&gt;-->\n                <!--&lt;!&ndash;data-content=\"We're still working on PvP. Please try later!\">&ndash;&gt;-->\n          <!--&lt;!&ndash;PvP&ndash;&gt;-->\n        <!--&lt;!&ndash;</button>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n<!--&lt;!&ndash;<nav class=\"navbar navbar-default navbar-fixed-top\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<div class=\"container-fluid\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<a class=\"navbar-left navbar-brand pull-left\" routerLink=\"/login\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<span class=\"glyphicon glyphicon-chevron-left\"></span>&ndash;&gt;-->\n    <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;<div class=\"navbar-header navbar-brand\">&ndash;&gt;-->\n      <!--&lt;!&ndash;Profile&ndash;&gt;-->\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--&lt;!&ndash;<a class=\"navbar-right navbar-brand pull-right\" (click)=\"updateUser()\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<span class=\"glyphicon glyphicon-ok\"></span>&ndash;&gt;-->\n    <!--&lt;!&ndash;</a>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--&lt;!&ndash;</nav>&ndash;&gt;-->\n\n<div class=\"container-fluid myBody\">\n  <div *ngIf=\"message\" class=\"alert alert-info\">\n    {{message}}\n  </div>\n  <label>Username</label>\n  <input [(ngModel)]=\"user.username\" class=\"form-control\" type=\"text\"\n         id=\"username\" placeholder=\"{{user.username}}\">\n  <label>Email</label>\n  <input [(ngModel)]=\"user.email\" class=\"form-control\" type=\"text\"\n         id=\"email\" placeholder=\"{{user.email}}\">\n  <label>Fisrt Name</label>\n  <input [(ngModel)]=\"user.firstName\" class=\"form-control\" type=\"text\"\n         id=\"first-name\" placeholder=\"{{user.firstName}}\">\n  <label>Last Name</label>\n  <input [(ngModel)]=\"user.lastName\" class=\"form-control\" type=\"text\"\n         id=\"last-name\" placeholder=\"{{user.lastName}}\">\n  <a [routerLink]=\"['/user', user._id, 'website']\" class=\"btn btn-primary btn-block\">Website</a>\n  <a (click)=\"removeUser()\" class=\"btn btn-warning btn-block\">Delete User</a>\n  <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">Logout</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user).subscribe(function (response) {
            _this.message = 'Profile changes saved';
        }, function (err) {
            _this.message = 'Failed to update';
        });
    };
    ProfileComponent.prototype.removeUser = function () {
        this.userService.deleteUser(this.user._id).subscribe();
        this.message = 'User deleted';
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (res) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           [(ngModel)]=\"username\" required #name=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"name.touched && name.invalid\">\n      Please enter username!\n    </span>\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"password\" required #pass=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"pass.touched && pass.invalid\">\n      Please enter password!\n    </span>\n    <input placeholder=\"verify password\"\n           name=\"verify\"\n           type=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"verify\" required #veri=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"veri.touched && veri.invalid\">\n    </span>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"f.invalid\">\n      Register\n    </button>\n    <button routerLink=\"/login\" class=\"btn btn-danger btn-block\">\n      Cancel\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user;
        this.userService.findUserByUsername(this.username).subscribe(function (response) {
            user = response;
            if (user) {
                _this.errorFlag = true;
                _this.errorMsg = 'User already exists';
            }
            else {
                var NewUser = new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */](_this.username, _this.password);
                _this.userService.createUser(NewUser).subscribe(function (res) {
                    user = res;
                    _this.router.navigate(['/user', user._id]);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "loginForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'login': this.login,
            'checkLoggedIn': this.checkLoggedIn,
            'logout': this.logout,
            'register': this.register
        };
    }
    UserService.prototype.createUser = function (user) {
        var url = '/api/register';
        return this.http.post(url, user);
    };
    UserService.prototype.findUserById = function (userId) {
        var url = '/api/user/' + userId;
        return this.http.get(url);
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = '/api/user?username=' + username;
        return this.http.get(url);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url);
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = '/api/user/' + userId;
        return this.http.put(url, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = '/api/user/' + userId;
        return this.http.delete(url);
    };
    UserService.prototype.checkLoggedIn = function () {
        var url = 'api/checkLoggedIn';
        return this.http.get(url);
    };
    UserService.prototype.login = function (username, password) {
        var url = '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        return this.http.post(url, credentials);
    };
    UserService.prototype.register = function (user) {
        var url = 'api/register';
        return this.http.post(url, user);
    };
    UserService.prototype.logout = function () {
        var url = '/api/logout';
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/assets/img/Background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Background.008702cac4304bd43d4b.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map