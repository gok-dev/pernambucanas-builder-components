import React from 'react'
import { IFooter } from './types'
import { Text } from 'components/typography'

export const Footer: React.FC<IFooter> = ({ children, ...props }) => {
  if (props.variant === 'medium') {
    return (
      <Text
        weight={500}
        size={12}
        margin={props.margin}
        color={props.color}
        customColor={props.customColor}
      >
        {children}
      </Text>
    )
  }

  return (
    <Text
      size={14}
      weight={400}
      margin={props.margin}
      color={props.color}
      customColor={props.customColor}
    >
      {children}
    </Text>
  )
}
