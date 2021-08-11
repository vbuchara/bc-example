import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    color: #1f1e1e;
    background-color: #EFE3D0;
    font-family: 'Georama', sans-serif;
  }

  a, a:hover{
    color: inherit;
    text-decoration: none;

    /* &:hover{
      transform: translate(0px, 2px);
    } */
  }
`;
