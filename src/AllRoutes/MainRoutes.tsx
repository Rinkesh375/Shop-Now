import React from 'react';
import { Routes,Route } from 'react-router-dom';
import AdminAddProducts from 'src/Pages/AdminAddProducts';
import AdminEditPage from 'src/Pages/AdminEditPage';
import AdminLoginPage from 'src/Pages/AdminLoginPage';
import AdminProductPage from 'src/Pages/AdminProductPage';

const MainRoutes = () => {
  return (
        <Routes>
            <Route path='/admin-login' element={<AdminLoginPage/>} />
            <Route path='/admin-products' element={<AdminProductPage/>} />
            <Route path='/admin-add-product' element={<AdminAddProducts/>}/>
            <Route path='/admin-edit-product/:id' element={<AdminEditPage/>}/>
        </Routes>
  );
}

export default MainRoutes;
