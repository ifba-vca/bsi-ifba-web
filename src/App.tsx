import React from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const App = () => {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#0A5517',
      },
      secondary: {
        main: '#3756e1',
      },
      error: {
        main: '#d52020',
      },
      background: {
        default: '#f4f6f8',
        paper: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
