import { defineStore } from 'pinia'
import { loginApi } from '@/api/auth'
import { LoginData } from '@/api/auth/types'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'

export const useUserStore = defineStore('user', () => {
  const token = ref(getItem(TOKEN) || '')

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

  return { token, login }
})
