import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
  Collapse
} from '@mui/material';
import { motion } from 'framer-motion';
import { TINY_HOUSE_MODELS } from '../../constants/tinyHouseModels';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StraightenIcon from '@mui/icons-material/Straighten';
import GroupIcon from '@mui/icons-material/Group';
import EuroIcon from '@mui/icons-material/Euro';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PhotoGallery from '../PhotoGallery';

const ModelCard = ({ model, onSelect }) => {
  const [showGallery, setShowGallery] = useState(false);

  // Photos pour la galerie
  const photos = [
    { url: model.images.exterior, description: 'Vue extérieure' },
    { url: model.images.interior, description: 'Aménagement intérieur' },
    { url: model.images.plan, description: 'Plan détaillé' },
    // Ajoutez d'autres photos spécifiques au modèle ici
  ];

  return (
    <Card
      component={motion.div}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'stone.main',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={model.images.exterior}
          alt={model.name}
          sx={{ 
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          onClick={() => setShowGallery(!showGallery)}
        />
        <Button
          startIcon={<PhotoLibraryIcon />}
          variant="contained"
          onClick={() => setShowGallery(!showGallery)}
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            color: 'forest.main',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          Voir les photos
        </Button>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'forest.main', fontWeight: 'bold' }}>
          {model.name}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip 
            icon={<StraightenIcon />} 
            label={`${model.length}m`}
            sx={{ bgcolor: 'sage.light' }}
          />
          <Chip 
            icon={<GroupIcon />} 
            label={model.length <= 4 ? "1-2 pers." : model.length <= 6 ? "2 pers." : "2-3 pers."}
            sx={{ bgcolor: 'sage.light' }}
          />
          <Chip 
            icon={<EuroIcon />} 
            label={`${model.basePrice.toLocaleString()}€`}
            sx={{ bgcolor: 'sage.light' }}
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {model.description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'forest.main', mb: 1 }}>
            Caractéristiques :
          </Typography>
          {model.features.map((feature, index) => (
            <Typography 
              key={index} 
              variant="body2" 
              sx={{ 
                color: 'bark.main',
                display: 'flex',
                alignItems: 'center',
                '&:before': {
                  content: '"•"',
                  marginRight: 1,
                  color: 'olive.main'
                }
              }}
            >
              {feature}
            </Typography>
          ))}
        </Box>

        <Collapse in={showGallery}>
          <Box sx={{ mt: 3 }}>
            <PhotoGallery photos={photos} title={model.name} />
          </Box>
        </Collapse>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => onSelect(model)}
          sx={{
            bgcolor: 'forest.main',
            color: 'sand.main',
            '&:hover': {
              bgcolor: 'olive.main',
            }
          }}
        >
          Personnaliser
        </Button>
      </Box>
    </Card>
  );
};

const TinyHouseGallery = ({ onModelSelect }) => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {Object.values(TINY_HOUSE_MODELS).map((model) => (
          <Grid item xs={12} md={4} key={model.id}>
            <ModelCard model={model} onSelect={onModelSelect} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TinyHouseGallery;
