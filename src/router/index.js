import Vue from 'vue'
import Router from 'vue-router'
import advcom from '@C/main/advertising'
import home from '@C/main/main'

Vue.use(Router)

const routes = [
    {
        path : '',
        name : home,
        component : home
    },
    {
        path : '/adv',
        name : 'adv',
        component : advcom
    },
    {
        path : '/home',
        name : 'home',
        component : home
    }
]

export default new Router ({
    routes ,
    mode: 'history',
    base: process.env.BASE_URL,
})