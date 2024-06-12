import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import NavBar from './navBar.tsx';
import SideBar from './sideBar.tsx';
import { WeatherParams } from '.././models/WeatherForecast.ts';
import Weather from './Weather/Weather.tsx';

const Index = () => {

  return (
    <>
      <NavBar/>
      <SideBar/>
      <Box sx={{gridArea:'content',height:'100vh' }} >
       <Weather />

      </Box>
      </>
  )
}

export default Index