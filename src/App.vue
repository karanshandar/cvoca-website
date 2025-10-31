<template>
  <v-app>
    <!-- Accessibility: Skip to main content link -->
    <a href="#main-content" class="skip-to-main">
      Skip to main content
    </a>

    <AppHeader />
    <v-main id="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { PAGE_TITLES } from '@/utils/constants'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const route = useRoute()

// Page title watcher
watch(() => route.path, (path) => {
  document.title = PAGE_TITLES[path] || 'CVOCA'
}, { immediate: true })
</script>

<style>
/* Design System CSS Variables */
:root {
  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.15);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
}

/* Accessibility: Skip to main content link */
.skip-to-main {
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 999;
  display: block;
  padding: 1rem;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
}

.skip-to-main:focus {
  top: 0;
  left: 0;
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

/* Base Styles */
html, body, #app {
  background: var(--v-theme-background) !important;
  color: var(--v-theme-on-surface) !important;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  /* Prevent horizontal scrolling */
  overflow-x: hidden;
  max-width: 100vw;
}

/* Prevent horizontal scroll on containers */
.v-container,
.v-row {
  max-width: 100%;
}

/* Ensure images don't cause overflow */
img {
  max-width: 100%;
  height: auto;
}

/* Typography - Material You 3 Type Scale */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--v-theme-on-surface);
}

/* Display - Hero sections */
h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

/* Headline - Section titles */
h2 {
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Title - Card titles, subsections */
h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
}

h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
}

h5 {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  font-weight: 600;
}

h6 {
  font-size: 1rem;
  font-weight: 600;
}

/* Body text */
p {
  line-height: 1.6;
  color: var(--v-theme-on-surface-variant);
  font-size: 1rem;
  letter-spacing: 0.01em;
}

/* Label text */
.text-caption, .v-chip {
  letter-spacing: 0.03em;
  font-weight: 500;
}

/* Page Transitions - Material You 3 */
.page-enter-active {
  transition: opacity 0.35s cubic-bezier(0.2, 0, 0, 1),
              transform 0.35s cubic-bezier(0.2, 0, 0, 1);
}

.page-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1),
              transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; background: var(--v-theme-surface-variant); }
::-webkit-scrollbar-thumb {
  background: var(--v-theme-primary);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
}
::-webkit-scrollbar-thumb:hover { background: var(--v-theme-secondary); }

/* Focus Styles */
*:focus { outline: 2px solid var(--v-theme-primary); outline-offset: 2px; border-radius: var(--radius-sm); }
*:focus:not(:focus-visible) { outline: none; }

/* Enhanced Components - Material You 3 */
.v-btn {
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  /* Touch target accessibility - minimum 48x48px */
  min-height: 48px;
}
.v-btn:not(.v-btn--icon):not(.v-btn--size-x-small):not(.v-btn--size-small) {
  min-width: 48px;
}
.v-btn:hover { transform: translateY(-2px); }
.v-btn:active { transform: scale(0.96); }

.v-card {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--v-theme-outline);
  /* Uniform card styling - Material You 3 */
  border-radius: var(--radius-lg) !important;
}

.v-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Consistent card padding */
.v-card-text {
  padding: 1.5rem !important;
}

.v-card-title {
  padding: 1.5rem 1.5rem 0.5rem !important;
  font-weight: 700 !important;
}

.v-card-actions {
  padding: 0.75rem 1.5rem 1.5rem !important;
}

.v-text-field, .v-select, .v-textarea { transition: all var(--transition-fast); }
.v-text-field:focus-within, .v-select:focus-within, .v-textarea:focus-within { transform: translateY(-1px); }

/* Enhanced Components - Consolidated for reduced verbosity */
.v-chip {
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all var(--transition-fast);
}
.v-chip:hover { transform: scale(1.05); }

/* Global component enhancements - consolidated for reduced verbosity */
.v-alert:hover { transform: translateY(-1px); }
.v-list-item:hover { background: var(--v-theme-primary-container); transform: translateX(4px); }
.v-avatar:hover, .v-switch:hover, .v-checkbox:hover, .v-radio:hover { transform: scale(1.05); }
.v-badge:hover { transform: scale(1.1); }
.v-btn:hover .v-icon, .v-card:hover .v-icon { transform: scale(1.1); }

/* Accessibility & Performance - consolidated */
@media print { .v-app-bar, .v-footer, .v-navigation-drawer { display: none !important; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
</style> 