import React from 'react'
import { renderWithTheme } from 'utils/renderWithTheme'
import { CardCategory } from './index'

describe( '<CardCategory />', () => {
  it( 'shold render the heading', () => {
    const { container } = renderWithTheme(
      <CardCategory title="Sacola de desconto" />
    )

    expect( container.firstChild ).toMatchSnapshot()
  } )
} )
