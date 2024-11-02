export function setToken (name: string, value: string) {
  document.cookie = `${name}=${value}`
  return true
}

export function getToken () {
  console.log(document.cookie.split(';').find(s => s.includes('token=')))
  const token = document.cookie.split(';').find(s => s.includes('token='))?.replace('token=', '')
  console.log('getToken: ', { token })
  return token ?? ''
}
