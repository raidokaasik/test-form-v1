import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import {
  FormDateField,
  dateType,
} from 'src/components/fields/FormDateField/FormDateField'
import { CustomToggleButton } from 'src/components/toggle/CustomToggleButton'
import { RemoveIcon } from 'src/components/icons/RemoveIcon'
import { AddIcon } from 'src/components/icons/AddIcon'
import { DashedDivider } from 'src/components/DashedDivider'

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

  const handleHasAcademicDegreeCheckbox = (value: boolean) => {
    if (!value) {
      clearErrors('academicDegrees')
      setValue('academicDegrees', [academicEducationDefaultValue])
    }
    setHasAcademicEducation(value)
  }

  return (
    <>
      <Typography variant="h6">Akadeemilised ja teaduskraadid</Typography>
      <Typography variant="body2" mt={'5px'} mb={'10px'}>
        Ka välisriigis antud
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomToggleButton
            name="hasAcademicEducation"
            control={control}
            label="Omab akadeemilist kraadi"
            alignment="row"
            onOtherChange={handleHasAcademicDegreeCheckbox}
          />
        </Grid>
      </Grid>

      {hasAcademicEducation &&
        fields.map((item: IAcademicEducation, index: number) => {
          return (
            <React.Fragment key={item.id}>
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
                <Grid item xs={3}>
                  <FormDateField
                    control={control}
                    name={`academicDegrees.${index}.from` as const}
                    label="Millal antud"
                    helperText="Sisestage kuupäev"
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  {index > 0 ? (
                    <RemoveIcon onClick={() => remove(index)} />
                  ) : (
                    <AddIcon
                      onClick={() => append(academicEducationDefaultValue)}
                    />
                  )}
                </Grid>
              </Grid>
              <DashedDivider />
            </React.Fragment>
          )
        })}
    </>
  )
}

export const AcademicEducation = React.memo(AcademicEducationSection)
