<template>
  <div class="modern-committee-hierarchy">
    <!-- President Section -->
    <div class="hierarchy-section president-section">
      <div class="section-header">
        <div class="section-icon president-icon">
          <v-icon icon="mdi-crown" />
        </div>
        <h2 class="section-title">President</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="members-container president-container">
        <div 
          v-for="(member, index) in president" 
          :key="member.Name"
          class="modern-member-card president-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card-glow president-glow"></div>
          <div class="member-avatar-container">
            <div class="avatar-ring president-ring">
              <v-avatar size="140" class="member-avatar">
                <v-img 
                  :src="member.PhotoFileName ? `/assets/images/${member.PhotoFileName}` : '/assets/images/placeholder-team-member.jpg'" 
                  :alt="`${member.Name} Photo`" 
                  cover
                />
              </v-avatar>
            </div>
            <div class="position-badge president-badge">
              <v-icon icon="mdi-crown" />
            </div>
          </div>
          
          <div class="member-details">
            <h3 class="member-name">{{ member.Name }}</h3>
            <div class="position-chip president-chip">
              {{ member.Position.toUpperCase() }}
            </div>
            <div class="member-info-grid">
              <div class="info-item">
                <v-icon icon="mdi-map-marker" class="info-icon" />
                <span class="info-text">{{ member.Village }}</span>
              </div>
              <div class="info-item">
                <v-icon icon="mdi-email" class="info-icon" />
                <span class="info-text">{{ member.Email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vice President Section -->
    <div class="hierarchy-section vp-section">
      <div class="section-header">
        <div class="section-icon vp-icon">
          <v-icon icon="mdi-account-star" />
        </div>
        <h2 class="section-title">Vice President</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="members-container vp-container">
        <div 
          v-for="(member, index) in vicePresident" 
          :key="member.Name"
          class="modern-member-card vp-card"
          :style="{ animationDelay: `${index * 0.1 + 0.2}s` }"
        >
          <div class="card-glow vp-glow"></div>
          <div class="member-avatar-container">
            <div class="avatar-ring vp-ring">
              <v-avatar size="120" class="member-avatar">
                <v-img 
                  :src="member.PhotoFileName ? `/assets/images/${member.PhotoFileName}` : '/assets/images/placeholder-team-member.jpg'" 
                  :alt="`${member.Name} Photo`" 
                  cover
                />
              </v-avatar>
            </div>
            <div class="position-badge vp-badge">
              <v-icon icon="mdi-account-star" />
            </div>
          </div>
          
          <div class="member-details">
            <h3 class="member-name">{{ member.Name }}</h3>
            <div class="position-chip vp-chip">
              {{ member.Position.toUpperCase() }}
            </div>
            <div class="member-info-grid">
              <div class="info-item">
                <v-icon icon="mdi-map-marker" class="info-icon" />
                <span class="info-text">{{ member.Village }}</span>
              </div>
              <div class="info-item">
                <v-icon icon="mdi-email" class="info-icon" />
                <span class="info-text">{{ member.Email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Positions Section -->
    <div class="hierarchy-section key-positions-section">
      <div class="section-header">
        <div class="section-icon key-icon">
          <v-icon icon="mdi-key" />
        </div>
        <h2 class="section-title">Key Positions</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="members-container key-positions-container">
        <div 
          v-for="(member, index) in keyPositions" 
          :key="member.Name"
          class="modern-member-card key-position-card"
          :style="{ animationDelay: `${index * 0.1 + 0.4}s` }"
        >
          <div class="card-glow key-glow"></div>
          <div class="member-avatar-container">
            <div class="avatar-ring key-ring">
              <v-avatar size="100" class="member-avatar">
                <v-img 
                  :src="member.PhotoFileName ? `/assets/images/${member.PhotoFileName}` : '/assets/images/placeholder-team-member.jpg'" 
                  :alt="`${member.Name} Photo`" 
                  cover
                />
              </v-avatar>
            </div>
            <div class="position-badge key-badge">
              <v-icon icon="mdi-key" />
            </div>
          </div>
          
          <div class="member-details">
            <h3 class="member-name">{{ member.Name }}</h3>
            <div class="position-chip key-chip">
              {{ member.Position.toUpperCase() }}
            </div>
            <div class="member-info-grid">
              <div class="info-item">
                <v-icon icon="mdi-map-marker" class="info-icon" />
                <span class="info-text">{{ member.Village }}</span>
              </div>
              <div class="info-item">
                <v-icon icon="mdi-email" class="info-icon" />
                <span class="info-text">{{ member.Email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Members Section -->
    <div class="hierarchy-section members-section">
      <div class="section-header">
        <div class="section-icon members-icon">
          <v-icon icon="mdi-account-group" />
        </div>
        <h2 class="section-title">Committee Members</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="members-container members-grid">
        <div 
          v-for="(member, index) in members" 
          :key="member.Name"
          class="modern-member-card member-card"
          :style="{ animationDelay: `${index * 0.05 + 0.6}s` }"
        >
          <div class="card-glow member-glow"></div>
          <div class="member-avatar-container">
            <div class="avatar-ring member-ring">
              <v-avatar size="80" class="member-avatar">
                <v-img 
                  :src="member.PhotoFileName ? `/assets/images/${member.PhotoFileName}` : '/assets/images/placeholder-team-member.jpg'" 
                  :alt="`${member.Name} Photo`" 
                  cover
                />
              </v-avatar>
            </div>
            <div class="position-badge member-badge">
              <v-icon icon="mdi-account" />
            </div>
          </div>
          
          <div class="member-details">
            <h3 class="member-name">{{ member.Name }}</h3>
            <div class="position-chip member-chip">
              {{ member.Position.toUpperCase() }}
            </div>
            <div class="member-info-grid">
              <div class="info-item">
                <v-icon icon="mdi-map-marker" class="info-icon" />
                <span class="info-text">{{ member.Village }}</span>
              </div>
              <div class="info-item">
                <v-icon icon="mdi-email" class="info-icon" />
                <span class="info-text">{{ member.Email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import managingCommitteeData from '@/data/managingCommittee.json'

const president = computed(() => 
  managingCommitteeData.filter(member => 
    member.Position.toLowerCase() === 'president'
  )
)

const vicePresident = computed(() => 
  managingCommitteeData.filter(member => 
    member.Position.toLowerCase() === 'vice-president'
  )
)

const keyPositions = computed(() => 
  managingCommitteeData.filter(member => 
    ['secretary', 'treasurer', 'jt. secetrary'].includes(member.Position.toLowerCase())
  )
)

const members = computed(() => 
  managingCommitteeData.filter(member => 
    member.Position.toLowerCase() === 'member'
  )
)
</script>

<style scoped>
/* Modern Committee Hierarchy Styles */
.modern-committee-hierarchy {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-surface), 0.8) 0%,
    rgba(var(--v-theme-background), 0.9) 100%
  );
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
}

/* Hierarchy Sections */
.hierarchy-section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
}

.section-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
}

.president-icon {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a1a;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.vp-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
  color: rgb(var(--v-theme-on-secondary));
  box-shadow: 0 4px 20px rgba(var(--v-theme-secondary), 0.4);
}

.key-icon {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
  color: white;
  box-shadow: 0 4px 20px rgba(156, 39, 176, 0.4);
}

.members-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
  color: rgb(var(--v-theme-on-primary));
  box-shadow: 0 4px 20px rgba(var(--v-theme-primary), 0.4);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

.section-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(var(--v-theme-primary), 0.3) 50%,
    transparent 100%
  );
  max-width: 200px;
}

/* Members Containers */
.members-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.president-container,
.vp-container {
  justify-content: center;
}

.key-positions-container {
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

/* Modern Member Cards */
.modern-member-card {
  position: relative;
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.modern-member-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(var(--v-theme-primary), 0.5);
}

.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(45deg, transparent, rgba(var(--v-theme-primary), 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modern-member-card:hover .card-glow {
  opacity: 1;
}

.president-glow {
  background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.4), transparent);
}

.vp-glow {
  background: linear-gradient(45deg, transparent, rgba(var(--v-theme-secondary), 0.4), transparent);
}

.key-glow {
  background: linear-gradient(45deg, transparent, rgba(156, 39, 176, 0.4), transparent);
}

.member-glow {
  background: linear-gradient(45deg, transparent, rgba(var(--v-theme-primary), 0.3), transparent);
}

/* Avatar Containers */
.member-avatar-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.avatar-ring {
  position: relative;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.3),
    rgba(var(--v-theme-secondary), 0.3)
  );
}

.president-ring {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
}

.vp-ring {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
}

.key-ring {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
}

.member-ring {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
}

.member-avatar {
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.position-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border: 3px solid rgb(var(--v-theme-surface));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.president-badge {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a1a;
}

.vp-badge {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
  color: rgb(var(--v-theme-on-secondary));
}

.key-badge {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
  color: white;
}

.member-badge {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
  color: rgb(var(--v-theme-on-primary));
}

/* Member Details */
.member-details {
  text-align: center;
}

.member-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1rem;
  line-height: 1.2;
}

.position-chip {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  color: white;
}

.president-chip {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a1a;
}

.vp-chip {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
}

.key-chip {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
}

.member-chip {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
}

.member-info-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.info-icon {
  color: rgb(var(--v-theme-primary));
  font-size: 1rem;
}

.info-text {
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .modern-committee-hierarchy {
    padding: 1.5rem;
  }
  
  .section-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .section-line {
    display: none;
  }
  
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .modern-member-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .member-name {
    font-size: 1.1rem;
  }
}
</style> 