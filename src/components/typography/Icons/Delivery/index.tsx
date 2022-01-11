import { SVGProps } from '../types'

export const Delivery: React.FC<SVGProps> = props => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 26 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.875 2.734a2.02 2.02 0 00-1.787-1.068H17.25v3.795c0 .422.371.764.794.764h5.698l-1.868-3.49zM5.474 17.936a2.426 2.426 0 100-4.853 2.426 2.426 0 000 4.853zM19.192 13.083a2.426 2.426 0 102.426 2.426 2.43 2.43 0 00-2.426-2.426z"
      fill="#2CBF59"
      fillOpacity={0.5}
    />
    <path
      d="M25.563 8.81l-1.255-1.6h-6.263c-.966 0-1.78-.783-1.78-1.75V.795a.714.714 0 00-.739-.73H.786C.363.064 0 .371 0 .794v13.489c0 .422.363.753.786.753h1.308a3.411 3.411 0 016.76 0h6.957a3.411 3.411 0 016.76 0h2.643c.423 0 .786-.33.786-.753v-4.227a2.048 2.048 0 00-.437-1.247z"
      fill="#2CBF59"
    />
  </svg>
)
