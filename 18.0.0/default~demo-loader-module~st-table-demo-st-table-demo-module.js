(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-table-demo-st-table-demo-module"],{

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n      <p class=\"introduction\">Tables are structured grids of information that help users understand large amounts of\r\n         data.</p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Design and behaviour</h1>\r\n      <p class=\"paragraph\">When a user needs to understand, manipulate, or edit a group of information that is\r\n         text-based\r\n         and has the same content structure you use a Table component. Table’s main content can be of two main types:\r\n         Normal content tables and file system content. Depending on the type of table’s content some options will be\r\n         available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\r\n         items\r\n         are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\r\n         items\r\n         on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the table\r\n         type allows folder / files navigation. In that case too a first folder with two dots allows the user go back to\r\n         the parent folder.\r\n      </p>\r\n\r\n      <h1 class=\"title\">Normal content table design and behaviour</h1>\r\n      <p class=\"paragraph\">They can have two rows of items before the table header.\r\n         On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\r\n         On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You can\r\n         choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\r\n         toolbar\r\n         icons and a CTA, please, place your CTA as the latest element of the row.\r\n         When the user scrolls and reach the header of the table, this element will remain sticked to the main header\r\n         while\r\n         scrolling so the user always know what kind of data is seeing on the current table. On scroll up the subheader\r\n         will appear. To understand better this behaviour please interact with the following tables</p>\r\n\r\n\r\n         <h2 class=\"subtitle\">Selectable tables</h2>\r\n      <p class=\"paragraph\"> Tables can be configured to stand up or not the selected rows.</p>\r\n      <div class=\"row\">\r\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\r\n            <st-table [fields]=\"smallTableFields\"\r\n                      [sortable]=\"false\"\r\n                      [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\r\n                      (selectAll)=\"onSelectAll($event, 0)\">\r\n               <tr st-table-row *ngFor=\"let userData of data; let index = index\"\r\n                   [selected]=\"selectedCheckboxes[0][index]\"\r\n                   (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\r\n                   (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\r\n\r\n                  <td st-table-cell class=\"clickable\" st-table-row-content>\r\n                     <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\r\n                                  [checked]=\"selectedCheckboxes[0][index]\"\r\n                                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                     </st-checkbox>\r\n                     <label>{{userData.id}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.name}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.lastName}}</label>\r\n                  </td>\r\n                  <td st-table-row-hover>\r\n                     <i class=\"icon icon-ellipsis\"></i>\r\n                  </td>\r\n               </tr>\r\n            </st-table>\r\n         </div>\r\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\r\n\r\n            <st-table [fields]=\"smallTableFields\"\r\n                      [sortable]=\"false\"\r\n                      [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\r\n                      [hasHoverMenu]=\"true\"\r\n                      (selectAll)=\"onSelectAll($event, 0)\">\r\n               <tr st-table-row *ngFor=\"let userData of data; let index = index\"\r\n                   [selected]=\"selectedCheckboxes[0][index]\"\r\n                   [standUpSelected]=\"false\"\r\n                   (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\r\n                   (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\r\n                  <td st-table-cell class=\"clickable\" st-table-row-content>\r\n                     <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\r\n                                  [checked]=\"selectedCheckboxes[0][index]\"\r\n                                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                     </st-checkbox>\r\n                     <label>{{userData.id}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.name}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.lastName}}</label>\r\n                  </td>\r\n                  <td st-table-row-hover>\r\n                     <i class=\"icon icon-ellipsis\"></i>\r\n                  </td>\r\n               </tr>\r\n            </st-table>\r\n         </div>\r\n      </div>\r\n      <h2 class=\"subtitle\">Table with custom theme</h2>\r\n      <p class=\"paragraph\"> Custom classes can be added to native table in order to customize its look. There is a predefined theme called <b>white</b> and it is normally used to navigation tables</p>\r\n\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\"\r\n                [selectableAll]=\"thereAreSomeCheckboxesChecked(1)\"\r\n                customClasses=\"white\"\r\n                (selectAll)=\"onSelectAll($event, 1)\">\r\n         <tr st-table-row *ngFor=\"let userData of data; let index = index\" [selected]=\"selectedCheckboxes[1][index]\"\r\n             (mouseenter)=\"changeCheckBoxVisibility(true, 1, index)\"\r\n             (mouseleave)=\"changeCheckBoxVisibility(false, 1, index)\">\r\n            <td st-table-cell st-table-row-content>\r\n               <st-checkbox *ngIf=\"isCheckBoxVisible(1, index)\" class=\"st-table__checkbox\"\r\n                            [checked]=\"selectedCheckboxes[1][index]\"\r\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[1])\">\r\n               </st-checkbox>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover>\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Sortable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific fields as sortable </p>\r\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\"\r\n                customClasses=\"white\">\r\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n\r\n            <td st-table-row-hover>\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Sortable and selectable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable and selectable simultaneously</p>\r\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\"\r\n                [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\r\n                [hasHoverMenu]=\"true\"\r\n                (selectAll)=\"onSelectAll($event, 0)\"\r\n                customClasses=\"white\">\r\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\"\r\n            [selected]=\"selectedCheckboxes[0][index]\"\r\n            (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\r\n            (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\r\n            <td class=\"clickable\" st-table-cell st-table-row-content>\r\n               <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\r\n                  [checked]=\"selectedCheckboxes[0][index]\"\r\n                  (click)=\"$event.stopPropagation()\"\r\n                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n               </st-checkbox>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n\r\n            <td st-table-row-hover>\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n\r\n\r\n      <h2 class=\"subtitle\">Table with fixed header</h2>\r\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\r\n\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [hasHoverMenu]=\"false\" class=\"table--fixed-header\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Table without header</h2>\r\n      <st-table [fields]=\"fields\" [header]=\"false\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover>\r\n               <i class=\"icon icon-arrow2_right\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with complex hover actions and the custom class 'separated rows'</h2>\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" customClasses=\"separated-rows\" qaTag=\"table-qa-tag\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover>\r\n               <button class=\"button button-toolbar\"><i class=\"icon-circle-check\"></i></button>\r\n               <button class=\"button button-toolbar\"><i class=\"icon-download\"></i></button>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with special content (charts, images)</h2>\r\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"false\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <img style=\"width: 50px;\" src=\"assets/images/stratio.png\">\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <div style=\"width: 25px;  height: 25px;\">\r\n                  <svg viewBox=\"0 0 100 100\" style=\"display: block; width: 100%;\">\r\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"#eee\" stroke-width=\"1\"\r\n                           fill-opacity=\"0\"></path>\r\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"rgb(55,181,228)\"\r\n                           stroke-width=\"6\" fill-opacity=\"0\"\r\n                           style=\"stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;\"></path>\r\n                  </svg>\r\n               </div>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n   </section>\r\n\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 24px;\n  vertical-align: text-top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 350px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtdGFibGUtZGVtb1xcc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10YWJsZS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKSUg7RUFDRyxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YseUJBQXdCLEVBQzFCO0FBRUQ7RUFDRyxrQkFBaUIsRUFDbkI7QUFHRTtFQUNHLGNBQWE7RUFDYixjQUFhLEVBQ2YiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9zdC10YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xudGQgPiAuaWNvbi1lbGxpcHNpcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7IH1cblxuLmJ1dHRvbi10b29sYmFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cblxuLnRhYmxlLS1maXhlZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM1MHB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxudGQgPiAuaWNvbi1lbGxpcHNpcyB7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuXHJcbi5idXR0b24tdG9vbGJhciB7XHJcbiAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAmLS1maXhlZC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5AaW1wb3J0ICdmb250cyc7XHJcbkBpbXBvcnQgJ3NldHRpbmdzJztcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gYnJhbmQ6XHJcbiRicmFuZDogIzM3YjVlNCAhZGVmYXVsdDtcclxuXHJcbi8vIGFjdGlvbjpcclxuJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ6IzEyOGJkZSAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDE6ICAgI2YzZjZmOCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDQ6ICAgI2FhYjdjNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDc6ICAgIzBmMWIyNyAhZGVmYXVsdDtcclxuXHJcbi8vIHN0YXR1czpcclxuJHN0YXR1cy1zdWNjZXNzLWRlZmF1bHQ6ICAgIzJjY2U5MyAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICAgI2ZhOTMyZiAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0OiAgI2VjNDQ1YyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMTogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNDogI2U1ZTVlNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNzogI2I1YjViNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogIzU1NTU1NSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMzogIzExMTExMSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gaW5wdXRzOlxyXG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxyXG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gei1pbmRleFxyXG5cclxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxyXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XHJcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xyXG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xyXG4kbWVudS16LWluZGV4OiA3NTAwICFkZWZhdWx0O1xyXG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: StTableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoComponent", function() { return StTableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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



var StTableDemoComponent = /** @class */ (function () {
    function StTableDemoComponent() {
        this.configDoc = {
            html: 'demo/st-table-demo/st-table-demo.component.html',
            ts: 'demo/st-table-demo/st-table-demo.component.ts',
            component: 'lib/st-table/st-table.component.ts'
        };
        this.smallTableFields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' }
        ];
        this.fields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' },
            { id: 'phone', label: 'Phone' },
            { id: 'company', label: 'Company' },
            { id: 'completedProfile', label: 'Completed profile' }
        ];
        this.header = true;
        this.data = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                completedProfile: '100%'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                completedProfile: '20%'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                completedProfile: '10%'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                completedProfile: '50%'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                completedProfile: '80%'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                completedProfile: '70%'
            }
        ];
        this.selectedCheckboxes = [[], []];
        this.visibleCheckboxes = [[], []];
        this.sortedData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.data);
    }
    // Selectable tables
    StTableDemoComponent.prototype.onSelectRow = function (event, rowIndex, selected) {
        selected[rowIndex] = event.checked;
    };
    StTableDemoComponent.prototype.changeCheckBoxVisibility = function (visible, tableNumber, position) {
        this.visibleCheckboxes[tableNumber][position] = visible;
    };
    StTableDemoComponent.prototype.isCheckBoxVisible = function (tablePosition, position) {
        return this.visibleCheckboxes[tablePosition][position] || this.selectedCheckboxes[tablePosition].indexOf(true) > -1;
    };
    StTableDemoComponent.prototype.thereAreSomeCheckboxesChecked = function (tablePosition) {
        return this.selectedCheckboxes[tablePosition].indexOf(true) > -1;
    };
    StTableDemoComponent.prototype.onSelectAll = function (selected, tablePosition) {
        this.selectedCheckboxes[tablePosition] = [];
        for (var i = 0; i < this.data.length; ++i) {
            this.selectedCheckboxes[tablePosition].push(selected);
        }
    };
    // Sortable tables
    StTableDemoComponent.prototype.onSortTable = function (order) {
        var reverseConst = order.type === _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["ORDER_TYPE"].ASC ? 1 : -1;
        this.sortedData = this.data.slice().sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
    };
    StTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./st-table-demo.component.html */ "./src/app/demos/st-table-demo/st-table-demo.component.html"),
            styles: [__webpack_require__(/*! ./st-table-demo.component.scss */ "./src/app/demos/st-table-demo/st-table-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StTableDemoComponent);
    return StTableDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoModule", function() { return StTableDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-table-demo.component */ "./src/app/demos/st-table-demo/st-table-demo.component.ts");
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




var StTableDemoModule = /** @class */ (function () {
    function StTableDemoModule() {
    }
    StTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]]
        })
    ], StTableDemoModule);
    return StTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-table-demo-st-table-demo-module.js.map