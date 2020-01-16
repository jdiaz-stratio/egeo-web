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

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  display: block;\n  height: 100%;\n  overflow-y: auto; }\n.home {\n  padding-bottom: 100px; }\n.home .background {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url('background-mask.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-bottom: 105px; }\n.home h1 {\n    font-weight: 100;\n    font-size: 72px;\n    text-align: left;\n    color: #ffffff;\n    margin-top: 192px;\n    margin-bottom: 52px; }\n.home h5 {\n    text-align: left;\n    font-weight: 100;\n    font-size: 1.125rem;\n    color: #ffffff;\n    margin-bottom: 58px; }\n.home .separator {\n    width: 80px;\n    margin: auto; }\n.home .separator--blue {\n      border: solid 1px #029ee3; }\n.home .separator--white {\n      border: solid 1px #e6e6e6; }\n.home .main-text {\n    margin: 77px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 892px;\n    font-weight: 100;\n    font-size: 1.25rem;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4b4b4b; }\n.home .main-text p {\n      margin-bottom: 25px; }\n.home .footer-text {\n    margin-top: 14px;\n    font-weight: bold;\n    font-size: 1rem;\n    color: #0f1b27;\n    padding: 40px 0 35px; }\n.home .github-button {\n    background-color: #029ee3;\n    font-weight: normal;\n    font-size: 1.125rem;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    cursor: pointer;\n    padding: 11px 26px;\n    border-radius: 4px;\n    margin: auto; }\n.home .github-button:hover {\n      background-color: #028cca; }\n.home .github-button i {\n      padding-right: 18px;\n      font-size: 2.125rem;\n      vertical-align: bottom; }\n.home .github-button span {\n      display: inline-block;\n      line-height: 1.8em; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDUEg7RUFDRyxlQUFjO0VBQ2QsYUFBWTtFQUNaLGlCQUFnQixFQUNsQjtBQUVEO0VBQ0csc0JBQXFCLEVBbUd2QjtBQXBHRDtJQUlNLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQix1Q0FBNkQ7SUFDN0QsNkJBQTRCO0lBQzVCLHVCQUFzQjtJQUN0QixzQkFBcUIsRUFDdkI7QUFaSjtJQWVNLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlSFljO0lHWGQsa0JBQWlCO0lBQ2pCLG9CQUFtQixFQUNyQjtBQXJCSjtJQXdCTSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLG9CRlI2QjtJRVM3QixlSEdjO0lHRmQsb0JBQW1CLEVBQ3JCO0FBN0JKO0lBZ0NNLFlBQVc7SUFDWCxhQUFZLEVBU2Q7QUExQ0o7TUFvQ1MsMEJBQXlCLEVBQzNCO0FBckNQO01Bd0NTLDBCQUF5QixFQUMzQjtBQXpDUDtJQTZDTSx5QkFBd0I7SUFDeEIsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLG1CRmpDNEI7SUVrQzVCLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsZUFBYyxFQU1oQjtBQTlESjtNQTJEUyxvQkFBbUIsRUFDckI7QUE1RFA7SUFpRU0saUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQixnQkZoRHlCO0lFaUR6QixlSHBEeUI7SUdxRHpCLHFCQUFvQixFQUN0QjtBQXRFSjtJQXlFTSwwQkFBeUI7SUFDekIsb0JBQW1CO0lBQ25CLG9CRnpENkI7SUUwRDdCLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLG1CQUFrQjtJQUNsQixlSGxEYztJR21EZCxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsYUFBWSxFQWNkO0FBbEdKO01Bc0ZTLDBCQUFxQyxFQUN2QztBQXZGUDtNQXlGUyxvQkFBbUI7TUFDbkIsb0JGaEU2QjtNRWlFN0IsdUJBQXNCLEVBQ3hCO0FBNUZQO01BOEZTLHNCQUFxQjtNQUNyQixtQkFBa0IsRUFDcEIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxuXG4uaG9tZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxuICAuaG9tZSAuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1tYXNrLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwNXB4OyB9XG4gIC5ob21lIGgxIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDE5MnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUycHg7IH1cbiAgLmhvbWUgaDUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDU4cHg7IH1cbiAgLmhvbWUgLnNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG4gICAgLmhvbWUgLnNlcGFyYXRvci0tYmx1ZSB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDI5ZWUzOyB9XG4gICAgLmhvbWUgLnNlcGFyYXRvci0td2hpdGUge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2U2ZTZlNjsgfVxuICAuaG9tZSAubWFpbi10ZXh0IHtcbiAgICBtYXJnaW46IDc3cHggYXV0byAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogODkycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0YjRiNGI7IH1cbiAgICAuaG9tZSAubWFpbi10ZXh0IHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuICAuaG9tZSAuZm9vdGVyLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMGYxYjI3O1xuICAgIHBhZGRpbmc6IDQwcHggMCAzNXB4OyB9XG4gIC5ob21lIC5naXRodWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI5ZWUzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDExcHggMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG4gICAgLmhvbWUgLmdpdGh1Yi1idXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOGNjYTsgfVxuICAgIC5ob21lIC5naXRodWItYnV0dG9uIGkge1xuICAgICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyB9XG4gICAgLmhvbWUgLmdpdGh1Yi1idXR0b24gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdGF0dXM6XHJcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGlucHV0czpcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxuOmhvc3Qge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1tYXNrLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7XHJcbiAgIH1cclxuXHJcbiAgIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5MnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xyXG4gICB9XHJcblxyXG4gICBoNSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLW1lZGl1bTtcclxuICAgICAgY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1OHB4O1xyXG4gICB9XHJcblxyXG4gICAuc2VwYXJhdG9yIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICYtLWJsdWUge1xyXG4gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDI5ZWUzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS13aGl0ZSB7XHJcbiAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLm1haW4tdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogNzdweCBhdXRvIDAgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWF4LXdpZHRoOiA4OTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtbGFyZ2U7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM0YjRiNGI7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgLmZvb3Rlci10ZXh0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXNtYWxsO1xyXG4gICAgICBjb2xvcjogJGFjdGlvbi1zZWNvbmRhcnktMDc7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAzNXB4O1xyXG4gICB9XHJcblxyXG4gICAuZ2l0aHViLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjllZTM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLW1lZGl1bTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogMTFweCAyNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjMDI5ZWUzLCA1JSk7XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U7XHJcbiAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG59XHJcbiJdfQ== */"

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