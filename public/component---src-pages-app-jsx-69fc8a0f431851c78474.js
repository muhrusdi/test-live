(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),i=a.n(n),s=a(27),o=a(219),d=a.n(o),l=a(183),r=function(e){return window.localStorage.setItem("user",JSON.stringify(e))},b=function(){return"undefined"!=typeof window&&window.localStorage.getItem("user")?JSON.parse(window.localStorage.getItem("user")):{}},g=function(e){var t=e.username,a=e.password,c="admin",n="Modana18";return t===c&&a===n&&r({username:c,password:n,email:"modana@example.org"})},A=function(){var e=b();return"admin"===e.username&&"Modana18"===e.password},p=function(e){var t=e.component,a=e.location,n=d()(e,["component","location"]);return A()||"/app/login"===a.pathname?Object(c.c)(t,n):("undefined"!=typeof window&&Object(l.navigate)("/app/login"),null)},f=(a(205),a(189)),u=a.n(f),m=(a(236),a(237)),h=a.n(m),O=(a(382),a(9)),j=a.n(O),w=a(184),y=a(185),x=a(242),S=a.n(x),E=a(383),C=a(426),v={name:"1rn7rzh",styles:"height:100vh;background:#f4fcff;height:100vh;"},k={name:"xi606m",styles:"text-align:center;"},Q={name:"1tu1gue",styles:"max-width:320px;padding:20px;"},W={name:"mjkrxc",styles:"border-bottom:1px solid rgba(255,255,255,0);border-bottom-left-radius:0;border-bottom-right-radius:0;"},B=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleSubmit=function(e){e.preventDefault(),g({username:a.state.username,password:a.state.password})?Object(l.navigate)("/app"):a.setState({isNotValid:!0})},a.handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t)),"password"===e.target.name&&(""!==e.target.value?a.setState({isExist:!0}):a.setState({isExist:!1}))},a.state={username:"",password:"",isExist:!1,isNotValid:!1},a}return j()(t,e),t.prototype.render=function(){var e=this;A()&&Object(l.navigate)("/app");var t=Object(w.a)("button",{target:"e11yt6290"})({name:"1ap9na2",styles:"background:none;height:32px;border:none;position:relative;outline:none;cursor:pointer;"});return Object(c.c)("div",null,Object(c.c)(y.b,null,Object(c.c)(y.c,{justify:"center",align:"center",css:v},Object(c.c)(y.a,null,Object(c.c)("form",{onSubmit:this.handleSubmit},Object(c.c)("div",{css:k},Object(c.c)("img",{src:S.a,alt:""})),Object(c.c)("div",{css:Q},Object(c.c)(E.Transition,{in:this.state.isNotValid,appear:!0,onEnter:function(e){C.b.set(e,{x:-25})},addEndListener:function(t){C.b.to(t,1,{ease:C.a.easeOut.config(1,.1),x:0,onComplete:function(){e.setState({isNotValid:!1})}})}},Object(c.c)("div",null,Object(c.c)(h.a,{css:W,size:"large",name:"username",type:"text",value:this.state.username,onChange:this.handleChange,placeholder:"Username"}),Object(c.c)(h.a,{css:Object(c.b)("border-top-left-radius:0;border-bottom-right-radius:3px !important;& ~ .ant-input-group-addon{position:absolute;top:0;display:",this.state.isExist?"inline-block":"none",";padding-top:5px;cursor:pointer;right:0;z-index:10;bottom:0;width:43px;background:none;border:none;}"),name:"password",type:"password",value:this.state.password,onChange:this.handleChange,size:"large",placeholder:"Password",addonAfter:Object(c.c)(t,{type:"submit"},Object(c.c)(u.a,{type:"right-circle"}))})))))))))},t}(i.a.Component),T=a(272),Y=(a(396),a(399)),N=a.n(Y),M=a(398),z=a(190),R=a.n(z),I=a(218),D=function(){var e=Object(w.a)("div",{target:"eajnvz30"})({name:"3scg62",styles:"background:#666;"}),t=Object(w.a)("div",{target:"eajnvz31"})({name:"1jbhiwk",styles:"display:flex;max-width:500px;height:300px;align-items:center;"});return Object(c.c)(e,null,Object(c.c)(y.b,{xl:!0,gutter:22},Object(c.c)(t,null,Object(c.c)(y.d,{tag:"h2",color:"#fff",type:"headline"},"Creating a world where work empowers a better life"))))},U=a(209),X={name:"k22go4",styles:"padding:30px 0;"},q=function(){var e=Object(w.a)("div",{target:"e1tgiyxe0"})({name:"pxpt32",styles:"padding-top:40px;"}),t=Object(w.a)("div",{target:"e1tgiyxe1"})("margin-bottom:50px;max-width:",function(e){return e.theme.breakPoints.md},";margin-left:auto;margin-right:auto;"),a=Object(w.a)("section",{target:"e1tgiyxe2"})({name:"1pmyvs2",styles:"padding:40px 0;"}),n=Object(w.a)("div",{target:"e1tgiyxe3"})({name:"1o84h0j",styles:"background:#eaeaea;height:150px;margin-bottom:20px;"}),i=Object(w.a)("div",{target:"e1tgiyxe4"})({name:"jh3a5k",styles:"padding-bottom:15px;"}),s=Object(w.a)("div",{target:"e1tgiyxe5"})(""),o=Object(w.a)("div",{target:"e1tgiyxe6"})(""),d=Object(w.a)("div",{target:"e1tgiyxe7"})({name:"nk32ej",styles:"padding:10px;"}),r=Object(w.a)("div",{target:"e1tgiyxe8"})({name:"12inmai",styles:"height:300px;background:#eaeaea;"}),b=Object(w.a)("a",{target:"e1tgiyxe9"})("color:",function(e){return e.theme.color.primary},";text-transform:uppercase;font-weight:bold;"),g=Object(w.a)("div",{target:"e1tgiyxe10"})({name:"1p2cbqg",styles:"margin-bottom:50px;"});return Object(c.c)(l.StaticQuery,{query:"2062781805",render:function(l){return Object(c.c)(I.a,null,Object(c.c)(D,null),Object(c.c)(e,null,Object(c.c)(y.b,{md:!0,gutter:22},Object(c.c)(a,null,Object(c.c)(y.d,{tag:"h2",align:"center",type:"headline",css:function(e){return Object(c.b)("color:",e.color.secondary,";")},weight:"bold"},"About Us"),Object(c.c)(y.d,{tag:"p",color:"#676767",type:"body"},"We are now in the Industrial Revolution 4.0, an era of ubiquitous connectivity of people, machines and real time data. Modana is here to help people to be ready for this. Through the platform, we would help people improving their financial literacy towards economic inclusion for everyone. Because in Modana, everyone matters."),Object(c.c)(y.d,{tag:"p",color:"#676767",type:"body"},"For employers, they would get simple affordable HR, know their employee better, cashless Payroll, free them for hassles and increase productivity."),Object(c.c)(y.d,{tag:"p",color:"#676767",type:"body"},"For employees, they would get fair financial access, improve in financial literacy, access to broader network. Let’s Bank the Unbank! For financial institutions, they would get new channel acquisitions, easier underwriting process, and support on collection. In the future, we would also provide Credit Scoring.")),Object(c.c)(a,null,Object(c.c)(y.c,null,Object(c.c)(y.a,{md:6},Object(c.c)(U.c,{title:"Mission",titleWeight:"bold",desc:"Sustainable and responsible economic inclusion for everyone.",image:l.mission})),Object(c.c)(y.a,{md:6},Object(c.c)(U.c,{title:"Vision",titleWeight:"bold",desc:"Empowering people and businesses to do their best at work and life with the help of technology",image:l.vision})))))),Object(c.c)(a,null,Object(c.c)("div",null,Object(c.c)(N.a,{infinite:!0,speed:500,swipeToSlide:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:962,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:2,centerMode:!0,initialSlide:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]},Object(c.c)(d,null,Object(c.c)(r,null,"asdf")),Object(c.c)(d,null,Object(c.c)(r,null,"asdf")),Object(c.c)(d,null,Object(c.c)(r,null,"asdf")),Object(c.c)(d,null,Object(c.c)(r,null,"asdf")),Object(c.c)(d,null,Object(c.c)(r,null,"asdf"))))),Object(c.c)(o,null,Object(c.c)(y.b,{lg:!0,gutter:22},Object(c.c)(a,null,Object(c.c)(t,null,Object(c.c)(y.d,{tag:"h2",type:"headline",css:function(e){return Object(c.b)("color:",e.color.secondary,";")},align:"center"},"Meet the team"),Object(c.c)(y.d,{tag:"p",type:"intro",align:"center"},"The world of HR is complex – that’s why we built a flexible platform for the entire HR ecosystem.")),Object(c.c)(y.c,{gutter:25},Object(c.c)(y.a,{lg:4,md:6},Object(c.c)(g,null,Object(c.c)(n,null),Object(c.c)(i,null,Object(c.c)(y.d,{tag:"h4",type:"tout",css:function(e){return Object(c.b)("color:",e.color.primary,";")},align:"center"},"Lorem ipsum"),Object(c.c)(y.d,{tag:"p",type:"body-reduced",align:"center"},"Founder & Chief Executive Officer")),Object(c.c)(s,null,Object(c.c)(y.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))),Object(c.c)(y.a,{lg:4,md:6},Object(c.c)(g,null,Object(c.c)(n,null),Object(c.c)(i,null,Object(c.c)(y.d,{tag:"h4",type:"tout",css:function(e){return Object(c.b)("color:",e.color.primary,";")},align:"center"},"Lorem ipsum"),Object(c.c)(y.d,{tag:"p",type:"body-reduced",align:"center"},"Founder & Chief Executive Officer")),Object(c.c)(s,null,Object(c.c)(y.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))),Object(c.c)(y.a,{lg:4,md:6},Object(c.c)(g,null,Object(c.c)(n,null),Object(c.c)(i,null,Object(c.c)(y.d,{tag:"h4",type:"tout",css:function(e){return Object(c.b)("color:",e.color.primary,";")},align:"center"},"Lorem ipsum"),Object(c.c)(y.d,{tag:"p",type:"body-reduced",align:"center"},"Lorem ipsum")),Object(c.c)(s,null,Object(c.c)(y.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))))),Object(c.c)(a,{css:X},Object(c.c)(y.c,{gutter:20,align:"center"},Object(c.c)(y.a,{md:5},Object(c.c)("div",{css:function(e){return Object(c.b)("background:#eaeaea;height:250px;@media screen and (max-width:",e.breakPoints.sm,"){margin-bottom:40px;}")}})),Object(c.c)(y.a,{md:7},Object(c.c)("div",null,Object(c.c)(y.d,{tag:"h3",weight:"bold",css:function(e){return Object(c.b)("color:",e.color.primary,";")},type:"headline"},"Our team is growing. Come join us on the journey."),Object(c.c)(y.d,{tag:"p",type:"body"},"When you work on something you care about, with people you enjoy spending time with, it’s an amazing feeling. That energy. That oomph. That’s Modana. We believe everyone has the potential to feel this way at work."),Object(c.c)(y.d,{tag:"div",css:function(e){return Object(c.b)("color:",e.color.primary,";")},type:"bodu"},Object(c.c)(b,null,"See Open Positions  ",Object(c.c)(u.a,{css:function(e){return Object(c.b)("color:",e.color.secondary,";")},color:"",type:"arrow-right"}))))))))))},data:M})},G=a(424),F={name:"l57rop",styles:"padding-bottom:10px;"},H={name:"xi606m",styles:"text-align:center;"},V=function(){var e=Object(w.a)("div",{target:"encv2yq0"})("height:400px;max-width:",function(e){return e.theme.breakPoints.lg},";margin:0 auto;padding:80px 0 50px 0;"),t=Object(w.a)("div",{target:"encv2yq1"})({name:"1pmyvs2",styles:"padding:40px 0;"}),a=Object(w.a)("div",{target:"encv2yq2"})({name:"13y9lfb",styles:"padding:60px 0;"}),n=Object(w.a)("div",{target:"encv2yq3"})(""),i=Object(w.a)("div",{target:"encv2yq4"})("margin-bottom:10px;display:inline-block;height:140px;width:100%;@media screen and (min-width:",function(e){return e.theme.breakPoints.md},"){width:20%;&:nth-of-type(5n+1){border-left:0;}border-left:1px solid #eaeaea;}");return Object(c.c)(l.StaticQuery,{query:"1965698372",render:function(s){return Object(c.c)(I.a,null,Object(c.c)(e,null,Object(c.c)(y.b,{lg:!0,gutter:22},Object(c.c)(y.d,{tag:"h2",type:"headline",align:"center",weight:"bold",css:function(e){return Object(c.b)("color:",e.color.primary,";")}},"It’s time to tame the chaos of payroll, benefits, and HR"),Object(c.c)(y.d,{tag:"p",type:"intro-product-reduced",align:"center",css:F},"Empowering people and businesses to do their best at work and life with the help of technology"),Object(c.c)(U.e,{css:H,text:"Try Now for Free"}))),Object(c.c)(t,null,Object(c.c)(y.b,{md:!0,gutter:22},Object(c.c)(U.a,{title:"Why us?",desc:"The world of HR is complex – that’s why we built a flexible platform for the entire HR ecosystem."})),Object(c.c)(y.b,{xl:!0,gutter:22},Object(c.c)(a,null,Object(c.c)(y.c,{gutter:20,align:"center",css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){flex-direction:column-reverse;}")}},Object(c.c)(y.a,{md:6},Object(c.c)("div",null,Object(c.c)(U.f,{title:"Human Resource",desc:"With Modana human resources (HR) services, obtaining information becomes a speedy process as all you need to do is type in what you’re searching for."}),Object(c.c)(y.c,null,Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.team,titleWeight:"normal",title:"Easier Employee Management"})),Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.trackable,titleWeight:"normal",title:"Trackable sections"})),Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.attendance,titleWeight:"normal",title:"Paperless and secure"}))),Object(c.c)(U.d,null,"Learn More"))),Object(c.c)(y.a,{md:6},Object(c.c)("div",{css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){padding-bottom:40px;}")}},Object(c.c)(U.b,null,Object(c.c)(R.a,{fluid:s.payroll.childImageSharp.fluid})))))),Object(c.c)(a,null,Object(c.c)(y.c,{gutter:20,align:"center",css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){flex-direction:column-reverse;}")}},Object(c.c)(y.a,{md:6},Object(c.c)("div",null,Object(c.c)(U.f,{title:"Payroll System",desc:"Forget the hassle cash-based payroll payment and leave it to Modana to handle it. Distributing cashless payroll to each of your employee. Easy and secure. "}),Object(c.c)(y.c,null,Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.cashless,titleWeight:"normal",title:"Cashless"})),Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.settings,titleWeight:"normal",title:"Efficiencies"}))),Object(c.c)(U.d,null,"Learn More"))),Object(c.c)(y.a,{md:6},Object(c.c)("div",{css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){padding-bottom:40px;}")}},Object(c.c)(U.b,null,Object(c.c)(R.a,{fluid:s.payroll.childImageSharp.fluid})))))),Object(c.c)(a,null,Object(c.c)(y.c,{gutter:20,align:"center",css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){flex-direction:column-reverse;}")}},Object(c.c)(y.a,{md:6},Object(c.c)("div",null,Object(c.c)(U.f,{title:"Lending",desc:"Sketch is a design toolkit built to help you create your best work— from your earliest ideas, through to final artwork"}),Object(c.c)(y.c,null,Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.secure,titleWeight:"normal",title:"Secure"})),Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.checklist,titleWeight:"normal",title:"Easier"})),Object(c.c)(y.a,{md:4},Object(c.c)(U.c,{image:s.time,titleWeight:"normal",title:"Faster"}))),Object(c.c)(U.d,null,"Learn More"))),Object(c.c)(y.a,{md:6},Object(c.c)("div",{css:function(e){return Object(c.b)("@media screen and (max-width:",e.breakPoints.sm,"){padding-bottom:40px;}")}},Object(c.c)(U.b,null,Object(c.c)(R.a,{fluid:s.payroll.childImageSharp.fluid})))))),Object(c.c)("div",null,Object(c.c)(n,null,Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null),Object(c.c)(i,null))))))},data:G})};t.default=function(){return Object(c.c)("div",null,Object(c.c)(s.Router,null,Object(c.c)(p,{path:"/app",component:T.a}),Object(c.c)(p,{path:"/app/about-us",component:q}),Object(c.c)(p,{path:"/app/overview",component:V}),Object(c.c)(B,{path:"/app/login"})))}},398:function(e){e.exports={data:{vision:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC+0lEQVQ4y5VV7UtTURi/SH9A0L5EhVkQRVFBZJqBRWVEgaAf+pAhRdIiLdOoNKV8KSZkREhRYahEL5gfTBSMAhFDxECjtAzLzaVuc5vLVXbXdn6d59x77q5TMAcP59zzPOd3fs/rFLsHcQr/OX1sCd/n2z3sI1/DI26Ar4wLYoRxHdN1Di42xyQshGF3a1gKP1jJFf2Bv8DYVPTiPGCGEKjTB0yFxLeHS4qiMQMx6ycFN1L5PqKzWIghdFvVHaQ9C/J9vEJuEjMdDCZ3sICYgVWdaZ1CMdPdjJDBiJuR6G4xfJ2IYHg8LIT2Zh3Z6o9HnH6BMUEMw9EXhYEBxGMLz08goAL+P9qe4hYDzO8wyTSsyFjFvAzvb2DIGcLTlwMosbWi4tYr1L/oR9+XIHwzEI99c0WMOzLuiileBqjrB3D7YRd27CtHwuYCnLvSiOS0SljWWLEt9SqKr7cIkO9+A9TAUKJloIGNB4Cc849x7PQjpGVWo/p+J4o4wJaUEsRvysfOA5WwFj5BelYN90DVQZmRLEWC0UuU/tKqNhzPqxexSj9ag4LSJixflyuYrt1aiI1JRfg0qooQZJ+pE4AyTLMAaSWQ3Yer0N41Ch4mZGTfxdJVOQJkQ+JlrFifh8S9ZcKWEpOcVoHewYBoBslyDsOGpvdIPWTDoH0GfUPT2L7nGpatPgVLgpUzvIDm18Pw/oJwuexmu8g83TUzlKXCSEHZranrxq6DNwR4zwc/7jX04E7tW3T0utDaMYL9GdW4WN4M1/SsetSSYqp2Jl0h0DfdY8iy1iKTu5176TnOFjfiyMkHIgzPWgaEjSl2THaZEtNCBugEL51J7hoxbGz7zEEG0fnOLaqAzucWd7RsHJQMrfWY0S3kPgkFnOJEQmCyi2K6i416xbePAG16Y6vztaBMmCZsdi9HWy7knRFrK81CC80zbQQtanxJCRG7sYDQJYmZSMORS5CY6lMD/zPCCIiY6WAnFPPY5hMjnuYZjaBF/AX4yE3JjJ/H/QMaCVmAMmFQugAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/eedf41dee3ce01d3f9b8a98dd54963d5/0a963/vision.png",srcSet:"/static/eedf41dee3ce01d3f9b8a98dd54963d5/ab5da/vision.png 20w,\n/static/eedf41dee3ce01d3f9b8a98dd54963d5/213f4/vision.png 40w,\n/static/eedf41dee3ce01d3f9b8a98dd54963d5/0a963/vision.png 80w,\n/static/eedf41dee3ce01d3f9b8a98dd54963d5/96967/vision.png 100w",sizes:"(max-width: 80px) 100vw, 80px"}}},mission:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADA0lEQVQ4y5VVW0hUURS9SB8FUX2olUZCakYQlQWFPekn6EVEHz0QxQqZLAjUiqgIihx7EBhmWIk/KhJFfRQmZpSURCVG/mi+pnF0ZpzRKVOZce5Z7X3m3Jk7oyANLM4599yzztpr77tH63cjTqOf3Svm0Pxcv1t00BjscwE0CgJiIGhPqD0bwWobRjxz9LtCXBo9WEYb7b4pwDEaOTgDWRhMavcCowG5dhO2aCFlYGXtvEEv+WmuKxWzKYR61+8a47kYo3mKxmGyMkUmb+5zCYYk6BnSFYIwnqnRTOxXSqs19kyFqZu8CR/k24fHAc8EwCEapCZbGLp9RK6HWGEwZlMeYvzyANduN+B4/hNkW6rQ1OrAoA/odeozkfI8qBleqRGxhNv2lGBuQg7iFh5DZc0XeCcgw49JUJhDM7FHqTPmh3Ie4HBuBY6crETjRzuGfk9TaE6e0KaXQ4Sw1ylgKaqTpcQ+sofdg0H53JScKGixZEZmORkNLTZkbDyPZw2dcP4BfjqmJPHASERlLKkWS8a3s3ddAwHsOnALCSssyNp9Az96xmW4j2q/oqWN0umbmVQzh8lgde6/QMGFeixOO43Vmy4iMdWC/MJafPruwaLlp7DvaJm81ExmjFFJ4exxvT2u+4akjDNIzyxG2voirNxQjCXpBbj78AMsxXWYl5gry8kzEbInKilGtZN8wea3koq1Wy8jdV2h9I/JeOT1mqxLeP6mCzv3l8oLXjZ1S6+JVBhfmRaqHyHYOypacTC7HPOX5iF51Vl5yEASrRckn8D2vVZU1bdJOzJ3XEWnPQBqLsanKglt6pPSyRdR/bRdXL/XCOv9ZpSUvQ3jJqG0/B2uWF+j+fMgal504E7Fe0GZF0yoPPUyoTXUaYRsDhSC8IxDcHnMBO9kqB65jMhDJuOzAc+kJHzFvTCeGoQ71ILg73HqOnuiuoyIdJswpEX0nlDzAKtz+OT5zbIncnMkjLFS1TVmbbAMJmJliixPM7dtUpnC/Yxb0H/8BXg5TEMZPY/7B7IXTOFeY29ZAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/b79512f599b8a80359396ded39e26a25/0a963/mission.png",srcSet:"/static/b79512f599b8a80359396ded39e26a25/ab5da/mission.png 20w,\n/static/b79512f599b8a80359396ded39e26a25/213f4/mission.png 40w,\n/static/b79512f599b8a80359396ded39e26a25/0a963/mission.png 80w,\n/static/b79512f599b8a80359396ded39e26a25/96967/mission.png 100w",sizes:"(max-width: 80px) 100vw, 80px"}}}}}},424:function(e){e.exports={data:{attendance:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAElEQVQ4y5VV2U5TURS9IX4Cjyb8hol/4xf4RnxQFGQeymAZpCggUxTCFAELKjMoIhCRQMTSWqADrRQQSbE9y733vQdOMTzYZOece8+5a6+99lDLH0WWRb9gXN2g/V1/VK3TmtqJALQqMlwxRWfKOQuQlQQOkM0Y/oiNZdGLm3SwmvgD7B3qD5WA7UTUhZnADBqMA4fn8hwlu23ZzMDMVvmALiXpw7TNQsEXVup7KA3T6L26ZC53k5ET2Z/QPsfiMJkZg12GZLMLHQEHp0D0l2285wgctgYwkg7TVos1c8JMM5AGYzbj87to7voEd+ui2POXK5hbOYAhhb6fDv4UjBAzTDkX5NAXTguLgfFt3C8dQWXjNMrrJ8UqGqbwgN7NLEewSwAkiSOB0kxTlplNLT6H1ju6heLat6h7Ng/X0xnUeOZkX1g9gbcLe4j9ZsD01ezDMsAUe9wndu62RTwsH0NTx5IwY6DaljlUNE6hvW8NufmDeDWyKRozqJaJsazLMlDgMvi8eSwADe0fUOp+L6Cu5hkJvalzCY8q36BrcB315JR11t9qnAxA9hY+BkanA8iv8qKtdxVFFDazYwf5lV50DazjXuEwNvxn+BHDPzVqmcXKHrmmWLv23jUU1kxIZvmZHfQMbyCPpGB2LT3LiJ3iguU1DO2wtW5cMsyw3/sN3UNfkVc2KqXU+OKjyMCJcYo9A/BCUA6ZhS6us7PLTGo8s7KWkRMGqmqaRm7BkGR6P2GXjolhOY0uvcmAHDKz6SEropA93ctSNk9aF1DdPIsClxfD73xyT5eNiWEZ08M4UNJqHtKJM82sHrvGhbWbgCeXQiKNkZCMsgnwIbeP7mOtCWexb2wLQVo7+r+gkzKcSEK6RAPpYcF3aY0zYInT2BnDQXsPH10y5pbc3k/B5zg0Cvo8dibra56F2TzP7BEkoGl9Ufe2rlFHM2X0L9s5s9tLyPe3ZCbycCQ7YabO1LhuWmcYAzEzB+yOZY5t8pjD84xH0H/8BcQ5TM2M3mf9BaBAaj8qa+3CAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/4d6b4611814f3041f5ec43ae53a315eb/61df9/attendance.png",srcSet:"/static/4d6b4611814f3041f5ec43ae53a315eb/b9619/attendance.png 13w,\n/static/4d6b4611814f3041f5ec43ae53a315eb/b5fbc/attendance.png 25w,\n/static/4d6b4611814f3041f5ec43ae53a315eb/61df9/attendance.png 50w,\n/static/4d6b4611814f3041f5ec43ae53a315eb/165ed/attendance.png 75w,\n/static/4d6b4611814f3041f5ec43ae53a315eb/16ecd/attendance.png 100w",sizes:"(max-width: 50px) 100vw, 50px"}}},team:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADfUlEQVQ4y5VVaUiUQRj+kCLoJrtTrJSyqNQfSSQFkdC/sIQg0CIxIvEqtdusBDWVijzoILPUlMoUSjNBLRC1DNM80ixdj01dXe80dXee5p39vt3PEqKFl5n5ZuaZ533eYyWNDlYS/3Xo2Sw+D9boWB0fDa09AB8ZN/xhjO8xea+NW0xbL5YShqbHhCXxDzZ8o3pwCtAOWC7OAGY2Au3QAwOTYq3j5iaZmIGYVdNGaw+b4HMjH1lLN6M1M10WcxlI7DF5TWcnekYIlI3wtZ1EbhIzGUxcIOvsNzFp6TaCmLT3mebcG9AegVq8YBMy01SJNJPdNMqMGF3+2DAoALuGgJrmUTRofqF7GGjWTqGqcUhIo5ynux0mAl3E0GBxxci6OUDkjULYbArE5djXKH7/A1t3XoD7gXjxiPfJFKx3CsHj7BrxwPcuI1OkISxJiSZpQi4RIw+vREhzD+HgkWQkpZZjzrKjWLXBHxm5tXDZHQ5pwWGEXc1F3xgBGhR9KfqQVNFkCuD7un6EX89HCWdHLOKS3+JBVhX6x4GneV8QebMQTR2T6NTDDKZgSJY0YEL8T03DOBmWieiEIqS9+IyYxGJExBUg9EoO7qZX4v6Tj7ga/wahETnqyJvTyQzItQCFP7ugCcvt/TBv5TFE3y6Cu0c8Ftsex1y+9g1OQ8D5p5i1xAuO28+isn5AifhMgAbouSa37pcKvRxcQpH8qAKue6/B3jkEaxwD4Hk0GVH8kVUb/bFu22m8LG4RJIjMX4CKfjmFzXByuySifC+jUkTVdnOQsAtRr0QGWK89gT37Y1Feo4e233RXDWgW9NsPAwZ5gvoGpwuX/c5k4ll+I1Y4+GGT6zkUVWixz/MGFtr4IjapBEO8IJr5nWlBkQtd5CFR140CQRefY7a1twhO/juNcNd5VzjKavqw1yMO81f7ICGlDL0/zWnDlPqWVN1DJKmOa3In/QPstpxC4sNylFbpsIgzIoZfO6cQyINCAaGHSCKTu2xa2rRRuqhLjzZrW8ZE/Ta2T3DXsxDBq4bOEaP61nG0904rPVGufNQTYIxc2NOaAx2g/KJmQK6RFEq+KXsq7Sb7xsWYR71wKfUzCr+6fcktS4ykLZnqG7OwY5P0gHZQAO4QPZGaI7cRYip3jX82WIUpMZPBfCR12+Yv2VE/oxb0H38BenJTYca/W/0Gxasqvqjk9PwAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/2c1349a26d366fa07e7fe1fa4553bca7/61df9/team.png",srcSet:"/static/2c1349a26d366fa07e7fe1fa4553bca7/b9619/team.png 13w,\n/static/2c1349a26d366fa07e7fe1fa4553bca7/b5fbc/team.png 25w,\n/static/2c1349a26d366fa07e7fe1fa4553bca7/61df9/team.png 50w,\n/static/2c1349a26d366fa07e7fe1fa4553bca7/165ed/team.png 75w,\n/static/2c1349a26d366fa07e7fe1fa4553bca7/16ecd/team.png 100w",sizes:"(max-width: 50px) 100vw, 50px"}}},secure:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5klEQVQ4y5WV3UuTcRTHH6S/IASptPWuZW+QkWQJZSUZSPdBF1EEljoT7DbMVAq66SoiLBAz6SITb0wiIjDF5aqlWKmzaXPTzZeVsrU93875vWzPtl5IOJzfnt/z+zzf8/I7Gm4/Mgz68wTMVbS2u/2mi3x0wgeQN8mQYibtmWpvkqx5chaZzHD7JMugB9m04Vz4CUzPJw7+BhY3hnoCwHxE/PaTFRlSGViZkzfopTCtY1KFCe3HZ6RZnumP8bthX4jXZojWNoPDZGUKJr6sD0hYDFNBqVz/VntWcFgpfWBwzlSYsVTY1zlgZglwfgphcHhBQNmsUJWamCcoGF5WGLXkLAk26ongQk0rNu2pxYZdNSg/cwf9rmAS1HqOWYauJnsG6bBY2Xl7qwDdbR3Ao2cfUXDkGo6W3xT51B+WlmAYFnq8AJyzodElbNx9BffbHVgBsBQFXjl8yN5ehac9n+GnQox5Y/FCaYaR2g6szrsIvH7rF+o6e8fEIQ7fMbKIbfvq0NIxhOAKA6Np7WQk95YMgfvrbEWLUHOwtAFFpTdQePw6isuahOqS07fgmlgWeVYK/wyUKk0cKKnH+ny7hJ5owDGCrMurxOa9tQLa924O3+YRz+dfgeyLTzXBtlMCO59/gWt8GbkFdQKWt/8q+j/oaqcDk4qigYfLGkUOs7Zewr22Qbwc8CInv1ooZHAKMFEUddH1DZEhM/Bko+g/DrP+dg8ePnGKFHBRGPjmfSAOtDIMy/TQnQ8aFjhEwNW2i1ibW4mcHVUEq8aa3MvI2lIhVPLN4fZKU8gjiKsqr568n1y93r4ptHW60NE9gsddw2gn4zU3eNeL8dRBIc6QDzCwWV3ssCWXJvfi7A+y78pb1nK6JCIii8ytCN/NszCT55kaQWF6SYwvbnC6CSbfhhTjZ3Fl5COsbnpBAAvFTOThSBZipWpq/HPAsjGIlSnYOcM6tkmdjecZj6D/+BcQ4DC1Mnqe8QvDPUKxFNnYCAAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/5b278a82c5546e3f6a1c8328cea31ba2/61df9/secure.png",srcSet:"/static/5b278a82c5546e3f6a1c8328cea31ba2/b9619/secure.png 13w,\n/static/5b278a82c5546e3f6a1c8328cea31ba2/b5fbc/secure.png 25w,\n/static/5b278a82c5546e3f6a1c8328cea31ba2/61df9/secure.png 50w,\n/static/5b278a82c5546e3f6a1c8328cea31ba2/165ed/secure.png 75w,\n/static/5b278a82c5546e3f6a1c8328cea31ba2/16ecd/secure.png 100w",sizes:"(max-width: 50px) 100vw, 50px"}}},time:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADDElEQVQ4y5VV70uTURR+kf4EPwZ+DIK+hKVUIKF90IgysJAoKhD70IeykCC0mhETLaUfYkQgJX6QNAJ/ZEFKBUGD0gx/rLStqdO5zenSubndp3Pue+/2bhjS4HDve++5z33Oc885M1w+ZBn08wTENppfcvnEdxrjvxYAGgUZMkzQnlB7bjK7exHZjOFaMLEMWthOG8OhDWB2KXVwE7CkMagnACzF5LePbL9hMgMzG+YNcorSPKFYbMUQyje6EOa5CNM8x+AwmZkCo1EINp5Pzycw5U032kOmH4Mqpm0Ga6bCTCgH6cSHeT24DgQiNEbM8bffvCgDNOEJSgwvM4ybt6QzW1wFPo34UW17hbJzrSiveIKGliE4ZzbgXTYv1KAWaeKG1kqHwo6+P0Dr88/YmXcNZy+2wf7gHW43vUXJiWbkF9kw5JiXoBamWlsYFnTBYCxw94ATO3Kr0fXaiTggmQ05vKCIUWPvw56DNzHmisDjT4FpDCOVBoJuFPLm4rIm1D8cxAqh8XfF5Xa0vxyVMiyT+KWnH6Gmvk/qO+WNJx+KLQnIYPwIjrEQ9hba5Ej5KUEqr3TgWdeI/J4LAY/bHSg52WyGTWD/BGTnj198pFMdvk2tynWW4NbdARQda8SR8vuw3XuDzp5xFB5twEzQjGxTQF7klJjwRJF/qA79790S7OecGdK4ex3DzrBkXEvhnqp8Cv8a0nJTAwr9/LzJ+VZV0yXZLK2bGurLlqkARqfXsGvfdXT2jstsUOmTehRLGcnUYZ1+zG6gqLQRx8+04ANJwPvM9EX/BHYX3EBVbbdkz2mjQha6vo2M2hTsxNpMemK4cLUDuZQiBYftOFB8B3mUg5xCmnUqVJGWNm7uGtbSY1AOkUvt6+SKzMuewWnJnHWzgOnqEuxPY4AB7aqwo9ZS4gOszwxdxlpxiCxHZoNQzGL+iBx7uRdmcz8zW5DZvlKaiCSw1kuzstRwjNnNhuT5fNkTuTmShZmp6hpbNlg2BmJmCuy8YW3bJGwO9zNuQf/xFxDgMDUzWs/6CySvcQoL/m18AAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/9a928d637301fb83ed8a4c7de19f3d08/61df9/time.png",srcSet:"/static/9a928d637301fb83ed8a4c7de19f3d08/b9619/time.png 13w,\n/static/9a928d637301fb83ed8a4c7de19f3d08/b5fbc/time.png 25w,\n/static/9a928d637301fb83ed8a4c7de19f3d08/61df9/time.png 50w,\n/static/9a928d637301fb83ed8a4c7de19f3d08/165ed/time.png 75w,\n/static/9a928d637301fb83ed8a4c7de19f3d08/16ecd/time.png 100w",sizes:"(max-width: 50px) 100vw, 50px"}}},trackable:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADCklEQVQ4y4VVW0gVURQd6qPPIAiK6scyrJ8ekBWBFD2QICIwCEqIUEp6gBlYRJkJRQ/yL6LCwh4QoRIICYEl/VT2oSaF70finbnazcfV9M69Z3XWmXOuZ+yjgc2ZmXtm7bXX3mddx5FXn4eFjr76ozgoo1aGKyMlAzIEo4+rp+5jMhplFAyNYlGAIQIMAzY4glVyQ9PoNDAyBQyOKiADZu5B0IERwJsEYrPqXZd83hEipsGGuUG+9GU2XzHyhOh1BbiaZytJUu5NEJgJBqLY5cyVKZqCbGImzUSD/Pyl7s07GOC+aBo8ERlXqyuBlyjNWKZmpYB6Ikl+BLJr655SDLqHk+iJpFRYCYSWYXYsoUDLCVhHzeTqGwbROMANxVdqsCzzND40u5BbwMT8rddNhdiyfHdCYbQQ0GUDTIncXHb7LT5/i+Hhi2bsPHALz2rbcO1OA06cq8ar+h+qIbYEDN3EcceMhtJFxlAMOFL4CBkbzivgwuLnyNpSinXZF5F3/AGWrz2DyzfqMTwG6IbZkyAcezT4IzMxKirfITfvHvYcuosVWWexbW+FYlVd06qSWM0LjZdjgQl7A3VVpXlA7uFKLF5ZgJKyOsRTQUJLR9jj5Nh07fFgNzuHfEwmgZdv2rE0owhrNl1A01cXE37QHK39vJI9/eAhxJAMqFPDx0Fs31eB7N3XZZRjc85VpWF+0RO0dE5Cz2kaw9HnUx0pk8mAfZKdXr2xBEdPPsb3/hm0dsVx7FSValJ+UZV89wfWhKRLjnFwg5KDslkuNaT4OftvqvkjEwbnjd2lvva4EUOSihOwUc9V0ujID9t7p7F+6yU8fd2i9OJJIRDZ8+N5w51iRfLodhCwQJtCwj7DZPn+S0SxtbXlamKuGSLxO3Ce+w79jBakWYZAI2P4Byw9EXOdTepT4kvHyVRuQz9jGXQN6SKzgTXRulIi7DBBAzUznrAEwbQvFjq209LPeK5pChT+fwZLzXSZvgHriYgFIdemn9GC6Bo86PbAcsasv4C4jA5qZsokmPQB5y88SUe7QMRCkwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/5c18a5294946e58223d3956fb6febc81/61df9/trackable.png",srcSet:"/static/5c18a5294946e58223d3956fb6febc81/b9619/trackable.png 13w,\n/static/5c18a5294946e58223d3956fb6febc81/b5fbc/trackable.png 25w,\n/static/5c18a5294946e58223d3956fb6febc81/61df9/trackable.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},cashless:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADQElEQVQ4y4WVS0hUYRTHL7Vo3yIIMogyqECsrbRoVdDCiqwoe5mZ9lBMXYVUC4NWkZiYpIRQ1iKNILJ8a2ZGqKE91HQcHXXG0fH9mtHv3/l/915nFKuBP/e73+N3zznfOWcMQ34OD9Yb1q93GNGiEpFbtCSCSFEOPj167BNVieJdI9hgMpTJsGF9XoTJhtqRWcA7A/SNaJANs8cg1OkFPFOAb0HPdcl71ArDLNggN8hkQMYB26plqMeyMPiRRdnrJ5gfcA7jgBF0U9VaX5vvcS+he0hLWcIq2fOKe8VV/9AEzyq3gDfqmNFNWiWLcE9Cybui2/8Sz4h12mI5tzDu14y7BJZyQ49bBQbGgMKXzSouuQiJ6c9xJW1tcS3uRhGyCxqUxFoJcFEMIbCVQDcvQMxVXQMBdfjUQ5R+6EJ5Qz/K6pwoq18lmXtf34d38ow+k4OmNp8SQ/RFCWuCwCW6SmCny6+OxD7C2xoHKhoHBOpC+adVsua4HhP3GI3fRkAgGbwsw4qBHQtEHczCpu1XEbY7BVt2Ja8prm3eeR0RUbfQ0jkF16gOmWYYOmEtugYeysLWPSkI35eBHZHpa2tvOrZFpCJyfyZaOibh8kFuPGihCnEZdJnxqRSXqj4Pmq6Li5Uyrm4aEpnPmi/uFS4HgZ4gsKN/Accv5GHAB0gW6PSYXgIkReGbBw9icNwUb/X8tadoaPHy3QQKy3CEWPjTOa9iEwu0RWm3S1D31YMH+fVIzXyFN5XdYAJbyaxLUwNbQ4CWyz5dOgL81begjp7NRYUA7+dU42PzMApeNONedqVOGQadXnS6Avg9uKhdFgsVgVadTxNY5Z7SN7zI4KbfeY1j53IleYtxOuEJmOQJN58hNqkQMRfzcEIgJy/l61gnZRTrUmTqMQxSfh0ExptNQflpaf8o1HfHnGrrnoE80d4zC47bHbP40Tu3LK6xSug6z46ZvSDXYD8TcpfHtNJvxUfZm/8iu+S0Z2arUwHpOOG62zi9KorWMegsdG5isltCyDj0nRXmJ8zsVOqyEdpp2c9Y1+waTIn/NVjGzHKTvVPDuofUuhVdm/2MLYhdg4W+ZoM1/wKmRR2Mme0mYXKpxh9m2xZ8ZWqi4AAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/ef54bb6af9765cf00bd853113dfd36a2/61df9/cashless.png",srcSet:"/static/ef54bb6af9765cf00bd853113dfd36a2/b9619/cashless.png 13w,\n/static/ef54bb6af9765cf00bd853113dfd36a2/b5fbc/cashless.png 25w,\n/static/ef54bb6af9765cf00bd853113dfd36a2/61df9/cashless.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},settings:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADeElEQVQ4y12VWWxMYRTHb3jwhISIREpqqdjXEIIgCEKCIBG8iKIIorZEgqiQSigRW62xFg+WFw+aNKlqFa0uD6KqSlU7M51W6Vg607l/53/u981M3eRk7p357u9s/3PGceSq9aOrY67PASwReyjmE4uKQcyl1fLTr/ctYnliqfVBdPMYrsewsLom9JcD+cHfQNMvoC4IyCGaa6BqhH5pAvxtQEu7flctz9M6BebB3AYeEEDkk0/Ni0qgvDdgfTYRdwggTDAdfAlgthNP08033v7yhfoW0BTwtRn49t1EZ2AWbqION/7QT5+Ae2nNmKZ4i9gUy6p+ugWlfsxcnIkLN1+hsuYXqr6GY1ADtpGyDO2tYX0+TOAj1oxpMrKSd63u5DkZGDZpH3okpWLgmHSkTNiDKzmloOPqbxGetXATqdvh+6nAcgJ9bADrxDQLSgMKmzjrEM7dKMaaTVfRO3kTsrKfg+nT6LimsaNTCciQ+x8ERhMK7c6SNLv3W49TlwrAS9LHkPG7kTRiO15WBDX94spmNP/xmpHwrn46NnT+QC/Zt19rikvXnkVReRAZJ59hwMgdWLftBs5cLcTMRZkYN+MA0nbfxXOpMxvyyReNQR17I1+67GZFdQhDBdhnUBqSR+9E35St6D0wDQcyn6qjafOPYlXqJfSU+jKLhlbvXRtpDGgF/L6uHdcflGl3B43dhYPHn+JxbjXW77iFpOHbkV/igyulmLfsBEZN3Y/yD20qMdMoAfrj+Vs5sJv1zUz/jaSWg5sPK3H68gtxkI6N6XfUWd8hW7DvyBME2tggE6GwHDOfMQlYSVR8DGH6wmOYMvcIBo/bhS1772H1hitaBnZ9/vIsXL5boiNIYGJTWtgt2375UWc5K7tAX2ajrt1/q9C84gYUSaczsp5ph1lzG4h2PIAQgXn04s2mqxHyYGFZk8qFOqTQV667qB2lDgMhTy62bnIfZXNE4FUEpnpLAeFE9X8U4d5+VIkFK05h854c5BbVG0FH1RI3UW3ADX/3dsF5h/uMK8iL0u0E9UYyqtLw9BYfudq4mDvMlERk46TotuE+Yw34khxut+nLeGltOJbUWlwJ6pDLN0yY2VQbnMRNy33GuebW4KAbr7Ep+n/BMmqTZsTCahrdLp22NvcZVxC3Bgc9cUapsYS/gJBYFWtm0yRMauz8A3cNEbA3cx3zAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/f8d267aeba2bf831695ff07756778263/61df9/settings.png",srcSet:"/static/f8d267aeba2bf831695ff07756778263/b9619/settings.png 13w,\n/static/f8d267aeba2bf831695ff07756778263/b5fbc/settings.png 25w,\n/static/f8d267aeba2bf831695ff07756778263/61df9/settings.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},checklist:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADJUlEQVQ4y4WUS0hUYRTHL7Vo16IHhhmZ5Yuyh6YVESG1amHQshYSGD0GxTI1DXpYFLQoSHIVVhCYGAZimzTLjRISBiEqYZOizr0zMmpa6IxzT+d/vu+buUNBA4e5c+d8v+9/npbFH79Dqy39+RGkk2ztbDZbjI3YXJgf3448h9l62MomZ2iNYriKYWATIdrCDr0zv4lCv4gmZgRkYOaZAB0PETkLROFlefeNfx9OEqZh03Dgl1F+jhpVcaijFSYuWWHfCMC4YDxIxVYiTLdX37YkKhx1iMNwxwIx8tp3Oybv+YyBRwLz8m0zeJ3kDGFqZaScyeWDEmJwUaUABj8cBpj94ulg5ctzEYHeBvANnBGmUQbYZFjlrLl1kHy1r6jU95zq73VSd/+U5A9AczmrXbF/iv8XAG1dANcLGxxdoJIzjZSS6aNNsCz1nZ53me48fEfTcwmon8PXjHkr3hoO6dwoZSWnG2ljxkXKKaylrIJqyt5fQ9v3VokB/ri5T9KA8L3Fs7ytgT+RM4QJNTv2XRXLKqihrbsqaefBOmrpGKKiYw2Uf/QGjUwsS4W9+bS8dABxq6+2lVJ2XKLC4lu0bfcVSsutEGDb2xGqutlOm3PK5X3H+zHJJ59LUvgX8Gz5C1qbVkYVdW30sv2rhPu05TPnrovWp5+X36kMbe0cNmF7gI4GOgqI1kA1ETJUVF5/TQNDc/TgyUdRjXwiDZn51fThU0CKg940DEvPp4wU/kCfdfdNSjVxMDW7nI6cuC/PGXuqKLfomlT+VGkTTc0mtU885DAS650M5OXuoy7akHFBVCJ/UAQoYHmH6ql3wPaqk/lmUYsA9gCA2cQ46RvFufFZPx043iBqUQhAoQwwez7RMuwfgz+fHwWwTC+FiJEtzcrQELfQ8PiSVBMFQM4QJg4n958bmVW7oMnCPsMK0iqToDhkVhWqaabDhKlhK3pKorxxMmXbYJ/hIAqCQYeTX20TUYq2gOlNoy4MujEoA0xvqnOWd9Nin2GusTUw6P9bsFCrw4wa2FjAXZW0tbHPsIKwNTDo/1ywqm8X2UaRMxMmYLxUrD8wrfuHI9bWnwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/304461df66281cd736bd40a474f4284c/61df9/checklist.png",srcSet:"/static/304461df66281cd736bd40a474f4284c/b9619/checklist.png 13w,\n/static/304461df66281cd736bd40a474f4284c/b5fbc/checklist.png 25w,\n/static/304461df66281cd736bd40a474f4284c/61df9/checklist.png 50w",sizes:"(max-width: 50px) 100vw, 50px"}}},payroll:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABSUlEQVQoz21S2XLDMAj0/39mXjxOD7eNboS3LLKStqlmGKQVWljEsu8BKTccx4FaK3IuCDEjpoza+mkCVfWYaTwDB3IV7J/J30rvWGIWdB1BrTWkVPH+GfD2cfMzA+mn8fwXE3nELYmEXe+ErJDVlVK9im5ZJ4mIPGF8y7NqfxDm2sFVSsH1upmSIYeLBNu2oRkZk05sXVdcLhcrIDvGOyZcipE5oQHJqttN6ldIvp9V8NHc05g4pYQY49PdQjI2nhXdYsH6ErC+3nxPGcw6+iRm3eUNiXq3iblkksnZw05ZSvIheTzoVlF2Qpemj7vpZytcMs5FkB8R7JfZhmKJUhH3tJirj1dI1gpRO7fTV1fY+uHjtUz2wz6iGWAxVjHALty9YbWptSG7lxMb95xFRTb8F6HqGBvK/te6uHz6nxg/IlnVuXAOK74B0n8RaFT/vBcAAAAASUVORK5CYII=",aspectRatio:1.9593613933236576,src:"/static/051c924ed88effbdfe6abc3e7e727480/1e875/payroll-modana.png",srcSet:"/static/051c924ed88effbdfe6abc3e7e727480/5f5eb/payroll-modana.png 150w,\n/static/051c924ed88effbdfe6abc3e7e727480/07cb7/payroll-modana.png 300w,\n/static/051c924ed88effbdfe6abc3e7e727480/1e875/payroll-modana.png 600w,\n/static/051c924ed88effbdfe6abc3e7e727480/4ddaa/payroll-modana.png 900w,\n/static/051c924ed88effbdfe6abc3e7e727480/bfb6f/payroll-modana.png 1200w,\n/static/051c924ed88effbdfe6abc3e7e727480/6ae68/payroll-modana.png 1800w,\n/static/051c924ed88effbdfe6abc3e7e727480/e20dd/payroll-modana.png 2700w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-app-jsx-69fc8a0f431851c78474.js.map