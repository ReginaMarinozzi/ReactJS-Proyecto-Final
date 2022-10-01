import LoginScreen from '../components/LoginScreen/LoginScreen'
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home'
import RegisterScreem from '../components/RegisterScreen/RegisterScreen'

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreem />} />
            <Route path='/' element={<Home />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    )
}

export default PublicRoutes