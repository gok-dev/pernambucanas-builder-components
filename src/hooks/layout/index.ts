/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { LayoutContext } from 'providers/layout'
import { useScreenClass } from 'react-grid-system'

export const useLayout = () => {
  const context = React.useContext(LayoutContext)
  const screenClass = useScreenClass()

  const toggleFilterCollapseOpen = React.useCallback(
    (index: number) => {
      if (!context.filterCollapseOpen.includes(index)) {
        context.setFilterCollapseOpen([...context.filterCollapseOpen, index])
        return
      }

      const newFilterCollapseOpen = context.filterCollapseOpen.filter(
        collapse => collapse !== index
      )
      context.setFilterCollapseOpen(newFilterCollapseOpen)
    },
    [context.filterCollapseOpen]
  )

  const toggleCollapseOpen = React.useCallback(
    (name: string) => {
      if (!context.collapseOpen.includes(name)) {
        context.setCollapseOpen([...context.collapseOpen, name])
        return
      }

      const newCollapseOpen = context.collapseOpen.filter(
        collapse => collapse !== name
      )
      context.setCollapseOpen(newCollapseOpen)
    },
    [context.collapseOpen]
  )

  React.useEffect(() => {
    context.setBreakpoint(screenClass)
  }, [screenClass])

  return {
    ...context,
    toggleCollapseOpen,
    toggleFilterCollapseOpen
  }
}
