(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,n){"use strict";n.r(e);var a=n(95),r=n.n(a),i=(n(0),n(260)),o=n(26),c=n(134),u=n(264);function s(){var t=r()(["color: green;"]);return s=function(){return t},t}e.default=function(){return Object(o.b)(c.a,null,Object(o.b)(u.a,{title:"Page two"}),Object(o.b)("h1",null,"Hi from the second page"),Object(o.b)("p",{css:Object(o.a)(s())},"Welcome to page 2"),Object(o.b)(i.Link,{to:"/"},"Go back to the homepage"))}},260:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=n(257),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(261),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var l=n(53);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},261:function(t,e,n){var a;t.exports=(a=n(265))&&a.default||a},264:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=n(269),u=n.n(c),s=n(260);function d(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,o=t.title;return r.a.createElement(s.StaticQuery,{query:l,render:function(t){var c=e||t.site.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d;var l="1025518380"},265:function(t,e,n){"use strict";n.r(e);n(54);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=n(94),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-pages-page-2-jsx-e31a67427150b01c9528.js.map