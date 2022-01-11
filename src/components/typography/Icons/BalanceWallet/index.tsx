import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const BalanceWallet: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 15 12"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="3" width="14.2883" height="2" fill="white" />
      <path
        d="M13.6531 0H1.31561C0.590182 0 0 0.578273 0 1.28906V9.88281C0 10.5936 0.590182 11.1719 1.31561 11.1719H13.6531C14.3785 11.1719 14.9687 10.5936 14.9687 9.88281V1.28906C14.9687 0.578273 14.3785 0 13.6531 0ZM14.0916 9.88281C14.0916 10.1197 13.8949 10.3125 13.6531 10.3125H1.31561C1.0738 10.3125 0.877072 10.1197 0.877072 9.88281V4.29688H14.0916V9.88281ZM14.0916 4.29688H0.877072V1.71875H14.0916V4.29688ZM14.0916 1.71875H0.877072V1.28906C0.877072 1.05213 1.0738 0.859375 1.31561 0.859375H13.6531C13.8949 0.859375 14.0916 1.05213 14.0916 1.28906V1.71875Z"
        fill="white"
      />
    </svg>
  )
}
