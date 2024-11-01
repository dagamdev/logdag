'use client'

import { type FormEvent } from 'react'
import Button from './button'
import api from '@/lib/api'
import { setCookieToken } from '@/utils/methods'

export default function AuthForm ({ login }: { login?: boolean }) {
  const isLogin = login ?? false

  console.log(document.cookie)

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const email = formData.get('email')?.toString() ?? ''
    const password = formData.get('password')?.toString() ?? ''

    console.log({ email, password })

    try {
      if (isLogin) {
        const res = await api.login({ email, password })
        console.log(res.data)
        setCookieToken('token', res.data.token)
      } else {
        const name = formData.get('user-name')?.toString() ?? ''
        const confirmPassword = formData.get('user-name')?.toString() ?? ''
        console.log({ name, confirmPassword })
        const res = await api.register({
          name,
          email,
          password
        })
        console.log(res.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      <fieldset className='flex flex-col'>
        {(!isLogin) && <label>
          <span>Name</span>
          <input type='text' name='user-name' required />
        </label>}
        <label>
          <span>Email</span>
          <input type='email' name='email' required defaultValue={'dagamdev@gmail.com'} />
        </label>
        <label>
          <span>Password</span>
          <input type='password' name='password' required defaultValue={'dagamdev'} />
        </label>
        {(!isLogin) && <label>
          <span>Repeat password</span>
          <input type='password' name='repeat-password' />
        </label>}
      </fieldset>

      <Button>{isLogin ? 'Log In' : 'Register'}</Button>
    </form>
  )
}
