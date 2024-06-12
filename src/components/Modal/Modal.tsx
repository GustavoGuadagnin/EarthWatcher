import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Box, ModalClose, ModalDialog, Modal as ModalMui } from '@mui/joy';
import {  Typography } from '@mui/material'
import MapComponent from '../Maps/Components/Maps';
import { Features } from 'models/Floods';
import { ChargeContext } from '../../components/NaturalDisasters/Context/index';
import { formatDate } from '../../utils/formatDate';
import { response } from 'express';
import { PlaceProps } from 'models/Place';

import * as S from './Modal.styles'
import Information from '../Information/Components/Information';
import Informations from '../Information/Informations';
type ModalProps = {
  itemData: Features | null

}
const Modal = ({itemData}:ModalProps) => {
  const headers = useMemo(() => ({
    'Content-Type': 'application/json',
  }), []);
  const [placeDetails,setPlaceDetails] = useState<PlaceProps | null>()

  useEffect(() => {
    setPlaceDetails(null)
  }, [itemData]);


  const getPlaceByCoordinates = async () => {
    const latitude = String(itemData?.geometry.coordinates[0]);
    const longitude = String(itemData?.geometry.coordinates[1]);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?access_token=pk.eyJ1IjoiZ3VzdGF2b2d1YWRhZ25pbiIsImEiOiJjbHdpZ2QydGUwN3F3MnNwaXZyeDl4MjExIn0.zDV5Z0VnABgu1GTrB2mAYA`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }

      const data = await response.json(); 

      setPlaceDetails(data); 
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(()=>{
    getPlaceByCoordinates()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[itemData])


  const { updateModal,toogleModal, modal,reloadTable } = useContext(ChargeContext)
  return (
    <ModalMui onClose={() => toogleModal('floodDetail')} open={modal.floodDetail}>
    <ModalDialog
      color="neutral"
      layout="fullscreen"
      size="lg"
      variant="plain"
      sx={{ overflowY: 'auto' }}
    >
      <ModalClose />
      <Informations itemData={itemData} placeDetails={placeDetails} />
    </ModalDialog>
  </ModalMui>
  )
}

export default Modal