import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const ItemCount = ({ max, counter, setCantidad, handleAgregar }) => { 
   


  const handleSumar = () => {
    if (counter < max) {
      setCantidad(counter + 1);
    }

  };

  const handleRestar = () => {
    if (counter > 1) {
      setCantidad(counter - 1);
    }
  };

  return (

    <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}  >
      <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained"  sx={{ padding: `5x`}} onClick={handleRestar}>-</Button>
      <Typography>{counter}</Typography>
      <Button variant="contained"  sx={{ padding: `5px`}}  onClick={handleSumar}>+</Button>
      </Box>
      <Button variant="contained" onClick={handleAgregar}>Agregar al carrito</Button>
    </Box>

  );
};

export default ItemCount;