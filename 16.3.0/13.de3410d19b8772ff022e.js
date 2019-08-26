(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CC32:function(e,t,n){"use strict";n.r(t);var a=n("Ip0R"),l=n("CcnG"),s=n("dIas"),o=n("LvDl"),i=function(e,t,n,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,n,o):l(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){this.configDoc={html:"demo/st-table-demo/st-table-demo.component.html",ts:"demo/st-table-demo/st-table-demo.component.ts",component:"lib/st-table/st-table.component.ts"},this.smallTableFields=[{id:"id",label:"Id"},{id:"name",label:"Name"},{id:"lastName",label:"Last Name"}],this.fields=[{id:"id",label:"Id"},{id:"name",label:"Name"},{id:"lastName",label:"Last Name"},{id:"phone",label:"Phone"},{id:"company",label:"Company"},{id:"completedProfile",label:"Completed profile"}],this.header=!0,this.data=[{id:"4545-df56-s341",name:"Antonio",lastName:"L\xf3pez",phone:60052520145,company:"Stratio",completedProfile:"100%"},{id:"4545-df56-s342",name:"Marina",lastName:"Lara",phone:600456520145,company:"Stratio",completedProfile:"20%"},{id:"4545-df56-s343",name:"\xc1lvaro",lastName:"Garc\xeda",phone:60052320145,company:"Stratio",completedProfile:"10%"},{id:"4545-df56-s344",name:"Marina",lastName:"Gonz\xe1lez",phone:600455640145,company:"Stratio",completedProfile:"50%"},{id:"4545-df56-s345",name:"Pepe",lastName:"Guerrero",phone:6005276845,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s346",name:"Mar\xeda",lastName:"Rodr\xedguez",phone:60065620145,company:"Stratio",completedProfile:"70%"}],this.selectedCheckboxes=[[],[]],this.visibleCheckboxes=[[],[]],this.sortedData=Object(o.cloneDeep)(this.data)}return e.prototype.onSelectRow=function(e,t,n){n[t]=e.checked},e.prototype.changeCheckBoxVisibility=function(e,t,n){this.visibleCheckboxes[t][n]=e},e.prototype.isCheckBoxVisible=function(e,t){return this.visibleCheckboxes[e][t]||this.selectedCheckboxes[e].indexOf(!0)>-1},e.prototype.thereAreSomeCheckboxesChecked=function(e){return this.selectedCheckboxes[e].indexOf(!0)>-1},e.prototype.onSelectAll=function(e,t){this.selectedCheckboxes[t]=[];for(var n=0;n<this.data.length;++n)this.selectedCheckboxes[t].push(e)},e.prototype.onSortTable=function(e){var t=e.type===s.b.ASC?1:-1;this.sortedData=this.data.slice().sort(function(n,a){return n[e.orderBy].toString().localeCompare(a[e.orderBy].toString())*t})},e=i([Object(l.Component)({template:n("Hlq1"),styles:[n("w6z5")]}),r("design:paramtypes",[])],e)}();n.d(t,"StTableDemoModule",function(){return b});var d=function(e,t,n,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,n,o):l(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},b=function(){function e(){}return e=d([Object(l.NgModule)({imports:[a.CommonModule,s.V,s.i,s.j.withComponents({components:[c]}),s.k],declarations:[c]})],e)}()},Hlq1:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\n   <section class="container-liquid demo-layout">\n      <p class="introduction">Tables are structured grids of information that help users understand large amounts of\n         data.</p>\n      <span class="separator"></span>\n      <h1 class="title">Design and behaviour</h1>\n      <p class="paragraph">When a user needs to understand, manipulate, or edit a group of information that is\n         text-based\n         and has the same content structure you use a Table component. Table\u2019s main content can be of two main types:\n         Normal content tables and file system content. Depending on the type of table\u2019s content some options will be\n         available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\n         items\n         are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\n         items\n         on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the table\n         type allows folder / files navigation. In that case too a first folder with two dots allows the user go back to\n         the parent folder.\n      </p>\n\n      <h1 class="title">Normal content table design and behaviour</h1>\n      <p class="paragraph">They can have two rows of items before the table header.\n         On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\n         On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You can\n         choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\n         toolbar\n         icons and a CTA, please, place your CTA as the latest element of the row.\n         When the user scrolls and reach the header of the table, this element will remain sticked to the main header\n         while\n         scrolling so the user always know what kind of data is seeing on the current table. On scroll up the subheader\n         will appear. To understand better this behaviour please interact with the following tables</p>\n\n\n         <h2 class="subtitle">Selectable tables</h2>\n      <p class="paragraph"> Tables can be configured to stand up or not the selected rows.</p>\n      <div class="row">\n         <div class="col-sm-6 col-lg-6 col-xs-12">\n            <st-table [fields]="smallTableFields"\n                      [sortable]="false"\n                      [selectableAll]="thereAreSomeCheckboxesChecked(0)"\n                      (selectAll)="onSelectAll($event, 0)">\n               <tr st-table-row *ngFor="let userData of data; let index = index"\n                   [selected]="selectedCheckboxes[0][index]"\n                   (mouseenter)="changeCheckBoxVisibility(true, 0, index)"\n                   (mouseleave)="changeCheckBoxVisibility(false, 0, index)">\n\n                  <td st-table-cell class="clickable" st-table-row-content>\n                     <st-checkbox *ngIf="isCheckBoxVisible(0, index)" class="st-table__checkbox"\n                                  [checked]="selectedCheckboxes[0][index]"\n                                  (change)="onSelectRow($event, index, selectedCheckboxes[0])">\n                     </st-checkbox>\n                     <label>{{userData.id}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.name}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.lastName}}</label>\n                  </td>\n                  <td st-table-row-hover>\n                     <i class="icon icon-ellipsis"></i>\n                  </td>\n               </tr>\n            </st-table>\n         </div>\n         <div class="col-sm-6 col-lg-6 col-xs-12">\n\n            <st-table [fields]="smallTableFields"\n                      [sortable]="false"\n                      [selectableAll]="thereAreSomeCheckboxesChecked(0)"\n                      [hasHoverMenu]="true"\n                      (selectAll)="onSelectAll($event, 0)">\n               <tr st-table-row *ngFor="let userData of data; let index = index"\n                   [selected]="selectedCheckboxes[0][index]"\n                   [standUpSelected]="false"\n                   (mouseenter)="changeCheckBoxVisibility(true, 0, index)"\n                   (mouseleave)="changeCheckBoxVisibility(false, 0, index)">\n                  <td st-table-cell class="clickable" st-table-row-content>\n                     <st-checkbox *ngIf="isCheckBoxVisible(0, index)" class="st-table__checkbox"\n                                  [checked]="selectedCheckboxes[0][index]"\n                                  (change)="onSelectRow($event, index, selectedCheckboxes[0])">\n                     </st-checkbox>\n                     <label>{{userData.id}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.name}}</label>\n                  </td>\n                  <td st-table-cell st-table-row-content>\n                     <label>{{userData.lastName}}</label>\n                  </td>\n                  <td st-table-row-hover>\n                     <i class="icon icon-ellipsis"></i>\n                  </td>\n               </tr>\n            </st-table>\n         </div>\n      </div>\n      <h2 class="subtitle">Table with custom theme</h2>\n      <p class="paragraph"> Custom classes can be added to native table in order to customize its look. There is a predefined theme called <b>white</b> and it is normally used to navigation tables</p>\n\n      <st-table [fields]="fields" [sortable]="false"\n                [selectableAll]="thereAreSomeCheckboxesChecked(1)"\n                customClasses="white"\n                (selectAll)="onSelectAll($event, 1)">\n         <tr st-table-row *ngFor="let userData of data; let index = index" [selected]="selectedCheckboxes[1][index]"\n             (mouseenter)="changeCheckBoxVisibility(true, 1, index)"\n             (mouseleave)="changeCheckBoxVisibility(false, 1, index)">\n            <td st-table-cell st-table-row-content>\n               <st-checkbox *ngIf="isCheckBoxVisible(1, index)" class="st-table__checkbox"\n                            [checked]="selectedCheckboxes[1][index]"\n                            (change)="onSelectRow($event, index, selectedCheckboxes[1])">\n               </st-checkbox>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <i class="icon icon-ellipsis"></i>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class="subtitle">Sortable table</h2>\n      <p class="paragraph">Table can be configured as sortable or not. Moreover, it allows to configure only specific fields as sortable </p>\n      <st-table [fields]="fields" (changeOrder)="onSortTable($event)"\n                customClasses="white">\n         <tr st-table-row *ngFor="let userData of sortedData; let index = index">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n\n            <td st-table-row-hover>\n               <i class="icon icon-ellipsis"></i>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class="subtitle">Table with fixed header</h2>\n      <p class="paragraph">In order to fix the header, it is needed to set the input \'fixedHeader\' to true and specify to st-table tag from outside <i><b>"display:flex; height: \'the desired height\'</b></i>"</p>\n\n      <st-table [fields]="fields" [sortable]="false" [fixedHeader]="true" [hasHoverMenu]="false" class="table--fixed-header">\n         <tr st-table-row *ngFor="let userData of data">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class="subtitle">Table without header</h2>\n      <st-table [fields]="fields" [header]="false">\n         <tr st-table-row *ngFor="let userData of data">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <i class="icon icon-arrow2_right"></i>\n            </td>\n         </tr>\n      </st-table>\n\n      <h2 class="subtitle">Table with complex hover actions and the custom class \'separated rows\'</h2>\n      <st-table [fields]="fields" [sortable]="false" customClasses="separated-rows" qaTag="table-qa-tag">\n         <tr st-table-row *ngFor="let userData of data">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n            <td st-table-row-hover>\n               <button class="button button-toolbar"><i class="icon-circle-check"></i></button>\n               <button class="button button-toolbar"><i class="icon-download"></i></button>\n            </td>\n         </tr>\n      </st-table>\n\n      <h2 class="subtitle">Table with special content (charts, images)</h2>\n      <st-table [fields]="fields" [hasHoverMenu]="false">\n         <tr st-table-row *ngFor="let userData of data">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <img style="width: 50px;" src="assets/images/stratio.png">\n            </td>\n            <td st-table-cell st-table-row-content>\n               <div style="width: 25px;  height: 25px;">\n                  <svg viewBox="0 0 100 100" style="display: block; width: 100%;">\n                     <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="1"\n                           fill-opacity="0"></path>\n                     <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="rgb(55,181,228)"\n                           stroke-width="6" fill-opacity="0"\n                           style="stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;"></path>\n                  </svg>\n               </div>\n            </td>\n         </tr>\n      </st-table>\n\n   </section>\n\n</st-docs>\n'},w6z5:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 24px;\n  vertical-align: text-top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 350px; }\n'}}]);