(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{393:function(t,e,n){"use strict";n.r(e);n(209);var c=n(138),a=n.n(c),r=(n(137),n(16)),i=n.n(r),s=(n(420),n(421)),o=n.n(s),l=(n(210),n(14)),u=n.n(l),d=n(9),p=n(2),b=n(1),f=n(7),h=n(208),m=(n(29),n(12)),y=n(51),g={name:"1wz96qz",styles:"padding:10px;cursor:pointer;"},j={name:"69i1ev",styles:"display:flex;justify-content:space-between;align-items:center;"},O={name:"1y2n91d",styles:"list-style:none;padding:20px;margin:0;li{padding:6px;a{color:#444;display:block;}}"},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleClick=function(){n.setState(function(t){return{isActive:!t.isActive}})},n.state={isActive:!1},n}return u()(e,t),e.prototype.render=function(){var t=this,e=this.props.data;return Object(p.c)("div",{css:g,onClick:this.handleClick},Object(p.c)("div",{css:j},Object(p.c)("h4",{css:function(t){return Object(p.b)("margin:0;color:",t.color.primary,";")}},Object(p.c)(m.a,{id:"side-title-"+e.node.frontmatter.title})),Object(p.c)(i.a,{css:function(t){return Object(p.b)("color:",t.color.secondary,";")},type:this.state.isActive?"minus":"plus"})),Object(p.c)("div",{ref:function(e){return t.nodeEl=e},css:Object(p.b)("transition:height .3s ease;height:",this.state.isActive?this.nodeEl.scrollHeight:0,"px;overflow:hidden;")},Object(p.c)("ul",{css:O},e.node.frontmatter.headings.map(function(t,n){return Object(p.c)("li",{key:n},Object(p.c)(y.a,{to:e.node.fields.slug},Object(p.c)(m.a,{id:t})))}))))},e}(b.Component),x=(n(409),n(407)),w={name:"46b038",styles:"margin-top:30px;"},k=function(t){var e=t.data;return Object(p.c)("div",{css:w},e&&e.map(function(t,e){return Object(p.c)(v,{key:e,data:t})}))},C={name:"vtn2l4",styles:"padding-bottom:20px;"},A={name:"79elbk",styles:"position:relative;"},_={name:"zlychz",styles:"input{border-radius:21px;}"},S={name:"jwy5mu",styles:"position:absolute;left:0;right:0;z-index:10;top:60px;ul{list-style:none;background:#fff;border-radius:20px;padding:13px 21px;box-shadow:0px 3px 24px #a0a0a06e;li{padding:10px 0;a{font-weight:bold;color:#333;display:block;}p{color:#717171;}}}"},z=function(t){function e(e){var n;return(n=t.call(this,e)||this).emitEmpty=function(){n.setState({searchValue:""})},n.getSearchResults=function(t){if(!t||!window.__LUNR__)return[];var e=window.__LUNR__.en;return e.index.search(t).map(function(t){var n=t.ref;return e.store[n]})},n.onChangeSearch=function(t){var e=t.target.value,c=n.getSearchResults(e);n.setState({searchValue:e,results:c})},n.handleClick=function(t){t.currentTarget.childNodes[1].style.height="auto"},n.state={searchValue:"",query:"",results:[]},n}return u()(e,t),e.prototype.render=function(){var t=o.a.TabPane,e=(Object(d.a)("div",{target:"efnnra80"})("background:",function(t){return t.theme.color.primary},";form{height:300px;display:flex;align-items:center;justify-content:center;}"),this.state.searchValue?Object(p.c)(i.a,{type:"close-circle",onClick:this.emitEmpty}):null),n=this.props.pageContext.data;return Object(p.c)(h.a,null,Object(p.c)("div",{css:function(t){return Object(p.b)("background:",t.color.primary,";form{height:300px;display:flex;align-items:center;justify-content:center;}")}},Object(p.c)(x.a,{title:"Help Center",description:["Modana"],keywords:["businesses","productive","hrd"]}),Object(p.c)(f.b,{md:!0,gutter:22},Object(p.c)("form",null,Object(p.c)("div",null,Object(p.c)(f.d,{tag:"h3",type:"headline",color:"#fff",css:C},Object(p.c)(m.a,{id:"help-center-banner-title"})),Object(p.c)("div",{css:A},Object(p.c)(a.a,{className:"input-search-docs",css:_,prefix:Object(p.c)(i.a,{type:"search"}),size:"large",onChange:this.onChangeSearch,value:this.state.searchValue,suffix:e,placeholder:"Type your question here..."}),this.state.results.length?Object(p.c)("div",{css:S},Object(p.c)("ul",null,this.state.results.map(function(t){return Object(p.c)("li",null,Object(p.c)(y.a,{to:t.slug},t.title))}))):null))))),Object(p.c)(function(){return Object(p.c)(f.b,{gutter:22,md:!0},Object(p.c)(o.a,{defaultActiveKey:"1",css:function(t){return Object(p.b)("top:-44px;.ant-tabs-nav-scroll{text-align:center;}.ant-tabs-bar{border-bottom:none;}.ant-tabs-ink-bar-animated{background-color:",t.color.secondary,";}.ant-tabs-tab{text-transform:uppercase;color:#fff;&.ant-tabs-tab-active{color:",t.color.secondary,";}}")}},Object(p.c)(t,{tab:"FAQ",key:"1"},Object(p.c)(k,{data:n}))))},null))},e}(b.Component);e.default=z},398:function(t,e,n){"use strict";n.r(e);var c=n(393);e.default=c.default},407:function(t,e,n){"use strict";var c=n(2),a=(n(1),n(0)),r=n.n(a),i=n(409),s=n.n(i),o=function(t){var e=t.description,n=t.lang,a=t.meta,r=t.keywords,i=t.title,o=e;return Object(c.c)(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | Modana",meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@modana"},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})};o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=o}}]);
//# sourceMappingURL=component---src-pages-help-center-index-jsx-79a30e347e332c33335d.js.map