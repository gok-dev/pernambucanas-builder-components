import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const CardPnb: React.FC<SVGProps> = props => {
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
      <mask
        id="icon-card-pb_svg__a"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={6}
        width={28}
        height={21}
      >
        <path fill="#fff" d="M2 6h27.451v20.588H2z" />
      </mask>
      <g mask="url(#icon-card-pb_svg__a)">
        <path fill="#F7DB16" d="M3.356 8.059H27.65v16.059H3.356z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.188 25.412c.615.617 1.45.963 2.322.96v.001h20.43a3.299 3.299 0 003.294-3.294V9.482a3.273 3.273 0 00-.969-2.302 3.274 3.274 0 00-2.324-.962H5.513A3.298 3.298 0 002.22 9.512v13.573a3.267 3.267 0 00.97 2.327zm1.09-15.9c0-.683.552-1.236 1.235-1.236v-.002h20.426c.327 0 .641.13.872.36.233.232.363.546.363.873v13.57a1.238 1.238 0 01-1.24 1.235H5.512c-.326 0-.64-.13-.87-.36a1.23 1.23 0 01-.364-.876V9.512z"
          fill="#132177"
        />
        <path
          d="M28.204 15.062H3.248a1.03 1.03 0 010-2.059h24.956a1.03 1.03 0 010 2.06z"
          fill="#132177"
        />
      </g>
    </svg>
  )
}
