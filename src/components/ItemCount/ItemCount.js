import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";


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
    <div >
      <Container/>
      <Button variant="contained" sx={{ padding: "10px" }} onClick={handleRestar}>-</Button>
      <span className='count-number'>{counter}</span>
      <Button variant="contained" sx={{ padding: "10px" }} onClick={handleSumar}>+</Button>
      <Button variant="contained" >Agregar al carrito</Button>
      <Container />
    </div>
  );
};

export default ItemCount;