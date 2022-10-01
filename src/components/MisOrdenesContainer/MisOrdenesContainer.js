import React from 'react'
import{ Container } from '@mui/material'
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import MisOrdenes from '../MisOrdenes/MisOrdenes';

const MisOrdenesContainer = () => {
    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)
    const { userId } = useParams()

    useEffect(() => {

        setLoading(true)
        
        const ordenesRef = collection(db, 'ordenes')

        const q = userId
            ? query(ordenesRef, where('comprador.email', '==', userId))
            : ordenesRef

        getDocs(q)
            .then((resp) => {
                const ordenesDB = resp.docs.map((doc) => doc.data())
                setOrdenes(ordenesDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [userId])

  return (
    <Container sx={{ marginTop: 10 }}>
            {loading ? <Loader /> : <MisOrdenes ordenes={ordenes}/>}
        </Container>
  )
}

export default MisOrdenesContainer