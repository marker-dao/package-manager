(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],g=0,_=[];g<c.length;g++)o=c[g],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&_.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(_.length)_.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={index:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1683:function(t,e,a){t.exports=a.p+"img/hotpng.cf5f96ff.png"},2931:function(t,e,a){"use strict";a("9806")},"2f6f":function(t,e,a){"use strict";a("ed42")},"2fb4":function(t,e,a){},"3d13":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("a",{staticClass:"git-hub-link link link--black",attrs:{href:"https://github.com/MertvyeDushi/",target:"_blank"}},[t._v("designed by mark")])],1)},i=[],o=(a("5c0b"),a("2877")),c={},r=Object(o["a"])(c,s,i,!1,null,null,null),l=r.exports,u=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page u-df-column-center-center"},[a("div",{staticClass:"home-page__inner-container"},[a("SearchComponent"),a("TableComponent")],1)])},_=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input__wrapper u-df-center"},[a("input",{staticClass:"input__field input",attrs:{placeholder:"Just search it...",autofocus:"true"},domProps:{value:t.queryString},on:{input:t.startSearch}}),a("div",{staticClass:"input__remove remove-btn",on:{mousedown:t.clearInputValue}})])},f=[],h=a("5530"),d=a("2f62"),m={name:"SearchComponent",data:function(){return{queryString:""}},methods:Object(h["a"])(Object(h["a"])({},Object(d["b"])(["getPackages"])),{},{startSearch:function(t){window.scrollTo(0,-1e3),this.queryString=t.target.value;var e={string:t.target.value};this.getPackages(e)},clearInputValue:function(){window.scrollTo(0,-1e3),this.queryString="",this.$store.commit("SET_QUERY_STRING",this.queryString)}})},b=m,k=(a("9e7a"),Object(o["a"])(b,p,f,!1,null,"20c799a6",null)),v=k.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table__wrapper"},[a("TablePaginationComponent"),a("h1",{staticClass:"table__title secondary-title"},[t._v(t._s(t.tableTitle))]),t.POPULAR_PACKAGES.length?a("div",{staticClass:"table__body"},t._l(t.tableItems,(function(t){return a("TableRowComponent",{key:t.objectID,attrs:{item:t}})})),1):t._e()],1)},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination__inner-wrapper"},[a("ul",{staticClass:"pagination__list u-df-column-flex-start"},[t.showFirstIndex?a("li",{staticClass:"pagination__list-item",on:{click:function(e){return t.getClickedPage(1)}}},[t._v("1")]):t._e(),t.showFirstIndex?a("li",{staticClass:"pagination__list-item pagination__list-item--separator"},[t._v("|")]):t._e(),t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"pagination__list-item",on:{click:function(a){return t.getClickedPage(e)}}},[t._v(t._s(e)),t.CURRENT_PAGE===e?a("span",{staticClass:"left-arrow",domProps:{innerHTML:t._s("&#8592;")}}):t._e()])})),t.showLastIndex?a("li",{staticClass:"pagination__list-item pagination__list-item--separator"},[t._v("|")]):t._e(),t.showLastIndex?a("li",{staticClass:"pagination__list-item",on:{click:function(e){return t.getClickedPage(t.NUMBER_OF_PAGES)}}},[t._v(t._s(t.NUMBER_OF_PAGES))]):t._e()],2)])])},S=[],O={name:"TablePaginationComponent",computed:Object(h["a"])(Object(h["a"])({},Object(d["c"])(["NUMBER_OF_PAGES","QUERY_STRING","CURRENT_PAGE"])),{},{showFirstIndex:function(){return 1!==this.pages[0]&&this.NUMBER_OF_PAGES>0},showLastIndex:function(){return this.pages[this.pages.length-1]!==this.NUMBER_OF_PAGES&&this.NUMBER_OF_PAGES>0},pages:function(){for(var t=[],e=this.getStartPage;e<=this.getEndPage;e++)t.push(e);return t},getStartPage:function(){var t=this.CURRENT_PAGE-this.range;return t>0?t:1},getEndPage:function(){var t=this.CURRENT_PAGE+this.range;return t<this.NUMBER_OF_PAGES?t:this.NUMBER_OF_PAGES}}),data:function(){return{range:2}},methods:Object(h["a"])(Object(h["a"])({},Object(d["b"])(["getPackages","setErrorMessage"])),{},{getClickedPage:function(t){window.scrollTo(0,-1e3);var e={string:this.QUERY_STRING,page:t-1};this.getPackages(e)}})},E=O,j=(a("a103"),Object(o["a"])(E,C,S,!1,null,"7fef026a",null)),R=j.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table__row"},[t.isNotEmpty?a("PackageModal",{attrs:{packageObject:t.chosenPackage},on:{close:t.closeModal}}):t._e(),a("div",{staticClass:"table__row-top-block u-df-between"},[a("div",{staticClass:"table__row-inner table__row-inner--left"},[a("div",{staticClass:"table__row-name article-title",on:{click:t.showPackageModal}},[t._v(t._s(t.item.name)),a("span",{staticClass:"table__row-name--version description-text"},[t._v("v"+t._s(t.item.version))]),a("a",{staticClass:"table__row-owner link link--default",attrs:{href:t.item.owner.link,target:"_blank"}},[a("span",{staticClass:"description-text"},[t._v("by")]),t._v(t._s(t.item.owner.name))])]),a("div",{staticClass:"table__row-description description-text"},[t._v(t._s(t.item.description))])])]),a("div",{staticClass:"table__row-bottom-block"},[a("div",{staticClass:"table__row-keys-container u-df-row-wrap-start"},t._l(t.item.keywords,(function(e,n){return a("div",{key:n,staticClass:"table__row-key-words caption-text"},[t._v("#"+t._s(e))])})),0)])],1)},T=[],U=(a("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal__container"},[a("div",{staticClass:"modal"},[a("div",{staticClass:"hide__btn",on:{click:t.close}}),a("section",{staticClass:"modal__header-block u-df-between"},[a("div",{staticClass:"modal__package-box u-df-center"},[a("a",{staticClass:"modal__package-name article-title link link--default",attrs:{href:t.getLink,target:"_blank"}},[t._v(t._s(t.packageObject.name))]),a("div",{staticClass:"modal__package-version description-text"},[t._v("v"+t._s(t.packageObject.version))])]),a("div",{staticClass:"modal__package-owner-box u-df-center"},[a("a",{staticClass:"modal__package-owner link link--default",attrs:{href:t.packageObject.owner.link,target:"_blank"}},[a("span",{staticClass:"description-text"},[t._v("by")]),t._v(t._s(t.packageObject.owner.name))]),a("a",{staticClass:"modal__package-avatar-box u-df-center",attrs:{href:t.packageObject.owner.link,target:"_blank"}},[a("img",{staticClass:"modal__package-avatar",attrs:{src:t.packageObject.owner.avatar,onerror:t.getDefaultImg}})])])]),a("section",{staticClass:"modal__stats-block"},[a("ul",{staticClass:"modal__package-stats"},[a("li",{staticClass:"modal__package-stats-item description-text"},[t._v("NPM: "+t._s(t.npmStats.rank)+" rank, "+t._s(t.npmStats.total)+" total stats.")]),a("li",{staticClass:"modal__package-stats-item description-text"},[t._v("GitHub: "+t._s(t.ghStats.rank)+" rank, "+t._s(t.ghStats.total)+" total stats.")])])]),a("section",{staticClass:"modal__description-block"},[a("p",{staticClass:"modal__package-description description-text description-text--main"},[t._v(t._s(t.packageObject.description))])]),a("section",{staticClass:"modal__keywords-block"},[a("ul",{staticClass:"modal__package-keywords u-df-row-wrap-start"},t._l(t.packageObject.keywords,(function(e,n){return a("li",{key:n,staticClass:"modal__package-keyword caption-text"},[t._v("#"+t._s(e))])})),0)]),a("section",{staticClass:"modal__files-block"},[a("ul",{staticClass:"modal__package-files-list"},[t._v(t._s(t.packageObject.name)+" CDN Files"),t._l(t.filesList,(function(e,n){return a("li",{key:n,staticClass:"modal__package-file",class:t.getFileType(e)},[t._v("/npm/"+t._s(t.packageObject.name)+"@"+t._s(t.packageObject.version)+"/"+t._s(e.name))])}))],2),a("div",{staticClass:"modal__button-container"},[t.showButton?a("button",{staticClass:"modal__button btn btn--default",on:{click:function(e){t.showAll=!0}}},[t._v("show all")]):t._e()])])])])}),A=[],G=(a("99af"),a("b0c0"),a("fb6a"),{name:"PackageModal",created:function(){this.getFiles(),this.hideScrollBar(),this.getStats()},props:{packageObject:{type:Object,required:!0}},computed:{getLink:function(){return this.packageObject.homepage?this.packageObject.homepage:"https://github.com/".concat(this.packageObject.githubRepo.user,"/").concat(this.packageObject.githubRepo.project)},filesList:function(){return this.showAll?this.highFilesList[0]:this.lowFilesList[0]},getDefaultImg:function(){return"this.onerror=null;this.src='".concat(this.altImg,"';")},showButton:function(){return!!this.highFilesList.length&&Boolean(!this.showAll&&this.highFilesList[0].length!==this.lowFilesList[0].length)}},data:function(){return{highFilesList:[],lowFilesList:[],showAll:!1,ghStats:"",npmStats:"",altImg:a("1683")}},beforeDestroy:function(){this.showScrollBar()},methods:Object(h["a"])(Object(h["a"])({},Object(d["b"])(["getListPackageFiles","getUsageGHStats","getUsageNPMStats"])),{},{getFiles:function(){var t=this,e={name:this.packageObject.name,version:this.packageObject.version};this.getListPackageFiles(e).then((function(e){t.highFilesList.push(e.data.files),t.lowFilesList.push(t.highFilesList[0].slice(0,9))}))},getStats:function(){var t=this,e={user:this.packageObject.githubRepo.user,repo:this.packageObject.githubRepo.project},a={name:this.packageObject.name};this.getUsageGHStats(e).then((function(e){return t.ghStats=e.data})),this.getUsageNPMStats(a).then((function(e){return t.npmStats=e.data}))},getFileType:function(t){return"file"===t.type?"file":"folder"},hideScrollBar:function(){var t=document.getElementsByTagName("body")[0];t.setAttribute("style","overflow: hidden")},showScrollBar:function(){var t=document.getElementsByTagName("body")[0];t.removeAttribute("style")},close:function(){this.$emit("close")}})}),x=G,N=(a("deed"),Object(o["a"])(x,U,A,!1,null,"192be8c8",null)),F=N.exports,L={name:"TableRowComponent",components:{PackageModal:F},props:{item:{type:Object,required:!0}},computed:{getDefaultImg:function(){return"this.onerror=null;this.src='".concat(this.altImg,"';")},isNotEmpty:function(){return 0!==Object.keys(this.chosenPackage).length}},data:function(){return{altImg:a("1683"),chosenPackage:{}}},methods:{showPackageModal:function(){this.chosenPackage=this.item},closeModal:function(){this.chosenPackage={}}}},M=L,I=(a("ea5f"),Object(o["a"])(M,y,T,!1,null,"c7983812",null)),B=I.exports,q={name:"TableComponent",components:{TablePaginationComponent:R,TableRowComponent:B},created:function(){this.fetchPopularPackages()},computed:Object(h["a"])(Object(h["a"])({},Object(d["c"])(["PACKAGES","POPULAR_PACKAGES","QUERY_STRING"])),{},{tableTitle:function(){return this.QUERY_STRING?"Searching results:":"The most popular packages:"},tableItems:function(){return this.QUERY_STRING?this.PACKAGES:this.POPULAR_PACKAGES}}),methods:Object(h["a"])(Object(h["a"])({},Object(d["b"])(["getPackages","setErrorMessage"])),{},{fetchPopularPackages:function(){this.getPackages()}})},$=q,Q=(a("2f6f"),Object(o["a"])($,P,w,!1,null,"9fe8321a",null)),Y=Q.exports,H={name:"HomeView",components:{SearchComponent:v,TableComponent:Y}},D=H,K=(a("2931"),Object(o["a"])(D,g,_,!1,null,"ed8a61e6",null)),V=K.exports;n["a"].use(u["a"]);var J=[{path:"/",name:"HomeView",component:V}],z=new u["a"]({mode:"history",routes:J}),W=z,X=a("bc3a"),Z=a.n(X),tt=a("2106"),et=a.n(tt),at=(a("d3b7"),a("841c"),a("ac1f"),a("60b7")),nt=a.n(at),st=nt()("OFCNCOG2CU","f54e21fa3a2a0160595bb058179bfb1e",{protocol:"http:"}),it=st.initIndex("npm-search"),ot={state:{apiUrl:"https://data.jsdelivr.com",packages:[],queryString:"",popular:[],numberOfPages:1,currentPage:0},mutations:{SET_RESULT:function(t,e){return t.packages=e},SET_POPULAR_RESULT:function(t,e){return t.popular=e},SET_NUMBER_OF_PAGES:function(t,e){return t.numberOfPages=e},SET_QUERY_STRING:function(t,e){return t.queryString=e},SET_CURRENT_PAGE:function(t,e){return t.currentPage=e+1}},actions:{getPackages:function(t){var e=t.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{string:""};return new Promise((function(t,n){var s={page:a.page||0,hitsPerPage:a.hitsPerPage||10,attributesToHighlight:[],attributesToRetrieve:["deprecated","description","githubRepo","homepage","keywords","license","name","owner","version"]};it.search(a.string,s).then((function(n){n.hits.sort((function(t,e){return t.name===a.string?-1:e.name===a.string})),a.string?e("SET_RESULT",n.hits):e("SET_POPULAR_RESULT",n.hits),e("SET_QUERY_STRING",a.string),e("SET_NUMBER_OF_PAGES",n.nbPages),e("SET_CURRENT_PAGE",n.page),t(n)})).catch((function(t){console.log(t),n(t)}))}))},getUsageGHStats:function(t,e){var a=t.state;return new Promise((function(t,n){var s={url:"".concat(a.apiUrl,"/v1/package/gh/").concat(e.user,"/").concat(e.repo,"/stats")};Z()(s).then((function(e){return t(e)})).catch((function(t){console.log(t),n(t)}))}))},getUsageNPMStats:function(t,e){var a=t.state;return new Promise((function(t,n){var s={url:"".concat(a.apiUrl,"/v1/package/npm/").concat(e.name,"/stats")};Z()(s).then((function(e){return t(e)})).catch((function(t){console.log(t),n(t)}))}))},getListPackageFiles:function(t,e){var a=t.state;return new Promise((function(t,n){var s={url:"".concat(a.apiUrl,"/v1/package/npm/").concat(e.name,"@").concat(e.version)};Z()(s).then((function(e){return t(e)})).catch((function(t){console.log(t),n(t)}))}))}},getters:{PACKAGES:function(t){return t.packages},POPULAR_PACKAGES:function(t){return t.popular},NUMBER_OF_PAGES:function(t){return t.numberOfPages},QUERY_STRING:function(t){return t.queryString},CURRENT_PAGE:function(t){return t.currentPage}}};n["a"].use(d["a"]);var ct=new d["a"].Store({strict:!1,modules:{packages:ot}});a("2fb4");n["a"].config.productionTip=!1,n["a"].use(et.a,Z.a),new n["a"]({router:W,store:ct,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},7787:function(t,e,a){},9806:function(t,e,a){},"9c0c":function(t,e,a){},"9e7a":function(t,e,a){"use strict";a("fbc5")},a103:function(t,e,a){"use strict";a("c913")},c913:function(t,e,a){},deed:function(t,e,a){"use strict";a("7787")},ea5f:function(t,e,a){"use strict";a("3d13")},ed42:function(t,e,a){},fbc5:function(t,e,a){}});
//# sourceMappingURL=index.eb607394.js.map