import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ButtonProps } from './types'

const modifiers_mode = {
  container: {
    primary: css`
      background: ${theme.colors.contrast.default};
      transition: 0.4s ease-out;
      border-radius: 8px;
      border: unset;
      height: 56px;
      &:hover {
        transition: 0.4s ease-out;
        background: ${theme.colors.contrast.dark};
      }
    `,
    secondary: css`
      background: ${theme.colors.secondary.default};
      transition: 0.4s ease-out;
      border-radius: 8px;
      border: unset;
      height: 56px;
    `,
    disabled: css`
      background: ${theme.colors.base.thin};
      border-radius: 8px;
      border: unset;
      height: 56px;
    `,
    transparent: css`
      background: transparent;
      border-radius: 8px;
      border: unset;
      height: 56px;
    `
  }
}

const modifiers_size = {
  container: {
    small: css`
      width: 100%;
    `,
    medium: css`
      width: 100%;
    `,
    large: css`
      width: 100%;
    `
  }
}

export const Button = styled.button<ButtonProps>`
  ${({ mode, size, icon }) => css`
    display: ${icon
      ? `flex; align-items: center; justify-content: center; gap: 10px;`
      : `unset;`};
    cursor: pointer;
    ${mode && modifiers_mode.container[mode]}
    ${size && modifiers_size.container[size]}
  `}
`
