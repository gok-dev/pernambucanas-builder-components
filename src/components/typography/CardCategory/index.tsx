import React from 'react'
import { ICardCategory } from './types'
import { Card } from '../Card'
import Typography from 'components/Typography'
import { Forward } from '../Icons'
import * as S from './styles'
import { useLayout } from '../../../hooks/layout'

export const CardCategory: React.FC<ICardCategory> = props => {
  const layout = useLayout()

  return (
    <Card
      padding={props.largeImage ? 0 : props.withImage ? 20 : 18}
      radius={props.withImage ? 16 : 8}
      margin={props.margin}
      hoverable
      onClick={props.onClick}
    >
      <S.Container>
        {props.withIcon && (
          <>
            <S.Icon>{props.icon}</S.Icon>
            <S.Title maxWidth={110}>
              <Typography.Heading
                size={layout.breakpoint === 'xs' ? 12 : 14}
                weight={400}
                margin={{ top: layout.breakpoint === 'xs' ? 14 : 28 }}
              >
                {props.title}
              </Typography.Heading>
            </S.Title>
          </>
        )}
        {props.withImage && (
          <>
            <S.Image radius={16} largeImage={props.largeImage}>
              {props.image}
            </S.Image>

            {!props.largeImage && (
              <S.Title>
                <Typography.Heading
                  size={14}
                  weight={500}
                  margin={{ top: 14 }}

                >
                  {props.title}
                </Typography.Heading>
              </S.Title>
            )}

            {props.largeImage && (
              <S.LargeTitle>
                <Typography.Heading
                  size={14}
                  weight={500}
                  color="highlight"
                >
                  {props.title}
                </Typography.Heading>
                <Forward size={9} />
              </S.LargeTitle>
            )}
          </>
        )}
      </S.Container>
    </Card>
  )
}
