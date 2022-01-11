import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Logout: React.FC<SVGProps> = props => {
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
        d="M4.074 5.407a3.667 3.667 0 012.593-1.074H16A3.666 3.666 0 0119.667 8v2.667a1 1 0 01-2 0V8A1.667 1.667 0 0016 6.333H6.667A1.667 1.667 0 005 8v16a1.667 1.667 0 001.667 1.667H16A1.666 1.666 0 0017.667 24v-2.667a1 1 0 112 0V24A3.666 3.666 0 0116 27.667H6.667A3.666 3.666 0 013 24V8c0-.972.386-1.905 1.074-2.593z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.293 11.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L25.586 17H9.333a1 1 0 110-2h16.253l-2.293-2.293a1 1 0 010-1.414z"
      />
    </svg>
  )
}
