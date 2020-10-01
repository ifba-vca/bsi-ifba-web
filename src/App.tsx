import React from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#21de41',
      },
      secondary: {
        main: '#3756e1',
      },
      error: {
        main: '#d52020',
      },
      background: {
        default: '#f4f6f8',
        paper: '#f4f6f8',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
