import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container } from '@mui/system';



const ItemDetail = ({ item }) => {
  return (

    <Container maxWidth='md' sx={{ marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column', justifyContent: 'center' }} >
      <img src={item.img} alt={item.descripcion} />
      <h3>{item.nombre} </h3>
      <span>{item.descripcion} </span>
      <span>Precio $ {item.precio}</span>
      <ItemCount stock={item.stock} />
    </Container>
  )
}

export default ItemDetail