import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Eye: React.FC<SVGProps> = props => {
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
        d="M15.621 18.36a2.524 2.524 0 100-5.05 2.524 2.524 0 000 5.05z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.243 15.835c-3.366 5.89-7.573 8.835-12.622 8.835-5.048 0-9.255-2.945-12.621-8.835C6.366 9.945 10.573 7 15.621 7c5.049 0 9.256 2.945 12.622 8.835z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
