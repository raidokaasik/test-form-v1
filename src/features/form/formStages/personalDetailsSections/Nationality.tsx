import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'
import { CustomToggleButton } from 'src/components/toggle/CustomToggleButton'
import { DashedDivider } from 'src/components/DashedDivider'
import { CustomCheckBox } from 'src/components/checkbox/CustomCheckBox'

const defaultOtherFields = {
  nationality: '',
  from: null,
  to: null,
  present: false,
}

const NationalitySection = () => {
  const {
    setValue,
    clearErrors,
    control,
    formState: { defaultValues },
  } = hookFormContext<IPersonalDetailsStage>()
  const [otherNationality, setOtherNationality] = useState<boolean>(
    defaultValues?.origin?.hasOtherNationalityInfo ?? false
  )
  const [otherNationalityStillValid, setOtherNationalityStillValid] =
    useState<boolean>(defaultValues?.origin?.other?.present ?? false)

  const handleOtherNationality = (checked: boolean) => {
    if (!checked) {
      setValue('origin.other', defaultOtherFields)
      clearErrors('origin.other')
    }
    setOtherNationality(!otherNationality)
  }

  const handleStillValidCheckbox = (checked: boolean) => {
    if (checked) {
      clearErrors('origin.other.to')
      setValue('origin.other.to', null)
    }
    setOtherNationalityStillValid(!otherNationalityStillValid)
  }

  return (
    <>
      <DashedDivider />
      <Typography variant="h6">Kodakondsus</Typography>
      <Typography variant="body2" mt={'5px'} mb={'5px'}>
        Kui Teil on või on olnud lisaks Eesti kodakondsusele veel teise riigi
        kodakondsus, siis millise riigi kodakondsus Teil on või on olnud? Palume
        märkida ajavahemik, millal Teil oli teise riigi kodakondsus või mis
        ajast Teil on teise riigi kodakondsus. Kui taotlete teise riigi
        kodakondsust, siis millise riigi?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OnlyTextField
            control={control}
            capitalize
            name={'origin.nationality'}
            label={'Kodakondsus'}
            helperText={'Sisestage kodakondsus'}
          />
        </Grid>
        <Grid item xs={4}>
          <OnlyTextField
            control={control}
            name={'origin.nativeLanguage'}
            label={'Emakeel'}
            helperText={'Sisestage emakeel'}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomToggleButton
            name={'origin.hasOtherNationalityInfo'}
            onOtherChange={handleOtherNationality}
            control={control}
            label={'Teine kodakondsus'}
          />
        </Grid>
      </Grid>
      {otherNationality && (
        <Grid container spacing={2} mt={'1px'}>
          <Grid item xs={4}>
            <OnlyTextField
              control={control}
              capitalize
              name={'origin.other.nationality'}
              label={'Teise riigi kodakondsus'}
              helperText={'Sisestage kodakondsus'}
            />
          </Grid>
          <Grid item xs={3}>
            <FormDateField
              control={control}
              name={'origin.other.from'}
              label="Alates"
              helperText="Sisesta kuupäev"
            />
          </Grid>
          <Grid item xs={3}>
            <FormDateField
              disabled={otherNationalityStillValid}
              control={control}
              name={'origin.other.to'}
              label="Kuni"
              helperText="Sisesta kuupäev"
            />
          </Grid>
          <Grid item xs={2}>
            <CustomCheckBox
              name="origin.other.present"
              control={control}
              label="Kehtiv"
              onOtherChange={handleStillValidCheckbox}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export const Nationality = React.memo(NationalitySection)
