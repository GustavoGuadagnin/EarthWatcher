import React, { useContext } from 'react'
import Nav from '../styles/navBar/navBar'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ChargeContext } from './NaturalDisasters/Context/index'
import Logo from './Logo'
import useFetch from '../hooks/useFetch'
import ModalAlerts from './Form/Alerts/ModalAlerts';
import ModalPro from './Form/Pro/ModalPro';
const NavBar = () => {
  const navigate = useNavigate();
  const { updateModal,toogleModal, modal,reloadTable } = useContext(ChargeContext)
  const handleOpenSubscribeModal = () => {
    updateModal((prevState)=>({
      ...prevState,
      subscribeForm: true
    }))
    console.log(modal.subscribeForm)
  }
  const handleOpenHistory = () => {
    const isPro = parseInt(localStorage.getItem('isPro') as string);
    if (isPro){

      navigate('/naturalDisaster/historic')
    }
    else{
      updateModal((prevState)=>({
        ...prevState,
        proModal: true
      }))
    }
  }
  return (
    <Nav>
    <ModalAlerts/>
    <ModalPro/>
    <Button   variant="outlined" color='inherit' sx={{backgroundColor:'#e7e7e7',border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/index')} >Home</Button> 
     <Box display={'flex'} flexWrap={'wrap'} width="80vw" justifyContent={'center'}  gap={'2rem'} alignItems={'center'}>
    

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/FL')} >FLOODS</Button> 

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/TC')} >Storms  / Cyclones</Button> 

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/VO')} >VOLCANOS</Button> 

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/DR')} >Droughts</Button> 

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/WF')} > Wildfires</Button>

      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={() => navigate('/naturalDisaster/EQ')} > Earthquakes</Button> 
      <Button  variant="outlined" color='inherit' sx={{border:'none',  borderRadius: '16px', '&:hover': {
          borderRadius: '16px',
        } }} onClick={handleOpenHistory} >HISTORICAL DATA</Button> 

     </Box>
      <Button onClick={handleOpenSubscribeModal} variant="contained">GET ALERTS</Button>

    </Nav>
  )
}

export default NavBar