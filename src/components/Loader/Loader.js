import * as React from 'react'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

const Loader = () => {
  return (
    <Stack 
    height='50vh'
    m={15} 
    sx={{  color: 'grey.500' }}
    >
      <LinearProgress color="inherit" />
    </Stack>
  )
}

export default Loader