import TextField from '@mui/material/TextField'
import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'

export enum MaskTypes {
  ID = '00000000000',
  NUMBER = 'Number',
}

interface MaskFieldProps {
  label: string
  helperText: string
  name: string
  control: Control<any, string>
  type: MaskTypes
  disabled?: boolean
  required?: boolean
}

export const MaskField = ({
  label,
  helperText,
  control,
  name,
  type,
  disabled = false,
  required = true,
}: MaskFieldProps) => (
  <Controller
    control={control}
    name={name}
    rules={{
      required: disabled || !required ? false : helperText,
      minLength: {
        value: type === MaskTypes.ID ? 11 : 0,
        message: 'Sisestage 11 numbrit',
      },
    }}
    render={({
      field: { ref, onBlur, onChange, name, ...field },
      fieldState,
    }) => (
      <TextField
        {...field}
        inputRef={ref}
        disabled={disabled}
        variant="standard"
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        fullWidth
        InputProps={{
          inputProps: {
            maskType: type,
          },
          inputComponent: IdField as any,
        }}
        error={Boolean(fieldState.error)}
        helperText={fieldState.error?.message}
      />
    )}
  />
)

const IdField = React.forwardRef((props: any, ref) => {
  const { maskType, onChange, ...other }: any = props
  return (
    <IMaskInput
      {...other}
      mask={getMask(maskType)}
      inputRef={ref}
      lazy={true}
      onAccept={(value: string) =>
        onChange({ target: { name: props.name, value } })
      }
    />
  )
})

const getMask = (value: MaskTypes) => {
  switch (value) {
    case MaskTypes.ID:
      return '00000000000'
    case MaskTypes.NUMBER:
      return Number
    default:
      break
  }
}
