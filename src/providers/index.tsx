import React from 'react'
import { LayoutProvider } from 'providers/layout'

export const Providers: React.FC = ( { children } ) => (
  <LayoutProvider>
    {children}
  </LayoutProvider>
)
