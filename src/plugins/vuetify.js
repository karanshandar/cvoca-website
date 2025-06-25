import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'cvocaTheme',
    themes: {
      cvocaTheme: {
        dark: false,
        colors: {
          // Modern primary palette with gradient support
          primary: '#2563EB', // Modern blue
          'primary-container': '#DBEAFE',
          'on-primary': '#FFFFFF',
          'on-primary-container': '#1E40AF',
          
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
          
          warning: '#D97706',
          'warning-container': '#FEF3C7',
          'on-warning': '#FFFFFF',
          'on-warning-container': '#92400E',
          
          info: '#2563EB',
          'info-container': '#DBEAFE',
          'on-info': '#FFFFFF',
          'on-info-container': '#1E40AF',
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
      elevation: 3,
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