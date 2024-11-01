import AddForm from '@/components/add-form'
import type { AddType } from '@/types'
import Link from 'next/link'

export default function AddPage ({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const { type } = searchParams

  return (
    <>
      {type === undefined
        ? <div>
          <p>
            The search argument in the url <span>{type}</span> is not valid
            What type of element do you want to create?
          </p>
          <Link href='/add?type=log'>Log</Link>
          <Link href='/add?type=group'>Log group</Link>
        </div>
        : (type === 'log' || type === 'group') && <AddForm type={type as AddType} />
      }
    </>
  )
}
