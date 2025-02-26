import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import ContactForm from '../../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const ContactInfo = ({ icon, title, content }) => (
  <Box
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      mb: 3,
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        color: 'white',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom className="gradient-text" sx={{ mb: 2 }}>
          Contactez-nous
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          Une question ? Un projet ? N'hésitez pas à nous contacter
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" gutterBottom className="gradient-text">
                Nos Coordonnées
              </Typography>
              
              <ContactInfo
                icon={<LocationOnIcon />}
                title="Adresse"
                content="123 Route des Tiny Houses, 19000 Tulle, Corrèze"
              />
              
              <ContactInfo
                icon={<PhoneIcon />}
                title="Téléphone"
                content="05.XX.XX.XX.XX"
              />
              
              <ContactInfo
                icon={<EmailIcon />}
                title="Email"
                content="contact@tiny-houses-correze.fr"
              />
              
              <Typography variant="body1" sx={{ mt: 4 }}>
                Horaires d'ouverture :<br />
                Lundi - Vendredi : 9h00 - 18h00<br />
                Samedi : 10h00 - 17h00<br />
                Dimanche : Fermé
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" gutterBottom className="gradient-text">
                Envoyez-nous un message
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
