(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("af2364d2",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(290)},297:function(t,e,n){var d=n(61)(!1);d.push([t.i,".hero[data-v-ef5dd18a]{overflow:hidden}img[data-v-ef5dd18a]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.header-image[data-v-ef5dd18a],.header-image-wrap[data-v-ef5dd18a]{height:500px}.header-content[data-v-ef5dd18a]{transform:translateY(-50%);margin-top:-250px}",""]),t.exports=d},308:function(t,e,n){"use strict";n.r(e);var d=n(292),o=n.n(d),r={data:function(){return{headerTitle:"Vue & Nuxt & Iris is cool",headerText:"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",headerImage:"https://source.unsplash.com/800x600/?snow",headerImageAlt:"Alt tekst",testing:null,test:null}},mounted:function(){var t=this;o.a.post("https://vue-nuxt.preview.themindoffice.nl/home",{limit:5}).then((function(e){return t.testing=e.data})).then((function(t){console.table(t.data)}))}},l=(n(296),n(43)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"hero"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"}),t._v(" "),n("div",{staticClass:"col-12 col-md-6 header-image-wrap"},t._l(t.testing,(function(e){return n("img",{key:e.id,staticClass:"header-image",attrs:{src:e.image,alt:t.headerImageAlt}})})),0)])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("h1",[t._v(t._s(t.headerTitle))]),t._v(" "),n("p",[t._v(t._s(t.headerText))]),t._v(" "),n("ul",t._l(t.testing,(function(e){return n("li",{key:e.id},[t._v("\n                            "+t._s(e.name)+"\n                        ")])})),0)])])])])])}),[],!1,null,"ef5dd18a",null);e.default=component.exports}}]);