import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';

export const modernTheme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${palette.primary.main}, ${palette.primary.dark})`,
          boxShadow: '0 4px 10px rgba(44, 24, 16, 0.1)',
        },
        outlined: {
          borderColor: palette.primary.main,
          '&:hover': {
            borderColor: palette.primary.dark,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(44, 24, 16, 0.1)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 48px rgba(44, 24, 16, 0.15)',
          },
        },
      },
    },
  },
});
