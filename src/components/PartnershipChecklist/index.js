import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  LinearProgress,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';

const criteria = [
  {
    id: 'access',
    label: 'Accès facile au terrain',
    info: 'Le terrain doit être accessible par une route carrossable pour l\'installation de la tiny house'
  },
  {
    id: 'utilities',
    label: 'Raccordements disponibles',
    info: 'Eau, électricité et si possible assainissement doivent être à proximité'
  },
  {
    id: 'flat',
    label: 'Zone plane disponible',
    info: 'Une surface plane d\'au moins 50m² est nécessaire pour l\'installation'
  },
  {
    id: 'tourist',
    label: 'Zone touristique attractive',
    info: 'Proximité de points d\'intérêt touristiques, activités de loisirs ou sites naturels'
  },
  {
    id: 'nature',
    label: 'Environnement naturel préservé',
    info: 'Cadre naturel agréable, vue dégagée ou environnement boisé'
  },
  {
    id: 'privacy',
    label: 'Intimité préservée',
    info: 'Espace suffisant par rapport aux habitations voisines'
  },
  {
    id: 'regulations',
    label: 'Conformité réglementaire',
    info: 'Le terrain doit permettre l\'installation temporaire d\'une tiny house'
  }
];

const PartnershipChecklist = () => {
  const [checked, setChecked] = useState({});

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked
    });
  };

  const progress = (Object.values(checked).filter(Boolean).length / criteria.length) * 100;

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
        borderRadius: 3
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: 'forest.main' }}>
        Critères d'Éligibilité
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: 'rgba(164, 180, 148, 0.2)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'olive.main'
            }
          }}
        />
        <Typography variant="body2" sx={{ mt: 1, color: 'bark.main' }}>
          {Math.round(progress)}% des critères validés
        </Typography>
      </Box>

      <FormGroup>
        {criteria.map((criterion) => (
          <FormControlLabel
            key={criterion.id}
            control={
              <Checkbox
                checked={checked[criterion.id] || false}
                onChange={handleChange}
                name={criterion.id}
                sx={{
                  color: 'olive.main',
                  '&.Mui-checked': {
                    color: 'olive.main'
                  }
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: 'bark.main' }}>{criterion.label}</Typography>
                <Tooltip title={criterion.info} placement="right">
                  <InfoIcon sx={{ ml: 1, fontSize: 16, color: 'stone.main' }} />
                </Tooltip>
              </Box>
            }
          />
        ))}
      </FormGroup>

      <Typography 
        variant="body2" 
        sx={{ 
          mt: 2, 
          color: progress === 100 ? 'olive.main' : 'bark.main',
          fontWeight: progress === 100 ? 'bold' : 'normal'
        }}
      >
        {progress === 100 
          ? '✨ Votre terrain semble parfaitement adapté ! Contactez-nous pour commencer l\'aventure.'
          : 'Cochez les critères que votre terrain remplit pour évaluer son potentiel.'}
      </Typography>
    </Paper>
  );
};

export default PartnershipChecklist;
