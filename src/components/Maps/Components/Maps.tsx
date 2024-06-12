import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = ({ local, long,lat }: { local: string, long: number | undefined, lat: number | undefined }) => {

  const position = [long, lat]; 

  return (
    <MapContainer center={position as LatLngExpression} zoom={5} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position as LatLngExpression }>
        <Popup>
          {local} <br /> Latitude: {lat}, Longitude: {long}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
