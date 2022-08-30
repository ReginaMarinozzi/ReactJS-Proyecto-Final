import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import getData from "../../helpers/getData";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
            .then((res) => {
                setProducts(res)
            })
    }, [])

    return (
        <div>
            <ItemList productos={products} />
        </div>

    )
};

export default ItemListContainer;
