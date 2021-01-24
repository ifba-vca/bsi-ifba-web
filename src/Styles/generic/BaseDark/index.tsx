import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  :root {
    --si-background-01: var(--si-dark-01);
    --si-background-02: var(--si-dark-02);
    --si-text: var(--si-light-02);
    --si-link: var(--si-blue);
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: var(--si-background-01);
    color:  var(--si-text);
  }
`;

export default Base;
