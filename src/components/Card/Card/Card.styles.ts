import styled from '@mui/system/styled'
import Box from '@mui/material/Box'

export const CardWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  justifyContent:'space-between',
  marginTop: '20px',
  marginBottom: '20px'
}));


export const Card = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#E2E8F0',
    opacity: '0.8',
    transition: 'background-color 0.3s ease',
    padding: '20px',
    borderRadius: '10px'
  }
}));

export const ContainerIcon = styled(Box)(() => ({
  backgroundColor: '#E8F0F2',
  display:"flex",
  alignItems:'center',
  justifyContent: 'center',
  borderRadius: '10px',
  width:"50px",
  height: "50px"
}));



