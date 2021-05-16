import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
:root{
  --font-family-title: 'Courgette', cursive;
  --font-family-sub-title: 'Source Code Pro', monospace;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  line-height: 1.3;
  color: #fff;
}
`

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  min-height: 100vh;
`

export const Box = styled.div`
  /* background: rgba(66, 66, 66, 0.5); */
  padding: 2.5rem;
  min-width: 30vw;
  max-width: 70vw;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 0.25rem;

  @media only screen and (max-width: 900px) {
    max-width: 80vw;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
  }
`

export const Title = styled.h1`
  font-family: var(--font-family-title);
  font-size: 4rem;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
`

export const SubTitle = styled.h2`
  font-family: var(--font-family-sub-title);
  font-size: 2rem;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  /* align-self: stretch; */
`

export const CardBox = styled.div`
  flex: 0 0 300px;
  margin: 10px;
  margin-bottom: 2rem;
  border: 2px solid rgba(190, 50, 60, .9);

  && img{
    width: 100%;
  }
`
export const CardText = styled.div`
  padding: 0 20px 20px;
  text-align: center;
`
export const CardBtnGroup = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
`

export const CardBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  bottom: 0;
  border: 0;
  font-size: 1rem;
  border: 1px solid rgba(190, 50, 60, 1);
  width: 8.8rem;
  height: 1.8rem;
  background-color: rgba(45, 45, 45, 1);
  margin: 0 auto;
  margin-bottom: -1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  place-items: center;
  color: rgb(255, 255, 255);

  &&:focus{
    outline: 0;
  }
`