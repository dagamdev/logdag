import GroupCard from '@/components/group-card'

const logGroups: LogGroup[] = [
  {
    id: '123123-sd',
    name: 'Primer grupo',
    createdAt: '2024-09-27T18:10:14.244Z',
    logsAmount: 12
  },
  {
    id: '123123-sd',
    name: 'Grupo de registros con descripcion larga',
    createdAt: '2024-09-27T18:10:14.244Z',
    logsAmount: 0,
    description: 'Esto es una descripcion larga de un grupo de registros.'
  }
]

export default function GroupsPage () {
  return (
    <main>
      <ol className='p-4 grid gap-y-4'>
        {logGroups.map(g => <GroupCard key={g.id} group={g} />)}
      </ol>
    </main>
  )
}
