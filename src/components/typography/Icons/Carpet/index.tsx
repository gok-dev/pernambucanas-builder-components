import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Carpet: React.FC<SVGProps> = props => {
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
      <path
        d="M24.5 6h-4.839c.021-.456 0-.915-.111-1.362a4.721 4.721 0 00-3.1-3.349l-.139-.046A4.873 4.873 0 0014.731 1a4.738 4.738 0 00-3.905 2.053L2.274 15.316c-.13.166-.25.34-.363.52l-.061.089.005.004C1.315 16.829 1 17.877 1 19c0 3.309 2.691 6 6 6h6.5a.5.5 0 100-1h-.108l1.222-2h.886a.5.5 0 100-1h-.275l1.222-2H17.5a.5.5 0 100-1h-.442l1.223-2H19a.5.5 0 100-1h-.108l1.222-2H21a.5.5 0 100-1h-.275l1.222-2h.553a.495.495 0 00.052-.99L23.781 7h.719a.5.5 0 100-1zM11.649 3.622C12.347 2.606 13.498 2 14.812 2c.404 0 .801.064 1.183.192l.138.046a3.723 3.723 0 012.446 2.642c.244.976.08 2.026-.449 2.879l-6.172 9.826C11.743 15.025 9.615 13 7 13c-.77 0-1.505.151-2.182.417l6.83-9.795zM12.219 24H7c-2.757 0-5-2.243-5-5 0-.988.297-1.904.793-2.68l.175-.25C3.878 14.822 5.34 14 7 14c2.206 0 4 1.794 4 4s-1.794 4-4 4c-1.654 0-3-1.346-3-3s1.346-3 3-3c.135 0 .266.014.393.039l-.67.98A2.003 2.003 0 005 19c0 1.102.897 2 2 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.94 0 3.608-1.123 4.437-2.743l.017.01 7.524-11.979c.248-.4.41-.838.53-1.288h3.1L12.22 24zm-4.806-6.218l.888-1.3c.428.367.7.912.7 1.518 0 1.103-.898 2-2 2a1 1 0 01-.001-2c.165 0 .32-.082.413-.218z"
        stroke="#2485EA"
        strokeWidth={0.2}
      />
    </svg>
  )
}