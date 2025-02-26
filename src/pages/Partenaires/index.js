import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NatureIcon from '@mui/icons-material/Nature';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IMAGES } from '../../constants/images';
import RevenueCalculator from '../../components/RevenueCalculator';
import TestimonialCard from '../../components/TestimonialCard';
import FaqAccordion from '../../components/FaqAccordion';
import PartnerContactForm from '../../components/PartnerContactForm';
import PartnershipMap from '../../components/PartnershipMap';
import PartnershipTimeline from '../../components/PartnershipTimeline';
import PartnershipChecklist from '../../components/PartnershipChecklist';

const BenefitCard = ({ icon, title, description }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -8 }}
    elevation={0}
    sx={{
      p: 3,
      height: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        color: 'white',
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const FeatureItem = ({ text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    <CheckCircleOutlineIcon color="primary" />
    <Typography variant="body1">{text}</Typography>
  </Box>
);

const TESTIMONIALS = [
  {
    name: "Jean Dupont",
    location: "Propriétaire à Tulle",
    rating: 5,
    testimonial: "Grâce à ce partenariat, mon terrain inexploité génère maintenant des revenus réguliers. L'équipe est professionnelle et l'impact sur l'environnement est minimal.",
    image: "https://placehold.co/200x200/445D48/ffffff?text=JD"
  },
  {
    name: "Marie Martin",
    location: "Propriétaire à Brive",
    rating: 5,
    testimonial: "Une collaboration parfaite ! L'installation a été rapide et je n'ai aucune gestion à faire. Les tiny houses s'intègrent parfaitement dans le paysage.",
    image: "https://placehold.co/200x200/7A8B69/ffffff?text=MM"
  },
  {
    name: "Pierre Dubois",
    location: "Propriétaire à Uzerche",
    rating: 5,
    testimonial: "Je recommande vivement ce partenariat. L'équipe est à l'écoute et les revenus sont stables. Une belle façon de valoriser mon terrain.",
    image: "https://placehold.co/200x200/A4B494/ffffff?text=PD"
  }
];

const Partenaires = () => {
  return (
    <Box>
      <Box
        sx={{
          py: 12,
          background: `linear-gradient(rgba(68, 93, 72, 0.8), rgba(68, 93, 72, 0.9)), url(${IMAGES.nature[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h1" gutterBottom>
                Devenez Partenaire Terrain
              </Typography>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Valorisez votre terrain en accueillant nos tiny houses pour des séjours de 3 mois
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Un concept unique : accueillez une tiny house sur votre terrain pendant 3 mois et bénéficiez d'une commission de 20% sur chaque nuitée
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Devenir partenaire
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <BenefitCard
              icon={<MonetizationOnIcon fontSize="large" />}
              title="Commission de 20%"
              description="Bénéficiez d'une commission de 20% sur chaque nuitée louée, sans investissement initial de votre part."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BenefitCard
              icon={<AccessTimeIcon fontSize="large" />}
              title="3 mois d'accueil"
              description="Accueillez une tiny house pendant 3 mois maximum, en conformité avec la réglementation."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BenefitCard
              icon={<HandshakeIcon fontSize="large" />}
              title="Gestion simplifiée"
              description="Nous nous occupons de tout : installation, maintenance lourde, réservations et relation client."
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" gutterBottom className="gradient-text">
            Comment ça marche ?
          </Typography>
          <Grid container spacing={6} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Vos engagements
              </Typography>
              <FeatureItem text="Mettre à disposition un terrain stable et accessible" />
              <FeatureItem text="Assurer l'entretien courant et la propreté des abords" />
              <FeatureItem text="Effectuer de petits ajustements si nécessaire" />
              <FeatureItem text="Respecter la durée d'accueil de 3 mois" />
              <FeatureItem text="Veiller à la propreté générale du site" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Nos engagements
              </Typography>
              <FeatureItem text="Livraison et installation sans frais" />
              <FeatureItem text="Maintenance lourde des tiny houses" />
              <FeatureItem text="Gestion complète des réservations" />
              <FeatureItem text="Optimisation de l'occupation" />
              <FeatureItem text="Support et accompagnement continu" />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'bark.main', textAlign: 'center', mb: 4 }}>
            Zones Privilégiées pour nos Tiny Houses
          </Typography>
          <PartnershipMap />
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'bark.main', textAlign: 'center', mb: 4 }}>
            Comment Devenir Partenaire
          </Typography>
          <PartnershipTimeline />
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'bark.main', textAlign: 'center', mb: 4 }}>
            Évaluez le Potentiel de Votre Terrain
          </Typography>
          <PartnershipChecklist />
        </Box>

        <Box sx={{ mt: 12 }}>
          <Typography variant="h3" gutterBottom className="gradient-text" sx={{ textAlign: 'center', mb: 6 }}>
            Estimez vos revenus
          </Typography>
          <RevenueCalculator />
        </Box>

        <Box sx={{ mt: 12 }}>
          <Typography variant="h3" gutterBottom className="gradient-text" sx={{ textAlign: 'center', mb: 6 }}>
            Ils nous font confiance
          </Typography>
          <Grid container spacing={4}>
            {TESTIMONIALS.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TestimonialCard {...testimonial} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 12 }}>
          <Typography variant="h3" gutterBottom className="gradient-text" sx={{ textAlign: 'center', mb: 6 }}>
            Questions fréquentes
          </Typography>
          <FaqAccordion />
        </Box>

        <Box sx={{ mt: 12 }}>
          <Typography variant="h3" gutterBottom className="gradient-text" sx={{ textAlign: 'center', mb: 6 }}>
            Rejoignez-nous
          </Typography>
          <PartnerContactForm />
        </Box>
      </Container>
    </Box>
  );
};

export default Partenaires;
