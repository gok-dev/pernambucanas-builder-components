import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Card: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 21 21"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.594 5.906H5.406C4.631 5.906 4 6.537 4 7.313v9.375c0 .775.63 1.406 1.406 1.406h13.188c.775 0 1.406-.631 1.406-1.407V7.313c0-.775-.63-1.406-1.406-1.406zm.468 10.782a.47.47 0 01-.468.468H5.406a.47.47 0 01-.468-.468v-6.094h14.125v6.094zm0-7.032H4.938V8.72h14.125v.937zm0-1.875H4.938v-.468a.47.47 0 01.47-.47h13.187a.47.47 0 01.468.47v.468z" />
      <path d="M7.844 14.344h-.938a.469.469 0 100 .937h.938a.469.469 0 100-.937zM10.719 14.344H9.78a.469.469 0 100 .937h.938a.469.469 0 000-.937z" />
    </svg>
  )
}
