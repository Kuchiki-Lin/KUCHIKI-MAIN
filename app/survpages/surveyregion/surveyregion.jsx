import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { useRef } from 'react';
import RegionSearchInput from './regionSearch';

export default function WorldMapWithDraw() {
  const featureGroupRef = useRef(null);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '600px', width: '100%' }}
    >
      {/* ✅ Input is now inside MapContainer so it has map context */}
      <RegionSearchInput />

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup ref={featureGroupRef}>
        <EditControl
          position="topright"
          onCreated={(e) => console.log('Shape created', e)}
          draw={{
            rectangle: true,
            polygon: true,
            circle: false,
            polyline: false,
            marker: false,
            circlemarker: false
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
