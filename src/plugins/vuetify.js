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
      cvocaDark: {
        dark: true,
        colors: {
          // Dark theme primary palette
          primary: '#3B82F6',
          'primary-container': '#1E3A8A',
          'on-primary': '#0F172A',
          'on-primary-container': '#DBEAFE',
          
          // Dark secondary palette
          secondary: '#8B5CF6',
          'secondary-container': '#5B21B6',
          'on-secondary': '#0F172A',
          'on-secondary-container': '#EDE9FE',
          
          // Dark tertiary
          tertiary: '#10B981',
          'tertiary-container': '#047857',
          'on-tertiary': '#0F172A',
          'on-tertiary-container': '#D1FAE5',
          
          // Dark surface system
          background: '#0F172A',
          surface: '#1E293B',
          'surface-variant': '#334155',
          'surface-container': '#475569',
          'surface-container-high': '#64748B',
          'surface-container-highest': '#94A3B8',
          
          // Dark text and content
          'on-surface': '#F8FAFC',
          'on-surface-variant': '#CBD5E1',
          'on-background': '#F8FAFC',
          
          // Dark outline and borders
          outline: '#475569',
          'outline-variant': '#64748B',
          
          // Dark semantic colors
          error: '#EF4444',
          'error-container': '#7F1D1D',
          'on-error': '#0F172A',
          'on-error-container': '#FEE2E2',
          
          success: '#10B981',
          'success-container': '#047857',
          'on-success': '#0F172A',
          'on-success-container': '#D1FAE5',
          
          warning: '#F59E0B',
          'warning-container': '#92400E',
          'on-warning': '#0F172A',
          'on-warning-container': '#FEF3C7',
          
          info: '#3B82F6',
          'info-container': '#1E40AF',
          'on-info': '#0F172A',
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