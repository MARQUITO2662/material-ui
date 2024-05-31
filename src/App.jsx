import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductImages from './components/ProductImages';
import CartModal from './components/CartModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Abrir el modal cuando se agrega un producto al carrito
    setCartOpen(true);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductImages onAddToCart={handleAddToCart} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductDetails onAddToCart={handleAddToCart} />
          </Grid>
        </Grid>
      </Container>
      <CartModal
        open={cartOpen}
        onClose={handleCloseModal}
        items={cartItems}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;

