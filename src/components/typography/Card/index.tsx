import React from 'react'
import { ICard } from './types'
import * as S from './styles'

export const Card: React.FC<ICard> = ( { children, ...props } ) => {
  return (
    <S.Container
      {...props}
    >
      {children}
    </S.Container>
  )
}
