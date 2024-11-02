import axios from 'axios'
import type { CreateUserData } from '@/types'
import { API_URL } from '@/utils/constants'

const authRoutes = ['current', 'users', 'logs']

export function generateApi (getToken: () => string) {
  const axiosInstance = axios.create({
    baseURL: API_URL

  })

  axiosInstance.interceptors.request.use(config => {
    if (authRoutes.some(route => config.url?.includes(route))) {
      const token = getToken()
      console.log('Axios request interceptor: ', { token })
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }, async error => {
    console.error(error)
    return Promise.reject(error)
  })

  return {
    async login (credentials: Record<'email' | 'password', string>) {
      return await axiosInstance.post<{ user: User, token: string }>('auth/login', credentials)
    },
    async register (data: CreateUserData) {
      return await axiosInstance.post<User>('auth/register', data)
    },
    async getAllLogs () {
      return await axiosInstance.get<Log[]>('logs')
    },
    async current () {
      return await axiosInstance.get<{
        id: string
        name: string
        email: string
      }>('auth/current')
    }
  }
}
