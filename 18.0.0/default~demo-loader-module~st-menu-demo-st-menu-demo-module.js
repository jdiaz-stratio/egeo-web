(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-menu-demo-st-menu-demo-module"],{

/***/ "./src/app/demos/st-menu-demo/st-menu-demo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-menu-demo/st-menu-demo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"launcher-container\">\n         <div class=\"st-live-example\">\n            <h1 class=\"st-live-example-title\">Menu with submenus, status and sections</h1>\n            <st-menu [menuOptions]=\"menuOptions2\" qaTag=\"nested-menu\">\n               <button class=\"button button-toolbar button-toolbar--arrow\">\n                  <i class=\"icon-message-circle\"></i>\n                  <span class=\"icon icon-arrow2_down\"></span>\n               </button>\n            </st-menu>\n         </div>\n         <div class=\"st-live-example\">\n            <h1 class=\"st-live-example-title\">Dynamic height menu:</h1>\n            <st-menu\n               [menuOptions]=\"longMenuOptions\"\n               [dynamicHeight]=\"true\"\n               qaTag=\"dynamic-menu\"\n               (selectedOption)=\"selectedOption($event)\">\n               <button class=\"button button-primary\">Show options</button>\n            </st-menu>\n         </div>\n         <div class=\"st-live-example\">\n            <h1 class=\"st-live-example-title\">Menu with left position</h1>\n            <st-menu\n               [menuOptions]=\"menuOptions2\"\n               (selectedOption)=\"selectedOption($event)\"\n               qaTag=\"left-menu\"\n               position=\"left\">\n               <button class=\"button button-toolbar button-toolbar--arrow\">\n                  <i class=\"icon-plus\"></i>\n                  <span class=\"icon icon-arrow2_down\"></span>\n               </button>\n             </st-menu>\n         </div>\n\n         <div class=\"st-live-example\">\n            <h1 class=\"st-live-example-title\">Menu with search input</h1>\n            <st-menu\n               [menuOptions]=\"menuOptions2\"\n               [search]=\"true\"\n               qaTag=\"menu-with-search\">\n               <button class=\"button button-primary\">Show options</button>\n            </st-menu>\n         </div>\n      </div>\n   </section>\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-menu-demo/st-menu-demo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-menu-demo/st-menu-demo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st-live-example {\n  margin-bottom: 30px; }\n\n.button-toolbar--arrow {\n  position: relative;\n  padding-right: 20px; }\n\n.button-toolbar--arrow .icon {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 0.625rem;\n    font-size: 0.6587rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LW1lbnUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC1tZW51LWRlbW9cXHN0LW1lbnUtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLG9CQUFtQixFQUNyQjs7QUFHRDtFQUNHLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFTckI7O0FBWEQ7SUFJTSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFNBQVE7SUFDUiw0QkFBMkI7SUFDM0IsZ0JBQWU7SUFDZixxQkFBb0IsRUFDdEIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtbWVudS1kZW1vL3N0LW1lbnUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdC1saXZlLWV4YW1wbGUge1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbi10b29sYmFyLS1hcnJvdyB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICByaWdodDogMC42MjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42NTg3cmVtO1xyXG4gICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/demos/st-menu-demo/st-menu-demo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demos/st-menu-demo/st-menu-demo.component.ts ***!
  \**************************************************************/
/*! exports provided: StMenuDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StMenuDemoComponent", function() { return StMenuDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Options;
(function (Options) {
    Options[Options["archive"] = 0] = "archive";
    Options[Options["save"] = 1] = "save";
    Options[Options["saveAs"] = 2] = "saveAs";
    Options[Options["move"] = 3] = "move";
    Options[Options["delete"] = 4] = "delete";
})(Options || (Options = {}));
var StMenuDemoComponent = /** @class */ (function () {
    function StMenuDemoComponent() {
        this.configDoc = {
            html: 'demo/st-menu-demo/st-menu-demo.component.html',
            ts: 'demo/st-menu-demo/st-menu-demo.component.ts',
            component: 'lib/st-menu/st-menu.component.ts'
        };
        this.menuOptions1 = [
            {
                name: 'Option1',
                value: 'option-1'
            },
            {
                name: 'Option2',
                value: 'option-2'
            },
            {
                name: 'Option3',
                value: 'option-3'
            }
        ];
        this.menuOptions2 = [
            {
                name: 'Refresh',
                icon: 'icon-refresh',
                value: Options.saveAs
            },
            {
                name: 'Move',
                icon: 'icon-move-to-folder',
                value: Options.move
            },
            {
                name: 'Items',
                icon: 'icon-list',
                value: Options.save,
                subMenus: [
                    {
                        name: 'Item 1',
                        value: 'item1'
                    },
                    {
                        name: 'Item 2',
                        value: 'item2'
                    },
                    {
                        name: 'Item 3',
                        value: 'item3',
                        subMenus: [
                            {
                                name: 'Item 3 1',
                                value: 'item-3-1'
                            },
                            {
                                name: 'Item 3 2',
                                value: 'item-3-2'
                            },
                            {
                                name: 'Item 3 3',
                                value: 'item-3-3',
                                subMenus: [
                                    {
                                        name: 'Item 3 3 1',
                                        value: 'item-3-3-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Item 4',
                        value: 'item4'
                    }
                ]
            },
            {
                name: 'Archive',
                icon: 'icon-archive',
                separator: true,
                value: Options.archive,
                status: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StMenuStatus"].warning
            },
            {
                name: 'Delete',
                icon: 'icon-trash',
                separator: true,
                value: Options.delete,
                status: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StMenuStatus"].critical
            }
        ];
        this.longMenuOptions = [
            {
                name: 'Option1',
                value: 'value1',
                subMenus: Array.from(Array(100).keys()).map(function (item) { return ({
                    name: 'item1-' + item,
                    value: item.toString()
                }); })
            },
            {
                name: 'Option2',
                value: 'option-2',
                subMenus: Array.from(Array(10).keys()).map(function (item) { return ({
                    name: 'item2-' + item,
                    value: item.toString(),
                    subMenus: Array.from(Array(10).keys()).map(function (subitem) { return ({
                        name: 'item-' + subitem,
                        value: item.toString()
                    }); })
                }); })
            },
            {
                name: 'Option3',
                value: 'option-3',
                subMenus: Array.from(Array(100).keys()).map(function (item) { return ({
                    name: 'item3-' + item,
                    value: item.toString()
                }); })
            }
        ];
    }
    StMenuDemoComponent.prototype.selectedOption = function (event) {
        console.log(event);
    };
    StMenuDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-menu-demo',
            template: __webpack_require__(/*! ./st-menu-demo.component.html */ "./src/app/demos/st-menu-demo/st-menu-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-menu-demo.component.scss */ "./src/app/demos/st-menu-demo/st-menu-demo.component.scss")]
        })
    ], StMenuDemoComponent);
    return StMenuDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-menu-demo/st-menu-demo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demos/st-menu-demo/st-menu-demo.module.ts ***!
  \***********************************************************/
/*! exports provided: StMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StMenuDemoModule", function() { return StMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_menu_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-menu-demo.component */ "./src/app/demos/st-menu-demo/st-menu-demo.component.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StMenuDemoModule = /** @class */ (function () {
    function StMenuDemoModule() {
    }
    StMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StMenuModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_menu_demo_component__WEBPACK_IMPORTED_MODULE_3__["StMenuDemoComponent"]]
                })
            ],
            declarations: [
                _st_menu_demo_component__WEBPACK_IMPORTED_MODULE_3__["StMenuDemoComponent"]
            ]
        })
    ], StMenuDemoModule);
    return StMenuDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-menu-demo-st-menu-demo-module.js.map