import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Heart: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 25 22"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.186 2.056a5.042 5.042 0 00-4.051 8.627l.006.006 8.359 8.279 8.359-8.279a.993.993 0 01.072-.065 5.043 5.043 0 10-7.632-6.557 1 1 0 01-1.602-.005 5.043 5.043 0 00-3.511-2.006zm14.004 10.13l-8.986 8.9a1 1 0 01-1.408 0l-9.06-8.973a7.041 7.041 0 019.768-10.146 7.045 7.045 0 016.96-1.58 7.041 7.041 0 012.8 11.733 1.016 1.016 0 01-.074.065z"
      />
    </svg>
  )
}
