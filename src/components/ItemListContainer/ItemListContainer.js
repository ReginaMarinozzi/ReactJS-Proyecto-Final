import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Stack } from "@mui/material"
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')

        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            }
            )

    }, [categoryId])

    return (

        <Stack
            m={15}
        >
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </Stack>

    )
}

export default ItemListContainer