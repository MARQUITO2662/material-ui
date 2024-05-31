import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartModal = ({ open, onClose, items, handleRemoveItem }) => {
  console.log('Items in Cart:', items); // Comprobación para ver los elementos en el carrito

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        p={2}
        bgcolor="white"
        borderRadius="8px"
        mx="auto"
        my={4}
        width="20%"
        style={{
          outline: 'none',
          position: 'relative',
          left: '400px', // Ajuste del margen izquierdo para mover a la derecha
          top: '50px', // Ajuste del margen superior para mover hacia abajo
        }}
      >
        <Box borderBottom="1px solid #e0e0e0" pb={1} mb={2}>
          <Typography variant="h6" gutterBottom>
            Cart
          </Typography>
        </Box>
        {items.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100px">
            <Typography variant="body1">Your cart is empty</Typography>
          </Box>
        ) : (
          items.map((item, index) => (
            <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '4px', marginRight: '10px' }} />
              <Box>
                <Typography variant="body1">{item.name} x {item.quantity}</Typography>
                <Typography variant="body1">${(item.price * item.quantity).toFixed(2)}</Typography>
              </Box>
              <IconButton onClick={() => handleRemoveItem(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
        {items.length > 0 && (
          <Button variant="contained" color="primary" style={{ backgroundColor: '#FFA500', color: 'black' }} fullWidth>
            Checkout
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default CartModal;
