exports.ids = [2];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=template&id=1c25d4c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"carousel-wrap"},[_c('b-carousel',{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{"id":"carousel-1","interval":4000,"controls":"","indicators":"","background":"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},[_c('b-carousel-slide',{attrs:{"caption":"First slide","text":"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[_c('h1',[_vm._v("Hello world!")])]),_vm._v(" "),_c('b-carousel-slide',{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),_vm._v(" "),_c('b-carousel-slide',{scopedSlots:_vm._u([{key:"img",fn:function(){return [_c('img',{staticClass:"d-block img-fluid w-100",attrs:{"width":"1024","height":"480","src":"https://picsum.photos/1024/480/?image=55","alt":"image slot"}})]},proxy:true}])}),_vm._v(" "),_c('b-carousel-slide',{attrs:{"caption":"Blank Image","img-blank":"","img-alt":"Blank image"}},[_c('p',[_vm._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n      ")])])],1),_vm._ssrNode(" <p class=\"mt-4\">"+_vm._ssrEscape("\n    Slide #: "+_vm._s(_vm.slide))+"<br>"+_vm._ssrEscape("\n    Sliding: "+_vm._s(_vm.sliding)+"\n  ")+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=template&id=1c25d4c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Carousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34025ecd"
  
)

/* harmony default export */ var Carousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=carousel.js.map