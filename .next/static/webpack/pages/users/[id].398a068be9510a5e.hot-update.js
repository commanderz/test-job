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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { exit } from 'process';\nvar Users = function(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    if (query.id != \"bootstrap.min.css\") {\n        var _this1 = _this;\n        var maxx = Number.parseInt(query.id); // query.id;\n        var maxx2 = maxx + 10; //query.id + 10;\n        var minn = 0;\n        if (maxx > 10) {\n            minn = maxx - 10;\n        }\n        console.log('Start=' + maxx + ' Max=' + maxx2); //query.id = /page/id\n        var itemz = []; //зададим масив\n        var item2 = [];\n        for(var i = maxx; i < maxx2; i++){\n            itemz.push(users[i]);\n            item2.push(i - maxx);\n        }\n        //let text2=\n        //text2=text2+text;\n        //text2=text2+ ${\n        //{ for (let i = 0; i < 10; i++) \n        //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n        var i1 = 0;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            keywords: \"users next js\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Cписок пользователей\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: item2.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user/\".concat(item),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        itemz[item].name + \" - \" + itemz[item].country,\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: itemz[item].logo,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                                lineNumber: 38,\n                                                columnNumber: 84\n                                            },\n                                            __self: _this1\n                                        })\n                                    ]\n                                })\n                            })\n                        }, item);\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    role: \"button\",\n                    href: \"/users/\".concat(maxx - 10),\n                    class: \"btn btn-primary btn-lg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Предыдущие 10\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    role: \"button\",\n                    href: \"/users/\".concat(maxx2),\n                    class: \"btn btn-secondary btn-lg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Следующие 10\"\n                })\n            ]\n        }));\n    }\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUMxRCxFQUFpQztBQUVqQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2xCLEdBQUssQ0FBR0MsS0FBSyxHQUFLTixzREFBUyxHQUFuQk0sS0FBSztJQUNiLEVBQUUsRUFBRUEsS0FBSyxDQUFDQyxFQUFFLElBQUksQ0FBbUIsb0JBQUUsQ0FBQzs7UUFDbEMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFZO1FBQ2pELEdBQUcsQ0FBQ0ksS0FBSyxHQUFHSCxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQWdCO1FBQ3RDLEdBQUcsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7UUFDWixFQUFFLEVBQUVKLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUFDSSxJQUFJLEdBQUdKLElBQUksR0FBRyxFQUFFO1FBQUUsQ0FBQztRQUdwQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHTixJQUFJLEdBQUcsQ0FBTyxTQUFHRyxLQUFLLEVBQUcsQ0FBcUI7UUFDckUsR0FBRyxDQUFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBZSxFQUFZO1FBQzlCLEdBQVQsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBR1QsSUFBSSxFQUFFUyxDQUFDLEdBQUdOLEtBQUssRUFBRU0sQ0FBQyxHQUFJLENBQUM7WUFDaENGLEtBQUssQ0FBQ0csSUFBSSxDQUFDYixLQUFLLENBQUNZLENBQUM7WUFDbEJELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxDQUFDLEdBQUdULElBQUk7UUFDdkIsQ0FBQztRQUVELEVBQVk7UUFDWixFQUFtQjtRQUNuQixFQUFpQjtRQUNqQixFQUFpQztRQUNqQyxFQUFnRDtRQUNoRCxHQUFHLENBQUNTLEVBQUMsR0FBRyxDQUFDO1FBQ1QsTUFBTSx1RUFDRGQsaUVBQWE7WUFBQ2dCLFFBQVEsRUFBRSxDQUFlOzs7Ozs7OztxRkFDbkNDLENBQUU7Ozs7Ozs7OEJBQUMsQ0FBb0I7O3FGQUNMQyxDQUFoQjs7Ozs7Ozs4QkFDRUwsS0FBSyxDQUFDTSxHQUFHLENBQUNDLFFBQy9CLENBRCtCQSxJQUFJO3NDQUNYLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7MkdBQ0V0QixrREFBSTtnQ0FBQ3VCLElBQUksRUFBRyxDQUFNLFFBQU8sT0FBTEYsSUFBSTs7Ozs7OztnSEFDcEJHLENBQUM7Ozs7Ozs7O3dDQUFFWCxLQUFLLENBQUNRLElBQUksRUFBRUksSUFBSSxHQUFHLENBQUssT0FBR1osS0FBSyxDQUFDUSxJQUFJLEVBQUVLLE9BQU87NkdBQUVDLENBQUc7NENBQUNDLEdBQUcsRUFBRWYsS0FBSyxDQUFDUSxJQUFJLEVBQUVRLElBQUk7Ozs7Ozs7Ozs7OzJCQUY1RVIsSUFBSTs7O3FGQVNwQkcsQ0FBQztvQkFBQ00sSUFBSSxFQUFDLENBQVE7b0JBQUNQLElBQUksRUFBRyxDQUFPLFNBQVksT0FBVmpCLElBQUksR0FBRyxFQUFFO29CQUFJeUIsS0FBSyxFQUFDLENBQXdCOzs7Ozs7OzhCQUFFLENBQWE7O3FGQUNoRlAsQ0FBVDtvQkFBQ00sSUFBSSxFQUFDLENBQVE7b0JBQUNQLElBQUksRUFBRyxDQUFPLFNBQVEsT0FBTmQsS0FBSztvQkFBSXNCLEtBQUssRUFBQyxDQUEwQjs7Ozs7Ozs4QkFBRSxDQUFZOzs7O0lBS3BHLENBQUM7QUFDTCxDQUFDO0dBNUNLN0IsS0FBSzs7UUFDV0osa0RBQVM7OztLQUR6QkksS0FBSzs7QUE4Q1gsRUFBMkM7QUFDM0MsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG4vL2ltcG9ydCB7IGV4aXQgfSBmcm9tICdwcm9jZXNzJztcblxuY29uc3QgVXNlcnMgPSAoeyB1c2VycyB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gICAgaWYgKHF1ZXJ5LmlkICE9IFwiYm9vdHN0cmFwLm1pbi5jc3NcIikge1xuICAgICAgICBsZXQgbWF4eCA9IE51bWJlci5wYXJzZUludChxdWVyeS5pZCk7Ly8gcXVlcnkuaWQ7XG4gICAgICAgIGxldCBtYXh4MiA9IG1heHggKyAxMDsvL3F1ZXJ5LmlkICsgMTA7XG4gICAgICAgIGxldCBtaW5uID0gMDtcbiAgICAgICAgaWYgKG1heHggPiAxMCkgeyBtaW5uID0gbWF4eCAtIDEwOyB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnQ9JyArIG1heHggKyAnIE1heD0nICsgbWF4eDIpOyAvL3F1ZXJ5LmlkID0gL3BhZ2UvaWRcbiAgICAgICAgbGV0IGl0ZW16ID0gW107Ly/Qt9Cw0LTQsNC00LjQvCDQvNCw0YHQuNCyXG4gICAgICAgIGxldCBpdGVtMiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gbWF4eDsgaSA8IG1heHgyOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW16LnB1c2godXNlcnNbaV0pO1xuICAgICAgICAgICAgaXRlbTIucHVzaChpIC0gbWF4eCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xldCB0ZXh0Mj1cbiAgICAgICAgLy90ZXh0Mj10ZXh0Mit0ZXh0O1xuICAgICAgICAvL3RleHQyPXRleHQyKyAke1xuICAgICAgICAvL3sgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSBcbiAgICAgICAgLy88bGkga2V5PXtpdGVteltpXS5pZH0+IHtpdGVteltpXS5uYW1lfSAgPC9saT47XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXtcInVzZXJzIG5leHQganNcIn0+XG4gICAgICAgICAgICAgICAgPGgxPkPQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtMi5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW16W2l0ZW1dLm5hbWUgKyBcIiAtIFwiICsgaXRlbXpbaXRlbV0uY291bnRyeX08aW1nIHNyYz17aXRlbXpbaXRlbV0ubG9nb30gLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgaHJlZj17YC91c2Vycy8ke21heHggLSAxMH1gfSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+0J/RgNC10LTRi9C00YPRidC40LUgMTA8L2E+XG4gICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2AvdXNlcnMvJHttYXh4Mn1gfSBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZ1wiID7QodC70LXQtNGD0Y7RidC40LUgMTA8L2E+XG4gICAgICAgICAgICA8L01haW5Db250YWluZXIgPlxuXG5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vL2NvbnNvbGUubG9nKFwidXNlcnNUeXBlPVwiICsgdHlwZW9mIHVzZXJzKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YS5qc29uYClcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGM6XFxVc2Vyc1xcYWRtaW4wMDdcXG5leHRcXG15YXBwX3YxXFxwYWdlc1xcZGF0YS5qc29uYCk7XG4gICAgLy9jb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiB1c2Vyc1syXS5sb2dvKTtcbiAgICAvL2NvbnNvbGUubG9nKGpzb24sICd0aGUganNvbiBvYmonKTtcbiAgICAvL2xldCBkYXRhID0gSlNPTi5wYXJzZShqc29udGV4dCk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn0qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIC8vaWYgKHBhcmFtcy5pZCAhPSBcImJvb3RzdHJhcC5taW4uY3NzXCIpIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0ZXN0VkFMVUU9JyArIHBhcmFtcy5pZCArIFwiLCB0eXBlPVwiICsgdHlwZW9mIHBhcmFtcy5pZCk7IC8vcGFyYW1zLmlkID0gL3BhZ2UvaWRcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAvL31cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sXG5cbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkxpbmsiLCJNYWluQ29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsInF1ZXJ5IiwiaWQiLCJtYXh4IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJtYXh4MiIsIm1pbm4iLCJjb25zb2xlIiwibG9nIiwiaXRlbXoiLCJpdGVtMiIsImkiLCJwdXNoIiwia2V5d29yZHMiLCJoMSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiaHJlZiIsImEiLCJuYW1lIiwiY291bnRyeSIsImltZyIsInNyYyIsImxvZ28iLCJyb2xlIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});