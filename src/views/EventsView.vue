<template>
  <v-container fluid class="pa-4">
    <v-sheet class="hero d-flex flex-column align-center justify-center mb-8" height="200" color="background" elevation="0">
      <h1 class="text-h2 font-weight-bold mb-2">Events</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Discover upcoming workshops, seminars, and events</div>
    </v-sheet>

    <!-- Events List -->
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Upcoming Events</h2>
          <div v-if="events.length">
            <v-card 
              v-for="event in events" 
              :key="event.id"
              class="mb-4" 
              elevation="2" 
              rounded="lg"
            >
              <v-card-text class="pa-6">
                <v-row align="center">
                  <v-col cols="12" md="8">
                    <h3 class="text-h6 font-weight-bold mb-2">{{ event.title }}</h3>
                    <p class="text-body-2 mb-3 text-on-surface-variant">{{ event.description }}</p>
                    <div class="d-flex flex-wrap">
                      <div 
                        v-for="meta in getEventMeta(event, false)" 
                        :key="meta.icon"
                        class="d-flex align-center mr-4 mb-2"
                      >
                        <v-icon :icon="meta.icon" size="16" class="mr-1" color="primary" />
                        <span class="text-caption text-on-surface-variant">{{ meta.value }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center">
                    <v-chip 
                      :color="getEventColor(event.type)" 
                      class="mb-3"
                    >
                      {{ event.type }}
                    </v-chip>
                    <div class="mb-3">
                      <v-btn
                        :color="getEventColor(event.type)"
                        variant="elevated"
                        size="large"
                        rounded
                      >
                        Register Now
                      </v-btn>
                    </div>
                    <div v-if="event.fee" class="text-caption text-on-surface-variant">
                      Fee: ₹{{ event.fee }}
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <div v-else class="text-center text-medium-emphasis py-8">
            No upcoming events at this time. Check back soon!
          </div>
        </v-card>

        <!-- Past Events -->
        <v-card class="pa-8" elevation="4" rounded="lg">
          <h2 class="text-h5 font-weight-bold mb-4">Past Events</h2>
          <div v-if="pastEvents.length">
            <v-card 
              v-for="event in pastEvents" 
              :key="event.id"
              class="mb-4" 
              elevation="1" 
              rounded="lg"
              variant="outlined"
            >
              <v-card-text class="pa-4">
                <v-row align="center">
                  <v-col cols="12" md="8">
                    <h4 class="text-subtitle-1 font-weight-bold mb-1">{{ event.title }}</h4>
                    <p class="text-body-2 mb-2 text-on-surface-variant">{{ event.description }}</p>
                    <div class="d-flex flex-wrap">
                      <div 
                        v-for="meta in getEventMeta(event, true)" 
                        :key="meta.icon"
                        class="d-flex align-center mr-4 mb-1"
                      >
                        <v-icon :icon="meta.icon" size="14" class="mr-1" color="primary" />
                        <span class="text-caption text-on-surface-variant">{{ meta.value }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center">
                    <v-chip 
                      color="grey" 
                      variant="outlined"
                      size="small"
                    >
                      {{ event.type }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <div v-else class="text-center text-medium-emphasis py-6">
            No past events to display.
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineComponent } from 'vue'
import { BLOG_CATEGORY_COLORS } from '@/utils/constants'

const events = [
  {
    id: 1,
    title: 'Investocraft 2025',
    description: 'Annual flagship event featuring industry experts, networking opportunities, and professional development sessions.',
    date: 'March 15, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Mumbai Exhibition Centre',
    type: 'Conference',
    fee: 2500
  },
  {
    id: 2,
    title: 'Tax Updates Workshop',
    description: 'Comprehensive workshop covering latest tax regulations and compliance requirements.',
    date: 'February 28, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'CVOCA Office',
    type: 'Workshop',
    fee: 500
  },
  {
    id: 3,
    title: 'Networking Meet',
    description: 'Monthly networking session for members to connect and share experiences.',
    date: 'February 15, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Hotel Grand Central',
    type: 'Networking',
    fee: 0
  }
]

const pastEvents = [
  {
    id: 4,
    title: 'Annual General Meeting 2024',
    description: 'Annual general meeting with member elections and association updates.',
    date: 'December 20, 2024',
    location: 'CVOCA Office',
    type: 'Meeting'
  },
  {
    id: 5,
    title: 'Digital Transformation Seminar',
    description: 'Seminar on digital transformation in accounting practices.',
    date: 'November 15, 2024',
    location: 'Mumbai Chamber of Commerce',
    type: 'Seminar'
  }
]

const getEventColor = (type) => BLOG_CATEGORY_COLORS[type] || 'primary'

const getEventMeta = (event, isPast = false) => {
  const meta = [
    { icon: 'mdi-calendar', value: event.date },
    { icon: 'mdi-map-marker', value: event.location }
  ]
  if (!isPast && event.time) {
    meta.splice(1, 0, { icon: 'mdi-clock', value: event.time })
  }
  return meta
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