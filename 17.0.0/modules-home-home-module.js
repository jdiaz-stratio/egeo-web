(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./src/app/modules/home/home.html":
/*!****************************************!*\
  !*** ./src/app/modules/home/home.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n   <div class=\"background\">\n      <h1>Egeo Design System</h1>\n      <h5>Creating the statement for a scalable and consistent design system</h5>\n      <div class=\"separator separator--white\"></div>\n   </div>\n   <div class=\"main-text\">\n      <p><b>Egeo</b> is an open source design system that combines both the world of design and development in one\n         single\n         interface. This product works together with\n         UX/UI guidelines and the Angular Library. </p>\n\n      <p>Egeo’s design looks for an innovative, smart and balanced line, without forgetting the professional and\n         reliable\n         side.</p>\n\n      <p>We also provide <b>Egeo</b> Themes to help you creating and customizing your theme with your own colors.\n         Furthermore,\n         thanks to <b>Egeo Starter</b> you can start\n         using a brand new Angular app with a set of well-designed and implemented data-bound components built on top\n         of\n         Angular.</p>\n      <div class=\"separator separator--blue\"></div>\n      <span class=\"footer-text\">Egeo Design System is developed by Stratio.</span>\n      <a href=\"https://github.com/stratio/egeo\" class=\"github-button\"><i class=\"icon-github2\"></i><span>Fork and rate it on\n         GitHub</span></a>\n   </div>\n</div>\n\n<st-footer [rightsText]=\"rightsText\" [links]=\"links\" image=\"assets/images/stratio-white.png\">\n</st-footer>\n"

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

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.home {\n  padding-bottom: 100px; }\n.home .background {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url(\"/assets/images/background-mask.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-bottom: 105px; }\n.home h1 {\n    font-weight: 100;\n    font-size: 72px;\n    text-align: left;\n    color: #ffffff;\n    margin-top: 192px;\n    margin-bottom: 52px; }\n.home h5 {\n    text-align: left;\n    font-weight: 100;\n    font-size: 1.125rem;\n    color: #ffffff;\n    margin-bottom: 58px; }\n.home .separator {\n    width: 80px;\n    margin: auto; }\n.home .separator--blue {\n      border: solid 1px #029ee3; }\n.home .separator--white {\n      border: solid 1px #e6e6e6; }\n.home .main-text {\n    margin: 77px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 892px;\n    font-weight: 100;\n    font-size: 1.25rem;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4b4b4b; }\n.home .main-text p {\n      margin-bottom: 25px; }\n.home .footer-text {\n    margin-top: 14px;\n    font-weight: bold;\n    font-size: 1rem;\n    color: #0f1b27;\n    padding: 40px 0 35px; }\n.home .github-button {\n    background-color: #029ee3;\n    font-weight: normal;\n    font-size: 1.125rem;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    cursor: pointer;\n    padding: 11px 26px;\n    border-radius: 4px;\n    margin: auto; }\n.home .github-button:hover {\n      background-color: #028cca; }\n.home .github-button i {\n      padding-right: 18px;\n      font-size: 2.125rem;\n      vertical-align: bottom; }\n.home .github-button span {\n      display: inline-block;\n      line-height: 1.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1BIO0VBQ0csc0JBQXFCLEVBbUd2QjtBQXBHRDtJQUlNLGFBQVk7SUFDWixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQixzREFBcUQ7SUFDckQsNkJBQTRCO0lBQzVCLHVCQUFzQjtJQUN0QixzQkFBcUIsRUFDdkI7QUFaSjtJQWVNLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlSGtCYztJR2pCZCxrQkFBaUI7SUFDakIsb0JBQW1CLEVBQ3JCO0FBckJKO0lBd0JNLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsb0JGRjZCO0lFRzdCLGVIU2M7SUdSZCxvQkFBbUIsRUFDckI7QUE3Qko7SUFnQ00sWUFBVztJQUNYLGFBQVksRUFTZDtBQTFDSjtNQW9DUywwQkFBeUIsRUFDM0I7QUFyQ1A7TUF3Q1MsMEJBQXlCLEVBQzNCO0FBekNQO0lBNkNNLHlCQUF3QjtJQUN4QixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsbUJGM0I0QjtJRTRCNUIsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLG1CQUFrQjtJQUNsQixlQUFjLEVBTWhCO0FBOURKO01BMkRTLG9CQUFtQixFQUNyQjtBQTVEUDtJQWlFTSxpQkFBZ0I7SUFDaEIsa0JBQWlCO0lBQ2pCLGdCRjFDeUI7SUUyQ3pCLGVIOUN5QjtJRytDekIscUJBQW9CLEVBQ3RCO0FBdEVKO0lBeUVNLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsb0JGbkQ2QjtJRW9EN0IsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQix1QkFBc0I7SUFDdEIsbUJBQWtCO0lBQ2xCLGVINUNjO0lHNkNkLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixhQUFZLEVBY2Q7QUFsR0o7TUFzRlMsMEJBQXFDLEVBQ3ZDO0FBdkZQO01BeUZTLG9CQUFtQjtNQUNuQixvQkYxRDZCO01FMkQ3Qix1QkFBc0IsRUFDeEI7QUE1RlA7TUE4RlMsc0JBQXFCO01BQ3JCLG1CQUFrQixFQUNwQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLmhvbWUge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IH1cbiAgLmhvbWUgLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLW1hc2sucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7IH1cbiAgLmhvbWUgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogMTkycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTJweDsgfVxuICAuaG9tZSBoNSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNThweDsgfVxuICAuaG9tZSAuc2VwYXJhdG9yIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICAuaG9tZSAuc2VwYXJhdG9yLS1ibHVlIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwMjllZTM7IH1cbiAgICAuaG9tZSAuc2VwYXJhdG9yLS13aGl0ZSB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2OyB9XG4gIC5ob21lIC5tYWluLXRleHQge1xuICAgIG1hcmdpbjogNzdweCBhdXRvIDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA4OTJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzRiNGI0YjsgfVxuICAgIC5ob21lIC5tYWluLXRleHQgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gIC5ob21lIC5mb290ZXItdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMwZjFiMjc7XG4gICAgcGFkZGluZzogNDBweCAwIDM1cHg7IH1cbiAgLmhvbWUgLmdpdGh1Yi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjllZTM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTFweCAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICAuaG9tZSAuZ2l0aHViLWJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4Y2NhOyB9XG4gICAgLmhvbWUgLmdpdGh1Yi1idXR0b24gaSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cbiAgICAuaG9tZSAuZ2l0aHViLWJ1dHRvbiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIiwiQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxuLmhvbWUge1xuICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gICAuYmFja2dyb3VuZCB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbWFzay5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwNXB4O1xuICAgfVxuXG4gICBoMSB7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgZm9udC1zaXplOiA3MnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC0wMDtcbiAgICAgIG1hcmdpbi10b3A6IDE5MnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTJweDtcbiAgIH1cblxuICAgaDUge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW07XG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1OHB4O1xuICAgfVxuXG4gICAuc2VwYXJhdG9yIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAmLS1ibHVlIHtcbiAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwMjllZTM7XG4gICAgICB9XG5cbiAgICAgICYtLXdoaXRlIHtcbiAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7XG4gICAgICB9XG4gICB9XG5cbiAgIC5tYWluLXRleHQge1xuICAgICAgbWFyZ2luOiA3N3B4IGF1dG8gMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtd2lkdGg6IDg5MnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLWxhcmdlO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNGI0YjRiO1xuXG4gICAgICBwIHtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG5cbiAgIH1cblxuICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXNtYWxsO1xuICAgICAgY29sb3I6ICRhY3Rpb24tc2Vjb25kYXJ5LTA3O1xuICAgICAgcGFkZGluZzogNDBweCAwIDM1cHg7XG4gICB9XG5cbiAgIC5naXRodWItYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjllZTM7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtbWVkaXVtO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMTFweCAyNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzAyOWVlMywgNSUpO1xuICAgICAgfVxuICAgICAgaSB7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgICAgZm9udC1zaXplOiAkZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTtcbiAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgIH1cblxuICAgfVxuXG59XG4iXX0= */"

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