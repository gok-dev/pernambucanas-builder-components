import React from 'react'
import * as S from './styles'
import { IText } from './types'

export const Text: React.FC<IText> = ({ children, ...props }) => (
  <S.P
    italic={props.italic}
    underline={props.underline}
    delete={props.delete}
    color={props.color}
    mark={props.mark}
    customColor={props.customColor}
    margin={props.margin}
    variant={props.variant}
    size={props.size}
    weight={props.weight}
    onClick={props.onClick}
  >
    {props.strong ? (
      <strong>{children}</strong>
    ) : props.mark ? (
      <mark>{children}</mark>
    ) : props.link ? (
      <a
        href={props.link.href}
        title={props.link.title || undefined}
        target={props.link.target || undefined}
      >
        {children}
      </a>
    ) : (
      children
    )}
  </S.P>
)
