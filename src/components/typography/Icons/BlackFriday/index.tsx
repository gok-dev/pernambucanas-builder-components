import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const BlackFriday: React.FC<SVGProps> = props => {
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
      <rect width={32} height={32} rx={6} fill="#000" />
      <path
        d="M6.143 23V10.203h4.482c1.553 0 2.73.299 3.533.897.803.591 1.204 1.462 1.204 2.61 0 .627-.16 1.18-.483 1.661-.322.475-.77.823-1.345 1.046.656.164 1.172.495 1.547.993.38.498.571 1.108.571 1.828 0 1.23-.392 2.162-1.177 2.795s-1.905.955-3.358.967H6.143zm2.636-5.572v3.454h2.26c.62 0 1.104-.147 1.45-.44.35-.298.527-.709.527-1.23 0-1.172-.607-1.767-1.82-1.784H8.78zm0-1.864h1.951c1.33-.023 1.996-.553 1.996-1.59 0-.58-.17-.997-.51-1.248-.334-.258-.864-.387-1.591-.387H8.779v3.226zm16.559 2.206h-5.063V23H17.64V10.203h8.332v2.136h-5.696v3.305h5.063v2.126z"
        fill="#fff"
      />
    </svg>
  )
}
