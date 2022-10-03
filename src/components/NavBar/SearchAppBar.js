import { Box } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { db } from "../../firebase/config";
//import { collection, getDocs, query } from "firebase/firestore";

const SearchAppBar = () => {

  const [data, setData] = useState({}
  )

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)

  }
  let query = useQuery()
  let search = query.get('name')
  console.log('search', search)

  useEffect(() => {
    searchData()
  }, [search])

  const searchData = () => {
    db.child('productos').orderBy('name').equalTo('search').on('value', (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val()
        setData(data)
      }
    })
  }


  return (

    <Box>
      {/* <Typography variant="h5" component='h5'> Búsquedas </Typography>
      <ItemListContainer/> */}
    </Box>

  );
}

export default SearchAppBar