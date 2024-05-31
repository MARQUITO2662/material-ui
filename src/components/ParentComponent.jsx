// src/components/ParentComponent.jsx
import React, { useState } from 'react';
import CartModal from './CartModal';

const ParentComponent = () => {
  const [open, setOpen] = useState(false); // Estado para controlar la apertura del modal
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos en el carrito

  // Función para agregar un elemento al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para quitar un elemento del carrito
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={() => setOpen(true)}>Open Cart</button>
      {/* Renderiza el modal y pasa cartItems como prop */}
      <CartModal open={open} onClose={handleClose} items={cartItems} />
    </div>
  );
};

export default ParentComponent;
