import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Location: React.FC<SVGProps> = props => {
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
        d="M15.907 12.191a2.715 2.715 0 100 5.43 2.715 2.715 0 000-5.43zm-4.715 2.715a4.715 4.715 0 119.43 0 4.715 4.715 0 01-9.43 0z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.906 6a8.906 8.906 0 00-6.298 15.204m0 0l5.255 5.254a1.477 1.477 0 002.088 0l5.254-5.254A8.907 8.907 0 0015.907 6m7.712 16.618a10.905 10.905 0 10-15.425 0l5.256 5.255a3.478 3.478 0 004.914 0l5.255-5.255z"
      />
    </svg>
  )
}
