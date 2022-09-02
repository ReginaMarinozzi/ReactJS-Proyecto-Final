import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (

    <BrowserRouter>

    <ResponsiveAppBar/>

      <Routes>

      <Route path='/' element={  <ItemListContainer/> }/>
      <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />

      </Routes>


    </BrowserRouter>

  );
}

export default App;
