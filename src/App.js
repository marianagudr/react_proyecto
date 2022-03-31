import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenid@, preparate para tener tu casa más linda!" />
    </>
  );
}

export default App;
