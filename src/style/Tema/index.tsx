import { createMuiTheme } from '@material-ui/core';

const Tema = createMuiTheme({
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

export default Tema;