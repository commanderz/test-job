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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { useState, useEffect } from 'react'\n\n//import styles from '../../styles/user.module.scss'\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { exit } from 'process';\nvar Users = function(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    if (query.id != \"bootstrap.min.css\") {\n        var _this1 = _this;\n        var maxx = query.id; // query.id;\n        var maxx2 = maxx + 10; //query.id + 10;\n        console.log('Start=' + maxx + ' Max' + maxx2); //query.id = /page/id\n        var itemz = []; //зададим масив\n        var item2 = [];\n        for(var i = maxx; i < maxx2; i++){\n            itemz.push(users[i]);\n            item2.push(i - maxx);\n        }\n        //let text2=\n        //text2=text2+text;\n        //text2=text2+ ${\n        //{ for (let i = 0; i < 10; i++) \n        //<li key={itemz[i].id}> {itemz[i].name}  </li>;\n        var i1 = 0;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            keywords: \"users next js\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Cписок пользователей\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: item2.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user/\".concat(item),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        itemz[item].name + \" - \" + itemz[item].country,\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: itemz[item].logo,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\users\\\\[id].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 84\n                                            },\n                                            __self: _this1\n                                        })\n                                    ]\n                                })\n                            })\n                        }, item);\n                    })\n                })\n            ]\n        }));\n    }\n};\n_s(Users, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Users;\nvar __N_SSP = true;\n//console.log(\"usersType=\" + typeof users);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2QztBQUNOO0FBQ3ZDLEVBQW9EO0FBQ3hCO0FBQzhCOzs7QUFDMUQsRUFBaUM7QUFFakMsR0FBSyxDQUFDRyxLQUFLLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUNsQixHQUFLLENBQUdDLEtBQUssR0FBS0wsc0RBQVMsR0FBbkJLLEtBQUs7SUFDYixFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsRUFBRSxJQUFJLENBQW1CLG9CQUFFLENBQUM7O1FBQ2xDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHRixLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFZO1FBQ2hDLEdBQUcsQ0FBQ0UsS0FBSyxHQUFHRCxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQWdCO1FBRXRDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRLFVBQUdILElBQUksR0FBRyxDQUFNLFFBQUdDLEtBQUssRUFBRyxDQUFxQjtRQUNwRSxHQUFHLENBQUNHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFlLEVBQVk7UUFDOUIsR0FBVCxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHTixJQUFJLEVBQUVNLENBQUMsR0FBR0wsS0FBSyxFQUFFSyxDQUFDLEdBQUksQ0FBQztZQUNoQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNWLEtBQUssQ0FBQ1MsQ0FBQztZQUNsQkQsS0FBSyxDQUFDRSxJQUFJLENBQUNELENBQUMsR0FBR04sSUFBSTtRQUN2QixDQUFDO1FBRUQsRUFBWTtRQUNaLEVBQW1CO1FBQ25CLEVBQWlCO1FBQ2pCLEVBQWlDO1FBQ2pDLEVBQWdEO1FBQ2hELEdBQUcsQ0FBQ00sRUFBQyxHQUFHLENBQUM7UUFDVCxNQUFNLHVFQUNEWCxpRUFBYTtZQUFDYSxRQUFRLEVBQUUsQ0FBZTs7Ozs7Ozs7cUZBQ25DQyxDQUFFOzs7Ozs7OzhCQUFDLENBQW9COztxRkFDdkJDLENBQUU7Ozs7Ozs7OEJBQ0VMLEtBQUssQ0FBQ00sR0FBRyxDQUFDQyxRQUMvQixDQUQrQkEsSUFBSTtzQ0FDWCxNQUFNLHdEQUFMQyxDQUFFOzs7Ozs7OzJHQUNFbkIsa0RBQUk7Z0NBQUNvQixJQUFJLEVBQUcsQ0FBTSxRQUFPLE9BQUxGLElBQUk7Ozs7Ozs7Z0hBQ3BCRyxDQUFDOzs7Ozs7Ozt3Q0FBRVgsS0FBSyxDQUFDUSxJQUFJLEVBQUVJLElBQUksR0FBRyxDQUFLLE9BQUdaLEtBQUssQ0FBQ1EsSUFBSSxFQUFFSyxPQUFPOzZHQUFFQyxDQUFHOzRDQUFDQyxHQUFHLEVBQUVmLEtBQUssQ0FBQ1EsSUFBSSxFQUFFUSxJQUFJOzs7Ozs7Ozs7OzsyQkFGNUVSLElBQUk7Ozs7O0lBWWpDLENBQUM7QUFDTCxDQUFDO0dBdENLaEIsS0FBSzs7UUFDV0gsa0RBQVM7OztLQUR6QkcsS0FBSzs7QUF3Q1gsRUFBMkM7QUFDM0MsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci5tb2R1bGUuc2NzcydcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIjtcbi8vaW1wb3J0IHsgZXhpdCB9IGZyb20gJ3Byb2Nlc3MnO1xuXG5jb25zdCBVc2VycyA9ICh7IHVzZXJzIH0pID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBpZiAocXVlcnkuaWQgIT0gXCJib290c3RyYXAubWluLmNzc1wiKSB7XG4gICAgICAgIGxldCBtYXh4ID0gcXVlcnkuaWQ7Ly8gcXVlcnkuaWQ7XG4gICAgICAgIGxldCBtYXh4MiA9IG1heHggKyAxMDsvL3F1ZXJ5LmlkICsgMTA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0PScgKyBtYXh4ICsgJyBNYXgnICsgbWF4eDIpOyAvL3F1ZXJ5LmlkID0gL3BhZ2UvaWRcbiAgICAgICAgbGV0IGl0ZW16ID0gW107Ly/Qt9Cw0LTQsNC00LjQvCDQvNCw0YHQuNCyXG4gICAgICAgIGxldCBpdGVtMiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gbWF4eDsgaSA8IG1heHgyOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW16LnB1c2godXNlcnNbaV0pO1xuICAgICAgICAgICAgaXRlbTIucHVzaChpIC0gbWF4eCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xldCB0ZXh0Mj1cbiAgICAgICAgLy90ZXh0Mj10ZXh0Mit0ZXh0O1xuICAgICAgICAvL3RleHQyPXRleHQyKyAke1xuICAgICAgICAvL3sgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSBcbiAgICAgICAgLy88bGkga2V5PXtpdGVteltpXS5pZH0+IHtpdGVteltpXS5uYW1lfSAgPC9saT47XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXtcInVzZXJzIG5leHQganNcIn0+XG4gICAgICAgICAgICAgICAgPGgxPkPQv9C40YHQvtC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtMi5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW16W2l0ZW1dLm5hbWUgKyBcIiAtIFwiICsgaXRlbXpbaXRlbV0uY291bnRyeX08aW1nIHNyYz17aXRlbXpbaXRlbV0ubG9nb30gLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L01haW5Db250YWluZXI+XG5cblxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8vY29uc29sZS5sb2coXCJ1c2Vyc1R5cGU9XCIgKyB0eXBlb2YgdXNlcnMpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLmpzb25gKVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgYzpcXFVzZXJzXFxhZG1pbjAwN1xcbmV4dFxcbXlhcHBfdjFcXHBhZ2VzXFxkYXRhLmpzb25gKTtcbiAgICAvL2NvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codHlwZW9mIHVzZXJzWzJdLmxvZ28pO1xuICAgIC8vY29uc29sZS5sb2coanNvbiwgJ3RoZSBqc29uIG9iaicpO1xuICAgIC8vbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb250ZXh0KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufSovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuXG4gICAgLy9pZiAocGFyYW1zLmlkICE9IFwiYm9vdHN0cmFwLm1pbi5jc3NcIikge1xuICAgIC8vY29uc29sZS5sb2coJ3Rlc3RWQUxVRT0nICsgcGFyYW1zLmlkICsgXCIsIHR5cGU9XCIgKyB0eXBlb2YgcGFyYW1zLmlkKTsgLy9wYXJhbXMuaWQgPSAvcGFnZS9pZFxuICAgIGxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgbGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJ3BhZ2VzL2RhdGEuanNvbicsICd1dGY4Jyk7XG4gICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIC8vfVxuICAgIHJldHVybiB7XG5cbiAgICAgICAgcHJvcHM6IHsgdXNlcnMgfSxcblxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGluayIsIk1haW5Db250YWluZXIiLCJVc2VycyIsInVzZXJzIiwicXVlcnkiLCJpZCIsIm1heHgiLCJtYXh4MiIsImNvbnNvbGUiLCJsb2ciLCJpdGVteiIsIml0ZW0yIiwiaSIsInB1c2giLCJrZXl3b3JkcyIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSIsIm5hbWUiLCJjb3VudHJ5IiwiaW1nIiwic3JjIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});