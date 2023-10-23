import { styled } from '@mui/material/styles'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'

interface RemoveProps {
  onClick: () => void
}

export const RemoveIcon = ({ onClick }: RemoveProps) => {
  return <CustomRemoveBox onClick={onClick} />
}

const CustomRemoveBox = styled(HighlightOffRoundedIcon)(() => ({
  fontSize: '30px',
  color: '#ccc',
  zIndex: '99',
  cursor: 'pointer',
  ':hover': {
    color: '#A6A6A6',
  },
}))
