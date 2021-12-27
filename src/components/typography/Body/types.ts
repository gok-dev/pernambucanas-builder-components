import { ITypographyColors, ITypographyMargins } from '../types'

export interface IBody {
  variant?: 'regular'
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  children: React.ReactNode
}
