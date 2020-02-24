(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/jdiaz/Documentos/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-logger\" [ngStyle]=\"{'width': width + 'px', 'right': expanded ? 0 : ((width * -1) + 'px')}\">\n   <div class=\"st-logger-tab\" (click)=\"toggle()\"></div>\n   <div class=\"drag-icon\" draggable=\"true\"(dragend)=\"notifyEnd($event)\"><i class=\"icon-actions\"></i><i class=\"icon-actions\"></i></div>\n   <div class=\"st-logger-container\">\n      <p *ngFor=\"let log of ((logStream | async) || [])\" [ngClass]=\"getSeverityClass(log)\">{{log.message}}</p>\n   </div>\n</div>\n");

/***/ }),

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.st-logger {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 400px;\n  transition: right 0.8s ease; }\n.drag-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 20px; }\n.st-logger-tab {\n  background-color: #FFFFFF;\n  box-shadow: 0px 2px 14px 0 #DBDBDB;\n  position: relative;\n  border-radius: 0 0 0 5px;\n  position: absolute;\n  left: -32px; }\n.st-logger-tab:after {\n    height: 100%;\n    width: 5px;\n    background-color: #FFFFFF;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: -5px; }\n.st-logger-tab:before {\n    display: flex;\n    padding: 7px;\n    font-family: \"ico_stratio\";\n    font-size: 1.429rem;\n    line-height: 1.429rem;\n    content: '\\e90c';\n    cursor: pointer; }\n.st-logger-container {\n  height: 100%;\n  padding: 30px;\n  box-shadow: 0 2px 14px 0 #DBDBDB;\n  border-left: solid 1px #f6f6f6;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  flex-grow: 1; }\n.st-logger-container p:first-child {\n    border-top: solid 1px #E7E7E7; }\n.info,\n.warning,\n.critical,\n.debug {\n  color: #707070;\n  font-weight: 400;\n  font-size: 0.938rem;\n  line-height: 1.286rem;\n  display: inline-flex;\n  border-bottom: solid 1px #E7E7E7;\n  padding: 3px;\n  width: 100%; }\n.info:before,\n  .warning:before,\n  .critical:before,\n  .debug:before {\n    font-size: 1.143rem;\n    line-height: 1.063rem;\n    font-family: \"ico_stratio\";\n    margin-right: 7px; }\n.info {\n  color: #065EB2; }\n.info:before {\n    content: '\\e615'; }\n.warning {\n  color: #EC7E13; }\n.warning:before {\n    content: '\\e613'; }\n.critical {\n  color: #DF2935; }\n.critical:before {\n    content: '\\e043'; }\n.debug {\n  padding-left: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3NoYXJlZC9zdC1kZW1vLWxvZ2dlci9zdC1kZW1vLWxvZ2dlci5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvc3QtZGVtby1sb2dnZXIuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3RDRjtFQUNHLGVBQWU7RUFDZixRQUFRO0VBQ1IsTUFBTTtFQUNOLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCLEVBQUE7QUFHOUI7RUFDRyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdmO0VBQ0cseUJFbUNtQjtFRmxDbkIsa0NFMEJpQjtFRnpCakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBTmQ7SUFRTSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCRTBCZ0I7SUZ6QmhCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXLEVBQUE7QUFmakI7SUFrQk0sYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkdoQzJDO0lIaUMzQyxtQkd6QnNCO0lIMEJ0QixxQkdmd0I7SUhnQnhCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFJckI7RUFDRyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDRUhpQjtFRklqQiw4QkFBeUM7RUFDekMseUJFR21CO0VGRm5CLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFQZjtJQVVNLDZCRVhjLEVBQUE7QUZlcEI7Ozs7RUFJRyxjRWJpQjtFRmNqQixnQkFBZ0I7RUFDaEIsbUJHeEJnQztFSHlCaEMscUJHM0MyQjtFSDRDM0Isb0JBQW9CO0VBQ3BCLGdDRXhCaUI7RUZ5QmpCLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFYZDs7OztJQWFNLG1CRzdEc0I7SUg4RHRCLHFCRzNCZ0M7SUg0QmhDLDBCR3JFMkM7SUhzRTNDLGlCQUFpQixFQUFBO0FBSXZCO0VBQ0csY0V6RWlCLEVBQUE7QUZ3RXBCO0lBR00sZ0JBQWdCLEVBQUE7QUFJdEI7RUFDRyxjRTNEYyxFQUFBO0FGMERqQjtJQUdNLGdCQUFnQixFQUFBO0FBSXRCO0VBQ0csY0U1RFksRUFBQTtBRjJEZjtJQUdNLGdCQUFnQixFQUFBO0FBSXRCO0VBQ0csa0JBQWtCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL3N0LWRlbW8tbG9nZ2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uc3QtbG9nZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNDAwcHg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuOHMgZWFzZTsgfVxuXG4uZHJhZy1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwcHg7IH1cblxuLnN0LWxvZ2dlci10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE0cHggMCAjREJEQkRCO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMzJweDsgfVxuICAuc3QtbG9nZ2VyLXRhYjphZnRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtNXB4OyB9XG4gIC5zdC1sb2dnZXItdGFiOmJlZm9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiaWNvX3N0cmF0aW9cIjtcbiAgICBmb250LXNpemU6IDEuNDI5cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyOXJlbTtcbiAgICBjb250ZW50OiAnXFxlOTBjJztcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnN0LWxvZ2dlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE0cHggMCAjREJEQkRCO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNmNmY2ZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTsgfVxuICAuc3QtbG9nZ2VyLWNvbnRhaW5lciBwOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI0U3RTdFNzsgfVxuXG4uaW5mbyxcbi53YXJuaW5nLFxuLmNyaXRpY2FsLFxuLmRlYnVnIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI4NnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRTdFN0U3O1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5pbmZvOmJlZm9yZSxcbiAgLndhcm5pbmc6YmVmb3JlLFxuICAuY3JpdGljYWw6YmVmb3JlLFxuICAuZGVidWc6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDEuMTQzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjA2M3JlbTtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiO1xuICAgIG1hcmdpbi1yaWdodDogN3B4OyB9XG5cbi5pbmZvIHtcbiAgY29sb3I6ICMwNjVFQjI7IH1cbiAgLmluZm86YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFxlNjE1JzsgfVxuXG4ud2FybmluZyB7XG4gIGNvbG9yOiAjRUM3RTEzOyB9XG4gIC53YXJuaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZTYxMyc7IH1cblxuLmNyaXRpY2FsIHtcbiAgY29sb3I6ICNERjI5MzU7IH1cbiAgLmNyaXRpY2FsOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZTA0Myc7IH1cblxuLmRlYnVnIHtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG4uc3QtbG9nZ2VyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHJpZ2h0OiAwO1xuICAgdG9wOiAwO1xuICAgaGVpZ2h0OiAxMDB2aDtcbiAgIHdpZHRoOiA0MDBweDtcbiAgIHRyYW5zaXRpb246IHJpZ2h0IDAuOHMgZWFzZTs7XG59XG5cbi5kcmFnLWljb24ge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgbGVmdDogMDtcbiAgIHRvcDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIG1hcmdpbjogYXV0bztcbiAgIGhlaWdodDogMjBweDtcbn1cblxuLnN0LWxvZ2dlci10YWIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcbiAgIGJveC1zaGFkb3c6IDBweCAycHggMTRweCAwICRuZXV0cmFsLTE1O1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgbGVmdDogLTMycHg7XG4gICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC1mdWxsO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgfVxuICAgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMjA7XG4gICAgICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjA7XG4gICAgICBjb250ZW50OiAnXFxlOTBjJztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIH1cbn1cblxuLnN0LWxvZ2dlci1jb250YWluZXIge1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgcGFkZGluZzogMzBweDtcbiAgIGJveC1zaGFkb3c6IDAgMnB4IDE0cHggMCAkbmV1dHJhbC0xNTtcbiAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDI0NiwgMjQ2LCAyNDYpO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcbiAgIG92ZXJmbG93LXk6IGF1dG87XG4gICBmbGV4LWdyb3c6IDE7XG5cbiAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRuZXV0cmFsLTEwO1xuICAgfVxufVxuXG4uaW5mbyxcbi53YXJuaW5nLFxuLmNyaXRpY2FsLFxuLmRlYnVnIHtcbiAgIGNvbG9yOiAkbmV1dHJhbC02MDtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMTg7XG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkbmV1dHJhbC0xMDtcbiAgIHBhZGRpbmc6IDNweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgJjpiZWZvcmUge1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMTY7XG4gICAgICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw7XG4gICAgICBmb250LWZhbWlseTogJGVnZW8tc3RyYXRpby1pY29ucztcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgfVxufVxuXG4uaW5mbyB7XG4gICBjb2xvcjogJGFjdGlvbi0xMjA7XG4gICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFxlNjE1JztcbiAgIH1cbn1cblxuLndhcm5pbmcge1xuICAgY29sb3I6ICR3YXJuaW5nO1xuICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcZTYxMyc7XG4gICB9XG59XG5cbi5jcml0aWNhbCB7XG4gICBjb2xvcjogJGVycm9yO1xuICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcZTA0Myc7XG4gICB9XG59XG5cbi5kZWJ1ZyB7XG4gICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG59XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhbmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLWVycm9yOiAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XG5cbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    StDemoLoggerComponent.ctorParameters = function () { return [
        { type: _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"] }
    ]; };
    StDemoLoggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-demo-logger',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-demo-logger.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-demo-logger.scss */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss")).default]
        }),
        __metadata("design:paramtypes", [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"]])
    ], StDemoLoggerComponent);
    return StDemoLoggerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7.js.map