import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Star: React.FC<SVGProps> = props => {
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
      <path d="M20.631 7.156a1.455 1.455 0 00-.886-.473v-.001l-5.342-.738L12.29.892a1.45 1.45 0 00-2.678 0L7.497 5.944l-5.342.738a1.455 1.455 0 00-.768 2.528l4.025 3.589-.827 5.632c-.09.572.174 1.142.667 1.445.486.311 1.111.3 1.585-.03l4.113-2.796 4.113 2.8a1.452 1.452 0 002.252-1.416l-.827-5.634 4.025-3.59c.6-.534.653-1.454.118-2.054zm-5.388 4.832a.718.718 0 00-.232.64l.862 6.03-4.517-3.07a.718.718 0 00-.807 0L6.005 18.64l.884-6.014a.718.718 0 00-.232-.638L2.35 8.106l5.749-.793a.718.718 0 00.564-.434l2.296-5.443a.032.032 0 01.005.01l2.272 5.43c.098.234.313.4.565.434l5.756.828-4.314 3.85z" />
    </svg>
  )
}
