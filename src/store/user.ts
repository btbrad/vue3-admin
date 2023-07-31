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
          // @ts-expect-error no error
          const { token: accessToken } = response
          token.value = accessToken as string
          setItem(TOKEN, accessToken)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return { token, login }
})
