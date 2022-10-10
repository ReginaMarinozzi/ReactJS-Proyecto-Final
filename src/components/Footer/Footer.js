import { Stack, Typography, Paper } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {

  return (

    <Paper
      sx={{ position: 'absolut', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Stack
        p={10}
        sx={{ bgcolor: '#e1aac1' }}
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant="h6"
          component='p'
        >
          Encontranos en instagram
        </Typography>
        <InstagramIcon />
      </Stack>
    </Paper>

  )
}

export default Footer