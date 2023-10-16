import { TextField } from '@mui/material'
import React from 'react'
import { IMaskInput } from 'react-imask'

export const PersonalIDField = ({
  label,
  helperText,
  error,
  register,
}: any) => (
  <TextField
    {...register}
    variant="standard"
    label={label}
    fullWidth
    InputProps={{
      inputComponent: IdField as any,
    }}
    error={error}
    helperText={helperText}
  />
)

const IdField = React.forwardRef((props: any, ref) => {
  const { onChange, ...other }: any = props
  return (
    <IMaskInput
      {...other}
      mask={'00000000000'}
      inputRef={ref}
      lazy={true}
      onAccept={(value: string) =>
        onChange({ target: { name: props.name, value } })
      }
    />
  )
})
