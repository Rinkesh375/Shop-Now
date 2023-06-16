import React from 'react';

import './App.css';

import MainRoutes from './AllRoutes/MainRoutes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        {/* <AdminLoginPage /> */}
        <MainRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
