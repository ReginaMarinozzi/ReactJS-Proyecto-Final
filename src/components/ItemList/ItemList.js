import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container sx={{ padding: `100px`}}>
            <Grid container my={4} rowSpacing={2} columnSpacing={1} >
                {productos.map((product) => {
                    return <Grid item md={4}>
                    <Item producto={product} key={product.id} />
                   </Grid>              
                })}
            </Grid>
        </Container>
    )
}

export default ItemList