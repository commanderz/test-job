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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n//import styles from '../../styles/user.module.scss'\n\n\n\nvar _this = undefined;\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    //const { query } = useRouter()\n    var maxx = 0; // query.id;\n    var maxx2 = 10; //query.id + 10;\n    console.log('y=' + maxx); //query.id = /page/id\n    var itemz = []; //зададим масив\n    var item2 = [];\n    for(var i = maxx; i < maxx2; i++){\n        itemz.push(users[i]);\n        item2.push(i - maxx);\n    }\n    //let text2=\n    //text2=text2+text;\n    //text2=text2+ ${\n    //{ for (let i = 0; i < 10; i++) \n    //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n    var i1 = 0;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        keywords: \"users next js\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Cписок пользователей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: item2.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/user/\".concat(item),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    itemz[item].name + \" - \" + itemz[item].country,\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: itemz[item].logo,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                            lineNumber: 34,\n                                            columnNumber: 80\n                                        },\n                                        __self: _this1\n                                    })\n                                ]\n                            })\n                        })\n                    }, item);\n                })\n            })\n        ]\n    }));\n};\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQTZDO0FBQ047QUFDdkMsRUFBb0Q7QUFDeEI7QUFDOEI7QUFDNUI7O0FBRTlCLEdBQUssQ0FBQ0ksS0FBSyxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7SUFDbEIsRUFBK0I7SUFDL0IsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQVk7SUFDekIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQWdCO0lBRS9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFJLE1BQUdILElBQUksRUFBRyxDQUFxQjtJQUMvQyxHQUFHLENBQUNJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7SUFDOUIsR0FBVCxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHTixJQUFJLEVBQUVNLENBQUMsR0FBR0wsS0FBSyxFQUFFSyxDQUFDLEdBQUksQ0FBQztRQUNoQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNSLEtBQUssQ0FBQ08sQ0FBQztRQUNsQkQsS0FBSyxDQUFDRSxJQUFJLENBQUNELENBQUMsR0FBR04sSUFBSTtJQUN2QixDQUFDO0lBRUQsRUFBWTtJQUNaLEVBQW1CO0lBQ25CLEVBQWlCO0lBQ2pCLEVBQWlDO0lBQ2pDLEVBQWdEO0lBQ2hELEdBQUcsQ0FBQ00sRUFBQyxHQUFHLENBQUM7SUFDVCxNQUFNLHVFQUNEVixpRUFBYTtRQUFDWSxRQUFRLEVBQUUsQ0FBZTs7Ozs7Ozs7aUZBQ25DQyxDQUFFOzs7Ozs7OzBCQUFDLENBQW9COztpRkFDdkJDLENBQUU7Ozs7Ozs7MEJBQ0VMLEtBQUssQ0FBQ00sR0FBRyxDQUFDQyxRQUMzQixDQUQyQkEsSUFBSTtrQ0FDWCxNQUFNLHdEQUFMQyxDQUFFOzs7Ozs7O3VHQUNFbEIsa0RBQUk7NEJBQUNtQixJQUFJLEVBQUcsQ0FBTSxRQUFPLE9BQUxGLElBQUk7Ozs7Ozs7NEdBQ3BCRyxDQUFDOzs7Ozs7OztvQ0FBRVgsS0FBSyxDQUFDUSxJQUFJLEVBQUVJLElBQUksR0FBRyxDQUFLLE9BQUdaLEtBQUssQ0FBQ1EsSUFBSSxFQUFFSyxPQUFPO3lHQUFFQyxDQUFHO3dDQUFDQyxHQUFHLEVBQUVmLEtBQUssQ0FBQ1EsSUFBSSxFQUFFUSxJQUFJOzs7Ozs7Ozs7Ozt1QkFGNUVSLElBQUk7Ozs7O0FBWWpDLENBQUM7S0FwQ0tkLEtBQUs7O0FBc0NYLEVBQTJDO0FBQzNDLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBleGl0IH0gZnJvbSAncHJvY2Vzcyc7XG5cbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIC8vY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcbiAgICBsZXQgbWF4eCA9IDA7Ly8gcXVlcnkuaWQ7XG4gICAgbGV0IG1heHgyID0gMTA7Ly9xdWVyeS5pZCArIDEwO1xuXG4gICAgY29uc29sZS5sb2coJ3k9JyArIG1heHgpOyAvL3F1ZXJ5LmlkID0gL3BhZ2UvaWRcbiAgICBsZXQgaXRlbXogPSBbXTsvL9C30LDQtNCw0LTQuNC8INC80LDRgdC40LJcbiAgICBsZXQgaXRlbTIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gbWF4eDsgaSA8IG1heHgyOyBpKyspIHtcbiAgICAgICAgaXRlbXoucHVzaCh1c2Vyc1tpXSk7XG4gICAgICAgIGl0ZW0yLnB1c2goaSAtIG1heHgpO1xuICAgIH1cblxuICAgIC8vbGV0IHRleHQyPVxuICAgIC8vdGV4dDI9dGV4dDIrdGV4dDtcbiAgICAvL3RleHQyPXRleHQyKyAke1xuICAgIC8veyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIFxuICAgIC8vPGxpIGtleT17aXRlbXpbaV0uaWR9PiB7aXRlbXpbaV0ubmFtZX0gIDwvbGk+O1xuICAgIGxldCBpID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbkNvbnRhaW5lciBrZXl3b3Jkcz17XCJ1c2VycyBuZXh0IGpzXCJ9PlxuICAgICAgICAgICAgPGgxPkPQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5PC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7aXRlbTIubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVteltpdGVtXS5uYW1lICsgXCIgLSBcIiArIGl0ZW16W2l0ZW1dLmNvdW50cnl9PGltZyBzcmM9e2l0ZW16W2l0ZW1dLmxvZ299IC8+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cblxuXG4gICAgKTtcbn07XG5cbi8vY29uc29sZS5sb2coXCJ1c2Vyc1R5cGU9XCIgKyB0eXBlb2YgdXNlcnMpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLmpzb25gKVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgYzpcXFVzZXJzXFxhZG1pbjAwN1xcbmV4dFxcbXlhcHBfdjFcXHBhZ2VzXFxkYXRhLmpzb25gKTtcbiAgICAvL2NvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codHlwZW9mIHVzZXJzWzJdLmxvZ28pO1xuICAgIC8vY29uc29sZS5sb2coanNvbiwgJ3RoZSBqc29uIG9iaicpO1xuICAgIC8vbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb250ZXh0KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufSovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGxldCB1c2VycyA9IFtdO1xuICAgIGlmIChwYXJhbXMuaWQgIT0gXCJib290c3RyYXAubWluLmNzc1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0VkFMVUU9JyArIHBhcmFtcy5pZCArIFwiLCB0eXBlPVwiICsgdHlwZW9mIHBhcmFtcy5pZCk7IC8vcGFyYW1zLmlkID0gL3BhZ2UvaWRcbiAgICAgICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICAgICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgICAgIHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIH1cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHByb3BzOiB7IHVzZXJzIH0sXG5cbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxpbmsiLCJNYWluQ29udGFpbmVyIiwiZXhpdCIsIlVzZXJzIiwidXNlcnMiLCJtYXh4IiwibWF4eDIiLCJjb25zb2xlIiwibG9nIiwiaXRlbXoiLCJpdGVtMiIsImkiLCJwdXNoIiwia2V5d29yZHMiLCJoMSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiaHJlZiIsImEiLCJuYW1lIiwiY291bnRyeSIsImltZyIsInNyYyIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});