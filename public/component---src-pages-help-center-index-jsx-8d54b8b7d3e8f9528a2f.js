(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{386:function(t,e,a){"use strict";a.r(e);a(206);var n=a(137),i=a.n(n),r=(a(136),a(19)),c=a.n(r),s=(a(418),a(419)),l=a.n(s),o=(a(207),a(16)),u=a.n(o),d=a(9),p=a(2),b=a(1),f=a(7),m=a(205),h=(a(30),a(12)),k=a(50),y={name:"1wz96qz",styles:"padding:10px;cursor:pointer;"},g={name:"69i1ev",styles:"display:flex;justify-content:space-between;align-items:center;"},j={name:"1y2n91d",styles:"list-style:none;padding:20px;margin:0;li{padding:6px;a{color:#444;display:block;}}"},O=function(t){function e(e){var a;return(a=t.call(this,e)||this).handleClick=function(){a.setState(function(t){return{isActive:!t.isActive}})},a.state={isActive:!1},a}return u()(e,t),e.prototype.render=function(){var t=this,e=this.props.data;return Object(p.c)("div",{css:y,onClick:this.handleClick},Object(p.c)("div",{css:g},Object(p.c)("h4",{css:function(t){return Object(p.b)("margin:0;color:",t.color.primary,";")}},Object(p.c)(h.a,{id:"side-title-"+e.node.frontmatter.title})),Object(p.c)(c.a,{css:function(t){return Object(p.b)("color:",t.color.secondary,";")},type:this.state.isActive?"minus":"plus"})),Object(p.c)("div",{ref:function(e){return t.nodeEl=e},css:Object(p.b)("transition:height .3s ease;height:",this.state.isActive?this.nodeEl.scrollHeight:0,"px;overflow:hidden;")},Object(p.c)("ul",{css:j},e.node.frontmatter.headings.map(function(t,a){return Object(p.c)("li",{key:a},Object(p.c)(k.a,{to:e.node.fields.slug},Object(p.c)(h.a,{id:t})))}))))},e}(b.Component),v=(a(402),a(400));a.d(e,"pageQuery",function(){return _});var x={name:"46b038",styles:"margin-top:30px;"},w=function(t){var e=t.data;return Object(p.c)("div",{css:x},e.allMarkdownRemark&&e.allMarkdownRemark.edges.map(function(t,e){return Object(p.c)(O,{key:e,data:t})}))},S={name:"vtn2l4",styles:"padding-bottom:20px;"},A={name:"79elbk",styles:"position:relative;"},C={name:"zlychz",styles:"input{border-radius:21px;}"},L={name:"1tbxys",styles:"position:absolute;left:0;right:0;z-index:10;top:60px;ul{list-style:none;background:#fff;border-radius:20px;padding:13px 21px;box-shadow:0px 3px 24px #a0a0a06e;li{padding:10px 0;a{font-weight:bold;color:#333;}p{color:#717171;}}}"},R=function(t){function e(e){var a;return(a=t.call(this,e)||this).emitEmpty=function(){a.setState({searchValue:""})},a.getSearchResults=function(t){if(!t||!window.__LUNR__)return[];var e=window.__LUNR__.en;return e.index.search(t).map(function(t){var a=t.ref;return e.store[a]})},a.onChangeSearch=function(t){var e=t.target.value,n=a.getSearchResults(e);a.setState({searchValue:e,results:n})},a.handleClick=function(t){t.currentTarget.childNodes[1].style.height="auto"},a.state={searchValue:"",query:"",results:[],tabList:[{title:"Account",subList:[{title:"Akun diblokir",link:"/"},{title:"Lupa kata sandi",link:"/"}]},{title:"Payroll",subList:[{title:"Gaji tidak masuk",link:"/"},{title:"History gaji tidak update",link:"/"}]},{title:"Attendance",subList:[{title:"Absensi tidak terecord",link:"/"},{title:"Saya terlambat/terlalu cepat clock on/clock off",link:"/"},{title:"Bagaimana request lembur",link:"/"}]},{title:"Lending",subList:[{title:"Request pinjaman saya ditolak",link:"/"},{title:"Saya tidak bisa request pinjaman",link:"/"},{title:"Bagaimana cara pembayaran",link:"/"},{title:"Pembayaran saya tidak terautomasi",link:"/"}]},{title:"Modanaku-Wallet",subList:[{title:"Saya tidak bisa top up wallet",link:"/"},{title:"Saldo tidak bisa digunakan",link:"/"},{title:"Saldo tidak bisa di transfer",link:"/"},{title:"Saldo tidak bisa ditarik di ATM",link:"/"},{title:"Saldo tidak muncul",link:"/"},{title:"Saldo yang muncul tidak sesuai",link:"/"},{title:"Saldo disalahgunakan pihak lain",link:"/"}]}]},a}return u()(e,t),e.prototype.render=function(){var t=l.a.TabPane,e=(Object(d.a)("div",{target:"efnnra80"})("background:",function(t){return t.theme.color.primary},";form{height:300px;display:flex;align-items:center;justify-content:center;}"),this.state.searchValue?Object(p.c)(c.a,{type:"close-circle",onClick:this.emitEmpty}):null),a=this.props.data;return Object(p.c)(m.a,null,Object(p.c)("div",{css:function(t){return Object(p.b)("background:",t.color.primary,";form{height:300px;display:flex;align-items:center;justify-content:center;}")}},Object(p.c)(v.a,{title:"Help Center",description:["Modana"],keywords:["businesses","productive","hrd"]}),Object(p.c)(f.b,{md:!0,gutter:22},Object(p.c)("form",null,Object(p.c)("div",null,Object(p.c)(f.d,{tag:"h3",type:"headline",color:"#fff",css:S},Object(p.c)(h.a,{id:"help-center-banner-title"})),Object(p.c)("div",{css:A},Object(p.c)(i.a,{className:"input-search-docs",css:C,prefix:Object(p.c)(c.a,{type:"search"}),size:"large",onChange:this.onChangeSearch,value:this.state.searchValue,suffix:e,placeholder:"Type your question here..."}),this.state.results.length?Object(p.c)("div",{css:L},Object(p.c)("ul",null,this.state.results.map(function(t){return Object(p.c)("li",null,Object(p.c)(k.a,{to:t.slug},t.title))}))):null))))),Object(p.c)(function(e){var a=e.data;return Object(p.c)(f.b,{gutter:22,md:!0},Object(p.c)(l.a,{defaultActiveKey:"1",css:function(t){return Object(p.b)("top:-44px;.ant-tabs-nav-scroll{text-align:center;}.ant-tabs-bar{border-bottom:none;}.ant-tabs-ink-bar-animated{background-color:",t.color.secondary,";}.ant-tabs-tab{text-transform:uppercase;color:#fff;&.ant-tabs-tab-active{color:",t.color.secondary,";}}")}},Object(p.c)(t,{tab:"FAQ",key:"1"},Object(p.c)(w,{data:a}))))},{data:a}))},e}(b.Component),_=(e.default=R,"1602116604")},391:function(t,e,a){"use strict";a.r(e);var n=a(386);e.default=n.default},400:function(t,e,a){"use strict";var n=a(2),i=(a(1),a(0)),r=a.n(i),c=a(402),s=a.n(c),l=function(t){var e=t.description,a=t.lang,i=t.meta,r=t.keywords,c=t.title,l=e;return Object(n.c)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | Modana",meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@modana"},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})};l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=l}}]);
//# sourceMappingURL=component---src-pages-help-center-index-jsx-8d54b8b7d3e8f9528a2f.js.map