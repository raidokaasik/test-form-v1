import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { SmallButton } from 'src/components/buttons/SmallButton'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'

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

  const handleOtherNamesCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    if (!value) {
      clearErrors('previouslyUsedNames')
      setValue('previouslyUsedNames.names', [previousNameDefaultValues])
    }
    setNamesUsedBefore(value)
    setValue('previouslyUsedNames.hasPerviouslyUsedNames', value)
  }

  return (
    <>
      <Typography variant="body2">
        Varem kasutatud nimed (ka neiupõlvenimi)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl sx={{ flexDirection: 'row', height: '42px' }}>
            <FormLabel sx={{ display: 'flex', alignItems: 'center' }}>
              Varem kasutatud nimed
            </FormLabel>
            <Checkbox
              disableRipple
              checked={namesUsedBefore}
              onChange={handleOtherNamesCheckbox}
            />
          </FormControl>
        </Grid>
      </Grid>
      {namesUsedBefore &&
        fields.map((item, index) => {
          return (
            <Grid container spacing={2} key={item.id}>
              <Grid item xs={4}>
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
                xs={2}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                {index > 0 ? (
                  <SmallButton onClick={() => remove(index)} label="X" />
                ) : (
                  <SmallButton
                    onClick={() => {
                      append({ name: '', from: '', to: '' })
                    }}
                    label="Lisa"
                  />
                )}
              </Grid>
            </Grid>
          )
        })}
    </>
  )
}

export const PreviousNames = React.memo(PreviouslyUsedNamesSection)
