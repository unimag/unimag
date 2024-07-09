"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 2513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5858);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_header_SiteNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2321);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6527);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6324);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5317);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3163);
/* harmony import */ var _styles_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3325);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6657);

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}








const NotFoundPage = props => {
  const {
    edges
  } = props.data.allMarkdownRemark;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__/* .Wrapper */ .i, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("header", {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .SiteHeader */ .HV, _styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .outer */ .L9,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div", {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .outer */ .L9, _styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .SiteNavMain */ .mr,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div", {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .inner */ .aN
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_components_header_SiteNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    isHome: false
  })))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("main", {
    id: "site-main",
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .outer */ .L9, ErrorContent,  true ? "" : 0,  true ? "" : 0],
    className: "error-content"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div", {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .inner */ .aN,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("section", {
    style: {
      textAlign: 'center'
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(ErrorCode, null, "404"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(ErrorDescription, null, "Page not found"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    css: ErrorLink,
    to: ""
  }, "Go to the front page \u2192")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)("div", {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_7__/* .PostFeed */ .Qg,
    className: "post-feed"
  }, edges.map(({
    node
  }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__/* .jsx */ .tZ)(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__/* .PostCard */ .y4, {
    key: node.fields.slug,
    post: node
  })))))));
};
const pageQuery = "2619518684";
const ErrorContent =  true ? {
  name: "1mns69l",
  styles: "padding:14vw 4vw 6vw;@media (max-width: 800px){padding-top:24vw;}@media (max-width: 500px){padding-top:28vw;}@media (min-width: 940px){.post-card{margin-bottom:0;padding-bottom:0;border-bottom:none;}}"
} : 0;
const ErrorCode = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("h1",  true ? {
  target: "e1onl3vt1"
} : 0)("margin:0;color:", _styles_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors */ .O.lightgrey, ";font-size:12vw;line-height:1em;letter-spacing:-5px;opacity:0.75;@media (max-width: 800px){font-size:11.2rem;}" + ( true ? "" : 0));
const ErrorDescription = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("p",  true ? {
  target: "e1onl3vt0"
} : 0)("margin:0;color:", _styles_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors */ .O.midgrey, ";font-size:3rem;line-height:1.3em;font-weight:400;@media (max-width: 800px){margin:5px 0 0 0;font-size:1.8rem;}" + ( true ? "" : 0));
const ErrorLink =  true ? {
  name: "13u1x5c",
  styles: "display:inline-block;margin-top:5px"
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map