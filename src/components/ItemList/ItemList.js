import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container>
            <Grid container my={4} rowSpacing={2} columnSpacing={1} >
                {productos.map((prod) => {
                    return <Grid item md={4} key={prod.id}>
                        <Item producto={prod} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default ItemList