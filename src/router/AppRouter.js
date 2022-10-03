import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home'
import RegisterScreen from '../components/RegisterScreen/RegisterScreen'
import ResponsiveAppBar from '../components/NavBar/NavBar'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import OrdersContainer from '../components/OrdersContainer/OrdersContainer'
import Wishlist from '../components/WishList/WishList'
import Checkout from '../components/Checkout/Checkout'
import SearchAppBar from '../components/NavBar/SearchAppBar'

const AppRouter = () => {

    return (
        <BrowserRouter>

            <ResponsiveAppBar />

            <Routes>
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/' element={<Home />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/search' element={<SearchAppBar />} />
                <Route path='*' element={<Navigate to="/login" />} />

                <Route element={<PrivateRoutes />} >
                    
                    <Route path='/ordenes' element={<OrdersContainer />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/checkout' element={<Checkout />} /> 
                
                   </Route>

            </Routes>

        </BrowserRouter >
    )
}

export default AppRouter