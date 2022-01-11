import React from 'react'
import { LayoutContextProps, LayoutBreakpoints } from './types'

export const LayoutContext = React.createContext<LayoutContextProps>(
  {} as LayoutContextProps
)

export const LayoutProvider: React.FC = ({ children }) => {
  const [collapseOpen, setCollapseOpen] = React.useState<string[]>([])
  const [filterCollapseOpen, setFilterCollapseOpen] = React.useState<number[]>(
    []
  )
  const [breakpoint, setBreakpoint] = React.useState<LayoutBreakpoints>('xs')

  return (
    <LayoutContext.Provider
      value={{
        breakpoint,
        collapseOpen,
        filterCollapseOpen,
        setBreakpoint,
        setCollapseOpen,
        setFilterCollapseOpen
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
