
import React from 'react'
import { renderWithTheme } from 'utils/renderWithTheme'
import { Card } from './index'

describe( '<Card />', () => {
  it( 'shold render', () => {
    const { container } = renderWithTheme( <Card /> )
    expect( container.firstChild ).toMatchSnapshot()
  } )
} )
