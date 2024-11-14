// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#000000',  // Set background color to black
      paper: '#1e1e1e',     // Set card/paper background to a dark gray
    },
    text: {
      primary: '#ffffff',   // Set primary text color to white
      secondary: '#a0a0a0', // Set secondary text color to light gray
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#ffffff',
    },
    h6: {
      fontWeight: 500,
      color: '#ffffff',
    },
    body2: {
      color: '#a0a0a0',
    },
  },
});

export default theme;
