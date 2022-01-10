exports.ids = [5];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("af2364d2", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_ef5dd18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_ef5dd18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_ef5dd18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_ef5dd18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_ef5dd18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-ef5dd18a]{overflow:hidden}img[data-v-ef5dd18a]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.header-image[data-v-ef5dd18a],.header-image-wrap[data-v-ef5dd18a]{height:500px}.header-content[data-v-ef5dd18a]{transform:translateY(-50%);margin-top:-250px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=ef5dd18a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"hero"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-ef5dd18a><div class=\"row\" data-v-ef5dd18a><div class=\"col-12 col-md-6\" data-v-ef5dd18a></div> <div class=\"col-12 col-md-6 header-image-wrap\" data-v-ef5dd18a>"+(_vm._ssrList((_vm.testing),function(test){return ("<img"+(_vm._ssrAttr("src",test.image))+(_vm._ssrAttr("alt",_vm.headerImageAlt))+" class=\"header-image\" data-v-ef5dd18a>")}))+"</div></div></div> <div class=\"container\" data-v-ef5dd18a><div class=\"header-content\" data-v-ef5dd18a><div class=\"row\" data-v-ef5dd18a><div class=\"col-12 col-md-6\" data-v-ef5dd18a><h1 data-v-ef5dd18a>"+_vm._ssrEscape(_vm._s(_vm.headerTitle))+"</h1> <p data-v-ef5dd18a>"+_vm._ssrEscape(_vm._s(_vm.headerText))+"</p> <ul data-v-ef5dd18a>"+(_vm._ssrList((_vm.testing),function(test){return ("<li data-v-ef5dd18a>"+_vm._ssrEscape("\n                            "+_vm._s(test.name)+"\n                        ")+"</li>")}))+"</ul></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=ef5dd18a&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(38);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  data() {
    return {
      headerTitle: 'Vue & Nuxt & Iris is cool',
      headerText: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      headerImage: 'https://source.unsplash.com/800x600/?snow',
      headerImageAlt: 'Alt tekst',
      testing: null,
      test: null
    };
  },

  mounted() {
    external_axios_default.a.post('https://vue-nuxt.preview.themindoffice.nl/home', {
      limit: 5
    }).then(response => this.testing = response.data).then(function (response) {
      console.table(response.data);
    });
  }

}); // axios.get('https://vue-nuxt.preview.themindoffice.nl/')
//   .then(function (response) {
//     console.log(response.data);
//     this.teamMember = (response.data[0].name);
//     // console.log(response.status);
//     // console.log(response.statusText);
//     // console.log(response.headers);
//     // console.log(response.config);
// });
// CONCATENATED MODULE: ./components/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ef5dd18a",
  "758aa2e7"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero.js.map