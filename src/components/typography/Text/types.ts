import { MouseEventHandler } from 'react'
import { ITypography } from '../types'

export interface IText extends ITypography {
  disabled?: boolean
  mark?: boolean
  code?: boolean
  underline?: boolean
  delete?: boolean
  strong?: boolean
  italic?: boolean
  link?: ITextLink
  variant?: ITextVariants
  onClick?: MouseEventHandler<HTMLParagraphElement>
}

export interface ITextLink {
  href: string
  target?: string
  title?: string
}

export type ITextVariants = 'small' | 'medium' | 'large'
