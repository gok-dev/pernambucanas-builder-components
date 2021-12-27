import styled, { css } from 'styled-components'
import { typographyColors, typographyMargins } from '../styles'
import { IHeading } from './types'

export const H1 = styled.h1<IHeading>`
  font-size: 34px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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

export const H2 = styled.h2<IHeading>`
  font-size: 28px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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

export const H3 = styled.h3<IHeading>`
  font-size: 24px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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

export const H4 = styled.h4<IHeading>`
  font-size: 22px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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

export const H5 = styled.h4<IHeading>`
  font-size: 18px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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

export const H6 = styled.h4<IHeading>`
  font-size: 16px;
  ${props => props.margin && typographyMargins(props.margin)}
  ${props => props.color && typographyColors(props.color, props.theme)}
  ${props =>
    props.customColor &&
    css`
      color: ${props.customColor};
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
