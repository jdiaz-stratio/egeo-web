(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-search-demo-st-search-demo-module"],{

/***/ "./src/app/demos/st-search-demo/st-search-demo.html":
/*!**********************************************************!*\
  !*** ./src/app/demos/st-search-demo/st-search-demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-fluid col-md-12 search-demo\">\r\n      <div class=\"search-container\">\r\n\r\n         <div class=\"search-example\">\r\n            <h3>Normal search:</h3>\r\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"></st-search>\r\n         </div>\r\n\r\n         <div class=\"search-example\">\r\n            <h3>Search without icon:</h3>\r\n            <st-search [placeholder]=\"placeholder\" [showIcon]=\"false\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"></st-search>\r\n         </div>\r\n         <div class=\"search-example\">\r\n            <h3>With filter select:</h3>\r\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\r\n                [filterOptions]=\"[\r\n                     { label: 'All', value: 1 },\r\n                     { label: 'Type ', value: 2 },\r\n                     { label: 'Color', value: 3 }\r\n                  ]\"\r\n                (search)=\"onSearchResult($event)\"></st-search>\r\n            <h3>Disabled:</h3>\r\n            <st-search [placeholder]=\"placeholder\" [disabled]=\"true\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\r\n                [filterOptions]=\"[\r\n                     { label: 'All', value: 1 },\r\n                     { label: 'Type ', value: 2 },\r\n                     { label: 'Color', value: 3 }\r\n                  ]\"\r\n                (search)=\"onSearchResult($event)\"></st-search>\r\n         </div>\r\n\r\n         <div class=\"search-example\">\r\n            <h3>Live Search false:</h3>\r\n            <st-search [placeholder]=\"placeholder\" [qaTag]=\"qaTag\" [value]=\"searched\" [debounce]=\"debounceTime\" [minLength]=\"minLength\" (search)=\"onSearchResult($event)\"\r\n                [liveSearch]=\"false\"></st-search>\r\n         </div>\r\n\r\n         <div class=\"search-example\">\r\n            <h3>Disabled:</h3>\r\n            <st-search placeholder=\"Text for search with clear button\" [value]=\"searched\" [qaTag]=\"qaTag\" [debounce]=\"debounceTime\" [minLength]=\"minLength\"\r\n                [disabled]=\"true\" (search)=\"onSearchResult($event)\"></st-search>\r\n         </div>\r\n\r\n         <div class=\"search-example\">\r\n            <h3>Autocomplete:</h3>\r\n            <st-search placeholder=\"Text for search with clear button\" [value]=\"searchedAutocomplete\" [qaTag]=\"qaTag\" [debounce]=\"debounceTime\"\r\n                [minLength]=\"minLength\" [autocompleteList]=\"filteredMenu\" [withAutocomplete]=\"true\" [emptyAutocompleteListMessage]=\"'There are no matches for your search. Please, try it again with another term.'\"\r\n                (search)=\"searchWithAutocompleteSearch($event)\"></st-search>\r\n         </div>\r\n\r\n      </div>\r\n      <div class=\"option\">\r\n         <span class=\"option-title\">Search value: </span>\r\n         <span class=\"option-value\">normal {{searched}}</span>\r\n         <span class=\"option-value\">autocomplete {{searchedAutocomplete}}</span>\r\n      </div>\r\n      <div class=\"option\">\r\n         <span class=\"option-title\">debounce: </span>\r\n         <input type=\"number\" [(ngModel)]=\"debounceTime\" min=\"0\" class=\"debounceTime\">\r\n      </div>\r\n      <div class=\"option\">\r\n         <span class=\"option-title\">minLength: </span>\r\n         <input type=\"number\" [(ngModel)]=\"minLength\" min=\"0\" class=\"debounceTime\">\r\n      </div>\r\n   </section>\r\n\r\n</st-docs>\r\n"

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

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.search-demo {\n  display: flex;\n  flex-direction: column; }\n.search-container {\n  width: 280px;\n  margin-bottom: 50px; }\n.search-example {\n  margin-bottom: 20px; }\nh3 {\n  margin-bottom: 5px;\n  padding: 0; }\n.option {\n  margin-bottom: 10px; }\n.option-value {\n  margin-left: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlYXJjaC1kZW1vL3N0LXNlYXJjaC1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWFyY2gtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC1zZWFyY2gtZGVtb1xcc3Qtc2VhcmNoLWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FBRUg7RUFDRyxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3hCO0FBRUQ7RUFDRyxhQUFZO0VBQ1osb0JBQW1CLEVBQ3JCO0FBRUQ7RUFDRyxvQkFBbUIsRUFDckI7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixXQUFVLEVBQ1o7QUFFRDtFQUNHLG9CQUFtQixFQUNyQjtBQUVEO0VBQ0csaUJBQWdCLEVBQ2xCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlYXJjaC1kZW1vL3N0LXNlYXJjaC1kZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc2VhcmNoLWRlbW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG5cbi5zZWFyY2gtZXhhbXBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuaDMge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDA7IH1cblxuLm9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLm9wdGlvbi12YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi5zZWFyY2gtZGVtbyB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgd2lkdGg6IDI4MHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWV4YW1wbGUge1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdmFsdWUge1xyXG4gICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbiJdfQ== */"

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