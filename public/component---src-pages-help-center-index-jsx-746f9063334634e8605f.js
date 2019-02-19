(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{361:function(t,e,a){"use strict";a.r(e);var n=a(387);e.default=n.a},385:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"help-center/account/"},frontmatter:{title:"Account"},headings:[{value:"Forgot Password",depth:2},{value:"Don't received OTP",depth:2},{value:"Cannot Log In",depth:2},{value:"Change Email",depth:2},{value:"Cannot register Account",depth:2}]}},{node:{fields:{slug:"help-center/attendance/"},frontmatter:{title:"Attendance"},headings:[{value:"Attendance not recorded",depth:2},{value:"I’m too late/ too early to clock on/clock off",depth:2},{value:"How to request overtime?",depth:2}]}},{node:{fields:{slug:"help-center/lending/"},frontmatter:{title:"Lending"},headings:[{value:"How to request a loan?",depth:2},{value:"I cannot request Loan",depth:2},{value:"My Loan request has been rejected",depth:2},{value:"How to do a re-payment?",depth:2},{value:"Repayment not automated",depth:2}]}},{node:{fields:{slug:"help-center/modanaku-virtual-account/"},frontmatter:{title:"Modanaku-Virtual Account"},headings:[{value:"How to top up Modanaku",depth:2},{value:"Balance cannot be used",depth:2},{value:"Balance cannot be transferred",depth:2},{value:"Cannot withdraw through ATM",depth:2},{value:"Balance not shown",depth:2},{value:"Balance shown not updated",depth:2},{value:"Modanaku being used by unknown users",depth:2}]}},{node:{fields:{slug:"help-center/payroll/"},frontmatter:{title:"Payroll"},headings:[{value:"Doesn’t received Salary",depth:2},{value:"Payroll history is not updated",depth:2}]}}]}}}},387:function(t,e,a){"use strict";a(187);var n=a(134),i=a.n(n),l=(a(133),a(18)),o=a.n(l),c=(a(397),a(398)),r=a.n(c),s=a(15),d=a.n(s),u=a(9),p=a(2),h=a(385),b=a(1),k=a(7),f=a(186),m=a(27),y={name:"1wz96qz",styles:"padding:10px;cursor:pointer;"},g={name:"69i1ev",styles:"display:flex;justify-content:space-between;align-items:center;"},v={name:"1y2n91d",styles:"list-style:none;padding:20px;margin:0;li{padding:6px;a{color:#444;display:block;}}"},j=function(t){function e(e){var a;return(a=t.call(this,e)||this).handleClick=function(){a.setState(function(t){return{isActive:!t.isActive}})},a.state={isActive:!1},a}return d()(e,t),e.prototype.render=function(){var t=this,e=this.props.data;return console.log(e),Object(p.c)("div",{css:y,onClick:this.handleClick},Object(p.c)("div",{css:g},Object(p.c)("h4",{css:function(t){return Object(p.b)("margin:0;color:",t.color.primary,";")}},e.node.frontmatter.title),Object(p.c)(o.a,{css:function(t){return Object(p.b)("color:",t.color.secondary,";")},type:this.state.isActive?"minus":"plus"})),Object(p.c)("div",{ref:function(e){return t.nodeEl=e},css:Object(p.b)("transition:height .3s ease;height:",this.state.isActive?this.nodeEl.scrollHeight:0,"px;overflow:hidden;")},Object(p.c)("ul",{css:v},e.node.headings.map(function(t,a){return Object(p.c)("li",{key:a},Object(p.c)(m.Link,{to:e.node.fields.slug},t.value))}))))},e}(b.Component),O={name:"46b038",styles:"margin-top:30px;"},w=function(t){var e=t.data;return Object(p.c)("div",{css:O},e.allMarkdownRemark&&e.allMarkdownRemark.edges.map(function(t,e){return Object(p.c)(j,{key:e,data:t})}))},x={name:"vtn2l4",styles:"padding-bottom:20px;"},A={name:"zlychz",styles:"input{border-radius:21px;}"},C=function(t){function e(e){var a;return(a=t.call(this,e)||this).emitEmpty=function(){a.setState({searchValue:""})},a.onChangeSearch=function(t){a.setState({searchValue:t.target.value})},a.handleClick=function(t){console.dir(t.currentTarget),t.currentTarget.childNodes[1].style.height="auto"},a.state={searchValue:"",tabList:[{title:"Account",subList:[{title:"Akun diblokir",link:"/"},{title:"Lupa kata sandi",link:"/"}]},{title:"Payroll",subList:[{title:"Gaji tidak masuk",link:"/"},{title:"History gaji tidak update",link:"/"}]},{title:"Attendance",subList:[{title:"Absensi tidak terecord",link:"/"},{title:"Saya terlambat/terlalu cepat clock on/clock off",link:"/"},{title:"Bagaimana request lembur",link:"/"}]},{title:"Lending",subList:[{title:"Request pinjaman saya ditolak",link:"/"},{title:"Saya tidak bisa request pinjaman",link:"/"},{title:"Bagaimana cara pembayaran",link:"/"},{title:"Pembayaran saya tidak terautomasi",link:"/"}]},{title:"Modanaku-Wallet",subList:[{title:"Saya tidak bisa top up wallet",link:"/"},{title:"Saldo tidak bisa digunakan",link:"/"},{title:"Saldo tidak bisa di transfer",link:"/"},{title:"Saldo tidak bisa ditarik di ATM",link:"/"},{title:"Saldo tidak muncul",link:"/"},{title:"Saldo yang muncul tidak sesuai",link:"/"},{title:"Saldo disalahgunakan pihak lain",link:"/"}]}]},a}return d()(e,t),e.prototype.render=function(){var t=this,e=r.a.TabPane,a=(Object(u.a)("div",{target:"efnnra80"})("background:",function(t){return t.theme.color.primary},";form{height:300px;display:flex;align-items:center;justify-content:center;}"),this.state.searchValue?Object(p.c)(o.a,{type:"close-circle",onClick:this.emitEmpty}):null),n=function(t){var a=t.data;return Object(p.c)(k.b,{gutter:22,md:!0},Object(p.c)(r.a,{defaultActiveKey:"1",css:function(t){return Object(p.b)("top:-44px;.ant-tabs-nav-scroll{text-align:center;}.ant-tabs-bar{border-bottom:none;}.ant-tabs-ink-bar-animated{background-color:",t.color.secondary,";}.ant-tabs-tab{text-transform:uppercase;color:#fff;&.ant-tabs-tab-active{color:",t.color.secondary,";}}")}},Object(p.c)(e,{tab:"HR",key:"1"},Object(p.c)(w,{data:a})),Object(p.c)(e,{tab:"Employee",key:"2"},"Content of Tab Pane 2"),Object(p.c)(e,{tab:"Lenders",key:"3"},"Content of Tab Pane 3")))};return Object(p.c)(m.StaticQuery,{query:"875926302",render:function(e){return console.log(e),Object(p.c)(f.a,null,Object(p.c)("div",{css:function(t){return Object(p.b)("background:",t.color.primary,";form{height:300px;display:flex;align-items:center;justify-content:center;}")}},Object(p.c)(k.b,{md:!0,gutter:22},Object(p.c)("form",null,Object(p.c)("div",null,Object(p.c)(k.d,{tag:"h3",type:"headline",color:"#fff",css:x},"What can we help you with?"),Object(p.c)(i.a,{css:A,prefix:Object(p.c)(o.a,{type:"search"}),size:"large",onChange:t.onChangeSearch,value:t.state.searchValue,suffix:a,placeholder:"Type your question here..."}))))),Object(p.c)(n,{data:e}))},data:h})},e}(b.Component);e.a=C}}]);
//# sourceMappingURL=component---src-pages-help-center-index-jsx-746f9063334634e8605f.js.map