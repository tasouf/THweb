import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const PartnerCard = ({ name, description, logo, type }) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
        <CardMedia
          component="img"
          image={logo}
          alt={name}
          sx={{
            width: 'auto',
            maxHeight: '120px',
            objectFit: 'contain'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            borderBottom: '2px solid',
            borderImage: 'linear-gradient(to right, #445D48, #7A8B69) 1',
            pb: 1,
            mb: 2
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'inline-block',
            px: 2,
            py: 0.5,
            borderRadius: '12px',
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
