import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
        },
      },
    },
  },
  palette: {
    secondary: {
      main: '#fbd020',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    body1: {
      fontSize: '15px',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
      marginTop: '24px',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '13px',
      color: '#888',
    },
  },
})
