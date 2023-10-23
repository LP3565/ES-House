import { createApp } from 'vue'
import { VueMasonryPlugin } from 'vue-masonry'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from '@/router/index'
import i18n from './lang'

// 初始化 pinia
const pinia = createPinia()

const app = createApp(App)
app.use(VueMasonryPlugin)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
