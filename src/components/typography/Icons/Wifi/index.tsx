import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Wifi: React.FC<SVGProps> = props => {
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
        d="M15.543 21.667h.013M11.772 17.896a5.333 5.333 0 017.541 0M8 14.124a10.666 10.666 0 0115.085 0"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
