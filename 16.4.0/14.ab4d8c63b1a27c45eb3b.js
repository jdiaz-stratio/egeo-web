(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+QFJ":function(t,e,n){"use strict";n.r(e);var o=n("CcnG"),i=n("Ip0R"),r=n("gIcY"),s=n("dIas"),c=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){this.configDoc={html:"demo/st-switch-demo/st-switch-demo.html",ts:"demo/st-switch-demo/st-switch-demo.ts",component:"lib/st-switch/st-switch.component.ts"},this.model=!1,this.loading=!0,this.form=new r.d({switch:new r.c({value:this.model,disabled:!1},r.l.required)})}return t=c([Object(o.Component)({selector:"st-switch-demo",template:n("Cd2G"),styles:[n("PAPQ")],changeDetection:o.ChangeDetectionStrategy.OnPush}),a("design:paramtypes",[])],t)}();n.d(e,"StSwitchDemoModule",function(){return d});var h=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},d=function(){function t(){}return t=h([Object(o.NgModule)({imports:[i.CommonModule,s.U,r.k,r.e,s.j.withComponents({components:[l]}),s.k],declarations:[l]})],t)}()},Cd2G:function(t,e){t.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\r\n   <section class="container-liquid">\r\n      <form [formGroup]="form" novalidate autocomplete="off">\r\n         <h1>Switch with label at left</h1>\r\n         <st-switch class="swicth-demo" contextualHelp="this is a contextual help" name="switch-1" label="Enabled switch" formControlName="switch"\r\n             qaTag="enabled-switch-1"></st-switch>\r\n      </form>\r\n\r\n      <button class="button button-primary" (click)="form.controls[\'switch\'].enable()">\r\n         <span>ENABLE SWITCH</span>\r\n      </button>\r\n      <button class="button button-secondary-gray" (click)="form.controls[\'switch\'].disable()">\r\n         <span>DISABLE SWITCH</span>\r\n      </button>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <h1>Disabled switch without a form control</h1>\r\n      <st-switch class="swicth-demo" name="switch-2" [disabled]="true" label="Disabled switch" [(ngModel)]="model"></st-switch>\r\n      <br>\r\n   </section>\r\n</st-docs>\r\n'},PAPQ:function(t,e){t.exports="@charset \"UTF-8\";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.loading-content {\n  width: 100%;\n  min-height: 400px;\n  padding: 10%; }\n.content {\n  width: 100%;\n  min-height: 400px;\n  padding: 0;\n  line-height: 400px; }\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\n.swicth-demo {\n  display: block;\n  margin-bottom: 15px; }\n"}}]);