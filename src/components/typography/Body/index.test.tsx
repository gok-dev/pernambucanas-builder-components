import React from 'react'
import { Body } from './index'
import { renderWithTheme } from 'utils/renderWithTheme'

describe('<Body />', () => {
  it('shold render the heading', () => {
    const { getAllByText } = renderWithTheme(<Body>teste</Body>)

    console.log(getAllByText)
    // expect(getAllByText('teste')).toBeInTheDocument();
  })
})
