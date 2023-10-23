import { styled } from '@mui/material/styles'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'

interface AddProps {
  onClick: () => void
}

export const AddIcon = ({ onClick }: AddProps) => {
  return <CustomAddBox onClick={onClick} />
}

const CustomAddBox = styled(AddCircleRoundedIcon)(({ theme }) => ({
  fontSize: '30px',
  color: theme.palette.success.main,
  zIndex: '99',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.success.dark,
  },
}))
