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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { exit } from 'process';\nvar Users = function(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    if (query.id != \"bootstrap.min.css\") {\n        var _this1 = _this;\n        var maxx = Number.parseInt(query.id); // query.id;\n        var maxx2 = maxx + 10; //query.id + 10;\n        var minn = 0;\n        if (maxx > 10) {\n            minn = maxx - 10;\n        }\n        console.log('Start=' + maxx + ' Max=' + maxx2); //query.id = /page/id\n        var itemz = []; //зададим масив\n        var item2 = [];\n        for(var i = maxx; i < maxx2; i++){\n            itemz.push(users[i]);\n            item2.push(i - maxx);\n        }\n        //let text2=\n        //text2=text2+text;\n        //text2=text2+ ${\n        //{ for (let i = 0; i < 10; i++) \n        //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n        var i1 = 0;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            keywords: \"users next js\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Cписок пользователей\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: item2.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user/\".concat(item),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        itemz[item].name + \" - \" + itemz[item].country,\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: itemz[item].logo,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                                lineNumber: 38,\n                                                columnNumber: 84\n                                            },\n                                            __self: _this1\n                                        })\n                                    ]\n                                })\n                            })\n                        }, item);\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    role: \"button\",\n                    href: \"/users/\".concat(minn),\n                    class: \"btn btn-success btn-lg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Предыдущие 10\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    role: \"button\",\n                    href: \"/users/\".concat(maxx2),\n                    class: \"btn btn-danger btn-lg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Следующие 10\"\n                })\n            ]\n        }));\n    }\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUMxRCxFQUFpQztBQUVqQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2xCLEdBQUssQ0FBR0MsS0FBSyxHQUFLTixzREFBUyxHQUFuQk0sS0FBSztJQUNiLEVBQUUsRUFBRUEsS0FBSyxDQUFDQyxFQUFFLElBQUksQ0FBbUIsb0JBQUUsQ0FBQzs7UUFDbEMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFZO1FBQ2pELEdBQUcsQ0FBQ0ksS0FBSyxHQUFHSCxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQWdCO1FBQ3RDLEdBQUcsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7UUFDWixFQUFFLEVBQUVKLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUFDSSxJQUFJLEdBQUdKLElBQUksR0FBRyxFQUFFO1FBQUUsQ0FBQztRQUdwQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHTixJQUFJLEdBQUcsQ0FBTyxTQUFHRyxLQUFLLEVBQUcsQ0FBcUI7UUFDckUsR0FBRyxDQUFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBZSxFQUFZO1FBQzlCLEdBQVQsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBR1QsSUFBSSxFQUFFUyxDQUFDLEdBQUdOLEtBQUssRUFBRU0sQ0FBQyxHQUFJLENBQUM7WUFDaENGLEtBQUssQ0FBQ0csSUFBSSxDQUFDYixLQUFLLENBQUNZLENBQUM7WUFDbEJELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxDQUFDLEdBQUdULElBQUk7UUFDdkIsQ0FBQztRQUVELEVBQVk7UUFDWixFQUFtQjtRQUNuQixFQUFpQjtRQUNqQixFQUFpQztRQUNqQyxFQUFnRDtRQUNoRCxHQUFHLENBQUNTLEVBQUMsR0FBRyxDQUFDO1FBQ1QsTUFBTSx1RUFDRGQsaUVBQWE7WUFBQ2dCLFFBQVEsRUFBRSxDQUFlOzs7Ozs7OztxRkFDbkNDLENBQUU7Ozs7Ozs7OEJBQUMsQ0FBb0I7O3FGQUNMQyxDQUFoQjs7Ozs7Ozs4QkFDRUwsS0FBSyxDQUFDTSxHQUFHLENBQUNDLFFBQy9CLENBRCtCQSxJQUFJO3NDQUNYLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7MkdBQ0V0QixrREFBSTtnQ0FBQ3VCLElBQUksRUFBRyxDQUFNLFFBQU8sT0FBTEYsSUFBSTs7Ozs7OztnSEFDcEJHLENBQUM7Ozs7Ozs7O3dDQUFFWCxLQUFLLENBQUNRLElBQUksRUFBRUksSUFBSSxHQUFHLENBQUssT0FBR1osS0FBSyxDQUFDUSxJQUFJLEVBQUVLLE9BQU87NkdBQUVDLENBQUc7NENBQUNDLEdBQUcsRUFBRWYsS0FBSyxDQUFDUSxJQUFJLEVBQUVRLElBQUk7Ozs7Ozs7Ozs7OzJCQUY1RVIsSUFBSTs7O3FGQVNwQkcsQ0FBQztvQkFBQ00sSUFBSSxFQUFDLENBQVE7b0JBQUNQLElBQUksRUFBRyxDQUFPLFNBQU8sT0FBTGIsSUFBSTtvQkFBSXFCLEtBQUssRUFBQyxDQUF3Qjs7Ozs7Ozs4QkFBRSxDQUFhOztxRkFDM0VQLENBQVQ7b0JBQUNNLElBQUksRUFBQyxDQUFRO29CQUFDUCxJQUFJLEVBQUcsQ0FBTyxTQUFRLE9BQU5kLEtBQUs7b0JBQUlzQixLQUFLLEVBQUMsQ0FBdUI7Ozs7Ozs7OEJBQUUsQ0FBWTs7OztJQUtqRyxDQUFDO0FBQ0wsQ0FBQztHQTVDSzdCLEtBQUs7O1FBQ1dKLGtEQUFTOzs7S0FEekJJLEtBQUs7O0FBOENYLEVBQTJDO0FBQzNDLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91c2VyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xuLy9pbXBvcnQgeyBleGl0IH0gZnJvbSAncHJvY2Vzcyc7XG5cbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICAgIGlmIChxdWVyeS5pZCAhPSBcImJvb3RzdHJhcC5taW4uY3NzXCIpIHtcbiAgICAgICAgbGV0IG1heHggPSBOdW1iZXIucGFyc2VJbnQocXVlcnkuaWQpOy8vIHF1ZXJ5LmlkO1xuICAgICAgICBsZXQgbWF4eDIgPSBtYXh4ICsgMTA7Ly9xdWVyeS5pZCArIDEwO1xuICAgICAgICBsZXQgbWlubiA9IDA7XG4gICAgICAgIGlmIChtYXh4ID4gMTApIHsgbWlubiA9IG1heHggLSAxMDsgfVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0PScgKyBtYXh4ICsgJyBNYXg9JyArIG1heHgyKTsgLy9xdWVyeS5pZCA9IC9wYWdlL2lkXG4gICAgICAgIGxldCBpdGVteiA9IFtdOy8v0LfQsNC00LDQtNC40Lwg0LzQsNGB0LjQslxuICAgICAgICBsZXQgaXRlbTIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1heHg7IGkgPCBtYXh4MjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtei5wdXNoKHVzZXJzW2ldKTtcbiAgICAgICAgICAgIGl0ZW0yLnB1c2goaSAtIG1heHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sZXQgdGV4dDI9XG4gICAgICAgIC8vdGV4dDI9dGV4dDIrdGV4dDtcbiAgICAgICAgLy90ZXh0Mj10ZXh0MisgJHtcbiAgICAgICAgLy97IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgXG4gICAgICAgIC8vPGxpIGtleT17aXRlbXpbaV0uaWR9PiB7aXRlbXpbaV0ubmFtZX0gIDwvbGk+O1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lciBrZXl3b3Jkcz17XCJ1c2VycyBuZXh0IGpzXCJ9PlxuICAgICAgICAgICAgICAgIDxoMT5D0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbTIubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVteltpdGVtXS5uYW1lICsgXCIgLSBcIiArIGl0ZW16W2l0ZW1dLmNvdW50cnl9PGltZyBzcmM9e2l0ZW16W2l0ZW1dLmxvZ299IC8+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2AvdXNlcnMvJHttaW5ufWB9IGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiID7Qn9GA0LXQtNGL0LTRg9GJ0LjQtSAxMDwvYT5cbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgaHJlZj17YC91c2Vycy8ke21heHgyfWB9IGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXCIgPtCh0LvQtdC00YPRjtGJ0LjQtSAxMDwvYT5cbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lciA+XG5cblxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8vY29uc29sZS5sb2coXCJ1c2Vyc1R5cGU9XCIgKyB0eXBlb2YgdXNlcnMpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLmpzb25gKVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgYzpcXFVzZXJzXFxhZG1pbjAwN1xcbmV4dFxcbXlhcHBfdjFcXHBhZ2VzXFxkYXRhLmpzb25gKTtcbiAgICAvL2NvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codHlwZW9mIHVzZXJzWzJdLmxvZ28pO1xuICAgIC8vY29uc29sZS5sb2coanNvbiwgJ3RoZSBqc29uIG9iaicpO1xuICAgIC8vbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb250ZXh0KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufSovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuXG4gICAgLy9pZiAocGFyYW1zLmlkICE9IFwiYm9vdHN0cmFwLm1pbi5jc3NcIikge1xuICAgIC8vY29uc29sZS5sb2coJ3Rlc3RWQUxVRT0nICsgcGFyYW1zLmlkICsgXCIsIHR5cGU9XCIgKyB0eXBlb2YgcGFyYW1zLmlkKTsgLy9wYXJhbXMuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIC8vfVxuICAgIHJldHVybiB7XG5cbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSxcblxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiTGluayIsIk1haW5Db250YWluZXIiLCJVc2VycyIsInVzZXJzIiwicXVlcnkiLCJpZCIsIm1heHgiLCJOdW1iZXIiLCJwYXJzZUludCIsIm1heHgyIiwibWlubiIsImNvbnNvbGUiLCJsb2ciLCJpdGVteiIsIml0ZW0yIiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyIsInJvbGUiLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});