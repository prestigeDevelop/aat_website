import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSign, faEnvelope, faPaw, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import VueGtag from 'vue-gtag';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

library.add(faHome, faSign, faEnvelope, faFontAwesome, faPaw, faBlog);

const app = createApp(App);

app.use(router);
app.use(
	VueGtag,
	{
		config: { id: 'G-3G16M78ZD5' }
	},
	router
);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
