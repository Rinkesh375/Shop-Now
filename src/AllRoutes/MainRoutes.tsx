import React from 'react';
import { Routes,Route } from 'react-router-dom';
import AdminAddProducts from 'src/Pages/AdminAddProducts';
import AdminEditPage from 'src/Pages/AdminEditPage';
import AdminLoginPage from 'src/Pages/AdminLoginPage';
import AdminProductPage from 'src/Pages/AdminProductPage';
import PrivateRoute from 'src/components/PrivateRoute';

const MainRoutes = () => {
  return (
        <Routes>
            <Route path='/admin-login' element={<AdminLoginPage/>} />
            <Route path='/admin-products' element={<PrivateRoute><AdminProductPage/></PrivateRoute>} />
            <Route path='/admin-add-product' element={<PrivateRoute><AdminAddProducts/></PrivateRoute>}/>
            <Route path='/admin-edit-product/:id' element={<PrivateRoute><AdminEditPage/></PrivateRoute>}/>
        </Routes>
  );
}

export default MainRoutes;
