import Grid from '@mui/material/Unstable_Grid2'
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            {productos.map((prod) => {
                return <Grid md={4} key={prod.id}>
                    <Item producto={prod} />
                </Grid>
            })}
        </Grid>
    )
}

export default ItemList