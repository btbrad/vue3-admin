import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { LoginData, LoginResult } from './types'

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/auth/login',
    method: 'post',
    data: data,
  })
}

/**
 * 获取用户信息
 */
export function userInfoApi(): AxiosPromise {
  return request({
    url: '/user/info',
    method: 'get',
  })
}
