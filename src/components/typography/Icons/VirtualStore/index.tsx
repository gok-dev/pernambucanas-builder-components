import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const VirtualStore: React.FC<SVGProps> = props => {
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
        d="M8.5 27.25a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22.25 27.25a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22.25 22.25H8.5V4.75H6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 7.25L26 8.5l-1.25 8.75H8.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
