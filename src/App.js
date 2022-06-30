import './App.css';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/catalog'
            element={
              <>
                <Navbar title='CATALOGO' />
                <Catalog />
              </>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
