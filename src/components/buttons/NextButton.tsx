import Button from '@mui/material/Button'

interface NextButtonProps {
  id: string
  label: string
}

export const NextButton = ({ id, label }: NextButtonProps) => {
  return (
    <Button
      form={id}
      type="submit"
      color="primary"
      variant="contained"
      sx={{ height: '34px', width: '120px' }}
    >
      {label}
    </Button>
  )
}
