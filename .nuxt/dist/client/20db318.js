(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,7,8],{286:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("e3cb46d8",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(286)},288:function(t,e,n){var l=n(61)(!1);l.push([t.i,"img[data-v-40155703]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.intro[data-v-40155703]{padding:80px 0}",""]),t.exports=l},289:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("af2364d2",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("27249549",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{introTitle:"Hallo met Frank",introText:"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",headerImage:"https://source.unsplash.com/800x600/?snow",headerImageAlt:"Alt tekst"}}},r=(n(287),n(43)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-8 offset-md-2"},[n("h2",[t._v(t._s(t.introTitle))]),t._v("\n                "+t._s(t.introText)+"\n            ")])])])])}),[],!1,null,"40155703",null);e.default=component.exports},295:function(t,e,n){"use strict";n(289)},296:function(t,e,n){var l=n(61)(!1);l.push([t.i,".hero[data-v-ef5dd18a]{overflow:hidden}img[data-v-ef5dd18a]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.header-image[data-v-ef5dd18a],.header-image-wrap[data-v-ef5dd18a]{height:500px}.header-content[data-v-ef5dd18a]{transform:translateY(-50%);margin-top:-250px}",""]),t.exports=l},297:function(t,e,n){"use strict";n(290)},298:function(t,e,n){var l=n(61)(!1);l.push([t.i,".row[data-v-0fa28560]{justify-content:center}",""]),t.exports=l},307:function(t,e,n){"use strict";n.r(e);var l=n(291),r=n.n(l),o={data:function(){return{headerTitle:"Vue & Nuxt & Iris is cool",headerText:"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",headerImage:"https://source.unsplash.com/800x600/?snow",headerImageAlt:"Alt tekst",testing:null,test:null}},mounted:function(){var t=this;r.a.post("https://vue-nuxt.preview.themindoffice.nl/home",{limit:5}).then((function(e){return t.testing=e.data})).then((function(t){console.table(t.data)}))}},c=(n(295),n(43)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"hero"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"}),t._v(" "),n("div",{staticClass:"col-12 col-md-6 header-image-wrap"},t._l(t.testing,(function(e){return n("img",{key:e.id,staticClass:"header-image",attrs:{src:e.image,alt:t.headerImageAlt}})})),0)])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("h1",[t._v(t._s(t.headerTitle))]),t._v(" "),n("p",[t._v(t._s(t.headerText))]),t._v(" "),n("ul",t._l(t.testing,(function(e){return n("li",{key:e.id},[t._v("\n                            "+t._s(e.name)+"\n                        ")])})),0)])])])])])}),[],!1,null,"ef5dd18a",null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var l=n(291),r=n.n(l),o={data:function(){return{testing:null,items:[{title:"Dimar is cool",description:"Lorem ipsum dolor amet",image:"https://source.unsplash.com/800x600/?coding",imageAlt:"Alt tekst",features:[{title:"Feature 1"},{title:"Feature 2"},{title:"Feature 3"}]},{title:"Martijn is cool",description:"Lorem ipsum dolor amet",image:"https://source.unsplash.com/800x600/?coding",imageAlt:"Alt tekst"}]}},mounted:function(){var t=this;r.a.post("https://vue-nuxt.preview.themindoffice.nl/home",{limit:5}).then((function(e){return t.testing=e.data}))}},c=(n(297),n(43)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pricing-tables"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.testing,(function(e,l){return n("div",{key:l,staticClass:"col-12 col-md-4"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:e.image,alt:e.name}}),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(e.designation))])]),t._v(" "),t._m(0,!0)])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body"},[n("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Card link")]),t._v(" "),n("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Another link")])])}],!1,null,"0fa28560",null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},r=n(43),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"carousel-wrap"},[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("h1",[t._v("Hello world!")])]),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),n("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),t._v(" "),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n      ")])])],1),t._v(" "),n("p",{staticClass:"mt-4"},[t._v("\n    Slide #: "+t._s(t.slide)),n("br"),t._v("\n    Sliding: "+t._s(t.sliding)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var l={name:"IndexPage",head:{title:"Home",meta:[{hid:"description",name:"description",content:"my website description"}]}},r=n(43),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),t._v(" "),n("Intro"),t._v(" "),n("Cards"),t._v(" "),n("Carousel")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(307).default,Intro:n(294).default,Cards:n(308).default,Carousel:n(309).default})}}]);