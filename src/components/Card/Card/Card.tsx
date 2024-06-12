import React from 'react'
import * as S from './Card.styles'

import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined';
import { Box, Typography } from '@mui/material'
import { formatDate } from '../../../utils/formatDate'
import { Features, FloodsParams } from 'models/Floods';
import Empty from '../../../components/Empty/Empty'
import { useParams } from 'react-router-dom';
import IconsEnum from '../../../utils/IconsEnum';

type CardProps = {
  flData: FloodsParams
  handleOpenFloodDetails:(item: Features) => void
}
const Card = ({flData,handleOpenFloodDetails}: CardProps) => {
  const params = useParams();
  const { type } = params
  if (!flData.features.length) return (<Empty />)
  return (
    <S.CardWrapper>      
    {flData &&  flData.features.map((item)=>(
<S.Card  onClick={() => handleOpenFloodDetails(item)} sx={{cursor:'pointer'}} >
  <Box display={'grid'}gridTemplateColumns={'50px 50vw'} gridTemplateRows={'auto auto'} alignItems={'center'}>
    <S.ContainerIcon>
     <IconsEnum type={type}  />
      {/* <FloodOutlinedIcon  /> */}
    </S.ContainerIcon>
    <Box ml={'10px'}>
      <Typography >{item.properties.country}</Typography>
      <Typography width={'100%'} gridRow={'2'}>{item.properties.description}</Typography>
    </Box>
  </Box>
  <Box>
    <Typography fontWeight={'100'} color={'#4D7D99'} > {formatDate(item.properties.todate)}</Typography>
  </Box>
</S.Card>
))}</S.CardWrapper>
  )
}

export default Card