import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const NavMenu = () => {
  return (
    <NavBox>
      <Typography color={'#fbd020'} textTransform={'uppercase'}>
        NavBar
      </Typography>
    </NavBox>
  )
}

const NavBox = styled(Box)(({ theme }) => ({
  borderTop: `0.25rem solid ${theme.palette.secondary.main}`,
  backgroundColor: '#000',
  boxSizing: 'border-box',
  textAlign: 'center',
  [theme.breakpoints.up('xs')]: {
    paddingTop: '30px',
    minHeight: '113px',
    minWidth: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '50px',
    height: '100%',
    minWidth: '100px',
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '320px',
  },
}))
