import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.figure`
  position: relative;

  button {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
  }
`

export const FavoriteButton = styled.button`
  background: none;
`

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-bottom: 8px;

  @media (min-width: 460px) {
    flex-direction: row;
    align-items: center;

    p {
      margin-left: 6px;
    }
  }
`

export const Content = styled.div`
  padding: 8px;
`
