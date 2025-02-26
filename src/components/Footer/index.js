import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterRoot = styled('footer')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${theme.palette.secondary.dark})`,
  color: theme.palette.secondary.light,
  padding: theme.spacing(6, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
    pointerEvents: 'none',
  },
}));

const Footer = () => {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Tiny Houses Corrèze
            </Typography>
            <Typography variant="body2">
              Découvrez nos tiny houses écologiques au cœur de la Corrèze.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: contact@tiny-houses-correze.fr<br />
              Tél: 05.XX.XX.XX.XX
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Liens utiles
            </Typography>
            <Link href="/mentions-legales" color="inherit" display="block">
              Mentions légales
            </Link>
            <Link href="/confidentialite" color="inherit" display="block">
              Politique de confidentialité
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Tiny Houses Corrèze. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
