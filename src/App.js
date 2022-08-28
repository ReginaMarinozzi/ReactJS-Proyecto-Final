import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      
      <ItemListContainer usuario="Regina Marinozzi" oferta="Todo por $0,99" />

      <ItemCount/>

    </div>
  );
}

export default App;
