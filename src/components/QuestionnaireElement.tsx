import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Control } from 'react-hook-form'
import { CustomToggleButton } from './toggle/CustomToggleButton'

interface QuestionnaireElementProps {
  name: string
  control: Control<any, boolean>
  text: string
}

export const QuestionnaireElement = ({
  name,
  control,
  text,
}: QuestionnaireElementProps) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      mb={'32px'}
      justifyContent={'space-between'}
    >
      <Typography variant="body2" margin={0}>
        {text}
      </Typography>
      <CustomToggleButton name={name} control={control} />
    </Box>
  )
}
