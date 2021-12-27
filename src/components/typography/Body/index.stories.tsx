import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Body } from './index'
import { IBody } from './types'

export default {
  title: 'Typography/Body',
  component: Body
} as Meta

export const Regular: Story<IBody> = args => (
  <Body {...args}>{args.children}</Body>
)
Regular.args = {
  children: 'Body (Regular)'
}
Regular.argTypes = {
  customColor: {
    control: { type: 'color' }
  }
}
