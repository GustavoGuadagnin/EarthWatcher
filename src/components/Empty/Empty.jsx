import { Box, Typography } from '@mui/material'
import React from 'react'

const Empty = () => {
  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} >
      <img height={'500px'}  width={'500px'}  src="/EmptyImage.svg" alt="empty_image" />
      <Typography>No data available, Try other natural events listed above.</Typography>
    </Box>
  )
}

export default Empty