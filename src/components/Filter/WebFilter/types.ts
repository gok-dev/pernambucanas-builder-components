import React from 'react'

export interface IWebFilter {
  filters: IWebFilterList[]
  initialFilterCollapseOpen?: number[]
}

export interface IWebFilterList {
  title: string
  items: IWebFilteItem[]
}

export interface IWebFilteItem {
  label?: string
  value?: string
  renderItem?: React.ReactNode
}
