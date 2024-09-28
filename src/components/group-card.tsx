export default function GroupCard ({ group }: { group: LogGroup }) {
  return (
    <article className='bg-primary rounded-md shadow-md py-2 px-3'>
      <header className='flex gap-x-2 justify-between'>
        <h2 className='font-bold'>{group.name}</h2>
        <span className='font-semibold text-accent'>{group.logsAmount}</span>
      </header>
      {group.description !== undefined && <p className='text-secondary-text text-sm mt-2'>{group.description}</p>}
    </article>
  )
}
