import styled from 'styled-components'

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #ffffff;

  && a {
    color: rgb(213, 33, 40, 0.7);

    :hover {
      color: rgb(213, 33, 40, 1);
    }
  }
`
