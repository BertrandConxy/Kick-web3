"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/factory.js */ \"./contracts/factory.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\nconst campaigns = [\n    {\n        title: \"Campaign 1\",\n        description: \"This is the first campaign\",\n        minimumContribution: 100,\n        balance: 1000,\n        requestsCount: 5,\n        approversCount: 10,\n        manager: \"0x123\"\n    },\n    {\n        title: \"Campaign 2\",\n        description: \"This is the second campaign\",\n        minimumContribution: 200,\n        balance: 2000,\n        requestsCount: 10,\n        approversCount: 20,\n        manager: \"0x456\"\n    }\n];\nconst Home = (param)=>{\n    let { deployedCampaigns  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mt4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                columns: 2,\n                className: \"mt4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                floated: \"right\",\n                                content: \"Create Campaign\",\n                                icon: \"add circle\",\n                                primary: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                children: deployedCampaigns.map((address)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Header, {\n                                        children: \"Campaign 1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                                        children: \"0x123\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Description, {\n                                        children: \"This is the first campaign\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                extra: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"user\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \"10 Approvers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"dollar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \"1000 Balance\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                extra: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    primary: true,\n                                    children: \"View Campaign\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, address, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nHome.getInitialProps = async ()=>{\n    const deployedCampaigns = await _contracts_factory_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call();\n    return {\n        deployedCampaigns\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNKO0FBQ0w7QUFDOEI7QUFFdkUsTUFBTVMsWUFBWTtJQUNoQjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMscUJBQXFCO1FBQ3JCQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxTQUFTO0lBQ1g7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMscUJBQXFCO1FBQ3JCQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxTQUFTO0lBQ1g7Q0FDRDtBQUVELE1BQU1DLE9BQU8sU0FBMkI7UUFBMUIsRUFBRUMsa0JBQWlCLEVBQUU7SUFDakMscUJBQ0UsOERBQUNWLHdEQUFTQTtRQUFDVyxXQUFVOzswQkFDbkIsOERBQUNaLG1EQUFJQTtnQkFBQ2EsU0FBUztnQkFBR0QsV0FBVTswQkFDMUIsNEVBQUNaLHVEQUFROztzQ0FDUCw4REFBQ0EsMERBQVc7c0NBQ1YsNEVBQUNnQjswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRU4sOERBQUNoQiwwREFBVztzQ0FDViw0RUFBQ0YscURBQU1BO2dDQUNMbUIsU0FBUTtnQ0FDUkMsU0FBUTtnQ0FDUkMsTUFBSztnQ0FDTEMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZiw4REFBQ3ZCLHlEQUFVOzBCQUNSYyxrQkFBa0JXLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO29CQUNsQyxxQkFDRSw4REFBQzFCLG1EQUFJQTs7MENBQ0gsOERBQUNBLDJEQUFZOztrREFDWCw4REFBQ0EsMERBQVc7a0RBQUM7Ozs7OztrREFDYiw4REFBQ0Esd0RBQVM7a0RBQUM7Ozs7OztrREFDWCw4REFBQ0EsK0RBQWdCO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRXBCLDhEQUFDQSwyREFBWTtnQ0FBQytCLEtBQUs7O2tEQUNqQiw4REFBQ0M7OzBEQUNDLDhEQUFDOUIsbURBQUlBO2dEQUFDK0IsTUFBSzs7Ozs7OzRDQUFTOzs7Ozs7O2tEQUd0Qiw4REFBQ0Q7OzBEQUNDLDhEQUFDOUIsbURBQUlBO2dEQUFDK0IsTUFBSzs7Ozs7OzRDQUFXOzs7Ozs7Ozs7Ozs7OzBDQUkxQiw4REFBQ2pDLDJEQUFZO2dDQUFDK0IsS0FBSzswQ0FDakIsNEVBQUM5QixxREFBTUE7b0NBQUNzQixPQUFPOzhDQUFDOzs7Ozs7Ozs7Ozs7dUJBakJURzs7Ozs7Z0JBcUJmOzs7Ozs7Ozs7Ozs7QUFJUjtLQTlDTWI7QUFnRE5BLEtBQUtxQixlQUFlLEdBQUcsVUFBWTtJQUNqQyxNQUFNcEIsb0JBQW9CLE1BQU1mLDBGQUFxQyxHQUFHc0MsSUFBSTtJQUM1RSxPQUFPO1FBQUV2QjtJQUFrQjtBQUM3QjtBQUVBLCtEQUFlRCxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGluc3RhbmNlIGZyb20gJy4uL2NvbnRyYWN0cy9mYWN0b3J5LmpzJ1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJ1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEljb24sIEdyaWQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgY2FtcGFpZ25zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2FtcGFpZ24gMScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGZpcnN0IGNhbXBhaWduJyxcclxuICAgIG1pbmltdW1Db250cmlidXRpb246IDEwMCxcclxuICAgIGJhbGFuY2U6IDEwMDAsXHJcbiAgICByZXF1ZXN0c0NvdW50OiA1LFxyXG4gICAgYXBwcm92ZXJzQ291bnQ6IDEwLFxyXG4gICAgbWFuYWdlcjogJzB4MTIzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2FtcGFpZ24gMicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIHNlY29uZCBjYW1wYWlnbicsXHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiAyMDAsXHJcbiAgICBiYWxhbmNlOiAyMDAwLFxyXG4gICAgcmVxdWVzdHNDb3VudDogMTAsXHJcbiAgICBhcHByb3ZlcnNDb3VudDogMjAsXHJcbiAgICBtYW5hZ2VyOiAnMHg0NTYnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBkZXBsb3llZENhbXBhaWducyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQ0XCI+XHJcbiAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IGNsYXNzTmFtZT1cIm10NFwiPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPGgzPk9wZW4gQ2FtcGFpZ25zPC9oMz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxyXG4gICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPENhcmQuR3JvdXA+XHJcbiAgICAgICAge2RlcGxveWVkQ2FtcGFpZ25zLm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQga2V5PXthZGRyZXNzfT5cclxuICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPkNhbXBhaWduIDE8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YT4weDEyMzwvQ2FyZC5NZXRhPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+VGhpcyBpcyB0aGUgZmlyc3QgY2FtcGFpZ248L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgMTAgQXBwcm92ZXJzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJkb2xsYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAxMDAwIEJhbGFuY2VcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+VmlldyBDYW1wYWlnbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ2FyZC5Hcm91cD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGVwbG95ZWRDYW1wYWlnbnMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpXHJcbiAgcmV0dXJuIHsgZGVwbG95ZWRDYW1wYWlnbnMgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5zdGFuY2UiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkdyaWQiLCJDb250YWluZXIiLCJjYW1wYWlnbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiSG9tZSIsImRlcGxveWVkQ2FtcGFpZ25zIiwiY2xhc3NOYW1lIiwiY29sdW1ucyIsIlJvdyIsIkNvbHVtbiIsImgzIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIkdyb3VwIiwibWFwIiwiYWRkcmVzcyIsIkNvbnRlbnQiLCJIZWFkZXIiLCJNZXRhIiwiRGVzY3JpcHRpb24iLCJleHRyYSIsImRpdiIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});