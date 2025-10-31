<template>
  <v-app>
    <AppHeader />
    <v-main>
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

/* Base Styles */
html, body, #app {
  background: var(--v-theme-background) !important;
  color: var(--v-theme-on-surface) !important;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; }
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; }

p { line-height: 1.6; color: var(--v-theme-on-surface-variant); }

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
}
.v-btn:hover { transform: translateY(-2px); }
.v-btn:active { transform: scale(0.96); }

.v-card {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--v-theme-outline);
}
.v-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

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