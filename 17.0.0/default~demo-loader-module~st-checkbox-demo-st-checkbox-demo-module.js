(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-checkbox-demo-st-checkbox-demo-module"],{

/***/ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <p>Inline:</p>\r\n         </div>\r\n         <div class=\"col-md-6\">\r\n            <form>\r\n               <st-checkbox name=\"nameA\" value=\"1\"><span>Option A</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameA\" value=\"2\"><span>Option B</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameA\" value=\"3\" [disabled]=\"true\"><span>Option C (disabled)</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameA\" value=\"3\" [disabled]=\"true\" [checked]=\"true\">\r\n                  <span>Option C (disabled and checked)</span>\r\n               </st-checkbox>\r\n            </form>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"separator\"></div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <p>Block:</p>\r\n         </div>\r\n         <div class=\"col-md-6\">\r\n            <form class=\"checkbox-flex\">\r\n               <st-checkbox name=\"nameB\" value=\"1\"><span>Option A</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameB\" value=\"2\"><span>Option B</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameB\" value=\"3\"><span>Option C</span>\r\n               </st-checkbox>\r\n            </form>\r\n         </div>\r\n      </div>\r\n\r\n   </section>\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.temp1 {\n  font-family: 'Nunito Sans';\n  color: #aaa;\n  font-size: 12px;\n  line-height: 12px;\n  display: block;\n  margin-bottom: 5px; }\n.temp2 {\n  font-family: 'Nunito Sans';\n  background-color: #f1f1f1;\n  padding: 10px 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNoZWNrYm94LWRlbW8vc3QtY2hlY2tib3gtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNoZWNrYm94LWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtY2hlY2tib3gtZGVtb1xcc3QtY2hlY2tib3gtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FBRUg7RUFDRyxnQ0FBK0I7RUFDL0IsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdEI7QUFDRDtFQUNHLDJCQUEwQjtFQUMxQixVQUFTO0VBQ1QsV0FDSCxFQUFDO0FBQ0Q7RUFDRywyQkFBMEI7RUFDMUIsWUFBVTtFQUNWLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxtQkFBa0IsRUFDcEI7QUFDRDtFQUNHLDJCQUEwQjtFQUMxQiwwQkFBeUI7RUFDekIsZ0JBQWUsRUFDakI7QUFDRDtFQUNHLGVBQWE7RUFDYixhQUFXO0VBQ1gsaUJBQWdCLEVBQ2xCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNoZWNrYm94LWRlbW8vc3QtY2hlY2tib3gtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucyBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IH1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLnRlbXAxIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbi50ZW1wMiB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAxMHB4IDA7IH1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbmgxIHtcclxuICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucyBCb2xkJztcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxucCB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBhZGRpbmc6IDBcclxufVxyXG4udGVtcDEge1xyXG4gICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcclxuICAgY29sb3I6I2FhYTtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4udGVtcDIge1xyXG4gICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5zZXBhcmF0b3Ige1xyXG4gICBkaXNwbGF5OmJsb2NrO1xyXG4gICBtYXJnaW46MTBweDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.ts ***!
  \**********************************************************************/
/*! exports provided: StCheckboxDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StCheckboxDemoComponent", function() { return StCheckboxDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var StCheckboxDemoComponent = /** @class */ (function () {
    function StCheckboxDemoComponent() {
        this.configDoc = {
            html: 'demo/st-checkbox-demo/st-checkbox-demo.component.html',
            ts: 'demo/st-checkbox-demo/st-checkbox-demo.component.ts',
            component: 'lib/st-checkbox/st-checkbox.component.ts'
        };
    }
    StCheckboxDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-checkbox-demo',
            template: __webpack_require__(/*! ./st-checkbox-demo.component.html */ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-checkbox-demo.component.scss */ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.scss")]
        })
    ], StCheckboxDemoComponent);
    return StCheckboxDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demos/st-checkbox-demo/st-checkbox-demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: StCheckboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StCheckboxDemoModule", function() { return StCheckboxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_checkbox_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-checkbox-demo.component */ "./src/app/demos/st-checkbox-demo/st-checkbox-demo.component.ts");
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




var StCheckboxDemoModule = /** @class */ (function () {
    function StCheckboxDemoModule() {
    }
    StCheckboxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_checkbox_demo_component__WEBPACK_IMPORTED_MODULE_3__["StCheckboxDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_checkbox_demo_component__WEBPACK_IMPORTED_MODULE_3__["StCheckboxDemoComponent"]],
            providers: []
        })
    ], StCheckboxDemoModule);
    return StCheckboxDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-checkbox-demo-st-checkbox-demo-module.js.map