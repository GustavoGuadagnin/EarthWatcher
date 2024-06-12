import React from 'react'
import { ContentWrapper } from './Informations.styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Information from './Components/Information'
import { PlaceProps } from 'models/Place'
import MapComponent from '../../components/Maps/Components/Maps'
import { formatDate } from '../../utils/formatDate'
import { Features } from 'models/Floods'
import { renderTitle } from '../../utils/renderTitle'
import Loading from '../../components/Card/Loading'
type InformationProps = { 
  itemData: Features | null
  placeDetails: PlaceProps | undefined
}
const Informations = ({itemData,placeDetails}: InformationProps) => {
  if (!placeDetails || !itemData) return <Loading/>
  return (
    <Box mt={'50px'}
  >
    {renderTitle(
            'place',
            'Location Event details',
          )}
    <ContentWrapper>
    <Information titleLeft='Country' titleRight={itemData?.properties.country as string || 'No country date' } />
    <Information titleLeft='Place' titleRight={placeDetails?.features[0]?.place_name as string || 'No place data'} />
    </ContentWrapper >
    {renderTitle(
            'event',
            'Event details',
          )}
    <ContentWrapper>
    <Information titleLeft='Description' titleRight={itemData?.properties.description} />
    <Information titleLeft='Event info' titleRight={itemData?.properties.severitydata.severitytext} />
    <Information titleLeft='Ocurrence Last Record Date' titleRight={formatDate(itemData?.properties.todate as string)} />
    <Information titleLeft='Ocurrence First Record Date' titleRight={formatDate(itemData?.properties.fromdate as string)} />
    <Information titleLeft='Alert Level' titleRight={itemData?.properties.alertlevel as string} />
    <Information titleLeft='Alert Points' titleRight={String(itemData?.properties.alertscore)} />
    <Information titleLeft='Polygon' titleRight={itemData?.properties.polygonlabel as string} />
    <Information titleLeft='Report source' titleRight={itemData?.properties.source as string} />
    </ContentWrapper>
      <MapComponent local={itemData?.properties.country as string} lat={itemData?.geometry.coordinates[0]} long={itemData?.geometry.coordinates[1]} />
  </Box>
  )
}

export default Informations