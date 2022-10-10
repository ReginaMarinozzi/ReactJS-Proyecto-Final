import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Orders from '../Orders/Orders'

const OrderList = ({ ordenes = [] }) => {

    return (

        <Stack
            m={20}
            spacing={3}
        >
            <Typography
                m={2}
                variant='h4'
                component='h6'
                textAlign='center'
            >
                Mis Ordenes
            </Typography>
            {ordenes.map((orden, index) => {
                return <Box
                    key={index}
                >
                    <Orders orden={orden} />
                </Box>
            })}
        </Stack>

    )
}

export default OrderList