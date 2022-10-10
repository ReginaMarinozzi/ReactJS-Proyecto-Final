import Grid from '@mui/material/Unstable_Grid2'
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {

    return (

        <Grid container spacing={4}>
            {productos.map((prod) => {
                return <Grid md={3} key={prod.id}>
                    <Item producto={prod} />
                </Grid>
            })}
        </Grid>
        
    )
}

export default ItemList