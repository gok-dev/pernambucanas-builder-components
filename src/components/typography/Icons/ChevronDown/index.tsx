/* eslint-disable react/no-unknown-property */
import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const ChevronDown: React.FC<SVGProps> = props => {
  const theme = useTheme()

  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 9 9"
      fill="none"
      stroke={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1 1.25 3.5 3.5L8 1.25"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
