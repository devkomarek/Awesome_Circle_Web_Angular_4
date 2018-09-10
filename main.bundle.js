webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v11/yQiAaD56cjx1AooMTSghGfY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v11/0dTEPzkLWceF7z0koJaX1A.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__press_pack_press_pack_component__ = __webpack_require__("../../../../../src/app/press-pack/press-pack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown_directive__ = __webpack_require__("../../../../../src/app/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__language_changer_service__ = __webpack_require__("../../../../../src/app/language-changer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_simple_page_scroll__ = __webpack_require__("../../../../ng2-simple-page-scroll/ng2-simple-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: "press-pack", component: __WEBPACK_IMPORTED_MODULE_5__press_pack_press_pack_component__["a" /* PressPackComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__press_pack_press_pack_component__["a" /* PressPackComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dropdown_directive__["a" /* DropdownDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_ng2_simple_page_scroll__["a" /* Ng2SimplePageScrollModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__language_changer_service__["a" /* LanguageChangerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_changer_service__ = __webpack_require__("../../../../../src/app/language-changer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownDirective = (function () {
    function DropdownDirective(router, route, ch) {
        this.router = router;
        this.route = route;
        this.ch = ch;
        this.isOpen = false;
    }
    DropdownDirective.prototype.navigate = function () {
        if (this.isOpen === true) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
    };
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.toggleClose = function () {
        this.isOpen = false;
    };
    DropdownDirective.prototype.ngOnInit = function () {
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DropdownDirective.prototype, "path", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DropdownDirective.prototype, "element", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])("class.open"),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "navigate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleClose", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: "[appDropdown]"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__language_changer_service__["a" /* LanguageChangerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_changer_service__["a" /* LanguageChangerService */]) === "function" && _d || Object])
], DropdownDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n\n  <div class=\"navbar-header \">\n    <div>\n    <button type=\"button\" (click)=\"toggleState()\" class=\"navbar-toggle collapsed\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    </div>\n    <div routerLink=\"/home\" style=\"outline: none\">\n    <img class=\"img-rounded\" src=\"assets/logo.png\">\n    </div>\n    <!--<a class=\"navbar-brand mainFont\" routerLink=\"home\"  style=\"cursor: pointer\" >Awesome Circle</a>-->\n    <!--<a href=\"#\" class=\"navbar-left\"><img [src]=\"LOGO\"></a>-->\n\n  </div>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{'in': isIn}\">\n    <ul class=\"nav navbar-nav\">\n      <li [ngClass]=\"{active: changer.isHome}\"><a routerLink=\"/home\" (click)=\"clickHome()\" style=\"cursor: pointer\">Home</a></li>\n      <li class=\"dropdown\" [ngClass]=\"{active: !changer.isHome}\" appDropdown [path]=\"scrollPage\" (click)=\"clickPress()\">\n        <a class=\"dropdown-toggle\"  style=\"cursor: pointer; text-decoration: none\">Press</a>\n      </li>\n    </ul>\n    <label *ngIf=\"isIn == false\" class=\"navbar-text navbar-right mainFont\"\n           style=\"\n    color: #ffffff;\n    padding-right: 30px;\n    font-size: 15px;\n    font-family: Consolas;\n    word-spacing: 10px;\n\">devkomarek@gmail.com</label>\n  </div>\n</nav>\n<!--<li class=\"dropdown\" appDropdown [path]=\"scrollPage\"  (click)=\"isIn = false\">-->\n  <!--<a class=\"dropdown-toggle\"  style=\"cursor: pointer\">Press<span class=\"caret\"></span> </a>-->\n  <!--<ul class=\"dropdown-menu\" >-->\n    <!--<li><a (click)=\"hrefToPath('factsheet')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Factsheet\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('description')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Description\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('aboutMe')\" style=\"cursor: pointer\">{{changer.getLabelName(\"About Me\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('videos')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Videos\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('images')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Images\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('logo')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Logo\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('downloads')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Downloads\")}}</a></li>-->\n    <!--<li><a (click)=\"hrefToPath('contact')\" style=\"cursor: pointer\">{{changer.getLabelName(\"Contact\")}}</a></li>-->\n  <!--</ul>-->\n<!--</li>-->\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_changer_service__ = __webpack_require__("../../../../../src/app/language-changer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, route, changer) {
        this.router = router;
        this.route = route;
        this.changer = changer;
        this.isIn = false;
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            if (_this.route.firstChild.snapshot.url.toString() === "home") {
                _this.isHome = true;
            }
            else {
                _this.isHome = false;
            }
        });
    };
    HeaderComponent.prototype.clickHome = function () {
        this.changer.isHome = true;
        this.isIn = false;
        this.router.navigate(["/home"]);
    };
    HeaderComponent.prototype.clickPress = function () {
        this.changer.isHome = false;
        this.isIn = false;
        this.router.navigate(["/press-pack"]);
    };
    HeaderComponent.prototype.doScroll = function () {
        if (!this.scrollPage) {
            return;
        }
        try {
            var elements = document.getElementById(this.scrollPage);
            if (elements != null)
                elements.scrollIntoView();
        }
        finally {
            this.scrollPage = null;
        }
    };
    HeaderComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    HeaderComponent.prototype.hrefToPath = function (path) {
        this.scrollPage = this.changer.getId(path);
        this.router.navigate(["press-pack"], { fragment: this.scrollPage });
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "scrollPage", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-header",
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__language_changer_service__["a" /* LanguageChangerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_changer_service__["a" /* LanguageChangerService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <img class=\"img-responsive\" style=\"width: 100%\" src=\"assets/banner-2.PNG\">\n\n<!--<div ng-style=\"{'background-image': 'url(http://i.stack.imgur.com/mfvI9.jpg)'}\"></div>-->\n<!--<img ng-style=\"{'background-image': 'url(http://i.stack.imgur.com/mfvI9.jpg)'}\">-->\n<div class=\"container jumbotron\" style=\"padding-top: 50px; padding-bottom: 40px;background-color: white;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 style=\"text-align: center;word-spacing: 8px\">A MINIMAL ACTION GAME FOR ANDROID</h1>\n      <p style=\"font-size: 20px; color: gray;word-wrap: normal\" class=\"text-center\">awesome Circle is challenge for your abilities.\n         </p>\n      <p style=\"font-size: 20px; color: gray;word-wrap: normal\" class=\"text-center\">do not blink and don't get distracted.</p>\n      <p style=\"font-size: 20px; color: gray;word-wrap: normal\" class=\"text-center\">you have to survive for just 60 seconds.</p>\n      <p style=\"font-size: 20px; color: gray;word-wrap: normal\" class=\"text-center\">can you do it?.</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h3 style=\"text-align: center;word-spacing: 8px;color: red\">WARNING</h3>\n      <p style=\"font-size: 24px; color: gray;\" class=\"text-center\">You play at your own risk</p>\n    </div>\n  </div>\n  <div class=\"row center-block\">\n    <div class=\"col-xs-2\"></div>\n    <div class=\"col-sm-4 col-xs-12\">\n\n      <a href=\"https://github.com/devkomarek/AwesomeCircle\" target=\"_blank\" style=\"font-size: 24px\" class=\"text-center\"><h3 style=\"text-align: center;word-spacing: 8px\">Code available on GitHub</h3>\n        <img class=\"img-responsive\" style=\"display: block;margin: 0 auto\" src=\"assets/Octocat.png\">\n      </a>\n\n    </div>\n    <div class=\"col-sm-4  col-xs-12\">\n      <h3 style=\"text-align: center\">Powered by</h3>\n\n      <img class=\"img-responsive\" style=\"display: block;margin: 0 auto\" src=\"assets/unity-logo-rgb.png\">\n    </div>\n    <div class=\"col-xs-2\"></div>\n  </div>\n  </div>\n\n<div class=\"container-fluid\" style=\"background-color: lightgray;padding-top: 20px;padding-bottom: 20px\">\n<div class=\"container\">\n  <div class=\"row\" >\n    <div class=\"col-xs-6 divSpace\" >\n      <h3 style=\"text-align: center;word-spacing: 8px\">GAME IS AVAILABLE ON ANDROID</h3>\n      <hr>\n      <a href=\"https://goo.gl/BySLhR\" target=\"_blank\">\n      <img  class=\"img-responsive\" src=\"assets/google-play-badge.png\">\n    </a>\n    </div>\n    <div class=\"col-xs-6 divSpace\" >\n      <img class=\"img-responsive\" style=\"display: block;margin: 0 auto;padding-top: 60px\" src=\"assets/gameplay.png\">\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/language-changer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageChangerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageChangerService = (function () {
    function LanguageChangerService(route) {
        this.route = route;
        this.factsheet = "Factsheet";
        this.description = "Description";
        this.aboutMe = "About Me";
        this.videos = "Trailer";
        this.images = "Images";
        this.logo = "Logo";
        this.downloads = "Downloads";
        this.contact = "Contact";
        this.factsheetId = "factsheet";
        this.descriptionId = "description";
        this.aboutMeId = "aboutMe";
        this.videosId = "videos";
        this.imagesId = "images";
        this.logoId = "logo";
        this.downloadsId = "downloads";
        this.contactId = "contact";
        this.factsheetPl = "Dane podstawowe";
        this.descriptionPl = "Opis gry";
        this.aboutMePl = "O mnie";
        this.videosPl = "Trailer";
        this.imagesPl = "Obrazy";
        this.logoPl = "Logo";
        this.downloadsPl = "Do pobrania";
        this.contactPl = "Kontakt";
        this.factsheetPlId = "danePodstawowe";
        this.descriptionPlId = "opisGry";
        this.aboutMePlId = "oMnie";
        this.videosPlId = "filmy";
        this.imagesPlId = "obrazy";
        this.logoPlId = "logo";
        this.downloadsPlId = "downloads";
        this.contactPlId = "contact";
        this.isEnglish = true;
        this.isHome = true;
    }
    LanguageChangerService.prototype.ngOnInit = function () {
    };
    LanguageChangerService.prototype.getLabelName = function (name) {
        if (this.isEnglish === true) {
            return name;
        }
        else {
            switch (name) {
                case this.factsheet:
                    return this.factsheetPl;
                case this.description:
                    return this.descriptionPl;
                case this.aboutMe:
                    return this.aboutMePl;
                case this.videos:
                    return this.videosPl;
                case this.images:
                    return this.imagesPl;
                case this.logo:
                    return this.logoPl;
                case this.downloads:
                    return this.downloadsPl;
                case this.contact:
                    return this.contactPl;
            }
        }
    };
    LanguageChangerService.prototype.getId = function (id) {
        if (this.isEnglish === true) {
            return id;
        }
        else {
            switch (id) {
                case this.factsheetId:
                    return this.factsheetPlId;
                case this.descriptionId:
                    return this.descriptionPlId;
                case this.aboutMeId:
                    return this.aboutMePlId;
                case this.videosId:
                    return this.videosPlId;
                case this.imagesId:
                    return this.imagesPlId;
                case this.logoId:
                    return this.logoPlId;
                case this.downloadsId:
                    return this.downloadsPlId;
                case this.contactId:
                    return this.contactPlId;
            }
        }
    };
    return LanguageChangerService;
}());
LanguageChangerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], LanguageChangerService);

var _a;
//# sourceMappingURL=language-changer.service.js.map

/***/ }),

/***/ "../../../../../src/app/press-pack/press-pack.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-xl {\n  padding: 14px 28px;\n  font-size: 25px;\n  border-radius: 8px;\n}\n\n.btn:focus,.btn:active {\n  outline: none !important;\n}\n\n@media(max-width: 313px){\n  .btn-success,.btn{\n    padding-top: 50px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/press-pack/press-pack.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"navbar-right\" style=\"padding-right: 40px\">\n   <button (click)=\"togglePolish()\" class=\"btn\" [ngClass]=\"{'btn-success': !languageChanger.isEnglish}\"\n           style=\"font-family: Consolas;font-size: 100%\">\n      PL</button>\n    <button (click)=\"toggleEnglish()\" class=\"btn btn-success\" [ngClass]=\"{'btn-success':languageChanger.isEnglish}\"\n            style=\"font-family: Consolas;font-size: 100%\">\n      EN</button>\n  </div>\n\n\n\n<div *ngIf=\"!languageChanger.isEnglish\">\n<div class=\"container\" style=\"padding-bottom: 40px\">\n  <div id=\"danePodstawowe\">\n    <h1>Dane podstawowe</h1>\n    <hr>\n    <div class=\"container\" >\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Nazwa Gry</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Awesome Circle</h6>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Gatunek</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Gra akcji</h6>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Twórca</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Łukasz Szymszon \"komarek\"</h6>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Kontakt</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">devkomarek@gmail.com</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Platforma/premiera</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\"><a style=\"font-family: Consolas;font-size: 13px\" target=\"_blank\" href=\"https://goo.gl/BySLhR\">Android (4.09.2017)</a></h6>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Oficjalna strona gry</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\"><a style=\"font-family: Consolas;font-size: 13px\" href=\"https://devkomarek.github.io/awesome-circle-web\" target=\"_blank\">https://devkomarek.github.io/awesome-circle-web</a></h6>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Model biznesowy</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Free z opcjonalnymi reklamami</h6>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\n          <h5 style=\"text-align: center; font-family: Consolas\">Płatności w aplikacji</h5>\n          <h6 style=\"text-align: center;color: gray; font-family: Consolas\">brak</h6>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<div *ngIf=\"languageChanger.isEnglish\" style=\"padding-bottom: 40px\">\n  <div class=\"container\">\n    <div id=\"factsheet\">\n      <h1>Factsheet</h1>\n      <hr>\n      <div class=\"container\" >\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">App name</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Awesome Circle</h6>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Genre</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Action game</h6>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Developer name and country</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Lukas Szymszon \"komarek\", Poland</h6>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Contact</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">devkomarek@gmail.com</h6>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Platforms/release</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\"><a style=\"font-family: Consolas;font-size: 13px\" target=\"_blank\" href=\"https://goo.gl/BySLhR\">Android (4.09.2017)</a></h6>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Official game site</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\"><a style=\"font-family: Consolas;font-size: 13px\" href=\"https://devkomarek.github.io/awesome-circle-web\" target=\"_blank\">https://devkomarek.github.io/awesome-circle-web</a></h6>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">Business model</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Free with optional advertising</h6>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6\">\n            <h5 style=\"text-align: center; font-family: Consolas\">In-app payments</h5>\n            <h6 style=\"text-align: center;color: gray; font-family: Consolas\">Missing payment</h6>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<hr>\n<div *ngIf=\"!languageChanger.isEnglish\">\n<div style=\"background-color: darkgray\">\n  <div id=\"opisGry\" class=\"divSpace container\">\n    <h1>Opis gry</h1>\n    <hr>\n    <div style=\"font-size: 16px; text-align: left\" class=\"col-xs-11\">\n      <p style=\"font-family: Raleway; text-align: justify\">Awesome Circle jest to gra zręcznościowa stworzona w całości przez jedną osobę.\n        Gra składa się z 5 bardzo wymagających poziomów.\n        Usiądź i wczuj się w niesamowitą muzykę, bowiem na każdy poziom został przygotowany osobny utwór.\n        Mimo to że rdzeń rozgrywki oparty jest na prostych zasadach, gra stanowi niesamowite wyzwanie dla gracza.\n        Zasady: Chwyć za telefon, włącz poziom i przetrwaj minimum 60 sekund aby odblokować następny poziom.\n        Proste prawda?\n        Wykorzystując potencjał ekranu sprawiło że sterowanie jest bardziej intuicyjne.\n        Żeby strzelić wystarczy nacisnąć na dowolny punkt na ekranie.\n        Strzelając trafiaj w nadlatujące okręgi, aby przeszkodzić im w dotarciu do środka ekranu.\n        W przypadku przegranej, nie martw się. Porażka w grze to nieodłączny element rozgrywki.\n        To proces nabywania zręczności i szlifowania koncentracji.\n        Z czasem twoje umiejętności na pewno przerosną grę.\n        Do tego celu został przygotowany specjalny tryb, który pozwala jeszcze raz ukończyć grę z jeszcze trudniejszymi\n        poziomami.\n        Tryb przygotowany dla najbardziej wymagających graczy w którym nie ma miejsca na błędy.\n      </p>\n    </div>\n  </div>\n  <hr>\n</div>\n</div>\n\n\n<div *ngIf=\"languageChanger.isEnglish\">\n  <div style=\"background-color: darkgray\">\n    <div id=\"description\" class=\"divSpace container\">\n      <h1>Description</h1>\n      <hr>\n      <div style=\"font-size: 16px; text-align: left\" class=\"col-xs-11\">\n        <p style=\"font-family: Raleway; text-align: justify\">\n          Awesome Circle is an arcade game, made entirely by one person. The game consist of 5 very demanding levels. Sit down, feel the music and get into the spirit - each level has its own special piece of music. The game is based on a few simple rules, yet it can be a quite exciting challenge for a player. Grab your phone, run the game and try to spend around 60 seconds to unlock the next level. Sounds simple, doesn't it? By using the touch screen potential, the controls are more intuitive - to hit just touch the screen anywhere. Shoot the incoming flying circles to prevent them from reaching the center of the screen. Don't worry if you lose. Being defeated is an inseparable element of the gameplay. It is a process of acquiring skill and getting better at concentration. Over time, your skills will surely transcend opportunities of the game. For this purpose a special mode has been prepared, which allows you to finish the game once again, this time with even more difficult levels. This mode is prepared for the most demanding players and it doesn't leave any room for errors.\n        </p>\n      </div>\n    </div>\n    <hr>\n  </div>\n</div>\n\n<hr>\n<div *ngIf=\"!languageChanger.isEnglish\">\n<div style=\"background-color: white\">\n  <div [id]=\"languageChanger.getId('aboutMe')\"  class=\"divSpace container\">\n    <h1>O mnie</h1>\n    <hr>\n    <div style=\"font-size: 16px; text-align: left\" class=\"col-xs-11\">\n      <h3 style=\"font-family: Consolas;text-align: left\"><b>Kim jestem</b></h3>\n      <p style=\"font-family: Raleway; text-align: justify\">Hej!\n        Mam na imię Łukasz “komarek” i jestem twórcą Awesome Circle z czego jestem dumny.\n      </p>\n      <h3 style=\"font-family: Consolas;text-align: left\"><b>inspiracja</b></h3>\n      <p style=\"font-family: Raleway; text-align: justify\">\n        Lubię trudne gry!\n        Takie które rzucają graczowi wyzwanie.\n        Nic dziwnego że zakochałem się w grze <a target=\"_blank\" href=\"http://www.superhexagon.com\">Super Hexagon. </a>\n        Był to czas kiedy zagrywałem się w każdy tytuł jaki wpadł mi w ręce.\n        Oprócz tego też myślałem nad stworzeniem własnej gry.\n        W Końcu każdy ma marzenia.\n\n      </p>\n      <h3 style=\"font-family: Consolas;text-align: left\"><b>walka z demonami</b></h3>\n      <p style=\"font-family: Raleway; text-align: justify\">\n        Jest rok 2016.\n        Praktycznie z niewielkim bagażem umiejętności, lecz z ogromną determinacją rozpocząłem pracę nad Awesome Circle.\n        Cel był prosty. Stworzyć grę w 100% samemu.\n        Zobaczyć ile wysiłku trzeba włożyć na każdym etapie produkcji.\n        Przede wszystkim było to sprawdzenie samego siebie.\n        Drugi cel który trzymał mnie tak naprawdę przy pierwszym, jest pokazanie, że jeśli człowiek naprawdę się zmobilizuje to nie ma rzeczy niemożliwych.\n        Liczę żę to co zrobiłem pomoże innym w walce z własnymi słabościami.\n        Dla mnie wewnętrznie była to droga od zera do bohatera z jego wszystkimi zaletami i wadami.\n        Czas na ciebie!\n        Miłego ogrywania.\n      </p>\n    </div>\n  </div>\n  <hr>\n</div>\n</div>\n\n<div *ngIf=\"languageChanger.isEnglish\">\n  <div style=\"background-color: white\">\n    <div [id]=\"languageChanger.getId('aboutMe')\"  class=\"divSpace container\">\n      <h1>About me</h1>\n      <hr>\n      <div style=\"font-size: 16px; text-align: left\" class=\"col-xs-11\">\n        <h3 style=\"font-family: Consolas;text-align: left\"><b>Who i am</b></h3>\n        <p style=\"font-family: Raleway; text-align: justify\">\n          Hi! <br>\n          My name is Lukas „komarek” I am creator of Awesome Circle and I am really proud of it!\n\n        </p>\n        <h3 style=\"font-family: Consolas;text-align: left\"><b>Inspiration</b></h3>\n        <p style=\"font-family: Raleway; text-align: justify\">\n          Personally, I enjoy difficult games with a new set of challenges. It makes much more sense to me to attempt a higher difficulty on the new game through, when I have the intricacies of the gameplay sussed. No wonder that I fell in love with Super Hexagon. This was time when I was playing every game that was close the hand. Besides, I also thought about creating my own game. Everyone has a dream.\n\n\n        </p>\n        <h3 style=\"font-family: Consolas;text-align: left\"><b>Battle within myself</b></h3>\n        <p style=\"font-family: Raleway; text-align: justify\">\n          It is the year 2016. With the little experience but with great determination I started a work on the Awesome Circle. The goal was simple: Make the game 100% by yourself. I wanted to see how much effort I need to put into creating the product. First of all, it is self-examination. The other goal that was really important to me was show myself that one day you do something that seems be impossible. This was the battle against my own weaknesses.\n          For me internally it was a way from zero to hero with all the advantages and disadvantages. It's time for you! Enjoy the game!\n\n        </p>\n      </div>\n    </div>\n    <hr>\n  </div>\n</div>\n\n<hr>\n\n<div style=\"background-color: darkgray\">\n  <div id=\"videos\" class=\"divSpace container\">\n    <h1>{{languageChanger.getLabelName(\"Trailer\")}}</h1>\n    <hr>\n    <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UNUFgm6HJKo\"></iframe>\n    </div>\n  </div>\n  <hr>\n</div>\n\n\n<hr>\n\n\n<div style=\"background-color: white\">\n  <div id=\"images\" class=\"divSpace container\">\n    <h1>{{languageChanger.getLabelName(\"Images\")}}</h1>\n    <hr>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g1.png\">\n        </div>\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g2.png\">\n        </div>\n      </div>\n\n      <div class=\"row\" >\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g3.png\">\n        </div>\n\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g4.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g5.png\">\n        </div>\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/g6.png\">\n        </div>\n      </div>\n        <hr>\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/insta.gif\">\n        </div>\n\n        <div class=\"col-sm-6 col-xs-12\" style=\"margin-top:20px;\">\n          <img class=\"img-rounded\" style=\"width: 100%\" src=\"assets/insta-2.gif\">\n        </div>\n      </div>\n    </div>\n    <!--<div style=\"font-size: 16px; text-align: left\" class=\"col-xs-11\">-->\n      <!--<img class=\"img-responsive\" style=\"width: 100%\" src=\"assets/banner-2.PNG\">-->\n    <!--</div>-->\n  </div>\n  <hr>\n</div>\n<hr>\n\n\n<div style=\"background-color: darkgray\">\n  <div id=\"logo\" class=\"divSpace container\">\n    <h1>Logo</h1>\n    <hr>\n    <img class=\"img-responsive\" style=\"display: block;margin: 0 auto;padding-top: 20px; width: 30%\" src=\"assets/icon.png\">\n  </div>\n  <hr>\n</div>\n<hr>\n\n\n\n<div id=\"contact\" style=\"background-color: white\">\n  <div id=\"downloads\" class=\"divSpace container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6\">\n        <h1>{{languageChanger.getLabelName(\"Downloads\")}}</h1>\n        <hr>\n        <div class=\"col-xs-12 col-sm-6\">\n          <label style=\"font-family: Consolas;text-align: center;font-size: 18px\"> Awesome Circle Press Pack</label>\n        </div>\n        <div class=\"col-xs-12 col-sm-6\">\n          <a style=\"text-decoration:none;\" href=\"assets/Awesome Circle press pack.7z\" download=\"Awesome Circle.7z\"><button class=\"btn btn-success btn-xl\" style=\"padding-top: 10px;padding-left: 18px;font-family: Consolas;font-size: 100%\">\n            <span style=\"margin-right: 5%;float: left; font-family: 'Glyphicons Halflings'\" class=\"glyphicon-save\"></span>\n            Awesome circle.zip </button></a>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6\">\n        <h1>{{languageChanger.getLabelName(\"Contact\")}}</h1>\n        <hr>\n        <div style=\"font-family: Consolas; font-size: 19px; text-align: left\" class=\"col-xs-6\">\n          <b style=\"font-family: Calibri\">E-mail</b>: devkomarek@gmail.com\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/press-pack/press-pack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PressPackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_changer_service__ = __webpack_require__("../../../../../src/app/language-changer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PressPackComponent = (function () {
    function PressPackComponent(languageChanger) {
        this.languageChanger = languageChanger;
        this.videos = "videos";
    }
    PressPackComponent.prototype.ngOnInit = function () {
        this.languageChanger.image = this.image;
    };
    PressPackComponent.prototype.togglePolish = function () {
        this.languageChanger.isEnglish = false;
    };
    PressPackComponent.prototype.toggleEnglish = function () {
        this.languageChanger.isEnglish = true;
    };
    return PressPackComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('image'),
    __metadata("design:type", Object)
], PressPackComponent.prototype, "image", void 0);
PressPackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-press-pack",
        template: __webpack_require__("../../../../../src/app/press-pack/press-pack.component.html"),
        styles: [__webpack_require__("../../../../../src/app/press-pack/press-pack.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_changer_service__["a" /* LanguageChangerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_changer_service__["a" /* LanguageChangerService */]) === "function" && _a || Object])
], PressPackComponent);

var _a;
//# sourceMappingURL=press-pack.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map