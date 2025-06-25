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
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Membership Application</h2>
          <v-form @submit.prevent="submitApplication">
            <v-row>
              <v-col 
                v-for="field in formFields" 
                :key="field.name"
                :cols="field.cols || 12" 
                :md="field.md || 6"
              >
                <v-text-field
                  v-if="field.type !== 'select' && field.type !== 'textarea'"
                  v-model="form[field.name]"
                  :label="field.label"
                  :type="field.type"
                  :required="field.required"
                  variant="outlined"
                  color="primary"
                />
                <v-select
                  v-else-if="field.type === 'select'"
                  v-model="form[field.name]"
                  :label="field.label"
                  :items="field.items"
                  :required="field.required"
                  variant="outlined"
                  color="primary"
                />
                <v-textarea
                  v-else
                  v-model="form[field.name]"
                  :label="field.label"
                  variant="outlined"
                  rows="3"
                  color="primary"
                />
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn 
                  color="primary" 
                  size="large" 
                  type="submit"
                  :loading="submitting"
                  rounded
                >
                  Submit Application
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { MEMBERSHIP_BENEFITS } from '@/utils/constants'

const submitting = ref(false)
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  membershipType: '',
  qualification: '',
  message: ''
})

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

const formFields = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true, md: 6 },
  { name: 'lastName', label: 'Last Name', type: 'text', required: true, md: 6 },
  { name: 'email', label: 'Email', type: 'email', required: true, md: 6 },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, md: 6 },
  { 
    name: 'membershipType', 
    label: 'Membership Type', 
    type: 'select', 
    required: true, 
    md: 6,
    items: membershipTypes.map(type => ({ title: type.name, value: type.name }))
  },
  { name: 'qualification', label: 'CA/CMA Qualification', type: 'text', required: true, md: 6 },
  { name: 'message', label: 'Additional Information (Optional)', type: 'textarea', cols: 12 }
]

const submitApplication = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    alert('Application submitted successfully! We will contact you soon.')
    // Reset form
    Object.keys(form.value).forEach(key => form.value[key] = '')
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