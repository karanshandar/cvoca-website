<template>
  <v-container fluid class="pa-4">
    <v-sheet class="hero d-flex flex-column align-center justify-center mb-8" height="200" color="background" elevation="0">
      <h1 class="text-h2 font-weight-bold mb-2">Digital Outreach</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Connect with us online and stay updated</div>
    </v-sheet>

    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Follow Us</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="platform in SOCIAL_LINKS" :key="platform.platform">
              <v-card class="pa-4 mb-4 text-center" elevation="2" rounded="lg">
                <v-icon :icon="platform.icon" size="48" color="primary" class="mb-2" />
                <h3 class="text-h6 font-weight-bold mb-2">{{ platform.platform }}</h3>
                <v-btn :href="platform.href" color="primary" target="_blank" rounded>
                  Visit
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Digital Initiatives -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Digital Initiatives</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="initiative in digitalInitiatives" :key="initiative.title" class="mb-4">
              <div class="d-flex align-start">
                <v-icon :icon="initiative.icon" color="primary" class="mr-3 mt-1" />
                <div>
                  <h4 class="text-h6 font-weight-bold mb-2">{{ initiative.title }}</h4>
                  <p class="text-body-2 text-on-surface-variant">{{ initiative.description }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Newsletter Signup -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Stay Connected</h2>
          <p class="text-body-1 mb-4 text-on-surface-variant">
            Subscribe to our newsletter for the latest updates, event highlights, and industry insights.
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
import { SOCIAL_LINKS } from '@/utils/constants'

const email = ref('')
const subscribing = ref(false)

const digitalInitiatives = [
  {
    title: 'Online Learning Platform',
    description: 'Access to webinars, courses, and training materials.',
    icon: 'mdi-school'
  },
  {
    title: 'Digital Library',
    description: 'Online repository of technical resources and publications.',
    icon: 'mdi-library'
  },
  {
    title: 'Mobile App',
    description: 'Stay connected on the go with our mobile application.',
    icon: 'mdi-cellphone'
  },
  {
    title: 'Virtual Events',
    description: 'Participate in online seminars and networking sessions.',
    icon: 'mdi-video'
  },
  {
    title: 'E-Newsletter',
    description: 'Weekly digital newsletter with updates and insights.',
    icon: 'mdi-email-newsletter'
  },
  {
    title: 'Online Community',
    description: 'Join our digital community for discussions and networking.',
    icon: 'mdi-account-group'
  }
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