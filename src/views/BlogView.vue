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
                    <v-btn color="primary" variant="outlined" size="large" rounded>
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
                    >
                      <template #error>
                        <div class="d-flex align-center justify-center h-100 bg-grey-lighten-3">
                          <v-icon icon="mdi-image-off" size="64" color="grey" />
                        </div>
                      </template>
                    </v-img>
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
          <div class="text-center">
            <v-icon icon="mdi-email-newsletter" size="64" color="primary" class="mb-4" />
            <h2 class="text-h5 font-weight-bold mb-4">Stay Connected</h2>
            <p class="text-body-1 mb-6 text-on-surface-variant">
              Follow us on social media and attend our events to stay updated with the latest news,
              articles, and insights from the CVOCA community.
            </p>
            <div class="d-flex justify-center gap-4 flex-wrap">
              <v-btn
                color="primary"
                variant="elevated"
                size="large"
                to="/events"
                rounded
              >
                <v-icon start icon="mdi-calendar" />
                View Events
              </v-btn>
              <v-btn
                color="secondary"
                variant="outlined"
                size="large"
                to="/contact"
                rounded
              >
                <v-icon start icon="mdi-email" />
                Contact Us
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { BLOG_CATEGORY_COLORS } from '@/utils/constants'

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