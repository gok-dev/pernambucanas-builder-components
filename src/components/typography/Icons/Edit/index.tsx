import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Edit: React.FC<SVGProps> = props => {
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
        d="M5.333 26.667h5.334l14-14a3.771 3.771 0 10-5.334-5.334l-14 14v5.334zM18 8.667L23.333 14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
