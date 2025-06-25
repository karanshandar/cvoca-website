<template>
  <v-container fluid class="pa-4">
    <!-- Hero Section -->
    <v-sheet 
      class="hero d-flex flex-column align-center justify-center mb-8" 
      height="200" 
      color="background"
      elevation="0"
    >
      <h1 class="text-h2 font-weight-bold mb-2">Blog</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Latest insights and articles from the CVOCA community</div>
    </v-sheet>

    <!-- Blog Posts -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Latest Articles</h2>
          <div v-if="blogPosts.length">
            <v-card 
              v-for="post in blogPosts" 
              :key="post.id" 
              class="mb-6" 
              elevation="2" 
              rounded="lg"
            >
              <v-card-text class="pa-6">
                <v-row>
                  <v-col cols="12" md="8">
                    <h3 class="text-h5 font-weight-bold mb-2">{{ post.title }}</h3>
                    <p class="text-body-1 mb-3 text-on-surface-variant">{{ post.excerpt }}</p>
                    <div class="d-flex flex-wrap mb-3">
                      <div 
                        v-for="meta in getPostMeta(post)" 
                        :key="meta.label"
                        class="d-flex align-center mr-4 mb-1"
                      >
                        <v-icon :icon="meta.icon" size="16" class="mr-1" color="primary" />
                        <span class="text-caption text-on-surface-variant">{{ meta.value }}</span>
                      </div>
                    </div>
                    <v-btn color="primary" variant="outlined" rounded>
                      Read More
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center">
                    <v-img 
                      :src="post.image" 
                      height="200" 
                      cover 
                      rounded="lg"
                      class="mb-3"
                    />
                    <v-chip 
                      :color="BLOG_CATEGORY_COLORS[post.category] || 'primary'" 
                      variant="outlined"
                    >
                      {{ post.category }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <div v-else class="text-center text-medium-emphasis py-8">
            No blog posts available at this time.
          </div>
        </v-card>

        <!-- Newsletter Signup -->
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Subscribe to Our Newsletter</h2>
          <p class="text-body-1 mb-4 text-on-surface-variant">
            Stay updated with the latest articles, events, and insights from the CVOCA community.
          </p>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="email"
                label="Enter your email address"
                type="email"
                variant="outlined"
                placeholder="your.email@example.com"
                color="primary"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex align-center">
              <v-btn 
                color="primary" 
                size="large"
                :loading="subscribing"
                @click="subscribe"
                rounded
              >
                Subscribe
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { BLOG_CATEGORY_COLORS } from '@/utils/constants'

const email = ref('')
const subscribing = ref(false)

const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Latest GST Amendments',
    excerpt: 'A comprehensive guide to the recent GST amendments and their impact on businesses and professionals.',
    author: 'CA Rajesh Kumar',
    date: 'January 15, 2025',
    category: 'Tax Updates',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Digital Transformation in Accounting Practices',
    excerpt: 'How technology is reshaping the accounting profession and what it means for Chartered Accountants.',
    author: 'CA Priya Sharma',
    date: 'January 10, 2025',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Career Opportunities for Young CAs',
    excerpt: 'Exploring various career paths and opportunities available for newly qualified Chartered Accountants.',
    author: 'CA Amit Patel',
    date: 'January 5, 2025',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80'
  }
]

const getPostMeta = (post) => [
  { icon: 'mdi-calendar', label: 'Date', value: post.date },
  { icon: 'mdi-account', label: 'Author', value: post.author },
  { icon: 'mdi-tag', label: 'Category', value: post.category }
]

const subscribe = () => {
  if (!email.value) {
    alert('Please enter your email address')
    return
  }
  
  subscribing.value = true
  setTimeout(() => {
    subscribing.value = false
    alert('Thank you for subscribing to our newsletter!')
    email.value = ''
  }, 2000)
}
</script>

<style scoped>
.hero {
  background: var(--v-theme-surface);
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.v-card {
  background: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
</style> 