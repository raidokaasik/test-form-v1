import { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { PageWrapper } from '../components/PageWrapper'
import { FormDialog } from '../features/form/formDialog/FormDialog'
import { RenderFormStage } from '../features/form/RenderFormStage'

export const Hiring = () => {
  const [openForm, setOpenForm] = useState<boolean>(false)

  return (
    <PageWrapper headerText={'Tule meile tööle'}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ fontWeight: 500 }}
        onClick={() => setOpenForm(!openForm)}
      >
        ISIKUANKEET
      </Button>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Kui Sa oled julge, teotahteline ja õpihimuline inimene ning soovid muuta
        keskkonda turvalisemaks, siis täida meie ankeet, mille leiad kodulehelt,
        ja kandideeri.
      </Typography>
      <Typography fontSize={'14px'} fontWeight={700}>
        Tingimused:
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Sul peab olema lisaks keskharidusele vähemalt kutseharidus, mõnes
        valdkonnas on vajalik kõrgharidus ja võõrkeelte oskus. Sa pead olema
        terve ja füüsiliselt heas vormis Eesti kodanik, kes valdab eesti keelt
        seadusega kehtestatud ulatuses.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Kasuks tuleb eelnev töökogemus, hea suhtlemisoskus ja magistrikraad.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Sobivaks kandidaadiks osutumise korral tuleb Sul taotleda
        riigisaladusele juurdepääsu luba, mis on eelduseks tööle asumisel (vt
        Riigisaladuse ja salastatud välisteabe kaitse kord), ning läbida
        tervisekontroll.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Enne kandideerimist tutvu palun Kaitsepolitseiameti põhimäärusega,
        politseiametnikule kehtestatud kutsesobivusnõuetega ning õigusaktidega,
        mis reguleerivad meie tööd.
      </Typography>
      <FormDialog
        openForm={openForm}
        onCloseHandler={() => setOpenForm(false)}
        dialogContent={<RenderFormStage />}
      />
    </PageWrapper>
  )
}
