import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';

const itemData = [
  {
    img: image1,
    title: 'Image 1',
  },
  {
    img: image2,
    title: 'Image 2',
  },
  {
    img: image3,
    title: 'Image 3',
  },
  {
    img: image4,
    title: 'Image 4',
  },
];

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(itemData[0].img);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setModalIndex(index);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    if (modalIndex < itemData.length - 1) {
      setModalIndex(modalIndex + 1);
      setSelectedImage(itemData[modalIndex + 1].img);
    }
  };

  const handlePrevImage = () => {
    if (modalIndex > 0) {
      setModalIndex(modalIndex - 1);
      setSelectedImage(itemData[modalIndex - 1].img);
    }
  };

  return (
    <Box p={2}>
      <img
        src={selectedImage}
        alt="Selected"
        style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', cursor: 'pointer' }}
        onClick={handleOpenModal}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {itemData.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={`Thumbnail ${index}`}
            style={{
              width: 'calc(25% - 10px)',
              marginBottom: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              filter: selectedImage === item.img ? 'brightness(90%)' : 'none',
              transition: 'filter 0.3s ease',
              boxShadow: selectedImage === item.img ? '0px 0px 10px 3px rgba(255,255,255,0.4)' : 'none',
              border: selectedImage === item.img ? '2px solid hsl(26, 100%, 65%)' : 'none',
              backgroundColor: hoveredIndex === index ? 'white' : 'transparent', // Cambio al pasar el mouse
            }}
            onClick={() => handleThumbnailClick(item.img, index)}
            onMouseEnter={() => setHoveredIndex(index)} // Agregar función al pasar el mouse
            onMouseLeave={() => setHoveredIndex(null)} // Agregar función al quitar el mouse
          />
        ))}
      </div>

      {showModal && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.7)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
        >
          <Box position="relative" width="70%">
            <IconButton
              style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 1 }}
              onClick={handleCloseModal}
            >
              <CloseIcon style={{ color: 'hsl(26, 100%, 65%)', fontSize: '30px' }} />
            </IconButton>
            <IconButton
              style={{
                position: 'absolute',
                top: '50%',
                left: '8px',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '8px',
              }}
              onClick={handlePrevImage}
            >
              <ArrowBackIcon style={{ color: 'black', fontSize: '30px' }} />
            </IconButton>
            <IconButton
              style={{
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '8px',
              }}
              onClick={handleNextImage}
            >
              <ArrowForwardIcon style={{ color: 'hsl(26, 100%, 65%)', fontSize: '30px' }} />
            </IconButton>
            <Box textAlign="center">
              <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '8px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {itemData.map((item, index) => (
                  <img
                    key={index}
                    src={item.img}
                    alt={`Thumbnail ${index}`}
                    style={{
                      width: 'calc(20% - 10px)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      filter: modalIndex === index ? 'brightness(90%)' : 'none',
                      transition: 'filter 0.3s ease',
                      boxShadow: modalIndex === index ? '0px 0px 10px 3px rgba(255,255,255,0.4)' : 'none',
                      border: modalIndex === index ? '2px solid hsl(26, 100%, 65%)' : 'none',
                      backgroundColor: hoveredIndex === index ? 'white' : 'transparent', // Cambio al pasar el mouse
                    }}
                    onClick={() => {
                      setSelectedImage(item.img);
                      setModalIndex(index);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)} // Agregar función al pasar el mouse
                    onMouseLeave={() => setHoveredIndex(null)} // Agregar función al quitar el mouse
                  />
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductImages;

