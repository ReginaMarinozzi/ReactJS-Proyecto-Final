import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../helpers/getData';
import { Container } from '@mui/system';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        getData()
            .then((res) => {
                setItem(res.find((product) => product.id === Number(itemId)))
            })
            .catch((err) => { console.log(err) })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <Container sx={{ marginTop: 10 }}>
            {loading ? <h2>Loading...</h2> : <ItemDetail item={item} />}
        </Container>


    )
}

export default ItemDetailContainer