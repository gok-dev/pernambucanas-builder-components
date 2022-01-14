import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CardCategory } from './index'
import { ICardCategory } from './types'
import { DiscountBag } from '../Icons'

export default {
  title: 'CardCategory',
  component: CardCategory
} as Meta

export const Default: Story<ICardCategory> = args => <CardCategory {...args} />
Default.args = {
  title: 'Sacola de desconto',
  withIcon: true,
  icon: <DiscountBag size={37} />
}

export const WithImage: Story<ICardCategory> = args => (
  <CardCategory {...args} />
)
WithImage.args = {
  title: 'Blusa feminina',
  withImage: true,
  image: (
    <img
      src="/assets/products/news-1.png"
      alt="Blusa feminina"
      title="Blusa feminina"
      width="220"
    />
  )
}

export const WithLargeImage: Story<ICardCategory> = args => (
  <CardCategory {...args} />
)
WithLargeImage.args = {
  title: 'Melhores avaliados',
  withImage: true,
  largeImage: true,
  image: (
    <img
      src="/assets/products/top-category-1.png"
      alt="Melhores avaliados"
      title="Melhores avaliados"
      width="220"
    />
  )
}
