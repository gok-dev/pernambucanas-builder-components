import { DetailedHTMLProps, ImgHTMLAttributes, MouseEventHandler } from 'react'
import { ICardMargins } from '../Card/types';

export interface ICardProduct {
  image: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  favoritable?: boolean
  isFavorite?: boolean
  isDiscount?: boolean
  prevAmount?: number
  parcel?: number
  amount: number
  margin?: ICardMargins
  isDelivery?: boolean
  title: string
  highlightText?: string
  favoriteAction?: MouseEventHandler<HTMLButtonElement>
  onClick?: MouseEventHandler<HTMLElement>
}
