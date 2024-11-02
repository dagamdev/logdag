export function setToken (name: string, value: string) {
  document.cookie = `${name}=${value}`
  return true
}

export function getToken () {
  const token = document.cookie.split(';').find(s => s.includes('token='))?.replace('token=', '').trim()
  console.log('getToken: ', { token })
  return token ?? ''
}
