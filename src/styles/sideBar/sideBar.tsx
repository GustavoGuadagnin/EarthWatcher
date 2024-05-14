import styled from '@mui/system/styled'
import Box from '@mui/material/Box'

export const SideNav = styled(Box)(() => ({
  display: 'flex',
  flexDirection:'column',
  flexWrap: 'wrap',
  gridArea: 'sidenav',
  gap:'10px',
}));

export default SideNav


