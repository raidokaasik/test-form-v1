import React from 'react'
import { IMaskInput } from 'react-imask'
import { onlyLetters, onlyLettersAndNumbers } from '../../utils/validations'
import { Control, Controller } from 'react-hook-form'
import { capitalizeFirstLetter } from 'src/utils/helpers'
import TextField from '@mui/material/TextField'

interface OnlyTextFieldProps {
  label: string
  helperText: string
  control: Control<any, string>
  name: string
  capitalize?: boolean
  disabled?: boolean
  allownumbers?: boolean
}

export const OnlyTextFieldComponent = ({
  control,
  label,
  name,
  helperText,
  capitalize,
  disabled = false,
  allownumbers = false,
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
          inputProps: {
            allownumbers: +allownumbers,
          },
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
      mask={props.allownumbers ? onlyLettersAndNumbers : onlyLetters}
      inputRef={ref}
      lazy={true}
      onAccept={(value: string) =>
        onChange({ target: { name: props.name, value } })
      }
    />
  )
})
