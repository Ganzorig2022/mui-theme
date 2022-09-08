import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

const Theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#0A1929',
      light: '#fff',
      dark: '#7b1fa2',
      blue: '#0Aa',
    },
    background: {
      paper: '#616161',
      default: '#212121',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});

export const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
