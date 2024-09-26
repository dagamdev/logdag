export default function AddCircleIcon ({
  iconStyle,
  ...props
}: SVGIconComponent) {
  return (
    <svg
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {iconStyle !== 'fill'
        ? (<>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.25 12c0-5.383 4.367-9.75 9.75-9.75s9.75 4.367 9.75 9.75-4.367 9.75-9.75 9.75S2.25 17.383 2.25 12ZM12 3.75A8.252 8.252 0 0 0 3.75 12 8.252 8.252 0 0 0 12 20.25 8.252 8.252 0 0 0 20.25 12 8.252 8.252 0 0 0 12 3.75Z'
            fill='#000'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 7.5a.75.75 0 0 1 .75.75v3h3a.75.75 0 0 1 0 1.5h-3v3a.75.75 0 0 1-1.5 0v-3h-3a.75.75 0 0 1 0-1.5h3v-3A.75.75 0 0 1 12 7.5Z'
            fill='#000'
          />
        </>)
        : (<path
          d='M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.75 10.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 1 1 1.5 0v3h3a.75.75 0 1 1 0 1.5Z'
          fill='#000'
        />)
      }
    </svg>
  )
}
