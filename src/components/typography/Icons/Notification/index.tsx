import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Notification: React.FC<SVGProps> = props => {
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
        d="M15.882 5.865a1.554 1.554 0 00-1.555 1.539.937.937 0 01-.552.867 7.772 7.772 0 00-4.422 6.633v3.708a.934.934 0 01-.007.112 5.907 5.907 0 01-1.031 2.686h15.133a5.907 5.907 0 01-1.03-2.686.934.934 0 01-.008-.112v-3.708a7.772 7.772 0 00-4.44-6.641.933.933 0 01-.534-.843 1.555 1.555 0 00-1.554-1.555zm-3.367.956a3.42 3.42 0 016.733 0 9.637 9.637 0 015.028 8.06v3.672a4.041 4.041 0 002.014 2.978.933.933 0 01-.46 1.745H5.933a.933.933 0 01-.46-1.745 4.042 4.042 0 002.014-2.978v-3.672l.001-.043a9.638 9.638 0 015.026-8.017z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.151 21.41c.515 0 .933.418.933.933v1.244a2.798 2.798 0 105.596 0v-1.244a.933.933 0 011.865 0v1.244a4.663 4.663 0 11-9.327 0v-1.244c0-.515.418-.933.933-.933z"
      />
    </svg>
  )
}
