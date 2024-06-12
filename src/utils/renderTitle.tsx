import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
export function renderTitle(icon: 'event' | 'place' , label: string) {
  return (
    <Box alignItems="center" display="flex" gap="8px">
      <Box display={'flex'} borderRadius={'8px'} justifyContent={'center'} alignItems={'center'} width={'40px'} height={'40px'} bgcolor={'#e7e7e7'} >
        {icon === 'place' ? <PlaceOutlinedIcon sx={{alignSelf: 'center'}} /> : <EventNoteOutlinedIcon sx={{alignSelf: 'center'}} /> }
      </Box>
      <Box>
        <Typography >{label}</Typography>
      </Box>
    </Box>
  )
}