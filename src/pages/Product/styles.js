import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  div {
    width: 70%;
    background-color: #d9cab3;
    border-radius: 4px;
    padding: 1em;

    > * {
      margin: 1rem 0;
    }
  }
`;
