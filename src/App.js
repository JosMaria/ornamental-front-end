import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/catalog'
            element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;