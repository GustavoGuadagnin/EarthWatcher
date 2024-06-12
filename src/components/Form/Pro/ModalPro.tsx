import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useNavigate } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';
import { Box, ModalClose, ModalDialog, Modal as ModalMui  } from '@mui/joy';
import Informations from 'components/Information/Informations';
import { ChargeContext } from '../../NaturalDisasters/Context/index';
import { Button, TextField, Typography } from '@mui/material';

const ModalPro = () => {
  const navigate = useNavigate();
  const [data,setData] = useState<string>('')
  const [response,setResponse] = useState<any>()
  const { updateModal,toogleModal, modal,reloadTable } = useContext(ChargeContext)
  const handleSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/api/checkEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: data }),
    });
    const responseData = await response.json();
    setResponse(responseData.exists)
    localStorage.setItem('isPro',responseData.exists)
    if (responseData.exists){
      updateModal((prevState)=>({
        ...prevState,
        proModal: false
      }))
      navigate('/naturalDisaster/historic')
      window.location.reload()

    } else {
      alert('not found email')
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value)
  }
  const checkPayment = () => {
    setShowForm(true)
  }
  const handeCloseProModal = () => {
    toogleModal('proModal')
    setShowForm(false)
  }
  const [showForm,setShowForm] = useState<boolean>(false)
  return (
    <ModalMui  open={modal.proModal}>
    <ModalDialog
      color="neutral"
      size="md"
      variant="plain"

    >
    <ModalClose />
      <Box width='auto' height={'20vh'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} textAlign={'center'}>
        { !showForm ? <><Typography width={'100%'} >Conteúdo pago!</Typography>
        <Box width={'100%'}> <Button sx={{height: '30px'}} type='submit' onClick={ () => alert('LOGICA DE PAGAMENTO')    } variant="contained">LIBERAR ACESSO</Button></Box>
        <Typography onClick={checkPayment} ><p  style={{borderBottom: '1px solid black',cursor: 'pointer'}}>Já pagou pelo conteúdo?</p></Typography></> : <form onSubmit={handleSubmit}>
         <Box alignSelf={'center'}  display={'flex'} flexDirection={'column'} gap={'20px'} > 
          <Typography mt={'25px'}>Type your email to check</Typography>
          <input style={{width: '30vw',height:'30px'}} required typeof='email' onChange={handleChange} />
         <Button sx={{width:'30.5vw'}} type='submit' variant="contained">CONFIRM</Button>
         </Box>
        </form> }
      </Box>
    </ModalDialog>
  </ModalMui>
  )
}

export default ModalPro