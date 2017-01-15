// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import 'es6-promise/auto'
import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import Quasar from 'quasar'
Vue.use(Quasar)
Quasar.start(() => {
  new Vue({
    el: '#q-app',
    store,
    router,
    render: h => h(require('./components/App'))
  })
})
