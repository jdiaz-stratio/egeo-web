(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-select-demo-select-demo-module"],{

/***/ "./src/app/demos/st-select-demo/select-demo.html":
/*!*******************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <st-select placeholder=\"Select option\" [options]=\"options\" [disabled]=\"disabled\" [keyBoardMove]=\"true\"\n                 [default]=\"options[2].value\">\n      </st-select>\n\n      <div class=\"separator\"></div>\n      <button class=\"button button-primary\" (click)=\"changeOptions()\">Change options</button>\n\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\n      <form #templateDrivenForm=\"ngForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\n         <div class=\"form-group\">\n\n            <st-select stCheckValidations errorMessage=\"This field is required\" label=\"Option 1\"\n                       [forceValidations]=\"true\" [formControl]=\"formControl\" tooltip=\"Prueba\"\n                       placeholder=\"Select option\" [options]=\"options\" name=\"option1\" required id=\"test\"\n                       (select)=\"onSelect($event)\" class=\"st-form-field\">\n            </st-select>\n            <div class=\"separator\"></div>\n\n\n            Disabled select\n\n            <st-select stCheckValidations label=\"Option 1\" tooltip=\"Prueba\" placeholder=\"Select option\"\n                       [options]=\"options\" [(ngModel)]=\"model.option1\"\n                       name=\"option1\" required [disabled]=\"true\" id=\"disabled-test\" (select)=\"onSelect($event)\"\n                       class=\"st-form-field\">\n            </st-select>\n\n            <button class=\"button button-primary\"><span>Submit</span></button>\n\n            <div class=\"separator\"></div>\n\n            <p>Form value: {{ templateDrivenForm.value | json }}</p>\n            <p>Form status: {{ templateDrivenForm.disabled ? 'DISABLED' : templateDrivenForm.valid ? 'VALID' : 'INVALID'\n               }}</p>\n         </div>\n      </form>\n\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n\n      <h1>MODEL DRIVEN / REACTIVE EXAMPLE</h1>\n      <form [formGroup]=\"reactiveForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\n         <div class=\"form-group\">\n\n            <st-select stCheckValidations formControlName=\"option1\" placeholder=\"Select option\" [options]=\"options\"\n                       class=\"st-form-field\">\n            </st-select>\n         </div>\n\n         <div class=\"separator\"></div>\n\n         <button class=\"button button-primary\"><span>Submit</span></button>\n\n         <div class=\"separator\"></div>\n\n         <p>Form value: {{ reactiveForm.value | json }}</p>\n         <p>Form status: {{ reactiveForm.status | json }}</p>\n      </form>\n\n\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\n      <br>\n      <br>\n      <button class=\"button button-primary\" (click)=\"changeDisabled()\">Change disable</button>\n\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n      <h1>SEARCH OPTION EXAMPLE</h1>\n      <st-select [search]=\"true\" placeholder=\"Select option\" placeholderSearch=\"Search...\" [options]=\"options\"\n                 [disabled]=\"disabled\">\n      </st-select>\n\n      <div class=\"separator\"></div>\n   </section>\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.module.ts ***!
  \************************************************************/
/*! exports provided: StSelectDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSelectDemoModule", function() { return StSelectDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _select_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-demo */ "./src/app/demos/st-select-demo/select-demo.ts");
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





var StSelectDemoModule = /** @class */ (function () {
    function StSelectDemoModule() {
    }
    StSelectDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"]
            ],
            declarations: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]]
        })
    ], StSelectDemoModule);
    return StSelectDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.scss":
/*!*******************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nst-select {\n  width: 100%;\n  position: relative;\n  display: block; }\nform {\n  border: 1px solid black;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlbGVjdC1kZW1vL3NlbGVjdC1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlbGVjdC1kZW1vL3NlbGVjdC1kZW1vLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQUNIO0VBQ0csZ0NBQStCO0VBQy9CLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLFdBQVU7RUFDVixrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3RCO0FBRUQ7RUFDRywyQkFBMEI7RUFDMUIsVUFBUztFQUNULFdBQ0gsRUFBQztBQUVEO0VBQ0csZUFBYztFQUNkLGFBQVk7RUFDWixpQkFBZ0IsRUFDbEI7QUFFRDtFQUNHLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZUFBYyxFQUNoQjtBQUVEO0VBQ0csd0JBQXVCO0VBQ3ZCLGNBQWEsRUFDZiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWxlY3QtZGVtby9zZWxlY3QtZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaDEge1xuICBmb250LWZhbWlseTogJ051bml0byBTYW5zIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjsgfVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG4uc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5zdC1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmgxIHtcbiAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMgQm9sZCc7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgcGFkZGluZzogMDtcbiAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2Fucyc7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwXG59XG5cbi5zZXBhcmF0b3Ige1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBtYXJnaW46IDEwcHg7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5zdC1zZWxlY3Qge1xuICAgd2lkdGg6IDEwMCU7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBkaXNwbGF5OiBibG9jaztcbn1cblxuZm9ybSB7XG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.ts ***!
  \*****************************************************/
/*! exports provided: SelectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoComponent", function() { return SelectDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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


var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent(_fb) {
        this._fb = _fb;
        this.configDoc = {
            html: 'demo/st-select-demo/select-demo.html',
            ts: 'demo/st-select-demo/select-demo.ts',
            component: 'lib/st-select/st-select.ts'
        };
        this.options = [];
        this.model = {
            option1: null
        };
        this.disabled = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.formControl.markAsDirty();
        this.options.push({ label: 'Select an option', value: undefined });
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "option-" + i,
                value: i
            });
        }
        this.model.option1 = 3;
        this.options[5].selected = true;
        this.reactiveForm = this._fb.group({
            option1: [this.model.option1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SelectDemoComponent.prototype.onSelect = function (value) {
        if (value === undefined) {
            this.model.option1 = undefined;
        }
    };
    SelectDemoComponent.prototype.changeDisabled = function () {
        var controlName = 'option1';
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.reactiveForm.get(controlName).disable();
            this.templateDrivenForm.controls[controlName].disable();
        }
        else {
            this.reactiveForm.get(controlName).enable();
            this.templateDrivenForm.controls[controlName].enable();
        }
    };
    SelectDemoComponent.prototype.onSubmitReactiveForm = function () {
        this.model.option1 = this.reactiveForm.value.option1;
        this.model.option2 = this.reactiveForm.value.option2;
    };
    SelectDemoComponent.prototype.changeOptions = function () {
        this.options = [];
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "new options-" + i,
                value: (10 + i)
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateDrivenForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SelectDemoComponent.prototype, "templateDrivenForm", void 0);
    SelectDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-demo',
            template: __webpack_require__(/*! ./select-demo.html */ "./src/app/demos/st-select-demo/select-demo.html"),
            styles: [__webpack_require__(/*! ./select-demo.scss */ "./src/app/demos/st-select-demo/select-demo.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-select-demo-select-demo-module.js.map