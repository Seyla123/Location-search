import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Box } from "@mui/material";
import type { Place } from '../types/Place';
import '../styles/MapStyles.css'
interface MapProps {
  place: Place | null;
}

// This component handles the map movement
function MapEffect({ place }: { place: Place | null }) {
  const map = useMap(); // This hook gives access to the map instance

  useEffect(() => {
    if (place && place.latitude !== undefined && place.longitude !== undefined) {
      map.flyTo([place.latitude, place.longitude], 10);
    }
  }, [place, map]);

  return null;
}

function Map({ place }: MapProps) {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <MapContainer
        center={[12.5657, 104.9910]} // Cambodia coordinates
        zoom={12}
        scrollWheelZoom
        style={{ width: "100%", height: "100%",  }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {place && place.latitude !== undefined && place.longitude !== undefined && (
          <Marker position={[place.latitude, place.longitude]} />
        )}
        {/* This component handles map flyTo when place changes */}
        <MapEffect place={place} />
      </MapContainer>
    </Box>
  );
}

export default Map;
