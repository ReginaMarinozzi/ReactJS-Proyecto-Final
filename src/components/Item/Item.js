import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


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
                    <Typography gutterBottom variant="h5" component='h5'>
                        {producto.nombre}
                    </Typography>
                    <Box >
                        <Typography variant="h6" component='p' >Precio $ {producto.precio} </Typography>
                        <Typography variant="h6" component='p' >Marca: {producto.marca} </Typography>
                        {producto.stock > 0
                            ? <Typography variant="h6" component='p'>Stock disponible: {producto.stock} </Typography>
                            : <Typography variant="h6" component='p' color="text.secondary"> No hay stock</Typography>}

                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button component={Link} to={`/item/${producto.id}`} variant="outlined">Ver más</Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default Item