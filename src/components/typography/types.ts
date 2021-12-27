export interface ITypography {
  customColor?: string
  color?: ITypographyColors
  margin?: ITypographyMargins
  size?: number
  weight?: 300 | 400 | 500 | 700
  children: React.ReactNode
}

export interface ITypographyMargins {
  horizontal?: number
  vertical?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export type ITypographyColors =
  | 'highlight'
  | 'title'
  | 'body'
  | 'content'
  | 'symbol'
  | 'alert'
  | 'value'
  | 'onPrymary'
  | 'onSecondary'
  | 'onContrast'
  | 'error'
  | 'success'
