import { createTheme } from '@mui/material/styles';

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F2873D',
      contrastText: '#FFFF'
    },
    text: {
      primary: '#008db9'
    }
  }
});

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e8ac6b',
      contrastText: '#FFFF'
    },
    text: {
      primary: '#9dc7f5'
    }
  }
});