import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Check: React.FC<SVGProps> = props => {
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
        d="M16 27.25c6.213 0 11.25-5.037 11.25-11.25S22.213 4.75 16 4.75 4.75 9.787 4.75 16 9.787 27.25 16 27.25z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 16l2.5 2.5 5-5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
