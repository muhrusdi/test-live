(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return g});var a=n(1),r=n(0),o=n.n(r),c=n(2),i=n.n(c),d=n(194),l=n.n(d);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return d.withPrefix}),n.d(t,"navigate",function(){return d.navigate}),n.d(t,"push",function(){return d.push}),n.d(t,"replace",function(){return d.replace}),n.d(t,"navigateTo",function(){return d.navigateTo});var s=n(242),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var b=n(60);n.d(t,"parsePath",function(){return b.a});var p=o.a.createContext({}),g=function(e){return Object(a.d)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.d)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},219:function(e,t,n){"use strict";var a=n(1),r=n(372),o=n(0),c=n.n(o),i=(n(276),n(364)),d=n.n(i),l=(n(205),n(189)),s=n.n(l),u=(n(280),n(346)),b=n.n(u),p=(n(199),n(200)),g=n.n(p),m=n(186),f=n(184),O=n(61),A=n(9),j=n.n(A),y=c.a.createContext(!1),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleToggle=function(){console.log("toggle",n.state.toggle),n.setState(function(e){return{toggle:!e.toggle}})},n.state={toggle:!1},n}return j()(t,e),t.prototype.render=function(){return Object(a.d)(y.Provider,{value:{toggle:this.state.toggle,handleToggle:this.handleToggle}},this.props.children)},t}(o.Component),x=y.Consumer,v=n(53),w=n(183),k=n(243),R=n.n(k),U={name:"pb5ble",styles:"border-radius:14px;min-width:220px;padding:10px 0;box-shadow:0 8px 25px #33333312;a{padding:7px 18px;}"},I={name:"1gapyfo",styles:"height:60px;"},C={name:"u1jr60",styles:"height:40px;"},W={name:"1qx34im",styles:"transform:rotate(90deg);"},X=function(){var e=Object(m.a)("nav",{target:"e17u9loa0"})("height:",function(e){return e.toggle?"100vh":"60px"},";position:absolute;top:0;right:0;left:0;z-index:999999;width:100%;box-shadow:0 2px 8px 0 rgba(198,214,239,0.4);background-color:#ffffff;transition:background .36s cubic-bezier(0.32,0.08,0.24,1),height .56s cubic-bezier(0.52,0.16,0.24,1);"),t=(Object(m.a)("div",{target:"e17u9loa1"})("display:flex;",function(e){var t=e.gutter,n=e.align;return Object(a.c)("margin-left:-",t,"px;margin-right:-",t,"px;& > *{padding:0 ",t,"px;}align-items:",n,";")},""),Object(m.a)(g.a,{target:"e17u9loa2"})("color:#fff;height:32px;border-radius:16px;min-width:71.38px;background-color:",function(e){return e.theme.color.secondary},";border:1px solid ",function(e){return e.theme.color.secondary},";")),n=Object(m.a)(g.a,{target:"e17u9loa3"})("color:",function(e){return e.theme.color.primary},";min-width:106.89px;height:32px;border-radius:16px;border:1px solid ",function(e){return e.theme.color.secondary},";"),r=Object(a.d)(b.a,{css:U},Object(a.d)(b.a.Item,{key:"0"},Object(a.d)(w.Link,{to:"/app/overview"},"HR")),Object(a.d)(b.a.Item,{key:"1"},Object(a.d)(w.Link,{to:"/payroll"},"Payroll")),Object(a.d)(b.a.Item,{key:"2"},Object(a.d)(w.Link,{to:"/lending"},"Lending"))),o=Object(m.a)("a",{target:"e17u9loa4"})("color:",function(e){return e.theme.color.primary},";position:relative;font-weight:bold;@media screen and (max-width:",function(e){return e.theme.breakPoints.md},"){display:block;}& ~ div .ant-dropdown{@media screen and (min-width:",function(e){return e.theme.breakPoints.md},"){top:73.5px !important;}}"),i=Object(m.a)(w.Link,{target:"e17u9loa5"})("color:",function(e){return e.theme.color.primary},";font-weight:bold;"),l=Object(m.a)(g.a,{target:"e17u9loa6"})({name:"6i8goh",styles:"border-radius:21px;"}),u=Object(m.a)(g.a,{target:"e17u9loa7"})({name:"ga0r35",styles:"border-radius:21px;border:none;text-transform:uppercase;box-shadow:none;border:1px solid #eaeaea;width:49px;"}),p=Object(m.a)("div",{target:"e17u9loa8"})({name:"1gapyfo",styles:"height:60px;"});return Object(a.d)(h,null,Object(a.d)(x,null,function(b){var g=b.toggle,m=b.handleToggle;return Object(a.d)(c.a.Fragment,null,Object(a.d)(e,{toggle:g},Object(a.d)(f.b,{xl:!0,gutter:22},Object(a.d)(f.c,{justify:"space-between",align:"center",gutter:16,css:I},Object(a.d)(f.a,null,Object(a.d)("a",{href:"#"},Object(a.d)("img",{css:C,src:R.a,alt:""}))),Object(a.d)(f.a,null,Object(a.d)(f.c,{gutter:25,align:"center"},Object(a.d)(f.a,{css:function(e){return Object(a.c)("@media screen and (max-width:",e.breakPoints.md,"){display:",g?"block":"none",";position:absolute;top:90px;left:0;width:100%;}")}},Object(a.d)(f.c,{gutter:20,css:function(e){return Object(a.c)("@media screen and (max-width:",e.breakPoints.md,"){display:block !important;& > div > a{font-size:28px;& ~ div{position:relative !important;& > div > div{position:relative !important;left:0 !important;top:0 !important;& > ul{margin:20px 0;}}}}}")}},Object(a.d)(f.a,null,Object(a.d)(d.a,{overlay:r,getPopupContainer:function(e){return e.parentElement},trigger:["click"],placement:"bottomCenter"},Object(a.d)(o,null,Object(a.d)(v.a,{id:"service"}),Object(a.d)(s.a,{css:function(e){return Object(a.c)("vertical-align:middle;@media screen and (max-width:",e.breakPoints.md,"){right:0;top:16px;position:absolute;}")},type:"down"})))),Object(a.d)(f.a,null,Object(a.d)(i,{to:"/app/about-us"},Object(a.d)(v.a,{id:"aboutUs"}))),Object(a.d)(f.a,null,Object(a.d)(i,{to:"/app/help-center"},Object(a.d)(v.a,{id:"helpCenter"}))))),Object(a.d)(f.a,null,Object(a.d)(f.c,{gutter:10,align:"center"},Object(a.d)(f.a,{css:function(e){return Object(a.c)("@media screen and (max-width:",e.breakPoints.sm,"){display:none;}")}},Object(a.d)(O.a,null,function(e){var t=e.lang,n=e.handleLang;return Object(a.d)(u,{onClick:n},"en"===t?"id":"en")})),Object(a.d)(f.a,null,Object(a.d)(n,null,Object(a.d)(v.a,{id:"getStarted"}))),Object(a.d)(f.a,{css:function(e){return Object(a.c)("@media screen and (max-width:",e.breakPoints.sm,"){display:none;}")}},Object(a.d)(t,null,Object(a.d)(v.a,{id:"login"}))),Object(a.d)(f.a,{css:function(e){return Object(a.c)("@media screen and (min-width:",e.breakPoints.md,"){display:none;}")}},Object(a.d)(l,{onClick:m},Object(a.d)(s.a,{css:W,type:"pause"})))))))))),Object(a.d)(p,null))}))},M=(n(237),n(238)),E=n.n(M),Q=n(367),N=(n(192),{name:"15mwz5m",styles:"opacity:.7;margin-bottom:40px;"}),Y={name:"npgrt2",styles:"padding-top:30px;"},P={name:"1qsy690",styles:"margin-bottom:30px;opacity:.8;"},B={name:"56sg73",styles:"align-self:flex-end;"},z={name:"1lejymi",styles:"text-transform:uppercase;"},D=function(){var e=E.a.Search,t=Object(m.a)("footer",{target:"e3kb7be0"})("background:",function(e){return e.theme.color.bgFooter},";padding:80px 0 74px 0;"),n=Object(m.a)("div",{target:"e3kb7be1"})({name:"r9mecn",styles:"margin-bottom:70px;text-align:center;"}),r=Object(m.a)("ul",{target:"e3kb7be2"})({name:"1gaqlzi",styles:"list-style:none;padding:0;li{padding-bottom:10px;a{text-transform:uppercase;font-weight:bold;color:#fff;}}"}),o=Object(m.a)(g.a,{target:"e3kb7be3"})("height:48px;width:180px;border-radius:26px;font-size:14px;text-transform:uppercase;color:#fff;border:1px solid ",function(e){return e.theme.color.secondary},";background:",function(e){return e.theme.color.secondary},";"),c=Object(m.a)(e,{target:"e3kb7be4"})("height:44px;input{background:#fff;border-radius:22px;font-size:14px;}button{border-bottom-right-radius:22px;border-top-right-radius:22px;background:",function(e){return e.theme.color.secondary},";border:1px solid ",function(e){return e.theme.color.secondary},";font-size:14px;height:44px;}"),i=Object(m.a)("a",{target:"e3kb7be5"})({name:"17pid3o",styles:"color:#fff;font-size:30px;"}),d=Object(m.a)("div",{target:"e3kb7be6"})({name:"uewl2b",styles:"margin-bottom:20px;"}),l=Object(m.a)("div",{target:"e3kb7be7"})({name:"1xn3edc",styles:"margin-bottom:30px;"});return Object(a.d)(w.StaticQuery,{query:"1276443354",render:function(e){return Object(a.d)(t,null,Object(a.d)(f.b,{md:!0,gutter:22},Object(a.d)(n,null,Object(a.d)(f.d,{type:"headline-reduced",align:"center",color:"#fff",tag:"h2"},"Start growing with Modana today"),Object(a.d)(f.d,{type:"body",align:"center",css:N,color:"#fff",tag:"p"},"Kickstart your 21-day free trial now. No credit card required. Switch to Free plan after trial."),Object(a.d)(o,null,"Get Started"))),Object(a.d)(f.b,{xl:!0,gutter:22},Object(a.d)(f.c,{gutter:30,css:Y},Object(a.d)(f.a,{md:4},Object(a.d)(l,null,Object(a.d)(f.d,{type:"tout",color:"#fff",tag:"h4"},"Subscribe to our newsletter"),Object(a.d)(f.d,{type:"body-reduced",css:P,color:"#fff",tag:"p"},"The latest Sketch news, articles, and resources, sent straight to your inbox every month."),Object(a.d)(c,{enterButton:"Subscribe",size:"large",placeholder:"Your Email Address"}))),Object(a.d)(f.a,{md:4},Object(a.d)(l,null,Object(a.d)(r,null,Object(a.d)("li",null,Object(a.d)("a",{href:"#"},"About")),Object(a.d)("li",null,Object(a.d)("a",{href:"#"},"Contact")),Object(a.d)("li",null,Object(a.d)("a",{href:"#"},"Term of Service")),Object(a.d)("li",null,Object(a.d)("a",{href:"#"},"Privacy Police")),Object(a.d)("li",null,Object(a.d)("a",{href:"#"},"Press"))))),Object(a.d)(f.a,{md:4,css:B},Object(a.d)(l,null,Object(a.d)(f.d,{type:"body-reduced",color:"#fff",weight:"bold",css:z,tag:"p"},"Follow us on"),Object(a.d)(d,null,Object(a.d)(f.c,{gutter:15},Object(a.d)(f.a,null,Object(a.d)(i,null,Object(a.d)(s.a,{type:"facebook"}))),Object(a.d)(f.a,null,Object(a.d)(i,null,Object(a.d)(s.a,{type:"twitter"}))),Object(a.d)(f.a,null,Object(a.d)(i,null,Object(a.d)(s.a,{type:"instagram"}))),Object(a.d)(f.a,null,Object(a.d)(i,null,Object(a.d)(s.a,{type:"youtube"}))))),Object(a.d)(f.d,{type:"caption",color:"#fff",tag:"p"},"© 2018 Modana All Rights Reserved"))))))},data:Q})};Object(r.setConfig)({ignoreSFC:!0,pureRender:!0});var T={name:"1npi39a",styles:"overflow:hidden;padding:0;width:100%;"};t.a=function(e){var t=e.children;return Object(a.d)("div",{css:T},Object(a.d)(X,null),t,Object(a.d)(D,null))}},242:function(e,t,n){var a;e.exports=(a=n(284))&&a.default||a},243:function(e,t){e.exports="data:image/png;base64,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"},263:function(e,t,n){"use strict";var a=n(1),r=(n(0),n(2)),o=n.n(r),c=n(374),i=n.n(c),d=n(183);function l(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return Object(a.d)(d.StaticQuery,{query:s,render:function(e){var d=t||e.site.siteMetadata.description;return Object(a.d)(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=l;var s="1025518380"},284:function(e,t,n){"use strict";n.r(t);n(68);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=n(84),d=n(4),l=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},367:function(e){e.exports={data:{site:{siteMetadata:{title:"Modana"}}}}}}]);
//# sourceMappingURL=1-6d45ad486c558cab98f6.js.map