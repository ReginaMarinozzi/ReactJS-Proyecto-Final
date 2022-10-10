import * as React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material'
import { useWishlistContext } from '../../context/WishlistContext'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Item = ({ producto }) => {

    const { addToWishlist, isInWishlist } = useWishlistContext()

    const handleWishlist = () => {
        const itemToWishlist = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img
        }
        addToWishlist(itemToWishlist)
    }

    return (

        <Card
            pb={2}
            elevation={5}
            >
            <CardMedia
                component="img"
                height="auto"
                image={producto.img}
                alt={producto.descripcion}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component='h5'
                    textTransform='capitalize'
                    fontWeight='600'
                    textAlign='center'
                >
                    {producto.nombre}
                </Typography>
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                >
                    <Typography
                        variant="h6"
                        component='p'
                    >
                        Precio $ {producto.precio}
                    </Typography>
                    <Typography
                        variant="h6"
                        component='p'
                    >
                        Marca: {producto.marca}
                    </Typography>
                    {producto.stock > 0
                        ? <Typography
                            variant="h6"
                            component='p'
                        >
                            Stock disponible: {producto.stock}
                        </Typography>
                        : <Typography
                            variant="h6"
                            component='p'
                            color="text.secondary"
                        >
                            Sin Stock
                        </Typography>}
                    {isInWishlist(producto.id)
                        ? <Typography
                            variant="body1"
                            component='p'
                        >
                            Item agregago a wishlist!
                        </Typography>
                        : <FavoriteIcon onClick={handleWishlist} />
                    }
                    <Button
                        component={Link} to={`/item/${producto.id}`}
                        variant="outlined"
                    >
                        Ver más
                    </Button>
                </Stack>
            </CardContent>
        </Card>

    )
}

export default Item