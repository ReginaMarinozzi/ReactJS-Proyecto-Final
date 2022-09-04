import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Item = ({ producto }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, paddingBottom: 2 }} elevation={5}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={producto.img}
                    alt={producto.descripcion}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <span>Precio $ {producto.precio} </span>
                        <span>Marca: {producto.marca} </span>
                        <span>Stock disponible: {producto.stock} </span>      
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center'}}>
                    <Button component={Link} to={`/item/${producto.id}`} variant="outlined">Ver más</Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default Item