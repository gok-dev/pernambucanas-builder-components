import React from 'react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ICardProduct } from './types'
import Typography from 'components/typography'
import { currencyFormatter } from '../../../utils/currencyFormatter'
import * as S from './styles'
import { Heart } from '../../Icons/Heart'
import { HeartFilled } from '../../Icons/HeartFilled'
import { Card } from '../Card'

export const CardProduct: React.FC<ICardProduct> = props => {
  const [favoriteHover, setFavoriteHover] = useState( false )
  const theme = useTheme()

  return (
    <Card padding={8} onClick={props.onClick} margin={props.margin} hoverable>
      <S.Container>
        <S.Image>
          {props.favoritable && (
            <S.FavoriteButton
              onMouseEnter={() => setFavoriteHover( true )}
              onMouseLeave={() => setFavoriteHover( false )}
              onClick={props.favoriteAction}
            >
              {props.isFavorite || favoriteHover ? (
                <HeartFilled size={18} />
              ) : (
                <Heart size={18} color={theme.colors.base.weak} />
              )}
            </S.FavoriteButton>
          )}
          {props.image}
        </S.Image>
        <S.Content>
          <header>
            {props.highlightText && (
              <Typography.Text
                color="highlight"
                size={11}
                margin={{ bottom: 10, top: 4 }}
                mark
              >
                {props.highlightText}
              </Typography.Text>
            )}
            {props.prevAmount && (
              <Typography.Text color="title" size={11} delete>
                {currencyFormatter( props.prevAmount )}
              </Typography.Text>
            )}
            <S.Pricing>
              <Typography.Title variant="medium">
                {currencyFormatter( props.amount )}
              </Typography.Title>
              {props.isDiscount && (
                <Typography.Text color="success" size={12} weight={500}>
                  10% OFF
                </Typography.Text>
              )}
            </S.Pricing>
          </header>

          {props.parcel && (
            <Typography.Text color="success" size={12} weight={500}>
              {props.parcel}x {currencyFormatter( 9.97 )} s/juros
            </Typography.Text>
          )}
          {props.isDelivery && (
            <Typography.Text
              color="success"
              size={12}
              margin={{ top: 4 }}
              strong
            >
              Chegrá amanhã
            </Typography.Text>
          )}
          <Typography.Text margin={{ top: 8 }} size={12}>
            {props.title}
          </Typography.Text>
        </S.Content>
      </S.Container>
    </Card>
  )
}
