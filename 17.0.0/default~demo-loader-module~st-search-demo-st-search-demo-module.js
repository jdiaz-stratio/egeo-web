(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-search-demo-st-search-demo-module"],{

/***/ "./src/app/demos/st-search-demo/st-search-demo.html":
/*!**********************************************************!*\
  !*** ./src/app/demos/st-search-demo/st-search-demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-fluid col-md-12 search-demo\">\n      <div class=\"search-container\">\n\n         <div class=\"search-example\">\n            <h3>Normal search:</h3>\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"></st-search>\n         </div>\n\n         <div class=\"search-example\">\n            <h3>Search without icon:</h3>\n            <st-search [placeholder]=\"placeholder\" [showIcon]=\"false\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"></st-search>\n         </div>\n         <div class=\"search-example\">\n            <h3>With filter select:</h3>\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\n                [filterOptions]=\"[\n                     { label: 'All', value: 1 },\n                     { label: 'Type ', value: 2 },\n                     { label: 'Color', value: 3 }\n                  ]\"\n                (search)=\"onSearchResult($event)\"></st-search>\n            <h3>Disabled:</h3>\n            <st-search [placeholder]=\"placeholder\" [disabled]=\"true\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\n                [filterOptions]=\"[\n                     { label: 'All', value: 1 },\n                     { label: 'Type ', value: 2 },\n                     { label: 'Color', value: 3 }\n                  ]\"\n                (search)=\"onSearchResult($event)\"></st-search>\n         </div>\n\n         <div class=\"search-example\">\n            <h3>Live Search false:</h3>\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"\n                [liveSearch]=\"false\"></st-search>\n         </div>\n\n         <div class=\"search-example\">\n            <h3>Disabled:</h3>\n            <st-search placeholder=\"Text for search with clear button\" [value]=\"searched\" [qaTag]=\"qaTag\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\n                [disabled]=\"true\" (search)=\"onSearchResult($event)\"></st-search>\n         </div>\n\n         <div class=\"search-example\">\n            <h3>Autocomplete:</h3>\n            <st-search placeholder=\"Text for search with clear button\" [value]=\"searchedAutocomplete\" [qaTag]=\"qaTag\" [debounce]=\"debounceTime\"\n                [minLength]=\"minLength\" [autocompleteList]=\"filteredMenu\" [withAutocomplete]=\"true\" [emptyAutocompleteListMessage]=\"'There are no matches for your search. Please, try it again with another term.'\"\n                (search)=\"searchWithAutocompleteSearch($event)\"></st-search>\n         </div>\n\n      </div>\n      <div class=\"option\">\n         <span class=\"option-title\">Search value: </span>\n         <span class=\"option-value\">normal {{searched}}</span>\n         <span class=\"option-value\">autocomplete {{searchedAutocomplete}}</span>\n      </div>\n      <div class=\"option\">\n         <span class=\"option-title\">debounce: </span>\n         <input type=\"number\" [(ngModel)]=\"debounceTime\" min=\"0\" class=\"debounceTime\">\n      </div>\n      <div class=\"option\">\n         <span class=\"option-title\">minLength: </span>\n         <input type=\"number\" [(ngModel)]=\"minLength\" min=\"0\" class=\"debounceTime\">\n      </div>\n   </section>\n\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-search-demo/st-search-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-search-demo/st-search-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StSearchDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSearchDemoModule", function() { return StSearchDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_search_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-search-demo */ "./src/app/demos/st-search-demo/st-search-demo.ts");
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





var StSearchDemoModule = /** @class */ (function () {
    function StSearchDemoModule() {
    }
    StSearchDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSearchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_st_search_demo__WEBPACK_IMPORTED_MODULE_4__["StSearchDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"]
            ],
            declarations: [_st_search_demo__WEBPACK_IMPORTED_MODULE_4__["StSearchDemoComponent"]]
        })
    ], StSearchDemoModule);
    return StSearchDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-search-demo/st-search-demo.scss":
/*!**********************************************************!*\
  !*** ./src/app/demos/st-search-demo/st-search-demo.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.search-demo {\n  display: flex;\n  flex-direction: column; }\n.search-container {\n  width: 280px;\n  margin-bottom: 50px; }\n.search-example {\n  margin-bottom: 20px; }\nh3 {\n  margin-bottom: 5px;\n  padding: 0; }\n.option {\n  margin-bottom: 10px; }\n.option-value {\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlYXJjaC1kZW1vL3N0LXNlYXJjaC1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlYXJjaC1kZW1vL3N0LXNlYXJjaC1kZW1vLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQUVIO0VBQ0csY0FBYTtFQUNiLHVCQUFzQixFQUN4QjtBQUVEO0VBQ0csYUFBWTtFQUNaLG9CQUFtQixFQUNyQjtBQUVEO0VBQ0csb0JBQW1CLEVBQ3JCO0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsV0FBVSxFQUNaO0FBRUQ7RUFDRyxvQkFBbUIsRUFDckI7QUFFRDtFQUNHLGlCQUFnQixFQUNsQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWFyY2gtZGVtby9zdC1zZWFyY2gtZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLnNlYXJjaC1kZW1vIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuXG4uc2VhcmNoLWV4YW1wbGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbmgzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwOyB9XG5cbi5vcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5vcHRpb24tdmFsdWUge1xuICBtYXJnaW4tbGVmdDogNXB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi5zZWFyY2gtZGVtbyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICAgd2lkdGg6IDI4MHB4O1xuICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlYXJjaC1leGFtcGxlIHtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzIHtcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbi5vcHRpb24ge1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9wdGlvbi12YWx1ZSB7XG4gICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/demos/st-search-demo/st-search-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/demos/st-search-demo/st-search-demo.ts ***!
  \********************************************************/
/*! exports provided: StSearchDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSearchDemoComponent", function() { return StSearchDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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


var StSearchDemoComponent = /** @class */ (function () {
    function StSearchDemoComponent() {
        this.configDoc = {
            html: 'demo/st-search-demo/st-search-demo.html',
            ts: 'demo/st-search-demo/st-search-demo.ts',
            component: 'lib/st-search/st-search.component.ts'
        };
        this.placeholder = 'Text for search';
        this.qaTag = 'search';
        this.debounceTime = 0;
        this.minLength = 0;
        this.searched = '';
        this.searchedAutocomplete = '';
        this.menu = [
            { label: 'China', value: 'CN' },
            { label: 'Russia', value: 'RU' },
            { label: 'United States', value: 'US' },
            { label: 'Egypt', value: 'EG' },
            { label: 'Pa<b>na</b>ma', value: 'PA', hasHtml: true },
            { label: 'Canada', value: 'CA' },
            { label: 'Indonesia', value: 'ID' },
            { label: 'North Korea', value: 'KP' },
            { label: 'Chi<b>na</b>', value: 'CN', hasHtml: true },
            { label: 'France', value: 'FR' },
            { label: 'Burundi', value: 'BI' },
            { label: 'Poland', value: 'PL' },
            { label: 'Vanuatu', value: 'VU' },
            { label: 'Venezuela', value: 'VE' },
            { label: 'Indo<b>ne</b>sia', value: 'ID', hasHtml: true }
        ];
        this.filteredMenu = [];
    }
    StSearchDemoComponent.prototype.onSearchResult = function (value) {
        this.searched = value.text;
    };
    StSearchDemoComponent.prototype.filter = function (filterValue) {
        this.filteredMenu = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.menu.filter(function (country) { return country.label.toLowerCase().search(filterValue.text.toLowerCase()) > -1; }));
    };
    StSearchDemoComponent.prototype.searchWithAutocompleteSearch = function (searchValue) {
        this.searchedAutocomplete = searchValue.text;
        this.filter(searchValue);
    };
    StSearchDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-search-demo',
            template: __webpack_require__(/*! ./st-search-demo.html */ "./src/app/demos/st-search-demo/st-search-demo.html"),
            styles: [__webpack_require__(/*! ./st-search-demo.scss */ "./src/app/demos/st-search-demo/st-search-demo.scss")]
        })
    ], StSearchDemoComponent);
    return StSearchDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-search-demo-st-search-demo-module.js.map