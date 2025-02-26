import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { FURNITURE_OPTIONS, FINITION_OPTIONS } from '../../constants/tinyHouseModels';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    )}
  </div>
);

const InteriorConfigurator = ({ selectedModel, onConfigurationComplete }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFurniture, setSelectedFurniture] = useState({});
  const [selectedFinitions, setSelectedFinitions] = useState({});
  const [totalPrice, setTotalPrice] = useState(selectedModel.basePrice);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFurnitureChange = (room, item, variant) => {
    setSelectedFurniture(prev => ({
      ...prev,
      [room]: {
        ...prev[room],
        [item]: variant
      }
    }));
    updateTotalPrice();
  };

  const handleFinitionChange = (category, type, option) => {
    setSelectedFinitions(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: option
      }
    }));
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    let price = selectedModel.basePrice;

    // Ajouter le prix des meubles sélectionnés
    Object.entries(selectedFurniture).forEach(([room, items]) => {
      Object.entries(items).forEach(([item, variant]) => {
        if (FURNITURE_OPTIONS[room]?.[item]) {
          price += FURNITURE_OPTIONS[room][item].price;
        }
      });
    });

    // Ajouter le prix des finitions
    Object.entries(selectedFinitions).forEach(([category, types]) => {
      Object.entries(types).forEach(([type, option]) => {
        if (FINITION_OPTIONS[category]?.[type]?.prices[option]) {
          price += FINITION_OPTIONS[category][type].prices[option];
        }
      });
    });

    setTotalPrice(price);
  };

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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              color: 'bark.main',
              '&.Mui-selected': {
                color: 'forest.main'
              }
            }
          }}
        >
          <Tab label="Aménagement" />
          <Tab label="Finitions" />
          <Tab label="Récapitulatif" />
        </Tabs>
      </Box>

      {/* Onglet Aménagement */}
      <TabPanel value={activeTab} index={0}>
        <Grid container spacing={3}>
          {selectedModel.defaultLayout.rooms.map((room) => (
            <Grid item xs={12} key={room}>
              <Card elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    {room.charAt(0).toUpperCase() + room.slice(1)}
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(FURNITURE_OPTIONS[room] || {}).map(([item, details]) => (
                      <Grid item xs={12} sm={6} md={4} key={item}>
                        <FormControl fullWidth>
                          <InputLabel>{details.name}</InputLabel>
                          <Select
                            value={selectedFurniture[room]?.[item] || ''}
                            onChange={(e) => handleFurnitureChange(room, item, e.target.value)}
                            label={details.name}
                          >
                            <MenuItem value="">Aucun</MenuItem>
                            {details.variants.map((variant) => (
                              <MenuItem key={variant} value={variant}>
                                {variant.charAt(0).toUpperCase() + variant.slice(1)}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Onglet Finitions */}
      <TabPanel value={activeTab} index={1}>
        <Grid container spacing={3}>
          {Object.entries(FINITION_OPTIONS).map(([category, types]) => (
            <Grid item xs={12} key={category}>
              <Card elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(types).map(([type, details]) => (
                      <Grid item xs={12} sm={6} key={type}>
                        <FormControl fullWidth>
                          <InputLabel>{details.name}</InputLabel>
                          <Select
                            value={selectedFinitions[category]?.[type] || ''}
                            onChange={(e) => handleFinitionChange(category, type, e.target.value)}
                            label={details.name}
                          >
                            <MenuItem value="">Choisir</MenuItem>
                            {details.options.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)} 
                                ({details.prices[option].toLocaleString()}€)
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Onglet Récapitulatif */}
      <TabPanel value={activeTab} index={2}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
              Modèle sélectionné
            </Typography>
            <Typography variant="body1">
              {selectedModel.name} - {selectedModel.length}m
            </Typography>
            <Chip 
              label={`Prix de base : ${selectedModel.basePrice.toLocaleString()}€`}
              sx={{ mt: 1, bgcolor: 'sage.light' }}
            />
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
              Aménagement choisi
            </Typography>
            {Object.entries(selectedFurniture).map(([room, items]) => (
              <Box key={room} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'olive.main', mb: 1 }}>
                  {room.charAt(0).toUpperCase() + room.slice(1)}
                </Typography>
                {Object.entries(items).map(([item, variant]) => (
                  <Typography key={item} variant="body2" sx={{ ml: 2 }}>
                    • {FURNITURE_OPTIONS[room][item].name} : {variant}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
              Finitions sélectionnées
            </Typography>
            {Object.entries(selectedFinitions).map(([category, types]) => (
              <Box key={category} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'olive.main', mb: 1 }}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Typography>
                {Object.entries(types).map(([type, option]) => (
                  <Typography key={type} variant="body2" sx={{ ml: 2 }}>
                    • {FINITION_OPTIONS[category][type].name} : {option}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'forest.main' }}>
              Prix total : {totalPrice.toLocaleString()}€
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => onConfigurationComplete({
                model: selectedModel,
                furniture: selectedFurniture,
                finitions: selectedFinitions,
                totalPrice
              })}
              sx={{
                bgcolor: 'forest.main',
                color: 'sand.main',
                '&:hover': {
                  bgcolor: 'olive.main',
                }
              }}
            >
              Valider la configuration
            </Button>
          </Box>
        </Stack>
      </TabPanel>
    </Paper>
  );
};

export default InteriorConfigurator;
