import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { DateField } from './DateField'
import { Dayjs } from 'dayjs'

interface FormDateFieldProps {
  value: Dayjs | null
  handleChange: (value: Dayjs | null) => void
  label: string
  disabled?: boolean
}

export const FormDateField = ({
  value,
  handleChange,
  label,
  disabled,
}: FormDateFieldProps) => {
  return (
    <FormControl sx={{ mt: '16px' }}>
      <InputLabel
        sx={{ transform: 'translate(0px, -16px) scale(0.75)' }}
        shrink
      >
        {label}
      </InputLabel>
      <DateField
        value={value}
        handleChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
