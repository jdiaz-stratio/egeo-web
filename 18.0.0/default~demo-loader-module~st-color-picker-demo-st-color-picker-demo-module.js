(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-color-picker-demo-st-color-picker-demo-module"],{

/***/ "./src/app/demos/st-color-picker-demo/st-color-picker-demo.html":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-color-picker-demo/st-color-picker-demo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n      <p class=\"introduction\">Color picker has been designed to quickly choose a color from a palette</p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Design and behaviour</h1>\r\n      <p class=\"paragraph\">Color picker can be displayed with a label or without it</p>\r\n      <st-color-picker label=\"Choose a Status color\" [selected]=\"selectedColors[0]\" [palette]=\"palette1\"\r\n                       (change)=\"onSelectColor($event, 0)\"></st-color-picker>\r\n      <span class=\"separator\"></span>\r\n      <st-color-picker [selected]=\"selectedColors[1]\" [palette]=\"palette2\"\r\n                       (change)=\"onSelectColor($event, 1)\"></st-color-picker>\r\n      <span class=\"separator\"></span>\r\n      <p class=\"paragraph\">Color picker can be used as part of a form</p>\r\n      <st-color-picker label=\"Choose a Status color\" [selected]=\"formControl.value\" [palette]=\"palette1\" [formControl]=\"formControl\">\r\n      </st-color-picker>\r\n      <p class=\"paragraph\">Form control Value: {{formControl.value | json}}</p>\r\n      <span class=\"separator\"></span>\r\n\r\n      <h1 class=\"title\">Usage and best practices</h1>\r\n      <ul class=\"list\">\r\n         <li> Use color picker for selecting a color between several colors</li>\r\n         <li> Don’t use color picker if you don´t want to limit the colors which can be chosen\r\n         </li>\r\n         <li> Avoid using similar colors.</li>\r\n      </ul>\r\n   </section>\r\n</st-docs>\r\n"

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

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.color-picker {\n  width: 100%;\n  display: block; }\n.demo {\n  display: block;\n  padding: 60px 0; }\n.filter {\n  text-align: right;\n  margin-left: auto; }\nst-color-picker {\n  display: block;\n  margin: 80px 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNvbG9yLXBpY2tlci1kZW1vL3N0LWNvbG9yLXBpY2tlci1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1jb2xvci1waWNrZXItZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC1jb2xvci1waWNrZXItZGVtb1xcc3QtY29sb3ItcGlja2VyLWRlbW8uc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWNvbG9yLXBpY2tlci1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1jb2xvci1waWNrZXItZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBRklIO0VBQ0csWUFBVztFQUNYLGVBQWMsRUFDaEI7QUFFRDtFQUNHLGVBQWM7RUFDZCxnQkFBZSxFQUNqQjtBQUVEO0VBQ0csa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNuQjtBQUVEO0VBQ0csZUFBYztFQUNkLGVBQWMsRUFDaEIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtY29sb3ItcGlja2VyLWRlbW8vc3QtY29sb3ItcGlja2VyLWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi5jb2xvci1waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmRlbW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNjBweCAwOyB9XG5cbi5maWx0ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuc3QtY29sb3ItcGlja2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogODBweCAwOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdjb25zdGFudHMvZm9udHMnO1xyXG5cclxuLmNvbG9yLXBpY2tlciB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRlbW8ge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5zdC1jb2xvci1waWNrZXIge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiA4MHB4IDA7XHJcbn1cclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gYnJhbmQ6XHJcbiRicmFuZDogIzM3YjVlNCAhZGVmYXVsdDtcclxuXHJcbi8vIGFjdGlvbjpcclxuJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ6IzEyOGJkZSAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDE6ICAgI2YzZjZmOCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDQ6ICAgI2FhYjdjNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDc6ICAgIzBmMWIyNyAhZGVmYXVsdDtcclxuXHJcbi8vIHN0YXR1czpcclxuJHN0YXR1cy1zdWNjZXNzLWRlZmF1bHQ6ICAgIzJjY2U5MyAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICAgI2ZhOTMyZiAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0OiAgI2VjNDQ1YyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMTogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNDogI2U1ZTVlNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNzogI2I1YjViNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogIzU1NTU1NSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMzogIzExMTExMSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gaW5wdXRzOlxyXG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxyXG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcclxuIl19 */"

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