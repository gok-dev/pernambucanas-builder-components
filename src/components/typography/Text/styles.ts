import styled, { css } from 'styled-components'
import { typographyColors, typographyMargins, typographyMark } from '../styles'
import { IText } from './types'

export const P = styled.p<IText>`
  font-weight: 400;

  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
    `}
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
  ${props =>
    props.delete &&
    css`
      text-decoration: line-through;
    `}
  ${props =>
    props.mark &&
    css`
      padding: 3px;
    `}

  ${props =>
    props.onClick &&
    css`
      color: ${props => props.theme.colors.text?.highlight};
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: ${props => props.theme.colors.contrast.dark};
      }
    `}

  a {
    color: ${props => props.theme.colors.text?.highlight};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: ${props => props.theme.colors.contrast.dark};
    }
  }

  mark {
    ${props => props.color && typographyColors(props.color, props.theme)}
    ${props => props.color && typographyMark(props.color, props.theme)}
    border-radius: 3px;
    padding: 3px 4px;
  }

  ${props =>
    props.variant &&
    props.variant === 'small' &&
    css`
      font-size: 12px;
      font-weight: 300;
    `}
  ${props =>
    props.variant &&
    props.variant === 'medium' &&
    css`
      font-size: 14px;
      font-weight: 500;
    `}

  ${props =>
    props.variant &&
    props.variant === 'large' &&
    css`
      font-size: 16px;
      font-weight: 500;
    `}

  ${props =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}

  ${props =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}
`
