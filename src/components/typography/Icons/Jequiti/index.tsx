import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Jequiti: React.FC<SVGProps> = props => {
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
      <path fill="url(#icon-jequiti_svg__pattern0)" d="M0 0h32v32H0z" />
      <defs>
        <pattern
          id="icon-jequiti_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#icon-jequiti_svg__image0_22_404"
            transform="matrix(.007 0 0 .007 0 .36)"
          />
        </pattern>
        <image
          id="icon-jequiti_svg__image0_22_404"
          width={143}
          height={40}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}