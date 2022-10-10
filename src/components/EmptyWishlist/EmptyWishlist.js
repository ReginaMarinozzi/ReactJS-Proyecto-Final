import React from 'react'
import { Button, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyWishlist = () => {
    return (
        <Stack
            height='50vh'
            m={15}
            justifyContent="center"
            alignItems="center"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}>
            <Typography
                variant="h2"
                component='h3'
                align='center'
            >
                Tu lista de deseos está vacía
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

export default EmptyWishlist