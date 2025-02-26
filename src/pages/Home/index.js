import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import NatureIcon from '@mui/icons-material/Nature';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  background: `url(${IMAGES.hero}) center/cover no-repeat`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, rgba(68, 93, 72, 0.8), rgba(92, 111, 76, 0.8))`,
  },
}));

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: 24,
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(44, 24, 16, 0.1)',
}));

const FeatureCard = ({ icon: Icon, title, description, link, buttonText }) => (
  <Card
    component={motion.div}
    whileHover={{ y: -10 }}
    sx={{
      height: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: 3,
      boxShadow: '0 8px 32px rgba(44, 24, 16, 0.1)',
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <Icon sx={{ fontSize: 48, color: 'forest.main', mb: 2 }} />
      <Typography variant="h5" gutterBottom sx={{ color: 'forest.main' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'bark.main', mb: 3 }}>
        {description}
      </Typography>
      <Button
        component={Link}
        to={link}
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          bgcolor: 'forest.main',
          color: 'sand.main',
          '&:hover': {
            bgcolor: 'olive.main',
          }
        }}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Container
          sx={{
            height: '100%',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <GlassCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom className="gradient-text">
              Votre Tiny House en Corrèze
            </Typography>
            <Typography variant="h5" sx={{ color: 'bark.main', mb: 4 }}>
              Créez votre tiny house sur mesure ou devenez partenaire terrain
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                to="/catalogue"
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  bgcolor: 'forest.main',
                  color: 'sand.main',
                  '&:hover': {
                    bgcolor: 'olive.main',
                  }
                }}
              >
                Configurer ma Tiny
              </Button>
              <Button
                component={Link}
                to="/partenaires"
                variant="outlined"
                size="large"
                startIcon={<TerrainIcon />}
                sx={{
                  borderColor: 'forest.main',
                  color: 'forest.main',
                  '&:hover': {
                    borderColor: 'olive.main',
                    color: 'olive.main',
                  }
                }}
              >
                Devenir Partenaire
              </Button>
            </Stack>
          </GlassCard>
        </Container>
      </HeroSection>

      <Box sx={{ py: 8, background: 'linear-gradient(to bottom, #F4EBE2, #D6DFD3)' }}>
        <Container>
          <Typography
            variant="h3"
            className="gradient-text"
            sx={{ textAlign: 'center', mb: 6 }}
          >
            Nos Solutions
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={DesignServicesIcon}
                title="Configurez Votre Tiny House"
                description="Choisissez parmi nos modèles de base et personnalisez chaque détail selon vos besoins. Nos tiny houses allient confort, design et respect de l'environnement."
                link="/catalogue"
                buttonText="Découvrir nos modèles"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureCard
                icon={HandshakeIcon}
                title="Devenez Partenaire Terrain"
                description="Valorisez votre terrain en accueillant nos tiny houses. Bénéficiez d'une commission de 20% sur les locations et d'un accompagnement personnalisé."
                link="/partenaires"
                buttonText="En savoir plus"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', color: 'forest.main', mb: 4 }}
            >
              Pourquoi choisir nos Tiny Houses ?
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <HomeIcon sx={{ fontSize: 48, color: 'forest.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    Design Personnalisable
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'bark.main' }}>
                    3 modèles de base adaptables à vos besoins
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <NatureIcon sx={{ fontSize: 48, color: 'forest.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    Éco-responsable
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'bark.main' }}>
                    Matériaux durables et faible impact environnemental
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <TerrainIcon sx={{ fontSize: 48, color: 'forest.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    Implantation Flexible
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'bark.main' }}>
                    Installation possible sur différents types de terrains
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <HandshakeIcon sx={{ fontSize: 48, color: 'forest.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'forest.main' }}>
                    Accompagnement
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'bark.main' }}>
                    Support personnalisé tout au long du projet
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
