import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const UserLogout: React.FC<SVGProps> = props => {
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
        d="M9 2a4.333 4.333 0 100 8.667A4.333 4.333 0 009 2zM2.667 6.333a6.333 6.333 0 1112.666 0 6.333 6.333 0 01-12.666 0zM6.333 18A4.333 4.333 0 002 22.333V25a1 1 0 11-2 0v-2.667A6.333 6.333 0 016.333 16h5.334A6.333 6.333 0 0118 22.333V25a1 1 0 11-2 0v-2.667A4.333 4.333 0 0011.667 18H6.333zM18.96 8.293a1 1 0 011.414 0l1.96 1.96 1.959-1.96a1 1 0 111.414 1.414l-1.96 1.96 1.96 1.96a1 1 0 11-1.414 1.413l-1.96-1.96-1.96 1.96a1 1 0 11-1.413-1.414l1.96-1.96-1.96-1.959a1 1 0 010-1.414z"
      />
    </svg>
  )
}
