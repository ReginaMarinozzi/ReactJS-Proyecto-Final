import { Button, Divider, Typography, Box, Stack, Grid } from '@mui/material'
import { useWishlistContext } from '../../context/WishlistContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EmptyWishlist from '../EmptyWishlist/EmptyWishlist'

const Wishlist = () => {

  const { wishlist, removeItemWishList } = useWishlistContext()

  if (wishlist.length === 0) {
    return (
      <EmptyWishlist />
    )
  }

  return (
    <Stack m={15} >
      <Typography
        textAlign='center'
        variant="h2"
        component='h2'
        mb={3}
        p={2}
      >
        Lista de productos deseados
      </Typography>

      <Divider />
      {wishlist.map((item) => {
        return <Box
          key={item.id}
        >
          <Grid container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item
              md={3}
              my={1}
              display='flex'
              justifyContent="center"
              alignItems="center"
            >
              <Box
                maxWidth="60%"
                component='img'
                src={item.img}
                alt={item.name}
              />
            </Grid>
            <Grid item
              md={3}
              display='flex'
              justifyContent="center"
              alignItems="center"
              my={1}
            >
              <Typography
                variant="h5"
                component='h5'
              >
                {item.nombre}
              </Typography>
            </Grid>
            <Grid item
              md={3}
              my={1}
              display='flex'
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h6"
                component='h6'
              >
                Precio $ {item.precio}
              </Typography>
            </Grid>
            <Grid item
              md={3}
              my={1}
              display='flex'
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size='small'
                color='error'
                onClick={() => removeItemWishList(item.id)}>
                <DeleteIcon />
              </Button>

            </Grid>
          </Grid>

          <Divider />

        </Box>
      })}
    </Stack>
  )
}

export default Wishlist