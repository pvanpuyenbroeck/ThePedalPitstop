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

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/constants.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground:white;\\npadding:0;\\n    grid-area: header;\\n    display:flex;\\n    justify-content: space-between ;\\n    /* margin:0 40px; */\\n    height:96px;\\n    padding:var(--padding);\\n    align-items:center;\\n    & div{\\n        /* height: 100% ; */\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position:absolute;\\n    left:16px;\\n    right:16px;\\n    justify-content:space-between;\\n    display:flex ;\\n    /* background:red ; */\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display:flex;\\n    align-items:center;\\n    justify-content:center;\\n    font-size:32px;\\n    font-weight:500;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    color:var(--black75);\\n    display:flex;\\n    align-items:center;\\n    gap:16px;\\n    font-size:12px;\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-size: 15px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    /* width:76px; */\\n    display:flex;\\n    align-items:center;\\n    font-size:1.5rem;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex-grow:1;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    \\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nvar useMediaQuery = function(width) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), targetReached = ref[0], setTargetReached = ref[1];\n    var updateTarget = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(e) {\n        if (e.matches) {\n            setTargetReached(true);\n        } else {\n            setTargetReached(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var media = window.matchMedia(\"(max-width: \".concat(width, \"px)\"));\n        media.addListener(updateTarget);\n        // Check on mount (callback is not called until a change occurs)\n        if (media.matches) {\n            setTargetReached(true);\n        }\n        return function() {\n            return media.removeListener(updateTarget);\n        };\n    }, []);\n    return targetReached;\n};\n_s(useMediaQuery, \"9O+C1bv5fBsS7bGWwYYzKJz74+E=\");\nfunction header(isMobile) {\n    var _this = this;\n    _s1();\n    var isBreakpoint = useMediaQuery(_constants__WEBPACK_IMPORTED_MODULE_3__.BREAKPOINTS.tabletMin);\n    var NavMenu = function() {\n        console.log(isBreakpoint);\n        if (isBreakpoint) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HamburgerNav, {\n                children: \"Hamburger\"\n            }, void 0, false, {\n                fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                lineNumber: 38,\n                columnNumber: 24\n            }, _this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Contact, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContactInfo, {\n                        style: {\n                            color: \"var(--primarycolor)\"\n                        },\n                        children: \"info@thepedalpitstop.be\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContactInfo, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Instagram, {}, void 0, false, {\n                        fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Twitter, {}, void 0, false, {\n                        fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                children: \"The Pedal Pitstop\"\n            }, void 0, false, {\n                fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                lineNumber: 54,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavMenu, {}, void 0, false, {\n                fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pieter/Documents/www/next/ThePedalPitstop/components/header/header.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n}\n_s1(header, \"atqENnNhZG7oggUbAQeVzcs3bJc=\", false, function() {\n    return [\n        useMediaQuery\n    ];\n});\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].section.withConfig({\n    displayName: \"header__HeaderWrapper\",\n    componentId: \"sc-7b88bb5d-0\"\n})(_templateObject());\n_c = HeaderWrapper;\nvar TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__TitleWrapper\",\n    componentId: \"sc-7b88bb5d-1\"\n})(_templateObject1());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__Title\",\n    componentId: \"sc-7b88bb5d-2\"\n})(_templateObject2());\nvar Contact = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__Contact\",\n    componentId: \"sc-7b88bb5d-3\"\n})(_templateObject3());\n_c1 = Contact;\nvar ContactInfo = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__ContactInfo\",\n    componentId: \"sc-7b88bb5d-4\"\n})(_templateObject4());\n_c2 = ContactInfo;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__Logo\",\n    componentId: \"sc-7b88bb5d-5\"\n})(_templateObject5());\n_c3 = Logo;\nvar Spacer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__Spacer\",\n    componentId: \"sc-7b88bb5d-6\"\n})(_templateObject6());\nvar HamburgerNav = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"header__HamburgerNav\",\n    componentId: \"sc-7b88bb5d-7\"\n})(_templateObject7());\n_c4 = HamburgerNav;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HeaderWrapper\");\n$RefreshReg$(_c1, \"Contact\");\n$RefreshReg$(_c2, \"ContactInfo\");\n$RefreshReg$(_c3, \"Logo\");\n$RefreshReg$(_c4, \"HamburgerNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBQ1U7QUFDUztBQUNkO0FBRTNDLElBQU1RLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLElBQTBDTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWxETSxhQUFhLEdBQXNCTixHQUFlLEdBQXJDLEVBQUVPLGdCQUFnQixHQUFJUCxHQUFlLEdBQW5CO0lBRXRDLElBQU1RLFlBQVksR0FBR1Asa0RBQVcsQ0FBQyxTQUFDUSxDQUFDLEVBQUs7UUFDcEMsSUFBSUEsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7WUFDWEgsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTztZQUNIQSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOTCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFNUyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLGNBQWEsQ0FBUSxNQUFHLENBQVRSLEtBQUssRUFBQyxLQUFHLENBQUMsQ0FBQztRQUMxRE0sS0FBSyxDQUFDRyxXQUFXLENBQUNOLFlBQVksQ0FBQyxDQUFDO1FBRWhDLGdFQUFnRTtRQUNoRSxJQUFJRyxLQUFLLENBQUNELE9BQU8sRUFBRTtZQUNmSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsT0FBTzttQkFBTUksS0FBSyxDQUFDSSxjQUFjLENBQUNQLFlBQVksQ0FBQztTQUFBLENBQUM7SUFDcEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBT0YsYUFBYSxDQUFDO0FBQ3pCLENBQUM7R0F4QktGLGFBQWE7QUEwQkosU0FBU1ksTUFBTSxDQUFDQyxRQUFRLEVBQUU7OztJQUNyQyxJQUFNQyxZQUFZLEdBQUdkLGFBQWEsQ0FBQ0QsNkRBQXFCLENBQUM7SUFDekQsSUFBTWlCLE9BQU8sR0FBRyxXQUFLO1FBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osWUFBWSxDQUFDLENBQUM7UUFDdEIsSUFBR0EsWUFBWSxFQUFDO1lBQ1oscUJBQU8sOERBQUNLLFlBQVk7MEJBQUMsV0FBUzs7Ozs7cUJBQWUsQ0FBQztRQUNsRCxPQUVRO1lBQ1kscUJBQ2hCLDhEQUFDQyxPQUFPOztrQ0FDSiw4REFBQ0MsV0FBVzt3QkFBQ0MsS0FBSyxFQUFFOzRCQUFFQyxLQUFLLEVBQUUscUJBQXFCO3lCQUFFO2tDQUFFLHlCQUF1Qjs7Ozs7NkJBQWM7a0NBQzNGLDhEQUFDRixXQUFXO2tDQUNSLDRFQUFDRyxHQUFDO3NDQUFDLFNBQU87Ozs7O2lDQUFJOzs7Ozs2QkFDSjtrQ0FDZCw4REFBQzlCLG9EQUFTOzs7OzZCQUFHO2tDQUNiLDhEQUFDQyxrREFBTzs7Ozs2QkFBRzs7Ozs7O3FCQUNMLENBQUM7UUFBQSxDQUFDO0lBQ3BCLENBQUM7SUFDUCxxQkFDSSw4REFBQzhCLGFBQWE7OzBCQUNWLDhEQUFDQyxJQUFJOzBCQUFDLG1CQUFpQjs7Ozs7b0JBQU87MEJBTWhDLDhEQUFDVixPQUFPOzs7O29CQUFFOzs7Ozs7WUFTSSxDQUNsQjtBQUNKLENBQUM7SUF0Q3VCSixNQUFNOztRQUNMWixhQUFhOzs7QUF1Q3RDLElBQU15QixhQUFhLEdBQUdoQyw0RUFBYzs7O3FCQWFuQztBQWJLZ0MsS0FBQUEsYUFBYTtBQWVuQixJQUFNRyxZQUFZLEdBQUduQyx3RUFBVTs7O3NCQU85QjtBQUVELElBQU1xQyxLQUFLLEdBQUdyQyx3RUFBVTs7O3NCQU12QjtBQUVELElBQU0yQixPQUFPLEdBQUczQix3RUFBVTs7O3NCQU96QjtBQVBLMkIsTUFBQUEsT0FBTztBQVNiLElBQU1DLFdBQVcsR0FBRzVCLHdFQUFVOzs7c0JBRTdCO0FBRks0QixNQUFBQSxXQUFXO0FBSWpCLElBQU1LLElBQUksR0FBR2pDLHdFQUFVOzs7c0JBS3RCO0FBTEtpQyxNQUFBQSxJQUFJO0FBTVYsSUFBTUssTUFBTSxHQUFHdEMsd0VBQVU7OztzQkFFeEI7QUFFRCxJQUFNMEIsWUFBWSxHQUFHMUIsd0VBQVU7OztzQkFFOUI7QUFGSzBCLE1BQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzP2Y5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7SW5zdGFncmFtLFR3aXR0ZXJ9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgdXNlTWVkaWFRdWVyeSA9ICh3aWR0aCkgPT4ge1xuICAgIGNvbnN0IFt0YXJnZXRSZWFjaGVkLCBzZXRUYXJnZXRSZWFjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHVwZGF0ZVRhcmdldCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHNldFRhcmdldFJlYWNoZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUYXJnZXRSZWFjaGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICAgIG1lZGlhLmFkZExpc3RlbmVyKHVwZGF0ZVRhcmdldCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgb24gbW91bnQgKGNhbGxiYWNrIGlzIG5vdCBjYWxsZWQgdW50aWwgYSBjaGFuZ2Ugb2NjdXJzKVxuICAgICAgICBpZiAobWVkaWEubWF0Y2hlcykge1xuICAgICAgICAgICAgc2V0VGFyZ2V0UmVhY2hlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiBtZWRpYS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVUYXJnZXQpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0YXJnZXRSZWFjaGVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKGlzTW9iaWxlKSB7XG4gICAgY29uc3QgaXNCcmVha3BvaW50ID0gdXNlTWVkaWFRdWVyeShCUkVBS1BPSU5UUy50YWJsZXRNaW4pO1xuICAgIGNvbnN0IE5hdk1lbnUgPSAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coaXNCcmVha3BvaW50KTtcbiAgICAgICAgICAgIGlmKGlzQnJlYWtwb2ludCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIYW1idXJnZXJOYXY+SGFtYnVyZ2VyPC9IYW1idXJnZXJOYXY+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29udGFjdD5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RJbmZvIHN0eWxlPXt7IGNvbG9yOiBcInZhcigtLXByaW1hcnljb2xvcilcIiB9fT5pbmZvQHRoZXBlZGFscGl0c3RvcC5iZTwvQ29udGFjdEluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0SW5mbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFjdEluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXIgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhY3Q+KX1cbiAgICAgICAgfSBcbiAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxuICAgICAgICAgIDxMb2dvPlRoZSBQZWRhbCBQaXRzdG9wPC9Mb2dvPlxuICAgICAgICAgIHsvKiA8VGl0bGVXcmFwcGVyPlxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDxUaXRsZT48L1RpdGxlPlxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgPC9UaXRsZVdyYXBwZXI+ICovfVxuICAgICAgICA8TmF2TWVudS8+XG4gICAgICAgICAgICAgICAgICB7LyogPENvbnRhY3Q+XG4gICAgICAgICAgICAgIDxDb250YWN0SW5mbyBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS1wcmltYXJ5Y29sb3IpXCIgfX0+aW5mb0B0aGVwZWRhbHBpdHN0b3AuYmU8L0NvbnRhY3RJbmZvPlxuICAgICAgICAgICAgICA8Q29udGFjdEluZm8+XG4gICAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8L0NvbnRhY3RJbmZvPlxuICAgICAgICAgICAgICA8SW5zdGFncmFtIC8+XG4gICAgICAgICAgICAgIDxUd2l0dGVyIC8+XG4gICAgICAgICAgPC9Db250YWN0PiAqL31cbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuYmFja2dyb3VuZDp3aGl0ZTtcbnBhZGRpbmc6MDtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIDtcbiAgICAvKiBtYXJnaW46MCA0MHB4OyAqL1xuICAgIGhlaWdodDo5NnB4O1xuICAgIHBhZGRpbmc6dmFyKC0tcGFkZGluZyk7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICYgZGl2e1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMCUgOyAqL1xuICAgIH1cbmA7XG5cbmNvbnN0IFRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDoxNnB4O1xuICAgIHJpZ2h0OjE2cHg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTpmbGV4IDtcbiAgICAvKiBiYWNrZ3JvdW5kOnJlZCA7ICovXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTozMnB4O1xuICAgIGZvbnQtd2VpZ2h0OjUwMDtcbmA7XG5cbmNvbnN0IENvbnRhY3QgPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOnZhcigtLWJsYWNrNzUpO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOjE2cHg7XG4gICAgZm9udC1zaXplOjEycHg7XG5cbmA7XG5cbmNvbnN0IENvbnRhY3RJbmZvID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXNpemU6IDE1cHg7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgICAvKiB3aWR0aDo3NnB4OyAqL1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbmA7XG5jb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzoxO1xuYDtcblxuY29uc3QgSGFtYnVyZ2VyTmF2ID0gc3R5bGVkLmRpdmBcbiAgICBcbmA7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW5zdGFncmFtIiwiVHdpdHRlciIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJCUkVBS1BPSU5UUyIsInVzZU1lZGlhUXVlcnkiLCJ3aWR0aCIsInRhcmdldFJlYWNoZWQiLCJzZXRUYXJnZXRSZWFjaGVkIiwidXBkYXRlVGFyZ2V0IiwiZSIsIm1hdGNoZXMiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiaGVhZGVyIiwiaXNNb2JpbGUiLCJpc0JyZWFrcG9pbnQiLCJ0YWJsZXRNaW4iLCJOYXZNZW51IiwiY29uc29sZSIsImxvZyIsIkhhbWJ1cmdlck5hdiIsIkNvbnRhY3QiLCJDb250YWN0SW5mbyIsInN0eWxlIiwiY29sb3IiLCJhIiwiSGVhZGVyV3JhcHBlciIsIkxvZ28iLCJzZWN0aW9uIiwiVGl0bGVXcmFwcGVyIiwiZGl2IiwiVGl0bGUiLCJTcGFjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/header.js\n"));

/***/ })

});