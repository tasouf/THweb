import React from 'react';
import { Box, Paper, Typography, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import TerrainIcon from '@mui/icons-material/Terrain';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';

const steps = [
  {
    label: 'Prise de contact',
    description: 'Remplissez le formulaire de contact ou appelez-nous pour discuter de votre projet.',
    icon: EmailIcon
  },
  {
    label: 'Visite du terrain',
    description: 'Nous évaluons ensemble le potentiel de votre terrain et son emplacement.',
    icon: TerrainIcon
  },
  {
    label: 'Validation technique',
    description: 'Vérification des aspects techniques : accès, raccordements, conformité...',
    icon: VerifiedIcon
  },
  {
    label: 'Signature du partenariat',
    description: 'Finalisation des termes du partenariat et signature de la convention.',
    icon: HandshakeIcon
  },
  {
    label: 'Installation de la tiny house',
    description: 'Installation et mise en service de votre première tiny house.',
    icon: HomeIcon
  }
];

const PartnershipTimeline = () => {
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
        Processus de Partenariat
      </Typography>
      <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} active={true}>
              <StepLabel
                StepIconComponent={step.icon}
                sx={{
                  '& .MuiStepLabel-iconContainer': {
                    '& .MuiSvgIcon-root': {
                      color: 'olive.main'
                    }
                  }
                }}
              >
                <Typography variant="subtitle1" sx={{ color: 'bark.main' }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" sx={{ color: 'bark.main', mb: 2 }}>
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Paper>
  );
};

export default PartnershipTimeline;
