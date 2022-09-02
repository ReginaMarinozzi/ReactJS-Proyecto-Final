import React from 'react';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({item}) => {
  return (

    <Container>
       <img src={item.img}/>
       <h3>{item.nombre}</h3>
       <p>{item.descripcion}</p>
       <p>{item.precio}</p>
       <ItemCount stock={producto.stock} />
    </Container>
  )
}

export default ItemDetail