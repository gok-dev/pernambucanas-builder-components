import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Smile: React.FC<SVGProps> = props => {
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
        d="M16 25a9 9 0 100-18 9 9 0 000 18zM13 14h.01M19 14h.01M13.5 19a3.5 3.5 0 005 0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
