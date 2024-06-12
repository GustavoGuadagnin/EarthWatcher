
import { Box, Typography,Button } from '@mui/material';
import useFetch from '../../../hooks/useFetch'
import React, { useContext,useEffect, useMemo, useState } from 'react'
import {Features, FloodsParams} from '../../../models/Floods'
import * as S from './Floods.style'
import { ChargeContext } from '../Context/index'
import { ModalClose, ModalDialog} from '@mui/joy';
import MapComponent from '../../Maps/Components/Maps';
import Loading from '../../Card/Loading';
import Card from '../../Card/Card/Card';
import { M } from 'vite/dist/node/types.d-jgA8ss1A';
import { url } from 'inspector';
import { response } from 'express';
import Modal from '../../Modal/Modal';
import { useLocation, useParams } from 'react-router-dom';
import { naturalDisasterEnum } from '../../../utils/naturalDisasterEnum'
import ModalAlerts from '../../Form/Alerts/ModalAlerts';

const Floods = () => {
  const location = useLocation()
  const params = useParams();
  const { type } = params
  const headers = useMemo(() => ({
    'Content-Type': 'application/json',
  }), []);

  const { updateModal,toogleModal, modal,reloadTable } = useContext(ChargeContext)
  let url = ''
  if(type === 'historic'){
    url = 'https://www.gdacs.org/gdacsapi/api/events/geteventlist/ARCHIVE?eventlist=EQ;TC;FL;VO;WF'
  }
  if(type==='DR'){
    url = 'https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=DR'
  }
  if(type !== 'DR' && type !== 'historic'){
    url = `http://127.0.0.1:5000/api/events-by-type/${type}`
  }
  const {data,error,loading} = useFetch(url,headers)
  console.log(data,'aq')
  const [flData,setFlData] = useState<FloodsParams| null>(data)
  const [itemData,setItemData] = useState<Features| null>()
  const handleOpenFloodDetails = (item: Features) => {
    setItemData(item)
    updateModal((prevState) => ({
      ...prevState,
      floodDetail: true
    }))
    console.log(itemData)
  }
  
  useEffect(() => {
    console.log('AQUI')
    if (data) {
      setFlData(data as FloodsParams); 
    }
  }, [data,itemData]);

  useEffect(()=>{
    setFlData(null)
  },[])
  
  useEffect(() => {
    setItemData(null)
    setFlData(null)
  }, [location]);

  if (!flData) return <Loading/>

  return (
      <Box sx={{gridArea:'content'}}>
        <Box mb={'50px'} mt={'50px'} display={'flex'} justifyContent={'space-between'}>
          {flData &&         <Typography fontSize={'28px'}>{naturalDisasterEnum[type] as string}</Typography>  }
        </Box>
        <Modal itemData={itemData as Features | null} />
        <Card flData={flData} handleOpenFloodDetails={handleOpenFloodDetails} />
      </Box>
  )
}

export default Floods
