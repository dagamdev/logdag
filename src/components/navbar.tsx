'use client'

import AddCircleIcon from '@/icons/add-circle'
import GroupIcon from '@/icons/group'
import HomeIcon from '@/icons/home'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar () {
  const pathname = usePathname()

  return (
    <nav className='fixed bottom-0 bg-primary flex w-full justify-between shadow-inner py-3 px-5'>
      <Link href={'/'}>
        <HomeIcon className='size-7' iconStyle={pathname === '/' ? 'fill' : 'outline'} />
      </Link>
      <Link href={`/add?type=${pathname.includes('/groups') ? 'group' : 'log'}`}>
        <AddCircleIcon className='size-7' iconStyle={pathname.includes('/add') ? 'fill' : 'outline'} />
      </Link>
      <Link href={'/groups'}>
        <GroupIcon className='size-7' iconStyle={pathname.includes('/groups') ? 'fill' : 'outline'} />
      </Link>
    </nav>
  )
}
