(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        email: "",
        phone: "",
        password: ""
      },
      errors: [],
      successMessage: ""
    };
  },
  methods: {
    changeContact: function changeContact() {
      var _this = this;

      this.errors = [];
      axios.put("/changeContact", this.user, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (response) {
        _this.successMessage = "Úspěšně jste změnili kontaktní údaje";
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        } else if (error.response.status == 404) {
          _this.errors = {
            password: ['Heslo není správné!']
          };
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-wrap" }, [
      _vm.successMessage
        ? _c(
            "div",
            {
              staticClass:
                "bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3",
              attrs: { role: "alert" }
            },
            [
              _c("p", { staticClass: "font-bold" }, [
                _vm._v(_vm._s(_vm.successMessage))
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "w-full" }, [
        _c("div", { staticClass: "table" }, [
          _c(
            "form",
            {
              staticClass: "w-full max-w-lg p-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.changeContact($event)
                }
              }
            },
            [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "phone" } },
                    [_vm._v("Telefonní číslo")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.phone,
                        expression: "user.phone"
                      }
                    ],
                    staticClass: "ares-input",
                    class: { "border-red-500": _vm.errors.phone },
                    attrs: { id: "phone", type: "phone" },
                    domProps: { value: _vm.user.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "phone", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.phone
                    ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                        _vm._v(_vm._s(_vm.errors.phone[0]))
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "password" } },
                    [_vm._v("Vaše heslo")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password"
                      }
                    ],
                    staticClass: "ares-input",
                    class: { "border-red-500": _vm.errors.password },
                    attrs: {
                      autocomplete: "password",
                      id: "password",
                      type: "password"
                    },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.password
                    ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                        _vm._v(_vm._s(_vm.errors.password[0]))
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("h3", [_vm._v("Změna kontaktních údajů")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:flex md:items-center" }, [
      _c("div", { staticClass: "full" }, [
        _c("button", { staticClass: "success", attrs: { type: "submit" } }, [
          _vm._v("Změnit údaje\n                                ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/ChangeContact.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/settings/ChangeContact.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeContact.vue?vue&type=template&id=7ee63962& */ "./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962&");
/* harmony import */ var _ChangeContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeContact.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangeContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/ChangeContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangeContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChangeContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangeContact.vue?vue&type=template&id=7ee63962& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChangeContact.vue?vue&type=template&id=7ee63962&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeContact_vue_vue_type_template_id_7ee63962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);