"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var maxx = query.id;\n    console.log('test1=' + maxx); //query.id = /page/id\n    var itemz = []; //зададим масив\n    for(var i = maxx; i < maxx + 10; i++){\n        itemz.push(users[i]);\n    }\n    //let text2=\n    //text2=text2+text;\n    //text2=text2+ ${\n    //{ for (let i = 0; i < 10; i++) \n    //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n    var i1 = 0;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        keywords: \"users next js\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Cписок пользователей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: itemz.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(i1),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    item.name + \" - \" + item.country,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: item.logo,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                            lineNumber: 29,\n                                            columnNumber: 66\n                                        },\n                                        __self: _this1\n                                    })\n                                ]\n                            })\n                        })\n                    }, i1);\n                })\n            })\n        ]\n    }));\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUUxRCxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNsQixHQUFLLENBQUdDLEtBQUssR0FBS04sc0RBQVMsR0FBbkJNLEtBQUs7SUFDYixHQUFHLENBQUNDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxFQUFFO0lBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRLFVBQUdILElBQUksRUFBRyxDQUFxQjtJQUNuRCxHQUFHLENBQUNJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7SUFDOUIsR0FBVCxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHTCxJQUFJLEVBQUVLLENBQUMsR0FBR0wsSUFBSSxHQUFHLEVBQUUsRUFBRUssQ0FBQyxHQUFJLENBQUM7UUFDcENELEtBQUssQ0FBQ0UsSUFBSSxDQUFDUixLQUFLLENBQUNPLENBQUM7SUFDdEIsQ0FBQztJQUVELEVBQVk7SUFDWixFQUFtQjtJQUNuQixFQUFpQjtJQUNqQixFQUFpQztJQUNqQyxFQUFnRDtJQUNoRCxHQUFHLENBQUNBLEVBQUMsR0FBRyxDQUFDO0lBQ1QsTUFBTSx1RUFDRFQsaUVBQWE7UUFBQ1csUUFBUSxFQUFFLENBQWU7Ozs7Ozs7O2lGQUNuQ0MsQ0FBRTs7Ozs7OzswQkFBQyxDQUFvQjs7aUZBQ3ZCQyxDQUFFOzs7Ozs7OzBCQUNFTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0MsUUFDM0IsQ0FEMkJBLElBQUk7a0NBQ1gsTUFBTSx3REFBTEMsQ0FBRTs7Ozs7Ozt1R0FDRWpCLGtEQUFJOzRCQUFDa0IsSUFBSSxFQUFHLENBQU8sU0FBSSxPQUFGUixFQUFDOzs7Ozs7OzRHQUNsQlMsQ0FBQzs7Ozs7Ozs7b0NBQUVILElBQUksQ0FBQ0ksSUFBSSxHQUFHLENBQUssT0FBR0osSUFBSSxDQUFDSyxPQUFPO3lHQUFFQyxDQUFHO3dDQUFDQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsSUFBSTs7Ozs7Ozs7Ozs7dUJBRnZEZCxFQUFDOzs7OztBQVk5QixDQUFDO0dBaENLUixLQUFLOztRQUNXSixrREFBUzs7O0tBRHpCSSxLQUFLOztBQWtDWCxFQUEyQztBQUMzQywrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci5tb2R1bGUuc2NzcydcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIjtcblxuY29uc3QgVXNlcnMgPSAoeyB1c2VycyB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcbiAgICBsZXQgbWF4eCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0MT0nICsgbWF4eCk7IC8vcXVlcnkuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBpdGVteiA9IFtdOy8v0LfQsNC00LDQtNC40Lwg0LzQsNGB0LjQslxuICAgIGZvciAobGV0IGkgPSBtYXh4OyBpIDwgbWF4eCArIDEwOyBpKyspIHtcbiAgICAgICAgaXRlbXoucHVzaCh1c2Vyc1tpXSk7XG4gICAgfVxuXG4gICAgLy9sZXQgdGV4dDI9XG4gICAgLy90ZXh0Mj10ZXh0Mit0ZXh0O1xuICAgIC8vdGV4dDI9dGV4dDIrICR7XG4gICAgLy97IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgXG4gICAgLy88bGkga2V5PXtpdGVteltpXS5pZH0+IHtpdGVteltpXS5uYW1lfSAgPC9saT47XG4gICAgbGV0IGkgPSAwO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXtcInVzZXJzIG5leHQganNcIn0+XG4gICAgICAgICAgICA8aDE+Q9C/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtpdGVtei5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLm5hbWUgKyBcIiAtIFwiICsgaXRlbS5jb3VudHJ5fTxpbWcgc3JjPXtpdGVtLmxvZ299IC8+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cblxuXG4gICAgKTtcbn07XG5cbi8vY29uc29sZS5sb2coXCJ1c2Vyc1R5cGU9XCIgKyB0eXBlb2YgdXNlcnMpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLmpzb25gKVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgYzpcXFVzZXJzXFxhZG1pbjAwN1xcbmV4dFxcbXlhcHBfdjFcXHBhZ2VzXFxkYXRhLmpzb25gKTtcbiAgICAvL2NvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codHlwZW9mIHVzZXJzWzJdLmxvZ28pO1xuICAgIC8vY29uc29sZS5sb2coanNvbiwgJ3RoZSBqc29uIG9iaicpO1xuICAgIC8vbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb250ZXh0KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufSovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIC8vY29uc29sZS5sb2coJ3Rlc3QxPScgKyBwYXJhbXMuaWQpOyAvL3BhcmFtcy5pZCA9IC9wYWdlL2lkXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSxcblxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiTGluayIsIk1haW5Db250YWluZXIiLCJVc2VycyIsInVzZXJzIiwicXVlcnkiLCJtYXh4IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiaXRlbXoiLCJpIiwicHVzaCIsImtleXdvcmRzIiwiaDEiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImhyZWYiLCJhIiwibmFtZSIsImNvdW50cnkiLCJpbWciLCJzcmMiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});