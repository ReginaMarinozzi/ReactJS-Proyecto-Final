import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../helpers/getData';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {

        setLoading(true)

        getData()
            .then((res) => {
                setItem( res.find((product) => product.id === Number(itemId)) )
            })
            .catch((err) => {  console.log(err)})
            .finally(() => {
                setLoading(false)
            })


    }, [])

  return (
    <div>
        {loading ?  <h2>Loading...</h2> : <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer