import 'default-passive-events';
import 'font-awesome/css/font-awesome.css'
import Vue from "vue";
import '@/plugins/vuetify'
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/registerServiceWorker";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import axios from 'axios';
import api from '@/constants/api';


Vue.config.productionTip = false;
axios.defaults.timeout = 1000 * 300;
axios.defaults.baseURL = api.MAIN_URL + '/api/';

Vue.prototype.axios = axios;
Vue.prototype.api = api;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
