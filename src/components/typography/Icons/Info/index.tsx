import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Info: React.FC<SVGProps> = props => {
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
      <path d="M15.884 12.042c-.63 0-1.077.266-1.077.658v5.326c0 .336.448.672 1.077.672.601 0 1.09-.336 1.09-.672V12.7c0-.392-.489-.658-1.09-.658zM15.884 8.757c-.643 0-1.146.461-1.146.992 0 .532.503 1.007 1.146 1.007.63 0 1.133-.475 1.133-1.007 0-.53-.504-.992-1.133-.992z" />
      <path d="M15.884 3C9.868 3 5 7.866 5 13.878c0 4.909 3.232 8.985 7.59 10.37l2.475 3.648a.99.99 0 001.638 0l2.475-3.648c4.36-1.385 7.59-5.463 7.59-10.37C26.768 7.862 21.896 3 15.884 3zm2.407 19.448a.99.99 0 00-.553.397l-1.854 2.733-1.854-2.733a.99.99 0 00-.553-.397c-3.709-1.038-6.498-4.449-6.498-8.57 0-4.907 3.995-8.9 8.905-8.9 4.91 0 8.905 3.993 8.905 8.9 0 4.125-2.793 7.534-6.498 8.57z" />
    </svg>
  )
}