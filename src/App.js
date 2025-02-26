import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { modernTheme } from './theme/modernTheme';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={modernTheme}>
        <CssBaseline />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
