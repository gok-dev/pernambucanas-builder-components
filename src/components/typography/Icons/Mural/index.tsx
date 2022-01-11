import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Mural: React.FC<SVGProps> = props => {
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
      <path d="M18.578 7.832h-1.505v-1.41A.422.422 0 0016.651 6H5.422A.422.422 0 005 6.422V17.46c0 .764.622 1.386 1.386 1.386h11.228c.764 0 1.386-.622 1.386-1.386V8.254a.422.422 0 00-.422-.422zM5.845 6.845h10.384V17.46c0 .192.039.375.11.541H6.386a.542.542 0 01-.541-.54V6.844zM17.615 18a.542.542 0 01-.542-.54V8.676h1.082v8.783a.542.542 0 01-.54.541z" />
      <path d="M6.826 11.454h8.421c.234 0 .423-.189.423-.422V8.209a.422.422 0 00-.423-.423h-8.42a.422.422 0 00-.423.423v2.823c0 .233.189.422.422.422zm.423-2.823h7.576v1.978H7.249V8.631zM6.826 17.007h3.678c.234 0 .423-.19.423-.423v-3.678a.422.422 0 00-.423-.423H6.826a.422.422 0 00-.422.423v3.678c0 .234.189.423.422.423zm.423-3.679h2.833v2.834H7.249v-2.834zM15.247 12.483H11.69a.422.422 0 100 .845h3.557a.422.422 0 100-.845zM15.247 16.162H11.69a.423.423 0 000 .845h3.557a.422.422 0 100-.845zM15.247 14.323H11.69a.422.422 0 100 .844h3.557a.422.422 0 100-.844z" />
    </svg>
  )
}
