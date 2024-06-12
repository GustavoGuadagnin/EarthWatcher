import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Collapse from '@mui/material/Collapse';
import { Box, ModalClose, ModalDialog, Modal as ModalMui  } from '@mui/joy';
import Informations from 'components/Information/Informations';
import { ChargeContext } from '../../NaturalDisasters/Context/index';
import { Button, TextField, Typography } from '@mui/material';
const ModalAlerts = () => {
  const [response,setResponse] = useState<boolean | null>(null)
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const { updateModal,toogleModal, modal,reloadTable } = useContext(ChargeContext)
  useEffect(()=>{
    setResponse(null)
  },[])
  const handleClickConfirm = () => {
    toogleModal('subscribeForm')
    toogleModal('dialogConfirmationSubscribe')
  }
  const [data,setData] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value)
  }
  const handleSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/api/receiveAlert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: data }),
    });
    setResponse(response.ok)
  }
  return (
    <>
    <ModalMui  onClose={() => toogleModal('subscribeForm')} open={modal.subscribeForm}>
    <ModalDialog
      color="neutral"
      size="md"
      variant="plain"

    >
      <ModalClose />
      <Box height={'20vh'} display={'flex'} marginTop={'80px'} justifyContent={'center'}  flexWrap={'wrap'} alignItems={'start'}>
        <Box display={'flex'} justifyContent={'center'}  ><Typography fontSize={'24px'} >Receive information about natural disasters in your email</Typography></Box>
      <Box justifyItems={'center'} width={'auto'} display={'grid'} gridTemplateColumns={'1fr auto'}>
        <form onSubmit={handleSubmit}>
        <input style={{width: '26vw',height:'30px'}} required type='email' onChange={handleChange}
        />
        <Button type='submit' onClick={ () => handleClickConfirm()    } variant="contained">CONFIRM</Button>
        </form>
      </Box>
    </Box>
    </ModalDialog>
  </ModalMui>
  <BootstrapDialog 
        onClose={() =>toogleModal('dialogConfirmationSubscribe')}
        aria-labelledby="customized-dialog-title"
        open={modal.dialogConfirmationSubscribe}
      >
        <IconButton
          aria-label="close"
          onClick={() =>toogleModal('dialogConfirmationSubscribe')}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
          <Box mb={'20px'} mt={'20px'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
            <CheckBoxOutlinedIcon color='success' sx={{width: '120px',height: '120px'}} />
            <Typography textAlign={'center'} width={'100%'} gutterBottom>
            Ready to receive disaster alerts.
            </Typography>
          </Box>
        </DialogContent>

      </BootstrapDialog>
 </>
  )
}

export default ModalAlerts