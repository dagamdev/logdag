import { create } from 'zustand'

const logGroups: LogGroup[] = [
  {
    id: '123123-sd',
    name: 'Primer grupo',
    createdAt: '2024-09-27T18:10:14.244Z',
    logsAmount: 12
  },
  {
    id: '1-lks23123-sd',
    name: 'Grupo de registros con descripcion larga',
    createdAt: '2024-09-27T18:10:14.244Z',
    logsAmount: 0,
    description: 'Esto es una descripcion larga de un grupo de registros.'
  }
]

interface State {
  groups: LogGroup[]
}

interface Actions {
  addGroup: (newGroupData: Omit<LogGroup, 'id' | 'logsAmount'>) => void
  removeGroup: (groupId: string) => void
}

export const useGroupsStore = create<State & Actions>(set => ({
  groups: logGroups,
  addGroup (newGroupData) {
    set(state => ({
      groups: [
        ...state.groups,
        {
          id: crypto.randomUUID(),
          logsAmount: 0,
          ...newGroupData
        }
      ]
    }))
  },
  removeGroup (groupId) {
    set(state => ({
      groups: state.groups.filter(group => group.id !== groupId)
    }))
  }
}))
