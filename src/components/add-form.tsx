'use client'

import { useLogsStore } from '@/stores/logs'
import type { AddType } from '@/types'
import { type FormEvent } from 'react'
import Button from './button'
import { useGroupsStore } from '@/stores/groups'
import { useRouter } from 'next/navigation'

export default function AddForm ({ type }: { type: AddType }) {
  // const addLog = useLogsStore(store => store.addLog)
  const groups = useGroupsStore(store => store.groups)
  // const router = useRouter()

  console.log('Add form')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    let description = formData.get('description')?.toString()
    if (description === '') description = undefined

    // if (type === 'log') {
    //   const title = formData.get('title')?.toString() ?? ''
    //   let eventDate = formData.get('eventDate')?.toString() ?? ''
    //   if (eventDate === undefined || eventDate === '') eventDate = new Date().toJSON()
    //   console.log({ title, description, eventDate })

    //   addLog({
    //     title,
    //     eventDate,
    //     description
    //   })

    //   router.push('/')
    // } else {
    //   const name = formData.get('groupName')?.toString() ?? ''
    //   console.log({ name, description })

    //   addGroup({
    //     name,
    //     createdAt: new Date().toJSON(),
    //     description
    //   })

    //   router.push('/groups')
    // }
  }

  return (
    <form
      className='bg-primary rounded-lg px-4 py-5 space-y-4'
      onSubmit={handleSubmit}
    >
      <h2 className='font-bold text-xl'>Add a new {type}</h2>

      <fieldset className='grid gap-y-2'>
        <label>
          <span className='block font-medium text-sm text-muted-text mb-1 ml-1'>{type === 'log' ? 'Title' : 'Name'}</span>
          <input
            className='w-full bg-secondary py-2 px-3 rounded-md'
            type="text" name={type === 'log' ? 'title' : 'groupName'} placeholder={'My ' + type} required
          />
        </label>
        <label>
          <span className='block font-medium text-sm text-muted-text mb-1 ml-1'>Description</span>
          <textarea
            className='bg-secondary w-full py-2 px-3 rounded-md h-auto resize-none'
            name="description" id="description" placeholder='Description of the log'
          ></textarea>
        </label>
        {type === 'log' && <label>
          <span className='block font-medium text-sm text-muted-text mb-1 ml-1'>Event date</span>
          <select name="group">
            {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
          </select>
        </label>}
        {type === 'log' && <label>
          <span className='block font-medium text-sm text-muted-text mb-1 ml-1'>Event date</span>
          <input
            className='w-full bg-secondary py-2 px-3 rounded-md'
            type='datetime-local' name='eventDate' defaultValue={Math.floor(new Date().getTime() / 1000)}
          />
        </label>}
      </fieldset>

      <Button>Create</Button>
    </form>
  )
}
