import Vue from 'vue'
import Router from 'vue-router'
// import advcom from '@C/main/advertising'
// import home from '@C/main/main'

Vue.use(Router)

const routes = [
    {
        path : '',
        name : 'home',
        component : resolve=>require(["@C/main/main"],resolve)
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
    }
]

export default new Router ({
    routes ,
    mode: 'history',
    base: process.env.BASE_URL,
})