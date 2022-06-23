import './App.css';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className='App'>
      <Navbar title='CATALOGO'/>
      <Catalog />
    </div>
  );
}

export default App;
