import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductQuantity from './ProductQuantity';
import productImage from '../images/image-product-1.jpg'; // Importa la imagen del producto

const ProductDetails = ({ onAddToCart }) => {
  const discount = 50;
  const originalPrice = 250.00;
  const discountedPrice = originalPrice * (1 - discount / 100);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    // Llama a la función onAddToCart con la información del producto, incluida la imagen y la cantidad seleccionada
    onAddToCart({ name: 'Fall Limited Edition Sneakers', price: discountedPrice, quantity, image: productImage });
    // Reinicia la cantidad seleccionada después de agregar al carrito
    setQuantity(0);
  };

  return (
    <div>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Sneaker Company
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </Typography>
      <Box mb={2} mt={2}>
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="h5" component="span" fontWeight="bold">
            ${discountedPrice.toFixed(2)}
          </Typography>
          <Box ml={2} px={1} bgcolor="black" color="white" borderRadius="4px" display="inline-block">
            {discount}%
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
          ${originalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={2}>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon style={{ color: 'black' }} />}
          style={{ backgroundColor: '#FFA500', color: 'black', marginLeft: '20px' }}
          onClick={handleAddToCart} // Conecta el botón "Add to Cart" con la función handleAddToCart
        >
          Add to Cart
        </Button>
      </Box>
    </div>
  );
};

export default ProductDetails;
