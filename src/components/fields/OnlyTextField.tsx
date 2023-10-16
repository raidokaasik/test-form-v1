import { TextField } from '@mui/material'
import React from 'react'
import { IMaskInput } from 'react-imask'
import { onlyLetters } from '../../utils/validations'

interface OnlyTextFieldProps {
  label: string
  helperText: string
  error: boolean
  register: Record<string, Object>
  capitalize?: boolean
}

export const OnlyTextFieldComponent = ({
  label,
  helperText,
  error,
  register,
  capitalize,
}: OnlyTextFieldProps) => (
  <TextField
    {...register}
    inputProps={{
      style: { textTransform: capitalize ? 'capitalize' : 'none' },
    }}
    variant="standard"
    label={label}
    fullWidth
    InputProps={{
      inputComponent: OnlyTextMask as any,
    }}
    error={error}
    helperText={helperText}
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
