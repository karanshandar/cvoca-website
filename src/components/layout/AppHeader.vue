<template>
  <v-app-bar 
    elevation="0" 
    height="80" 
    class="app-header" 
    :class="{ 'header-scrolled': isScrolled }"
    :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
  >
    <v-container class="d-flex align-center header-container">
      <!-- Logo Section -->
      <router-link to="/" class="d-flex align-center text-decoration-none logo-link" @click="scrollToTop">
        <div class="logo-wrapper">
          <v-img
            :src="logoUrl"
            alt="CVOCA Logo"
            width="48"
            height="48"
            class="logo-image"
          />
        </div>
        <div class="logo-text">
          <h1 class="logo-title">CVOCA</h1>
        </div>
      </router-link>

      <v-spacer />

      <!-- Desktop Navigation -->
      <nav class="d-none d-lg-flex align-center desktop-nav">
        <v-btn
          v-for="item in NAVIGATION_ITEMS"
          :key="item.path"
          :to="item.path"
          variant="text"
          class="nav-btn"
          :class="{ 'nav-btn-active': isActive(item.path) }"
          size="large"
          @click="scrollToTop"
        >
          <v-icon :icon="item.icon" class="nav-icon" />
          <span class="nav-text">{{ item.label }}</span>
        </v-btn>
      </nav>

      <!-- Header Actions -->
      <div class="d-flex align-center header-actions">
        <!-- Theme Toggle -->
        <v-btn
          icon
          variant="text"
          @click="toggleTheme"
          :aria-label="themeLabel"
          class="theme-btn"
          size="large"
        >
          <v-icon :icon="themeIcon" />
        </v-btn>

        <!-- Mobile Menu Toggle -->
        <v-btn
          icon
          variant="text"
          class="d-lg-none mobile-menu-btn"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle mobile menu"
          size="large"
        >
          <v-icon :icon="mobileMenuOpen ? 'mdi-close' : 'mdi-menu'" />
        </v-btn>
      </div>
    </v-container>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      location="right"
      temporary
      width="320"
      :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
      class="mobile-drawer"
    >
      <div class="mobile-drawer-header">
        <h3 class="mobile-drawer-title">Menu</h3>
        <v-btn
          icon
          variant="text"
          @click="mobileMenuOpen = false"
          size="small"
        >
          <v-icon icon="mdi-close" />
        </v-btn>
      </div>
      
      <v-list class="mobile-nav-list">
        <v-list-item
          v-for="item in NAVIGATION_ITEMS"
          :key="item.path"
          :to="item.path"
          @click="handleMobileNavClick"
          class="mobile-nav-item"
          :class="{ 'mobile-nav-item-active': isActive(item.path) }"
        >
          <template #prepend>
            <v-icon :icon="item.icon" class="mobile-nav-icon" />
          </template>
          <v-list-item-title class="mobile-nav-text">{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
      <div class="mobile-drawer-footer">
        <v-divider class="mb-4" />
        <div class="mobile-theme-toggle">
          <span class="mobile-theme-label">Theme</span>
          <v-btn
            icon
            variant="text"
            @click="toggleTheme"
            :aria-label="themeLabel"
            size="small"
          >
            <v-icon :icon="themeIcon" />
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import { useTheme, useScroll, useActiveRoute } from '@/utils/composables'

const { logoUrl, themeIcon, themeLabel, toggle: toggleTheme } = useTheme()
const { isScrolled } = useScroll(20)
const { isActive } = useActiveRoute()
const mobileMenuOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleMobileNavClick = () => {
  mobileMenuOpen.value = false
  scrollToTop()
}
</script>

<style scoped>
.app-header {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  transition: all var(--transition-normal);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  box-shadow: var(--shadow-md);
}

.header-container {
  max-width: 1400px;
  padding: 0 2rem;
}

/* Logo Styles */
.logo-link { transition: all var(--transition-normal); }
.logo-link:hover { transform: translateY(-1px); }

.logo-wrapper {
  margin-right: 1rem;
  transition: transform var(--transition-fast);
}

.logo-wrapper:hover { transform: scale(1.05); }

.logo-image {
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--v-theme-primary);
  line-height: 1;
  margin: 0;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--v-theme-on-surface-variant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Navigation */
.desktop-nav { gap: 0.5rem; }

.nav-btn {
  border-radius: var(--radius-md) !important;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.nav-btn:hover {
  background: var(--v-theme-primary-container) !important;
  color: var(--v-theme-on-primary-container) !important;
  transform: translateY(-2px);
}

.nav-btn-active {
  background: var(--v-theme-primary) !important;
  color: var(--v-theme-on-primary) !important;
}

.nav-icon { margin-right: 0.5rem; }

/* Header Actions */
.header-actions { gap: 0.5rem; }

.theme-btn {
  border-radius: 50% !important;
  transition: all var(--transition-normal);
}

.theme-btn:hover {
  background: var(--v-theme-primary-container) !important;
  transform: rotate(180deg) scale(1.1);
}

.mobile-menu-btn {
  border-radius: var(--radius-md) !important;
  transition: all var(--transition-normal);
}

/* Mobile Drawer */
.mobile-drawer {
  border-radius: var(--radius-lg) 0 0 var(--radius-lg) !important;
  box-shadow: var(--shadow-xl);
}

.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--v-theme-outline);
}

.mobile-drawer-title {
  font-weight: 700;
  color: var(--v-theme-primary);
}

.mobile-nav-list { padding: 1rem 0; }

.mobile-nav-item {
  border-radius: var(--radius-md) !important;
  margin: 0.25rem 1rem;
  transition: all var(--transition-fast);
}

.mobile-nav-item:hover {
  background: var(--v-theme-primary-container) !important;
  transform: translateX(4px);
}

.mobile-nav-item-active {
  background: var(--v-theme-primary) !important;
  color: var(--v-theme-on-primary) !important;
}

.mobile-nav-icon { margin-right: 1rem; }

.mobile-drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--v-theme-surface-variant);
}

.mobile-theme-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.mobile-theme-label {
  font-weight: 600;
  color: var(--v-theme-on-surface);
}

/* Responsive */
@media (max-width: 768px) {
  .header-container { padding: 0 1rem; }
  
  .logo-title { font-size: 1.25rem; }
  .logo-subtitle { font-size: 0.65rem; }
  
  .logo-wrapper { margin-right: 0.75rem; }
}
</style> 