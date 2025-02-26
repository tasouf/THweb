import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

// Lazy loading des pages
const Home = React.lazy(() => import('../pages/Home'));
const Catalogue = React.lazy(() => import('../pages/Catalogue'));
const Partenaires = React.lazy(() => import('../pages/Partenaires'));
const Contact = React.lazy(() => import('../pages/Contact'));

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F4EBE2, #D6DFD3)',
    }}
  >
    <CircularProgress sx={{ color: '#445D48' }} />
  </Box>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
