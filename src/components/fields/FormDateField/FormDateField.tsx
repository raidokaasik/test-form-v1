import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Controller } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

interface FormDateFieldProps {
  label: string
  disabled?: boolean
  helperText: string
  control: any
  name: string
}

export const FormDateField = ({
  control,
  label,
  name,
  helperText,
}: FormDateFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: helperText,
      }}
      render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            inputRef={ref}
            label={label}
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
                name: name,
                onBlur: onBlur,
                error: Boolean(fieldState.error),
                helperText: fieldState.error?.message,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  )
}
//   <FormControl sx={{ mt: '16px' }}>
//     <InputLabel
//       sx={{ transform: 'translate(0px, -16px) scale(0.75)' }}
//       shrink
//     >
//       {label}
//     </InputLabel>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         value={value}
//         disabled={disabled}
//         onChange={handleChange}
//         format="DD-MM-YYYY"
//         slotProps={{
//           openPickerButton: {
//             color: 'primary',
//           },
//           inputAdornment: {
//             position: 'end',
//           },
//           textField: {
//             variant: 'standard',
//             error: error,
//             helperText: helperText,
//           },
//         }}
//       />
//     </LocalizationProvider>
//   </FormControl>
// )
