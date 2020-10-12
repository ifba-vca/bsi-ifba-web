import React from 'react';

import { ThemeProvider } from '@material-ui/core';

import Routes from './routes';
import Tema from './style/Tema';

const App = () => {
  return (
    <ThemeProvider theme={Tema}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
