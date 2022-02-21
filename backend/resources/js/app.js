
require('./bootstrap');

window.Vue = require('vue');


Vue.component('profile-component', require('./App.vue').default);

const app = new Vue({
    el: '#app',
});
