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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_room_service_client__ = __webpack_require__("../../../../../src/app/services/room.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_card_service_client__ = __webpack_require__("../../../../../src/app/services/card.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_game_game_new_game_new_component__ = __webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_game_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_game_game_stats_game_stats_component__ = __webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_game_how_to_play_how_to_play_component__ = __webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_game_game_ready_game_ready_component__ = __webpack_require__("../../../../../src/app/components/game/game-ready/game-ready.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_14__components_game_game_new_game_new_component__["a" /* GameNewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_game_game_play_game_play_component__["a" /* GamePlayComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_game_game_stats_game_stats_component__["a" /* GameStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_game_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_game_game_ready_game_ready_component__["a" /* GameReadyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__services_game_service_client__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_10__services_room_service_client__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_11__services_player_service_client__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_12__services_card_service_client__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_19__services_shared_service_client__["a" /* SharedService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_game_ready_game_ready_component__ = __webpack_require__("../../../../../src/app/components/game/game-ready/game-ready.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_game_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_game_game_stats_game_stats_component__ = __webpack_require__("../../../../../src/app/components/game/game-stats/game-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/user/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_game_how_to_play_how_to_play_component__ = __webpack_require__("../../../../../src/app/components/game/how-to-play/how-to-play.component.ts");










var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_8__components_user_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'user/:username/profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'how-to-play', component: __WEBPACK_IMPORTED_MODULE_9__components_game_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */] },
    { path: 'user/:username/game', component: __WEBPACK_IMPORTED_MODULE_4__components_game_game_new_game_new_component__["a" /* GameNewComponent */] },
    { path: 'room/:roomId', component: __WEBPACK_IMPORTED_MODULE_5__components_game_game_ready_game_ready_component__["a" /* GameReadyComponent */] },
    { path: 'game/:gameId/player/:playerId', component: __WEBPACK_IMPORTED_MODULE_6__components_game_game_play_game_play_component__["a" /* GamePlayComponent */] },
    { path: 'user/:username/game/:gameId/stats', component: __WEBPACK_IMPORTED_MODULE_7__components_game_game_stats_game_stats_component__["a" /* GameStatsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sushi-icon:hover {\n    cursor: pointer;\n}\n\n/*.parent {*/\n\n/*position: relative;*/\n\n/*}*/\n\n/*.child {*/\n\n/*position: absolute;*/\n\n/*top: 50%;*/\n\n/*left: 50%;*/\n\n/*transform: translate(-50%, -50%);*/\n\n/*}*/\n\n.modal-dialog {\n    top: 30%;\n}\n\n.player-num-btn {\n    margin: 2px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-collapse collapse\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n<div class=\"container-fluid myBody parent\">\n    <audio controls autoplay hidden loop>\n        <source src=\"../../../../assets/music/bgm_menu.mp3\" type=\"audio/mpeg\">\n        audio unsupported !!\n    </audio>\n    <!--<embed src=\"../../../../assets/music/bgm_menu.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">-->\n    <div align=\"center\">\n        <img src=\"../../../../assets/img/game_mode.png\"/>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-xs-5\">\n            <div class=\"card text-center\">\n                <div align=\"center\">\n                    <img class=\"sushi-icon\" width=\"53%\" src=\"../../../../assets/img/sushis/Wasabi.png\"\n                         alt=\"Card image cap\" data-toggle=\"modal\" data-target=\"#gamestart\">\n                </div>\n                <div align=\"center\">\n                    <img src=\"../../../../assets/img/pve.png\" width=\"40%\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-2\">\n            <div class=\"card text-center\">\n                <div align=\"center\">\n                    <img src=\"../../../../assets/img/blank.png\" width=\"70%\">\n                </div>\n                <div align=\"center\">\n                    <img class=\"sushi-icon\" width=\"100%\"\n                         src=\"../../../../assets/img/sushis/Sashimi.png\"\n                         (click)=\"backToHome()\">\n                </div>\n                <div align=\"center\">\n                    <img src=\"../../../../assets/img/home.png\" width=\"90%\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-5\">\n            <div class=\"card text-center\">\n                <img src=\"../../../../assets/img/blank.png\" width=\"10%\">\n                <div align=\"center\">\n                    <img class=\"sushi-icon\" width=\"50%\"\n                         src=\"../../../../assets/img/sushis/Tempura.png\" alt=\"Card image cap\"\n                         data-toggle=\"modal\" data-target=\"#pvp\">\n                </div>\n                <div align=\"center\">\n                    <img src=\"../../../../assets/img/pvp.png\" width=\"40%\"/>\n                </div>\n                <!--<div class=\"card-block\">-->\n                <!--<br/>-->\n                <!--<button type=\"button\"-->\n                <!--class=\"btn btn-lg btn-warning\"-->\n                <!--data-toggle=\"popover\"-->\n                <!--data-placement=\"left\"-->\n                <!--title=\"Uh-oh!\"-->\n                <!--data-content=\"We're still working on PvP. Please try later!\">-->\n                <!--PvP-->\n                <!--</button>-->\n                <!--</div>-->\n                <!--</div>-->\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card-block\" align=\"center\">\n        <div class=\"modal fade\"\n             id=\"gamestart\"\n             tabindex=\"-1\"\n             role=\"dialog\"\n             aria-labelledby=\"gamestartLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"gamestartLabel\">Please select the number of players</h5>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div align=\"center\" class=\"player-num-btn\">\n                            <button type=\"button\" class=\"btn btn-warning .btn-lg\" data-dismiss=\"modal\" (click)=\"newPvEGame(2)\">2   Players</button>\n                        </div>\n                        <div align=\"center\" class=\"player-num-btn\">\n                            <button type=\"button\" class=\"btn btn-warning .btn-lg\" data-dismiss=\"modal\" (click)=\"newPvEGame(3)\">3 Players</button>\n                        </div>\n                        <div align=\"center\" class=\"player-num-btn\">\n                            <button type=\"button\" class=\"btn btn-warning .btn-lg\" data-dismiss=\"modal\" (click)=\"newPvEGame(4)\">4  Players</button>\n                        </div>\n                        <div align=\"center\" class=\"player-num-btn\">\n                            <button type=\"button\" class=\"btn btn-warning .btn-lg\" data-dismiss=\"modal\" (click)=\"newPvEGame(5)\">5  Players</button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-block\" align=\"center\">\n        <div class=\"modal fade\"\n             id=\"pvp\"\n             tabindex=\"-1\"\n             role=\"dialog\"\n             aria-labelledby=\"pvpLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-body\">\n\n                        <h4>PvP Mode Coming Soon!</h4>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/game/game-new/game-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_player_model_client__ = __webpack_require__("../../../../../src/app/models/player.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_room_service_client__ = __webpack_require__("../../../../../src/app/services/room.service.client.ts");
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
    function GameNewComponent(userService, roomService, gameService, activatedRoute, router) {
        this.userService = userService;
        this.roomService = roomService;
        this.gameService = gameService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
    GameNewComponent.prototype.newPvEGame = function (num_p) {
        var _this = this;
        // this.gameService.createGame(this.username, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
        this.room = { id: '0', num_players: num_p, mode: 'PvE' };
        this.roomService.createRoom(this.room).subscribe(function (res) {
            var new_room = res;
            console.log('Room created!');
            console.log(new_room);
            var players = [];
            console.log('client players: ');
            console.log(players);
            var i;
            for (i = 0; i < num_p - 1; i++) {
                var robot = 'robot_' + i;
                var player = new __WEBPACK_IMPORTED_MODULE_3__models_player_model_client__["a" /* Player */](i, new_room.id, robot, false);
                players.push(player);
            }
            players.push(new __WEBPACK_IMPORTED_MODULE_3__models_player_model_client__["a" /* Player */](num_p - 1, new_room.id, _this.username, true));
            console.log('client players: ');
            console.log(players);
            _this.roomService.generatePlayers(new_room.id, players).subscribe(function (response) {
                console.log('Players added!');
                console.log(res);
                _this.router.navigate(['/room', new_room.id]);
            });
        });
        // this.gameService.updateGame(this.game.id, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
    };
    GameNewComponent.prototype.backToHome = function () {
        this.router.navigate(['/user', this.username]);
    };
    GameNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-new',
            template: __webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-new/game-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_room_service_client__["a" /* RoomService */],
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
exports.push([module.i, "/*img {max-width: 100%;}*/\n\n.card-display {\n    padding: 0;\n}\n\n.cards-on-hand:hover {\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    cursor: pointer;\n}\n\n.game-button:hover {\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    cursor: pointer;\n}\n\n.game-text-a {\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\n    /*font-size: 2.5em;*/\n    font-variant: normal;\n    font-weight: bold;\n    color: #a25e49;\n    padding-top: 6%;\n    padding-bottom: 6%;\n    padding-right: 20px;\n    text-align: center;\n}\n\n.game-text-b {\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\n    /*font-size: 2.5em;*/\n    font-variant: normal;\n    color: #a25e49;\n    /*padding: 6% 0;*/\n    /*text-align: center;*/\n}\n\n.game-play-body {\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container-fluid myBody game-play-body\">\n    <audio controls autoplay hidden loop>\n        <source src=\"../../../../assets/music/bgm_game.mp3\" type=\"audio/mpeg\">\n        audio unsupported !!\n    </audio>\n\n    <div  *ngIf=\"players\">\n        <div *ngFor=\"let player of players\">\n            <div class=\"row\">\n                <div class=\"col-xs-1 game-text-a\">\n                    {{player.username}}\n                </div>\n                <div class=\"col-xs-11\">\n                    <div>\n                        <img *ngFor=\"let card of player.playedCards;\"\n                             width=\"10%\" height=\"10%\"\n                             class=\"card-display\"\n                             src=\"{{showCards(card)[0]}}\"\n                             alt=\"{{showCards(card)[1]}}\">\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"myHand && myHand.length > 0\">\n        <h3 class=\"game-text-b\">Please select a card from below</h3>\n        <div class=\"row\">\n            <div class=\"col-xs-1 game-text-a\">\n                Your Hand\n            </div>\n            <div class=\"col-xs-11\">\n                <div>\n                    <img *ngFor=\"let card of myHand; let i = index\"\n                         width=\"10%\" height=\"10%\"\n                         class=\"cards-on-hand card-display\"\n                         (click)=\"getNextHand(i)\"\n                         src=\"{{showCards(card)[0]}}\"\n                         alt=\"{{showCards(card)[1]}}\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"backdrop\" [ngStyle]=\"{'display': showResults}\">\n        <div class=\"modal\"\n             tabindex=\"-1\"\n             role=\"dialog\"\n             [ngStyle]=\"{'display': showResults}\">\n            <div class=\"modal-dialog modal-dialog-centered modal-sm\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h3 class=\"modal-title text-center\" id=\"totalLabel\">{{message}}</h3>\n                    </div>\n                    <div class=\"modal-body\">\n                        <table class=\"table\" align=\"center\">\n                            <thead>\n                            <tr align=\"center\">\n                                <th scope=\"col\" align=\"center\">Rank</th>\n                                <th scope=\"col\" align=\"center\">Player</th>\n                                <th scope=\"col\" align=\"center\">Points</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let player of ranks; let i = index\">\n                                <td>{{i+1}}</td>\n                                <td scope=\"row\">{{player.username}}</td>\n                                <td>{{player.score}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" align=\"center\" class=\"btn btn-warning\" (click) = \"startNewGame()\">Start New Game</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_service_client__ = __webpack_require__("../../../../../src/app/services/room.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_card_service_client__ = __webpack_require__("../../../../../src/app/services/card.service.client.ts");
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
    function GamePlayComponent(userService, playerService, gameService, roomService, cardService, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.playerService = playerService;
        this.gameService = gameService;
        this.roomService = roomService;
        this.cardService = cardService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ranks = [];
        this.showResults = 'none';
        // game: Game = new Game(Math.floor(Math.random() * 100), this.user);
        this.decks = [[], [], [], []];
        this.cards = [[], [], [], []];
        this.scores = [];
        this.pudding = [0, 0, 0, 0];
        this.numbers = [];
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
            console.log('Username: ' + _this.username);
            _this.activatedRoute.params.subscribe(function (params) {
                _this.myPlayerId = params['playerId'];
                _this.gameId = params['gameId'];
                console.log('gameId');
                console.log(_this.gameId);
                _this.gameService.findGameById(_this.gameId).subscribe(function (res) {
                    _this.game = res;
                    console.log('Entered new game: ');
                    console.log(_this.game);
                    _this.cards = _this.game.cards;
                    _this.decks = _this.game.decks;
                    _this.num = _this.game.num_players;
                    _this.roomId = _this.game.roomId;
                    _this.playerService.findPlayersByRoomId(_this.roomId).subscribe(function (res2) {
                        _this.players = res2;
                        console.log('players in the game: ');
                        console.log(_this.players);
                        for (var _i = 0, _a = _this.players; _i < _a.length; _i++) {
                            var p = _a[_i];
                            if (p.username === _this.username) {
                                _this.myPlayerId = p.playerId;
                                console.log('my player id: ' + _this.myPlayerId);
                            }
                        }
                        _this.myHand = _this.decks[_this.myPlayerId];
                    });
                });
            });
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    }
    GamePlayComponent.prototype.ngOnInit = function () {
        // this.socket = io();
        // this.socket.on('hello', function(data) {
        //     console.log('socket received greeting from server:');
        //     console.log(data);
        // });
    };
    GamePlayComponent.prototype.showCards = function (index) {
        var cardType = this.getCardById(index);
        if (cardType === '...') {
            return ['...', index];
        }
        else {
            var src = '../../../../assets/img/cards/' + cardType + '.png';
            return [src, cardType];
        }
    };
    GamePlayComponent.prototype.getNextHand = function (num) {
        var _this = this;
        var activity = { playerId: this.myPlayerId, card_index: num, game: this.game };
        console.log('getNextHand');
        console.log(activity);
        this.gameService.getNextHand(this.gameId, activity).subscribe(function (res) {
            _this.game = res;
            _this.decks = _this.game.decks;
            _this.myHand = _this.decks[_this.myPlayerId];
            console.log('myHand: ');
            console.log(_this.myHand);
            _this.cards = _this.game.cards;
            for (var i in _this.players) {
                if (true) {
                    _this.players[i].playedCards = _this.cards[i];
                }
            }
            if (_this.myHand.length === 0) {
                _this.total(_this.cards);
            }
        });
    };
    GamePlayComponent.prototype.total = function (cards) {
        var maki = [], dumpling = [], tempura = [], sashimi = [];
        for (var i = 0; i < this.players.length; i++) {
            maki[i] = 0;
            dumpling[i] = 0;
            tempura[i] = 0;
            sashimi[i] = 0;
            var pts = 0;
            var hasWasabi = false;
            for (var j = 0; j < this.cards[0].length; j++) {
                var card = cards[i][j];
                var cardType = this.getCardById(card);
                switch (cardType) {
                    case 'Egg': {
                        var point = 1;
                        if (hasWasabi) {
                            point *= 3;
                            hasWasabi = false;
                        }
                        pts += point;
                        break;
                    }
                    case 'Salmon': {
                        var point = 2;
                        if (hasWasabi) {
                            point *= 3;
                            hasWasabi = false;
                        }
                        pts += point;
                        break;
                    }
                    case 'Squid': {
                        var point = 3;
                        if (hasWasabi) {
                            point *= 3;
                            hasWasabi = false;
                        }
                        pts += point;
                        break;
                    }
                    case 'Maki_1': {
                        maki[i] += 1;
                        break;
                    }
                    case 'Maki_2': {
                        maki[i] += 2;
                        break;
                    }
                    case 'Maki_3': {
                        maki[i] += 3;
                        break;
                    }
                    case 'Tempura': {
                        tempura[i] += 1;
                        break;
                    }
                    case 'Sashimi': {
                        sashimi[i] += 1;
                        break;
                    }
                    case 'Dumpling': {
                        dumpling[i] += 1;
                        break;
                    }
                    case 'Chopsticks': {
                        break;
                    }
                    case 'Wasabi': {
                        hasWasabi = true;
                        break;
                    }
                    case 'Pudding': {
                        this.pudding[i] += 1;
                        break;
                    }
                    default: {
                        break;
                    }
                }
                console.log('Card: ' + cardType);
                console.log('Current score: ' + pts);
            }
            switch (dumpling[i]) {
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
            console.log('Dumplings: ' + dumpling[i] + '   Current score: ' + pts);
            pts += Math.floor(tempura[i] / 2) * 5;
            console.log('Tempuras: ' + tempura[i] + '   Current score: ' + pts);
            pts += Math.floor(sashimi[i] / 3) * 10;
            console.log('Sashimis: ' + sashimi[i] + '   Current score: ' + pts);
            this.scores[i] = pts;
        }
        var maki1 = 0, maki2 = 0, puddingmax = 0, puddingmin = 10;
        for (var i = 0; i < this.players.length; i++) {
            var makis_num = maki[i], puddings_num = this.pudding[i];
            if (makis_num > maki1) {
                maki2 = maki1;
                maki1 = makis_num;
            }
            else if (makis_num > maki2 && makis_num < maki1) {
                maki2 = makis_num;
            }
            if (puddings_num > puddingmax) {
                puddingmax = puddings_num;
            }
            if (puddings_num < puddingmin) {
                puddingmin = puddings_num;
            }
        }
        for (var i = 0; i < this.players.length; i++) {
            if (maki[i] === maki1) {
                this.scores[i] += 6;
            }
            if (maki[i] === maki2) {
                this.scores[i] += 3;
            }
            if (this.pudding[i] === puddingmax) {
                this.scores[i] += 6;
            }
            if (this.pudding[i] === puddingmin) {
                this.scores[i] -= 6;
            }
            console.log('Maki: ' + maki[i]);
            console.log('Current score: ' + this.scores[i]);
            console.log('Pudding: ' + this.pudding[i]);
            console.log('Current score: ' + this.scores[i]);
            this.players[i].score = this.scores[i];
            this.ranks[i] = { player: i, username: this.players[i].username, score: this.scores[i] };
        }
        this.ranks.sort(function (a, b) { return b.score - a.score; });
        if (Math.max.apply(null, this.scores) === this.scores[this.myPlayerId]) {
            this.message = 'You win!';
        }
        else {
            this.message = 'You lose!';
        }
        this.showResults = 'block';
        console.log('showResults: ' + this.showResults);
    };
    GamePlayComponent.prototype.getCardById = function (index) {
        if (0 < index && index < 5) {
            return 'Egg';
        }
        else if (index < 15) {
            return 'Salmon';
        }
        else if (index < 20) {
            return 'Squid';
        }
        else if (index < 26) {
            return 'Maki_1';
        }
        else if (index < 38) {
            return 'Maki_2';
        }
        else if (index < 46) {
            return 'Maki_3';
        }
        else if (index < 60) {
            return 'Dumpling';
        }
        else if (index < 74) {
            return 'Tempura';
        }
        else if (index < 88) {
            return 'Sashimi';
        }
        else if (index < 94) {
            return 'Wasabi';
        }
        else if (index < 98) {
            return 'Chopsticks';
        }
        else if (index < 108) {
            return 'Pudding';
        }
        else {
            return '...';
        }
    };
    GamePlayComponent.prototype.closeResults = function () {
        this.showResults = 'none';
    };
    GamePlayComponent.prototype.startNewGame = function () {
        this.router.navigate(['/room', this.roomId]);
    };
    GamePlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-play',
            template: __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_player_service_client__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_5__services_game_service_client__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_4__services_room_service_client__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_6__services_card_service_client__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GamePlayComponent);
    return GamePlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game-ready/game-ready.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n.game-button:hover {\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    cursor: pointer;\n}\n\n/*.game-start {*/\n\n/*top: 60%;*/\n\n/*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-ready/game-ready.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container myBody\">\n    <audio controls autoplay hidden loop>\n        <source src=\"../../../../assets/music/bgm_game.mp3\" type=\"audio/mpeg\">\n        audio unsupported !!\n    </audio>\n    <div class=\"game-start\">\n        <div align=\"center\">\n            <img src=\"../../../../assets/img/blank.png\" width=\"10%\">\n        </div>\n        <div align=\"center\">\n            <img class=\"game-button\" (click)=\"startGame()\" src=\"../../../../assets/img/button-start.png\" width=\"30%\">\n        </div>\n        <div align=\"center\">\n            <img class=\"game-button\" (click)=\"backToNew()\" src=\"../../../../assets/img/button-back.png\" width=\"23%\">\n        </div>\n        <div align=\"center\">\n            <img src=\"../../../../assets/img/roll_0.gif\" width=\"20%\">\n            <img src=\"../../../../assets/img/roll_2.gif\" width=\"50%\">\n            <img src=\"../../../../assets/img/roll_1.gif\" width=\"20%\">\n        </div>\n    </div>\n    <!--<embed src=\"../../../../assets/music/bgm_game.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">-->\n\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-ready/game-ready.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameReadyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_service_client__ = __webpack_require__("../../../../../src/app/services/room.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_game_service_client__ = __webpack_require__("../../../../../src/app/services/game.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_card_service_client__ = __webpack_require__("../../../../../src/app/services/card.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameReadyComponent = /** @class */ (function () {
    function GameReadyComponent(userService, playerService, gameService, roomService, cardService, activatedRoute, router) {
        this.userService = userService;
        this.playerService = playerService;
        this.gameService = gameService;
        this.roomService = roomService;
        this.cardService = cardService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.realCards = [];
        this.started = false;
        this.numbers = [];
        this.started = false;
    }
    GameReadyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.socket = io();
        // this.socket.on('hello', function(data) {
        //     console.log('socket received greeting from server:');
        //     console.log(data);
        // });
        this.userService.checkLoggedIn().subscribe(function (response) {
            _this.user = response;
            _this.username = _this.user.username;
            console.log('Username: ' + _this.username);
            _this.activatedRoute.params.subscribe(function (params) {
                _this.roomId = params['roomId'];
                _this.roomService.findRoomById(_this.roomId).subscribe(function (res) {
                    _this.room = res;
                    console.log('Entered new room:');
                    console.log(_this.room);
                    _this.playerService.findPlayersByRoomId(_this.roomId).subscribe(function (res2) {
                        console.log('players in the room:');
                        _this.players = res2;
                        console.log(_this.players);
                        for (var _i = 0, _a = _this.players; _i < _a.length; _i++) {
                            var p = _a[_i];
                            if (p.username === _this.username) {
                                _this.myPlayerId = p.playerId;
                                console.log('my player id:');
                                console.log(_this.myPlayerId);
                            }
                        }
                    });
                });
            });
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    GameReadyComponent.prototype.startGame = function () {
        var _this = this;
        this.game = {
            id: 0, num_players: this.room.num_players,
            mode: this.room.mode, recipe: 1, round: 1,
            status: 'Playing', roomId: this.roomId
        };
        console.log('new game:');
        console.log(this.game);
        this.gameService.createGame(this.roomId, this.game).subscribe(function (res) {
            console.log('game started:');
            console.log(res);
            _this.game = res;
            console.log('this.game:');
            console.log(_this.game);
            _this.decks = _this.game.decks;
            _this.hand = _this.decks[_this.decks.length - 1];
            _this.scores = _this.game.scores;
            console.log('decks:');
            console.log(_this.decks);
            console.log('cards:');
            console.log(_this.cards);
            _this.router.navigate(['/game', String(_this.game.id), 'player', String(_this.myPlayerId)]);
        });
    };
    GameReadyComponent.prototype.backToNew = function () {
        this.router.navigate(['/user', this.username, 'game']);
    };
    GameReadyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-ready',
            template: __webpack_require__("../../../../../src/app/components/game/game-ready/game-ready.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game-ready/game-ready.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_player_service_client__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_5__services_game_service_client__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_4__services_room_service_client__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_6__services_card_service_client__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GameReadyComponent);
    return GameReadyComponent;
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
        // this.gameService.findGameById(this.gameId).subscribe(
        //     response => {
        //       this.game = response;
        //       this.cards = this.game.cards;
        //       this.points = this.game.points;
        //     },
        //     err => {
        //       this.router.navigate(['/login']);
        //     }
        // );
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/user', username]\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <div class=\"navbar-form navbar-right\">\n                <a [routerLink]=\"['/login']\" class=\"btn btn-danger\">Logout</a>\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/user', username, 'profile']\">{{username}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right disabled knight-icon\">\n                <li><a class=\"glyphicon glyphicon-knight\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"myBody\">\n    <audio controls autoplay hidden loop>\n        <source src=\"../../../../assets/music/bgm_menu.mp3\" type=\"audio/mpeg\">\n        audio unsupported !!\n    </audio>\n    <!--<embed src=\"../../../../assets/music/bgm_menu.mp3\" loop=\"true\" width=\"0\" height=\"0\" autostart=\"true\">-->\n    <div class=\"row\">\n        <div align=\"center\" class=\"col-xs-1\"></div>\n        <div align=\"center\" class=\"col-xs-2\">\n            <img src=\"../../../../assets/img/sushis/Tempura.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/EggNigiri.png\" width=\"90%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Dumpling.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Maki.png\" width=\"75%\" class=\"sushi-icon\" />\n            <!--<img src=\"../../../../assets/img/sushis/Chopsticks.png\" width=\"70%\" class=\"images\" />-->\n        </div>\n        <div align=\"center\" class=\"col-xs-6\">\n            <img src=\"../../../../assets/img/logo.png\" width=\"80%\" class=\"logo\" />\n            <div align=\"center\" class=\"startButtonDiv\">\n                <img class=\"startButton\" src=\"../../../../assets/img/PlayNow.png\" width=\"40%\" (click)=\"startGame()\" />\n            </div>\n        </div>\n        <div align=\"center\" class=\"col-xs-2\">\n            <img src=\"../../../../assets/img/sushis/Wasabi.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/Pudding.png\" width=\"75%\" class=\"sushi-icon\" />\n            <!--<img src=\"../../../../assets/img/sushis/SalmonNigiri.png\" width=\"70%\" class=\"images\" />-->\n            <img src=\"../../../../assets/img/sushis/Sashimi.png\" width=\"75%\" class=\"sushi-icon\" />\n            <img src=\"../../../../assets/img/sushis/SquidNigiri.png\" width=\"75%\" class=\"sushi-icon\" />\n        </div>\n        <div align=\"center\" class=\"col-xs-1\"></div>\n    </div>\n</div>\n\n\n"

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
            if (response['loggedIn'] === false) {
                console.log('User not logged in!');
                _this.router.navigate(['/login']);
            }
            else {
                console.log('User is logged in!');
                _this.user = response;
                _this.username = _this.user['username'];
            }
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top zjh-nav\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand active\" [routerLink]=\"['/login']\">Sushi Go!</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"https://gamewright.com/product/Sushi-Go\">GAME INTRO</a></li>\n                <li><a href=\"https://github.ccs.neu.edu/phoebe0607/sushigo\">ABOUT</a></li>\n                <li><a routerLink=\"/how-to-play\">HOW TO PLAY</a></li>\n            </ul>\n\n            <form (ngSubmit)=\"login()\" #f=\"ngForm\" class=\"navbar-form navbar-right\">\n                <input placeholder=\"username\"\n                       name=\"username\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"username\" required #name=\"ngModel\"/>\n\n                <input placeholder=\"password\"\n                       name=\"password\"\n                       type=\"password\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"password\" required #pass=\"ngModel\"/>\n\n                <button type=\"submit\"\n                        class=\"btn btn-success\"\n                        [disabled]=\"f.invalid\">\n                    Sign in\n                </button>\n\n                <button routerLink=\"/register\"\n                        class=\"btn btn-primary\">\n                    Register\n                </button>\n            </form>\n        </div>\n\n    </div>\n</nav>\n\n<div class=\"row myBody\">\n    <div align=\"center\" class=\"col-xs-1\">\n    </div>\n    <div align=\"center\" class=\"col-xs-2\">\n        <img src=\"../../../../assets/img/sushis/Tempura.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/EggNigiri.png\" width=\"90%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Dumpling.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Maki.png\" width=\"75%\" class=\"sushi-icon\" />\n        <!--<img src=\"../../../../assets/img/sushis/Chopsticks.png\" width=\"70%\" class=\"images\" />-->\n    </div>\n    <div class=\"col-xs-6\">\n        <img src=\"../../../../assets/img/logo.png\" width=\"100%\" class=\"logo\" />\n    </div>\n    <div align=\"center\" class=\"col-xs-2\">\n        <img src=\"../../../../assets/img/sushis/Wasabi.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/Pudding.png\" width=\"75%\" class=\"sushi-icon\" />\n        <!--<img src=\"../../../../assets/img/sushis/SalmonNigiri.png\" width=\"70%\" class=\"images\" />-->\n        <img src=\"../../../../assets/img/sushis/Sashimi.png\" width=\"75%\" class=\"sushi-icon\" />\n        <img src=\"../../../../assets/img/sushis/SquidNigiri.png\" width=\"75%\" class=\"sushi-icon\" />\n    </div>\n    <div align=\"center\" class=\"col-xs-1\">\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
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
        var added = this.sharedService.addUser(this.username);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, sharedService, activatedRoute, router) {
        this.userService = userService;
        this.sharedService = sharedService;
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
        var deleted = this.sharedService.deleteUser();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */],
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

/***/ "../../../../../src/app/models/player.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(playerId, roomId, username, isHuman, playedCards, handCards, score) {
        this.playerId = playerId;
        this.roomId = roomId;
        this.username = username;
        this.isHuman = isHuman;
        this.playedCards = playedCards;
        this.handCards = handCards;
        this.score = score;
    }
    return Player;
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

/***/ "../../../../../src/app/services/card.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
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
var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
        this.api = {
            'getAllCards': this.getAllCards,
            'getCardById': this.getCardById
        };
    }
    CardService.prototype.getAllCards = function () {
        var url = 'api/card/';
        return this.http.get(url);
    };
    CardService.prototype.getCardById = function (cardId) {
        var url = 'api/card/' + cardId;
        return this.http.get(url);
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CardService);
    return CardService;
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
            'findGameById': this.findGameById,
            'getNextHand': this.getNextHand
            // 'findAllGamesForUser': this.findAllGamesForUser,
            // 'updateGame': this.updateGame,
            // 'removeGame': this.removeGame
        };
    }
    GameService.prototype.createGame = function (roomId, game) {
        var url = 'api/room/' + roomId + '/game';
        return this.http.post(url, game);
    };
    GameService.prototype.getNextHand = function (gameId, activity) {
        var url = 'api/game/' + gameId;
        console.log('game.service.client.ts: activity');
        console.log(activity);
        return this.http.put(url, activity);
    };
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
    // createGame(userId: string, game) {
    //     const url = '/api/user/' + userId + '/game';
    //     return this.http.post<Game>(url, game);
    // }
    //
    // findAllGamesForUser(userId: string) {
    //     const url = '/api/user/' + userId + '/game';
    //     return this.http.get<Game[]>(url);
    // }
    //
    GameService.prototype.findGameById = function (gameId) {
        var url = '/api/game/' + gameId;
        return this.http.get(url);
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/app/services/player.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
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
var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.api = {
            'findPlayersByRoomId': this.findPlayersByRoomId
            // 'findPlayerId': this.findPlayerId
        };
    }
    PlayerService.prototype.findPlayersByRoomId = function (roomId) {
        var url = 'api/room/' + roomId + '/players';
        return this.http.get(url);
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/room.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
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
var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
        this.api = {
            'createRoom': this.createRoom,
            'findRoomById': this.findRoomById,
            'addPlayer': this.addPlayer,
            'generatePlayers': this.generatePlayers
        };
    }
    RoomService.prototype.createRoom = function (room) {
        var url = '/api/room';
        console.log('room: ');
        console.log(room);
        return this.http.post(url, room);
    };
    RoomService.prototype.findRoomById = function (roomId) {
        var url = '/api/room/' + roomId;
        return this.http.get(url);
    };
    RoomService.prototype.addPlayer = function (player) {
        var url = '/api/room/' + player.roomId + '/add-player';
        return this.http.put(url, player);
    };
    RoomService.prototype.generatePlayers = function (roomId, players) {
        var url = '/api/room/' + roomId;
        return this.http.put(url, players);
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
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
var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.username = '';
        this.api = {
            'addUser': this.addUser,
            'getUser': this.getUser,
            'deleteUser': this.deleteUser
        };
    }
    SharedService.prototype.addUser = function (username) {
        this.username = username;
        return this.username;
    };
    SharedService.prototype.getUser = function () {
        return this.username;
    };
    SharedService.prototype.deleteUser = function () {
        this.username = '';
        return true;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SharedService);
    return SharedService;
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