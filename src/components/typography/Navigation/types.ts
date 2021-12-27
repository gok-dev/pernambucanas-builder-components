import { ITypographyColors, ITypographyMargins } from '../types'

export interface INavigation {
  variant?: 'medium'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
