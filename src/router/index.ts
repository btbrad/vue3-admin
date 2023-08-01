import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
