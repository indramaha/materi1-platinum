import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DiscoveryPage from './Pages/DiscoveryPage';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/discovery' element={<DiscoveryPage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default App;
