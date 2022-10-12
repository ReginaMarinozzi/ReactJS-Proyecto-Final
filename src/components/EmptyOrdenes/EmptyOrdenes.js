import React from 'react'
import { Button, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyOrdenes = () => {

    return (

        <Stack
            m={20}
            height='100vh'
            alignItems="center"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}>
            <Typography variant="h2" component='h3' align='center'
            >
                Aún no tienes ordenes
            </Typography>
            <Button
                variant='contained'
                component={Link} to='/'
            >
                Ir a comprar
            </Button>
        </Stack>

    )
}

export default EmptyOrdenes