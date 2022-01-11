import { SVGProps } from '../types'

export const AlertSuccess: React.FC<SVGProps> = props => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.15}
        d="M70 35c0 19.33-15.67 35-35 35S0 54.33 0 35 15.67 0 35 0s35 15.67 35 35z"
        fill="url(#AlertSuccess_svg__paint0_linear_466_9710)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 20.875c-8.353 0-15.125 6.772-15.125 15.125S27.647 51.125 36 51.125 51.125 44.353 51.125 36 44.353 20.875 36 20.875zM18.125 36c0-9.872 8.003-17.875 17.875-17.875S53.875 26.128 53.875 36 45.872 53.875 36 53.875 18.125 45.872 18.125 36z"
        fill="#2CBF59"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.472 31.361a1.375 1.375 0 010 1.945l-7.333 7.333a1.375 1.375 0 01-1.945 0l-3.666-3.667a1.375 1.375 0 011.944-1.944l2.695 2.694 6.36-6.361a1.375 1.375 0 011.945 0z"
        fill="#2CBF59"
      />
      <defs>
        <linearGradient
          id="AlertSuccess_svg__paint0_linear_466_9710"
          x1={35}
          y1={13.5}
          x2={35}
          y2={70}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2CBF59" />
          <stop offset={1} stopColor="#2CBF59" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
