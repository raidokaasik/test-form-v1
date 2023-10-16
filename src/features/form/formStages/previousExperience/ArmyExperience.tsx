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

export const armyExperienceDefaultValue: IArmyExperience = {
  unitName: '',
  unitType: '',
  location: '',
  rank: '',
  armyServiceNr: '',
  from: null,
  to: null,
}

export interface IArmyExperience {
  id?: string
  unitName: string
  unitType: string
  location: string
  rank: string
  armyServiceNr: string
  from: dateType
  to: dateType
}

type DefaultFormValues = {
  armyExperience: Array<IArmyExperience>
}

const ArmyExperienceSection = () => {
  const {
    control,
    setValue,
    clearErrors,
    formState: { defaultValues },
  } = hookFormContext()
  const [hasArmyExperience, setHasArmyExperience] = useState<boolean>(
    defaultValues?.hasArmyExperience ?? false
  )

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'armyExperience',
    'id'
  >({
    name: 'armyExperience',
  })

  const handleHasArmyExperienceDegreeCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    if (!value) {
      clearErrors('armyExperience')
      setValue('armyExperience', [armyExperienceDefaultValue])
    }
    setValue('hasArmyExperience', value)
    setHasArmyExperience(value)
  }

  return (
    <>
      <Typography variant="body2">
        Kaitseväeteenistus ja sõjaväeline väljaõpe, sealhulgas välisriigis
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl sx={{ flexDirection: 'row', height: '42px' }}>
            <FormLabel
              sx={{ display: 'flex', alignItems: 'center', width: '320px' }}
            >
              Osalenud kaitseväes või omab sõjaväelist õpet
            </FormLabel>
            <Checkbox
              disableRipple
              checked={hasArmyExperience}
              onChange={handleHasArmyExperienceDegreeCheckbox}
            />
          </FormControl>
        </Grid>
      </Grid>

      {hasArmyExperience &&
        fields.map((item: IArmyExperience, index: number) => {
          return (
            <React.Fragment key={item.id}>
              <Divider sx={{ mt: '16px', mb: '16px', borderStyle: 'dashed' }} />
              <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                {index > 0 ? (
                  <SmallButton onClick={() => remove(index)} label="X" />
                ) : (
                  <SmallButton
                    onClick={() => append(armyExperienceDefaultValue)}
                    label="Lisa"
                  />
                )}
              </Box>
              <Grid container spacing={2} mb={'28px'}>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`armyExperience.${index}.unitName` as const}
                    control={control}
                    label="Väeosa nimetus"
                    helperText="Sisestage väeosa"
                  />
                </Grid>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`armyExperience.${index}.unitType` as const}
                    control={control}
                    label="Väeosa liik"
                    helperText="Sisestage väeosa liik"
                  />
                </Grid>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`armyExperience.${index}.location` as const}
                    control={control}
                    label="Asukoht"
                    helperText="Sisestage asukoht"
                  />
                </Grid>
                <Grid item xs={4}>
                  <OnlyTextField
                    capitalize
                    name={`armyExperience.${index}.rank` as const}
                    control={control}
                    label="Auaste"
                    helperText="Sisestage auste"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormDateField
                    control={control}
                    name={`armyExperience.${index}.from` as const}
                    label="Alates"
                    helperText="Sisestage kuupäev"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormDateField
                    control={control}
                    name={`armyExperience.${index}.to` as const}
                    label="Kuni"
                    helperText="Sisestage kuupäev"
                  />
                </Grid>
                <Grid item xs={4}>
                  <OnlyTextField
                    allownumbers
                    name={`armyExperience.${index}.armyServiceNr` as const}
                    control={control}
                    label="Teenistuse number"
                    helperText="Sisestage teenistuse number"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )
        })}
    </>
  )
}

export const ArmyExperience = React.memo(ArmyExperienceSection)
