import * as React from 'react';
import { Stack, Typography, Card, CardContent, CardMedia } from "@mui/material"

const Orders = ({ orden }) => {

  return (

    <Card
      sx={{ padding: 2, borderRadius: 3, marginBottom: 4 }}
      elevation={8}
    >
      <Typography
        variant="h4"
        component='h6'
      >
        Detalles de la orden
      </Typography>
      <CardContent
        sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
      >
        <Typography
          variant="h6"
          component='p'
          m={1}
        >
          Teléfono: {orden.comprador.telefono}
        </Typography>
        <Typography
          variant="h6"
          component='p'
          m={1}
        >
          Dirección: {orden.comprador.direccion}
        </Typography>
        <Typography
          variant="h6"
          component='p'
          m={1}
        >
          Número de orden: {orden.id}
        </Typography>
      </CardContent>

      {orden.items.map((items, index) => {
        return <Stack
          m={2}
          direction='row'
          alignItems='center'
          spacing={2}
          key={index}
        >
          <CardMedia
            component="img"
            image={items.img}
            alt="imagen"
            sx={{ maxWidth: '100px' }}
          />
          <Typography
            textAlign='center'
            variant="h6"
            component='p'
          >
            Precio ${items.precio}
          </Typography>
          <Typography
            textAlign='center'
            variant="h6"
            component='p'
          >
            Artículo: {items.nombre}
          </Typography>
          <Typography
            textAlign='center'
            variant="h6"
            component='p'
          >
            Cantidad: {items.cantidad}
          </Typography>
          <Typography
            textAlign='center'
            variant="h6"
            component='p'
          >
            Total de la orden: ${orden.total}
          </Typography>
        </Stack>
      })}

    </Card >

  )
}

export default Orders