import { Grid } from "@mui/material"
import Orden from '../Orden/Orden'

const MisOrdenes = ({ ordenes = [] }) => {
    return (
            <Grid container my={4} rowSpacing={2} columnSpacing={1}  >
                {ordenes.map((orden, index) => {
                    return <Grid item md={6} key={index}>
                        <Orden orden={orden} />
                    </Grid>
                })}
            </Grid>
    )
}

export default MisOrdenes