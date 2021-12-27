import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Text } from './index'
import { IText } from './types'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Default: Story<IText> = args => <Text {...args} />
Default.args = {
  children: 'Text'
}
