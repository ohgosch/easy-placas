import { createGlobalStyle, css } from 'styled-components';

import { Ubuntu } from 'visual/fonts';
import { COLORS } from 'visual/constants';

export const GlobalStyle = createGlobalStyle`
  ${Ubuntu}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.greyLight};

    ${p => p.theme.isBlue && css`
      background-color: ${COLORS.primary};
    `}
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-weight: normal;
  }
  button {
    cursor: pointer;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;
