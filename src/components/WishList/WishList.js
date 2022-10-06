import { Button, Divider, Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import { useWishlistContext } from '../../context/WishlistContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyWishlist from '../EmptyWishlist/EmptyWishlist';


const Wishlist = () => {

  const { wishlist, removeItemWishList } = useWishlistContext()

  if (wishlist.length === 0) {
    return (
      <EmptyWishlist />
    )
  }

  return (
    <Container sx={{ marginTop: 15, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" component='h2' sx={{ padding: 2 }} >
        Lista de productos deseados
      </Typography>

      <Divider />

      {wishlist.map((item) => (
        <Container key={item.id} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: "10%", padding: 2 }} component='img' src={item.img} alt={item.name} />
            <Typography sx={{ padding: 2 }} variant="h5" component='h5' >{item.nombre} </Typography>
            <Typography sx={{ padding: 2 }} variant="h6" component='h6' >Precio $ {item.precio} </Typography>
            <Button sx={{ margin: 1 }} variant="contained" size='small' color='error' onClick={() => removeItemWishList(item.id)}>
              <DeleteIcon />
            </Button>
          </Box>
          <Divider />
        </Container>
      ))}
    </Container>
  )
}

export default Wishlist