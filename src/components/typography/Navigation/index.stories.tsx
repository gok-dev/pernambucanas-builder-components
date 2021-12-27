import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Navigation } from './index'
import { INavigation } from './types'

export default {
  title: 'Typography/Navigation',
  component: Navigation,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Lignt: Story<INavigation> = args => <Navigation {...args} />
Lignt.args = {
  children: 'Navigation (Light)'
}
