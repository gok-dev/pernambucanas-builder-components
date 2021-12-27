import React from 'react'
import { ITitle } from './types'
import { Heading } from 'components/typography'

export const Title: React.FC<ITitle> = ({ children, ...props }) => {
  if (props.variant === 'medium') {
    return (
      <Heading
        weight={500}
        size={18}
        margin={props.margin}
        color={props.color}
        customColor={props.customColor}
      >
        {children}
      </Heading>
    )
  }

  return (
    <Heading
      margin={props.margin}
      color={props.color}
      customColor={props.customColor}
    >
      {children}
    </Heading>
  )
}
