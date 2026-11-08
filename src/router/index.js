import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Animal Assisted Therapy Halifax NS | Yana Gold AAT' }
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
		meta: { title: 'Our Team | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/aat',
		name: 'Aat',
		component: () => import('../views/Aat.vue'),
		meta: { title: 'What is AAT | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/services',
		name: 'Services',
		component: () => import('../views/Services.vue'),
		meta: { title: 'Services | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue'),
		meta: { title: 'Contact Us | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/gallery',
		name: 'Gallery',
		component: () => import('../views/Gallery.vue'),
		meta: { title: 'Gallery | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import('../views/Blog.vue'),
		meta: { title: 'Blog | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/humanAnimalInteractions',
		name: 'HumanAnimalInteractions',
		component: () => import('../views/HumanAnimalInteractions.vue'),
		meta: { title: 'Human-Animal Interactions | Animal Assisted Therapy Halifax NS' }
	},
	{
		path: '/understandingAnxietyDisorders',
		name: 'UnderstandingAnxietyDisorders',
		component: () => import('../views/UnderstandingAnxietyDisorders.vue'),
		meta: { title: 'Understanding Anxiety Disorders | Animal Assisted Therapy Halifax NS' }
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

router.afterEach((to) => {
	document.title = to.meta.title || 'Animal Assisted Therapy Halifax NS | Yana Gold AAT';
});

export default router;
