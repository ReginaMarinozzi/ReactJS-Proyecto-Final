import React from 'react'
import { CardMedia, Card, CardContent, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
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
    <Stack>
    <Card sx={{ marginTop: 12, marginBottom: 15, padding: 10, display: 'flex', justifyContent: 'center' }} >

      <CardMedia component="img" image={item.img} alt={item.descripcion} sx={{ borderRadius: `10px` }} />

      <Stack sx={{ marginTop: 3, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

        <CardContent align="justify">
          <Typography align="center" variant="h4" component='h4' >{item.nombre}</Typography>
          <Typography variant="body1" component='p' align="justify">{item.descripcion}</Typography>
          <Typography variant="h5" component='h5' align="center" sx={{ padding: 2 }}>Precio $ {item.precio}</Typography>
          {isInWishlist(item.id)
              ? <Typography> Este producto ya esta en sus favoritos </Typography>
              : <FavoriteBorderIcon onClick={handleWishlist}/>
            }
        </CardContent>

        <Stack variant='outline' sx={{ backgroundColor: 'grey' }}>
          <Typography variant="h5" component='h5' >
            Sin Stock
          </Typography>
        </Stack>

      </Stack>

    </Card>
    <RelatedItems categoria={item.categoria} />
    </Stack>

  )
}

export default OutOfStock