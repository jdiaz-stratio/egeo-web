(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-color-picker-demo-st-color-picker-demo-module"],{

/***/ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.html":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-color-picker-demo/st-color-picker-demo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid demo-layout\">\n      <p class=\"introduction\">Color picker has been designed to quickly choose a color from a palette</p>\n      <span class=\"separator\"></span>\n      <h1 class=\"title\">Design and behaviour</h1>\n      <p class=\"paragraph\">Color picker can be displayed with a label or without it</p>\n      <st-color-picker label=\"Choose a Status color\" [selected]=\"selectedColors[0]\" [palette]=\"palette1\"\n                       (change)=\"onSelectColor($event, 0)\"></st-color-picker>\n      <span class=\"separator\"></span>\n      <st-color-picker [selected]=\"selectedColors[1]\" [palette]=\"palette2\"\n                       (change)=\"onSelectColor($event, 1)\"></st-color-picker>\n      <span class=\"separator\"></span>\n      <p class=\"paragraph\">Color picker can be used as part of a form</p>\n      <st-color-picker label=\"Choose a Status color\" [selected]=\"formControl.value\" [palette]=\"palette1\" [formControl]=\"formControl\">\n      </st-color-picker>\n      <p class=\"paragraph\">Form control Value: {{formControl.value | json}}</p>\n      <span class=\"separator\"></span>\n\n      <h1 class=\"title\">Usage and best practices</h1>\n      <ul class=\"list\">\n         <li> Use color picker for selecting a color between several colors</li>\n         <li> Don’t use color picker if you don´t want to limit the colors which can be chosen\n         </li>\n         <li> Avoid using similar colors.</li>\n      </ul>\n   </section>\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demos/st-color-picker-demo/st-color-picker-demo.module.ts ***!
  \***************************************************************************/
/*! exports provided: StColorPickerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StColorPickerDemoModule", function() { return StColorPickerDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_color_picker_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-color-picker-demo */ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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





var StColorPickerDemoModule = /** @class */ (function () {
    function StColorPickerDemoModule() {
    }
    StColorPickerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StColorPickerModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_color_picker_demo__WEBPACK_IMPORTED_MODULE_3__["StColorPickerDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_st_color_picker_demo__WEBPACK_IMPORTED_MODULE_3__["StColorPickerDemoComponent"]]
        })
    ], StColorPickerDemoModule);
    return StColorPickerDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-color-picker-demo/st-color-picker-demo.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.color-picker {\n  width: 100%;\n  display: block; }\n.demo {\n  display: block;\n  padding: 60px 0; }\n.filter {\n  text-align: right;\n  margin-left: auto; }\nst-color-picker {\n  display: block;\n  margin: 80px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNvbG9yLXBpY2tlci1kZW1vL3N0LWNvbG9yLXBpY2tlci1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNvbG9yLXBpY2tlci1kZW1vL3N0LWNvbG9yLXBpY2tlci1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FGSUg7RUFDRyxZQUFXO0VBQ1gsZUFBYyxFQUNoQjtBQUVEO0VBQ0csZUFBYztFQUNkLGdCQUFlLEVBQ2pCO0FBRUQ7RUFDRyxrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ25CO0FBRUQ7RUFDRyxlQUFjO0VBQ2QsZUFBYyxFQUNoQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1jb2xvci1waWNrZXItZGVtby9zdC1jb2xvci1waWNrZXItZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLmNvbG9yLXBpY2tlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uZGVtbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA2MHB4IDA7IH1cblxuLmZpbHRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG5zdC1jb2xvci1waWNrZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4MHB4IDA7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcblxuLmNvbG9yLXBpY2tlciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGVtbyB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLmZpbHRlciB7XG4gICB0ZXh0LWFsaWduOiByaWdodDtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5zdC1jb2xvci1waWNrZXIge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBtYXJnaW46IDgwcHggMDtcbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iXX0= */"

/***/ }),

/***/ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-color-picker-demo/st-color-picker-demo.ts ***!
  \********************************************************************/
/*! exports provided: StColorPickerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StColorPickerDemoComponent", function() { return StColorPickerDemoComponent; });
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


var StColorPickerDemoComponent = /** @class */ (function () {
    function StColorPickerDemoComponent() {
        this.configDoc = {
            html: 'demo/st-color-picker-demo/st-color-picker-demo.html',
            ts: 'demo/st-color-picker-demo/st-color-picker-demo.ts',
            component: 'lib/st-color-picker/st-color-picker.component.ts'
        };
        this.palette1 = ['#128bdd', '#999999', '#fa9330', '#fdbd2b', '#2cce93', '#cd89d2', '#0f1b27', '#8898a7'];
        this.palette2 = ['#128b6d', '#997899', '#fa9270', '#fa9339', '#2cd093', '#cd68c2', '#8d1627', '#2899b7'];
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selectedColors = [];
    }
    StColorPickerDemoComponent.prototype.onSelectColor = function (color, index) {
        this.selectedColors[index] = color;
    };
    StColorPickerDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-color-picker-demo',
            template: __webpack_require__(/*! ./st-color-picker-demo.html */ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.html"),
            styles: [__webpack_require__(/*! ./st-color-picker-demo.scss */ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.scss")]
        })
    ], StColorPickerDemoComponent);
    return StColorPickerDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-color-picker-demo-st-color-picker-demo-module.js.map