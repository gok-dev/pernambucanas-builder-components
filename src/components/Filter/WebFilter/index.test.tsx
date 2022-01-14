import { renderWithTheme } from 'utils/helpers'
import { WebFilter } from './index'

describe('<WebFilter />', () => {
  it('shold render the heading', () => {
    const { container } = renderWithTheme(<WebFilter />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
