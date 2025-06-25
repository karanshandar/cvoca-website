import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/membership', name: 'Membership', component: () => import('../views/MembershipView.vue') },
  { path: '/events', name: 'Events', component: () => import('../views/EventsView.vue') },
  { path: '/blog', name: 'Blog', component: () => import('../views/BlogView.vue') },
  { path: '/digital-outreach', name: 'DigitalOutreach', component: () => import('../views/DigitalOutreachView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 