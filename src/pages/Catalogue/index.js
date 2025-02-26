import React, { useState } from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import TinyHouseGallery from '../../components/TinyHouseGallery';
import InteriorConfigurator from '../../components/InteriorConfigurator';
import ModelComparison from '../../components/ModelComparison';
import CompareIcon from '@mui/icons-material/Compare';

const steps = ['Choix du modèle', 'Personnalisation', 'Finalisation'];

const Catalogue = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState(null);
  const [finalConfiguration, setFinalConfiguration] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setActiveStep(1);
  };

  const handleConfigurationComplete = (config) => {
    setFinalConfiguration(config);
    setActiveStep(2);
  };

  const toggleComparison = () => {
    setShowComparison(!showComparison);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #F4EBE2, #D6DFD3)',
        py: 8 
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="gradient-text"
          sx={{ 
            textAlign: 'center',
            mb: 6
          }}
        >
          Configurez Votre Tiny House
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Stepper 
            activeStep={activeStep}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'forest.main'
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'olive.main'
              }
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {activeStep === 0 && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'bark.main'
                }}
              >
                Choisissez votre modèle de base
              </Typography>
              <Button
                variant="outlined"
                startIcon={<CompareIcon />}
                onClick={toggleComparison}
                sx={{
                  color: 'forest.main',
                  borderColor: 'forest.main',
                  '&:hover': {
                    borderColor: 'olive.main',
                    color: 'olive.main'
                  }
                }}
              >
                {showComparison ? 'Masquer le comparatif' : 'Voir le comparatif'}
              </Button>
            </Box>

            {showComparison ? (
              <Box sx={{ mb: 4 }}>
                <ModelComparison />
              </Box>
            ) : null}

            <TinyHouseGallery onModelSelect={handleModelSelect} />
          </>
        )}

        {activeStep === 1 && selectedModel && (
          <>
            <Typography 
              variant="h5" 
              sx={{ 
                textAlign: 'center',
                mb: 4,
                color: 'bark.main'
              }}
            >
              Personnalisez votre {selectedModel.name}
            </Typography>
            <InteriorConfigurator 
              selectedModel={selectedModel}
              onConfigurationComplete={handleConfigurationComplete}
            />
          </>
        )}

        {activeStep === 2 && finalConfiguration && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'forest.main',
                mb: 3
              }}
            >
              Félicitations !
            </Typography>
            <Typography variant="h6" sx={{ color: 'bark.main', mb: 2 }}>
              Votre configuration est terminée
            </Typography>
            <Typography variant="body1" sx={{ color: 'bark.main' }}>
              Un conseiller va vous contacter prochainement pour finaliser votre projet.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Catalogue;
