import { relativeTime } from '@/utils/methods'
import TimeDifference from './time-difference'

export default function LogCard ({ log, nextLog }: {
  log: Log
  nextLog?: Log
}) {
  return (
    <>
      <article className='bg-primary rounded-lg p-3 shadow-md'>
        <header className='flex justify-between gap-x-4'>
          <h2 className='font-bold'>{log.title}</h2>
          <time dateTime={log.eventDate} className='font-semibold text-secondary-text text-xs'>{relativeTime(log.eventDate)}</time>
        </header>
        {log.description !== undefined && <p className='mt-2 text-secondary-text'>{log.description}</p>}
      </article>
      {nextLog !== undefined && <TimeDifference logDate={log.eventDate} nextLogDate={nextLog.eventDate} />}
    </>
  )
}
