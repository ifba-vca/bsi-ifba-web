import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: var(--si-gray);
    color:  var(--si-dark);
  }
`;

export default Base;
