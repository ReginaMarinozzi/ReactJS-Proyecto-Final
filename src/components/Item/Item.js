import ItemCount from '../../components/ItemCount/ItemCount';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} elevation={5}>
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
                    <Typography variant="body2" color="text.secondary">
                        <span>spanrecio $ {producto.precio}</span>
                        <span>Marca: {producto.marca}</span>
                        <span>{producto.descripcion}</span>
                        <span>Stock disponible: {producto.stock}</span>      
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/item/${producto.id}`}>Ver más</Link>
                <ItemCount stock={producto.stock} />
                </CardActions>
            </Card>


        </div>
    )
}

export default Item