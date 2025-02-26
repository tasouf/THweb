import React from 'react';
import { Box, Paper, Typography, Rating, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = ({ name, location, rating, testimonial, image }) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ y: -8 }}
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Avatar
          src={image}
          sx={{
            width: 80,
            height: 80,
            border: '4px solid white',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>

      <Box sx={{ mt: 5, mb: 2, display: 'flex', justifyContent: 'center' }}>
        <Rating value={rating} readOnly />
      </Box>

      <Box
        sx={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormatQuoteIcon
          sx={{
            fontSize: 40,
            color: 'primary.main',
            opacity: 0.2,
            transform: 'rotate(180deg)',
            mb: 2,
          }}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            mb: 3,
          }}
        >
          "{testimonial}"
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </Box>
    </Paper>
  );
};

export default TestimonialCard;
