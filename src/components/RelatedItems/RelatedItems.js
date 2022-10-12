import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Link, useParams } from "react-router-dom"
import { Typography, CardMedia, Grid, Stack, Card, CardActionArea } from "@mui/material"

const RelatedItems = ({ categoria }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoria
            ? query(productosRef, where('categoria', '==', categoria))
            : productosRef

        getDocs(q)
            .then((resp) => {
                let productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                productosDB = productosDB.filter((producto) => {
                    return producto.id !== itemId;
                });
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoria, itemId])

    return (
        <Stack
            mt={10}
        >
            {loading
                ? <Loader />
                : <Stack productos={productos}>
                    <Typography
                        variant="h5"
                        component='h6'
                        align="center"
                        mb={5}
                    >
                        Productos Relacionados
                    </Typography>

                    <Grid container
                        rowSpacing={2}
                        columnSpacing={2}
                    >
                        {productos.map((prod) => {
                            return <Grid item
                                p={2}
                                md={4}
                                key={prod.id}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Card
                                    elevation={5}
                                    sx={{ maxWidth: 200, padding: 2 }}
                                >
                                    <CardActionArea
                                        component={Link}
                                        to={`/item/${prod.id}`}
                                    >
                                        <Typography
                                            variant="h6"
                                            component='p'
                                            align="center"
                                            textTransform='capitalize'
                                            mt={2}
                                        >
                                            {prod.nombre}
                                        </Typography>
                                        <CardMedia

                                            component='img'
                                            image={prod.img}
                                            alt={prod.descripcion}
                                        />
                                    </CardActionArea>
                                </Card>

                            </Grid>
                        })}
                    </Grid>
                </Stack>
            }
        </Stack>
    )
}

export default RelatedItems
