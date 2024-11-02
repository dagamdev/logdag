'use client'

import LogCard from '@/components/log-card'
import { getToken } from '@/lib/client'
import api from '@/lib/client/api'
import { useLogsStore } from '@/stores/logs'
import { API_URL } from '@/utils/constants'
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
      console.log('with axios: ', res.data)
    }).catch(console.error)

    fetch(`${API_URL}auth/current`, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }).then(async res => res.json()).then(data => { console.log('onli fetch: ', data) }).catch(console.error)
  }, [setLogs])

  return (
    <ol className='grid gap-y-2'>
      {logs.map((log, i) => <LogCard key={log.id} log={log} nextLog={logs[i + 1]} />)}
    </ol>
  )
}
