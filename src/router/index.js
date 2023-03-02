import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/aat',
		name: 'Aat',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Aat.vue')
	},
	{
		path: '/services',
		name: 'Services',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
	},
	{
		path: '/gallery',
		name: 'Gallery',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
	},
	{
		path: '/blog',
		name: 'Blog',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
	},
	{
		path: '/humanAnimalInteractions',
		name: 'HumanAnimalInteractions',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/HumanAnimalInteractions.vue')
	},
	{
		path: '/understandingAnxietyDisorders',
		name: 'UnderstandingAnxietyDisorders',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/UnderstandingAnxietyDisorders.vue')
	}
];

// const router = new VueRouter({
// 	routes,
// 	base: process.env.BASE_URL,
// 	mode: 'history'
// });
const router = createRouter({
	history: createWebHistory(),
	routes: [routes]
});
export default router;
