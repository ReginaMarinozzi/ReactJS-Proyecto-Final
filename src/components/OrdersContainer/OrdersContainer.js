import React from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import Loader from '../Loader/Loader'
import OrderList from '../OrderList/OrderList'
import { useLoginContext } from '../../context/LoginContext'

const OrdersContainer = () => {

    const [ordenes, setOrdenes] = useState([])

    const [loading, setLoading] = useState(true)

    const { user } = useLoginContext()

    useEffect(() => {
        setLoading(true)

        const ordenesRef = collection(db, 'ordenes')

        const q = user.uid
            ? query(ordenesRef, where('iduser', '==', user.uid))
            : ordenesRef

        getDocs(q)
            .then((resp) => {
                const ordenesDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setOrdenes(ordenesDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [user.uid])

    return (
        <Container>
            {loading ? <Loader /> : <OrderList ordenes={ordenes} />}
        </Container>
    )

}

export default OrdersContainer