exports.ids = [1];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27249549", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_id_0fa28560_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_id_0fa28560_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_id_0fa28560_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_id_0fa28560_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_id_0fa28560_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".row[data-v-0fa28560]{justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=template&id=0fa28560&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pricing-tables"},[_vm._ssrNode("<div class=\"container\" data-v-0fa28560><div class=\"row\" data-v-0fa28560>"+(_vm._ssrList((_vm.testing),function(test,index){return ("<div class=\"col-12 col-md-4\" data-v-0fa28560><div class=\"card\" data-v-0fa28560><img"+(_vm._ssrAttr("src",test.image))+(_vm._ssrAttr("alt",test.name))+" class=\"card-img-top\" data-v-0fa28560> <div class=\"card-body\" data-v-0fa28560><h5 class=\"card-title\" data-v-0fa28560>"+_vm._ssrEscape(_vm._s(test.name))+"</h5> <p class=\"card-text\" data-v-0fa28560>"+_vm._ssrEscape(_vm._s(test.designation))+"</p></div> <div class=\"card-body\" data-v-0fa28560><a href=\"#\" class=\"card-link\" data-v-0fa28560>Card link</a> <a href=\"#\" class=\"card-link\" data-v-0fa28560>Another link</a></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards.vue?vue&type=template&id=0fa28560&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(38);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Cardsvue_type_script_lang_js_ = ({
  data() {
    return {
      testing: null,
      items: [{
        title: 'Dimar is cool',
        description: 'Lorem ipsum dolor amet',
        image: 'https://source.unsplash.com/800x600/?coding',
        imageAlt: 'Alt tekst',
        features: [{
          title: 'Feature 1'
        }, {
          title: 'Feature 2'
        }, {
          title: 'Feature 3'
        }]
      }, {
        title: 'Martijn is cool',
        description: 'Lorem ipsum dolor amet',
        image: 'https://source.unsplash.com/800x600/?coding',
        imageAlt: 'Alt tekst'
      }]
    };
  },

  mounted() {
    external_axios_default.a.post('https://vue-nuxt.preview.themindoffice.nl/home', {
      limit: 5
    }).then(response => this.testing = response.data);
  }

});
// CONCATENATED MODULE: ./components/Cards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardsvue_type_script_lang_js_ = (Cardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Cards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0fa28560",
  "b055a474"
  
)

/* harmony default export */ var Cards = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards.js.map