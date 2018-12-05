import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import $ from 'jquery'

import './lib'//工具引用包

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
