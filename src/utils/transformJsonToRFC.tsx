import { Banner } from 'index'
import * as React from 'react'

const rFCStringMapper = {
  Banner: Banner
}

export const transformJsonToRFC = (
  json: { name: string; props: any }[],
  onChange: (param: any) => void
): React.ReactElement[] => {
  const Components = json?.map(item => {
    return React.createElement(rFCStringMapper[item.name], {
      ...item.props,
      onChange
    })
  })

  return Components
}
