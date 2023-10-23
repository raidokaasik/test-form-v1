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
          width: { xs: '100%', sm: '800px' },
          margin: 0,
          maxWidth: 'unset',
          maxHeight: 'unset',
          height: { xs: 'calc(100% - 106px)', sm: '90%' },
          borderRadius: { xs: '0px', sm: '2px' },
          position: 'relative',
          top: { xs: '60px', sm: 'unset' },
        },
      }}
    >
      {dialogContent}
    </Dialog>
  )
}
