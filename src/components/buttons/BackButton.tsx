import Button, { ButtonProps } from '@mui/material/Button'

interface BackButtonProps extends ButtonProps {
  label: string
  onClick: () => void
}

export const BackButton = ({ label, onClick }: BackButtonProps) => {
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant="outlined"
      sx={{
        height: '34px',
        width: '120px',
        border: `2px solid`,
        ':hover': {
          border: '2px solid',
          backgroundColor: '#EBF0FF',
        },
      }}
    >
      {label}
    </Button>
  )
}
