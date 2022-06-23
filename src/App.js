import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <Navbar title='CATALOGO'/>
      <Product />
    </div>
  );
}

export default App;
