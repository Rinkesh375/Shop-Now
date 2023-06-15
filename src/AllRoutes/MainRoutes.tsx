import React from 'react';
import { Routes,Route } from 'react-router-dom';
import AdminLoginPage from 'src/Pages/AdminLoginPage';
import AdminProductPage from 'src/Pages/AdminProductPage';

const MainRoutes = () => {
  return (
        <Routes>
            <Route path='/admin-login' element={<AdminLoginPage/>} />
            <Route path='/admin-products' element={<AdminProductPage/>} />
        </Routes>
  );
}

export default MainRoutes;
