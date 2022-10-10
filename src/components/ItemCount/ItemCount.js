import * as React from 'react'
import { Stack, Box, Button } from '@mui/material'

const ItemCount = ({ max, counter, handleAgregar, setCantidad }) => {

  const handleSumar = () => {
    if (counter < max) {
      setCantidad(counter + 1);
    }
  }

  const handleRestar = () => {
    if (counter > 0) {
      setCantidad(counter - 1);
    }
  }

  return (
    <Stack
      p={2}
      justifyContent='center'
    >
      <Stack
        p={2}
        justifyContent='center'
        direction='row'
        alignItems='center'
      >
        <Button
          variant="contained"
          onClick={handleRestar}
        >
          -
        </Button>
        <Box>
          {counter}
        </Box>
        <Button
          variant="contained"
          onClick={handleSumar}
        >
          +
        </Button>
      </Stack>
      <Button
        variant="contained"
        size='large'
        disabled={counter === 0}
        onClick={handleAgregar}
      >
        Agregar al carrito
      </Button>
    </Stack>
  )
}

export default ItemCount