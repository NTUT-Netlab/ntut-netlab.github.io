(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return v}));n(32),n(48),n(328),n(339),n(182),n(76),n(79),n(80),n(33),n(105),n(175);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},330:function(t,e,n){},331:function(t,e,n){},332:function(t,e,n){},333:function(t,e,n){},334:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},346:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},353:function(t,e,n){"use strict";n.r(e);n(103);var i=n(326),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(354).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(353).default},methods:{isActive:i.d}},s=(n(379),n(26)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(380),n(76);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.d)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,r,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(i.d)(s,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(i.d)(s,h.basePath+"#"+t.slug)})):d,m="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[r.frontmatter.sidebarDepth,p,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[m,l(t,h.children,h.basePath,s,v)]:(f||g)&&h.headers&&!i.c.test(h.path)?[m,l(t,Object(i.b)(h.headers),h.path,s,v)]:m}};n(381);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.d)(t,e.path)}))}var h={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.d)(this.$route,t.regularPath)}}},p=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},354:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(371),n(26)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},356:function(t,e,n){"use strict";n(330)},357:function(t,e,n){"use strict";n(331)},358:function(t,e,n){"use strict";n(332)},359:function(t,e,n){"use strict";n(333)},360:function(t,e,n){"use strict";n(334)},367:function(t,e,n){"use strict";n(341)},371:function(t,e,n){"use strict";n(342)},372:function(t,e,n){"use strict";n(343)},373:function(t,e,n){"use strict";n(344)},374:function(t,e,n){"use strict";n(345)},377:function(t,e,n){"use strict";n(346)},378:function(t,e,n){"use strict";n(347)},379:function(t,e,n){"use strict";n(348)},381:function(t,e,n){"use strict";n(349)},382:function(t,e,n){"use strict";n(350)},383:function(t,e,n){"use strict";n(351)},387:function(t,e,n){"use strict";n.r(e);var i={computed:{lang:function(){return this.$page.frontmatter.lang},data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){window.onload=function(){Particles.init({selector:".background",color:"#f7f7f7",connectParticles:!0,minDistance:"150",sizeVariations:"5",maxParticles:70,responsive:[{breakpoint:768,options:{connectParticles:!0,minDistance:"100",sizeVariations:"3"}},{breakpoint:425,options:{connectParticles:!0,minDistance:"80",sizeVariations:"1",maxParticles:"50"}},{breakpoint:320,options:{maxParticles:0}}]})}}},r=(n(356),n(26)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{"aria-labelledby":"main-title",id:"home"}},[n("canvas",{staticClass:"background"}),t._v(" "),n("div",{staticClass:"full-screen",staticStyle:{width:"80%","padding-left":"10%","padding-right":"10%"}},["zh-TW"==t.lang?n("div",{staticStyle:{"font-size":"20px"}},[t._v("\n      國立臺北科技大學 資訊工程系\n    ")]):n("div",{staticStyle:{"font-size":"20px"}},[t._v("\n      Department of Computer Science and Information Engineering, Taipei Tech\n    ")]),t._v(" "),"zh-TW"==t.lang?n("h1",{staticClass:"name"},[t._v("無線與寬頻網路實驗室")]):n("h1",{staticClass:"name"},[t._v("Wireless and Broadband Networks Lab")]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),"zh-TW"==t.lang?n("div",{staticClass:"research-topics-title"},[t._v("研究領域")]):n("div",{staticClass:"research-topics-title"},[t._v("Research Areas")]),t._v(" "),"zh-TW"==t.lang?n("div",{staticClass:"research-topics"},[t._m(0),t._v(" "),t._m(1)]):n("div",{staticClass:"research-topics"},[t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n        網路協定設計"),e("br"),this._v("多媒體網路系統"),e("br"),this._v("網際網路系統應用"),e("br"),this._v("網路模擬與效能評估\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n        無線感測網路與物聯網路由及應用"),e("br"),this._v("室內定位與追蹤"),e("br"),this._v("網際網路監察管理"),e("br"),this._v("SDN網路與應用網路\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n        Network Protocol Design"),e("br"),this._v("Multimedia Network System"),e("br"),this._v("Internet\n        System Application"),e("br"),this._v("Network simulation and performance evaluation\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n        WSN and IoT routing and application"),e("br"),this._v("Indoor positioning and\n        tracking"),e("br"),this._v("Internet lawful interceptions"),e("br"),this._v("SDN-based network\n        application systems"),e("br")])}],!1,null,null,null).exports,a={computed:{lang:function(){return this.$page.frontmatter.lang}}},o=(n(357),Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prof-section"},[n("div",{staticClass:"prof-container"},["zh-TW"==t.lang?n("h2",[t._v("指導教授")]):n("h2",[t._v("Instructors")]),t._v(" "),n("div",{staticClass:"prof"},["zh-TW"==t.lang?n("div",{staticClass:"prof-content"},[n("h3",[t._v("吳和庭 教授")]),t._v(" "),t._m(0)]):n("div",{staticClass:"prof-content"},[n("h3",[t._v("Professor Ho-Ting Wu")]),t._v(" "),t._m(1)]),t._v(" "),n("img",{staticClass:"prof-photo",attrs:{src:"/images/htwu.jpg"}})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n                    最高學歷： 美國加州大學洛杉磯分校 電機博士"),n("br"),t._v("\n                    研究室： 科研大樓1528室"),n("br"),t._v("\n                    聯絡資訊： 886-2-2771-2171 分機4221"),n("br"),t._v("\n                    Email： "),n("a",{attrs:{href:"mailto:htwu@ntut.edu.tw"}},[t._v("htwu@ntut.edu.tw")]),n("br"),t._v("\n                    專長領域： 網路協定設計、通訊網路模擬、多媒體網路系統、網路效能評估"),n("br"),t._v("\n                    近期研究： 工業物聯網架構、光學網路系統、綠能通訊與網路、網路QoS機制設計"),n("br"),t._v(" "),n("br"),t._v(" "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n                    Ph.D., University of California at Los Angeles"),n("br"),t._v("\n                    Office： Room 1528, Technology Building"),n("br"),t._v("\n                    Phone： 886-2-2771-2171 ext.4221 "),n("br"),t._v("\n                    Email： "),n("a",{attrs:{href:"mailto:htwu@ntut.edu.tw"}},[t._v("htwu@ntut.edu.tw")]),n("br"),t._v("\n                    Interests: Network Protocol Design, Multimedia Communication System, Network Simulation and Performance Evaluation, Green Communication, Machine Intelligence, Internet of Things (IOT)"),n("br"),t._v(" "),n("br"),t._v(" "),n("br")])}],!1,null,null,null).exports),l={computed:{lang:function(){return this.$page.frontmatter.lang}}},c=(n(358),Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topics-section"},[e("div",{staticClass:"topics-container"},["zh-TW"==this.lang?e("h2",[this._v("近期研究主題")]):e("h2",[this._v("Recent Research Topics")]),this._v(" "),"zh-TW"==this.lang?e("div",{staticClass:"topics"},[this._m(0)]):e("div",{staticClass:"topics"},[this._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rt"},[e("h3",[this._v("吳和庭 教授")]),this._v(" "),e("p",[this._v("工業物聯網架構、光學網路系統、綠能通訊與網路、網路QoS機制設計")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rt"},[e("h3",[this._v("Professor Ho-Ting Wu")]),this._v(" "),e("p",[this._v("Industrial IOT Architecture | Optical Network System | Green Communication & Network | Network QoS Provisioning Mechanism")])])}],!1,null,null,null).exports),u=(n(10),n(12),n(16),{data:function(){return{Carousel:null,Slide:null,member_second:[{name:"陳威廷",imgFileName:"001.jpg"},{name:"胡紹宇",imgFileName:"002.jpg"},{name:"劉德劭",imgFileName:"003.jpg"},{name:"陳柏勳",imgFileName:"004.jpg"}],member_first:[{name:"秦敬軒",imgFileName:"001.jpg"},{name:"張博勛",imgFileName:"002.jpg"},{name:"吳煒君",imgFileName:"003.jpg"},{name:"林晉揚",imgFileName:"004.png"}]}},computed:{lang:function(){return this.$page.frontmatter.lang}},mounted:function(){var t=this;n.e(29).then(n.t.bind(null,386,7)).then((function(e){t.Carousel=e.Carousel,t.Slide=e.Slide}))}}),h=(n(359),Object(r.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members-section"},[n("div",{staticClass:"members-container"},["zh-TW"==t.lang?n("h2",[t._v("成員")]):n("h2",[t._v("Members")]),t._v(" "),n("div",{staticClass:"members"},[t.Carousel?n(t.Carousel,{tag:"component",attrs:{"per-page":1,"center-mode":!0,paginationActiveColor:"#e0e0e0",paginationColor:"#8a8a8a",navigationEnabled:!0,easing:"cubic-bezier(0,.99,0,.99)",speed:800}},[t.Slide?n(t.Slide,{tag:"component"},[n("div",{staticClass:"mb-page mb-p-1"},t._l(t.member_second,(function(e){return n("div",{staticClass:"member"},[n("div",{staticClass:"mb-img"},[n("img",{attrs:{src:"/images/member/second/"+e.imgFileName}})]),t._v(" "),n("div",{staticClass:"mb-name"},[t._v(t._s(e.name))])])})),0)]):t._e(),t._v(" "),t.Slide?n(t.Slide,{tag:"component"},[n("div",{staticClass:"mb-page mb-p-2"},t._l(t.member_first,(function(e){return n("div",{staticClass:"member"},[n("div",{staticClass:"mb-img"},[n("img",{attrs:{src:"/images/member/first/"+e.imgFileName}})]),t._v(" "),n("div",{staticClass:"mb-name"},[t._v(t._s(e.name))])])})),0)]):t._e()],1):t._e()],1)])])}),[],!1,null,null,null).exports),p={data:function(){return{projList:["無線工業物聯網之實務設計與系統實現\t(08/2018 ~ 07/2019)","優化頻道使用效率之排程機制韌體程式模組\t(08/2018 ~ 10/2018)","無線感測網路節能路由設計與效能評估程式模組\t(07/2018 ~ 10/2018)","支援雙向與服務品質傳輸程式模組\t(03/2018 ~ 06/2018)","無線設備耗電評估測試報告\t(03/2018 ~ 06/2018)","雲端即時感測監控系統的物聯網架構之研發\t(08/2017 ~ 07/2018)","無線分時跳頻感測網路快速網路形成機制韌體程式模組\t(08/2017 ~ 11/2017)","無線分時跳頻感測網路混合式資料回報機制韌體程式模組\t(08/2017 ~ 11/2017)","兼具效能與安全之即時多媒體與巨量資料雲端服務系統－子計畫五:雲端軟體定義網路之智慧傳輸與事件分析系統之研發\t(08/2017 ~ 07/2018)","無線分時跳頻感測網路定時資料回報機制韌體程式模組\t(03/2017 ~ 06/2017)","無線分時跳頻感測網路基於鏈結品質之對時機制韌體程式模組\t(03/2017 ~ 06/2017)","感測網路形成效能模擬程式模組\t(08/2016 ~ 11/2016)","無線感測節點同步機制效能模擬\t(08/2016 ~ 11/2016)","無線分時跳頻感測網路效能模擬程式模組\t(04/2016 ~ 06/2016)","聯網電視之網路關鍵技術 (3/3)\t(04/2016 ~ 06/2016)","結合智慧穿戴式裝置之物聯網通訊協定堆疊核心技術\t(08/2015 ~ 07/2016)","基於軟體定義網路與網路功能虛擬化之通信網路監察與事件預測系統之研製\t(08/2015 ~ 07/2016)","無線低功耗節點對時演算法\t(01/2015 ~ 12/2015)","高可靠度智慧路由模擬器研究\t(01/2015~ 12/2015)","異質網路圖形介面模擬器\t(09/2014 ~ 02/2015)","高效能智慧聯網電視網路關鍵技術的研發\t(08/2014 ~ 07/2015)","多源推式應用層群播及拉式同儕網路即時串流分享傳輸系統之研製與效能\t(08/2014 ~ 07/2015)","在工業環境下無線感測網路之多重路徑路由的可靠度分析\t(01/2014 ~ 12/2014)","智慧型行動裝置之麥克風輻射偵測實用性調查分析\t(01/2014 ~ 12/2015)","麥克風輻射偵測APP測試與驗證\t(09/2013 ~ 02/2014)","聯網電視之網路關鍵技術 (3/3)\t(08/2013 ~ 07/2014)","具雲端可擴充性之網際網路通信監察 II：自應用服務至入侵偵測\t(08/2013 ~ 07/2014)"],projListEn:["The practical design and system implementation of wireless industrial IOT\t(08/2018 ~ 07/2019)","System module development of bandwidth efficient scheduling mechanism\t(08/2018 ~ 10/2018)","Energy conservative routing and performance evaluation for WSN\t(07/2018 ~ 10/2018)","WSN mote energy consumption: Measurement and modelling\t(03/2018 ~ 06/2018)","System module development with bidirectional and QoS provisioning capabilities\t(03/2018 ~ 06/2018)","Development of IOT architecture for cloud-based real-time sensing and monitoring systems\t(08/2017 ~ 07/2018)","Intelligent transport and event-analysis system for Software Defined Network-based Cloud Computing\t(08/2017 ~ 07/2018)","Hybrid scheduling mechanism of TSCH wireless sensor networks\t(08/2017 ~ 11/2017)","Design of TSCH-based WSN network formation mechanism\t(08/2017 ~ 11/2017)","Scheduling mechanism for periodical data transmission of TSCH wireless sensor networks\t(03/2017 ~ 06/2017)","Link quality based synchronization for TSCH WSN networks (03/2017 ~ 06/2017)","Simulation module development of network formulation process in wireless sensor networks\t(08/2016 ~ 11/2016)","Performance evaluation of synchronization for WSN networks (08/2016 ~ 11/2016)","Simulation module development of network performance in wireless sensor networks\t(04/2016 ~ 06/2016)","Key technologies of HIBTV network architecture (3/3) (3/3)\t(04/2016 ~ 06/2016)","The core protocol stack technology of IOT with wearable devices\t(08/2015 ~ 07/2016)","Network interception and event forecasting based upon software defined network and network function virtualization\t(08/2015 ~ 07/2016)","The synchronized scheduling mechanism of wireless low-powered devices\t(01/2015 ~ 12/2015)","Design of highly reliable and intelligent routing and simulation (01/2015~ 12/2015)","Design of Graphical interface simulator for Heterogeneous networks\t(09/2014 ~ 02/2015)","Design and realization of multisource push-based application layer multicasting and pull-based P2P live streaming media systems\t(08/2014 ~ 07/2015)","The research and development of high efficient smart TV network technologies\t(08/2014 ~ 07/2015)","The reliability analysis of multipath routing for industrial wireless sensor networking environments\t(01/2014 ~ 12/2014)","Design and analysis of rediation measurement under smart phone\t(01/2014 ~ 12/2015)","Design of rediation detection APP thru microphone interface of a smart phone\t(09/2013 ~ 02/2014)","Expandable Cloud Service of Internet Lawful Interception II: From Applocations to Intrusion Detection\t(08/2013 ~ 07/2014)"]}},computed:{lang:function(){return this.$page.frontmatter.lang}}},d=(n(360),Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"proj-section"},[n("div",{staticClass:"proj-container"},["zh-TW"==t.lang?n("h2",[t._v("近期研究與產學計畫")]):n("h2",[t._v("Recent Research & Industrial Projects")]),t._v(" "),n("div",{staticClass:"proj"},[n("div",{staticClass:"rt"},["zh-TW"==t.lang?n("ul",t._l(t.projList,(function(e){return n("li",[t._v(t._s(e))])})),0):n("ul",t._l(t.projListEn,(function(e){return n("li",[t._v(t._s(e))])})),0)])])])])}),[],!1,null,null,null).exports),f=(n(361),n(385)),m=(n(367),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=n(46),g=(n(104),n(76),n(32),n(48),n(103),n(188),n(328),n(337),n(338),n(368),n(326)),b={props:{item:{required:!0}},computed:{link:function(){return Object(g.a)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:g.e,isMailto:g.f,isTel:g.g,focusoutAction:function(){this.$emit("focusout")}}},_=Object(r.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,k=n(354),C=n(190),w=n.n(C),$={components:{NavLink:_,DropdownTransition:k.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return w()(e)===t}},watch:{$route:function(){this.open=!1}}},S=(n(372),{components:{NavLink:_,DropdownLink:Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var a,o=e[s],l=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:l,link:a}}))};return[].concat(Object(v.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(g.h)(t),{items:(t.items||[]).map(g.h)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),x=(n(373),Object(r.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={name:"Navbar",components:{SidebarButton:m,NavLinks:x,SearchBox:f.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null,showNavbar:!0,lastScrollPosition:0}},mounted:function(){var t=this,e=parseInt(y(this.$el,"paddingLeft"))+parseInt(y(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1),window.addEventListener("scroll",this.onScroll)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;t<0||(this.showNavbar=0==t)}}},T=(n(374),Object(r.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar",class:{"navbar--scrolldown":!t.showNavbar,"navbar--noindex":!t.$page.frontmatter.home}},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),O=n(375),N=n.n(O),j=n(376),I=n.n(j),E={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return D(P.PREV,this)},next:function(){return D(P.NEXT,this)}}};var P={NEXT:{resolveLink:function(t,e){return W(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return W(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function D(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,a=e.sidebarItems,o=t.resolveLink,l=t.getThemeLinkConfig,c=t.getPageLinkConfig,u=l(n),h=c(i),p=I()(h)?u:h;return!1===p?void 0:N()(p)?Object(g.i)(s.pages,p,r.path):o(i,a)}function W(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var A=E,z=(n(377),{components:{PageNav:Object(r.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),H=(n(378),Object(r.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page"},[this._t("top"),this._v(" "),e("Content",{staticClass:"theme-default-content"}),this._v(" "),e("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),M={name:"Sidebar",components:{SidebarLinks:n(353).default,NavLinks:x},props:["items"]},G=(n(382),{components:{Home:s,Professor:o,ResearchTopics:c,Members:h,Proj:d,Page:H,Sidebar:Object(r.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:T},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(g.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),R=(n(383),Object(r.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):t._e(),t._v(" "),t.$page.frontmatter.home?n("Professor"):t._e(),t._v(" "),t.$page.frontmatter.home?n("Members"):t._e(),t._v(" "),t.$page.frontmatter.home?n("Proj"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",[this._v("\n      國立臺北科技大學 Taipei Tech ,宏裕科技研究大樓 1423 室 Tel : (886-2) 2771-2171 #4267 實驗室負責人: 劉德劭 terry85324@gmail.com\n    ")])])}],!1,null,null,null));e.default=R.exports}}]);