(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-theme-theme-module"],{

/***/ "./src/app/modules/theme/colors/color/color.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"color\" (click)=\"onClick()\">\n   <div [style.background-color]=\"color.hex\" class=\"color-sample\"></div>\n   <div class=\"name\">\n      <span>{{color.name}}</span>\n      <span>{{color.hex}}</span>\n      <span>{{rgb}}</span>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/theme/colors/color/color.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.color {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ffffff;\n  height: 170px;\n  width: 170px;\n  margin: 2px;\n  padding: 15px; }\n.color .color-sample {\n    height: 60px;\n    width: 100px;\n    margin-bottom: 10px; }\n.color .name {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-weight: normal;\n    font-size: 0.875rem;\n    color: #777777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL2NvbG9yLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL2NvbG9yLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsMEJFc0JpQjtFRnJCakIsY0FBYTtFQUNiLGFBQVk7RUFDWixZQUFXO0VBQ1gsY0FBYSxFQWdCZjtBQXhCRDtJQVdNLGFBQVk7SUFDWixhQUFZO0lBQ1osb0JBQW1CLEVBQ3JCO0FBZEo7SUFpQk0sY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLG9CR0o2QjtJSEs3QixlRWFjLEVGWmhCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL2NvbG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAxNXB4OyB9XG4gIC5jb2xvciAuY29sb3Itc2FtcGxlIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLmNvbG9yIC5uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogIzc3Nzc3NzsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxuLmNvbG9yIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xuICAgaGVpZ2h0OiAxNzBweDtcbiAgIHdpZHRoOiAxNzBweDtcbiAgIG1hcmdpbjogMnB4O1xuICAgcGFkZGluZzogMTVweDtcblxuICAgLmNvbG9yLXNhbXBsZSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxuXG4gICAubmFtZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsO1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTA5O1xuICAgfVxufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"head\">\n   <div class=\"app-limit header-container\">\n      <egeo-title title=\"Colors\"></egeo-title>\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n         {{notification}}\n         <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n      </div>\n      <st-search placeholder=\"Search color\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\n   </div>\n</div>\n<div class=\"list\">\n   <div *ngFor=\"let colorGroup of ((colorsList | async) || [])\" class=\"group\">\n      <span class=\"subtitle\">{{colorGroup[0].category}}</span>\n      <div class=\"category\">\n         <div *ngFor=\"let color of colorGroup | stFilterList:searchBy:searchValue\">\n            <color-demo [color]=\"color\" (copyColorName)=\"onCopyColorName($event)\"></color-demo>\n         </div>\n      </div>\n   </div>\n</div>\n"

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

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  background-color: #ffffff;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #3c3c3c;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2NvbG9ycy9jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FDVEg7Ozs7Ozs7OztHQVNHO0FKR0Y7RUFDRyxZQUFXLEVBQ2I7QUFFRDtFQUNHLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLFVBQVM7RUFDVCxRQUFPO0VBQ1AsMEJFY2dCO0VGYmhCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBMENwQjtBQXJERDtJQWNNLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsb0JBQW1CLEVBQ3JCO0FBakJKO0lBb0JNLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osYUFBWTtJQUNaLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsMEJFSGE7SUZJYixlRTNCd0I7SUY0QnhCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLG9EQUFtRDtJQUNuRCxpQkFBZ0I7SUFDaEIsb0JHcEI0QjtJSHFCNUIsbUJBQWtCO0lBQ2xCLHdCQUF1QixFQVl6QjtBQTlDSjtNQW9DUyxrQkFBaUIsRUFDbkI7QUFyQ1A7TUF3Q1MsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxVQUFTO01BQ1QsZUVmVTtNRmdCVixtQkduQ3dCLEVIb0MxQjtBQTdDUDtJQWlETSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUNuQjtBQUlKO0VBQ0csaUJBQWdCLEVBQ2xCO0FBRUY7RUFDRyxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsWUFBVztFQUNYLG9CQUFtQixFQWVyQjtBQXBCRDtJQVFNLGlCQUFnQjtJQUNoQixvQkc3RDZCO0lIOEQ3QixlRXJDYztJRnNDZCwyQkFBMEI7SUFDMUIsbUJBQWtCLEVBQ3BCO0FBYko7SUFnQk0sY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixnQkFBZSxFQUNqQjtBQUdIO0VBQ0csY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFDbkIiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvY29sb3JzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNTJweDsgfVxuICAuaGVhZCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5oZWFkIC5ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA2MTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzEyOGJkZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDFweCByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjkzOHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAuaGVhZCAubm90aWZpY2F0aW9uIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgICAuaGVhZCAubm90aWZpY2F0aW9uIC5jbG9zZS1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBjb2xvcjogI2NiY2JjYjtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuICAuaGVhZCBzdC1zZWFyY2gge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAuZ3JvdXAgLnN1YnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgY29sb3I6ICMzYzNjM2M7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4gIC5ncm91cCAuY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuIEBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbiA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0wMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzUycHg7XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgIHdpZHRoOiA2MTRweDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XG4gICAgICAgY29sb3I6ICRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0O1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xNSk7XG4gICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgIGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgIH1cblxuICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICRuZXV0cmFsLTA2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLWxhcmdlO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICBzdC1zZWFyY2gge1xuICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gfVxuXG5cbiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiB9XG5cbi5ncm91cCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U7XG4gICAgICBjb2xvcjogJG5ldXRyYWwtMTE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgIH1cblxuICAgLmNhdGVnb3J5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgfVxufVxuXG4gLmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"font\" (click)=\"onClick()\">\n   <div class=\"name\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\">\n      <span class=\"font-name\">{{font.name}}:</span>\n      <span class=\"font-value\">{{font.value}}</span>\n      <span *ngIf=\"hasFontPixels\" >{{font.pixels}}</span>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.font {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  font-weight: 400;\n  font-size: 0.875rem; }\n.font .name {\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    color: #777777; }\n.font .font-name {\n    margin-right: 10px; }\n.font .font-value {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkdXZ0MsRUhLbEM7QUF0QkQ7SUFTTSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixlRXVCYyxFRnRCaEI7QUFiSjtJQWdCTSxtQkFBa0IsRUFDcEI7QUFqQko7SUFvQk0sbUJBQWtCLEVBQ3BCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uZm9udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuODc1cmVtOyB9XG4gIC5mb250IC5uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNzc3Nzc3OyB9XG4gIC5mb250IC5mb250LW5hbWUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuICAuZm9udCAuZm9udC12YWx1ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG4uZm9udCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsO1xuXG4gICAubmFtZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC0wOTtcbiAgIH1cblxuICAgLmZvbnQtbmFtZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB9XG5cbiAgIC5mb250LXZhbHVlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgIH1cbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xuXG4vLyBzdGF0dXM6XG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBpbnB1dHM6XG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemU6XG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG5cbi8vLyBsaW5lLWhlaWdodDpcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"head\">\n   <div class=\"app-limit header-container\">\n      <egeo-title title=\"Fonts\"></egeo-title>\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n         {{notification}}\n         <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n      </div>\n      <st-search placeholder=\"Search font\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\n   </div>\n</div>\n<div class=\"list\">\n   <div *ngFor=\"let fontGroup of fontsList\" class=\"group\">\n      <span class=\"subtitle\">{{categoryToString(fontGroup[0].category)}}</span>\n      <div class=\"category\">\n         <div *ngFor=\"let font of fontGroup | stFilterList:searchBy:searchValue\">\n            <font-demo [font]=\"font\" (copyFontName)=\"onCopyFontName($event)\"></font-demo>\n         </div>\n      </div>\n   </div>\n</div>\n"

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

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  background-color: #ffffff;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #3c3c3c;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udHMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9mb250cy9mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUpHRjtFQUNHLFlBQVcsRUFDYjtBQUVEO0VBQ0csY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCwwQkVjZ0I7RUZiaEIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0IsRUEwQ3BCO0FBckREO0lBY00sY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFDckI7QUFqQko7SUFvQk0sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiwwQkVIYTtJRkliLGVFM0J3QjtJRjRCeEIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsb0RBQW1EO0lBQ25ELGlCQUFnQjtJQUNoQixvQkdwQjRCO0lIcUI1QixtQkFBa0I7SUFDbEIsd0JBQXVCLEVBWXpCO0FBOUNKO01Bb0NTLGtCQUFpQixFQUNuQjtBQXJDUDtNQXdDUyxtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFVBQVM7TUFDVCxlRWZVO01GZ0JWLG1CR25Dd0IsRUhvQzFCO0FBN0NQO0lBaURNLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ25CO0FBSUo7RUFDRyxpQkFBZ0IsRUFDbEI7QUFFRjtFQUNHLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsb0JBQW1CLEVBZXJCO0FBcEJEO0lBUU0saUJBQWdCO0lBQ2hCLG9CRzdENkI7SUg4RDdCLGVFckNjO0lGc0NkLDJCQUEwQjtJQUMxQixtQkFBa0IsRUFDcEI7QUFiSjtJQWdCTSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGdCQUFlLEVBQ2pCO0FBR0g7RUFDRyxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ25CIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1MnB4OyB9XG4gIC5oZWFkIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmhlYWQgLm5vdGlmaWNhdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDYxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMTI4YmRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xNSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIC5oZWFkIC5ub3RpZmljYXRpb24gaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICAgIC5oZWFkIC5ub3RpZmljYXRpb24gLmNsb3NlLWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGNvbG9yOiAjY2JjYmNiO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4gIC5oZWFkIHN0LXNlYXJjaCB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gIC5ncm91cCAuc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICBjb2xvcjogIzNjM2MzYztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgLmdyb3VwIC5jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbiBAaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG4gOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cblxuIC5oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM1MnB4O1xuXG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICB3aWR0aDogNjE0cHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xuICAgICAgIGNvbG9yOiAkYWN0aW9uLXByaW1hcnktZGVmYXVsdDtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDFweCByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMTUpO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICBpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICB9XG5cbiAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAkbmV1dHJhbC0wNjtcbiAgICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgc3Qtc2VhcmNoIHtcbiAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuIH1cblxuXG4gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gfVxuXG4uZ3JvdXAge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICB3aWR0aDogMTAwJTtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteGxhcmdlO1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTExO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICB9XG5cbiAgIC5jYXRlZ29yeSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIH1cbn1cblxuIC5saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<section class=\"container-fluid grid-example\">\n   <egeo-title title=\"Grid\"></egeo-title>\n   <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\n            <div class=\"row col-example-12 demo-box\">\n               <div class=\"col-lg-12, col-md-12 col-sm-12 col-xs-12\">\n                  <p class=\"box\">12</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-6 demo-box\">\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                  <p class=\"box\">6</p>\n               </div>\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                  <p class=\"box\">6</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-4 demo-box\">\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-2 demo-box\">\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-1 demo-box\">\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n            </div>\n\n         </div>\n      </div>\n   </div>\n</section>\n\n\n<section class=\"container-fluid\">\n      <egeo-title title=\"Reponsive grid example\"></egeo-title>\n   <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\n            <div class=\"row col-example-2 demo-box\">\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n            </div>\n\n         </div>\n      </div>\n   </div>\n</section>\n\n<section>\n   <egeo-title title=\"Without row class\"></egeo-title>\n   <div class=\"container-fluid example\">\n      <div class=\"col-md-6\">\n         <p class=\"box\">6</p>\n      </div>\n      <div class=\"col-md-6\">\n         <p class=\"box\">6</p>\n      </div>\n   </div>\n</section>\n"

/***/ }),

/***/ "./src/app/modules/theme/grid/grid.scss":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\nsection {\n  margin-bottom: 40px; }\n.grid-example {\n  font-weight: 400;\n  font-size: 1rem;\n  margin-bottom: 40px;\n  margin-left: 2px; }\n.example .row {\n  background-color: #bce7f6; }\n.example .box {\n  margin: 10px 0;\n  background-color: #77b1e1;\n  color: #555555;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVyxFQUNiO0FBRUQ7RUFDRyxvQkFBbUIsRUFDckI7QUFFRDtFQUNHLGlCQUFnQjtFQUNoQixnQkdLNEI7RUhKNUIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNsQjtBQUVEO0VBRU0sMEJFcUN5QixFRnBDM0I7QUFISjtFQUtNLGVBQWM7RUFDZCwwQkVrQ3lCO0VGakN6QixlRWNjO0VGYmQsbUJBQWtCLEVBQ3BCIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5ncmlkLWV4YW1wbGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7IH1cblxuLmV4YW1wbGUgLnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2U3ZjY7IH1cblxuLmV4YW1wbGUgLmJveCB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdiMWUxO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG46aG9zdCB7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiB7XG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZ3JpZC1leGFtcGxlIHtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDtcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uZXhhbXBsZSB7XG4gICAucm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaXNjLWFxdWEtbGlnaHQ7XG4gICB9XG4gICAuYm94IHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pc2MtdmlraW5nO1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTEwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZTpcbiRlZ2VvLWZvbnQtc2l6ZS1naWFudDogICAgIDJyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcbiRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS1tZWRpdW06ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS1zbWFsbDogICAgIDFyZW0gIWRlZmF1bHQ7ICAgICAgIC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHNtYWxsOiAgIDAuODc1cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS14eHhzbWFsbDogIDAuNzVyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcblxuLy8vIGxpbmUtaGVpZ2h0OlxuJGVnZW8tbGluZS1oZWlnaHQtZ2lhbnQ6ICAgICAgMi4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAzOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxuJGVnZW8tbGluZS1oZWlnaHQteGxhcmdlOiAgICAgMS42MjVyZW0gIWRlZmF1bHQ7ICAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC1sYXJnZTogICAgICAxLjVyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LW1lZGl1bTogICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XG4kZWdlby1saW5lLWhlaWdodC14c21hbGw6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgIC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4c21hbGw6ICAgIDEuMTI1cmVtICFkZWZhdWx0OyAgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"icon-demo\" (click)=\"onClick()\" >\n   <i [ngClass]=\"getClass()\" class=\"glyph\"></i>\n   <span class=\"name\" #nameEl>icon-{{icon.name}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%;\n  display: flex; }\n.icon-demo {\n  padding: 20px;\n  color: #555555;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 125px;\n  margin: 2px; }\n.icon-demo:hover {\n    background-color: rgba(9, 121, 196, 0.8);\n    color: #e7f3fb; }\n.icon-demo .glyph {\n    align-self: center;\n    padding: 10px;\n    font-size: 1.563rem;\n    font-family: \"ico_stratio\"; }\n.icon-demo .name {\n    font-weight: 400;\n    font-family: \"Nunito Sans\";\n    font-size: 0.938rem;\n    align-self: center;\n    white-space: pre-wrap;\n    text-align: center;\n    padding-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vaWNvbi1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vaWNvbi1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVztFQUNYLGNBQWEsRUFDZjtBQUVEO0VBQ0csY0FBYTtFQUNiLGVFNkJpQjtFRjVCakIsMEJFa0JpQjtFRmpCakIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osY0FBYTtFQUNiLFlBQVcsRUF1QmI7QUEvQkQ7SUFXTSx5Q0VaeUI7SUZhekIsZUVaeUIsRUZhM0I7QUFiSjtJQWdCTSxtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLG9CR1o2QjtJSGE3QiwyQkdsQjJDLEVIbUI3QztBQXBCSjtJQXVCTSxpQkFBZ0I7SUFDaEIsMkJHeEIyQztJSHlCM0Msb0JHZDZCO0lIZTdCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNsQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbi1kZW1vL2ljb24tZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uaWNvbi1kZW1vIHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgbWFyZ2luOiAycHg7IH1cbiAgLmljb24tZGVtbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCAxMjEsIDE5NiwgMC44KTtcbiAgICBjb2xvcjogI2U3ZjNmYjsgfVxuICAuaWNvbi1kZW1vIC5nbHlwaCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjU2M3JlbTtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiOyB9XG4gIC5pY29uLWRlbW8gLm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuLmljb24tZGVtbyB7XG4gICBwYWRkaW5nOiAyMHB4O1xuICAgY29sb3I6ICRuZXV0cmFsLTEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMDA7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiAxMjBweDtcbiAgIGhlaWdodDogMTI1cHg7XG4gICBtYXJnaW46IDJweDtcblxuICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRhY3Rpb24tcHJpbWFyeS1ob3ZlciwgMC44KTtcbiAgICAgIGNvbG9yOiAkYWN0aW9uLXByaW1hcnktbGlnaHQ7XG4gICB9XG5cbiAgIC5nbHlwaCB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHhsYXJnZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xuICAgfVxuXG4gICAubmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRlZ2VvLW51bml0by1zYW5zO1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgIH1cbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xuXG4vLyBzdGF0dXM6XG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBpbnB1dHM6XG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemU6XG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG5cbi8vLyBsaW5lLWhlaWdodDpcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"head\">\n   <div class=\"app-limit header-container\">\n      <egeo-title title=\"Icons\"></egeo-title>\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n         {{notification}} <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n      </div>\n      <st-search placeholder=\"Search Icon\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\n   </div>\n</div>\n<div class=\"list\">\n   <div *ngFor=\"let icon of ((iconList | async) || []) | stFilterList:searchBy:searchValue\">\n      <icon-demo [icon]=\"icon\" (copyIconName)=\"onCopyIconName($event)\"></icon-demo>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%;\n  font-family: \"Nunito Sans\"; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  width: 100%;\n  padding-top: 20px;\n  margin-left: 352px;\n  background-color: #ffffff; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #128bde;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #cbcbcb;\n      font-size: 1.25rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 150px;\n  margin-left: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29ucy1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29ucy1kZW1vLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBQ1RIOzs7Ozs7Ozs7R0FTRztBSkdIO0VBQ0csWUFBVztFQUNYLDJCR0c4QyxFSEZoRDtBQUVEO0VBQ0csY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQiwwQkVVaUIsRUZnQ25CO0FBckREO0lBY00sY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFDckI7QUFqQko7SUFvQk0sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiwwQkVKYztJRktkLGVFNUJ5QjtJRjZCekIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsb0RBQW1EO0lBQ25ELGlCQUFnQjtJQUNoQixvQkdyQjZCO0lIc0I3QixtQkFBa0I7SUFDbEIsd0JBQXVCLEVBWXpCO0FBOUNKO01Bb0NTLGtCQUFpQixFQUNuQjtBQXJDUDtNQXdDUyxtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFVBQVM7TUFDVCxlRWhCVztNRmlCWCxtQkdwQ3lCLEVIcUMzQjtBQTdDUDtJQWlETSxpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUNuQjtBQUdKO0VBQ0csaUJBQWdCLEVBQ2xCO0FBRUQ7RUFDRyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ljb25zLWRlbW8vaWNvbnMtZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzUycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cbiAgLmhlYWQgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZCAubm90aWZpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNjE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMxMjhiZGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNjYmNiY2I7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgLmhlYWQgc3Qtc2VhcmNoIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbiBAaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG46aG9zdCB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGZvbnQtZmFtaWx5OiAkZWdlby1udW5pdG8tc2Fucztcbn1cblxuLmhlYWQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB0b3A6IDYwcHg7XG4gICBsZWZ0OiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nLXRvcDogMjBweDtcbiAgIG1hcmdpbi1sZWZ0OiAzNTJweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xuXG4gICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuXG4gICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA2MTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLTAwO1xuICAgICAgY29sb3I6ICRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGkge1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICBjb2xvcjogJG5ldXRyYWwtMDY7XG4gICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS1sYXJnZTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3Qtc2VhcmNoIHtcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICB9XG59XG5cbnVsIHtcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdiNWU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uLXByaW1hcnktZGVmYXVsdDojMTI4YmRlICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWhvdmVyOiAgIzA5NzljNCAhZGVmYXVsdDtcbiRhY3Rpb24tcHJpbWFyeS1saWdodDogICNlN2YzZmIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMTogICAjZjNmNmY4ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDI6ICAgI2VhZWZmNSAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAzOiAgICNjZGQ2ZGYgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNDogICAjYWFiN2M0ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDU6ICAgIzg4OThhNyAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA2OiAgICM2YzdiOGIgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNzogICAjMGYxYjI3ICFkZWZhdWx0O1xuXG4vLyBzdGF0dXM6XG4kc3RhdHVzLXN1Y2Nlc3MtZGVmYXVsdDogICAjMmNjZTkzICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWxpZ2h0OiAgICAgI2Q0ZjllYSAhZGVmYXVsdDtcbiRzdGF0dXMtc3VjY2Vzcy1ob3ZlcjogICAgICMwYmFhNzAgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogICAjZmE5MzJmICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWxpZ2h0OiAgICAgI2ZmZjFlMyAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1ob3ZlcjogICAgICNlZDdlMTMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWRlZmF1bHQ6ICAjZWM0NDVjICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1saWdodDogICAgI2ZmZThlYiAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtaG92ZXI6ICAgICNjOTI1M2MgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbC0wMDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTAxOiAjZmFmYWZhICFkZWZhdWx0O1xuJG5ldXRyYWwtMDI6ICNmNGY0ZjQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMzogI2VkZWRlZCAhZGVmYXVsdDtcbiRuZXV0cmFsLTA0OiAjZTVlNWU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDU6ICNkZWRlZGUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNjogI2NiY2JjYiAhZGVmYXVsdDtcbiRuZXV0cmFsLTA3OiAjYjViNWI1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDg6ICM5OTk5OTkgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wOTogIzc3Nzc3NyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjNTU1NTU1ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTE6ICMzYzNjM2MgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMjogIzI0MjQyNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTEzOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBpbnB1dHM6XG4kaW5wdXQtZmllbGQtb25mb2N1czogICAjODhjNWVlICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLWVycm9yOiAgICAgI2Y1OWVhOSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemU6XG4kZWdlby1mb250LXNpemUtZ2lhbnQ6ICAgICAycmVtICFkZWZhdWx0OyAgICAgICAvLyAzMnB4XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XG4kZWdlby1mb250LXNpemUtbGFyZ2U6ICAgICAxLjI1cmVtICFkZWZhdWx0OyAgICAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtbWVkaXVtOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtc21hbGw6ICAgICAxcmVtICFkZWZhdWx0OyAgICAgICAvLyAxNnB4XG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XG4kZWdlby1mb250LXNpemUteHhzbWFsbDogICAwLjg3NXJlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUteHh4c21hbGw6ICAwLjc1cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG5cbi8vLyBsaW5lLWhlaWdodDpcbiRlZ2VvLWxpbmUtaGVpZ2h0LWdpYW50OiAgICAgIDIuMzc1cmVtICFkZWZhdWx0OyAgLy8gMzhweFxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhsYXJnZTogICAgIDEuNjI1cmVtICFkZWZhdWx0OyAgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgMS41cmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC1tZWRpdW06ICAgICAxLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxuJGVnZW8tbGluZS1oZWlnaHQteHNtYWxsOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC14eHNtYWxsOiAgICAxLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */"

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

module.exports = "<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"content\">\n   <demo-menu class=\"side-menu\" [options]=\"menu\"></demo-menu>\n   <div class=\"main-content\">\n      <router-outlet></router-outlet>\n   </div>\n</div>\n"

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

module.exports = "@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvdGhlbWUuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS90aGVtZS5zY3NzIiwiL2hvbWUvamRpYXovRG9jdW1lbnRvcy93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9qZGlhei9Eb2N1bWVudG9zL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyIsIi9ob21lL2pkaWF6L0RvY3VtZW50b3Mvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUNUSDs7Ozs7Ozs7O0dBU0c7QUpJSDtFQUNHLFlBQVcsRUFDYiIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL3RoZW1lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlOyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3YjVlNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbi1wcmltYXJ5LWRlZmF1bHQ6IzEyOGJkZSAhZGVmYXVsdDtcbiRhY3Rpb24tcHJpbWFyeS1ob3ZlcjogICMwOTc5YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktbGlnaHQ6ICAjZTdmM2ZiICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDE6ICAgI2YzZjZmOCAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAyOiAgICNlYWVmZjUgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMzogICAjY2RkNmRmICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDQ6ICAgI2FhYjdjNCAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA1OiAgICM4ODk4YTcgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNjogICAjNmM3YjhiICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDc6ICAgIzBmMWIyNyAhZGVmYXVsdDtcblxuLy8gc3RhdHVzOlxuJHN0YXR1cy1zdWNjZXNzLWRlZmF1bHQ6ICAgIzJjY2U5MyAhZGVmYXVsdDtcbiRzdGF0dXMtc3VjY2Vzcy1saWdodDogICAgICNkNGY5ZWEgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICAgICAjMGJhYTcwICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICAgI2ZhOTMyZiAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1saWdodDogICAgICNmZmYxZTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctaG92ZXI6ICAgICAjZWQ3ZTEzICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0OiAgI2VjNDQ1YyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtbGlnaHQ6ICAgICNmZmU4ZWIgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWhvdmVyOiAgICAjYzkyNTNjICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWwtMDA6ICNmZmZmZmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMTogI2ZhZmFmYSAhZGVmYXVsdDtcbiRuZXV0cmFsLTAyOiAjZjRmNGY0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDM6ICNlZGVkZWQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNDogI2U1ZTVlNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA1OiAjZGVkZWRlICFkZWZhdWx0O1xuJG5ldXRyYWwtMDY6ICNjYmNiY2IgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNzogI2I1YjViNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA4OiAjOTk5OTk5ICFkZWZhdWx0O1xuJG5ldXRyYWwtMDk6ICM3Nzc3NzcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogIzU1NTU1NSAhZGVmYXVsdDtcbiRuZXV0cmFsLTExOiAjM2MzYzNjICFkZWZhdWx0O1xuJG5ldXRyYWwtMTI6ICMyNDI0MjQgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMzogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gaW5wdXRzOlxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICAgIzg4YzVlZSAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1lcnJvcjogICAgICNmNTllYTkgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplOlxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuXG4vLy8gbGluZS1oZWlnaHQ6XG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gei1pbmRleFxuXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */"

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