import React from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';

const SUBJECTS = [
  "Réservation",
  "Information",
  "Partenariat",
  "Autre"
];

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation basique
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }
    
    // Ici, vous ajouterez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    setError('');
  };

  if (submitted) {
    return (
      <Alert 
        severity="success"
        sx={{ 
          p: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(237, 247, 237, 0.9)',
          backdropFilter: 'blur(10px)'
        }}
      >
        Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
      </Alert>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {error && (
        <Alert 
          severity="error"
          sx={{ 
            borderRadius: 2,
            backgroundColor: 'rgba(253, 237, 237, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {error}
        </Alert>
      )}
      
      <TextField
        label="Nom"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />
      
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />
      
      <FormControl fullWidth required>
        <InputLabel>Sujet</InputLabel>
        <Select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          label="Sujet"
        >
          {SUBJECTS.map((subject) => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
        variant="outlined"
      />
      
      <Button
        component={motion.button}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Envoyer
      </Button>
    </Box>
  );
};

export default ContactForm;
