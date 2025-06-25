<template>
  <v-container fluid class="pa-4">
    <v-sheet 
      class="hero d-flex flex-column align-center justify-center mb-8" 
      height="200" 
      color="background" 
      elevation="0"
    >
      <h1 class="text-h2 font-weight-bold mb-2">Contact Us</h1>
      <div class="text-subtitle-1 text-on-surface-variant">We'd love to hear from you</div>
    </v-sheet>

    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Get in Touch</h2>
          <v-row>
            <v-col cols="12" md="6">
              <div 
                v-for="contact in CONTACT_INFO.slice(0, 3)" 
                :key="contact.type"
                class="mb-4 d-flex align-center"
              >
                <v-icon :icon="contact.icon" color="primary" class="mr-2" />
                <span>{{ contact.value }}</span>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-form @submit.prevent>
                <v-text-field 
                  v-for="field in FORM_FIELDS.slice(0, 2)" 
                  :key="field.name"
                  :label="field.label" 
                  :type="field.type"
                  variant="outlined" 
                  color="primary" 
                  class="mb-3" 
                />
                <v-textarea 
                  label="Message" 
                  variant="outlined" 
                  color="primary" 
                  class="mb-3" 
                  rows="4" 
                />
                <v-btn color="primary" size="large" rounded type="submit">
                  Send Message
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { CONTACT_INFO } from '@/utils/constants'

const FORM_FIELDS = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' }
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
}
</style> 