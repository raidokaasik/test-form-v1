import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import {
  FormDateField,
  dateType,
} from 'src/components/fields/FormDateField/FormDateField'
import { RemoveIcon } from 'src/components/icons/RemoveIcon'
import { AddIcon } from 'src/components/icons/AddIcon'
import { DashedDivider } from 'src/components/DashedDivider'
import { CustomToggleButton } from 'src/components/toggle/CustomToggleButton'

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

  const handleHasArmyExperienceDegreeCheckbox = (value: boolean) => {
    if (!value) {
      clearErrors('armyExperience')
      setValue('armyExperience', [armyExperienceDefaultValue])
    }
    setHasArmyExperience(value)
  }

  return (
    <>
      <Typography variant="h6">
        Kaitseväeteenistus ja sõjaväeline väljaõpe, sealhulgas välisriigis
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} mt="16px">
          <CustomToggleButton
            name={'hasArmyExperience'}
            label="Osalenud kaitseväes või omab sõjaväelist õpet"
            control={control}
            onOtherChange={handleHasArmyExperienceDegreeCheckbox}
            alignment="row"
          />
        </Grid>
      </Grid>

      {hasArmyExperience &&
        fields.map((item: IArmyExperience, index: number) => {
          return (
            <React.Fragment key={item.id}>
              <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                {index > 0 ? (
                  <RemoveIcon onClick={() => remove(index)} />
                ) : (
                  <AddIcon onClick={() => append(armyExperienceDefaultValue)} />
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
              <DashedDivider />
            </React.Fragment>
          )
        })}
    </>
  )
}

export const ArmyExperience = React.memo(ArmyExperienceSection)
