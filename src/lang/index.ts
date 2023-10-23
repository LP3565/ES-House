import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

// 创建 i18n
const i18n = createI18n({
  // 默认语言
  locale: localStorage.getItem('LANG') || 'en',
  legacy: false,
  // 全局注入
  globalInjection: true,
  // 语言信息
  messages: {
    zh: zh,
    en: en
  }
})

export default i18n
