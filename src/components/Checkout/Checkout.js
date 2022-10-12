import { Button, Typography, Grid, Stack } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import * as React from 'react'
import * as Yup from 'yup'
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import CompraExitosa from "../CompraExitosa/CompraExitosa"
import Swal from 'sweetalert2'
import { useLoginContext } from "../../context/LoginContext"

const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const { user } = useLoginContext()

    const [orderId, setOrderId] = useState(null)

    if (orderId) {
        return (
            <CompraExitosa orderId={orderId} />
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (

        <Formik
            initialValues={{ nombre: '', direccion: '', email: '', telefono: '' }}
            validationSchema={Yup.object({
                nombre: Yup.string()
                    .required('Requerido'),
                direccion: Yup.string()
                    .required('Requerido'),
                telefono: Yup.string()
                    .matches(phoneRegExp, 'Telefono incorrecto')
                    .required('Requerido'),
            })}
            onSubmit={async (values) => {

                const orden = {
                    comprador: values,
                    items: cart,
                    total: cartTotal(),
                    iduser: user.uid
                }

                const batch = writeBatch(db)
                const ordenesRef = collection(db, 'ordenes')
                const productosRef = collection(db, 'productos')
                const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

                const productos = await getDocs(q)

                const outOfStock = []

                productos.docs.forEach(doc => {
                    const itemInCart = cart.find(item => item.id === doc.id)

                    if (doc.data().stock >= itemInCart.cantidad) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemInCart.cantidad
                        })
                    } else {
                        outOfStock.push(itemInCart)
                    }
                })

                if (outOfStock.length === 0) {
                    batch.commit()
                        .then(() => {
                            addDoc(ordenesRef, orden)
                                .then((doc) => {
                                    setOrderId(doc.id)
                                    terminarCompra()
                                })
                        })
                } else {

                    Swal.fire({
                        title: "Hay un problema con tu compra:",
                        text: (`Los siguientes items no están en stock:
                         ${(outOfStock.map((item) => (item.nombre)))}`),
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Aceptar'
                    })
                }

            }}
        >
            {({ submitForm, isSubmitting }) => (

                <Stack
                    m={20}
                    alignItems="center"
                    height='100vh'
                >
                    <Stack
                        mb={4}
                        alignItems="center"
                        spacing={2}
                    >    <Typography
                        variant="h4"
                        component='h5'
                    >
                            Checkout
                        </Typography>
                        <Typography
                            variant="body1"
                            component='p'

                        >
                            Para poder confirmar la compra, ingresa tus datos:
                        </Typography>
                    </Stack>

                    <Form
                    >
                        <Grid container
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item
                                md={6}
                                display='flex'
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Field
                                    fullWidth
                                    component={TextField}
                                    name="nombre"
                                    type="nombre"
                                    label="Nombre"
                                />
                            </Grid>
                            <Grid item
                                md={6}
                                display='flex'
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Field
                                    fullWidth
                                    component={TextField}
                                    name="apellido"
                                    type="apellido"
                                    label="Apellido"
                                />
                            </Grid>
                            <Grid item
                                md={6}
                                display='flex'
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Field
                                    fullWidth
                                    component={TextField}
                                    type="direccion"
                                    name="direccion"
                                    label="Direccion"
                                />
                            </Grid>
                            <Grid item
                                md={6}
                                display='flex'
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Field
                                    fullWidth
                                    component={TextField}
                                    type="telefono"
                                    name="telefono"
                                    label="Telefono"
                                />
                            </Grid>

                        </Grid>

                        <Stack
                        >
                            <Button
                                variant="contained"
                                color="warning"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                sx={{ margin: 3 }}
                                size='small'
                            >
                                Enviar
                            </Button>
                        </Stack>

                    </Form>
                </Stack>
            )}

        </Formik>

    )
}

export default Checkout