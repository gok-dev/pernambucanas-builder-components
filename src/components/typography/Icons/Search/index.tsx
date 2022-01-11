import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Search: React.FC<SVGProps> = props => {
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
        d="M13.333 5a8.333 8.333 0 100 16.667 8.333 8.333 0 000-16.667zM3 13.333C3 7.626 7.626 3 13.333 3s10.334 4.626 10.334 10.333-4.627 10.334-10.334 10.334S3 19.04 3 13.333z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.293 19.293a1 1 0 011.414 0l8 8a1 1 0 01-1.414 1.414l-8-8a1 1 0 010-1.414z"
      />
    </svg>
  )
}
