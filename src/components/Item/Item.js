import ItemCount from '../../components/ItemCount/ItemCount';
import * as React from 'react';
import Button from '@mui/material/Button';

const Item = ({ producto }) => {
    return (
        <div>

            <img src={producto.img} alt={producto.descripcion} />

            <h4>{producto.nombre}</h4>

            <p>Precio $ {producto.precio}</p>
            <p>Marca: {producto.marca}</p>
            <p>{producto.descripcion}</p>

            <small>Stock disponible: {producto.stock}</small>
            <ItemCount stock={producto.stock} />
            <Button variant="contained">Agregar al carrito</Button>

        </div>
    )
}

export default Item