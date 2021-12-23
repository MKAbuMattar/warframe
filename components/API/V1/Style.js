import styled from 'styled-components'

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

export const ContainerMenuSticky = styled.div`
  position: sticky;
  top: 3.7rem;
`

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
`

export const ResponseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;

  scroll-margin-top: 4rem;
`

export const ResponseCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ResponseBox = styled(ContainerBox)`
  gap: 1rem;
`

export const SubTitle = styled.p`
  font-size: 2.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  && :hover {
    color: rgba(123, 123, 123, 01);
  }

  && :hover svg > g {
    fill: rgba(123, 123, 123, 01);
  }
`
