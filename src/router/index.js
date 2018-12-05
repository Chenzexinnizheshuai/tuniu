import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path : '',
        name : 'home',
        component : resolve=>require(["@C/main/main"],resolve)//这是一个promise 必须在require的回调函数中resolve（）才会继续
    },
    {
        path : '/adv',
        name : 'adv',
        component :  resolve=>require(["@C/main/advertising"],resolve)
    },
    {
        path : '/home',
        name : 'home',
        component :  resolve=>require(["@C/main/main"],resolve)
    },
    {
        path : '/detail',
        name : 'detail',
        component : resolve=>require(["@C/detail/detail"],resolve)
    }
]

export default new Router ({
    routes ,
    mode: 'history',
})