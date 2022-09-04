import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container>
            <Grid container my={4} rowSpacing={2} columnSpacing={1} >
                {productos.map((product) => {
                    return <Grid item md={4} key={product.id}>
                        <Item producto={product} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default ItemList