import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CardProduct } from './index'
import { ICardProduct } from './types'

export default {
  title: 'Components/CardProduct',
  component: CardProduct,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ICardProduct> = args => <CardProduct {...args} />
Default.args = {
  favoritable: true,
  title: 'Ventilador Britânia BVT410 Turbo Preto',
  highlightText: 'Oferta do dia',
  prevAmount: 1099,
  amount: 899,
  isDiscount: true,
  isDelivery: true,
  parcel: 5,
  image: (
    <img
      src="/assets/products/news-1.png"
      alt="Ventilador Britânia BVT410 Turbo Preto"
      title="Ventilador Britânia BVT410 Turbo Preto"
      width="220"
    />
  )
}
