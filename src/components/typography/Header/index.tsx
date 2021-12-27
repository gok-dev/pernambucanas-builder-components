import React from 'react'
import { IHeader } from './types'
import { Text } from 'components/typography'

export const Header: React.FC<IHeader> = ({ children, ...props }) => (
  <Text
    weight={500}
    size={14}
    margin={props.margin}
    color={props.color}
    customColor={props.customColor}
  >
    {children}
  </Text>
)
