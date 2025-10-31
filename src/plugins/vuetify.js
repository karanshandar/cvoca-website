import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          // Modern primary palette with gradient support (WCAG AA compliant)
          primary: '#1E40AF', // Darker blue for better contrast
          'primary-container': '#DBEAFE',
          'on-primary': '#FFFFFF',
          'on-primary-container': '#1E3A8A', // Darker for better contrast

          // Enhanced secondary palette
          secondary: '#7C3AED', // Modern purple
          'secondary-container': '#EDE9FE',
          'on-secondary': '#FFFFFF',
          'on-secondary-container': '#5B21B6',

          // Tertiary accent
          tertiary: '#059669', // Modern green
          'tertiary-container': '#D1FAE5',
          'on-tertiary': '#FFFFFF',
          'on-tertiary-container': '#047857',

          // Surface and background system
          background: '#FAFAFA',
          surface: '#FFFFFF',
          'surface-variant': '#F8FAFC',
          'surface-container': '#F1F5F9',
          'surface-container-high': '#E2E8F0',
          'surface-container-highest': '#CBD5E1',

          // Text and content
          'on-surface': '#0F172A',
          'on-surface-variant': '#475569',
          'on-background': '#0F172A',

          // Outline and borders
          outline: '#E2E8F0',
          'outline-variant': '#CBD5E1',

          // Semantic colors
          error: '#DC2626',
          'error-container': '#FEE2E2',
          'on-error': '#FFFFFF',
          'on-error-container': '#991B1B',

          success: '#059669',
          'success-container': '#D1FAE5',
          'on-success': '#FFFFFF',
          'on-success-container': '#047857',

          warning: '#B45309', // Darker orange for better contrast (WCAG AA)
          'warning-container': '#FEF3C7',
          'on-warning': '#FFFFFF',
          'on-warning-container': '#78350F',

          info: '#1E40AF', // Match primary for consistency and better contrast
          'info-container': '#DBEAFE',
          'on-info': '#FFFFFF',
          'on-info-container': '#1E3A8A',
        },
        variables: {
          'border-radius-root': '16px',
          'border-radius-extra-small': '4px',
          'border-radius-small': '8px',
          'border-radius-medium': '12px',
          'border-radius-large': '16px',
          'border-radius-extra-large': '24px',
          'border-radius-pill': '9999px',
        },
      },
      dark: {
        dark: true,
        colors: {
          // Modern primary palette for dark theme
          primary: '#60A5FA', // Lighter blue for dark theme
          'primary-container': '#1E3A8A',
          'on-primary': '#0C1E3F',
          'on-primary-container': '#DBEAFE',

          // Enhanced secondary palette
          secondary: '#A78BFA', // Lighter purple for dark theme
          'secondary-container': '#5B21B6',
          'on-secondary': '#1E1B4B',
          'on-secondary-container': '#EDE9FE',

          // Tertiary accent
          tertiary: '#34D399', // Lighter green for dark theme
          'tertiary-container': '#065F46',
          'on-tertiary': '#022C22',
          'on-tertiary-container': '#D1FAE5',

          // Surface and background system for dark mode
          background: '#0F172A',
          surface: '#1E293B',
          'surface-variant': '#334155',
          'surface-container': '#475569',
          'surface-container-high': '#64748B',
          'surface-container-highest': '#94A3B8',

          // Text and content for dark mode
          'on-surface': '#F1F5F9',
          'on-surface-variant': '#CBD5E1',
          'on-background': '#F1F5F9',

          // Outline and borders
          outline: '#475569',
          'outline-variant': '#334155',

          // Semantic colors for dark mode
          error: '#F87171',
          'error-container': '#7F1D1D',
          'on-error': '#450A0A',
          'on-error-container': '#FEE2E2',

          success: '#34D399',
          'success-container': '#065F46',
          'on-success': '#022C22',
          'on-success-container': '#D1FAE5',

          warning: '#FBBF24',
          'warning-container': '#78350F',
          'on-warning': '#451A03',
          'on-warning-container': '#FEF3C7',

          info: '#60A5FA',
          'info-container': '#1E3A8A',
          'on-info': '#0C1E3F',
          'on-info-container': '#DBEAFE',
        },
        variables: {
          'border-radius-root': '16px',
          'border-radius-extra-small': '4px',
          'border-radius-small': '8px',
          'border-radius-medium': '12px',
          'border-radius-large': '16px',
          'border-radius-extra-large': '24px',
          'border-radius-pill': '9999px',
        },
      },
    },
  },
  defaults: {
    global: {
      ripple: true,
      elevation: 2,
      rounded: 'lg',
    },
    VCard: {
      elevation: 2, // Material You 3 standard elevation
      rounded: 'xl',
    },
    VBtn: {
      rounded: 'lg',
      elevation: 2,
    },
    VTextField: {
      rounded: 'lg',
    },
    VSelect: {
      rounded: 'lg',
    },
  },
  blueprint: 'md3', // Enable Material Design 3 (Material You)
}) 