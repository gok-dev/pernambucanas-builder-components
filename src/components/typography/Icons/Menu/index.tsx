import { SVGProps } from '../types'

export const Menu: React.FC<SVGProps> = props => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 23 17"
      fill={props.color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.625" width="22" height="3.3" rx="1.65" fill="#383838" />
      <rect
        x="0.625"
        y="6.6001"
        width="22"
        height="3.3"
        rx="1.65"
        fill="#383838"
      />
      <rect
        x="0.625"
        y="13.2002"
        width="22"
        height="3.3"
        rx="1.65"
        fill="#383838"
      />
    </svg>
  )
}
