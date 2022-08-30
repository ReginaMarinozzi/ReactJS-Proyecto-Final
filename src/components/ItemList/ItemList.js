import './ItemList.scss';
import Item from '../Item/Item';

const ItemList = ({ productos = [] }) => {
    return (
      <div>
            {productos.map((product) => {

                return <Item producto={product} key={product.id} />

            })}
        </div>

    )
}

export default ItemList