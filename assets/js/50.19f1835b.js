(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{185:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("D2Admin 默认支持多页面，并且支持多页面控制器上的 tab 标签页右键菜单控制，可以实现“关闭全部”，“关闭其它”，“关闭左侧”，“关闭右侧”的功能。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),e("p",[t._v("将得到的路由数据存储到 vuex 中备用。这份数据在操作多页面数据时会使用到。")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("新建页面的触发在 "),e("code",[t._v("d2-admin/src/router/index.js")]),t._v(" 中的 "),e("code",[t._v("router.afterEach")]),t._v(" 钩子中。涉及的方法参见 "),e("router-link",{attrs:{to:"/zh/sys-vuex/page.html"}},[t._v("API")])],1),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("标签页组件在 "),e("code",[t._v("d2-admin/src/layout/header-aside/components/tabs/index.vue")]),t._v("，该组件实现多页面的各种关闭控制。涉及的方法参见 "),e("router-link",{attrs:{to:"/zh/sys-vuex/page.html"}},[t._v("API")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"多页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 多页面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"注册页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 注册页面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("D2Admin 的多页面设置源头在 "),s("code",[this._v("d2-admin/src/router/routes.js")]),this._v("，该文件导出了一个 "),s("code",[this._v("frameInRoutes")]),this._v(" 变量，"),s("code",[this._v("d2-admin/src/main.js")]),this._v(" 中使用下面的方式导入：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" frameInRoutes "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'@/router/routes'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在根实例中加入了一个名为 "),s("code",[this._v("getAllPageFromRoutes")]),this._v(" 的方法，该方法在 "),s("code",[this._v("created")]),this._v(" 生命周期调用，递归处理 "),s("code",[this._v("frameInRoutes")]),this._v(" 中的数据将支持多标签页显示所有页面数据扁平为一位数组，然后使用：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("$store"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("commit")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'d2admin/page/poolSet'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pool"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"标签页控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签页控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 标签页控制")])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);