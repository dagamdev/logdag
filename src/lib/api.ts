import type { User, CreateUserData } from '@/types'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1/'

export async function register (data: CreateUserData) {
  return await axios.post<User>('auth/register', data)
}
