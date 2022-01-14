import { Meta, Story } from '@storybook/react'
import { WebFilter } from './index'
import { IWebFilter } from './types'

export default {
  title: 'WebFilter',
  component: WebFilter
} as Meta

export const Basic: Story<IWebFilter> = args => <WebFilter {...args} />
