import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const BellFilled: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 30 34"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0654 24.3096C27.5789 22.8362 25.7221 20.993 25.7221 13.8131C25.7217 11.3091 24.8297 8.88564 23.2033 6.96961C21.5769 5.05358 19.3204 3.76795 16.8313 3.33923L16.767 3.33073C16.989 3.01141 17.1185 2.63799 17.1417 2.25091C17.1649 1.86384 17.0807 1.47785 16.8984 1.13477C16.7161 0.791691 16.4426 0.50459 16.1074 0.304566C15.7722 0.104541 15.3883 -0.000781524 14.997 4.36607e-06C14.6058 0.000790256 14.2223 0.107655 13.8879 0.309024C13.5536 0.510393 13.2812 0.798591 13.1003 1.1424C12.9194 1.48621 12.8368 1.87253 12.8616 2.25951C12.8863 2.64649 13.0174 3.01939 13.2407 3.33781L13.2364 3.33073C8.12207 4.2006 4.27989 8.56128 4.27989 13.8131C4.27989 20.993 2.4274 22.8334 0.936551 24.3096C0.488641 24.756 0.183993 25.3238 0.0609613 25.9414C-0.0620706 26.559 0.00201391 27.199 0.245147 27.7806C0.488279 28.3622 0.899591 28.8595 1.4273 29.2099C1.955 29.5604 2.57551 29.7482 3.2107 29.7498H10.7136C10.7136 30.308 10.8245 30.8606 11.04 31.3763C11.2555 31.8919 11.5713 32.3605 11.9695 32.7552C12.3677 33.1498 12.8404 33.4629 13.3607 33.6765C13.881 33.8901 14.4386 34 15.0017 34C15.5648 34 16.1225 33.8901 16.6427 33.6765C17.163 33.4629 17.6357 33.1498 18.0339 32.7552C18.4321 32.3605 18.748 31.8919 18.9635 31.3763C19.179 30.8606 19.2899 30.308 19.2899 29.7498H26.7913C27.4262 29.7475 28.0462 29.5593 28.5735 29.2088C29.1008 28.8582 29.5117 28.3611 29.7547 27.7797C29.9978 27.1984 30.062 26.5588 29.9393 25.9414C29.8167 25.324 29.5127 24.7563 29.0654 24.3096ZM15.0003 31.3436C15.1424 31.3436 15.2788 31.3996 15.3793 31.4992C15.4798 31.5989 15.5363 31.734 15.5363 31.8749C15.5363 32.0158 15.4798 32.1509 15.3793 32.2506C15.2788 32.3502 15.1424 32.4062 15.0003 32.4062C14.2897 32.4054 13.6085 32.1253 13.106 31.6273C12.6036 31.1293 12.3209 30.4541 12.3202 29.7498H13.3922C13.393 30.1725 13.5628 30.5777 13.8646 30.8765C14.1663 31.1753 14.5752 31.3433 15.0017 31.3436H15.0003Z"
        fill="#1D3C85"
      />
    </svg>
  )
}