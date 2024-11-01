'use client'

import GroupCard from '@/components/group-card'
import { useGroupsStore } from '@/stores/groups'

export default function GroupsPage () {
  const logGroups = useGroupsStore(store => store.groups)

  return (
    <ol className='grid gap-y-4'>
      {logGroups.map(g => <GroupCard key={g.id} group={g} />)}
    </ol>
  )
}
