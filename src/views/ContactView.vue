<template>
  <v-container fluid class="pa-4">
    <!-- Hero Section -->
    <v-sheet 
      class="hero d-flex flex-column align-center justify-center mb-8" 
      height="200" 
      color="background" 
      elevation="0"
    >
      <h1 class="text-h2 font-weight-bold mb-2">Contact Us</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Get in touch with CVOCA</div>
    </v-sheet>

    <!-- Main Contact Section -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <div class="text-center mb-6">
            <h2 class="text-h4 font-weight-bold mb-2">CVO CHARTERED & COST ACCOUNTANTS ASSOCIATION</h2>
            <p class="text-body-1 text-on-surface-variant">Professional Excellence Since 1973</p>
          </div>

          <v-row>
            <!-- Contact Details - Left Column -->
            <v-col cols="12" md="6">
              <h3 class="text-h5 font-weight-bold mb-4">Contact Information</h3>
              
              <!-- Contact Details List -->
              <div 
                v-for="contact in CONTACT_INFO" 
                :key="contact.type"
                class="mb-6 d-flex align-start"
              >
                <v-icon 
                  :icon="contact.icon" 
                  :color="getContactIconColor(contact.type)" 
                  class="mr-4 mt-1" 
                  size="24"
                />
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold mb-1">{{ contact.label }}</h4>
                  <p class="text-body-2 text-on-surface-variant">{{ contact.value }}</p>
                </div>
              </div>


            </v-col>

            <!-- Google Maps - Right Column -->
            <v-col cols="12" md="6">
              <h3 class="text-h5 font-weight-bold mb-4">Visit Our Office</h3>
              <p class="text-body-2 text-on-surface-variant mb-4">
                Located in Dadar East, Mumbai - Easy access by local trains and buses
              </p>
              
              <div class="map-container">
                <iframe
                  title="CVOCA Office Location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7544.200892830436!2d72.842921!3d19.015295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedda964bf1b%3A0xaa6516808342ba88!2sCVOCA!5e0!3m2!1sen!2sus!4v1750920220857!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style="border:0; border-radius: 12px;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="google-map"
                ></iframe>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { CONTACT_INFO } from '@/utils/constants'

const getContactIconColor = (type) => {
  const colors = {
    'address': 'blue-darken-2',
    'phone': 'green-darken-2',
    'email': 'orange-darken-2',
    'hours': 'purple-darken-2'
  }
  return colors[type] || 'primary'
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
}

.map-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.google-map {
  transition: filter 0.3s ease;
}

.map-container:hover .google-map {
  filter: brightness(1.05);
}

.gap-3 {
  gap: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .v-row > .v-col:first-child {
    margin-bottom: 2rem;
  }
}
</style> 