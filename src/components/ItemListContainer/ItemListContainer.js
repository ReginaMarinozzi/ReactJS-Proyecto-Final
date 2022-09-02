import { useState, useEffect } from "react";
import getData from "../../helpers/getData";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        getData()
            .then((res) => {
                setProducts(res)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>

    )
};

export default ItemListContainer;
