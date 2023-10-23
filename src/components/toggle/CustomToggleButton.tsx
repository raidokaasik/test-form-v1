import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { SxProps } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { isNull } from 'lodash'
import { Control, Controller } from 'react-hook-form'

enum Alignment {
  row = 'row',
  column = 'column',
}

interface CustomToggleButtonProps {
  alignment?: keyof typeof Alignment
  name: string
  control: Control<any, boolean>
  label: string
  onOtherChange?: (value: boolean) => void
  sx?: SxProps
}

export const CustomToggleButton = ({
  alignment = Alignment.column,
  name,
  control,
  label,
  onOtherChange = () => null,
  sx,
}: CustomToggleButtonProps) => {
  return (
    <FormControl
      sx={{
        minWidth: 'fit-content',
        alignItems: 'center',
        flexDirection: alignment,
        ...sx,
      }}
    >
      <FormLabel sx={{ mb: '5px', mr: alignment === 'row' ? '15px' : '' }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, onChange, value, ...fieldProps } }) => {
          return (
            <ToggleButtonGroup
              sx={{
                height: '26px',
              }}
              {...fieldProps}
              exclusive
              aria-label="text alignment"
              value={value}
              onChange={(_, changeValue) => {
                if (!isNull(changeValue)) {
                  onChange(changeValue)
                  onOtherChange(changeValue)
                }
              }}
            >
              <ToggleButton value={true}>Jah</ToggleButton>
              <ToggleButton value={false}>Ei</ToggleButton>
            </ToggleButtonGroup>
          )
        }}
      />
    </FormControl>
  )
}
