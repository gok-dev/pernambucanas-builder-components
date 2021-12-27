import { ITypographyColors, ITypographyMargins } from '../types'

export interface IHeader {
  variant?: 'light'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
