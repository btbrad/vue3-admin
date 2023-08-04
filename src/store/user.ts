import { defineStore } from 'pinia'
import { loginApi, userInfoApi } from '@/api/auth'
import { LoginData } from '@/api/auth/types'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import type { UserInfo } from './types'

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

  return { token, login, userInfo, getUserInfo }
})
