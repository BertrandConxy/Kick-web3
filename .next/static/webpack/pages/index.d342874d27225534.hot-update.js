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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/factory.js */ \"./contracts/factory.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst getApproversCount = async (address)=>{\n    const campaign = await _contracts_factory_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.deployedCampaigns(address).call();\n    return campaign.approversCount;\n};\nconst Home = (param)=>{\n    let { deployedCampaigns  } = param;\n    _s();\n    const [approversCount, setApproversCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        approversCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    columns: 2,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Open Campaigns\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    floated: \"right\",\n                                    content: \"Create Campaign\",\n                                    icon: \"add circle\",\n                                    primary: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                    children: deployedCampaigns.map((address)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Header, {\n                                        style: styles.wrap,\n                                        children: address\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                    extra: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                    name: \"user\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                getApproversCount(address)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                    name: \"dollar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                \"1000 Balance\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Content, {\n                                    extra: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        primary: true,\n                                        children: \"View Campaign\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, address, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\OneDrive\\\\Documents\\\\Projects\\\\kick-web3\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"upmziXBmY+lsXIsUqPqiiKUj+dU=\");\n_c = Home;\nHome.getInitialProps = async ()=>{\n    const deployedCampaigns = await _contracts_factory_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call();\n    return {\n        deployedCampaigns\n    };\n};\nconst styles = {\n    container: {\n        marginTop: \"50px\"\n    },\n    wrap: {\n        whiteSpace: \"nowrap\",\n        overflow: \"hidden\",\n        textOverflow: \"ellipsis\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDSjtBQUNMO0FBQzhCO0FBRXZFLE1BQU1TLG9CQUFvQixPQUFPQyxVQUFZO0lBQzNDLE1BQU1DLFdBQVcsTUFBTVIsdUZBQWtDLENBQUNPLFNBQVNJLElBQUk7SUFDdkUsT0FBT0gsU0FBU0ksY0FBYztBQUNoQztBQUVBLE1BQU1DLE9BQU8sU0FBMkI7UUFBMUIsRUFBRUgsa0JBQWlCLEVBQUU7O0lBQ2pDLE1BQU0sQ0FBQ0UsZ0JBQWdCRSxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUN2REQsZ0RBQVNBLENBQUMsSUFBTSxDQUFDLEdBQUc7UUFBQ2M7S0FBZTtJQUVwQyxxQkFDRSw4REFBQ0c7UUFBSUMsT0FBT0MsT0FBT0MsU0FBUztrQkFDMUIsNEVBQUNiLHdEQUFTQTs7OEJBQ1IsOERBQUNELG1EQUFJQTtvQkFBQ2UsU0FBUzs4QkFDYiw0RUFBQ2YsdURBQVE7OzBDQUNQLDhEQUFDQSwwREFBVzswQ0FDViw0RUFBQ2tCOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ2xCLDBEQUFXOzBDQUNWLDRFQUFDRixxREFBTUE7b0NBQ0xxQixTQUFRO29DQUNSQyxTQUFRO29DQUNSQyxNQUFLO29DQUNMQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtmLDhEQUFDekIseURBQVU7OEJBQ1JTLGtCQUFrQmtCLEdBQUcsQ0FBQyxDQUFDckIsVUFBWTt3QkFDbEMscUJBQ0UsOERBQUNOLG1EQUFJQTs7OENBQ0gsOERBQUNBLDJEQUFZOzhDQUNYLDRFQUFDQSwwREFBVzt3Q0FBQ2UsT0FBT0MsT0FBT2MsSUFBSTtrREFBR3hCOzs7Ozs7Ozs7Ozs4Q0FFcEMsOERBQUNOLDJEQUFZO29DQUFDK0IsS0FBSzs7c0RBQ2pCLDhEQUFDakI7OzhEQUNDLDhEQUFDWixtREFBSUE7b0RBQUM4QixNQUFLOzs7Ozs7Z0RBQ1YzQixrQkFBa0JDOzs7Ozs7O3NEQUVyQiw4REFBQ1E7OzhEQUNDLDhEQUFDWixtREFBSUE7b0RBQUM4QixNQUFLOzs7Ozs7Z0RBQVc7Ozs7Ozs7Ozs7Ozs7OENBSTFCLDhEQUFDaEMsMkRBQVk7b0NBQUMrQixLQUFLOzhDQUNqQiw0RUFBQzlCLHFEQUFNQTt3Q0FBQ3dCLE9BQU87a0RBQUM7Ozs7Ozs7Ozs7OzsyQkFmVG5COzs7OztvQkFtQmY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FqRE1NO0tBQUFBO0FBbUROQSxLQUFLcUIsZUFBZSxHQUFHLFVBQVk7SUFDakMsTUFBTXhCLG9CQUFvQixNQUFNViwwRkFBcUMsR0FBR1csSUFBSTtJQUM1RSxPQUFPO1FBQUVEO0lBQWtCO0FBQzdCO0FBRUEsTUFBTU8sU0FBUztJQUNiQyxXQUFXO1FBQ1RrQixXQUFXO0lBQ2I7SUFFQUwsTUFBTTtRQUNKTSxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsY0FBYztJQUNoQjtBQUNGO0FBRUEsK0RBQWUxQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGluc3RhbmNlIGZyb20gJy4uL2NvbnRyYWN0cy9mYWN0b3J5LmpzJ1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJ1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEljb24sIEdyaWQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgZ2V0QXBwcm92ZXJzQ291bnQgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xyXG4gIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5kZXBsb3llZENhbXBhaWducyhhZGRyZXNzKS5jYWxsKClcclxuICByZXR1cm4gY2FtcGFpZ24uYXBwcm92ZXJzQ291bnRcclxufVxyXG5cclxuY29uc3QgSG9tZSA9ICh7IGRlcGxveWVkQ2FtcGFpZ25zIH0pID0+IHtcclxuICBjb25zdCBbYXBwcm92ZXJzQ291bnQsIHNldEFwcHJvdmVyc0NvdW50XSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2FwcHJvdmVyc0NvdW50XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPGgzPk9wZW4gQ2FtcGFpZ25zPC9oMz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPENhcmQuR3JvdXA+XHJcbiAgICAgICAgICB7ZGVwbG95ZWRDYW1wYWlnbnMubWFwKChhZGRyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmQga2V5PXthZGRyZXNzfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLndyYXB9PnthZGRyZXNzfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRBcHByb3ZlcnNDb3VudChhZGRyZXNzKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImRvbGxhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMCBCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+VmlldyBDYW1wYWlnbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0NhcmQuR3JvdXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkZXBsb3llZENhbXBhaWducyA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKClcclxuICByZXR1cm4geyBkZXBsb3llZENhbXBhaWducyB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzUwcHgnLFxyXG4gIH0sXHJcblxyXG4gIHdyYXA6IHtcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbnN0YW5jZSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiR3JpZCIsIkNvbnRhaW5lciIsImdldEFwcHJvdmVyc0NvdW50IiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsImRlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImFwcHJvdmVyc0NvdW50IiwiSG9tZSIsInNldEFwcHJvdmVyc0NvdW50IiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb2x1bW5zIiwiUm93IiwiQ29sdW1uIiwiaDMiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiR3JvdXAiLCJtYXAiLCJDb250ZW50IiwiSGVhZGVyIiwid3JhcCIsImV4dHJhIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwibWFyZ2luVG9wIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});