import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/membership', name: 'Membership', component: () => import('../views/MembershipView.vue') },
  { path: '/events', name: 'Events', component: () => import('../views/EventsView.vue') },
  { path: '/blog', name: 'Blog', component: () => import('../views/BlogView.vue') },
  { path: '/digital-outreach', name: 'DigitalOutreach', component: () => import('../views/DigitalOutreachView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
  // Catch-all route for broken links
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard for analytics or logging
router.beforeEach((to, from, next) => {
  // Log navigation for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`Navigating from ${from.path} to ${to.path}`)
  }
  next()
})

// Handle navigation errors
router.onError((error) => {
  console.error('Router error:', error)
  // Redirect to home page on error
  router.push('/')
})

export default router 