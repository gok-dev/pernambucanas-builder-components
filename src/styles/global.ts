import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
  }

  html, body, #__next {
    height: 100%;
  }

  body{
    background: ${props => props.theme.colors.base.thin};
    color: ${props => props.theme.colors.text.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles
