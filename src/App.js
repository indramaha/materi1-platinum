import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DiscoveryPage from './Pages/DiscoveryPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './hoc/ProtectedRoute';
import ProtectedRoutes from './hoc/ProtectedRoutes';
import NewCar from './Pages/NewCar';
import EditPage from './Pages/EditPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>

      {/* cara pasang prtectedroute1 start */}
      <Route element={<ProtectedRoute />}>
        <Route path='/discovery' element={<DiscoveryPage />}/>
        <Route path='/addnewcar' element={<NewCar />} />
        <Route path="/edit/:id" element={<EditPage />} /> 
      </Route>
      {/* cara pasang prtectedroute1 finish */}

      {/* cara pasang prtectedroutes2 start */}
      {/* <Route 
        path='/discovery' 
        element={
          <ProtectedRoutes>
            <DiscoveryPage />
          </ProtectedRoutes>
        }>
      </Route> */}
      {/* cara pasang prtectedroutes2 finish */}

      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default App;
