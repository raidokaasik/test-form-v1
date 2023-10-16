import { TextField } from '@mui/material'
import React from 'react'
import { IMaskInput } from 'react-imask'
import { onlyLetters } from '../../utils/validations'
import { Controller } from 'react-hook-form'
import { capitalizeFirstLetter } from 'src/utils/helpers'

interface OnlyTextFieldProps {
  label: string
  helperText: string
  capitalize?: boolean
  control: any
  name: string
  disabled?: boolean
}

export const OnlyTextFieldComponent = ({
  control,
  label,
  name,
  helperText,
  capitalize,
  disabled = false,
}: OnlyTextFieldProps) => (
  <Controller
    control={control}
    name={name}
    rules={{
      required: helperText,
    }}
    render={({
      field: { ref, onBlur, name, onChange, ...field },
      fieldState,
    }) => (
      <TextField
        {...field}
        inputRef={ref}
        disabled={disabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value
          const capitalized = capitalize ? capitalizeFirstLetter(value) : value
          onChange(capitalized)
        }}
        onBlur={onBlur}
        inputProps={{
          style: { textTransform: capitalize ? 'capitalize' : 'none' },
        }}
        variant="standard"
        label={label}
        fullWidth
        InputProps={{
          inputComponent: OnlyTextMask as any,
        }}
        error={Boolean(fieldState.error)}
        helperText={fieldState.error?.message}
      />
    )}
  />
)

export const OnlyTextField = React.memo(OnlyTextFieldComponent)

const OnlyTextMask = React.forwardRef((props: any, ref) => {
  const { onChange, ...other }: any = props
  return (
    <IMaskInput
      {...other}
      mask={onlyLetters}
      inputRef={ref}
      lazy={true}
      onAccept={(value: string) =>
        onChange({ target: { name: props.name, value } })
      }
    />
  )
})
