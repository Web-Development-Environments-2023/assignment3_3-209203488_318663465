(function(e){function t(t){for(var n,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-261aef00":"8703da6d","chunk-575ca5cd":"ccc94ba5","chunk-5a28a07d":"39bec9c6","chunk-746908e5":"8dbe03f9"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-261aef00":1,"chunk-575ca5cd":1,"chunk-5a28a07d":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-261aef00":"ddcd9084","chunk-575ca5cd":"e4bb2144","chunk-5a28a07d":"7919faa8","chunk-746908e5":"31d6cfe0"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],p.parentNode.removeChild(p),a(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"21ea":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("4160"),a("d3b7"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg bg-body-tertiary"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("L&T Recipes")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"main"}}},[e._v("Main")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[e._v("Search")])],1),e._m(1)]),a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[e.$root.store.username?e._e():a("span",{staticClass:"navbar-text"},[e._v(" Guest: ")])]),e.$root.store.username?e._e():a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)]),e.$root.store.username?e._e():a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)]),e.$root.store.username?a("li",{staticClass:"nav-item"},[a("span",{staticClass:"navbar-text"},[e._v(" "+e._s(e.$root.store.username)+": ")])]):e._e(),e.$root.store.username?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("button",{staticClass:"btn btn-link",on:{click:e.Logout}},[e._v("Logout")])])]):e._e()])])]),a("router-view")],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e._v(" Personal ")]),a("div",{staticClass:"dropdown-menu"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Another action")])])])}],o={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},i=o,c=(a("5c0b"),a("2877")),u=Object(c["a"])(i,r,s,!1,null,null,null),l=u.exports,d=a("a7fe"),p=a.n(d),f=a("bc3a"),v=a.n(f),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Main Page")]),a("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{id:"randomRecipes",title:"Explore this recipes"}})],1)},m=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),a("b-row",e._l(e.recipes,(function(e){return a("b-col",{key:e.id},[a("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},b=[],_=a("2909"),C=(a("96cf"),a("1da1")),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[a("div",{staticClass:"recipe-body"},[e.image_load?a("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),a("div",{staticClass:"recipe-footer"},[a("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),a("ul",{staticClass:"recipe-overview"},[a("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")])])])])},k=[],y={mounted:function(){var e=this;this.axios.defaults.withCredentials=!0,this.axios.get(this.recipe.image).then((function(t){e.image_load=!0})),this.axios.defaults.withCredentials=!1},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},x=y,j=(a("5bc7"),Object(c["a"])(x,w,k,!1,null,"c21a2276",null)),O=j.exports,P={name:"RecipePreviewList",components:{RecipePreview:O},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.get(e.$root.store.server_domain+"/rand");case 4:n=t.sent,e.axios.defaults.withCredentials=!1,r=n.data.recipes,e.recipes=[],(a=e.recipes).push.apply(a,Object(_["a"])(r)),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},$=P,E=(a("8c2b"),Object(c["a"])($,g,b,!1,null,"008bf0fe",null)),S=E.exports,L={components:{RecipePreviewList:S}},R=L,T=(a("f95e"),Object(c["a"])(R,h,m,!1,null,"635f1e88",null)),A=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Four Oh Four you didn't")]),a("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},N=[],D={},I=Object(c["a"])(D,M,N,!1,null,null,null),q=I.exports,F=[{path:"/",name:"main",component:A},{path:"/register",name:"register",component:function(){return a.e("chunk-575ca5cd").then(a.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return a.e("chunk-261aef00").then(a.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return a.e("chunk-746908e5").then(a.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return a.e("chunk-5a28a07d").then(a.bind(null,"6619"))}},{path:"*",name:"notFound",component:q}],B=F,H=a("8c4f"),U=a("2b27"),G=a.n(U),J=a("1dce"),K=a.n(J),z=(a("f9e3"),a("2dd8"),a("1073")),Q=a("cbd0"),V=a("b1fc"),W=a("7049"),X=a("a7e2"),Y=a("f9bc"),Z=a("44d4"),ee=a("cca8"),te=a("51c2"),ae=a("498a");n["default"].use(H["a"]);var ne=new H["a"]({routes:B});[z["a"],Q["a"],V["a"],W["a"],X["a"],Y["a"],Z["a"],ee["a"],te["a"],ae["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(K.a),n["default"].use(G.a),v.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(p.a,v.a),n["default"].config.productionTip=!1;var re={username:localStorage.username,server_domain:"http://127.0.01:80",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(re),new n["default"]({router:ne,data:function(){return{store:re}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5bc7":function(e,t,a){"use strict";var n=a("6a69"),r=a.n(n);r.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"6a69":function(e,t,a){},"8c2b":function(e,t,a){"use strict";var n=a("21ea"),r=a.n(n);r.a},9752:function(e,t,a){},"9c0c":function(e,t,a){},f95e:function(e,t,a){"use strict";var n=a("9752"),r=a.n(n);r.a}});
//# sourceMappingURL=app.5a00a001.js.map