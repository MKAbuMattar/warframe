import styled from 'styled-components';

export const FooterSection = styled.footer`
  text-align: center;
  margin: 1rem;
  margin-bottom: 2rem;
  color: rgb(255, 255, 255);

  && a {
    color: rgb(213, 33, 40, 0.7);

    :hover {
      color: rgb(213, 33, 40, 1);
    }
  }
`;
