import { create } from 'zustand'

interface State {
  logs: Log[]
}

interface Actions {
  setLogs: (logs: Log[]) => void
  addLog: (newLogData: Omit<Log, 'id'>) => void
  removeLog: (logId: string) => void
}

type Store = State & Actions

export const useLogsStore = create<Store>(set => ({
  logs: [],
  setLogs (logs) {
    set({ logs })
  },
  addLog (newLogData) {
    console.log(newLogData)
    set(state => ({
      logs: [
        ...state.logs,
        {
          id: crypto.randomUUID(),
          ...newLogData
        }
      ]
    }))
  },
  removeLog (logId) {
    set(state => ({
      logs: state.logs.filter(log => log.id !== logId)
    }))
  }
}))
