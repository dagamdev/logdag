import { MAX_AGE_COOKIE } from '@/utils/constants'

export function setToken (name: string, value: string) {
  document.cookie = `${name}=${value};max-age=${+MAX_AGE_COOKIE}`
  return true
}

export function getToken () {
  const token = document.cookie.split(';').find(s => s.includes('token='))?.replace('token=', '')
  return token ?? ''
}
