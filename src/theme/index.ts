import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Fira Sans',
  },
  palette: {
    high: {
      main: '#d50000',
      contrastText: '#ffff',
    },
    medium: {
      main: '#00c853',
      contrastText: '#ffff',
    },
    low: {
      main: '#0091ea',
      contrastText: '#ffff',
    },
    add: {
      main: '#3d5afe',
      contrastText: '#fff',
    },
    edit: {
      main: '#ff6d00',
      contrastText: '#fff',
    },
    save: {
      main: '#00c853',
      contrastText: '#fff',
    },
    delete: {
      main: '#aa00ff',
      contrastText: '#fff',
    },
    pink: {
      main: '#ec407a',
      contrastText: '#fff',
    },
    category: {
      main: '#00bfa5',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
