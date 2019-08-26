(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-sidebar-demo-st-sidebar-demo-module"],{

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"col-sm-12\">\n      <st-switch (change)=\"enableSearchMode = $event\" label=\"Enable search mode\" class=\"col-sm-12 row\"></st-switch>\n\n      <div class=\"sidebar-container\">\n         <h1>Normal visualization </h1>\n\n         <st-sidebar class=\"sidebar\" title=\"Mesos Manager\" [items]=\"items\" qaTag=\"sidebar-demo\" [active]=\"activeItem\" [searchMode]=\"enableSearchMode\"\n             (change)=\"onChangeActive($event)\">\n            <span class=\"header\" sidebar-header> HEADER CONTENT</span>\n            <span class=\"footer\" sidebar-footer> FOOTER CONTENT</span>\n         </st-sidebar>\n      </div>\n\n      <div class=\"sidebar-container\">\n         <h1>Complex visualization </h1>\n         <st-sidebar class=\"sidebar\" title=\"Mesos Manager\" [visualMode]=\"complexMode\" [items]=\"items\" qaTag=\"sidebar-demo\" [active]=\"activeItem\"\n             [searchMode]=\"enableSearchMode\" (change)=\"onChangeActive($event)\">\n            <span sidebar-footer> FOOTER CONTENT</span>\n\n         </st-sidebar>\n      </div>\n   </section>\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.sidebar {\n  width: 283px; }\n.sidebar-container {\n  float: left;\n  padding: 20px; }\n.header, .footer {\n  margin-top: -10px;\n  display: block;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQUVIO0VBQ0csYUFBWSxFQUNkO0FBRUQ7RUFDRyxZQUFXO0VBQ1gsY0FBYSxFQUNmO0FBRUQ7RUFDRyxrQkFBaUI7RUFDakIsZUFBYztFQUNkLG9CQUFtQixFQUNyQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zaWRlYmFyLWRlbW8vc3Qtc2lkZWJhci1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLnNpZGViYXIge1xuICB3aWR0aDogMjgzcHg7IH1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLmhlYWRlciwgLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4uc2lkZWJhciB7XG4gICB3aWR0aDogMjgzcHg7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICBmbG9hdDogbGVmdDtcbiAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXIsIC5mb290ZXIge1xuICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: StSidebarDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSidebarDemoComponent", function() { return StSidebarDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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


var StSidebarDemoComponent = /** @class */ (function () {
    function StSidebarDemoComponent() {
        this.configDoc = {
            html: 'demo/st-sidebar-demo/st-sidebar-demo.component.html',
            ts: 'demo/st-sidebar-demo/st-sidebar-demo.component.ts',
            component: 'lib/st-sidebar/st-sidebar.component.ts'
        };
        this.items = [
            { id: 'vault-roles', label: 'Vault Roles' },
            { id: 'identities', label: 'Identities', class: 'warning', disabled: true },
            {
                id: 'masters',
                label: 'Masters',
                result: '-',
                items: [{
                        id: 'sub-item1',
                        label: 'Subitem 1',
                        items: [
                            { id: 'sub-item1.1', label: 'Subitem 1.1', result: '450' },
                            { id: 'sub-item1.2', label: 'Subitem 1.2222222222222222222222222222222222222222222222222222222' }
                        ]
                    }, { id: 'sub-item2', label: 'Subitem 2' }]
            },
            {
                id: 'agents', label: 'So long section name', result: '25',
                items: [
                    { id: 'agents.1', label: 'Subitem 1.1', result: '25' },
                    { id: 'agents.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'agents2', label: 'So long section name 2 without results',
                items: [
                    { id: 'agents2.1.1', label: 'Subitem 1.1.1', result: '25' },
                    { id: 'agents2.1.2', label: 'Subitem 1.1.2' }
                ]
            },
            { id: 'without-children', label: 'No children' },
            {
                id: 'sectionA', label: 'Section A',
                items: [
                    { id: 'sub-sectionA.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionA.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionB', label: 'Section B', items: [
                    { id: 'sub-sectionB.1', label: 'Subitem 1.1', disabled: true },
                    { id: 'sub-sectionB.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionC', label: 'Section C',
                items: [
                    { id: 'sub-sectionC.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionC.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionD', label: 'Section D',
                items: [
                    { id: 'sub-sectionD.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionD.2', label: 'Subitem 1.2' }
                ]
            }
        ];
        this.enableSearchMode = false;
        this.complexMode = _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StSidebarVisualMode"].complex;
        this.activeItem = this.items[2].items[0].items[1];
    }
    StSidebarDemoComponent.prototype.onChangeActive = function (item) {
        this.activeItem = item;
    };
    StSidebarDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-sidebar-demo',
            template: __webpack_require__(/*! ./st-sidebar-demo.component.html */ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-sidebar-demo.component.scss */ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StSidebarDemoComponent);
    return StSidebarDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.module.ts ***!
  \*****************************************************************/
/*! exports provided: StSidebarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSidebarDemoModule", function() { return StSidebarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-sidebar-demo.component */ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts");
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




var StSidebarDemoModule = /** @class */ (function () {
    function StSidebarDemoModule() {
    }
    StSidebarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSidebarModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__["StSidebarDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__["StSidebarDemoComponent"]],
            providers: []
        })
    ], StSidebarDemoModule);
    return StSidebarDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-sidebar-demo-st-sidebar-demo-module.js.map