export type ButtonTypes = 'primary' | 'secondary' | 'disabled' | 'transparent'

export type SizeTypes = 'small' | 'medium' | 'large'

export interface UIModifiers {
  mode?: ButtonTypes
  size?: SizeTypes
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  mode: ButtonTypes
  size: SizeTypes
  disabled?: boolean
  icon?: React.ReactNode
  style?: React.CSSProperties
  action?: () => void
}
