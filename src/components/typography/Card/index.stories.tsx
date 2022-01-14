import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Card } from './index'
import { ICard } from './types'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ICard> = args => <Card {...args} />
Default.args = {
  width: 200
}

export const Hoverable: Story<ICard> = args => <Card {...args} />
Hoverable.args = {
  width: 200,
  hoverable: true
}

export const Gray: Story<ICard> = args => <Card {...args} />
Gray.args = {
  width: 200,
  gray: true,
  hoverable: true
}
