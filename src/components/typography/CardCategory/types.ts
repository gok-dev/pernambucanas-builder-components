import { ICardMargins } from '../Card/types'
import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  MouseEventHandler,
  ReactNode
} from 'react'

export interface ICardCategory {
  title: string
  withIcon?: boolean
  icon?: ReactNode
  withImage?: boolean
  largeImage?: boolean
  margin?: ICardMargins
  image?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  onClick?: MouseEventHandler<HTMLElement>
}

export interface ICardCategoryTitle {
  maxWidth?: number
}

export interface ICardCategoryImage {
  largeImage?: boolean
  radius?: number
}
