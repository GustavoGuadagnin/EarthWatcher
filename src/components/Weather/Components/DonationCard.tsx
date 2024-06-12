import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { url } from 'inspector';
type DonationCardProps = {
  link: string
  url:string
  title:string
  actualValue:string
  goals:string
}
const DonationCard = ({link,url,title,actualValue,goals}:DonationCardProps) => {
  return (
    <Card sx={{ minWidth: 345,maxWidth: 345,height:450}}>
    <CardMedia
      sx={{ height: 250 }}
      image={url}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography width='180px' variant="body2" color="text.secondary">
      {actualValue} of {goals}
      </Typography>
    </CardContent>
    <CardActions >
      <Button onClick={()=>window.open(link, '_blank')} sx={{justifySelf:'center'}} size="small">Donate</Button>
    </CardActions>
  </Card>
  )
}

export default DonationCard