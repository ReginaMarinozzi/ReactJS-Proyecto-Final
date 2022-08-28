import './ItemListContainer.scss'; 


const ItemListContainer = ( {usuario = "Regina Marinozzi", oferta = "Todo por $0,99"} ) => {


    return (
        <div className="lista-1">
            <h2>Bienvenido {usuario}</h2>
            <hr/>
            <p>Tenemos los mejores precios! {oferta}</p>
        </div>
    )
}

export default ItemListContainer