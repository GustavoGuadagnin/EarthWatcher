import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import React from 'react'

const Loading = () => {
  return (
    <Box mt={'50px'} display='flex' flexWrap={'wrap'} flexDirection={'column'} height={'100vh'} gap={'10px'} sx={{gridArea:'content'}}>
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px',mt: '50px'}} animation={"wave"} />
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} />  
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} />
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} />  
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} />
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} />  
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
    <Skeleton variant="rectangular" sx={{borderRadius: '5px',height: '50px'}} animation={"wave"} /> 
  </Box>)
  
}

export default Loading