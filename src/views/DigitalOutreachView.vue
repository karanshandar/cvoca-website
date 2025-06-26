<template>
  <v-container fluid class="pa-4">
    <!-- Hero Section -->
    <v-sheet class="hero d-flex flex-column align-center justify-center mb-8" height="200" color="background" elevation="0">
      <h1 class="text-h2 font-weight-bold mb-2">Community Outreach</h1>
      <div class="text-subtitle-1 text-on-surface-variant">Connecting through digital platforms and community engagement</div>
    </v-sheet>

    <!-- Social Media Links -->
    <div class="text-center mb-8">
      <h3 class="text-h6 font-weight-bold mb-3">Connect with us</h3>
      <div class="d-flex justify-center align-center social-icons-row">
        <v-btn
          v-for="platform in SOCIAL_LINKS"
          :key="platform.platform"
          :href="platform.href"
          target="_blank"
          :color="getSocialIconColor(platform.platform)"
          variant="text"
          icon
          size="large"
          class="social-icon-btn mx-2"
          :aria-label="`Follow us on ${platform.platform}`"
        >
          <v-icon :icon="platform.icon" size="24" />
        </v-btn>
      </div>
    </div>

    <!-- Outreach Initiatives -->
    <v-row justify="center">
      <v-col cols="12">
        <div class="text-center mb-6">
          <h2 class="text-h4 font-weight-bold mb-2">Our Outreach Initiatives</h2>
          <p class="text-body-1 text-on-surface-variant">Bridging the gap between digital innovation and community impact</p>
        </div>
        
        <div class="initiatives-grid">
          <v-card 
            v-for="initiative in outreachInitiatives" 
            :key="initiative.title"
            class="initiative-card mb-6"
            elevation="4"
            rounded="lg"
          >
            <v-row no-gutters>
              <!-- Image Section -->
              <v-col cols="12" md="5" class="image-section">
                <div class="initiative-image-container">
                  <v-img
                    :src="initiative.image"
                    :alt="initiative.title"
                    height="280"
                    cover
                    class="initiative-image"
                  >
                    <div class="image-overlay">
                      <v-icon :icon="initiative.icon" size="48" color="white" />
                    </div>
                  </v-img>
                  <div class="initiative-badge">
                    <v-chip :color="initiative.category === 'digital' ? 'primary' : 'secondary'" variant="elevated" size="small">
                      {{ initiative.category === 'digital' ? 'Digital' : 'Community' }}
                    </v-chip>
                  </div>
                </div>
              </v-col>
              
              <!-- Content Section -->
              <v-col cols="12" md="7">
                <v-card-text class="pa-6">
                  <!-- Header -->
                  <div class="d-flex align-center mb-3">
                    <h3 class="text-h5 font-weight-bold text-primary">{{ initiative.title }}</h3>
                    <v-spacer />
                    <v-chip color="success" variant="outlined" size="small">Active</v-chip>
                  </div>
                  
                  <!-- Description -->
                  <p class="text-body-1 text-on-surface-variant mb-4">{{ initiative.description }}</p>
                  
                  <!-- Features -->
                  <div class="features-list mb-4">
                    <h4 class="text-subtitle-1 font-weight-bold mb-2">Key Features:</h4>
                    <ul class="feature-items">
                      <li v-for="feature in initiative.features" :key="feature" class="feature-item">
                        <v-icon icon="mdi-check-circle" color="success" size="small" class="mr-2" />
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Statistics -->
                  <div class="initiative-stats mb-4">
                    <div class="d-flex justify-space-around text-center">
                      <div v-for="stat in initiative.stats" :key="stat.label" class="stat-item">
                        <div class="stat-number text-h6 font-weight-bold text-primary">{{ stat.value }}</div>
                        <div class="stat-label text-caption text-on-surface-variant">{{ stat.label }}</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Action Button -->
                  <v-btn
                    :color="initiative.category === 'digital' ? 'primary' : 'secondary'"
                    variant="elevated"
                    rounded="pill"
                    class="text-none"
                  >
                    <v-icon start :icon="initiative.actionIcon" />
                    {{ initiative.actionText }}
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { SOCIAL_LINKS } from '@/utils/constants'

const outreachInitiatives = [
  {
    title: 'Financial Literacy Street Plays (Nukkad Nataks)',
    description: 'Bringing Finance to the Streets. We use powerful street theatre (Nukkad Nataks) to raise awareness about financial topics in a way that\'s relatable and engaging. Performed at local events and public spaces, these skits simplify complex subjects like budgeting, digital payments, and fraud prevention for everyday audiences.',
    image: '/assets/images/cvoca-group-photo.jpg',
    icon: 'mdi-drama-masks',
    category: 'community',
    features: [
      'Interactive financial literacy skits',
      'Community-driven performances',
      'Focus on relatable, real-life scenarios',
      'Delivered in regional languages for maximum impact'
    ],
    stats: [
      { value: '20+', label: 'Performances' },
      { value: '5K+', label: 'Audience Reached' },
      { value: '5', label: 'Languages' }
    ],
    actionText: 'Join as Performer or Partner',
    actionIcon: 'mdi-account-plus'
  },
  {
    title: 'Community Awareness Events',
    description: 'Decoding Finance for the Public. We host dedicated programs for the community after key financial events—like the Union Budget—to break down complex announcements into actionable insights. These sessions help the public understand what economic changes mean for them.',
    image: '/assets/images/cvoca-group-photo.jpg',
    icon: 'mdi-presentation',
    category: 'community',
    features: [
      'Post-budget community briefings',
      'Talks on new tax rules, government schemes, and savings tips',
      'Interactive Q&A sessions with experts',
      'Free to attend and open to all'
    ],
    stats: [
      { value: '10+', label: 'Events Annually' },
      { value: '3K+', label: 'Community Members' },
      { value: '100%', label: 'Free Access' }
    ],
    actionText: 'Attend the Next Session',
    actionIcon: 'mdi-calendar-plus'
  },
  {
    title: 'Public Education Courses (Online & Offline)',
    description: 'Skill Up, Step Up. Our free and affordable public courses are designed to upskill individuals in both financial and digital literacy. These beginner-friendly courses are available online and in-person, covering practical topics that help people in everyday life and work.',
    image: '/assets/images/cvoca-group-photo.jpg',
    icon: 'mdi-school-outline',
    category: 'digital',
    features: [
      'TDS Essentials – Understand tax deductions easily',
      'GST Simplified – For small businesses & entrepreneurs',
      'Office Automation Tools – Digital skills for the modern workplace',
      'Self-paced + Instructor-led options with certification included'
    ],
    stats: [
      { value: '1.5K+', label: 'Learners' },
      { value: '50+', label: 'Sessions Conducted' },
      { value: '3', label: 'Course Types' }
    ],
    actionText: 'Browse Courses & Enroll',
    actionIcon: 'mdi-book-open-page-variant'
  }
]

const getSocialIconColor = (platform) => {
  const colorMap = {
    'LinkedIn': 'blue-darken-1',
    'Twitter': 'light-blue-darken-1',
    'Facebook': 'indigo-darken-1', 
    'Instagram': 'pink-darken-1',
    'YouTube': 'red-darken-1'
  }
  return colorMap[platform] || 'primary'
}
</script>

<style scoped>
.hero {
  background: var(--v-theme-surface);
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.initiatives-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.initiative-card {
  background: var(--v-theme-surface);
  transition: all var(--transition-normal);
  overflow: hidden;
}

.initiative-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.initiative-card:hover .initiative-image {
  transform: scale(1.02);
}

.initiative-card:hover .image-overlay {
  opacity: 1;
}

.image-section {
  position: relative;
}

.initiative-image-container {
  position: relative;
  height: 100%;
}

.initiative-image {
  height: 100%;
  transition: transform var(--transition-normal);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.initiative-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.features-list {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.feature-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.feature-item:last-child {
  margin-bottom: 0;
}

.initiative-stats {
  background: rgba(var(--v-theme-primary), 0.05);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.stat-item {
  flex: 1;
  min-width: 0;
}

.stat-number {
  line-height: 1;
  font-size: 1.1rem;
}

.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.7rem;
  word-break: break-word;
}

.social-icons-row {
  gap: 0.5rem;
}

.social-icon-btn {
  transition: all 0.2s ease;
  border-radius: 50%;
}

.social-icon-btn:hover {
  transform: translateY(-2px) scale(1.1);
  background-color: rgba(var(--v-theme-surface-variant), 0.1);
}

/* Responsive Design */
@media (max-width: 960px) {
  .initiative-card .v-row {
    flex-direction: column;
  }
  
  .image-section {
    order: 1;
  }
  
  .initiative-image-container {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .social-icons-row {
    gap: 0.25rem;
  }
}
</style> 