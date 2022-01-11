import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const GiftList: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.333 11.667A.333.333 0 005 12v2.667c0 .184.15.333.333.333h21.334c.184 0 .333-.15.333-.333V12a.333.333 0 00-.333-.333H5.333zM3 12a2.333 2.333 0 012.333-2.333h21.334A2.333 2.333 0 0129 12v2.667A2.333 2.333 0 0126.667 17H5.333A2.333 2.333 0 013 14.667V12z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9.667a1 1 0 011 1V28a1 1 0 11-2 0V10.667a1 1 0 011-1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.667 15a1 1 0 011 1v9.333A1.666 1.666 0 009.333 27h13.334a1.667 1.667 0 001.666-1.667V16a1 1 0 112 0v9.333A3.667 3.667 0 0122.667 29H9.333a3.667 3.667 0 01-3.666-3.667V16a1 1 0 011-1zM12.874 6.46c-.928-1.03-1.928-1.476-2.857-1.46H10a2.333 2.333 0 000 4.667 1 1 0 010 2A4.334 4.334 0 019.991 3c1.641-.026 3.159.777 4.37 2.122.637.708 1.187 1.562 1.639 2.52.452-.958 1.002-1.812 1.64-2.52C18.85 3.777 20.368 2.974 22.009 3A4.333 4.333 0 0122 11.667a1 1 0 010-2A2.333 2.333 0 1022 5h-.017c-.929-.016-1.929.43-2.857 1.46-.932 1.036-1.7 2.572-2.154 4.442a1 1 0 01-1.944 0c-.454-1.87-1.222-3.406-2.154-4.442z"
      />
    </svg>
  )
}
