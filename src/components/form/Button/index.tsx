import React from 'react'
import { ButtonProps } from './types'
import { Button } from './styles'
import { Body } from 'components/typography'

export const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  mode,
  size,
  disabled,
  icon,
  style,
  action
}) => (
  <Button
    mode={mode}
    size={size}
    disabled={disabled}
    icon={icon}
    style={style}
    action={action}
  >
    <p>{icon && icon}</p>{' '}
    <Body color={mode === 'primary' ? 'onContrast' : 'highlight'}>{title}</Body>
  </Button>
)
