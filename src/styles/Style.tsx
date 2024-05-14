import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
export const OuterBox = styled(Box)(() => ({
  position: 'relative',
  display: 'grid',
  gridTemplate: `
  "logo nav nav nav " auto
  "sidenav content content content " auto
  "sidenav content content content " auto
  "footer footer footer footer" 1fr
  / 150px
  `,
  gap: 24,
  alignItems: 'center',
  maxWidth: "auto",
  margin: "20px auto",
  marginRight: "5px"
}));
export default OuterBox


