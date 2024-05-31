// src/components/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, styled, createTheme, ThemeProvider, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '../images/image-avatar.png'; // Importa la imagen del avatar
import CartModal from './CartModal'; // Importa el componente CartModal

// Define los colores según la guía de estilos
const theme = createTheme({
  colors: {
    primary: 'hsl(26, 100%, 55%)',
    paleOrange: 'hsl(25, 100%, 94%)',
    veryDarkBlue: 'hsl(220, 13%, 13%)',
    darkGrayishBlue: 'hsl(219, 9%, 45%)',
    grayishBlue: 'hsl(220, 14%, 75%)',
    lightGrayishBlue: 'hsl(223, 64%, 98%)',
    transparentWhite: 'hsla(0, 0%, 100%, 0.2)', // Fondo más transparente
    black: 'hsl(0, 0%, 0%)',
  },
  typography: {
    fontFamily: 'Kumbh Sans, sans-serif',
    fontSize: 18, // Tamaño de fuente ligeramente más grande
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

// Define un AppBar personalizado con el fondo más transparente y ancho ajustado
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.colors.transparentWhite, // Fondo más transparente
  color: theme.colors.black, // Texto negro
  padding: '0 10%', // Ajusta el relleno horizontal al 10% del ancho
  boxShadow: 'none', // Elimina la sombra
  width: '80%', // Ancho al 80% del contenedor
  margin: '0 auto', // Centra horizontalmente
}));

// Define un Typography personalizado con el tipo de fuente y tamaño de fuente especificados
const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem', // Aumenta el tamaño de la palabra "Sneakers"
  fontWeight: theme.typography.fontWeightBold,
}));

// Define un Button personalizado con un borde inferior naranja al hacer hover
const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.colors.black, // Texto negro
  textTransform: 'none', // Asegura que los botones estén en minúsculas
  '&:hover': {
    borderBottom: `2px solid ${theme.colors.primary}`, // Borde inferior naranja al hacer hover
  },
}));

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <CustomTypography variant="h6" style={{ marginRight: '20px' }}>
              Sneakers
            </CustomTypography>
            <Box display="flex" gap={2}>
              <CustomButton color="inherit">Collection</CustomButton>
              <CustomButton color="inherit">Men</CustomButton>
              <CustomButton color="inherit">Women</CustomButton>
              <CustomButton color="inherit">About</CustomButton>
              <CustomButton color="inherit">Contact</CustomButton>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" style={{ marginRight: '10px' }} onClick={handleCartClick}>
              <ShoppingCartIcon fontSize="large" style={{ color: 'black' }} /> {/* Icono de carrito más grande y en negro */}
            </IconButton>
            <img src={Avatar} alt="Avatar" style={{ width: '50px', borderRadius: '50%' }} /> {/* Muestra el avatar más grande */}
          </Box>
        </Toolbar>
      </CustomAppBar>
      <CartModal open={cartOpen} onClose={handleCartClick} items={cartItems} />
    </ThemeProvider>
  );
};

export default Header;
