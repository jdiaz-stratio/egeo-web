(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-two-list-selection-demo-st-two-list-selection-demo-module"],{

/***/ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section>\r\n      <h2>Show selected elements in console</h2>\r\n\r\n      <button class=\"button button-primary\" (click)=\"showSelectedElements()\">\r\n         <span>Show</span>\r\n      </button>\r\n\r\n      <br><br><br><br>\r\n\r\n      <h2>Full component, view component and behaviour class</h2>\r\n      <div style=\"width: 100%; height: 500px\">\r\n         <st-two-list-selection [allElements]=\"completeUserList\" [(selectedElements)]=\"selectedUserList\" (selectExtraLabelAll)=\"selectExtraLabel($event)\"\r\n             (selectExtraLabelSelected)=\"selectExtraLabel($event)\" [config]=\"config\" [editable]=\"true\" qaTag=\"container-list\"></st-two-list-selection>\r\n      </div>\r\n      <br><br><br>\r\n      <h2>Only view component</h2>\r\n      <div style=\"width: 100%; height: 500px\">\r\n         <st-two-list-selection-view [allElements]=\"completeUserList\" [selectedElements]=\"selectedUserList\" [config]=\"config\" [editable]=\"true\" qaTag=\"example-two-list\"\r\n             [orderSelectedOptions]=\"orderOptions\" (changeOrderSelected)=\"changeOrder($event)\"></st-two-list-selection-view>\r\n      </div>\r\n\r\n      <br><br><br>\r\n      <h2>Only view component in no edition mode</h2>\r\n      <div style=\"width: 50%; height: 500px\">\r\n         <st-two-list-selection-view [selectedElements]=\"selectedUserList\" [config]=\"config\" [editable]=\"false\" qaTag=\"example-two-list-disable\" mode=\"compact\"></st-two-list-selection-view>\r\n      </div>\r\n\r\n      <br><br><br>\r\n      <h2>Only view component in no edition mode with menu options</h2>\r\n      <div style=\"width: 50%; height: 500px\">\r\n         <st-two-list-selection-view [selectedElements]=\"selectedUserList\" [config]=\"configWithMenuOption\" [editable]=\"false\" qaTag=\"example-two-list-disable\" mode=\"compact\" (selectItemNonEditable)=\"onSelectItemNonEditable($event)\"></st-two-list-selection-view>\r\n      </div>\r\n\r\n      <br><br><br>\r\n      <h2>Checkbox all, and condition show search</h2>\r\n      <div style=\"width: 855px; height: 570px\">\r\n         <st-two-list-selection [allElements]=\"completeUserList\" [(selectedElements)]=\"selectedUserList\" [config]=\"configWithCheckAll\" [editable]=\"true\"\r\n             (numItemsSelectedAll)=\"onNumItemsAll($event)\" (numItemsSelectedSelected)=\"onNumItemsSelected($event)\" qaTag=\"container-list\"\r\n             [hasAllListAll]=\"true\" [hasAllListSelected]=\"true\" [itemAll]=\"itemAll\" [moveAllToSelectedButton]=\"false\" [moveAllToAllButton]=\"false\"\r\n             [showSearchNumber]=\"0\" [orderSelectedOptions]=\"orderOptions\" (change)=\"onChange($event)\"></st-two-list-selection>\r\n      </div>\r\n      <br><br><br>\r\n\r\n      <br><br>\r\n      <h2>With loading at bottom</h2>\r\n      <div style=\"width: 855px; height: 570px\">\r\n         <st-two-list-selection [allElements]=\"completeUserList\" [(selectedElements)]=\"selectedUserList\" [config]=\"configWithCheckAll\" [editable]=\"true\"\r\n             (numItemsSelectedAll)=\"onNumItemsAll($event)\" (numItemsSelectedSelected)=\"onNumItemsSelected($event)\" qaTag=\"container-list\"\r\n             [hasAllListAll]=\"true\" [hasAllListSelected]=\"true\" [isLoading]=\"isLoading\" [itemAll]=\"itemAll\" [moveAllToSelectedButton]=\"false\"\r\n             [moveAllToAllButton]=\"false\" [showSearchNumber]=\"0\" [orderSelectedOptions]=\"orderOptions\" (change)=\"onChange($event)\" (scrollBottomAll)=\"onScrollBottomAll($event)\"></st-two-list-selection>\r\n      </div>\r\n      <br><br><br>\r\n\r\n   </section>\r\n\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StTwoListSelectionDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTwoListSelectionDemoModule", function() { return StTwoListSelectionDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_two_list_selection_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-two-list-selection-demo */ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.ts");
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




var StTwoListSelectionDemoModule = /** @class */ (function () {
    function StTwoListSelectionDemoModule() {
    }
    StTwoListSelectionDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTwoListSelectionModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_two_list_selection_demo__WEBPACK_IMPORTED_MODULE_3__["StTwoListSelectionDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_two_list_selection_demo__WEBPACK_IMPORTED_MODULE_3__["StTwoListSelectionDemoComponent"]]
        })
    ], StTwoListSelectionDemoModule);
    return StTwoListSelectionDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.page-header span {\n  color: #999; }\n:host /deep/ .example-options {\n  margin-left: 30px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXR3by1saXN0LXNlbGVjdGlvbi1kZW1vL3N0LXR3by1saXN0LXNlbGVjdGlvbi1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10d28tbGlzdC1zZWxlY3Rpb24tZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC10d28tbGlzdC1zZWxlY3Rpb24tZGVtb1xcc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FBQ0g7RUFDRSxZQUFXLEVBQ1o7QUFHRDtFQUNHLGtCQUFpQixFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10d28tbGlzdC1zZWxlY3Rpb24tZGVtby9zdC10d28tbGlzdC1zZWxlY3Rpb24tZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLnBhZ2UtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzk5OTsgfVxuXG46aG9zdCAvZGVlcC8gLmV4YW1wbGUtb3B0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbi5wYWdlLWhlYWRlciBzcGFue1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5leGFtcGxlLW9wdGlvbnMge1xyXG4gICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.ts ***!
  \********************************************************************************/
/*! exports provided: StTwoListSelectionDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTwoListSelectionDemoComponent", function() { return StTwoListSelectionDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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


var StTwoListSelectionDemoComponent = /** @class */ (function () {
    function StTwoListSelectionDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-two-list-selection-demo/st-two-list-selection-demo.html',
            ts: 'demo/st-two-list-selection-demo/st-two-list-selection-demo.ts',
            component: 'lib/st-two-list-selection/st-two-list-selection.component.ts'
        };
        this.completeUserList = [];
        this.selectedUserList = [];
        this.isLoading = true;
        this.config = {
            allElementsListTitle: 'All element',
            allElementsSearchPlaceholder: 'Search...',
            selectedElementsListTitle: 'Selected elements',
            selectedElementsSearchPlaceholder: 'Search...'
        };
        this.configWithCheckAll = {
            allElementsListTitle: 'All element',
            allElementsListSubtitle: '0 users',
            allElementsSearchPlaceholder: 'Search...',
            fetchingDataText: 'Fetching more users',
            orderPlaceholder: 'Order by alphabet',
            selectedElementsListTitle: 'Selected elements',
            selectedElementsListSubtitle: '0 users',
            selectedElementsSearchPlaceholder: 'Search...'
        };
        this.configWithMenuOption = {
            allElementsListTitle: 'All element',
            allElementsSearchPlaceholder: 'Search...',
            menuOptionList: [
                { label: 'Example action', icon: 'icon-datetime', value: 'example' }
            ],
            selectedElementsListTitle: 'Selected elements',
            selectedElementsSearchPlaceholder: 'Search...'
        };
        this.orderOptions = [
            {
                label: 'A-Z',
                value: 1
            },
            {
                label: 'Z-A',
                value: 2
            }
        ];
        this.fillLists();
    }
    StTwoListSelectionDemoComponent.prototype.onChange = function (event) {
        if (this.completeUserList.length === 0) {
            this.configWithCheckAll.allElementsListSubtitle = "0 users";
        }
        else {
            this.configWithCheckAll.allElementsListSubtitle = "0/" + this.completeUserList.length + " users selected";
        }
        if (this.selectedUserList.length === 0) {
            this.configWithCheckAll.selectedElementsListSubtitle = "0 users";
        }
        else {
            this.configWithCheckAll.selectedElementsListSubtitle = "0/" + this.selectedUserList.length + " users selected";
        }
    };
    StTwoListSelectionDemoComponent.prototype.onNumItemsAll = function (event) {
        this.configWithCheckAll.allElementsListSubtitle = event + "/" + this.completeUserList.length + " users selected";
    };
    StTwoListSelectionDemoComponent.prototype.onNumItemsSelected = function (event) {
        this.configWithCheckAll.selectedElementsListSubtitle = event + "/" + this.selectedUserList.length + " users selected";
    };
    StTwoListSelectionDemoComponent.prototype.onScrollBottomAll = function (event) {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            var cloneList = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](_this.completeUserList);
            for (var i = 1; i <= 10; i++) {
                cloneList.push({ id: cloneList.length + i, name: "User-" + (cloneList.length + i) });
            }
            _this.completeUserList = cloneList;
            _this._cd.markForCheck();
        }, 1000);
    };
    StTwoListSelectionDemoComponent.prototype.onSelectItemNonEditable = function (event) {
        console.log("Selected item " + JSON.stringify(event));
    };
    StTwoListSelectionDemoComponent.prototype.showSelectedElements = function () {
        console.log(JSON.stringify(this.selectedUserList.map(function (item) { return item.name; })));
    };
    StTwoListSelectionDemoComponent.prototype.selectExtraLabel = function (el) {
        el.event.stopImmediatePropagation();
        console.log('Selected label', el);
    };
    StTwoListSelectionDemoComponent.prototype.changeOrder = function (order) {
        console.log('change order, ', order);
    };
    StTwoListSelectionDemoComponent.prototype.fillLists = function () {
        for (var i = 0; i < 300; i++) {
            this.completeUserList.push({ id: i, name: "User-" + i });
            if (i % 4 === 0) {
                this.selectedUserList.push(lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](this.completeUserList[i]));
            }
        }
        this.itemAll = { id: this.completeUserList.length, name: 'All', itemAll: true };
    };
    StTwoListSelectionDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'two-list-selection-demo',
            template: __webpack_require__(/*! ./st-two-list-selection-demo.html */ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.html"),
            styles: [__webpack_require__(/*! ./st-two-list-selection-demo.scss */ "./src/app/demos/st-two-list-selection-demo/st-two-list-selection-demo.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StTwoListSelectionDemoComponent);
    return StTwoListSelectionDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-two-list-selection-demo-st-two-list-selection-demo-module.js.map