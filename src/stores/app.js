import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)
  const theme = ref(localStorage.getItem('theme') || 'light')

  const isDarkMode = computed(() => theme.value === 'dark')

  function setLoading(loading) {
    isLoading.value = loading
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
  }

  return {
    isLoading,
    theme,
    isDarkMode,
    setLoading,
    toggleTheme
  }
}) 