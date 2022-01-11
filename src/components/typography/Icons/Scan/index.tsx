import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Scan: React.FC<SVGProps> = props => {
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
        d="M8 6.333A1.667 1.667 0 006.333 8v1.333a1 1 0 11-2 0V8A3.667 3.667 0 018 4.333h2.667a1 1 0 110 2H8zM5.333 21.667a1 1 0 011 1V24A1.667 1.667 0 008 25.667h2.667a1 1 0 110 2H8A3.666 3.666 0 014.333 24v-1.333a1 1 0 011-1zM20.333 5.333a1 1 0 011-1H24A3.667 3.667 0 0127.667 8v1.333a1 1 0 11-2 0V8A1.666 1.666 0 0024 6.333h-2.667a1 1 0 01-1-1zM26.667 21.667a1 1 0 011 1V24A3.667 3.667 0 0124 27.667h-2.667a1 1 0 110-2H24A1.667 1.667 0 0025.667 24v-1.333a1 1 0 011-1zM5.667 16a1 1 0 011-1h18.666a1 1 0 010 2H6.667a1 1 0 01-1-1z"
      />
    </svg>
  )
}
