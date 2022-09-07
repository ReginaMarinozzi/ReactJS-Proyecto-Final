import { useState } from "react";
import * as React from 'react';
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);

  const handleSumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }

  };

  const handleRestar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (

    <Container sx={{ padding: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}  >
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" onClick={handleRestar}>-</Button>
      <Button>{counter}</Button>
      <Button variant="contained" onClick={handleSumar}>+</Button>
      </ButtonGroup>
      <Button variant="contained" >Agregar al carrito</Button>
    </Container>

  );
};

export default ItemCount;