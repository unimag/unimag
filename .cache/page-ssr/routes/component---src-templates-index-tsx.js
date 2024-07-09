"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 2922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ templates)
});

// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./src/components/Footer.tsx
var Footer = __webpack_require__(4353);
// EXTERNAL MODULE: ./src/components/header/SiteNav.tsx + 5 modules
var SiteNav = __webpack_require__(2321);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/polished/dist/polished.esm.js + 8 modules
var polished_esm = __webpack_require__(4101);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
// EXTERNAL MODULE: ./src/styles/colors.ts
var colors = __webpack_require__(3163);
;// CONCATENATED MODULE: ./src/components/Pagination.tsx
function Pagination({currentPage,numPages}){const isFirst=currentPage===1;const isLast=currentPage===numPages;const prevPage=currentPage-1===1?'/':`../${(currentPage-1).toString()}`;const nextPage=`../${(currentPage+1).toString()}`;return (0,emotion_react_esm/* jsx */.tZ)("nav",{css:navCss},(0,emotion_react_esm/* jsx */.tZ)("div",null,!isFirst&&(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{to:prevPage,rel:"prev"},String.fromCharCode(171)),Array.from({length:numPages},(_,i)=>(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{key:`pagination-number${i+1}`,className:i+1===currentPage?'active':'',to:`/${i===0?'':i+1}`},i+1)),!isLast&&(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{to:nextPage,rel:"next"},String.fromCharCode(187))));}const navCss=/*#__PURE__*/ /*#__PURE__*/(0,emotion_react_esm/* css */.iv)("text-align:center;div{display:inline-block;}a{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell;background:#fff;color:black;float:left;padding:8px 16px;text-decoration:none;transition:background-color 0.3s;border:1px solid #ddd;margin:0 4px;box-shadow:rgba(39, 44, 49, 0.06) 8px 14px 38px,rgba(39, 44, 49, 0.03) 1px 3px 8px;border-radius:6px;margin-bottom:5px;min-width:50px;&.active{-webkit-box-shadow:inset 3px 0px 0px 0px ",(0,polished_esm/* darken */._j)(0.05,colors/* colors */.O.darkgrey),";-moz-box-shadow:inset 3px 0px 0px 0px ",(0,polished_esm/* darken */._j)(0.05,colors/* colors */.O.darkgrey),";box-shadow:inset 3px 0px 0px 0px ",(0,polished_esm/* darken */._j)(0.05,colors/* colors */.O.darkgrey),";}&:hover:not(.active){background-color:#ddd;}&:hover{text-decoration:none;}}"+( true?"":0), true?"":0, true?"":0, true?"":0);/* harmony default export */ const components_Pagination = (Pagination);
// EXTERNAL MODULE: ./src/components/PostCard.tsx
var PostCard = __webpack_require__(6527);
// EXTERNAL MODULE: ./src/components/Wrapper.tsx
var Wrapper = __webpack_require__(6324);
// EXTERNAL MODULE: ./src/layouts/index.tsx + 1 modules
var layouts = __webpack_require__(5317);
// EXTERNAL MODULE: ./src/styles/shared.ts
var shared = __webpack_require__(3325);
// EXTERNAL MODULE: ./src/website-config.ts
var website_config = __webpack_require__(8409);
;// CONCATENATED MODULE: ./src/templates/index.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}











function IndexPage(props) {
  var _getImage, _getImage2;
  const width = (_getImage = (0,gatsby_image_module/* getImage */.gJ)(props.data.header)) === null || _getImage === void 0 ? void 0 : _getImage.width;
  const height = (_getImage2 = (0,gatsby_image_module/* getImage */.gJ)(props.data.header)) === null || _getImage2 === void 0 ? void 0 : _getImage2.height;
  return (0,emotion_react_esm/* jsx */.tZ)(layouts/* default */.Z, {
    css: HomePosts
  }, (0,emotion_react_esm/* jsx */.tZ)(Helmet.Helmet, null, (0,emotion_react_esm/* jsx */.tZ)("html", {
    lang: website_config/* default */.Z.lang
  }), (0,emotion_react_esm/* jsx */.tZ)("title", null, website_config/* default */.Z.title), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "description",
    content: website_config/* default */.Z.description
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:site_name",
    content: website_config/* default */.Z.title
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:type",
    content: "website"
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:title",
    content: website_config/* default */.Z.title
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:description",
    content: website_config/* default */.Z.description
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:url",
    content: website_config/* default */.Z.siteUrl
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:image",
    content: `${website_config/* default */.Z.siteUrl}${(0,gatsby_image_module/* getSrc */.dk)(props.data.header)}`
  }), website_config/* default */.Z.facebook && (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "article:publisher",
    content: website_config/* default */.Z.facebook
  }), website_config/* default */.Z.googleSiteVerification && (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "google-site-verification",
    content: website_config/* default */.Z.googleSiteVerification
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:title",
    content: website_config/* default */.Z.title
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:description",
    content: website_config/* default */.Z.description
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:url",
    content: website_config/* default */.Z.siteUrl
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:image",
    content: `${website_config/* default */.Z.siteUrl}${(0,gatsby_image_module/* getSrc */.dk)(props.data.header)}`
  }), website_config/* default */.Z.twitter && (0,emotion_react_esm/* jsx */.tZ)("meta", {
    name: "twitter:site",
    content: `@${website_config/* default */.Z.twitter.split('https://twitter.com/')[1]}`
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:image:width",
    content: width === null || width === void 0 ? void 0 : width.toString()
  }), (0,emotion_react_esm/* jsx */.tZ)("meta", {
    property: "og:image:height",
    content: height === null || height === void 0 ? void 0 : height.toString()
  })), (0,emotion_react_esm/* jsx */.tZ)(Wrapper/* Wrapper */.i, null, (0,emotion_react_esm/* jsx */.tZ)("div", {
    css: [shared/* outer */.L9, shared/* SiteHeader */.HV, shared/* SiteHeaderStyles */.IN,  true ? "" : 0,  true ? "" : 0],
    className: "site-header-background",
    style: {
      backgroundImage: `url('${(0,gatsby_image_module/* getSrc */.dk)(props.data.header)}')`
    }
  }, (0,emotion_react_esm/* jsx */.tZ)("div", {
    css: shared/* inner */.aN
  }, (0,emotion_react_esm/* jsx */.tZ)(SiteNav/* default */.Z, {
    isHome: true
  }), (0,emotion_react_esm/* jsx */.tZ)(shared/* SiteHeaderContent */.VD, {
    className: "site-header-content"
  }, (0,emotion_react_esm/* jsx */.tZ)(shared/* SiteTitle */.JL, {
    className: "site-title"
  }, props.data.logo ? (0,emotion_react_esm/* jsx */.tZ)("img", {
    style: {
      maxHeight: '55px',
      height: '55px'
    },
    src: (0,gatsby_image_module/* getSrc */.dk)(props.data.logo),
    alt: website_config/* default */.Z.title
  }) : website_config/* default */.Z.title), (0,emotion_react_esm/* jsx */.tZ)(shared/* SiteDescription */.bO, null, website_config/* default */.Z.description)))), (0,emotion_react_esm/* jsx */.tZ)("main", {
    id: "site-main",
    css: [shared/* SiteMain */.In, shared/* outer */.L9,  true ? "" : 0,  true ? "" : 0]
  }, (0,emotion_react_esm/* jsx */.tZ)("div", {
    css: [shared/* inner */.aN, shared/* Posts */.V8,  true ? "" : 0,  true ? "" : 0]
  }, (0,emotion_react_esm/* jsx */.tZ)("div", {
    css: [shared/* PostFeed */.Qg,  true ? "" : 0,  true ? "" : 0]
  }, props.data.allMarkdownRemark.edges.map((post, index) =>
  // filter out drafts in production
  (post.node.frontmatter.draft !== true || "production" !== 'production') && (0,emotion_react_esm/* jsx */.tZ)(PostCard/* PostCard */.y4, {
    key: post.node.fields.slug,
    post: post.node,
    isLarge: index === 0
  }))))), props.children, props.pageContext.numPages > 1 && (0,emotion_react_esm/* jsx */.tZ)(components_Pagination, {
    currentPage: props.pageContext.currentPage,
    numPages: props.pageContext.numPages
  }), (0,emotion_react_esm/* jsx */.tZ)(Footer/* Footer */.$, null)));
}
const pageQuery = "1342208298";
const HomePosts =  true ? {
  name: "1yqbmac",
  styles: "@media (min-width: 795px){.post-card-large{flex:1 1 100%;flex-direction:row;padding-bottom:40px;min-height:280px;border-top:0;}.post-card-large .post-card-title{margin-top:0;font-size:3.2rem;}.post-card-large:not(.no-image) .post-card-header{margin-top:0;}.post-card-large .post-card-image-link{position:relative;flex:1 1 auto;margin-bottom:0;min-height:380px;}.post-card-large .post-card-image{position:absolute;width:100%;height:100%;}.post-card-large .post-card-content{flex:0 1 361px;justify-content:center;}.post-card-large .post-card-title{margin-top:0;font-size:3.2rem;}.post-card-large .post-card-content-link{padding:0 0 0 40px;}.post-card-large .post-card-meta{padding:0 0 0 40px;}.post-card-large .post-card-excerpt p{margin-bottom:1.5em;font-size:1.8rem;line-height:1.5em;}}"
} : 0;
/* harmony default export */ const templates = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-index-tsx.js.map