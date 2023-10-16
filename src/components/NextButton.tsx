import Button from '@mui/material/Button'

export const NextButton = ({ id, label }: any) => {
  return (
    <Button form={id} type="submit" color="secondary" variant="contained">
      {label}
    </Button>
  )
}
