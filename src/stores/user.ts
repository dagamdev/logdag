import { create } from 'zustand'

interface State {
  user?: User
}

interface Actions {
  setUser: (user?: User) => void
}

export const useUserStore = create<State & Actions>(set => ({
  setUser (user) {
    set({ user })
  }
}))
