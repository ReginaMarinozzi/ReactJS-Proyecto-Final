import * as React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, CardMedia, Typography, Button, Stack }from '@mui/material'

const Item = ({ producto }) => {
    return (
        <Card pb={2} elevation={5}>
            <CardMedia
                component="img"
                height="auto"
                image={producto.img}
                alt={producto.descripcion}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component='h5'>
                    {producto.nombre}
                </Typography>
                <Stack >
                    <Typography variant="h6" component='p' >Precio $ {producto.precio} </Typography>
                    <Typography variant="h6" component='p' >Marca: {producto.marca} </Typography>
                    {producto.stock > 0
                        ? <Typography variant="h6" component='p'>Stock disponible: {producto.stock} </Typography>
                        : <Typography variant="h6" component='p' color="text.secondary"> No hay stock</Typography>}
                </Stack>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/item/${producto.id}`} variant="outlined">Ver más</Button>
            </CardActions>
        </Card>
    )
}

export default Item