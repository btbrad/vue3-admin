import { defineStore } from 'pinia'
import { loginApi, userInfoApi } from '@/api/auth'
import { LoginData } from '@/api/auth/types'
import { setItem, getItem, removeAll } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import type { UserInfo } from './types'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  const token = ref(getItem(TOKEN) || '')

  const userInfo = ref<UserInfo>({})

  /**
   * 登录调用
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { data } = response
          token.value = data.token
          setItem(TOKEN, data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * 获取用户信息
   */
  const getUserInfo = () => {
    return new Promise<void>((resolve, reject) => {
      userInfoApi()
        .then((res) => {
          userInfo.value = res.data
          resolve()
        })
        .then((error) => {
          reject(error)
        })
    })
  }

  /**
   * 退出登录
   */
  const logout = () => {
    return new Promise<void>((resolve, reject) => {
      userInfo.value = {}
      token.value = ''
      removeAll()
      router.push('/login')
      resolve()
    })
  }

  return { token, login, userInfo, getUserInfo, logout }
})
