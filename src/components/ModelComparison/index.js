import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { TINY_HOUSE_MODELS } from '../../constants/tinyHouseModels';

const features = {
  dimensions: {
    name: 'Dimensions',
    getValue: (model) => `${model.length}m x ${model.width}m x ${model.height}m`
  },
  surface: {
    name: 'Surface habitable',
    getValue: (model) => `${model.length * model.width}m²`
  },
  capacite: {
    name: 'Capacité',
    getValue: (model) => {
      if (model.length <= 4) return '1-2 personnes';
      if (model.length <= 6) return '2 personnes';
      return '2-3 personnes';
    }
  },
  chambreSeparee: {
    name: 'Chambre séparée',
    getValue: (model) => model.length >= 8
  },
  cuisine: {
    name: 'Type de cuisine',
    getValue: (model) => {
      if (model.length <= 4) return 'Kitchenette';
      if (model.length <= 6) return 'Cuisine équipée';
      return 'Grande cuisine';
    }
  },
  rangement: {
    name: 'Capacité rangement',
    getValue: (model) => {
      if (model.length <= 4) return 'Basique';
      if (model.length <= 6) return 'Standard';
      return 'Optimisée';
    }
  },
  salleDeBain: {
    name: 'Salle de bain',
    getValue: (model) => {
      if (model.length <= 4) return 'Compacte';
      if (model.length <= 6) return 'Standard';
      return 'Spacieuse';
    }
  },
  prix: {
    name: 'Prix de base',
    getValue: (model) => `${model.basePrice.toLocaleString()}€`
  }
};

const ModelComparison = () => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'forest.main', mb: 3 }}>
          Comparatif des Modèles
        </Typography>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'forest.main',
                    borderBottom: '2px solid',
                    borderColor: 'forest.main'
                  }}
                >
                  Caractéristiques
                </TableCell>
                {Object.values(TINY_HOUSE_MODELS).map((model) => (
                  <TableCell 
                    key={model.id}
                    align="center"
                    sx={{ 
                      fontWeight: 'bold',
                      color: 'forest.main',
                      borderBottom: '2px solid',
                      borderColor: 'forest.main'
                    }}
                  >
                    {model.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(features).map(([key, feature]) => (
                <TableRow
                  key={key}
                  sx={{
                    '&:nth-of-type(odd)': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  }}
                >
                  <TableCell 
                    component="th" 
                    scope="row"
                    sx={{ color: 'bark.main' }}
                  >
                    {feature.name}
                  </TableCell>
                  {Object.values(TINY_HOUSE_MODELS).map((model) => (
                    <TableCell 
                      key={`${model.id}-${key}`}
                      align="center"
                      sx={{ color: 'bark.main' }}
                    >
                      {typeof feature.getValue(model) === 'boolean' ? (
                        feature.getValue(model) ? (
                          <CheckIcon sx={{ color: 'forest.main' }} />
                        ) : (
                          <CloseIcon sx={{ color: 'clay.main' }} />
                        )
                      ) : (
                        <Typography variant="body2">
                          {feature.getValue(model)}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
            Points forts par modèle
          </Typography>
          <Stack spacing={2}>
            {Object.values(TINY_HOUSE_MODELS).map((model) => (
              <Box key={model.id}>
                <Typography variant="subtitle1" sx={{ color: 'olive.main', mb: 1 }}>
                  {model.name}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {model.features.map((feature, index) => (
                    <Chip 
                      key={index}
                      label={feature}
                      sx={{ 
                        bgcolor: 'sage.light',
                        color: 'bark.main'
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default ModelComparison;
