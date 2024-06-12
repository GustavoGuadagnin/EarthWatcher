import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
export const OuterBox = styled(Box)(() => ({
  position: 'relative',
  justifyContent: 'center',
  display: 'grid',
  gridTemplate: `
  " nav nav nav " auto
  " content content content " auto
  " content content content " auto
  " footer footer footer" 1fr
  / 150px
  `,
  gap: 24,
  alignItems: 'center',
  margin: "20px auto",
  marginRight: "0px"
}));
export default OuterBox


