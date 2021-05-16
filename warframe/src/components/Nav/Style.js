import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(22,22,22);
  position: sticky;
  top: 0;
  box-shadow: rgb(0 0 0 / 75%) 0px 14px 14px -14px;

  @media all and (max-width: 990px){
    flex-direction: column;
  }

  @media all and (max-width: 600px){

  }
`
export const Logo = styled.h1`
  margin: 0 0 0 .45em;

  && a{
    color: rgb(255, 255, 255);
    text-decoration: none;
    letter-spacing: .45rem;
  }

  @media all and (max-width: 990px){
    margin: 0;
  }

  @media all and (max-width: 600px){
    margin: .25em 0;
    align-self: left;
  }
`

export const Navigation = styled.ul`
  list-style: none;
  display: flex;

  && a {
    display: block;
    text-decoration: none;
    padding: 1em;
    color: white;
    cursor: pointer;
    :hover{
      color: rgba(190,50,60,.9);
    }
  }

  @media all and (max-width: 990px){
    width: 100%;
    justify-content: space-around;
  }

  @media all and (max-width: 600px){
    flex-direction: column;
    display: none;
    && a {
      text-align: center; 
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3); 
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    && li:last-of-type a{
      border-bottom: none;
    }
  }
`


export const DropdownContent = styled.li`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: rgb(0 0 0 / 75%) 0px 14px 14px -14px;
  z-index: 1;

  && a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    :hover{
      background-color: #ddd;
    }
  }
`

export const Dropdown = styled.li`
  float: left;
  overflow: hidden;

  :hover ${DropdownContent}{
    display: block;
  }

  span{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    display: inline-block;
    vertical-align: middle;
    width: 1.6875rem;
    height: 1.6875rem;
    background-size: 1.6875rem 1.6875rem;
  }
  
  :hover span{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23be323c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  }
`



