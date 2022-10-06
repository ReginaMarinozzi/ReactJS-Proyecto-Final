import ItemCount from '../ItemCount/ItemCount'
import { Box } from '@mui/system'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, CardMedia, Card, CardContent, CardActions } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import OutOfStock from '../OutOfStock/OutOfStock'
import RelatedItems from '../RelatedItems/RelatedItems'
import { Container } from '@mui/system'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ItemDetail = ({ item }) => {

  const { addToCart, isInCart} = useCartContext()
  const { addToWishlist, isInWishlist } = useWishlistContext()

  const [cantidad, setCantidad] = useState(0)


  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img,
      stock: item.stock,
      cantidad
    }

    addToCart(itemToCart)
  }


  const handleWishlist = () => {
    const itemToWishlist = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img
    }

    addToWishlist(itemToWishlist)
  }


  if (item.stock === 0) {
    return (
      <OutOfStock item={item} />
    )
  }


  return (

    <Container>

      <Card sx={{ marginTop: 12, marginBottom: 15, padding: 10, display: 'flex', justifyContent: 'center' }} >

        <CardMedia component="img" image={item.img} alt={item.descripcion} sx={{ borderRadius: `10px` }} />

        <Box sx={{ marginTop: 3, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <CardContent align="justify">
            <Typography align="center" variant="h4" component='h4' >{item.nombre}</Typography>
            <Typography variant="body1" component='p' align="justify">{item.descripcion}</Typography>
            <Typography variant="h5" component='h5' align="center" sx={{ padding: 2 }}>Precio $ {item.precio}</Typography>
            {isInWishlist(item.id)
              ? <Typography> Este producto ya esta en sus favoritos </Typography>
              : <FavoriteBorderIcon onClick={handleWishlist}/>
            }
          </CardContent>

          
          
          <CardActions>
            {isInCart(item.id)
              ? <Button variant="contained" size='large' color='success' component={Link} to='/cart'>Terminar mi compra</Button>
              : <ItemCount
                max={item.stock}
                counter={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}

              />
            }
          </CardActions>

        </Box>

      </Card>

      <RelatedItems categoria={item.categoria} />
    </Container>
  )
}

export default ItemDetail