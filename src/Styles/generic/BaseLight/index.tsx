import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: var(--si-light-02);
    color:  var(--si-dark);
  }
`;

export default Base;
