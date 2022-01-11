import { SVGProps } from '../types'

export const WebMenu: React.FC<SVGProps> = props => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 22 22"
      stroke={props.color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22" height="22" rx="4" fill="#264FB0" />
      <rect x="4" y="6" width="15" height="2" rx="1" fill="white" />
      <rect x="4" y="10" width="15" height="2" rx="1" fill="white" />
      <rect x="4" y="14" width="15" height="2" rx="1" fill="white" />
    </svg>
  )
}
