import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container } from '@mui/system';



const ItemDetail = ({item}) => {
  return (

    <Container>
       <img src={item.img} alt={item.descripcion}/>
       <h3>{item.nombre}</h3>
       <p>{item.descripcion}</p>
       <p>{item.precio}</p>
       <ItemCount stock={item.stock} />
    </Container>
  )
}

export default ItemDetail