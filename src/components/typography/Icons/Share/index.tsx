import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Share: React.FC<SVGProps> = props => {
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
        d="M10.25 19.625a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM22.75 13.375a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM22.75 25.875a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM13.063 15.146l6.874-3.542M13.063 17.854l6.874 3.542"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
