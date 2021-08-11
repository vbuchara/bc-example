import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  gap: 2em;

  padding: 1.5em;
  padding-left: 3em;

  background-color: #87a8a4;

  div > a {
    font-weight: bold;
    font-size: 1.1em;
  }

  h1 a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    max-height: 1em;
  }
`;
