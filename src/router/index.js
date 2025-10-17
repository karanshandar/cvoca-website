import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Home - CVOCA',
      description: 'Welcome to CVOCA - Chartered & Cost Accountants Association. Join our community of professionals.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us - CVOCA',
      description: 'Learn about CVOCA, our mission, vision, and the team driving excellence in accounting and finance.'
    }
  },
  {
    path: '/membership',
    name: 'Membership',
    component: () => import('../views/MembershipView.vue'),
    meta: {
      title: 'Membership - CVOCA',
      description: 'Join CVOCA membership. Explore benefits, membership types, and apply to become part of our professional community.'
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Events - CVOCA',
      description: 'Discover upcoming CVOCA events, workshops, seminars, and networking opportunities for accounting professionals.'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Blog - CVOCA',
      description: 'Read the latest articles, insights, and updates from the CVOCA community on accounting, finance, and professional development.'
    }
  },
  {
    path: '/digital-outreach',
    name: 'DigitalOutreach',
    component: () => import('../views/DigitalOutreachView.vue'),
    meta: {
      title: 'Digital Outreach - CVOCA',
      description: 'Explore CVOCA\'s digital outreach initiatives, community programs, and financial literacy efforts.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us - CVOCA',
      description: 'Get in touch with CVOCA. Find our contact information, office location, and reach out to our team.'
    }
  },
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

// Navigation guard for SEO meta tags and analytics
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'CVOCA - Chartered & Cost Accountants Association'
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute('content', to.meta.description)
  }

  // Update OG meta tags
  const ogTitleMeta = document.querySelector('meta[property="og:title"]')
  if (ogTitleMeta && to.meta.title) {
    ogTitleMeta.setAttribute('content', to.meta.title)
  }

  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
  if (ogDescriptionMeta && to.meta.description) {
    ogDescriptionMeta.setAttribute('content', to.meta.description)
  }

  // Update Twitter meta tags
  const twitterTitleMeta = document.querySelector('meta[property="twitter:title"]')
  if (twitterTitleMeta && to.meta.title) {
    twitterTitleMeta.setAttribute('content', to.meta.title)
  }

  const twitterDescriptionMeta = document.querySelector('meta[property="twitter:description"]')
  if (twitterDescriptionMeta && to.meta.description) {
    twitterDescriptionMeta.setAttribute('content', to.meta.description)
  }

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