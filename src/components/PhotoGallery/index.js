import React, { useState } from 'react';
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  Paper,
  ImageList,
  ImageListItem
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PhotoGallery = ({ photos, title }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3
        }}
      >
        <ImageList
          sx={{
            width: '100%',
            height: 'auto',
            gap: 8,
          }}
          cols={3}
        >
          {photos.map((photo, index) => (
            <ImageListItem
              key={index}
              component={motion.div}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleOpen(index)}
            >
              <img
                src={photo.url}
                alt={photo.description}
                loading="lazy"
                style={{
                  borderRadius: 8,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            background: 'rgba(0, 0, 0, 0.95)',
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white'
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 16,
              color: 'white'
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              color: 'white'
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '80%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img
                src={photos[selectedIndex].url}
                alt={photos[selectedIndex].description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain'
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  mt: 2,
                  textAlign: 'center'
                }}
              >
                {photos[selectedIndex].description}
              </Typography>
            </motion.div>
          </AnimatePresence>

          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white'
            }}
          >
            {selectedIndex + 1} / {photos.length}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
