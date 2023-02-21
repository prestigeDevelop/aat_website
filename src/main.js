import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue/dist/bootstrap-vue.esm';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnalytics from 'vue-analytics';
import { faUserSecret, faHome, faSign, faEnvelope, faPaw, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faUserSecret, faHome, faSign, faEnvelope, faFontAwesome, faPaw, faBlog);

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
	id: 'UA-229659621-1',
	router
});
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
