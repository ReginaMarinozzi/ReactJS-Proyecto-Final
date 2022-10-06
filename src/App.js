import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { WishlistProvider } from './context/WishlistContext';
import AppRouter from './router/AppRouter';

const App = () => {

  return (
    <LoginProvider>
      <WishlistProvider>
        <CartProvider>

          <AppRouter />

        </CartProvider>
      </WishlistProvider>
    </LoginProvider>
  );
}

export default App;
