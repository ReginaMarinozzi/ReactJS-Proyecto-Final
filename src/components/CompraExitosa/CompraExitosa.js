import React from 'react'
import { Button, Divider, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const CompraExitosa = ({ orderId }) => {

    return (

        <Stack
            m={20}
            height='100vh'
            alignItems="center"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}>
            <Stack>
                <Typography
                    variant="h3"
                    component='h3'
                    p={2}
                >
                    Compra exitosa!
                </Typography>
            </Stack>
            <Stack>
                <Typography
                    variant="body1"
                    component='p'
                    p={2}
                >
                    Tu número de orden es:{orderId}
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    component={Link} to='/'
                >
                    Volver al inicio
                </Button>
            </Stack>
        </Stack>

    )
}

export default CompraExitosa