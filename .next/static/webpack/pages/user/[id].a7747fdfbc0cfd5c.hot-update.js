"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction User(param) {\n    var users = param.users;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var maxx2 = Number.parseInt(query.id);\n    console.log('ZZXC=' + query.id + ' Max=' + maxx2); //query.id = /page/id\n    var user = users[0];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: user.name,\n        __source: {\n            fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\user\\\\[id].js\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default().user),\n            __source: {\n                fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\user\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\user\\\\[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Авиакомпания c id \",\n                        query.id\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\admin007\\\\next\\\\myapp_v1\\\\pages\\\\user\\\\[id].js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Имя авиакомпании - \",\n                        user.name\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(User, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVztBQUNROzs7QUFFM0MsUUFBUSxDQUFDRyxJQUFJLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSzs7SUFDaEMsR0FBSyxDQUFHQyxLQUFLLEdBQUtMLHNEQUFTLEdBQW5CSyxLQUFLO0lBQ2IsR0FBRyxDQUFDQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSCxLQUFLLENBQUNJLEVBQUU7SUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU8sU0FBR04sS0FBSyxDQUFDSSxFQUFFLEdBQUcsQ0FBTyxTQUFHSCxLQUFLLEVBQUcsQ0FBcUI7SUFDeEUsR0FBRyxDQUFDTSxJQUFJLEdBQUdSLEtBQUssQ0FBQyxDQUFDO0lBRWxCLE1BQU0sc0VBQ0RGLGlFQUFhO1FBQUNXLFFBQVEsRUFBRUQsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7O3dGQUM3QkMsQ0FBRztZQUFDQyxTQUFTLEVBQUVmLHNFQUFXOzs7Ozs7OztzRkFDdEJnQixDQUFFOzs7Ozs7Ozt3QkFBQyxDQUFrQjt3QkFBYVosS0FBSyxDQUFDSSxFQUFFOzs7c0ZBQzlCTSxDQUFUOzs7Ozs7Ozt3QkFBQyxDQUFtQjt3QkFBQ0gsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7QUFJbEQsQ0FBQztHQWR1QlgsSUFBSTs7UUFDTkgsa0RBQVM7OztLQURQRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvW2lkXS5qcz9jMmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci5tb2R1bGUuc2NzcydcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXJzIH0pIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICAgIGxldCBtYXh4MiA9IE51bWJlci5wYXJzZUludChxdWVyeS5pZCk7XG4gICAgY29uc29sZS5sb2coJ1paWEM9JyArIHF1ZXJ5LmlkICsgJyBNYXg9JyArIG1heHgyKTsgLy9xdWVyeS5pZCA9IC9wYWdlL2lkXG4gICAgbGV0IHVzZXIgPSB1c2Vyc1swXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXt1c2VyLm5hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cbiAgICAgICAgICAgICAgICA8aDE+0JDQstC40LDQutC+0LzQv9Cw0L3QuNGPIGMgaWQge3F1ZXJ5LmlkfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj7QmNC80Y8g0LDQstC40LDQutC+0LzQv9Cw0L3QuNC4IC0ge3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW5Db250YWluZXI+XG4gICAgKVxufTtcblxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YClcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXNlciB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9XG59Ki9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbiAgICAvL2lmIChwYXJhbXMuaWQgIT0gXCJib290c3RyYXAubWluLmNzc1wiKSB7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdFZBTFVFPScgKyBwYXJhbXMuaWQgKyBcIiwgdHlwZT1cIiArIHR5cGVvZiBwYXJhbXMuaWQpOyAvL3BhcmFtcy5pZCA9IC9wYWdlL2lkXG4gICAgbGV0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYygncGFnZXMvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgLy99XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBwcm9wczogeyB1c2VycyB9LFxuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNYWluQ29udGFpbmVyIiwiVXNlciIsInVzZXJzIiwicXVlcnkiLCJtYXh4MiIsIk51bWJlciIsInBhcnNlSW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImtleXdvcmRzIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ })

});