import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Board: React.FC<SVGProps> = props => {
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
      <path d="M.38 5.962a.447.447 0 01.509.376l1.283 8.556h3.099l.064-1.49h-.129a.447.447 0 01-.446-.466l.155-3.574a.447.447 0 01.447-.428h3.723V7.37a1.343 1.343 0 01-.893-1.264V4.617c0-.247.2-.447.446-.447h1.788c.246 0 .446.2.446.447v1.49c0 .582-.373 1.079-.893 1.263v1.566h2.383V4.617c0-.748.504-1.38 1.191-1.576V.447a.447.447 0 01.894 0V3.04a1.641 1.641 0 011.191 1.576v4.32h2.383V7.37a1.343 1.343 0 01-.893-1.264V4.617c0-.247.2-.447.446-.447h1.788c.246 0 .447.2.447.447v1.49c0 .582-.374 1.079-.894 1.263v1.566h3.723c.24 0 .436.189.447.428l.155 3.574a.447.447 0 01-.446.466h-.13l.065 1.49h3.099l1.283-8.556a.447.447 0 11.884.132l-1.335 8.904v9.498a.447.447 0 11-.894 0v-7.298h-2.92l.239 5.491a.447.447 0 01-.447.467c-.552 0-.982-.075-1.34-.184v1.524a.447.447 0 11-.894 0v-1.914a31.623 31.623 0 01-.141-.078c-.437-.24-.825-.453-1.497-.519v2.511a.447.447 0 01-.894 0v-2.51c-.672.065-1.06.278-1.497.519-.553.305-1.18.65-2.375.65s-1.822-.345-2.376-.65c-.436-.241-.824-.454-1.496-.52v2.511a.447.447 0 11-.894 0v-2.51c-.672.065-1.06.278-1.497.519l-.141.077v1.914a.447.447 0 11-.894 0v-1.524c-.358.11-.788.184-1.34.184a.447.447 0 01-.447-.466l.24-5.492h-2.92v7.298a.447.447 0 11-.895 0v-9.498L.005 6.47a.447.447 0 01.376-.509zm22.427 10.719h2.959v-.894h-2.998l.04.894zM9.98 5.064h-.894v1.042a.447.447 0 00.894 0V5.064zm4.766-.447a.746.746 0 00-1.49 0v4.32h1.49v-4.32zm4.17.447h-.894v1.042a.447.447 0 00.894 0V5.064zM7.59 13.404H6.23l-.4 9.212c.66-.068 1.043-.28 1.475-.518.554-.305 1.18-.651 2.376-.651 1.195 0 1.822.346 2.375.651.526.29.98.54 1.944.54s1.418-.25 1.944-.54c.553-.305 1.18-.651 2.375-.651s1.822.346 2.376.651c.124.069.244.135.369.197a3.06 3.06 0 001.107.32l-.4-9.21H9.377a.447.447 0 110-.894h12.949L22.21 9.83H5.79l-.117 2.68H7.59a.447.447 0 110 .894zm-5.357 3.277h2.959l.039-.894H2.234v.894z" />
    </svg>
  )
}