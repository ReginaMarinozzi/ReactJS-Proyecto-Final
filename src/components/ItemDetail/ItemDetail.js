import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, CardMedia, Card, CardContent, CardActions, Typography, Stack } from '@mui/material'
import { useState } from 'react'
import OutOfStock from '../OutOfStock/OutOfStock'
import RelatedItems from '../RelatedItems/RelatedItems'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ItemDetail = ({ item }) => {

  const { addToCart, isInCart } = useCartContext()
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

    <Stack
     m={15} 
    >
      <Card
      >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.descripcion}
        />

        <CardContent align="justify">
          <Typography
            align="center"
            variant="h4"
            component='h4'
          >
            {item.nombre}
          </Typography>
          <Typography
            variant="body1"
            component='p'
            align="justify"
          >
            {item.descripcion}
          </Typography>
          <Typography
            variant="h5"
            component='h5'
            align="center"
          >
            Precio $ {item.precio}
          </Typography>

          {isInWishlist(item.id)
            ? <Typography
              variant="body1"
              component='p'
              align="justify"
            >
              Este producto ya esta en sus favoritos
            </Typography>
            : <FavoriteBorderIcon onClick={handleWishlist} />
          }
        </CardContent>

        <CardActions>
          {isInCart(item.id)
            ? <Button
              variant="contained"
              size='large'
              color='success'
              component={Link} to='/cart'
            >
              Terminar mi compra
            </Button>
            : <ItemCount
              max={item.stock}
              counter={cantidad}
              setCantidad={setCantidad}
              handleAgregar={handleAgregar}
            />
          }
        </CardActions>

      </Card>

      <RelatedItems categoria={item.categoria} />

    </Stack>
  )
}

export default ItemDetail