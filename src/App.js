import React from 'react';
import './App.css';
import Banner from './Pages/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Banner></Banner>
     <Home></Home>
    </div>
  );
}

export default App;
