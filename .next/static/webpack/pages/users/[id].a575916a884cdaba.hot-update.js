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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { exit } from 'process';\nvar Users = function(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    if (query.id != \"bootstrap.min.css\") {\n        var _this1 = _this;\n        var maxx = Number.parseInt(query.id); // query.id;\n        var maxx2 = maxx + 10; //query.id + 10;\n        console.log('Start=' + maxx + ' Max=' + maxx2); //query.id = /page/id\n        var itemz = []; //зададим масив\n        var item2 = [];\n        for(var i = maxx; i < maxx2; i++){\n            itemz.push(users[i]);\n            item2.push(i - maxx);\n        }\n        //let text2=\n        //text2=text2+text;\n        //text2=text2+ ${\n        //{ for (let i = 0; i < 10; i++) \n        //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n        var i1 = 0;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            keywords: \"users next js\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Cписок пользователей\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: item2.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user/\".concat(item),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        itemz[item].name + \" - \" + itemz[item].country,\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: itemz[item].logo,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 84\n                                            },\n                                            __self: _this1\n                                        })\n                                    ]\n                                })\n                            })\n                        }, item);\n                    })\n                })\n            ]\n        }));\n    }\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ1c7QUFDdEI7QUFDOEI7OztBQUMxRCxFQUFpQztBQUVqQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2xCLEdBQUssQ0FBR0MsS0FBSyxHQUFLTixzREFBUyxHQUFuQk0sS0FBSztJQUNiLEVBQUUsRUFBRUEsS0FBSyxDQUFDQyxFQUFFLElBQUksQ0FBbUIsb0JBQUUsQ0FBQzs7UUFDbEMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFZO1FBQ2pELEdBQUcsQ0FBQ0ksS0FBSyxHQUFHSCxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQWdCO1FBRXRDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRLFVBQUdMLElBQUksR0FBRyxDQUFPLFNBQUdHLEtBQUssRUFBRyxDQUFxQjtRQUNyRSxHQUFHLENBQUNHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7UUFDOUIsR0FBVCxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHUixJQUFJLEVBQUVRLENBQUMsR0FBR0wsS0FBSyxFQUFFSyxDQUFDLEdBQUksQ0FBQztZQUNoQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNaLEtBQUssQ0FBQ1csQ0FBQztZQUNsQkQsS0FBSyxDQUFDRSxJQUFJLENBQUNELENBQUMsR0FBR1IsSUFBSTtRQUN2QixDQUFDO1FBRUQsRUFBWTtRQUNaLEVBQW1CO1FBQ25CLEVBQWlCO1FBQ2pCLEVBQWlDO1FBQ2pDLEVBQWdEO1FBQ2hELEdBQUcsQ0FBQ1EsRUFBQyxHQUFHLENBQUM7UUFDVCxNQUFNLHVFQUNEYixpRUFBYTtZQUFDZSxRQUFRLEVBQUUsQ0FBZTs7Ozs7Ozs7cUZBQ25DQyxDQUFFOzs7Ozs7OzhCQUFDLENBQW9COztxRkFDdkJDLENBQUU7Ozs7Ozs7OEJBQ0VMLEtBQUssQ0FBQ00sR0FBRyxDQUFDQyxRQUMvQixDQUQrQkEsSUFBSTtzQ0FDWCxNQUFNLHdEQUFMQyxDQUFFOzs7Ozs7OzJHQUNFckIsa0RBQUk7Z0NBQUNzQixJQUFJLEVBQUcsQ0FBTSxRQUFPLE9BQUxGLElBQUk7Ozs7Ozs7Z0hBQ3BCRyxDQUFDOzs7Ozs7Ozt3Q0FBRVgsS0FBSyxDQUFDUSxJQUFJLEVBQUVJLElBQUksR0FBRyxDQUFLLE9BQUdaLEtBQUssQ0FBQ1EsSUFBSSxFQUFFSyxPQUFPOzZHQUFFQyxDQUFHOzRDQUFDQyxHQUFHLEVBQUVmLEtBQUssQ0FBQ1EsSUFBSSxFQUFFUSxJQUFJOzs7Ozs7Ozs7OzsyQkFGNUVSLElBQUk7Ozs7O0lBWWpDLENBQUM7QUFDTCxDQUFDO0dBdENLbEIsS0FBSzs7UUFDV0osa0RBQVM7OztLQUR6QkksS0FBSzs7QUF3Q1gsRUFBMkM7QUFDM0MsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG4vL2ltcG9ydCB7IGV4aXQgfSBmcm9tICdwcm9jZXNzJztcblxuY29uc3QgVXNlcnMgPSAoeyB1c2VycyB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gICAgaWYgKHF1ZXJ5LmlkICE9IFwiYm9vdHN0cmFwLm1pbi5jc3NcIikge1xuICAgICAgICBsZXQgbWF4eCA9IE51bWJlci5wYXJzZUludChxdWVyeS5pZCk7Ly8gcXVlcnkuaWQ7XG4gICAgICAgIGxldCBtYXh4MiA9IG1heHggKyAxMDsvL3F1ZXJ5LmlkICsgMTA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0PScgKyBtYXh4ICsgJyBNYXg9JyArIG1heHgyKTsgLy9xdWVyeS5pZCA9IC9wYWdlL2lkXG4gICAgICAgIGxldCBpdGVteiA9IFtdOy8v0LfQsNC00LDQtNC40Lwg0LzQsNGB0LjQslxuICAgICAgICBsZXQgaXRlbTIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1heHg7IGkgPCBtYXh4MjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtei5wdXNoKHVzZXJzW2ldKTtcbiAgICAgICAgICAgIGl0ZW0yLnB1c2goaSAtIG1heHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sZXQgdGV4dDI9XG4gICAgICAgIC8vdGV4dDI9dGV4dDIrdGV4dDtcbiAgICAgICAgLy90ZXh0Mj10ZXh0MisgJHtcbiAgICAgICAgLy97IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgXG4gICAgICAgIC8vPGxpIGtleT17aXRlbXpbaV0uaWR9PiB7aXRlbXpbaV0ubmFtZX0gIDwvbGk+O1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lciBrZXl3b3Jkcz17XCJ1c2VycyBuZXh0IGpzXCJ9PlxuICAgICAgICAgICAgICAgIDxoMT5D0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbTIubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVteltpdGVtXS5uYW1lICsgXCIgLSBcIiArIGl0ZW16W2l0ZW1dLmNvdW50cnl9PGltZyBzcmM9e2l0ZW16W2l0ZW1dLmxvZ299IC8+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuXG5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vL2NvbnNvbGUubG9nKFwidXNlcnNUeXBlPVwiICsgdHlwZW9mIHVzZXJzKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YS5qc29uYClcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGM6XFxVc2Vyc1xcYWRtaW4wMDdcXG5leHRcXG15YXBwX3YxXFxwYWdlc1xcZGF0YS5qc29uYCk7XG4gICAgLy9jb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiB1c2Vyc1syXS5sb2dvKTtcbiAgICAvL2NvbnNvbGUubG9nKGpzb24sICd0aGUganNvbiBvYmonKTtcbiAgICAvL2xldCBkYXRhID0gSlNPTi5wYXJzZShqc29udGV4dCk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn0qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIC8vaWYgKHBhcmFtcy5pZCAhPSBcImJvb3RzdHJhcC5taW4uY3NzXCIpIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0ZXN0VkFMVUU9JyArIHBhcmFtcy5pZCArIFwiLCB0eXBlPVwiICsgdHlwZW9mIHBhcmFtcy5pZCk7IC8vcGFyYW1zLmlkID0gL3BhZ2UvaWRcbiAgICBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGxldCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKCdwYWdlcy9kYXRhLmpzb24nLCAndXRmOCcpO1xuICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAvL31cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sXG5cbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkxpbmsiLCJNYWluQ29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsInF1ZXJ5IiwiaWQiLCJtYXh4IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJtYXh4MiIsImNvbnNvbGUiLCJsb2ciLCJpdGVteiIsIml0ZW0yIiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});