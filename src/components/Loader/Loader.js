import * as React from 'react'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

const Loader = () => {

  return (

    <Stack 
    mb={100}
    mx={20} 
    sx={{  color: 'grey.500' }}
    >
      <LinearProgress color="inherit" />
    </Stack>
    
  )
}

export default Loader