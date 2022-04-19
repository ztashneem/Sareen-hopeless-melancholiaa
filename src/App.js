import React from 'react';
import './App.css';
import Banner from './Pages/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Verification/Login/Login';
import SignUp from './Pages/Verification/SignUp/SignUp';
import RequireAuth from './Pages/Verification/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        
  
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
     
      </Routes>
    </div>
  );
}

export default App;
