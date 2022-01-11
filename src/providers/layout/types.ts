export interface LayoutContextProps {
  breakpoint: LayoutBreakpoints
  filterCollapseOpen: number[]
  collapseOpen: string[]
  setCollapseOpen: (value: string[]) => void
  setFilterCollapseOpen: (value: number[]) => void
  setBreakpoint: (value: LayoutBreakpoints) => void
}

export type LayoutBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
