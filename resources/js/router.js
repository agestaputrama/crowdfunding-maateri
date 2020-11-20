import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Dfine Route
const router = new Router({
    mode : 'history',
    router: [
        {
            path :'/',
            name : 'home',
            alias : '/home',
            component : () => import(/* webpackChunkName : "categories" */ './views/Home.vue')
        },
        {
            path :'/donations',
            name : 'donations',
            alias : '/home',
            component : () => import(/* webpackChunkName : "categories" */ './views/Donations.vue')
        },
        {
            path : '*',
            redirect : '/'
        }
    ]
});

export default router