import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Heading } from './index'
import { IHeading } from './types'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Default: Story<IHeading> = args => <Heading {...args} />
Default.args = {
  children: 'h1. Heading'
}
