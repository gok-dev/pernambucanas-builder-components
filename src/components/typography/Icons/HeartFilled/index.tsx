import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const HeartFilled: React.FC<SVGProps> = props => {
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
      <path d="M22.19 12.185l-8.986 8.9a1 1 0 01-1.408 0l-9.06-8.972a7.042 7.042 0 019.768-10.146 7.045 7.045 0 016.96-1.58 7.041 7.041 0 012.8 11.733 1.016 1.016 0 01-.074.065z" />
    </svg>
  )
}
