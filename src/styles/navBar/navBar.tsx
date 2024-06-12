import styled from '@mui/system/styled'
import Ul from '@mui/material/Box'

export const Nav = styled(Ul)(() => ({
  width:'fit-content',
  display: 'flex',
  flexWrap: 'wrap',
  gridArea: 'nav',
  gap:'10px',
}));

export default Nav
