import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Calendar: React.FC<SVGProps> = props => {
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
        d="M7.667 7.667C6.747 7.667 6 8.413 6 9.333v16C6 26.253 6.746 27 7.667 27h16c.92 0 1.666-.746 1.666-1.667v-16c0-.92-.746-1.666-1.666-1.666h-16zM4 9.333a3.667 3.667 0 013.667-3.666h16a3.667 3.667 0 013.666 3.666v16A3.667 3.667 0 0123.667 29h-16A3.667 3.667 0 014 25.333v-16z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3a1 1 0 011 1v5.333a1 1 0 11-2 0V4a1 1 0 011-1zM10.334 3a1 1 0 011 1v5.333a1 1 0 11-2 0V4a1 1 0 011-1zM4 14.667a1 1 0 011-1h21.333a1 1 0 110 2H5a1 1 0 01-1-1zM9.334 20a1 1 0 011-1H13a1 1 0 011 1v2.667a1 1 0 01-1 1h-2.666a1 1 0 01-1-1V20zm2 1v.667H12V21h-.666z"
      />
    </svg>
  )
}
