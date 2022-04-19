import React from 'react';
import './App.css';
import Banner from './Pages/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Banner></Banner>
    </div>
  );
}

export default App;
