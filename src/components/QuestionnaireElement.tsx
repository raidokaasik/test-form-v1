import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { Control, Controller } from 'react-hook-form'

interface QuestionnaireElementProps {
  name: string
  control: Control<Record<string, boolean>>
  text: string
}

export const QuestionnaireElement = ({
  name,
  control,
  text,
}: QuestionnaireElementProps) => {
  return (
    <Box display={'flex'} alignItems={'center'} mb={'24px'}>
      <Typography variant="body2" fontSize={'14px'} margin={0}>
        {text}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, name, onChange, value } }) => {
          return (
            <Checkbox
              name={name}
              disableRipple
              inputRef={ref}
              checked={value}
              onChange={(_, value) => {
                onChange(value)
              }}
            />
          )
        }}
      />
    </Box>
  )
}
