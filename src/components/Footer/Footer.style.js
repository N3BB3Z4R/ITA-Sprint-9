import styled from 'styled-components';

export const FooterStyle = styled.div`
  padding: 1rem 0;
  border-top: 1px solid #333;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: var(--clear);

  /* MEDIA QUERIES */
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`;