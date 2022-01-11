import { SVGProps } from '../types'

export const AlertWarning: React.FC<SVGProps> = props => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 70 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.7}
        d="M28.902 3.52c2.71-4.694 9.486-4.694 12.196 0l27.948 48.408c2.71 4.695-.677 10.562-6.098 10.562H7.052c-5.42 0-8.808-5.867-6.098-10.562L28.902 3.522z"
        fill="url(#alert_svg__paint0_linear_466_9682)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 29.125c.76 0 1.375.616 1.375 1.375v6a1.375 1.375 0 11-2.75 0v-6c0-.76.616-1.375 1.375-1.375zm0 11c.76 0 1.375.616 1.375 1.375v.018a1.375 1.375 0 11-2.75 0V41.5c0-.76.616-1.375 1.375-1.375z"
        fill="#F6A037"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.42 18.765a5.042 5.042 0 016.965 1.89l13.01 22.447c.033.056.061.114.085.174a5.043 5.043 0 01-4.638 6.932H22.166c-.034 0-.067 0-.1-.003a1.371 1.371 0 01-.173.002 5.042 5.042 0 01-4.411-6.933c.024-.059.052-.116.084-.172l13.01-22.447a5.042 5.042 0 011.844-1.89zM22.065 47.462a1.41 1.41 0 01.1-.004h25.662a2.292 2.292 0 002.135-3.07L37 22.023l-.014-.024a2.292 2.292 0 00-4.01 0l-.014.024L20 44.388a2.291 2.291 0 002.066 3.074z"
        fill="#F6A037"
      />
      <defs>
        <linearGradient
          id="alert_svg__paint0_linear_466_9682"
          x1={35}
          y1={-63.957}
          x2={35}
          y2={59.263}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6A037" />
          <stop offset={1} stopColor="#F6A037" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
