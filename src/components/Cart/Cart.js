import { Button, Divider, Typography, ButtonGroup, Stack, Box, Grid } from '@mui/material'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EmptyCart from '../EmptyCart/EmptyCart'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem,
        decreaseQuantityInCart, increaseQuantityInCart } = useCartContext()

    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }

    return (

        <Stack m={15}>

            <Typography
                textAlign='center'
                variant="h2"
                component='h2'
                mb={3}
                p={2}
            >
                Carrito de compras
            </Typography>

            <Divider />

            {cart.map((item) => {
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
                            <ButtonGroup
                                variant="contained"
                                aria-label="outlined primary button group"
                            >
                                <Button
                                    onClick={() => decreaseQuantityInCart(item)}
                                    disabled={item.cantidad === 1}
                                >
                                    -
                                </Button>
                                <Button
                                    variant="outlined"
                                >
                                    {item.cantidad}
                                </Button>
                                <Button
                                    onClick={() => increaseQuantityInCart(item)}
                                >
                                    +
                                </Button>
                                <Button
                                    variant="contained"
                                    size='small'
                                    color='error'
                                    onClick={() => removeItem(item.id)}
                                >
                                    <DeleteIcon />
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>

                    <Divider />

                </Box>
            })}

            <Divider />

            <Stack
                alignItems="flex-end"
                spacing={2}
                mt={1}>
                <Typography variant="h4"
                    component='p'
                >
                    Total ${cartTotal()}
                </Typography>
                <Button variant='contained'
                    color='primary'
                    component={Link} to='/checkout'
                >
                    Terminar mi compra
                </Button>
                <Button variant='contained'
                    color='warning' onClick={emptyCart}
                >
                    Vaciar carrito
                </Button>
            </Stack>

        </Stack>
        
    )
}

export default Cart