(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-bubble-demo-st-bubble-demo-module"],{

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <div class=\"bubble-demo-container\">\r\n         <div class=\"buttons\">\r\n            <st-switch label=\"Enabled animation\" [(formControl)]=\"animationFormControl\">\r\n            </st-switch>\r\n\r\n            <st-switch label=\"Small theme\" [(formControl)]=\"smallFormControl\">\r\n            </st-switch>\r\n\r\n            <st-switch label=\"Open to left\" [(formControl)]=\"openToLeftFormControl\">\r\n            </st-switch>\r\n         </div>\r\n         <div class=\"bubble-container\">\r\n            <st-bubble qaTag=\"bubble-demo\" [text]=\"text\" [hidden]=\"hidden\"\r\n                       [animation]=\"animationFormControl.value\"\r\n                       [small]=\" smallFormControl.value\"\r\n                       [offset]=\"{x: 38, y: 17}\"\r\n                       [openToLeft]=\"openToLeftFormControl.value\">\r\n\r\n               <button bubble-button class=\"bubble-demo-button button button-primary\" (click)=\"onClick()\">\r\n                  <span>Bubble</span>\r\n               </button>\r\n            </st-bubble>\r\n         </div>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.bubble-demo-container {\n  width: 800px;\n  height: 300px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.buttons {\n  float: left; }\n.bubble-container {\n  float: right; }\nst-switch {\n  display: block;\n  margin: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1kZW1vL3N0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtYnViYmxlLWRlbW9cXHN0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjs7Ozs7Ozs7O0dBU0c7QUFDSDtFQUNHLGFBQVk7RUFDWixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLGNBQWEsRUFDZjtBQUVEO0VBQ0csYUFBWSxFQUNkO0FBRUQ7RUFDRyxlQUFjLEVBQ2hCO0FBRUQ7RUFDRyxjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUNyQjtBQUVEO0VBQ0csWUFBVyxFQUNiO0FBRUQ7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNHLGVBQWM7RUFDZCxhQUFZLEVBQ2QiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLWRlbW8vc3QtYnViYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uYnViYmxlLWRlbW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5idWJibGUtZGVtby1pdGVtcyB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4uYnViYmxlLWRlbW8tYnV0dG9uIHtcbiAgZmxvYXQ6IGluaGVyaXQ7IH1cblxuLmJ1YmJsZS1kZW1vLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uYnV0dG9ucyB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5idWJibGUtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbnN0LXN3aXRjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuLmJ1YmJsZS1kZW1vLWNvbnRhaW5lciB7XHJcbiAgIHdpZHRoOiA4MDBweDtcclxuICAgaGVpZ2h0OiAzMDBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmJ1YmJsZS1kZW1vLWl0ZW1zIHtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnViYmxlLWRlbW8tYnV0dG9uIHtcclxuICAgZmxvYXQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idWJibGUtZGVtby1jb250ZW50IHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idWJibGUtY29udGFpbmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnN0LXN3aXRjaCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW46IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: StBubbleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoComponent", function() { return StBubbleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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


var StBubbleDemoComponent = /** @class */ (function () {
    function StBubbleDemoComponent() {
        this.configDoc = {
            html: 'demo/st-bubble-demo/st-bubble-demo.component.html',
            ts: 'demo/st-bubble-demo/st-bubble-demo.component.ts',
            component: 'lib/st-bubble/st-bubble.component.ts'
        };
        this.text = 'What needed to deploy Crossdata?';
        this.hidden = true;
        this.animationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.smallFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.openToLeftFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
    }
    StBubbleDemoComponent.prototype.onClick = function () {
        this.hidden = !this.hidden;
    };
    StBubbleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-bubble-demo',
            template: __webpack_require__(/*! ./st-bubble-demo.component.html */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-bubble-demo.component.scss */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss")]
        })
    ], StBubbleDemoComponent);
    return StBubbleDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StBubbleDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoModule", function() { return StBubbleDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-bubble-demo.component */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts");
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






var StBubbleDemoModule = /** @class */ (function () {
    function StBubbleDemoModule() {
    }
    StBubbleDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StBubbleModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"]
            ],
            declarations: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]],
            providers: []
        })
    ], StBubbleDemoModule);
    return StBubbleDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-bubble-demo-st-bubble-demo-module.js.map