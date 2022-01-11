import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Email: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      stroke={props.color || theme.colors.contrast.default}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.556 7H7.444A2.444 2.444 0 005 9.444v12.223a2.444 2.444 0 002.444 2.444h17.112A2.444 2.444 0 0027 21.667V9.444A2.444 2.444 0 0024.556 7z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9.444l11 7.334 11-7.334"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
