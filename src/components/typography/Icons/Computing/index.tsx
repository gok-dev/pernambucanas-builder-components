import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Computing: React.FC<SVGProps> = props => {
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
      <path d="M23.015 12.732h-1.469V1.959A1.96 1.96 0 0019.587 0H3.917A1.96 1.96 0 001.96 1.959v10.773H.489a.49.49 0 00-.489.49v.49a1.96 1.96 0 001.959 1.958h19.587a1.96 1.96 0 001.959-1.959v-.49a.49.49 0 00-.49-.49zM2.938 1.959c0-.54.44-.98.98-.98h15.67c.54 0 .979.44.979.98v10.773H2.938V1.959zM21.546 14.69H1.96a.98.98 0 01-.98-.98h8.122l.347.346a.49.49 0 00.346.144h3.917a.49.49 0 00.346-.144l.347-.346h8.122c0 .54-.44.98-.98.98z" />
    </svg>
  )
}
