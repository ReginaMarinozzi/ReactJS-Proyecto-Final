import { useState, useEffect } from "react";
import getData from "../../helpers/getData";
import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);

    // const params = useParams ()


    useEffect(() => {
        getData()
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => { console.log(err) })
            .finally(() => {

            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>

    )
};

export default ItemListContainer;
