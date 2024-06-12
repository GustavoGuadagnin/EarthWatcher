import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CycloneOutlinedIcon from '@mui/icons-material/CycloneOutlined';
import VolcanoOutlinedIcon from '@mui/icons-material/VolcanoOutlined';
import InvertColorsOffOutlinedIcon from '@mui/icons-material/InvertColorsOffOutlined';
import LandslideOutlinedIcon from '@mui/icons-material/LandslideOutlined';
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
type IconsProps = {
  FL: JSX.Element
  EQ: JSX.Element
  WF: JSX.Element
  VO: JSX.Element
  TC: JSX.Element
  DR: JSX.Element
  historic: JSX.Element;
};
type IconsEnumProps = {
  type: string | undefined
}

const IconsEnumMapper: IconsProps = {
  FL: <FloodOutlinedIcon />,
  EQ: <LandslideOutlinedIcon />,
  WF: <WhatshotOutlinedIcon />,
  VO: <VolcanoOutlinedIcon />,
  TC: <CycloneOutlinedIcon />,
  DR: <InvertColorsOffOutlinedIcon/>,
  historic: <ScheduleOutlinedIcon/>
};

const IconsEnum = ({ type }:IconsEnumProps) => {
  return IconsEnumMapper[type]
}

export default IconsEnum;
