(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},o=l(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"carousel-wrap"},[l("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[l("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),l("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[l("h1",[t._v("Hello world!")])]),t._v(" "),l("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),l("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[l("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),t._v(" "),l("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[l("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n      ")])])],1),t._v(" "),l("p",{staticClass:"mt-4"},[t._v("\n    Slide #: "+t._s(t.slide)),l("br"),t._v("\n    Sliding: "+t._s(t.sliding)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);