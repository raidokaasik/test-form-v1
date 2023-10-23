import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { SxProps } from '@mui/material/styles'
import { Control, Controller } from 'react-hook-form'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded'

enum Alignment {
  row = 'row',
  column = 'column',
}

interface CustomCheckBoxProps {
  alignment?: keyof typeof Alignment
  name: string
  control: Control<any, boolean>
  label: string
  onOtherChange?: (value: boolean) => void
  sx?: SxProps
}

export const CustomCheckBox = ({
  alignment = Alignment.column,
  name,
  control,
  label,
  onOtherChange = () => null,
  sx,
}: CustomCheckBoxProps) => {
  return (
    <FormControl
      sx={{
        minWidth: 'fit-content',
        alignItems: 'center',
        flexDirection: alignment,
        ...sx,
      }}
    >
      <FormLabel sx={{ mr: alignment === 'row' ? '15px' : '' }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, onChange, value, ...fieldProps } }) => {
          return (
            <Checkbox
              {...fieldProps}
              inputRef={ref}
              icon={<RadioButtonUncheckedRoundedIcon />}
              checkedIcon={<RadioButtonCheckedRoundedIcon />}
              sx={{ padding: '5px' }}
              checked={value}
              disableRipple
              onChange={(_, changeValue) => {
                onChange(changeValue)
                onOtherChange(changeValue)
              }}
            />
          )
        }}
      />
    </FormControl>
  )
}
