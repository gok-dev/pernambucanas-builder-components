import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const ControlPanel: React.FC<SVGProps> = props => {
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
        d="M6.792 6.5a.292.292 0 00-.292.292v11.086c0 .161.13.292.292.292h11.086c.161 0 .292-.13.292-.292V6.792a.292.292 0 00-.292-.292H6.792zM5.5 6.792c0-.714.578-1.292 1.292-1.292h11.086c.714 0 1.292.578 1.292 1.292v11.086c0 .714-.578 1.292-1.292 1.292H6.792A1.292 1.292 0 015.5 17.878V6.792z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 9.168a.5.5 0 01.5-.5h12.67a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.167 5.5a.5.5 0 01.5.5v3.168a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"
      />
    </svg>
  )
}
