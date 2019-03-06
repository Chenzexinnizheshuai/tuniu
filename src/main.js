import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import $ from 'jquery'
if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true;
}
router.beforeEach((to,from,next)=>{
 
  if(to.matched.some(item=>{
    return item.meta.require
  })){
    next()
  }else{
    next()
  }
})

import './lib'//工具引用包

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
