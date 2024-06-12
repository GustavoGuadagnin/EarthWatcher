import React from 'react'
import {Separator} from './Information.styles'
import { Box, Typography} from '@mui/material'
type InformationProps = { 
  titleLeft: string
  titleRight: string
}
const Information = ({titleLeft,titleRight}: InformationProps) => {
  return (
    <Box
    display="flex"
    gap={1.25}
    alignItems="center"
    margin={'10px 0px 10px 0px'}
  >
    <Typography  color="#777777">
      {titleLeft}
    </Typography>
    <Separator sx={{ marginTop: '4px' }} />
    <Typography   display="flex" alignItems="center">
      {titleRight}
    </Typography>
  </Box>
  )
}

export default Information