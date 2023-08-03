import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useUserStore } from '@/store/user'
import { removeAll } from '@/utils/storage'
import { useRouter } from 'vue-router'

const router = useRouter()

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data
    // 登录成功
    if (code === 200) {
      return response.data
    }
    ElMessage.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  (error: any) => {
    if (error.response.status === 401) {
      ElMessageBox.confirm('登录状态过期，请重新登录', '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'warning',
      }).then(() => {
        removeAll()
        router.push('/login')
      })
    }
    return Promise.reject(error.message)
  }
)

// 导出 axios 实例
export default service
