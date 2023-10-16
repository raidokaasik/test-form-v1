import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { SmallButton } from 'src/components/buttons/SmallButton'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import {
  FormDateField,
  dateType,
} from 'src/components/fields/FormDateField/FormDateField'

export const generalEducationDefaultValue: IGeneralEducation = {
  from: null,
  to: null,
  institution: '',
  diplomaNr: '',
  diplomaDate: null,
  acquiredEducation: '',
}

export interface IGeneralEducation {
  id?: string
  from: dateType
  to: dateType
  institution: string
  diplomaNr: string
  diplomaDate: dateType
  acquiredEducation: string
}

type DefaultFormValues = {
  generalEducation: Array<IGeneralEducation>
}

const GeneralEducationSection = () => {
  const { control } = hookFormContext()

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'generalEducation',
    'id'
  >({
    name: 'generalEducation',
  })

  return (
    <>
      <Typography variant="body2">Üldharidus</Typography>
      <Typography variant="subtitle2" mb={'10px'}>
        Viimane üldhariduskool, õppimine kutse- või kõrgharidusõppeasutuses
      </Typography>
      {/* <SmallButton
        onClick={() => append(generalEducationDefaultValue)}
        label="Lisa"
      /> */}
      {fields.map((item: IGeneralEducation, index: number) => {
        return (
          <React.Fragment key={item.id}>
            <Divider sx={{ mt: '16px', mb: '16px', borderStyle: 'dashed' }} />
            <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
              {index > 0 ? (
                <SmallButton onClick={() => remove(index)} label="X" />
              ) : (
                <SmallButton
                  onClick={() => append(generalEducationDefaultValue)}
                  label="Lisa"
                />
              )}
            </Box>
            <Grid container spacing={2} mb={'28px'}>
              <Grid item xs={6}>
                <OnlyTextField
                  capitalize
                  name={`generalEducation.${index}.institution` as const}
                  control={control}
                  label="Kooli/asutuse nimetus "
                  helperText="Sisestage kool või asutus"
                />
              </Grid>
              <Grid item xs={6}>
                <OnlyTextField
                  capitalize
                  name={`generalEducation.${index}.acquiredEducation` as const}
                  control={control}
                  label="Omandatud haridustase / kursus / eriala"
                  helperText="Sisestage haridustase/kursus/eriala"
                />
              </Grid>
              <Grid item xs={6}>
                <FormDateField
                  control={control}
                  name={`generalEducation.${index}.from` as const}
                  label="Alates"
                  helperText="Sisestage kuupäev"
                />
              </Grid>
              <Grid item xs={6}>
                <FormDateField
                  control={control}
                  name={`generalEducation.${index}.to` as const}
                  label="Kuni"
                  helperText="Sisestage kuupäev"
                />
              </Grid>
              <Grid item xs={6}>
                <OnlyTextField
                  allownumbers
                  name={`generalEducation.${index}.diplomaNr` as const}
                  control={control}
                  label="Diplomi/tunnistuse/õiendi number"
                  helperText="Sisestage diplomi/tunnistuse/õiendi number"
                />
              </Grid>
              <Grid item xs={6}>
                <FormDateField
                  control={control}
                  name={`generalEducation.${index}.diplomaDate` as const}
                  label="Välja antud"
                  helperText="Sisestage kuupäev"
                />
              </Grid>
            </Grid>
          </React.Fragment>
        )
      })}
    </>
  )
}

export const GeneralEducation = React.memo(GeneralEducationSection)
