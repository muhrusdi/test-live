(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return M});n(416);var r=n(418),o=n.n(r),a=(n(77),n(75),n(25)),i=n.n(a),c=(n(211),n(137),n(16)),l=n.n(c),s=n(14),u=n.n(s),p=n(9),d=n(2),f=n(1),b=n.n(f),m=n(208),g=(n(29),n(7)),y=n(12),h=n(51),O=n(407),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){n.setState(function(e){return{toggleMenu:!e.toggleMenu}})},n.state={toggleMenu:!1,toggleMainContent:!1},n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({toggleMenu:this.props.slug===this.props.node.fields.slug})},n.render=function(){var e=this,t=Object(p.a)("li",{target:"e1vkjfdj0"})({name:"o6l5fu",styles:"padding:5px 0;"}),n=Object(p.a)("span",{target:"e1vkjfdj1"})({name:"15bsdw0",styles:"color:#333;font-size:14px;"});return Object(d.c)("li",null,Object(d.c)(function(t){var n=t.children,r=t.href;return Object(d.c)("div",null,Object(d.c)(h.a,{to:""+r,css:function(e){return Object(d.b)("display:flex;justify-content:space-between;padding:10px 0;align-items:center;span{font-weight:bold;color:",e.color.primary,";}")}},Object(d.c)("span",null,n),Object(d.c)(l.a,{type:e.state.toggleMenu?"minus":"plus",css:function(e){return Object(d.b)("color:",e.color.secondary,";margin-left:16px;")}})))},{href:this.props.node.fields.slug,onClick:this.handleClick},Object(d.c)(y.a,{id:"side-title-"+this.props.node.frontmatter.title})),Object(d.c)("ul",{css:Object(d.b)("overflow:hidden;transition:height .3s ease;height:",this.state.toggleMenu?this.ulEl.scrollHeight:0,"px;& > li{&:last-of-type{padding-bottom:30px;}}"),ref:function(t){return e.ulEl=t}},this.props.node.frontmatter.headings.map(function(e,r){return Object(d.c)(t,{key:r},Object(d.c)(n,null,Object(d.c)(y.a,{id:e})))})))},t}(f.Component),v={name:"byieww",styles:"padding:12px 15px;background:#e4e4e4;margin-top:60px;position:relative;"},w={name:"xlpmrk",styles:"display:flex;align-items:center;padding:10px 0;height:40px;"},x={name:"1sdhrdr",styles:"padding-right:20px;"},k={name:"121xl0t",styles:"position:absolute;right:14px;top:18px;outline:none;"},C={name:"qelgem",styles:"padding:30px 5px 10px 5px;display:flex;align-items:center;"},_={name:"1b0ew0j",styles:"font-size:12px;transform:scaleX(.7);"},S={name:"10iahqc",styles:"text-transform:capitalize;"},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleResize=function(){window.innerWidth<=768?(n.setState({toggleSide:!0}),n.state.toggleSide&&n.setState({toggleMainContent:!0})):(n.setState({toggleSide:!1}),n.setState({toggleMainContent:!0}))},n.handleClickAlert=function(){n.setState({alertText:"alert-title-confirm",alertConfirm:!0})},n.handleAlertClose=function(){n.setState({alertClose:!0})},n.state={toggleSide:!1,toggleMainContent:!1,alertText:"alert-title",alertConfirm:!1,alertClose:!1},n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.innerWidth<=768?(this.setState({toggleSide:!0}),this.state.toggleSide&&this.setState({toggleMainContent:!0})):(this.setState({toggleSide:!1}),this.setState({toggleMainContent:!0})),window.addEventListener("resize",this.handleResize,!1)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize,!1)},n.render=function(){var e=this,t=Object(p.a)("div",{target:"e1vkjfdj2"})("position:relative;left:0;top:0;margin-left:",this.state.toggleSide?-262:0,"px;width:250px;flex:none;padding:20px 10px;transition:all .7s ease;ul{list-style:none;}"),n=Object(p.a)("div",{target:"e1vkjfdj3"})({name:"4hedwo",styles:"position:relative;display:flex;margin-bottom:40px;"}),r=Object(p.a)("div",{target:"e1vkjfdj4"})("@media screen and (max-width:",function(e){return e.theme.breakPoints.md},"){margin-right:",this.state.toggleSide?0:-240,"px;}@media screen and (min-width:",function(e){return e.theme.breakPoints.md},"){margin-right:0;}padding:30px 90px;@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){padding:30px 8px;}position:relative;transition:all .7s ease;h2{font-size:24px;border-bottom:3px solid #e8e8e8;display:inline-block;}p{color:#6d6d6d;}"),a=this.props.pathContext.slug.split("/");return Object(d.c)(m.a,null,Object(d.c)(g.b,{xl:!0,gutter:20},Object(d.c)("div",{css:C},Object(d.c)(O.a,{title:this.props.data.markdownRemark.frontmatter.title,description:["Modana"],keywords:["businesses","productive","hrd"]}),Object(d.c)("div",{css:function(e){return Object(d.b)("padding:5px 10px;margin-right:20px;vertical-align:middle;cursor:pointer;border-radius:4px;background:#eaeaea;@media screen and (min-width:",e.breakPoints.md,"){display:none;}")},onClick:function(){return e.setState(function(e){return{toggleSide:!e.toggleSide,toggleMainContent:!e.toggleMainContent}})}},Object(d.c)(l.a,{type:"bars"})),Object(d.c)(o.a,{separator:Object(d.c)(l.a,{css:_,type:"right"})},a.map(function(e,t){if(e)return Object(d.c)(o.a.Item,{key:t},Object(d.c)(h.a,{css:S,to:"help-center"},e.replace("-"," ")))}))),Object(d.c)(n,null,Object(d.c)(t,null,Object(d.c)("div",null,Object(d.c)(g.d,{tag:"h4",type:"tout",css:function(e){return Object(d.b)("color:",e.color.primary,";padding-bottom:20px;")}},Object(d.c)(y.a,{id:"side-title"}))),Object(d.c)("ul",null,this.props.pageContext.dataMenus&&this.props.pageContext.dataMenus.map(function(t,n){return Object(d.c)(j,{key:n,node:t.node,slug:e.props.data.markdownRemark.fields.slug})}))),Object(d.c)(r,null,Object(d.c)("div",null,Object(d.c)("div",{dangerouslySetInnerHTML:{__html:this.props.data.markdownRemark&&this.props.data.markdownRemark.html}}),this.state.alertClose?null:Object(d.c)(function(){return Object(d.c)("div",{css:v},Object(d.c)(g.c,{align:"center"},Object(d.c)(g.a,null,Object(d.c)("div",{css:w},Object(d.c)("span",{css:x},Object(d.c)(y.a,{id:""+e.state.alertText})))),e.state.alertConfirm?Object(d.c)(b.a.Fragment,null):Object(d.c)(g.a,null,Object(d.c)("div",null,Object(d.c)(i.a,{type:"default",onClick:e.handleClickAlert},Object(d.c)(y.a,{id:"alert-yes"})),Object(d.c)(i.a,{type:"default",onClick:e.handleClickAlert},Object(d.c)(y.a,{id:"alert-no"})))),Object(d.c)("div",{css:k},Object(d.c)("button",{onClick:e.handleAlertClose},Object(d.c)(l.a,{type:"close"})))))},null))))))},t}(f.Component);t.default=P;var M="687866431"},407:function(e,t,n){"use strict";var r=n(2),o=(n(1),n(0)),a=n.n(o),i=n(409),c=n.n(i),l=function(e){var t=e.description,n=e.lang,o=e.meta,a=e.keywords,i=e.title,l=t;return Object(r.c)(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | Modana",meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@modana"},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(o)})};l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:a.a.string,lang:a.a.string,meta:a.a.array,keywords:a.a.arrayOf(a.a.string),title:a.a.string.isRequired},t.a=l},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1)),o=i(n(0)),a=n(21);function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=u(this,p(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,o=t.getPrefixCls,a=e.props,i=a.prefixCls,c=a.separator,s=a.children,u=f(a,["prefixCls","separator","children"]),p=o("breadcrumb",i);return n="href"in e.props?r.createElement("a",l({className:"".concat(p,"-link")},u),s):r.createElement("span",l({className:"".concat(p,"-link")},u),s),s?r.createElement("span",null,n,r.createElement("span",{className:"".concat(p,"-separator")},c)):null},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.createElement(a.ConfigConsumer,null,this.renderBreadcrumbItem)}}])&&s(n.prototype,o),i&&s(n,i),t}();t.default=b,b.__ANT_BREADCRUMB_ITEM=!0,b.defaultProps={separator:"/"},b.propTypes={prefixCls:o.string,separator:o.oneOfType([o.string,o.element]),href:o.string}},416:function(e,t,n){"use strict";n(50),n(417)},417:function(e,t,n){},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(419)),o=a(n(410));function a(e){return e&&e.__esModule?e:{default:e}}r.default.Item=o.default;var i=r.default;t.default=i},419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(1)),o=u(n(0)),a=s(n(10)),i=s(n(410)),c=n(21),l=s(n(76));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n,o){var a=n.indexOf(e)===n.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(e,n){return t[n]||e})}(e,t);return a?r.createElement("span",null,i):r.createElement("a",{href:"#/".concat(o.join("/"))},i)}var y=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,b(t).apply(this,arguments))).renderBreadcrumb=function(t){var n,o=t.getPrefixCls,c=e.props,s=c.prefixCls,u=c.separator,p=c.style,d=c.className,f=c.routes,b=c.params,m=void 0===b?{}:b,y=c.children,h=c.itemRender,O=void 0===h?g:h,j=o("breadcrumb",s);if(f&&f.length>0){var v=[];n=f.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(m).forEach(function(e){t=t.replace(":".concat(e),m[e])}),t&&v.push(t),r.createElement(i.default,{separator:u,key:e.breadcrumbName||t},O(e,m,f,v))})}else y&&(n=r.Children.map(y,function(e,t){return e?((0,l.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,r.cloneElement)(e,{separator:u,key:t})):e}));return r.createElement("div",{className:(0,a.default)(d,j),style:p},n)},e}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props;(0,l.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(c.ConfigConsumer,null,this.renderBreadcrumb)}}])&&d(n.prototype,o),s&&d(n,s),t}();t.default=y,y.defaultProps={separator:"/"},y.propTypes={prefixCls:o.string,separator:o.node,routes:o.array,params:o.object,linkRender:o.func,nameRender:o.func}}}]);
//# sourceMappingURL=component---src-containers-help-center-detail-index-jsx-bc520671c05990b810f9.js.map