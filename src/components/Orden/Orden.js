import * as React from 'react';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';

const orden = ({ orden }) => {
    return (
        <Card>
            <Box sx={{ marginTop: 3, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>                  
                    <Typography variant="body1" component='p'>
                        Nombre:  {orden.comprador.nombre}
                    </Typography>
                    <Typography variant="body1" component='p'>
                        Email: {orden.comprador.email}
                    </Typography>
                    <Typography variant="body1" component='p'>
                        Teléfono: {orden.comprador.telefono}
                    </Typography>
                    <Typography variant="body1" component='p'>
                        Dirección: {orden.comprador.direccion}
                    </Typography>
                </CardContent>

                {orden.items.map((items, index) => {
                    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 1 }} key={index}>
                        <CardMedia
                            component="img"
                            image={items.img}
                            alt="imagen"
                            sx={{ borderRadius: `10px`, maxWidht: `100px` }}
                        />
                        <Typography variant="body1" component='p'>{items.nombre}</Typography>
                    </Box>
                })}
            </Box>
        </Card>
    )
}

export default orden