import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Whatsapp: React.FC<SVGProps> = props => {
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
        d="M18.499 4.392A10 10 0 003.834 17.759a1 1 0 01.1.974L2.66 21.668l4.337-.773a1 1 0 01.615.086 10 10 0 0010.887-16.59zM.884 23.972a.994.994 0 00.305-.01l5.845-1.042a12 12 0 10-5.152-4.483L.088 22.568A.995.995 0 00.215 23.6c.163.206.403.343.669.374z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.806 7.173a1.611 1.611 0 012.75 1.14v1.222a1.611 1.611 0 01-1 1.49 5.11 5.11 0 003.398 3.399 1.612 1.612 0 011.49-1h1.223a1.611 1.611 0 110 3.222h-1.222a7.111 7.111 0 01-7.111-7.111V8.313c0-.428.17-.837.472-1.14z"
      />
    </svg>
  )
}
