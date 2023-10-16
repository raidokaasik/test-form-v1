import Button from '@mui/material/Button'

type SmallButtonProps = {
  onClick: () => void
  label: string
}

export const SmallButton = ({ onClick, label }: SmallButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      sx={{ height: '24px' }}
    >
      {label}
    </Button>
  )
}
