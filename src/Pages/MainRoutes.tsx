import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import SingleCard from "../Componants/SingleCard";
import CartPage from "./cartPage";
import CheckoutPage from "./Checkout1";
import Login from "./login";
import SignUp from "./signup";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection"></Route>
        <Route path="/products" element={<Cart />}></Route>
        <Route path={"/products/:id"} element={<SingleCard/>}></Route>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkoutpage" element={<CheckoutPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        
        <Route></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
