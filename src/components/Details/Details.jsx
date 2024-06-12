import React from 'react'
import MapComponent from './Maps/Components/Maps.tsx'
import SatelliteMap from './Maps/Components/Satelite.tsx'
const Details = ({title,x,y}) => {
  return (
<> 
   <MapComponent local={title} x={x} y={y} />
    <SatelliteMap local={title} latitude={x} longitude={y} target={[x, y]} />
    </>
  )
}

export default Details