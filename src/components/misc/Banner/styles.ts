import styled, { css } from 'styled-components'
export const IconBox = styled.div``

export const ButtonFontColor = styled.button`
  cursor: pointer;
  display: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  left: 20px;
  width: 150px;
  height: 42px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`

export const Container = styled.div<{ image: string | ArrayBuffer | null }>`
  ${({ image }) => css`
    display: flex;
    width: 100%;
    height: 540px;
    background-color: #e6e6e6;
    border-radius: 12px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${image?.toString()});

    ${IconBox} {
      display: none;
    }

    &:hover {
      opacity: 0.9;
      cursor: pointer;

      ${ButtonFontColor} {
        display: inline;
        opacity: 0.7;
      }

      ${IconBox} {
        display: inline;
        position: absolute;
        left: 50%;
        top: 40%;

        svg {
          fill: grey;
        }
      }

      .plus-icon {
        display: inline;
        position: absolute;
        left: 50%;
        top: 40%;

        svg {
          fill: grey;
        }
      }
    }
  `}
`

export const ColorPickerBox = styled.div`
  height: 150px;
  position: absolute;
`

export const Content = styled.div<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    flex: 1;
    padding: 140px 180px;
    flex-direction: column;

    input {
      background-color: transparent;
      border: none;
      color: ${color};
    }

    input:first-child {
      font-size: 16px;
      font-weight: 300;
      font-weight: normal;
      font-size: 21px;
      line-height: 24px;
      letter-spacing: -0.011em;
    }

    input:nth-child(2) {
      font-style: italic;
      font-weight: 400;
      font-size: 36px;
      line-height: 24px;
      letter-spacing: -0.011em;
      font-style: italic;
    }

    input:nth-child(3) {
      font-style: normal;
      font-weight: 200;
      font-size: 36px;
      line-height: 43px;
      letter-spacing: -0.011em;
    }

    input:focus {
      outline: none;
    }

    .input-file-hidden {
      display: none;
    }
  `}
`

export const ButtonEditBox = styled.div`
  ${({ color }) => css`
    display: flex;
    margin-top: 31px;

    button {
      background-color: transparent;
      width: 150px;
      height: 42px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${color};
      cursor: pointer;

      p {
        margin: 0px;
      }
    }

    button:first-child {
      margin-right: 20px;
    }
  `}
`
