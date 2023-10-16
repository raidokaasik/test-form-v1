import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export const FormHeader = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography textAlign={'right'} fontSize={'13px'}>
          Siseministri 28. detsembri 2009. aasta määruse nr 96 „Isikuankeedi
          vorm“ Lisa
        </Typography>
        <Typography textAlign={'right'} fontSize={'13px'}>
          (siseministri 21. juuni 2017. aasta määruse nr 31 lisa sõnastuses)
        </Typography>
      </Grid>
    </Grid>
  )
}
