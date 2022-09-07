import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Header from './components/Header/Header';

function App() {
  return (

    <BrowserRouter>

    <ResponsiveAppBar/>
    <Header/>

      <Routes>

      <Route path='/' element={  <ItemListContainer/> }/>
      <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='*' element={ <Navigate to="/" /> } />
    

      </Routes>


    </BrowserRouter>

  );
}

export default App;
