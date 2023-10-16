import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import React, { useState } from 'react'
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
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'

export const academicEducationDefaultValue: IAcademicEducation = {
  degree: '',
  institution: '',
  from: null,
}

export interface IAcademicEducation {
  id?: string
  degree: string
  institution: string
  from: dateType
}

type DefaultFormValues = {
  academicDegrees: Array<IAcademicEducation>
}

const AcademicEducationSection = () => {
  const {
    control,
    setValue,
    clearErrors,
    formState: { defaultValues },
  } = hookFormContext()
  const [hasAcademicEducation, setHasAcademicEducation] = useState<boolean>(
    defaultValues?.hasAcademicEducation ?? false
  )

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'academicDegrees',
    'id'
  >({
    name: 'academicDegrees',
  })

  const handleHasAcademicDegreeCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    if (!value) {
      clearErrors('academicDegrees')
      setValue('academicDegrees', [academicEducationDefaultValue])
    }
    setValue('hasAcademicEducation', value)
    setHasAcademicEducation(value)
  }

  return (
    <>
      <Typography variant="body2">Akadeemilised ja teaduskraadid</Typography>
      <Typography variant="subtitle2" mb={'10px'}>
        Ka välisriigis antud
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl sx={{ flexDirection: 'row', height: '42px' }}>
            <FormLabel
              sx={{ display: 'flex', alignItems: 'center', width: '180px' }}
            >
              Omab akadeemilist kraadi
            </FormLabel>
            <Checkbox
              disableRipple
              checked={hasAcademicEducation}
              onChange={handleHasAcademicDegreeCheckbox}
            />
          </FormControl>
        </Grid>
      </Grid>

      {hasAcademicEducation &&
        fields.map((item: IAcademicEducation, index: number) => {
          return (
            <React.Fragment key={item.id}>
              <Divider sx={{ mt: '16px', mb: '16px', borderStyle: 'dashed' }} />
              <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                {index > 0 ? (
                  <SmallButton onClick={() => remove(index)} label="X" />
                ) : (
                  <SmallButton
                    onClick={() => append(academicEducationDefaultValue)}
                    label="Lisa"
                  />
                )}
              </Box>
              <Grid container spacing={2} mb={'28px'}>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`academicDegrees.${index}.degree` as const}
                    control={control}
                    label="Kraad"
                    helperText="Sisestage kraad"
                  />
                </Grid>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`academicDegrees.${index}.institution` as const}
                    control={control}
                    label="Kraadi andja nimetus"
                    helperText="Sisestage kraadi andja nimetus"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormDateField
                    control={control}
                    name={`academicDegrees.${index}.from` as const}
                    label="Millal antud"
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

export const AcademicEducation = React.memo(AcademicEducationSection)
