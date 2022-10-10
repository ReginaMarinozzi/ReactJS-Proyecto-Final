import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, CardMedia, Typography, Stack, Card } from '@mui/material'
import { useState } from 'react'
import OutOfStock from '../OutOfStock/OutOfStock'
import RelatedItems from '../RelatedItems/RelatedItems'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteIcon from '@mui/icons-material/Favorite'

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
        elevation={5}
      >
        <Stack
          direction="row"
        >
          <CardMedia
            sx={{ my: 5, ml: 5, maxWidth: 450 }}
            component="img"
            image={item.img}
            alt={item.descripcion}
          />

          <Stack
            justifyContent='center'
            p={5}
          >
            <Typography
              variant="h4"
              component='h4'
              textTransform='capitalize'
              fontWeight='600'
              my={1}
            >
              {item.nombre}
            </Typography>
            <Typography
              variant="body1"
              component='p'
              my={1}
            >
              {item.descripcion}
            </Typography>
            <Typography
              variant="h5"
              component='h5'
              my={1}
            >
              Precio $ {item.precio}
            </Typography>

            {isInWishlist(item.id)
              ? <Typography
                variant="body1"
                component='p'
              >
                Item agregago a wishlist!
              </Typography>
              : <FavoriteIcon onClick={handleWishlist} />
            }
            <Stack>
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
            </Stack>
          </Stack>
        </Stack>
      </Card>

      <RelatedItems categoria={item.categoria} />

    </Stack>
    
  )
}

export default ItemDetail