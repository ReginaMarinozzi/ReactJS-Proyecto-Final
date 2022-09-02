import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>

    <ResponsiveAppBar/>

      <Routes>

      <Route path='/' element={  <ItemListContainer/> }/>

      </Routes>


    </BrowserRouter>

  );
}

export default App;
