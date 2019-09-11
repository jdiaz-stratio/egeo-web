(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./src/app/modules/home/home.html":
/*!****************************************!*\
  !*** ./src/app/modules/home/home.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n   <div class=\"background\">\r\n      <h1>Egeo Design System</h1>\r\n      <h5>Creating the statement for a scalable and consistent design system</h5>\r\n      <div class=\"separator separator--white\"></div>\r\n   </div>\r\n   <div class=\"main-text\">\r\n      <p><b>Egeo</b> is an open source design system that combines both the world of design and development in one\r\n         single\r\n         interface. This product works together with\r\n         UX/UI guidelines and the Angular Library. </p>\r\n\r\n      <p>Egeo’s design looks for an innovative, smart and balanced line, without forgetting the professional and\r\n         reliable\r\n         side.</p>\r\n\r\n      <p>We also provide <b>Egeo</b> Themes to help you creating and customizing your theme with your own colors.\r\n         Furthermore,\r\n         thanks to <b>Egeo Starter</b> you can start\r\n         using a brand new Angular app with a set of well-designed and implemented data-bound components built on top\r\n         of\r\n         Angular.</p>\r\n      <div class=\"separator separator--blue\"></div>\r\n      <span class=\"footer-text\">Egeo Design System is developed by Stratio.</span>\r\n      <a href=\"https://github.com/stratio/egeo\" class=\"github-button\"><i class=\"icon-github2\"></i><span>Fork and rate it on\r\n         GitHub</span></a>\r\n   </div>\r\n</div>\r\n\r\n<st-footer [rightsText]=\"rightsText\" [links]=\"links\" image=\"assets/images/stratio-white.png\">\r\n</st-footer>\r\n"

/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/modules/home/home.ts");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */





var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_4__["StFooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.scss":
/*!****************************************!*\
  !*** ./src/app/modules/home/home.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.home {\n  padding-bottom: 100px; }\n.home .background {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url(\"/assets/images/background-mask.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-bottom: 105px; }\n.home h1 {\n    font-weight: 100;\n    font-size: 72px;\n    text-align: left;\n    color: #ffffff;\n    margin-top: 192px;\n    margin-bottom: 52px; }\n.home h5 {\n    text-align: left;\n    font-weight: 100;\n    font-size: 1.125rem;\n    color: #ffffff;\n    margin-bottom: 58px; }\n.home .separator {\n    width: 80px;\n    margin: auto; }\n.home .separator--blue {\n      border: solid 1px #029ee3; }\n.home .separator--white {\n      border: solid 1px #e6e6e6; }\n.home .main-text {\n    margin: 77px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 892px;\n    font-weight: 100;\n    font-size: 1.25rem;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4b4b4b; }\n.home .main-text p {\n      margin-bottom: 25px; }\n.home .footer-text {\n    margin-top: 14px;\n    font-weight: bold;\n    font-size: 1rem;\n    color: #0f1b27;\n    padding: 40px 0 35px; }\n.home .github-button {\n    background-color: #029ee3;\n    font-weight: normal;\n    font-size: 1.125rem;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    cursor: pointer;\n    padding: 11px 26px;\n    border-radius: 4px;\n    margin: auto; }\n.home .github-button:hover {\n      background-color: #028cca; }\n.home .github-button i {\n      padding-right: 18px;\n      font-size: 2.125rem;\n      vertical-align: bottom; }\n.home .github-button span {\n      display: inline-block;\n      line-height: 1.8em; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDUEg7RUFDRyxzQkFBcUIsRUFtR3ZCO0FBcEdEO0lBSU0sYUFBWTtJQUNaLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsb0JBQW1CO0lBQ25CLHNEQUFxRDtJQUNyRCw2QkFBNEI7SUFDNUIsdUJBQXNCO0lBQ3RCLHNCQUFxQixFQUN2QjtBQVpKO0lBZU0saUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGVIa0JjO0lHakJkLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFDckI7QUFyQko7SUF3Qk0saUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixvQkZGNkI7SUVHN0IsZUhTYztJR1JkLG9CQUFtQixFQUNyQjtBQTdCSjtJQWdDTSxZQUFXO0lBQ1gsYUFBWSxFQVNkO0FBMUNKO01Bb0NTLDBCQUF5QixFQUMzQjtBQXJDUDtNQXdDUywwQkFBeUIsRUFDM0I7QUF6Q1A7SUE2Q00seUJBQXdCO0lBQ3hCLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixtQkYzQjRCO0lFNEI1QixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQix1QkFBc0I7SUFDdEIsbUJBQWtCO0lBQ2xCLGVBQWMsRUFNaEI7QUE5REo7TUEyRFMsb0JBQW1CLEVBQ3JCO0FBNURQO0lBaUVNLGlCQUFnQjtJQUNoQixrQkFBaUI7SUFDakIsZ0JGMUN5QjtJRTJDekIsZUg5Q3lCO0lHK0N6QixxQkFBb0IsRUFDdEI7QUF0RUo7SUF5RU0sMEJBQXlCO0lBQ3pCLG9CQUFtQjtJQUNuQixvQkZuRDZCO0lFb0Q3QixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsZUg1Q2M7SUc2Q2QsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGFBQVksRUFjZDtBQWxHSjtNQXNGUywwQkFBcUMsRUFDdkM7QUF2RlA7TUF5RlMsb0JBQW1CO01BQ25CLG9CRjFENkI7TUUyRDdCLHVCQUFzQixFQUN4QjtBQTVGUDtNQThGUyxzQkFBcUI7TUFDckIsbUJBQWtCLEVBQ3BCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uaG9tZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxuICAuaG9tZSAuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbWFzay5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDVweDsgfVxuICAuaG9tZSBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOiAxOTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MnB4OyB9XG4gIC5ob21lIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1OHB4OyB9XG4gIC5ob21lIC5zZXBhcmF0b3Ige1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAgIC5ob21lIC5zZXBhcmF0b3ItLWJsdWUge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzAyOWVlMzsgfVxuICAgIC5ob21lIC5zZXBhcmF0b3ItLXdoaXRlIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7IH1cbiAgLmhvbWUgLm1haW4tdGV4dCB7XG4gICAgbWFyZ2luOiA3N3B4IGF1dG8gMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDg5MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNGI0YjRiOyB9XG4gICAgLmhvbWUgLm1haW4tdGV4dCBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cbiAgLmhvbWUgLmZvb3Rlci10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzBmMWIyNztcbiAgICBwYWRkaW5nOiA0MHB4IDAgMzVweDsgfVxuICAuaG9tZSAuZ2l0aHViLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOWVlMztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMXB4IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAgIC5ob21lIC5naXRodWItYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjhjY2E7IH1cbiAgICAuaG9tZSAuZ2l0aHViLWJ1dHRvbiBpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgIC5ob21lIC5naXRodWItYnV0dG9uIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3RhdHVzOlxyXG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBpbnB1dHM6XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbi5ob21lIHtcclxuICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgLmJhY2tncm91bmQge1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1tYXNrLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7XHJcbiAgIH1cclxuXHJcbiAgIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5MnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xyXG4gICB9XHJcblxyXG4gICBoNSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLW1lZGl1bTtcclxuICAgICAgY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1OHB4O1xyXG4gICB9XHJcblxyXG4gICAuc2VwYXJhdG9yIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICYtLWJsdWUge1xyXG4gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDI5ZWUzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS13aGl0ZSB7XHJcbiAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLm1haW4tdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogNzdweCBhdXRvIDAgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWF4LXdpZHRoOiA4OTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtbGFyZ2U7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM0YjRiNGI7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgLmZvb3Rlci10ZXh0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXNtYWxsO1xyXG4gICAgICBjb2xvcjogJGFjdGlvbi1zZWNvbmRhcnktMDc7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAzNXB4O1xyXG4gICB9XHJcblxyXG4gICAuZ2l0aHViLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjllZTM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLW1lZGl1bTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogMTFweCAyNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjMDI5ZWUzLCA1JSk7XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U7XHJcbiAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/home/home.ts":
/*!**************************************!*\
  !*** ./src/app/modules/home/home.ts ***!
  \**************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.links = [];
        this.rightsText = 'Copyright © 2018 Stratio';
        this.links.push({
            title: 'Github',
            url: 'http://www.github.com/stratio',
            icon: 'icon-github2'
        }, {
            title: 'Twitter',
            url: 'https://twitter.com/stratiobd',
            icon: 'icon-twitter'
        }, {
            title: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw',
            icon: 'icon-youtube'
        }, {
            title: 'Linkedin',
            url: 'https://es.linkedin.com/company/stratiobd',
            icon: 'icon-linkedin'
        }, {
            title: 'Slideshare',
            url: 'https://es.slideshare.net/stratio',
            icon: 'icon-slideshare'
        });
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/modules/home/home.html"),
            styles: [__webpack_require__(/*! ./home.scss */ "./src/app/modules/home/home.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map