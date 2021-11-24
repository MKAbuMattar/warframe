import styled, { createGlobalStyle } from 'styled-components'

import Image from 'next/image'

export const GlobalStyle = createGlobalStyle`

:root {
  --bg:  #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms; 
}

html {
	font-size: 100%;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
	scroll-behavior: smooth;
	margin: 0;
	padding: 0;
}

::-webkit-scrollbar {
    background: rgb(3 3 3);
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgb(23 38 53);
    border: 1px solid rgb(27 38 50);
}

body {
	line-height: 1.6;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
}

.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}

/* CSSTransition classes  */
.menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}

.menu-secondary-enter {
  transform: translateX(110%);
}
.menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}

.container {
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
}

/* Modal */
.Modal {
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  background: rgba(0,0,0,0.85);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 12px;
  outline: none;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid;
  border-color: rgb(213, 33, 40, 0.6);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  color: rgba(221,221,221,01);
  width: 50rem;

  text-align: center;

  &&:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  
  @media only screen and (max-width: 900px) {
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    border: none;
    border-radius: 0;
  }
}

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.0);
}

.ReactModal__Body--open {
  overflow: hidden;
}

.ReactModal__Overlay{
  z-index: 999;
}

`

export const SearchSection = styled.div`
  text-align: center;
  padding: 4em 2em;
`

export const SearchInput = styled.input`
  font-size: 18px;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 400px;
  padding: 0.5em 1em 0.5em 2.5em;

  &&::placeholder {
    color: #838d99;
  }
  &&:hover {
    top: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &&:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media only screen and (max-width: 512px) {
    max-width: 240px;
  }
`

export const PageCounter = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(221, 221, 221, 01);

  @media only screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  min-height: 300px;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  &&:hover {
    top: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const CardImg = styled(Image)`
  width: 20rem;
  height: 15rem;
  background-size: cover;
  background-position: center center;
`

export const CardTite = styled.h3`
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
`

export const CardBtn = styled.button`
  width: 8rem;
  margin: 0px auto -0.7rem;
  border: 1px solid rgb(213, 33, 40, 0.5);
  padding: 0.4rem;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  user-select: none;

  &&:hover {
    border-color: rgb(213, 33, 40, 1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  left: 0;
  top: 0;
`

export const ModalBtn = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  user-select: none;
  pointer-events: all;
  border: 0px;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: rgb(213, 33, 40, 1);
  display: grid;
  place-content: center;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ModalInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalInfoImg = styled.img`
  @media only screen and (max-width: 600px) {
    width: inherit;
    /* height: inherit; */
  }
`

export const ModalInfoAbilities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`

export const ModalInfoAbilitie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalInfoTite = styled.h3`
  padding: 1.42rem;
  text-align: center;
  font-size: 2.5rem;
`

export const ModalInfoSubtiteAbilitie = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
`

export const ModalInfoSubtite = styled.p`
  padding: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;

  && span {
    font-size: 1rem;
    font-weight: normal;
  }

  && a {
    color: rgb(213, 33, 40, 0.8);

    :hover {
      color: rgb(213, 33, 40, 1);
    }
  }
`

export const ModalInfoAttackSubtite = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  font-weight: lighter;

  &&::after {
    content: '';
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid rgb(213, 33, 40, 1);
  }
`
