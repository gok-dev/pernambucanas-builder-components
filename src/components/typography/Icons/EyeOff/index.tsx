import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const EyeOff: React.FC<SVGProps> = props => {
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
        d="M5.625 4.625l21.75 21.75M14.788 13.793a2.417 2.417 0 103.418 3.42"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.313 7.483a11.438 11.438 0 013.186-.441c4.833 0 8.86 2.819 12.083 8.458-.94 1.645-1.947 3.05-3.024 4.215m-2.586 2.248c-1.97 1.33-4.126 1.995-6.473 1.995-4.833 0-8.86-2.819-12.083-8.458 1.654-2.894 3.52-5.045 5.597-6.454"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
