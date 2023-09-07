import { defineStore } from 'pinia'
import { setItem, getItem } from '@/utils/storage'

// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export const useAppStore = defineStore('app', () => {
  const sidebarExpand = ref(true)

  const toggleExpand = () => {
    sidebarExpand.value = !sidebarExpand.value
  }

  const language = ref(getItem('language') || 'zh-cn')

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == 'en') {
      return en
    } else {
      return zhCn
    }
  })

  /**
   * 切换语言
   */
  function changeLanguage(val: string) {
    language.value = val
    setItem('language', val)
  }

  return {
    sidebarExpand,
    toggleExpand,
    language,
    locale,
    changeLanguage,
  }
})
