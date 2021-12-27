import React from 'react'
import { ISubTitle } from './types'
import { Text } from 'components/typography'

export const SubTitle: React.FC<ISubTitle> = ({ children, ...props }) => (
  <Text
    weight={500}
    size={16}
    margin={props.margin}
    color={props.color}
    customColor={props.customColor}
  >
    {children}
  </Text>
)
