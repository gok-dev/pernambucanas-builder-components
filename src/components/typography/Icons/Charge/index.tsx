import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Charge: React.FC<SVGProps> = props => {
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
        d="M20.333 12.75c2.992 0 5.417-1.455 5.417-3.25s-2.425-3.25-5.417-3.25c-2.991 0-5.416 1.455-5.416 3.25s2.425 3.25 5.416 3.25z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.916 9.5v4.333c0 1.795 2.426 3.25 5.417 3.25 2.991 0 5.417-1.455 5.417-3.25V9.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.916 13.833v4.334c0 1.795 2.426 3.25 5.417 3.25 2.991 0 5.417-1.455 5.417-3.25v-4.334"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.916 18.167V22.5c0 1.795 2.426 3.25 5.417 3.25 2.991 0 5.417-1.455 5.417-3.25v-4.333M10.583 12.75H7.875a1.625 1.625 0 100 3.25h1.083a1.625 1.625 0 110 3.25H6.25M8.416 11.667v1.083m0 6.5v1.083-1.083z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
