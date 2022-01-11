import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Phone: React.FC<SVGProps> = props => {
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
        d="M8.235 6h4.47l2.236 5.588-2.794 1.677a12.294 12.294 0 005.588 5.588l1.677-2.794L25 18.294v4.47A2.235 2.235 0 0122.765 25 17.882 17.882 0 016 8.235 2.235 2.235 0 018.235 6M19.412 11.588L25 6M20.53 6H25v4.47"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
