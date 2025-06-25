import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { THEME_UTILS } from './constants'

// Theme utilities composable
export function useTheme() {
  const appStore = useAppStore()
  
  return {
    isDark: computed(() => appStore.isDarkMode),
    toggle: () => appStore.toggleTheme(),
    logoUrl: computed(() => THEME_UTILS.logoUrl(appStore.isDarkMode)),
    themeIcon: computed(() => THEME_UTILS.themeIcon(appStore.isDarkMode)),
    themeLabel: computed(() => THEME_UTILS.themeLabel(appStore.isDarkMode))
  }
}

// Scroll tracking composable
export function useScroll(threshold = 20) {
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }
  
  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
  
  return { isScrolled }
}

// Loading state composable
export function useLoading(initialState = false) {
  const isLoading = ref(initialState)
  
  const setLoading = (state) => {
    isLoading.value = state
  }
  
  const withLoading = async (asyncFn) => {
    setLoading(true)
    try {
      return await asyncFn()
    } finally {
      setLoading(false)
    }
  }
  
  return { 
    isLoading: computed(() => isLoading.value), 
    setLoading, 
    withLoading 
  }
}

// Active route checker
export function useActiveRoute() {
  const route = useRoute()
  
  const isActive = (path) => route.path === path
  const isActiveClass = (path, activeClass = 'active') => 
    isActive(path) ? activeClass : ''
  
  return { isActive, isActiveClass }
}

// Form validation utilities
export function useFormValidation() {
  const errors = ref({})
  
  const validateField = (field, value, rules = []) => {
    const fieldErrors = []
    
    for (const rule of rules) {
      const result = rule(value)
      if (result !== true) {
        fieldErrors.push(result)
      }
    }
    
    errors.value[field] = fieldErrors
    return fieldErrors.length === 0
  }
  
  const clearErrors = (field) => {
    if (field) {
      delete errors.value[field]
    } else {
      errors.value = {}
    }
  }
  
  const hasErrors = computed(() => 
    Object.keys(errors.value).some(key => errors.value[key].length > 0)
  )
  
  return {
    errors: computed(() => errors.value),
    validateField,
    clearErrors,
    hasErrors
  }
}

// Media queries composable
export function useBreakpoints() {
  const mobile = ref(false)
  const tablet = ref(false)
  const desktop = ref(false)
  
  const updateBreakpoints = () => {
    const width = window.innerWidth
    mobile.value = width < 768
    tablet.value = width >= 768 && width < 1024
    desktop.value = width >= 1024
  }
  
  onMounted(() => {
    updateBreakpoints()
    window.addEventListener('resize', updateBreakpoints)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints)
  })
  
  return {
    mobile: computed(() => mobile.value),
    tablet: computed(() => tablet.value),
    desktop: computed(() => desktop.value),
    isMobile: computed(() => mobile.value),
    isTablet: computed(() => tablet.value),
    isDesktop: computed(() => desktop.value)
  }
} 