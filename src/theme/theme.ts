import createTheme from '@mui/material/styles/createTheme'

const SECONDARY_MAIN = '#0072CE'

export const theme = createTheme({
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: 'unset',
            marginLeft: 0,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          fontSize: '12px',
          fontWeight: '700',
          borderRadius: '15px',
          height: '24px',
          width: '46px',
          color: SECONDARY_MAIN,
          border: `2px solid ${SECONDARY_MAIN}`,
          '&.Mui-selected': {
            background: SECONDARY_MAIN,
            color: '#fff',
            '&:hover': {
              background: SECONDARY_MAIN,
            },
          },
          '&:hover': {
            background: '#edf7ff',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '700',
        },
      },
    },
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
      main: SECONDARY_MAIN,
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
    fontFamily: ['Mulish Variable', 'Roboto', 'sans-serif'].join(','),
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
