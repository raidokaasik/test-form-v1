import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

interface DateFieldProps {
  value: Dayjs | null
  handleChange: (value: Dayjs | null) => void
  disabled?: boolean
}

export const DateField = ({
  value,
  handleChange,
  disabled,
}: DateFieldProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        disabled={disabled}
        onChange={handleChange}
        format="DD-MM-YYYY"
        slotProps={{
          openPickerButton: {
            color: 'primary',
          },
          inputAdornment: {
            position: 'end',
          },
          textField: {
            variant: 'standard',
          },
        }}
      />
    </LocalizationProvider>
  )
}
