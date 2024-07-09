
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\pages\\404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\pages\\about.tsx")),
  "component---src-templates-author-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\templates\\author.tsx")),
  "component---src-templates-index-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\templates\\index.tsx")),
  "component---src-templates-post-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\templates\\post.tsx")),
  "component---src-templates-tags-tsx": preferDefault(require("C:\\Users\\grhgrmgrhrm\\work\\github\\unimag\\src\\templates\\tags.tsx"))
}

