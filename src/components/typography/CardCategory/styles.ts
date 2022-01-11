import styled, { css } from 'styled-components'
import { ICardCategoryImage, ICardCategoryTitle } from './types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.div<ICardCategoryTitle>`
  display: flex;
  text-align: center;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
`

export const LargeTitle = styled.div<ICardCategoryTitle>`
  display: flex;
  padding: 10px 22px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.figure<ICardCategoryImage>`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    max-height: 225px;
    max-width: 100%;

    ${props =>
      props.largeImage &&
      css`
        width: 100%;
        max-height: 315px;
        object-fit: cover;
      `}

    ${props =>
      props.radius &&
      css`
        border-top-left-radius: ${props.radius}px;
        border-top-right-radius: ${props.radius}px;
      `}
  }
`
