import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
  {
    name: "Gorges de la Dordogne",
    position: [45.2282, 2.0341],
    description: "Zone touristique majeure, idéale pour les tiny houses"
  },
  {
    name: "Plateaux du Lot",
    position: [44.9953, 1.8685],
    description: "Emplacement paisible avec vue panoramique"
  },
  {
    name: "Vallées de la Corrèze",
    position: [45.2647, 1.7714],
    description: "Cadre naturel exceptionnel proche des activités"
  }
];

const PartnershipMap = () => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      elevation={0}
      sx={{
        p: 3,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        overflow: 'hidden'
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: 'forest.main' }}>
        Zones Privilégiées
      </Typography>
      <Box sx={{ height: 400, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
        <MapContainer
          center={[45.2647, 1.7714]}
          zoom={9}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>
                <Typography variant="subtitle1">{location.name}</Typography>
                <Typography variant="body2">{location.description}</Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Paper>
  );
};

export default PartnershipMap;
