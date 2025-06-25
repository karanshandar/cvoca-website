<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
      
      <v-container class="hero-content" fluid>
        <div class="hero-wrapper">
          <v-row align="center" justify="center" class="hero-row">
            <v-col cols="12" class="text-center">
              <div class="hero-badge mb-8">
                <v-chip 
                  color="primary" 
                  text-color="white" 
                  size="large"
                  class="hero-chip"
                  prepend-icon="mdi-star"
                  variant="elevated"
                  :elevation="8"
                >
                  Professional Excellence Since 1973
                </v-chip>
              </div>
              
              <div class="hero-title-container mb-8">
                <h1 class="hero-title-masked">CVOCA</h1>
                <p class="hero-subtitle-simple">
                  CVO Chartered & Cost Accountants Association
                </p>
              </div>
              
              <p class="hero-subtitle mb-10">
                Empowering professionals through knowledge, networking, and innovation in the dynamic world of accounting and finance.
              </p>
              
              <div class="hero-actions mb-12">
                <v-btn
                  v-for="action in HERO_ACTIONS"
                  :key="action.text"
                  :color="action.color"
                  :variant="action.variant"
                  size="x-large"
                  class="hero-btn"
                  :class="action.class"
                  :to="action.to"
                  :elevation="action.elevation"
                  :prepend-icon="action.icon"
                >
                  {{ action.text }}
                </v-btn>
              </div>

              <div class="hero-stats">
                <div class="stats-container">
                  <div v-for="stat in CVOCA_STATS" :key="stat.label" class="stat-item">
                    <div class="stat-card">
                      <div class="stat-number" :data-number="stat.number">{{ stat.number }}</div>
                      <div class="stat-label">{{ stat.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <v-container fluid>
        <div class="content-wrapper">
          <div class="section-header text-center mb-16">
            <h2 class="section-title mb-4">Why Choose CVOCA?</h2>
            <p class="section-subtitle">
              Discover the benefits of joining our professional community
            </p>
          </div>
          
          <v-row class="features-grid" justify="center">
            <v-col 
              cols="12" 
              sm="6"
              md="6" 
              lg="3" 
              v-for="(feature, index) in CVOCA_FEATURES" 
              :key="feature.title"
              class="feature-col"
            >
              <v-card 
                class="feature-card h-100" 
                :class="`feature-card-${index + 1}`"
                variant="elevated"
                :elevation="2"
                hover
              >
                <v-card-text class="feature-card-content">
                  <div class="feature-icon-wrapper mb-4">
                    <v-avatar size="80" class="feature-avatar">
                      <v-icon :icon="feature.icon" size="40" class="feature-icon" />
                    </v-avatar>
                  </div>
                  <h3 class="feature-title mb-3">{{ feature.title }}</h3>
                  <p class="feature-description mb-4">{{ feature.description }}</p>
                </v-card-text>
                <v-card-actions class="justify-center pb-4">
                  <v-btn
                    :color="feature.color"
                    variant="tonal"
                    size="small"
                    :to="feature.link"
                    class="feature-btn"
                    append-icon="mdi-arrow-right"
                  >
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- News & Updates Section -->
    <section class="news-section">
      <v-container fluid>
        <div class="content-wrapper">
          <div class="news-header text-center mb-12">
            <h2 class="news-title mb-4">Latest Updates</h2>
            <p class="news-subtitle">Stay informed with the latest news and announcements</p>
          </div>
          
          <v-row class="news-grid" justify="center">
            <v-col 
              cols="12"
              sm="6"
              lg="4"
              v-for="news in newsList" 
              :key="news.id"
            >
              <v-card 
                class="news-card h-100"
                variant="elevated"
                :elevation="1"
                hover
              >
                <v-card-text class="news-card-content">
                  <div class="news-card-header mb-3">
                    <v-chip
                      :color="BLOG_CATEGORY_COLORS[news.type] || 'primary'"
                      size="small"
                      class="news-chip"
                    >
                      {{ news.type }}
                    </v-chip>
                    <div class="news-date">{{ news.date }}</div>
                  </div>
                  <h3 class="news-card-title mb-3">{{ news.title }}</h3>
                  <p class="news-card-text mb-4">{{ news.text }}</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn 
                    variant="text" 
                    color="primary" 
                    size="small" 
                    class="news-read-more"
                    append-icon="mdi-arrow-right"
                  >
                    Read More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <v-container fluid>
        <div class="content-wrapper">
          <v-row justify="center">
            <v-col cols="12" lg="8" xl="6">
              <div class="cta-container text-center">
                <h2 class="cta-title mb-6">Ready to Join CVOCA?</h2>
                <p class="cta-description mb-8">
                  Become part of a thriving community of professionals. Access exclusive resources, 
                  networking opportunities, and stay ahead in your career.
                </p>
                <div class="cta-benefits mb-8">
                  <div v-for="benefit in CTA_BENEFITS" :key="benefit" class="benefit-item">
                    <v-icon icon="mdi-check-circle" color="success" class="mr-3" />
                    <span>{{ benefit }}</span>
                  </div>
                </div>
                <div class="cta-actions">
                  <v-btn
                    v-for="action in CTA_ACTIONS"
                    :key="action.text"
                    :color="action.color"
                    :variant="action.variant"
                    size="large"
                    class="cta-btn"
                    :to="action.to"
                    :elevation="action.elevation"
                    :prepend-icon="action.icon"
                  >
                    {{ action.text }}
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CVOCA_FEATURES, CVOCA_STATS, BLOG_CATEGORY_COLORS } from '@/utils/constants'

// Image handling
const imageError = ref(false)
const groupPhotoSrc = ref('/assets/images/cvoca-group-photo.jpg')

const handleImageError = () => {
  imageError.value = true
}

// Local constants for this view
const HERO_ACTIONS = [
  {
    text: 'Join CVOCA Today',
    color: 'primary',
    variant: 'elevated',
    to: '/membership',
    icon: 'mdi-account-plus',
    elevation: 8,
    class: 'hero-btn-primary'
  },
  {
    text: 'Learn More',
    color: 'surface',
    variant: 'elevated',
    to: '/about',
    icon: 'mdi-information',
    elevation: 4,
    class: 'hero-btn-secondary'
  }
]

const CTA_BENEFITS = [
  'Exclusive member events and workshops',
  'Professional development resources', 
  'Networking with industry leaders'
]

const CTA_ACTIONS = [
  {
    text: 'Join Now',
    color: 'primary',
    variant: 'elevated',
    to: '/membership',
    icon: 'mdi-account-plus',
    elevation: 6
  },
  {
    text: 'Contact Us',
    color: 'on-surface',
    variant: 'outlined',
    to: '/contact',
    icon: 'mdi-email',
    elevation: 0
  }
]

const newsList = [
  {
    id: 1,
    type: 'Events',
    title: 'Annual Conference 2025',
    text: 'Join us for our biggest professional gathering of the year with industry experts.',
    date: 'Jan 15, 2025'
  },
  {
    id: 2,
    type: 'Technology',
    title: 'Digital Transformation Workshop',
    text: 'Learn about the latest tools and technologies shaping the accounting profession.',
    date: 'Jan 10, 2025'
  },
  {
    id: 3,
    type: 'Career',
    title: 'Young Professional Network',
    text: 'New initiative to support early-career chartered accountants and cost accountants.',
    date: 'Jan 5, 2025'
  }
]
</script>

<style scoped>
/* Global Layout Constraints */
.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary-container)) 0%, rgb(var(--v-theme-secondary-container)) 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(var(--v-theme-secondary), 0.05) 50%, rgba(var(--v-theme-tertiary), 0.05) 100%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(var(--v-theme-primary), 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-content { 
  position: relative; 
  z-index: 1; 
  width: 100%;
}

.hero-chip {
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Hero Layout Sections */
.hero-text-section {
  display: flex;
  align-items: center;
  min-height: 85vh;
  padding: 2rem;
}

.hero-text-content {
  max-width: 600px;
  text-align: left;
}

.hero-photo-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-photo-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-photo-wrapper {
  position: relative;
  width: 90%;
  max-width: 500px;
  aspect-ratio: 16/10;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.hero-group-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.hero-group-photo:hover {
  transform: scale(1.05);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.1) 0%, rgba(var(--v-theme-secondary), 0.05) 100%);
  z-index: 1;
}

.photo-frame {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, rgb(var(--v-theme-secondary)) 100%);
  border-radius: 26px;
  z-index: -1;
}

/* Photo Placeholder */
.photo-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgb(var(--v-theme-surface-variant)) 0%, rgb(var(--v-theme-surface)) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
}

.placeholder-content {
  text-align: center;
  color: rgb(var(--v-theme-on-surface-variant));
}

.placeholder-icon {
  color: rgb(var(--v-theme-primary));
  opacity: 0.6;
  margin-bottom: 1rem;
}

.placeholder-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgb(var(--v-theme-on-surface));
}

.placeholder-text {
  font-size: 1rem;
  opacity: 0.8;
}

/* Photo Caption */
.photo-caption {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 3;
}

.caption-chip {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
}

/* Stats Sidebar */
.stats-sidebar {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.stats-container.vertical {
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.compact-stat {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1rem !important;
  min-width: 100px;
  text-align: center;
}

.stat-number.compact {
  font-size: 1.75rem;
  color: rgb(var(--v-theme-primary));
  font-weight: 800;
  line-height: 1;
}

.stat-label.compact {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface));
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.25rem;
}

.mobile-stats-row {
  margin-top: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-title-masked {
  font-size: clamp(8rem, 20vw, 16rem);
  font-weight: 900;
  letter-spacing: -0.1em;
  line-height: 0.8;
  margin: 2rem 0;
  
  background: url('/assets/images/cvoca-group-photo.jpg') center/cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Fallback */
  color: rgb(var(--v-theme-primary));
}

.hero-subtitle-simple {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-top: 1rem;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-btn { 
  border-radius: 12px !important;
  padding: 0 2rem !important;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.025em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-btn:hover {
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  width: 100%;
}

.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-card {
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: rgb(var(--v-theme-primary));
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.95rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 0.5rem;
}

/* Features Section */
.features-section {
  padding: 8rem 0;
  background: rgb(var(--v-theme-surface));
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.375rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.feature-card {
  border-radius: 20px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
  background: rgb(var(--v-theme-surface)) !important;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(var(--v-theme-shadow), 0.15) !important;
}

.feature-card-content {
  text-align: center;
  padding: 2rem !important;
}

.feature-avatar {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary-container)) 0%, rgb(var(--v-theme-secondary-container)) 100%) !important;
}

.feature-icon { 
  color: rgb(var(--v-theme-primary)) !important;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}

.feature-description {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  font-size: 1rem;
}

.feature-btn { 
  border-radius: 10px !important; 
  font-weight: 600;
  text-transform: none;
}

/* News Section */
.news-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgb(var(--v-theme-surface-variant)) 0%, rgb(var(--v-theme-surface)) 100%);
}

.news-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: -0.02em;
}

.news-subtitle {
  font-size: 1.375rem;
  color: rgb(var(--v-theme-on-surface-variant));
  max-width: 600px;
  margin: 0 auto;
}

.news-card {
  border-radius: 16px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgb(var(--v-theme-surface)) !important;
  border: 1px solid rgba(var(--v-theme-outline), 0.1);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(var(--v-theme-shadow), 0.1) !important;
}

.news-card-content {
  padding: 2rem !important;
}

.news-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
}

.news-card-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}

.news-card-text {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  font-size: 1rem;
}

.news-read-more {
  font-weight: 600;
  text-transform: none;
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary-container)) 0%, rgb(var(--v-theme-secondary-container)) 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(var(--v-theme-primary), 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.cta-container {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: -0.02em;
}

.cta-description {
  font-size: 1.25rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

.benefit-item {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: rgb(var(--v-theme-on-surface));
  font-weight: 500;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn { 
  border-radius: 12px !important;
  padding: 0 2rem !important;
  font-weight: 600;
  text-transform: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-btn:hover {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 960px) {
  .content-wrapper {
    padding: 0 1.5rem;
  }
  
  .hero-wrapper {
    padding: 0 1.5rem;
  }
  
  .hero-stats { 
    gap: 2rem; 
  }
  
  .features-section,
  .news-section,
  .cta-section { 
    padding: 5rem 0; 
  }
}

 @media (max-width: 959px) {
   .hero-text-section {
     min-height: auto;
     padding: 3rem 2rem 2rem;
   }
   
   .hero-text-content {
     text-align: center;
     max-width: none;
   }
   
   .hero-photo-section {
     min-height: 50vh;
     padding: 2rem;
   }
   
   .hero-photo-wrapper {
     max-width: 400px;
     width: 100%;
   }
   
   .stats-sidebar {
     position: relative;
     right: auto;
     top: auto;
     transform: none;
     margin-top: 2rem;
     display: flex;
     justify-content: center;
   }
   
   .stats-container.vertical {
     flex-direction: row;
     gap: 1rem;
   }
 }

 @media (max-width: 600px) {
   .hero-actions,
   .cta-actions { 
     flex-direction: column; 
     align-items: center;
     gap: 1rem;
   }
   
   .hero-text-section {
     padding: 2rem 1rem;
   }
   
   .hero-photo-section {
     min-height: 40vh;
     padding: 1rem;
   }
   
   .hero-photo-wrapper {
     max-width: 300px;
     aspect-ratio: 4/3;
   }
   
   .stats-container {
     gap: 1rem;
     justify-content: space-around;
   }
   
   .stat-card {
     padding: 0.75rem;
   }
   
   .floating-stats .stats-container {
     flex-direction: column;
     gap: 0.5rem;
   }
   
   .cta-benefits {
     text-align: center;
   }
   
   .features-section,
   .news-section,
   .cta-section { 
     padding: 4rem 0; 
   }
 }
</style> 