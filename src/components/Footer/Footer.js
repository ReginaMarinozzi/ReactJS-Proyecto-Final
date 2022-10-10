import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack p={10} sx={{ bgcolor: '#e1aac1'}}>
      <Typography variant="h4" component='p'>
        FOOTER
      </Typography>
    </Stack>
  )
}

export default Footer