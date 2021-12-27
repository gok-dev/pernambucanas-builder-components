import React from 'react'
import { INavigation } from './types'
import { Text } from 'components/typography'

export const Navigation: React.FC<INavigation> = ({ children, ...props }) => (
  <Text
    weight={300}
    size={14}
    margin={props.margin}
    color={props.color}
    customColor={props.customColor}
  >
    {children}
  </Text>
)
