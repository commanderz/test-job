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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var maxx = query.id;\n    var maxx2 = query.id + 10;\n    console.log('test1=' + maxx); //query.id = /page/id\n    var itemz = [\n        id2\n    ].concat(_toConsumableArray(users)); //зададим масив\n    for(var i = maxx; i < maxx2; i++){\n        itemz.push(users[i]);\n        itemz[i].id2 = i;\n    }\n    //let text2=\n    //text2=text2+text;\n    //text2=text2+ ${\n    //{ for (let i = 0; i < 10; i++) \n    //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n    var i1 = 0;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        keywords: \"users next js\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 26,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Cписок пользователей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: itemz.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(item.id2),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    item.name + \" - \" + item.country,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: item.logo,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                            lineNumber: 32,\n                                            columnNumber: 66\n                                        },\n                                        __self: _this1\n                                    })\n                                ]\n                            })\n                        })\n                    }, item.id2);\n                })\n            })\n        ]\n    }));\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBQ0ksS0FBSyxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7O0lBQ2xCLEdBQUssQ0FBR0MsS0FBSyxHQUFLTixzREFBUyxHQUFuQk0sS0FBSztJQUNiLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEVBQUU7SUFDbkIsR0FBRyxDQUFDQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0UsRUFBRSxHQUFHLEVBQUU7SUFFekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVEsVUFBR0osSUFBSSxFQUFHLENBQXFCO0lBQ25ELEdBQUcsQ0FBQ0ssS0FBSyxHQUFHLENBQUNDO1FBQUFBLEdBQUc7SUFBVSxDQUFDLENBQWYsTUFBZSxvQkFBTlIsS0FBSyxHQUFFLENBQWUsRUFBWTtJQUMzQyxHQUFULENBQUUsR0FBRyxDQUFDUyxDQUFDLEdBQUdQLElBQUksRUFBRU8sQ0FBQyxHQUFHTCxLQUFLLEVBQUVLLENBQUMsR0FBSSxDQUFDO1FBQ2hDRixLQUFLLENBQUNHLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxDQUFDO1FBQ2xCRixLQUFLLENBQUNFLENBQUMsRUFBRUQsR0FBRyxHQUFHQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxFQUFZO0lBQ1osRUFBbUI7SUFDbkIsRUFBaUI7SUFDakIsRUFBaUM7SUFDakMsRUFBZ0Q7SUFDaEQsR0FBRyxDQUFDQSxFQUFDLEdBQUcsQ0FBQztJQUNULE1BQU0sdUVBQ0RYLGlFQUFhO1FBQUNhLFFBQVEsRUFBRSxDQUFlOzs7Ozs7OztpRkFDbkNDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBb0I7O2lGQUN2QkMsQ0FBRTs7Ozs7OzswQkFDRU4sS0FBSyxDQUFDTyxHQUFHLENBQUNDLFFBQzNCLENBRDJCQSxJQUFJO2tDQUNYLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7dUdBQ0VuQixrREFBSTs0QkFBQ29CLElBQUksRUFBRyxDQUFPLFNBQVcsT0FBVEYsSUFBSSxDQUFDUCxHQUFHOzs7Ozs7OzRHQUN6QlUsQ0FBQzs7Ozs7Ozs7b0NBQUVILElBQUksQ0FBQ0ksSUFBSSxHQUFHLENBQUssT0FBR0osSUFBSSxDQUFDSyxPQUFPO3lHQUFFQyxDQUFHO3dDQUFDQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsSUFBSTs7Ozs7Ozs7Ozs7dUJBRnZEUixJQUFJLENBQUNQLEdBQUc7Ozs7O0FBWXJDLENBQUM7R0FuQ0tULEtBQUs7O1FBQ1dKLGtEQUFTOzs7S0FEekJJLEtBQUs7O0FBcUNYLEVBQTJDO0FBQzNDLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91c2VyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xuXG5jb25zdCBVc2VycyA9ICh7IHVzZXJzIH0pID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICAgIGxldCBtYXh4ID0gcXVlcnkuaWQ7XG4gICAgbGV0IG1heHgyID0gcXVlcnkuaWQgKyAxMDtcblxuICAgIGNvbnNvbGUubG9nKCd0ZXN0MT0nICsgbWF4eCk7IC8vcXVlcnkuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBpdGVteiA9IFtpZDIsIC4uLnVzZXJzXTsvL9C30LDQtNCw0LTQuNC8INC80LDRgdC40LJcbiAgICBmb3IgKGxldCBpID0gbWF4eDsgaSA8IG1heHgyOyBpKyspIHtcbiAgICAgICAgaXRlbXoucHVzaCh1c2Vyc1tpXSk7XG4gICAgICAgIGl0ZW16W2ldLmlkMiA9IGk7XG4gICAgfVxuXG4gICAgLy9sZXQgdGV4dDI9XG4gICAgLy90ZXh0Mj10ZXh0Mit0ZXh0O1xuICAgIC8vdGV4dDI9dGV4dDIrICR7XG4gICAgLy97IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgXG4gICAgLy88bGkga2V5PXtpdGVteltpXS5pZH0+IHtpdGVteltpXS5uYW1lfSAgPC9saT47XG4gICAgbGV0IGkgPSAwO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXtcInVzZXJzIG5leHQganNcIn0+XG4gICAgICAgICAgICA8aDE+Q9C/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtpdGVtei5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7aXRlbS5pZDJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZSArIFwiIC0gXCIgKyBpdGVtLmNvdW50cnl9PGltZyBzcmM9e2l0ZW0ubG9nb30gLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuXG5cbiAgICApO1xufTtcblxuLy9jb25zb2xlLmxvZyhcInVzZXJzVHlwZT1cIiArIHR5cGVvZiB1c2Vycyk7XG5leHBvcnQgZGVmYXVsdCBVc2VycztcblxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGEuanNvbmApXG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBjOlxcVXNlcnNcXGFkbWluMDA3XFxuZXh0XFxteWFwcF92MVxccGFnZXNcXGRhdGEuanNvbmApO1xuICAgIC8vY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgdXNlcnNbMl0ubG9nbyk7XG4gICAgLy9jb25zb2xlLmxvZyhqc29uLCAndGhlIGpzb24gb2JqJyk7XG4gICAgLy9sZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbnRleHQpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyB1c2VycyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9XG59Ki9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdDE9JyArIHBhcmFtcy5pZCk7IC8vcGFyYW1zLmlkID0gL3BhZ2UvaWRcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBwcm9wczogeyB1c2VycyB9LFxuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJMaW5rIiwiTWFpbkNvbnRhaW5lciIsIlVzZXJzIiwidXNlcnMiLCJxdWVyeSIsIm1heHgiLCJpZCIsIm1heHgyIiwiY29uc29sZSIsImxvZyIsIml0ZW16IiwiaWQyIiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});