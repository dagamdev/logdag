'use client'

import LogCard from '@/components/log-card'
import api from '@/lib/client/api'
import { useLogsStore } from '@/stores/logs'
import { useEffect } from 'react'

export default function Home () {
  const logs = useLogsStore(store => store.logs)
  const setLogs = useLogsStore(store => store.setLogs)

  useEffect(() => {
    api.getAllLogs().then(res => {
      console.log(res.data)
      setLogs(res.data)
    }).catch(console.error)

    api.current().then(res => {
      console.log(res.data)
    }).catch(console.error)
  }, [setLogs])

  return (
    <ol className='grid gap-y-2'>
      {logs.map((log, i) => <LogCard key={log.id} log={log} nextLog={logs[i + 1]} />)}
    </ol>
  )
}
