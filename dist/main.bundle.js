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
exports.push([module.i, "input {\n  margin-bottom: 5px;\n}\n\n.panel-heading, .panel-footer {\n  background-color: #337ab7;\n  color: white;\n  position: fixed;\n  width: 100%;\n}\n\n.panel-heading {\n  top: 0px;\n}\n\n.panel-footer {\n  bottom: 0px;\n}\n\n.panel-body {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n\n.panel-heading .glyphicon, .panel-footer .glyphicon {\n  color: white;\n}\n\n.hugh-heading, .hugh-footer {\n  background-color: whitesmoke;\n  color: black;\n}\n\n.hugh-heading .glyphicon, .hugh-footer .glyphicon {\n  color: black;\n}\n\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\n\na:hover{\n  text-decoration: none;\n}\n\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n\n.cl-text-white{\n  color: #fff;\n}\n\n.cl-text-black{\n  color: #000000;\n}\n\n.cl-text-bold{\n  font-weight: bold;\n}\n\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl-header-padding{\n  padding-left: 5%;\n}\n\n.cl-full-width{\n  width: 100%;\n}\n\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n\n.cl-relative-position{\n  position: relative;\n}\n\n.cl-absolute-position{\n  position: absolute;\n}\n\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_game_game_new_game_new_component__ = __webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_game_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_game_game_stats_game_stats_component__ = __webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_game_how_to_play_how_to_play_component__ = __webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_game_game_new_game_new_component__["a" /* GameNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_game_game_play_game_play_component__["a" /* GamePlayComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_game_game_stats_game_stats_component__["a" /* GameStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_game_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__services_game_service_client__["a" /* GameService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_game_new_game_new_component__ = __webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_game_game_stats_game_stats_component__ = __webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_game_how_to_play_how_to_play_component__ = __webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.ts");









var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_7__components_user_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'user/:username/profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'how-to-play', component: __WEBPACK_IMPORTED_MODULE_8__components_game_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */] },
    { path: 'user/:username/game', component: __WEBPACK_IMPORTED_MODULE_4__components_game_game_new_game_new_component__["a" /* GameNewComponent */] },
    { path: 'user/:username/game/:gameId', component: __WEBPACK_IMPORTED_MODULE_5__components_game_game_play_game_play_component__["a" /* GamePlayComponent */] },
    { path: 'user/:username/game/:gameId/stats', component: __WEBPACK_IMPORTED_MODULE_6__components_game_game_stats_game_stats_component__["a" /* GameStatsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"row myBody\">\n    <embed src=\"../../../../assets/music/bgm_ddz.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">\n    <div class=\"col-sm-6\">\n        <div class=\"card text-center\">\n            <img class=\"sushi-icon\" src=\"../../../../assets/img/sushis/Wasabi.png\" width=\"50%\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n                <br/>\n                <button type=\"button\" class=\"btn btn-lg btn-warning\" data-toggle=\"modal\" data-target=\"#gamestart\">\n                    PvE\n                </button>\n\n                <!-- Modal -->\n                <div class=\"modal fade\"\n                     id=\"gamestart\"\n                     tabindex=\"-1\"\n                     role=\"dialog\"\n                     aria-labelledby=\"gamestartLabel\"\n                     aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-sm\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\" id=\"gamestartLabel\">How many players?</h5>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"input-group input-number-group\">\n                                    <div class=\"input-group-button\">\n                                        <span class=\"input-number-decrement\">-</span>\n                                    </div>\n                                    <input class=\"input-number\" type=\"number\" value=\"4\" min=\"2\" max=\"6\">\n                                    <div class=\"input-group-button\">\n                                        <span class=\"input-number-increment\">+</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n                                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"newGame()\">Game Start</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card text-center\">\n            <img class=\"sushi-icon\" src=\"../../../../assets/img/sushis/Tempura.png\" width=\"50%\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n                <br/>\n                <button type=\"button\"\n                        class=\"btn btn-lg btn-warning\"\n                        data-toggle=\"popover\"\n                        data-placement=\"left\"\n                        title=\"Uh-oh!\"\n                        data-content=\"We're still working on PvP. Please try later!\">\n                    PvP\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_model_client__ = __webpack_require__("../../../../../src/app/models/game.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameNewComponent = /** @class */ (function () {
    function GameNewComponent(userService, gameService, activatedRoute, router) {
        this.userService = userService;
        this.gameService = gameService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.game = new __WEBPACK_IMPORTED_MODULE_3__models_game_model_client__["a" /* Game */](Math.floor(Math.random() * 100), this.user);
    }
    GameNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params['username'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    GameNewComponent.prototype.newGame = function () {
        // this.gameService.createGame(this.username, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
        this.router.navigate(['/user', this.username, 'game', this.game.id]);
        // this.gameService.updateGame(this.game.id, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
    };
    GameNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-new',
            template: __webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GameNewComponent);
    return GameNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {max-width: 100%;}\n\n.card-display {\n    padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container myBody\">\n    <embed src=\"../../../../assets/music/bgm_ddz.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">\n    <p>Alice</p>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][0])[0]}}\" alt=\"{{showCards(cards[0][0])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][1])[0]}}\" alt=\"{{showCards(cards[0][1])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][2])[0]}}\" alt=\"{{showCards(cards[0][2])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][3])[0]}}\" alt=\"{{showCards(cards[0][3])[1]}}\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][4])[0]}}\" alt=\"{{showCards(cards[0][4])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][5])[0]}}\" alt=\"{{showCards(cards[0][5])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][6])[0]}}\" alt=\"{{showCards(cards[0][6])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[0][7])[0]}}\" alt=\"{{showCards(cards[0][7])[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br/>\n    <p>Bob</p>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][0])[0]}}\" alt=\"{{showCards(cards[1][0])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][1])[0]}}\" alt=\"{{showCards(cards[1][1])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][2])[0]}}\" alt=\"{{showCards(cards[1][2])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][3])[0]}}\" alt=\"{{showCards(cards[1][3])[1]}}\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][4])[0]}}\" alt=\"{{showCards(cards[1][4])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][5])[0]}}\" alt=\"{{showCards(cards[1][5])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][6])[0]}}\" alt=\"{{showCards(cards[1][6])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[1][7])[0]}}\" alt=\"{{showCards(cards[1][7])[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br/>\n    <p>Charlie</p>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][0])[0]}}\" alt=\"{{showCards(cards[2][0])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][1])[0]}}\" alt=\"{{showCards(cards[2][1])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][2])[0]}}\" alt=\"{{showCards(cards[2][2])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][3])[0]}}\" alt=\"{{showCards(cards[2][3])[1]}}\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][4])[0]}}\" alt=\"{{showCards(cards[2][4])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][5])[0]}}\" alt=\"{{showCards(cards[2][5])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][6])[0]}}\" alt=\"{{showCards(cards[2][6])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" src=\"{{showCards(cards[2][7])[0]}}\" alt=\"{{showCards(cards[2][7])[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br/>\n    <p>{{username}}</p>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][0])[0]}}\" alt=\"{{showCards(cards[3][0])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][1])[0]}}\" alt=\"{{showCards(cards[3][1])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][2])[0]}}\" alt=\"{{showCards(cards[3][2])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][3])[0]}}\" alt=\"{{showCards(cards[3][3])[1]}}\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][4])[0]}}\" alt=\"{{showCards(cards[3][4])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][5])[0]}}\" alt=\"{{showCards(cards[3][5])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][6])[0]}}\" alt=\"{{showCards(cards[3][6])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img\" src=\"{{showCards(cards[3][7])[0]}}\" alt=\"{{showCards(cards[3][7])[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <p>Please select one from below</p>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][0])\" src=\"{{showCards(decks[3][0])[0]}}\" alt=\"{{showCards(decks[3][0])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][1])\" src=\"{{showCards(decks[3][1])[0]}}\" alt=\"{{showCards(decks[3][1])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][2])\" src=\"{{showCards(decks[3][2])[0]}}\" alt=\"{{showCards(decks[3][2])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][3])\" src=\"{{showCards(decks[3][3])[0]}}\" alt=\"{{showCards(decks[3][3])[1]}}\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"row\">\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][4])\" src=\"{{showCards(decks[3][4])[0]}}\" alt=\"{{showCards(decks[3][4])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][5])\" src=\"{{showCards(decks[3][5])[0]}}\" alt=\"{{showCards(decks[3][5])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][6])\" src=\"{{showCards(decks[3][6])[0]}}\" alt=\"{{showCards(decks[3][6])[1]}}\">\n                </div>\n                <div class=\"col-xs-3 card-display\">\n                    <img class=\"card-img-top\" (click)=\"getCard(decks[3][7])\" src=\"{{showCards(decks[3][7])[0]}}\" alt=\"{{showCards(decks[3][7])[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-lg btn-warning\" data-toggle=\"modal\" data-target=\"#total\" (click)=\"total(this.game.cards)\">\n        Finish\n    </button>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\"\n     id=\"total\"\n     tabindex=\"-1\"\n     role=\"dialog\"\n     aria-labelledby=\"totalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title text-center\" id=\"totalLabel\">{{message}}</h3>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table\">\n                    <thead>\n                    <tr>\n                        <th scope=\"col\">Player</th>\n                        <th scope=\"col\">Points</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">Alice</th>\n                        <td>{{game.points[0]}}</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Bob</th>\n                        <td>{{points[1]}}</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Charlie</th>\n                        <td>{{points[2]}}</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">{{username}}</th>\n                        <td>{{points[3]}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_model_client__ = __webpack_require__("../../../../../src/app/models/game.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePlayComponent = /** @class */ (function () {
    function GamePlayComponent(userService, gameService, activatedRoute, router) {
        this.userService = userService;
        this.gameService = gameService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.game = new __WEBPACK_IMPORTED_MODULE_3__models_game_model_client__["a" /* Game */](Math.floor(Math.random() * 100), this.user);
        this.decks = this.game.decks;
        this.cards = this.game.cards;
        this.points = this.game.points;
    }
    GamePlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params['username'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    GamePlayComponent.prototype.showCards = function (index) {
        if (index < 5) {
            return ['../../../../assets/img/cards/sushigo_egg.png', 'Egg'];
        }
        else if (index < 15) {
            return ['../../../../assets/img/cards/sushigo_salmon.png', 'Salmon'];
        }
        else if (index < 20) {
            return ['../../../../assets/img/cards/sushigo_squid.png', 'Squid'];
        }
        else if (index < 26) {
            return ['../../../../assets/img/cards/sushigo_maki_1.png', 'Maki I'];
        }
        else if (index < 38) {
            return ['../../../../assets/img/cards/sushigo_maki_2.png', 'Maki II'];
        }
        else if (index < 46) {
            return ['../../../../assets/img/cards/sushigo_maki_3.png', 'Maki III'];
        }
        else if (index < 60) {
            return ['../../../../assets/img/cards/sushigo_dumpling.png', 'Dumpling'];
        }
        else if (index < 74) {
            return ['../../../../assets/img/cards/sushigo_tempura.png', 'Tempura'];
        }
        else if (index < 88) {
            return ['../../../../assets/img/cards/sushigo_sashimi.png', 'Sashimi'];
        }
        else if (index < 94) {
            return ['../../../../assets/img/cards/sushigo_wasabi.png', 'Wasabi'];
        }
        else if (index < 98) {
            return ['../../../../assets/img/cards/sushigo_chopsticks.png', 'Chopsticks'];
        }
        else if (index < 108) {
            return ['../../../../assets/img/cards/sushigo_pudding.png', 'Pudding'];
        }
        else {
            return ['...', index];
        }
    };
    GamePlayComponent.prototype.getCard = function (num) {
        var card = this.decks[0].shift();
        this.cards[0].push(card);
        card = this.decks[1].shift();
        this.cards[1].push(card);
        card = this.decks[2].shift();
        this.cards[2].push(card);
        var index = this.decks[3].findIndex(function (element) {
            return element = num;
        });
        this.decks[3].splice(index, 1);
        this.cards[3].push(num);
        var temp = this.decks[3];
        this.decks[3] = this.decks[2];
        this.decks[2] = this.decks[1];
        this.decks[1] = this.decks[0];
        this.decks[0] = temp;
    };
    GamePlayComponent.prototype.total = function (cards) {
        for (var i = 0; i < 4; i++) {
            var pts = 0;
            for (var j = 0; j < 8; j++) {
                var card = cards[i][j];
                if (card < 5) {
                    pts++;
                }
                else if (card < 15) {
                    pts += 2;
                }
                else if (card < 20) {
                    pts += 3;
                }
                else if (card < 26) {
                    this.game.maki[i]++;
                }
                else if (card < 38) {
                    this.game.maki[i] += 2;
                }
                else if (card < 46) {
                    this.game.maki[i] += 3;
                }
                else if (card < 60) {
                    this.game.dumpling[i]++;
                }
                else if (card < 74) {
                    this.game.tempura[i]++;
                }
                else if (card < 88) {
                    this.game.sashimi[i]++;
                }
                else if (card < 94) {
                    pts += 2;
                }
                else if (card < 98) {
                    continue;
                }
                else if (card < 108) {
                    this.game.pudding[i]++;
                }
                else {
                    continue;
                }
                console.log('Card: ' + card);
                console.log('Current score: ' + pts);
            }
            switch (this.game.dumpling[i]) {
                case 0:
                    break;
                case 1:
                    pts++;
                    break;
                case 2:
                    pts += 3;
                    break;
                case 3:
                    pts += 6;
                    break;
                case 4:
                    pts += 10;
                    break;
                default:
                    pts += 15;
            }
            console.log('Dumplings: ' + this.game.dumpling[i]);
            console.log('Current score: ' + pts);
            if (this.game.tempura[i] === 2) {
                pts += 5;
            }
            console.log('Tempuras: ' + this.game.tempura[i]);
            console.log('Current score: ' + pts);
            if (this.game.sashimi[i] === 3) {
                pts += 10;
            }
            console.log('Sashimis: ' + this.game.sashimi[i]);
            console.log('Current score: ' + pts);
            this.game.points[i] = pts;
        }
        var maki1 = 0, maki2 = 0, puddingmax = 0, puddingmin = 10;
        for (var i = 0; i < 4; i++) {
            var maki = this.game.maki[i], pudding = this.game.pudding[i];
            if (maki > maki1) {
                maki2 = maki1;
                maki1 = maki;
            }
            else if (maki > maki2 && maki < maki1) {
                maki2 = maki;
            }
            if (pudding > puddingmax) {
                puddingmax = pudding;
            }
            if (pudding < puddingmin) {
                puddingmin = pudding;
            }
        }
        for (var i = 0; i < 4; i++) {
            if (this.game.maki[i] === maki1) {
                this.game.points[i] += 6;
            }
            if (this.game.maki[i] === maki2) {
                this.game.points[i] += 3;
            }
            if (this.game.pudding[i] === puddingmax) {
                this.game.points[i] += 6;
            }
            if (this.game.pudding[i] === puddingmin) {
                this.game.points[i] -= 6;
            }
            console.log('Maki: ' + this.game.maki[i]);
            console.log('Current score: ' + this.game.points[i]);
            console.log('Pudding: ' + this.game.pudding[i]);
            console.log('Current score: ' + this.game.points[i]);
        }
        if (Math.max.apply(null, this.game.points) === this.game.points[3]) {
            this.message = 'You win!';
        }
        else {
            this.message = 'You lose!';
        }
    };
    GamePlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-play',
            template: __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GamePlayComponent);
    return GamePlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game-stats/game-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-stats/game-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container myBody\">\n  <p>Alice</p>\n  <p>Bob</p>\n  <p>Charlie</p>\n  <p>{{username}}</p>\n  <p>{{message}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/game/game-stats/game-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
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




var GameStatsComponent = /** @class */ (function () {
    function GameStatsComponent(userService, gameService, activatedRoute, router) {
        this.userService = userService;
        this.gameService = gameService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    GameStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params['username'];
            _this.gameId = params['gameId'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
        this.gameService.findGameById(this.gameId).subscribe(function (response) {
            _this.game = response;
            _this.cards = _this.game.cards;
            _this.points = _this.game.points;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
        if (Math.max.apply(null, this.points) === this.points[3]) {
            this.message = 'You win!';
        }
        else {
            this.message = 'You lose!';
        }
    };
    GameStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-stats',
            template: __webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GameStatsComponent);
    return GameStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/how-to-play/how-to-play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myGuide {\n    margin-top: 20px;\n}\n\n.guides {\n    padding-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/how-to-play/how-to-play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid myGuide\">\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules6.png\" width=\"35%\"/>\n    </div>\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules1.png\" width=\"70%\"/>\n    </div>\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules2.png\" width=\"70%\"/>\n    </div>\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules3.png\" width=\"70%\"/>\n    </div>\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules4.png\" width=\"70%\"/>\n    </div>\n    <div align=\"center\" class=\"guides\">\n        <img src=\"../../../../assets/img/guide/rules5.png\" width=\"70%\"/>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/game/how-to-play/how-to-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToPlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowToPlayComponent = /** @class */ (function () {
    function HowToPlayComponent() {
    }
    HowToPlayComponent.prototype.ngOnInit = function () {
    };
    HowToPlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-how-to-play',
            template: __webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowToPlayComponent);
    return HowToPlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".startButton:hover {\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    cursor: pointer;\n}\n.startButtonDiv {\n    padding-top: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <div class=\"navbar-form navbar-right\">\n                <a [routerLink]=\"['/login']\" class=\"btn btn-danger\">Logout</a>\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"myBody\">\n    <embed src=\"../../../../assets/music/bgm_ddz.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">\n    <div class=\"row\">\n        <div align=\"center\" class=\"col-xs-1\"></div>\n        <div align=\"center\" class=\"col-xs-2\">\n            <img src=\"../../../../assets/img/sushis/Tempura.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/EggNigiri.png\" width=\"90%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Dumpling.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Maki.png\" width=\"75%\" class=\"sushi-icon\" />\n            <!--<img src=\"../../../../assets/img/sushis/Chopsticks.png\" width=\"70%\" class=\"images\" />-->\n        </div>\n        <div align=\"center\" class=\"col-xs-6\">\n            <img src=\"../../../../assets/img/logo.png\" width=\"80%\" class=\"logo\" />\n            <div align=\"center\" class=\"startButtonDiv\">\n                <img class=\"startButton\" src=\"../../../../assets/img/PlayNow.png\" width=\"40%\" (click)=\"startGame()\" />\n            </div>\n        </div>\n        <div align=\"center\" class=\"col-xs-2\">\n            <img src=\"../../../../assets/img/sushis/Wasabi.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Pudding.png\" width=\"75%\" class=\"sushi-icon\" />\n            <!--<img src=\"../../../../assets/img/sushis/SalmonNigiri.png\" width=\"70%\" class=\"images\" />-->\n            <img src=\"../../../../assets/img/sushis/Sashimi.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/SquidNigiri.png\" width=\"75%\" class=\"sushi-icon\" />\n        </div>\n        <div align=\"center\" class=\"col-xs-1\"></div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
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



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params['username'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    HomepageComponent.prototype.startGame = function () {
        this.router.navigate(['/user', this.username, 'game']);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo:hover {\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n}\n.navbar {\n    margin-bottom: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/login']\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <form (ngSubmit)=\"login()\" #f=\"ngForm\" class=\"navbar-form navbar-right\">\n                <input placeholder=\"username\"\n                       name=\"username\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"username\" required #name=\"ngModel\"/>\n\n                <input placeholder=\"password\"\n                       name=\"password\"\n                       type=\"password\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"password\" required #pass=\"ngModel\"/>\n\n                <button type=\"submit\"\n                        class=\"btn btn-success\"\n                        [disabled]=\"f.invalid\">\n                    Sign in\n                </button>\n\n                <button routerLink=\"/register\"\n                        class=\"btn btn-primary\">\n                    Register\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n\n<div class=\"row myBody\">\n    <div align=\"center\" class=\"col-xs-1\">\n    </div>\n    <div align=\"center\" class=\"col-xs-2\">\n        <img src=\"../../../../assets/img/sushis/Tempura.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/EggNigiri.png\" width=\"90%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Dumpling.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Maki.png\" width=\"75%\" class=\"sushi-icon\" />\n        <!--<img src=\"../../../../assets/img/sushis/Chopsticks.png\" width=\"70%\" class=\"images\" />-->\n    </div>\n    <div class=\"col-xs-6\">\n        <img src=\"../../../../assets/img/logo.png\" width=\"100%\" class=\"logo\" />\n    </div>\n    <div align=\"center\" class=\"col-xs-2\">\n        <img src=\"../../../../assets/img/sushis/Wasabi.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Pudding.png\" width=\"75%\" class=\"sushi-icon\" />\n        <!--<img src=\"../../../../assets/img/sushis/SalmonNigiri.png\" width=\"70%\" class=\"images\" />-->\n        <img src=\"../../../../assets/img/sushis/Sashimi.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/SquidNigiri.png\" width=\"75%\" class=\"sushi-icon\" />\n    </div>\n    <div align=\"center\" class=\"col-xs-1\">\n    </div>\n\n</div>"

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
            _this.router.navigate(['/user', _this.username]);
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
exports.push([module.i, ".label {\n    float: left;\n    width: 200px;\n}\n\n.field {\n    margin-left: 200px;\n}\n\n.field input {\n    width: 100%;\n}\n\n.myProfile {\n    padding-left: 15%;\n    padding-right: 15%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <div class=\"navbar-form navbar-right\">\n                <a [routerLink]=\"['/login']\" class=\"btn btn-danger\">Logout</a>\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">Hi {{username}}!</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n\n<div class=\"container-fluid myProfile myBody\">\n    <div *ngIf=\"successFlag\"\n         class=\"alert alert-info\">\n        {{successMsg}}\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n    <label>Username</label>\n    <input [(ngModel)]=\"username\" class=\"form-control\" type=\"text\"\n           id=\"username\" placeholder=\"{{username}}\">\n    <label>Email</label>\n    <input [(ngModel)]=\"email\" class=\"form-control\" type=\"text\"\n           id=\"email\" placeholder=\"{{email}}\">\n\n    <a (click)=\"updateUser()\" class=\"btn btn-success btn-block\">Update</a>\n    <a [routerLink]=\"['/user', username]\" class=\"btn btn-primary btn-block\">Back to Homepage</a>\n    <a (click)=\"logout()\" class=\"btn btn-warning btn-block\">Logout</a>\n    <a (click)=\"removeUser()\" class=\"btn btn-danger btn-block\">Delete User</a>\n</div>\n"

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
        this.successFlag = false;
        this.successMsg = 'Profile updated!';
        this.errorFlag = false;
        this.errorMsg = 'Update failed!';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params['username'];
        });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
            _this.email = _this.user.email;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.email = this.email;
        this.userService.updateUser(this.user._id, this.user).subscribe(function (response) {
            _this.successFlag = true;
        }, function (err) {
            _this.errorFlag = true;
        });
    };
    ProfileComponent.prototype.removeUser = function () {
        this.userService.deleteUser(this.user._id).subscribe();
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
exports.push([module.i, ".myRegister {\n    padding-left: 15%;\n    padding-right: 15%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/login']\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid myRegister myBody\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           [(ngModel)]=\"username\" required #name=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"name.touched && name.invalid\">\n      Please enter username!\n    </span>\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"password\" required #pass=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"pass.touched && pass.invalid\">\n      Please enter password!\n    </span>\n    <input placeholder=\"verify password\"\n           name=\"verify\"\n           type=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"verify\" required #veri=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"veri.touched && veri.invalid\">\n    </span>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"f.invalid\">\n      Register\n    </button>\n    <button routerLink=\"/login\" class=\"btn btn-danger btn-block\">\n      Cancel\n    </button>\n  </form>\n</div>\n"

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
                    _this.router.navigate(['/login']);
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

/***/ "../../../../../src/app/models/game.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(id, user) {
        this.id = id;
        this.user = user;
        this.decks = [];
        var set = new Set();
        for (var i = 0; i < 4; i++) {
            this.decks[i] = [];
            for (var j = 0; j < 8; j++) {
                var card = void 0;
                do {
                    card = Math.floor(Math.random() * 108);
                } while (set.has(card));
                this.decks[i][j] = card;
                set.add(card);
            }
        }
        this.cards = [];
        for (var i = 0; i < 4; i++) {
            this.cards[i] = [];
        }
        this.points = [0, 0, 0, 0];
        this.maki = [0, 0, 0, 0];
        this.dumpling = [0, 0, 0, 0];
        this.tempura = [0, 0, 0, 0];
        this.sashimi = [0, 0, 0, 0];
        this.pudding = [0, 0, 0, 0];
    }
    return Game;
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

/***/ "../../../../../src/app/services/game.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.api = {
            //    'getNextId': this.getNextId,
            'createGame': this.createGame,
            'findAllGamesForUser': this.findAllGamesForUser,
            'findGameById': this.findGameById,
            'updateGame': this.updateGame,
            'removeGame': this.removeGame
        };
    }
    // getMaxId() {
    //   function getMaxId(maxId, currentId) {
    //     let current = parseInt(currentId._id);
    //     if(maxId > current) {
    //       return maxId;
    //     } else {
    //       return current + 1;
    //     }
    //   }
    //   return games.reduce(getMaxId, 0).toString();
    // }
    GameService.prototype.createGame = function (userId, game) {
        var url = '/api/user/' + userId + '/game';
        return this.http.post(url, game);
    };
    GameService.prototype.findAllGamesForUser = function (userId) {
        var url = '/api/user/' + userId + '/game';
        return this.http.get(url);
    };
    GameService.prototype.findGameById = function (gameId) {
        var url = '/api/game/' + gameId;
        return this.http.get(url);
    };
    GameService.prototype.updateGame = function (gameId, game) {
        var url = '/api/game/' + gameId;
        return this.http.put(url, game);
    };
    GameService.prototype.removeGame = function (gameId) {
        var url = '/api/game/' + gameId;
        return this.http.delete(url);
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GameService);
    return GameService;
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