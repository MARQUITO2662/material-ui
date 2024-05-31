import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProductQuantity = ({ quantity, setQuantity }) => {
  const theme = useTheme();

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        variant="outlined"
        style={{ 
          backgroundColor: 'whitesmoke', 
          color: '#FF7E1B', 
          minWidth: '60px', 
          height: '50px', 
          fontSize: '24px', // Aumenta el tamaño de la fuente
          lineHeight: '1' 
        }} 
        onClick={decrementQuantity}
      >
        -
      </Button>
      <div style={{ margin: '0 20px', color: theme.palette.text.primary, fontSize: '24px' }}>{quantity}</div>
      <Button
        variant="outlined"
        style={{ 
          backgroundColor: 'whitesmoke', 
          color: '#FF7E1B', 
          minWidth: '60px', 
          height: '50px', 
          fontSize: '24px', // Aumenta el tamaño de la fuente
          lineHeight: '1' 
        }} 
        onClick={incrementQuantity}
      >
        +
      </Button>
    </div>
  );
};

export default ProductQuantity;
