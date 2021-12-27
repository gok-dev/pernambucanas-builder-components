import React from 'react'
import { Meta, Story } from '@storybook/react'
import { SubTitle } from './index'
import { ISubTitle } from './types'

export default {
  title: 'Typography/SubTitle',
  component: SubTitle,
  argTypes: {
    customColor: {
      control: { type: 'color' }
    }
  }
} as Meta

export const Medium: Story<ISubTitle> = args => <SubTitle {...args} />
Medium.args = {
  children: 'SubTitle (Medium)'
}
