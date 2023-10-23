import createTheme, { Theme } from '@mui/material/styles/createTheme'

const SECONDARY_MAIN = '#fbd020'
const SUCCESS_MAIN = '#2da63b'
const SUCCESS_DARK = '#31823b'
const PRIMARY_MAIN = '#203f9e'

export const theme: Theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          ':after': {
            borderBottom: `2px solid ${PRIMARY_MAIN}`,
          },
        },
      },
    },
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
          borderRadius: '5px',
          height: '24px',
          padding: '6px',
          width: '40px',
          color: PRIMARY_MAIN,
          border: `2px solid ${PRIMARY_MAIN}`,
          '&.Mui-selected': {
            background: PRIMARY_MAIN,
            color: '#fff',
            '&:hover': {
              background: PRIMARY_MAIN,
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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          ':disabled': {
            color: '#ccc',
          },
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: PRIMARY_MAIN,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: PRIMARY_MAIN,
    },
    secondary: {
      main: SECONDARY_MAIN,
    },
    success: {
      main: SUCCESS_MAIN,
      dark: SUCCESS_DARK,
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
    h6: {
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: '18px',
      color: PRIMARY_MAIN,
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
