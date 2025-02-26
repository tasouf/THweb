import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.light,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '2px',
    background: theme.palette.secondary.light,
    transition: 'width 300ms ease',
  },
  '&:hover::after': {
    width: '80%',
  },
}));

const Navigation = () => {
  return (
    <GlassAppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <NavButton component={Link} to="/">
            Tiny Houses Corrèze
          </NavButton>
        </Box>
        <NavButton component={Link} to="/catalogue">
          Catalogue
        </NavButton>
        <NavButton component={Link} to="/partenaires">
          Partenaires
        </NavButton>
        <NavButton component={Link} to="/contact">
          Contact
        </NavButton>
      </Toolbar>
    </GlassAppBar>
  );
};

export default Navigation;
