<template>
  <div class="modern-committees-structure">
    <!-- Modern Statistics Header -->
    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-card primary-stat">
          <div class="stat-icon">
            <v-icon icon="mdi-sitemap" />
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ committeesList.length }}</div>
            <div class="stat-label">Active Committees</div>
          </div>
          <div class="stat-decoration"></div>
        </div>
        
        <div class="stat-card secondary-stat">
          <div class="stat-icon">
            <v-icon icon="mdi-account-group" />
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ totalMembers }}</div>
            <div class="stat-label">Total Members</div>
          </div>
          <div class="stat-decoration"></div>
        </div>
        
        <div class="stat-card tertiary-stat">
          <div class="stat-icon">
            <v-icon icon="mdi-star-circle" />
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ uniqueRoles }}</div>
            <div class="stat-label">Leadership Roles</div>
          </div>
          <div class="stat-decoration"></div>
        </div>
      </div>
    </div>

    <!-- Expand/Collapse All Controls -->
    <div class="controls-section">
      <div class="controls-container">
        <h3 class="controls-title">Committee Details</h3>
        <div class="expand-controls">
          <v-btn
            variant="outlined"
            size="default"
            color="primary"
            @click="expandAll"
            :disabled="allExpanded"
            class="control-btn"
          >
            <v-icon icon="mdi-chevron-down" class="mr-1" />
            Expand All
          </v-btn>
          <v-btn
            variant="outlined"
            size="default"
            color="secondary"
            @click="collapseAll"
            :disabled="allCollapsed"
            class="control-btn"
          >
            <v-icon icon="mdi-chevron-up" class="mr-1" />
            Collapse All
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Modern Committees Grid -->
    <div class="committees-grid">
      <div
        v-for="(committee, index) in committeesList"
        :key="committee"
        class="modern-committee-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="card-glow"></div>
        
        <!-- Committee Header -->
        <div 
          class="committee-header"
          @click="toggleCommittee(committee)"
          role="button"
          tabindex="0"
          @keydown.enter="toggleCommittee(committee)"
          @keydown.space="toggleCommittee(committee)"
        >
          <div class="header-background"></div>
          <div class="header-content">
            <div class="committee-icon">
              <v-icon :icon="getCommitteeIcon(committee)" />
            </div>
            <div class="committee-info">
              <h3 class="committee-name">{{ committee }} Committee</h3>
              <div class="member-count-badge">
                <v-icon icon="mdi-account-multiple" class="badge-icon" />
                <span class="count-text">{{ getCommitteeMembers(committee).length }} members</span>
              </div>
            </div>
            <div class="toggle-icon">
              <v-icon 
                :icon="expandedCommittees.includes(committee) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                class="toggle-chevron"
                :class="{ 'rotated': expandedCommittees.includes(committee) }"
              />
            </div>
          </div>
        </div>

        <!-- Committee Body -->
        <v-expand-transition>
          <div 
            v-show="expandedCommittees.includes(committee)"
            class="committee-body"
          >
          <div 
            v-for="role in getRolesForCommittee(committee)"
            :key="role"
            class="role-section"
          >
            <!-- Role Header -->
            <div class="role-header">
              <div class="role-indicator" :class="getRoleColorClass(role)"></div>
              <span class="role-name">{{ formatRoleName(role) }}</span>
              <div class="role-count">
                {{ getMembersByRole(committee, role).length }}
              </div>
            </div>
            
            <!-- Members List -->
            <div class="members-list">
              <div 
                v-for="member in getMembersByRole(committee, role)"
                :key="member.Name"
                class="member-item"
              >
                <div class="member-avatar">
                  <v-icon icon="mdi-account-circle" />
                </div>
                <div class="member-details">
                  <span class="member-name">{{ member.Name }}</span>
                  <span class="member-location">
                    <v-icon icon="mdi-map-marker" class="location-icon" />
                    {{ member.Village }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </v-expand-transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import committeesData from '@/data/committees.json'

// Reactive state for collapsible functionality
const expandedCommittees = ref([])

const committeesList = computed(() => 
  [...new Set(committeesData.map(member => member.Committee))]
)

const totalMembers = computed(() => committeesData.length)

const uniqueRoles = computed(() => 
  [...new Set(committeesData.map(member => member.Position))].length
)

const getCommitteeMembers = (committee) => 
  committeesData.filter(member => member.Committee === committee)

const getRolesForCommittee = (committee) => {
  const roles = getCommitteeMembers(committee).map(member => member.Position)
  const order = ['Chairperson', 'Advisor', 'Convenor', 'Jt. Convenor', 'SpecialInvitee', 'SubCommittee']
  return [...new Set(roles)].sort((a, b) => order.indexOf(a) - order.indexOf(b))
}

const getMembersByRole = (committee, role) =>
  getCommitteeMembers(committee).filter(member => member.Position === role)

const getRoleColorClass = (role) => {
  const roleColors = {
    'Chairperson': 'role-chairperson',
    'Advisor': 'role-advisor', 
    'Convenor': 'role-convenor',
    'Jt. Convenor': 'role-convenor',
    'SpecialInvitee': 'role-special',
    'SubCommittee': 'role-member'
  }
  return roleColors[role] || 'role-member'
}

const getCommitteeIcon = (committee) => {
  const icons = {
    'Academic': 'mdi-school',
    'Audit': 'mdi-file-document-check',
    'Budget': 'mdi-calculator',
    'Corporate': 'mdi-domain',
    'Digital': 'mdi-laptop',
    'Education': 'mdi-book-open',
    'Event': 'mdi-calendar-star',
    'Finance': 'mdi-currency-usd',
    'Legal': 'mdi-gavel',
    'Marketing': 'mdi-bullhorn',
    'Membership': 'mdi-account-group',
    'Publication': 'mdi-newspaper',
    'Research': 'mdi-magnify',
    'Social': 'mdi-heart',
    'Technical': 'mdi-cog',
    'Training': 'mdi-presentation'
  }
  return icons[committee] || 'mdi-folder'
}

const formatRoleName = (role) => {
  const roleMap = {
    'Chairperson': 'Chairperson',
    'Advisor': 'Advisor',
    'Convenor': 'Convenor',
    'Jt. Convenor': 'Joint Convenor',
    'SpecialInvitee': 'Special Invitee',
    'SubCommittee': 'Sub Committee'
  }
  return roleMap[role] || role
}

// Collapsible functionality
const toggleCommittee = (committee) => {
  const index = expandedCommittees.value.indexOf(committee)
  if (index > -1) {
    expandedCommittees.value.splice(index, 1)
  } else {
    expandedCommittees.value.push(committee)
  }
}

const expandAll = () => {
  expandedCommittees.value = [...committeesList.value]
}

const collapseAll = () => {
  expandedCommittees.value = []
}

const allExpanded = computed(() => 
  expandedCommittees.value.length === committeesList.value.length
)

const allCollapsed = computed(() => 
  expandedCommittees.value.length === 0
)
</script>

<style scoped>
/* Modern Committees Structure Styles */
.modern-committees-structure {
  max-width: 1600px;
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

/* Statistics Section */
.stats-section {
  margin-bottom: 2rem;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  min-width: 160px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.primary-stat {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-primary), 0.05) 100%
  );
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.primary-stat:hover {
  border-color: rgb(var(--v-theme-primary));
  box-shadow: 0 20px 40px rgba(var(--v-theme-primary), 0.2);
}

.secondary-stat {
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-secondary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
  border-color: rgba(var(--v-theme-secondary), 0.3);
}

.secondary-stat:hover {
  border-color: rgb(var(--v-theme-secondary));
  box-shadow: 0 20px 40px rgba(var(--v-theme-secondary), 0.2);
}

.tertiary-stat {
  background: linear-gradient(135deg, 
    rgba(156, 39, 176, 0.1) 0%,
    rgba(156, 39, 176, 0.05) 100%
  );
  border-color: rgba(156, 39, 176, 0.3);
}

.tertiary-stat:hover {
  border-color: rgb(156, 39, 176);
  box-shadow: 0 20px 40px rgba(156, 39, 176, 0.2);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: rgb(var(--v-theme-on-primary));
  position: relative;
  z-index: 2;
}

.primary-stat .stat-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
}

.secondary-stat .stat-icon {
  background: linear-gradient(135deg, rgb(var(--v-theme-secondary)), #00acc1);
}

.tertiary-stat .stat-icon {
  background: linear-gradient(135deg, #9c27b0, #e1bee7);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.2rem;
}

.primary-stat .stat-number {
  color: rgb(var(--v-theme-primary));
}

.secondary-stat .stat-number {
  color: rgb(var(--v-theme-secondary));
}

.tertiary-stat .stat-number {
  color: rgb(156, 39, 176);
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface-variant));
  letter-spacing: 0.3px;
}

.stat-decoration {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.1;
  transition: all 0.3s ease;
}

.primary-stat .stat-decoration {
  background: radial-gradient(circle, rgb(var(--v-theme-primary)), transparent);
}

.secondary-stat .stat-decoration {
  background: radial-gradient(circle, rgb(var(--v-theme-secondary)), transparent);
}

.tertiary-stat .stat-decoration {
  background: radial-gradient(circle, rgb(156, 39, 176), transparent);
}

/* Controls Section */
.controls-section {
  margin-bottom: 2rem;
}

.controls-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(var(--v-theme-surface), 0.8);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 12px;
  backdrop-filter: blur(20px);
}

.controls-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

.expand-controls {
  display: flex;
  gap: 0.75rem;
}

.control-btn {
  font-weight: 500;
  text-transform: none;
  border-radius: 8px;
}

/* Committees Grid */
.committees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

/* Modern Committee Cards */
.modern-committee-card {
  position: relative;
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--v-theme-outline), 0.3);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.modern-committee-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(var(--v-theme-primary), 0.5);
  box-shadow: 0 20px 40px rgba(var(--v-theme-primary), 0.15);
}

.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 26px;
  padding: 2px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(var(--v-theme-primary), 0.3), 
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modern-committee-card:hover .card-glow {
  opacity: 1;
}

/* Committee Header */
.committee-header {
  position: relative;
  padding: 1.25rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.committee-header:hover {
  background: rgba(var(--v-theme-primary), 0.02);
}

.committee-header:focus {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

.header-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-secondary), 0.05) 100%
  );
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.committee-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), #42a5f5);
  color: rgb(var(--v-theme-on-primary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 20px rgba(var(--v-theme-primary), 0.3);
}

.committee-info {
  flex: 1;
}

.committee-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.member-count-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--v-theme-primary), 0.1);
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

.badge-icon {
  font-size: 1rem;
}

.count-text {
  letter-spacing: 0.3px;
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.toggle-chevron {
  font-size: 1.5rem;
  color: rgb(var(--v-theme-primary));
  /* Material You 3: 350ms emphasized easing */
  transition: all 0.35s cubic-bezier(0.2, 0, 0, 1);
}

.toggle-chevron.rotated {
  transform: rotate(180deg);
}

/* Committee Body */
.committee-body {
  padding: 0 1.25rem 1.25rem;
}

.role-section {
  margin-bottom: 1.25rem;
}

.role-section:last-child {
  margin-bottom: 0;
}

/* Role Header */
.role-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(var(--v-theme-surface-variant), 0.5);
  border-radius: 8px;
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
}

.role-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.role-chairperson { 
  background: linear-gradient(135deg, #ef4444, #fca5a5);
}

.role-advisor { 
  background: linear-gradient(135deg, #f97316, #fed7aa);
}

.role-convenor { 
  background: linear-gradient(135deg, #3b82f6, #93c5fd);
}

.role-special { 
  background: linear-gradient(135deg, #8b5cf6, #c4b5fd);
}

.role-member { 
  background: linear-gradient(135deg, #6b7280, #d1d5db);
}

.role-name {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.3px;
  flex: 1;
}

.role-count {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  min-width: 24px;
  text-align: center;
}

/* Members List */
.members-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1.5rem;
}

.member-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(var(--v-theme-surface), 0.8);
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.member-item:hover {
  transform: translateX(8px);
  border-color: rgba(var(--v-theme-primary), 0.3);
  background: rgba(var(--v-theme-primary), 0.05);
}

.member-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, 
    rgba(var(--v-theme-primary), 0.2),
    rgba(var(--v-theme-secondary), 0.2)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--v-theme-primary));
  font-size: 1rem;
}

.member-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.member-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.2;
}

.member-location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: rgb(var(--v-theme-on-surface-variant));
  opacity: 0.8;
}

.location-icon {
  font-size: 0.9rem;
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .committees-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

@media (max-width: 768px) {
  .modern-committees-structure {
    padding: 1.5rem;
  }
  
  .stats-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .stat-card {
    width: 100%;
    max-width: 300px;
    padding: 1rem 1.5rem;
  }
  
  .committees-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .controls-container {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .expand-controls {
    width: 100%;
    justify-content: center;
  }
  
  .committee-header {
    padding: 1rem;
  }
  
  .header-content {
    gap: 0.75rem;
  }
  
  .committee-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .committee-name {
    font-size: 1.1rem;
  }
  
  .committee-body {
    padding: 0 1rem 1rem;
  }
  
  .members-list {
    margin-left: 0.75rem;
  }
}

@media (max-width: 480px) {
  .modern-committees-structure {
    padding: 1rem;
  }
  
  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    padding: 1rem;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .committee-name {
    font-size: 1.2rem;
  }
  
  .members-list {
    margin-left: 0;
  }
  
  .member-item {
    padding: 0.5rem;
  }
  
  .member-avatar {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
  
  .controls-title {
    font-size: 1.1rem;
  }
  
  .expand-controls {
    gap: 0.5rem;
  }
  
  .control-btn {
    flex: 1;
  }
}
</style> 