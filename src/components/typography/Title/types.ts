import { ITypographyColors, ITypographyMargins } from '../types'

export interface ITitle {
  variant?: 'bold' | 'medium'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
