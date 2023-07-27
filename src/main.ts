import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.mount('#app')
