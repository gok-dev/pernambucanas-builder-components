import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const Beauty: React.FC<SVGProps> = props => {
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
      <path d="M1.988 4.29h1.824a.599.599 0 100-1.197H1.988a.599.599 0 100 1.198zM3.388 2.312a.599.599 0 00.848-.846L2.946.176a.6.6 0 00-.848.847l1.29 1.29zM3.388 5.067l-1.29 1.29a.6.6 0 10.847.847l1.29-1.29a.599.599 0 10-.847-.847zM18.231.606h-1.216a1.79 1.79 0 00-1.683 1.195h-4.29V.599A.6.6 0 0010.443 0H7.78a.599.599 0 00-.599.599v3.002h-.56a.599.599 0 00-.598.6v3.212h-.123a.599.599 0 00-.599.599v2.555A9.15 9.15 0 00.35 16.35c0 .004-.003.008-.004.012a9.096 9.096 0 003.028 9.555.6.6 0 00.377.134H14.47a.6.6 0 00.377-.134 9.1 9.1 0 003.111-9.248 9.15 9.15 0 00-5.037-6.101V8.011a.597.597 0 00-.598-.6H12.2V4.2a.6.6 0 00-.599-.6h-.56v-.598h4.29a1.79 1.79 0 001.683 1.194h1.216a1.794 1.794 0 000-3.587V.606zm-9.72 10.346v5.238c-.316.115-.636.237-.963.373a6.762 6.762 0 01-5.916-.3 7.928 7.928 0 016.88-5.31zm5.742 13.898H3.97a7.89 7.89 0 01-2.645-7.404 8.347 8.347 0 003.61.852 7.934 7.934 0 003.075-.63c.17-.07.336-.135.503-.2v4.838a.599.599 0 101.198 0v-5.258c2.833-.885 5.23-.83 7.145.167a7.91 7.91 0 01-2.601 7.636v-.001zm2.122-9.147c-1.909-.67-4.139-.642-6.664.09v-4.84a7.928 7.928 0 016.664 4.752v-.002zM9.111 9.73c-.885 0-1.765.13-2.613.384V8.61h5.226v1.502a9.082 9.082 0 00-2.613-.384zM7.22 7.413V4.799h3.782v2.614H7.22zM8.378 3.6V1.198h1.466v2.403H8.378zm9.853-.606h-1.216a.596.596 0 010-1.19h1.216a.595.595 0 010 1.19z" />
    </svg>
  )
}