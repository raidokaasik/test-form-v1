import Dialog from '@mui/material/Dialog'

interface FormDialogProps {
  openForm: boolean
  onCloseHandler: () => void
  dialogContent: React.ReactElement
}

export const FormDialog = ({
  openForm,
  onCloseHandler,
  dialogContent,
}: FormDialogProps) => {
  return (
    <Dialog
      open={openForm}
      onClose={onCloseHandler}
      PaperProps={{
        sx: {
          boxSizing: 'border-box',
          width: { xs: '100%', sm: '720px' },
          margin: 0,
          maxWidth: 'unset',
          maxHeight: 'unset',
          height: { xs: 'calc(100% - 113px)', sm: '90%' },
          borderRadius: { xs: '0px', sm: '2px' },
          position: 'relative',
          // width: '100%',
          // margin: 0,
          // height: { xs: '100vh', sm: '90vh' },
          top: { xs: '60px', sm: 'unset' },
        },
      }}
    >
      {dialogContent}
    </Dialog>
  )
}
