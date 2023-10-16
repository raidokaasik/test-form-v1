import Box from '@mui/material/Box'

interface AppLayoutProps {
  children: React.ReactElement | React.ReactElement[]
}

export const AppLayout = ({ children }: AppLayoutProps): React.ReactElement => {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        padding: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: '#e2e2e2',
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={'100%'}
      >
        {children}
      </Box>
    </Box>
  )
}
