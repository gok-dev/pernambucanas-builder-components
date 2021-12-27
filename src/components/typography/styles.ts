import { DefaultTheme, css } from 'styled-components'
import { transparentize } from 'polished'
import { ITypographyColors, ITypographyMargins } from './types'

export const typographyColors = (
  color: ITypographyColors,
  theme: DefaultTheme
) => css`
  color: ${color === 'body'
    ? theme.colors.text.body
    : color === 'content'
    ? theme.colors.text.content
    : color === 'error'
    ? theme.colors.text.error
    : color === 'highlight'
    ? theme.colors.text.highlight
    : color === 'onContrast'
    ? theme.colors.text.onContrast
    : color === 'onPrymary'
    ? theme.colors.text.onPrymary
    : color === 'onSecondary'
    ? theme.colors.text.onSecondary
    : color === 'symbol'
    ? theme.colors.text.symbol
    : color === 'title'
    ? theme.colors.text.title
    : color === 'alert'
    ? theme.colors.text.alert
    : theme.colors.text.value};
`

export const typographyMark = (
  color: ITypographyColors,
  theme: DefaultTheme
) => css`
  background-color: ${color === 'body'
    ? transparentize(0.9, theme.colors.text.body)
    : color === 'content'
    ? transparentize(0.9, theme.colors.text.content)
    : color === 'error'
    ? transparentize(0.9, theme.colors.text.error)
    : color === 'highlight'
    ? transparentize(0.9, theme.colors.text.highlight)
    : color === 'onContrast'
    ? transparentize(0.9, theme.colors.text.onContrast)
    : color === 'onPrymary'
    ? transparentize(0.9, theme.colors.text.onPrymary)
    : color === 'onSecondary'
    ? transparentize(0.9, theme.colors.text.onSecondary)
    : color === 'symbol'
    ? transparentize(0.9, theme.colors.text.symbol)
    : color === 'title'
    ? transparentize(0.9, theme.colors.text.title)
    : color === 'alert'
    ? transparentize(0.9, theme.colors.text.alert)
    : transparentize(0.9, theme.colors.text.value)};
`

export const typographyMargins = (margin: ITypographyMargins) => css`
  margin-top: ${margin.top || margin.vertical}px;
  margin-bottom: ${margin.bottom || margin.vertical}px;
  margin-right: ${margin.right || margin.horizontal}px;
  margin-left: ${margin.left || margin.horizontal}px;
`
