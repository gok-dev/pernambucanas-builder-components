import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Safe: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 34"
      stroke={props.color || theme.colors.contrast.default}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.998 1.444c3.893 3.572 8.974 5.432 14.167 5.186a21.48 21.48 0 01.68 8.225 21.28 21.28 0 01-2.468 7.85 20.54 20.54 0 01-5.225 6.229 19.719 19.719 0 01-7.154 3.622 19.718 19.718 0 01-7.154-3.622 20.539 20.539 0 01-5.225-6.23 21.28 21.28 0 01-2.468-7.849 21.478 21.478 0 01.68-8.225c5.193.246 10.274-1.614 14.167-5.186"
        stroke="#2CBF59"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.998 16.998c.92 0 1.666-.773 1.666-1.728 0-.954-.746-1.728-1.666-1.728-.92 0-1.667.774-1.667 1.728 0 .955.746 1.729 1.667 1.729zM15.998 17v4.321"
        stroke="#2CBF59"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
