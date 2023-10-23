import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'
import { DashedDivider } from 'src/components/DashedDivider'
import { CustomToggleButton } from 'src/components/toggle/CustomToggleButton'
import { RemoveIcon } from 'src/components/icons/RemoveIcon'
import { AddIcon } from 'src/components/icons/AddIcon'
import Box from '@mui/material/Box'

export const previousNameDefaultValues = { name: '', from: '', to: '' }

const PreviouslyUsedNamesSection = () => {
  const {
    control,
    setValue,
    clearErrors,
    formState: { defaultValues },
  } = hookFormContext<IPersonalDetailsStage>()

  const [namesUsedBefore, setNamesUsedBefore] = React.useState<boolean>(
    defaultValues?.previouslyUsedNames?.hasPerviouslyUsedNames ?? false
  )

  const { fields, append, remove } = useFieldArray({
    name: 'previouslyUsedNames.names',
    rules: { required: true },
  })

  const handleOtherNamesCheckbox = (value: boolean) => {
    if (!value) {
      clearErrors('previouslyUsedNames')
      setValue('previouslyUsedNames.names', [previousNameDefaultValues])
    }
    setNamesUsedBefore(value)
  }

  return (
    <Box mb={'16px'}>
      <DashedDivider />
      <Typography variant="h6">Varem kasutatud nimed</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomToggleButton
            name="previouslyUsedNames.hasPerviouslyUsedNames"
            control={control}
            label="Varem kasutatud nimed (ka neiupõlvenimi)"
            alignment="row"
            onOtherChange={handleOtherNamesCheckbox}
            sx={{ width: '320px', mt: '10px' }}
          />
        </Grid>
      </Grid>
      {namesUsedBefore &&
        fields.map((item, index) => {
          return (
            <Grid container spacing={2} key={item.id}>
              <Grid item xs={5}>
                <OnlyTextField
                  control={control}
                  capitalize
                  name={`previouslyUsedNames.names.${index}.name` as const}
                  label={'Nimi'}
                  helperText={'Sisestage nimi'}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDateField
                  name={`previouslyUsedNames.names.${index}.from`}
                  label="Alates"
                  helperText="Sisesta kuupäev"
                  control={control}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDateField
                  name={`previouslyUsedNames.names.${index}.to`}
                  label="Kuni"
                  helperText="Sisesta kuupäev"
                  control={control}
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                {index > 0 ? (
                  <RemoveIcon onClick={() => remove(index)} />
                ) : (
                  <AddIcon
                    onClick={() => {
                      append(previousNameDefaultValues)
                    }}
                  />
                )}
              </Grid>
            </Grid>
          )
        })}
    </Box>
  )
}

export const PreviousNames = React.memo(PreviouslyUsedNamesSection)
