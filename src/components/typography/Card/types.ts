import { MouseEventHandler } from 'react'

export interface ICard {
  width?: number
  hoverable?: boolean
  radius?: number
  padding?: number
  gray?: boolean
  margin?: ICardMargins
  onClick?: MouseEventHandler<HTMLElement>
}

export interface ICardMargins {
  horizontal?: number
  vertical?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}
