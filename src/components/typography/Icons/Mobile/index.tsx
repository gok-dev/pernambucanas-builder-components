import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Mobile: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill={props.color || theme.colors.contrast.default}
      stroke={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.282 1H2.945A1.947 1.947 0 001 2.945v20.23a1.947 1.947 0 001.945 1.945h9.337a1.947 1.947 0 001.945-1.945V2.945A1.947 1.947 0 0012.282 1zm1.167 22.175a1.168 1.168 0 01-1.167 1.167H2.945a1.168 1.168 0 01-1.167-1.167V2.945a1.168 1.168 0 011.167-1.167h1.237L4.51 3.41a.39.39 0 00.381.313h5.447a.389.389 0 00.381-.313l.327-1.632h1.237a1.168 1.168 0 011.167 1.167v20.23z"
        strokeWidth={0.2}
      />
    </svg>
  )
}
