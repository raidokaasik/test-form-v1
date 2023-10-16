import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { OnlyTextField } from '../../../../components/fields/OnlyTextField'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import dayjs, { Dayjs } from 'dayjs'
import { FormDateField } from '../../../../components/fields/FormDateField/FormDateField'
import { setCaptializedValueOptions } from 'src/utils/helpers'

const defaultOtherFields = {
  nationality: '',
  from: null,
  to: null,
  present: false,
}

const NationalitySection = () => {
  const {
    register,
    setValue,
    control,
    formState: { defaultValues, errors },
  } = hookFormContext<IPersonalDetailsStage>()
  const [otherNationality, setOtherNationality] = useState<boolean>(
    defaultValues?.origin?.hasOtherNationalityInfo ?? false
  )
  const [otherNationalityStillValid, setOtherNationalityStillValid] =
    useState<boolean>(defaultValues?.origin?.other?.present ?? false)
  const [fromDate, setFromDate] = useState<Dayjs | null>(
    defaultValues?.origin?.other?.from
      ? (defaultValues?.origin?.other?.from as Dayjs)
      : null
  )
  const [toDate, setToDate] = useState<Dayjs | null>(
    defaultValues?.origin?.other?.from
      ? (defaultValues?.origin?.other?.to as Dayjs)
      : null
  )

  const handleOtherNationalityCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      setValue('origin.other', defaultOtherFields)
    }
    setOtherNationality(!otherNationality)
    setValue('origin.hasOtherNationalityInfo', !otherNationality)
  }

  const handleStillValidCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setValue('origin.other.to', null)
      setToDate(null)
    }
    setOtherNationalityStillValid(!otherNationalityStillValid)
    setValue('origin.other.present', !otherNationalityStillValid)
  }

  return (
    <>
      <Typography variant="body2">
        Kui Teil on või on olnud lisaks Eesti kodakondsusele veel teise riigi
        kodakondsus, siis millise riigi kodakondsus Teil on või on olnud? Palume
        märkida ajavahemik, millal Teil oli teise riigi kodakondsus või mis
        ajast Teil on teise riigi kodakondsus. Kui taotlete teise riigi
        kodakondsust, siis millise riigi?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OnlyTextField
            register={{
              ...register('origin.nationality', {
                required: 'Sisestage kodakondsus',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Kodakondsus'}
            error={Boolean(errors?.origin?.nationality)}
            helperText={errors?.origin?.nationality?.message as string}
          />
        </Grid>
        <Grid item xs={4}>
          <OnlyTextField
            register={{
              ...register('origin.nativeLanguage', {
                required: 'Sisestage emakeel',
              }),
            }}
            label={'Emakeel'}
            error={Boolean(errors?.origin?.nativeLanguage)}
            helperText={errors?.origin?.nativeLanguage?.message as string}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel>Teine kodakondsus</FormLabel>
            <Checkbox
              checked={otherNationality}
              disableRipple
              onChange={handleOtherNationalityCheckbox}
            />
          </FormControl>
        </Grid>
      </Grid>
      {otherNationality && (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <OnlyTextField
              register={{
                ...register('origin.other.nationality', {
                  required: 'Sisesta kodakondsus',
                }),
              }}
              label={'Teise riigi kodakondsus'}
              error={Boolean(errors?.origin?.other?.nationality)}
              helperText={errors?.origin?.other?.nationality?.message as string}
            />
          </Grid>
          <Grid item xs={3}>
            <FormDateField
              control={control}
              name={'origin.other.from'}
              label="Alates"
              helperText="Sisesta kuupäev"
            />
            {/* <FormDateField
              value={fromDate}
              handleChange={(value: Dayjs | null) => {
                setFromDate(value)
                setValue('origin.other.from', dayjs(value))
              }}
              label={'Alates'}
            /> */}
          </Grid>
          <Grid item xs={3}>
            <FormDateField
              control={control}
              name={'origin.other.to'}
              label="Kuni"
              helperText="Sisesta kuupäev"
            />
            {/* <FormDateField
              value={toDate}
              handleChange={(value: Dayjs | null) => {
                setToDate(value)
                setValue('origin.other.to', dayjs(value))
              }}
              label={'Kuni'}
              disabled={otherNationalityStillValid}
            /> */}
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <FormLabel>Kehtiv</FormLabel>
              <Checkbox
                sx={{ pb: '16px' }}
                checked={otherNationalityStillValid}
                disableRipple
                onChange={handleStillValidCheckbox}
              />
            </FormControl>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export const Nationality = React.memo(NationalitySection)
