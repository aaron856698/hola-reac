import './App.css';
import David from './componentes/Navbar/Navbar.jsx';
import ItemListContainer from  './componentes/ItemListContainer/ItemListContainer.jsx';
import Carts from './componentes/CartWitget/CartWitget.jsx';



function App() {
  return (
  <>
   < David />
   <ItemListContainer greeting="bienvenido" />
   <Carts />
  
  
  </>
  );
}

export default App;



