import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './lib'//工具引用包


console.log(store)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
