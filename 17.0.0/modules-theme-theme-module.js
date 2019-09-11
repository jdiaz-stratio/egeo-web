(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-theme-theme-module"],{

/***/ "./src/app/modules/theme/colors/color/color.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n\r\n<div class=\"color\" (click)=\"onClick()\">\r\n   <div [style.background-color]=\"color.hex\" class=\"color-sample\"></div>\r\n   <div class=\"name\">\r\n      <span>{{color.name}}</span>\r\n      <span>{{color.hex}}</span>\r\n      <span>{{rgb}}</span>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/colors/color/color.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.color {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ffffff;\n  height: 170px;\n  width: 170px;\n  margin: 2px;\n  padding: 15px; }\n.color .color-sample {\n    height: 60px;\n    width: 100px;\n    margin-bottom: 10px; }\n.color .name {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-weight: normal;\n    font-size: 0.875rem;\n    color: #777777; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL2NvbG9yLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2NvbG9ycy9jb2xvci9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXG1vZHVsZXNcXHRoZW1lXFxjb2xvcnNcXGNvbG9yXFxjb2xvci5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvY29sb3IvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvY29sb3IvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKR0g7RUFDRyxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQiwwQkVzQmlCO0VGckJqQixjQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCxjQUFhLEVBZ0JmO0FBeEJEO0lBV00sYUFBWTtJQUNaLGFBQVk7SUFDWixvQkFBbUIsRUFDckI7QUFkSjtJQWlCTSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsb0JHSjZCO0lISzdCLGVFYWMsRUZaaEIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvY29sb3IvY29sb3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi5jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDE1cHg7IH1cbiAgLmNvbG9yIC5jb2xvci1zYW1wbGUge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAuY29sb3IgLm5hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiAjNzc3Nzc3OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG4uY29sb3Ige1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcclxuICAgaGVpZ2h0OiAxNzBweDtcclxuICAgd2lkdGg6IDE3MHB4O1xyXG4gICBtYXJnaW46IDJweDtcclxuICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgIC5jb2xvci1zYW1wbGUge1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgfVxyXG5cclxuICAgLm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXh4c21hbGw7XHJcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC0wOTtcclxuICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdGF0dXM6XHJcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGlucHV0czpcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/theme/colors/color/color.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.ts ***!
  \*****************************************************/
/*! exports provided: ColorDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDemoComponent", function() { return ColorDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/app/modules/theme/utils.ts");
/* harmony import */ var _colors_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors.model */ "./src/app/modules/theme/colors/colors.model.ts");
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



var ColorDemoComponent = /** @class */ (function () {
    function ColorDemoComponent() {
        this.copyColorName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ColorDemoComponent.prototype.onClick = function () {
        var name = "$" + this.color.name;
        var result = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"])(name);
        if (result) {
            this.copyColorName.emit(name);
        }
    };
    Object.defineProperty(ColorDemoComponent.prototype, "rgb", {
        get: function () {
            return "rgb(" + this.color.rgb.r + ", " + this.color.rgb.g + ", " + this.color.rgb.b + ")";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _colors_model__WEBPACK_IMPORTED_MODULE_2__["Color"])
    ], ColorDemoComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ColorDemoComponent.prototype, "copyColorName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ColorDemoComponent.prototype, "textElement", void 0);
    ColorDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'color-demo',
            template: __webpack_require__(/*! ./color.html */ "./src/app/modules/theme/colors/color/color.html"),
            styles: [__webpack_require__(/*! ./color.scss */ "./src/app/modules/theme/colors/color/color.scss")]
        })
    ], ColorDemoComponent);
    return ColorDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.html":
/*!**************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"head\">\r\n   <div class=\"app-limit header-container\">\r\n      <egeo-title title=\"Colors\"></egeo-title>\r\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\r\n         {{notification}}\r\n         <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\r\n      </div>\r\n      <st-search placeholder=\"Search color\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\r\n   </div>\r\n</div>\r\n<div class=\"list\">\r\n   <div *ngFor=\"let colorGroup of ((colorsList | async) || [])\" class=\"group\">\r\n      <span class=\"subtitle\">{{colorGroup[0].category}}</span>\r\n      <div class=\"category\">\r\n         <div *ngFor=\"let color of colorGroup | stFilterList:searchBy:searchValue\">\r\n            <color-demo [color]=\"color\" (copyColorName)=\"onCopyColorName($event)\"></color-demo>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/colors/colors.model.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.model.ts ***!
  \******************************************************/
/*! exports provided: Color, RGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
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
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());

var RGB = /** @class */ (function () {
    function RGB() {
    }
    return RGB;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  background-color: #ffffff;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #3c3c3c;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcY29sb3JzXFxjb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfaW5kZXguc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2NvbG9ycy9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2NvbG9ycy9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdGO0VBQ0csWUFBVyxFQUNiO0FBRUQ7RUFDRyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsUUFBTztFQUNQLDBCRWNnQjtFRmJoQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQTBDcEI7QUFyREQ7SUFjTSxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLG9CQUFtQixFQUNyQjtBQWpCSjtJQW9CTSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGFBQVk7SUFDWixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLDBCRUhhO0lGSWIsZUUzQndCO0lGNEJ4QixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixvREFBbUQ7SUFDbkQsaUJBQWdCO0lBQ2hCLG9CR3BCNEI7SUhxQjVCLG1CQUFrQjtJQUNsQix3QkFBdUIsRUFZekI7QUE5Q0o7TUFvQ1Msa0JBQWlCLEVBQ25CO0FBckNQO01Bd0NTLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsVUFBUztNQUNULGVFZlU7TUZnQlYsbUJHbkN3QixFSG9DMUI7QUE3Q1A7SUFpRE0saUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDbkI7QUFJSjtFQUNHLGlCQUFnQixFQUNsQjtBQUVGO0VBQ0csY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLFlBQVc7RUFDWCxvQkFBbUIsRUFlckI7QUFwQkQ7SUFRTSxpQkFBZ0I7SUFDaEIsb0JHN0Q2QjtJSDhEN0IsZUVyQ2M7SUZzQ2QsMkJBQTBCO0lBQzFCLG1CQUFrQixFQUNwQjtBQWJKO0lBZ0JNLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsZ0JBQWUsRUFDakI7QUFHSDtFQUNHLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ25CIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzUycHg7IH1cbiAgLmhlYWQgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZCAubm90aWZpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNjE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMxMjhiZGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgLmhlYWQgc3Qtc2VhcmNoIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLmdyb3VwIC5zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAuZ3JvdXAgLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuIEBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG4gOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcblxyXG4gLmhlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1MnB4O1xyXG5cclxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICB3aWR0aDogNjE0cHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcclxuICAgICAgIGNvbG9yOiAkYWN0aW9uLXByaW1hcnktZGVmYXVsdDtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xNSk7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5jbG9zZS1idXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogJG5ldXRyYWwtMDY7XHJcbiAgICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdC1zZWFyY2gge1xyXG4gICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG4gdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuIH1cclxuXHJcbi5ncm91cCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAuc3VidGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U7XHJcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC0xMTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgfVxyXG5cclxuICAgLmNhdGVnb3J5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICB9XHJcbn1cclxuXHJcbiAubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiB9XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdGF0dXM6XHJcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGlucHV0czpcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/theme/colors/colors.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.service.ts ***!
  \********************************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
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



var ColorsService = /** @class */ (function () {
    function ColorsService(http) {
        this.http = http;
    }
    ColorsService.prototype.getColorsList = function () {
        var _this = this;
        return this.http.get(location.pathname + 'assets/_colors.scss', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (text) { return _this.getColors(text); }));
    };
    ColorsService.prototype.getColors = function (text) {
        var _this = this;
        var colors = [];
        text = text.replace(/\/\*\*(.|[\r\n])*\*\//g, '');
        var lines = text.split(/\n/);
        var group = '';
        var regex = /\$(.*?)\:\s*?\#(.*?)\s*\!/;
        var execResult;
        lines.forEach(function (line) {
            if (line.startsWith('//')) {
                group = line.substring(2, line.length - 1).trim();
            }
            else if (line.startsWith('$')) {
                execResult = regex.exec(line);
                var color = '';
                var hex = '';
                if (execResult) {
                    colors.push({
                        category: group,
                        name: execResult[1] || '',
                        hex: '#' + execResult[2] || '',
                        rgb: _this.hexToRgb('#' + execResult[2])
                    });
                }
            }
        });
        return colors;
    };
    ColorsService.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };
    ColorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.ts":
/*!************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.ts ***!
  \************************************************/
/*! exports provided: ColorsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsDemoComponent", function() { return ColorsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors.service */ "./src/app/modules/theme/colors/colors.service.ts");
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



var ColorsDemoComponent = /** @class */ (function () {
    function ColorsDemoComponent(_service, _cd) {
        var _this = this;
        this._service = _service;
        this._cd = _cd;
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
        this.colorsList = this._service.getColorsList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (list) { return _this.getGroupedList(list); }));
    }
    ColorsDemoComponent.prototype.onSearchResult = function (searchData) {
        this.searchValue = searchData.text;
    };
    ColorsDemoComponent.prototype.onCopyColorName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    ColorsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    ColorsDemoComponent.prototype.getGroupedList = function (list) {
        var groups = {};
        list.forEach(function (color) {
            if (!groups[color.category]) {
                groups[color.category] = [];
            }
            groups[color.category].push(color);
        });
        return Object.keys(groups).map(function (key) { return groups[key]; });
    };
    ColorsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    ColorsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    ColorsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    ColorsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    ColorsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'colors-demo',
            template: __webpack_require__(/*! ./colors.html */ "./src/app/modules/theme/colors/colors.html"),
            styles: [__webpack_require__(/*! ./colors.scss */ "./src/app/modules/theme/colors/colors.scss")]
        }),
        __metadata("design:paramtypes", [_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ColorsDemoComponent);
    return ColorsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.html":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n\r\n<div class=\"font\" (click)=\"onClick()\">\r\n   <div class=\"name\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\">\r\n      <span class=\"font-name\">{{font.name}}:</span>\r\n      <span class=\"font-value\">{{font.value}}</span>\r\n      <span *ngIf=\"hasFontPixels\" >{{font.pixels}}</span>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.font {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  font-weight: 400;\n  font-size: 0.875rem; }\n.font .name {\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    color: #777777; }\n.font .font-name {\n    margin-right: 10px; }\n.font .font-value {\n    margin-right: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL2ZvbnQvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcZm9udHNcXGZvbnRcXGZvbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2luZGV4LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL2ZvbnQvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL2ZvbnQvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUpHSDtFQUNHLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsb0JHV2dDLEVIS2xDO0FBdEJEO0lBU00sY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsZUV1QmMsRUZ0QmhCO0FBYko7SUFnQk0sbUJBQWtCLEVBQ3BCO0FBakJKO0lBb0JNLG1CQUFrQixFQUNwQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL2ZvbnQvZm9udC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLmZvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxuICAuZm9udCAubmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzc3Nzc3NzsgfVxuICAuZm9udCAuZm9udC1uYW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgLmZvbnQgLmZvbnQtdmFsdWUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxuLmZvbnQge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHhzbWFsbDtcclxuXHJcbiAgIC5uYW1lIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMDk7XHJcbiAgIH1cclxuXHJcbiAgIC5mb250LW5hbWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5mb250LXZhbHVlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5AaW1wb3J0ICdmb250cyc7XHJcbkBpbXBvcnQgJ3NldHRpbmdzJztcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gYnJhbmQ6XHJcbiRicmFuZDogIzM3YjVlNCAhZGVmYXVsdDtcclxuXHJcbi8vIGFjdGlvbjpcclxuJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ6IzEyOGJkZSAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDE6ICAgI2YzZjZmOCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDQ6ICAgI2FhYjdjNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDc6ICAgIzBmMWIyNyAhZGVmYXVsdDtcclxuXHJcbi8vIHN0YXR1czpcclxuJHN0YXR1cy1zdWNjZXNzLWRlZmF1bHQ6ICAgIzJjY2U5MyAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICAgI2ZhOTMyZiAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0OiAgI2VjNDQ1YyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMTogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNDogI2U1ZTVlNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNzogI2I1YjViNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogIzU1NTU1NSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMzogIzExMTExMSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gaW5wdXRzOlxyXG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxyXG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gei1pbmRleFxyXG5cclxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxyXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XHJcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xyXG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xyXG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.ts ***!
  \**************************************************/
/*! exports provided: FontDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontDemoComponent", function() { return FontDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/app/modules/theme/utils.ts");
/* harmony import */ var _fonts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts.model */ "./src/app/modules/theme/fonts/fonts.model.ts");
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



var FontDemoComponent = /** @class */ (function () {
    function FontDemoComponent() {
        this.copyFontName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FontDemoComponent.prototype.onClick = function () {
        var result = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"])(this.font.name);
        if (result) {
            this.copyFontName.emit(this.font.name);
        }
    };
    Object.defineProperty(FontDemoComponent.prototype, "fontFamily", {
        get: function () {
            return this.font.category === _fonts_model__WEBPACK_IMPORTED_MODULE_2__["CATEGORY"].FONT_FAMILY ? this.font.value : 'Nunito Sans';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontDemoComponent.prototype, "fontSize", {
        get: function () {
            return this.font.category === _fonts_model__WEBPACK_IMPORTED_MODULE_2__["CATEGORY"].FONT_SIZE ? this.font.value : '1rem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontDemoComponent.prototype, "hasFontPixels", {
        get: function () {
            return this.font && this.font.pixels !== undefined && this.font.pixels !== null && this.font.pixels.trim().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _fonts_model__WEBPACK_IMPORTED_MODULE_2__["Font"])
    ], FontDemoComponent.prototype, "font", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FontDemoComponent.prototype, "copyFontName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FontDemoComponent.prototype, "textElement", void 0);
    FontDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'font-demo',
            template: __webpack_require__(/*! ./font.html */ "./src/app/modules/theme/fonts/font/font.html"),
            styles: [__webpack_require__(/*! ./font.scss */ "./src/app/modules/theme/fonts/font/font.scss")]
        })
    ], FontDemoComponent);
    return FontDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.html":
/*!************************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"head\">\r\n   <div class=\"app-limit header-container\">\r\n      <egeo-title title=\"Fonts\"></egeo-title>\r\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\r\n         {{notification}}\r\n         <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\r\n      </div>\r\n      <st-search placeholder=\"Search font\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\r\n   </div>\r\n</div>\r\n<div class=\"list\">\r\n   <div *ngFor=\"let fontGroup of fontsList\" class=\"group\">\r\n      <span class=\"subtitle\">{{categoryToString(fontGroup[0].category)}}</span>\r\n      <div class=\"category\">\r\n         <div *ngFor=\"let font of fontGroup | stFilterList:searchBy:searchValue\">\r\n            <font-demo [font]=\"font\" (copyFontName)=\"onCopyFontName($event)\"></font-demo>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.model.ts ***!
  \****************************************************/
/*! exports provided: CATEGORY, Font, FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
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
var CATEGORY;
(function (CATEGORY) {
    CATEGORY[CATEGORY["FONT_FAMILY"] = 0] = "FONT_FAMILY";
    CATEGORY[CATEGORY["FONT_SIZE"] = 1] = "FONT_SIZE";
    CATEGORY[CATEGORY["LINE_HEIGHT"] = 2] = "LINE_HEIGHT";
})(CATEGORY || (CATEGORY = {}));
var Font = /** @class */ (function () {
    function Font() {
    }
    return Font;
}());

var FONTS = [
    // Font family
    [
        { category: CATEGORY.FONT_FAMILY, name: '$egeo-nunito-sans', value: 'Nunito Sans' }
    ],
    // Font size
    [
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-giant', value: '2rem', pixels: '32px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxxlarge', value: '1.813rem', pixels: '29px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxlarge', value: '1.563rem', pixels: '25px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xlarge', value: '1.375rem', pixels: '22px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-large', value: '1.25rem', pixels: '20px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-medium', value: '1.125rem', pixels: '18px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-small', value: '1rem', pixels: '16px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xsmall', value: '0.938rem', pixels: '15px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxsmall', value: '0.875rem', pixels: '14px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxxsmall', value: '0.75rem', pixels: '12px' }
    ],
    // Line height:
    [
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-giant', value: '2.375rem', pixels: '38px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxlarge', value: '2.125rem', pixels: '34px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxlarge', value: '1.875rem', pixels: '30px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xlarge', value: '1.625rem', pixels: '26px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-large', value: '1.5rem', pixels: '24px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-medium', value: '1.375rem', pixels: '22px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-small', value: '1.313rem', pixels: '21px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xsmall', value: '1.25rem', pixels: '20px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxsmall', value: '1.125rem', pixels: '18px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxsmall', value: '1.063rem', pixels: '17px' }
    ]
];


/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.scss":
/*!************************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  background-color: #ffffff;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #3c3c3c;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udHMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcZm9udHNcXGZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfaW5kZXguc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9mb250cy9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdGO0VBQ0csWUFBVyxFQUNiO0FBRUQ7RUFDRyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsUUFBTztFQUNQLDBCRWNnQjtFRmJoQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQTBDcEI7QUFyREQ7SUFjTSxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLG9CQUFtQixFQUNyQjtBQWpCSjtJQW9CTSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGFBQVk7SUFDWixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLDBCRUhhO0lGSWIsZUUzQndCO0lGNEJ4QixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixvREFBbUQ7SUFDbkQsaUJBQWdCO0lBQ2hCLG9CR3BCNEI7SUhxQjVCLG1CQUFrQjtJQUNsQix3QkFBdUIsRUFZekI7QUE5Q0o7TUFvQ1Msa0JBQWlCLEVBQ25CO0FBckNQO01Bd0NTLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsVUFBUztNQUNULGVFZlU7TUZnQlYsbUJHbkN3QixFSG9DMUI7QUE3Q1A7SUFpRE0saUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDbkI7QUFJSjtFQUNHLGlCQUFnQixFQUNsQjtBQUVGO0VBQ0csY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLFlBQVc7RUFDWCxvQkFBbUIsRUFlckI7QUFwQkQ7SUFRTSxpQkFBZ0I7SUFDaEIsb0JHN0Q2QjtJSDhEN0IsZUVyQ2M7SUZzQ2QsMkJBQTBCO0lBQzFCLG1CQUFrQixFQUNwQjtBQWJKO0lBZ0JNLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsZ0JBQWUsRUFDakI7QUFHSDtFQUNHLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFDbkIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9mb250cy9mb250cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzUycHg7IH1cbiAgLmhlYWQgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZCAubm90aWZpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNjE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMxMjhiZGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgLmhlYWQgc3Qtc2VhcmNoIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLmdyb3VwIC5zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAuZ3JvdXAgLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG4gQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbiA6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbiAuaGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUycHg7XHJcblxyXG4gICAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubm90aWZpY2F0aW9uIHtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgIHdpZHRoOiA2MTRweDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICAgICAgY29sb3I6ICRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0O1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiAkbmV1dHJhbC0wNjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLWxhcmdlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0LXNlYXJjaCB7XHJcbiAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gfVxyXG5cclxuLmdyb3VwIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhsYXJnZTtcclxuICAgICAgY29sb3I6ICRuZXV0cmFsLTExO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICB9XHJcblxyXG4gICAuY2F0ZWdvcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgIH1cclxufVxyXG5cclxuIC5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gfVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3RhdHVzOlxyXG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBpbnB1dHM6XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.ts ***!
  \**********************************************/
/*! exports provided: FontsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsDemoComponent", function() { return FontsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fonts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.model */ "./src/app/modules/theme/fonts/fonts.model.ts");
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


var FontsDemoComponent = /** @class */ (function () {
    function FontsDemoComponent(_cd) {
        this._cd = _cd;
        this.fontsList = _fonts_model__WEBPACK_IMPORTED_MODULE_1__["FONTS"];
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
    }
    FontsDemoComponent.prototype.onSearchResult = function (search) {
        this.searchValue = search;
    };
    FontsDemoComponent.prototype.onCopyFontName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    FontsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    FontsDemoComponent.prototype.categoryToString = function (category) {
        switch (category) {
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].FONT_FAMILY: return 'Font Family';
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].FONT_SIZE: return 'Font Size';
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].LINE_HEIGHT: return 'Line Height';
            default: return '';
        }
    };
    FontsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    FontsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    FontsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    FontsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    FontsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fonts-demo',
            template: __webpack_require__(/*! ./fonts.html */ "./src/app/modules/theme/fonts/fonts.html"),
            styles: [__webpack_require__(/*! ./fonts.scss */ "./src/app/modules/theme/fonts/fonts.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FontsDemoComponent);
    return FontsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/grid/grid.html":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n\r\n<section class=\"container-fluid grid-example\">\r\n   <egeo-title title=\"Grid\"></egeo-title>\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\r\n            <div class=\"row col-example-12 demo-box\">\r\n               <div class=\"col-lg-12, col-md-12 col-sm-12 col-xs-12\">\r\n                  <p class=\"box\">12</p>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"row col-example-6 demo-box\">\r\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <p class=\"box\">6</p>\r\n               </div>\r\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                  <p class=\"box\">6</p>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"row col-example-4 demo-box\">\r\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                  <p class=\"box\">4</p>\r\n               </div>\r\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                  <p class=\"box\">4</p>\r\n               </div>\r\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                  <p class=\"box\">4</p>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"row col-example-2 demo-box\">\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"row col-example-1 demo-box\">\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n                  <p class=\"box\">1</p>\r\n               </div>\r\n            </div>\r\n\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n\r\n\r\n<section class=\"container-fluid\">\r\n      <egeo-title title=\"Reponsive grid example\"></egeo-title>\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\r\n            <div class=\"row col-example-2 demo-box\">\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\r\n                  <p class=\"box\">2</p>\r\n               </div>\r\n            </div>\r\n\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n\r\n<section>\r\n   <egeo-title title=\"Without row class\"></egeo-title>\r\n   <div class=\"container-fluid example\">\r\n      <div class=\"col-md-6\">\r\n         <p class=\"box\">6</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n         <p class=\"box\">6</p>\r\n      </div>\r\n   </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/grid/grid.scss":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%; }\nsection {\n  margin-bottom: 40px; }\n.grid-example {\n  font-weight: 400;\n  font-size: 1rem;\n  margin-bottom: 40px;\n  margin-left: 2px; }\n.example .row {\n  background-color: #bce7f6; }\n.example .box {\n  margin: 10px 0;\n  background-color: #77b1e1;\n  color: #555555;\n  text-align: center; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2dyaWQvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcZ3JpZFxcZ3JpZC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9ncmlkL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfaW5kZXguc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9ncmlkL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVyxFQUNiO0FBRUQ7RUFDRyxvQkFBbUIsRUFDckI7QUFFRDtFQUNHLGlCQUFnQjtFQUNoQixnQkdLNEI7RUhKNUIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNsQjtBQUVEO0VBRU0sMEJFcUN5QixFRnBDM0I7QUFISjtFQUtNLGVBQWM7RUFDZCwwQkVrQ3lCO0VGakN6QixlRWNjO0VGYmQsbUJBQWtCLEVBQ3BCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5ncmlkLWV4YW1wbGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7IH1cblxuLmV4YW1wbGUgLnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2U3ZjY7IH1cblxuLmV4YW1wbGUgLmJveCB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdiMWUxO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG46aG9zdCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmdyaWQtZXhhbXBsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXNtYWxsO1xyXG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZSB7XHJcbiAgIC5yb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWlzYy1hcXVhLWxpZ2h0O1xyXG4gICB9XHJcbiAgIC5ib3gge1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pc2MtdmlraW5nO1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtMTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdGF0dXM6XHJcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGlucHV0czpcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/theme/grid/grid.ts":
/*!********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.ts ***!
  \********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-demo',
            template: __webpack_require__(/*! ./grid.html */ "./src/app/modules/theme/grid/grid.html"),
            styles: [__webpack_require__(/*! ./grid.scss */ "./src/app/modules/theme/grid/grid.scss")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n\r\n<div class=\"icon-demo\" (click)=\"onClick()\" >\r\n   <i [ngClass]=\"getClass()\" class=\"glyph\"></i>\r\n   <span class=\"name\" #nameEl>icon-{{icon.name}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%;\n  display: flex; }\n.icon-demo {\n  padding: 20px;\n  color: #555555;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 125px;\n  margin: 2px; }\n.icon-demo:hover {\n    background-color: rgba(9, 121, 196, 0.8);\n    color: #e7f3fb; }\n.icon-demo .glyph {\n    align-self: center;\n    padding: 10px;\n    font-size: 1.563rem;\n    font-family: \"ico_stratio\"; }\n.icon-demo .name {\n    font-weight: 400;\n    font-family: \"Nunito Sans\";\n    font-size: 0.938rem;\n    align-self: center;\n    white-space: pre-wrap;\n    text-align: center;\n    padding-top: 3px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vaWNvbi1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbi1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcbW9kdWxlc1xcdGhlbWVcXGljb25zLWRlbW9cXGljb24tZGVtb1xcaWNvbi1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbi1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfaW5kZXguc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL2ljb24tZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVztFQUNYLGNBQWEsRUFDZjtBQUVEO0VBQ0csY0FBYTtFQUNiLGVFNkJpQjtFRjVCakIsMEJFa0JpQjtFRmpCakIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osY0FBYTtFQUNiLFlBQVcsRUF1QmI7QUEvQkQ7SUFXTSx5Q0VaeUI7SUZhekIsZUVaeUIsRUZhM0I7QUFiSjtJQWdCTSxtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLG9CR1o2QjtJSGE3QiwyQkdsQjJDLEVIbUI3QztBQXBCSjtJQXVCTSxpQkFBZ0I7SUFDaEIsMkJHeEIyQztJSHlCM0Msb0JHZDZCO0lIZTdCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNsQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbi1kZW1vL2ljb24tZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uaWNvbi1kZW1vIHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgbWFyZ2luOiAycHg7IH1cbiAgLmljb24tZGVtbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCAxMjEsIDE5NiwgMC44KTtcbiAgICBjb2xvcjogI2U3ZjNmYjsgfVxuICAuaWNvbi1kZW1vIC5nbHlwaCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjU2M3JlbTtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiOyB9XG4gIC5pY29uLWRlbW8gLm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbjpob3N0IHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pY29uLWRlbW8ge1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBjb2xvcjogJG5ldXRyYWwtMTA7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICB3aWR0aDogMTIwcHg7XHJcbiAgIGhlaWdodDogMTI1cHg7XHJcbiAgIG1hcmdpbjogMnB4O1xyXG5cclxuICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGFjdGlvbi1wcmltYXJ5LWhvdmVyLCAwLjgpO1xyXG4gICAgICBjb2xvcjogJGFjdGlvbi1wcmltYXJ5LWxpZ2h0O1xyXG4gICB9XHJcblxyXG4gICAuZ2x5cGgge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xyXG4gICB9XHJcblxyXG4gICAubmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1udW5pdG8tc2FucztcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5AaW1wb3J0ICdmb250cyc7XHJcbkBpbXBvcnQgJ3NldHRpbmdzJztcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gYnJhbmQ6XHJcbiRicmFuZDogIzM3YjVlNCAhZGVmYXVsdDtcclxuXHJcbi8vIGFjdGlvbjpcclxuJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ6IzEyOGJkZSAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDE6ICAgI2YzZjZmOCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDQ6ICAgI2FhYjdjNCAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcclxuJGFjdGlvbi1zZWNvbmRhcnktMDc6ICAgIzBmMWIyNyAhZGVmYXVsdDtcclxuXHJcbi8vIHN0YXR1czpcclxuJHN0YXR1cy1zdWNjZXNzLWRlZmF1bHQ6ICAgIzJjY2U5MyAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcclxuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICAgI2ZhOTMyZiAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcclxuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0OiAgI2VjNDQ1YyAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcclxuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMTogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNDogI2U1ZTVlNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNzogI2I1YjViNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogIzU1NTU1NSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMzogIzExMTExMSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gaW5wdXRzOlxyXG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxyXG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gei1pbmRleFxyXG5cclxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxyXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XHJcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xyXG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xyXG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts ***!
  \*****************************************************************/
/*! exports provided: IconDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDemoComponent", function() { return IconDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var IconDemoComponent = /** @class */ (function () {
    function IconDemoComponent() {
        this.copyIconName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IconDemoComponent.prototype.getClass = function () {
        return "icon-" + this.icon.name;
    };
    IconDemoComponent.prototype.getCode = function () {
        return String.fromCharCode(+this.icon.key.substr(2));
    };
    IconDemoComponent.prototype.onClick = function () {
        this.copyToClipboard();
    };
    IconDemoComponent.prototype.copyToClipboard = function () {
        var success = true;
        var range = document.createRange();
        var selection;
        var inputEL = this.textElement.nativeElement;
        var text = inputEL.textContent;
        // For IE.
        if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
        else {
            // Create a temporary element off screen.
            var tmpElem = document.createElement('div');
            tmpElem.style.position = 'fixed';
            tmpElem.style.left = '-1000px';
            tmpElem.style.top = '-1000px';
            // Add the input value to the temp element.
            tmpElem.textContent = text;
            document.body.appendChild(tmpElem);
            // Select temp element.
            range.selectNodeContents(tmpElem);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            // Lets copy.
            try {
                success = document.execCommand('copy', false, null);
            }
            catch (e) {
                console.error('Error on copy: ', e);
            }
            tmpElem.remove();
            if (success && text) {
                this.copyIconName.emit(text);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IconDemoComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IconDemoComponent.prototype, "copyIconName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IconDemoComponent.prototype, "textElement", void 0);
    IconDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-demo',
            template: __webpack_require__(/*! ./icon-demo.html */ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html"),
            styles: [__webpack_require__(/*! ./icon-demo.scss */ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss")]
        })
    ], IconDemoComponent);
    return IconDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"head\">\r\n   <div class=\"app-limit header-container\">\r\n      <egeo-title title=\"Icons\"></egeo-title>\r\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\r\n         {{notification}} <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\r\n      </div>\r\n      <st-search placeholder=\"Search Icon\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\r\n   </div>\r\n</div>\r\n<div class=\"list\">\r\n   <div *ngFor=\"let icon of ((iconList | async) || []) | stFilterList:searchBy:searchValue\">\r\n      <icon-demo [icon]=\"icon\" (copyIconName)=\"onCopyIconName($event)\"></icon-demo>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%;\n  font-family: \"Nunito Sans\"; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px;\n  background-color: #ffffff; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29ucy1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcaWNvbnMtZGVtb1xcaWNvbnMtZGVtby5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfaW5kZXguc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVztFQUNYLDJCR0c4QyxFSEZoRDtBQUVEO0VBQ0csY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQiwwQkVVaUIsRUZnQ25CO0FBckREO0lBY00sY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFDckI7QUFqQko7SUFvQk0sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiwwQkVKYztJRktkLGVFNUJ5QjtJRjZCekIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsb0RBQW1EO0lBQ25ELGlCQUFnQjtJQUNoQixvQkdyQjZCO0lIc0I3QixtQkFBa0I7SUFDbEIsd0JBQXVCLEVBWXpCO0FBOUNKO01Bb0NTLGtCQUFpQixFQUNuQjtBQXJDUDtNQXdDUyxtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFVBQVM7TUFDVCxlRWhCVztNRmlCWCxtQkdwQ3lCLEVIcUMzQjtBQTdDUDtJQWlETSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUNuQjtBQUdKO0VBQ0csaUJBQWdCLEVBQ2xCO0FBRUQ7RUFDRyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbnMtZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzUycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cbiAgLmhlYWQgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZCAubm90aWZpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNjE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMxMjhiZGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgLmhlYWQgc3Qtc2VhcmNoIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuIEBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG46aG9zdCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBmb250LWZhbWlseTogJGVnZW8tbnVuaXRvLXNhbnM7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgdG9wOiA2MHB4O1xyXG4gICBsZWZ0OiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzNTJweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XHJcblxyXG4gICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB9XHJcblxyXG4gICAubm90aWZpY2F0aW9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDYxNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xyXG4gICAgICBjb2xvcjogJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xNSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhzbWFsbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaSB7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICBjb2xvcjogJG5ldXRyYWwtMDY7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLWxhcmdlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHN0LXNlYXJjaCB7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xyXG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3RhdHVzOlxyXG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xyXG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xyXG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xyXG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBpbnB1dHM6XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.service.ts ***!
  \****************************************************************/
/*! exports provided: IconsDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsDemoService", function() { return IconsDemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
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



var IconsDemoService = /** @class */ (function () {
    function IconsDemoService(_http) {
        this._http = _http;
    }
    IconsDemoService.prototype.getIconList = function () {
        var _this = this;
        return this._http.get(location.pathname + 'assets/_stratio_fonticon.scss', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (text) { return _this.getIconClasses(text); }));
    };
    IconsDemoService.prototype.getIconClasses = function (text) {
        var result = [];
        var execResult;
        var regex = /.icon-(.*?)\:before {[\n].*?content: \"(.*?)"/gm;
        do {
            execResult = regex.exec(text);
            if (execResult) {
                result.push({
                    name: execResult[1] || '',
                    key: execResult[2] || ''
                });
            }
        } while (execResult);
        return result.sort(this.strComparator);
    };
    IconsDemoService.prototype.strComparator = function (item1, item2) {
        return item1.name.localeCompare(item2.name);
    };
    IconsDemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconsDemoService);
    return IconsDemoService;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.ts ***!
  \********************************************************/
/*! exports provided: IconsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsDemoComponent", function() { return IconsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons_demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-demo.service */ "./src/app/modules/theme/icons-demo/icons-demo.service.ts");
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


var IconsDemoComponent = /** @class */ (function () {
    function IconsDemoComponent(_service, _cd) {
        this._service = _service;
        this._cd = _cd;
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
        this.iconList = this._service.getIconList();
    }
    IconsDemoComponent.prototype.onSearchResult = function (search) {
        this.searchValue = search.text;
    };
    IconsDemoComponent.prototype.onCopyIconName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    IconsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    IconsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    IconsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    IconsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    IconsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    IconsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icons-demo',
            template: __webpack_require__(/*! ./icons-demo.html */ "./src/app/modules/theme/icons-demo/icons-demo.html"),
            styles: [__webpack_require__(/*! ./icons-demo.scss */ "./src/app/modules/theme/icons-demo/icons-demo.scss")]
        }),
        __metadata("design:paramtypes", [_icons_demo_service__WEBPACK_IMPORTED_MODULE_1__["IconsDemoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], IconsDemoComponent);
    return IconsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/theme.html":
/*!******************************************!*\
  !*** ./src/app/modules/theme/theme.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"content\">\r\n   <demo-menu class=\"side-menu\" [options]=\"menu\"></demo-menu>\r\n   <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/theme.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/theme/theme.module.ts ***!
  \***********************************************/
/*! exports provided: routes, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _icons_demo_icon_demo_icon_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-demo/icon-demo/icon-demo */ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts");
/* harmony import */ var _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons-demo/icons-demo */ "./src/app/modules/theme/icons-demo/icons-demo.ts");
/* harmony import */ var _icons_demo_icons_demo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-demo/icons-demo.service */ "./src/app/modules/theme/icons-demo/icons-demo.service.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "./src/app/modules/theme/theme.ts");
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid */ "./src/app/modules/theme/grid/grid.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _colors_color_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colors/color/color */ "./src/app/modules/theme/colors/color/color.ts");
/* harmony import */ var _colors_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colors/colors */ "./src/app/modules/theme/colors/colors.ts");
/* harmony import */ var _colors_colors_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colors/colors.service */ "./src/app/modules/theme/colors/colors.service.ts");
/* harmony import */ var _fonts_font_font__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fonts/font/font */ "./src/app/modules/theme/fonts/font/font.ts");
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/fonts */ "./src/app/modules/theme/fonts/fonts.ts");
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















var routes = [
    {
        path: '', component: _theme__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'icons' },
            { path: 'icons', component: _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__["IconsDemoComponent"] },
            { path: 'colors', component: _colors_colors__WEBPACK_IMPORTED_MODULE_11__["ColorsDemoComponent"] },
            { path: 'fonts', component: _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__["FontsDemoComponent"] },
            { path: 'grid', component: _grid_grid__WEBPACK_IMPORTED_MODULE_8__["GridComponent"] }
        ]
    }
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSearchModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _theme__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"],
                _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__["IconsDemoComponent"],
                _icons_demo_icon_demo_icon_demo__WEBPACK_IMPORTED_MODULE_4__["IconDemoComponent"],
                _grid_grid__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
                _colors_colors__WEBPACK_IMPORTED_MODULE_11__["ColorsDemoComponent"],
                _colors_color_color__WEBPACK_IMPORTED_MODULE_10__["ColorDemoComponent"],
                _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__["FontsDemoComponent"],
                _fonts_font_font__WEBPACK_IMPORTED_MODULE_13__["FontDemoComponent"]
            ],
            providers: [
                _icons_demo_icons_demo_service__WEBPACK_IMPORTED_MODULE_6__["IconsDemoService"],
                _colors_colors_service__WEBPACK_IMPORTED_MODULE_12__["ColorsService"]
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/modules/theme/theme.scss":
/*!******************************************!*\
  !*** ./src/app/modules/theme/theme.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  width: 100%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvdGhlbWUuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxtb2R1bGVzXFx0aGVtZVxcdGhlbWUuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKSUg7RUFDRyxZQUFXLEVBQ2IiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS90aGVtZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxuXHJcbjpob3N0IHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdGF0dXM6XHJcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XHJcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGlucHV0czpcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/theme/theme.ts":
/*!****************************************!*\
  !*** ./src/app/modules/theme/theme.ts ***!
  \****************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var ThemeComponent = /** @class */ (function () {
    function ThemeComponent() {
        this.menu = [
            { label: 'Icons', url: '/theme/icons' },
            { label: 'Fonts', url: '/theme/fonts' },
            { label: 'Colors', url: '/theme/colors' },
            { label: 'Grid', url: '/theme/grid' }
        ];
    }
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-layout',
            template: __webpack_require__(/*! ./theme.html */ "./src/app/modules/theme/theme.html"),
            styles: [__webpack_require__(/*! ./theme.scss */ "./src/app/modules/theme/theme.scss")]
        })
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/utils.ts":
/*!****************************************!*\
  !*** ./src/app/modules/theme/utils.ts ***!
  \****************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
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
function copyToClipboard(value) {
    var success = true;
    var range = document.createRange();
    var selection;
    // For IE.
    if (window.clipboardData) {
        window.clipboardData.setData('Text', value);
        return true;
    }
    else {
        // Create a temporary element off screen.
        var tmpElem = document.createElement('div');
        tmpElem.style.position = 'fixed';
        tmpElem.style.left = '-1000px';
        tmpElem.style.top = '-1000px';
        // Add the input value to the temp element.
        tmpElem.textContent = value;
        document.body.appendChild(tmpElem);
        // Select temp element.
        range.selectNodeContents(tmpElem);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        // Lets copy.
        try {
            success = document.execCommand('copy', false, null);
        }
        catch (e) {
            console.error('Error on copy: ', e);
        }
        tmpElem.remove();
        return success;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-theme-theme-module.js.map