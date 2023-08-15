import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'

const privateRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: {
      title: ' 用户管理',
      icon: 'user',
    },
    children: [
      {
        path: '/user/list',
        component: () => import('@/views/user/userList/index.vue'),
        meta: {
          title: '用户列表',
          icon: 'user-list',
        },
      },
    ],
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    meta: {
      title: '文章',
      icon: 'article',
    },
    children: [
      {
        path: '/article/list',
        component: () => import('@/views/article/articleList/index.vue'),
        meta: {
          title: '文章列表',
          icon: 'article-list',
        },
      },
    ],
  },
]

const publicRoutes = [
  {
    path: '/',
    redirect: '/demo',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'home',
    },
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
  routes: [...publicRoutes, ...privateRoutes],
})

export default router
