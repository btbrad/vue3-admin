import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'

const publicRoutes = [
  {
    path: '/',
    redirect: '/demo',
    component: Layout,
    children: [
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/demo/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
})

export default router
