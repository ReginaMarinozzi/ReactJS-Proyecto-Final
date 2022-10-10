import { Stack } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Home = () => {

  return (

    <Stack>
      <Header />
      <ItemListContainer />
    </Stack>

  )
}

export default Home