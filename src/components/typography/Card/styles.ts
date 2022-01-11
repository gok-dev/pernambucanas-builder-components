import styled, { css } from 'styled-components'
import { ICard, ICardMargins } from './types'

export const typographyMargins = (margin: ICardMargins) => css`
  margin-top: ${margin.top || margin.vertical}px;
  margin-bottom: ${margin.bottom || margin.vertical}px;
  margin-right: ${margin.right || margin.horizontal}px;
  margin-left: ${margin.left || margin.horizontal}px;
`

export const Container = styled.article<ICard>`
  background-color: ${props =>
    props.gray
      ? props.theme.colors.base.thin
      : props.theme.colors.base.minimum};
  border-radius: ${props => props.radius || 8}px;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  min-height: 100px;
  padding: ${props => props.padding || 0}px;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;

  ${props => props.margin && typographyMargins(props.margin)}

  ${props =>
    props.hoverable &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.17);
      }
    `}
`
