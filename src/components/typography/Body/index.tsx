import React from 'react'
import { IBody } from './types'
import { Text } from 'components/typography'

export const Body: React.FC<IBody> = ({ children, ...props }) => (
  <Text
    weight={400}
    size={14}
    margin={props.margin}
    color={props.color}
    customColor={props.customColor}
  >
    {children}
  </Text>
)
