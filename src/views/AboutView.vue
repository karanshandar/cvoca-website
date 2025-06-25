<template>
  <div class="modern-about-page">
    <!-- Modern Hero Section with Glassmorphism -->
    <section class="hero-section-modern">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
        <div class="floating-elements">
          <div class="floating-circle circle-1"></div>
          <div class="floating-circle circle-2"></div>
          <div class="floating-circle circle-3"></div>
        </div>
      </div>
      
      <v-container class="hero-content-modern">
        <v-row justify="center" align="center" class="min-height-section">
          <v-col cols="12" class="text-center">
            <div class="hero-badge">
              <v-chip 
                color="rgba(255,255,255,0.2)" 
                variant="elevated"
                size="large"
                class="glass-chip"
              >
                <v-icon icon="mdi-star" class="mr-2" />
                Est. 1973 • 50+ Years of Excellence
              </v-chip>
            </div>
            
            <h1 class="hero-title-modern">
              <span class="gradient-text">About</span> CVOCA
            </h1>
            
            <p class="hero-subtitle-modern">
              Empowering Chartered & Cost Accountants with 
              <span class="highlight">Professional Excellence</span>
            </p>
            
            <div class="hero-stats">
              <div class="stat-card glass-card">
                <div class="stat-number">1,450+</div>
                <div class="stat-label">Members</div>
              </div>
              <div class="stat-card glass-card">
                <div class="stat-number">350+</div>
                <div class="stat-label">Students</div>
              </div>
              <div class="stat-card glass-card">
                <div class="stat-number">50+</div>
                <div class="stat-label">Years</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container fluid class="modern-content">
      <v-row justify="center">
        <v-col cols="12" xl="10">
          
          <!-- Modern Organization Profile -->
          <section class="profile-section">
            <div class="section-header">
              <h2 class="section-title">
                <span class="title-icon">
                  <v-icon icon="mdi-domain" />
                </span>
                Organization Profile
              </h2>
              <p class="section-subtitle">
                Learn about our rich heritage and commitment to professional excellence
              </p>
            </div>

            <v-card class="modern-profile-card" elevation="0">
              <v-card-text class="pa-0">
                <v-row no-gutters>
                  <v-col cols="12" lg="8">
                    <div class="profile-content">
                      <div class="intro-text">
                        <p class="modern-body-text">
                          The <strong class="brand-text">Cutchi Visa Oswal Chartered and Cost Accountants Association (CVOCA)</strong> 
                          is a distinguished voluntary organization established in 1973 with 
                          <em class="motto-text">"Professional Excellence"</em> as our guiding motto.
                        </p>
                        
                        <p class="modern-body-text">
                          We proudly serve Chartered Accountants, Cost Accountants, and Company Secretaries 
                          from the Cutchi Visa Oswal (CVO) community, building an impeccable reputation for 
                          upholding ethical values and promoting excellence across multiple disciplines.
                        </p>
                      </div>

                      <!-- Interactive Services Grid -->
                      <div class="services-grid">
                        <div class="service-item" v-for="service in services" :key="service.title">
                          <div class="service-icon">
                            <v-icon :icon="service.icon" />
                          </div>
                          <h4 class="service-title">{{ service.title }}</h4>
                          <p class="service-desc">{{ service.description }}</p>
                        </div>
                      </div>
                    </div>
                  </v-col>
                  
                  <v-col cols="12" lg="4">
                    <div class="profile-sidebar">
                      <!-- Vision Card -->
                      <div class="vision-mission-modern">
                        <v-card class="vision-card modern-card" variant="flat">
                          <v-card-text class="pa-6">
                            <div class="card-header">
                              <v-icon icon="mdi-eye" class="header-icon" />
                              <h3 class="card-title">Our Vision</h3>
                            </div>
                            <div class="vision-points">
                              <div class="vision-item" v-for="point in visionPoints" :key="point">
                                <v-icon icon="mdi-check-circle" class="point-icon" />
                                <span class="point-text">{{ point }}</span>
                              </div>
                            </div>
                          </v-card-text>
                        </v-card>

                        <!-- Mission Card -->
                        <v-card class="mission-card modern-card" variant="flat">
                          <v-card-text class="pa-6">
                            <div class="card-header">
                              <v-icon icon="mdi-target" class="header-icon" />
                              <h3 class="card-title">Our Mission</h3>
                            </div>
                            <p class="mission-text">
                              To foster professional excellence, promote ethical practices, and create a 
                              supportive community while driving innovation and growth in the financial sector.
                            </p>
                          </v-card-text>
                        </v-card>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </section>

          <!-- Modern Section Navigation -->
          <section class="navigation-section">
            <div class="section-header">
              <h2 class="section-title">
                <span class="title-icon">
                  <v-icon icon="mdi-navigation" />
                </span>
                Explore Our Structure
              </h2>
              <p class="section-subtitle">
                Discover our organizational hierarchy and leadership
              </p>
            </div>

            <div class="modern-navigation">
              <v-card class="nav-container" elevation="0">
                <v-card-text class="pa-6">
                  <div class="custom-chip-group">
                    <v-chip
                      v-for="section in committeeSections"
                      :key="section.id"
                      :class="{ 'selected-chip': selectedSection === section.id }"
                      class="modern-nav-chip"
                      size="large"
                      @click="selectedSection = section.id"
                    >
                      <v-icon :icon="section.icon" class="mr-3" />
                      <div class="chip-content">
                        <div class="chip-title">{{ section.title }}</div>
                        <div class="chip-subtitle">{{ section.subtitle }}</div>
                      </div>
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </section>

          <!-- Modern Content Section -->
          <section class="content-section">
            <v-card class="modern-content-card" elevation="0">
              <div class="content-header">
                <div class="content-header-left">
                  <v-icon :icon="currentSection.icon" class="content-icon" />
                  <div>
                    <h2 class="content-title">{{ currentSection.title }}</h2>
                    <p class="content-subtitle">{{ currentSection.subtitle }}</p>
                  </div>
                </div>
                <v-chip 
                  color="primary" 
                  variant="tonal" 
                  size="small"
                  class="content-badge"
                >
                  {{ currentSection.badge }}
                </v-chip>
              </div>
              
              <v-card-text class="content-body">
                <div class="component-wrapper">
                  <component :is="currentSection.component" />
                </div>
              </v-card-text>
            </v-card>
          </section>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ManagingCommitteeHierarchy from '@/components/common/ManagingCommitteeHierarchy.vue'
import CoreCommitteesStructure from '@/components/common/CoreCommitteesStructure.vue'
import PastPresidentsGallery from '@/components/common/PastPresidentsGallery.vue'

// Reactive state
const selectedSection = ref('managing-committee')

// Modern committee sections with enhanced data
const committeeSections = [
  {
    id: 'managing-committee',
    title: 'Managing Committee',
    subtitle: 'Leadership Structure',
    icon: 'mdi-crown',
    component: ManagingCommitteeHierarchy,
    badge: 'Leadership'
  },
  {
    id: 'core-committees',
    title: 'Core Committees',
    subtitle: 'Organizational Framework',
    icon: 'mdi-cog',
    component: CoreCommitteesStructure,
    badge: 'Structure'
  },
  {
    id: 'past-presidents',
    title: 'Past Presidents',
    subtitle: 'Legacy & Heritage',
    icon: 'mdi-history',
    component: PastPresidentsGallery,
    badge: 'Legacy'
  }
]

// Services data
const services = [
  {
    title: 'Professional Development',
    description: 'Seminars, conferences & workshops',
    icon: 'mdi-presentation'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Monthly bulletins & publications',
    icon: 'mdi-newspaper'
  },
  {
    title: 'Member Support',
    description: 'Networking & career guidance',
    icon: 'mdi-account-group'
  },
  {
    title: 'Educational Aid',
    description: 'Student assistance programs',
    icon: 'mdi-school'
  },
  {
    title: 'Regulatory Advocacy',
    description: 'Policy representations',
    icon: 'mdi-gavel'
  },
  {
    title: 'Community Events',
    description: 'Social & recreational activities',
    icon: 'mdi-calendar-heart'
  }
]

// Vision points
const visionPoints = [
  'Most reputed knowledge organization',
  'Nucleus of activity & unity',
  'Proactive economic development'
]

// Computed properties
const currentSection = computed(() => 
  committeeSections.find(section => section.id === selectedSection.value) || committeeSections[0]
)
</script>

<style scoped>
/* Modern About Page Styles */
.modern-about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgb(var(--v-theme-background)) 0%, 
    rgba(var(--v-theme-surface), 0.8) 100%
  );
}

/* Hero Section Modern */
.hero-section-modern {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgb(var(--v-theme-primary)) 0%,
    #1976d2 25%,
    #00838a 50%,
    #006d73 75%,
    rgb(var(--v-theme-primary)) 100%
  );
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, 
    rgba(255,255,255,0.1) 0%,
    transparent 50%
  );
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.floating-elements {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 30%;
  animation-delay: 4s;
}

.hero-content-modern {
  position: relative;
  z-index: 2;
}

.min-height-section {
  min-height: 100vh;
}

.hero-badge {
  margin-bottom: 2rem;
}

.glass-chip {
  background: rgba(255,255,255,0.15) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white !important;
  font-weight: 600;
}

.hero-title-modern {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.gradient-text {
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle-modern {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: rgba(255,255,255,0.9);
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 1.4;
}

.highlight {
  color: #ffeb3b;
  font-weight: 600;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  text-align: center;
  min-width: 120px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.15);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Modern Content Styles */
.modern-content {
  background: rgb(var(--v-theme-background));
  position: relative;
  z-index: 3;
  margin-top: -100px;
  padding-top: 100px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-background));
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  border-radius: 50%;
  font-size: 1.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Profile Section */
.profile-section {
  margin-bottom: 5rem;
}

.modern-profile-card {
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  border: 1px solid rgb(var(--v-theme-outline));
  overflow: hidden;
}

.profile-content {
  padding: 3rem;
}

.intro-text {
  margin-bottom: 3rem;
}

.modern-body-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1.5rem;
}

.brand-text {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}

.motto-text {
  color: rgb(var(--v-theme-secondary));
  font-weight: 500;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-item {
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(var(--v-theme-primary), 0.05);
  border: 1px solid rgba(var(--v-theme-outline), 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(var(--v-theme-primary), 0.15);
  border-color: rgb(var(--v-theme-primary));
}

.service-icon {
  width: 48px;
  height: 48px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.5rem;
}

.service-desc {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.5;
}

/* Profile Sidebar */
.profile-sidebar {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.05) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
}

.vision-mission-modern {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modern-card {
  border-radius: 20px;
  border: 1px solid rgb(var(--v-theme-outline));
  transition: all 0.3s ease;
}

.modern-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.vision-card {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-primary), 0.05) 100%
  );
}

.mission-card {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-secondary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  font-size: 1.5rem;
  color: rgb(var(--v-theme-primary));
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}

.vision-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.vision-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.point-icon {
  color: rgb(var(--v-theme-primary));
  font-size: 1.1rem;
  margin-top: 0.1rem;
}

.point-text {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgb(var(--v-theme-on-surface));
}

.mission-text {
  font-size: 1rem;
  line-height: 1.6;
  color: rgb(var(--v-theme-on-surface));
}

/* Navigation Section */
.navigation-section {
  margin-bottom: 3rem;
}

.modern-navigation {
  max-width: 800px;
  margin: 0 auto;
}

.nav-container {
  background: rgb(var(--v-theme-surface));
  border-radius: 20px;
  border: 1px solid rgb(var(--v-theme-outline));
}

.custom-chip-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.modern-nav-chip {
  background: rgba(var(--v-theme-primary), 0.05) !important;
  border: 2px solid rgba(var(--v-theme-outline), 0.5) !important;
  border-radius: 16px !important;
  height: auto !important;
  min-height: 60px !important;
  padding: 1rem 1.5rem !important;
  transition: all 0.3s ease !important;
  cursor: pointer;
  display: flex !important;
  align-items: center !important;
}

.modern-nav-chip:hover {
  transform: translateY(-2px);
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 15px rgba(var(--v-theme-primary), 0.2);
}

.modern-nav-chip.selected-chip {
  background: rgb(var(--v-theme-primary)) !important;
  border-color: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--v-theme-primary), 0.3);
}

.chip-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.chip-title {
  font-weight: 600;
  font-size: 1rem;
}

.chip-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Content Section */
.content-section {
  margin-bottom: 3rem;
}

.modern-content-card {
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  border: 1px solid rgb(var(--v-theme-outline));
  overflow: hidden;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.05) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
  border-bottom: 1px solid rgb(var(--v-theme-outline));
}

.content-header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.content-icon {
  font-size: 2rem;
  color: rgb(var(--v-theme-primary));
}

.content-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.25rem;
}

.content-subtitle {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.content-badge {
  font-weight: 600;
}

.content-body {
  padding: 3rem;
}

.component-wrapper {
  animation: fadeInUp 0.6s ease;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(-10px) rotate(-5deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .profile-content {
    padding: 2rem;
  }
  
  .profile-sidebar {
    padding: 2rem 1rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .custom-chip-group {
    gap: 0.75rem;
  }
  
  .modern-nav-chip {
    padding: 0.75rem 1rem !important;
  }
  
  .chip-title {
    font-size: 0.9rem;
  }
  
  .chip-subtitle {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1rem 1.5rem;
    min-width: 100px;
  }
  
  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem 2rem;
  }
  
  .content-body {
    padding: 2rem;
  }
  
  .modern-navigation {
    max-width: 100%;
    margin: 0;
  }
  
  .nav-container {
    margin: 0 1rem;
  }
  
  /* Force vertical stacking on mobile */
  .modern-chip-group,
  .modern-chip-group .v-chip-group__content {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 0.75rem !important;
    width: 100% !important;
  }
  
  .modern-nav-chip {
    width: 100% !important;
    max-width: none !important;
    padding: 1rem !important;
    justify-content: flex-start !important;
    flex: none !important;
    margin: 0 !important;
  }
  
  .chip-content {
    align-items: flex-start;
    text-align: left;
  }
  
  .chip-title {
    font-size: 1rem;
  }
  
  .chip-subtitle {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .profile-content {
    padding: 1.5rem;
  }
  
  .content-body {
    padding: 1.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .vision-mission-modern {
    gap: 1.5rem;
  }
  
  .nav-container {
    margin: 0 0.5rem;
  }
  
  /* Ensure chips are properly stacked on small screens */
  .modern-chip-group,
  .modern-chip-group .v-chip-group__content {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 0.5rem !important;
    width: 100% !important;
  }
  
  .modern-nav-chip {
    padding: 0.875rem !important;
    border-radius: 12px !important;
    width: 100% !important;
    margin: 0 !important;
    flex: none !important;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .title-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .content-header {
    padding: 1rem 1.5rem;
  }
  
  .content-header-left {
    gap: 1rem;
  }
  
  .content-icon {
    font-size: 1.5rem;
  }
  
  .content-title {
    font-size: 1.5rem;
  }
}
</style> 