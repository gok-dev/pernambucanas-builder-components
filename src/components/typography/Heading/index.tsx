import React from 'react'
import * as S from './styles'
import { IHeading } from './types'

export const Heading: React.FC<IHeading> = ({ children, ...props }) => {
  if (props.level === 2) {
    return (
      <S.H2
        color={props.color}
        customColor={props.customColor}
        margin={props.margin}
        size={props.size}
        weight={props.weight}
      >
        {children}
      </S.H2>
    )
  }
  if (props.level === 3) {
    return (
      <S.H3
        color={props.color}
        customColor={props.customColor}
        margin={props.margin}
        size={props.size}
        weight={props.weight}
      >
        {children}
      </S.H3>
    )
  }
  if (props.level === 4) {
    return (
      <S.H4
        color={props.color}
        customColor={props.customColor}
        margin={props.margin}
        size={props.size}
        weight={props.weight}
      >
        {children}
      </S.H4>
    )
  }
  if (props.level === 5) {
    return (
      <S.H5
        color={props.color}
        customColor={props.customColor}
        margin={props.margin}
        size={props.size}
        weight={props.weight}
      >
        {children}
      </S.H5>
    )
  }
  if (props.level === 6) {
    return (
      <S.H6
        color={props.color}
        customColor={props.customColor}
        margin={props.margin}
        size={props.size}
        weight={props.weight}
      >
        {children}
      </S.H6>
    )
  }
  return (
    <S.H1
      color={props.color}
      customColor={props.customColor}
      margin={props.margin}
      size={props.size}
      weight={props.weight}
    >
      {children}
    </S.H1>
  )
}
