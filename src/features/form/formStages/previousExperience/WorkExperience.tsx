import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { DashedDivider } from 'src/components/DashedDivider'
import {
  FormDateField,
  dateType,
} from 'src/components/fields/FormDateField/FormDateField'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import { RemoveIcon } from 'src/components/icons/RemoveIcon'
import { AddIcon } from 'src/components/icons/AddIcon'

export const workExperienceDefaultValue: IWorkExperience = {
  id: '',
  employer: '',
  location: '',
  from: null,
  to: null,
  position: '',
}

export interface IWorkExperience {
  id?: string
  employer: string
  location: string
  from: dateType
  to: dateType
  position: string
}

interface DefaultFormValues {
  workExperience: Array<IWorkExperience>
}

const WorkExperienceSection = () => {
  const { control } = hookFormContext()

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'workExperience',
    'id'
  >({
    name: 'workExperience',
  })
  return (
    <>
      <Typography variant="h6">Varasem töötamine</Typography>
      {fields.map((item: IWorkExperience, index: number) => {
        return (
          <React.Fragment key={item.id}>
            <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
              {index > 0 ? (
                <RemoveIcon onClick={() => remove(index)} />
              ) : (
                <AddIcon onClick={() => append(workExperienceDefaultValue)} />
              )}
            </Box>
            <Grid container spacing={2} mb={'28px'}>
              <Grid item xs={4}>
                <OnlyTextField
                  capitalize
                  name={`workExperience.${index}.employer` as const}
                  control={control}
                  label="Tööandja"
                  helperText="Sisestage tööandja"
                />
              </Grid>
              <Grid item xs={4}>
                <OnlyTextField
                  capitalize
                  name={`workExperience.${index}.location` as const}
                  control={control}
                  label="Asukoht"
                  helperText="Sisestage asukoht"
                />
              </Grid>
              <Grid item xs={4}>
                <OnlyTextField
                  capitalize
                  name={`workExperience.${index}.position` as const}
                  control={control}
                  label="Töökoht/Ametikoht"
                  helperText="Sisestage töökoht/ametikoht"
                />
              </Grid>
              <Grid item xs={6}>
                <FormDateField
                  control={control}
                  name={`workExperience.${index}.from` as const}
                  label="Alates"
                  helperText="Sisestage kuupäev"
                />
              </Grid>
              <Grid item xs={6}>
                <FormDateField
                  control={control}
                  name={`workExperience.${index}.to` as const}
                  label="Kuni"
                  helperText="Sisestage kuupäev"
                />
              </Grid>
            </Grid>
            <DashedDivider />
          </React.Fragment>
        )
      })}
    </>
  )
}

export const WorkExperience = React.memo(WorkExperienceSection)
