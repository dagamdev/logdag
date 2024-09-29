export default function Button ({ children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className='bg-accent p-2 w-full max-w-screen-md rounded-md font-semibold'
    >
      {children}
    </button>
  )
}
