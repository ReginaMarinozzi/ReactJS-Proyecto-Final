import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContenedor from './components/ItemListContainer';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      
      <ItemListContenedor usuario="Regina Marinozzi" oferta="Todo por $0,99" />
    </div>
  );
}

export default App;
