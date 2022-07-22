import { createGlobalStyle } from 'styled-components';
import Pescante from 'assets/fonts/Pescante.woff2';
import Paysage from 'assets/fonts/Paysage-Regular.woff2';

const GlobalStyles = createGlobalStyle`
   @font-face {
      font-family: Pescante;
      src: url(${Pescante});
   }

   @font-face {
      font-family: Paysage;
      src: url(${Paysage});
   }

  *,
  *::after,
  *::before  {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *::selection{
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.light};
  }

  html,
  body,
  #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background.main};   
    color: ${props => props.theme.colors.text.main};
    cursor: default;
    text-rendering: optimizeSpeed;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
  }

  input,
  textarea { 
    &:focus{
      outline: none;
    } 
  }

  img,
  picture {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyles;
