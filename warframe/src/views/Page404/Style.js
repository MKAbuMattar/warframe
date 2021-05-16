import styled from 'styled-components'

export const Main = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
`
export const Fof = styled.div`
  transition: all 0.6s;
  display: table-cell;
  vertical-align: middle;

  && h1 {
    font-family: 'Lato', sans-serif;
    color: #888;
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;

    @keyframes type {
      from {
          box-shadow: inset -3px 0px 0px #888;
      }

      to {
          box-shadow: inset -3px 0px 0px transparent;
      }
    }
  }

  && a{
    text-decoration: none;
    color: rgba(252, 41, 74, 1.0);
  }
`
