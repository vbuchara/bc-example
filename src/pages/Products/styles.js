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

    > a > * {
      margin: 1rem 0;
    }

    hr {
      height: 1px;
      border-width: 0;
      color: #1f1e1e;
      background-color: #1f1e1e;

      &:last-child {
        visibility: hidden;
      }
    }

    p {
      display: flex;
      justify-content: flex-start;

      * {
        flex-basis: 25%;
      }
    }
  }
`;
