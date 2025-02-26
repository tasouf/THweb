import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Slider,
  TextField,
  Grid,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';

const RevenueCalculator = () => {
  const [nuitees, setNuitees] = useState(60); // nombre de nuitées sur 3 mois
  const [prixNuitee, setPrixNuitee] = useState(120); // prix moyen par nuitée
  
  // Calculs basés sur les règles spécifiques
  const tauxCommission = 0.20; // 20% de commission
  const revenusParTrimestre = nuitees * prixNuitee * tauxCommission;
  const revenusAnnuels = revenusParTrimestre; // Une seule période de 3 mois par an

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      elevation={0}
      sx={{
        p: 4,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" gutterBottom className="gradient-text">
        Calculez vos revenus potentiels
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>
            Nombre de nuitées (sur 3 mois)
          </Typography>
          <Slider
            value={nuitees}
            onChange={(_, value) => setNuitees(value)}
            min={0}
            max={90}
            step={1}
            valueLabelDisplay="auto"
            sx={{ color: 'primary.main' }}
          />
          <TextField
            value={nuitees}
            onChange={(e) => setNuitees(Number(e.target.value))}
            type="number"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: <Typography>nuits</Typography>,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography gutterBottom>
            Prix moyen par nuitée
          </Typography>
          <Slider
            value={prixNuitee}
            onChange={(_, value) => setPrixNuitee(value)}
            min={50}
            max={200}
            step={5}
            valueLabelDisplay="auto"
            sx={{ color: 'primary.main' }}
          />
          <TextField
            value={prixNuitee}
            onChange={(e) => setPrixNuitee(Number(e.target.value))}
            type="number"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: <Typography>€</Typography>,
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Revenus annuels estimés
        </Typography>
        <Typography
          variant="h3"
          className="gradient-text"
          sx={{ fontWeight: 'bold' }}
        >
          {revenusAnnuels.toLocaleString('fr-FR')} €
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          *Basé sur une commission de 20% et une période d'accueil de 3 mois par an
        </Typography>
      </Box>
    </Paper>
  );
};

export default RevenueCalculator;
