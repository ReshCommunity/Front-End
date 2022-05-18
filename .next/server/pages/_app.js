"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./redux/types/index.js
var types = __webpack_require__(702);
;// CONCATENATED MODULE: ./redux/reducers/languageReducer.js

const initState = {
    language: {
        name: "English",
        lang_code: "EN"
    }
};
const languageReducer = (state = initState, action)=>{
    switch(action.type){
        case types/* LANGUAGE */.a:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_languageReducer = (languageReducer);

;// CONCATENATED MODULE: ./redux/reducers/index.js


/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
    language: reducers_languageReducer
}));

;// CONCATENATED MODULE: ./redux/store.js




const composeEnhancers = (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)({
    trace: true,
    traceLimit: 25
});
const store = (0,external_redux_namespaceObject.createStore)(reducers, composeEnhancers((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ LANGUAGE)
/* harmony export */ });
// LANGUAGE
const LANGUAGE = "LANGUAGE";


/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(542));
module.exports = __webpack_exports__;

})();