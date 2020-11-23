import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import './bootstrap.js'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count : 0
    },
    mutations: {
        increment(state){
            state.count++
        }
    }

})

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    components : {
        App
    },
    store,
    methods:{
        handleClick(){
            this.$store.commit("increment")
        }
    }
});
