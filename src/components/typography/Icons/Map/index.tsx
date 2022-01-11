import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Map: React.FC<SVGProps> = props => {
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
        d="M23 9v.013M23 17.167l-4.083-5.834a4.666 4.666 0 118.166 0L23 17.167z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 7.542l-1.75-.875-7 3.5v15.166l7-3.5 7 3.5 7-3.5V19.5M12.5 6.667v15.166M19.5 19.5v5.833"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
