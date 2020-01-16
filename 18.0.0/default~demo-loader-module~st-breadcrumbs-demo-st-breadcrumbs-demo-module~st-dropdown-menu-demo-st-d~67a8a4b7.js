(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7"],{

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts ***!
  \********************************************************************/
/*! exports provided: StDemoLoggerSeverity, StDemoLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerSeverity", function() { return StDemoLoggerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLogger", function() { return StDemoLogger; });
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
var StDemoLoggerSeverity;
(function (StDemoLoggerSeverity) {
    StDemoLoggerSeverity[StDemoLoggerSeverity["INFO"] = 0] = "INFO";
    StDemoLoggerSeverity[StDemoLoggerSeverity["WARN"] = 1] = "WARN";
    StDemoLoggerSeverity[StDemoLoggerSeverity["ERROR"] = 2] = "ERROR";
    StDemoLoggerSeverity[StDemoLoggerSeverity["DEBUG"] = 3] = "DEBUG";
})(StDemoLoggerSeverity || (StDemoLoggerSeverity = {}));
var StDemoLogger = /** @class */ (function () {
    function StDemoLogger(message) {
        this.severity = StDemoLoggerSeverity.INFO;
        this.message = message;
    }
    return StDemoLogger;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.html":
/*!*****************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"st-logger\" [ngStyle]=\"{'width': width + 'px', 'right': expanded ? 0 : ((width * -1) + 'px')}\">\r\n   <div class=\"st-logger-tab\" (click)=\"toggle()\"></div>\r\n   <div class=\"drag-icon\" draggable=\"true\"(dragend)=\"notifyEnd($event)\"><i class=\"icon-actions\"></i><i class=\"icon-actions\"></i></div>\r\n   <div class=\"st-logger-container\">\r\n      <p *ngFor=\"let log of ((logStream | async) || [])\" [ngClass]=\"getSeverityClass(log)\">{{log.message}}</p>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts ***!
  \**********************************************************************/
/*! exports provided: StDemoLoggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerModule", function() { return StDemoLoggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _st_demo_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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




var StDemoLoggerModule = /** @class */ (function () {
    function StDemoLoggerModule() {
    }
    StDemoLoggerModule_1 = StDemoLoggerModule;
    StDemoLoggerModule.withService = function () {
        return {
            ngModule: StDemoLoggerModule_1,
            providers: [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__["StDemoLoggerService"]]
        };
    };
    var StDemoLoggerModule_1;
    StDemoLoggerModule = StDemoLoggerModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]],
            exports: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]]
        })
    ], StDemoLoggerModule);
    return StDemoLoggerModule;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.st-logger {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 400px;\n  transition: right 0.8s ease; }\n.drag-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 20px; }\n.st-logger-tab {\n  background-color: #ffffff;\n  box-shadow: 0px 2px 14px 0 #dedede;\n  position: relative;\n  border-radius: 0 0 0 5px;\n  position: absolute;\n  left: -32px; }\n.st-logger-tab:after {\n    height: 100%;\n    width: 5px;\n    background-color: #ffffff;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: -5px; }\n.st-logger-tab:before {\n    display: flex;\n    padding: 7px;\n    font-family: \"ico_stratio\";\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n    content: '\\e90c';\n    cursor: pointer; }\n.st-logger-container {\n  height: 100%;\n  padding: 30px;\n  box-shadow: 0 2px 14px 0 #dedede;\n  border-left: solid 1px #f6f6f6;\n  background-color: #ffffff;\n  overflow-y: auto;\n  flex-grow: 1; }\n.st-logger-container p:first-child {\n    border-top: solid 1px #e5e5e5; }\n.info,\n.warning,\n.critical,\n.debug {\n  color: #555555;\n  font-weight: 400;\n  font-size: 0.938rem;\n  line-height: 1.125rem;\n  display: inline-flex;\n  border-bottom: solid 1px #e5e5e5;\n  padding: 3px;\n  width: 100%; }\n.info:before,\n  .warning:before,\n  .critical:before,\n  .debug:before {\n    font-size: 1rem;\n    line-height: 1.063rem;\n    font-family: \"ico_stratio\";\n    margin-right: 7px; }\n.info {\n  color: #0979c4; }\n.info:before {\n    content: '\\e615'; }\n.warning {\n  color: #ed7e13; }\n.warning:before {\n    content: '\\e613'; }\n.critical {\n  color: #ec445c; }\n.critical:before {\n    content: '\\e043'; }\n.debug {\n  padding-left: 23px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3NoYXJlZC9zdC1kZW1vLWxvZ2dlci9zdC1kZW1vLWxvZ2dlci5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHNoYXJlZFxcc3QtZGVtby1sb2dnZXJcXHN0LWRlbW8tbG9nZ2VyLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKR0g7RUFDRyxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sY0FBYTtFQUNiLGFBQVk7RUFDWiw0QkFBMkIsRUFDN0I7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUNOLFVBQVM7RUFDVCxhQUFZO0VBQ1osYUFBWSxFQUNkO0FBRUQ7RUFDRywwQkVPaUI7RUZOakIsbUNFV2lCO0VGVmpCLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFvQmI7QUExQkQ7SUFRTSxhQUFZO0lBQ1osV0FBVTtJQUNWLDBCRUZjO0lGR2QsWUFBVztJQUNYLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFlBQVcsRUFDYjtBQWhCSjtJQWtCTSxjQUFhO0lBQ2IsYUFBWTtJQUNaLDJCR2hDMkM7SUhpQzNDLG1CRzFCNEI7SUgyQjVCLHFCR1orQjtJSGEvQixpQkFBZ0I7SUFDaEIsZ0JBQWUsRUFDakI7QUFHSjtFQUNHLGFBQVk7RUFDWixjQUFhO0VBQ2IsaUNFbEJpQjtFRm1CakIsK0JBQXlDO0VBQ3pDLDBCRXpCaUI7RUYwQmpCLGlCQUFnQjtFQUNoQixhQUFZLEVBS2Q7QUFaRDtJQVVNLDhCRTFCYyxFRjJCaEI7QUFHSjs7OztFQUlHLGVFNUJpQjtFRjZCakIsaUJBQWdCO0VBQ2hCLG9CR2xEZ0M7RUhtRGhDLHNCR3RDbUM7RUh1Q25DLHFCQUFvQjtFQUNwQixpQ0V2Q2lCO0VGd0NqQixhQUFZO0VBQ1osWUFBVyxFQU9iO0FBbEJEOzs7O0lBYU0sZ0JHMUR5QjtJSDJEekIsc0JHNUNnQztJSDZDaEMsMkJHckUyQztJSHNFM0Msa0JBQWlCLEVBQ25CO0FBR0o7RUFDRyxlRTdFNEIsRUZpRjlCO0FBTEQ7SUFHTSxpQkFBZ0IsRUFDbEI7QUFHSjtFQUNHLGVFcEUrQixFRndFakM7QUFMRDtJQUdNLGlCQUFnQixFQUNsQjtBQUdKO0VBQ0csZUUxRStCLEVGOEVqQztBQUxEO0lBR00saUJBQWdCLEVBQ2xCO0FBR0o7RUFDRyxtQkFBa0IsRUFDcEIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL3N0LWRlbW8tbG9nZ2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3QtbG9nZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNDAwcHg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuOHMgZWFzZTsgfVxuXG4uZHJhZy1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwcHg7IH1cblxuLnN0LWxvZ2dlci10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE0cHggMCAjZGVkZWRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMzJweDsgfVxuICAuc3QtbG9nZ2VyLXRhYjphZnRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtNXB4OyB9XG4gIC5zdC1sb2dnZXItdGFiOmJlZm9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiaWNvX3N0cmF0aW9cIjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgY29udGVudDogJ1xcZTkwYyc7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zdC1sb2dnZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxNHB4IDAgI2RlZGVkZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZjZmNmY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7IH1cbiAgLnN0LWxvZ2dlci1jb250YWluZXIgcDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlNWU1ZTU7IH1cblxuLmluZm8sXG4ud2FybmluZyxcbi5jcml0aWNhbCxcbi5kZWJ1ZyB7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTM4cmVtO1xuICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U1ZTVlNTtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogMTAwJTsgfVxuICAuaW5mbzpiZWZvcmUsXG4gIC53YXJuaW5nOmJlZm9yZSxcbiAgLmNyaXRpY2FsOmJlZm9yZSxcbiAgLmRlYnVnOmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjA2M3JlbTtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiO1xuICAgIG1hcmdpbi1yaWdodDogN3B4OyB9XG5cbi5pbmZvIHtcbiAgY29sb3I6ICMwOTc5YzQ7IH1cbiAgLmluZm86YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFxlNjE1JzsgfVxuXG4ud2FybmluZyB7XG4gIGNvbG9yOiAjZWQ3ZTEzOyB9XG4gIC53YXJuaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZTYxMyc7IH1cblxuLmNyaXRpY2FsIHtcbiAgY29sb3I6ICNlYzQ0NWM7IH1cbiAgLmNyaXRpY2FsOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZTA0Myc7IH1cblxuLmRlYnVnIHtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG4uc3QtbG9nZ2VyIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICByaWdodDogMDtcclxuICAgdG9wOiAwO1xyXG4gICBoZWlnaHQ6IDEwMHZoO1xyXG4gICB3aWR0aDogNDAwcHg7XHJcbiAgIHRyYW5zaXRpb246IHJpZ2h0IDAuOHMgZWFzZTs7XHJcbn1cclxuXHJcbi5kcmFnLWljb24ge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGxlZnQ6IDA7XHJcbiAgIHRvcDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnN0LWxvZ2dlci10YWIge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcclxuICAgYm94LXNoYWRvdzogMHB4IDJweCAxNHB4IDAgJG5ldXRyYWwtMDU7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGxlZnQ6IC0zMnB4O1xyXG4gICAmOmFmdGVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgIH1cclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDtcclxuICAgICAgY29udGVudDogJ1xcZTkwYyc7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG59XHJcblxyXG4uc3QtbG9nZ2VyLWNvbnRhaW5lciB7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgcGFkZGluZzogMzBweDtcclxuICAgYm94LXNoYWRvdzogMCAycHggMTRweCAwICRuZXV0cmFsLTA1O1xyXG4gICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYigyNDYsIDI0NiwgMjQ2KTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJG5ldXRyYWwtMDQ7XHJcbiAgIH1cclxufVxyXG5cclxuLmluZm8sXHJcbi53YXJuaW5nLFxyXG4uY3JpdGljYWwsXHJcbi5kZWJ1ZyB7XHJcbiAgIGNvbG9yOiAkbmV1dHJhbC0xMDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xyXG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDtcclxuICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkbmV1dHJhbC0wNDtcclxuICAgcGFkZGluZzogM3B4O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsO1xyXG4gICAgICBmb250LWZhbWlseTogJGVnZW8tc3RyYXRpby1pY29ucztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gICBjb2xvcjogJGFjdGlvbi1wcmltYXJ5LWhvdmVyO1xyXG4gICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcXGU2MTUnO1xyXG4gICB9XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICAgY29sb3I6ICRzdGF0dXMtd2FybmluZy1ob3ZlcjtcclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnXFxlNjEzJztcclxuICAgfVxyXG59XHJcblxyXG4uY3JpdGljYWwge1xyXG4gICBjb2xvcjogJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0O1xyXG4gICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcXGUwNDMnO1xyXG4gICB9XHJcbn1cclxuXHJcbi5kZWJ1ZyB7XHJcbiAgIHBhZGRpbmctbGVmdDogMjNweDtcclxufVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3RhdHVzOlxyXG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBpbnB1dHM6XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts ***!
  \***********************************************************************/
/*! exports provided: StDemoLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerService", function() { return StDemoLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
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



var StDemoLoggerService = /** @class */ (function () {
    function StDemoLoggerService() {
        this._logList = [];
        this._logStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._maxMessages = 20;
    }
    Object.defineProperty(StDemoLoggerService.prototype, "logStream", {
        get: function () {
            return this._logStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        var strMessages = messages.map(function (message) { return message.toString(); });
        this.notifyAlert(new _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"](strMessages.join(' ')));
    };
    StDemoLoggerService.prototype.notifyAlert = function (severityOrLog, message) {
        if (severityOrLog instanceof _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"]) {
            this._logList.push(severityOrLog);
        }
        else {
            this._logList.push({ severity: severityOrLog, message: message });
        }
        // First check if its over limit
        this.checkLogListCapacity();
        // Then notify new elements to observers
        this._logStream.next(this._logList);
    };
    Object.defineProperty(StDemoLoggerService.prototype, "maxMessages", {
        set: function (maxMessages) {
            this._maxMessages = maxMessages;
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.checkLogListCapacity = function () {
        var firstToShow = this._logList.length - this._maxMessages;
        if (firstToShow > 0) {
            this._logList = this._logList.slice(firstToShow);
        }
    };
    StDemoLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StDemoLoggerService);
    return StDemoLoggerService;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.ts ***!
  \***************************************************************/
/*! exports provided: StDemoLoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerComponent", function() { return StDemoLoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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



var StDemoLoggerComponent = /** @class */ (function () {
    function StDemoLoggerComponent(_loggerService) {
        this._loggerService = _loggerService;
        this.width = 400;
        this.logStream = this._loggerService.logStream;
    }
    StDemoLoggerComponent.prototype.getSeverityClass = function (log) {
        switch (log.severity) {
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].ERROR: return 'critical';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].WARN: return 'warning';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].INFO: return 'info';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].DEBUG: return 'debug';
            default: return 'debug';
        }
    };
    StDemoLoggerComponent.prototype.notifyEnd = function (event) {
        this.width = window.screen.width - event.screenX;
    };
    StDemoLoggerComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    StDemoLoggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-demo-logger',
            template: __webpack_require__(/*! ./st-demo-logger.html */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.html"),
            styles: [__webpack_require__(/*! ./st-demo-logger.scss */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss")]
        }),
        __metadata("design:paramtypes", [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"]])
    ], StDemoLoggerComponent);
    return StDemoLoggerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7.js.map