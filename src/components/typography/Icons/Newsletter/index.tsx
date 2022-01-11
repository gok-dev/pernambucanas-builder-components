import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Newsletter: React.FC<SVGProps> = props => {
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
        d="M5.955 5.955c.228-.227.536-.355.857-.355h8.125a1.212 1.212 0 011.213 1.212v.413h2.038A1.212 1.212 0 0119.4 8.437v8.938a2.025 2.025 0 01-2.025 2.025H8.437A2.838 2.838 0 015.6 16.563v-9.75c0-.322.128-.63.355-.858zM15.762 18.6H8.438A2.038 2.038 0 016.4 16.562v-9.75a.413.413 0 01.412-.412h8.125a.413.413 0 01.413.412v10.563c0 .445.146.875.412 1.225zm.388-10.575v9.35a1.225 1.225 0 102.45 0V8.437a.413.413 0 00-.413-.412H16.15z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.85 9.25c0-.22.18-.4.4-.4h3.25a.4.4 0 010 .8H9.25a.4.4 0 01-.4-.4zM8.85 12.5c0-.22.18-.4.4-.4h3.25a.4.4 0 010 .8H9.25a.4.4 0 01-.4-.4zM8.85 15.75c0-.22.18-.4.4-.4h3.25a.4.4 0 010 .8H9.25a.4.4 0 01-.4-.4z"
      />
    </svg>
  )
}
