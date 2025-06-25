import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  function setLoading(loading) {
    isLoading.value = loading
  }

  return {
    isLoading,
    setLoading
  }
}) 