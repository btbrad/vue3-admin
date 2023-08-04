import router from '@/router/index'
import { useUserStore } from '@/store/user'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (userStore.token) {
    // 已登录
    console.log(to.path)
    if (to.path === '/login') {
      next('/')
    } else {
      if (!Object.keys(userStore.userInfo).length) {
        userStore.getUserInfo()
      }
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
