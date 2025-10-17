<template>
  <v-app-bar 
    elevation="0" 
    height="80" 
    class="app-header" 
    :class="{ 'header-scrolled': isScrolled }"
    color="background"
  >
    <v-container class="d-flex align-center header-container">
      <!-- Logo Section -->
      <router-link to="/" class="d-flex align-center text-decoration-none logo-link" @click="scrollToTop">
        <div class="logo-wrapper">
          <v-img
            src="/assets/images/logo-light.png"
            alt="CVOCA Logo"
            width="48"
            height="48"
            class="logo-image"
          >
            <template #error>
              <v-icon icon="mdi-image-broken" size="48" color="grey" />
            </template>
          </v-img>
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
          class="theme-toggle-btn"
          @click="toggleTheme"
          :aria-label="`Switch to ${theme.global.current.value.dark ? 'light' : 'dark'} mode`"
          size="large"
        >
          <v-icon :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
        </v-btn>

        <!-- Mobile Menu Toggle -->
        <v-btn
          icon
          variant="text"
          class="d-lg-none mobile-menu-btn"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
          size="large"
        >
          <v-icon :icon="mobileMenuOpen ? 'mdi-close' : 'mdi-menu'" />
        </v-btn>
      </div>
    </v-container>

  </v-app-bar>

  <!-- Mobile Navigation Overlay -->
  <Teleport to="body">
    <div
      v-if="mobileMenuOpen"
      class="mobile-menu-overlay"
      @click="closeMobileMenu"
    >
      <div 
        class="mobile-menu-drawer"
        @click.stop
      >
        <div class="mobile-drawer-header">
          <h3 class="mobile-drawer-title">Menu</h3>
          <v-btn
            icon
            variant="text"
            @click="closeMobileMenu"
            size="small"
          >
            <v-icon icon="mdi-close" />
          </v-btn>
        </div>
        
        <div class="mobile-nav-list">
          <div
            v-for="item in NAVIGATION_ITEMS"
            :key="item.path"
            class="mobile-nav-item"
            :class="{ 'mobile-nav-item-active': isActive(item.path) }"
            @click="() => navigateAndClose(item.path)"
          >
            <v-icon :icon="item.icon" class="mobile-nav-icon" />
            <span class="mobile-nav-text">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import { useScroll, useActiveRoute } from '@/utils/composables'

const router = useRouter()
const theme = useTheme()
const { isScrolled } = useScroll(20)
const { isActive } = useActiveRoute()
const mobileMenuOpen = ref(false)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // Save preference to localStorage
  localStorage.setItem('cvoca-theme', theme.global.name.value)
}

// Load saved theme preference on mount
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('cvoca-theme')
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    theme.global.name.value = savedTheme
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const navigateAndClose = (path) => {
  router.push(path)
  closeMobileMenu()
  scrollToTop()
}

const handleMobileNavClick = () => {
  closeMobileMenu()
  scrollToTop()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
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

.theme-toggle-btn {
  border-radius: var(--radius-md) !important;
  transition: all var(--transition-normal);
  background: var(--v-theme-surface-variant) !important;
  color: var(--v-theme-on-surface) !important;
  min-width: 48px !important;
  min-height: 48px !important;
}

.theme-toggle-btn:hover {
  background: var(--v-theme-primary-container) !important;
  color: var(--v-theme-on-primary-container) !important;
  transform: scale(1.05) rotate(15deg);
}

.theme-toggle-btn:active {
  transform: scale(0.95) rotate(15deg);
}

.mobile-menu-btn {
  border-radius: var(--radius-md) !important;
  transition: all var(--transition-normal);
  background: var(--v-theme-surface-variant) !important;
  color: var(--v-theme-on-surface) !important;
  min-width: 48px !important;
  min-height: 48px !important;
}

.mobile-menu-btn:hover {
  background: var(--v-theme-primary-container) !important;
  color: var(--v-theme-on-primary-container) !important;
  transform: scale(1.05);
}

.mobile-menu-btn:active {
  transform: scale(0.95);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  backdrop-filter: blur(8px);
}

.mobile-menu-drawer {
  width: 280px;
  max-width: 85vw;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  animation: slideInFromRight 0.3s ease-out;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  min-height: 80px;
  box-sizing: border-box;
}

.mobile-drawer-title {
  font-weight: 700;
  color: var(--v-theme-primary);
  font-size: 1.25rem;
  margin: 0;
}

.mobile-nav-list { 
  padding: 1.5rem 0; 
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0 1rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  min-height: 56px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-nav-item:hover {
  background: rgba(37, 99, 235, 0.1);
  color: #1565c0;
  transform: translateX(2px);
  border-color: rgba(37, 99, 235, 0.2);
}

.mobile-nav-item-active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
  font-weight: 600;
}

.mobile-nav-item-active:hover {
  background: #1d4ed8;
  color: white;
  border-color: #1d4ed8;
}

.mobile-nav-icon { 
  margin-right: 1rem; 
  font-size: 1.25rem;
  flex-shrink: 0;
  color: inherit;
}

.mobile-nav-text {
  font-weight: inherit;
  font-size: 1rem;
  color: inherit;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container { padding: 0 1rem; }
  
  .logo-title { font-size: 1.25rem; }
  .logo-subtitle { font-size: 0.65rem; }
  
  .logo-wrapper { margin-right: 0.75rem; }
  
  .desktop-nav {
    display: none !important;
  }
  
  .mobile-menu-btn {
    display: flex !important;
  }
  
  .mobile-menu-drawer {
    width: 260px;
  }
  
  .mobile-nav-item {
    padding: 0.875rem 1.25rem;
    margin: 0 0.75rem;
  }
  
  .mobile-drawer-header {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .mobile-menu-drawer {
    width: 240px;
  }
  
  .mobile-nav-item {
    padding: 0.75rem 1rem;
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }
  
  .mobile-nav-icon {
    font-size: 1.1rem;
  }
  
  .mobile-drawer-header {
    padding: 1rem;
  }
  
  .mobile-drawer-title {
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) {
  .mobile-menu-btn {
    display: none !important;
  }
  
  .mobile-menu-overlay {
    display: none !important;
  }
}
</style> 