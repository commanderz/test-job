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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n//import Link from \"next/link\";\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { exit } from 'process';\nvar Users = function(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    if (query.id != \"bootstrap.min.css\") {\n        var _this1 = _this;\n        var maxx = Int.parse(query.id); // query.id;\n        var maxx2 = maxx + 10; //query.id + 10;\n        console.log('Start=' + maxx + ' Max=' + maxx2); //query.id = /page/id\n        var itemz = []; //зададим масив\n        var item2 = [];\n        for(var i = maxx; i < maxx2; i++){\n            itemz.push(users[i]);\n            item2.push(i - maxx);\n        }\n        //let text2=\n        //text2=text2+text;\n        //text2=text2+ ${\n        //{ for (let i = 0; i < 10; i++) \n        //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n        var i1 = 0;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            keywords: \"users next js\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Cписок пользователей\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: item2.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {\n                                href: \"/user/\".concat(item),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        itemz[item].name + \" - \" + itemz[item].country,\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: itemz[item].logo,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 84\n                                            },\n                                            __self: _this1\n                                        })\n                                    ]\n                                })\n                            })\n                        }, item);\n                    })\n                })\n            ]\n        }));\n    }\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBNkM7QUFDTjtBQUNXO0FBQ2xELEVBQStCO0FBQzJCOzs7QUFDMUQsRUFBaUM7QUFFakMsR0FBSyxDQUFDRyxLQUFLLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUNsQixHQUFLLENBQUdDLEtBQUssR0FBS0wsc0RBQVMsR0FBbkJLLEtBQUs7SUFDYixFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsRUFBRSxJQUFJLENBQW1CLG9CQUFFLENBQUM7O1FBQ2xDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxHQUFHLENBQUNDLEtBQUssQ0FBQ0osS0FBSyxDQUFDQyxFQUFFLEVBQUUsQ0FBWTtRQUMzQyxHQUFHLENBQUNJLEtBQUssR0FBR0gsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFnQjtRQUV0Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHTCxJQUFJLEdBQUcsQ0FBTyxTQUFHRyxLQUFLLEVBQUcsQ0FBcUI7UUFDckUsR0FBRyxDQUFDRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBZSxFQUFZO1FBQzlCLEdBQVQsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBR1IsSUFBSSxFQUFFUSxDQUFDLEdBQUdMLEtBQUssRUFBRUssQ0FBQyxHQUFJLENBQUM7WUFDaENGLEtBQUssQ0FBQ0csSUFBSSxDQUFDWixLQUFLLENBQUNXLENBQUM7WUFDbEJELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxDQUFDLEdBQUdSLElBQUk7UUFDdkIsQ0FBQztRQUVELEVBQVk7UUFDWixFQUFtQjtRQUNuQixFQUFpQjtRQUNqQixFQUFpQztRQUNqQyxFQUFnRDtRQUNoRCxHQUFHLENBQUNRLEVBQUMsR0FBRyxDQUFDO1FBQ1QsTUFBTSx1RUFDRGIsaUVBQWE7WUFBQ2UsUUFBUSxFQUFFLENBQWU7Ozs7Ozs7O3FGQUNuQ0MsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFvQjs7cUZBQ3ZCQyxDQUFFOzs7Ozs7OzhCQUNFTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0MsUUFDL0IsQ0FEK0JBLElBQUk7c0NBQ1gsTUFBTSx3REFBTEMsQ0FBRTs7Ozs7OzsyR0FDRUMsSUFBSTtnQ0FBQ0MsSUFBSSxFQUFHLENBQU0sUUFBTyxPQUFMSCxJQUFJOzs7Ozs7O2dIQUNwQkksQ0FBQzs7Ozs7Ozs7d0NBQUVaLEtBQUssQ0FBQ1EsSUFBSSxFQUFFSyxJQUFJLEdBQUcsQ0FBSyxPQUFHYixLQUFLLENBQUNRLElBQUksRUFBRU0sT0FBTzs2R0FBRUMsQ0FBRzs0Q0FBQ0MsR0FBRyxFQUFFaEIsS0FBSyxDQUFDUSxJQUFJLEVBQUVTLElBQUk7Ozs7Ozs7Ozs7OzJCQUY1RVQsSUFBSTs7Ozs7SUFZakMsQ0FBQztBQUNMLENBQUM7R0F0Q0tsQixLQUFLOztRQUNXSCxrREFBUzs7O0tBRHpCRyxLQUFLOztBQXdDWCxFQUEyQztBQUMzQywrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci5tb2R1bGUuc2Nzcydcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xuLy9pbXBvcnQgeyBleGl0IH0gZnJvbSAncHJvY2Vzcyc7XG5cbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICAgIGlmIChxdWVyeS5pZCAhPSBcImJvb3RzdHJhcC5taW4uY3NzXCIpIHtcbiAgICAgICAgbGV0IG1heHggPSBJbnQucGFyc2UocXVlcnkuaWQpOy8vIHF1ZXJ5LmlkO1xuICAgICAgICBsZXQgbWF4eDIgPSBtYXh4ICsgMTA7Ly9xdWVyeS5pZCArIDEwO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydD0nICsgbWF4eCArICcgTWF4PScgKyBtYXh4Mik7IC8vcXVlcnkuaWQgPSAvcGFnZS9pZFxuICAgICAgICBsZXQgaXRlbXogPSBbXTsvL9C30LDQtNCw0LTQuNC8INC80LDRgdC40LJcbiAgICAgICAgbGV0IGl0ZW0yID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBtYXh4OyBpIDwgbWF4eDI7IGkrKykge1xuICAgICAgICAgICAgaXRlbXoucHVzaCh1c2Vyc1tpXSk7XG4gICAgICAgICAgICBpdGVtMi5wdXNoKGkgLSBtYXh4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGV0IHRleHQyPVxuICAgICAgICAvL3RleHQyPXRleHQyK3RleHQ7XG4gICAgICAgIC8vdGV4dDI9dGV4dDIrICR7XG4gICAgICAgIC8veyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIFxuICAgICAgICAvLzxsaSBrZXk9e2l0ZW16W2ldLmlkfT4ge2l0ZW16W2ldLm5hbWV9ICA8L2xpPjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1haW5Db250YWluZXIga2V5d29yZHM9e1widXNlcnMgbmV4dCBqc1wifT5cbiAgICAgICAgICAgICAgICA8aDE+Q9C/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0yLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbXpbaXRlbV0ubmFtZSArIFwiIC0gXCIgKyBpdGVteltpdGVtXS5jb3VudHJ5fTxpbWcgc3JjPXtpdGVteltpdGVtXS5sb2dvfSAvPjwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cblxuXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuLy9jb25zb2xlLmxvZyhcInVzZXJzVHlwZT1cIiArIHR5cGVvZiB1c2Vycyk7XG5leHBvcnQgZGVmYXVsdCBVc2VycztcblxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGEuanNvbmApXG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBjOlxcVXNlcnNcXGFkbWluMDA3XFxuZXh0XFxteWFwcF92MVxccGFnZXNcXGRhdGEuanNvbmApO1xuICAgIC8vY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgdXNlcnNbMl0ubG9nbyk7XG4gICAgLy9jb25zb2xlLmxvZyhqc29uLCAndGhlIGpzb24gb2JqJyk7XG4gICAgLy9sZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbnRleHQpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyB1c2VycyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9XG59Ki9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbiAgICAvL2lmIChwYXJhbXMuaWQgIT0gXCJib290c3RyYXAubWluLmNzc1wiKSB7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdFZBTFVFPScgKyBwYXJhbXMuaWQgKyBcIiwgdHlwZT1cIiArIHR5cGVvZiBwYXJhbXMuaWQpOyAvL3BhcmFtcy5pZCA9IC9wYWdlL2lkXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgLy99XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBwcm9wczogeyB1c2VycyB9LFxuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNYWluQ29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsInF1ZXJ5IiwiaWQiLCJtYXh4IiwiSW50IiwicGFyc2UiLCJtYXh4MiIsImNvbnNvbGUiLCJsb2ciLCJpdGVteiIsIml0ZW0yIiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJMaW5rIiwiaHJlZiIsImEiLCJuYW1lIiwiY291bnRyeSIsImltZyIsInNyYyIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});