import { z } from 'zod'

export const loginModel = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const registerModel = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6)
})
