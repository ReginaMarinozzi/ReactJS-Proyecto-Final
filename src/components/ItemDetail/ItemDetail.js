import ItemCount from '../ItemCount/ItemCount';
import { Box } from '@mui/system';
import { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ItemDetail = ({ item }) => {

  const { addToCart, isInCart } = useCartContext()

  const [cantidad, setCantidad] = useState(0)

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad
    }

    console.log(itemToCart);
    addToCart(itemToCart)
  }


  return (

    <Box maxWidth='md' sx={{ marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column', justifyContent: 'center' }} >
      <img src={item.img} alt={item.descripcion} />
      <h3>{item.nombre} </h3>
      <span>{item.descripcion} </span>
      <span>Precio $ {item.precio}</span>


      {isInCart(item.id)
        ? <Button variant="contained" component={Link} to='/cart'>Terminar mi compra</Button> 
        : <ItemCount
          max={item.stock}
          counter={cantidad}
          setCantidad={setCantidad}
          handleAgregar={handleAgregar} />
      }
    </Box>
  )
}

export default ItemDetail