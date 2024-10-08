export default function GroupIcon ({
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
            d='M4.027 3.654C4.569 3.203 5.254 3 6 3h12c.715 0 1.397.187 1.946.628.55.442.895 1.081 1.04 1.851l1.498 7.116a.75.75 0 0 1 .016.155v5.252A3.007 3.007 0 0 1 19.502 21H4.498A3.007 3.007 0 0 1 1.5 18.002V12.75a.75.75 0 0 1 .016-.155l1.499-7.118c.143-.738.471-1.375 1.012-1.823Zm.958 1.153c-.22.183-.407.482-.498.96a.838.838 0 0 1-.003.013L3 12.828v5.17A1.506 1.506 0 0 0 4.501 19.5H19.5A1.506 1.506 0 0 0 21 17.999v-5.17l-1.484-7.05a.558.558 0 0 1-.003-.017c-.091-.492-.285-.787-.506-.964-.225-.18-.55-.298-1.007-.298H6c-.473 0-.796.125-1.015.307Z'
            fill='#000'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 6.75Zm-.75 3A.75.75 0 0 1 6 9h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm-3.75 3a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 4.5 0A.75.75 0 0 1 15 12h6.75a.75.75 0 0 1 0 1.5h-6.076a3.75 3.75 0 0 1-7.348 0H2.25a.75.75 0 0 1-.75-.75Z'
            fill='#000'
          />
        </>)
        : (<>
          <path
            d='m22.484 12.595-1.5-7.116C20.694 3.927 19.58 3 18 3H6c-.787 0-1.453.22-1.973.653-.52.434-.862 1.046-1.012 1.823l-1.5 7.12a.78.78 0 0 0-.015.154V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-5.25a.78.78 0 0 0-.016-.155Zm-18-6.815v-.013C4.65 4.903 5.131 4.5 5.998 4.5H18c.872 0 1.353.4 1.513 1.261l.003.019 1.262 5.994a.188.188 0 0 1-.183.226H15a.746.746 0 0 0-.75.742 2.25 2.25 0 1 1-4.5 0A.747.747 0 0 0 9 12H3.405a.189.189 0 0 1-.182-.143.187.187 0 0 1-.001-.083L4.484 5.78Z'
            fill='#000'
          />
          <path
            d='M17.25 7.5H6.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 1 1 0 1.5Zm.75 3H6A.75.75 0 1 1 6 9h12a.75.75 0 1 1 0 1.5Z'
            fill='#000'
          />
        </>)
      }
    </svg>
  )
}
