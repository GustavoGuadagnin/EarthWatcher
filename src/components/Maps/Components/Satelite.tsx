import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SatelliteMap = ({ local, latitude, longitude, target }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      {/* Adicione a camada de satélite */}
      <TileLayer
        attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3VzdGF2b2d1YWRhZ25pbiIsImEiOiJjbHdpZ2QydGUwN3F3MnNwaXZyeDl4MjExIn0.zDV5Z0VnABgu1GTrB2mAYA`}
      />
      {/* Adicione a camada de ruas */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Adiciona o marcador (target) na localização especificada */}
      {target && (
        <Marker position={target}>
          <Popup>
            {local} <br /> Latitude: {latitude}, Longitude: {longitude}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default SatelliteMap;
// como chamar maps e satelite
     {/* <MapComponent local={item.title} x={item?.geoJson.features[0].geometry.coordinates[0][0][0]} y={item?.geoJson.features[0].geometry.coordinates[0][0][1]} /> */}
      {/* <SatelliteMap local={item.title} latitude={item?.geoJson.features[0].geometry.coordinates[0][0][0]} longitude={item?.geoJson.features[0].geometry.coordinates[0][0][1]} target={[item?.geoJson.features[0].geometry.coordinates[0][0][0], item?.geoJson.features[0].geometry.coordinates[0][0][1]]} />
      <p>{item?.geoJson.features[0].geometry.coordinates[0][0][1]}</p> */}