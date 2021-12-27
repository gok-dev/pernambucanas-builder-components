import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Footer } from './index'
import { IFooter } from './types'

export default {
  title: 'Typography/Footer',
  component: Footer,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Medium: Story<IFooter> = args => <Footer {...args} />
Medium.args = {
  children: 'Footer (Medium)',
  variant: 'medium'
}

export const Regular: Story<IFooter> = args => <Footer {...args} />
Regular.args = {
  children: 'Footer (Regular)',
  variant: 'regular'
}
