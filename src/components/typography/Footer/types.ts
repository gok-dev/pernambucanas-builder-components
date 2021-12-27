import { ITypographyColors, ITypographyMargins } from '../types'

export interface IFooter {
  variant?: 'regular' | 'medium'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
