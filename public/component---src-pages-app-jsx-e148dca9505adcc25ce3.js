(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(27),o=n(219),c=n.n(o),d=n(187),u=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},s=function(e){var t=e.username,n=e.password;return"admin"===t&&"Modana18"===n&&u({username:"akida",name:"Akida",email:"akida@example.org"})},p=function(){return!!l().username},b=function(e){var t=e.component,n=e.location,a=c()(e,["component","location"]);return p()||"/app/login"===n.pathname?r.a.createElement(t,a):("undefined"!=typeof window&&Object(d.navigate)("/app/login"),null)},f=(n(241),n(208)),g=n.n(f),h=(n(235),n(236)),m=n.n(h),O=n(186),j=n.n(O),y=(n(378),n(8)),v=n.n(y),A=n(192),w=n(17),x=n(189),E=n(244),S=n.n(E),C=n(266),k=n(270);function J(){var e=j()(["\n                        border-top-left-radius: 0;\n                        border-bottom-right-radius: 3px !important;\n                        & ~ .ant-input-group-addon {\n                          position: absolute;\n                          top: 0;\n                          display: ",";\n                          padding-top: 5px;\n                          cursor: pointer;\n                          right: 0;\n                          z-index: 10;\n                          bottom: 0;\n                          width: 43px;\n                          background: none;\n                          border: none;\n                        }\n                      "]);return J=function(){return e},e}function M(){var e=j()(["\n                        border-bottom: 1px solid rgba(255,255,255,0);\n                        border-bottom-left-radius: 0;\n                        border-bottom-right-radius: 0;\n                      "]);return M=function(){return e},e}function R(){var e=j()(["\n                  max-width: 320px;\n                  padding: 20px;\n                "]);return R=function(){return e},e}function L(){var e=j()(["text-align: center;"]);return L=function(){return e},e}function z(){var e=j()(["\n            height: 100vh;\n            background: #f4fcff;\n            height: 100vh;"]);return z=function(){return e},e}function B(){var e=j()(["\n      background: none;\n      height: 32px;\n      border: none;\n      position: relative;\n      outline: none;\n      cursor: pointer;\n    "]);return B=function(){return e},e}var W=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSubmit=function(e){e.preventDefault(),s({username:n.state.username,password:n.state.password})?Object(d.navigate)("/app"):n.setState({isNotValid:!0})},n.handleChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t)),"password"===e.target.name&&(""!==e.target.value?n.setState({isExist:!0}):n.setState({isExist:!1}))},n.state={username:"",password:"",isExist:!1,isNotValid:!1},n}return v()(t,e),t.prototype.render=function(){var e=this;p()&&Object(d.navigate)("/app");var t=A.a.button(B());return Object(w.d)("div",null,Object(w.d)(x.b,null,Object(w.d)(x.c,{justify:"center",align:"center",css:Object(w.c)(z())},Object(w.d)(x.a,null,Object(w.d)("form",{onSubmit:this.handleSubmit},Object(w.d)("div",{css:Object(w.c)(L())},Object(w.d)("img",{src:S.a,alt:""})),Object(w.d)("div",{css:Object(w.c)(R())},Object(w.d)(C.Transition,{in:this.state.isNotValid,appear:!0,onEnter:function(e){k.b.set(e,{x:-25})},addEndListener:function(t){k.b.to(t,1,{ease:k.a.easeOut.config(1,.1),x:0,onComplete:function(){e.setState({isNotValid:!1})}})}},Object(w.d)("div",null,Object(w.d)(m.a,{css:Object(w.c)(M()),size:"large",name:"username",type:"text",value:this.state.username,onChange:this.handleChange,placeholder:"Username"}),Object(w.d)(m.a,{css:Object(w.c)(J(),this.state.isExist?"inline-block":"none"),name:"password",type:"password",value:this.state.password,onChange:this.handleChange,size:"large",placeholder:"Password",addonAfter:Object(w.d)(t,{type:"submit"},Object(w.d)(g.a,{type:"right-circle"}))})))))))))},t}(r.a.Component),F=n(271),Y=(n(237),n(391)),H=n(202),I=n.n(H),Q=n(240);function P(){var e=j()(["\n    display: flex;\n    max-width: 500px;\n    height: 300px;\n    align-items: center;\n  "]);return P=function(){return e},e}function T(){var e=j()(["\n    background: #666;\n  "]);return T=function(){return e},e}var V=function(){var e=A.a.div(T()),t=A.a.div(P());return Object(w.d)(e,null,Object(w.d)(x.b,{xl:!0,gutter:22},Object(w.d)(t,null,Object(w.d)(x.d,{tag:"h2",color:"#fff",type:"headline"},"Creating a world where work empowers a better life"))))};function q(){var e=j()(["color: ",";"]);return q=function(){return e},e}function G(){var e=j()(["margin-bottom: 21px;"]);return G=function(){return e},e}function U(){var e=j()(["margin-bottom: 21px;"]);return U=function(){return e},e}function Z(){var e=j()(["color: ",";"]);return Z=function(){return e},e}function D(){var e=j()(["\n  \n  "]);return D=function(){return e},e}function N(){var e=j()(["\n  \n  "]);return N=function(){return e},e}function X(){var e=j()(["\n  \n  "]);return X=function(){return e},e}function K(){var e=j()(["\n    background: #444;\n    height: 150px;\n    margin-bottom: 20px;\n  "]);return K=function(){return e},e}function $(){var e=j()(["\n    padding: 20px 0;\n  "]);return $=function(){return e},e}function _(){var e=j()(["\n    padding: 10px;\n    text-align: center;\n    margin-bottom: 20px;\n  "]);return _=function(){return e},e}function ee(){var e=j()(["\n    margin-bottom: 50px;\n    max-width: ",";\n    margin-left: auto;\n    margin-right: auto;\n  "]);return ee=function(){return e},e}function te(){var e=j()(["\n    padding: 40px 0;\n  "]);return te=function(){return e},e}var ne=function(){var e=A.a.div(te()),t=A.a.div(ee(),function(e){return e.theme.breakPoints.md}),n=A.a.div(_()),a=A.a.section($()),r=A.a.div(K()),i=A.a.div(X()),o=A.a.div(N()),c=A.a.div(D());return Object(w.d)(d.StaticQuery,{query:"2895402918",render:function(d){return Object(w.d)(Q.a,null,Object(w.d)(V,null),Object(w.d)(e,null,Object(w.d)(x.b,{md:!0,gutter:22},Object(w.d)(a,null,Object(w.d)(x.d,{tag:"h2",align:"center",type:"headline",css:function(e){return Object(w.c)(Z(),e.color.secondary)},weight:"bold"},"About Us"),Object(w.d)(x.d,{tag:"p",color:"#676767",type:"body"},"We are now in the Industrial Revolution 4.0, an era of ubiquitous connectivity of people, machines and real time data. Modana is here to help people to be ready for this. Through the platform, we would help people improving their financial literacy towards economic inclusion for everyone. Because in Modana, everyone matters."),Object(w.d)(x.d,{tag:"p",color:"#676767",type:"body"},"For employers, they would get simple affordable HR, know their employee better, cashless Payroll, free them for hassles and increase productivity."),Object(w.d)(x.d,{tag:"p",color:"#676767",type:"body"},"For employees, they would get fair financial access, improve in financial literacy, access to broader network. Let’s Bank the Unbank! For financial institutions, they would get new channel acquisitions, easier underwriting process, and support on collection. In the future, we would also provide Credit Scoring.")),Object(w.d)(a,null,Object(w.d)(x.c,null,Object(w.d)(x.a,{md:6},Object(w.d)(n,null,Object(w.d)(I.a,{css:Object(w.c)(U()),fixed:d.vision.childImageSharp.fixed}),Object(w.d)(x.d,{type:"body",align:"center",weight:"bold",tag:"p"},"Vision"),Object(w.d)(x.d,{type:"body",align:"center",tag:"p"},"Sustainable and responsible economic inclusion for everyone."))),Object(w.d)(x.a,{md:6},Object(w.d)(n,null,Object(w.d)(I.a,{css:Object(w.c)(G()),fixed:d.mission.childImageSharp.fixed}),Object(w.d)(x.d,{type:"body",align:"center",weight:"bold",tag:"p"},"Misson"),Object(w.d)(x.d,{type:"body",align:"center",tag:"p"},"Empowering people and businesses to do their best at work and life with the help of technology"))))))),Object(w.d)(c,null,Object(w.d)(x.b,{lg:!0,gutter:22},Object(w.d)(a,null,Object(w.d)(t,null,Object(w.d)(x.d,{tag:"h2",type:"headline",css:function(e){return Object(w.c)(q(),e.color.secondary)},align:"center"},"Meet the team"),Object(w.d)(x.d,{tag:"p",type:"intro",align:"center"},"The world of HR is complex – that’s why we built a flexible platform for the entire HR ecosystem.")),Object(w.d)(x.c,{gutter:25},Object(w.d)(x.a,{lg:4,md:6},Object(w.d)("div",null,Object(w.d)(r,null),Object(w.d)(i,null,Object(w.d)(x.d,{tag:"h4",type:"tout",align:"center"},"Lorem ipsum"),Object(w.d)(x.d,{tag:"p",type:"body",align:"center"},"Founder & Chief Executive Officer")),Object(w.d)(o,null,Object(w.d)(x.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))),Object(w.d)(x.a,{lg:4,md:6},Object(w.d)("div",null,Object(w.d)(r,null),Object(w.d)(i,null,Object(w.d)(x.d,{tag:"h4",type:"tout",align:"center"},"Lorem ipsum"),Object(w.d)(x.d,{tag:"p",type:"body",align:"center"},"Founder & Chief Executive Officer")),Object(w.d)(o,null,Object(w.d)(x.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))),Object(w.d)(x.a,{lg:4,md:6},Object(w.d)("div",null,Object(w.d)(r,null),Object(w.d)(i,null,Object(w.d)(x.d,{tag:"h4",type:"tout",align:"center"},"Lorem ipsum"),Object(w.d)(x.d,{tag:"p",type:"body",align:"center"},"Lorem ipsum")),Object(w.d)(o,null,Object(w.d)(x.d,{tag:"p",type:"body"},"Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life.")))))))))},data:Y})};t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.Router,null,r.a.createElement(b,{path:"/app",component:F.a}),r.a.createElement(b,{path:"/app/about-us",component:ne}),r.a.createElement(W,{path:"/app/login"})))}},378:function(e,t,n){var a=n(31).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(22)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},391:function(e){e.exports={data:{vision:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC+0lEQVQ4y5VV7UtTURi/SH9A0L5EhVkQRVFBZJqBRWVEgaAf+pAhRdIiLdOoNKV8KSZkREhRYahEL5gfTBSMAhFDxECjtAzLzaVuc5vLVXbXdn6d59x77q5TMAcP59zzPOd3fs/rFLsHcQr/OX1sCd/n2z3sI1/DI26Ar4wLYoRxHdN1Di42xyQshGF3a1gKP1jJFf2Bv8DYVPTiPGCGEKjTB0yFxLeHS4qiMQMx6ycFN1L5PqKzWIghdFvVHaQ9C/J9vEJuEjMdDCZ3sICYgVWdaZ1CMdPdjJDBiJuR6G4xfJ2IYHg8LIT2Zh3Z6o9HnH6BMUEMw9EXhYEBxGMLz08goAL+P9qe4hYDzO8wyTSsyFjFvAzvb2DIGcLTlwMosbWi4tYr1L/oR9+XIHwzEI99c0WMOzLuiileBqjrB3D7YRd27CtHwuYCnLvSiOS0SljWWLEt9SqKr7cIkO9+A9TAUKJloIGNB4Cc849x7PQjpGVWo/p+J4o4wJaUEsRvysfOA5WwFj5BelYN90DVQZmRLEWC0UuU/tKqNhzPqxexSj9ag4LSJixflyuYrt1aiI1JRfg0qooQZJ+pE4AyTLMAaSWQ3Yer0N41Ch4mZGTfxdJVOQJkQ+JlrFifh8S9ZcKWEpOcVoHewYBoBslyDsOGpvdIPWTDoH0GfUPT2L7nGpatPgVLgpUzvIDm18Pw/oJwuexmu8g83TUzlKXCSEHZranrxq6DNwR4zwc/7jX04E7tW3T0utDaMYL9GdW4WN4M1/SsetSSYqp2Jl0h0DfdY8iy1iKTu5176TnOFjfiyMkHIgzPWgaEjSl2THaZEtNCBugEL51J7hoxbGz7zEEG0fnOLaqAzucWd7RsHJQMrfWY0S3kPgkFnOJEQmCyi2K6i416xbePAG16Y6vztaBMmCZsdi9HWy7knRFrK81CC80zbQQtanxJCRG7sYDQJYmZSMORS5CY6lMD/zPCCIiY6WAnFPPY5hMjnuYZjaBF/AX4yE3JjJ/H/QMaCVmAMmFQugAAAABJRU5ErkJggg==",width:80,height:80,src:"/static/eedf41dee3ce01d3f9b8a98dd54963d5/b3397/vision.png",srcSet:"/static/eedf41dee3ce01d3f9b8a98dd54963d5/b3397/vision.png 1x"}}},mission:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADA0lEQVQ4y5VVW0hUURS9SB8FUX2olUZCakYQlQWFPekn6EVEHz0QxQqZLAjUiqgIihx7EBhmWIk/KhJFfRQmZpSURCVG/mi+pnF0ZpzRKVOZce5Z7X3m3Jk7oyANLM4599yzztpr77tH63cjTqOf3Svm0Pxcv1t00BjscwE0CgJiIGhPqD0bwWobRjxz9LtCXBo9WEYb7b4pwDEaOTgDWRhMavcCowG5dhO2aCFlYGXtvEEv+WmuKxWzKYR61+8a47kYo3mKxmGyMkUmb+5zCYYk6BnSFYIwnqnRTOxXSqs19kyFqZu8CR/k24fHAc8EwCEapCZbGLp9RK6HWGEwZlMeYvzyANduN+B4/hNkW6rQ1OrAoA/odeozkfI8qBleqRGxhNv2lGBuQg7iFh5DZc0XeCcgw49JUJhDM7FHqTPmh3Ie4HBuBY6crETjRzuGfk9TaE6e0KaXQ4Sw1ylgKaqTpcQ+sofdg0H53JScKGixZEZmORkNLTZkbDyPZw2dcP4BfjqmJPHASERlLKkWS8a3s3ddAwHsOnALCSssyNp9Az96xmW4j2q/oqWN0umbmVQzh8lgde6/QMGFeixOO43Vmy4iMdWC/MJafPruwaLlp7DvaJm81ExmjFFJ4exxvT2u+4akjDNIzyxG2voirNxQjCXpBbj78AMsxXWYl5gry8kzEbInKilGtZN8wea3koq1Wy8jdV2h9I/JeOT1mqxLeP6mCzv3l8oLXjZ1S6+JVBhfmRaqHyHYOypacTC7HPOX5iF51Vl5yEASrRckn8D2vVZU1bdJOzJ3XEWnPQBqLsanKglt6pPSyRdR/bRdXL/XCOv9ZpSUvQ3jJqG0/B2uWF+j+fMgal504E7Fe0GZF0yoPPUyoTXUaYRsDhSC8IxDcHnMBO9kqB65jMhDJuOzAc+kJHzFvTCeGoQ71ILg73HqOnuiuoyIdJswpEX0nlDzAKtz+OT5zbIncnMkjLFS1TVmbbAMJmJliixPM7dtUpnC/Yxb0H/8BXg5TEMZPY/7B7IXTOFeY29ZAAAAAElFTkSuQmCC",width:80,height:80,src:"/static/b79512f599b8a80359396ded39e26a25/b3397/mission.png",srcSet:"/static/b79512f599b8a80359396ded39e26a25/b3397/mission.png 1x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-app-jsx-e148dca9505adcc25ce3.js.map