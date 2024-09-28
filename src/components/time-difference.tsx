import { getTimeDifference } from '@/utils/methods'

export default function TimeDifference ({ logDate, nextLogDate }: {
  logDate: string
  nextLogDate: string
}) {
  return (
    <span className="text-muted-text text-sm relative flex gap-x-2 items-center before:flex-1 before:block before:content-[''] before:h-[1px] before:bg-current after:flex-1 after:block after:content-[''] after:h-[1px] after:bg-current">{getTimeDifference(logDate, nextLogDate)}</span>
  )
}
