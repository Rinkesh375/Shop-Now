import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import SingleCard from "../Componants/SingleCard";
import CheckoutPage from "./Checkout1";
import AdminProductPage from "./AdminProductPage";
import AdminLoginPage from "./AdminLoginPage";
import PrivateRoute from "../components/PrivateRoute";
import AdminAddProducts from "./AdminAddProducts";
import AdminEditProduct from "./AdminEditPage";
import Login from "./login";
import SignUp from "./signup";

import PrivateRouter from "../context/PrivateRoute";
import CartPage from "./cartPage";





const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection"></Route>
        <Route path="/products" element={<Cart />}></Route>
        <Route path={"/products/:id"} element={<SingleCard/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/cart" element={<PrivateRouter><CartPage/></PrivateRouter>}></Route>
        <Route path="/checkoutpage" element={<CheckoutPage/>}></Route>
      
       
        
        <Route path='/admin-login' element={<AdminLoginPage/>} />
            <Route path='/admin-products' element={<PrivateRoute><AdminProductPage/></PrivateRoute>} />
            <Route path='/admin-add-product' element={<PrivateRoute><AdminAddProducts/></PrivateRoute>}/>
            <Route path='/admin-edit-product/:id' element={<PrivateRoute><AdminEditProduct/></PrivateRoute>}/>
        
        <Route></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
