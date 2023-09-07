import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import { createPinia } from 'pinia'
import './permission'
import i18n from '@/lang/index'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
