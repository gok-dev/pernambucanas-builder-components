import React from 'react'
import { renderWithTheme } from 'utils/renderWithTheme'
import { CardProduct } from './index'

describe( '<Card />', () => {
  it( 'shold render', () => {
    const { container } = renderWithTheme(
      <CardProduct
        title="Produto"
        amount={999}
        image={
          <img
            src="/assets/product.png"
            alt="Ventilador Britânia BVT410 Turbo Preto"
            title="Ventilador Britânia BVT410 Turbo Preto"
            width="220"
          />
        }
      />
    )

    expect( container.firstChild ).toMatchSnapshot()
  } )
} )
