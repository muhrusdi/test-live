(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});n(288);var r=n(290),o=n.n(r),i=(n(51),n(285),n(287),n(134),n(464),n(465),n(7)),a=n.n(i),c=(n(271),n(268)),l=n.n(c),s=n(261),u=n(2),p=n(0),f=n(274),d=n(260),m=n(46),b=n(276),g=n(273),h=function(e){var t=e.children,n=e.href,r=e.toggleMenu;return Object(u.c)("div",null,Object(u.c)(b.a,{to:""+n,css:function(e){return Object(u.b)("display:flex;justify-content:space-between;padding:10px 0;align-items:center;span{font-weight:bold;color:",e.color.primary,";}")}},Object(u.c)("span",null,t),"/privacy-policy/"!==n?Object(u.c)(l.a,{type:r?"minus":"plus",css:function(e){return Object(u.b)("color:",e.color.secondary,";margin-left:16px;")}}):null))},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){n.setState(function(e){return{toggleMenu:!e.toggleMenu}})},n.state={toggleMenu:!1,toggleMainContent:!1},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){console.log(this.props),this.setState({toggleMenu:this.props.pathname==="/id/term-of-service"+this.props.slug||this.props.pathname==="/term-of-service"+this.props.slug||this.props.pathname==="/en/term-of-service"+this.props.slug})},n.render=function(){var e=this,t=Object(s.a)("li",{target:"e16oxikc0"})({name:"o6l5fu",styles:"padding:5px 0;"}),n=Object(s.a)(b.a,{target:"e16oxikc1"})({name:"15bsdw0",styles:"color:#333;font-size:14px;"});return Object(u.c)("li",null,Object(u.c)(h,{toggleMenu:this.state.toggleMenu,href:this.props.item.link,onClick:this.handleClick},this.props.item.title),this.props.item.sub?Object(u.c)("ul",{css:Object(u.b)("overflow:hidden;transition:height .3s ease;height:",this.state.toggleMenu?this.ulEl.scrollHeight:0,"px;& > li{&:last-of-type{padding-bottom:30px;}}"),ref:function(t){return e.ulEl=t}},this.props.item.sub.map(function(e,r){return Object(u.c)(t,{key:r},Object(u.c)(n,{to:""+e.link},e.title))})):null)},t}(p.Component),O={name:"qelgem",styles:"padding:30px 5px 10px 5px;display:flex;align-items:center;"},v={name:"1b0ew0j",styles:"font-size:12px;transform:scaleX(.7);"},j={name:"10iahqc",styles:"text-transform:capitalize;"},x=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleResize=function(){window.innerWidth<=768?(n.setState({toggleSide:!0}),n.state.toggleSide&&n.setState({toggleMainContent:!0})):(n.setState({toggleSide:!1}),n.setState({toggleMainContent:!0}))},n.handleClickAlert=function(){n.setState({alertText:"alert-title-confirm",alertConfirm:!0})},n.handleAlertClose=function(){n.setState({alertClose:!0})},n.state={toggleSide:!1,toggleMainContent:!1,alertText:"alert-title",alertConfirm:!1,alertClose:!1,listSide:[{title:Object(u.c)(m.a,{id:"footer-privacy"}),link:"/privacy-policy/"},{title:Object(u.c)(m.a,{id:"footer-term"}),link:"/term-of-service/agrement-employee/",sub:[{title:Object(u.c)(m.a,{id:"footer-agrement-employee"}),link:"/term-of-service/agrement-employee/"},{title:Object(u.c)(m.a,{id:"footer-agrement-employeer"}),link:"/term-of-service/agrement-employeer/"}]}]},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.innerWidth<=768?(this.setState({toggleSide:!0}),this.state.toggleSide&&this.setState({toggleMainContent:!0})):(this.setState({toggleSide:!1}),this.setState({toggleMainContent:!0})),window.addEventListener("resize",this.handleResize,!1)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize,!1)},n.render=function(){var e=this,t=Object(s.a)("div",{target:"e16oxikc2"})("position:relative;left:0;top:0;margin-left:",this.state.toggleSide?-262:0,"px;width:250px;flex:none;padding:20px 10px;transition:all .7s ease;ul{list-style:none;padding:0;}"),n=Object(s.a)("div",{target:"e16oxikc3"})({name:"4hedwo",styles:"position:relative;display:flex;margin-bottom:40px;"}),r=Object(s.a)("div",{target:"e16oxikc4"})("@media screen and (max-width:",function(e){return e.theme.breakPoints.md},"){margin-right:",this.state.toggleSide?0:-240,"px;}@media screen and (min-width:",function(e){return e.theme.breakPoints.md},"){margin-right:0;}padding:30px 90px;@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){padding:30px 8px;}ul{list-style:none;}position:relative;transition:all .7s ease;h2{font-size:24px;border-bottom:3px solid #e8e8e8;display:inline-block;}p{color:#6d6d6d;}"),i=this.props.pathContext.slug.split("/");return Object(u.c)(f.a,null,Object(u.c)(d.b,{xl:!0,gutter:20},Object(u.c)("div",{css:O},Object(u.c)(g.a,{title:this.props.data.markdownRemark.frontmatter.title,description:["Modana"],keywords:["businesses","productive","hrd"]}),Object(u.c)("div",{css:function(e){return Object(u.b)("padding:5px 10px;margin-right:20px;vertical-align:middle;cursor:pointer;border-radius:4px;background:#eaeaea;@media screen and (min-width:",e.breakPoints.md,"){display:none;}")},onClick:function(){return e.setState(function(e){return{toggleSide:!e.toggleSide,toggleMainContent:!e.toggleMainContent}})}},Object(u.c)(l.a,{type:"bars"})),Object(u.c)(o.a,{separator:Object(u.c)(l.a,{css:v,type:"right"})},i.map(function(e,t){return e?Object(u.c)(o.a.Item,{key:t},Object(u.c)(b.a,{css:j,to:"help-center"},e.replace("-"," "))):null}))),Object(u.c)(n,null,Object(u.c)(t,null,Object(u.c)("ul",null,this.state.listSide.map(function(t,n){return Object(u.c)(y,{item:t,key:n,pathname:e.props.location.pathname,slug:e.props.pathContext.slug})}))),Object(u.c)(r,null,Object(u.c)("div",null,Object(u.c)("div",{dangerouslySetInnerHTML:{__html:this.props.data.markdownRemark&&this.props.data.markdownRemark.html}}))))))},t}(p.Component);t.default=x;var w="2560317301"},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1)),i=n(272);function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=u(this,p(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,o=t.getPrefixCls,i=e.props,a=i.prefixCls,c=i.separator,s=i.children,u=d(i,["prefixCls","separator","children"]),p=o("breadcrumb",a);return n="href"in e.props?r.createElement("a",l({className:"".concat(p,"-link")},u),s):r.createElement("span",l({className:"".concat(p,"-link")},u),s),s?r.createElement("span",null,n,r.createElement("span",{className:"".concat(p,"-separator")},c)):null},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.createElement(i.ConfigConsumer,null,this.renderBreadcrumbItem)}}])&&s(n.prototype,o),a&&s(n,a),t}();t.default=m,m.__ANT_BREADCRUMB_ITEM=!0,m.defaultProps={separator:"/"},m.propTypes={prefixCls:o.string,separator:o.oneOfType([o.string,o.element]),href:o.string}},288:function(e,t,n){"use strict";n(277),n(289)},289:function(e,t,n){},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(291)),o=i(n(281));function i(e){return e&&e.__esModule?e:{default:e}}r.default.Item=o.default;var a=r.default;t.default=a},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(1)),i=s(n(264)),a=s(n(281)),c=n(272),l=s(n(280));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n,o){var i=n.indexOf(e)===n.length-1,a=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(e,n){return t[n]||e})}(e,t);return i?r.createElement("span",null,a):r.createElement("a",{href:"#/".concat(o.join("/"))},a)}var h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,m(t).apply(this,arguments))).renderBreadcrumb=function(t){var n,o=t.getPrefixCls,c=e.props,s=c.prefixCls,u=c.separator,p=c.style,f=c.className,d=c.routes,m=c.params,b=void 0===m?{}:m,h=c.children,y=c.itemRender,O=void 0===y?g:y,v=o("breadcrumb",s);if(d&&d.length>0){var j=[];n=d.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(b).forEach(function(e){t=t.replace(":".concat(e),b[e])}),t&&j.push(t),r.createElement(a.default,{separator:u,key:e.breadcrumbName||t},O(e,b,d,j))})}else h&&(n=r.Children.map(h,function(e,t){return e?((0,l.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,r.cloneElement)(e,{separator:u,key:t})):e}));return r.createElement("div",{className:(0,i.default)(f,v),style:p},n)},e}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props;(0,l.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(c.ConfigConsumer,null,this.renderBreadcrumb)}}])&&f(n.prototype,o),s&&f(n,s),t}();t.default=h,h.defaultProps={separator:"/"},h.propTypes={prefixCls:o.string,separator:o.node,routes:o.array,params:o.object,linkRender:o.func,nameRender:o.func}},342:function(e,t,n){var r=n(13),o=n(25),i=n(26),a=/"/g,c=function(e,t,n,r){var o=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},464:function(e,t,n){"use strict";n(342)("sub",function(e){return function(){return e(this,"sub","","")}})},465:function(e,t,n){"use strict";n(342)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-containers-privacy-center-detail-index-jsx-f87adbe8258020084b58.js.map