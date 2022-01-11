import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const PreferredStore: React.FC<SVGProps> = props => {
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
        d="M5.857 11.597v7.65h11.812v-7.65H5.857zm-.527-.753a.226.226 0 00-.226.226v8.704c0 .125.101.226.226.226h12.866a.226.226 0 00.226-.226V11.07a.226.226 0 00-.226-.226H5.33z"
        fill="#80848A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.857 19.247v-7.65h11.812v7.65H5.857zm-.753-8.177c0-.125.101-.226.226-.226h12.866c.125 0 .226.101.226.226v8.704a.226.226 0 01-.226.226H5.33a.226.226 0 01-.226-.226V11.07z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.221 5.009a.15.15 0 01.2.142v4.63a.15.15 0 01-.15.151H5.151c-.17 0-.21-.236-.05-.293l13.12-4.63zm-9.553 4.17l9-3.177V9.18h-9z"
        fill="#80848A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.221 5.009a.15.15 0 01.2.142v4.63a.15.15 0 01-.15.151H5.151c-.17 0-.21-.236-.05-.293l13.12-4.63zm-.552.993V9.18h-9l9-3.177z"
      />
    </svg>
  )
}
