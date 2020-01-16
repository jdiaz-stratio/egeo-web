(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-header-demo-st-header-demo-module"],{

/***/ "./src/app/demos/st-header-demo/fake-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-header-demo/fake-page.component.ts ***!
  \*************************************************************/
/*! exports provided: StFakePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFakePageComponent", function() { return StFakePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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


var StFakePageComponent = /** @class */ (function () {
    function StFakePageComponent(_router) {
        var _this = this;
        this._router = _router;
        this.pageName = 'ERROR';
        var id = 'pageName';
        this._router.data.subscribe(function (data) { return _this.pageName = data[id]; });
    }
    StFakePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fake-page',
            template: "\n      <div>\n         <h1>YOU NAVIGATE TO PAGE</h1>\n           <p [innerHTML]=\"pageName\"></p>\n         <br><br>\n         <router-outlet></router-outlet>\n      </div>",
            styles: [' div { max-width: 1700px; margin: auto; } '],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], StFakePageComponent);
    return StFakePageComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <div class=\"header-container\">\r\n      <st-header [menu]=\"headerMenuSchema\" id=\"header\">\r\n         <div class=\"sth-header-logo\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"144\" height=\"24\" viewBox=\"0 0 144 24\">\r\n               <g fill=\"none\" fill-rule=\"evenodd\">\r\n                  <path fill=\"#DEDEDE\" d=\"M21.794.102l5.38 1.557c.246.07.405.308.378.564l-.012.12-.526 5.044a.527.527 0 0 1-.522.474H11.659a.529.529 0 0 1-.472-.302c-.214-.431-.656-.713-1.222-.713-.614 0-1.22.331-1.62.826a.515.515 0 0 1-.401.19H2.038a.528.528 0 0 1-.521-.585l.47-4.515a.527.527 0 0 1 .458-.47L20.75.02c.35-.044.705-.016 1.044.082zm3.281 21.606L6.725 23.98c-.35.044-.704.015-1.042-.083L.38 22.364a.529.529 0 0 1-.377-.564l.015-.143.525-5.044a.527.527 0 0 1 .523-.474h14.841c.201 0 .38.118.47.299.216.427.656.706 1.219.706.61 0 1.213-.328 1.612-.818a.516.516 0 0 1 .401-.187h5.906c.313 0 .557.274.521.588l-.503 4.514a.527.527 0 0 1-.458.467zM9.249 10.246c.61 0 1.213-.328 1.612-.818a.515.515 0 0 1 .4-.187h14.977c.312 0 .555.272.522.585l-.465 4.459a.527.527 0 0 1-.522.474h-5.767a.53.53 0 0 1-.472-.302c-.214-.432-.655-.713-1.222-.713-.614 0-1.22.33-1.62.826a.516.516 0 0 1-.402.19H1.32a.528.528 0 0 1-.522-.586l.464-4.459a.527.527 0 0 1 .522-.474H7.56c.2 0 .38.118.47.298.216.428.656.707 1.219.707z\" />\r\n                  <path fill=\"#FFF\" d=\"M39.593 19.137c.432.405 2.511 2.133 5.805 2.133 3.51 0 6.021-2.295 6.021-5.103 0-3.294-2.673-4.779-5.805-6.048-2.241-.918-3.429-1.863-3.429-3.402 0-.999.783-2.43 3.051-2.43 1.566 0 2.592.675 3.645 1.35.378.243.729.081.945-.27l.675-1.026a.642.642 0 0 0-.162-.918c-.27-.189-2.295-1.593-4.995-1.593-4.293 0-5.913 2.889-5.913 4.995 0 3.132 2.16 4.563 4.914 5.724 2.673 1.107 4.077 2.133 4.077 3.753 0 1.377-1.188 2.511-3.051 2.511-2.079 0-3.051-.81-4.32-1.863-.297-.243-.702-.135-.918.216l-.702 1.107c-.297.459-.081.648.162.864zm18.576 1.35c0 .27.243.513.513.513h1.782c.27 0 .513-.243.513-.513V4.638h4.401a.513.513 0 0 0 .513-.513V2.613a.513.513 0 0 0-.513-.513h-11.61a.513.513 0 0 0-.513.513v1.512c0 .27.216.513.513.513h4.401v15.849zm10.881 0V2.613c0-.27.216-.513.513-.513h7.344c3.24 0 5.886 2.565 5.886 5.778 0 2.484-1.647 4.536-3.996 5.481l3.699 6.858c.189.351 0 .783-.459.783h-2.025c-.297 0-.459-.135-.567-.351l-3.537-7.047h-4.077v6.885c0 .27-.243.513-.513.513h-1.755a.513.513 0 0 1-.513-.513zm2.835-9.207h4.806c1.755 0 3.294-1.485 3.294-3.348 0-1.755-1.539-3.213-3.294-3.213h-4.806v6.561zM84.872 21c-.405 0-.621-.351-.459-.702l8.289-18.171c.081-.162.324-.297.459-.297h.27c.135 0 .378.135.459.297l8.235 18.171c.162.351-.054.702-.459.702h-1.701c-.324 0-.513-.162-.621-.405l-1.674-3.699h-8.829l-1.647 3.699a.679.679 0 0 1-.621.405h-1.701zm5.022-6.426h6.75l-3.321-7.398h-.135l-3.294 7.398zm16.875 5.913V4.638h-4.401a.513.513 0 0 1-.513-.513V2.613c0-.27.216-.513.513-.513h11.61c.297 0 .513.243.513.513v1.512c0 .27-.216.513-.513.513h-4.401v15.849c0 .27-.243.513-.513.513h-1.782a.531.531 0 0 1-.513-.513zm10.881 0c0 .27.243.513.513.513h1.782c.27 0 .513-.243.513-.513V2.613a.531.531 0 0 0-.513-.513h-1.782a.531.531 0 0 0-.513.513v17.874zm6.561-8.91c0-5.4 4.293-9.747 9.693-9.747 5.4 0 9.72 4.347 9.72 9.747 0 5.4-4.32 9.693-9.72 9.693a9.634 9.634 0 0 1-9.693-9.693zm2.7 0c0 3.861 3.159 7.074 6.993 7.074 3.861 0 7.02-3.213 7.02-7.074 0-3.834-3.159-7.128-7.02-7.128-3.834 0-6.993 3.294-6.993 7.128z\" />\r\n               </g>\r\n            </svg>\r\n         </div>\r\n         <div class=\"sth-header-user-menu\" #launcher>\r\n            <st-pop-over qaTag=\"pop\" [title]=\"launcherTitle\" [hidden]=\"!showLauncherMenu\">\r\n               <div pop-over-button class=\"app-selector-container\">\r\n                  <i class=\"app-selector icon-grid3\" (click)=\"onMenuClick()\"></i>\r\n               </div>\r\n               <div pop-over-content class=\"launcher-container\">\r\n                  <st-launcher qaTag=\"launcher-demo\" [items]=\"launcherItems\" [groupLimit]=\"4\" [groupLimitLabel]=\"'View more'\">\r\n                  </st-launcher>\r\n                  <div class=\"button-groups\">\r\n                     <button class=\"button button-link-primary\">\r\n                        <i class=\"icon-plus\"></i>Add service</button>\r\n                     <button class=\"button button-link-primary\">Access to DC/OS</button>\r\n                  </div>\r\n               </div>\r\n            </st-pop-over>\r\n         </div>\r\n\r\n      </st-header>\r\n\r\n      <div class=\"content-after-header\">\r\n         <router-outlet></router-outlet>\r\n      </div>\r\n   </div>\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.sth-header-user-menu {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  justify-self: flex-end; }\n.con-stratio_imagotipo {\n  font-size: 27px; }\n.header-container {\n  width: 384px; }\n.content-after-header {\n  padding-top: 90px; }\n.launcher-container {\n  width: 384px; }\n.app-selector-container {\n  width: 20px;\n  height: 20px;\n  cursor: pointer; }\n.app-selector-container .app-selector {\n    font-size: 1.25rem;\n    text-align: left;\n    color: #ffffff; }\n.button-groups {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid #ededed;\n  position: relative; }\n.button-groups:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    border-left: 1px solid #ededed;\n    transform: translate(-50%); }\n.button-groups:first {\n    border-right: 1px solid #ededed; }\n.button-groups .button {\n    padding: 10px 0; }\n.button-groups .icon-plus {\n    margin-right: 9px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWhlYWRlci1kZW1vL3N0LWhlYWRlci1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaGVhZGVyLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtaGVhZGVyLWRlbW9cXHN0LWhlYWRlci1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaGVhZGVyLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaGVhZGVyLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWhlYWRlci1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWhlYWRlci1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKR0g7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3pCO0FBRUQ7RUFDRyxnQkFBZSxFQUNqQjtBQUVEO0VBQ0csYUFBWSxFQUNkO0FBQ0Q7RUFDRyxrQkFBaUIsRUFDbkI7QUFFRDtFQUNHLGFBQVksRUFDZDtBQUVEO0VBQ0csWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZSxFQU9qQjtBQVZEO0lBTU0sbUJHaEI0QjtJSGlCNUIsaUJBQWdCO0lBQ2hCLGVFTGMsRUZNaEI7QUFJSjtFQUNHLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0IsOEJFVmlCO0VGV2pCLG1CQUFrQixFQXFCcEI7QUF6QkQ7SUFPTSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxPQUFNO0lBQ04sVUFBUztJQUNULFVBQVM7SUFDVCwrQkVwQmM7SUZxQmQsMkJBQTBCLEVBQzVCO0FBZko7SUFpQk0sZ0NFeEJjLEVGeUJoQjtBQWxCSjtJQW9CTSxnQkFBZSxFQUNqQjtBQXJCSjtJQXVCTSxrQkFBaUIsRUFDbkIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaGVhZGVyLWRlbW8vc3QtaGVhZGVyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3RoLWhlYWRlci11c2VyLW1lbnUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kOyB9XG5cbi5jb24tc3RyYXRpb19pbWFnb3RpcG8ge1xuICBmb250LXNpemU6IDI3cHg7IH1cblxuLmhlYWRlci1jb250YWluZXIge1xuICB3aWR0aDogMzg0cHg7IH1cblxuLmNvbnRlbnQtYWZ0ZXItaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDkwcHg7IH1cblxuLmxhdW5jaGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzODRweDsgfVxuXG4uYXBwLXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuYXBwLXNlbGVjdG9yLWNvbnRhaW5lciAuYXBwLXNlbGVjdG9yIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxuXG4uYnV0dG9uLWdyb3VwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5idXR0b24tZ3JvdXBzOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7IH1cbiAgLmJ1dHRvbi1ncm91cHM6Zmlyc3Qge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7IH1cbiAgLmJ1dHRvbi1ncm91cHMgLmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAwOyB9XG4gIC5idXR0b24tZ3JvdXBzIC5pY29uLXBsdXMge1xuICAgIG1hcmdpbi1yaWdodDogOXB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG4uc3RoLWhlYWRlci11c2VyLW1lbnUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jb24tc3RyYXRpb19pbWFnb3RpcG8ge1xyXG4gICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgd2lkdGg6IDM4NHB4O1xyXG59XHJcbi5jb250ZW50LWFmdGVyLWhlYWRlciB7XHJcbiAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG59XHJcblxyXG4ubGF1bmNoZXItY29udGFpbmVyIHtcclxuICAgd2lkdGg6IDM4NHB4O1xyXG59XHJcblxyXG4uYXBwLXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgIHdpZHRoOiAyMHB4O1xyXG4gICBoZWlnaHQ6IDIwcHg7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgIC5hcHAtc2VsZWN0b3Ige1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLWdyb3VwcyB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICBib3JkZXItdG9wOiAxcHggc29saWQgJG5ldXRyYWwtMDM7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRuZXV0cmFsLTAzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgfVxyXG4gICAmOmZpcnN0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG5ldXRyYWwtMDM7XHJcbiAgIH1cclxuICAgLmJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgfVxyXG4gICAuaWNvbi1wbHVzIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgIH1cclxufVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3RhdHVzOlxyXG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBpbnB1dHM6XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: StHeaderDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StHeaderDemoComponent", function() { return StHeaderDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_header_demo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./st-header-demo.model */ "./src/app/demos/st-header-demo/st-header-demo.model.ts");
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


var StHeaderDemoComponent = /** @class */ (function () {
    function StHeaderDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-header-demo/st-header-demo.component.html',
            ts: 'demo/st-header-demo/st-header-demo.component.ts',
            component: 'lib/st-header/st-header.component.ts'
        };
        this.launcherTitle = 'Services';
        this.headerMenuSchema = _st_header_demo_model__WEBPACK_IMPORTED_MODULE_1__["HEADER_MENU"];
        this.launcherItems = _st_header_demo_model__WEBPACK_IMPORTED_MODULE_1__["LAUNCHER_ITEMS"];
        this.showLauncherMenu = false;
    }
    StHeaderDemoComponent.prototype.onMenuClick = function () {
        this.showLauncherMenu = !this.showLauncherMenu;
    };
    StHeaderDemoComponent.prototype.onClickOutside = function (event) {
        var expandNewValue = this.showLauncherMenu && this.launcherElement &&
            this.launcherElement.nativeElement.contains(event.target);
        if (expandNewValue !== this.showLauncherMenu) {
            this.showLauncherMenu = expandNewValue;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('launcher'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StHeaderDemoComponent.prototype, "launcherElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], StHeaderDemoComponent.prototype, "onClickOutside", null);
    StHeaderDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-header-demo',
            template: __webpack_require__(/*! ./st-header-demo.component.html */ "./src/app/demos/st-header-demo/st-header-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-header-demo.component.scss */ "./src/app/demos/st-header-demo/st-header-demo.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StHeaderDemoComponent);
    return StHeaderDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.model.ts ***!
  \**************************************************************/
/*! exports provided: HEADER_MENU, LONG_CONTENT, LAUNCHER_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_MENU", function() { return HEADER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LONG_CONTENT", function() { return LONG_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAUNCHER_ITEMS", function() { return LAUNCHER_ITEMS; });
var HEADER_MENU = [
    {
        icon: 'icon-head',
        label: 'Sources',
        link: '/header-demo/test1',
        subMenus: [{
                label: 'USERS',
                link: '/header-demo/test1/subtest1'
            },
            {
                label: 'GROUPS',
                link: '/header-demo/test1/subtest2'
            }]
    },
    {
        icon: 'icon-puzzle',
        label: 'Datasets',
        link: '/header-demo/test2',
        subMenus: []
    },
    {
        icon: 'icon-layers',
        label: 'Security',
        link: 'http://www.google.es',
        external: true,
        openInNewPage: false,
        subMenus: []
    },
    {
        icon: 'icon-layers',
        label: 'Glossaries',
        link: 'http://www.stratio.com',
        external: true,
        openInNewPage: true,
        subMenus: []
    }
];
// tslint:disable:max-line-length
var LONG_CONTENT = "\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu vestibulum dolor. Fusce justo mauris, egestas non odio sed, tempus vestibulum ligula. Vivamus ex lacus, aliquet non neque a, posuere luctus ligula. Vestibulum ut ligula et dolor lobortis pulvinar vitae non massa. Donec consectetur sem et quam aliquam molestie. Ut sollicitudin venenatis convallis. Integer consectetur dolor volutpat, scelerisque sem vitae, maximus ligula. Morbi vel eros quis magna posuere laoreet scelerisque non turpis. Quisque lectus odio, fringilla vel venenatis sed, molestie sit amet leo. Maecenas augue justo, placerat sit amet quam nec, fermentum hendrerit lacus. Quisque vel tortor vitae urna egestas venenatis.</p>\n<br><p>Cras vel odio tellus. In eu eros in justo efficitur ornare a eu diam. Ut metus augue, maximus sit amet nisl id, blandit sollicitudin diam. Duis nibh arcu, cursus ac tincidunt nec, bibendum nec metus. Sed sed laoreet dolor, ut dapibus tortor. Vivamus sit amet porttitor purus. Curabitur lobortis egestas eros, a vestibulum enim sollicitudin vel. Vestibulum sodales dui elit, vel rhoncus dui scelerisque sed. Quisque non lorem pellentesque, fermentum lacus sagittis, mollis justo. Proin est ex, pulvinar non nisi in, malesuada pellentesque justo.</p>\n<br><p>Praesent interdum nisi eu elit ultricies, in pellentesque arcu pharetra. Morbi varius purus tincidunt velit bibendum consectetur. Mauris sit amet odio a mauris euismod euismod non sed ipsum. Quisque auctor ipsum ipsum, ut scelerisque eros auctor ut. Suspendisse egestas a purus at pretium. Etiam mattis magna ipsum, nec egestas nulla vestibulum eu. Mauris maximus maximus nisi scelerisque sagittis. Aenean odio ex, aliquam vel euismod ac, luctus non dolor. Curabitur malesuada ipsum eget sem congue luctus. Donec in porta risus, non pharetra velit. Vivamus commodo leo non dignissim rhoncus. Vivamus dapibus, ligula vitae auctor consectetur, leo odio tincidunt nunc, vel sagittis est eros sagittis nisi. Vivamus scelerisque metus ac neque volutpat rhoncus. Nam ornare elementum elit, eget faucibus ante ultricies non. Morbi massa odio, ultricies eget sapien vel, dictum auctor ante.</p>\n<br><p>Phasellus nec congue ex. Maecenas vulputate tincidunt augue a maximus. Nullam sit amet molestie neque, cursus vehicula lorem. Aenean varius nisi a ipsum egestas, nec fringilla libero sagittis. Phasellus pulvinar lorem ornare dui commodo, eu pharetra dui posuere. Cras venenatis augue lorem, quis mattis orci varius non. Vivamus eu risus vitae felis accumsan luctus. Duis tincidunt quis est a placerat.</p>\n<br><p>Nulla suscipit ac eros non porttitor. In erat magna, luctus at dolor non, auctor porttitor felis. Sed eget lacus vehicula nunc convallis sagittis. Nulla vel metus auctor lectus eleifend laoreet. Vestibulum efficitur ipsum in dolor tincidunt, nec porttitor nisi fringilla. Integer porta est at rutrum tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet enim lacinia, elementum mi a, congue eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut et eleifend nibh. Phasellus elit purus, tempor quis ligula in, tristique pellentesque sapien. Phasellus ac arcu eget velit tincidunt dapibus. Vivamus vel rhoncus felis. Etiam id purus ac velit imperdiet euismod non interdum lectus. Vestibulum diam metus, facilisis at nibh eu, tempor viverra lectus. Quisque suscipit dui vitae augue maximus mollis.</p>\n<br><p>Nulla facilisis lectus id tortor fringilla euismod blandit ut leo. Nam condimentum mi vitae sodales lacinia. Praesent interdum consectetur elit vel feugiat. Donec porta leo nec euismod maximus. Aliquam convallis nunc ipsum, ac dignissim orci auctor eu. Quisque placerat blandit feugiat. Mauris consectetur mollis diam, eget malesuada dolor euismod eget. Donec sit amet massa sapien. Vivamus eget luctus ipsum. Morbi velit libero, venenatis quis nibh eu, volutpat vulputate ex. Curabitur in diam justo. Morbi et rhoncus elit. Vestibulum odio velit, mattis ac hendrerit ac, finibus nec justo. In dictum vehicula diam id dignissim. Aenean non nisl ligula. Donec nec suscipit leo, id vulputate libero.</p>\n<br><p>Phasellus facilisis nulla eu diam euismod tincidunt. In convallis nulla mauris. Aenean at ante mauris. Maecenas ullamcorper blandit ultrices. Suspendisse vestibulum ullamcorper augue id hendrerit. Mauris accumsan ante nec venenatis egestas. Duis sit amet rhoncus neque. Nullam interdum elit quis tellus rutrum fermentum. Suspendisse consectetur at sem id sodales.</p>\n<br><p>Duis arcu felis, fermentum sit amet odio vitae, accumsan varius orci. Donec tincidunt mauris at nunc blandit imperdiet. Nulla elementum vitae tellus ac dictum. Nullam est magna, tincidunt quis dolor et, sodales rhoncus ex. Cras auctor ornare volutpat. Nullam tristique lacus in pellentesque suscipit. Praesent finibus laoreet leo molestie placerat. Nulla ante risus, eleifend id pretium sit amet, bibendum ut ex. Cras ut neque dictum odio condimentum sodales nec quis turpis. Quisque laoreet dui elit, at fermentum diam tincidunt nec. Phasellus accumsan sodales ultricies. Mauris rutrum libero a hendrerit condimentum. Vivamus aliquam vitae purus vel sollicitudin. Integer ac est quis felis auctor eleifend.</p>\n<br><p>Morbi et lectus venenatis, hendrerit nulla vitae, tempus nisl. Ut posuere velit sed lorem tincidunt, nec vestibulum mauris ullamcorper. Ut auctor nisl non hendrerit sagittis. Morbi tristique quis sem nec sagittis. Proin ornare, purus nec iaculis congue, tortor nunc pharetra elit, sit amet consectetur nisl lorem ullamcorper tortor. Integer tincidunt sodales mollis. Fusce a tincidunt arcu, porttitor cursus est.</p>\n<br><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lobortis fringilla justo a tincidunt. Quisque ut aliquam nibh. Curabitur consequat euismod enim. Vivamus pretium augue non placerat scelerisque. Suspendisse blandit dolor vitae arcu vestibulum, quis pellentesque quam lobortis. Quisque sapien turpis, dignissim vitae tellus at, luctus facilisis magna. Nulla pretium condimentum luctus.</p>\n";
var LAUNCHER_ITEMS = [
    {
        label: 'Egeo',
        items: [{
                label: 'Egeo',
                url: 'https://github.com/Stratio/egeo'
            },
            {
                label: 'Egeo Web (Esta web esta deprecada por lo que ya no tiene mantenimiento)',
                url: 'https://github.com/Stratio/egeo-web'
            },
            {
                label: 'Egeo.Starter.asdasdas.asdasd.asd.asd.asgfg.df.gdf.gdf.gtw.rtwefds',
                url: 'https://github.com/Stratio/egeo-starter'
            }]
    },
    {
        label: 'Angular',
        items: [{
                label: 'Docs',
                url: 'https://angular.io/docs'
            },
            {
                label: 'Github',
                url: 'https://github.com/angular/angular'
            }]
    },
    {
        label: 'Stratio',
        items: [{
                label: 'Stratio',
                url: 'http://www.stratio.com/'
            },
            {
                label: 'Linkedn',
                url: 'https://www.linkedin.com/company/5122962/'
            },
            {
                label: 'Twitter',
                url: 'https://twitter.com/stratiobd'
            },
            {
                label: 'Youtube',
                url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw'
            },
            {
                label: 'Paradigma Digital',
                url: 'https://www.paradigmadigital.com'
            }]
    }
];


/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StHeaderDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StHeaderDemoModule", function() { return StHeaderDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_header_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-header-demo.component */ "./src/app/demos/st-header-demo/st-header-demo.component.ts");
/* harmony import */ var _fake_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fake-page.component */ "./src/app/demos/st-header-demo/fake-page.component.ts");
/* harmony import */ var _st_header_demo_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./st-header-demo.routing */ "./src/app/demos/st-header-demo/st-header-demo.routing.ts");
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







var StHeaderDemoModule = /** @class */ (function () {
    function StHeaderDemoModule() {
    }
    StHeaderDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StHeaderModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StPopOverModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StLauncherModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_st_header_demo_component__WEBPACK_IMPORTED_MODULE_4__["StHeaderDemoComponent"]] }),
                _st_header_demo_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [_st_header_demo_component__WEBPACK_IMPORTED_MODULE_4__["StHeaderDemoComponent"], _fake_page_component__WEBPACK_IMPORTED_MODULE_5__["StFakePageComponent"]]
        })
    ], StHeaderDemoModule);
    return StHeaderDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-header-demo/st-header-demo.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-header-demo/st-header-demo.routing.ts ***!
  \****************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _st_header_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./st-header-demo.component */ "./src/app/demos/st-header-demo/st-header-demo.component.ts");
/* harmony import */ var _fake_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-page.component */ "./src/app/demos/st-header-demo/fake-page.component.ts");
/* harmony import */ var _st_header_demo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-header-demo.model */ "./src/app/demos/st-header-demo/st-header-demo.model.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: '', component: _st_header_demo_component__WEBPACK_IMPORTED_MODULE_1__["StHeaderDemoComponent"], children: [
            { path: 'test1', redirectTo: 'test1/subtest1', pathMatch: 'full' },
            {
                path: 'test1', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'TEST 1' }, children: [
                    { path: 'subtest1', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'SUBTEST 1' } },
                    { path: 'subtest2', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'SUBTEST 2' } }
                ]
            },
            { path: 'test2', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'TEST 2' } },
            { path: 'test3', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'TEST 3' } },
            { path: 'test4', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: _st_header_demo_model__WEBPACK_IMPORTED_MODULE_3__["LONG_CONTENT"] } },
            { path: 'test5', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'TEST 5' } },
            { path: 'test6', component: _fake_page_component__WEBPACK_IMPORTED_MODULE_2__["StFakePageComponent"], data: { pageName: 'TEST 6' } }
        ]
    }
]);


/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-header-demo-st-header-demo-module.js.map