import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Tips: React.FC<SVGProps> = props => {
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
        d="M10.737 12.192a.65.65 0 01.65-.65h9.647a.65.65 0 010 1.3h-9.647a.65.65 0 01-.65-.65zM10.737 17.666a.65.65 0 01.65-.65h5.542a.65.65 0 110 1.3h-5.542a.65.65 0 01-.65-.65zM10.737 14.929a.65.65 0 01.65-.65h8.279a.65.65 0 110 1.3h-8.28a.65.65 0 01-.65-.65z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.421 4.2H10a.8.8 0 00-.8.8v22a.8.8 0 00.8.8h12.421a.8.8 0 00.8-.8V5a.8.8 0 00-.8-.8zM10 3a2 2 0 00-2 2v22a2 2 0 002 2h12.421a2 2 0 002-2V5a2 2 0 00-2-2H10z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.037 7.3v1.505h8.347V7.3h-8.347zm-.3-1.3a1 1 0 00-1 1v2.105a1 1 0 001 1h8.947a1 1 0 001-1V7a1 1 0 00-1-1h-8.947z"
      />
    </svg>
  )
}
