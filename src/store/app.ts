import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const sidebarExpand = ref(true)

  const toggleExpand = () => {
    sidebarExpand.value = !sidebarExpand.value
  }

  return {
    sidebarExpand,
    toggleExpand,
  }
})
