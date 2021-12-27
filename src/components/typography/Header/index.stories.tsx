import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Header } from './index'
import { IHeader } from './types'

export default {
  title: 'Typography/Header',
  component: Header,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Medium: Story<IHeader> = args => <Header {...args} />
Medium.args = {
  children: 'Header (Medium)'
}
