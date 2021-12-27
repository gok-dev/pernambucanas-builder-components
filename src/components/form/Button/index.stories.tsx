import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ButtonComponent } from './index'
import { ButtonProps } from './types'

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent
} as Meta

export const Basic: Story<ButtonProps> = () => (
  <div style={{ width: 200 }}>
    <ButtonComponent mode="primary" size="large" title="Teste" />
  </div>
)
