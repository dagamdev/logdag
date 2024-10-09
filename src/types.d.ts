export type AddType = 'log' | 'group'

export interface Credentials {
  email: string
  password: string
}

export interface CreateUserData extends Credentials {
  name: string
}
