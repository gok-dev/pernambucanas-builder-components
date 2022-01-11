import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Sac: React.FC<SVGProps> = props => {
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
        d="M27.25 18.5l-3.75-3.75h-8.75a1.25 1.25 0 01-1.25-1.25V6a1.25 1.25 0 011.25-1.25H26A1.25 1.25 0 0127.25 6v12.5zM18.5 19.75v2.5a1.25 1.25 0 01-1.25 1.25H8.5l-3.75 3.75v-12.5A1.25 1.25 0 016 13.5h2.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
