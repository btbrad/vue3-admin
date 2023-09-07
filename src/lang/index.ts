import { createI18n } from 'vue-i18n'
import { getItem } from '@/utils/storage'
// import { useAppStore } from '@/store/app'

// const appStore = useAppStore()
// 本地语言包
import enLocale from './package/en'
import zhCnLocale from './package/zh-cn'

const messages = {
  'zh-cn': {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
}
// 创建 i18n 实例
const i18n = createI18n({
  legacy: false,
  locale: getItem('language') || 'zh-cn',
  messages: messages,
})
// 导出 i18n 实例
export default i18n
