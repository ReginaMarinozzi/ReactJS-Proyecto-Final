import ItemCount from '../ItemCount/ItemCount';
import { Box } from '@mui/system';
import { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button, CardMedia, Card, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ item, handleAgregar }) => {

  const { addToCart, isInCart } = useCartContext()

  const [cantidad, setCantidad] = useState(0)


  // if (stock === 0) { return ( ItemCount disble)}


  return (

    <Card sx={{ marginTop: 12, marginBottom: 15, padding: 10, display: 'flex', justifyContent: 'center' }} >

      <CardMedia component="img" image={item.img} alt={item.descripcion} sx={{ borderRadius: `10px` }} />

      <Box sx={{ marginTop: 3, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

        <CardContent align="justify">
          <Typography align="center" variant="h4" component='h4' >{item.nombre}</Typography>
          <Typography variant="body1" component='p' align="justify">{item.descripcion}</Typography>
          <Typography variant="h5" component='h5' align="center" sx={{ padding: 2 }}>Precio $ {item.precio}</Typography>
        </CardContent>

        <CardActions>
          {isInCart(item.id)
            ? <Button variant="contained" size='large' color='success' component={Link} to='/cart'>Terminar mi compra</Button>
            : <ItemCount
              max={item.stock}
              counter={cantidad}
              setCantidad={setCantidad}
              handleAgregar={handleAgregar} 
              addToCart={addToCart}
              item={item}
            />
          }
        </CardActions>

      </Box>

    </Card>
  )
}

export default ItemDetail