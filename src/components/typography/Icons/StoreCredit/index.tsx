import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const StoreCredit: React.FC<SVGProps> = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.667 5.6A1.067 1.067 0 006.6 6.667v12.212l1.567-1.045a.6.6 0 01.757.075l1.243 1.242 1.242-1.242a.6.6 0 01.849 0l1.242 1.242 1.242-1.242a.6.6 0 01.757-.075l1.568 1.045V6.667A1.067 1.067 0 0016 5.6H7.667zm-1.603-.536A2.267 2.267 0 017.667 4.4H16a2.267 2.267 0 012.267 2.267V20a.6.6 0 01-.933.5l-2.09-1.395-1.32 1.32a.6.6 0 01-.848 0l-1.243-1.243-1.242 1.242a.6.6 0 01-.849 0l-1.318-1.319L6.333 20.5A.6.6 0 015.4 20V6.667c0-.601.239-1.178.664-1.603z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.833 7.317a.6.6 0 01.6.6v.65H13.5a.6.6 0 110 1.2h-2.083a.65.65 0 100 1.3h.833a1.85 1.85 0 01.183 3.69v.66a.6.6 0 01-1.2 0v-.65h-1.066a.6.6 0 110-1.2h2.083a.65.65 0 000-1.3h-.833a1.85 1.85 0 01-.184-3.691v-.66a.6.6 0 01.6-.6z"
      />
    </svg>
  )
}
