import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Bag: React.FC<SVGProps> = props => {
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
      <path d="M22.406 24.204L20.802 6.15a.772.772 0 00-.767-.705h-3.298A5.536 5.536 0 0011.206 0a5.536 5.536 0 00-5.532 5.445H2.376c-.4 0-.733.304-.767.705L.006 24.204c0 .023-.006.046-.006.068C0 26.328 1.884 28 4.203 28h14.006c2.319 0 4.203-1.672 4.203-3.728 0-.022 0-.045-.006-.068zm-11.2-22.658a3.99 3.99 0 013.985 3.9h-7.97a3.99 3.99 0 013.985-3.9zm7.003 24.908H4.203c-1.455 0-2.634-.962-2.657-2.147l1.535-17.31h2.588v2.348c0 .43.343.773.773.773a.77.77 0 00.773-.773V6.997h7.976v2.348c0 .43.344.773.773.773a.77.77 0 00.773-.773V6.997h2.588l1.54 17.31c-.022 1.185-1.208 2.147-2.656 2.147z" />
    </svg>
  )
}
