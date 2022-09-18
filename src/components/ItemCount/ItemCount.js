import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const ItemCount = ({ max, counter, handleAgregar, setCantidad }) => {

  const handleSumar = () => {
    if (counter < max) {
      setCantidad(counter + 1);
    }

  };

  const handleRestar = () => {
    if (counter > 0) {
      setCantidad(counter - 1);
    }
  };

  return (

    <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}  >
      <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" sx={{ padding: `5x` }} onClick={handleRestar}>-</Button>
        <Box>{counter}</Box>
        <Button variant="contained" sx={{ padding: `5px` }} onClick={handleSumar}>+</Button>
      </Box>
      <Button variant="contained" size='large' disabled={counter === 0} onClick={handleAgregar}
      >Agregar al carrito</Button>
    </Box>

  );
};

export default ItemCount;