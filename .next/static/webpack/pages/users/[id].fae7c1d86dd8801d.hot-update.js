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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    console.log('test1=' + query.id); //query.id = /page/id\n    var itemz = []; //зададим масив\n    for(var i = 0; i < 10; i++){\n        itemz.push(users[i]);\n    }\n    //let text2=\n    //text2=text2+text;\n    //text2=text2+ ${\n    //{ for (let i = 0; i < 10; i++) \n    //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n    var i1 = 0;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        keywords: \"users next js\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Cписок пользователей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: itemz.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(item.id),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    item.name + \" - \" + item.country,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: item.logo,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                            lineNumber: 28,\n                                            columnNumber: 66\n                                        },\n                                        __self: _this1\n                                    })\n                                ]\n                            })\n                        })\n                    }, item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUUxRCxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNsQixHQUFLLENBQUdDLEtBQUssR0FBS04sc0RBQVMsR0FBbkJNLEtBQUs7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHRixLQUFLLENBQUNHLEVBQUUsRUFBRyxDQUFxQjtJQUN2RCxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7SUFDOUIsR0FBVCxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxHQUFJLENBQUM7UUFDMUJELEtBQUssQ0FBQ0UsSUFBSSxDQUFDUCxLQUFLLENBQUNNLENBQUM7SUFDdEIsQ0FBQztJQUVELEVBQVk7SUFDWixFQUFtQjtJQUNuQixFQUFpQjtJQUNqQixFQUFpQztJQUNqQyxFQUFnRDtJQUNoRCxHQUFHLENBQUNBLEVBQUMsR0FBRyxDQUFDO0lBQ1QsTUFBTSx1RUFDRFIsaUVBQWE7UUFBQ1UsUUFBUSxFQUFFLENBQWU7Ozs7Ozs7O2lGQUNuQ0MsQ0FBRTs7Ozs7OzswQkFBQyxDQUFvQjs7aUZBQ3ZCQyxDQUFFOzs7Ozs7OzBCQUNFTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0MsUUFDM0IsQ0FEMkJBLElBQUk7a0NBQ1gsTUFBTSx3REFBTEMsQ0FBRTs7Ozs7Ozt1R0FDRWhCLGtEQUFJOzRCQUFDaUIsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSRixJQUFJLENBQUNSLEVBQUU7Ozs7Ozs7NEdBQ3hCVyxDQUFDOzs7Ozs7OztvQ0FBRUgsSUFBSSxDQUFDSSxJQUFJLEdBQUcsQ0FBSyxPQUFHSixJQUFJLENBQUNLLE9BQU87eUdBQUVDLENBQUc7d0NBQUNDLEdBQUcsRUFBRVAsSUFBSSxDQUFDUSxJQUFJOzs7Ozs7Ozs7Ozt1QkFGdkRSLElBQUksQ0FBQ1IsRUFBRTs7Ozs7QUFZcEMsQ0FBQztHQS9CS0wsS0FBSzs7UUFDV0osa0RBQVM7OztLQUR6QkksS0FBSzs7QUFpQ1gsRUFBMkM7QUFDM0MsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5cbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXG4gICAgY29uc29sZS5sb2coJ3Rlc3QxPScgKyBxdWVyeS5pZCk7IC8vcXVlcnkuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBpdGVteiA9IFtdOy8v0LfQsNC00LDQtNC40Lwg0LzQsNGB0LjQslxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBpdGVtei5wdXNoKHVzZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvL2xldCB0ZXh0Mj1cbiAgICAvL3RleHQyPXRleHQyK3RleHQ7XG4gICAgLy90ZXh0Mj10ZXh0MisgJHtcbiAgICAvL3sgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSBcbiAgICAvLzxsaSBrZXk9e2l0ZW16W2ldLmlkfT4ge2l0ZW16W2ldLm5hbWV9ICA8L2xpPjtcbiAgICBsZXQgaSA9IDA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5Db250YWluZXIga2V5d29yZHM9e1widXNlcnMgbmV4dCBqc1wifT5cbiAgICAgICAgICAgIDxoMT5D0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW16Lm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZSArIFwiIC0gXCIgKyBpdGVtLmNvdW50cnl9PGltZyBzcmM9e2l0ZW0ubG9nb30gLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuXG5cbiAgICApO1xufTtcblxuLy9jb25zb2xlLmxvZyhcInVzZXJzVHlwZT1cIiArIHR5cGVvZiB1c2Vycyk7XG5leHBvcnQgZGVmYXVsdCBVc2VycztcblxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGEuanNvbmApXG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBjOlxcVXNlcnNcXGFkbWluMDA3XFxuZXh0XFxteWFwcF92MVxccGFnZXNcXGRhdGEuanNvbmApO1xuICAgIC8vY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgdXNlcnNbMl0ubG9nbyk7XG4gICAgLy9jb25zb2xlLmxvZyhqc29uLCAndGhlIGpzb24gb2JqJyk7XG4gICAgLy9sZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbnRleHQpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyB1c2VycyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9XG59Ki9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdDE9JyArIHBhcmFtcy5pZCk7IC8vcGFyYW1zLmlkID0gL3BhZ2UvaWRcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBwcm9wczogeyB1c2VycyB9LFxuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJMaW5rIiwiTWFpbkNvbnRhaW5lciIsIlVzZXJzIiwidXNlcnMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIml0ZW16IiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});