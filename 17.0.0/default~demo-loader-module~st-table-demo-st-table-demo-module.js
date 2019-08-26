(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-table-demo-st-table-demo-module"],{

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid demo-layout\">\n      <p class=\"introduction\">Tables are structured grids of information that help users understand large amounts of\n         data.</p>\n      <span class=\"separator\"></span>\n      <h1 class=\"title\">Design and behaviour</h1>\n      <p class=\"paragraph\">When a user needs to understand, manipulate, or edit a group of information that is\n         text-based\n         and has the same content structure you use a Table component. Table’s main content can be of two main types:\n         Normal content tables and file system content. Depending on the type of table’s content some options will be\n         available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\n         items\n         are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\n         items\n         on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the table\n         type allows folder / files navigation. In that case too a first folder with two dots allows the user go back to\n         the parent folder.\n      </p>\n\n      <h1 class=\"title\">Normal content table design and behaviour</h1>\n      <p class=\"paragraph\">They can have two rows of items before the table header.\n         On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\n         On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You can\n         choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\n         toolbar\n         icons and a CTA, please, place your CTA as the latest element of the row.\n         When the user scrolls and reach the header of the table, this element will remain sticked to the main header\n         while\n         scrolling so the user always know what kind of data is seeing on the current table. On scroll up the subheader\n         will appear. To understand better this behaviour please interact with the following tables</p>\n\n\n         <h2 class=\"subtitle\">Selectable tables</h2>\n      <p class=\"paragraph\"> Tables can be configured to stand up or not the selected rows.</p>\n      <div class=\"row\">\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\n            <st-table [fields]=\"smallTableFields\"\n                      [sortable]=\"false\"\n                      [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\n                      (selectAll)=\"onSelectAll($event, 0)\">\n               <tr st-table-row *ngFor=\"let userData of data; let index = index\"\n                   [selected]=\"selectedCheckboxes[0][index]\"\n                   (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\n                   (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\n\n                  <td st-table-cell class=\"clickable\" st-table-row-content>\n                     <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\n                                  [checked]=\"selectedCheckboxes[0][index]\"\n                                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\n                     </st-checkbox>\n                     <label>{{userData.id}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.name}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.lastName}}</label>\n                  </td>\n                  <td st-table-row-hover>\n                     <i class=\"icon icon-ellipsis\"></i>\n                  </td>\n               </tr>\n            </st-table>\n         </div>\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\n\n            <st-table [fields]=\"smallTableFields\"\n                      [sortable]=\"false\"\n                      [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\n                      [hasHoverMenu]=\"true\"\n                      (selectAll)=\"onSelectAll($event, 0)\">\n               <tr st-table-row *ngFor=\"let userData of data; let index = index\"\n                   [selected]=\"selectedCheckboxes[0][index]\"\n                   [standUpSelected]=\"false\"\n                   (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\n                   (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\n                  <td st-table-cell class=\"clickable\" st-table-row-content>\n                     <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\n                                  [checked]=\"selectedCheckboxes[0][index]\"\n                                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\n                     </st-checkbox>\n                     <label>{{userData.id}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.name}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.lastName}}</label>\n                  </td>\n                  <td st-table-row-hover>\n                     <i class=\"icon icon-ellipsis\"></i>\n                  </td>\n               </tr>\n            </st-table>\n         </div>\n      </div>\n      <h2 class=\"subtitle\">Table with custom theme</h2>\n      <p class=\"paragraph\"> Custom classes can be added to native table in order to customize its look. There is a predefined theme called <b>white</b> and it is normally used to navigation tables</p>\n\n      <st-table [fields]=\"fields\" [sortable]=\"false\"\n                [selectableAll]=\"thereAreSomeCheckboxesChecked(1)\"\n                customClasses=\"white\"\n                (selectAll)=\"onSelectAll($event, 1)\">\n         <tr st-table-row *ngFor=\"let userData of data; let index = index\" [selected]=\"selectedCheckboxes[1][index]\"\n             (mouseenter)=\"changeCheckBoxVisibility(true, 1, index)\"\n             (mouseleave)=\"changeCheckBoxVisibility(false, 1, index)\">\n            <td st-table-cell st-table-row-content>\n               <st-checkbox *ngIf=\"isCheckBoxVisible(1, index)\" class=\"st-table__checkbox\"\n                            [checked]=\"selectedCheckboxes[1][index]\"\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[1])\">\n               </st-checkbox>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <i class=\"icon icon-ellipsis\"></i>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class=\"subtitle\">Sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific fields as sortable </p>\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\"\n                customClasses=\"white\">\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n\n            <td st-table-row-hover>\n               <i class=\"icon icon-ellipsis\"></i>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class=\"subtitle\">Sortable and selectable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable and selectable simultaneously</p>\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\"\n                [selectableAll]=\"thereAreSomeCheckboxesChecked(0)\"\n                [hasHoverMenu]=\"true\"\n                (selectAll)=\"onSelectAll($event, 0)\"\n                customClasses=\"white\">\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\"\n            [selected]=\"selectedCheckboxes[0][index]\"\n            (mouseenter)=\"changeCheckBoxVisibility(true, 0, index)\"\n            (mouseleave)=\"changeCheckBoxVisibility(false, 0, index)\">\n            <td class=\"clickable\" st-table-cell st-table-row-content>\n               <st-checkbox *ngIf=\"isCheckBoxVisible(0, index)\" class=\"st-table__checkbox\"\n                  [checked]=\"selectedCheckboxes[0][index]\"\n                  (click)=\"$event.stopPropagation()\"\n                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\n               </st-checkbox>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n\n            <td st-table-row-hover>\n               <i class=\"icon icon-ellipsis\"></i>\n            </td>\n         </tr>\n      </st-table>\n\n\n\n      <h2 class=\"subtitle\">Table with fixed header</h2>\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\n\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [hasHoverMenu]=\"false\" class=\"table--fixed-header\">\n         <tr st-table-row *ngFor=\"let userData of data\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class=\"subtitle\">Table without header</h2>\n      <st-table [fields]=\"fields\" [header]=\"false\">\n         <tr st-table-row *ngFor=\"let userData of data\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <i class=\"icon icon-arrow2_right\"></i>\n            </td>\n         </tr>\n      </st-table>\n\n      <h2 class=\"subtitle\">Table with complex hover actions and the custom class 'separated rows'</h2>\n      <st-table [fields]=\"fields\" [sortable]=\"false\" customClasses=\"separated-rows\" qaTag=\"table-qa-tag\">\n         <tr st-table-row *ngFor=\"let userData of data\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <button class=\"button button-toolbar\"><i class=\"icon-circle-check\"></i></button>\n               <button class=\"button button-toolbar\"><i class=\"icon-download\"></i></button>\n            </td>\n         </tr>\n      </st-table>\n\n      <h2 class=\"subtitle\">Table with special content (charts, images)</h2>\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"false\">\n         <tr st-table-row *ngFor=\"let userData of data\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <img style=\"width: 50px;\" src=\"assets/images/stratio.png\">\n            </td>\n            <td st-table-cell st-table-row-content>\n               <div style=\"width: 25px;  height: 25px;\">\n                  <svg viewBox=\"0 0 100 100\" style=\"display: block; width: 100%;\">\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"#eee\" stroke-width=\"1\"\n                           fill-opacity=\"0\"></path>\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"rgb(55,181,228)\"\n                           stroke-width=\"6\" fill-opacity=\"0\"\n                           style=\"stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;\"></path>\n                  </svg>\n               </div>\n            </td>\n         </tr>\n      </st-table>\n\n   </section>\n\n</st-docs>\n"

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 24px;\n  vertical-align: text-top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9zdC10YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUpJSDtFQUNHLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZix5QkFBd0IsRUFDMUI7QUFFRDtFQUNHLGtCQUFpQixFQUNuQjtBQUdFO0VBQ0csY0FBYTtFQUNiLGNBQWEsRUFDZiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10YWJsZS1kZW1vL3N0LXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDsgfVxuXG4uYnV0dG9uLXRvb2xiYXIge1xuICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxuXG4udGFibGUtLWZpeGVkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzUwcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxudGQgPiAuaWNvbi1lbGxpcHNpcyB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBmb250LXNpemU6IDI0cHg7XG4gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG5cbi5idXR0b24tdG9vbGJhciB7XG4gICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnRhYmxlIHtcbiAgICYtLWZpeGVkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgIH1cbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xuXG4vLyBzdGF0dXM6XG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBpbnB1dHM6XG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemU6XG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG5cbi8vLyBsaW5lLWhlaWdodDpcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */"

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