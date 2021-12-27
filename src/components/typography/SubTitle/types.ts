import { ITypographyColors, ITypographyMargins } from '../types'

export interface ISubTitle {
  variant?: 'medium'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
