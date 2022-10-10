import React from 'react'
import { CardMedia, Card, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RelatedItems from '../RelatedItems/RelatedItems'

const OutOfStock = ({ item }) => {
  const { addToWishlist, isInWishlist } = useWishlistContext()

  const handleWishlist = () => {
    const itemToWishlist = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img
    }

    addToWishlist(itemToWishlist)
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
            <Stack
              alignItems='center'
            >
              <Typography
                color='#bdbdbd'
                variant="h5"
                component='p'
              >
                Sin Stock
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>

      <RelatedItems categoria={item.categoria} />

    </Stack>


  )
}

export default OutOfStock