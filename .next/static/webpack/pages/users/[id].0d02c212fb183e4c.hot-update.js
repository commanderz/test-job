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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var maxx = query.id;\n    var maxx2 = query.id + 10;\n    console.log('xxxxxx=' + maxx); //query.id = /page/id\n    var itemz = []; //зададим масив\n    var item2 = [];\n    /* for (let i = maxx; i < maxx2; i++) {\n         itemz.push(users[i]);\n         item2.push(i - maxx);\n     }*/ //let text2=\n    //text2=text2+text;\n    //text2=text2+ ${\n    //{ for (let i = 0; i < 10; i++) \n    //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n    var i = 0;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        keywords: \"users next js\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Cписок пользователей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: item2.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/user/\".concat(item),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    itemz[item].name + \" - \" + itemz[item].country,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: itemz[item].logo,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                            lineNumber: 33,\n                                            columnNumber: 80\n                                        },\n                                        __self: _this1\n                                    })\n                                ]\n                            })\n                        })\n                    }, item);\n                })\n            })\n        ]\n    }));\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUUxRCxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNsQixHQUFLLENBQUdDLEtBQUssR0FBS04sc0RBQVMsR0FBbkJNLEtBQUs7SUFDYixHQUFHLENBQUNDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxFQUFFO0lBQ25CLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxLQUFLLENBQUNFLEVBQUUsR0FBRyxFQUFFO0lBRXpCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFdBQUdKLElBQUksRUFBRyxDQUFxQjtJQUNwRCxHQUFHLENBQUNLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7SUFDOUIsR0FBVCxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsRUFHSTs7O01BQUEsR0FFSixFQUFZO0lBQ1osRUFBbUI7SUFDbkIsRUFBaUI7SUFDakIsRUFBaUM7SUFDakMsRUFBZ0Q7SUFDaEQsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNULE1BQU0sdUVBQ0RYLGlFQUFhO1FBQUNZLFFBQVEsRUFBRSxDQUFlOzs7Ozs7OztpRkFDbkNDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBb0I7O2lGQUN2QkMsQ0FBRTs7Ozs7OzswQkFDRUosS0FBSyxDQUFDSyxHQUFHLENBQUNDLFFBQzNCLENBRDJCQSxJQUFJO2tDQUNYLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7dUdBQ0VsQixrREFBSTs0QkFBQ21CLElBQUksRUFBRyxDQUFNLFFBQU8sT0FBTEYsSUFBSTs7Ozs7Ozs0R0FDcEJHLENBQUM7Ozs7Ozs7O29DQUFFVixLQUFLLENBQUNPLElBQUksRUFBRUksSUFBSSxHQUFHLENBQUssT0FBR1gsS0FBSyxDQUFDTyxJQUFJLEVBQUVLLE9BQU87eUdBQUVDLENBQUc7d0NBQUNDLEdBQUcsRUFBRWQsS0FBSyxDQUFDTyxJQUFJLEVBQUVRLElBQUk7Ozs7Ozs7Ozs7O3VCQUY1RVIsSUFBSTs7Ozs7QUFZakMsQ0FBQztHQXBDS2YsS0FBSzs7UUFDV0osa0RBQVM7OztLQUR6QkksS0FBSzs7QUFzQ1gsRUFBMkM7QUFDM0MsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5cbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXG4gICAgbGV0IG1heHggPSBxdWVyeS5pZDtcbiAgICBsZXQgbWF4eDIgPSBxdWVyeS5pZCArIDEwO1xuXG4gICAgY29uc29sZS5sb2coJ3h4eHh4eD0nICsgbWF4eCk7IC8vcXVlcnkuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBpdGVteiA9IFtdOy8v0LfQsNC00LDQtNC40Lwg0LzQsNGB0LjQslxuICAgIGxldCBpdGVtMiA9IFtdO1xuICAgIC8qIGZvciAobGV0IGkgPSBtYXh4OyBpIDwgbWF4eDI7IGkrKykge1xuICAgICAgICAgaXRlbXoucHVzaCh1c2Vyc1tpXSk7XG4gICAgICAgICBpdGVtMi5wdXNoKGkgLSBtYXh4KTtcbiAgICAgfSovXG5cbiAgICAvL2xldCB0ZXh0Mj1cbiAgICAvL3RleHQyPXRleHQyK3RleHQ7XG4gICAgLy90ZXh0Mj10ZXh0MisgJHtcbiAgICAvL3sgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSBcbiAgICAvLzxsaSBrZXk9e2l0ZW16W2ldLmlkfT4ge2l0ZW16W2ldLm5hbWV9ICA8L2xpPjtcbiAgICBsZXQgaSA9IDA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5Db250YWluZXIga2V5d29yZHM9e1widXNlcnMgbmV4dCBqc1wifT5cbiAgICAgICAgICAgIDxoMT5D0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW0yLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbXpbaXRlbV0ubmFtZSArIFwiIC0gXCIgKyBpdGVteltpdGVtXS5jb3VudHJ5fTxpbWcgc3JjPXtpdGVteltpdGVtXS5sb2dvfSAvPjwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L01haW5Db250YWluZXI+XG5cblxuICAgICk7XG59O1xuXG4vL2NvbnNvbGUubG9nKFwidXNlcnNUeXBlPVwiICsgdHlwZW9mIHVzZXJzKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YS5qc29uYClcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGM6XFxVc2Vyc1xcYWRtaW4wMDdcXG5leHRcXG15YXBwX3YxXFxwYWdlc1xcZGF0YS5qc29uYCk7XG4gICAgLy9jb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiB1c2Vyc1syXS5sb2dvKTtcbiAgICAvL2NvbnNvbGUubG9nKGpzb24sICd0aGUganNvbiBvYmonKTtcbiAgICAvL2xldCBkYXRhID0gSlNPTi5wYXJzZShqc29udGV4dCk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn0qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0ZXN0MT0nICsgcGFyYW1zLmlkKTsgLy9wYXJhbXMuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sXG5cbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkxpbmsiLCJNYWluQ29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsInF1ZXJ5IiwibWF4eCIsImlkIiwibWF4eDIiLCJjb25zb2xlIiwibG9nIiwiaXRlbXoiLCJpdGVtMiIsImkiLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});