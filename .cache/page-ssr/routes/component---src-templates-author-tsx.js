"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 2355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5858);
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

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}










function Author({
  data,
  location
}) {
  const author = data.authorYaml;
  const edges = data.allMarkdownRemark.edges.filter(edge => {
    const isDraft = edge.node.frontmatter.draft !== true || "production" === 'development';
    let authorParticipated = false;
    if (edge.node.frontmatter.author) {
      edge.node.frontmatter.author.forEach(element => {
        if (element.name === author.name) {
          authorParticipated = true;
        }
      });
    }
    return isDraft && authorParticipated;
  });
  const totalCount = edges.length;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(react_helmet__WEBPACK_IMPORTED_MODULE_7__.Helmet, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("html", {
    lang: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.lang
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("title", null, author.name, " - ", _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "description",
    content: author.bio
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:site_name",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:type",
    content: "profile"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:title",
    content: `${author.name} - ${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title}`
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "og:url",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.siteUrl + location.pathname
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "article:publisher",
    content: "https://www.facebook.com/ghost"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    property: "article:author",
    content: "https://www.facebook.com/ghost"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:card",
    content: "summary"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:title",
    content: `${author.name} - ${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.title}`
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:url",
    content: _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.siteUrl + location.pathname
  }), _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.twitter && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:site",
    content: `@${_website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.twitter.split('https://twitter.com/')[1]}`
  }), _website_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.twitter && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("meta", {
    name: "twitter:creator",
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
    backgroundImage: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__/* .getSrc */ .dk)(author.profile_image),
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .outer */ .L9, _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteHeaderBackground */ .EB,  true ? "" : 0,  true ? "" : 0],
    className: "site-header-background"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: _styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .inner */ .aN
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteHeaderContent */ .VD, {
    css: AuthorHeader,
    className: "site-header-content author-header"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("img", {
    style: {
      marginTop: '8px'
    },
    css: [_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .AuthorProfileImage */ .$_, AuthorProfileBioImage,  true ? "" : 0,  true ? "" : 0],
    src: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__/* .getSrc */ .dk)(data.authorYaml.avatar),
    alt: author.name
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthHeaderContent, {
    className: "author-header-content"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(_styles_shared__WEBPACK_IMPORTED_MODULE_6__/* .SiteTitle */ .JL, {
    className: "site-title"
  }, author.name), author.bio && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorBio, {
    className: "author-bio"
  }, author.bio), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    css: AuthorMeta,
    className: "author-meta"
  }, author.location && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    className: "author-location",
    css: [HiddenMobile,  true ? "" : 0,  true ? "" : 0]
  }, author.location), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("div", {
    className: "author-stats",
    css: [HiddenMobile,  true ? "" : 0,  true ? "" : 0]
  }, totalCount > 1 && `${totalCount} posts`, totalCount === 1 && '1 post', totalCount === 0 && 'No posts'), author.website && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLink, {
    className: "author-social-link"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLinkAnchor, {
    href: author.website,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Website")), author.twitter && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLink, {
    className: "author-social-link"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLinkAnchor, {
    href: `https://twitter.com/${author.twitter}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Twitter")), author.facebook && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLink, {
    className: "author-social-link"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)(AuthorSocialLinkAnchor, {
    href: `https://www.facebook.com/${author.facebook}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Facebook")))))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__/* .jsx */ .tZ)("main", {
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
const pageQuery = "631620413";
const HiddenMobile =  true ? {
  name: "y1z0oi",
  styles: "@media (max-width: 500px){display:none;}"
} : 0;
const AuthorHeader =  true ? {
  name: "ns0u3f",
  styles: "display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;padding:10vw 0 10px;align-items:center;@media (max-width: 500px){padding:10px 0 0;padding-bottom:10px;}"
} : 0;
const AuthorMeta =  true ? {
  name: "h3867g",
  styles: "z-index:10;flex-shrink:0;display:flex;align-items:center;margin:0 0 0 1px;font-size:1.2rem;font-weight:400;letter-spacing:0.2px;text-transform:uppercase;white-space:nowrap;.author-location+.author-stats:before,.author-stats+.author-social-link:before,.author-social-link+.author-social-link:before{content:'\u2022';display:inline-block;margin:0 12px;color:#fff;opacity:0.6;}@media (max-width: 500px){margin-top:8px;}@media (max-width: 700px){.author-location,.author-stats,.author-stats+.author-social-link:first-of-type:before{display:none;}}"
} : 0;
const AuthorSocialLink = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("span",  true ? {
  target: "e3kfhi13"
} : 0)( true ? {
  name: "1fd6p57",
  styles: "display:inline-block;margin:0;padding:6px 0"
} : 0);
const AuthorBio = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("h2",  true ? {
  target: "e3kfhi12"
} : 0)( true ? {
  name: "brgwfv",
  styles: "z-index:10;flex-shrink:0;margin:6px 0 0;max-width:46em;font-size:2rem;line-height:1.3em;font-weight:400;opacity:0.8"
} : 0);
const AuthHeaderContent = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("div",  true ? {
  target: "e3kfhi11"
} : 0)( true ? {
  name: "15xfc9p",
  styles: "display:flex;flex-direction:column;justify-content:center;margin:5px 0 0 30px;@media (max-width: 500px){align-items:center;margin:16px 0 0 0;}"
} : 0);

// .site-header-content .author-profile-image
const AuthorProfileBioImage =  true ? {
  name: "1ngtdd3",
  styles: "z-index:10;flex-shrink:0;margin:-4px 0 0;width:110px;height:110px;box-shadow:rgba(255, 255, 255, 0.1) 0 0 0 6px;border-radius:100%"
} : 0;
const AuthorSocialLinkAnchor = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("a",  true ? {
  target: "e3kfhi10"
} : 0)( true ? {
  name: "3curt1",
  styles: "color:#fff;font-weight:600;:hover{opacity:1;}"
} : 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-author-tsx.js.map