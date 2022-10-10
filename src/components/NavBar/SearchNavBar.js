import * as React from 'react'
import { useState, useEffect } from 'react'
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useLocation } from 'react-router-dom'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import { Typography, Stack } from '@mui/material'

const SearchNavBar = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let search = (useQuery().get('name')).toLowerCase()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const catalogoRef = collection(db, 'productos')
        const q = query(catalogoRef, where('nombre', '==', search))

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [search])

    return (

        <Stack
            m={15}
        >
            {productos.length !== 0
                ? (loading
                    ? <Loader />
                    : <ItemList productos={productos} />
                )
                : (loading
                    ? <Loader />
                    : <Stack
                        alignItems='center'
                        pt={20}
                        height='100vh'
                    >
                        <Typography
                            variant="h5"
                            component='p'
                        >
                            No hay productos que coincidan con tu búsqueda
                        </Typography>
                    </Stack>
                )}
        </Stack>

    )
}

export default SearchNavBar