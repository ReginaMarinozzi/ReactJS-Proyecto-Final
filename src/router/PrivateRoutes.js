import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import OrdersContainer from '../components/OrdersContainer/OrdersContainer';
import WishList from '../components/WishList/WishList'
import Home from '../components/Home/Home'

const PrivateRoutes = () => {

    return (

        <Routes>
                <Route path="/ordenes" element={<OrdersContainer />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

    )
}

export default PrivateRoutes