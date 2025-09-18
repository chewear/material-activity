import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#ffffff', 
    },
  },
});

export const customTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      text: {
        primary: '#ff69b4', 
        secondary: '#ff69b4', 
      },
    }),
  },
});