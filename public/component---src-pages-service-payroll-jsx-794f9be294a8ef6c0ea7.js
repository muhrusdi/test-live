(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{255:function(e,t,a){"use strict";a.r(t);var i=a(315);t.default=i.a},267:function(e,t,a){"use strict";var i=a(10);t.__esModule=!0,t.default=void 0;var c,r=i(a(7)),n=i(a(71)),s=i(a(278)),d=i(a(48)),o=i(a(0)),l=i(a(1)),f=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},b=function(e){var t=f(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var g=function(e,t){(void 0===c&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),c).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",c=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+i+c+"<img "+s+d+t+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=o.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,c=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,d.default)({},r,{onLoad:i,onError:c,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});A.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,c=!1,r=t.fadeIn,s=b(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,c=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,c=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:c,fadeIn:r,hasNoScript:d,seenBefore:s},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:b(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,c=e.style,r=void 0===c?{}:c,n=e.imgStyle,s=void 0===n?{}:n,l=e.placeholderStyle,u=void 0===l?{}:l,b=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,y=e.Tag,w="boolean"==typeof m?"lightgray":m,O=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,u),j=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:O,className:b};if(p){var x=p;return o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},o.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&o.default.createElement(A,(0,d.default)({src:x.base64},S)),x.tracedSVG&&o.default.createElement(A,(0,d.default)({src:x.tracedSVG},S)),w&&o.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,x.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),o.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),o.default.createElement(A,{alt:a,title:t,src:x.src,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t},x))}}))}if(g){var E=g,v=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},r);return"inherit"===r.display&&delete v.display,o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:v,ref:this.handleRef,key:"fixed-"+JSON.stringify(E.srcSet)},E.base64&&o.default.createElement(A,(0,d.default)({src:E.base64},S)),E.tracedSVG&&o.default.createElement(A,(0,d.default)({src:E.tracedSVG},S)),w&&o.default.createElement(y,{title:t,style:{backgroundColor:w,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&o.default.createElement("picture",null,E.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),o.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),o.default.createElement(A,{alt:a,title:t,width:E.width,height:E.height,src:E.src,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t,width:E.width,height:E.height},E))}}))}return null},t}(o.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});m.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string};var O=m;t.default=O},270:function(e,t,a){"use strict";a.d(t,"b",function(){return h}),a.d(t,"e",function(){return b}),a.d(t,"d",function(){return y}),a.d(t,"a",function(){return g}),a.d(t,"g",function(){return O}),a.d(t,"c",function(){return j}),a.d(t,"f",function(){return S});a(271);var i=a(268),c=a.n(i),r=a(261),n=a(2),s=a(0),d=a.n(s),o=a(260),l=a(262),f=a(267),u=a.n(f),b=Object(r.a)(l.Link,{target:"e3jkwts0"})("height:48px;border-radius:26px;min-width:150px;font-weight:bold;border:none;background-color:#fff0e8;display:inline-block;padding:13px 0px;text-align:center;text-transform:uppercase;color:",function(e){return e.theme.color.secondary},";&:hover{color:",function(e){return e.theme.color.secondary},";}span{display:inline-block;padding:0 20px;}"),p=Object(r.a)("div",{target:"e3jkwts1"})("max-width:",function(e){return e.theme.breakPoints.md},";margin-left:auto;padding-bottom:40px;margin-right:auto;@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){margin-bottom:20px;}"),g=function(e){var t=e.title,a=e.desc;return Object(n.c)(p,null,Object(n.c)(o.d,{tag:"h2",type:"headline",css:function(e){return Object(n.b)("color:",e.color.secondary,";")},align:"center"},t),a&&Object(n.c)(o.d,{tag:"p",type:"intro",align:"center"},a))},h=function(e){var t=e.title,a=e.desc;return Object(n.c)(p,null,Object(n.c)(o.d,{tag:"h2",type:"headline",css:function(e){return Object(n.b)("color:",e.color.secondary,";")},align:"center"},Object(n.c)("span",{dangerouslySetInnerHTML:{__html:t}})),a&&Object(n.c)(o.d,{tag:"p",type:"intro",align:"center"},a))},A=Object(r.a)("div",{target:"e3jkwts2"})("padding:10px;text-align:center;margin-bottom:20px;@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){display:flex;align-items:center;}"),m={name:"1n58f0k",styles:"min-width:50px;max-width:80px;margin:0 auto;margin-bottom:21px;"},y=function(e){var t=e.image,a=e.title,i=e.desc,c=e.titleWeight;return Object(n.c)(A,null,Object(n.c)("div",{css:function(e){return Object(n.b)("@media screen and (max-width:",e.breakPoints.sm,"){& > div{margin-bottom:0;}}")}},Object(n.c)(u.a,{css:m,fluid:t.childImageSharp.fluid})),Object(n.c)("div",{css:function(e){return Object(n.b)("@media screen and (max-width:",e.breakPoints.sm,"){padding-left:20px;p{text-align:left;margin-bottom:0;}}")}},Object(n.c)(o.d,{type:"body",align:"center",weight:c,tag:"p"},a),i&&Object(n.c)(o.d,{type:"body",align:"center",color:"#888",tag:"p"},i)))},w=Object(r.a)("span",{target:"e3jkwts3"})({name:"vq9jcm",styles:"display:inline-block;background:#dadada;font-size:18px;padding:7px 10px;border-radius:8px;vertical-align:middle;color:#6b6b6b;margin-left:14px;"}),O=function(e){var t=e.title,a=e.desc,i=e.soon;return Object(n.c)(d.a.Fragment,null,Object(n.c)(o.d,{type:"manifesto",css:function(e){return Object(n.b)("color:",e.color.primary,";")},tag:"h4"},t," ",i?Object(n.c)(w,null,"Coming soon"):null),Object(n.c)(o.d,{type:"body",color:"#444",tag:"p"},a))},j=Object(r.a)("div",{target:"e3jkwts4"})("border-radius:11px;box-shadow:0px 8px 36px #d8d8d8;overflow:hidden;@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){margin-bottom:40px;}"),S=(Object(r.a)("ul",{target:"e3jkwts5"})({name:"1lwrckp",styles:"list-style:none;padding:0;"}),function(e){var t=e.text,a=e.className;return Object(n.c)("a",{href:"#",className:a,css:function(e){return Object(n.b)("color:",e.color.primary,";text-transform:uppercase;font-weight:bold;display:block;")}},t,Object(n.c)(c.a,{css:function(e){return Object(n.b)("color:",e.color.secondary,";padding-left:10px;")},color:"",type:"arrow-right"}))})},315:function(e,t,a){"use strict";var i=a(261),c=a(2),r=a(316),n=(a(0),a(274)),s=a(270),d=a(260),o=a(262),l=a(267),f=a.n(l),u=a(46),b=a(273),p={name:"1w93e12",styles:"margin-bottom:20px;};"};t.a=function(){var e=Object(i.a)("div",{target:"e1gf3edr0"})({name:"1ckqa5t",styles:"padding:80px 0;"}),t=Object(i.a)("div",{target:"e1gf3edr1"})({name:"1ckqa5t",styles:"padding:80px 0;"}),a=Object(i.a)(d.c,{target:"e1gf3edr2"})("flex-direction:",function(e){return e.reverse?"row-reverse":"row"},";@media screen and (max-width:",function(e){return e.theme.breakPoints.sm},"){flex-direction:column-reverse;}padding:40px 0;"),l=Object(i.a)("div",{target:"e1gf3edr3"})("max-width:",function(e){return e.theme.breakPoints.sm},";margin:0 auto;");return Object(c.c)(o.StaticQuery,{query:"2363648462",render:function(i){return Object(c.c)(n.a,null,Object(c.c)(d.b,{xl:!0,gutter:20},Object(c.c)(b.a,{title:"Payroll",description:["Modana"],keywords:["businesses","productive","hrd"]}),Object(c.c)(e,null,Object(c.c)(d.c,{align:"center"},Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(d.d,{tag:"h2",type:"headline",weight:"bold",css:function(e){return Object(c.b)("color:",e.color.primary,";")}},Object(c.c)(u.a,{id:"payroll-banner-title"})),Object(c.c)(d.d,{tag:"p",type:"intro",css:p},Object(c.c)(u.a,{id:"payroll-banner-desc"})),Object(c.c)(s.f,{text:"Try Now for Free"}))),Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(f.a,{fluid:i.shiftStart.childImageSharp.fluid}))))),Object(c.c)(l,null,Object(c.c)(d.c,{justify:"center"},Object(c.c)(d.a,{span:!0},Object(c.c)("div",null,Object(c.c)(s.d,{title:Object(c.c)(u.a,{id:"payroll-fitur-1-item"}),image:i.cashless}))),Object(c.c)(d.a,{span:!0},Object(c.c)("div",null,Object(c.c)(s.d,{title:Object(c.c)(u.a,{id:"payroll-fitur-2-item"}),image:i.settings}))))),Object(c.c)(t,null,Object(c.c)(a,{align:"center",gutter:20,reverse:!0},Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(d.d,{tag:"h4",type:"manifesto",css:function(e){return Object(c.b)("color:",e.color.primary,";")}},Object(c.c)(u.a,{id:"payroll-fitur-2-item"})),Object(c.c)(d.d,{tag:"p",type:"body"},Object(c.c)(u.a,{id:"payroll-fitur-detail-2"})))),Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(f.a,{fluid:i.efficiencies.childImageSharp.fluid})))),Object(c.c)(a,{align:"center",gutter:20},Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(d.d,{tag:"h4",type:"manifesto",css:function(e){return Object(c.b)("color:",e.color.primary,";")}},Object(c.c)(u.a,{id:"payroll-fitur-1-item"})),Object(c.c)(d.d,{tag:"p",type:"body"},Object(c.c)(u.a,{id:"payroll-fitur-detail-1"})))),Object(c.c)(d.a,{md:6},Object(c.c)("div",null,Object(c.c)(f.a,{fluid:i.cashless2.childImageSharp.fluid})))))))},data:r})}},316:function(e){e.exports={data:{cashless:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADQElEQVQ4y4WVS0hUYRTHL7Vo3yIIMogyqECsrbRoVdDCiqwoe5mZ9lBMXYVUC4NWkZiYpIRQ1iKNILJ8a2ZGqKE91HQcHXXG0fH9mtHv3/l/915nFKuBP/e73+N3zznfOWcMQ34OD9Yb1q93GNGiEpFbtCSCSFEOPj167BNVieJdI9hgMpTJsGF9XoTJhtqRWcA7A/SNaJANs8cg1OkFPFOAb0HPdcl71ArDLNggN8hkQMYB26plqMeyMPiRRdnrJ5gfcA7jgBF0U9VaX5vvcS+he0hLWcIq2fOKe8VV/9AEzyq3gDfqmNFNWiWLcE9Cybui2/8Sz4h12mI5tzDu14y7BJZyQ49bBQbGgMKXzSouuQiJ6c9xJW1tcS3uRhGyCxqUxFoJcFEMIbCVQDcvQMxVXQMBdfjUQ5R+6EJ5Qz/K6pwoq18lmXtf34d38ow+k4OmNp8SQ/RFCWuCwCW6SmCny6+OxD7C2xoHKhoHBOpC+adVsua4HhP3GI3fRkAgGbwsw4qBHQtEHczCpu1XEbY7BVt2Ja8prm3eeR0RUbfQ0jkF16gOmWYYOmEtugYeysLWPSkI35eBHZHpa2tvOrZFpCJyfyZaOibh8kFuPGihCnEZdJnxqRSXqj4Pmq6Li5Uyrm4aEpnPmi/uFS4HgZ4gsKN/Accv5GHAB0gW6PSYXgIkReGbBw9icNwUb/X8tadoaPHy3QQKy3CEWPjTOa9iEwu0RWm3S1D31YMH+fVIzXyFN5XdYAJbyaxLUwNbQ4CWyz5dOgL81begjp7NRYUA7+dU42PzMApeNONedqVOGQadXnS6Avg9uKhdFgsVgVadTxNY5Z7SN7zI4KbfeY1j53IleYtxOuEJmOQJN58hNqkQMRfzcEIgJy/l61gnZRTrUmTqMQxSfh0ExptNQflpaf8o1HfHnGrrnoE80d4zC47bHbP40Tu3LK6xSug6z46ZvSDXYD8TcpfHtNJvxUfZm/8iu+S0Z2arUwHpOOG62zi9KorWMegsdG5isltCyDj0nRXmJ8zsVOqyEdpp2c9Y1+waTIn/NVjGzHKTvVPDuofUuhVdm/2MLYhdg4W+ZoM1/wKmRR2Mme0mYXKpxh9m2xZ8ZWqi4AAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/ef54bb6af9765cf00bd853113dfd36a2/4550b/cashless.png",srcSet:"/static/ef54bb6af9765cf00bd853113dfd36a2/9717d/cashless.png 13w,\n/static/ef54bb6af9765cf00bd853113dfd36a2/9d616/cashless.png 25w,\n/static/ef54bb6af9765cf00bd853113dfd36a2/4550b/cashless.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},settings:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADeElEQVQ4y12VWWxMYRTHb3jwhISIREpqqdjXEIIgCEKCIBG8iKIIorZEgqiQSigRW62xFg+WFw+aNKlqFa0uD6KqSlU7M51W6Vg607l/53/u981M3eRk7p357u9s/3PGceSq9aOrY67PASwReyjmE4uKQcyl1fLTr/ctYnliqfVBdPMYrsewsLom9JcD+cHfQNMvoC4IyCGaa6BqhH5pAvxtQEu7flctz9M6BebB3AYeEEDkk0/Ni0qgvDdgfTYRdwggTDAdfAlgthNP08033v7yhfoW0BTwtRn49t1EZ2AWbqION/7QT5+Ae2nNmKZ4i9gUy6p+ugWlfsxcnIkLN1+hsuYXqr6GY1ADtpGyDO2tYX0+TOAj1oxpMrKSd63u5DkZGDZpH3okpWLgmHSkTNiDKzmloOPqbxGetXATqdvh+6nAcgJ9bADrxDQLSgMKmzjrEM7dKMaaTVfRO3kTsrKfg+nT6LimsaNTCciQ+x8ERhMK7c6SNLv3W49TlwrAS9LHkPG7kTRiO15WBDX94spmNP/xmpHwrn46NnT+QC/Zt19rikvXnkVReRAZJ59hwMgdWLftBs5cLcTMRZkYN+MA0nbfxXOpMxvyyReNQR17I1+67GZFdQhDBdhnUBqSR+9E35St6D0wDQcyn6qjafOPYlXqJfSU+jKLhlbvXRtpDGgF/L6uHdcflGl3B43dhYPHn+JxbjXW77iFpOHbkV/igyulmLfsBEZN3Y/yD20qMdMoAfrj+Vs5sJv1zUz/jaSWg5sPK3H68gtxkI6N6XfUWd8hW7DvyBME2tggE6GwHDOfMQlYSVR8DGH6wmOYMvcIBo/bhS1772H1hitaBnZ9/vIsXL5boiNIYGJTWtgt2375UWc5K7tAX2ajrt1/q9C84gYUSaczsp5ph1lzG4h2PIAQgXn04s2mqxHyYGFZk8qFOqTQV667qB2lDgMhTy62bnIfZXNE4FUEpnpLAeFE9X8U4d5+VIkFK05h854c5BbVG0FH1RI3UW3ADX/3dsF5h/uMK8iL0u0E9UYyqtLw9BYfudq4mDvMlERk46TotuE+Yw34khxut+nLeGltOJbUWlwJ6pDLN0yY2VQbnMRNy33GuebW4KAbr7Ep+n/BMmqTZsTCahrdLp22NvcZVxC3Bgc9cUapsYS/gJBYFWtm0yRMauz8A3cNEbA3cx3zAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/f8d267aeba2bf831695ff07756778263/4550b/settings.png",srcSet:"/static/f8d267aeba2bf831695ff07756778263/9717d/settings.png 13w,\n/static/f8d267aeba2bf831695ff07756778263/9d616/settings.png 25w,\n/static/f8d267aeba2bf831695ff07756778263/4550b/settings.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},cashless2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABaUlEQVQoz62SOW7DMBBFdUkfynDrzkB6XyZNSlcJkji2JXFfxEU/Qy3x2gQwgY8ZYgaPnxxWTateMK6Ycw/nAxLFmEaVPKVJ+Xpf6l1IMNbHAtDGvlQEGIB938eYMqxPKPUi4wK+BUdrHZTv8CUYjkpDOA9mLJTxcF0qGoDUT0A3AmPMsZxeQFMTLAGFdqi5xKFu0VBU1sPQLYrG3uHwM9BODsn6FXCOPpBrchRCoGsAOWdwxuhpzn1XQG27AZjSA4dTbghorKWeNLyZItd+qKd7h/RwA5AGcudwzoU0eP/coxUGlvb7k4a24bFDusLflMeh3AIjWu4guYaTGtl77HY/EMrTc/wTOMfiRrQctmWIUkExNfyAhw67EDfTt3EEDFS8UQqGxr0/NKHhKmjKX98+ApcukMO5z03ATUXD2OJJi8DbSkq50FqvtVZLLuTq1PBVTTpdqGHySnVbJC57lrRfH2u2qJ69fgE9jEk2epHXjQAAAABJRU5ErkJggg==",aspectRatio:1.625,src:"/static/bd11b73e3e9cbb3dc8778199497c51d9/4a61f/Cashless2.png",srcSet:"/static/bd11b73e3e9cbb3dc8778199497c51d9/8ed49/Cashless2.png 200w,\n/static/bd11b73e3e9cbb3dc8778199497c51d9/18ee4/Cashless2.png 400w,\n/static/bd11b73e3e9cbb3dc8778199497c51d9/4a61f/Cashless2.png 800w,\n/static/bd11b73e3e9cbb3dc8778199497c51d9/b7c02/Cashless2.png 1040w",sizes:"(max-width: 800px) 100vw, 800px"}}},efficiencies:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACiklEQVQoz2VTPW8TQRA9Cv4CFTUW/AlEEwmJCkRLRUTSpAM6uhR00EGEBIgqaRAKKSLKKBCiyCj+uLOdDydxnGDnfJ/Zu9293XvMrh0ixEpPO/buvnnzZs7p9Y7fcC7BhSg452WWZfB9H8Ph8BJnk30UYuiP/jkbDAYqjmOc9Ps/CuCKwxhfAC2ty4JAxAUKVUIWCoWFHscKkNEpivPQniulIGSBJGUUloiiePPT4uerDv1pCUsiLJQuc6HAco4wjZGwc4swDhFLDbY6j6j6BUEOjOIUSSZAeRTGa90x64KQC2UVZrxARio5EQxYDD9L7e+YcxyHfZwzhiSXYJS4e9jD4tKS/rq8jI8f3vfuTt25f0koFQnUY0ICFxq9wMdhMEKaC5wlCdr+AFFG6lkGTW9Wvq3j9sMXmHr0Ut2bfo0H0/NdhwtpCYW8VCjJN+ORVpo8NH5p66W23pU2Nqvm7uBnrVfunwp9FGisrtWbjtZ6YeKB8RDGQ/MgSjKkjEOX5eSwACM/TaI0TYzrcD0Pw8GJuWAztDotz6EL/xFS+QgTTs0p7AH1iiqQiKlsIaTpqFVdb7rY7x4gz3NtElS3655R+HZCKI2JVLI2gcmapLnu/45tTKRES9Nl9tIq0g2vU+7u7dE8+jrLcmxu/fIcevzOzmE5ro2aCynHykynI1IqhDBziovFuYC5XvfaRqFK4qSQUmCrut10qIRXjLoWhqFPiEZBGAWEOEkjsiMiSRE1LqJp+Av6qiKWyeD7RlV0Dw4QBIFNura+se80m81rnufdajQaNyiutDy34hFaLY9ir+K6bmV3p1PpdNqVTrtt91pt+yYJvf702fPHs7Oz/bm5OZdw9GRmZuUPCQBokRkjqhQAAAAASUVORK5CYII=",aspectRatio:1.6612377850162867,src:"/static/0dce7e4af261a29e6bc88b545ac2904f/4a61f/Efficiencies.png",srcSet:"/static/0dce7e4af261a29e6bc88b545ac2904f/8ed49/Efficiencies.png 200w,\n/static/0dce7e4af261a29e6bc88b545ac2904f/18ee4/Efficiencies.png 400w,\n/static/0dce7e4af261a29e6bc88b545ac2904f/4a61f/Efficiencies.png 800w,\n/static/0dce7e4af261a29e6bc88b545ac2904f/8aab8/Efficiencies.png 1020w",sizes:"(max-width: 800px) 100vw, 800px"}}},shiftStart:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcRAAAXEQHKJvM/AAAC4UlEQVQ4y3VTbUhTYRS+d2b+iowiIukLFC3Mlh8QFdmfdNoX+iMijOgLnAX9EKd9CNqPiD78QM1ypgYR/ShbZb9MkCidK1OXXVA303QfdzNzd7tz7u6+p/e9bGvO7cLhnMt7znOe877noaiQj+NRMK6ta6QUubmy1LTddPPDmpjQPK8IFDvnkmKnG1ERPycP+BCkeGz8lyz8HABisR3ATXcFa/z5kQH9hwwzLoFtX0/Fnc6Ty9O2USmalnsFA1od80mrB94DYJ93V/qb0K87u6iUpKTlYBwPAVCZP3HPq7fdo9knr8LB41eWck6p4PzFcrhRdEIYM/7Gx9BP8jqevZBFZYhBaeIN0/YNAoLZryNGaHg5KHZ8MEBT5w+xXcP4ast7fBWqB1B9u2oYp64j+RlyOZ2+9dLKcbFJF7/g9N2SKOhGPLxrAeFQshnTHBQVATqS/Ri2bI4HeWrmUZKfnLgjZm9mOXU4URUG6GfocIldBLBPNyJYbXbkWRIQ8rlhijGh0mvz6ND+Uk/CpnhdoDaWzgo82gqGlB+wmwB+GRj2mcxmxHEccjo5ZLdZxRZ1K2jeve9tfdp68+yxigsUVbiT1KylztHq2o9RR75LAD9rhzwzs7NgwyxZ1o6srA3q6pvQG00X9GkH0YTBAkPfLZdJzeS0QxZpbaSRzTYuwSOAXc8YATMUOIeDsASLlUX1DS2g+6ZH+AFF0tS9BBP2P964FTsZWBu8tIG1yejp7Z80mS3AsqxoY1mfwWhET9RtgAuRaxGERS8Azjfi/9XhKlt2h4+a1auIz8vPz1cqlc6yMpVYVV0NxcUlQtX1GoFfBC8ulhhiXxq6v1GlRxRQoiwhnTc2NqlzmLGp8emZv/BzdJ7ggMcngd0PJRSYMqL8sjLSw3W8BtsZbHcwUCVuvi+8xslH0bVCoZB8QUEhlZKcRLe1P4+JrCwkC4JFYxiu7/8FiCZrRe4q4IP652HZg/wD5HMu9IH3qyUAAAAASUVORK5CYII=",aspectRatio:1.2502343017806936,src:"/static/3c983c05fb4ae03813df3b81007852c5/4a61f/Payroll-03.png",srcSet:"/static/3c983c05fb4ae03813df3b81007852c5/8ed49/Payroll-03.png 200w,\n/static/3c983c05fb4ae03813df3b81007852c5/18ee4/Payroll-03.png 400w,\n/static/3c983c05fb4ae03813df3b81007852c5/4a61f/Payroll-03.png 800w,\n/static/3c983c05fb4ae03813df3b81007852c5/535b0/Payroll-03.png 1200w,\n/static/3c983c05fb4ae03813df3b81007852c5/47b43/Payroll-03.png 1600w,\n/static/3c983c05fb4ae03813df3b81007852c5/5d2e3/Payroll-03.png 2400w,\n/static/3c983c05fb4ae03813df3b81007852c5/0dbc9/Payroll-03.png 2668w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-service-payroll-jsx-794f9be294a8ef6c0ea7.js.map