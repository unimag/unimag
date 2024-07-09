"use strict";
exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 2178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2996);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3040);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
/* harmony import */ var _components_header_SiteNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2321);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6527);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6324);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5317);
/* harmony import */ var _styles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3325);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4593);
/* harmony import */ var _website_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8409);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6657);











function Tags({
  pageContext,
  data,
  location
}) {
  var _tagData$node;
  const tag = pageContext.tag ? pageContext.tag : '';
  const {
    edges,
    totalCount
  } = data.allMarkdownRemark;
  const tagData = data.allTagYaml.edges.find(n => n.node.yamlId.toLowerCase() === tag.toLowerCase());
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_7__.Helmet, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("html", {
    lang: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.lang
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("title", null, tag, " - ", _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "description",
    content: tagData !== null && tagData !== void 0 && tagData.node ? tagData.node.description : ''
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:site_name",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:type",
    content: "website"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:title",
    content: `${tag} - ${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title}`
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:url",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.siteUrl + location.pathname
  }), _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.facebook && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "article:publisher",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.facebook
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:title",
    content: `${tag} - ${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title}`
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:url",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.siteUrl + location.pathname
  }), _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.twitter && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:site",
    content: `@${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.twitter.split('https://twitter.com/')[1]}`
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__/* .Wrapper */ .i, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("header", {
    className: "site-archive-header",
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteHeader */ .HV, _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteArchiveHeader */ .it,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .outer */ .L9, _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteNavMain */ .mr,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .inner */ .aN
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_components_header_SiteNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    isHome: false
  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .ResponsiveHeaderBackground */ .x6, {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .outer */ .L9, _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteHeaderBackground */ .EB,  true ? "" : 0,  true ? "" : 0],
    backgroundImage: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__/* .getSrc */ .dk)(tagData === null || tagData === void 0 ? void 0 : (_tagData$node = tagData.node) === null || _tagData$node === void 0 ? void 0 : _tagData$node.image),
    className: "site-header-background"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteHeaderContent */ .VD, {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .inner */ .aN,
    className: "site-header-content"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteTitle */ .JL, {
    className: "site-title"
  }, tag), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteDescription */ .bO, {
    className: "site-description"
  }, tagData !== null && tagData !== void 0 && tagData.node.description ? tagData.node.description : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "A collection of ", totalCount > 1 && `${totalCount} posts`, totalCount === 1 && '1 post', totalCount === 0 && 'No posts'))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("main", {
    id: "site-main",
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteMain */ .In, _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .outer */ .L9,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .inner */ .aN
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .PostFeed */ .Qg,  true ? "" : 0,  true ? "" : 0]
  }, edges.map(({
    node
  }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__/* .PostCard */ .y4, {
    key: node.fields.slug,
    post: node
  }))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);
const pageQuery = "3633381427";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-tags-tsx.js.map