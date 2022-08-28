import "./ItemCount.scss";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const handleSumar = () => {
    setCounter(counter + 1);
  };

  const handleRestar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="item-count-container">
        <h2> Contador </h2>
      <hr />
      <Button variant="contained" onClick={handleRestar}>-</Button>
      <span className='count-number'>{counter}</span>
      <Button variant="contained" onClick={handleSumar}>+</Button>
     
    </div>
  );
};

export default ItemCount;
