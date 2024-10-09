import axios from 'axios'
import { getCookieToken } from '@/utils/methods'
import type { CreateUserData } from '@/types'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1/'
const secureApi = axios.create()

secureApi.interceptors.request.use(config => {
  const token = getCookieToken()
  config.headers.Authorization = `Bearer ${token}`
  return config
}, async error => {
  console.error(error)
  return Promise.reject(error)
})

const api = {
  async login (credentials: Record<'email' | 'password', string>) {
    return await axios.post<{ user: User, token: string }>('auth/login', credentials)
  },
  async register (data: CreateUserData) {
    return await axios.post<User>('auth/register', data)
  },
  async getAllLogs () {
    return await secureApi.get<Log[]>('logs')
  }
}

export default api
