<template>
  <v-container fluid class="pa-4">
    <v-sheet class="hero d-flex flex-column align-center justify-center mb-8" height="200" color="background" elevation="0">
      <h1 class="text-h2 font-weight-bold mb-2">Membership</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Join our community of Chartered & Cost Accountants</div>
    </v-sheet>

    <!-- Membership Benefits -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Membership Benefits</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="benefit in MEMBERSHIP_BENEFITS" :key="benefit.title" class="mb-4">
              <div class="d-flex align-start">
                <v-icon :icon="benefit.icon" color="primary" class="mr-3 mt-1" />
                <div>
                  <h4 class="text-h6 font-weight-bold mb-2">{{ benefit.title }}</h4>
                  <p class="text-body-2 text-on-surface-variant">{{ benefit.description }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Membership Types -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Membership Types</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="type in membershipTypes" :key="type.name" class="mb-4">
              <v-card class="h-100" elevation="2" rounded="lg">
                <v-card-title class="text-h6 font-weight-bold pa-4">
                  {{ type.name }}
                </v-card-title>
                <v-card-text class="pa-4">
                  <div class="text-h4 font-weight-bold text-primary mb-3">₹{{ type.fee }}</div>
                  <ul class="text-body-2 text-on-surface-variant">
                    <li v-for="feature in type.features" :key="feature" class="mb-1">
                      {{ feature }}
                    </li>
                  </ul>
                </v-card-text>
                <v-card-actions class="pa-4">
                  <v-btn
                    color="primary"
                    variant="elevated"
                    size="large"
                    block
                    rounded
                  >
                    Join Now
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Application Form -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-6" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4 text-center">Membership Application</h2>
          <p class="text-body-2 text-on-surface-variant text-center mb-6">
            Fill out the form below to apply for CVOCA membership. We'll review your application and get back to you soon.
          </p>

          <!-- Google Form Embed -->
          <div class="google-form-container">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeU2NxFGmon8alCyRkQf6TJa7ZtB_MWyIP_6q-31l9oyeiccw/viewform?embedded=true"
              width="100%"
              height="1200"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              class="google-form-iframe"
            >
              Loading…
            </iframe>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { MEMBERSHIP_BENEFITS } from '@/utils/constants'

const membershipTypes = [
  {
    name: 'Student Member',
    fee: '500',
    features: [
      'Access to study materials',
      'Student workshops',
      'Networking events',
      'Online resources',
      'Career guidance'
    ]
  },
  {
    name: 'Associate Member',
    fee: '2,000',
    features: [
      'All student benefits',
      'Professional workshops',
      'Industry updates',
      'Job board access',
      'Mentorship program'
    ]
  },
  {
    name: 'Full Member',
    fee: '5,000',
    features: [
      'All associate benefits',
      'Annual conference access',
      'Technical committees',
      'Exclusive events',
      'Priority support'
    ]
  }
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

.google-form-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--v-theme-surface-variant);
}

.google-form-iframe {
  display: block;
  border-radius: var(--radius-md);
  min-height: 1200px;
}

@media (max-width: 768px) {
  .google-form-iframe {
    min-height: 1400px;
  }
}
</style> 