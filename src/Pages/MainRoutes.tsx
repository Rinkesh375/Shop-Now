import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import SingleCard from "../Componants/SingleCard";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection"></Route>
        <Route path="/products" element={<Cart />}></Route>
        <Route path={"/products/:id"} element={<SingleCard/>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
