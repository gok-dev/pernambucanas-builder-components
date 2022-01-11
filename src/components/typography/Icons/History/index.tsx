import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const History: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 6.667a1 1 0 011 1v4.419l2.124 2.124a1 1 0 01-1.414 1.414l-2.417-2.417a1 1 0 01-.293-.707V7.667a1 1 0 011-1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.997 4.953a9.875 9.875 0 00-16.317 6.44 1 1 0 11-1.99-.203 11.875 11.875 0 111.995 7.882v3.095a1 1 0 11-2 0v-6.042a1 1 0 011-1h.581a.9.9 0 01.047 0h5.414a1 1 0 110 2h-3.89a9.875 9.875 0 1015.16-12.172z"
      />
    </svg>
  )
}
